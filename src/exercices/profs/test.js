// import { ComputeEngine } from '@cortex-js/compute-engine'
import Exercice from '../deprecatedExercice.js'
import { listeQuestionsToContenu, randint } from '../../modules/outils.js'
import { fonctionComparaison, functionCompare } from '../../lib/interactif/comparisonFunctions.ts'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { ComputeEngine } from '@cortex-js/compute-engine'

export const titre = 'Eric fait ses tests interactifs.'
export const interactifReady = true
export const interactifType = 'mathLive'

export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

export const uuid = 'testEE'

/* const engine = new ComputeEngine()
const expr1 = engine.parse('-3 \\times x', { canonical: true })
const expr2 = engine.parse('x \\times (-3)', { canonical: true })
console.info(expr1.isEqual(expr2)) // -> false but should be true
const expr3 = engine.parse('\\frac{-3-\\sqrt{41}}{4}', { canonical: true })
const expr4 = engine.parse('-\\frac34-\\frac{\\sqrt{41}}{4}', { canonical: true })
console.info(expr3.isEqual(expr4)) // -> true as it should
*/
const engine = new ComputeEngine()
// console.log(engine.parse('(2+x)^2').json)
// console.log(engine.parse('(2+x)(2+x)').json)
/* console.info(
  engine
    .parse('(2+x)^2')
    .expand()
    .simplify()
    .isSame(engine.parse('(2+x)(2+x)').expand().simplify())
)
console.log(engine.parse('(2+x)^2').simplify().isSame(engine.parse('(2+x)(2+x)').simplify()))
console.log(engine.parse('(2+x)^2').isSame(engine.parse('(2+x)(2+x)'))) */
let expr1 = engine.parse('-0.07n+18')
let expr2 = engine.parse('-0.07n+18')
console.log(expr1.isEqual(expr2), expr1.json.toString()) // -> false but should be true
console.log(expr1.isSame(expr2), expr2.json.toString()) // -> false but should be true
expr1 = engine.parse('-0.07\\times n+18')
expr2 = engine.parse('-0.07n+18')
console.log(expr1.isEqual(expr2), expr1.json.toString()) // -> false but should be true
console.log(expr1.isSame(expr2), expr2.json.toString()) // -> false but should be true
/* const expr3 = engine.parse('\\frac{-3-\\sqrt{41}}{4}')
const expr4 = engine.parse('-\\frac34-\\frac{\\sqrt{41}}{4}')
console.log(expr3.isEqual(expr4)) // -> true as it should */
// -> ["Add",12,["Delimiter",["Negate",2]]]

// console.info(engine.parse('(2+x)^2').isEqual(engine.parse('(2+x)(2+x)'))) // -> true OK of course
/* console.info(engine.parse('2^6').isEqual(engine.parse('-2^6'))) // -> false OK
console.info(engine.parse('(-2)^6').isEqual(engine.parse('2^6'))) // -> true
console.info(engine.parse('(-2)^6').isSame(engine.parse('-2^6'))) // -> false
*/

/* console.info('-\\dfrac12'.replace(/^-\\dfrac(?:(\d)(\d)|{(-?\d+)}{(-?\d+)})$/i, function (match, p1, p2, p3, p4) {
  return '\\dfrac{' + ((p1 || p3) * (p2 || p4) > 0 ? '-' : '') + Math.abs(p1 || p3) + '}{' + Math.abs(p2 || p4) + '}'
}))
console.info('\\dfrac{-12}{-13}'.replace(/^-\\dfrac(?:(\d)(\d)|{(-?\d+)}{(-?\d+)})$/i, function (match, p1, p2, p3, p4) {
  return '\\dfrac{' + ((p1 || p3) * (p2 || p4) > 0 ? '-' : '') + Math.abs(p1 || p3) + '}{' + Math.abs(p2 || p4) + '}'
}))
console.info('-\\dfrac{-12}{-13}'.replace(/^-\\dfrac(?:(\d)(\d)|{(-?\d+)}{(-?\d+)})$/i, function (match, p1, p2, p3, p4) {
  return '\\dfrac{' + ((p1 || p3) * (p2 || p4) > 0 ? '-' : '') + Math.abs(p1 || p3) + '}{' + Math.abs(p2 || p4) + '}'
}))
console.info('-\\dfrac{-12}{-13}'.replace(/^\\dfrac(?:(\d)(\d)|{(-?\d+)}{(-?\d+)})$/i, function (match, p1, p2, p3, p4) {
  return '\\dfrac{' + ((p1 || p3) * (p2 || p4) < 0 ? '-' : '') + Math.abs(p1 || p3) + '}{' + Math.abs(p2 || p4) + '}'
}))
*/

export default function desTestsPourInteractivité () {
  Exercice.call(this)
  // this.consigne = 'Quel est le résultat des calculs suivants ?'
  this.consigne = 'Écrire ce nombre sous forme d\'une somme.'
  this.nouvelleVersion = function () {
    for (let i = 0, texte, texteCorr, cpt = 0, a, b; i < this.nbQuestions && cpt < 50;) {
      a = randint(1, 12)
      b = randint(2, 12)
      console.log(engine.parse('4e3').toLatex({ notation: 'scientific', avoidExponentsInRange: [0, 0] })) // 4\cdot10^{3}
      console.log(engine.parse('1000').toLatex({ notation: 'scientific', avoidExponentsInRange: [0, 0] })) // 10^{3} and why it is not 1\cdot10^{3}
      // console.info(fonctionComparaison('16^1', '16', { sansExposantUn: true }).isOk)

      const reponse = '\\sqrt{40}'
      // const reponse = '[-2;5[\\cup]5;+\\infty['
      // const reponse = new FractionEtendue(-20, 50).valeurDecimale
      // const enonce = '$Donner l\'ensemble des nombres entiers non nuls positifs inférieurs à 4 +' + reponse + '$ : $'
      // const enonce = '$Donner l\'ensemble des nombres entiers non nuls positifs inférieurs à 4 :$'
      const enonce = reponse
      // const enonce = '$Donner une valeur numér égale à 0.4 : $'
      // reponse = reponse.toString()
      texteCorr = ''
      // texte = `$${enonce}=$` + ajouteChampTexteMathLive(this, i, 'inline15 college6eme ' + KeyboardType.clavierDeBaseAvecFraction)
      // texte = `$${enonce}$` + ajouteChampTexteMathLive(this, i, KeyboardType.clavierFullOperations)
      texte = `$${enonce}$=` + ajouteChampTexteMathLive(this, i, KeyboardType.clavierEnsemble)
      // texte += `$${enonce}$` + ajouteChampTexteMathLive(this, i + 1, ' inline nospacebefore ' + KeyboardType.clavierDeBaseAvecFraction)
      // texte += ajouteFeedback(this, i + 1)
      // handleAnswers(this, i, { reponse: { value: reponse, compare: expressionDeveloppeeEtNonReduiteCompare } })
      // handleAnswers(this, i, { reponse: { value: reponse } })
      // handleAnswers(this, i, { reponse: { value: reponse, compare: fonctionComparaison, options: { nombreDecimalSeulement: true } } })
      handleAnswers(this, i, { reponse: { value: reponse, compare: functionCompare } })

      if (this.questionJamaisPosee(i, a, b)) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.listeQuestions.push(texte)
        this.listeCorrections.push(texteCorr)
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}

// rechercher toutes les fonctionComparaison sans option et vérifier que c'est bien du du nombreDecimalSeulement.

// can1XXXXXXX
// can6N18
