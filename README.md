# Paula Márquez Brandon

Web de **Paula Márquez Brandon**, centrada en el acompañamiento a mujeres que viven desde la autoexigencia y la sensación de no ser suficientes. Presenta su método, historia, testimonios y tres formas de trabajar con ella: **Alchemise**, **Movimiento y nutrición** y **Sesión de claridad**.

Sitio estático construido con Astro, TypeScript estricto y Sass. El contenido principal se genera como HTML; JavaScript aporta las interacciones del menú, el formulario y las animaciones. No utiliza un framework de UI ni necesita un servidor de aplicación para servir el build.

## Inicio rápido

Requisitos:

- **Node.js ≥ 22.12.0**, según `package.json`.
- **pnpm**, con dependencias fijadas en `pnpm-lock.yaml`. La comprobación local se ha realizado con pnpm 12.5.1.
- Acceso SSH a GitHub para clonar con la siguiente URL.

```sh
git clone git@github.com:paulambrandon/paulambrandon-website.git
cd paulambrandon-website
pnpm install --frozen-lockfile
pnpm dev
```

El servidor se abre por defecto en `http://localhost:4321`. La configuración actual no requiere variables de entorno: el dominio está en `astro.config.mjs` y el endpoint público del formulario en `src/pages/contacto.astro`.

## Comandos

Ejecutar desde la raíz del repositorio:

| Comando | Función |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo. |
| `pnpm check` | Ejecuta los diagnósticos de Astro y TypeScript. |
| `pnpm build` | Ejecuta `astro check`, genera `dist/` y valida el SEO del resultado. |
| `pnpm preview` | Sirve el último build para revisarlo localmente. Requiere `dist/`. |
| `pnpm seo:check` | Valida el contenido de `dist/` sin reconstruirlo. |
| `pnpm og:generate` | Regenera las nueve tarjetas sociales específicas en `public/og/`. |
| `pnpm astro --help` | Muestra la ayuda de la CLI de Astro. |

`pnpm seo:check` comprueba el último build: después de modificar páginas, ejecutar `pnpm build` para validar el resultado actualizado.

## Stack y estructura

Dependencias principales declaradas en `package.json`: **Astro 7**, **TypeScript 6**, **Sass** y **Sharp** para procesamiento de imágenes. `@astrojs/check` proporciona los diagnósticos previos al build.

```text
.
├── src/
│   ├── assets/images/          # Retrato, resultados y assets de referencia
│   ├── components/
│   │   ├── layout/             # Header y footer compartidos
│   │   ├── home/               # Secciones de la Home
│   │   ├── metodo/             # Secciones del método general
│   │   ├── programas/          # Secciones del catálogo de programas
│   │   └── landing/            # Piezas compartidas por los servicios
│   ├── data/                  # Contenido tipado y configuración compartida
│   ├── layouts/Layout.astro   # Layout global, metadata y estilos
│   ├── pages/                 # Páginas y endpoints sitemap, robots y llms
│   └── sass/                  # Arquitectura 7–1; entrada en main.scss
├── public/
│   ├── favicon/               # Favicons y manifest
│   ├── fonts/                 # Fuentes WOFF2 locales y sus licencias
│   └── og/                    # Imágenes Open Graph
├── scripts/                   # Tarjetas sociales y validación SEO
├── docs/seo/                  # Estrategia SEO y decisiones de contenido
├── docs/reviews/              # Revisiones de implementación
├── paulambrandon.com-audit/    # Auditoría y validaciones fechadas
├── AGENTS.md                  # Reglas de trabajo y criterios de entrega
├── DESIGN.md                  # Sistema visual y responsive
├── PRODUCT.md                 # Contexto de producto y posicionamiento
├── astro.config.mjs           # Dominio, redirects y aliases Sass
└── vercel.json                # Redirects HTTP y cabeceras de despliegue
```

### Dónde modificar el contenido

| Archivo o carpeta | Responsabilidad |
| --- | --- |
| `src/data/site.ts` | Marca, nombre, email, WhatsApp, Instagram, reservas y navegación. |
| `src/data/home.ts`, `metodo.ts`, `programas.ts` | Contenido de esas páginas. |
| `src/data/services.ts`, `landing.ts` | Datos y contenido compartido de los acompañamientos. |
| `src/data/testimonials.ts`, `physical-results.ts` | Testimonios y fotografías de resultados. |
| `src/data/seo.ts` | Imágenes sociales y breadcrumbs por ruta. |
| `src/data/schema.ts` | Entidad `Person` compartida. |
| `src/pages/*.astro` | Composición de páginas, títulos, descripciones y schema específico. |

