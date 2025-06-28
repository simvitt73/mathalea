import { ObjetMathalea2D } from '../../../modules/2dGeneralites'
import { Shape2D } from '../Figures2D'
/*
// Retourne le code SVG Twemoji pour un emoji donné (ex: "🦄" ou "1f984")
export async function getTwemojiSvg (emoji: string): Promise<string> {
  // Conversion nom → code si besoin
  let code = listeEmojis[emoji] ?? emoji
  // Si c'est un caractère emoji, on le convertit en code
  if (!/^[0-9a-f]+$/i.test(code)) {
    code = [...code].map(c => c.codePointAt(0)!.toString(16)).join('-')
  }
  code = code.toLowerCase()
  // Chemin local vers le SVG
  const url = `/emojis/svg/${code}.svg`
  const resp = await fetch(url)
  if (!resp.ok) throw new Error(`SVG non trouvé pour ${emoji} (${url})`)
  return resp.text()
}
export function getTwemojiPngUrl (emoji: string): string {
  let code = listeEmojis[emoji] ?? emoji
  if (!/^[0-9a-f]+$/i.test(code)) {
    code = [...code].map(c => c.codePointAt(0)!.toString(16)).join('-')
  }
  code = code.toLowerCase()
  return `/emojis/72x72/${code}.png`
}
/**
 * Crée une Shape2D à partir d'un id d'emoji Twemoji.
 * @param emojiId L'id de l'emoji (ex: "1f984" pour la licorne)
 * @param options Options supplémentaires pour la shape (width, height, opacite, name)
 * @returns Une instance de Shape2D utilisant l'emoji Twemoji en SVG.
 */
/*
export async function shapeTwemoji (
  emojiId: string,
  options?: Partial<Pick<Shape2D, 'width' | 'height' | 'opacite' | 'name'>>
):Promise<Shape2D> {
  let code = listeEmojis[emojiId] ?? emojiId
  if (!/^[0-9a-f]+$/i.test(code)) {
    code = [...code].map(c => c.codePointAt(0)!.toString(16)).join('-')
  }
  code = code.toLowerCase()
  const svg = await getTwemojiSvg(code)
  return new Shape2D({
    codeSvg: svg,
    codeTikz: `\\twemoji{${code}}`,
    width: options?.width ?? 1,
    height: options?.height ?? 1,
    opacite: options?.opacite ?? 1,
    name: options?.name ?? `emoji-${emojiId}`
  })
}
*/

/*
La classe Shape2D est définie ddans le fichier Figures2D.ts car elle est une version simplifiée de la classe Figure2D.
Elle représente une forme géométrique 2D avec des propriétés de base comme le code SVG, le code TikZ, la largeur, la hauteur, l'opacité et le nom.
Elle est utilisée pour créer des formes géométriques simples comme des carrés, des ronds, des étoiles, etc.
Si vous ajoutez une nouvelle forme géométrique, respectez le format 20x20 pixels et pensez à l'ajouter à la liste qui se trouve en fin de fichier.
Il y a 2 constantes exportées qui sont l'instance de Shape2D et l'instance de ObjetMathalea2D qui définit la forme utilisée dans le code svg et tikz afin de limiter la taille du code nécessaire.
Voir l'exemple de shapeChat et chatDef.
 */
export const shapeCarre = new Shape2D({
  codeSvg: '<use href="#carre"></use>',
  codeTikz: '\\pic at (0,0) {carre};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'carré'
})
export const shapeCarreBleu = new Shape2D({
  codeSvg: '<use href="#carre-bleu"></use>',
  codeTikz: '\\pic at (0,0) {carre-bleu};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'carré bleu'
})

export const shapeRectangle = new Shape2D({
  codeSvg: '<use href="#rectangle-vert"></use>',
  codeTikz: '\\pic at (0,0) {rectangle-vert};',
  width: 1,
  height: 0.5,
  opacite: 1,
  name: 'rectangle'
})

