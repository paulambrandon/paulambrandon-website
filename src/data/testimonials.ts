export type ProgramName =
  | 'Alchemise'
  | 'Movimiento y nutrición'
  | 'Sesión de claridad';

export interface Testimonial {
  readonly quote: string;
  readonly highlightedQuote?: string;
  readonly author: string;
  readonly program: ProgramName;
}

export const alchemiseTestimonials: readonly Testimonial[] = [
  {
    author: 'Ana',
    program: 'Alchemise',
    quote:
      'He hecho un cambio radical: soy otra persona. He empezado a quererme, a respetarme, a hablarme con amor. Soltar la necesidad de hacerlo todo perfecto ha sido súper liberador, y ahora mi exigencia viene desde un lugar sano, desde el amor y el respeto hacia mí misma, no desde el miedo.',
    highlightedQuote:
      'He hecho un cambio radical: soy otra persona. <strong>He empezado a quererme, a respetarme, a hablarme con amor.</strong> Soltar la necesidad de hacerlo todo perfecto ha sido súper liberador, y ahora mi exigencia viene desde un lugar sano, desde el amor y el respeto hacia mí misma, no desde el miedo.',
  },
  {
    author: 'Alicia',
    program: 'Alchemise',
    quote:
      'Me siento mucho más conectada conmigo misma que cuando empecé. Antes vivía en un bucle constante; ahora tomo decisiones pensando en cómo quiero sentirme, no solo en cómo quiero verme. Por primera vez en mucho tiempo siento que estoy invirtiendo mi energía en construir la vida que quiero, en lugar de vivir pendiente de todo lo que hago mal.',
    highlightedQuote:
      'Me siento mucho más conectada conmigo misma que cuando empecé. Antes vivía en un bucle constante; <strong>ahora tomo decisiones pensando en cómo quiero sentirme, no solo en cómo quiero verme.</strong> Por primera vez en mucho tiempo siento que estoy invirtiendo mi energía en construir la vida que quiero, en lugar de vivir pendiente de todo lo que hago mal.',
  },
  {
    author: 'Marion',
    program: 'Alchemise',
    quote:
      'Me siento en paz conmigo misma, es un cambio gigante comparado con antes. Ya no soy mi crítica más dura: el perfeccionismo y la sobreexigencia han mejorado muchísimo y me trato con mucho más cariño.',
    highlightedQuote:
      '<strong>Me siento en paz conmigo misma</strong>, es un cambio gigante comparado con antes. Ya no soy mi crítica más dura: el perfeccionismo y la sobreexigencia han mejorado muchísimo y me trato con mucho más cariño.',
  },
];

