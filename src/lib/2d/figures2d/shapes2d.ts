import { ObjetMathalea2D } from '../../../modules/2dGeneralites'
import { Shape2D } from '../Figures2D'

/**
 * Génère une figure représentant un carré de taille 1x1.
 * @param options Options pour personnaliser le style du carré.
 * @returns Une instance de Figure2D représentant un carré.
 */

export function shapeCarre (
  options?: {
    fillStyle?: string; // Couleur de remplissage du carré (par défaut gris)
    strokeStyle?: string; // Couleur de la bordure du carré (par défaut noir)
    lineWidth?: number; // Épaisseur de la bordure
    opacite?: number; // Opacité de la figure (par défaut 1)
  }
): Shape2D {
  const fillStyle = options?.fillStyle || 'gray'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const opacite = options?.opacite || 1

  const points = [
    '-10,-10',
    '10,-10',
    '10,10',
    '-10,10'
  ].join(' ')

  const codeSvg = `
    <polygon points="${points}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
  `.trim()

  const codeTikz = `
    \\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt] (-0.5,-0.5) rectangle (0.5,0.5);
  `.trim()

  return new Shape2D({
    codeSvg,
    codeTikz,
    width: 1,
    height: 1,
    opacite,
    name: 'carré'
  })
}

/**
 * Génère une figure représentant une étoile à 4 branches centrée en (0,0),
 * dont les diagonales font 1.
 * @param options Options pour personnaliser le style de l'étoile.
 * @returns Une instance de Shape2D représentant une étoile à 4 branches.
 */
export function shapeEtoile4Branches (
  options?: {
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
    opacite?: number;
  }
): Shape2D {
  const fillStyle = options?.fillStyle || 'gray'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const opacite = options?.opacite || 1

  // Points pour une étoile à 4 branches, diagonales de longueur 1, centrée en (0,0)
  // Branches sur les axes et les diagonales
  const r = 0.5 // demi-diagonale
  const r2 = r / 3 / Math.SQRT2 // demi-côté sur les axes diagonaux
  // Appliquer une rotation de 45 degrés (pi/4) à chaque point
  const angle = Math.PI / 4
  function rotate45 (x: number, y: number): [number, number] {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    return [
      x * cos - y * sin,
      x * sin + y * cos
    ]
  }
  const points = [
    `0,${-r}`,
    `${r2},${-r2}`,
    `${r},0`,
    `${r2},${r2}`,
    `0,${r}`,
    `${-r2},${r2}`,
    `${-r},0`,
    `${-r2},${-r2}`
  ]

  const codeSvg = `
    <polygon points="${points.map(p => {
    // Convertir en coordonnées SVG (x*20, y*20)
    const [x, y] = p.split(',').map(Number)
    return `${rotate45(x, y).map(el => (el * 20).toFixed(3)).join(',')}`
  }).join(' ')}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
  `.trim()

  // Appliquer la rotation de 45° aux points TikZ
  const tikzPoints = [
    [0, -r],
    [r2, -r2],
    [r, 0],
    [r2, r2],
    [0, r],
    [-r2, r2],
    [-r, 0],
    [-r2, -r2]
  ].map(([x, y]) => {
    const [xr, yr] = rotate45(x, y)
    // Les coordonnées TikZ sont dans [-0.5, 0.5]
    return `(${xr.toFixed(3)},${yr.toFixed(3)})`
  }).join(' -- ')

  const codeTikz = `
    \\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt]
      ${tikzPoints} -- cycle;
  `.trim()

  return new Shape2D({
    codeSvg,
    codeTikz,
    width: 1,
    height: 1,
    opacite,
    name: 'étoile'
  })
}

/**
 * Génère une figure représentant un carré aux bords arrondis de côté 0.8 centré en (0,0).
 * @param options Options pour personnaliser le style du carré arrondi.
 * @returns Une instance de Shape2D représentant un carré aux coins arrondis.
 */
