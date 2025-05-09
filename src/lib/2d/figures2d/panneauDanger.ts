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
  const lineWidth = options?.lineWidth || 4
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1

  // Génération du code SVG
  const codeSvg = `
    <polygon points="-19,-12 19,-12 0,21" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="-15.58,-10 15.58,-10 0,17" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
  `.trim()

  // Génération du code TikZ
  const codeTikz = `
      \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=0.05] 
        (-0.95,0.6) -- (0.95,0.6) -- (0,-1.05) -- cycle;
      \\draw[draw=${strokeStyle}, line width=5pt] 
        (-0.779,0.5) -- (0.779,0.5) -- (0,-0.85) -- cycle;
  `.trim()

  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2 })
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
  const lineWidth = options?.lineWidth || 2
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1

  // Génération du code SVG
  const codeSvg = `
    <polygon points="-17.32,10 17.32,10 0,-20" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="-15.58,9 15.58,9 0,-18" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
    <path d="M -2,-7 L -2,2 L -0.5,2 L -3,7 L -5.5,2 L -4,2 L -4,-7 Z" fill="black" />
    <path d="M 4,7 L 4,-2 L 5.5,-2 L 3,-7 L 0.5,-2 L 2,-2 L 2,7 Z" fill="black" />
  `.trim()
  const codeTikz = `
      \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=0.05] 
        (-0.866,-0.5) -- (0.866,-0.5) -- (0,1) -- cycle;
      \\draw[draw=${strokeStyle}, line width=2pt] 
        (-0.779,-0.45) -- (0.779,-0.45) -- (0,0.9) -- cycle;
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
  const lineWidth = options?.lineWidth || 2
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1

  // Génération du code SVG
  const codeSvg = `
    <polygon points="-17.32,10 17.32,10 0,-20" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="-15.58,9 15.58,9 0,-18" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
  <line x1="-2" y1="6" x2="-2" y2="-6" stroke="black" stroke-width="2" />
    <path d="M 3.5,6 L 3.5,2 L 1.5,-2 L 1.5,-6" stroke="black" stroke-width="2" fill="none" />
  `.trim()

  // Génération du code TikZ
  const codeTikz = `
   \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=0.05] 
        (-0.866,-0.5) -- (0.866,-0.5) -- (0,1) -- cycle;
      \\draw[draw=${strokeStyle}, line width=2pt] 
        (-0.779,-0.45) -- (0.779,-0.45) -- (0,0.9) -- cycle;
     \\draw[draw=black, line width=3pt] (-0.15,-0.3) -- (-0.15,0.4);
    \\draw[draw=black, line width=3pt] (0.25,-0.3) -- (0.1,0.1) -- (0.1,0.4);
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
  const lineWidth = options?.lineWidth || 2
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1

  // Génération du code SVG
  const codeSvg = `
    <polygon points="-17.32,10 17.32,10 0,-20" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="-15.58,9 15.58,9 0,-18" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
   <path d="M -3.9,6 L -3.9,2 L -1.9,-2 L -1.9,-6" stroke="black" stroke-width="2" fill="none" />
    <path d="M 3.9,6 L 3.9,2 L 1.9,-2 L 1.9,-6" stroke="black" stroke-width="2" fill="none" />
  `.trim()

  // Génération du code TikZ
  const codeTikz = `
   \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=0.05] 
        (-0.866,-0.5) -- (0.866,-0.5) -- (0,1) -- cycle;
      \\draw[draw=${strokeStyle}, line width=2pt] 
        (-0.779,-0.45) -- (0.779,-0.45) -- (0,0.9) -- cycle;
    \\draw[draw=black, line width=3pt] (-0.195,-0.3) -- (-0.195,-0.1) -- (-0.095,0.1) -- (-0.095,0.3);
    \\draw[draw=black, line width=3pt] (0.195,-0.3) -- (0.195,-0.1) -- (0.095,0.1) -- (0.095,0.3);
  `.trim()
  const axes = [
    segment(0, -1.2, 0, 1.2),
  ]
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
  const lineWidth = options?.lineWidth || 2
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1

  // Génération du code SVG
  const codeSvg = `
    <polygon points="-17.32,10 17.32,10 0,-20" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="-15.58,9 15.58,9 0,-18" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
    <line x1="-4.5" y1="4.5" x2="4.5" y2="-4.5" stroke="black" stroke-width="2"/>
    <line x1="-4.5" y1="-4.5" x2="4.5" y2="4.5" stroke="black" stroke-width="2"/>
  `.trim()

  // Génération du code TikZ
  const codeTikz = `
   \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=0.05] 
        (-0.866,-0.5) -- (0.866,-0.5) -- (0,1) -- cycle;
      \\draw[draw=${strokeStyle}, line width=2pt] 
        (-0.779,-0.45) -- (0.779,-0.45) -- (0,0.9) -- cycle;
    \\draw[draw=black, line width=3pt] (-0.25,0.25) -- (0.25,-0.25);
    \\draw[draw=black, line width=3pt] (-0.25,-0.25) -- (0.25,0.25);
  `.trim()
  const axes = [
    segment(0, -1.2, 0, 1.2),
  ]
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
  const lineWidth = options?.lineWidth || 2
  const borderStyle = options?.borderStyle || 'black'
  const borderWidth = options?.borderWidth || 1

  // Génération du code SVG
  const codeSvg = `
    <polygon points="-17.32,10 17.32,10 0,-20" fill="${fillStyle}" stroke="${borderStyle}" stroke-width="${borderWidth}" />
    <polygon points="-15.58,9 15.58,9 0,-18" fill="none" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
     <rect x="-3" y="-8" width="6" height="14" rx="3" fill="black" />
    <circle cx="0" cy="-5" r="1.5" fill="red" />
    <circle cx="0" cy="-1" r="1.5" fill="orange" />
    <circle cx="0" cy="3" r="1.5" fill="green" />`
    .trim()

  const codeTikz = `
  \\draw[fill=${fillStyle}, draw=${borderStyle}, line width=0.05] 
        (-0.866,-0.5) -- (0.866,-0.5) -- (0,1) -- cycle;
      \\draw[draw=${strokeStyle}, line width=2pt] 
        (-0.779,-0.45) -- (0.779,-0.45) -- (0,0.9) -- cycle;
     \\fill[black, rounded corners=0.15cm] (-0.15,0.4) rectangle (0.15,-0.3);
    \\fill[red] (0,0.25) circle (0.075);
    \\fill[orange] (0,0.05) circle (0.075);
    \\fill[green] (0,-0.15) circle (0.075);
  `.trim()

  const axes = [
    segment(0, -1.2, 0, 1.2),
  ]
  return new Figure2D({ codeSvg, codeTikz, width: 2, height: 2, axes })
}
