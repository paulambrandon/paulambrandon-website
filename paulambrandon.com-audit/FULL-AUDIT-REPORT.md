# Auditoría SEO integral — Paula Márquez Brandon

Fecha: 7 de octubre de 2026  
Ámbito: repositorio Astro, build estático y comprobaciones de producción  
Dominio canónico confirmado: `https://www.paulambrandon.com`

## Resumen ejecutivo

**SEO Health Score del proyecto: 71/100.** Es una puntuación heurística de preparación, no una métrica interna de Google. La base técnica y on-page es buena; el límite principal no es el framework, sino que todavía no existe la capa de contenido y autoridad necesaria para captar demanda no branded.

**Estado de producción observado: no preparado para la migración.** El 7 de octubre de 2026 la web pública seguía sirviendo las páginas antiguas `/empieza-aqui` y `/mi-historia` con HTTP 200. Además, `www` es el host efectivo, pero `robots.txt` apunta a un sitemap no-`www` y ese sitemap publica URLs no-`www`, que redirigen al host canónico. El repositorio corrige el host en sus archivos generados, pero todavía no está desplegado.

### Puntuación por categoría

| Categoría | Peso | Nota | Diagnóstico |
|---|---:|---:|---|
| SEO técnico | 22 % | 72 | Base estática, canonicals y sitemap correctos en el build; migración HTTP, variantes de URL y producción son el riesgo principal. |
| Calidad de contenido | 23 % | 55 | Copy propio y testimonios valiosos, pero no hay blog/cluster, fuentes, credenciales completas ni política editorial visible. |
| On-page | 20 % | 86 | Titles, descriptions, H1 y enlazado interno bien resueltos; varios titles son largos y las páginas comerciales no cubren intención informacional. |
| Schema | 10 % | 62 | `WebSite` + `Person` y `ProfilePage` presentes; entidad aún pobre y no hay breadcrumbs ni plantillas Article. |
| Rendimiento | 10 % | 82 | HTML estático, poco JS, CSS ligero e imágenes optimizadas; faltan datos CWV reales y queda margen en assets/OG. |
| AI Search Readiness | 10 % | 65 | HTML legible y crawlers de búsqueda permitidos; baja citabilidad y autoridad temática por ausencia de contenido editorial. |
| Imágenes | 5 % | 88 | `width`/`height`, `srcset`, WebP y prioridad LCP correctos; falta variedad de OG y activos multimedia propios. |

### Cinco problemas de mayor impacto

1. **Migración no ejecutada y redirects no garantizados como HTTP 301.** En producción las rutas antiguas siguen con 200. En el build estático de Astro los redirects se convierten en páginas de `meta refresh`; sin adapter o configuración Vercel específica no constituyen un 301 real.
2. **Sitemap/canonical de producción incoherentes.** `www` es el host efectivo y el no-`www` devuelve 308, pero el `robots.txt` público apunta al sitemap no-`www` y este lista todas las URLs no-`www`.
3. **No existe el motor de adquisición no branded.** El proyecto solo contiene páginas de marca y conversión; ninguna de las 30 piezas planificadas en el SEO master está publicada.
4. **E-E-A-T insuficiente para un ámbito YMYL-adjacent.** `/sobre-mi` explica experiencia personal, pero no documenta todavía formación no clínica, alcance profesional, metodología editorial o fuentes.
5. **Entidad y autoridad externa débiles.** En una muestra de búsquedas de marca no apareció el dominio; sí apareció un perfil de LinkedIn con contexto profesional distinto. Instagram es el único `sameAs` confirmado en el código.

### Cinco quick wins

1. Configurar y probar redirects Vercel 301/308 antes del cambio de producción.
2. Desplegar el sitemap/robots del repositorio y solicitar recrawl en Google y Bing.
3. Completar `/sobre-mi` con credenciales reales, alcance y límites profesionales; ampliar `Person` con perfiles oficiales confirmados.
4. Publicar las cuatro primeras piezas de Ola 1 y enlazarlas desde Home, Método y Programas.
5. Activar GSC, Bing Webmaster Tools/AI Performance, analítica de conversiones e IndexNow antes de iniciar el calendario editorial.

## Alcance y método

Se revisaron:

- `docs/seo/paulambrandon-seo.md`, `DESIGN.md`, `PRODUCT.md` y `AGENTS.md`;
- todas las páginas, componentes, datos, layout, configuración y Sass relevante;
- el resultado de `pnpm build` y los HTML/XML/TXT generados en `dist`;
- titles, meta descriptions, canonicals, H1, schema, recuento de texto, imágenes y enlazado interno de todas las rutas;
- respuesta pública del dominio, redirects actuales, `robots.txt` y `sitemap.xml`;
- una muestra actual de SERP de marca y consultas prioritarias;
- documentación primaria de Google, Astro, Vercel, Bing e IndexNow.