export function shapeCarreArrondi (
  options?: {
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
    opacite?: number;
    radius?: number; // Rayon des coins arrondis (par défaut 0.15)
  }
): Shape2D {
  const fillStyle = options?.fillStyle || 'gray'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const opacite = options?.opacite || 1
  const radius = options?.radius ?? 0.15

  // Côté du carré
  const size = 0.8
  // Pour SVG, on multiplie par 20 pour correspondre à l'échelle des autres formes
  const svgSize = size * 20
  const svgRadius = radius * 20
  const svgX = -svgSize / 2
  const svgY = -svgSize / 2

  const codeSvg = `
    <rect x="${svgX}" y="${svgY}" width="${svgSize}" height="${svgSize}" rx="${svgRadius}" ry="${svgRadius}"
      fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
  `.trim()

  // Pour TikZ, le carré va de (-0.4,-0.4) à (0.4,0.4)
  // TikZ: rounded corners=<radius>
  const codeTikz = `
    \\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt, rounded corners=${radius}cm]
      (-0.4,-0.4) rectangle (0.4,0.4);
  `.trim()

  return new Shape2D({
    codeSvg,
    codeTikz,
    width: size,
    height: size,
    opacite,
    name: 'pastille'
  })
}
/**
 * Génère une figure représentant un petit chat stylisé de taille 1x1 centré en (0,0).
 * @param options Options pour personnaliser le style du chat.
 * @returns Une instance de Shape2D représentant un chat.
 */
export function shapeChat (
  options?: {
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
    opacite?: number;
  }
): Shape2D {
  const opacite = options?.opacite || 1

  // SVG: centré en (0,0), échelle *20
  const codeSvg = `
   <use href="#chat"></use>`

  // TikZ : centré en (0,0), taille 1x1
  const codeTikz = `
   \\pic at (0,0) {chat};
  `.trim()

  return new Shape2D({
    codeSvg,
    codeTikz,
    width: 1,
    height: 1,
    opacite,
    name: 'chat'
  })
}
/**
 * Génère une figure représentant un soleil stylisé centré en (0,0), taille 1x1.
 * @param options Options pour personnaliser le style du soleil.
 * @returns Une instance de Shape2D représentant un soleil.
 */
export function shapeSoleil (
  options?: {
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
    opacite?: number;
    rayons?: number; // Nombre de rayons (par défaut 8)
  }
): Shape2D {
  const opacite = options?.opacite || 1

  const codeSvg = `
   <use href="#soleil"></use>`

  // TikZ : centré en (0,0), taille 1x1
  const codeTikz = `
   \\pic at (0,0) {soleil};
  `.trim()

  return new Shape2D({
    codeSvg,
    codeTikz,
    width: 1,
    height: 1,
    opacite,
    name: 'soleil'
  })
}
/**
 * Génère une figure représentant un losange de taille 1x1 centré en (0,0).
 * @param options Options pour personnaliser le style du losange.
 * @returns Une instance de Shape2D représentant un losange.
 */
export function shapeLosange (
  options?: {
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
    opacite?: number;
  }
): Shape2D {
  const fillStyle = options?.fillStyle || 'white'
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const opacite = options?.opacite || 1

  // Losange centré en (0,0), diagonales 1 (donc sommets à (0,±0.5) et (±0.5,0))
  // Pour SVG, on multiplie par 20
  const points = [
    [0, -0.5],
    [0.5, 0],
    [0, 0.5],
    [-0.5, 0]
  ].map(([x, y]) => `${(x * 20).toFixed(3)},${(y * 20).toFixed(3)}`).join(' ')

  const codeSvg = `
    <polygon points="${points}" fill="${fillStyle}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />
  `.trim()

  const codeTikz = `
    \\draw[fill=${fillStyle}, draw=${strokeStyle}, line width=${lineWidth}pt]
      (0,-0.5) -- (0.5,0) -- (0,0.5) -- (-0.5,0) -- cycle;
  `.trim()

  return new Shape2D({
    codeSvg,
    codeTikz,
    width: 1,
    height: 1,
    opacite,
    name: 'losange'
  })
}
/**
 * Génère une figure représentant un cube en projection axonométrique centré en (0,0), taille 1x1.
 * @param options Options pour personnaliser le style du cube.
 * @returns Une instance de Shape2D représentant un cube.
 */