export const movementTestimonials: readonly Testimonial[] = [
  {
    author: 'Alba',
    program: 'Movimiento y nutrición',
    quote:
      'Lo que más destaco es el acompañamiento — me he sentido comprendida en todo momento, y eso lo ha cambiado todo. He aprendido a exigirme menos y a tratarme con más respeto, y por primera vez en mucho tiempo siento paz con mi cuerpo y conmigo misma. Este proceso no solo cambió mis hábitos, cambió la forma en la que me hablo.',
    highlightedQuote:
      'Lo que más destaco es el <strong>acompañamiento</strong> — me he sentido <strong>comprendida</strong> en todo momento, y eso lo ha cambiado todo. He aprendido a <strong>exigirme menos y a tratarme con más respeto</strong>, y por primera vez en mucho tiempo <strong>siento paz con mi cuerpo y conmigo misma</strong>. Este proceso no solo cambió mis hábitos, <strong>cambió la forma en la que me hablo</strong>.',
  },
  {
    author: 'Montse',
    program: 'Movimiento y nutrición',
    quote:
      'Por mucho esfuerzo que pusiera, sentía que los resultados nunca reflejaban todo lo que estaba dando. Con este proceso llegaron la calma, la confianza y una forma mucho más sana de vivir el cambio.',
    highlightedQuote:
      'Por mucho esfuerzo que pusiera, sentía que los resultados nunca reflejaban todo lo que estaba dando. Con este proceso <strong>llegaron la calma, la confianza</strong> y una forma mucho más sana de vivir el cambio.',
  },
  {
    author: 'Alicia',
    program: 'Movimiento y nutrición',
    quote:
      'He aprendido a disfrutar de cocinar, de elegir alimentos que me sientan bien y de escuchar las señales de mi propio cuerpo. Ya no vivo esto como una dieta más, sino como una forma de cuidarme que quiero mantener. Estoy aprendiendo que la constancia importa mucho más que la perfección.',
    highlightedQuote:
      'He aprendido a disfrutar de cocinar, de elegir alimentos que me sientan bien y de escuchar las señales de mi propio cuerpo. Ya no vivo esto como una dieta más, sino como <strong>una forma de cuidarme que quiero mantener</strong>. Estoy aprendiendo que la constancia importa mucho más que la perfección.',
  },
  {
    author: 'Esther',
    program: 'Movimiento y nutrición',
    quote:
      'Nunca pensé que podría seguir un plan de alimentación sin que fuera un esfuerzo constante — ahora es simplemente parte de mi día. He aprendido a no rendirme aunque las circunstancias no ayudaran. Y lo que menos esperaba: el deporte, que nunca me había gustado, se ha convertido en mi terapia. Hoy sé que puedo con más de lo que pensaba.',
    highlightedQuote:
      'Nunca pensé que podría seguir un plan de alimentación sin que fuera un esfuerzo constante — ahora es simplemente parte de mi día. He aprendido a no rendirme aunque las circunstancias no ayudaran. Y lo que menos esperaba: <strong>el deporte, que nunca me había gustado, se ha convertido en mi terapia</strong>. Hoy sé que puedo con más de lo que pensaba.',
  },
  {
    author: 'Anca',
    program: 'Movimiento y nutrición',
    quote:
      'Ha cambiado muchísimo mi relación con el gimnasio: voy y no me exijo desde el perfeccionismo, sino desde el autocuidado, y eso lo es todo. He entendido que es un proceso, no algo inmediato — y por primera vez estoy disfrutando el camino sin presión. Hasta en los días más difíciles, como cuando tengo la regla, ahora elijo cuidar mi cuerpo en lugar de sentirme culpable por no adelgazar. Estoy volviendo a ser yo.',
    highlightedQuote:
      'Ha cambiado muchísimo mi relación con el gimnasio: voy y no me exijo desde el perfeccionismo, sino desde el autocuidado, y eso lo es todo. He entendido que es un proceso, no algo inmediato — y por primera vez estoy <strong>disfrutando el camino sin presión</strong>. Hasta en los días más difíciles, como cuando tengo la regla, ahora <strong>elijo cuidar mi cuerpo</strong> en lugar de sentirme culpable por no adelgazar. <strong>Estoy volviendo a ser yo.</strong>',
  },
];

export const clarityTestimonials: readonly Testimonial[] = [
  {
    author: 'Alicia',
    program: 'Sesión de claridad',
    quote:
      'Contigo puedo hablar sin sentirme juzgada, y eso me ha ayudado a ser mucho más sincera conmigo misma. Bastó una pregunta bien hecha para darme cuenta de que el problema nunca fue que hubiera dejado de esforzarme, sino que estaba siendo demasiado exigente conmigo para poder ver todo lo que sí estaba consiguiendo.',
    highlightedQuote:
      'Contigo puedo hablar sin sentirme juzgada, y eso me ha ayudado a ser mucho más sincera conmigo misma. Bastó una pregunta bien hecha para darme cuenta de que <strong>el problema nunca fue que hubiera dejado de esforzarme, sino que estaba siendo demasiado exigente conmigo</strong> para poder ver todo lo que sí estaba consiguiendo.',
  },
  {
    author: 'Esther',
    program: 'Sesión de claridad',
    quote:
      'Me hiciste darme cuenta de que llevaba años funcionando en automático — cumplía, llegaba, seguía, sin pararme a pensar si era lo que quería. Con una sola conversación entendí que no quería seguir así, y me diste las pautas para empezar a tratarme distinto: no buscando milagros, sino desde el amor.',
    highlightedQuote:
      'Me hiciste darme cuenta de que llevaba años funcionando en automático — cumplía, llegaba, seguía, sin pararme a pensar si era lo que quería. <strong>Con una sola conversación entendí que no quería seguir así</strong>, y me diste las pautas para empezar a tratarme distinto: no buscando milagros, sino desde el amor.',
  },
  {
    author: 'Mar',
    program: 'Sesión de claridad',
    quote:
      'Hubo un momento en el que me atreví a hablar claro y a decir en voz alta lo que me hacía sufrir — y solo con eso sentí que algo en mí se activaba. Salí con mucha más claridad sobre lo que quiero en mi vida, pero sobretodo, lo que ya no estoy dispuesta a aceptar.',
    highlightedQuote:
      'Hubo un momento en el que me atreví a hablar claro y a decir en voz alta lo que me hacía sufrir — y solo con eso <strong>sentí que algo en mí se activaba</strong>. Salí con mucha más <strong>claridad sobre lo que quiero en mi vida</strong>, pero sobretodo, lo que ya no estoy dispuesta a aceptar.',
  },
];

export const featuredTestimonials: readonly Testimonial[] = [
  alchemiseTestimonials[0],
  movementTestimonials[0],
  clarityTestimonials[2],
];
