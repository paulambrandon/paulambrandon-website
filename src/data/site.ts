/**
 * Fuente única de los datos repetidos del sitio.
 *
 * El copy visible procede del mockup aprobado y de
 * `/docs/seo/paulambrandon-seo.md`. No debe reescribirse aquí por criterio
 * estético.
 */

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export const BRAND = 'paulambrandon';
export const PERSON_NAME = 'Paula Márquez Brandon';

/** Navegación principal cerrada en el documento SEO (§7). */
export const mainNav: readonly NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Método', href: '/metodo' },
  { label: 'Programas', href: '/programas' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Testimonios', href: '/testimonios' },
  { label: 'Contacto', href: '/contacto' },
];

export const legalNav: readonly NavLink[] = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Privacidad', href: '/privacidad' },
  { label: 'Cookies', href: '/cookies' },
];

/**
 * Perfiles oficiales de Paula.
 * TODO: faltan las URLs reales de Instagram y YouTube. Hasta tenerlas, el
 * footer no pinta la fila de redes y `Person.sameAs` se omite del schema.
 */
export const socialNav: readonly NavLink[] = [];
