import Exercice from '../../Exercice'
import { randint } from '../../../modules/outils'
import { complex, add } from 'mathjs'
import { ecritureAlgebrique, ecritureAlgebriqueSauf1, rienSi1 } from '../../../lib/outils/ecritures'
import { texNombre } from '../../../lib/outils/texNombre'
export const titre = 'Résoudre |z-z_A|=r'
export const interactifReady = true
export const interactifType = 'mathLive'

export const dateDePublication = '4/5/2024'

export const uuid = '88e43' // Quand on exécute pnpm start la première fois, le terminal renvoie une référence d'uuid, à copier-coller ici
export const refs = {
  'fr-fr': ['canTEC2-03'],
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
    this.nbQuestions = 4
  }

  nouvelleVersion () {
    const a = randint(-7, 7, 0)
    const b = randint(-7, 7, 0)
    const r = randint(1, 10)

    this.question = 'Soit $z\\in\\mathbb{C}$. <br>'
    this.question += `Déterminer l'ensemble des points $M$ du plan complexe, d'affixe $z$, qui vérifient $\\vert z${-a}${ecritureAlgebriqueSauf1(-b)}\\text{i}\\vert=${r}\\quad (1)$`
    this.correction = `Soit $A$ le point du plan complexe d'affixe $z_A=${a}${ecritureAlgebriqueSauf1(b)}\\text{i}$.`
    this.correction += `<br>On sait que $AM=\\vert z-z_A\\vert=\\vert z${ecritureAlgebrique(-a)}${ecritureAlgebriqueSauf1(-b)}\\text{i}\\vert$.<br>`
    this.correction += `<br>On montre donc que  $(1) \\iff AM=${r}$`
    this.correction += `<br>Les points $M$ solutions correspondent donc à l'ensemble des points du plan complexe, situés à une distance de ${r} unités du point $A$.<br>`
     this.correction += `C'est donc le cercle de centre $A$ et de rayon ${r}.`
      this.correction += `<br>$S=\\mathcal C(A;${r})$.`
    this.reponse = a + b
  }
}
