import type { APIRoute } from 'astro';
import { accompaniment, approach, methodDescription, methodStages } from '../data/metodo';
import { alchemise, fitRows } from '../data/programas';
import {
  alchemiseFaq,
  alchemiseIncludes,
  clarityFaq,
  imac,
  movementFaq,
  movementIncludes,
  movementPlans,
} from '../data/services';
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  PERSON_NAME,
  WHATSAPP_URL,
} from '../data/site';

interface LlmsPage {
  readonly label: string;
  readonly path: string;
  readonly description: string;
}

const canonicalPages = [
  {
    label: 'Inicio',
    path: '/',
    description:
      'Presentación de Paula, del problema de la autoexigencia, de su método y de las formas de trabajar con ella.',
  },
  {
    label: 'Método',
    path: '/metodo',
    description:
      'Explica el enfoque en tres etapas: entender el origen, transformar la relación contigo misma y llevar el cambio a la vida cotidiana.',
  },
  {
    label: 'Programas',
    path: '/programas',
    description:
      'Página comparativa para elegir entre Alchemise, Movimiento y nutrición o una Sesión de claridad.',
  },
  {
    label: 'Alchemise',
    path: '/alchemise',
    description:
      'Programa grupal de 90 días basado en el Método IMAC, con seis meses de acceso al contenido.',
  },
  {
    label: 'Movimiento y nutrición',
    path: '/movimiento-nutricion',
    description:
      'Acompañamiento personalizado de uno, tres o seis meses sobre entrenamiento, alimentación y hábitos sostenibles.',
  },
  {
    label: 'Sesión de claridad',
    path: '/sesion-claridad',
    description:
      'Sesión individual online de entre 60 y 90 minutos para ordenar una situación y orientar el siguiente paso.',
  },
  {
    label: 'Sobre Paula',
    path: '/sobre-mi',
    description:
      'Historia personal de Paula y origen de su forma de acompañar a otras mujeres.',
  },
  {
    label: 'Testimonios',
    path: '/testimonios',
    description:
      'Experiencias publicadas de mujeres acompañadas por Paula y resultados físicos individuales.',
  },
  {
    label: 'Contacto',
    path: '/contacto',
    description:
      'Formulario y canales oficiales para consultar sobre programas, sesiones o colaboraciones.',
  },
  {
    label: 'Aviso legal',
    path: '/aviso-legal',
    description: 'Titularidad, finalidad, normas de uso, propiedad del contenido y responsabilidad.',
  },
  {
    label: 'Política de privacidad',
    path: '/privacidad',
    description:
      'Tratamiento de datos, finalidad, base legal, proveedores, conservación y derechos.',
  },
  {
    label: 'Política de cookies',
    path: '/cookies',
    description:
      'Informa de que la web no instala actualmente cookies analíticas, publicitarias ni de terceros.',
  },
] as const satisfies readonly LlmsPage[];

const list = (items: readonly string[]): string =>
  items.map((item) => `- ${item}`).join('\n');

const numbered = (
  items: readonly { readonly title: string; readonly description: string }[]
): string =>
  items
    .map(({ title, description }, index) => `${index + 1}. **${title}.** ${description}`)
    .join('\n');

/**
 * Mapa editorial ampliado para agentes que decidan consultar llms.txt.
 *
 * No sustituye al sitemap ni concede permisos de rastreo: robots.txt sigue
 * siendo la fuente para la política de crawlers. Todo el contenido procede de
 * datos o páginas publicados en esta web; no se añaden credenciales ni
 * afirmaciones profesionales que Paula no haya comunicado.
 */