Algunos textos viven directamente en los componentes o páginas. Revisar la fuente correspondiente antes de editar y evitar duplicar datos compartidos.

### Estilos e imágenes

El layout importa `src/sass/main.scss`, que integra las siete carpetas existentes mediante `@use`: `abstracts`, `base`, `components`, `layout`, `pages`, `themes` y `vendors`. Los tokens y breakpoints están en `src/sass/abstracts/_variables.scss`; los aliases `@abstracts`, `@components`, etc. se configuran en `astro.config.mjs`.

Mantener esta arquitectura y reutilizar sus tokens. Los estilos parten de móvil y se amplían mediante `min-width`. Los viewports de comprobación son **390, 768, 1024 y 1440 px**.

Las imágenes de contenido se importan desde `src/assets/images/` y se procesan con `astro:assets`. Mantener dimensiones, texto alternativo, variantes responsive y carga prioritaria en el hero. Las fuentes Inter y Cormorant Garamond se sirven localmente desde `public/fonts/`.

Las tarjetas sociales se generan con Sharp a **1200 × 630 px**, usando el retrato `paula-marquez-brandon.webp` y la composición de `scripts/generate-og-images.mjs`. Después de regenerarlas, revisar los JPG y ejecutar el build. Los recursos de `public/` se copian sin pasar por la optimización de imágenes de Astro.

## Páginas y navegación

| Ruta | Contenido |
| --- | --- |
| `/` | Home: presentación, problema, transformación, método, programas y contacto. |
| `/metodo` | Método general de acompañamiento de Paula. |
| `/programas` | Catálogo de formas de trabajar con Paula. |
| `/alchemise` | Programa grupal y Método IMAC. |
| `/movimiento-nutricion` | Acompañamiento de movimiento y nutrición. |
| `/sesion-claridad` | Sesión individual de claridad. |
| `/sobre-mi` | Historia y presentación de Paula. |
| `/testimonios` | Testimonios y resultados. |
| `/contacto` | Canales de contacto y formulario. |
| `/aviso-legal`, `/privacidad`, `/cookies` | Información legal. |
| `/404` | Página de error con `noindex, follow`; se genera como `404.html`. |

El método general de Paula y el Método IMAC son distintos: IMAC pertenece a Alchemise. No existe una ruta `/metodo-imac`. Blog, recursos y eventos forman parte de la estrategia futura; no hay páginas implementadas para ellos.

## SEO técnico

La fuente de verdad es [docs/seo/paulambrandon-seo.md](docs/seo/paulambrandon-seo.md). El dominio configurado es **`https://www.paulambrandon.com`**, definido en `site` dentro de `astro.config.mjs`. Canonicals, metadata absoluta y endpoints derivan de esa configuración. Las URLs no llevan barra final, salvo la raíz.

`Layout.astro` renderiza `lang="es"`, canonical, Open Graph y metadata de Twitter. La Home incluye `WebSite` y `Person`; Sobre mí incluye `ProfilePage` y `Person`. Las rutas configuradas incorporan `BreadcrumbList` sin mostrar una navegación de migas de pan visible.

El H1 definitivo de la Home está resuelto en el documento SEO: «Necesitas dejar de construir tu vida alrededor de la idea de que no eres suficiente.». «No necesitas convertirte en otra mujer.» es el preheading.

### Endpoints generados durante el build

| Endpoint | Fuente | Comportamiento |
| --- | --- | --- |
| `/sitemap.xml` | `src/pages/sitemap.xml.ts` | Enumera páginas `.astro` estáticas y excluye `/404` y rutas dinámicas. |
| `/robots.txt` | `src/pages/robots.txt.ts` | Publica la política de crawlers y el sitemap canónico. |
| `/llms.txt` | `src/pages/llms.txt.ts` | Genera un mapa editorial con identidad, acompañamientos, condiciones y URLs canónicas. |

No crear versiones manuales de estos archivos en `public/`. El sitemap descubre páginas estáticas automáticamente: si se incorpora una ruta `noindex`, hay que actualizar sus exclusiones; las rutas dinámicas requieren enumeración explícita.

La política actual permite los crawlers de búsqueda y recuperación `OAI-SearchBot`, `Claude-SearchBot`, `Claude-User` y `PerplexityBot`. Bloquea `GPTBot`, `ClaudeBot`, `Google-Extended`, `Bytespider`, `CCBot` y `Applebot-Extended` según la decisión documentada de Paula. `llms.txt` complementa la documentación del sitio y no sustituye al sitemap ni a robots.

### Redirecciones

| URL antigua | Destino |
| --- | --- |
| `/empieza-aqui` | `/programas` |
| `/mi-historia` | `/sobre-mi` |
| `/politica-privacidad` | `/privacidad` |
| `/politica-cookies` | `/cookies` |