export function shapeCubeIso (
  options?: {
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
    opacite?: number;
  }
): Shape2D {
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const opacite = options?.opacite || 1

  // Axonometric projection (isometric): 120° between axes
  // Cube of size 1, centered at (0,0)
  // Vertices in 3D: (±0.5, ±0.5, ±0.5)
  // Isometric projection: x' = (x - y) * cos(30°), y' = (x + y) * sin(30°) - z
  const cos30 = Math.cos(Math.PI / 6)
  const sin30 = Math.sin(Math.PI / 6)
  function project ([x, y, z]: [number, number, number]): [number, number] {
    return [
      (x - y) * cos30,
      (x + y) * sin30 - z
    ]
  }
  // 8 sommets du cube
  const vertices3D: [number, number, number][] = [
    [-0.5, -0.5, -0.5],
    [0.5, -0.5, -0.5],
    [0.5, 0.5, -0.5],
    [-0.5, 0.5, -0.5],
    [-0.5, -0.5, 0.5],
    [0.5, -0.5, 0.5],
    [0.5, 0.5, 0.5],
    [-0.5, 0.5, 0.5]
  ]
  // Projeter et mettre à l'échelle SVG (x20)
  const vertices2D = vertices3D.map(v => {
    const [x, y] = project(v)
    return [x * 20, y * 20]
  })

  // Faces (avant, droite, dessus)
  const faces = [
    [0, 7, 3, 2], // arrière-gauche-bas, avant-droit-bas, avant-droit-haut, arrière-gauche-haut (face du bas)
    [1, 5, 6, 2], // droite
    [5, 4, 7, 6]  // dessus
  ]
  // Générer les polygones SVG pour chaque face (avec opacité)
  const faceColors = [
    'lightgray',
    'gray',
    'white'
  ]
  const codeSvg = faces.map((face, i) =>
    `<polygon points="${face.map(idx => vertices2D[idx].map(n => n.toFixed(3)).join(',')).join(' ')}" fill="${faceColors[i]}" fill-opacity="${opacite}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />`
  ).join('\n').trim()

  // TikZ version
  // On utilise les mêmes coordonnées projetées, ramenées à [-0.5,0.5]
  const verticesTikz = vertices3D.map(v => {
    const [x, y] = project(v)
    return [x, -y]
  })
  function tikzPoint (idx: number) {
    const [x, y] = verticesTikz[idx]
    return `(${x.toFixed(3)},${y.toFixed(3)})`
  }
  const tikzPolygons = faces.map((face, i) =>
    `\\filldraw[fill=${faceColors[i]}, fill opacity=${opacite}, draw=${strokeStyle}, line width=${lineWidth}pt] ${face.map(tikzPoint).join(' -- ')} -- cycle;`
  ).join('\n')

  const codeTikz = `
    ${tikzPolygons}
  `.trim()

  return new Shape2D({
    codeSvg,
    codeTikz,
    width: 0.866 * 2,
    height: 2,
    opacite,
    name: 'cube'
  })
}
/**
 * Génère une figure représentant un cube en projection axonométrique centré en (0,0), taille 1x1,
 * mais tourné de 10 degrés dans le sens horaire autour de l'axe z.
 * @param options Options pour personnaliser le style du cube.
 * @returns Une instance de Shape2D représentant un cube tourné.
 */
