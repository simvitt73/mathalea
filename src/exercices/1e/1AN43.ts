import Exercice from '../Exercice'
import { randint } from '../../modules/outils'
import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { choice } from '../../lib/outils/arrayOutils'
import { texNombre } from '../../lib/outils/texNombre'
import { ecritureParentheseSiNegatif } from '../../lib/outils/ecritures'
export const titre = 'Déterminer un sinus ou un cosinus associé à un réel $x$'
export const interactifReady = true
export const interactifType = 'mathLive'
export const dateDePublication = '16/04/2025'
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Stéphane Guyon

 *
*/
export const uuid = 'd5acf'

export const refs = {
  'fr-fr': ['1AN43'],
  'fr-ch': []
}
export default class IntegraleAffine extends Exercice {
  constructor () {
    super()

    this.typeExercice = 'simple'

    this.nbQuestions = 1
  }

  nouvelleVersion () {
    const a = randint(-9, 9, 0)
    const solution = (100 - (a * a)) / 100
    const choix = choice([1, 2])// Choix entre cos (1) et sin (2)
    const ICos = choice(['\\left[-\\pi;\\pi\\right[', '\\left[0;\\pi\\right[']) // Intervalle pour le sinus
    const ISin = choice(['\\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right[', '\\left[\\dfrac{\\pi}{2};\\dfrac{3\\pi}{2}\\right[']) // Intervalle pour le cosinus
    // this.consigne = 'Déterminer le sinus ou le cosinus associé à un réel $x$.'
    this.formatChampTexte = KeyboardType.clavierFullOperations
    if (choix === 1) { this.question = `Soit $x\\in ${ISin}$. On donne $\\sin(x)=${texNombre(a / 10)}$. Déterminer $\\cos(x)$.` } else { this.question = `Soit $x\\in ${ICos}$. On donne $\\cos(x)=${texNombre(a / 10)}$. Déterminer $\\sin(x)$` }

    if (this.interactif && choix === 1) { this.question += '<br>$\\cos(x)=$ ' }
    if (this.interactif && choix === 2) { this.question += '<br>$\\sin(x)=$ ' }
    this.correction = 'On sait que pour tout $x\\in \\mathbb{R}$, $\\sin^2(x)+\\cos^2(x)=1$.<br>'
    if (choix === 1) // On cherche le cos
    {
      this.correction += ' Donc $\\cos^2(x)=1-\\sin^2(x)$.<br> Ce qui donne deux solutions : $\\cos(x)=\\sqrt{1-\\sin^2(x)}$ ou $\\cos(x)=-\\sqrt{1-\\sin^2(x)}$.<br>'
      if (ISin === '\\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right[') {
        this.correction += ' Comme $x\\in \\left[-\\dfrac{\\pi}{2};\\dfrac{\\pi}{2}\\right[$, on a $\\cos(x)\\geq 0$.<br>'
        this.correction += `On en déduit donc que <br>$\\begin{aligned}
        \\cos(x)&=\\sqrt{1-\\sin^2(x)}\\\\
        &=\\sqrt{1-${texNombre(a / 10)}^2}\\\\
        &=\\sqrt{${texNombre(solution)}}\\end{aligned}$`
      }
      if (ISin === '\\left[\\dfrac{\\pi}{2};\\dfrac{3\\pi}{2}\\right[') {
        this.correction += ' Comme $x\\in \\left[\\dfrac{\\pi}{2};\\dfrac{3\\pi}{2}\\right[$, on a $\\cos(x)\\geq 0$.<br>'
        this.correction += `On en déduit donc que <br>$\\begin{aligned}
        \\cos(x)&=-\\sqrt{1-\\sin^2(x)}\\\\
        &=-\\sqrt{1-${texNombre(a / 10)}^2}\\\\
        &=-\\sqrt{${texNombre(solution)}}\\end{aligned}$`
      }
    }
    if (choix === 2) // On cherche le sin
    {
      this.correction += ' Donc $\\sin(x)=\\sqrt{1-\\cos^2(x)}$ ou $\\sin(x)=-\\sqrt{1-\\cos^2(x)}$.<br>'
      if (ICos === '\\left[-\\pi;\\pi\\right[') {
        this.correction += ' Comme $x\\in \\left[-\\pi;\\pi\\right[$, on a $\\sin(x)\\leq 0$.<br>'
        this.correction += `On en déduit donc que <br>$\\begin{aligned}
        \\sin(x)&=-\\sqrt{1-\\cos^2(x)}\\\\
        &=-\\sqrt{1-${texNombre(a / 10)}^2}\\\\
        &=-\\sqrt{${texNombre(solution)}}\\end{aligned}$`
      }
      if (ICos === '\\left[0;\\pi\\right[') {
        this.correction += ' Comme $x\\in \\left[0;\\pi\\right[$, on a $\\sin(x)\\geq 0$.<br>'
        this.correction += `On en déduit donc que <br>$\\begin{aligned}
            \\sin(x)&=\\sqrt{1-\\cos^2(x)}\\\\
            &=\\sqrt{1-${ecritureParentheseSiNegatif(a / 10)}^2}\\\\
            &=\\sqrt{${texNombre(solution)}}\\end{aligned}$`
      }
    }
    if (ICos === '\\left[0;\\pi\\right[' || ISin === '\\left[\\dfrac{\\pi}{2};\\dfrac{3\\pi}{2}\\right[') { this.reponse = '\\sqrt{solution}' } else { this.reponse = '\\sqrt{solution}' }
    this.canEnonce = this.question
    this.canReponseACompleter = ''
  }
}
