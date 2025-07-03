import { choice } from '../../../lib/outils/arrayOutils'
import { fraction } from '../../../modules/fractions'
import { randint } from '../../../modules/outils'
import ExerciceQcmA from '../../ExerciceQcmA'

export const uuid = 'qcm-inverse-double-amelioré-v5'
export const refs = {
  'fr-fr': ['QCM-Inverse-Double-Varie-Intelligent'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'Inverse, opposé, multiples et fractions d\'un nombre (distracteurs combinés)'
export const dateDePublication = '28/10/2024'

function shuffle<T> (arr: T[]): T[] {
  return arr
    .map(x => [x, Math.random()] as [T, number])
    .sort((a, b) => a[1] - b[1])
    .map(x => x[0])
}

export default class InverseDoubleQCMVarieIntelligent extends ExerciceQcmA {
  versionOriginale: () => void = () => {
    this.enonce = 'L\'inverse du double de 5 est égal à :'
    this.correction = `
      <ul>
        <li><b>Bonne réponse :</b> $\\dfrac{1}{10}$ : Le double de 5 est 10, son inverse est $\\dfrac{1}{10}$.</li>
        <li>$\\dfrac{2}{5}$ : <i>Erreur de méthode</i> : ici, on inverse 5 puis on multiplie par 2, ce qui n'est pas la bonne méthode.</li>
        <li>$\\dfrac{5}{2}$ : <i>Erreur de calcul</i> : ici, on a divisé 5 par 2 au lieu de doubler puis inverser.</li>
        <li>$10$ : <i>Oubli d'étape</i> : ici, on a juste donné le double sans prendre l'inverse.</li>
      </ul>
    `
    this.reponses = [
      '$\\dfrac{1}{10}$',
      '$\\dfrac{2}{5}$',
      '$\\dfrac{5}{2}$',
      '$10$'
    ]
  }

  versionAleatoire = () => {
    const n = randint(2, 15) * choice([1, -1])
    const multiplicateurs = [
      { val: 2, nom: 'double de', calc: (x: number) => 2 * x },
      { val: 3, nom: 'triple de', calc: (x: number) => 3 * x },
      { val: 4, nom: 'quadruple de', calc: (x: number) => 4 * x }
    ]
    if (n % 2 === 0) multiplicateurs.push({ val: 0.5, nom: 'moitié de', calc: (x: number) => x / 2 })
    if (n % 4 === 0) multiplicateurs.push({ val: 0.25, nom: 'quart de', calc: (x: number) => x / 4 })

    const mult = choice(multiplicateurs)
    const multNom = mult.nom
    const multVal = mult.val
    const multResult = mult.calc(n)

    const operations = [
      { nom: "l'inverse", calc: (x: number) => fraction(1, x) },
      { nom: "l'opposé", calc: (x: number) => fraction(-x, 1) },
      { nom: "l'inverse de l'opposé", calc: (x: number) => fraction(1, -x) },
      { nom: "l'opposé de l'inverse", calc: (x: number) => fraction(-1, x) }
    ]
    const op = choice(operations)
    const opNom = op.nom
    const opResult = op.calc(multResult).simplifie()
    const bonneReponse = opResult.texFSD

    // 6 distracteurs combinant opNom et multNom, sans jamais utiliser n seul
    const distracteursCandidats = [
      {
        val: fraction(multResult, 1).simplifie().texFSD,
        exp: `Oubli d'étape : on a donné le résultat de ${multNom} sans appliquer ${opNom}.`
      },
      {
        val: op.calc(multVal).simplifie().texFSD,
        exp: `Erreur de méthode : on a appliqué ${opNom} au multiplicateur seul (${multNom.replace(/ de$/, '')}) au lieu du résultat de ${multNom}.`
      },
      {
        val: fraction(1, multResult).simplifie().texFSD,
        exp: `Confusion : on a donné l'inverse du résultat de ${multNom}, quelle que soit l'opération demandée.`
      },
      {
        val: fraction(-1, multResult).simplifie().texFSD,
        exp: `Confusion : on a donné l'opposé de l'inverse du résultat de ${multNom}.`
      },
      {
        val: fraction(-multResult, 1).simplifie().texFSD,
        exp: `Confusion : on a donné l'opposé du résultat de ${multNom}.`
      },
      {
        val: op.calc(-multResult).simplifie().texFSD,
        exp: `Erreur de signe : on a appliqué ${opNom} à l'opposé du résultat de ${multNom}.`
      }
    ]

    // On retire la bonne réponse et les doublons
    const distracteursUniques = distracteursCandidats
      .filter(d => d.val !== bonneReponse && d.val !== `$${bonneReponse}$`)
      .filter((d, i, arr) => arr.findIndex(dd => dd.val === d.val) === i)

    // On en choisit 3 au hasard
    const distracteursFinal = shuffle(distracteursUniques).slice(0, 3)

    // Correction pédagogique pour chaque réponse
    this.correction = `
      <ul>
        <li><b>Bonne réponse :</b> $${bonneReponse}$ : On applique ${opNom} au résultat de ${multNom}, soit $${multResult}$, donc $${bonneReponse}$.</li>
        ${distracteursFinal.map(d => `<li>$${d.val}$ : ${d.exp}</li>`).join('\n')}
      </ul>
    `

    // La bonne réponse doit être en premier
    this.reponses = [
      `$${bonneReponse}$`,
      ...distracteursFinal.map(d => `$${d.val}$`)
    ]

    this.enonce = `Quel est ${opNom} du ${multNom} ${n} ?`
  }

  constructor () {
    super()
    this.versionAleatoire()
  }
}
