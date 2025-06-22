import { ObjetMathalea2D } from '../../../modules/2dGeneralites'
import { Shape2D } from '../Figures2D'

/**
 * Génère une figure représentant un carré de taille 1x1.
 * @param options Options pour personnaliser le style du carré.
 * @returns Une instance de Figure2D représentant un carré.
 */
export const shapeCarre = new Shape2D({
  codeSvg: '<use href="#carre"></use>',
  codeTikz: '\\pic at (0,0) {carre};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'carré'
})

/**
 * Génère une figure représentant une étoile à 4 branches centrée en (0,0),
 * dont les diagonales font 1.
 * @returns Une instance de Shape2D représentant une étoile à 4 branches.
 */
export const shapeEtoile4Branches = new Shape2D({
  codeSvg: '<use href="#étoile"></use>',
  codeTikz: '\\pic at (0,0) {etoile};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'étoile'
})

/**
 * Génère une figure représentant un carré aux bords arrondis de côté 0.8 centré en (0,0).
 * @returns Une instance de Shape2D représentant un carré aux coins arrondis.
 */
export const shapeCarreArrondi = new Shape2D({
  codeSvg: '<use href="#carre-arrondi"></use>',
  codeTikz: '\\pic at (0,0) {carre-arrondi};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'pastille'
})

/**
 * Génère une figure représentant un petit chat stylisé de taille 1x1 centré en (0,0).
 * @returns Une instance de Shape2D représentant un chat.
 */
export const shapeChat = new Shape2D({
  codeSvg: '<use href="#chat"></use>',
  codeTikz: '\\pic at (0,0) {chat};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'chat'
})

/**
 * Génère une figure représentant un soleil stylisé centré en (0,0), taille 1x1.
 * @returns Une instance de Shape2D représentant un soleil.
 */
export const shapeSoleil = new Shape2D({
  codeSvg: '<use href="#soleil"></use>',
  codeTikz: '\\pic at (0,0) {soleil};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'soleil'
})

/**
 * Génère une figure représentant un losange de taille 1x1 centré en (0,0).
 * @returns Une instance de Shape2D représentant un losange.
 */
export const shapeLosange = new Shape2D({
  codeSvg: '<use href="#losange"></use>',
  codeTikz: '\\pic at (0,0) {losange};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'losange'
})

export const shapeHexagone = new Shape2D({
  codeSvg: '<use href="#hexagone"></use>',
  codeTikz: '\\pic at (0,0) {hexagone};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'hexagone'
})

export const chatDef = new ObjetMathalea2D()
chatDef.bordures = [-0.5, -0.5, 0.5, 0.5]
chatDef.svg = function (coeff: number): string {
  return `
<!-- Un chat stylisé -->
  <defs>
 <g id="chat">
      <!-- Tête -->
      <ellipse cx="0" cy="-8" rx="7" ry="7" fill="gray" stroke="black" stroke-width="0.5" />
      <!-- Oreille gauche -->
      <polygon points="-6,-13 -2,-13 -4,-19" fill="gray" stroke="black" stroke-width="0.5" />
      <!-- Oreille droite -->
      <polygon points="2,-13 6,-13 4,-19" fill="gray" stroke="black" stroke-width="0.5" />
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
    \\draw[fill=gray, draw=darkgray, line width=0.3pt] (0,0.35) ellipse [x radius=0.35, y radius=0.35];
    % Oreilles
    \\draw[fill=gray, draw=darkgray, line width=0.3pt] (-0.22,0.65) -- (-0.08,0.65) -- (-0.15,0.95) -- cycle;
    \\draw[fill=gray, draw=darkgray, line width=0.3pt] (0.08,0.65) -- (0.22,0.65) -- (0.15,0.95) -- cycle;
    % Yeux
    \\draw[fill=white, draw=darkgray, line width=0.2pt] (-0.08,0.4) ellipse [x radius=0.05, y radius=0.08];
    \\draw[fill=white, draw=darkgray, line width=0.2pt] (0.08,0.4) ellipse [x radius=0.05, y radius=0.08];
    \\fill[black] (-0.08,0.4) ellipse [x radius=0.02, y radius=0.04];
    \\fill[black] (0.08,0.4) ellipse [x radius=0.02, y radius=0.04];
    % Nez
    \\draw[fill=pink, draw=darkgray, line width=0.1pt] (0,0.33) ellipse [x radius=0.035, y radius=0.02];
    % Moustaches
    \\draw[draw=darkgray, line width=0.2pt] (-0.03,0.33) .. controls (-0.15,0.36) .. (-0.3,0.33);
    \\draw[draw=darkgray, line width=0.2pt] (-0.03,0.31) .. controls (-0.15,0.29) .. (-0.3,0.31);
    \\draw[draw=darkgray, line width=0.2pt] (0.03,0.33) .. controls (0.15,0.36) .. (0.3,0.33);
    \\draw[draw=darkgray, line width=0.2pt] (0.03,0.31) .. controls (0.15,0.29) .. (0.3,0.31);
    }
} 
  `.trim()
}

