import Exercice from '../../Exercice'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { texNombre } from '../../../lib/outils/texNombre'
import { choice } from '../../../lib/outils/arrayOutils'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
export const titre = 'Calculer des sommes ou différences'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '6e29b'
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Eric Elter - Gilles Mora
 * Référence
*/
export default class CalculsNombres extends Exercice {
  constructor () {
    super()
    this.titre = titre
    this.typeExercice = 'simple' // Cette ligne est très importante pour faire faire un exercice simple !
    this.nbQuestions = 1
    this.formatInteractif = 'calcul'
    this.optionsChampTexte = { texteAvant: ' $=$' }
    this.formatChampTexte = ''
    this.formatChampTexte = KeyboardType.clavierDeBase
  }

  nouvelleVersion () {
    this.listeCanEnonces = []
    this.listeCanReponsesACompleter = []
    const choix = choice([1, 2, 3, 4])
    if (choix === 1) {
      this.question = '$20+25$'
      this.correction = `$20+25=${miseEnEvidence(texNombre(45, 0))}$`
      this.reponse = 45
    }
    if (choix === 2) {
      this.question = '$25-20$'
      this.correction = `$25-20=${miseEnEvidence(texNombre(5, 0))}$`
      this.reponse = 5
    }
    if (choix === 3) {
      this.question = '$202+5$'
      this.correction = `$202+5=${miseEnEvidence(texNombre(207, 0))}$`
      this.reponse = 207
    }
    if (choix === 4) {
      this.question = '$202-5$'
      this.correction = `$202-5=${miseEnEvidence(texNombre(197, 0))}$`
      this.reponse = 197
    }
    this.canEnonce = this.question
    this.canReponseACompleter = ''
  }
}
