import { choice } from '../../../lib/outils/arrayOutils'
import { miseEnEvidence, texteEnCouleur } from '../../../lib/outils/embellissements'
import { simplificationDeFractionAvecEtapes, texFractionReduite } from '../../../lib/outils/deprecatedFractions'
import { texNombre } from '../../../lib/outils/texNombre'
import Exercice from '../../Exercice'
import { randint } from '../../../modules/outils'
import { arrondi } from '../../../lib/outils/nombres'
export const titre = 'Déterminer un pourcentage de proportion'
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcReady = true
export const amcType = 'AMCNum'

/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Gilles Mora
 * reprise de can5P02 qui a été cassé en 2

 * Date de publication
*/
export const dateDeModifImportante = '06/07/2025'
export const uuid = '1a706'

export const refs = {
  'fr-fr': ['can6P07'],
  'fr-ch': []
}
export default class PoucentageProportion extends Exercice {
  constructor () {
    super()
    this.typeExercice = 'simple'
    this.nbQuestions = 1
    this.spacing = 1.5
    this.spacingCorr = 1.5
  }

  nouvelleVersion () {
    const listeCarac = [['filles', 'Elles'], ['garçons', 'Ils'], ['sportifs', 'Ils'], ['musiciens', 'Ils']]
    let a, b, c, n, d, carac, choix
    switch (randint(1, 2)) {
      case 1 :
        if (choice([true, false])) {
          a = choice([20, 40])
          b = choice([4, 8, 16])
          carac = choice(listeCarac)
          n = carac[0]
          d = carac[1]
          this.question = ` Dans un groupe de $${a}$ enfants, $${b}$  sont des ${n}.<br>
      ${d} représentent ..... $\\%$ du groupe.`
          this.optionsChampTexte = { texteAvant: '<br>', texteApres: '$\\%$' }
          this.correction = `La proportion de ${n} est donnée par $\\dfrac{${b}}{${a}}=${texFractionReduite(b, a)}=${texNombre(b / a)}$, soit $${miseEnEvidence(texNombre((b / a) * 100))}$ $\\%$.`
          this.reponse = arrondi((b / a) * 100)
        } else {
          a = choice([30, 60])
          b = choice([6, 12, 18, 24])
          carac = choice(listeCarac)
          n = carac[0]
          d = carac[1]
          this.question = ` Dans un groupe de $${a}$ enfants, $${b}$  sont des ${n}.<br>
          ${d} représentent ..... $\\%$ du groupe.`
          this.optionsChampTexte = { texteAvant: '<br>', texteApres: '$\\%$' }
          this.correction = `La proportion de ${n} est donnée par $\\dfrac{${b}}{${a}}=${texFractionReduite(b, a)}=${texNombre(b / a)}$, soit $${miseEnEvidence(texNombre((b / a) * 100))}$ $\\%$.`
          this.reponse = arrondi((b / a) * 100)
        }
        this.canEnonce = 'Compléter.'
        this.canReponseACompleter = this.question//
        break

      case 2:

        a = arrondi(randint(1, 12) * 10)
        b = arrondi(a * randint(1, 6) / 10)
        c = (b / a) * 100
        choix = choice([true, false])
        this.question = `Le prix d'un article coûtant $${a}$ euros ${choix ? 'baisse' : 'augmente'} de $${b}$ euros.<br>
          Quel est le pourcentage ${choix ? 'de réduction' : 'd’augmentation'} de ce prix ?`
        this.optionsChampTexte = { texteAvant: '<br>', texteApres: '$\\%$' }
        this.correction = `${choix ? 'La réduction' : 'L’augmentation'} est $${b}$ euros sur un total de $${a}$ euros.<br>
          Le pourcentage  ${choix ? 'de baisse' : 'd’augmentation'} est donné par le quotient : $\\dfrac{${b}}{${a}}${simplificationDeFractionAvecEtapes(b, a)}=${texNombre(b / a)}= ${miseEnEvidence(texNombre((b / a) * 100))}\\,\\%$.
          `
        this.correction += texteEnCouleur(`<br> Mentalement : <br>
        Calculez $10 \\%$ du prix. <br>${choix ? 'La réduction' : 'L’augmentation'} est un multiple de $10 \\%$.
             `)
        this.reponse = c
        this.canEnonce = this.question// 'Compléter'
        this.canReponseACompleter = '$\\ldots$ $\\%$'
        break
    }
  }
}