export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Falta `site` en astro.config.mjs: llms.txt lo necesita.');
  }

  const url = (path: string): string => new URL(path, site).href;
  const pageLinks = canonicalPages
    .map(({ label, path, description }) => `- [${label}](${url(path)}): ${description}`)
    .join('\n');
  const methodList = numbered(methodStages);
  const accompanimentList = list(
    accompaniment.map(({ title, text }) => `**${title}:** ${text}`)
  );
  const approachList = list(approach.map(({ title, text }) => `**${title}:** ${text}`));
  const imacList = list(
    imac.map(({ letter, title, text }) => `**${letter} — ${title}:** ${text}`)
  );
  const alchemiseIncludesList = list(
    alchemiseIncludes.map(({ title, text }) => `**${title}:** ${text}`)
  );
  const movementIncludesList = list(
    movementIncludes.map(({ title, text }) => `**${title}:** ${text}`)
  );
  const movementPrices = list(
    movementPlans.map(
      ({ duration, price, recommended }) =>
        `**${duration}:** ${price}${recommended ? ' (opción recomendada en la web)' : ''}`
    )
  );
  const fitList = fitRows
    .map(({ need, program, href }) => `- ${need}: [${program}](${url(href)}).`)
    .join('\n');
  const faqList = (
    items: readonly { readonly question: string; readonly answer: string }[]
  ): string => items.map(({ question, answer }) => `- **${question}** ${answer}`).join('\n');

  const body = `# ${PERSON_NAME}
> Web oficial de Paula Márquez Brandon sobre autoexigencia, autocuidado y acompañamientos para mujeres.

Este archivo ofrece un resumen estructurado del contenido público del sitio. La fuente canónica de cada dato es la página enlazada correspondiente.

## Identidad y propósito
- **Nombre:** ${PERSON_NAME}.
- **Idioma principal:** español de España (es-ES).
- **Sitio canónico:** ${url('/')}.
- **Propósito:** presentar la forma de acompañar de Paula, explicar sus programas y facilitar el contacto o la reserva.
- **Audiencia principal:** mujeres adultas que viven desde la autoexigencia, la culpa, el perfeccionismo o la sensación de no ser suficientes.
- **Temas principales:** relación con una misma, autocuidado, límites, descanso, hábitos, cuerpo, movimiento, alimentación y decisiones cotidianas.
- **Enfoque declarado:** entender qué sostiene un patrón antes de responder con más control, disciplina o exigencia.

## Sobre Paula Márquez Brandon
- [Historia de Paula](${url('/sobre-mi')}): relato en primera persona sobre inseguridad, autoexigencia y el origen de su forma de acompañar.
- Paula explica que su enfoque nace de su experiencia personal, de lo que ha aprendido y trabajado y de su experiencia acompañando a otras mujeres.
- No se atribuyen en esta web titulaciones, certificaciones ni credenciales profesionales adicionales.
- Paula no promete soluciones mágicas y diferencia sus acompañamientos de la psicoterapia, el diagnóstico y la atención sanitaria.

## Método de acompañamiento
- [Página completa del método](${url('/metodo')}): ${methodDescription}

### Tres etapas
${methodList}

### Cómo se desarrolla el acompañamiento
${accompanimentList}

### Principios del enfoque
${approachList}

## Formas de trabajar con Paula
- [Comparar todos los programas](${url('/programas')}): hub para elegir el punto de partida según la necesidad actual.
${fitList}

## Alchemise
- [Página de Alchemise](${url('/alchemise')}): ${alchemise.description}
- **Formato:** programa grupal.
- **Duración:** 90 días.
- **Precio publicado:** 397 €; la página muestra 497 € como precio anterior tachado.
- **Acceso al contenido:** seis meses.
- **Próxima edición:** las fechas, condiciones y disponibilidad se consultan directamente con Paula.
- **Garantía publicada:** durante las dos primeras semanas se puede solicitar la devolución; las condiciones deben consultarse antes de reservar.

### Método IMAC de Alchemise
${imacList}

### Qué incluye Alchemise
${alchemiseIncludesList}
- Dos guías adicionales: una para volver a la rutina sin castigarse y otra para los días en los que no se puede mantener una versión perfecta de una misma.
- Un 10 % de descuento en el acompañamiento de Movimiento y nutrición para quien quiera complementarlo.

### Preguntas frecuentes sobre Alchemise
${faqList(alchemiseFaq)}

### Alcance de Alchemise
Alchemise es un acompañamiento de desarrollo personal. No sustituye la atención psicológica ni sanitaria cuando se necesita.

## Movimiento y nutrición
- [Página de Movimiento y nutrición](${url('/movimiento-nutricion')}): acompañamiento personalizado para cuidar el cuerpo, la alimentación y el entrenamiento sin convertirlos en otra forma de exigencia.
- **Formato:** personalizado.
- **Duraciones disponibles:** uno, tres o seis meses.
- **Objetivo publicado:** adaptar entrenamiento, alimentación y hábitos a la situación y rutina de cada mujer, con seguimiento y ajustes.

### Precios publicados
${movementPrices}

### Qué incluye Movimiento y nutrición
${movementIncludesList}

### Preguntas frecuentes sobre Movimiento y nutrición
${faqList(movementFaq)}

### Alcance de Movimiento y nutrición
Este acompañamiento trabaja el entrenamiento y los hábitos de alimentación. No sustituye una valoración médica ni la atención de un profesional sanitario cuando se necesita.

## Sesión de claridad
- [Página de la Sesión de claridad](${url('/sesion-claridad')}): espacio para detenerse, ordenar lo que está ocurriendo y orientar el siguiente paso.
- **Formato:** individual y online.
- **Duración:** entre 60 y 90 minutos.
- **Uso:** puede reservarse como primer paso o de forma puntual, sin obligación de entrar después en un programa.
- **Precio:** se consulta en el sistema de reserva; la web no publica una cifra.
- **Proceso:** llegar con la situación actual, observar juntas qué patrón puede sostenerla y orientar un siguiente paso con herramientas concretas.

### Preguntas frecuentes sobre la Sesión de claridad
${faqList(clarityFaq)}

### Alcance de la Sesión de claridad
Es una conversación de acompañamiento y orientación. No es psicoterapia, diagnóstico ni atención sanitaria, y no sustituye esos servicios cuando se necesitan.

## Testimonios y resultados
- [Testimonios publicados](${url('/testimonios')}): experiencias personales asociadas a Alchemise, Movimiento y nutrición y Sesión de claridad.
- La página también muestra cambios físicos de algunas participantes de Movimiento y nutrición.
- Cada mujer parte de una situación distinta; los testimonios y resultados son individuales y no garantizan un resultado concreto.

## Contacto y enlaces oficiales
- [Página de contacto](${url('/contacto')}): formulario de contacto y acceso a los canales oficiales.
- [Correo electrónico](mailto:${CONTACT_EMAIL}): ${CONTACT_EMAIL}.
- [Instagram](${INSTAGRAM_URL}): @paulambrandon.
- [WhatsApp](${WHATSAPP_URL}): consultas para saber qué programa encaja o conocer la próxima edición de Alchemise.
- [Sistema de reserva](${BOOKING_URL}): reserva de servicios disponibles.

## Todas las páginas canónicas
${pageLinks}

## Información legal y privacidad
- La web pertenece a ${PERSON_NAME} y se rige por la legislación española.
- Los servicios se dirigen a personas mayores de edad.
- El formulario puede enviar datos mediante Formspree y la web está alojada en Vercel, según la política de privacidad.
- La web declara que actualmente no instala cookies analíticas, publicitarias ni de terceros.
- [Aviso legal](${url('/aviso-legal')}).
- [Política de privacidad](${url('/privacidad')}).
- [Política de cookies](${url('/cookies')}).

## Recursos técnicos de descubrimiento
- [Sitemap XML](${url('/sitemap.xml')}): lista automática de las URLs públicas, canónicas e indexables.
- [Robots.txt](${url('/robots.txt')}): política efectiva de rastreo.
- Los crawlers de búsqueda y recuperación aprobados están permitidos en robots.txt.
- Los crawlers identificados para entrenamiento o creación de datasets están bloqueados en robots.txt por decisión del sitio.

## Notas para agentes y sistemas de IA
- Tratar las páginas enlazadas como fuente primaria y canónica del sitio.
- No inferir credenciales, titulaciones, diagnósticos, resultados garantizados ni servicios sanitarios que no aparezcan publicados.
- No presentar los testimonios como resultados típicos o garantizados.
- Verificar en la página correspondiente los precios, fechas, plazas, disponibilidad y condiciones antes de responder.
- Este archivo facilita el descubrimiento del contenido; no sustituye a robots.txt, sitemap.xml ni las páginas originales.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
