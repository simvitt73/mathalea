import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { choice } from '../../lib/outils/arrayOutils'
import { miseEnEvidence, texteEnCouleur } from '../../lib/outils/embellissements'
import { texNombre } from '../../lib/outils/texNombre'
import FractionEtendue from '../../modules/FractionEtendue'
import { randint } from '../../modules/outils'
import ExerciceSimple from '../ExerciceSimple'

export const titre = 'Calculer la somme des termes d\'une suite arithmétique'
export const interactifReady = true
export const interactifType = 'mathLive'

export const dateDePublication = '30/11/2021'

/**
 * Calculer \sum_{k=0}^n u_k, avec n et (u_n) (suite arithmétique) données
 * @author Rémi Angot
*/
export const uuid = 'cfac9'

export const refs = {
  'fr-fr': ['1AL11-8b'],
  'fr-ch': []
}
export default class SommeSuiteArithmetique extends ExerciceSimple {
  constructor () {
    super()
    this.typeExercice = 'simple'
    this.nbQuestions = 1
    this.spacingCorr = 1.5
    this.consigneCorrection = 'Rappel : $1 + 2 + 3 + ... + n = \\dfrac{n(n + 1)}{2}$'
    this.formatChampTexte = KeyboardType.clavierDeBase
    this.optionsChampTexte = { texteAvant: '<br>$S=$' }
    this.versionQcm = false
  }

  nouvelleVersion () {
    let n, r, u0 : number

    if (this.versionQcm) { r = randint(2, 5)
      n = randint(1, 2) * 10-1
   u0 = randint(1, 5)
    }
    else { r = randint(3, 10)
     n = randint(2, 4) * 10
    u0 = randint(1, 10)
    }
    const fraction = new FractionEtendue(u0+u0+n*r,2)
    const u = choice(['u', 'v', 'w'])
    this.question = `Soit $${u}$ la suite arithmétique de premier terme $${u}_0 = ${u0}$ et de raison $${r}$.`
     if (this.versionQcm) {this.question += `<br>Calculer $\\displaystyle S =\\sum_{k=0}^{k=${n}}${u}_k$.`}
     else {this.question += `<br>Calculer $\\displaystyle S = ${u}_0 + ${u}_1 + ... + ${u}_{${n}} =\\sum_{k=0}^{k=${n}}${u}_k$.`}
    this.reponse = (n + 1) * (u0 + u0 + n * r) / 2
    this.correction = `On propose deux corrections possibles : <br>
    ${texteEnCouleur('Correction 1 : ')}<br>
    $S = ${u0} + (${u0} + ${r}) + (${u0} + 2\\times${r}) + ... + (${u0} + ${n} \\times ${r})$`
    this.correction += `<br>$\\phantom{S} = (\\underbrace{${u0} + ${u0} + ... + ${u0}}_{${n + 1}\\times ${u0}}) + ${r} \\times (1 + 2 + ... + ${n})$`
    this.correction += `<br>$\\phantom{S} = ${n + 1} \\times ${u0} + ${r} \\times \\dfrac{${n}\\times${n + 1}}{2}$.`
     this.correction += `<br>$\\phantom{S} = ${miseEnEvidence(texNombre(this.reponse))}$`
     this.correction += ` <br><br>   ${texteEnCouleur('Correction 2 : ')}<br>On peut aussi appliquer la relation de cours qui calcule la somme des $(n+1)$ premiers termes d'une suite arithmétique :<br>
     $\\begin{aligned}S_n&=(n+1) \\times \\dfrac{u_0+u_n}{2}\\\\
     &=${n + 1} \\times \\dfrac{u_0+u_{${n}}}{2}&\\text{avec } u_{${n}}=u_0+${n}\\times r \\\\
     &= ${n + 1} \\times \\dfrac{${u0}+(${u0}+${n}\\times${r})}{2}\\\\
     &= ${n + 1} \\times \\dfrac{${u0+u0+n*r}}{2}\\\\
     &= ${n + 1} \\times ${fraction.texFractionSimplifiee}\\\\
     &=${miseEnEvidence(texNombre(this.reponse))}\\\\
     \\end{aligned}.$`
   
    this.distracteurs=[
      (n + 1) * (u0 + u0 + n * r) / 2,
      n  * (u0 + u0 + n * r) / 2,
      (n + 1) * (u0 + u0 + n * r),
      n  * (u0 + u0 + n * r) / 2 +randint(-4,4,0),  
        n * (u0 + u0 + n * r)
    ]
  }
}
