## Paula Márquez Brandon

Este documento traduce el mockup aprobado a reglas de implementación.

Referencia visual:

- **Desktop:** 1440 px
- **Mobile:** 390 px

La implementación debe partir de **mobile first** y escalar progresivamente hacia desktop.

> El PDF define la dirección visual. Para SEO, copy final, headings y metadata, manda `/docs/seo/paulambrandon-seo.md`.

---

## 1. Dirección visual

La web tiene una estética:

- editorial;
- cálida;
- sobria;
- femenina sin caer en clichés visuales;
- muy limpia;
- pausada;
- centrada en tipografía, espacio y fotografía;
- con contraste entre fondos crema/blanco cálido;
- con acentos oliva y terracota.

No debe sentirse como:

- una landing SaaS;
- una web de coaching genérica llena de degradados;
- una interfaz de app;
- un diseño con exceso de cards, sombras o bordes redondeados;
- una web con animaciones llamativas.

La sensación buscada es de **calma, profundidad, claridad y confianza**.

---

## 2. Paleta

Colores aproximados muestreados del mockup. Si el proyecto ya contiene tokens de marca exactos, **los tokens existentes tienen prioridad**.

```scss
// Referencia aproximada, no duplicar si ya existen variables equivalentes.
$color-paper:       #fffdf8;
$color-sand:        #eae2d5;
$color-charcoal:    #3a362f;
$color-olive:       #6e7561;
$color-terracotta:  #b16c48;
```

### Uso

**Paper / blanco cálido**
- bloques de contenido principal;
- cards;
- CTA final;
- áreas donde se busca mayor contraste.

**Sand / beige**
- fondo dominante de la Home;
- bloques de problema;
- transformación;
- programas;
- testimonios.

**Charcoal**
- texto principal;
- footer.

**Olive**
- CTA primario;
- líneas/bordes puntuales;
- elementos numéricos;
- enlaces con énfasis.

**Terracotta**
- acento editorial;
- palabras concretas destacadas;
- eyebrow/label;
- nunca como color dominante.

No añadir colores nuevos sin necesidad.

---

## 3. Tipografía

El mockup combina dos familias visuales:

### Serif editorial

Usar para:

- H1;
- H2;
- títulos de cards relevantes;
- citas/manifiestos;
- algunos textos introductorios.

Debe sentirse elegante, orgánica y editorial.

### Sans serif limpia

Usar para:

- navegación;
- cuerpo;
- labels;
- botones;
- textos auxiliares;
- footer;
- metadata visual.

### Cursiva serif

Usar de forma puntual para:

- preheadings;
- frases introductorias;
- subrayar tono editorial.

### Regla importante

No elegir o importar una fuente externa basándose únicamente en una suposición del mockup.

Antes:

1. revisar fuentes existentes en el proyecto;
2. revisar `public/`;
3. revisar variables Sass;
4. usar la familia definida por diseño/cliente si existe.

Si no existe una fuente aprobada, no meter Google Fonts arbitrariamente.

---

## 4. Escala tipográfica

La escala debe ser fluida.

Valores orientativos:

```text
Hero H1
mobile:  ~2.25–2.6rem
desktop: ~3.6–4.2rem

H2
mobile:  ~1.8–2.1rem
desktop: ~2.5–3rem

H3 / card title
mobile:  ~1.25–1.5rem
desktop: ~1.4–1.75rem

Body
mobile:  ~1rem
desktop: ~1rem–1.05rem

Small / label
~0.75–0.9rem
```

Preferir `clamp()`.

No usar tamaños desktop fijos en la base móvil.

---

## 5. Ritmo y espaciado

La Home depende mucho del espacio negativo.

### Principios

- mucho aire vertical entre secciones;
- bloques internos con separación clara;
- líneas de texto relativamente cortas;
- no comprimir el contenido para "que quepa";
- mantener el ritmo editorial del mockup.

### Contenedor

Desktop:

- contenido centrado;
- ancho máximo aproximado de 1180–1240 px;
- margen lateral generoso.

Mobile:

