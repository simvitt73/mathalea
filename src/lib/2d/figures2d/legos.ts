import { Figure2D } from '../Figures2D'
/**
 * @author Jean-Claude Lhote
 * @param nx nombre de studs en x
 * @param ny nombre
 * @param options
 * @returns
 */
export function briqueLego (
  nx: number,
  ny: number,
  options?: {
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
    studFillStyle?: string;
    studStrokeStyle?: string;
  }
): Figure2D {
  const fillStyle = options?.fillStyle || 'red'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const studFillStyle = options?.studFillStyle || 'red'
  const studStrokeStyle = options?.studStrokeStyle || 'black'

  const width = nx * 10
  const height = ny * 10

  const codeSvg = `
<rect x="${-width / 2}" y="${-height / 2}" width="${width}" height="${height}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
${Array.from({ length: nx }, (_, i) =>
  Array.from({ length: ny }, (_, j) =>
    `<circle cx="${-width / 2 + 5 + i * 10}" cy="${-height / 2 + 5 + j * 10}" r="3" fill="${studFillStyle}" stroke="${studStrokeStyle}" stroke-width="${lineWidth}" />`
  ).join('')
).join('')}
`.trim()

  const codeTikz = `
\\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt] (${-width / 20},${-height / 20}) rectangle (${width / 20},${height / 20});
\\foreach \\i in {0,...,${nx - 1}} {
  \\foreach \\j in {0,...,${ny - 1}} {
    \\fill[fill=${studFillStyle}] (\\i - ${(nx - 1) / 2},\\j - ${(ny - 1) / 2}) circle (0.3);
    \\draw[draw=${studStrokeStyle}, line width=${lineWidth}pt] (\\i - ${(nx - 1) / 2},\\j - ${(ny - 1) / 2}) circle (0.3);
  }
}
`.trim()

  return new Figure2D({ codeSvg, codeTikz, width: nx / 2, height: ny / 2 })
}
