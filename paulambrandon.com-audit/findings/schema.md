# Hallazgos de schema

## Implementado

- Home: `WebSite` + `Person`.
- Sobre mí: `ProfilePage` + `Person` como `mainEntity`.
- Identificador compartido `#person`.
- Instagram en `sameAs`.

## Mejoras

- Reutilizar la entidad Person completa en ambas páginas.
- Añadir imagen, descripción y perfiles oficiales confirmados.
- No añadir credenciales o propiedades profesionales que no estén publicadas.
- Añadir `BreadcrumbList` cuando exista jerarquía visible.
- Preparar `BlogPosting` con autor y fechas reales.
- Validar `Event` solo para eventos reales.

## No hacer

- No añadir FAQPage por rich results.
- No declarar profesiones sanitarias.
- No inventar AggregateRating, Review, Organization o Course.
