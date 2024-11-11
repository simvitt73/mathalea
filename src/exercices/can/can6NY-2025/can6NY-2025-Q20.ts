import Exercice from '../../Exercice'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { texNombre } from '../../../lib/outils/texNombre'
import { fonctionComparaison } from '../../../lib/interactif/comparisonFunctions'
import { randint } from '../../../modules/outils'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { handleAnswers } from '../../../lib/interactif/gestionInteractif'
export const titre = 'Calculer une somme/différence'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '14867'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Gilles Mora
 * Référence
*/
export default class CalculDivers extends Exercice {
  constructor () {
    super()
    this.typeExercice = 'simple' // Cette ligne est très importante pour faire faire un exercice simple !
    this.nbQuestions = 1
    this.nbQuestionsModifiable = false
    this.optionsChampTexte = { texteAvant: ' $=$' }
    this.formatInteractif = 'fillInTheBlank'
    this.formatChampTexte = KeyboardType.clavierDeBase
    this.compare = fonctionComparaison
    this.optionsDeComparaison = { nombreDecimalSeulement: true }
  }

  nouvelleVersion () {
    this.listeCanEnonces = []
    this.listeCanReponsesACompleter = []
    this.consigne = 'Compléter l\'égalité.'
    switch (randint(1, 6)) {
      case 1 :
        this.reponse = texNombre(1000, 0)
        this.question = `(${texNombre(2, 0)}\\times %{champ1}) +25=${texNombre(2025, 0)}`
        this.correction = `$(${texNombre(2, 0)}\\times ${miseEnEvidence(this.reponse)}) +25=${texNombre(2025, 0)}$`
        handleAnswers(this, 0, { champ1: { value: this.reponse } })
        this.canReponseACompleter = `$(${texNombre(2, 0)}\\times \\ldots) +25=${texNombre(2025, 0)}$`
        break
      case 2 :
        this.reponse = texNombre(100, 0)
        this.question = `(${texNombre(20, 0)}\\times %{champ1}) +25=${texNombre(2025, 0)}`
        this.correction = `$(${texNombre(20, 0)}\\times ${miseEnEvidence(this.reponse)}) +25=${texNombre(2025, 0)}$`
        handleAnswers(this, 0, { champ1: { value: this.reponse } })
        this.canReponseACompleter = `$(${texNombre(20, 0)}\\times \\ldots) +25=${texNombre(2025, 0)}$`
        break
      case 3 :
        this.reponse = texNombre(10, 0)
        this.question = `(${texNombre(200, 0)}\\times %{champ1}) +25=${texNombre(2025, 0)}`
        this.correction = `$(${texNombre(200, 0)}\\times ${miseEnEvidence(this.reponse)}) +25=${texNombre(2025, 0)}$`
        handleAnswers(this, 0, { champ1: { value: this.reponse } })
        this.canReponseACompleter = `$(${texNombre(200, 0)}\\times \\ldots) +25=${texNombre(2025, 0)}$`
        break
      case 4 :
        this.reponse = texNombre(25, 0)
        this.question = `(${texNombre(2, 0)}\\times ${texNombre(1000, 0)}) +%{champ1}=${texNombre(2025, 0)}`
        this.correction = `$(${texNombre(2, 0)}\\times ${texNombre(1000, 0)}) + ${miseEnEvidence(this.reponse)}=${texNombre(2025, 0)}$`
        handleAnswers(this, 0, { champ1: { value: this.reponse } })
        this.canReponseACompleter = `$(${texNombre(2, 0)}\\times ${texNombre(1000, 0)}) + \\ldots=${texNombre(2025, 0)}$`
        break
      case 5 :
        this.reponse = texNombre(1825, 0)
        this.question = `(${texNombre(2, 0)}\\times 100) +%{champ1}=${texNombre(2025, 0)}`
        this.correction = `$(${texNombre(2, 0)}\\times 100) + ${miseEnEvidence(this.reponse)}=${texNombre(2025, 0)}$`
        handleAnswers(this, 0, { champ1: { value: this.reponse } })
        this.canReponseACompleter = `$(${texNombre(2, 0)}\\times 100) + \\ldots=${texNombre(2025, 0)}$`
        break
      case 6 :
        this.reponse = texNombre(2005, 0)
        this.question = `(${texNombre(2, 0)}\\times 10) +%{champ1}=${texNombre(2025, 0)}`
        this.correction = `$(${texNombre(2, 0)}\\times 10) + ${miseEnEvidence(this.reponse)}=${texNombre(2025, 0)}$`
        handleAnswers(this, 0, { champ1: { value: this.reponse } })
        this.canReponseACompleter = `$(${texNombre(2, 0)}\\times 10) + \\ldots=${texNombre(2025, 0)}$`
        break
    }
    this.canEnonce = this.consigne
  }
}
