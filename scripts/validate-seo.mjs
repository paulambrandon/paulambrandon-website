import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import astroConfig from '../astro.config.mjs';

const DIST_DIR = fileURLToPath(new URL('../dist/', import.meta.url));
const SITE_ORIGIN = new URL(astroConfig.site).origin;
const REDIRECTS = new Map(
  Object.entries(astroConfig.redirects ?? {}).map(([source, rule]) => [
    source,
    typeof rule === 'string' ? rule : rule.destination,
  ])
);

const errors = [];
const assert = (condition, message) => {
  if (!condition) errors.push(message);
};

const read = (path) => readFileSync(join(DIST_DIR, path), 'utf8');
const capture = (html, pattern) => html.match(pattern)?.[1]?.trim() ?? '';
const occurrences = (html, pattern) => [...html.matchAll(pattern)].length;
const robotsDirectiveFor = (robots, agent) => {
  const group = robots
    .split(/\n\s*\n/)
    .find((block) => block.split('\n').includes(`User-agent: ${agent}`));

  return group?.match(/^(Allow|Disallow):\s*(\S+)$/m)?.slice(1) ?? [];
};

const walk = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });

const routeFromHtmlPath = (path) => {
  const localPath = relative(DIST_DIR, path);
  if (localPath === 'index.html') return '/';
  if (localPath.endsWith('/index.html')) {
    return `/${localPath.slice(0, -'/index.html'.length)}`;
  }

  return `/${localPath.replace(/\.html$/, '')}`;
};

const hrefsFrom = (html) =>
  [...html.matchAll(/<a\b[^>]*\shref=(?:"([^"]*)"|'([^']*)')[^>]*>/gi)].map(
    ([, doubleQuoted, singleQuoted]) => doubleQuoted ?? singleQuoted
  );

assert(existsSync(DIST_DIR), 'No existe dist/. Ejecuta el build antes de validar SEO.');

