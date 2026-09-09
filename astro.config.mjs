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
  // en /docs/seo/paulambrandon-seo.md. Al cerrarla, cambiar solo esta línea.
  site: 'https://www.paulambrandon.com',
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
