import { VisualPattern } from '../../lib/2d/patterns/VisualPattern'
import { fixeBordures, mathalea2d } from '../../modules/2dGeneralites'
import Exercice from '../Exercice'
export const uuid = 'patterns'
export const titre = 'Problème Beta - Motifs numériques'
export const dateDePublication = '10/06/2025'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}
export default class ProblemeBetaPatterns extends Exercice {
  constructor () {
    super()
    this.besoinFormulaireNumerique = ['Patter number', 3]
    this.besoinFormulaire2Numerique = ['Rang de la figure', 5]
    this.sup = 1
    this.sup2 = 2
  }

  nouvelleVersion () {
    // Motif initial : un carré en (0,0) et un en dessous pour activer la règle
    let pattern: VisualPattern
    switch (this.sup) {
      case 1:
        pattern = new VisualPattern(
          [
            [0, 0],
            [0, 1],
            [1, 0],
          ]
        )
        pattern.iterate = function () {
          const newCells = new Set<string>()

          for (const key of this.cells) {
            const [x, y] = VisualPattern.keyToCoord(key)
            let replaced = false
            // Check neighbor below
            if (this.hasCell(x, y - 1)) {
              newCells.add(VisualPattern.coordToKey([x, y]))
              newCells.add(VisualPattern.coordToKey([x, y + 1]))
              replaced = true
            }

            // Check neighbor to the left
            if (this.hasCell(x - 1, y)) {
              newCells.add(VisualPattern.coordToKey([x, y]))
              newCells.add(VisualPattern.coordToKey([x + 1, y]))
              replaced = true
            }

            // If no replacement triggered, keep original cell
            if (!replaced) {
              newCells.add(VisualPattern.coordToKey([x, y]))
            }
          }
          return newCells
        }

        break
      case 2:
        pattern = new VisualPattern(
          [
            [0, 0]
          ]
        )
        pattern.iterate = function () {
          const newCells = new Set<string>()
          for (const key of this.cells) {
            const [x, y] = VisualPattern.keyToCoord(key)
            newCells.add(VisualPattern.coordToKey([x, y]))
            newCells.add(VisualPattern.coordToKey([x + 1, y]))
            newCells.add(VisualPattern.coordToKey([x, y + 1]))
            newCells.add(VisualPattern.coordToKey([x + 1, y + 1]))
          }
          return newCells
        }
        break
      case 3:
      default:
        pattern = new VisualPattern(
          [
            [0, 0]
          ]
        )
        pattern.iterate = function () {
          const newCells = new Set<string>()
          for (const key of this.cells) {
            const [x, y] = VisualPattern.keyToCoord(key)
            if (y === 0) {
              newCells.add(VisualPattern.coordToKey([x, y]))
              newCells.add(VisualPattern.coordToKey([x, y + 1]))
              newCells.add(VisualPattern.coordToKey([x + 1, y]))
            } else {
              newCells.add(VisualPattern.coordToKey([x, y]))
            }
          }
          return newCells
        }
    }

    const objets = pattern.render(this.sup2, 0, 0)
    this.listeQuestions = [
      mathalea2d(Object.assign(fixeBordures(objets), { ymax: 10 }), objets)
    ]
  }
}