export function shapeCubeIsoRot40 (
  options?: {
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
    opacite?: number;
  }
): Shape2D {
  const strokeStyle = options?.strokeStyle || 'black'
  const lineWidth = options?.lineWidth || 1
  const opacite = options?.opacite || 1

  // Projection isométrique
  const cos40 = Math.cos(Math.PI * 2 / 9)
  const sin40 = Math.sin(Math.PI * 2 / 9)
  function project ([x, y, z]: [number, number, number]): [number, number] {
    return [
      (x - y) * cos40,
      (x + y) * sin40 - z
    ]
  }

  // Sommets du cube
  const vertices3D: [number, number, number][] = [
    [-0.5, -0.5, -0.5],
    [0.5, -0.5, -0.5],
    [0.5, 0.5, -0.5],
    [-0.5, 0.5, -0.5],
    [-0.5, -0.5, 0.5],
    [0.5, -0.5, 0.5],
    [0.5, 0.5, 0.5],
    [-0.5, 0.5, 0.5]
  ]
  // Appliquer la rotation puis la projection
  const vertices2D = vertices3D.map(v => {
    const [x, y] = project(v)
    return [x * 20, y * 20]
  })

  // Faces (avant, droite, dessus)
  const faces = [
    [0, 7, 3, 2], // bas
    [1, 5, 6, 2], // droite
    [5, 4, 7, 6]  // dessus
  ]
  const faceColors = [
    'lightgray',
    'gray',
    'white'
  ]
  const codeSvg = faces.map((face, i) =>
    `<polygon points="${face.map(idx => vertices2D[idx].map(n => n.toFixed(3)).join(',')).join(' ')}" fill="${faceColors[i]}" fill-opacity="${opacite}" stroke="${strokeStyle}" stroke-width="${lineWidth}" />`
  ).join('\n').trim()

  // TikZ version
  const verticesTikz = vertices3D.map(v => {
    const [x, y] = project(v)
    return [x, -y]
  })
  function tikzPoint (idx: number) {
    const [x, y] = verticesTikz[idx]
    return `(${x.toFixed(3)},${y.toFixed(3)})`
  }
  const tikzPolygons = faces.map((face, i) =>
    `\\filldraw[fill=${faceColors[i]}, fill opacity=${opacite}, draw=${strokeStyle}, line width=${lineWidth}pt] ${face.map(tikzPoint).join(' -- ')} -- cycle;`
  ).join('\n')

  const codeTikz = `
    ${tikzPolygons}
  `.trim()

  return new Shape2D({
    codeSvg,
    codeTikz,
    width: 0.866 * 2,
    height: 2,
    opacite,
    name: 'cube-rot10'
  })
}

export const chatDef = new ObjetMathalea2D()
chatDef.bordures = [-0.5, -0.5, 0.5, 0.5]
chatDef.svg = function (coeff: number): string {
  return `
  <defs>
 
<!-- Un chat stylisé -->
 <g id="chat">
      <!-- Tête -->
      <ellipse cx="0" cy="-8" rx="7" ry="7" fill="gray" stroke="black" stroke-width="1" />
      <!-- Oreille gauche -->
      <polygon points="-6,-13 -2,-13 -4,-19" fill="gray" stroke="black" stroke-width="1" />
      <!-- Oreille droite -->
      <polygon points="2,-13 6,-13 4,-19" fill="gray" stroke="black" stroke-width="1" />
      <!-- Yeux -->
      <ellipse cx="-2" cy="-9" rx="1" ry="1.5" fill="white" stroke="black" stroke-width="0.5" />
      <ellipse cx="2" cy="-9" rx="1" ry="1.5" fill="white" stroke="black" stroke-width="0.5" />
      <ellipse cx="-2" cy="-9" rx="0.4" ry="0.7" fill="black" />
      <ellipse cx="2" cy="-9" rx="0.4" ry="0.7" fill="black" />
      <!-- Nez -->
      <ellipse cx="0" cy="-7" rx="0.7" ry="0.4" fill="pink" stroke="black" stroke-width="0.3" />
      <!-- Moustaches -->
      <path d="M-1,-7 Q-4,-7.5 -7,-7" stroke="black" stroke-width="0.5" fill="none" />
      <path d="M-1,-6.5 Q-4,-6 -7,-6.5" stroke="black" stroke-width="0.5" fill="none" />
      <path d="M1,-7 Q4,-7.5 7,-7" stroke="black" stroke-width="0.5" fill="none" />
      <path d="M1,-6.5 Q4,-6 7,-6.5" stroke="black" stroke-width="0.5" fill="none" />
    </g>
  </defs>`
}
chatDef.tikz = function (): string {
  return `
  \\tikzset{
   chat/.pic = {
    % Tête
    \\draw[fill=gray, draw=black, line width=1pt] (0,0.35) ellipse [x radius=0.35, y radius=0.35];
    % Oreilles
    \\draw[fill=gray, draw=black, line width=1pt] (-0.22,0.65) -- (-0.08,0.65) -- (-0.15,0.95) -- cycle;
    \\draw[fill=gray, draw=black, line width=1pt] (0.08,0.65) -- (0.22,0.65) -- (0.15,0.95) -- cycle;
    % Yeux
    \\draw[fill=white, draw=black, line width=0.2pt] (-0.08,0.4) ellipse [x radius=0.05, y radius=0.08];
    \\draw[fill=white, draw=black, line width=0.2pt] (0.08,0.4) ellipse [x radius=0.05, y radius=0.08];
    \\fill[black] (-0.08,0.4) ellipse [x radius=0.02, y radius=0.04];
    \\fill[black] (0.08,0.4) ellipse [x radius=0.02, y radius=0.04];
    % Nez
    \\draw[fill=pink, draw=black, line width=0.1pt] (0,0.33) ellipse [x radius=0.035, y radius=0.02];
    % Moustaches
    \\draw[draw=black, line width=0.2pt] (-0.03,0.33) .. controls (-0.15,0.36) .. (-0.3,0.33);
    \\draw[draw=black, line width=0.2pt] (-0.03,0.31) .. controls (-0.15,0.29) .. (-0.3,0.31);
    \\draw[draw=black, line width=0.2pt] (0.03,0.33) .. controls (0.15,0.36) .. (0.3,0.33);
    \\draw[draw=black, line width=0.2pt] (0.03,0.31) .. controls (0.15,0.29) .. (0.3,0.31);
    }
} 
  `.trim()
}

