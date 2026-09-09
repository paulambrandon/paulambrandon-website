/**
 * Contenido de la Home.
 *
 * Copy tomado literalmente del mockup aprobado (`/referencias`) y de
 * `DESIGN.md`. Los textos marcados con corchetes son los placeholders del
 * propio mockup: siguen pendientes del contenido real de Paula.
 */

export interface TransformationPair {
  readonly before: string;
  readonly after: string;
}

export interface MethodStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export interface Program {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly linkLabel: string;
}

export const problemTried: readonly string[] = [
  'Cambiar tu cuerpo',
  'Ser más disciplinada',
  'Trabajar la autoestima',
  'Aprender a poner límites',
  'Ganar confianza',
  'Crear la rutina perfecta',
  'Volver a empezar, otra vez',
];

export const problemStill: readonly string[] = [
  'Siempre aparece otra cosa que cambiar',
  'Vuelves al mismo punto una y otra vez',
  'Sigues sintiendo que hay algo mal en ti',
  'La calma dura muy poco',
];

export const transformations: readonly TransformationPair[] = [
  {
    before: 'Buscar constantemente qué mejorar',
    after: 'Dejar de vivir buscando qué corregir',
  },
  {
    before: 'Entrenar para cambiar tu cuerpo',
    after: 'Cuidar tu cuerpo desde el respeto',
  },
  {
    before: 'Medir tu valor por lo que haces',
    after: 'Separar tu valor de tu productividad',
  },
  {
    before: 'Sentir culpa al descansar',
    after: 'Entender el descanso como autocuidado',
  },
  {
    before: 'Priorizar siempre a los demás',
    after: 'Poner límites sin sentir culpa',
  },
  {
    before: 'Demostrar constantemente que vales',
    after: 'No necesitar demostrar tu valor',
  },
  {
    before: 'Nunca sentir que es suficiente',
    after: 'Dejar de vivir con la sensación de que siempre falta algo',
  },
];

export const methodSteps: readonly MethodStep[] = [
  {
    step: '01',
    title: 'Entender el origen',
    description: 'Porque no puedes cambiar un patrón que todavía no ves.',
  },
  {
    step: '02',
    title: 'Transformar la relación que tienes contigo misma',
    description:
      'Para que el cuidado deje de nacer del miedo y empiece a nacer del respeto.',
  },
  {
    step: '03',
    title: 'Llevar ese cambio a tu vida',
    description:
      'Al cuerpo, a los hábitos, a las relaciones, a los límites, al día a día.',
  },
];

/** Programas secundarios. Alchemise se compone aparte por llevar imagen. */
export const secondaryPrograms: readonly Program[] = [
  {
    title: 'Movimiento y nutrición',
    description: 'Acompañamiento personalizado.',
    href: '/movimiento-nutricion',
    linkLabel: 'Descubrir',
  },
  {
    title: 'Sesión de claridad',
    description: 'Sesión individual y puntual.',
    href: '/sesion-claridad',
    linkLabel: 'Descubrir',
  },
];

export const featuredProgram: Program = {
  title: 'Alchemise',
  description: 'Programa grupal de 90 días.',
  href: '/alchemise',
  linkLabel: 'Descubrir Alchemise',
};
