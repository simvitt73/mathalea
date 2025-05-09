import { Figure2D } from '../Figures2D'
import { point } from '../points'
import { segment } from '../segmentsVecteurs'

/**
 * Génère une figure représentant un panneau de fin de limitation.
 * @param options Options pour personnaliser le style du panneau.
 * @returns Une instance de Figure2D représentant un panneau de fin de limitation.
 * @author Jean-Claude Lhote
 * @version 1.0
 * @date 2025-05-10
 */
export function panneauFinDeLimitation (
  options?: {
    fillStyle?: string; // Couleur de remplissage du cercle (par défaut blanc)
    strokeStyle?: string; // Couleur de la bordure du cercle (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure
    diagonalColor?: string; // Couleur des diagonales (par défaut gris)
  }
): Figure2D {
  // Génération du code SVG
  const circleFill = options?.fillStyle || 'white'
  const circleStroke = options?.strokeStyle || 'black'
  const circleLineWidth = options?.lineWidth || 2
  const diagonalColor = options?.diagonalColor || 'gray'
  const codeSvg = `
    <circle cx="0" cy="0" r="20" fill="${circleFill}" stroke="${circleStroke}" stroke-width="${circleLineWidth}" />
    <line x1="-15" y1="15" x2="15" y2="-15" stroke="${diagonalColor}" stroke-width="2" />
  `.trim()

  // Génération du code TikZ
  const tikzCircleFill = `fill=${circleFill}`
  const tikzCircleStroke = `draw=${circleStroke}`
  const tikzCircleLineWidth = `line width=${circleLineWidth}pt`
  const tikzDiagonalColor = diagonalColor
  const codeTikz = `
    \\draw[${tikzCircleFill}, ${tikzCircleStroke}, ${tikzCircleLineWidth}] (0,0) circle (1cm);
    \\draw[${tikzDiagonalColor}, line width=1pt] (-0.75,-0.75) -- (0.75,0.75);
  `.trim()
  const axes = [
    segment(-1, -1, 1, 1),
    segment(-1, 1, 1, -1)
  ]
  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2, axes, centre: point(0, 0) })
}
