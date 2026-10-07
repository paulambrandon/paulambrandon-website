import type { APIRoute } from 'astro';

/**
 * Sitemap automático.
 *
 * Las URLs salen de las propias páginas de `src/pages`, así que no hay una
 * segunda lista que mantener: al publicar una página nueva entra sola. El
 * dominio sale únicamente de `Astro.site`.
 */
const pageFiles = Object.keys(import.meta.glob('./**/*.astro'));

/** Rutas que existen como página pero no deben indexarse. */
const EXCLUDED = new Set(['/404']);

const toRoute = (file: string): string =>
  file
    .replace(/^\.\//, '/')
    .replace(/\.astro$/, '')
    .replace(/\/index$/, '/');

/**
 * La política canónica del proyecto no usa barra final, salvo en la raíz.
 * El sitemap debe declarar exactamente la misma forma que los enlaces internos
 * y los canonicals.
 */
const toCanonicalPath = (route: string): string =>
  route === '/' ? route : route.replace(/\/$/, '');

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Falta `site` en astro.config.mjs: el sitemap lo necesita.');
  }

  const routes = pageFiles
    .map(toRoute)
    // Las rutas dinámicas no se pueden enumerar desde aquí.
    .filter((route) => !route.includes('['))
    .filter((route) => !EXCLUDED.has(route))
    .map(toCanonicalPath)
    .sort();

  const urls = routes
    .map((route) => `  <url><loc>${new URL(route, site).href}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
