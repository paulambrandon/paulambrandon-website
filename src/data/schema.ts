import { INSTAGRAM_URL, PERSON_NAME } from './site';

export const PERSON_SCHEMA_DESCRIPTION =
  'Paula Márquez Brandon acompaña a mujeres que viven desde la autoexigencia, la culpa y la sensación de no ser suficientes.';

/** Entidad canónica compartida por las páginas que describen a Paula. */
export const createPersonSchema = (site: URL) => {
  const homeUrl = new URL('/', site).href;

  return {
    '@type': 'Person',
    '@id': `${homeUrl}#person`,
    name: PERSON_NAME,
    url: homeUrl,
    image: new URL('/og/default.jpg', site).href,
    description: PERSON_SCHEMA_DESCRIPTION,
    sameAs: [INSTAGRAM_URL],
  } as const;
};
