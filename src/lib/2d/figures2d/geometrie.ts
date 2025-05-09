import { Figure2D } from '../Figures2D'
import { segment } from '../segmentsVecteurs'

/**
 * Génère une figure représentant une étoile à 5 branches.
 * @param options Options pour personnaliser le style de l'étoile.
 * @returns Une instance de Figure2D représentant une étoile à 5 branches.
 * @author Jean-Claude Lhote
 */
export function etoile5Branches (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'étoile (par défaut jaune)
    strokeStyle?: string; // Couleur de la bordure de l'étoile (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure
    rayonExterieur?: number; // Rayon des pointes de l'étoile (par défaut 20)
    rayonInterieur?: number; // Rayon des creux de l'étoile (par défaut 10)
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'yellow'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const rayonExterieur = options?.rayonExterieur || 1
  const rayonInterieur = options?.rayonInterieur || 0.5

  // Calcul des points de l'étoile
  const points = Array.from({ length: 10 }, (_, i) => {
    const angle = (Math.PI / 5) * i - Math.PI / 2
    const rayon = i % 2 === 0 ? rayonExterieur * 20 : rayonInterieur * 20
    return `${rayon * Math.cos(angle)},${rayon * Math.sin(angle)}`
  }).join(' ')

  // Génération du code SVG
  const codeSvg = `
      <polygon points="${points}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
    `.trim()

  // Génération du code TikZ
  const tikzPoints = Array.from({ length: 10 }, (_, i) => {
    const angle = (Math.PI / 5) * i - Math.PI / 2
    const rayon = i % 2 === 0 ? rayonExterieur * 1.5 : rayonInterieur * 1.5
    return `(${rayon * Math.cos(angle)},-${rayon * Math.sin(angle)})`
  }).join(' -- ')
  const codeTikz = `
      \\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt] ${tikzPoints} -- cycle;
    `.trim()
  const axes = [0, 72, 144, 216, 288].map(a => a + 90).map((angle) => segment(-Math.cos(angle * Math.PI / 180) * rayonExterieur, -Math.sin(angle * Math.PI / 180) * rayonExterieur, Math.cos(angle * Math.PI / 180) * rayonExterieur, Math.sin(angle * Math.PI / 180) * rayonExterieur))

  return new Figure2D({ codeSvg, codeTikz, width: rayonExterieur * 2, height: rayonExterieur * 2, axes })
}

/**
 * Génère une figure représentant un pentagone régulier.
 * @param options Options pour personnaliser le style du pentagone.
 * @returns Une instance de Figure2D représentant un pentagone régulier.
 * @author Jean-Claude Lhote
 */
