import { Figure2D } from '../Figures2D'

/**
 * Génère une figure représentant un panneau de fin d'interdiction de doubler.
 * @param options Options pour personnaliser le style du panneau.
 * @returns Une instance de Figure2D représentant un panneau de fin d'interdiction de doubler.
 * @author Jean-Claude Lhote
 * @version 1.0
 * @date 2025-05-10
 */
export function finInterdiction (
  options?: {
    fillStyle?: string; // Couleur de remplissage du cercle (par défaut blanc)
    strokeStyle?: string; // Couleur de la bordure du cercle (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure
    diagonalColor?: string; // Couleur des diagonales (par défaut gris)
    carColor?: string; // Couleur des voitures (par défaut gris)
  }
): Figure2D {
  // Génération du code SVG
  const circleFill = options?.fillStyle || 'white'
  const circleStroke = options?.strokeStyle || 'black'
  const circleLineWidth = options?.lineWidth || 1
  const diagonalColor = options?.diagonalColor || 'gray'
  const carColor = options?.carColor || 'gray'
  const codeSvg = `
    <line x1="-14" y1="14" x2="14" y2="-14" stroke="${diagonalColor}" stroke-width="4" />
    <circle cx="0" cy="0" r="20" fill="none" stroke="${circleStroke}" stroke-width="${circleLineWidth}" />
  `.trim()

  // Génération du code TikZ
  const tikzCircleFill = `fill=${circleFill}`
  const tikzCircleStroke = `draw=${circleStroke}`
  const tikzCircleLineWidth = `line width=${circleLineWidth}pt`
  const tikzDiagonalColor = diagonalColor
  const tikzCarColor = carColor
  const codeTikz = `
    \\draw[${tikzCircleFill}, ${tikzCircleStroke}, ${tikzCircleLineWidth}] (0,0) circle (1cm);
    \\fill[${tikzCarColor}] (-0.6,-0.25) rectangle (-0.2,0.25);
    \\fill[${tikzCarColor}] (0.2,-0.25) rectangle (0.6,0.25);
    \\draw[${tikzDiagonalColor}, line width=1pt] (-0.75,-0.75) -- (0.75,0.75);
    \\draw[${tikzDiagonalColor}, line width=1pt] (-0.75,0.75) -- (0.75,-0.75);
  `.trim()

  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2 })
}
