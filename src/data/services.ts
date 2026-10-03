/** Prestaciones contrastadas con /empieza-aqui y /alchemise el 3-10-2026.
 * No se trasladan la fecha ni las plazas de la edición antigua.
 */
import type { FaqItem } from './landing';

export const movementPlans = [
  { duration: '1 mes', price: '149 €', recommended: false },
  { duration: '3 meses', price: '390 €', recommended: true },
  { duration: '6 meses', price: '690 €', recommended: false },
] as const;

export const movementIncludes = [
  { title: 'Una llamada para conocerte', text: 'Empezamos hablando de tu punto de partida, tus objetivos y tu rutina para adaptar el proceso a ti.' },
  { title: 'Entrenamiento a tu medida', text: 'Un plan de entrenamiento adaptado a tu objetivo y a tu vida real.' },
  { title: 'Nutrición flexible', text: 'Una guía fácil de aplicar y recetas para cuidarte, sin alimentos prohibidos ni reglas imposibles de mantener.' },
  { title: 'Hábitos que puedas sostener', text: 'Estrategias y recursos prácticos para mantener la constancia sin depender de hacerlo todo perfecto.' },
  { title: 'Acompañamiento y ajustes', text: 'Revisamos cómo te sientes, resolvemos dudas y ajustamos lo que haga falta durante el proceso.' },
] as const;

export const alchemiseIncludes = [
  { title: 'Directos cada dos semanas', text: 'Sesiones grupales conmigo para trabajar las fases, resolver lo que vaya apareciendo y avanzar juntas.' },
  { title: 'Grabaciones y recursos', text: 'Acceso a las sesiones grabadas y ejercicios prácticos para llevar cada fase a tu día a día.' },
  { title: 'Comunidad privada', text: 'Un espacio de mujeres que recorren el mismo proceso, para compartir y sentirte acompañada entre sesiones.' },
  { title: 'Encuentros fuera de la pantalla', text: 'Quedadas presenciales y acceso a las escapadas de Alchemise que se organizan cada tres meses. Consulta los detalles y las condiciones de cada encuentro.' },
  { title: 'Seis meses de acceso', text: 'Puedes volver al contenido del programa incluso después de terminar tus 90 días.' },
] as const;

export const imac = [
  { letter: 'I', title: 'Identificar el origen', text: 'Entender de dónde nace la sensación de no ser suficiente y cómo ese patrón aparece en tu cuerpo, tus hábitos y tus relaciones.' },
  { letter: 'M', title: 'Modificar la relación contigo', text: 'Trabajar cómo te hablas, te valoras y te cuidas, para empezar a actuar desde el respeto hacia ti misma.' },
  { letter: 'A', title: 'Aplicar el cambio a tu vida', text: 'Llevar lo trabajado al movimiento, la alimentación, los hábitos, las relaciones y los límites en situaciones cotidianas.' },
  { letter: 'C', title: 'Consolidar lo aprendido', text: 'Integrar esa forma de cuidarte, poner límites y perseguir tus objetivos para seguir construyendo desde otro lugar.' },
] as const;

export const alchemiseFaq: readonly FaqItem[] = [
  { question: '¿Y si no puedo asistir a un directo?', answer: 'Las sesiones quedan grabadas. Puedes volver a ellas y trabajar con los recursos aunque algún día no puedas conectarte.' },
  { question: '¿Tengo que hablar delante del grupo?', answer: 'Puedes participar, escribir o simplemente escuchar y aplicar lo trabajado. No necesitas exponerte más de lo que te sientas cómoda.' },
  { question: '¿Es compatible con mi trabajo y mi familia?', answer: 'Los encuentros en directo son cada dos semanas y quedan grabados. Entre sesiones, el trabajo se lleva a situaciones de tu propia vida.' },
  { question: '¿Incluye entrenamiento y nutrición personalizados?', answer: 'Es un programa grupal para trabajar la relación contigo misma. Si quieres complementarlo con un plan personalizado de entrenamiento y nutrición, el programa ofrece un 10 % de descuento en ese acompañamiento.' },
  { question: '¿Cómo puedo unirme a la próxima edición?', answer: 'Escríbeme por WhatsApp. Hablamos de lo que necesitas y te cuento las fechas, las condiciones y la disponibilidad de la próxima edición.' },
] as const;

export const movementFaq: readonly FaqItem[] = [
  { question: '¿Es una dieta restrictiva?', answer: 'No hay alimentos prohibidos ni reglas imposibles de mantener. La guía se adapta a lo que te gusta comer y a tu vida real, para que cuidarte no se convierta en otra obsesión.' },
  { question: '¿Y si ya he probado otros planes?', answer: 'Además del entrenamiento y la alimentación, trabajamos la relación que tienes con ellos: la autoexigencia, la culpa y el todo o nada. El proceso empieza con una llamada para conocerte y adaptar el acompañamiento.' },
  { question: '¿Es compatible con poco tiempo para cocinar o entrenar?', answer: 'El plan se diseña alrededor de tu rutina real. La llamada inicial nos ayuda a entender qué puedes sostener y qué ajustes necesitas.' },
  { question: '¿Recibo un plan y después sigo sola?', answer: 'Estoy contigo durante el proceso. Revisamos cómo te sientes, ajustamos lo que haga falta y resolvemos las dudas que vayan apareciendo.' },
  { question: '¿Qué duración elijo?', answer: 'Puedes empezar con uno, tres o seis meses. Si no sabes qué opción encaja contigo, escríbeme por WhatsApp y lo vemos juntas antes de reservar.' },
] as const;

export const clarityFaq: readonly FaqItem[] = [
  { question: '¿Necesito saber exactamente qué quiero tratar?', answer: 'Puedes llegar con una situación concreta o con la sensación de que necesitas ordenar lo que te ocurre. No hace falta tenerlo todo claro antes de hablar.' },
  { question: '¿Cuánto dura y dónde se hace?', answer: 'La sesión es online y dura entre 60 y 90 minutos, según lo que necesitemos trabajar.' },
  { question: '¿Tengo que entrar en un programa después?', answer: 'No. Puedes reservar esta sesión como un primer paso o volver de forma puntual cuando necesites claridad, sin entrar en otro programa.' },
  { question: '¿Es terapia?', answer: 'Es una conversación de acompañamiento y orientación. No es psicoterapia, diagnóstico ni atención sanitaria, y no sustituye ese tipo de atención cuando la necesitas.' },
  { question: '¿Cómo reservo?', answer: 'Desde el enlace de reserva puedes seleccionar el servicio y agendar tu cita. Si tienes dudas antes de decidirte, puedes escribirme por WhatsApp.' },
] as const;
