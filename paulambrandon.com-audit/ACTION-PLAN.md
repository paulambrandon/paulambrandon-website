# Plan de posicionamiento completo

Fecha base: 7 de octubre de 2026  
Objetivo: construir demanda orgánica no branded, autoridad de entidad y citabilidad en Google, Bing, ChatGPT, Claude y Perplexity sin salir del ámbito profesional real de Paula.

## Principio rector

El posicionamiento no se ganará con archivos especiales para IA ni con volumen de artículos. Se ganará con una migración limpia, un cluster editorial muy especializado, experiencia de primera mano, límites profesionales claros, evidencia verificable, entidad consistente y medición continua.

Territorio: **mujeres + autoexigencia + sensación de insuficiencia + culpa + aprobación + límites + autocuidado**.

No competir frontalmente por “autoestima”, “desarrollo personal” o claims clínicos. No crear `/metodo-imac`: IMAC pertenece a Alchemise.

## Fase 0 — Bloqueos de lanzamiento (antes de publicar)

### 0.1 Migración y URLs

Responsable: desarrollo/hosting. Esfuerzo: 1–2 días. Impacto: crítico.

- Configurar redirects Vercel de servidor:
  - `/empieza-aqui` y `/empieza-aqui/` → `/programas/`;
  - `/mi-historia` y `/mi-historia/` → `/sobre-mi/`;
  - `/politica-privacidad` → `/privacidad/`;
  - `/politica-cookies` → `/cookies/`.
- Usar 301 si se requiere exactamente el plan de migración; 308 también es permanente, pero documentar la elección.
- Mantener `/alchemise/` sin cambio.
- No publicar `/metodo-imac`.
- Elegir política de barra final y aplicarla a servidor, links, canonical y sitemap.
- Confirmar `https://paulambrandon.com/*` → `https://www.paulambrandon.com/*` en un salto permanente.

Pruebas de aceptación:

```text
GET /empieza-aqui          301/308 -> /programas/
GET /mi-historia           301/308 -> /sobre-mi/
GET /alchemise/            200
GET /url-inexistente       404
GET http://...             301/308 -> https://www...
GET https://paulambrandon  301/308 -> https://www...
```

No cerrar la migración hasta probar cabeceras reales en producción.

### 0.2 Rastreo e indexación

Responsable: desarrollo + SEO. Esfuerzo: medio día. Impacto: crítico.

- Desplegar `robots.txt` y sitemap generados desde `Astro.site`.
- Comprobar que sitemap y canonicals usan exclusivamente `www` y la misma política de barra.
- Validar que redirects y páginas `noindex` no aparecen en el sitemap.
- Crear y probar una página 404 real.
- Bloquear previews/staging mediante acceso o `noindex`, nunca mediante un robots que impida ver el `noindex`.
- Inspeccionar Home, Método, Programas, Sobre mí y cada landing en GSC tras el despliegue.

### 0.3 Decisión sobre bots de entrenamiento

Responsable: Paula. Esfuerzo: 30 minutos. Impacto: gobierno, no ranking.

La política actual permite por wildcard GPTBot, ClaudeBot, Google-Extended, CCBot y Applebot-Extended. Elegir conscientemente:

- mantenerlos permitidos; o
- bloquear entrenamiento sin bloquear OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot, Bingbot y Applebot.

Documentar la decisión en el SEO master y reflejarla en `robots.txt.ts`.

### 0.4 Confianza y alcance profesional

Responsable: Paula + redacción. Esfuerzo: 1–2 días. Impacto: crítico.

Recopilar y publicar solo datos reales:

- formación no clínica;
- certificaciones de entrenamiento físico;
- experiencia relevante;
- descripción exacta de coaching/mentoría;
- servicios ofrecidos y no ofrecidos;
- cuándo derivar a profesionales sanitarios;
- proceso de creación y revisión de contenido sensible.

Actualizar `/sobre-mi`, las landings y la futura caja de autora. No presentar a Paula como psicóloga, terapeuta o dietista-nutricionista.

## Fase 1 — Instrumentación y calidad técnica (semana 1)

### 1.1 Herramientas

