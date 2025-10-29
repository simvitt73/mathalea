/**
 * Interfaces pour typer les objets 2D sans importer les classes complètes.
 * Utiliser `import type { IRepere, IAxes, ... } from '../lib/2d/Interfaces'`
 * pour éviter les dépendances circulaires runtime.
 */

/**
 * Interface minimale pour Repere
 */
export interface IRepere {
  xUnite: number
  yUnite: number
  xMin: number
  xMax: number
  yMin: number
  yMax: number
  grilleXMin: number
  grilleXMax: number
  grilleYMin: number
  grilleYMax: number
  objets?: any[]
  bordures?: [number, number, number, number]

  svg?(coeff: number): string
  tikz?(): string
  svgml?(coeff: number, amp: number): string
  tikzml?(amp: number): string
  addObjet?(objet: any): void
  trace?(): any[]
}

/**
 * Interface minimale pour Axes
 */
export interface IAxes {
  xUnite: number
  yUnite: number
  xMin: number
  xMax: number
  yMin: number
  yMax: number
  xThickListe?: number[]
  yThickListe?: number[]
  xLabelListe?: string[]
  yLabelListe?: string[]
  xThickDistance?: number
  yThickDistance?: number
  xLegende?: string
  yLegende?: string
  axeXStyle?: string
  axeYStyle?: string
  pointTaille?: number
  labelsPerpendiculaires?: boolean

  svg?(coeff: number): string
  tikz?(): string
}

/**
 * Interface minimale pour DroiteGraduee
 */
export interface IDroiteGraduee {
  axeStyle?: string
  pointTaille?: number
  labelDistance?: number
  Unite?: number
  Min?: number
  Max?: number
  thickListe?: number[]
  thickOffset?: number
  thickDistance?: number
  thickColor?: string
  labelListe?: string[]
  labelsPerpendiculaires?: boolean
  step1?: number
  step2?: number

  svg?(coeff: number): string
  tikz?(): string
}

/**
 * Interface minimale pour Droite
 */
export interface IDroite {
  x1: number
  x2: number
  y1: number
  y2: number
  a: number
  b: number
  c: number
  pente: number
  angleAvecHorizontale: number
  nom: string
  normal?: { x: number; y: number }
  directeur?: { x: number; y: number }
  stringColor?: string
  color?: [string, string]
  epaisseur?: number
  opacite?: number
  pointilles?: number
  bordures?: [number, number, number, number]

  svg?(coeff: number): string
  tikz?(): string
  svgml?(coeff: number, amp: number): string
  tikzml?(amp: number): string
}

/**
 * Interface minimale pour Grille
 */
export interface IGrille {
  xUnite: number
  yUnite: number
  xMin: number
  xMax: number
  yMin: number
  yMax: number
  xDistance?: number
  yDistance?: number
  opacite?: number
  couleur?: string
  pointilles?: number

  svg?(coeff: number): string
  tikz?(): string
}

/**
 * Interface minimale pour LectureImage
 */
export interface ILectureImage {
  xUnite: number
  yUnite: number
  xMin: number
  xMax: number
  yMin: number
  yMax: number
  grilleXMin: number
  grilleXMax: number
  grilleYMin: number
  grilleYMax: number

  svg?(coeff: number): string
  tikz?(): string
}
/**
 * Interface minimale pour PointAbstrait
 */
export interface IPointAbstrait {
  nom: string
  x: number
  y: number
  positionLabel?: string
  bordures?: [number, number, number, number]
  typeObjet?: string

  xSVG?(coeff: number): number
  ySVG?(coeff: number): number
}

/**
 * Interface minimale pour Point (étend IPointAbstrait)
 */
export interface IPoint extends IPointAbstrait {
  estDansPolygone?(p: any): boolean
  estDansTriangle?(A: IPoint, B: IPoint, C: IPoint): boolean
  estDansPolygoneConvexe?(p: any): boolean
  estDansQuadrilatere?(A: IPoint, B: IPoint, C: IPoint, D: IPoint): boolean
  estSur?(objet: any): boolean
  svg?(coeff: number): string
  tikz?(): string
}

