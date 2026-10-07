# Hallazgos de rendimiento

## Preparación fuerte

- HTML estático y JavaScript mínimo.
- CSS ≈ 60 KB raw / 10 KB gzip.
- Fuentes locales con `swap` y preloads selectivos.
- Imágenes Astro con dimensiones, srcset y lazy/eager apropiado.
- Sin dependencias de UI o animación.

## Pendiente de medir

- LCP, INP y CLS de campo/laboratorio.
- Elemento LCP por plantilla y viewport.
- Accesibilidad automatizada/manual.
- Peso transferido real y cache/CDN del nuevo despliegue.

## Mejoras

- Optimizar `favicon.svg` (≈292 KB).
- Confirmar y retirar fuentes públicas no usadas.
- Crear OG específicas sin cargar assets innecesarios en páginas.

Limitación: PageSpeed API devolvió 429 por cuota y el entorno no permitió abrir un servidor local.

