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
export const CONTACT_EMAIL = 'pmarquezbrandon@gmail.com';
export const INSTAGRAM_URL = 'https://instagram.com/paulambrandon';
export const BOOKING_URL = 'https://www.sumupbookings.com/paula-marquez-brandon';
export const WHATSAPP_URL =
  'https://wa.me/34643163545?text=Hola%20Paula%20%F0%9F%A4%8D%0AVengo%20de%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20que%20me%20ayudaras%20a%20ver%20qu%C3%A9%20programa%20encaja%20m%C3%A1s%20conmigo%20%F0%9F%98%8A';

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

/** Perfiles oficiales publicados actualmente. */
export const socialNav: readonly NavLink[] = [
  { label: 'Instagram', href: INSTAGRAM_URL },
];
