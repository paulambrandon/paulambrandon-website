# Baseline técnico de implementación

Fecha: 7 de octubre de 2026  
Ámbito: build estático local posterior a la implementación SEO.

## Resultado verificable

| Control | Resultado |
|---|---:|
| Astro check | 0 errores, 0 warnings, 0 hints |
| HTML indexable | 13 documentos; máximo 18,7 KB |
| CSS | 59,7 KB sin comprimir; 10,2 KB con gzip |
| JavaScript cliente externo | 0 archivos |
| Imágenes responsive generadas | 36 variantes WebP; máximo 191,7 KB |
| Tarjetas Open Graph | 9 específicas, 1200 × 630 y por debajo de 70 KB |
| Fuentes WOFF2 usadas | 3 archivos; 125,2 KB en total |
| Build completo | 2,83 MB, incluyendo todas las rutas y variantes de imagen |

El peso total del build no equivale a la transferencia de una página: reúne
todas las rutas, imágenes responsive, tarjetas sociales, fuentes y favicons.

## SEO técnico automatizado

El build falla si detecta:

- title, description, canonical o H1 ausentes;
- canonicals o sitemap con origen/barra final incorrectos;
- redirects incluidos en sitemap;
- enlaces internos o anclas rotas;
- URLs huérfanas o a más de tres clics desde la Home;
- breadcrumbs visibles sin `BreadcrumbList`;
- JSON-LD inválido;
- OG inexistentes o repetidas en las páginas principales;
- imágenes sin `alt`, `width` o `height`;
- una imagen prioritaria cargada con lazy loading;
- errores en robots, redirecciones o cabeceras de Vercel.

## Accesibilidad automatizada

Se validan en el HTML generado:

- `lang="es"`;
- landmarks `header`, `main` y `footer`;
- enlace para saltar al contenido;
- exactamente un H1;
- nombres accesibles en botones;
- asociación de controles de formulario con `label`;
- `noopener` en enlaces que abren una pestaña nueva;
- texto alternativo y dimensiones en imágenes.

El CSS conserva `:focus-visible`, navegación mobile-first y respeto a la
preferencia de movimiento reducido.

## Mediciones pendientes de despliegue

No se asigna una puntuación Lighthouse ni valores LCP, INP o CLS sin medir el
sitio desplegado. Tras publicar estos commits se deben ejecutar:

1. Lighthouse/PSI mobile y desktop;
2. comprobación visual y de overflow en 390, 768, 1024 y 1440 px;
3. navegación completa por teclado;
4. contraste y auditoría axe;
5. CrUX en percentil 75 cuando exista muestra de tráfico suficiente.

Objetivos: LCP ≤ 2,5 s, INP < 200 ms y CLS < 0,1.
