import ExerciceConversions from '../6e/_Exercice_conversions'
export const titre = 'Effectuer des conversions avec tous les préfixes de milli à kilo'
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcReady = true
export const amcType = 'AMCNum'

export const uuid = 'e6a58'

export const refs = {
  'fr-fr': ['bp2autoQ1'],
  'fr-ch': []
}
export default class ExerciceBP2autoQ1 extends ExerciceConversions {
  constructor () {
    super()
    this.sup = 3
    this.besoinFormulaireNumerique = false
  }
}