export const soleilDef = new ObjetMathalea2D()
soleilDef.bordures = [-0.5, -0.5, 0.5, 0.5]
soleilDef.svg = function (coeff: number): string {
  return `
  <defs>
  <g transform="scale(${coeff})">
    <g id="soleil">
      <!-- Cercle central -->
      <circle cx="0" cy="0" r="6" fill="yellow" stroke="orange" stroke-width="1" />
      <!-- Rayons -->
      <line x1="0" y1="-6" x2="0" y2="-10" stroke="orange" stroke-width="1" />
      <line x1="0" y1="6" x2="0" y2="10" stroke="orange" stroke-width="1" />  
      <line x1="-6" y1="0" x2="-10" y2="0" stroke="orange" stroke-width="1" />
      <line x1="6" y1="0" x2="10" y2="0" stroke="orange" stroke-width="1" />
      <line x1="-4.24" y1="-4.24" x2="-7.07" y2="-7.07" stroke="orange" stroke-width="1" />
      <line x1="4.24" y1="-4.24" x2="7.07" y2="-7.07" stroke="orange" stroke-width="1" />
      <line x1="-4.24" y1="4.24" x2="-7.07" y2="7.07" stroke="orange" stroke-width="1" />
      <line x1="4.24" y1="4.24" x2="7.07" y2="7.07" stroke="orange" stroke-width="1" />
    </g>
  </g>
  </defs>`
}
soleilDef.tikz = function (): string {
  return `
  \\tikzset{
   soleil/.pic = {
    % Cercle central
    \\draw[fill=yellow, draw=orange, line width=1pt] (0,0) circle (0.3);
    % Rayons
    \\draw[draw=orange, line width=1pt] (0,0.3) -- (0,0.5);
    \\draw[draw=orange, line width=1pt] (0,-0.3) -- (0,-0.5);
    \\draw[draw=orange, line width=1pt] (-0.3,0) -- (-0.5,0);
    \\draw[draw=orange, line width=1pt] (0.3,0) -- (0.5,0);
    \\draw[draw=orange, line width=1pt] (-0.212,-0.212) -- (-0.353,-0.353);
    \\draw[draw=orange, line width=1pt] (0.212,-0.212) -- (0.353,-0.353);
    \\draw[draw=orange, line width=1pt] (-0.212,0.212) -- (-0.353,0.353);
    \\draw[draw=orange, line width=1pt] (0.212,0.212) -- (0.353,0.353);
   }
  }`.trim()
}
