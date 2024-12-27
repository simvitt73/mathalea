import ExerciceDecomposerEnFacteursPremiers from '../../5e/5A13'
export const interactifReady = true
export const interactifType = 'mathLive'
export const titre = 'Décomposer en produit de facteurs premiers'

/**
 * @author Jean-Claude Lhote
 * Créé pendant l'été 2021

 */
export const uuid = '1b91d'

export const refs = {
  'fr-fr': ['can5C10'],
  'fr-ch': []
}
export default function DecomposerFacteursPremierSimple () {
  ExerciceDecomposerEnFacteursPremiers.call(this)
  this.nbQuestions = 1
  this.sup2 = false
  this.sup = 1

  this.formatChampTexte = ''
  this.consigne = `Décomposer en produit de facteurs premiers :<br>
  (facteurs dans l’ordre croissant)`
}
