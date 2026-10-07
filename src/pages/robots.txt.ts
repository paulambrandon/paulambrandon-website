import type { APIRoute } from 'astro';

/**
 * robots.txt automático.
 *
 * Aplica exactamente la política de /docs/seo/paulambrandon-seo.md §15.6.
 * Los crawlers de búsqueda y recuperación siguen permitidos. Los agentes
 * identificados para entrenamiento o datasets quedan bloqueados por decisión
 * expresa de Paula.
 */
const SEARCH_CRAWLERS = [
  '*',
  'OAI-SearchBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
];

const TRAINING_CRAWLERS = [
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
  'Bytespider',
  'CCBot',
  'Applebot-Extended',
];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Falta `site` en astro.config.mjs: robots.txt lo necesita.');
  }

  const searchRules = SEARCH_CRAWLERS.map(
    (agent) => `User-agent: ${agent}\nAllow: /`
  ).join('\n\n');
  const trainingRules = TRAINING_CRAWLERS.map(
    (agent) => `User-agent: ${agent}\nDisallow: /`
  ).join('\n\n');

  const body = `${searchRules}\n\n${trainingRules}\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
