import Exercice from '../Exercice'
import { randint } from '../../modules/outils'
import { texNombre } from '../../lib/outils/texNombre'
import { miseEnEvidence } from '../../lib/outils/embellissements'
export const titre = 'Somme de combinaisons.'
export const interactifReady = true
export const interactifType = 'mathLive'

export const dateDePublication = '20/4/2025'

export const uuid = '3634f'
export const refs = {
  'fr-fr': ['TSG1-06'],
  'fr-ch': []
}

/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Stéphane Guyon

*/
export default class NomExercice extends Exercice {
  constructor () {
    super()
    this.typeExercice = 'simple'
    this.nbQuestions = 1
  }

  nouvelleVersion () {
    const n = randint(4, 20)
    this.question = `Calculer $\\displaystyle\\sum_{k=0}^{k=${n}} \\dbinom{${n}}{k}=$`
    this.correction = 'C\'est un résultat de cours : $\\displaystyle\\sum_{k=0}^{k=n} \\dbinom{n}{k}=2^n$<br>'
    this.correction += `En application dans la situation de l'exercice :<br>$\\begin{aligned}\\displaystyle\\sum_{k=0}^{k=${n}} \\dbinom{${n}}{k}&=2^{${n}}\\\\&=${miseEnEvidence(texNombre(2 ** n))}.\\end{aligned}$`
    this.reponse = 2 ** n
  }
}
