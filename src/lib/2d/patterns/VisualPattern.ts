import type { NestedObjetMathalea2dArray } from '../../../modules/2dGeneralites'
import { Shape2D } from '../Figures2D'
import { shapeCarre } from '../figures2d/shapes2d'

type Coord = [number, number]
/**
 * @author Jean-Claude Lhote
 *
 */

export class VisualPattern {
  shape: Shape2D
  cells: Set<string> // ce sont des coordonnées sous forme de chaîne de caractères "x,y" car les ensembles ne peuvent pas contenir d'objets complexes comme des tableaux
  // on utilise un ensemble pour stocker les cellules, ce qui permet d'éviter les doublons et de faciliter la vérification de la présence d'une cellule
  // et la conversion en chaîne de caractères permet de les stocker efficacement dans un ensemble

  constructor (initialCells: Coord[] | string[] | Set<string>, shape?: Shape2D) {
    if (initialCells instanceof Set) {
      // si initialCells est déjà un Set, on l'utilise directement
      this.cells = initialCells
    } else if (Array.isArray(initialCells)) {
      if (typeof initialCells[0] === 'string') {
      // si initialCells est déjà un tableau de chaînes de caractères, on le convertit en Set directement
        this.cells = new Set(initialCells as string[])
      } else if (Array.isArray(initialCells[0]) && initialCells[0].length === 2) {
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
    if (!(shape instanceof Shape2D) || shape !== undefined) {
      this.shape = shapeCarre
    } else {
      this.shape = shape
    }
  }

  hasCell (x: number, y: number): boolean {
    return this.cells.has(VisualPattern.coordToKey([x, y]))
  }

  iterate (this: VisualPattern, n?: number): Set<string> {
    return this.cells // cette méthode doit être modifiée pour créer un motif changeant.
  }

  static coordToKey (coord: Coord): string {
    return `${coord[0]},${coord[1]}`
  }

  static keyToCoord (key: string): Coord {
    const [x, y] = key.split(',').map(Number)
    return [x, y]
  }

  render (n:number, dx: number, dy:number): NestedObjetMathalea2dArray {
    let cells: Set<string> = this.cells
    for (let i = 1; i < n; i++) {
      const newPattern = new VisualPattern(cells)
      newPattern.iterate = this.iterate.bind(newPattern)
      cells = newPattern.iterate(n)
    }
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
      const [x, y] = VisualPattern.keyToCoord(cell)
      /*  if (x < 0 || y < 0) {
        throw new Error('PatternNumerique: les coordonnées doivent être positives')
      }
        */
      const newShape = this.shape.clone()
      newShape.x = x + dx
      newShape.y = y + dy
      newShape.updateBordures()
      objets.push(newShape)
    }
    return objets
  }

  print (): string {
    return Array.from(this.cells).join(';')
  }
}
