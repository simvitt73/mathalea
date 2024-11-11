import ExerciceQcm from '../../ExerciceQcm'

export const uuid = 'A2032023Q4'
export const refs = {
  'fr-fr': ['TSP2-QCM02'],
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
      '$\\dfrac{34}{67}$',
      '$\\dfrac{36}{168}$',
      '$\\dfrac{1}{2}$',
      '$\\dfrac{33}{168}$'
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
    this.enonce += '<br> $P_B(A)$ est égale à :'
    this.correction = '$P_B(A)=\\dfrac{P(B \\cap A)}{P(B)}$.<br>'
    this.correction += 'Or, $P(B) = P(A \\cap B) + P \\left( \\overline{A} \\cap B \\right) = \\dfrac{34}{673} + \\dfrac{505}{673} \\times \\dfrac{33}{505} = \\dfrac{34}{673} + \\dfrac{33}{673}  = \\dfrac{67}{673}$ <br>'
    this.correction += 'Donc $P_B(A) = \\dfrac{\\dfrac{34}{673}}{\\dfrac{67}{673}} = \\dfrac{34}{67}$'
  }

  constructor () {
    super()
    this.options = { vertical: true, ordered: false }
    this.versionOriginale()
    this.besoinFormulaire3CaseACocher = ['Avec le préambule de l\'énoncé', true]
    this.sup3 = true
  }
}
