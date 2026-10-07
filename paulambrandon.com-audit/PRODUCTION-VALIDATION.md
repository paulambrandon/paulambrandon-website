# Validación de producción

Fecha: 7 de octubre de 2026  
Dominio comprobado: `https://www.paulambrandon.com`

## Estado

La producción pública todavía sirve una versión anterior a los commits SEO de
este repositorio. El repositorio local no tiene un remoto Git configurado, por
lo que no es posible publicar esos commits desde este entorno.

| Prueba | Producción actual | Objetivo tras desplegar |
|---|---|---|
| Home | 200 | 200 |
| HTTP → HTTPS | 308 en un salto | 301/308 en un salto |
| Sin `www` → `www` | 308 en un salto | 301/308 en un salto |
| `/empieza-aqui` | 200 | 301 → `/programas` |
| `/mi-historia` | 200 | 301 → `/sobre-mi` |
| `/metodo` | 404 | 200 |
| URL inexistente | 404 genérica de Vercel | 404 personalizada con `noindex` |
| `robots.txt` | Sitemap sin `www`; sin política IA | Canonical `www` y política IA implementada |
| Sitemap | Dominio sin `www`, barras y rutas antiguas | `www`, sin barra y solo rutas canónicas |
| Cabeceras personalizadas | No presentes | Configuración de `vercel.json` |

## Criterio de cierre

Después de desplegar `main`, repetir las pruebas HTTP y ejecutar Lighthouse/PSI,
axe, navegación por teclado y comprobación visual en 390, 768, 1024 y 1440 px.
No marcar migración, Core Web Vitals o producción como completados antes de esa
verificación.
