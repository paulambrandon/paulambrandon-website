/**
 * Enfoque general: Home antigua (#seccion-5), /mi-historia y /empieza-aqui.
 * Estructura y titular definidos por el cliente. Los formatos y recursos
 * concretos dependen del programa elegido.
 */
export const methodTitle =
  'No se trata de corregirte. Se trata de entender qué hay detrás de lo que te pasa.';

export const methodDescription =
  'Un proceso para entender de dónde nace esa sensación de no ser suficiente, transformar la relación que tienes contigo misma y llevar ese cambio a tu vida real.';

interface MethodStage {
  readonly title: string;
  readonly intro: string;
  readonly description: string;
}

export const methodStages: readonly MethodStage[] = [
  {
    title: 'Entender el origen',
    intro: 'Porque no puedes cambiar un patrón que todavía no ves.',
    description:
      'Empezar a reconocer lo que se repite, qué te bloquea y qué está sosteniendo esa sensación de no ser suficiente. Mirar más allá de lo que haces para entender desde dónde lo haces.',
  },
  {
    title: 'Transformar la relación contigo misma',
    intro: 'Para que cuidarte deje de nacer del miedo y empiece a nacer del respeto.',
    description:
      'Observar cómo te hablas, cómo te valoras y qué necesitas. Empezar a tomar decisiones sin convertir cada objetivo, cada límite o cada descanso en una prueba de lo que vales.',
  },
  {
    title: 'Llevar ese cambio a tu vida',
    intro: 'Al cuerpo, a los hábitos, a las relaciones, a los límites, al día a día.',
    description:
      'Que lo que entiendes empiece a reflejarse en cómo te cuidas, te relacionas y decides. Practicar otra forma de responder en situaciones reales, también cuando las cosas no salen como esperabas.',
  },
];

interface ApproachItem {
  readonly title: string;
  readonly text: string;
}

export const accompaniment: readonly ApproachItem[] = [
  {
    title: 'Poner palabras a lo que ocurre',
    text: 'Una conversación y preguntas que te ayuden a ordenar lo que estás viviendo y a mirar aquello que puede estar pasando desapercibido.',
  },
  {
    title: 'Observarlo en tu día a día',
    text: 'Reconocer qué ocurre cuando te exiges, te cuesta descansar o necesitas poner un límite. Tu propia vida forma parte del proceso.',
  },
  {
    title: 'Llevar lo trabajado a la práctica',
    text: 'Según el acompañamiento, las conversaciones se apoyan en ejercicios, recursos o seguimiento para aplicar lo que vas descubriendo.',
  },
];

export const approach: readonly ApproachItem[] = [
  {
    title: 'Mirar la raíz',
    text: 'Entender qué sostiene un patrón, además de atender a cómo se manifiesta.',
  },
  {
    title: 'Entender antes de forzar',
    text: 'Dejar de responder a cada dificultad con más control, más disciplina o más exigencia.',
  },
  {
    title: 'Conectar lo que sientes con lo que haces',
    text: 'La relación contigo también aparece en cómo comes, entrenas, trabajas, descansas y te relacionas.',
  },
  {
    title: 'Partir de donde estás',
    text: 'No todas las mujeres necesitan el mismo acompañamiento. La forma de trabajar depende de tu situación y de lo que necesitas ahora.',
  },
];

export const possibleChanges: readonly string[] = [
  'Entender con más claridad qué te ocurre y qué necesitas.',
  'Reconocer un patrón cuando aparece, en lugar de pasar por él sin darte cuenta.',
  'Tomar decisiones con más conciencia de lo que quieres.',
  'Empezar a hablarte y cuidarte con más respeto.',
  'Encontrar espacio para responder de otra manera, en lugar de reaccionar en automático.',
];