No se dispuso de acceso a Google Search Console, GA4, Bing Webmaster Tools, logs CDN, plataforma de backlinks ni datos de ranking. PageSpeed Insights respondió con cuota agotada y el sandbox no permitió levantar el servidor local, por lo que **no hay mediciones de laboratorio o campo de LCP, INP y CLS**. Las notas de rendimiento y visibilidad son, por tanto, evaluaciones de preparación basadas en código y build.

## Inventario indexable del build

El sitemap generado contiene 12 URLs canónicas:

- `/`
- `/alchemise/`
- `/aviso-legal/`
- `/contacto/`
- `/cookies/`
- `/metodo/`
- `/movimiento-nutricion/`
- `/privacidad/`
- `/programas/`
- `/sesion-claridad/`
- `/sobre-mi/`
- `/testimonios/`

Las rutas antiguas y legales alternativas generan páginas de redirect y no entran en el sitemap:

- `/empieza-aqui` → `/programas`
- `/mi-historia` → `/sobre-mi`
- `/politica-privacidad` → `/privacidad`
- `/politica-cookies` → `/cookies`

## SEO técnico

### Lo que funciona

- Astro genera contenido principal estático, completo y rastreable.
- `lang="es"`, viewport, charset, landmarks, skip link y navegación real están presentes.
- El dominio canónico vive en una sola fuente: `astro.config.mjs`.
- Todas las páginas indexables emiten canonical absoluto y autorreferente.
- `sitemap.xml.ts` y `robots.txt.ts` son automáticos y usan `Astro.site`.
- El sitemap no incluye las páginas de redirect.
- Todas las páginas indexables tienen un H1 único.
- No hay títulos o descripciones duplicados en el build.
- El build termina con 0 errores, 0 warnings y 0 hints.
- El host no-`www` de producción redirige al `www` mediante HTTP 308.
- La web funciona sin depender de JavaScript para el contenido.

### Hallazgo crítico: redirects de migración

Astro, en `output: static` sin adapter, genera para los redirects un HTML con:

```html
<meta http-equiv="refresh" content="0;url=/programas">
```

La documentación oficial de Astro confirma que ese modo no soporta códigos de estado. La web pública está en Vercel y no existe `vercel.json`, adapter Vercel ni otro archivo de redirects en el repositorio. Por tanto, los redirects definidos en `astro.config.mjs` no bastan para garantizar el 301 exigido por la estrategia.

**Acción:** definir redirects en Vercel con código 301 o 308, desplegar y probar con `curl -I` sin seguir redirecciones. Mantener una sola fuente o añadir un test que compruebe que la configuración de Astro y la de hosting no divergen.

### Hallazgo crítico: producción aún publica arquitectura antigua

Comprobación del 7 de octubre de 2026:

- `https://www.paulambrandon.com/empieza-aqui` → HTTP 200;
- `https://www.paulambrandon.com/mi-historia` → HTTP 200;
- `https://paulambrandon.com/` → HTTP 308 hacia `https://www.paulambrandon.com/`;
- `https://www.paulambrandon.com/robots.txt` declara `Sitemap: https://paulambrandon.com/sitemap.xml`;
- ese sitemap lista solo URLs no-`www` y todavía incluye las rutas antiguas.

Esto produce una cadena innecesaria y señales contradictorias. El build nuevo resuelve el problema, pero hay que tratar el despliegue como migración SEO, no como simple publicación.

### Variantes con y sin barra final

El build emite canonicals y sitemap con barra final, pero la navegación interna utiliza rutas sin barra. La producción actual responde con 200 tanto a `/mi-historia` como a `/mi-historia/`. Aunque el canonical ayuda a consolidar, la mejor solución es una política de URL uniforme en servidor.

**Acción:** escoger `trailingSlash: 'always'` o `never`, alinear internal links, canonicals y sitemap, y redirigir la variante secundaria en Vercel.

### 404 y control de entornos

No existe `src/pages/404.astro` ni configuración de headers/entornos en el repositorio. Debe probarse que una URL inexistente devuelve 404 real y que previews/staging no son indexables. No asumir que la plataforma lo resuelve.

### Sitemap

La implementación es válida y evita duplicar una lista manual. Mejoras opcionales:

