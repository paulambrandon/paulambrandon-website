/**
 * Contenido de /sesion-claridad.
 *
 * Copy tomado literalmente del mockup aprobado (`/referencias`). Los textos
 * entre corchetes son los placeholders del propio mockup: siguen pendientes
 * del contenido real de Paula.
 */

import type { FaqItem, NumberedItem, SpecRow } from './landing';

/** Concepto de la nube «qué podemos mirar juntas». */
export interface CloudTopic {
  readonly label: string;
  readonly size: 1 | 2 | 3 | 4 | 5;
  readonly font: 'serif' | 'sans';
  readonly tone: 'ink' | 'muted' | 'accent' | 'olive';
}

/**
 * TODO: falta el enlace real de reserva. Mientras no exista, la conversión
 * pasa por contacto en lugar de por un enlace muerto.
 */
export const bookingHref = '/contacto';

export const heroLede =
  'Un espacio para detenerte, ordenar lo que está ocurriendo y ver con más claridad cuál puede ser tu siguiente paso.';

export const heroNote = '60–90 min · Individual';

export const noMoreInfo =
  'A veces no falta otra información, otro vídeo, otro libro o seguir pensando durante semanas. Puede faltar un espacio donde ordenar lo que está pasando y observarlo desde otra perspectiva.';

export const forYouIf: readonly string[] = [
  'Llevas tiempo dando vueltas a una decisión.',
  'Sabes que algo no está funcionando pero te cuesta identificar qué.',
  'Sientes que estás funcionando en automático.',
  'Quieres poner palabras a algo que llevas evitando.',
  'Necesitas ordenar varias ideas que ahora mismo tienes mezcladas.',
  'Detectas que estás repitiendo un patrón pero no sabes cómo abordarlo.',
  'Quieres entender qué siguiente paso puede tener más sentido para ti.',
  'No sabes cuál de los acompañamientos de Paula encaja contigo.',
];

export const topics: readonly CloudTopic[] = [
  { label: 'Autoexigencia', size: 2, font: 'serif', tone: 'ink' },
  { label: 'Límites', size: 1, font: 'sans', tone: 'muted' },
  { label: 'Decisiones', size: 4, font: 'serif', tone: 'accent' },
  { label: 'Hábitos', size: 1, font: 'sans', tone: 'ink' },
  { label: 'Relación contigo', size: 3, font: 'serif', tone: 'muted' },
  { label: 'Bloqueos', size: 1, font: 'sans', tone: 'olive' },
  { label: 'Objetivos', size: 3, font: 'serif', tone: 'ink' },
  { label: 'Necesidad de aprobación', size: 1, font: 'sans', tone: 'muted' },
  { label: 'Perfeccionismo', size: 2, font: 'serif', tone: 'accent' },
  { label: 'Sensación de no ser suficiente', size: 1, font: 'sans', tone: 'ink' },
];

export const howItWorks: readonly NumberedItem[] = [
  {
    title: 'Llegas con lo que estás viviendo',
    text: 'No necesitas traerlo perfectamente ordenado.',
  },
  {
    title: 'Lo miramos juntas',
    text: 'Paula te acompaña a observar la situación, hacer preguntas y detectar aquello que puede estar pasando desapercibido.',
  },
  {
    title: 'Te llevas mayor claridad sobre el siguiente paso',
    text: 'Perspectiva y claridad, no una solución garantizada.',
  },
];

export const notTherapy =
  'No es terapia, psicoterapia, diagnóstico, atención psicológica ni asesoramiento médico. No sustituye atención profesional sanitaria cuando sea necesaria.';

export const professionalScope = '[TEXTO REAL SOBRE ALCANCE PROFESIONAL]';

export const takeaways: readonly string[] = [
  'La intención es que te lleves una visión más ordenada de lo que está ocurriendo.',
  'Puede ayudarte a encontrar preguntas que quizá no te habías planteado.',
  'La intención es ganar mayor claridad sobre qué necesitas ahora.',
  'Puede ayudarte a identificar posibles siguientes pasos.',
  'Puede ayudarte a entender si necesitas seguir trabajando algo y de qué manera.',
];

/** TODO: pendientes los testimonios reales autorizados. */
export const featuredTestimonial = '[TESTIMONIO REAL SESIÓN DE CLARIDAD 01]';

export const testimonials: readonly string[] = [
  '[TESTIMONIO REAL SESIÓN DE CLARIDAD 02]',
  '[TESTIMONIO REAL SESIÓN DE CLARIDAD 03]',
];

export const authorText =
  'Breve presentación humana de Paula y desde qué enfoque acompaña esta conversación.';

export const authorCredentials = '[CREDENCIALES REALES]';

export const practical: readonly SpecRow[] = [
  { label: 'Formato', value: '[ONLINE / PRESENCIAL / REAL]' },
  { label: 'Duración', value: '60–90 min' },
  { label: 'Precio', value: '[PRECIO REAL]' },
  { label: 'Reserva', value: '[PROCESO REAL]' },
  { label: 'Cancelación', value: '[CONDICIONES REALES]' },
];

export const booking: readonly SpecRow[] = [
  { label: 'Precio', value: '[PRECIO REAL]' },
  { label: 'Duración', value: '60–90 min' },
  { label: 'Formato', value: '[FORMATO REAL]' },
];

export const afterStatement =
  'La sesión no tiene que terminar necesariamente en otro programa.';

export const afterText =
  'Puede ocurrir que, al ganar claridad, veas que necesitas continuar sola, trabajar algo más en profundidad o acudir a otro tipo de acompañamiento. La prioridad es aclarar el siguiente paso, no forzar una venta.';

/** TODO: pendientes las respuestas reales; las preguntas ya están aprobadas. */
export const faq: readonly FaqItem[] = [
  { question: '¿Qué puedo trabajar durante la sesión?', answer: '[RESPUESTA REAL]' },
  {
    question: '¿Necesito saber exactamente qué quiero tratar?',
    answer: '[RESPUESTA REAL]',
  },
  { question: '¿Cuánto dura?', answer: '[RESPUESTA REAL]' },
  { question: '¿Es online?', answer: '[RESPUESTA REAL]' },
  { question: '¿Qué ocurre después?', answer: '[RESPUESTA REAL]' },
  { question: '¿Es terapia?', answer: '[RESPUESTA REAL]' },
  { question: '¿Cómo reservo?', answer: '[RESPUESTA REAL]' },
];
