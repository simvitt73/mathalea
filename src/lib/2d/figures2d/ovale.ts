import { Figure2D } from '../Figures2D'

/**
 * Génère une figure représentant un ovale.
 * @param options Options pour personnaliser le style de l'ovale.
 * @returns Une instance de Figure2D représentant un ovale.
 * @author Jean-Claude Lhote
 * @version 1.0
 * @date 2025-05-10
 */
export function ovale (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'ovale
    strokeStyle?: string; // Couleur de la bordure de l'ovale
    lineWidth?: number; // Épaisseur de la bordure
  }
): Figure2D {
  // Génération du code SVG
  const ovaleFill = options?.fillStyle || 'none'
  const ovaleStroke = options?.strokeStyle || 'black'
  const ovaleLineWidth = options?.lineWidth || 1
  const codeSvg = `
    <ellipse cx="0" cy="0" rx="20" ry="10" fill="${ovaleFill}" stroke="${ovaleStroke}" stroke-width="${ovaleLineWidth}" />
  `.trim()

  // Génération du code TikZ
  const tikzOvaleFill = `fill=${ovaleFill}`
  const tikzOvaleStroke = `draw=${ovaleStroke}`
  const tikzOvaleLineWidth = `line width=${ovaleLineWidth}pt`
  const codeTikz = `
    \\draw[${tikzOvaleFill}, ${tikzOvaleStroke}, ${tikzOvaleLineWidth}] (0,0) ellipse (1cm and 0.5cm);
  `.trim()

  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 1 })
}