export const soleilDef = new ObjetMathalea2D()
soleilDef.bordures = [-0.5, -0.5, 0.5, 0.5]
soleilDef.svg = function (coeff: number): string {
  return `
  <!-- Cercle central -->
  <defs>
    <g id="soleil">
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
  </defs>`
}
soleilDef.tikz = function (): string {
  return `
  \\tikzset{
   soleil/.pic = {
    % Cercle central
    \\draw[fill=yellow, draw=orange, line width=0.3pt] (0,0) circle (0.3);
    % Rayons
    \\draw[draw=orange, line width=0.3pt] (0,0.3) -- (0,0.5);
    \\draw[draw=orange, line width=0.3pt] (0,-0.3) -- (0,-0.5);
    \\draw[draw=orange, line width=0.3pt] (-0.3,0) -- (-0.5,0);
    \\draw[draw=orange, line width=0.3pt] (0.3,0) -- (0.5,0);
    \\draw[draw=orange, line width=0.3pt] (-0.212,-0.212) -- (-0.353,-0.353);
    \\draw[draw=orange, line width=0.3pt] (0.212,-0.212) -- (0.353,-0.353);
    \\draw[draw=orange, line width=0.3pt] (-0.212,0.212) -- (-0.353,0.353);
    \\draw[draw=orange, line width=0.3pt] (0.212,0.212) -- (0.353,0.353);
   }
  }`.trim()
}
export const etoileDef = new ObjetMathalea2D()
etoileDef.bordures = [-0.5, -0.5, 0.5, 0.5]
etoileDef.svg = function (coeff: number): string {
  return `
   <!-- Étoile à 4 branches -->
  <defs>
      <polygon id="étoile" points="0,-10 2,-2 10,0 2,2 0,10 -2,2 -10,0 -2,-2" transform="rotate(45)"
        fill="yellow" stroke="orange" stroke-width="1" />
  </defs>`
}
etoileDef.tikz = function (): string {
  return `
  \\tikzset{
   etoile/.pic = {
    % Étoile à 4 branches
    \\draw[fill=yellow, draw=orange, line width=0.3pt]
      (0,0.09) -- (0.3,0.3) -- (0.09,0) -- (0.3,-0.3)
      -- (0,-0.09) -- (-0.3,-0.3) -- (-0.09,0) -- (-0.3,0.3) -- cycle;
   }
  }`.trim()
}

export const carreRondDef = new ObjetMathalea2D()
carreRondDef.bordures = [-0.5, -0.5, 0.5, 0.5]
carreRondDef.svg = function (coeff: number): string {
  return `
  <!-- Carré arrondi -->
  <defs>
    <g id="carre-arrondi">
      <rect x="-8" y="-8" width="16" height="16" rx="3" ry="3"
        fill="gray" stroke="black" stroke-width="0.5" />
    </g>
  </defs>`
}
carreRondDef.tikz = function (): string {
  return `
  \\tikzset{
   carre-arrondi/.pic = {
    % Carré arrondi
    \\draw[fill=gray, draw=darkgray, line width=0.3pt, rounded corners=0.07cm]
      (-0.4,-0.4) rectangle (0.4,0.4);
   }
  }`.trim()
}
export const losangeDef = new ObjetMathalea2D()
losangeDef.bordures = [-0.5, -0.5, 0.5, 0.5]
losangeDef.svg = function (coeff: number): string {
  return `
  <!-- Losange -->
  <defs>
      <polygon id="losange" points="0,-6 8,0 0,6 -8,0"
        fill="pink" stroke="black" stroke-width="0.3" />
  </defs>`
}
losangeDef.tikz = function (): string {
  return `
  \\tikzset{
   losange/.pic = {
    % Losange
    \\draw[fill=pink, draw=darkgray, line width=0.3pt]
      (0,-0.3) -- (0.5,0) -- (0,0.3) -- (-0.5,0) -- cycle;
   }
  }`.trim()
}

