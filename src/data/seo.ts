import type { NavLink } from './site';

export interface RouteSeo {
  readonly breadcrumbs?: readonly NavLink[];
  readonly ogImage?: string;
  readonly ogImageAlt?: string;
}

const home: NavLink = { label: 'Inicio', href: '/' };
const programs: NavLink = { label: 'Programas', href: '/programas' };

/**
 * Configuración SEO dependiente de la ruta.
 *
 * Los textos proceden de la navegación y de los H1 aprobados. Esta tabla es la
 * única fuente para breadcrumbs y tarjetas sociales específicas.
 */
export const routeSeo = {
  '/': {
    ogImage: '/og/inicio.jpg',
    ogImageAlt: 'Paula Márquez Brandon — Autoexigencia y autocuidado en mujeres',
  },
  '/metodo': {
    breadcrumbs: [home, { label: 'Método', href: '/metodo' }],
    ogImage: '/og/metodo.jpg',
    ogImageAlt: 'Método de Paula Márquez Brandon: de la autoexigencia al autocuidado',
  },
  '/programas': {
    breadcrumbs: [home, programs],
    ogImage: '/og/programas.jpg',
    ogImageAlt: 'Programas y formas de trabajar con Paula Márquez Brandon',
  },
  '/alchemise': {
    breadcrumbs: [home, programs, { label: 'Alchemise', href: '/alchemise' }],
    ogImage: '/og/alchemise.jpg',
    ogImageAlt: 'Alchemise, programa grupal de 90 días de Paula Márquez Brandon',
  },
  '/movimiento-nutricion': {
    breadcrumbs: [
      home,
      programs,
      { label: 'Movimiento y nutrición', href: '/movimiento-nutricion' },
    ],
    ogImage: '/og/movimiento-nutricion.jpg',
    ogImageAlt: 'Movimiento y nutrición sin obsesión con Paula Márquez Brandon',
  },
  '/sesion-claridad': {
    breadcrumbs: [
      home,
      programs,
      { label: 'Sesión de claridad', href: '/sesion-claridad' },
    ],
    ogImage: '/og/sesion-claridad.jpg',
    ogImageAlt: 'Sesión de claridad con Paula Márquez Brandon',
  },
  '/sobre-mi': {
    breadcrumbs: [home, { label: 'Sobre mí', href: '/sobre-mi' }],
    ogImage: '/og/sobre-mi.jpg',
    ogImageAlt: 'Mi historia — Paula Márquez Brandon',
  },
  '/testimonios': {
    breadcrumbs: [home, { label: 'Testimonios', href: '/testimonios' }],
    ogImage: '/og/testimonios.jpg',
    ogImageAlt: 'Historias reales de mujeres acompañadas por Paula Márquez Brandon',
  },
  '/contacto': {
    breadcrumbs: [home, { label: 'Contacto', href: '/contacto' }],
    ogImage: '/og/contacto.jpg',
    ogImageAlt: 'Contacto con Paula Márquez Brandon',
  },
  '/aviso-legal': {
    breadcrumbs: [home, { label: 'Aviso legal', href: '/aviso-legal' }],
  },
  '/privacidad': {
    breadcrumbs: [home, { label: 'Privacidad', href: '/privacidad' }],
  },
  '/cookies': {
    breadcrumbs: [home, { label: 'Cookies', href: '/cookies' }],
  },
} as const satisfies Record<string, RouteSeo>;

export const getRouteSeo = (pathname: string): RouteSeo | undefined =>
  routeSeo[pathname as keyof typeof routeSeo];