- excluir legales del sitemap si se decide marcarlos `noindex`; no es necesario por crawl budget en un sitio tan pequeño;
- incorporar `lastmod` solo cuando proceda de una fecha real y mantenida;
- añadir futuras entradas de contenido desde una colección tipada, no desde una segunda lista manual.

## On-page SEO

### Metadata y H1

La matriz del SEO master está implementada con mucha fidelidad. La Home usa el H1 definitivo y conserva el eyebrow como texto no-H1. Las páginas tienen descripciones únicas y sus intenciones comerciales son claras.

Titles potencialmente truncados:

| URL | Caracteres |
|---|---:|
| `/alchemise/` | 81 |
| `/programas/` | 78 |
| `/metodo/` | 69 |
| `/sobre-mi/` | 68 |
| `/` | 62 |

Esto no es una penalización, pero puede reducir el control del snippet. Cualquier reducción debe actualizar primero el SEO master, porque es la fuente de verdad. Priorizar la propuesta de valor antes de la marca y validar el CTR en GSC antes de cambiar.

### Contenido por página

- Home: 568 palabras, buen mapa del problema y rutas claras hacia método/programas.
- Método: 656 palabras, diferencia correctamente método general de IMAC.
- Programas: 276 palabras; suficiente como hub de decisión, no como página informacional profunda.
- Alchemise: 848 palabras, explicación concreta, FAQ y límites del servicio.
- Movimiento y nutrición: 735 palabras, intención comercial clara y prueba visual.
- Sesión de claridad: 628 palabras, alcance y modalidad explicados.
- Sobre mí: 344 palabras; buena historia, pero insuficiente como página fuerte de entidad y confianza.
- Testimonios: 584 palabras, experiencia real y resultados sin garantía explícita.
- Contacto: 129 palabras, adecuada para su función.

### Enlazado interno

No hay páginas de negocio huérfanas. Método, Programas, Sobre mí, Testimonios y Contacto reciben enlaces abundantes desde cabecera y pie. Las landings reciben menos enlaces contextuales, de forma coherente con su jerarquía:

- Alchemise: 3 enlaces internos detectados;
- Movimiento y nutrición: 4;
- Sesión de claridad: 3.

Cuando exista el blog, estos destinos deben recibir enlaces desde contenidos cuya intención sea realmente comercial; no convertir cada artículo en una puerta directa a Alchemise.

### Social metadata

Hay OG básico, Twitter card y una imagen 1200 × 630 válida. Oportunidades:

- `og:image:alt`;
- `twitter:title` y `twitter:description` explícitos;
- imágenes OG específicas para Home, Método, Alchemise y artículos;
- revisar previews antes de lanzamiento.

## Contenido, intención y autoridad temática

### Brecha principal

El sitio es hoy un buen destino de marca/conversión, pero no un sistema de descubrimiento. No existe `/blog` ni ninguna de las 30 URLs informacionales definidas. Por eso no puede competir de forma sostenida por:

- autoexigencia en mujeres;
- nunca hago suficiente;
- culpa por descansar;
- límites sin culpa;
- aprobación y miedo a decepcionar;
- relación entre autoexigencia, cuerpo y autocuidado.

La muestra actual de SERP confirma competencia fuerte de psicólogas, clínicas, medios y contenidos recientes. La ventaja defendible no es producir más piezas, sino combinar experiencia propia, lenguaje de clientas, límites profesionales, casos autorizados y una red interna coherente.

### E-E-A-T y YMYL

El proyecto declara que Paula no es psicóloga, terapeuta ni dietista-nutricionista. Ese límite está bien respetado en gran parte del copy y Alchemise incluye una aclaración de alcance. Falta convertirlo en una señal de confianza sistemática:

- formación real y verificable en coaching/mentoría y entrenamiento físico;
- alcance del servicio y qué no ofrece;
- cuándo acudir a atención sanitaria;
- autoría visible en artículos;
- fuentes primarias para afirmaciones sobre salud, conducta o nutrición;
- fecha de publicación y actualización real;
- distinción entre experiencia personal, observación de acompañamiento y evidencia externa.

No se deben usar títulos clínicos ni competir simulando autoridad sanitaria.

### Calidad editorial

La estrategia de 30 piezas es sólida, pero debe ejecutarse por olas y con una puerta de calidad. Publicar 30 artículos genéricos o generados en masa empeoraría el posicionamiento. El primer objetivo debe ser 8 piezas excelentes que formen un cluster real y generen datos en GSC.

## Schema y entidad

### Implementado

- Home: `WebSite` + `Person`.
- Sobre mí: `ProfilePage` con `Person` como `mainEntity`.
- IDs compartidos entre Home y Sobre mí.
- Instagram incluido como `sameAs`.

