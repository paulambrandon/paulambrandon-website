## Proyecto

Web de **Paula Márquez Brandon** construida con:

- **Astro**
- **TypeScript**
- **Sass**
- arquitectura Sass **7–1 ya existente en `src/sass`**

El objetivo es implementar el diseño aprobado con alta fidelidad, excelente rendimiento, accesibilidad y SEO técnico sólido.

---

## 1. Fuentes de verdad

Antes de modificar una página, consulta siempre las fuentes relevantes en este orden:

1. **Código y estructura existentes del repositorio.**
2. **`/docs/seo/paulambrandon-seo.md`** para SEO, intención de búsqueda, metadata, copy SEO, headings, canonicals, indexación y cualquier requisito de buscadores.
3. **`DESIGN.md`** para sistema visual, responsive y comportamiento de componentes.
4. El PDF/mockup de diseño facilitado por el cliente como referencia visual.

### Regla de conflicto

- Si una decisión afecta a **SEO, intención de búsqueda, metadata, canonicals, indexación, schema o semántica HTML**, manda `paulambrandon-seo.md`.
- Si afecta a **layout, espaciado, color, composición o responsive**, manda `DESIGN.md`.
- Para el **copy visible del mockup**, respeta el texto aprobado del diseño salvo que el documento SEO indique de forma explícita que debe cambiarse. No reescribas copy por iniciativa propia.
- No sacrifiques semántica, accesibilidad o SEO para imitar visualmente el mockup.

---

## 2. Mobile first — obligatorio

Todo el proyecto se implementa **mobile first**.

El diseño móvil de referencia es **390 px** y el desktop de referencia es **1440 px**.

Reglas:

- Los estilos base deben corresponder al móvil.
- Añade mejoras progresivas mediante `min-width`.
- No escribas primero desktop para después sobrescribirlo con media queries de móvil.
- No copies medidas rígidas del mockup si rompen el layout entre 390 y 1440 px.
- Usa layouts fluidos, `clamp()`, `min()`, `max()`, Grid y Flexbox cuando corresponda.
- Valida como mínimo:
  - 390 px
  - 768 px
  - 1024 px
  - 1440 px

---

## 3. Astro

### Principios

- Prioriza HTML estático generado por Astro.
- El contenido principal debe existir en el HTML sin depender de JavaScript.
- No convertir la web en SPA.
- No añadir React, Vue, Svelte ni otra librería de UI sin autorización explícita.
- JavaScript solo cuando exista una interacción real que lo necesite.
- Mantener el bundle cliente al mínimo.

### Componentes

Crea componentes cuando haya:

- reutilización real;
- una responsabilidad visual clara;
- una sección suficientemente compleja;
- una pieza compartida entre páginas.

Evita fragmentar la página en componentes triviales sin beneficio.

Estructura orientativa:

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   └── home/
│       ├── Hero.astro
│       ├── ProblemSection.astro
│       ├── StatementSection.astro
│       ├── TransformationSection.astro
│       ├── MethodSection.astro
│       ├── ProgramsSection.astro
│       ├── AboutSection.astro
│       ├── TestimonialsSection.astro
│       └── ContactCta.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── sitemap.xml.ts
│   └── robots.txt.ts
└── sass/
    └── ... arquitectura existente
