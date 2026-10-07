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

  for (const path of htmlFiles) {
    const html = readFileSync(path, 'utf8');
    const localPath = relative(DIST_DIR, path);
    const is404 = localPath === '404.html';
    const title = capture(html, /<title>([\s\S]*?)<\/title>/i);
    const description = capture(
      html,
      /<meta\s+name="description"\s+content="([^"]*)"/i
    );
    const canonical = capture(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
    const h1Count = occurrences(html, /<h1\b[^>]*>/gi);

    assert(title.length > 0, `${localPath}: falta title.`);
    assert(description.length > 0, `${localPath}: falta meta description.`);
    assert(h1Count === 1, `${localPath}: debe tener exactamente un H1; tiene ${h1Count}.`);
    assert(canonical.startsWith(SITE_ORIGIN), `${localPath}: canonical no absoluto o no canónico.`);
    assert(
      html.includes('property="og:image:alt"'),
      `${localPath}: falta og:image:alt.`
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

    if (is404) {
      assert(
        html.includes('name="robots" content="noindex, follow"'),
        '404: falta noindex, follow.'
      );
    }
  }

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
