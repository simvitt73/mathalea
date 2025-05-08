import { Figure2D } from '../Figures2D'

/**
 * Génère une figure représentant un panneau de voie sans issue.
 * @param options Options pour personnaliser le style du panneau.
 * @returns Une instance de Figure2D représentant un panneau de voie sans issue.
 * @author Jean-Claude Lhote
 */
export function panneauVoieSansIssue (
  options?: {
    fillStyle?: string; // Couleur de remplissage du carré bleu (par défaut bleu)
    strokeStyle?: string; // Couleur de la bordure noire (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure noire
    tFillStyle?: string; // Couleur de la forme en T (par défaut blanc)
    barFillStyle?: string; // Couleur de la barre rouge (par défaut rouge)
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'blue'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const tFillStyle = options?.tFillStyle || 'white'
  const barFillStyle = options?.barFillStyle || 'red'

  // Génération du code SVG
  const codeSvg = `
    <rect x="-20" y="-20" width="40" height="40" rx="5" fill="white" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
    <rect x="-17" y="-17" width="34" height="34" fill="${fillStyle}" />
    <rect x="-2.5" y="-10" width="5" height="24" fill="${tFillStyle}" />
    <rect x="-7" y="-14" width="14" height="9" fill="${tFillStyle}" />
    <rect x="-6" y="-13" width="12" height="7" fill="${barFillStyle}" />
  `.trim()

  // Génération du code TikZ
  const codeTikz = `
    \\draw[fill=white, draw=${strokeStyle}, line width=${lineWidth}pt, rounded corners=2pt] (-1,-1) rectangle (1,1);
    \\fill[${fillStyle}] (-0.85,-0.85) rectangle (0.85,0.85);
    \\fill[${tFillStyle}] (-0.125,-0.5) rectangle (0.125,0.7);
    \\fill[${tFillStyle}] (-0.35,0.35) rectangle (0.35,0.7);
    \\fill[${barFillStyle}] (-0.3,0.4) rectangle (0.3,0.6);
  `.trim()

  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2 })
}
/**
 * Génère une figure représentant un panneau de parking.
 * @param options Options pour personnaliser le style du panneau.
 * @returns Une instance de Figure2D représentant un panneau de parking.
 * @author Jean-Claude Lhote
 */
export function panneauParking (
  options?: {
    fillStyle?: string; // Couleur de remplissage du carré bleu (par défaut bleu)
    strokeStyle?: string; // Couleur de la bordure noire (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure noire
    pFillStyle?: string; // Couleur de la lettre P (par défaut blanc)
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'blue'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const pFillStyle = options?.pFillStyle || 'white'

  // Génération du code SVG
  const codeSvg = `
    <rect x="-20" y="-20" width="40" height="40" rx="5" fill="white" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
    <rect x="-17" y="-17" width="34" height="34" fill="${fillStyle}" />
    <text x="0" y="12" font-size="30" font-family="Arial" font-weight="bold" text-anchor="middle" fill="${pFillStyle}">P</text>
  `.trim()

  // Génération du code TikZ
  const codeTikz = `
    \\draw[fill=white, draw=${strokeStyle}, line width=${lineWidth}pt, rounded corners=2pt] (-1,-1) rectangle (1,1);
    \\fill[${fillStyle}] (-0.85,-0.85) rectangle (0.85,0.85);
    \\node[text=${pFillStyle}, font=\\bfseries, scale=1.5] at (0,0) {P};
  `.trim()

  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2 })
}
