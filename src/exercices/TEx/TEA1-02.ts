import Exercice from '../Exercice'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { ecritureAlgebrique } from '../../lib/outils/ecritures'

export const titre = "Résoudre une équation de congruence du type $x + a \\equiv b [k]$"
export const interactifReady = true
export const interactifType = 'mathLive'
export const dateDePublication = '26/11/2025'
export const uuid = 'ab8e2' // à adapter

export const refs = {
  'fr-fr': ['TEA1-02'],
  'fr-ch': [],
}

export default class ExerciceEquationCongruence extends Exercice {
  constructor() {
    super()
    this.consigne = ''
    this.nbQuestions = 1
  }

  nouvelleVersion() {
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      let texte = ''
      let texteCorr = ''

      // k, a, b aléatoires
      const k = randint(3, 10)

      let a: number
      do a = randint(-50, 50)
      while (a >= -9 && a <= 9)

      let b: number
      do b = randint(-50, 50)
      while (b >= -9 && b <= 9)

      
      // équation : x + a ≡ b [k]
      const diff = b - a

      // réduction de diff modulo k : solution x ≡ diff [k]
      let r = diff % k
      if (r < 0) r += k // r dans [0, k-1]

      const q = (diff - r) / k

      texte = `Résoudre dans $\\mathbb{Z}$ l'équation suivante : $ x ${ecritureAlgebrique(a)} \\equiv ${b} \\,\\,[${k}]$.<br>
      On donnera le plus petit entier positif ou nul $x$ solution de cette équation.`

      // correction
      texteCorr += ` $\\begin{aligned}
      x ${ecritureAlgebrique(a)} &\\equiv ${b} \\,\\,[${k}]\\\\
      x  &\\equiv ${b} ${ecritureAlgebrique(-a)}\\,\\,[${k}]\\\\
      x &\\equiv ${b-a} \\,\\,[${k}]\\\\
      x&\\equiv ${b-a} ${ecritureAlgebrique(-q)}\\times ${k} \\,\\,[${k}]\\\\
      x &\\equiv ${r} \\,\\,[${k}].
      \\end{aligned}$<br>`
      
     
     texteCorr += `<br>Le plus petit entier positif ou nul $x$ solution est donc $${miseEnEvidence(`${r}`)}$.`

      if (this.questionJamaisPosee(i, texte)) {
        this.listeQuestions[i] =
          texte +
          ajouteChampTexteMathLive(this, i, `  ${KeyboardType.lycee}`, {
            texteAvant: `<br>$x \\equiv ~~$`,
            texteApres: `$~[${k}]$.`,
          })

        this.listeCorrections[i] = texteCorr

        handleAnswers(this, i, {
          reponse: { value: `${r}` },
        })

        i++
      }
      cpt++
    }

    listeQuestionsToContenu(this)
  }
}
