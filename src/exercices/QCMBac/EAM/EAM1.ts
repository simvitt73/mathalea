import { miseEnEvidence } from '../../../lib/outils/embellissements'
import ExerciceQcm from '../../ExerciceQcm'

export const uuid = 'inv-double-aleatoire'
export const refs = {
  'fr-fr': ['a2699'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'Inverse du multiple d\'un nombre'
export const dateDePublication = '09/03/2025'

/**
 * Exercice QCM sur l'inverse d'un multiple d'un nombre, avec versions aléatoires.
 * Inspiré d'un QCM de Bac.
 * @author MathGPT
 */
function getRandomInt(arr: number[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomElement<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const multiplicateurs = [
  { nom: 'double', val: 2 },
  { nom: 'triple', val: 3 },
  { nom: 'quadruple', val: 4 },
  { nom: 'quintuple', val: 5 }
]
const nombres = [2, 3, 4, 5, 7, 8, 9, 10]

export default class InverseMultipleQcm extends ExerciceQcm {
  versionOriginale: () => void = () => {
    this.enonce = 'L\'inverse du double de 5 est égal à :'
    this.reponses = [
      '$\\dfrac{2}{5}$', // Mauvaise réponse
      '$\\dfrac{1}{10}$', // Bonne réponse
      '$\\dfrac{5}{2}$', // Mauvaise réponse
      '10' // Mauvaise réponse
    ]
    this.correction = 'Le double de 5 est $2 \\times 5 = 10$.<br>'
    this.correction += 'L\'inverse de 10 est $\\dfrac{1}{10}$.<br>'
    this.correction += `La bonne réponse est donc la réponse $${miseEnEvidence('\\dfrac{1}{10}')}$`
  }

  versionAleatoire: () => void = () => {
    // Choix aléatoire du multiplicateur et du nombre
    const multiplicateur = getRandomElement(multiplicateurs)
    const nombre = getRandomInt(nombres)
    const produit = multiplicateur.val * nombre
    const bonneReponse = `$\\dfrac{1}{${produit}}$`

    // Mauvaises réponses cohérentes
    const mauvaises = [
      `$\\dfrac{${multiplicateur.val}}{${nombre}}$`, // le multiple de l'inverse
      `$\\dfrac{${nombre}}{${multiplicateur.val}}$`, // l'inverse du multiple
      `${produit}` // le multiple lui-même
    ]

    // Mélange des réponses
    const allReponses = [bonneReponse, ...mauvaises].sort(() => Math.random() - 0.5)

    this.enonce = `L'inverse du ${multiplicateur.nom} de ${nombre} est égal à :`
    this.reponses = allReponses

    this.correction = `Le ${multiplicateur.nom} de ${nombre} est $${multiplicateur.val} \\times ${nombre} = ${produit}$.<br>`
    this.correction += `L'inverse de ${produit} est $\\dfrac{1}{${produit}}$.<br>`
    this.correction += `La bonne réponse est donc la réponse $${miseEnEvidence(`\\dfrac{1}{${produit}}`)}$`
  }

  constructor () {
    super()
    this.options = { vertical: true, ordered: false }
    // Pour la version originale, décommente la ligne suivante :
    // this.versionOriginale()
    // Pour la version aléatoire, décommente la ligne suivante :
    this.versionAleatoire()
  }
}