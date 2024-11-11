import ExerciceQcm from '../../ExerciceQcm'

export const uuid = 'A2032023Q5'
export const refs = {
  'fr-fr': ['TSP2-QCM03'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'QCM Bac Asie mars 2023 : Probabilités conditionnelles'
export const dateDePublication = '05/11/2024'
/**
 * Ceci est un exo construit à partir d'une question de qcm de Bac.
 * Il utilise la classe ExerciceQcm qui définit les contours de l'exo (sans version aléatoire)
 * Ce moule à exo dispose d'une méthode qcmCamExport qui permet de récupérer le JSON de la question et de la reponse pour qcmCam.
 * Il est interactif et dispose d'un export AMC d'office
 */
export default class SujetZero2024Ex5Q5 extends ExerciceQcm {
  versionOriginale: () => void = () => {
    this.reponses = [
      '$\\left( \\dfrac{505}{673} \\right)^{10}$',
      '$1-\\left( \\dfrac{505}{673} \\right)^{10}$',
      '$\\left( \\dfrac{168}{673} \\right)^{10}$',
      '$1-\\left( \\dfrac{168}{673} \\right)^{10}$'
    ]

    this.enonce = this.sup3
      ? `On considère L une liste de nombres constituée de termes consécutifs d'une suite arithmétique de premier terme $7$ et de raison $3$,<br> le dernier nombre de la liste est $2023$ soit: 
L = [7, 10, \\ldots , 2023].<br>
On choisit au hasard un nombre dans cette liste.<br>
On s'intéresse aux évènements suivants :<br>
$\\quad\\bullet\\quad$ Évènement $A$ : "obtenir un multiple de 4"; <br>
$\\quad\\bullet\\quad$ Évènement $B$ : "obtenir un nombre dont le chiffre des unités est 6".<br>

Pour répondre aux questions suivantes on pourra utiliser l'arbre pondéré ci-dessous et on donne $p(A \\cap B) = \\dfrac{34}{673}$`
      : ''
    this.enonce += '<br> On choisit, au hasard, successivement, 10 éléments de cette liste. Un élément peut être choisi plusieurs fois. <br>'
    this.enonce += 'La probabilité qu\'aucun de ces 10 nombres ne soit un multiple de 4 est :'
    this.correction = 'La probabilité de ne pas tirer un multiple de 4 est égale à $\\dfrac{505}{673}$. <br>'
    this.correction += 'La probabilité qu’aucun des 10 nombres tirés ne soit un multiple de 4 est égale à $\\left( \\dfrac{505}{673} \\right)^{10} \\approx 0.057$. <br>'
  }

  constructor () {
    super()
    this.options = { vertical: true, ordered: false }
    this.versionOriginale()
    this.besoinFormulaire3CaseACocher = ['Avec le préambule de l\'énoncé', true]
    this.sup3 = true
  }
}
