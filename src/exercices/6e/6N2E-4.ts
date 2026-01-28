import DernierChiffreDécimaux from './6N2A-3'
export const titre = "Déterminer le dernier chiffre d'un produit entre décimaux"
export const amcReady = true
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcType = 'AMCNum'
export const dateDePublication = '28/01/2026'
export const uuid = 'ekf48'
export const refs = {
  'fr-fr': ['6N2E-4'],
  'fr-ch': [],
}
export default class DernierChiffreProduitDecimaux extends DernierChiffreDécimaux {
  constructor() {
    super()
    this.nbQuestions = 4
    this.sup = '3'
  }
}
