export type ProgramName =
  | 'Alchemise'
  | 'Movimiento y nutrición'
  | 'Sesión de claridad';

export interface Testimonial {
  readonly quote: string;
  readonly author: string;
  readonly program: ProgramName;
}

export const alchemiseTestimonials: readonly Testimonial[] = [
  {
    author: 'Ana',
    program: 'Alchemise',
    quote:
      'He hecho un cambio radical: soy otra persona. He empezado a quererme, a respetarme, a hablarme con amor. Soltar la necesidad de hacerlo todo perfecto ha sido súper liberador, y ahora mi exigencia viene desde un lugar sano, desde el amor y el respeto hacia mí misma, no desde el miedo.',
  },
  {
    author: 'Alicia',
    program: 'Alchemise',
    quote:
      'Me siento mucho más conectada conmigo misma que cuando empecé. Antes vivía en un bucle constante; ahora tomo decisiones pensando en cómo quiero sentirme, no solo en cómo quiero verme. Por primera vez en mucho tiempo siento que estoy invirtiendo mi energía en construir la vida que quiero, en lugar de vivir pendiente de todo lo que hago mal.',
  },
  {
    author: 'Marion',
    program: 'Alchemise',
    quote:
      'Me siento en paz conmigo misma, es un cambio gigante comparado con antes. Ya no soy mi crítica más dura: el perfeccionismo y la sobreexigencia han mejorado muchísimo y me trato con mucho más cariño. He aprendido que poner límites no me convierte en mala persona, y esa paz se nota en todo lo demás.',
  },
];

export const movementTestimonials: readonly Testimonial[] = [
  {
    author: 'Alba',
    program: 'Movimiento y nutrición',
    quote:
      'Lo que más destaco es el acompañamiento: me he sentido comprendida en todo momento, y eso lo ha cambiado todo. He aprendido a exigirme menos y a tratarme con más respeto, y por primera vez en mucho tiempo siento paz con mi cuerpo y conmigo misma. Este proceso no solo cambió mis hábitos, cambió la forma en la que me hablo.',
  },
  {
    author: 'Montse',
    program: 'Movimiento y nutrición',
    quote:
      'Por mucho esfuerzo que pusiera, sentía que los resultados nunca reflejaban todo lo que estaba dando. Con este proceso llegaron la calma, la confianza y una forma mucho más sana de vivir el cambio.',
  },
  {
    author: 'Esther',
    program: 'Movimiento y nutrición',
    quote:
      'Nunca pensé que podría seguir un plan de alimentación sin que fuera un esfuerzo constante; ahora es simplemente parte de mi día. He aprendido a no rendirme aunque las circunstancias no ayudaran y hoy sé que puedo con más de lo que pensaba.',
  },
];

export const clarityTestimonials: readonly Testimonial[] = [
  {
    author: 'Alicia',
    program: 'Sesión de claridad',
    quote:
      'Contigo puedo hablar sin sentirme juzgada, y eso me ha ayudado a ser mucho más sincera conmigo misma. Bastó una pregunta bien hecha para darme cuenta de que el problema nunca fue que hubiera dejado de esforzarme, sino que estaba siendo demasiado exigente conmigo para poder ver todo lo que sí estaba consiguiendo.',
  },
  {
    author: 'Esther',
    program: 'Sesión de claridad',
    quote:
      'Me hiciste darme cuenta de que llevaba años funcionando en automático: cumplía, llegaba, seguía, sin pararme a pensar si era lo que quería. Con una sola conversación entendí que no quería seguir así y me diste las pautas para empezar a tratarme distinto.',
  },
  {
    author: 'Mar',
    program: 'Sesión de claridad',
    quote:
      'Hubo un momento en el que me atreví a hablar claro y a decir en voz alta lo que me hacía sufrir, y solo con eso sentí que algo en mí se activaba. Salí con mucha más claridad sobre lo que quiero en mi vida, pero sobre todo, lo que ya no estoy dispuesta a aceptar.',
  },
];

export const featuredTestimonials: readonly Testimonial[] = [
  alchemiseTestimonials[0],
  movementTestimonials[0],
  clarityTestimonials[2],
];