```

La estructura anterior es una guía. **No reorganices el proyecto si el repositorio ya tiene una convención válida.**

---

## 4. TypeScript

- Usar TypeScript de forma estricta.
- Evitar `any`.
- Tipar props, datos repetidos y estructuras de contenido.
- No crear abstracciones o genéricos innecesarios.
- No duplicar datos que puedan vivir en una única fuente.
- Si existen datos repetitivos como programas, testimonios o navegación, usar estructuras tipadas cuando simplifiquen el mantenimiento.

---

## 5. Sass — arquitectura 7–1 existente

`src/sass` ya contiene una arquitectura **7–1**.

### Prohibido

- Renombrar carpetas.
- Mover carpetas.
- Aplanar la arquitectura.
- Crear una segunda arquitectura Sass paralela.
- Sustituirla por Tailwind, CSS Modules, CSS-in-JS o un framework CSS.
- Reescribir el sistema existente porque "sería más limpio".
- Crear variables duplicadas si ya existe un token equivalente.

### Obligatorio

Antes de escribir estilos:

1. inspecciona `src/sass`;
2. identifica el entry point actual;
3. identifica variables, mixins, funciones y breakpoints existentes;
4. coloca cada nuevo partial en la carpeta que corresponda dentro de la arquitectura actual;
5. sigue el mecanismo existente de `@use` / `@forward` o el sistema que ya use el proyecto.

Los estilos de componentes deben integrarse en `src/sass`. No dispersar CSS por el proyecto salvo que el código existente establezca explícitamente otra convención.

### CSS

- Mobile first.
- Evitar `!important`.
- Evitar selectores excesivamente específicos.
- Evitar valores mágicos repetidos.
- Reutilizar tokens.
- Preferir propiedades lógicas cuando ayuden al responsive.
- No usar alturas fijas para bloques de contenido textual.
- No provocar overflow horizontal.

---

## 6. SEO

### Inconsistencia conocida que debe estar resuelta antes de cerrar la Home

El mockup final muestra visualmente como titular principal:

```text
Necesitas dejar de construir tu vida alrededor de la idea de que no eres suficiente.
```

y utiliza `No necesitas convertirte en otra mujer.` como eyebrow/preheading.

El documento SEO original contiene una referencia anterior que trata el concepto `No necesitas convertirte en otra mujer…` como H1. **No inventes una tercera solución ni escondas dos H1.** La versión final del documento SEO debe definir cuál es el H1 definitivo antes de dar por cerrada la Home.

La fuente de verdad SEO es:

```text
/docs/seo/paulambrandon-seo.md
```

**Debe leerse antes de implementar o modificar cualquier página indexable.**

No inventes:

- titles;
- meta descriptions;
- keywords objetivo;
- H1;
- schema;
- canonicals;
- robots directives;
- contenido SEO;
- páginas nuevas por supuesta oportunidad SEO.

### Reglas técnicas generales

- Un único H1 salvo que el documento SEO indique expresamente otra cosa.
- Jerarquía de headings lógica.
- Enlaces reales con `<a href="">` para navegación.
- No usar `div` clicables como sustituto de enlaces o botones.
- Contenido crítico presente en HTML.
- `lang` correcto en `<html>`.
- Metadata renderizada en build/servidor.
- Open Graph y social metadata cuando estén definidos.
- Canonical absoluto cuando corresponda.
- Structured data únicamente con datos reales y visibles cuando aplique.
- No ocultar copy para buscadores.
- No hacer keyword stuffing.

---

## 7. Sitemap automático

El sitemap debe generarse mediante TypeScript en:

```text
src/pages/sitemap.xml.ts
```

No crear un `sitemap.xml` manual en `public/`.

No usar otra solución que sustituya este endpoint sin autorización explícita.

Requisitos:

- generar XML válido;
- responder con `Content-Type` apropiado;
- usar como origen preferentemente `Astro.site`;
- incluir únicamente URLs públicas, canónicas e indexables;
- excluir 404, redirects, páginas `noindex`, URLs de desarrollo y duplicados;
- mantener una única fuente de URLs cuando sea posible;
- no hardcodear el dominio en varios archivos.

Si el proyecto necesita `site` en `astro.config.*`, configurarlo una sola vez y reutilizarlo.

**No asumir `www` o no-`www`.** El documento SEO deja esa decisión pendiente. Cuando se defina la versión canónica del dominio, debe configurarse una sola vez en `Astro.site` y reutilizarse en canonical, sitemap, robots y metadata absoluta.

---

## 8. Robots automático

`robots.txt` debe generarse mediante TypeScript en:

```text
src/pages/robots.txt.ts
```

No crear un `robots.txt` estático en `public/`.

Requisitos:

- responder como `text/plain`;
- referenciar el sitemap generado;
- usar el dominio configurado en `Astro.site`;
- aplicar exactamente la política definida en `/docs/seo/paulambrandon-seo.md`;
- no inventar reglas para crawlers o bots que no aparezcan en la estrategia SEO;
- no bloquear accidentalmente assets necesarios para renderizar la web;
- permitir los crawlers de búsqueda que la estrategia SEO haya aprobado (`OAI-SearchBot`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`);
- no decidir por cuenta propia qué hacer con `GPTBot` o `ClaudeBot`: la estrategia SEO deja esa decisión separada pendiente.

---

## 8.1 Migración SEO que no debe olvidarse

Cuando existan las nuevas rutas, conservar estas migraciones definidas en el documento SEO:

```text
/empieza-aqui  →  /programas   (301)
/mi-historia   →  /sobre-mi    (301)
/alchemise     →  /alchemise   (se mantiene)
```

No crear `/metodo-imac`. IMAC pertenece a Alchemise salvo que Paula redefina expresamente la arquitectura.

### Schema mínimo definido por la estrategia

- Home: `WebSite` + `Person`.
- `/sobre-mi`: `ProfilePage` + `Person`.
- Blog futuro: `Article` / `BlogPosting`.
- Breadcrumbs donde proceda: `BreadcrumbList`.
- Eventos reales: `Event`.

No añadir schema para contenido inexistente.

---

## 9. Imágenes

