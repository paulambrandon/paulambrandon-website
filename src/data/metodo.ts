/**
 * Contenido de la página `/metodo`.
 *
 * Copy tomado literalmente del mockup aprobado (`/referencias`). Los textos
 * entre corchetes son los placeholders del propio mockup: siguen pendientes
 * del contenido real de Paula.
 */

/** Contraste entre la mirada de la exigencia y la del respeto. */
export interface DemandRespectPair {
  readonly demand: string;
  readonly respect: string;
}

export interface MethodStage {
  /** Número visible de la etapa: también se usa como cifra decorativa. */
  readonly number: string;
  /** Verbo que da nombre a la etapa en el preheading. */
  readonly kicker: string;
  readonly title: string;
  /** Frase de apertura, en cursiva serif. */
  readonly intro: string;
  readonly description: string;
}

/**
 * Ámbito de la vida en el que se nota el proceso.
 *
 * El mockup compone este bloque con tamaños, familias y tonos alternos; los
 * campos son deliberadamente presentacionales porque esa mezcla tipográfica
 * *es* el contenido visual del bloque.
 */
export interface LifeArea {
  readonly label: string;
  /** 1 (más discreto) → 5 (más protagonista). */
  readonly size: 1 | 2 | 3 | 4 | 5;
  readonly font: 'serif' | 'sans';
  readonly tone: 'ink' | 'muted' | 'accent' | 'olive';
}

/** Salto del punto A al punto B, en primera persona. */
export interface ShiftPair {
  readonly from: string;
  readonly to: string;
}

/** Áreas que parecen problemas independientes y comparten la misma raíz. */
export const isolatedAreas: readonly string[] = [
  'Tu cuerpo',
  'Tu disciplina',
  'Tu productividad',
  'Tu descanso',
  'Tus límites',
  'Tus relaciones',
  'Tus hábitos',
  'Tus objetivos',
];

export const demandRespectPairs: readonly DemandRespectPair[] = [
  {
    demand: 'Entrenar para corregir tu cuerpo',
    respect: 'Entrenar porque cuidarlo también es quererte.',
  },
  {
    demand: 'Sentir que tienes que ganarte el descanso',
    respect: 'Entender que descansar también es cuidarte.',
  },
  {
    demand: 'No poner un límite por miedo a decepcionar',
    respect: 'Poner límites aunque no siempre gusten.',
  },
  {
    demand: 'Perseguir otra meta para sentir que por fin vales',
    respect: 'Elegir objetivos sin convertirlos en una prueba de tu valor.',
  },
];

export const methodStages: readonly MethodStage[] = [
  {
    number: '01',
    kicker: 'Observar',
    title: 'Entender el origen',
    intro: 'No puedes cambiar un patrón que todavía no reconoces.',
    description:
      'El primer paso consiste en empezar a observar de dónde nace esa sensación constante de no ser suficiente y cómo aparece en diferentes áreas de tu vida.',
  },
  {
    number: '02',
    kicker: 'Transformar',
    title: 'Transformar la relación que tienes contigo misma',
    intro:
      'No basta con entender por qué ocurre si sigues hablándote, valorándote y tratándote desde el mismo lugar.',
    description:
      'Esta etapa se centra en empezar a cambiar la forma en la que te relacionas contigo para que cuidarte deje de estar sostenido únicamente por la exigencia.',
  },
  {
    number: '03',
    kicker: 'Vivir',
    title: 'Llevar ese cambio a tu vida',
    intro: 'El proceso no termina en entender algo intelectualmente.',
    description:
      'La nueva forma de relacionarte contigo empieza a reflejarse en cómo entrenas, comes, descansas, trabajas, pones límites, te relacionas y persigues tus objetivos.',
  },
];

export const lifeAreas: readonly LifeArea[] = [
  { label: 'Cuerpo', size: 5, font: 'serif', tone: 'ink' },
  { label: 'Alimentación', size: 1, font: 'sans', tone: 'muted' },
  { label: 'Entrenamiento', size: 4, font: 'serif', tone: 'accent' },
  { label: 'Descanso', size: 2, font: 'sans', tone: 'ink' },
  { label: 'Hábitos', size: 3, font: 'serif', tone: 'muted' },
  { label: 'Relaciones', size: 5, font: 'serif', tone: 'ink' },
  { label: 'Límites', size: 1, font: 'sans', tone: 'olive' },
  { label: 'Objetivos', size: 3, font: 'serif', tone: 'muted' },
  { label: 'Trabajo', size: 1, font: 'sans', tone: 'ink' },
  { label: 'Diálogo interno', size: 3, font: 'serif', tone: 'accent' },
];

export const shifts: readonly ShiftPair[] = [
  {
    from: 'Siempre hay algo en mí que arreglar.',
    to: 'Puedo crecer sin tratarme como un problema.',
  },
  {
    from: 'Necesito hacer más para sentir que valgo.',
    to: 'Mi valor no depende de cuánto produzca.',
  },
  {
    from: 'Cuidarme es otra exigencia más.',
    to: 'Cuidarme puede nacer del respeto.',
  },
];

/**
 * TODO: pendientes los testimonios reales. El mockup deja marcado el tema que
 * debe cubrir cada uno; no se sustituyen por texto inventado.
 */
export const methodTestimonials: readonly string[] = [
  '[TESTIMONIO REAL — AUTOEXIGENCIA / PERFECCIONISMO]',
  '[TESTIMONIO REAL — LÍMITES / AUTOCUIDADO]',
];
