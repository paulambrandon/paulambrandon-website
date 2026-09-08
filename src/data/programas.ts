/**
 * Contenido de /programas.
 *
 * Copy tomado literalmente del mockup aprobado (`/referencias`). Los textos
 * entre corchetes son los placeholders del propio mockup: siguen pendientes
 * del contenido real de Paula.
 */

import type { ImageMetadata } from 'astro';
import alchemiseImage from '../assets/images/placeholder-paula-alchemise.jpg';
import movimientoImage from '../assets/images/placeholder-movimiento.jpg';

/** Programa protagonista: lleva insignia de edición e imagen propia. */
export interface FeaturedProgram {
  readonly badge: string;
  readonly title: string;
  readonly meta: string;
  readonly lede: string;
  readonly description: string;
  readonly href: string;
  readonly linkLabel: string;
  readonly image: ImageMetadata;
  readonly imageAlt: string;
}

/** Acompañamientos secundarios de la banda clara. */
export interface Offer {
  readonly kicker: string;
  readonly title: string;
  /** Formato del acompañamiento. Solo lo declara la sesión de claridad. */
  readonly meta?: string;
  readonly description: string;
  readonly note: string;
  readonly href: string;
  readonly linkLabel: string;
  readonly image?: ImageMetadata;
  readonly imageAlt?: string;
}

/** Fila de la tabla de orientación: necesidad → acompañamiento que encaja. */
export interface FitRow {
  readonly need: string;
  readonly program: string;
}

/** Cómo puede llegar una persona a la página, en sus propias palabras. */
export const arrivalQuotes: readonly string[] = [
  '«Quiero trabajar de forma profunda la autoexigencia y la relación conmigo.»',
  '«Quiero cuidar mi cuerpo, entrenamiento y alimentación desde otro lugar.»',
  '«Necesito claridad sobre lo que me está bloqueando ahora.»',
];

export const alchemise: FeaturedProgram = {
  badge: 'Próxima edición abierta',
  title: 'Alchemise',
  meta: 'Programa grupal · 90 días',
  lede: 'Un proceso profundo para mujeres que quieren dejar de vivir desde la autoexigencia y la sensación constante de no ser suficientes.',
  description:
    'Trabajo estructurado, acompañamiento y comunidad a lo largo de 90 días. Alchemise recorre este proceso a través del Método IMAC.',
  href: '/alchemise',
  linkLabel: 'Descubrir Alchemise',
  image: alchemiseImage,
  imageAlt: 'Paula Márquez Brandon acompañando una sesión de Alchemise',
};

export const offers: readonly Offer[] = [
  {
    kicker: 'Acompañamiento específico',
    title: 'Movimiento y nutrición',
    description:
      'Acompañamiento personalizado para trabajar cuerpo, entrenamiento, alimentación y hábitos desde una relación más sostenible y menos obsesiva.',
    note: 'No se trata simplemente de darte otra dieta o rutina, sino de cuidar tu cuerpo de una manera que puedas sostener.',
    href: '/movimiento-nutricion',
    linkLabel: 'Conocer Movimiento y nutrición',
    image: movimientoImage,
    imageAlt: 'Paula Márquez Brandon durante una sesión de movimiento',
  },
  {
    kicker: 'Intervención puntual',
    title: 'Sesión de claridad',
    meta: 'Sesión individual · 60–90 minutos',
    description:
      'Una sesión individual y puntual para entender mejor qué está ocurriendo y cuál puede ser tu siguiente paso.',
    note: 'Espacio para ordenar lo que está ocurriendo, identificar el bloqueo y definir el siguiente paso.',
    href: '/sesion-claridad',
    linkLabel: 'Conocer la sesión',
  },
];

export const fitRows: readonly FitRow[] = [
  {
    need: '«Trabajar de manera profunda durante varios meses»',
    program: 'Alchemise',
  },
  {
    need: '«Centrarte especialmente en cuerpo, alimentación y entrenamiento»',
    program: 'Movimiento y nutrición',
  },
  {
    need: '«Entender un bloqueo concreto y ganar claridad»',
    program: 'Sesión de claridad',
  },
];

/**
 * TODO: pendientes los testimonios reales. El mockup deja marcado a qué
 * programa corresponde cada uno; no se sustituyen por texto inventado.
 */
export const programTestimonials: readonly string[] = [
  '[TESTIMONIO ALCHEMISE]',
  '[TESTIMONIO MOVIMIENTO Y NUTRICIÓN]',
];
