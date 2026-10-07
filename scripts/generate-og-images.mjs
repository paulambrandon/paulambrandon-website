import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const SOURCE = `${ROOT}src/assets/images/paula-marquez-brandon.webp`;
const OUTPUT_DIR = `${ROOT}public/og`;

const cards = [
  ['inicio', ['Autoexigencia y', 'autocuidado', 'en mujeres']],
  ['metodo', ['De la autoexigencia', 'al autocuidado']],
  ['programas', ['Formas de trabajar', 'conmigo']],
  ['alchemise', ['Alchemise']],
  ['movimiento-nutricion', ['Movimiento y nutrición', 'sin obsesión'], 44],
  ['sesion-claridad', ['Sesión de claridad']],
  ['sobre-mi', ['Mi historia']],
  ['testimonios', ['Historias reales', 'de cambio']],
  ['contacto', ['Hablemos']],
];

const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const overlay = (lines, fontSize = 56) => {
  const lineHeight = Math.round(fontSize * 1.6);
  const firstY = 265 - (lines.length - 1) * (lineHeight / 2);
  const title = lines
    .map(
      (line, index) =>
        `<text x="72" y="${firstY + index * lineHeight}" class="title">${escapeXml(line)}</text>`
    )
    .join('');

  return Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <style>
        .brand { font: 500 24px Arial, sans-serif; letter-spacing: 3px; fill: #606957; }
        .title { font: ${fontSize}px Georgia, serif; fill: #4a3b33; }
        .tagline { font: 20px Arial, sans-serif; letter-spacing: 1px; fill: #6e5d53; }
      </style>
      <rect width="720" height="630" fill="#faf8f4" />
      <rect x="704" width="16" height="630" fill="#b06a45" />
      <text x="72" y="90" class="brand">PAULAMBRANDON</text>
      ${title}
      <text x="72" y="558" class="tagline">PAULA MÁRQUEZ BRANDON</text>
    </svg>
  `);
};

await mkdir(OUTPUT_DIR, { recursive: true });

const portrait = await sharp(SOURCE)
  .resize(560, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 84, progressive: true })
  .toBuffer();

await Promise.all(
  cards.map(async ([slug, lines, fontSize]) => {
    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 3,
        background: '#f3ede6',
      },
    })
      .composite([
        { input: portrait, left: 640, top: 0 },
        { input: overlay(lines, fontSize), left: 0, top: 0 },
      ])
      .jpeg({ quality: 84, progressive: true, chromaSubsampling: '4:2:0' })
      .toFile(`${OUTPUT_DIR}/${slug}.jpg`);
  })
);

console.log(`Generadas ${cards.length} imágenes Open Graph en public/og/.`);
