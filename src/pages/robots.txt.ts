import type { APIRoute } from 'astro';

/**
 * robots.txt automático.
 *
 * Aplica exactamente la política de /docs/seo/paulambrandon-seo.md §15.6.
 * GPTBot y ClaudeBot no aparecen a propósito: la estrategia deja esa decisión
 * (entrenamiento) pendiente y separada de la visibilidad en búsqueda.
 */
const SEARCH_CRAWLERS = [
  '*',
  'OAI-SearchBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Falta `site` en astro.config.mjs: robots.txt lo necesita.');
  }

  const rules = SEARCH_CRAWLERS.map(
    (agent) => `User-agent: ${agent}\nAllow: /`
  ).join('\n\n');

  const body = `${rules}\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