export const rectangleDef = new ObjetMathalea2D()
rectangleDef.bordures = [-0.5, -0.25, 0.5, 0.25]
rectangleDef.svg = function (coeff: number): string {
  return `
  <!-- Rectangle 1x0.5 -->
  <defs>
    <g id="rectangle-vert">
      <rect x="-10" y="-5" width="20" height="10" fill="green" stroke="black" stroke-width="0.5" />
    </g>
  </defs>`
}
rectangleDef.tikz = function (): string {
  return `
  \\tikzset{
   rectangle-vert/.pic = {
    \\draw[fill=green, draw=black, line width=0.3pt] (-0.5,-0.25) rectangle (0.5,0.25);
   }
  }`.trim()
}

export const shapeRectangleBlanc = new Shape2D({
  codeSvg: '<use href="#rectangle-blanc"></use>',
  codeTikz: '\\pic at (0,0) {rectangle-blanc};',
  width: 1,
  height: 0.5,
  opacite: 1,
  name: 'rectangle blanc'
})

export const rectangleBlancDef = new ObjetMathalea2D()
rectangleBlancDef.bordures = [-0.5, -0.25, 0.5, 0.25]
rectangleBlancDef.svg = function (coeff: number): string {
  return `
  <!-- Rectangle blanc 1x0.5 -->
  <defs>
    <g id="rectangle-blanc">
      <rect x="-10" y="-5" width="20" height="10" fill="white" stroke="black" stroke-width="0.5" />
    </g>
  </defs>`
}
rectangleBlancDef.tikz = function (): string {
  return `
  \\tikzset{
   rectangle-blanc/.pic = {
    \\draw[fill=white, draw=black, line width=0.3pt] (-0.5,-0.25) rectangle (0.5,0.25);
   }
  }`.trim()
}

export const shapeLicorne = new Shape2D({
  codeSvg: '<use href="#licorne"></use>',
  codeTikz: '\\pic at (0,0) {licorne};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'licorne'
})

export const licorneDef = new ObjetMathalea2D()
licorneDef.bordures = [-0.5, -0.5, 0.5, 0.5]
licorneDef.svg = function (coeff: number): string {
  return `
  <!-- Licorne stylisée -->
  <defs>
    <g id="licorne" transform="scale(0.5,0.5) translate(-18,-18)">
      <path fill="#C1CDD5" d="M36 19.854C33.518 9.923 25.006 1.909 16.031 6.832c0 0-4.522-1.496-5.174-1.948-.635-.44-1.635-.904-.912.436.423.782.875 1.672 2.403 3.317C8 12.958 9.279 18.262 7.743 21.75c-1.304 2.962-2.577 4.733-1.31 6.976 1.317 2.33 4.729 3.462 7.018 1.06 1.244-1.307.471-1.937 3.132-4.202 2.723-.543 4.394-1.791 4.394-4.375 0 0 .795-.382 1.826 6.009.456 2.818-.157 5.632-.039 8.783H36V19.854z"/>
      <path fill="#60379A" d="M31.906 6.062c.531 1.312.848 3.71.595 5.318-.15-3.923-3.188-6.581-4.376-7.193-2.202-1.137-4.372-.979-6.799-.772.111.168.403.814.32 1.547-.479-.875-1.604-1.42-2.333-1.271-1.36.277-2.561.677-3.475 1.156-.504.102-1.249.413-2.372 1.101-1.911 1.171-4.175 4.338-6.737 3.511 1.042 2.5 3.631 1.845 3.631 1.845 1.207-1.95 4.067-3.779 6.168-4.452 7.619-1.745 12.614 3.439 15.431 9.398.768 1.625 2.611 7.132 4.041 10.292V10.956c-.749-1.038-1.281-3.018-4.094-4.894z"/>
      <path fill="#C1CDD5" d="M13.789 3.662c.573.788 3.236.794 4.596 3.82 1.359 3.026-1.943 2.63-3.14 1.23-1.334-1.561-1.931-2.863-2.165-3.992-.124-.596-.451-2.649.709-1.058z"/>
      <path fill="#758795" d="M14.209 4.962c.956.573 2.164 1.515 2.517 2.596.351 1.081-.707.891-1.349-.042-.641-.934-.94-1.975-1.285-2.263-.346-.289.117-.291.117-.291z"/>
      <circle fill="#292F33" cx="15.255" cy="14.565" r=".946"/>
      <path fill="#53626C" d="M8.63 26.877c.119.658-.181 1.263-.67 1.351-.49.089-.984-.372-1.104-1.03-.119-.659.182-1.265.671-1.354.49-.088.984.373 1.103 1.033z"/>
      <path fill="#EE7C0E" d="M13.844 8.124l.003-.002-.005-.007-.016-.014c-.008-.007-.011-.019-.019-.025-.009-.007-.021-.011-.031-.018C12.621 7.078.933-.495.219.219-.51.948 10.443 9.742 11.149 10.28l.011.006.541.439c.008.007.01.018.018.024.013.01.028.015.042.024l.047.038-.009-.016c.565.361 1.427.114 1.979-.592.559-.715.577-1.625.066-2.079z"/>
      <path fill="#C43512" d="M4.677 2.25l.009-.025c-.301-.174-.594-.341-.878-.5-.016.038-.022.069-.041.11-.112.243-.256.484-.429.716-.166.224-.349.424-.541.595-.02.018-.036.026-.056.043.238.22.489.446.745.676.234-.21.456-.449.654-.717.214-.287.395-.589.537-.898zm2.275 2.945c.306-.41.521-.822.66-1.212-.292-.181-.584-.36-.876-.538-.076.298-.247.699-.586 1.152-.31.417-.613.681-.864.845.259.223.52.445.779.665.314-.244.619-.552.887-.912zM9.87 7.32c.365-.49.609-.983.734-1.437l-.906-.586c-.023.296-.172.81-.631 1.425-.412.554-.821.847-1.1.978l.814.671c.381-.256.761-.611 1.089-1.051z"/>
    </g>
  </defs>`
}
licorneDef.tikz = function (): string {
  return `
  \\tikzset{
   licorne/.pic = {
    \\node[anchor=center, inner sep=0pt, scale=3] {\\twemoji{1f984}};
   }
  }`.trim()
}
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