### Mejoras

1. Enriquecer `Person` únicamente con datos visibles y verificables: `image`, `description`, `sameAs` oficiales, formación/credenciales reales cuando estén publicadas.
2. Hacer que `/sobre-mi` reutilice la entidad Person completa, no una representación mínima distinta.
3. Añadir `BreadcrumbList` a landings, artículos y eventos cuando exista una jerarquía visible.
4. Crear `BlogPosting`/`Article` en la plantilla editorial con autor, URL de autor, imagen, `datePublished` y `dateModified` reales.
5. No añadir `FAQPage` buscando un rich result: el FAQ visible es útil para usuarios, pero Google retiró ese rich result en 2026.
6. No añadir schemas de profesión sanitaria, reseñas agregadas o resultados que no correspondan a hechos visibles.

## Rendimiento y Core Web Vitals

### Fortalezas del build

- HTML estático y solo dos scripts pequeños de interacción en las páginas que los necesitan.
- CSS global de unos 60 KB sin comprimir y aproximadamente 10 KB gzip.
- Fuentes locales con `font-display: swap`; solo se precargan las dos principales.
- Imágenes Astro con dimensiones, `srcset`, `sizes`, WebP y lazy loading bajo el fold.
- LCP de Home y landings principales marcado con `loading="eager"` y `fetchpriority="high"`.
- No hay frameworks de UI, sliders, vídeo autoplay ni librerías de animación.

### Riesgos y mejoras

- No se pudieron medir LCP/INP/CLS; no declarar que cumplen hasta obtener CrUX/PSI o Lighthouse.
- `public/favicon/favicon.svg` pesa unos 292 KB: optimizarlo.
- `public/fonts` incluye familias no usadas (Newsreader y WorkSans). No se descargan por CSS, pero conviene eliminar activos obsoletos si no tienen uso futuro.
- Todas las páginas comparten la misma OG; no afecta CWV, pero limita rendimiento social.
- Validar que la imagen elegida como LCP coincide realmente con el elemento LCP en 390 y 1440 px.

## Imágenes

Todas las imágenes HTML generadas tienen dimensiones. Los retratos y resultados usan fuentes WebP y variantes responsivas. Los alt son descriptivos y los resultados físicos incorporan contexto individual.

Recomendaciones:

- conservar consentimiento documentado para testimonios y antes/después;
- añadir contexto editorial a los casos más importantes y evitar claims causales o garantizados;
- crear imágenes originales para artículos y reutilizar vídeo/transcripciones cuando aporten experiencia;
- usar nombres de archivo descriptivos y OG únicas;
- no añadir imágenes genéricas de stock solo para cumplir una cuota multimedia.

## Accesibilidad con impacto SEO/agentic

La base es buena: landmarks, skip link, menú con `aria-expanded`, labels de formulario, focus CSS y FAQs nativas con `details/summary`. El contenido principal no depende de JS.

Pendiente de prueba manual:

- recorrido completo por teclado en menú móvil y formulario;
- foco al abrir/cerrar menú y cierre al cambiar de página;
- contraste real de terracota/oliva;
- orden de lectura a 390 px;
- nombres accesibles de enlaces repetidos;
- validación con axe/Lighthouse y lector de pantalla.

## Visibilidad en Google y buscadores IA

Google declara que optimizar para sus funciones generativas sigue siendo SEO: indexabilidad, contenido original, experiencia, estructura y utilidad. `llms.txt` no es usado por Google Search y no debe priorizarse.

La web nueva es técnicamente legible por buscadores IA porque entrega HTML completo. El problema es de oferta editorial y autoridad: las páginas comerciales contienen afirmaciones y lenguaje propio, pero no bloques informativos respaldados, definiciones, fuentes o datos originales que un sistema tenga motivos para citar.

### Acceso de crawlers en el build

| Crawler | Capacidad | Estado efectivo |
|---|---|---|
| Googlebot | Google Search, AI Overviews/Mode | Permitido por `*`. |
| OAI-SearchBot | Citabilidad en ChatGPT Search | Permitido explícitamente. |
| Claude-SearchBot | Citabilidad en búsqueda de Claude | Permitido explícitamente. |
| Claude-User | Recuperación solicitada por usuario | Permitido explícitamente. |
| PerplexityBot | Búsqueda/citas en Perplexity | Permitido explícitamente. |
| Bingbot | Bing/Copilot | Permitido por `*`. |
| Applebot | Siri/Spotlight/Safari | Permitido por `*`. |
| GPTBot | Entrenamiento OpenAI | **Permitido por `*`, aunque el comentario dice que la decisión está pendiente.** |
| ClaudeBot | Entrenamiento Anthropic | **Permitido por `*`, aunque la decisión está pendiente.** |
| Google-Extended | Entrenamiento/grounding Gemini/Vertex | Permitido por `*`; no controla Google Search. |
| CCBot | Common Crawl/entrenamiento | Permitido por `*`. |
| Applebot-Extended | Opt-out de entrenamiento Apple | Permitido por `*`; no controla Apple Search. |