- Verificar propiedad de dominio en Google Search Console.
- Enviar `https://www.paulambrandon.com/sitemap.xml`.
- Activar Bing Webmaster Tools y AI Performance.
- Implementar IndexNow en el pipeline de publicación cuando exista el blog.
- Configurar GA4 o alternativa con eventos y consentimiento coherente con la política de cookies.
- Conservar logs/CDN durante al menos 30–90 días para auditar crawlers.

### 1.2 Eventos de conversión

Convenciones mínimas:

| Evento | Parámetros |
|---|---|
| `whatsapp_click` | página, bloque, programa |
| `booking_click` | programa, página |
| `email_prepare` | asunto, página |
| `program_view` | programa, origen |
| `article_cta_click` | artículo, CTA, destino |
| `lead_submit` | recurso, origen, sin PII en analítica |

### 1.3 Schema y entidad

- Crear una única función/dato `Person` reutilizado por Home y Sobre mí.
- Incluir foto, descripción y `sameAs` solo de perfiles oficiales confirmados.
- Añadir LinkedIn/YouTube si Paula confirma que son perfiles de marca y los alinea.
- Incorporar breadcrumbs visibles + `BreadcrumbList` en landings y artículos.
- Preparar `BlogPosting` en la plantilla de contenidos.
- Validar en Rich Results Test y Schema Markup Validator.

### 1.4 Snippets sociales y assets

- Crear OG específicas para Home, Método, Programas y cada oferta.
- Definir OG automática para artículos usando título + imagen editorial.
- Añadir `og:image:alt`, Twitter title y description.
- Reducir el SVG de favicon de 292 KB.
- Eliminar fuentes públicas obsoletas solo después de confirmar que no se usan.

### 1.5 Baseline de rendimiento

Medir 390, 768, 1024 y 1440 px:

- Lighthouse mobile/desktop;
- PSI y CrUX cuando haya datos;
- LCP real, INP y CLS;
- tamaño transferido por plantilla;
- elemento LCP por página;
- contraste y axe.

Objetivos: LCP ≤ 2,5 s, INP < 200 ms, CLS < 0,1 en percentil 75.

## Fase 2 — Infraestructura editorial (semanas 1–2)

### Arquitectura

- Crear `/blog` solo cuando haya contenido real para publicar.
- Usar Astro Content Collections con frontmatter tipado.
- No crear categorías indexables hasta que cada una tenga masa crítica.
- Reservar `/recursos` hasta disponer de un lead magnet real.

Campos mínimos por artículo:

```text
title
description
slug
publishedAt
updatedAt (solo cambios sustanciales)
author
heroImage
heroAlt
primaryIntent
cluster
sources
relatedArticles
businessCta
draft
```

### Plantilla editorial

Cada artículo debe incluir:

1. respuesta directa y humana al inicio cuando la consulta sea pregunta;
2. experiencia o perspectiva específica de Paula;
3. explicación del patrón sin lenguaje clínico impropio;
4. ejemplos o casos anonimizados/autorizados;
5. fuentes primarias en afirmaciones objetivas;
6. límites y derivación cuando el tema se acerque a salud;
7. autora, bio, fecha y revisión;
8. 2–5 enlaces contextuales dentro del cluster;
9. enlace de profundidad a `/metodo/` o recurso;
10. CTA comercial suave coherente con la intención.

No escribir para una longitud objetivo ni fragmentar artificialmente “para IA”. La claridad ayuda a personas y también a sistemas de búsqueda.

## Fase 3 — Ola editorial de autoridad (semanas 2–8)

Publicar 1 pieza principal por semana y una pieza de apoyo solo cuando se pueda mantener calidad. Orden recomendado:

### Sprint A — cuatro piezas fundacionales

1. `/blog/autoexigencia-en-mujeres/`
2. `/blog/nunca-hago-suficiente/`
3. `/blog/culpa-por-descansar/`
4. `/blog/autoexigencia-vs-disciplina/`

Objetivo: establecer el territorio y enlazar Home → pilar → long-tail → Método.

### Sprint B — completar el cluster núcleo

5. `/blog/sentir-que-no-soy-suficiente/`
6. `/blog/perfeccionismo-y-autoexigencia/`
7. `/blog/ciclo-todo-o-nada/`
8. `/blog/necesito-demostrar-que-valgo/`

Objetivo: cubrir síntomas distintos sin canibalizar. Cada URL debe tener una intención y una promesa editorial distintas.

