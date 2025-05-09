import { Figure2D } from '../Figures2D'
import { point } from '../points'
import { segment } from '../segmentsVecteurs'

/**
 * Génère une figure représentant un panneau de stationnement interdit.
 * @param options Options pour personnaliser le style du panneau.
 * @returns Une instance de Figure2D représentant un panneau de stationnement interdit.
 * @author Jean-Claude Lhote
 * @version 1.0
 * @date 2025-05-10
 */
export function panneauStationnementInterdit (
  options?: {
    fillStyle?: string; // Couleur de remplissage du cercle bleu
    strokeStyle?: string; // Couleur de la bordure du cercle
    lineWidth?: number; // Épaisseur de la bordure
  }
): Figure2D {
  // Génération du code SVG
  const circleFill = options?.fillStyle || 'blue'
  const circleStroke = options?.strokeStyle || 'red'
  const circleLineWidth = options?.lineWidth || 5
  const crossColor = 'red'
  const codeSvg = `
  <circle cx="0" cy="0" r="20" stroke="black" stroke-width="1" />
    <circle cx="0" cy="0" r="17" fill="${circleFill}" stroke="${circleStroke}" stroke-width="${circleLineWidth}" />
    <line x1="-13" y1="-13" x2="13" y2="13" stroke="${crossColor}" stroke-width="3" />
  `.trim()

  // Génération du code TikZ
  const tikzCircleFill = `fill=${circleFill}`
  const tikzCircleStroke = `draw=${circleStroke}`
  const tikzCircleLineWidth = `line width=${circleLineWidth * 1.1}pt`
  const tikzCrossColor = 'red'
  const codeTikz = `
   \\draw[draw=black, line width=1pt] (0,0) circle (1cm);
    \\draw[${tikzCircleFill}, ${tikzCircleStroke}, ${tikzCircleLineWidth}] (0,0) circle (0.9cm);
      \\draw[${tikzCrossColor}, line width=5pt] (-0.7,0.7) -- (0.7,-0.7);
  `.trim()

  const axes = [
    segment(-1, -1, 1, 1),
    segment(-1, 1, 1, -1)
  ]
  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2, axes, centre: point(0, 0) })
}
