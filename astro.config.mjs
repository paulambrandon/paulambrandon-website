// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

/** Ruta absoluta a una carpeta de la arquitectura 7-1 de `src/sass`. */
const sassDir = (/** @type {string} */ folder) =>
  fileURLToPath(new URL(`./src/sass/${folder}`, import.meta.url));

// https://astro.build/config
export default defineConfig({
  // Única fuente del dominio canónico: canonical, Open Graph, sitemap y robots
  // derivan de `Astro.site`.
  site: 'https://www.paulambrandon.com',
  // La navegación ya usa URLs sin barra final. Astro y Vercel comparten esta
  // política para no servir dos variantes 200 de cada página.
  trailingSlash: 'never',
  redirects: {
    '/empieza-aqui': '/programas',
    '/mi-historia': '/sobre-mi',
    '/politica-privacidad': '/privacidad',
    '/politica-cookies': '/cookies',
  },
  vite: {
    resolve: {
      alias: {
        '@abstracts': sassDir('abstracts'),
        '@base': sassDir('base'),
        '@components': sassDir('components'),
        '@layout': sassDir('layout'),
        '@pages': sassDir('pages'),
        '@themes': sassDir('themes'),
        '@vendors': sassDir('vendors'),
      },
    },
  },
});