### Criterio para pasar a Ola 2

No publicar otros ocho artículos por calendario. Pasar a descanso/límites cuando:

- las primeras URLs estén indexadas;
- exista enlazado interno completo;
- GSC muestre primeras consultas o se haya esperado un periodo razonable de descubrimiento;
- se hayan resuelto errores de snippet/indexación;
- Paula pueda aportar experiencia y revisión real.

### Ola 2 — descanso, límites y aprobación

Prioridad inicial:

1. cómo descansar sin culpa;
2. valor personal y productividad;
3. me cuesta parar;
4. poner límites sin culpa;
5. miedo a decepcionar;
6. necesidad de aprobación;
7. priorizarme sin culpa.

“Poner límites sin culpa” tiene una SERP especialmente competitiva y sanitaria. No debe ser la primera batalla de un dominio con poca autoridad; publicar cuando el cluster núcleo y la página de autora estén consolidados.

### Ola 3 — cuerpo y autocuidado

Activar después de documentar la formación de entrenamiento y la política de fuentes. Enlazar selectivamente a `/movimiento-nutricion/`.

### Ola 4 — marca, método y casos

- IMAC dentro de Alchemise;
- casos autorizados con contexto;
- perspectiva propia sobre mejorar para demostrar valor;
- contenido derivado de vídeos, talleres y preguntas reales.

## Fase 4 — Conversión orgánica (meses 2–3)

La estrategia actual carece del puente para tráfico frío. Definir un recurso real antes de crear `/recursos`.

Proceso recomendado:

1. identificar la pregunta o ejercicio que Paula ya usa y que puede ayudar sin prometer resultado;
2. validar interés con Search Console, Instagram y conversaciones reales;
3. crear un recurso breve y específico;
4. landing indexable solo si aporta valor autónomo; formulario y consentimiento correctos;
5. secuencia de email orientada a método y programas;
6. medir artículo → recurso → email → conversación/reserva.

No inventar un lead magnet genérico ni crear una landing vacía.

## Fase 5 — Autoridad externa y entidad (meses 2–6)

### Activos propios

- Alinear nombre, descripción, foto y URLs en web, Instagram, LinkedIn y YouTube.
- Verificar el canal `@paulambrandon` antes de incorporarlo como `sameAs`.
- Convertir vídeos útiles en artículo + transcripción editada y enlazarlos en ambas direcciones.
- Publicar casos autorizados, aprendizajes de talleres y materiales originales.

### PR y enlaces

Prioridad:

1. podcasts y entrevistas sobre autoexigencia, descanso y cambio personal;
2. colaboraciones con psicólogas/nutricionistas/entrenadoras donde cada profesional respete su ámbito;
3. talleres con venue/organizador que enlace una URL propia;
4. medios y newsletters de mujeres/bienestar con aportación original;
5. apariciones en YouTube con enlace contextual.

No comprar enlaces, no crear perfiles masivos y no perseguir menciones artificiales. Wikipedia solo si existen fuentes secundarias independientes y notoriedad suficiente.

### Activo citable de alto valor

En 3–6 meses, crear uno de estos activos basado en experiencia real:

- análisis anonimizado de preguntas repetidas en sesiones/talleres;
- encuesta propia con metodología y muestra transparentes;
- guía de señales de autoexigencia en la vida cotidiana con ejemplos originales;
- caso longitudinal autorizado sin prometer causalidad.

Los datos propios y la experiencia documentada ofrecen más valor que reescribir consejos comunes.

## Fase 6 — SEO local y eventos (cuando haya actividad real)

- No crear `/eventos` hasta tener al menos un evento real.
- URL propia por evento con ciudad, fecha, venue, quién lo imparte, plazas y CTA.
- `Event` schema exacto y actualizado.
- enlaces desde venue, organizador y colaboradoras.
- tras el evento, convertir la URL en recap útil si conserva valor; si no, aplicar estrategia de expiración definida.
- activar presencia local/GBP solo si existe una ubicación o modelo de servicio elegible y real.

## Fase 7 — Optimización continua

### Revisión semanal

- cobertura/indexación de nuevas URLs;
- errores técnicos y acciones manuales;
- consultas nuevas y páginas con impresiones;
- conversiones orgánicas;
- cambios importantes de negocio/precio/disponibilidad.

