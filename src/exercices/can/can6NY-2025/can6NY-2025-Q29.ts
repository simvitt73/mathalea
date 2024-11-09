import Exercice from '../../Exercice'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { fonctionComparaison } from '../../../lib/interactif/comparisonFunctions'
import { randint } from '../../../modules/outils'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { texNombre } from '../../../lib/outils/texNombre'
export const titre = ''
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '6c365'
/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Eric Elter - Gilles Mora
 * Référence
*/
export default class CalculDivers extends Exercice {
  constructor () {
    super()
    this.titre = titre
    this.typeExercice = 'simple' // Cette ligne est très importante pour faire faire un exercice simple !
    this.nbQuestions = 1
    this.formatInteractif = 'calcul'
    this.optionsChampTexte = { texteApres: 'heures' }
    this.compare = fonctionComparaison
    this.formatChampTexte = KeyboardType.clavierDeBase
  }

  nouvelleVersion () {
    this.listeCanEnonces = []
    this.listeCanReponsesACompleter = []
    const date = randint(27, 30)
    const nbre = randint(1, 23)
    this.question = `Nous sommes le $${date}$ décembre $2024$. Il est $${nbre}$ h${nbre < 12 ? ' du matin' : ''}.<br>
            Combien  d'heures faut-il attendre avant de pouvoir se souhaiter la nouvelle année $2025$ (à minuit le $31$ décembre $2024$) ? <br>`
    this.correction = ` Jusqu'au $${date}$ décembre minuit, il y a $${24 - nbre}$ heures.  <br>
        Du $${date + 1}$ (0 h) au $31$ décembre (minuit), il y a $${31 - date}$ jour${31 - date > 1 ? 's' : ''}, soit $${24 * (31 - date)}$ heures. <br>
        Il faudra donc attendre $${24 * (31 - date)}+${24 - nbre}$ heures, soit $${miseEnEvidence(texNombre(24 * (31 - date) + 24 - nbre, 0))}$ heures avant de se souhaiter la bonne année.
       `
    this.reponse = 24 * (31 - date) + 24 - nbre
    if (this.interactif) { this.question += '<br>' }
    this.canEnonce = this.question
    this.canReponseACompleter = ''
  }
}
