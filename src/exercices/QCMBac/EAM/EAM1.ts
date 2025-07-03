import { choice } from '../../../lib/outils/arrayOutils'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { texNombre } from '../../../lib/outils/texNombre'
import { randint } from '../../../modules/outils'
import ExerciceQcm from '../../ExerciceQcm'

export const uuid = 'a2699'
export const refs = {
  'fr-fr': ['EAM-1'],
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

let multiplicateur = choice([
  { nom: 'moitié', val: 0.5 },
  { nom: 'quart', val: 0.25 },
  { nom: 'double', val: 2 },
  { nom: 'triple', val: 3 },
  { nom: 'quadruple', val: 4 },
  { nom: 'quintuple', val: 5 }
])
let operateur = choice(['opposé', 'inverse'])
let nombre = randint(2, 10)
const coefficient = multiplicateur.val

export default class InverseMultipleQcm extends ExerciceQcm {
  versionOriginale: () => void = () => {
    multiplicateur = { nom: 'double', val: 2 }
    operateur = 'inverse'
    nombre = 5
    this.enonce = `L'${operateur} du ${multiplicateur.nom} de ${nombre} est égal à :`
    this.reponses = [
      `$\\dfrac{${coefficient}{${nombre}}$`, // Mauvaise réponse
      `$\\dfrac{1}{${texNombre(nombre * coefficient)}}$`, // Bonne réponse
      `$\\dfrac{${texNombre(nombre)}}{${texNombre(coefficient)}}$`, // Mauvaise réponse
      `${texNombre(nombre * coefficient)}` // Mauvaise réponse
    ]
    this.correction = 'Le double de 5 est $2 \\times 5 = 10$.<br>'
    this.correction += 'L\'inverse de 10 est $\\dfrac{1}{10}$.<br>'
    this.correction += `La bonne réponse est donc la réponse $${miseEnEvidence('\\dfrac{1}{10}')}$`
  
 this.enonce = 'Le réel $a$ est défini par '
    this.enonce += '$a = \\ln (9) + \\ln \\left(\\dfrac{\\sqrt{3}}{3} \\right) + \\ln \\left(\\dfrac{1}{9} \\right).$<br>'
    this.enonce += 'Quelle est la valeur de $a$ ?'

    this.correction = 'On simplifie l\'expression de $a$ étape par étape :<br>'
    this.correction += '$\\begin{aligned}'
    this.correction += 'a &= \\ln (9) + \\ln \\left(\\dfrac{\\sqrt{3}}{3} \\right) + \\ln \\left(\\dfrac{1}{9} \\right) \\\\'
    this.correction += '&= \\ln \\left(3^2 \\right) + \\ln \\left(\\sqrt{3} \\right) - \\ln (3) - \\ln \\left(3^2 \\right) \\\\'
    this.correction += '&= 2 \\ln (3) + \\dfrac{1}{2} \\ln (3) - \\ln (3) - 2 \\ln (3) \\\\'
    this.correction += '&= \\left(2 + \\dfrac{1}{2} - 1 - 2 \\right) \\ln (3) \\\\'
    this.correction += '&= -\\dfrac{1}{2} \\ln (3)'
    this.correction += '\\end{aligned}$<br>'
    this.correction += `La bonne réponse est donc la réponse $${miseEnEvidence(' -\\dfrac{1}{2} \\ln (3) ')}$`
  }


  versionAleatoire: () => void = () => {
    // Choix aléatoire du multiplicateur et du nombre

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

    this.enonce = `L'inverse du ${multiplicateurs} de ${nombre} est égal à :`
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
