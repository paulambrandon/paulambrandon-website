# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Mujeres autoexigentes que viven con la sensación constante de "no ser
suficiente": perfeccionismo, culpa al descansar, necesidad de demostrar su
valor, miedo a decepcionar y dificultad para poner límites. Muchas llegan
ya funcionales en lo externo (trabajo, responsabilidades) pero agotadas
internamente, y buscan entender el patrón antes de "arreglarlo" con más
disciplina o control sobre el cuerpo.

## Product Purpose

La web de Paula Márquez Brandon acompaña a estas mujeres a transformar la
relación que tienen consigo mismas — de la autoexigencia al autocuidado —
y las convierte en clientas de sus programas (Alchemise, Movimiento y
nutrición, Sesión de claridad). Éxito = tráfico no-branded que se
identifica con el patrón descrito, entiende el método de Paula y agenda
una conversación o se inscribe en un programa.

## Positioning

Paula no compite en "autoestima", "desarrollo personal" ni "coaching para
mujeres" como categorías genéricas, ni finge autoridad clínica frente a
psicólogas o nutricionistas. Su territorio defendible es la intersección
concreta: mujeres + autoexigencia + sensación de insuficiencia + culpa +
aprobación + límites + autocuidado, trabajada desde experiencia propia,
método propio y lenguaje directo — no desde un marco terapéutico.

## Operating Context

- Arquitectura de navegación cerrada: Inicio → Método → Programas → Sobre
  mí → Testimonios → Contacto, con Alchemise, Movimiento y nutrición y
  Sesión de claridad como landings de conversión colgando de Programas.
- El método general de Paula es distinto del Método IMAC (Identificar,
  Modificar, Aplicar, Consolidar), que vive exclusivamente dentro de
  Alchemise.
- Conversión principal por WhatsApp y formulario de contacto (preparación
  de email); no hay checkout ni pago en la propia web.
- Blog/cluster de contenidos SEO planificado en el documento SEO pero aún
  no construido (fase futura).
- Fuentes de verdad del proyecto: código existente, `/docs/seo/paulambrandon-seo.md`
  para SEO/copy/arquitectura, `DESIGN.md` para sistema visual.

## Capabilities and Constraints

- Stack: Astro + TypeScript + Sass (arquitectura 7-1 en `src/sass`), sitio
  mayormente estático; sin frameworks de UI adicionales.
- Dominio canónico confirmado: `https://www.paulambrandon.com` (ya
  configurado en `astro.config.mjs`).
- Migraciones 301 pendientes de conservar cuando existan las rutas
  nuevas: `/empieza-aqui` → `/programas`, `/mi-historia` → `/sobre-mi`;
  `/alchemise` se mantiene. No crear `/metodo-imac`.
- Tema YMYL: el sitio toca cuerpo, alimentación y bienestar emocional sin
  ser contenido clínico. No usar lenguaje diagnóstico ni terapéutico
  ("tratar ansiedad", "sanar trauma", "terapia", "tratar TCA", etc.).
- Sesión de claridad no debe presentarse como terapia.

## Brand Commitments

- Nombre: Paula Márquez Brandon. Marca/handle: `paulambrandon`.
- Contacto real: email `pmarquezbrandon@gmail.com`, WhatsApp e Instagram
  `@paulambrandon` (fuente única en `src/data/site.ts`).
- Copy visible aprobado en el mockup de diseño; no reescribir por
  iniciativa propia salvo indicación explícita del documento SEO.
- H1 definitivo de la Home (ya resuelto, sin conflicto pendiente):
  "Necesitas dejar de construir tu vida alrededor de la idea de que no
  eres suficiente." con "No necesitas convertirte en otra mujer." como
  eyebrow/preheading, no como H1.

## Evidence on Hand

- Testimonios reales de clientas ya integrados en
  `src/data/testimonials.ts` y páginas de programas; lenguaje real sobre
  perfeccionismo, cuerpo, límites, culpa y autocuidado.
- Contenido y arquitectura por página ya decididos con el cliente y
  fechados en `/docs/seo/paulambrandon-seo.md` (§8: /metodo, /programas,
  /sobre-mi, /testimonios, /contacto).
- Credenciales: Paula no tiene titulación clínica/sanitaria (no es
  psicóloga, terapeuta ni dietista-nutricionista); trabaja desde
  experiencia propia, formación no clínica (coach/mentora) y formación
  en entrenamiento físico, que sí respalda el contenido de Movimiento y
  nutrición. El copy debe evitar posicionarla como profesional sanitaria
  y evitar claims clínicos o diagnósticos fuera de ese ámbito.

## Product Principles

- El territorio semántico es específico (autoexigencia + insuficiencia
  en mujeres), no "desarrollo personal" ni "bienestar" genérico — no
  diluirlo por conveniencia de copy o diseño.
- Ganar por especialización, experiencia propia y lenguaje conectado, no
  fingiendo autoridad clínica frente a psicólogas o grandes medios.
- El método general de Paula y el Método IMAC de Alchemise son cosas
  distintas; no fusionarlos ni usar IMAC fuera de Alchemise.
- Todo cambio de copy, arquitectura o metadata que toque SEO respeta
  `/docs/seo/paulambrandon-seo.md`; no se inventan titles, H1, schema ni
  páginas nuevas por iniciativa propia.
- Cuerpo, alimentación y entrenamiento son una oferta concreta
  (Movimiento y nutrición), no la identidad SEO/de marca global.

## Accessibility & Inclusion

Sin requisito de accesibilidad específico más allá del estándar del
proyecto (ver `AGENTS.md` §10): semántica HTML, navegación por teclado,
foco visible, contraste suficiente y menú móvil accesible.
