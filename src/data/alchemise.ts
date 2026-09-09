/**
 * Contenido de /alchemise.
 *
 * Copy tomado literalmente del mockup aprobado (`/referencias`). Esta landing
 * está en gran parte pendiente de datos reales: cada texto entre corchetes es
 * un placeholder del propio mockup y no se sustituye por texto inventado.
 */

import type { FaqItem, NamedQuote, NumberedItem, SpecRow } from './landing';

/** Par «desde dónde» → «hacia dónde» de la sección de transformación. */
export interface ShiftPair {
  readonly from: string;
  readonly to: string;
}

/** Fase del método IMAC. */
export interface ImacPhase {
  readonly letter: string;
  readonly title: string;
  readonly text: string;
}

/** Tramo del calendario de los 90 días. */
export interface TimelinePhase {
  readonly label: string;
  readonly text: string;
}

/**
 * TODO: el estado de la edición y su llamada a la acción dependen de si hay
 * inscripción abierta, lista de espera o edición cerrada. Hasta que Paula lo
 * defina se mantiene el marcador del mockup.
 */
export const editionStatus = '[ESTADO ACTUAL DE LA EDICIÓN]';
export const editionCta = '[CTA SEGÚN ESTADO DE EDICIÓN]';

/**
 * TODO: falta la URL real de inscripción o lista de espera. Mientras no
 * exista, la conversión pasa por contacto en lugar de por un enlace muerto.
 */
export const signupHref = '/contacto';

export const heroSubtitle = 'Programa grupal de 90 días para mujeres.';

export const heroLede =
  'Un proceso para dejar de vivir desde la autoexigencia y la sensación de que siempre hay algo en ti que arreglar, sin dejar de crecer ni renunciar a aquello que quieres.';

export const heroNote =
  '90 días · Formato grupal · [DATO REAL SI ESTÁ CONFIRMADO]';

export const knownTruths: readonly string[] = [
  'Sabes que necesitas descansar.',
  'Sabes que deberías dejar de exigirte tanto.',
  'Sabes que no puedes controlar todo.',
  'Sabes que no necesitas hacerlo perfecto.',
  'Sabes que deberías poner límites.',
  'Sabes que no deberías medir tu valor por tu productividad.',
];

/**
 * Orden por columnas: los cuatro primeros forman la columna izquierda en
 * pantallas anchas y se leen seguidos en móvil.
 */
export const forYouIf: readonly string[] = [
  'Sientes que nunca haces suficiente.',
  'Eres muy exigente contigo misma.',
  'Cuando consigues algo, ya estás pensando en lo siguiente.',
  'Descansar te genera culpa.',
  'Necesitas aprobación externa.',
  'Poner límites te hace sentir culpable.',
  'Sabes muchas cosas de desarrollo personal, pero te cuesta llevarlas a tu vida.',
  'Sigues buscando qué parte de ti deberías cambiar.',
];

export const notForYou = '[CRITERIOS REALES DE «NO ES PARA TI»]';

export const shifts: readonly ShiftPair[] = [
  {
    from: '«Siempre hay algo en mí que tengo que mejorar.»',
    to: '«Puedo querer crecer sin tratarme como un problema.»',
  },
  {
    from: '«Si descanso, debería estar haciendo algo.»',
    to: '«Mi descanso no tiene que ganarse.»',
  },
  {
    from: '«Tengo que demostrar que valgo.»',
    to: '«Mi valor no depende de lo que consiga.»',
  },
  {
    from: '«Si no puedo hacerlo perfecto, lo abandono.»',
    to: '«Puedo sostener algo incluso cuando no sale perfecto.»',
  },
  {
    from: '«Poner un límite significa decepcionar.»',
    to: '«Puedo elegirme aunque no siempre guste.»',
  },
];

export const imacPhases: readonly ImacPhase[] = [
  {
    letter: 'I',
    title: 'Identificar',
    text: 'Reconocer el patrón. Entender cómo aparece y desde dónde estás actuando.',
  },
  {
    letter: 'M',
    title: 'Modificar',
    text: 'Empezar a cambiar la manera en la que te relacionas contigo y respondes a ese patrón.',
  },
  {
    letter: 'A',
    title: 'Aplicar',
    text: 'Llevar lo trabajado a situaciones reales de tu vida.',
  },
  {
    letter: 'C',
    title: 'Consolidar',
    text: 'Sostener e integrar lo aprendido más allá de un momento puntual.',
  },
];

export const timeline: readonly TimelinePhase[] = [
  { label: 'Inicio', text: '[CALENDARIO REAL ALCHEMISE]' },
  { label: 'Proceso', text: '[CALENDARIO REAL ALCHEMISE]' },
  { label: 'Integración', text: '[CALENDARIO REAL ALCHEMISE]' },
];

export const includes: readonly NumberedItem[] = [
  { title: 'Sesiones', text: '[SESIONES REALES] · [FRECUENCIA REAL]' },
  { title: 'Comunidad', text: '[COMUNIDAD — COPY REAL]' },
  { title: 'Recursos', text: '[MATERIALES REALES]' },
  { title: 'Encuentros', text: '[ENCUENTROS REALES]' },
  { title: 'Bonus', text: '[BONUS REALES]' },
];

export const communityText = '[COPY REAL SOBRE LA COMUNIDAD]';

export const encountersText = '[EXPERIENCIA REAL DE LA EDICIÓN]';

/** TODO: pendientes los testimonios reales autorizados. */
export const featuredTestimonial: NamedQuote = {
  quote: '[TESTIMONIO ALCHEMISE — ANA]',
  author: 'Ana',
};

export const testimonials: readonly NamedQuote[] = [
  { quote: '[TESTIMONIO ALCHEMISE — ALICIA]', author: 'Alicia' },
  { quote: '[TESTIMONIO ALCHEMISE — MARION]', author: 'Marion' },
  { quote: '[TESTIMONIO ALCHEMISE — ESTHER]', author: 'Esther' },
];

export const authorText =
  'Alchemise nace de mi propia experiencia y de lo que he ido aprendiendo acompañando a otras mujeres.';

export const authorCredentials = '[CREDENCIALES REALES DE PAULA]';

export const guarantee = '[GARANTÍA REAL — COPY Y CONDICIONES APROBADAS]';

export const investment: readonly SpecRow[] = [
  { label: 'Precio', value: '[PRECIO REAL]' },
  { label: 'Forma de pago', value: '[FORMA DE PAGO REAL]' },
  { label: 'Fecha', value: '[FECHA REAL]' },
  { label: 'Plazas', value: '[PLAZAS REALES]' },
];

/** TODO: pendientes las preguntas y respuestas reales. */
export const faq: readonly FaqItem[] = [
  { question: '[PREGUNTA REAL 01]', answer: '[RESPUESTA REAL]' },
  { question: '[PREGUNTA REAL 02]', answer: '[RESPUESTA REAL]' },
  { question: '[PREGUNTA REAL 03]', answer: '[RESPUESTA REAL]' },
  { question: '[PREGUNTA REAL 04]', answer: '[RESPUESTA REAL]' },
];