### Revisión mensual

- posiciones 8–30 con impresiones: ampliar respuesta, ejemplos y enlazado;
- CTR bajo: revisar title/description con datos;
- canibalización por cluster;
- páginas huérfanas o con cero enlaces contextuales;
- Bing AI Performance: citas, páginas, intents, topics y citation share;
- referrals de `chatgpt.com`, Perplexity, Copilot y Claude cuando sean detectables;
- logs de crawlers de búsqueda.

### Revisión trimestral

- actualizar artículos solo cuando haya mejoras reales;
- consolidar URLs con intención duplicada;
- revisar credenciales, fuentes y claims;
- reevaluar la siguiente ola editorial;
- auditoría CWV de plantillas;
- auditar perfiles y menciones externas.

No cambiar fechas para simular frescura.

## KPIs y objetivos operativos

Establecer el baseline durante los primeros 28 días; no fijar cifras arbitrarias sin datos.

| Área | KPI |
|---|---|
| Indexación | URLs válidas, excluidas, tiempo hasta indexación |
| Descubrimiento | impresiones no branded, nuevas consultas, queries por cluster |
| Ranking | URLs/queries top 100, 30, 20 y 10 |
| CTR | CTR por página e intención, no promedio global |
| Autoridad | dominios relevantes, menciones, podcasts, vídeos, casos |
| IA | citas Bing, páginas citadas, grounding queries, referrals y menciones verificadas |
| Conversión | WhatsApp, reserva, email y lead por landing/article |
| Calidad | artículos revisados, fuentes primarias, actualizaciones sustanciales |
| CWV | LCP, INP, CLS en p75 por plantilla |

## Matriz de trabajo

| Tarea | Impacto | Esfuerzo | Dependencia |
|---|---|---|---|
| Redirects reales y migración | Crítico | Bajo | acceso Vercel |
| Corregir producción sitemap/robots | Crítico | Bajo | despliegue |
| GSC + Bing + analítica | Muy alto | Bajo | accesos de cuenta |
| Credenciales y alcance | Crítico | Medio | información de Paula |
| Infraestructura blog | Muy alto | Medio | diseño/editorial |
| Primeras 4 piezas | Muy alto | Alto | revisión de Paula |
| Entity schema consolidado | Alto | Bajo | perfiles confirmados |
| OG específicas | Medio | Medio | diseño/assets |
| IndexNow | Medio | Bajo | pipeline de deploy |
| PR/podcasts/colaboraciones | Alto | Continuo | outreach |
| YouTube + transcripciones | Alto | Continuo | capacidad editorial |
| `llms.txt` opcional | Bajo | Bajo | ninguna; no priorizar |

## Definition of Done del lanzamiento SEO

- [ ] Todas las redirecciones migratorias devuelven 301/308 real.
- [ ] Solo `www` responde como URL final; no hay cadenas.
- [ ] Política de barra final consistente.
- [ ] Sitemap y robots públicos usan el canonical y las rutas nuevas.
- [ ] Cada ruta indexable devuelve 200, canonical propio, title, description y un H1.
- [ ] URL inexistente devuelve 404.
- [ ] Staging/previews no indexables.
- [ ] Schema válido y equivalente al contenido visible.
- [ ] Search Console y Bing verificados; sitemap enviado.
- [ ] Eventos de conversión probados sin PII.
- [ ] Política de bots de entrenamiento decidida.
- [ ] Credenciales y límites profesionales visibles.
- [ ] CWV y accesibilidad medidos.
- [ ] Primer cluster editorial calendarizado con responsable y revisión.

## Definition of Done de cada artículo

- [ ] Una intención primaria y URL única.
- [ ] Respuesta útil desde el inicio.
- [ ] Perspectiva/experiencia original de Paula.
- [ ] Claims objetivos con fuentes primarias.
- [ ] Límites profesionales y derivación cuando proceda.
- [ ] Autoría, bio, fecha y proceso editorial.
- [ ] Entre 2 y 5 enlaces contextuales.
- [ ] CTA coherente con la intención.
- [ ] Imagen real o útil, no relleno.
- [ ] Article schema válido.
- [ ] Revisión humana y factual.
- [ ] Prueba móvil, build limpio e inclusión en sitemap.

