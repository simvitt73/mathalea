import Exercice from '../../Exercice'
import { randint } from '../../../modules/outils'
export const titre = 'Raisonnement par récurrence'
export const interactifReady = true
export const interactifType = 'mathLive'

export const dateDePublication = '19/02/2025'

export const uuid = '667d6' // Quand on exécute pnpm start la première fois, le terminal renvoie une référence d'uuid, à copier-coller ici
export const refs = {
  'fr-fr': ['canTSpeS11'],
  'fr-ch': []
}

/**
 * Modèle d'exercice très simple pour la course aux nombres
 * @author Stéphane Guyon

*/
export default class recurrence extends Exercice {
  constructor () {
    super()
    this.typeExercice = 'simple'
    this.nbQuestions = 1
    this.optionsChampTexte = { texteAvant: '<br> $n$' }
  }

  nouvelleVersion () {
    const n = randint(2, 8)
    const p = randint(2, 8, n)
    let reponse = ''
    this.question = `Une propriété $\\mathcal{P}_n$ est vraie pour $n=${n}$ et est héréditaire pour tout entier $p\\geqslant ${p}$.`
    this.question += '<br>Pour quelle(s) valeur(s) de $n$ la propriété $\\mathcal{P}_n$ est-elle vraie ?'
    if (p < n) {
      this.correction = `Comme $n=${n}>p=${p}$, on peut dire que la propriété $\\mathcal{P}_n$ est vraie pour une valeur à partir de laquelle elle est héréditaire. `
      this.correction += `<br>$\\mathcal{P}_n$ est donc vraie à partir du rang $n=${n}$.`
      reponse = `$\\geqslant ${n}$`
    } else {
      this.correction = `Comme $n=${n} < p=${p}$, il n'existe pas d'entier $k$ pour lequel $\\mathcal{P}_k$ est vraie et héréditaire.`
      this.correction += `<br> $\\mathcal{P}_n$ est donc vraie uniquement en $n=${n}$.`
      reponse = `=${n}`
    }
    this.reponse = reponse
  }
}
