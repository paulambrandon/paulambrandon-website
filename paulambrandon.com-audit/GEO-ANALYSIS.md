# Análisis GEO / visibilidad en buscadores IA

Fecha: 7 de octubre de 2026

## GEO Readiness Score: 65/100

La nota es heurística y evalúa preparación, no visibilidad real medida. No hubo acceso a DataForSEO, Search Console, Bing Webmaster Tools, logs o una plataforma de tracking de menciones IA.

| Dimensión | Peso | Nota | Motivo |
|---|---:|---:|---|
| Citabilidad | 25 | 15 | Copy claro y propio, pero casi todo es comercial; faltan respuestas informativas, fuentes y datos originales. |
| Legibilidad estructural | 20 | 18 | HTML estático, headings, listas, FAQs y párrafos bien estructurados. |
| Contenido multimodal | 15 | 7 | Fotografía y resultados reales, pero no hay vídeo, transcripciones, diagramas o activos editoriales. |
| Autoridad y marca | 20 | 7 | Person schema e Instagram; faltan credenciales, perfiles alineados, menciones y una huella editorial sólida. |
| Accesibilidad técnica | 20 | 18 | HTML visible sin JS y crawlers de búsqueda permitidos; falta validar producción, logs y políticas de entrenamiento. |

## Preparación por plataforma

No se asignan puntuaciones numéricas por plataforma porque no se midieron citas reales.

### Google AI Overviews y AI Mode

Preparación técnica: buena una vez desplegado el proyecto. Googlebot está permitido, el contenido es estático y las páginas pueden indexarse con snippet. La preparación editorial es baja porque no existen las páginas informacionales que responderían a consultas de descubrimiento.

Prioridad: migración limpia, GSC, contenido no commodity, experiencia original y control “Search generative AI” incluido en Search Console.

### ChatGPT Search

OAI-SearchBot está permitido explícitamente. El contenido puede ser recuperado como HTML. No hay evidencia de menciones/citas actuales ni suficientes páginas informacionales para competir.

Prioridad: publicar el cluster, consolidar entidad y monitorizar referrals `utm_source=chatgpt.com`/referrer cuando estén disponibles.

### Claude

Claude-SearchBot y Claude-User están permitidos. ClaudeBot, que corresponde a entrenamiento, también queda permitido de forma implícita por el wildcard. La decisión de búsqueda es correcta; la de entrenamiento está sin gobernar.

### Perplexity

PerplexityBot está permitido. La posibilidad de cita dependerá más de indexación, autoridad, contenido informativo y menciones externas que de cambios técnicos adicionales.

### Bing/Copilot

Bingbot está permitido por wildcard. Falta Bing Webmaster Tools, AI Performance e IndexNow. Estas tres acciones ofrecen la medición y frescura más directamente operables para la capa IA.

## Estado de acceso por crawler

### Búsqueda/citabilidad

| User-agent | Capacidad | Estado del build |
|---|---|---|
| `Googlebot` | Google Search + funciones generativas | Permitido por `*` |
| `OAI-SearchBot` | ChatGPT Search | Permitido explícitamente |
| `Claude-SearchBot` | Búsqueda de Claude | Permitido explícitamente |
| `Claude-User` | Fetch solicitado por usuario | Permitido explícitamente |
| `PerplexityBot` | Perplexity Search | Permitido explícitamente |
| `Bingbot` | Bing/Copilot | Permitido por `*` |
| `Applebot` | Siri/Spotlight/Safari | Permitido por `*` |

### Entrenamiento/licencia

| User-agent | Capacidad | Estado efectivo |
|---|---|---|
| `GPTBot` | entrenamiento OpenAI | Permitido por `*` |
| `ClaudeBot` | entrenamiento Anthropic | Permitido por `*` |
| `Google-Extended` | entrenamiento/grounding Gemini/Vertex | Permitido por `*` |
| `CCBot` | Common Crawl | Permitido por `*` |
| `Applebot-Extended` | señal de uso para entrenamiento Apple | Permitido por `*` |

No usar el estado de estos bots de entrenamiento para afirmar nada sobre citabilidad en Search.

## Estado de llms.txt

`/llms.txt` no existe. **No es una carencia de ranking.** Google declara expresamente que no lo usa y ningún gran buscador IA ha confirmado que lo utilice como señal de citación.

