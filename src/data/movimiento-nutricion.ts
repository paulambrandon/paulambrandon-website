/**
 * Contenido de /movimiento-nutricion.
 *
 * Copy tomado literalmente del mockup aprobado (`/referencias`). Los textos
 * entre corchetes son los placeholders del propio mockup: siguen pendientes
 * del contenido real de Paula.
 */

import type { FaqItem, NumberedItem, SpecRow } from './landing';

/** Bloque de la rueda del «todo o nada». */
export interface CycleStep {
  readonly label: string;
  /** El tramo en el que el ciclo se rompe se marca en terracota. */
  readonly breaking?: boolean;
}

/** Área de trabajo del acompañamiento. */
export interface WorkArea {
  readonly title: string;
  readonly text: string;
}

/**
 * TODO: falta el proceso real de solicitud. Mientras no exista formulario ni
 * enlace propio, la conversión pasa por contacto en lugar de un enlace muerto.
 */
export const requestHref = '/contacto';

export const heroLede =
  'Un acompañamiento para cuidar tu cuerpo, tu alimentación y tu entrenamiento sin convertirlos en otra forma de exigirte.';

export const careBecomesDemand: readonly string[] = [
  'Entrenas y sientes culpa cuando faltas.',
  'Comes algo que no estaba previsto y sientes que has fallado.',
  'Empiezas una rutina perfecta y la abandonas cuando no puedes cumplirla.',
  'Una semana irregular se convierte en «ya lo he estropeado».',
  'Tu cuerpo siempre parece necesitar otro cambio.',
  'Solo consideras que lo estás haciendo bien cuando lo haces perfecto.',
  'Te cuesta encontrar una forma de cuidarte que puedas sostener.',
];

export const cycle: readonly CycleStep[] = [
  { label: 'Motivación' },
  { label: 'Plan perfecto' },
  { label: 'Control' },
  { label: 'Un día no sale como esperabas' },
  { label: 'Culpa', breaking: true },
  { label: 'Abandono', breaking: true },
];

export const cycleClosing = '«El lunes empiezo otra vez.»';

export const paradigmStatement =
  'No necesitas elegir entre cuidarte y vivir en paz.';

export const paradigmText =
  'Puedes tener objetivos. Puedes entrenar. Puedes querer cambiar físicamente. Puedes cuidar tu alimentación. La diferencia está en que el proceso no tenga que sostenerse siempre desde culpa, miedo, castigo, control o perfección.';

export const twoWays: readonly { readonly a: string; readonly b: string }[] = [
  {
    a: 'Entrenar porque tienes que compensar.',
    b: 'Entrenar porque quieres cuidar tu cuerpo.',
  },
  {
    a: 'Saltarte una sesión y sentir que has fallado.',
    b: 'Adaptar el entrenamiento a la vida real.',
  },
  {
    a: 'Comer algo fuera del plan y pensar que has arruinado la semana.',
    b: 'Entender que una comida no define todo el proceso.',
  },
  {
    a: 'Necesitar hacerlo perfecto para seguir.',
    b: 'Construir constancia aunque algunas semanas no sean perfectas.',
  },
  {
    a: 'Cambiar tu cuerpo para sentir que por fin vales.',
    b: 'Querer cambiar físicamente sin convertir ese resultado en la medida de tu valor.',
  },
];

export const workAreas: readonly WorkArea[] = [
  { title: 'Movimiento', text: '[DESCRIPCIÓN REAL DE MOVIMIENTO]' },
  { title: 'Nutrición', text: '[DESCRIPCIÓN REAL DE NUTRICIÓN]' },
  { title: 'Hábitos', text: '[DESCRIPCIÓN REAL DE HÁBITOS]' },
];

export const workStatement =
  'Tu entrenamiento no ocurre separado de tu alimentación. Y ninguno de los dos ocurre separado de tu vida.';

export const workFormula = 'Movimiento × Nutrición × Vida real';

/**
 * Orden por columnas: los cuatro primeros forman la columna izquierda en
 * pantallas anchas y se leen seguidos en móvil.
 */