export const shapeHexagoneJaune = new Shape2D({
  codeSvg: '<use href="#hexagoneJaune"></use>',
  codeTikz: '\\pic at (0,0) {hexagoneJaune};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'hexagoneJaune'
})

export const chatDef = new ObjetMathalea2D()
chatDef.bordures = [-0.5, -0.5, 0.5, 0.5]
chatDef.svg = function (coeff: number): string {
  return `
<!-- Un chat stylisé -->
  <defs>
 <g id="chat">
      <!-- Tête -->
      <ellipse cx="0" cy="1" rx="7" ry="7" fill="gray" stroke="black" stroke-width="0.5" />
      <!-- Oreille gauche -->
      <polygon points="-6,-4 -2,-4 -4,-10" fill="gray" stroke="black" stroke-width="0.5" />
      <!-- Oreille droite -->
      <polygon points="2,-4 6,-4 4,-10" fill="gray" stroke="black" stroke-width="0.5" />
      <!-- Yeux -->
      <ellipse cx="-2" cy="0" rx="1" ry="1.5" fill="white" stroke="black" stroke-width="0.5" />
      <ellipse cx="2" cy="0" rx="1" ry="1.5" fill="white" stroke="black" stroke-width="0.5" />
      <ellipse cx="-2" cy="0" rx="0.4" ry="0.7" fill="black" />
      <ellipse cx="2" cy="0" rx="0.4" ry="0.7" fill="black" />
      <!-- Nez -->
      <ellipse cx="0" cy="2" rx="0.7" ry="0.4" fill="pink" stroke="black" stroke-width="0.3" />
      <!-- Moustaches -->
      <path d="M-1,2 Q-4,1.5 -7,2" stroke="black" stroke-width="0.5" fill="none" />
      <path d="M-1,2.5 Q-4,3 -7,2.5" stroke="black" stroke-width="0.5" fill="none" />
      <path d="M1,2 Q4,1.5 7,2" stroke="black" stroke-width="0.5" fill="none" />
      <path d="M1,2.5 Q4,3 7,2.5" stroke="black" stroke-width="0.5" fill="none" />
    </g>
  </defs>`
}

