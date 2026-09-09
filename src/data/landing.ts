/**
 * Tipos compartidos por las landings de programa (/alchemise,
 * /movimiento-nutricion y /sesion-claridad).
 */

/** Paso de un proceso: la cifra la genera la propia lista. */
export interface NumberedItem {
  readonly title: string;
  readonly text: string;
}

/** Fila de una ficha de datos: precio, duración, formato… */
export interface SpecRow {
  readonly label: string;
  readonly value: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

/** Cita con su autora. El mockup deja el nombre a la vista. */
export interface NamedQuote {
  readonly quote: string;
  readonly author: string;
}
