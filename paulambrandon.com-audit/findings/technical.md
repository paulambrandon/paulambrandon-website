# Hallazgos técnicos

## Críticos

- Producción sigue publicando `/empieza-aqui` y `/mi-historia` con 200.
- El `robots.txt` público apunta a sitemap no-`www` y el sitemap lista URLs no-`www`, aunque ese host redirige a `www`.
- Los redirects Astro del build estático son `meta refresh`, no HTTP 301. Falta configuración de hosting/adapter.

## Altos

- URLs con y sin barra final responden 200 en producción; canonicals/sitemap usan barra, internal links no.
- No se ha probado una 404 real ni la exclusión de previews/staging.
- No hay instrumentación observable para GSC/Bing/analítica/IndexNow en el repositorio.

## Medios

- La política de bots de entrenamiento está efectivamente en `allow`, aunque el comentario dice “pendiente”.
- No hay breadcrumbs.
- Legales están en sitemap; decidir si deben ser indexables.

## Correcto

- Astro estático, HTTPS en producción, HSTS de plataforma.
- Canonicals absolutos en build.
- Sitemap y robots automáticos desde `Astro.site`.
- 0 errores/warnings/hints en build.
- Un H1, metadata única y HTML principal rastreable.

