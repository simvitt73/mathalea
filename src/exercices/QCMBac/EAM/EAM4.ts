import { choice } from '../../../lib/outils/arrayOutils'
import { randint } from '../../../modules/outils'
import ExerciceQcmA from '../../ExerciceQcmA'

export const uuid = 'fcadd'
export const refs = {
  'fr-fr': ['QCM-Coefficient-Multiplicateur'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'Variation de prix et coefficient multiplicateur'
export const dateDePublication = '28/10/2024'

function shuffle<T> (arr: T[]): T[] {
  return arr
    .map(x => [x, Math.random()] as [T, number])
    .sort((a, b) => a[1] - b[1])
    .map(x => x[0])
}

export default class CoefficientMultiplicateurQCM extends ExerciceQcmA {
  versionOriginale: () => void = () => {
    this.enonce = 'Le prix d’un article est multiplié par $0{,}975$.<br> Cela signifie que le prix de cet article a connu :'
    this.correction = `
      <ul>
        <li><b>Bonne réponse :</b> une baisse de 2,5 %: $0{,}975 = 1 - 0{,}025$, donc baisse de $2,5\\%$.</li>
        <li>une augmentation de 97,5 % : <i>Erreur classique</i> : on a confondu le coefficient multiplicateur avec le pourcentage d’augmentation.</li>
        <li>une baisse de 25 % : <i>Erreur classique</i> : on a oublié la virgule (0,975 → 0,25).</li>
        <li>une augmentation de 0,975 % : <i>Erreur classique</i> : on a pris le coefficient multiplicateur comme pourcentage.</li>
      </ul>
    `
    this.reponses = [
      'une baisse de 2,5%',
      'une augmentation de 97,5%',
      'une baisse de 25%',
      'une augmentation de 0,975%'
    ]
  }

  versionAleatoire = () => {
    // Génère un coefficient multiplicateur réaliste (entre 0.85 et 1.20, arrondi à 3 décimales)
    const coef = Math.round((randint(85, 120) / 1000) * 1000) / 1000
    // Calcul du pourcentage d'évolution
    const variation = Math.round((coef - 1) * 1000) / 10 // arrondi à 1 décimale
    const absVariation = Math.abs(variation)
    const signe = variation < 0 ? 'baisse' : 'augmentation'

    // Bonne réponse
    const bonneReponse = `une ${signe} de ${absVariation}%`

    // Distracteurs
    const distracteursCandidats = [
      {
        val: `une ${signe === 'baisse' ? 'augmentation' : 'baisse'} de ${absVariation}%`,
        exp: 'Erreur de sens : on inverse hausse/baisse.'
      },
      {
        val: `une ${signe} de ${Math.abs(Math.round(coef * 1000) / 10)}%`,
        exp: 'Erreur classique : on prend le coefficient multiplicateur comme pourcentage.'
      },
      {
        val: `une ${signe} de ${Math.abs(Math.round((coef - 1) * 10000) / 100)}%`,
        exp: 'Erreur d’échelle : on multiplie la variation par 10.'
      },
      {
        val: `une ${signe === 'baisse' ? 'baisse' : 'augmentation'} de ${Math.abs(Math.round((1 - coef) * 1000) / 10)}%`,
        exp: 'Erreur de calcul : on prend $1 - k$ au lieu de $k - 1$.'
      },
      {
        val: `une ${signe} de ${Math.abs(Math.round((coef - 0.1) * 1000) / 10)}%`,
        exp: 'Erreur de virgule : on décale la virgule.'
      }
    ]

    // On retire la bonne réponse et les doublons
    const distracteursUniques = distracteursCandidats
      .filter(d => d.val !== bonneReponse)
      .filter((d, i, arr) => arr.findIndex(dd => dd.val === d.val) === i)

    // On en choisit 3 au hasard
    const distracteursFinal = shuffle(distracteursUniques).slice(0, 3)

    // Correction pédagogique pour chaque réponse
    this.correction = `
  <ul>
    <li><b>Bonne réponse:</b> ${bonneReponse}: $k = ${coef}$ donc variation de $${variation}\\,\\%$.</li>
    ${distracteursFinal.map(d => `<li>${d.val}: ${d.exp}</li>`).join('\n')}
  </ul>
`

    // La bonne réponse doit être en premier
    this.reponses = [
      bonneReponse,
      ...distracteursFinal.map(d => d.val)
    ]

    this.enonce = `Le prix d’un article est multiplié par $${coef}$.<br>
Cela signifie que le prix de cet article a connu:`
  }

  constructor () {
    super()
    this.versionAleatoire()
  }
}
