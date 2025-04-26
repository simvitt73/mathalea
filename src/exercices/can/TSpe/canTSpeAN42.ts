import Exercice from '../../Exercice'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import RepereBuilder from '../../../lib/2d/RepereBuilder'
import { courbe, IntegraleComptable } from '../../../lib/2d/courbes'
import { fixeBordures, mathalea2d } from '../../../modules/2dGeneralites'
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
    const f = (x: number) => 10 / x
    const repere = new RepereBuilder({ xMin: 0, xMax: 10, yMin: 0, yMax: 10 })
      .setThickX({ xMin: 0, xMax: 10, dx: 1 })
      .setThickY({ yMin: 0, yMax: 10, dy: 1 })
      .setLabelX({ xMin: 0, xMax: 10, dx: 1 })
      .setGrille({ grilleX: { dx: 0.5, xMin: 0, xMax: 10 }, grilleY: { dy: 0.5, yMin: 0, yMax: 10 } })
      .buildStandard()
    const cF = courbe(f, { repere, color: 'blue', epaisseur: 1, xMin: 0.5, xMax: 10.1, step: 0.1 })
    const integrale = new IntegraleComptable(f, { repere, xMin: 1, xMax: 10, pas: 0.5, sup: false, colorPositif: 'red', colorNegatif: 'blue' })
    const integrale2 = new IntegraleComptable(f, { repere, xMin: 1, xMax: 10, pas: 0.5, sup: true, colorPositif: 'red', colorNegatif: 'blue' })

    const objets = [repere, integrale, integrale2, cF]
    const fig = mathalea2d(Object.assign({ pixelsParCm: 30, scale: 1 }, fixeBordures(objets)), objets)
    this.reponse = '0'
    this.question = `Donner un encadrement par deux entiers de $\\int_{1}^{10}\\frac{10}{x}.dx$.<br>
    
    ${fig}`
  }
}
