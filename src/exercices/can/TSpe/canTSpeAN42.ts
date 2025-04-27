import Exercice from '../../Exercice'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import RepereBuilder from '../../../lib/2d/RepereBuilder'
import { Courbe, courbe, IntegraleComptable } from '../../../lib/2d/courbes'
import { fixeBordures, mathalea2d } from '../../../modules/2dGeneralites'
import { randint } from '../../../modules/outils'
import { interpolationDeLagrange } from '../../../lib/mathFonctions/outilsMaths'
import { range } from '../../../lib/outils/nombres'
import { texNombre } from '../../../lib/outils/texNombre'
export const titre = 'Encadrer une intégrale'
export const interactifReady = true
export const interactifType = 'mathLive'

export const dateDePublication = '26/04/2025'

export const uuid = '667d9'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

/**
 * Exercice test
 * @author Jean-Claude Lhote

*/
export default class IntegraleSurface extends Exercice {
  constructor () {
    super()
    this.typeExercice = 'simple'
    this.nbQuestions = 1
    this.optionsChampTexte = { texteAvant: '<br> $n$' }
    this.formatChampTexte = KeyboardType.clavierCompareAvecNombres
  }

  nouvelleVersion () {
    let cF: Courbe
    do {
      const a = randint(1, 8)
      const b = randint(0, 8, a)
      const c = randint(0, 8, [a, b])
      const d = randint(1, 8, [a, b, c])
      const f = interpolationDeLagrange([{ x: 0, y: a / 2 }, { x: 2.5, y: b / 2 }, { x: 4, y: c / 2 }, { x: 5, y: d / 2 }]).fonction
      const yMax = Math.max(...range(10).map(n => n / 2).map(x => f(x))) + 1
      const integrale = new IntegraleComptable(f, { xMin: 0, xMax: 5, pas: 0.5, sup: false, colorPositif: 'red', colorNegatif: 'blue' })
      const integrale2 = new IntegraleComptable(f, { xMin: 0, xMax: 5, pas: 0.5, sup: true, colorPositif: 'red', colorNegatif: 'blue' })
      const repere = new RepereBuilder({ xMin: 0, xMax: 5, yMin: 0, yMax })
        .setThickX({ xMin: 0, xMax: 5.5, dx: 1 })
        .setThickY({ yMin: 0, yMax, dy: 1 })
        .setLabelX({ xMin: 0, xMax: 5.5, dx: 1 })
        .setLabelY({ yMin: -2, yMax, dy: 1 })
        .setGrille({ grilleX: { dx: 0.5, xMin: 0, xMax: 5 }, grilleY: { dy: 0.5, yMin: 0, yMax } })
        .buildStandard()
      cF = courbe(f, { repere, color: 'blue', epaisseur: 1, xMin: 0, xMax: 5, step: 0.1 })

      const objets = [repere, integrale, integrale2, cF]
      const fig = mathalea2d(Object.assign({ pixelsParCm: 30, scale: 1 }, fixeBordures([repere, cF])), repere, cF)
      const figCorr = mathalea2d(Object.assign({ pixelsParCm: 30, scale: 1 }, fixeBordures(objets)), objets)
      this.reponse = '0'
      this.question = `On a représenté ci-dessous graphiquement la fonction $f$ définie sur $[0;5]$.<br>
      Donner un encadrement par deux entiers de $\\int_{0}^{5}f(x).dx$.<br>
      
      ${fig}`
      const aireSup = integrale2.objets?.map(p => p.aire).reduce((a, b) => a + b)
      const aireInf = integrale.objets?.map(p => p.aire).reduce((a, b) => a + b)
      this.correction = `On a représenté ci-dessous graphiquement la fonction $f$ définie sur $[0;5]$.<br>
      Un encadrement par deux entiers de $\\int_{0}^{5}f(x).dx$ est donné par les aires des zones colorées.<br>
      Sous la courbe, on a $${aireInf * 4}$ carreaux et au-dessus de la courbe, on a $${aireSup * 4 - aireInf * 4}$ carreaux de plus, soit $${aireSup * 4}$ carreaux.<br>
      Comme l'unité d'aire est de $4$ carreaux, on obtient en divisant par 4 :<br>
      $${texNombre(aireInf, 2)}>\\int_{0}^{5}f(x).dx>${texNombre(aireSup, 2)}$<br>
      ${figCorr}`
    } while (cF.objets == null || Math.min(...cF.objets.map(p => p.bordures[1])) < 0)
  }
}