- padding lateral aproximado de 16–24 px;
- cards e imágenes casi a ancho completo;
- no pegar texto al borde.

### Escala orientativa

```text
xs   0.5rem
sm   0.75rem
md   1rem
lg   1.5rem
xl   2rem
2xl  3rem
3xl  4rem
4xl  5–7rem
```

Mapear esta lógica a los tokens ya existentes de Sass.

---

## 6. Bordes, radios y sombras

El diseño es recto y editorial.

- Cards con esquinas prácticamente cuadradas.
- Botones rectangulares.
- Bordes finos.
- Divisores discretos.
- Sin sombras fuertes.
- No usar glassmorphism.
- No usar blur.
- No introducir grandes border-radius.

Si el proyecto ya define radios, usar el mínimo compatible con el mockup.

---

## 7. Botones y enlaces

### CTA primario

- fondo oliva;
- texto claro;
- rectangular;
- padding cómodo;
- tipografía sans;
- flecha `→` cuando aparezca en el diseño.

Ejemplos:

- `Descubre qué hay realmente detrás →`
- `Conoce el método →`
- `Contactar →`

### CTA secundario

- fondo transparente;
- borde fino oliva/charcoal;
- texto oscuro;
- rectangular.

Ejemplos:

- `¿Cómo conseguimos esa transformación?`
- `Ver programas →`
- `Ver testimonios →`

### Enlaces editoriales

- texto subrayado o con línea inferior discreta;
- flecha cuando corresponda;
- sin apariencia de botón si el mockup lo trata como enlace.

No convertir todos los enlaces en botones.

---

## 8. Header

### Desktop

Composición:

```text
[ paulambrandon ]                          [ Inicio Método Programas Sobre mí Testimonios Contacto ]
```

- fondo paper/blanco cálido;
- logo textual a la izquierda;
- navegación horizontal a la derecha;
- altura contenida;
- diseño limpio sin borde pesado;
- enlaces sans de tamaño pequeño/medio.

### Mobile

```text
[ paulambrandon ]                                           [ ☰ ]
```

- logo a la izquierda;
- hamburguesa a la derecha;
- menú colapsado inicialmente;
- panel de navegación accesible;
- todos los enlaces deben existir como `<a>` reales.

No usar un menú que dependa de una librería externa.

### Destinos de navegación

El diseño visual y la arquitectura SEO se conectan así:

```text
Método                  → /metodo
Programas               → /programas
Sobre mí                 → /sobre-mi
Testimonios              → /testimonios
Contacto                 → /contacto
Alchemise                → /alchemise
Movimiento y nutrición   → /movimiento-nutricion
Sesión de claridad       → /sesion-claridad
```

No sustituir estos enlaces por anclas ficticias si la página ya tiene URL definida.

---

## 9. Hero

### Contenido

Eyebrow:

`No necesitas convertirte en otra mujer.`

Titular principal del mockup:

`Necesitas dejar de construir tu vida alrededor de la idea de que no eres suficiente.`

**Nota semántica:** visualmente este es el titular principal. El SEO master contiene una referencia anterior que asigna el H1 al eyebrow `No necesitas convertirte en otra mujer…`. Antes de cerrar la Home debe corregirse esa discrepancia en `/docs/seo/paulambrandon-seo.md`; no usar dos H1 para intentar satisfacer ambas versiones.

CTA:

`Descubre qué hay realmente detrás →`

Imagen:

- retrato principal;
- proporción indicada en el mockup: **4:5**.

### Mobile — orden obligatorio

```text
Header
Imagen 4:5
Eyebrow
H1
CTA
```

La imagen aparece **antes del texto**.

El hero no debe intentar forzar dos columnas en móvil.

### Desktop

Dos columnas:

```text
| texto amplio                         | retrato 4:5 |
```

- texto a la izquierda;
- imagen a la derecha;
- columna de texto claramente más ancha;
- H1 de gran presencia;
- CTA alineado a la izquierda.

El bloque superior debe respirar. No apretar el H1 contra header o CTA.