Decisión recomendada: no priorizarlo. Puede añadirse más adelante como archivo opcional de bajo coste para sistemas no Google, solo después de completar migración, contenido, autoridad, schema y medición.

## Señales de marca

### Confirmadas

- web y marca `Paula Márquez Brandon`;
- Instagram `@paulambrandon`, enlazado y en schema;
- testimonios y experiencias propias dentro del sitio.

### Por confirmar o reforzar

- LinkedIn: aparece un perfil del mismo nombre con contexto profesional no alineado con la propuesta web. Confirmar si es el perfil oficial y decidir cómo presentar ambas facetas sin confundir entidad;
- YouTube: una fuente agregadora muestra `@paulambrandon`; confirmar propiedad y URL oficial;
- Reddit: no se detectaron menciones claras de marca en la muestra;
- Wikipedia/Wikidata: no se detectó entidad. No crearla salvo que exista notoriedad demostrable y fuentes independientes;
- podcasts, medios y colaboraciones: no están documentados en `/sobre-mi` ni en schema.

## Citabilidad por pasajes

### Lo que ya ayuda

- frases claras y memorables en Home/Método;
- secciones autocontenidas con H2/H3;
- listas de síntomas y comparaciones antes/después;
- FAQ nativa en landings;
- lenguaje de clientas y casos reales.

### Lo que falta

- respuestas directas a preguntas informacionales;
- definiciones propias y delimitadas;
- fuentes primarias junto a afirmaciones objetivas;
- fecha y autoría editorial;
- datos, patrones o metodología originales;
- contexto suficiente para que una cita no parezca una afirmación clínica;
- activos informativos fuera de las páginas de venta.

## SSR / dependencia de JavaScript

El sitio se genera como HTML estático. El contenido principal, navegación, FAQs, precios y testimonios existen en el HTML. JavaScript solo controla el menú y la preparación de email. Es una fortaleza importante para crawlers y agentes.

## Cinco cambios de mayor impacto

1. Publicar el cluster inicial de ocho piezas con experiencia, autoría, fuentes y enlazado.
2. Completar la entidad Person y la página `/sobre-mi` con credenciales/alcance reales.
3. Ejecutar la migración sin contradicciones de host, sitemap o redirects.
4. Activar Bing AI Performance, GSC generative AI, IndexNow y medición de referrals/logs.
5. Construir autoridad externa auténtica con YouTube, podcasts, colaboraciones y un activo de datos/experiencia original.

## Recomendaciones de schema

- Reutilizar una entidad `Person` completa entre Home, Sobre mí y artículos.
- `BlogPosting` en cada artículo con autor real, URL, imagen y fechas reales.
- `BreadcrumbList` en artículos, eventos y landings con jerarquía visible.
- `Event` solo en eventos reales con URL dedicada.
- No añadir markup “AI-specific”, FAQPage por ranking, profesiones sanitarias o review schema no elegible.

## Sugerencias de reformateo editorial

No reescribir el copy comercial aprobado “para IA”. Aplicar estas reglas a artículos nuevos:

- abrir una consulta con una respuesta clara en 40–100 palabras;
- separar “qué es”, “cómo se manifiesta”, “por qué puede aparecer”, “qué observar” y “cuándo pedir ayuda”;
- utilizar preguntas reales como H2 cuando reflejen intención humana;
- diferenciar explícitamente “mi experiencia”, “lo que observo en acompañamientos” y “lo que indica la fuente X”;
- incluir un bloque autocontenido que resuma la perspectiva de Paula;
- usar tablas solo para comparaciones reales, no para decorar;
- mantener párrafos breves y ejemplos concretos;
- terminar con siguiente paso editorial y CTA comercial suave.

## Lo que no se recomienda

- publicar contenido masivo generado por IA;
- crear una página por cada variante de keyword;
- perseguir menciones falsas en foros;
- añadir `llms.txt` como supuesto requisito de Google;
- abusar de schema;
- transformar todo artículo en una landing de Alchemise;
- usar autoridad clínica que Paula no posee;
- cambiar fechas sin actualización sustancial.

## Fuentes

- Google AI optimization guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- OpenAI crawlers: https://platform.openai.com/docs/bots
- Anthropic crawlers: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity crawlers: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- Bing AI Performance: https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/