Las rutas están declaradas en Astro y como **HTTP 301** en `vercel.json`. En otro hosting estático hay que configurar los redirects HTTP: los documentos de redirección del build por sí solos no garantizan una respuesta 301. `/alchemise` conserva su URL.

## Formulario e integraciones

El formulario de `/contacto` envía consultas directamente a **Formspree**. `FORMSPREE_ENDPOINT` ya contiene un endpoint público en `src/pages/contacto.astro`; no utiliza claves privadas ni una función serverless propia.

El formulario dispone de validación HTML, consentimiento de privacidad y envío por `POST`. Con JavaScript muestra estados de envío, éxito y error sin abandonar la página; sin JavaScript conserva el envío HTML al servicio. El email directo está disponible como alternativa.

Para cambiar de formulario, verificar primero el destinatario en Formspree y sustituir `FORMSPREE_ENDPOINT`. Si no contiene una URL con el prefijo esperado, el botón queda desactivado. La comprobación del prefijo no verifica que el servicio esté operativo: confirmar la recepción con un envío real tras desplegar.

WhatsApp, Instagram y SumUp Bookings son enlaces externos configurados en `src/data/site.ts`. La web no implementa checkout ni procesamiento de pagos. Actualmente no incluye una integración de analítica; la política de cookies declara que no instala cookies analíticas, publicitarias ni de terceros.

## Despliegue

El repositorio contiene configuración para **Vercel**. Para conectar el proyecto:

1. Importar `paulambrandon/paulambrandon-website` y seleccionar la raíz del repositorio.
2. Usar Node.js compatible con `engines`, instalar con `pnpm install --frozen-lockfile` y construir con `pnpm build`.
3. Publicar el directorio `dist/` y conservar `vercel.json` para redirects y cabeceras.
4. Configurar el dominio canónico y la redirección de su alternativa en el proveedor.
5. Comprobar en producción las rutas, los 301, la página 404, los endpoints SEO y la recepción del formulario.

`pnpm preview` permite revisar los archivos generados, pero no reproduce las reglas HTTP de `vercel.json`. En otros proveedores hay que trasladar sus redirects, política de barra final y cabeceras. Las previews y staging deben aplicar la política de noindex definida en la estrategia SEO mediante configuración de despliegue.

## Validación y mantenimiento

`pnpm build` ejecuta `scripts/validate-seo.mjs` sobre el HTML generado y falla ante problemas de metadata, H1, canonical, JSON-LD, sitemap, robots, llms, enlaces internos, anclas, imágenes o configuración de Vercel. También comprueba condiciones básicas de accesibilidad: idioma, landmarks, enlace de salto, nombres de botones y labels de formulario.

Estos controles no sustituyen la revisión visual, la navegación por teclado ni las mediciones en navegador. Antes de publicar cambios de interfaz, comprobar los cuatro viewports de referencia, overflow, focus, contraste, movimiento reducido e imágenes. Medir Lighthouse/PageSpeed y Core Web Vitals en el sitio desplegado antes de atribuirle resultados de rendimiento.

**Comprobación local del 9 de octubre de 2026:** `pnpm build` completado; Astro check sin errores, warnings ni hints y validación SEO superada. No implica verificación del despliegue ni de la entrega de mensajes en Formspree.

## Documentación de referencia

Antes de modificar una página, consultar el código existente, después el documento SEO y finalmente el sistema visual y el mockup aprobado. SEO y semántica se rigen por el documento SEO; layout, espaciado y responsive por `DESIGN.md`. Mantener el copy aprobado salvo cambios explícitos en la estrategia SEO.

- [AGENTS.md](AGENTS.md): reglas del proyecto, flujo de trabajo y criterios de entrega.
- [Estrategia SEO](docs/seo/paulambrandon-seo.md): arquitectura, copy, metadata, indexación y roadmap.
- [DESIGN.md](DESIGN.md): sistema visual, responsive y componentes.
- [PRODUCT.md](PRODUCT.md): público, posicionamiento y límites del acompañamiento.
- [Baseline técnico](paulambrandon.com-audit/IMPLEMENTATION-BASELINE.md): controles y mediciones locales fechadas.
- [Validación de producción](paulambrandon.com-audit/PRODUCTION-VALIDATION.md): comprobaciones del 7 de octubre de 2026, anteriores al enlace de este repositorio con GitHub; requieren actualizarse tras el despliegue.

Los informes y documentos de contexto son registros fechados. Ante diferencias con el funcionamiento actual, contrastarlos con el código y las fuentes de verdad antes de dar una tarea por cerrada.