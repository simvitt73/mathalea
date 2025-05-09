import { Figure2D } from '../Figures2D'

/**
 * Génère une figure représentant un panneau STOP.
 * @param options Options pour personnaliser le style du panneau.
 * @returns Une instance de Figure2D représentant un panneau STOP.
 * @author Jean-Claude Lhote
 * @version 1.0
 * @date 2025-05-10
 */
export function panneauStop (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'octogone (par défaut rouge)
    strokeStyle?: string; // Couleur de la bordure de l'octogone (par défaut blanc)
    lineWidth?: number; // Épaisseur de la bordure
    textColor?: string; // Couleur du texte "STOP" (par défaut blanc)
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'red'
  const strokeStyle = options?.strokeStyle || 'white'
  const lineWidth = options?.lineWidth || 2
  const textColor = options?.textColor || 'white'

  // Génération du code SVG
  const codeSvg = `
   <polygon points="-8.8,-20 8.8,-20 20,-8.8 20,8.8 8.8,20 -8.8,20 -20,8.8 -20,-8.8" fill="white" stroke="black" stroke-width="1"/>
  <polygon points="-8.8,-20 8.8,-20 20,-8.8 20,8.8 8.8,20 -8.8,20 -20,8.8 -20,-8.8" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" transform="scale(0.9)"/>
    <text x="0" y="5" fill="${textColor}" font-size="12" font-family="Arial" font-weight="bold" text-anchor="middle">STOP</text>
  `.trim()

  // Génération du code TikZ
  const codeTikz = `
                    \\draw[fill=white, draw=black, line width=1pt] (-0.5,-1) -- (0.5,-1) -- (1,-0.5) -- (1,0.5) -- (0.5,1) -- (-0.5,1) -- (-1,0.5) -- (-1,-0.5) -- cycle;
             \\begin{scope}[scale=0.95]\\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt] (-0.5,-1) -- (0.5,-1) -- (1,-0.5) -- (1,0.5) -- (0.5,1) -- (-0.5,1) -- (-1,0.5) -- (-1,-0.5) -- cycle;\\end{scope}
                    \\node at (0,0) {\\textcolor{${textColor}}{\\textbf{\\small STOP}}};
    `.trim()

  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2 })
}
