import type { NestedObjetMathalea2dArray } from '../../../modules/2dGeneralites'
import { Shape2D } from '../Figures2D'
import { listeShapes2D, shapeCarre, type ShapeName } from '../figures2d/shapes2d'

type Coord = [number, number, string] // Coordonnées sous forme de tableau de deux nombres, avec un troisième élément optionnel pour la forme à y mettre
/**
 * @author Jean-Claude Lhote
 *
 */

export class VisualPattern {
  shape: Shape2D
  shape0: string // forme par défaut, utilisée pour les cellules sans forme spécifique
  shape1: string // forme utilisée pour les cellules avec une forme spécifique
  cells: Set<string> // ce sont des coordonnées sous forme de chaîne de caractères "x,y" car les ensembles ne peuvent pas contenir d'objets complexes comme des tableaux
  // on utilise un ensemble pour stocker les cellules, ce qui permet d'éviter les doublons et de faciliter la vérification de la présence d'une cellule
  // et la conversion en chaîne de caractères permet de les stocker efficacement dans un ensemble

  constructor (initialCells: Coord[] | string[] | Set<string>, shape0?: ShapeName, shape1?: ShapeName) {
    if (initialCells instanceof Set) {
      // si initialCells est déjà un Set, on l'utilise directement
      this.cells = initialCells
    } else if (Array.isArray(initialCells)) {
      if (typeof initialCells[0] === 'string') {
      // si initialCells est déjà un tableau de chaînes de caractères, on le convertit en Set directement
        this.cells = new Set(initialCells as string[])
      } else if (Array.isArray(initialCells[0]) && initialCells[0].length === 3) {
      // si initialCells est un tableau de coordonnées, on les convertit en chaînes de caractères
      // en utilisant la méthode coordToKey
        this.cells = new Set((initialCells as Coord[]).map(VisualPattern.coordToKey))
      } else {
        throw new Error('initialCells must be an array of coordinates or strings')
      }
    // on initialise l'ensemble des cellules avec les coordonnées initiales
    } else {
      throw new Error('initialCells must be a Set, an array of coordinates or an array of strings')
    }
    if (shape0 === undefined || !Object.keys(listeShapes2D).includes(shape0)) {
      this.shape = shapeCarre
      this.shape0 = shapeCarre.name // forme par défaut pour les cellules sans forme spécifique
      this.shape1 = shapeCarre.name // forme utilisée pour les cellules avec une forme spécifique
    } else {
      this.shape = listeShapes2D[shape0]
      if (!this.shape) {
        throw new Error(`VisualPattern: la forme ${shape0} n'existe pas dans la liste des formes`)
      }
      this.shape0 = shape0 ?? 'carré' // forme par défaut pour les cellules sans forme spécifique
      this.shape1 = shape1 ?? 'carré' // forme utilisée pour les cellules avec une forme spécifique
    }
  }

  hasCell (x: number, y: number, shape: string): boolean {
    return this.cells.has(VisualPattern.coordToKey([x, y, shape]))
  }

  iterate (this: VisualPattern, n?: number): Set<string> {
    return this.cells // cette méthode doit être modifiée pour créer un motif changeant.
  }

  static coordToKey (coord: Coord): string {
    return `${coord[0]},${coord[1]},${coord[2] ?? ''}` // on utilise une chaîne de caractères pour représenter les coordonnées
  }

  static keyToCoord (key: string): Coord {
    const [x, y, shape] = key.split(',')
    return [Number(x), Number(y), shape ?? '']
  }

  render (n:number, dx: number, dy:number): NestedObjetMathalea2dArray {
    let cells: Set<string> = this.cells
    const newPattern = new VisualPattern(cells, this.shape0, this.shape1)
    newPattern.iterate = this.iterate.bind(newPattern)
    cells = newPattern.iterate(n)
    if (cells.size === 0) {
      return []
    }
    if (cells.size > 1000) {
      console.warn('PatternNumerique: le motif contient plus de 1000 cellules, l\'affichage peut être long')
    }
    if (cells.size > 10000) {
      console.warn('PatternNumerique: le motif contient plus de 10000 cellules, l\'affichage peut être très long')
    }
    if (cells.size > 100000) {
      console.warn('PatternNumerique: le motif contient plus de 100000 cellules, l\'affichage peut être très très long')
    }
    const objets: NestedObjetMathalea2dArray = []
    for (const cell of cells) {
      const [x, y, shape] = VisualPattern.keyToCoord(cell)
      /*  if (x < 0 || y < 0) {
        throw new Error('PatternNumerique: les coordonnées doivent être positives')
      }
        */
      let newShape: Shape2D
      if (shape === '') {
        newShape = this.shape.clone()
      } else {
        const shape2d = listeShapes2D[shape]
        if (!shape) {
          throw new Error(`PatternNumerique: la forme ${shape} n'existe pas`)
        }
        newShape = shape2d.clone()
      }
      newShape.y = y + dy
      newShape.x = x + dx
      newShape.updateBordures()
      objets.push(newShape)
    }
    return objets
  }

  print (): string {
    return Array.from(this.cells).join(';')
  }
}
