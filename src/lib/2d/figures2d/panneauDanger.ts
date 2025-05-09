import { Figure2D } from '../Figures2D'
import { segment } from '../segmentsVecteurs'
/**
 * Génère une figure représentant un panneau de céder le passage.
 * @param options Options pour personnaliser le style du panneau.
 * @returns
 * @author Jean-Claude Lhote
 */
export function panneauCederLePassage (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'intérieur du triangle (par défaut blanc)
    strokeStyle?: string; // Couleur de la bordure rouge
    lineWidth?: number; // Épaisseur de la bordure rouge
    borderStyle?: string; // Couleur du liseré noir
    borderWidth?: number; // Épaisseur du liseré noir
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'white'
  const strokeStyle = options?.strokeStyle || 'red'
  const lineWidth = options?.lineWidth || 3
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1
  const sommets1 = [-90, 30, 150].map((angle) =>
  `${(22 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-22 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  const sommets2 = [-90, 30, 150].map((angle) =>
  `${(19 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-19 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  // Génération du code SVG
  const codeSvg = `
    <polygon points="${sommets1}" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="${sommets2}" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
  `.trim()
  const tikzSommets1 = [-90, 30, 150].map((angle) =>
    `(${(22 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(22 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')
  const tikzSommets2 = [-90, 30, 150].map((angle) =>
    `(${(19 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(19 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')

  const codeTikz = `
    \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=${borderWidth}pt] 
      ${tikzSommets1} -- cycle;
    \\draw[draw=${strokeStyle}, line width=${lineWidth}pt] 
      ${tikzSommets2} -- cycle;
  `.trim()
  // Génération du code TikZ

  const axes = [-90, 30, 150].map((angle) =>
    segment(1.2 * Math.cos(angle * Math.PI / 180), -1.2 * Math.sin(angle * Math.PI / 180), -1.2 * Math.cos(angle * Math.PI / 180), 1.2 * Math.sin(angle * Math.PI / 180)))
  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2, axes })
}

/**
 * Génère une figure représentant un panneau signalant une circulation à double sens.
 * @param options Options pour personnaliser le style du panneau.
 * @returns Une instance de Figure2D représentant un panneau de danger pour une circulation à double sens.
 * @author Jean-Claude Lhote
 */
export function panneauDoubleSens (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'intérieur du triangle (par défaut blanc)
    strokeStyle?: string; // Couleur de la bordure rouge
    lineWidth?: number; // Épaisseur de la bordure rouge
    borderStyle?: string; // Couleur du liseré noir
    borderWidth?: number; // Épaisseur du liseré noir
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'white'
  const strokeStyle = options?.strokeStyle || 'red'
  const lineWidth = options?.lineWidth || 3
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1
  const sommets1 = [90, -30, -150].map((angle) =>
  `${(22 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-22 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  const sommets2 = [90, -30, -150].map((angle) =>
  `${(19 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-19 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  // Génération du code SVG
  const codeSvg = `
    <polygon points="${sommets1}" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="${sommets2}" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
    <path d="M -2,-7 L -2,2 L -0.5,2 L -3,7 L -5.5,2 L -4,2 L -4,-7 Z" fill="black" />
    <path d="M 4,7 L 4,-2 L 5.5,-2 L 3,-7 L 0.5,-2 L 2,-2 L 2,7 Z" fill="black" />
  `.trim()
  const tikzSommets1 = [90, -30, -150].map((angle) =>
    `(${(22 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(22 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')
  const tikzSommets2 = [90, -30, -150].map((angle) =>
    `(${(19 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(19 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')

  const codeTikz = `
    \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=${borderWidth}pt] 
      ${tikzSommets1} -- cycle;
    \\draw[draw=${strokeStyle}, line width=${lineWidth}pt] 
      ${tikzSommets2} -- cycle;
      \\path[fill=black] 
        (-0.1,0.35) -- (-0.1,-0.1) -- (-0.025,-0.1) -- (-0.15,-0.35) -- (-0.275,-0.1) -- (-0.2,-0.1) -- (-0.2,0.35) -- cycle;
      \\path[fill=black] 
        (0.2,-0.35) -- (0.2,0.1) -- (0.275,0.1) -- (0.15,0.35) -- (0.025,0.1) -- (0.1,0.1) -- (0.1,-0.35) -- cycle;
  `.trim()
  // Génération du code TikZ

  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2 })
}
/**
 *
 * @param options Options pour personnaliser le style du panneau.
 * @returns
 * @author Jean-Claude Lhote
 */
export function panneauRetrecissementChaussee1 (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'intérieur du triangle (par défaut blanc)
    strokeStyle?: string; // Couleur de la bordure rouge
    lineWidth?: number; // Épaisseur de la bordure rouge
    borderStyle?: string; // Couleur du liseré noir
    borderWidth?: number; // Épaisseur du liseré noir
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'white'
  const strokeStyle = options?.strokeStyle || 'red'
  const lineWidth = options?.lineWidth || 3
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1
  const sommets1 = [90, -30, -150].map((angle) =>
  `${(22 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-22 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  const sommets2 = [90, -30, -150].map((angle) =>
  `${(19 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-19 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  // Génération du code SVG
  const codeSvg = `
    <polygon points="${sommets1}" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="${sommets2}" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
   <line x1="-2" y1="6" x2="-2" y2="-6" stroke="black" stroke-width="2" />
    <path d="M 3.5,6 L 3.5,2 L 1.5,-2 L 1.5,-6" stroke="black" stroke-width="2" fill="none" />
  `.trim()

  const tikzSommets1 = [90, -30, -150].map((angle) =>
    `(${(22 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(22 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')
  const tikzSommets2 = [90, -30, -150].map((angle) =>
    `(${(19 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(19 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')

  const codeTikz = `
    \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=${borderWidth}pt] 
      ${tikzSommets1} -- cycle;
    \\draw[draw=${strokeStyle}, line width=${lineWidth}pt] 
      ${tikzSommets2} -- cycle;
     \\draw[draw=black, line width=2pt] (-0.15,-0.3) -- (-0.15,0.4);
    \\draw[draw=black, line width=2pt] (0.25,-0.3) -- (0.1,0.1) -- (0.1,0.4);
  `.trim()

  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2 })
}
/**
 *
 * @param options Options pour personnaliser le style du panneau.
 * @returns
 * @author Jean-Claude Lhote
 */
export function panneauRetrecissementChaussee2 (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'intérieur du triangle (par défaut blanc)
    strokeStyle?: string; // Couleur de la bordure rouge
    lineWidth?: number; // Épaisseur de la bordure rouge
    borderStyle?: string; // Couleur du liseré noir
    borderWidth?: number; // Épaisseur du liseré noir
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'white'
  const strokeStyle = options?.strokeStyle || 'red'
  const lineWidth = options?.lineWidth || 3
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1
  const sommets1 = [90, -30, -150].map((angle) =>
  `${(22 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-22 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  const sommets2 = [90, -30, -150].map((angle) =>
  `${(19 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-19 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  // Génération du code SVG
  const codeSvg = `
    <polygon points="${sommets1}" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="${sommets2}" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
   <path d="M -3.9,6 L -3.9,2 L -1.9,-2 L -1.9,-6" stroke="black" stroke-width="2" fill="none" />
    <path d="M 3.9,6 L 3.9,2 L 1.9,-2 L 1.9,-6" stroke="black" stroke-width="2" fill="none" />
  `.trim()

  // Génération du code TikZ
  const tikzSommets1 = [90, -30, -150].map((angle) =>
    `(${(22 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(22 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')
  const tikzSommets2 = [90, -30, -150].map((angle) =>
    `(${(19 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(19 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')

  const codeTikz = `
    \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=${borderWidth}pt] 
      ${tikzSommets1} -- cycle;
    \\draw[draw=${strokeStyle}, line width=${lineWidth}pt] 
      ${tikzSommets2} -- cycle;
     \\draw[draw=black, line width=2pt] (-0.195,-0.3) -- (-0.195,-0.1) -- (-0.1,0.1) -- (-0.1,0.3);
    \\draw[draw=black, line width=2pt] (0.195,-0.3) -- (0.195,-0.1) -- (0.1,0.1) -- (0.1,0.3);
  `.trim()
  const axes = [-90].map((angle) =>
    segment(1.2 * Math.cos(angle * Math.PI / 180), -1.2 * Math.sin(angle * Math.PI / 180), -1.2 * Math.cos(angle * Math.PI / 180), 1.2 * Math.sin(angle * Math.PI / 180)))
  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2, axes })
}
/**
 *
 * @param options Options pour personnaliser le style du panneau.
 * @returns
 * @author Jean-Claude Lhote
 */
export function panneauCroisementPrioriteADroite (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'intérieur du triangle (par défaut blanc)
    strokeStyle?: string; // Couleur de la bordure rouge
    lineWidth?: number; // Épaisseur de la bordure rouge
    borderStyle?: string; // Couleur du liseré noir
    borderWidth?: number; // Épaisseur du liseré noir
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'white'
  const strokeStyle = options?.strokeStyle || 'red'
  const lineWidth = options?.lineWidth || 3
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1
  const sommets1 = [90, -30, -150].map((angle) =>
  `${(22 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-22 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  const sommets2 = [90, -30, -150].map((angle) =>
  `${(19 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-19 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  // Génération du code SVG
  const codeSvg = `
    <polygon points="${sommets1}" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="${sommets2}" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
     <line x1="-4.5" y1="4.5" x2="4.5" y2="-4.5" stroke="black" stroke-width="2"/>
    <line x1="-4.5" y1="-4.5" x2="4.5" y2="4.5" stroke="black" stroke-width="2"/>
  `.trim()

  // Génération du code TikZ
  const tikzSommets1 = [90, -30, -150].map((angle) =>
    `(${(22 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(22 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')
  const tikzSommets2 = [90, -30, -150].map((angle) =>
    `(${(19 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(19 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')

  const codeTikz = `
    \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=${borderWidth}pt] 
      ${tikzSommets1} -- cycle;
    \\draw[draw=${strokeStyle}, line width=${lineWidth}pt] 
      ${tikzSommets2} -- cycle;
     \\draw[draw=black, line width=3pt] (-0.25,0.25) -- (0.25,-0.25);
    \\draw[draw=black, line width=3pt] (-0.25,-0.25) -- (0.25,0.25);
  `.trim()
  const axes = [-90].map((angle) =>
    segment(1.2 * Math.cos(angle * Math.PI / 180), -1.2 * Math.sin(angle * Math.PI / 180), -1.2 * Math.cos(angle * Math.PI / 180), 1.2 * Math.sin(angle * Math.PI / 180)))
  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2, axes })
}
/**
 *
 * @param options Options pour personnaliser le style du panneau.
 * @returns Figure2D représentant un panneau de feu tricolore.
 * @author Jean-Claude Lhote
 */
export function panneauFeuTricolore (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'intérieur du triangle (par défaut blanc)
    strokeStyle?: string; // Couleur de la bordure rouge
    lineWidth?: number; // Épaisseur de la bordure rouge
    borderStyle?: string; // Couleur du liseré noir
    borderWidth?: number; // Épaisseur du liseré noir
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'white'
  const strokeStyle = options?.strokeStyle || 'red'
  const lineWidth = options?.lineWidth || 3
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1
  const sommets1 = [90, -30, -150].map((angle) =>
  `${(22 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-22 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  const sommets2 = [90, -30, -150].map((angle) =>
  `${(19 * Math.cos(angle * Math.PI / 180)).toFixed(2)},${(-19 * Math.sin(angle * Math.PI / 180)).toFixed(2)}`).join(' ')
  // Génération du code SVG
  const codeSvg = `
    <polygon points="${sommets1}" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="${sommets2}" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
      <rect x="-3" y="-8" width="6" height="14" rx="3" fill="black" />
    <circle cx="0" cy="-5" r="1.5" fill="red" />
    <circle cx="0" cy="-1" r="1.5" fill="orange" />
    <circle cx="0" cy="3" r="1.5" fill="green" />`
    .trim()

  const tikzSommets1 = [90, -30, -150].map((angle) =>
    `(${(22 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(22 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')
  const tikzSommets2 = [90, -30, -150].map((angle) =>
    `(${(19 * Math.cos(angle * Math.PI / 180) / 20).toFixed(3)},${(19 * Math.sin(angle * Math.PI / 180) / 20).toFixed(3)})`
  ).join(' -- ')

  const codeTikz = `
    \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=${borderWidth}pt] 
      ${tikzSommets1} -- cycle;
    \\draw[draw=${strokeStyle}, line width=${lineWidth}pt] 
      ${tikzSommets2} -- cycle;
       \\fill[black, rounded corners=0.15cm] (-0.15,0.4) rectangle (0.15,-0.3);
    \\fill[red] (0,0.25) circle (0.075);
    \\fill[orange] (0,0.05) circle (0.075);
    \\fill[green] (0,-0.15) circle (0.075);
  `.trim()

  const axes = [-90].map((angle) =>
    segment(1.2 * Math.cos(angle * Math.PI / 180), -1.2 * Math.sin(angle * Math.PI / 180), -1.2 * Math.cos(angle * Math.PI / 180), 1.2 * Math.sin(angle * Math.PI / 180)))
  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2, axes })
}