---

## 10. Sección problema

Fondo beige.

Heading centrado:

`¿Y si llevas años intentando solucionar el problema equivocado?`

Dos grupos de contenido:

```text
Has probado...
— Cambiar tu cuerpo
— Ser más disciplinada
— Trabajar la autoestima
— Aprender a poner límites
— Ganar confianza
— Crear la rutina perfecta
— Volver a empezar, otra vez

Y aun así...
• Siempre aparece otra cosa que cambiar
• Vuelves al mismo punto una y otra vez
• Sigues sintiendo que hay algo mal en ti
• La calma dura muy poco
```

Cierre:

`Da igual cuánto cambies por fuera. Siempre acabas sintiendo que todavía falta algo.`

### Mobile

- una sola columna;
- primer listado completo;
- después segundo listado;
- divisor antes del cierre;
- cierre alineado a la izquierda.

### Desktop

- heading centrado;
- dos columnas equilibradas;
- divisor horizontal;
- cierre centrado.

---

## 11. Sección manifiesto

Fondo paper.

Estructura centrada:

Cursiva:

`El problema nunca fue querer cambiar.`

Heading:

`Fue creer que necesitabas cambiar para sentirte suficiente`

La expresión `sentirte suficiente` utiliza el acento terracota.

### Responsive

- bloque relativamente corto;
- mucho espacio vertical;
- ancho de texto controlado;
- no estirar el heading a todo el viewport.

---

## 12. Transformación — antes / después

Fondo beige.

Heading:

`Así se ve una transformación real`

### Desktop

Formato tabla/lista horizontal con cabeceras:

```text
ANTES                                       DESPUÉS
```

Cada fila es una banda clara:

```text
Buscar constantemente qué mejorar     →     Dejar de vivir buscando qué corregir
Entrenar para cambiar tu cuerpo        →     Cuidar tu cuerpo desde el respeto
Medir tu valor por lo que haces        →     Separar tu valor de tu productividad
...
```

- fondo claro por fila;
- separación vertical entre filas;
- flecha dentro de un pequeño círculo central;
- columnas perfectamente legibles.

### Mobile

No comprimir la tabla.

Cada comparación se convierte en una card vertical:

```text
ANTES
Buscar constantemente qué mejorar

DESPUÉS
Dejar de vivir buscando qué corregir
```

- una card por pareja;
- labels uppercase pequeños;
- el texto "después" debe tener más peso visual;
- stack continuo.

CTA secundario al final:

`¿Cómo conseguimos esa transformación?`

---

## 13. Método / proceso

Fondo paper.

Heading centrado:

`La mayor transformación de tu vida no empieza cuando haces más`

Subheading cursiva:

`Empieza el día que dejas de creer que hay algo en ti que hay que arreglar.`

Texto puente:

`Y ese cambio pasa por un proceso, con tres etapas:`

Tres pasos:

1. `Entender el origen`
2. `Transformar la relación que tienes contigo misma`
3. `Llevar ese cambio a tu vida`

### Visual de los pasos

- número `01`, `02`, `03` dentro de círculo fino;
- título serif;
- descripción sans;
- divisores finos entre pasos.

### Desktop

- contenido en una columna central relativamente estrecha;
- pasos horizontales: número a la izquierda, copy a la derecha.

### Mobile

- mismo patrón;
- número y contenido lado a lado;
- copy puede ocupar varias líneas;
- mantener el círculo sin deformarlo.

CTA primario:

`Conoce el método →`

---

## 14. Formas de trabajar conmigo

Fondo beige.

Heading:

`Formas de trabajar conmigo`

### Desktop

Grid asimétrico:

```text
| Alchemise — card grande con imagen | Movimiento y nutrición |
|                                     | Sesión de claridad      |
```

Card principal:

- imagen panorámica en la parte superior;
- título `Alchemise`;
- texto `Programa grupal de 90 días.`;
- enlace `Descubrir Alchemise →`.

Cards secundarias:

- sin necesidad de imagen en el mockup;
- fondo paper;
- título serif;
- `Movimiento y nutrición`: descripción visible `Acompañamiento personalizado.`;
- `Sesión de claridad`: descripción visible `Sesión individual y puntual.`;
- enlace `Descubrir →`.

CTA secundario centrado:

`Ver programas →`

### Mobile

Todo en una sola columna:

1. Alchemise
2. Movimiento y nutrición
3. Sesión de claridad
4. CTA `Ver programas →`

La card Alchemise conserva la imagen en la parte superior.

---

## 15. Sobre Paula

Fondo paper.

Imagen de Paula:

- retrato;
- proporción **4:5**.

Eyebrow:

`Sobre Paula`

Texto principal de referencia:

`También viví durante años con la sensación de que siempre había algo que arreglar o mejorar, y esa experiencia acabó conectándose con la forma en la que hoy acompaño a otras mujeres.`

Enlace:

`Conoce mi historia →`

### Mobile

Orden:

```text
Imagen
Eyebrow
Copy
Enlace
```

### Desktop

Dos columnas:

```text
| retrato 4:5 | copy |
```

- imagen a la izquierda;
- texto a la derecha;
- copy alineado verticalmente hacia el centro de la imagen;
- texto con ancho limitado.

---

## 16. Testimonios

Fondo beige.

Heading:

`Mujeres que ya han hecho este proceso`

Cada testimonio:

- texto/cita en serif cursiva;
- nombre debajo;
- divisor entre testimonios.

El mockup muestra dos testimonios como referencia.

CTA secundario:

`Ver testimonios →`

### Desktop

- contenido en columna central;
- ancho relativamente estrecho;
- separadores largos pero no full-bleed.

### Mobile

- una sola columna;
- heading centrado;
- testimonios alineados a la izquierda;
- CTA centrado.

---

## 17. CTA final de contacto

Fondo paper.

Heading:

`¿Tienes dudas antes de dar el paso?`

Cursiva:

`No hace falta que llegues con las ideas claras para escribirme.`

Body:

`Cuéntame dónde estás y te ayudo a ver qué encaja contigo.`

CTA primario:

`Contactar →`

Todo centrado y con mucho espacio vertical.

---

## 18. Footer

Fondo charcoal oscuro.

Contenido centrado.

Orden visual:

1. `paulambrandon`
2. `© 2026 Paula Márquez Brandon`
3. navegación principal
4. redes:
   - Instagram
   - YouTube
5. legales:
   - Aviso legal
   - Privacidad
   - Cookies

### Desktop

- navegación principal en línea;
- redes en línea;
- legales en línea.

### Mobile

- navegación principal apilada;
- redes en una fila corta;
- legales en una fila si caben, permitiendo wrap controlado;
- espacio vertical generoso.

El footer no debe convertirse en una cuadrícula compleja.

---

## 19. Alternancia de fondos

La secuencia visual de la Home es importante:

```text
Header / Hero                 → paper + sand
Problema                      → sand
Manifiesto                    → paper
Transformación                → sand
Método                        → paper
Programas                     → sand
Sobre Paula                   → paper
Testimonios                   → sand
CTA contacto                  → paper
Footer                        → charcoal
```

Mantener esta alternancia.

---

## 20. Responsive

### Base

Todos los estilos parten de móvil.

### Breakpoints

Usar los breakpoints existentes en `src/sass`.

Si todavía no existen, definir pocos breakpoints funcionales; no crear uno por dispositivo.

Orientación conceptual:

```text
mobile       base
tablet       ~768 px
desktop      ~1024 px
wide         ~1280 px
```

No asumir que estos números deben crearse si la arquitectura Sass ya tiene otros.

### Cambios principales al crecer

- header: hamburguesa → nav horizontal;
- hero: stack → dos columnas;
- listas de problema: stack → dos columnas;
- transformación: cards → tabla horizontal;
- programas: stack → grid asimétrico;
- about: stack → dos columnas;
- footer: stack → navegación horizontal.

---

## 21. Imágenes

El diseño usa fotografía como elemento editorial principal.

Principios:

- evitar crops arbitrarios;
- respetar proporciones;
- `object-fit: cover` solo cuando sea necesario;
- focal point correcto;
- no deformar;
- tamaño responsive;
- imágenes reales y no placeholders en producción.

Retratos principales:

```text
aspect-ratio: 4 / 5;
```

No usar imágenes como decoración de fondo si representan contenido real.

---

## 22. Motion

La web funciona perfectamente sin animaciones.

Si se añaden:

- deben ser discretas;
- rápidas;
- sin parallax;
- sin scroll hijacking;
- sin grandes desplazamientos;
- sin bloquear interacción;
- respetando `prefers-reduced-motion`.

La ausencia de animación es preferible a una animación que rompa el tono editorial.

---

## 23. Accesibilidad visual

- Focus visible y coherente.
- El terracota no debe ser el único indicador de un estado.
- Contraste de texto suficiente sobre beige y oliva.
- Texto auxiliar nunca demasiado pequeño.
- Targets táctiles cómodos en mobile.
- Cursivas limitadas a fragmentos breves.
- No convertir texto largo en mayúsculas.

---

## 24. Reglas de precisión

Al comparar la implementación con el mockup, priorizar en este orden:

1. estructura;
2. orden de contenido;
3. responsive;
4. ancho de contenedores;
5. proporciones de imágenes;
6. jerarquía tipográfica;
7. ritmo vertical;
8. fondos;
9. CTAs;
10. detalles finos.

No compensar una estructura incorrecta con offsets, `position: absolute` o valores arbitrarios.

---

## 25. Cosas que romperían el diseño

Evitar expresamente:

- hero desktop-first comprimido en móvil;
- cards redondeadas;
- sombras visibles;
- gradientes;
- colores saturados;
- excesivos iconos;
- navegación sticky agresiva;
- texto centrado en bloques que en el mockup están alineados a la izquierda;
- párrafos demasiado anchos;
- tablas horizontales con scroll en móvil para la sección "Antes/Después";
- alturas fijas;
- animaciones de entrada en todos los elementos;
- cambios de orden que contradigan el mockup.

---

## 26. Criterio final

La Home debe sentirse como la misma web en cualquier ancho, no como una versión desktop y otra móvil desconectadas.

El responsive correcto conserva:

- el mismo tono;
- la misma jerarquía;
- el mismo ritmo;
- la misma intención;
- la misma importancia relativa de cada bloque.

La implementación comienza en **390 px** y se amplía hasta reproducir la composición de **1440 px**.

## 27. Página Método — referencia visual: web antigua

Por instrucción del cliente, `/metodo` reproduce la dirección visual de la web
publicada en paulambrandon.com. Esta revisión sustituye la propuesta anterior.
La Home conserva su implementación.

Orden: hero → por qué no basta con cambiar desde fuera → tres etapas → cómo
te acompaño → qué diferencia el enfoque → qué puedes empezar a notar → programas.

- Cormorant Garamond en titulares y botones, Inter en cuerpo. Fuentes originales
  verificadas, servidas localmente en WOFF2 y aplicadas solo en Método.
- Fondo crema #faf8f4 y arena #f3ede6. Texto marrón #4a3b33, secundario #6e5d53,
  oliva #606957 para botones. Terracota accesible para acentos textuales.
- Hero tipográfico centrado, sin fotografía ni fondo partido, para que Método
  tenga una entrada propia y no replique la composición de Inicio.
- Secciones centradas, medidas de lectura de 620–880 px y titulares serif.
- Tres etapas conectadas verticalmente en móvil y distribuidas en tres columnas
  protagonistas en desktop.
- Retrato con marco desplazado dentro de «Cómo te acompaño», junto al contenido.
- Diferenciación sobre crema, sin banda oscura ni grandes cifras decorativas.
- Resultados posibles en filas claras con flecha circular, inspiradas en las
  comparaciones de la web antigua. Botones serif con radio discreto de 4 px.
- Conservar el copy y el H1 del SEO master. IMAC permanece en Alchemise.