/**
 * Interface minimale pour Plot
 */
export interface IPlot {
  couleurDeRemplissage: string[]
  rayon: number
  x: number
  y: number
  opaciteDeRemplissage: number
  bordures?: [number, number, number, number]

  svg?(coeff: number): string
  tikz?(): string
}

/**
 * Interface minimale pour TracePoint
 */
export interface ITracePoint {
  taille: number
  tailleTikz: number
  points: any[]
  couleurDeRemplissage?: string[]
  epaisseur?: number
  opacite?: number
  style?: string
  bordures?: [number, number, number, number]

  svg?(coeff: number): string
  tikz?(): string
}

/**
 * Interface minimale pour TracePointSurDroite
 */
export interface ITracePointSurDroite {
  lieu: IPoint
  taille: number
  x: number
  y: number
  direction: IPoint
  bordures?: [number, number, number, number]

  svg?(coeff: number): string
  tikz?(): string
}

/**
 * Interface minimale pour Mediatrice
 */
export interface IMediatrice {
  couleurMediatrice?: string
  epaisseurMediatrice?: number
  opaciteMediatrice?: number
  pointillesMediatrice?: number
  couleurConstruction?: string
  color?: [string, string]
  epaisseur?: number
  opacite?: number
  pointilles?: number
  objets?: any[]
  bordures?: [number, number, number, number]

  svg?(coeff: number): string
  tikz?(): string
  svgml?(coeff: number, amp: number): string
  tikzml?(amp: number): string
}

/**
 * Interface minimale pour Cercle
 */
export interface ICercle {
  centre: IPointAbstrait
  rayon: number
  couleurDeRemplissage: string[]
  opaciteDeRemplissage: number
  hachures?: string
  couleurDesHachures: string[]
  epaisseurDesHachures: number
  distanceDesHachures: number
  color?: [string, string]
  epaisseur?: number
  pointilles?: number
  opacite?: number
  style?: string
  bordures?: [number, number, number, number]

  svg?(coeff: number): string
  tikz?(): string
  svgml?(coeff: number): string
  tikzml?(amp: number): string
}

/**
 * Interface minimale pour Segment
 */
export interface ISegment {
  x1: number
  y1: number
  x2: number
  y2: number
  extremite1: IPointAbstrait
  extremite2: IPointAbstrait
  longueur: number
  angleAvecHorizontale: number
  tailleExtremites?: number
  styleExtremites?: string
  color?: [string, string]
  epaisseur?: number
  pointilles?: number
  opacite?: number
  style?: string
  bordures?: [number, number, number, number]
  typeObjet?: string

  svg?(coeff: number): string
  tikz?(): string
  svgml?(coeff: number, amp: number): string
  tikzml?(amp: number): string
  estSecant?(objet: any): boolean
}
/**
 * Interface minimale pour Vecteur
 */
export interface IVecteur {
  nom: string
  x: number
  y: number

  norme(): number
  oppose(): void
  xSVG(coeff: number): number
  ySVG(coeff: number): number
  representant(A: IPoint | IPointAbstrait, color?: string): ISegment
  representantNomme(
    A: IPoint,
    nom: string,
    taille?: number,
    color?: string,
  ): any
}
/**
 * Interface minimale pour Polygone
 */
export interface IPolygone {
  listePoints: IPointAbstrait[]
  nom: string
  couleurDeRemplissage: string[]
  opaciteDeRemplissage: number
  couleurDesHachures: string[]
  distanceDesHachures: number
  epaisseurDesHachures: number
  hachures: boolean | string
  perimetre: number
  color?: [string, string]
  epaisseur?: number
  pointilles?: number
  opacite?: number
  style?: string
  bordures?: [number, number, number, number]
  typeObjet?: string
  aire?: number
  triangulation: [IPointAbstrait, IPointAbstrait, IPointAbstrait][]

  binomesXY?(coeff: number): string
  svg?(coeff: number): string
  tikz?(): string
  svgml?(coeff: number, amp: number): string
  tikzml?(amp: number): string
}
