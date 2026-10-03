# Revisión de las landings de programas

Fecha: 3 de octubre de 2026.

## Alcance y evidencia

Revisión de código, datos, estilos y páginas construidas de `/alchemise`,
`/movimiento-nutricion` y `/sesion-claridad`. Inspección en navegador a 390 y
1440 px. Contraste con el HTML de la web pública, descargado durante esta
revisión, y el proyecto anterior `landing-paulambrandon`.

Fuentes principales:

- [Empieza aquí](https://www.paulambrandon.com/empieza-aqui).
- [Alchemise](https://www.paulambrandon.com/alchemise).
- `docs/seo/paulambrandon-seo.md` y `DESIGN.md`.
- `src/data/alchemise.ts`, `movimiento-nutricion.ts`, `sesion-claridad.ts`
  y `testimonials.ts`.
- `landing-paulambrandon/src/data/offers.ts` como evidencia histórica,
  no como confirmación de tarifas o disponibilidad actuales.

Este diagnóstico se realizó antes de modificar las landings. La implementación
posterior se recoge al final del documento.

## Diagnóstico compartido

| Página | Secciones | Marcadores visibles, incluidos duplicados | Alto a 1440 px |
| --- | ---: | ---: | ---: |
| Alchemise | 17 | 33 desktop / 34 móvil | 12.976 px |
| Movimiento y nutrición | 17 | 31 | 14.111 px |
| Sesión de claridad | 14 | 11 | 10.972 px |

No apareció overflow horizontal en los dos anchos inspeccionados. Esto no
equivale a una revisión completa de accesibilidad o a validar todos los
breakpoints: el problema observado es principalmente editorial y visual.

Las páginas están construidas alrededor de un inventario de bloques del
mockup. Se han conservado apartados sin contenido real, imágenes provisionales,
muchos listados y separaciones de hasta 160 px por sección. La longitud no se
corresponde con la información útil disponible. Hay pocas respuestas concretas
sobre lo que se recibe y se repite el discurso general de Método.

La conversión tampoco está resuelta: los botones de inscripción y reserva
terminan en `/contacto`, aunque la web publicada identifica canales específicos.
No es un enlace roto, pero no cumple la expectativa de reservar directamente.

## /alchemise

### Contenido recuperable

La landing publicada aporta el formato grupal de 90 días, las cuatro fases
IMAC, directos quincenales, grabaciones, ejercicios, comunidad privada y seis
meses de acceso. También describe encuentros, acceso a escapadas trimestrales,
dos guías adicionales y descuento del 10 % en entrenamiento y nutrición.

Publica 397 € frente a 497 €, una garantía de devolución durante las primeras
dos semanas y contacto comercial por WhatsApp. Estas son condiciones publicadas,
no una verificación independiente de su vigencia. El acceso a escapadas no
permite afirmar que alojamiento, transporte o asistencia estén incluidos.

Los testimonios de Ana, Alicia y Marion ya existen en `src/data/testimonials.ts`.
La página original aporta también los de Esther y Mar. No hay que mantener las
citas ficticias de `src/data/alchemise.ts` ni asignar testimonios de otros servicios.

### Qué corregir

- Sustituir el estado y el CTA de edición, calendario, prestaciones, comunidad,
  garantía, inversión y FAQ provisionales por información respaldada.
- Ampliar IMAC con la explicación específica publicada, en lugar de cuatro
  descripciones que podrían aplicarse a cualquier acompañamiento.
- Eliminar el calendario Inicio/Proceso/Integración si no existe una distribución
  temporal real. Las cuatro fases no prueban una duración fija para cada fase.
- Integrar comunidad, encuentros y bonus dentro de las prestaciones, evitando
  varias secciones casi vacías sobre el mismo asunto.
- Recuperar respuestas a dudas de asistencia, grabaciones, participación en
  grupo y compatibilidad con las responsabilidades cotidianas.

### Composición propuesta

Hero → para quién → IMAC → qué incluye y cómo se vive → testimonios →
inversión y condiciones → FAQ y contacto.

IMAC debe tener el protagonismo visual. El precio y las condiciones necesitan
un bloque legible, no otro manifiesto. La presentación de Paula puede ser breve,
con fotografía real y enlace a su historia. Reservar las imágenes de comunidad
para material auténtico disponible.

### Pendientes

La web anuncia el 27 de septiembre sin año y ocho plazas. A fecha de revisión
no permite identificar una futura edición ni la disponibilidad real. Evitar
copiar esa urgencia. Confirmar fecha, plazas, tarifa, condiciones de garantía
y costes de las experiencias antes de presentarlos como actuales.

## /movimiento-nutricion

### Contenido recuperable

La web pública describe llamada inicial, entrenamiento personalizado, guía
alimentaria flexible, recetas, estrategias de hábitos, recursos y seguimiento
con ajustes. Ofrece un mes por 149 €, tres por 390 € y seis por 690 €; señala
tres meses como opción recomendada. Deriva la reserva a SumUp Bookings y las
dudas a WhatsApp. No publica una frecuencia exacta de revisión ni un canal
de seguimiento obligatorio: no deben inventarse.

Alba, Montse, Alicia, Esther y Anca ya tienen testimonios en los datos compartidos.
Las fotografías de Anca, Esther, Montse, Ana, Marion y Clara ya están integradas
en el proyecto y en la página de testimonios. Deben reutilizarse desde la fuente
existente, con sus atribuciones, en lugar de conservar resultados provisionales.

### Qué corregir

- Explicar primero qué recibe la clienta y cómo se adapta a su rutina.
- Sustituir las descripciones vacías de Movimiento/Nutrición/Hábitos.
- Unificar Cómo funciona y Qué incluye: actualmente describen un proceso
  sin prestaciones concretas y repiten la misma necesidad de información.
- Recortar el ciclo del todo o nada, comparaciones y listas de identificación:
  basta un bloque breve para explicar el enfoque antes de mostrar el servicio.
- Recuperar las FAQ sobre restricciones, tiempo disponible, intentos anteriores
  y continuidad del acompañamiento.
- Sustituir la solicitud genérica por selección clara de duración y reserva.

### Composición propuesta

Hero → enfoque y destinataria → llamada inicial y prestaciones → resultados
y testimonios → opciones de duración y precio → FAQ y reserva.

La fotografía de Paula y los casos reales aportan la evidencia visual.
Las opciones de duración permiten comparar la misma oferta, por lo que aquí
sí tiene sentido una presentación equivalente de tres alternativas. En móvil
deben apilarse con precio total y duración claramente relacionados.

### Pendientes

Verificar vigencia de tarifas y promociones. No extrapolar descuentos entre
productos ni atribuir formación sanitaria. Documentar las credenciales reales
y el alcance del servicio con el contexto del proyecto.

## /sesion-claridad

### Contenido recuperable

La web pública confirma una sesión individual online de 60–90 minutos,
centrada en comprender un bloqueo y orientar el siguiente paso. Incluye
herramientas prácticas, tres casos de uso y reserva mediante SumUp Bookings.
Presenta testimonios de Alicia, Esther y Mar, ya existentes en los datos
compartidos. Permite acudir puntualmente sin entrar en otro programa.

### Qué corregir

- Reducir una página de 14 secciones a una explicación proporcionada para
  una sesión puntual.
- Fusionar destinatarias, temas y resultados en una explicación concreta:
  con qué situación llegar, qué ocurre y qué puede aportar la conversación.
- Sustituir la nube de palabras por contenido que ayude a decidir.
- Unificar Información práctica y Reserva para no mostrar dos tablas similares.
- Mostrar testimonios atribuidos y completar FAQ con respuestas verificables.
- Explicar el alcance profesional de forma breve e integrada; la banda oscura
  dedicada a exclusiones ocupa más atención de la que merece en el recorrido.
- Conectar Reservar con el canal publicado, conservando WhatsApp para dudas.

### Composición propuesta

Hero con modalidad y duración → cuándo puede ayudar → cómo es la sesión y
qué puedes llevarte → testimonios → datos prácticos y reserva → FAQ breve.

La jerarquía principal debe ser entender y reservar. El diseño puede apoyarse
en un retrato real, lectura breve y una superficie clara de reserva, evitando
repetir la estructura larga de Alchemise.

### Pendientes

El proyecto anterior guarda 65 €, pero ese importe no aparece en el HTML de
Empieza aquí consultado. No es un precio público confirmado. También faltan
condiciones verificadas de cancelación y reprogramación. No prometer documentos,
grabaciones ni seguimiento posterior si no están establecidos.

## Orden de trabajo recomendado

1. Centralizar los datos comerciales y los destinos reales de conversión.
2. Completar Movimiento y nutrición: es la oferta con más información práctica
   disponible y más evidencia reutilizable.
3. Simplificar y completar Sesión de claridad.
4. Rehacer Alchemise con IMAC y las prestaciones reales; resolver por separado
   la información temporal de la edición.
5. Validar las tres a 390, 768, 1024 y 1440 px, navegación por teclado, reservas,
   contenido sin JavaScript y build.

Conservar titles, H1, rutas y separación Método/Programas/Alchemise del documento
SEO. Las nuevas redacciones deben mantener el tono de Paula y distinguir
prestaciones reales, experiencias de clientas y resultados posibles.

## Implementación posterior

Completadas las tres landings tras la aprobación del cliente. Alchemise y
Movimiento pasan a siete secciones, y Sesión de claridad a seis. Las páginas
utilizan prestaciones contrastadas, testimonios compartidos y fotografía real,
sin marcadores pendientes visibles. Se eliminan los componentes, datos y
estilos exclusivos del mockup sustituido.

Las reservas de Movimiento y Sesión enlazan con SumUp Bookings. Alchemise
utiliza WhatsApp para consultar la próxima edición; no muestra fecha ni plazas
antiguas. Sesión consulta precio y condiciones en la reserva. Los precios
de Movimiento y Alchemise corresponden a los publicados en las fuentes
consultadas, sin afirmar una comprobación independiente de las condiciones.

Resultados y testimonios mantienen fuentes compartidas con `/testimonios`.
Verificados 390, 768, 1024 y 1440 px: un H1 por página, sin overflow horizontal,
sin marcadores ni imágenes rotas. FAQ operativas sin JavaScript y acceso por
teclado al contenido. Build sin errores, warnings ni hints.