export const forYouIf: readonly string[] = [
  'Quieres mejorar físicamente sin volver a una dinámica obsesiva.',
  'Te cuesta ser constante.',
  'Vives entre hacerlo perfecto o abandonar.',
  'Sientes culpa cuando no entrenas.',
  'Necesitas una estructura, pero no otra cárcel.',
  'Quieres mejorar tu alimentación sin que ocupe toda tu cabeza.',
  'Quieres cuidarte desde un lugar que puedas sostener.',
  'Tienes objetivos físicos pero no quieres que definan cuánto vales.',
];

export const notForYou = '[CRITERIOS REALES DE «NO ES PARA TI»]';

export const howItWorks: readonly NumberedItem[] = [
  { title: 'Punto de partida', text: '[QUÉ SE EVALÚA REALMENTE]' },
  { title: 'Plan / acompañamiento', text: '[QUÉ RECIBE REALMENTE]' },
  { title: 'Seguimiento', text: '[CÓMO FUNCIONA REALMENTE]' },
  { title: 'Ajustes', text: '[CÓMO SE ADAPTA REALMENTE]' },
];

export const includes: readonly SpecRow[] = [
  { label: 'Entrenamiento', value: '[PLAN DE ENTRENAMIENTO — SI APLICA]' },
  {
    label: 'Nutrición',
    value: '[PAUTA / ACOMPAÑAMIENTO NUTRICIONAL — DEFINICIÓN REAL]',
  },
  { label: 'Seguimiento', value: '[SEGUIMIENTO — FRECUENCIA REAL]' },
  { label: 'Revisiones', value: '[REVISIONES — SI EXISTEN]' },
  { label: 'Canal de contacto', value: '[CANAL DE CONTACTO — SI EXISTE]' },
  { label: 'Recursos', value: '[RECURSOS — SI EXISTEN]' },
];

export const outcomes: readonly WorkArea[] = [
  {
    title: 'Resultado',
    text: 'Cambios físicos, rendimiento, fuerza y hábitos visibles — solo cuando están respaldados por casos reales.',
  },
  {
    title: 'Relación con el proceso',
    text: 'Constancia, menos culpa, relación más sostenible y capacidad para continuar aunque una semana no sea perfecta.',
  },
];

/** TODO: pendientes las fotografías reales de resultados autorizadas. */
export const resultsNote = 'Cada proceso y cada resultado son diferentes.';

/** TODO: pendientes los testimonios reales autorizados. */
export const featuredTestimonial = '[TESTIMONIO MOVIMIENTO Y NUTRICIÓN 01]';

export const testimonials: readonly string[] = [
  '[TESTIMONIO MOVIMIENTO Y NUTRICIÓN 02]',
  '[TESTIMONIO MOVIMIENTO Y NUTRICIÓN 03]',
];

export const authorText =
  'Breve presentación de Paula y su relación con el movimiento, la alimentación y el acompañamiento a otras mujeres.';

export const credentials: readonly WorkArea[] = [
  { title: 'Formación', text: '[CREDENCIALES REALES]' },
  { title: 'Certificaciones', text: '[CERTIFICACIONES REALES]' },
  { title: 'Experiencia', text: '[EXPERIENCIA REAL]' },
];

export const scope = '[TEXTO REAL SOBRE ALCANCE Y LÍMITES DEL SERVICIO]';

export const request: readonly SpecRow[] = [
  { label: 'Precio', value: '[PRECIO REAL]' },
  { label: 'Duración', value: '[DURACIÓN REAL]' },
  { label: 'Forma de pago', value: '[FORMA DE PAGO REAL]' },
  { label: 'Disponibilidad', value: '[PLAZAS / DISPONIBILIDAD REAL]' },
];

/** TODO: pendientes las preguntas y respuestas reales. */
export const faq: readonly FaqItem[] = [
  {
    question: '[PREGUNTA REAL SOBRE CÓMO FUNCIONA]',
    answer: '[RESPUESTA REAL]',
  },
  {
    question: '[PREGUNTA REAL SOBRE ENTRENAMIENTO]',
    answer: '[RESPUESTA REAL]',
  },
  { question: '[PREGUNTA REAL SOBRE NUTRICIÓN]', answer: '[RESPUESTA REAL]' },
  { question: '[PREGUNTA REAL SOBRE ADAPTACIÓN]', answer: '[RESPUESTA REAL]' },
  { question: '[PREGUNTA REAL SOBRE PRECIO]', answer: '[RESPUESTA REAL]' },
  { question: '[PREGUNTA REAL SOBRE REQUISITOS]', answer: '[RESPUESTA REAL]' },
];
