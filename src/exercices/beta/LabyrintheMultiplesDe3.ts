import { randint } from "../../modules/outils"
import ExerciceLabyrinthe from "./_Exercice_labyrinthe"
export const titre = 'Labyrinthe des multiples de 3'

export const dateDePublication = '30/10/2026'
export const interactifReady = true
export const interactifType = 'custom'

export const uuid = 'labymul3'
export const refs = {
  'fr-fr': [],
  'fr-ch': [],
}
/**
 * @author Rémi Angot
 */
 
export default class ExerciceLabyrintheMultiplesDe3 extends ExerciceLabyrinthe {
  
  consigne = 'Trouver le chemin qui passe par des multiples de 3.'
  cols = 7
  rows = 5
  orientation?: "horizontal" | "vertical" = 'horizontal'
  
  generateGoodAnswers() {
    return randint(11, 33) * 3
  }
  
  generateBadAnswers() {
    return randint(11, 33) * 3 + randint(1, 2)
  }
}