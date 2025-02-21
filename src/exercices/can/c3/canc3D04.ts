import Exercice from '../../Exercice'
import { listeQuestionsToContenu, randint } from '../../../modules/outils'
import handleInteractiveClock from '../../../lib/InteractiveClock'
import { context } from '../../../modules/context'
import Horloge from '../../../lib/2d/horloge'
import { mathalea2d } from '../../../modules/2dGeneralites'
import Hms from '../../../modules/Hms'
export const titre = 'Indiquer l\'heure sur une horloge'
export const interactifReady = true
export const interactifType = 'custom'

export const dateDePublication = '21/2/2025'

export const uuid = '51242'
export const refs = {
  'fr-fr': ['canc3D04'],
  'fr-ch': []
}

/**
 * @author Rémi Angot

*/
export default class ExerciceInteractiveClock extends Exercice {
  goodAnswers: { hour: string, minute: string }[] = []
  constructor () {
    super()
    this.nbQuestions = 4
    handleInteractiveClock() // Obligatoire pour la gestion de l'élément custom <interactive-clock>
  }

  nouvelleVersion () {
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      const hour = randint(1, 12)
      const minute = randint(1, 11) * 5
      let enonce = `Placer correctement les aiguilles pour indiquer ${hour} h ${minute}.`
      if (context.isHtml) {
        enonce += `<br><br><interactive-clock id="clockEx${this.numeroExercice}Q${i}"/>`
      } else {
        const horloge = new Horloge(0, 0, 2)
        enonce += mathalea2d({ xmin: -3, ymin: -3, xmax: 3, ymax: 3, scale: 0.6, style: 'margin: auto' }, horloge)
      }
      let correction = ''
      console.log(context)
      if (context.isHtml) {
        correction = `<interactive-clock hour="${hour}" minute="${minute}" isDynamic="false"/>`
      } else {
        const horloge = new Horloge(0, 0, 2, new Hms({ hour, minute }))
        correction = mathalea2d({ xmin: -3, ymin: -3, xmax: 3, ymax: 3, scale: 0.6, style: 'margin: auto' }, horloge)
      }
      if (this.questionJamaisPosee(i, hour, minute)) {
        this.listeQuestions[i] = enonce
        this.listeCorrections[i] = correction
        this.goodAnswers[i] = { hour: hour.toString(), minute: minute.toString() }
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }

  correctionInteractive = (i: number) => {
    const id = `clockEx${this.numeroExercice}Q${i}`
    const clock = document.querySelector(`#${id}`) as any
    if (clock == null) {
      return 'KO'
    }
    clock.isDynamic = false
    const hour: string = clock.getAttribute('hour')
    const minute: string = clock.getAttribute('minute')
    if (this.answers == null) this.answers = {}
    // Sauvegarde de la réponse pour Capytale
    this.answers[id] = `${hour}h${minute}`
    if (hour === this.goodAnswers[i].hour && minute === this.goodAnswers[i].minute) {
      const divFeedback = document.createElement('div')
      divFeedback.innerHTML = '😎'
      clock.parentElement?.appendChild(divFeedback)
      return 'OK'
    } else {
      const divFeedback = document.createElement('div')
      divFeedback.innerHTML = `☹️ Tu as marqué ${clock.getAttribute('hour')} h ${clock.getAttribute('minute')}.`
      clock.parentElement?.appendChild(divFeedback)
      return 'KO'
    }
  }
}