export function pentagoneRegulier (
  options?: {
    fillStyle?: string; // Couleur de remplissage du pentagone (par défaut bleu)
    strokeStyle?: string; // Couleur de la bordure du pentagone (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure
    rayon?: number; // Rayon du pentagone (par défaut 20)
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'blue'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const rayon = options?.rayon || 3

  // Calcul des points du pentagone
  const points = Array.from({ length: 5 }, (_, i) => {
    const angle = (2 * Math.PI / 5) * i - Math.PI / 2
    return `${rayon * 20 * Math.cos(angle)},${rayon * 20 * Math.sin(angle)}`
  }).join(' ')

  // Génération du code SVG
  const codeSvg = `
            <polygon points="${points}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
        `.trim()

  // Génération du code TikZ
  const tikzPoints = Array.from({ length: 5 }, (_, i) => {
    const angle = (2 * Math.PI / 5) * i - Math.PI / 2
    return `(${rayon * Math.cos(angle)},${-rayon * Math.sin(angle)})`
  }).join(' -- ')
  const codeTikz = `
            \\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt] ${tikzPoints} -- cycle;
        `.trim()
  const axes = [0, 72, 144, 216, 288].map(a => a + 90).map((angle) => segment(-Math.cos(angle * Math.PI / 180) * rayon * 1.1, -Math.sin(angle * Math.PI / 180) * rayon * 1.1, Math.cos(angle * Math.PI / 180) * rayon * 1.1, Math.sin(angle * Math.PI / 180) * rayon * 1.1))

  return new Figure2D({ codeSvg, codeTikz, width: rayon * 2, height: rayon * 2, axes })
}

/**
 * Génère une figure représentant un cerf-volant (quadrilatère avec deux paires de côtés adjacents égaux).
 * @param options Options pour personnaliser le style du cerf-volant.
 * @returns Une instance de Figure2D représentant un cerf-volant.
 * @author Jean-Claude Lhote
 */
export function cerfVolant (
  options?: {
    fillStyle?: string; // Couleur de remplissage du cerf-volant (par défaut vert)
    strokeStyle?: string; // Couleur de la bordure du cerf-volant (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure
    largeur?: number; // Largeur du cerf-volant (par défaut 20)
    hauteur?: number; // Hauteur du cerf-volant (par défaut 40)
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'green'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const largeur = options?.largeur || 2
  const hauteur = options?.hauteur || 3

  // Calcul des points du cerf-volant
  const points = [
        `0,${-hauteur * 10}`, // Sommet supérieur
        `${largeur * 10},${-hauteur * 7}`, // Coin droit
        `0,${hauteur * 10}`, // Sommet inférieur
        `${-largeur * 10},${-hauteur * 7}` // Coin gauche
  ].join(' ')

  // Génération du code SVG
  const codeSvg = `
            <polygon points="${points}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
        `.trim()

  // Génération du code TikZ
  const tikzPoints = [
        `(0,${hauteur / 2})`, // Sommet supérieur
        `(${largeur},${hauteur * 0.35})`, // Coin droit
        `(0,${-hauteur / 2})`, // Sommet inférieur
        `(${-largeur},${hauteur * 0.35})` // Coin gauche
  ].join(' -- ')
  const codeTikz = `
            \\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt] ${tikzPoints} -- cycle;
        `.trim()
  const axes = [segment(0, -hauteur * 0.6, 0, hauteur * 0.6)]
  return new Figure2D({ codeSvg, codeTikz, width: largeur, height: hauteur, axes })
}

/**
 * Génère une figure représentant une aile delta (triangle isocèle).
 * @param options Options pour personnaliser le style de l'aile delta.
 * @returns Une instance de Figure2D représentant une aile delta.
 * @author Jean-Claude Lhote
 */
export function aileDelta (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'aile delta (par défaut rouge)
    strokeStyle?: string; // Couleur de la bordure de l'aile delta (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure
    base?: number; // Longueur de la base de l'aile delta (par défaut 30)
    hauteur?: number; // Hauteur de l'aile delta (par défaut 40)
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'red'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const base = options?.base || 3
  const hauteur = options?.hauteur || 4

  // Calcul des points de l'aile delta
  const points = [
        `0,${-hauteur * 10}`, // Sommet supérieur
        `${base * 10},${hauteur * 10}`, // Coin droit
        `0,${hauteur * 5}`, // Sommet inférieur
        `${-base * 10},${hauteur * 10}` // Coin gauche

  ].join(' ')

  // Génération du code SVG
  const codeSvg = `
                        <polygon points="${points}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
                `.trim()

  // Génération du code TikZ
  const tikzPoints = [
        `(0,${hauteur / 2})`, // Sommet supérieur
        `(${base / 2},${-hauteur / 2})`, // Coin droit
        `(0,${-hauteur / 4})`, // Sommet inférieur
        `(${-base / 2},${-hauteur / 2})` // Coin gauche
  ].join(' -- ')
  const codeTikz = `
                        \\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt] ${tikzPoints} -- cycle;
                `.trim()
  const axes = [segment(0, -hauteur * 0.35, 0, hauteur * 0.45)]
  return new Figure2D({ codeSvg, codeTikz, width: base, height: hauteur, axes })
}

/**
 * Génère une figure représentant un trapèze isocèle.
 * @param options Options pour personnaliser le style du trapèze isocèle.
 * @returns Une instance de Figure2D représentant un trapèze isocèle.
 * @author Jean-Claude Lhote
 */
export function trapezeIsocele (
  options?: {
    fillStyle?: string; // Couleur de remplissage du trapèze (par défaut violet)
    strokeStyle?: string; // Couleur de la bordure du trapèze (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure
    baseSuperieure?: number; // Longueur de la base supérieure (par défaut 20)
    baseInferieure?: number; // Longueur de la base inférieure (par défaut 40)
    hauteur?: number; // Hauteur du trapèze (par défaut 30)
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'pink'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const baseSuperieure = options?.baseSuperieure || 2
  const baseInferieure = options?.baseInferieure || 4
  const hauteur = options?.hauteur || 2.5

  // Calcul des points du trapèze
  const points = [
        `${-baseInferieure * 10},${hauteur * 10}`, // Coin inférieur gauche
        `${baseInferieure * 10},${hauteur * 10}`, // Coin inférieur droit
        `${baseSuperieure * 10},${-hauteur * 10}`, // Coin supérieur droit
        `${-baseSuperieure * 10},${-hauteur * 10}` // Coin supérieur gauche
  ].join(' ')

  // Génération du code SVG
  const codeSvg = `
        <polygon points="${points}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
    `.trim()

  // Génération du code TikZ
  const tikzPoints = [
        `(${-baseInferieure / 2},${-hauteur / 2})`, // Coin inférieur gauche
        `(${baseInferieure / 2},${-hauteur / 2})`, // Coin inférieur droit
        `(${baseSuperieure / 2},${hauteur / 2})`, // Coin supérieur droit
        `(${-baseSuperieure / 2},${hauteur / 2})` // Coin supérieur gauche
  ].join(' -- ')
  const codeTikz = `
        \\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt] ${tikzPoints} -- cycle;
    `.trim()
  const axes = [segment(0, -hauteur * 0.6, 0, hauteur * 0.6)]
  return new Figure2D({ codeSvg, codeTikz, width: baseInferieure, height: hauteur, axes })
}

/**
 * Génère une figure représentant un hexagone non régulier avec 2 axes de symétrie perpendiculaires.
 * @param options Options pour personnaliser le style de l'hexagone.
 * @returns Une instance de Figure2D représentant un hexagone non régulier.
 * @author Jean-Claude
 */
export function hexagoneNonRegulier (
  options?: {
    fillStyle?: string; // Couleur de remplissage de l'hexagone (par défaut orange)
    strokeStyle?: string; // Couleur de la bordure de l'hexagone (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure
    rayonHorizontal?: number; // Rayon horizontal (par défaut 30)
    rayonVertical?: number; // Rayon vertical (par défaut 20)
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'orange'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const rayonHorizontal = options?.rayonHorizontal || 1.5
  const rayonVertical = options?.rayonVertical || 1

  // Calcul des points de l'hexagone
  const points = [
        `${-rayonHorizontal * 10},${-rayonVertical * 20}`, // Sommet supérieur gauche
        `${rayonHorizontal * 10},${-rayonVertical * 20}`, // Sommet supérieur droit
        `${rayonHorizontal * 20},0`, // Coin droit
        `${rayonHorizontal * 10},${rayonVertical * 20}`, // Sommet inférieur droit
        `${-rayonHorizontal * 10},${rayonVertical * 20}`, // Sommet inférieur gauche
        `${-rayonHorizontal * 20},0` // Coin gauche
  ].join(' ')

  // Génération du code SVG
  const codeSvg = `
                <polygon points="${points}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
        `.trim()

  // Génération du code TikZ
  const tikzPoints = [
        `(${-rayonHorizontal / 2},${rayonVertical})`, // Sommet supérieur gauche
        `(${rayonHorizontal / 2},${rayonVertical})`, // Sommet supérieur droit
        `(${rayonHorizontal},0)`, // Coin droit
        `(${rayonHorizontal / 2},${-rayonVertical})`, // Sommet inférieur droit
        `(${-rayonHorizontal / 2},${-rayonVertical})`, // Sommet inférieur gauche
        `(${-rayonHorizontal},0)` // Coin gauche
  ].join(' -- ')
  const codeTikz = `
                \\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt] ${tikzPoints} -- cycle;
        `.trim()
  const axes = [
    segment(0, -rayonVertical * 1.2, 0, rayonVertical * 1.2),
    segment(-rayonHorizontal * 1.2, 0, rayonHorizontal * 1.2, 0)
  ]
  return new Figure2D({ codeSvg, codeTikz, width: rayonHorizontal * 2, height: rayonVertical * 2, axes })
}
export function triangleQuelconque1 (
  options?: {
    fillStyle?: string; // Couleur de remplissage du triangle (par défaut bleu)
    strokeStyle?: string; // Couleur de la bordure du triangle (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure
    base?: number; // Longueur de la base du triangle (par défaut 30)
    hauteur?: number; // Hauteur du triangle (par défaut 40)
  }
): Figure2D {
  // Options par défaut
  const fillStyle = options?.fillStyle || 'blue'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const base = options?.base || 3
  const hauteur = options?.hauteur || 3.5
  // Calcul des points du triangle
  const points = [
        `${-base * 10 - 10},${-hauteur * 10}`, // Sommet supérieur
        `${base * 10},${hauteur * 10}`, // Coin inférieur droit
        `${-base * 10},${hauteur * 10}` // Coin inférieur gauche
  ].join(' ')

  // Génération du code SVG
  const codeSvg = `
            <polygon points="${points}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
        `.trim()
  // Génération du code TikZ
  const tikzPoints = [
        `(${-base / 2 - 0.5},${hauteur / 2})`, // Sommet supérieur
        `(${base / 2},${-hauteur / 2})`, // Coin inférieur droit
        `(${-base / 2},${-hauteur / 2})` // Coin inférieur gauche
  ].join(' -- ')
  const codeTikz = `
            \\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt] ${tikzPoints} -- cycle;
        `.trim()
  return new Figure2D({ codeSvg, codeTikz, width: (base + 10) / 20, height: hauteur / 20 })
}