if (existsSync(DIST_DIR)) {
  const sitemap = read('sitemap.xml');
  const robots = read('robots.txt');
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    ([, url]) => url
  );

  assert(
    robots.includes(`Sitemap: ${SITE_ORIGIN}/sitemap.xml`),
    'robots.txt no apunta al sitemap canónico.'
  );

  for (const agent of [
    '*',
    'OAI-SearchBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
  ]) {
    const [directive, path] = robotsDirectiveFor(robots, agent);
    assert(
      directive === 'Allow' && path === '/',
      `robots.txt debe permitir ${agent} con Allow: /.`
    );
  }

  for (const agent of [
    'GPTBot',
    'ClaudeBot',
    'Google-Extended',
    'Bytespider',
    'CCBot',
    'Applebot-Extended',
  ]) {
    const [directive, path] = robotsDirectiveFor(robots, agent);
    assert(
      directive === 'Disallow' && path === '/',
      `robots.txt debe bloquear ${agent} con Disallow: /.`
    );
  }

  for (const url of sitemapUrls) {
    const parsed = new URL(url);
    assert(parsed.origin === SITE_ORIGIN, `Origen no canónico en sitemap: ${url}`);
    assert(
      parsed.pathname === '/' || !parsed.pathname.endsWith('/'),
      `Barra final no canónica en sitemap: ${url}`
    );
    assert(!REDIRECTS.has(parsed.pathname), `Redirect incluido en sitemap: ${url}`);
  }

  const htmlFiles = walk(DIST_DIR)
    .filter((path) => path.endsWith('.html'))
    .filter((path) => ![...REDIRECTS.keys()].some((route) => path.endsWith(`${route}/index.html`)));
  const pages = new Map(
    htmlFiles.map((path) => [routeFromHtmlPath(path), readFileSync(path, 'utf8')])
  );
  const linkGraph = new Map();
  const socialImages = new Map();

  for (const path of htmlFiles) {
    const html = readFileSync(path, 'utf8');
    const localPath = relative(DIST_DIR, path);
    const route = routeFromHtmlPath(path);
    const is404 = localPath === '404.html';
    const title = capture(html, /<title>([\s\S]*?)<\/title>/i);
    const description = capture(
      html,
      /<meta\s+name="description"\s+content="([^"]*)"/i
    );
    const canonical = capture(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
    const ogImage = capture(html, /<meta\s+property="og:image"\s+content="([^"]*)"/i);
    const h1Count = occurrences(html, /<h1\b[^>]*>/gi);

    for (const jsonLd of html.matchAll(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
    )) {
      try {
        JSON.parse(jsonLd[1]);
      } catch {
        assert(false, `${localPath}: JSON-LD inválido.`);
      }
    }

    assert(html.includes('<html lang="es">'), `${localPath}: lang debe ser es.`);
    assert(html.includes('<header'), `${localPath}: falta landmark header.`);
    assert(html.includes('<main id="contenido">'), `${localPath}: falta landmark main.`);
    assert(html.includes('<footer'), `${localPath}: falta landmark footer.`);
    assert(
      html.includes('class="skip-link" href="#contenido"'),
      `${localPath}: falta enlace para saltar al contenido.`
    );
    assert(title.length > 0, `${localPath}: falta title.`);
    assert(description.length > 0, `${localPath}: falta meta description.`);
    assert(h1Count === 1, `${localPath}: debe tener exactamente un H1; tiene ${h1Count}.`);
    assert(canonical.startsWith(SITE_ORIGIN), `${localPath}: canonical no absoluto o no canónico.`);
    assert(
      html.includes('property="og:image:alt"'),
      `${localPath}: falta og:image:alt.`
    );
    assert(
      html.includes('property="og:image:type" content="image/jpeg"'),
      `${localPath}: falta el tipo de og:image.`
    );
    assert(
      html.includes('name="twitter:title"') &&
        html.includes('name="twitter:description"') &&
        html.includes('name="twitter:image:alt"'),
      `${localPath}: metadata de Twitter incompleta.`
    );
    assert(
      new URL(canonical).pathname === '/' || !new URL(canonical).pathname.endsWith('/'),
      `${localPath}: canonical con barra final no canónica.`
    );

    if (!is404 && route !== '/') {
      assert(
        html.includes('aria-label="Migas de pan"'),
        `${localPath}: faltan breadcrumbs visibles.`
      );
      assert(
        html.includes('"@type":"BreadcrumbList"'),
        `${localPath}: falta BreadcrumbList.`
      );
    }

    const imageUrl = new URL(ogImage);
    assert(imageUrl.origin === SITE_ORIGIN, `${localPath}: og:image no usa el origen canónico.`);
    if (imageUrl.origin === SITE_ORIGIN) {
      const imagePath = decodeURIComponent(imageUrl.pathname).replace(/^\//, '');
      assert(existsSync(join(DIST_DIR, imagePath)), `${localPath}: og:image no existe en dist/.`);
    }
    socialImages.set(route, ogImage);

    for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
      const tag = image[0];
      assert(/\salt=(?:"[^"]*"|'[^']*')/i.test(tag), `${localPath}: imagen sin alt.`);
      assert(/\swidth="\d+"/i.test(tag), `${localPath}: imagen sin width.`);
      assert(/\sheight="\d+"/i.test(tag), `${localPath}: imagen sin height.`);
      if (/\sfetchpriority="high"/i.test(tag)) {
        assert(!/\sloading="lazy"/i.test(tag), `${localPath}: imagen LCP con lazy loading.`);
      }
    }

    for (const anchor of html.matchAll(/<a\b[^>]*\starget="_blank"[^>]*>/gi)) {
      assert(
        /\srel="[^"]*noopener[^"]*"/i.test(anchor[0]),
        `${localPath}: enlace externo con target="_blank" sin noopener.`
      );
    }

    for (const button of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)) {
      const attributes = button[1];
      const visibleName = button[2].replace(/<[^>]+>/g, '').trim();
      assert(
        visibleName.length > 0 || /\saria-label="[^"]+"/i.test(attributes),
        `${localPath}: botón sin nombre accesible.`
      );
    }

    const labelBlocks = [...html.matchAll(/<label\b[^>]*>[\s\S]*?<\/label>/gi)].map(
      ([block]) => block
    );
    for (const control of html.matchAll(/<(?:input|select|textarea)\b[^>]*\sname="([^"]+)"[^>]*>/gi)) {
      const name = control[1];
      assert(
        labelBlocks.some((label) => label.includes(`name="${name}"`)),
        `${localPath}: el control ${name} no está asociado a un label.`
      );
    }

    const linkedRoutes = new Set();
    for (const href of hrefsFrom(html)) {
      if (/^(?:mailto:|tel:|javascript:)/i.test(href)) continue;

      const destination = new URL(href, `${SITE_ORIGIN}${route}`);
      if (destination.origin !== SITE_ORIGIN) continue;
      if (/\.[a-z0-9]{2,5}$/i.test(destination.pathname)) continue;

      const targetRoute =
        destination.pathname === '/'
          ? '/'
          : destination.pathname.replace(/\/$/, '');

      assert(!REDIRECTS.has(targetRoute), `${localPath}: enlace interno hacia redirect ${targetRoute}.`);
      assert(pages.has(targetRoute), `${localPath}: enlace interno roto hacia ${targetRoute}.`);
      linkedRoutes.add(targetRoute);

      if (destination.hash && pages.has(targetRoute)) {
        const id = decodeURIComponent(destination.hash.slice(1));
        const targetHtml = pages.get(targetRoute);
        assert(
          targetHtml.includes(`id="${id}"`) || targetHtml.includes(`id='${id}'`),
          `${localPath}: ancla rota ${targetRoute}#${id}.`
        );
      }
    }
    linkGraph.set(route, linkedRoutes);

    if (is404) {
      assert(
        html.includes('name="robots" content="noindex, follow"'),
        '404: falta noindex, follow.'
      );
    }
  }

  const sitemapRoutes = sitemapUrls.map((url) => new URL(url).pathname);
  const depths = new Map([['/', 0]]);
  const queue = ['/'];
  while (queue.length > 0) {
    const source = queue.shift();
    const nextDepth = depths.get(source) + 1;
    for (const target of linkGraph.get(source) ?? []) {
      if (!depths.has(target)) {
        depths.set(target, nextDepth);
        queue.push(target);
      }
    }
  }

  for (const route of sitemapRoutes) {
    assert(depths.has(route), `${route}: URL huérfana, no enlazada desde la Home.`);
    assert((depths.get(route) ?? Infinity) <= 3, `${route}: profundidad de clic superior a 3.`);
  }

  const primaryRoutes = [
    '/',
    '/metodo',
    '/programas',
    '/alchemise',
    '/movimiento-nutricion',
    '/sesion-claridad',
    '/sobre-mi',
    '/testimonios',
    '/contacto',
  ];
  const primarySocialImages = primaryRoutes.map((route) => socialImages.get(route));
  assert(
    primarySocialImages.every((url) => url && !url.endsWith('/og/default.jpg')),
    'Las páginas principales deben tener una imagen social específica.'
  );
  assert(
    new Set(primarySocialImages).size === primaryRoutes.length,
    'Las imágenes sociales de las páginas principales deben ser únicas.'
  );

  const vercel = JSON.parse(
    readFileSync(new URL('../vercel.json', import.meta.url), 'utf8')
  );

  assert(vercel.trailingSlash === false, 'Vercel debe retirar la barra final.');

  const globalHeaders = new Map(
    vercel.headers
      ?.find((rule) => rule.source === '/(.*)')
      ?.headers?.map(({ key, value }) => [key.toLowerCase(), value]) ?? []
  );
  const requiredHeaders = new Map([
    ['x-content-type-options', 'nosniff'],
    ['referrer-policy', 'strict-origin-when-cross-origin'],
    ['x-frame-options', 'SAMEORIGIN'],
    ['permissions-policy', 'camera=(), microphone=(), geolocation=()'],
  ]);

  for (const [key, value] of requiredHeaders) {
    assert(globalHeaders.get(key) === value, `Cabecera global ausente o incorrecta: ${key}.`);
  }

  for (const [source, destination] of REDIRECTS) {
    const rule = vercel.redirects?.find((item) => item.source === source);
    assert(rule, `Falta redirect Vercel para ${source}.`);
    assert(rule?.destination === destination, `Destino incorrecto para ${source}.`);
    assert(rule?.statusCode === 301, `${source} debe usar HTTP 301.`);
  }

  const homeHtml = read('index.html');
  const profileHtml = read('sobre-mi/index.html');
  assert(
    homeHtml.includes('"@type":"WebSite"') && homeHtml.includes('"@type":"Person"'),
    'Home debe incluir WebSite y Person schema.'
  );
  assert(
    profileHtml.includes('"@type":"ProfilePage"') &&
      profileHtml.includes('"@type":"Person"'),
    'Sobre mí debe incluir ProfilePage y Person schema.'
  );
}

if (errors.length > 0) {
  console.error(`Validación SEO fallida (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Validación SEO superada.');
