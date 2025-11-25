import Exercice from '../Exercice'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { KeyboardType } from '../../lib/interactif/claviers/keyboard'

export const titre = 'Trouver un représentant positif dans une congruence'
export const interactifReady = true
export const interactifType = 'mathLive'
export const dateDePublication = '21/02/2025'
export const uuid = '87535' // à adapter

export const refs = {
  'fr-fr': ['TEA1-01'],
  'fr-ch': [],
}

export default class ExerciceCongruence extends Exercice {
  constructor() {
    super()
    this.consigne = ''
    this.nbQuestions = 1
  }

  nouvelleVersion() {
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      let texte = ''
      let texteCorr = ''

      // a et k aléatoires
      const k = randint(3, 10)

      const a = randint(20, 50)

      // plus petit entier positif ou nul b tel que a ≡ b [k]
      let r = a % k
      if (r < 0) r += k // reste dans [0, k-1]
      const b = r === 0 ? k : r
      const q = (a - r) / k
      texte =
        `Déterminer le plus petit entier positif ou nul $a$ vérifiant cette égalité $${a} \\equiv a~[${k}]$.`

      texteCorr += `On effectue la division euclidienne de $${a}$ par $${k}$ :<br>`
      texteCorr += `$${a} = ${k}\\times${q}$`
      if (r !== 0) {
        texteCorr += `$+ ${r}$ avec $0 \\leqslant ${r} < ${k}$.<br>`
      }
      texteCorr += `<br>Le reste est donc égal à $${r}$. <br>`

if (r !== 0) {
  texteCorr += `On a donc $${a} \\equiv${miseEnEvidence(`${r}`)}[${k}]$.`
}
       else {
        texteCorr +=
          `Le plus petit entier positif ou nul congru à $${a}$ modulo $${k}$ est ` +
          `$${miseEnEvidence(`b`)}$.`
      }

      if (this.questionJamaisPosee(i, texte)) {
        this.listeQuestions[i] =
          texte +
          ajouteChampTexteMathLive(this, i, `  ${KeyboardType.lycee}`, {
            texteAvant: `<br>$${a} \\equiv ~~$`,
            texteApres: `$~[${k}]$.`,
          })

        this.listeCorrections[i] = texteCorr

        handleAnswers(this, i, {
          reponse: { value: `${b}` },
        })

        i++
      }
      cpt++
    }

    listeQuestionsToContenu(this)
  }
}
