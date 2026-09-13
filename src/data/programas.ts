/**
 * Contenido de /programas.
 *
 * La página funciona como un hub de decisión. El detalle de cada proceso vive
 * en su landing para no repetir aquí el trabajo de conversión.
 */

export interface FeaturedProgram {
  readonly title: string;
  readonly meta: string;
  readonly lede: string;
  readonly description: string;
  readonly href: string;
  readonly linkLabel: string;
}

export interface Offer {
  readonly title: string;
  readonly meta: string;
  readonly description: string;
  readonly href: string;
  readonly linkLabel: string;
}

export interface FitRow {
  readonly need: string;
  readonly program: string;
  readonly href: string;
}

export const alchemise: FeaturedProgram = {
  title: 'Alchemise',
  meta: 'Programa de transformación · 90 días',
  lede: 'Para ti si llevas tiempo repitiendo los mismos patrones, sabes que necesitas un cambio profundo y quieres hacerlo de forma estructurada y acompañada.',
  description:
    'Durante 90 días trabajas la relación contigo misma para dejar de construir tu vida alrededor de la idea de que no eres suficiente. En su propia página puedes conocer el proceso y el Método IMAC en profundidad.',
  href: '/alchemise',
  linkLabel: 'Descubrir Alchemise',
};

export const offers: readonly Offer[] = [
  {
    title: 'Movimiento y nutrición',
    meta: 'Acompañamiento personalizado',
    description:
      'Si quieres trabajar especialmente tu relación con el cuerpo, el movimiento y la alimentación desde un lugar más sostenible y menos obsesivo.',
    href: '/movimiento-nutricion',
    linkLabel: 'Ver Movimiento y nutrición',
  },
  {
    title: 'Sesión de claridad',
    meta: 'Sesión individual · 60–90 minutos',
    description:
      'Si estás ante una situación concreta, te sientes bloqueada o necesitas ordenar lo que te ocurre antes de decidir tu siguiente paso.',
    href: '/sesion-claridad',
    linkLabel: 'Reservar sesión de claridad',
  },
];

export const fitRows: readonly FitRow[] = [
  {
    need: 'Quieres realizar un cambio profundo y sostenido',
    program: 'Alchemise',
    href: '/alchemise',
  },
  {
    need: 'Quieres trabajar cuerpo, movimiento y alimentación',
    program: 'Movimiento y nutrición',
    href: '/movimiento-nutricion',
  },
  {
    need: 'Necesitas claridad sobre una situación concreta',
    program: 'Sesión de claridad',
    href: '/sesion-claridad',
  },
];