La ausencia de una regla específica no significa “sin decisión”: el wildcard permite esos bots. Paula debe decidir la política de entrenamiento antes del lanzamiento; esa decisión es independiente de permitir búsqueda/citación.

### Señales de marca

- Instagram está vinculado y en `sameAs`.
- La muestra de búsqueda de marca no devolvió el dominio, por lo que la indexación/autoridad de marca debe verificarse en GSC y no asumirse.
- Apareció un perfil de LinkedIn con el mismo nombre y una identidad profesional distinta a la propuesta de la web; si es oficial, debe alinearse y enlazarse de forma consciente.
- Un agregador muestra un canal de YouTube `@paulambrandon`; debe verificarse como oficial antes de añadirlo.
- No se encontró presencia clara en Wikipedia o Reddit. No crear ni manipular menciones: Wikipedia solo tendría sentido con notoriedad e independencia suficientes.

## Medición

No hay analítica visible en el código y no había credenciales de Google/Matomo/Bing disponibles en el entorno. Esto no prueba que no existan propiedades externas, pero sí significa que no se pudo auditar tráfico, consultas, indexación, backlinks o conversiones.

Medición mínima de lanzamiento:

- GSC: dominio, sitemap, páginas, consultas, CTR, CWV y control de inclusión en Search generative AI;
- Bing Webmaster Tools: sitemap, IndexNow y AI Performance;
- GA4 o analítica equivalente con consentimiento adecuado;
- eventos: clic WhatsApp, clic reserva, mail preparado, envío/captura de lead, scroll editorial y CTA desde artículo;
- logs/CDN: accesos de Googlebot, OAI-SearchBot, Claude-SearchBot y PerplexityBot;
- dashboard mensual separado: orgánico clásico, marca, no branded, IA y conversión.

## Priorización final

| Prioridad | Trabajo | Resultado esperado |
|---|---|---|
| Crítica | Migración HTTP, host/canonical, sitemap/robots y pruebas postdeploy | Evitar pérdida de señales y duplicados. |
| Crítica | Credenciales, alcance profesional y gobierno editorial | Confianza y protección en ámbito sensible. |
| Muy alta | Publicar Ola 1 con calidad y enlazado | Primeras impresiones no branded y base de citabilidad. |
| Muy alta | GSC, Bing/AI Performance, analítica e IndexNow | Datos para decidir y detectar fallos. |
| Alta | Entidad Person, perfiles oficiales, OG y breadcrumbs | Mejor comprensión de marca y distribución. |
| Alta | PR, podcasts, colaboraciones, YouTube y casos autorizados | Autoridad externa real. |
| Media | Optimizar CTR/titles según datos | Más tráfico sobre impresiones existentes. |
| Baja | `llms.txt`, RSL u otros archivos experimentales | Opcionalidad, sin promesa de ranking. |

## Criterio de éxito

La web estará realmente posicionada cuando ocurra esta secuencia medible:

1. las rutas nuevas se indexan sin duplicados ni cadenas;
2. aparecen impresiones para consultas no branded del cluster principal;
3. varias piezas pasan de posiciones 30–100 a 8–30 y se optimizan con datos;
4. artículos conducen a Método, Programas y recurso/email sin forzar la intención;
5. la marca gana búsquedas, menciones y citas externas coherentes;
6. Google/Bing y buscadores IA citan páginas informacionales concretas;
7. las conversiones orgánicas se atribuyen a consultas, páginas y clusters.

## Fuentes primarias

- Google: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google sobre herramientas SEO: https://developers.google.com/search/docs/fundamentals/third-party-seo
- Astro redirects: https://docs.astro.build/en/reference/configuration-reference/#redirects
- Vercel redirects: https://examples.vercel.com/docs/cli/redirects
- Bing AI Performance: https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/
- IndexNow: https://www.indexnow.org/documentation
- OpenAI crawlers: https://platform.openai.com/docs/bots
- Anthropic crawlers: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity crawlers: https://docs.perplexity.ai/docs/resources/perplexity-crawlers

