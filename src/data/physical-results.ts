import ancaResult from '../assets/images/resultado-anca-frente.webp';
import ancaBackResult from '../assets/images/resultado-anca-espalda.webp';
import estherResult from '../assets/images/resultado-esther-frente.webp';
import estherBackResult from '../assets/images/resultado-esther-espalda.webp';
import montseResult from '../assets/images/resultado-montse-frente.webp';
import montseBackResult from '../assets/images/resultado-montse-espalda.webp';
import anaResult from '../assets/images/resultado-ana.webp';
import marionResult from '../assets/images/resultado-marion.webp';
import claraResult from '../assets/images/resultado-clara.webp';

export const physicalResults = [
  {
    name: 'Anca',
    time: '2 meses',
    images: [
      { src: ancaResult, alt: 'Evolución física de Anca vista de frente, antes y después' },
      { src: ancaBackResult, alt: 'Evolución física de Anca vista de espalda, antes y después' },
    ],
  },
  {
    name: 'Esther',
    time: '6 meses',
    images: [
      { src: estherResult, alt: 'Evolución física de Esther vista de frente, antes y después' },
      { src: estherBackResult, alt: 'Evolución física de Esther vista de espalda, antes y después' },
    ],
  },
  {
    name: 'Montse',
    time: '2 meses',
    images: [
      { src: montseResult, alt: 'Evolución física de Montse vista de frente, antes y después' },
      { src: montseBackResult, alt: 'Evolución física de Montse vista de espalda, antes y después' },
    ],
  },
  {
    name: 'Ana',
    time: '5 meses',
    images: [{ src: anaResult, alt: 'Evolución física de Ana vista de espalda, antes y después' }],
  },
  {
    name: 'Marion',
    time: '3 meses',
    images: [{ src: marionResult, alt: 'Evolución física de Marion vista de espalda, antes y después' }],
  },
  {
    name: 'Clara',
    time: '1 mes',
    images: [{ src: claraResult, alt: 'Evolución física de Clara vista de perfil, antes y después' }],
  },
] as const;

