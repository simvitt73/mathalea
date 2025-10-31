import Exercice from '../Exercice'
import LabyrintheElement from 'labyrinthe'
import { listeQuestionsToContenu } from '../../modules/outils'

/**
 * @author Rémi Angot
 */
export default class ExerciceLabyrinthe extends Exercice {
  labyrinthe!: LabyrintheElement
  cols = 6
  rows = 6
  orientation?: 'horizontal' | 'vertical'
  goodAnswers: string[] = []
  badAnswers: string[] = []
  constructor() {
    super()
    this.nbQuestions = 1
    this.interactifObligatoire = true
    this.nbQuestionsModifiable = false
    this.exoCustomResultat = true
  }

  init() {}

  nouvelleVersion() {
    if (customElements.get('labyrinthe-interactif') === undefined) {
      customElements.define('labyrinthe-interactif', LabyrintheElement)
    }
    this.init()
    this.goodAnswers = []
    this.badAnswers = []
    this.labyrinthe = document.createElement(
      'labyrinthe-interactif',
    ) as LabyrintheElement
    const texte = `<labyrinthe-interactif
      id="labyrintheEx${this.numeroExercice}Q${0}"
      seed="${this.seed}"
      cols="${this.cols}"
      rows="${this.rows}"
      ${this.orientation != null ? `orientation="${this.orientation}"` : ''}
      ${!this.interactif ? 'disabled' : ''}
      >
    </labyrinthe-interactif>
    <div id=${`feedbackEx${this.numeroExercice}Q${0}`}
      class="ml-2 py-2 text-coopmaths-warn-darkest dark:text-coopmathsdark-warn-darkest"
      >
    </div>`

    const texteCorr = `<labyrinthe-interactif
      id="labyrintheCorrectionEx${this.numeroExercice}Q${0}"
      seed="${this.seed}"
      cols="${this.cols}"
      rows="${this.rows}"
      ${this.orientation != null ? `orientation="${this.orientation}"` : ''}
      disabled
      >
    </labyrinthe-interactif>`

    const createAnswers = (labyrinthe: LabyrintheElement) => {
      if (this.goodAnswers.length > 0) return
      const goodCount = labyrinthe.numberOfGoodAnswers ?? 0
      const badCount = labyrinthe.numberOfIncorrectAnswers ?? 0
      let attempts = 0
      for (let i = 0; i < goodCount; ) {
        const candidate = String(this.generateGoodAnswers())
        if (this.goodAnswers.indexOf(candidate) === -1) {
          this.goodAnswers[i] = candidate
          attempts = 0
          i++
        } else {
          attempts++
          if (attempts >= 50) {
            this.goodAnswers[i] = candidate
            attempts = 0
            i++
          }
        }
      }
      attempts = 0
      for (let i = 0; i < badCount; ) {
        const candidate = String(this.generateBadAnswers())
        if (this.badAnswers.indexOf(candidate) === -1) {
          this.badAnswers[i] = candidate
          attempts = 0
          i++
        } else {
          attempts++
          if (attempts >= 50) {
            this.badAnswers[i] = candidate
            attempts = 0
            i++
          }
        }
      }
    }

    document.addEventListener('exercicesAffiches', () => {
      this.labyrinthe = document.querySelector(
        `#labyrintheEx${this.numeroExercice}Q${0}`,
      ) as LabyrintheElement
      const labyrintheCorrection = document.querySelector(
        `#labyrintheCorrectionEx${this.numeroExercice}Q${0}`,
      ) as LabyrintheElement
      this.labyrinthe.innerHTML = ''
      createAnswers(this.labyrinthe)
      this.labyrinthe.setValues(this.goodAnswers, this.badAnswers)
      if (labyrintheCorrection) {
        labyrintheCorrection.setValues(this.goodAnswers, this.badAnswers)
        labyrintheCorrection.showCorrection()
      }

      // Gestion particulière du bouton score
      const btnScore = document.querySelector(
        `#buttonScoreEx${this.numeroExercice}`,
      )
      if (btnScore) {
        ;(btnScore as HTMLButtonElement).style.display = 'none'
      }
      this.labyrinthe.addEventListener('labyrinthe:gameend', () => {
        ;(btnScore as HTMLButtonElement)?.click()
      })
    })

    this.listeQuestions[0] = texte
    this.listeCorrections[0] = texteCorr
    listeQuestionsToContenu(this)
  }

  generateGoodAnswers(): number | string {
    return 1
  }

  generateBadAnswers(): number | string {
    return 0
  }

  correctionInteractive = (i: number) => {
    if (this.answers == null) this.answers = {}
    this.answers[`labyrintheEx${this.numeroExercice}Q${i}`] =
      this.labyrinthe.state
    const divFeedback = document.querySelector(
      `#feedbackEx${this.numeroExercice}Q${i}`,
    )

    const isValid = this.labyrinthe.win
    if (divFeedback != null) {
      if (isValid) {
        divFeedback.innerHTML = 'Bravo !'
        return ['OK', 'OK', 'OK', 'OK']
      }
      const ratio =
        this.labyrinthe.correctClicks / this.labyrinthe.numberOfGoodAnswers
      if (ratio <= 0.25) {
        return ['KO', 'KO', 'KO', 'KO']
      } else if (ratio <= 0.5) {
        return ['OK', 'KO', 'KO', 'KO']
      } else if (ratio <= 0.75) {
        return ['OK', 'OK', 'KO', 'KO']
      }
      return ['OK', 'OK', 'KO', 'KO']
    }
    throw new Error('Feedback not found')
  }
}
