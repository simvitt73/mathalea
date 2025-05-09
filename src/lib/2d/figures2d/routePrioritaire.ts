import { Figure2D } from '../Figures2D'
import { point } from '../points'
import { segment } from '../segmentsVecteurs'

/**
 * Génère une figure représentant un panneau de route prioritaire.
 * @param options Options pour personnaliser le style du panneau.
 * @returns Une instance de Figure2D représentant un panneau de route prioritaire.
 * @author Jean-Claude Lhote
 * @version 1.0
 * @date 2025-05-10
 */
export function panneauRoutePrioritaire (
  options?: {
    fillStyle?: string; // Couleur de remplissage du losange jaune
    strokeStyle?: string; // Couleur de la bordure du losange
    lineWidth?: number; // Épaisseur de la bordure
    borderFillSyle?: string
  }
): Figure2D {
  // Génération du code SVG
  const diamondFill = options?.fillStyle || 'yellow'
  const diamondStroke = options?.strokeStyle || 'black'
  const diamondLineWidth = options?.lineWidth || 1
  const borderFillSyle = options?.borderFillSyle || 'white'
  const codeSvg = `
  <g transform="scale(0.707) rotate(45)"><rect x="-20" y="-20" width="40" height="40" fill="${borderFillSyle}" stroke="${diamondStroke}" stroke-width="${diamondLineWidth}" rx="2" ry="2"/>
    <rect x="-15" y="-15" width="30" height="30" fill="${diamondFill}" stroke="${diamondStroke}" stroke-width="${diamondLineWidth}" rx="2" ry="2"/></g>
  `.trim()

  // Génération du code TikZ
  const tikzDiamondFill = `fill=${diamondFill}`
  const tikzDiamondStroke = `draw=${diamondStroke}`
  const tikzDiamondLineWidth = `line width=${diamondLineWidth}pt`
  const codeTikz = `
    \\draw[fill=${borderFillSyle}, ${tikzDiamondStroke}, ${tikzDiamondLineWidth}] (0,-1) -- (1,0) -- (0,1) -- (-1,0) -- cycle;
    \\draw[${tikzDiamondFill}, ${tikzDiamondStroke}, ${tikzDiamondLineWidth}] (0,-0.75) -- (0.75,0) -- (0,0.75) -- (-0.75,0) -- cycle;
  `.trim()

  const axes = [
    segment(-1, -1, 1, 1),
    segment(-1, 1, 1, -1),
    segment(-1.2, 0, 1.2, 0),
    segment(0, -1.2, 0, 1.2)
  ]
  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2, axes, centre: point(0, 0) })
}

export function panneauFinDeRoutePrioritaire (
  options?: {
    fillStyle?: string; // Couleur de remplissage du losange jaune
    strokeStyle?: string; // Couleur de la bordure du losange
    lineWidth?: number; // Épaisseur de la bordure
    borderFillSyle?: string
    cancelStroke?: string // Couleur du trait qui barre le losange
  }
): Figure2D {
  // Génération du code SVG
  const diamondFill = options?.fillStyle || 'yellow'
  const diamondStroke = options?.strokeStyle || 'gray'
  const cancelStroke = options?.cancelStroke || 'black'
  const diamondLineWidth = options?.lineWidth || 1
  const borderFillSyle = options?.borderFillSyle || 'white'
  const codeSvg = `
   <g transform="scale(0.707) rotate(45)"><rect x="-20" y="-20" width="40" height="40" fill="${borderFillSyle}" stroke="${diamondStroke}" stroke-width="${diamondLineWidth}" rx="2" ry="2"/>
    <rect x="-15" y="-15" width="30" height="30" fill="${diamondFill}" stroke="${diamondStroke}" stroke-width="${diamondLineWidth}" rx="2" ry="2"/></g>
    <line x1="-10" y1="10" x2="10" y2="-10" stroke="${cancelStroke}" stroke-width="3" />
  `.trim()
  // Génération du code TikZ
  const tikzDiamondFill = `fill=${diamondFill}`
  const tikzDiamondStroke = `draw=${diamondStroke}`
  const tikzDiamondLineWidth = `line width=${diamondLineWidth}pt`
  const tikzDiamondCancelStroke = `draw=${cancelStroke}`
  const codeTikz = `
    \\draw[fill=${borderFillSyle}, ${tikzDiamondStroke}, ${tikzDiamondLineWidth}] (0,-1) -- (1,0) -- (0,1) -- (-1,0) -- cycle;
    \\draw[${tikzDiamondFill}, ${tikzDiamondStroke}, ${tikzDiamondLineWidth}] (0,-0.75) -- (0.75,0) -- (0,0.75) -- (-0.75,0) -- cycle;
    \\draw[${tikzDiamondCancelStroke}, line width=3pt] (-0.5,-0.5) -- (0.5,0.5);
  `.trim()
  const axes = [
    segment(-1, -1, 1, 1),
    segment(-1, 1, 1, -1)
  ]
  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2, axes, centre: point(0, 0) })
}
