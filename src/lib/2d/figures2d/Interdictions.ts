import { Figure2D } from '../Figures2D'
import { point } from '../points'
import { Segment, segment } from '../segmentsVecteurs'

/**
 * Génère une figure représentant un panneau de sens interdit.
 * @param options Options pour personnaliser le style du panneau.
 * @returns Une instance de Figure2D représentant un panneau de sens interdit.
 * @author Jean-Claude Lhote
 * @version 1.0
 * @date 2025-05-10
 */
export function panneauSensInterdit (
  options?: {
    fillStyle?: string; // Couleur de remplissage du cercle rouge
    strokeStyle?: string; // Couleur de la bordure du cercle
    lineWidth?: number; // Épaisseur de la bordure
  }
): Figure2D {
  // Génération du code SVG
  const circleFill = options?.fillStyle || 'red'
  const circleStroke = options?.strokeStyle || 'red'
  const circleLineWidth = options?.lineWidth || 2
  const svgPath = `
        <circle cx="0" cy="0" r="20" fill="${circleFill}" stroke="black" stroke-width="1" />
        <circle cx="0" cy="0" r="18" fill="${circleFill}" stroke="${circleStroke}" stroke-width="0" />
        <rect x="-13" y="-3.5" width="26" height="7" fill="white" />
    `.trim()
  const codeSvg = `${svgPath}`

  // Génération du code TikZ
  const tikzCircleFill = `fill=${circleFill}`
  const tikzCircleStroke = `draw=${circleStroke}`
  const tikzCircleLineWidth = `line width=${circleLineWidth}pt`
  const codeTikz = `
     \\draw[ draw=black, line width=1pt] (0,0) circle (1cm);
   \\draw[${tikzCircleFill}, ${tikzCircleStroke}, ${tikzCircleLineWidth}] (0,0) circle (0.95cm);
    \\fill[white] (-0.75, -0.125) rectangle (0.75, 0.125);
  `.trim()
  const axes = [
    segment(-1.2, 0, 1.2, 0),
    segment(0, -1.2, 0, 1.2)
  ]
  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2, axes, centre: point(0, 0) })
}

/**
 * Génère une figure représentant un panneau d'interdiction de circuler.
 * @param options Options pour personnaliser le style du panneau.
 * @returns Une instance de Figure2D représentant un panneau d'interdiction de circuler.
 *
 */
export function panneauInterdictionDeCirculer (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'intérieur du cercle (par défaut blanc)
    strokeStyle?: string; // Couleur de la bordure rouge
    lineWidth?: number; // Épaisseur de la bordure rouge
    barFillStyle?: string; // Couleur de la barre diagonale (par défaut rouge)
  }
): Figure2D {
  // Options par défaut
  const circleFill = options?.fillStyle || 'red'
  const circleStroke = options?.strokeStyle || 'red'
  const circleLineWidth = options?.lineWidth || 2

  // Génération du code SVG
  const codeSvg = `
     <circle cx="0" cy="0" r="20" fill="${circleFill}" stroke="black" stroke-width="1" />
        <circle cx="0" cy="0" r="18" fill="${circleFill}" stroke="${circleStroke}" stroke-width="0" />
        <circle cx="0" cy="0" r="14" fill="white" stroke="${circleStroke}" stroke-width="0" />
    `.trim()

  // Génération du code TikZ
  const tikzCircleFill = `fill=${circleFill}`
  const tikzCircleStroke = `draw=${circleStroke}`
  const tikzCircleLineWidth = `line width=${circleLineWidth}pt`
  const codeTikz = `
     \\draw[ draw=black, line width=1pt] (0,0) circle (1cm);
   \\draw[${tikzCircleFill}, ${tikzCircleStroke}, ${tikzCircleLineWidth}] (0,0) circle (0.95cm);
    \\fill[white] (-0,0) circle (0.7cm);
  `.trim()
  const axes: Segment[] = []
  for (let k = 0; k < 10; k++) {
    const axe = segment(
      -1.2 * Math.cos(Math.PI * (k * 180 / 10) / 180),
      -1.2 * Math.sin(Math.PI * (k * 180 / 10) / 180),
      1.2 * Math.cos(Math.PI * (k * 180 / 10) / 180),
      1.2 * Math.sin(Math.PI * (k * 180 / 10) / 180))
    axes.push(axe)
  }
  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2, nbAxes: Number.POSITIVE_INFINITY, axes, centre: point(0, 0) })
}