export const carreDef = new ObjetMathalea2D()
carreDef.bordures = [-0.5, -0.5, 0.5, 0.5]
carreDef.svg = function (coeff: number): string {
  return `
  <!-- Carré -->
  <defs>
      <rect id="carre" x="-10" y="-10" width="20" height="20"
        fill="gray" stroke="black" stroke-width="0.5" />
  </defs>`
}
carreDef.tikz = function (): string {
  return `
  \\tikzset{
   carre/.pic = {
    % Carré
    \\draw[fill=gray, draw=darkgray, line width=0.3pt] (-0.5,-0.5) rectangle (0.5,0.5);
   }
  }`.trim()
}

export const hexagoneDef = new ObjetMathalea2D()
hexagoneDef.bordures = [-0.5, -0.5, 0.5, 0.5]
hexagoneDef.svg = function (coeff: number): string {
  return `
  <!-- Hexagone -->
  <defs>
    <g id="hexagone">
      <polygon points="10,0 5,8.66 -5,8.66 -10,0 -5,-8.66 5,-8.66"
        fill="lightblue" stroke="black" stroke-width="0.5" />
    </g>
  </defs>`
}
hexagoneDef.tikz = function (): string {
  return `
  \\tikzset{
   hexagone/.pic = {
    \\draw[fill=cyan!30, draw=darkgray, line width=0.3pt]
      (0.5,0) -- (0.25,0.433) -- (-0.25,0.433) -- (-0.5,0) -- (-0.25,-0.433) -- (0.25,-0.433) -- cycle;
   }
  }`.trim()
}

export const shapeRond = new Shape2D({
  codeSvg: '<use href="#rond"></use>',
  codeTikz: '\\pic at (0,0) {rond};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'rond'
})

export const rondDef = new ObjetMathalea2D()
rondDef.bordures = [-0.5, -0.5, 0.5, 0.5]
rondDef.svg = function (coeff: number): string {
  return `
  <!-- Rond -->
  <defs>
    <g id="rond">
      <circle cx="0" cy="0" r="10" fill="lightblue" stroke="blue" stroke-width="0.5" />
    </g>
  </defs>`
}
rondDef.tikz = function (): string {
  return `
  \\tikzset{
   rond/.pic = {
    \\draw[fill=cyan!30, draw=blue, line width=0.3pt] (0,0) circle (0.5);
   }
  }`.trim()
}
export const shapeBalle = new Shape2D({
  codeSvg: '<use href="#balle"></use>',
  codeTikz: '\\pic at (0,0) {balle};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'balle'
})

export const balleDef = new ObjetMathalea2D()
balleDef.bordures = [-0.5, -0.5, 0.5, 0.5]
balleDef.svg = function (coeff: number): string {
  return `
  <!-- Balle de tennis -->
 <defs>
    <g id="balle" transform="scale(0.2) translate(-60, -60)">
      <!-- Dégradé -->
      <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
        <stop offset="0%" stop-color="#f7f95a" />
        <stop offset="100%" stop-color="#b6d100" />
      </radialGradient>

      <!-- Ombre -->
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.3" />
      </filter>

      <!-- Corps de la balle -->
      <circle cx="60" cy="60" r="50" fill="url(#grad)" filter="url(#shadow)" />

      <!-- Couture principale -->
      <path d="M20,35 C40,30 80,35 100,25" stroke="white" stroke-width="5" fill="none" />

      <!-- Couture secondaire (plus haute et réduite) -->
      <path d="M35,110 C60,85 85,80 115,70" stroke="white" stroke-width="5" fill="none" />
    </g>
  </defs>`
}
balleDef.tikz = function (): string {
  return `
  \\tikzset{
   balle/.pic = {
    % Balle de tennis jaune citron
    \\shade[ball color=lime, opacity=0.5] 
      (0,0) circle (0.5);
    % Couture principale
    \\draw[white, line width=0.3pt] 
      plot [smooth, tension=1] coordinates {(-0.45,-0.15) (-0.2,-0.22) (0.1,-0.18) (0.45,-0.25)};
    % Couture secondaire
    \\draw[white, line width=0.3pt] 
      plot [smooth, tension=1] coordinates {(-0.45,0.4) (-0.15,0.25) (0.2,0.28) (0.45,0.15)};
   }
  }`.trim()
}