- Usar las utilidades de imagen de Astro cuando aporten optimización real.
- Declarar `width` y `height` o preservar el aspect ratio para evitar CLS.
- Usar `alt` descriptivo según contexto.
- `alt=""` para imágenes puramente decorativas.
- No hacer lazy-load de la imagen LCP del hero.
- Lazy-load para imágenes bajo el fold.
- Priorizar AVIF/WebP cuando el pipeline lo permita.
- No subir una imagen enorme para mostrarla a tamaño pequeño.
- No usar background-image para contenido que debería ser una imagen semántica.

---

## 10. Accesibilidad

Mínimo esperado:

- HTML semántico.
- Navegación por teclado.
- Focus visible.
- Contraste suficiente.
- Menú móvil accesible.
- Botón del menú con estado accesible (`aria-expanded`, relación con el panel).
- Labels correctos en formularios.
- Enlaces y botones con nombres comprensibles.
- Áreas táctiles razonables en móvil.
- Respetar `prefers-reduced-motion`.
- No depender únicamente del color para comunicar significado.

---

## 11. Rendimiento

Objetivo: web ligera y principalmente estática.

Evitar:

- librerías para animaciones simples;
- sliders si el contenido puede mostrarse sin ellos;
- icon libraries enormes para uno o dos iconos;
- fuentes con demasiados pesos;
- JavaScript para tareas solucionables con HTML/CSS;
- imágenes sin optimizar.

Priorizar:

- HTML estático;
- CSS eficiente;
- fuentes locales si ya están disponibles;
- preload solo para recursos críticos;
- carga diferida de recursos no críticos.

---

## 12. Home — orden de implementación

Implementar la Home siguiendo el orden visual definido en `DESIGN.md`:

1. Header
2. Hero
3. Problema
4. Frase/manifiesto
5. Transformación antes/después
6. Método / proceso en tres etapas
7. Formas de trabajar conmigo
8. Sobre Paula
9. Testimonios
10. CTA de contacto
11. Footer

No alterar el orden de bloques sin una razón clara de UX/SEO y sin revisar antes el documento SEO.

### Rutas de los CTAs de la Home

Usar enlaces reales y las rutas definidas en la arquitectura SEO:

```text
Conoce el método           → /metodo
Ver programas              → /programas
Descubrir Alchemise        → /alchemise
Movimiento y nutrición     → /movimiento-nutricion
Sesión de claridad         → /sesion-claridad
Conoce mi historia         → /sobre-mi
Ver testimonios            → /testimonios
Contactar                   → /contacto
```

No dejar CTAs definitivos con `href="#"` si la ruta ya está definida.

---

## 13. Fidelidad al diseño

La referencia visual fija dos viewports:

- **390 px móvil**
- **1440 px desktop**

La implementación debe ser muy fiel en:

- jerarquía;
- proporciones;
- ritmo vertical;
- alternancia de fondos;
- ancho de contenido;
- composición de cards;
- tamaño relativo de tipografía;
- posición de imágenes;
- CTAs;
- layout responsive.

No perseguir una captura "pixel perfect" mediante hacks frágiles. Debe seguir funcionando correctamente entre ambos tamaños.

---

## 14. Flujo de trabajo obligatorio

Para cada bloque o página:

1. Leer el código existente.
2. Leer la sección SEO relevante.
3. Revisar `DESIGN.md`.
4. Implementar primero el layout de 390 px.
5. Verificar jerarquía semántica.
6. Añadir breakpoints de mayor tamaño.
7. Comparar con 1440 px.
8. Revisar accesibilidad.
9. Revisar imágenes y CLS.
10. Ejecutar el build.
11. Corregir warnings y errores antes de dar la tarea por terminada.

---

## 15. No hacer

- No modificar la arquitectura 7–1.
- No introducir Tailwind.
- No introducir un framework de componentes.
- No introducir dependencias porque ahorren unas pocas líneas.
- No inventar diseño que no existe.
- No cambiar copy SEO por razones estéticas.
- No hacer desktop first.
- No meter contenido principal detrás de JS.
- No hardcodear el mismo dominio en múltiples lugares.
- No crear sitemap/robots manuales.
- No usar `<br>` para forzar el wrapping del diseño salvo caso editorial intencional.
- No usar posiciones absolutas para construir layouts normales.
- No fijar alturas que puedan cortar texto.
- No ignorar tablet/intermedios.
- No crear nuevas páginas SEO sin que estén justificadas en el documento SEO.

---

## 16. Definition of Done

Una implementación se considera terminada cuando:

- compila sin errores;
- respeta Astro + TypeScript + Sass;
- mantiene intacta la arquitectura 7–1;
- funciona desde 390 px hasta 1440 px y superiores;
- coincide visualmente con el diseño en los viewports de referencia;
- no presenta overflow horizontal;
- es navegable por teclado;
- tiene HTML semántico;
- aplica el SEO definido;
- las imágenes no provocan CLS;
- el contenido principal funciona sin JS;
- `sitemap.xml.ts` y `robots.txt.ts` siguen siendo automáticos;
- no se han añadido dependencias innecesarias.