chatDef.tikz = function (): string {
  return `
\\tikzset{
 chat/.pic = {
  % Tête
  \\draw[fill=gray, draw=black, line width=0.5pt] (0,0.1) ellipse [x radius=0.35, y radius=0.35];
  % Oreille gauche
  \\draw[fill=gray, draw=black, line width=0.5pt] (-0.3,-0.15) -- (-0.1,-0.15) -- (-0.2,-0.5) -- cycle;
  % Oreille droite
  \\draw[fill=gray, draw=black, line width=0.5pt] (0.1,-0.15) -- (0.3,-0.15) -- (0.2,-0.5) -- cycle;
  % Yeux
  \\draw[fill=white, draw=black, line width=0.5pt] (-0.1,0) ellipse [x radius=0.05, y radius=0.075];
  \\draw[fill=white, draw=black, line width=0.5pt] (0.1,0) ellipse [x radius=0.05, y radius=0.075];
  \\fill[black] (-0.1,0) ellipse [x radius=0.02, y radius=0.035];
  \\fill[black] (0.1,0) ellipse [x radius=0.02, y radius=0.035];
  % Nez
  \\draw[fill=pink, draw=black, line width=0.3pt] (0,0.1) ellipse [x radius=0.035, y radius=0.02];
  % Moustaches
  \\draw[black, line width=0.5pt] (-0.05,0.1) .. controls (-0.2,0.075) .. (-0.35,0.1);
  \\draw[black, line width=0.5pt] (-0.05,0.13) .. controls (-0.2,0.16) .. (-0.35,0.13);
  \\draw[black, line width=0.5pt] (0.05,0.1) .. controls (0.2,0.075) .. (0.35,0.1);
  \\draw[black, line width=0.5pt] (0.05,0.13) .. controls (0.2,0.16) .. (0.35,0.13);
 }
}`.trim()
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

export const carreBleuDef = new ObjetMathalea2D()
carreBleuDef.bordures = [-0.5, -0.5, 0.5, 0.5]
carreBleuDef.svg = function (coeff: number): string {
  return `
  <!-- Carré bleu -->
  <defs>
      <rect id="carre-bleu" x="-10" y="-10" width="20" height="20"
        fill="blue" stroke="black" stroke-width="0.5" />
  </defs>`
}
carreBleuDef.tikz = function (): string {
  return `
  \\tikzset{
   carre-bleu/.pic = {
    % Carré bleu
    \\draw[fill=blue, draw=darkgray, line width=0.3pt] (-0.5,-0.5) rectangle (0.5,0.5);
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

export const hexagoneJauneDef = new ObjetMathalea2D()
hexagoneJauneDef.bordures = [-0.5, -0.5, 0.5, 0.5]
hexagoneJauneDef.svg = function (coeff: number): string {
  return `
  <!-- Hexagone -->
  <defs>
    <g id="hexagoneJaune">
      <polygon points="10,0 5,8.66 -5,8.66 -10,0 -5,-8.66 5,-8.66"
        fill="yellow" stroke="black" stroke-width="0.5" />
    </g>
  </defs>`
}
hexagoneJauneDef.tikz = function (): string {
  return `
  \\tikzset{
   hexagoneJaune/.pic = {
    \\draw[fill=yellow, draw=darkgray, line width=0.3pt]
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

export const shapeTortue = new Shape2D({
  codeSvg: '<use href="#tortue"></use>',
  codeTikz: '\\pic at (0,0) {tortue};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'tortue'
})

export const tortueDef = new ObjetMathalea2D()
tortueDef.bordures = [-0.5, -0.5, 0.5, 0.5]
tortueDef.svg = function (coeff: number): string {
  return `
  <!-- Tortue stylisée -->
  <defs>
    <g id="tortue">
      <!-- Carapace -->
      <ellipse cx="0" cy="0" rx="8" ry="6" fill="#7ec850" stroke="#3e6b1a" stroke-width="1"/>
      <!-- Motif carapace -->
      <ellipse cx="0" cy="0" rx="5" ry="3.5" fill="none" stroke="#3e6b1a" stroke-width="0.7"/>
      <ellipse cx="0" cy="0" rx="2.5" ry="1.5" fill="none" stroke="#3e6b1a" stroke-width="0.5"/>
      <!-- Tête -->
      <ellipse cx="0" cy="-7" rx="2" ry="2.2" fill="#7ec850" stroke="#3e6b1a" stroke-width="0.7"/>
      <!-- Yeux -->
      <circle cx="-0.7" cy="-7.5" r="0.3" fill="#222"/>
      <circle cx="0.7" cy="-7.5" r="0.3" fill="#222"/>
      <!-- Pattes -->
      <ellipse cx="-6" cy="-3" rx="1.2" ry="2" fill="#7ec850" stroke="#3e6b1a" stroke-width="0.5"/>
      <ellipse cx="6" cy="-3" rx="1.2" ry="2" fill="#7ec850" stroke="#3e6b1a" stroke-width="0.5"/>
      <ellipse cx="-6" cy="3" rx="1.2" ry="2" fill="#7ec850" stroke="#3e6b1a" stroke-width="0.5"/>
      <ellipse cx="6" cy="3" rx="1.2" ry="2" fill="#7ec850" stroke="#3e6b1a" stroke-width="0.5"/>
      <!-- Queue -->
      <ellipse cx="0" cy="6.5" rx="0.5" ry="1.2" fill="#7ec850" stroke="#3e6b1a" stroke-width="0.4"/>
    </g>
  </defs>`
}
tortueDef.tikz = function (): string {
  return `
  \\tikzset{
   tortue/.pic = {
    % Carapace
    \\draw[fill=green!60!lime, draw=green!50!black, line width=0.3pt] (0,0) ellipse [x radius=0.4, y radius=0.3];
    % Motif carapace
    \\draw[draw=green!50!black, line width=0.2pt] (0,0) ellipse [x radius=0.25, y radius=0.175];
    \\draw[draw=green!50!black, line width=0.15pt] (0,0) ellipse [x radius=0.125, y radius=0.075];
    % Tête
    \\draw[fill=green!60!lime, draw=green!50!black, line width=0.2pt] (0,0.35) ellipse [x radius=0.1, y radius=0.11];
    % Yeux
    \\fill[black] (-0.035,0.39) circle (0.015);
    \\fill[black] (0.035,0.39) circle (0.015);
    % Pattes
    \\draw[fill=green!60!lime, draw=green!50!black, line width=0.15pt] (-0.3,-0.15) ellipse [x radius=0.06, y radius=0.1];
    \\draw[fill=green!60!lime, draw=green!50!black, line width=0.15pt] (0.3,-0.15) ellipse [x radius=0.06, y radius=0.1];
    \\draw[fill=green!60!lime, draw=green!50!black, line width=0.15pt] (-0.3,0.15) ellipse [x radius=0.06, y radius=0.1];
    \\draw[fill=green!60!lime, draw=green!50!black, line width=0.15pt] (0.3,0.15) ellipse [x radius=0.06, y radius=0.1];
    % Queue
    \\draw[fill=green!60!lime, draw=green!50!black, line width=0.1pt] (0,-0.32) ellipse [x radius=0.025, y radius=0.06];
   }
  }`.trim()
}
export const shapeTriangleEquilateral = new Shape2D({
  codeSvg: '<use href="#triangle-equilateral"></use>',
  codeTikz: '\\pic at (0,0) {triangle-equilateral};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'triangle équilatéral'
})

export const triangleEquilateralDef = new ObjetMathalea2D()
triangleEquilateralDef.bordures = [-0.5, -0.5, 0.5, 0.5]
triangleEquilateralDef.svg = function (coeff: number): string {
  return `
  <!-- Triangle équilatéral -->
  <defs>
    <g id="triangle-equilateral">
      <polygon points="0,-10 8.666,5 -8.666,5"
        fill="lightgreen" stroke="darkgreen" stroke-width="0.5" />
    </g>
  </defs>`
}
triangleEquilateralDef.tikz = function (): string {
  return `
  \\tikzset{
   triangle-equilateral/.pic = {
    \\draw[fill=green!20, draw=green!50!black, line width=0.3pt]
      (0,0.5) -- (0.433,-0.25) -- (-0.433,-0.25) -- cycle;
   }
  }`.trim()
}
export const shapeRedCross = new Shape2D({
  codeSvg: '<use href="#red-cross"></use>',
  codeTikz: '\\pic at (0,0) {red-cross};',
  width: 1,
  height: 1,
  opacite: 1,
  name: 'red cross'
})

export const redCrossDef = new ObjetMathalea2D()
redCrossDef.bordures = [-0.5, -0.5, 0.5, 0.5]
redCrossDef.svg = function (coeff: number): string {
  return `
  <!-- Red Cross -->
  <defs>
    <g id="red-cross">
      <rect x="-3" y="-10" width="6" height="20" fill="red" stroke="darkred" stroke-width="0.5"/>
      <rect x="-10" y="-3" width="20" height="6" fill="red" stroke="darkred" stroke-width="0.5"/>
    </g>
  </defs>`
}
redCrossDef.tikz = function (): string {
  return `
  \\tikzset{
   red-cross/.pic = {
    % Red Cross
    \\draw[fill=red, draw=red!70!black, line width=0.3pt] (-0.15,-0.5) rectangle (0.15,0.5);
    \\draw[fill=red, draw=red!70!black, line width=0.3pt] (-0.5,-0.15) rectangle (0.5,0.15);
   }
  }`.trim()
}

export const shapeNames: string[] = [
  'carré',
  'carréRond',
  'étoile',
  'chat',
  'soleil',
  'losange',
  'hexagone',
  'rond',
  'balle',
  'tortue',
  'triangle',
  'redCross',
  'carréBleu',
  'hexagoneJaune',
  'rectangleBlanc',
  'rectangleVert',
  'licorne'
]
/*
export const listeEmojis: Record<string, string> = {
  licorne: '1f984',
  chien: '1f436',
  chat2: '1f431',
  souris: '1f42d',
  tortue2: '1f422',
  pieuvre: '1f419',
  poisson: '1f41f',
  papillon: '1f98b',
  fantome: '1f47b',
  feu: '1f525',
  soleil2: '2600',
  etoileBrillante: '1f31f',
  crotte: '1f4a9',
  fusee: '1f680',
  drapeauDamier: '1f3c1',
  arcEnCiel: '1f308',
  cerise: '1f352',
  pomme: '1f34e',
  pizza: '1f355',
  biere: '1f37a'
}
*/
export type ShapeName = (typeof shapeNames)[number]

export const listeShapesDef: Record<ShapeName, ObjetMathalea2D > = {
  carré: carreDef,
  carréRond: carreRondDef,
  étoile: etoileDef,
  chat: chatDef,
  soleil: soleilDef,
  losange: losangeDef,
  hexagone: hexagoneDef,
  rond: rondDef,
  balle: balleDef,
  tortue: tortueDef,
  triangle: triangleEquilateralDef,
  redCross: redCrossDef,
  carréBleu: carreBleuDef,
  hexagoneJaune: hexagoneJauneDef,
  rectangleBlanc: rectangleBlancDef,
  rectangleVert: rectangleDef,
  licorne: licorneDef
}

export const listeShapes2D: Record<ShapeName, Shape2D > = {
  carré: shapeCarre,
  carréRond: shapeCarreArrondi,
  étoile: shapeEtoile4Branches,
  chat: shapeChat,
  soleil: shapeSoleil,
  losange: shapeLosange,
  hexagone: shapeHexagone,
  rond: shapeRond,
  balle: shapeBalle,
  tortue: shapeTortue,
  triangle: shapeTriangleEquilateral,
  redCross: shapeRedCross,
  carréBleu: shapeCarreBleu,
  hexagoneJaune: shapeHexagoneJaune,
  rectangleBlanc: shapeRectangleBlanc,
  rectangleVert: shapeRectangle,
  licorne: shapeLicorne
}
export const listeShapes2DNames: ShapeName[] = Object.keys(listeShapes2D) as ShapeName[]
