import ExerciceSimple from '../../ExerciceSimple'
import { randint } from '../../../modules/outils'
import { complex, add } from 'mathjs'
export const titre = 'Déterminer la partie réelle ou imaginaire d\'un nombre complexe'
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcReady = true
export const amcType = 'AMCHybride'
export const dateDePublication = '07/092025'

/**
 * Question de can : Partie réelle/imaginaire
 * @author Stéphane Guyon

*/
export const uuid = 'cbd3e'

export const refs = {
  'fr-fr': ['canTEC1-04'],
  'fr-ch': [],
}
export default class PartieReelle extends ExerciceSimple {
  constructor() {
    super()

    this.nbQuestions = 1
    this.typeExercice = 'simple'
  }

  nouvelleVersion() {
    const ReZ = randint(-5, 5)
    const ImZ = randint(-5, 5)
    const z1 = complex(ReZ, ImZ)
    const z2 = complex(-ImZ, ReZ)
    const moinsiz2 = complex(ImZ, -ReZ)
    const scenario = randint(0, 2)
    this.question = `On donne le nombre complexe $~~z = ${z1.toString()}~~$.<br>`
    
    switch (scenario) { 
      case 0 :
          this.question +='Déterminer la partie imaginaire de $z$.'
    this.correction = `Par définition, la partie imaginaire est le réel facteur du nombre imaginaire $\\mathrm{i}$<br>$\\mathcal{Im}(z) = ${ImZ}$`

    this.reponse = ImZ
      break;
      case 1 :
          this.question +='Déterminer la partie imaginaire de $\\mathrm{i}z$.'
   this.correction = `Par définition, la partie imaginaire est le réel facteur du nombre imaginaire $\\mathrm{i}$.<br>
   $\\mathrm{i}z=\\mathrm{i}\\left( ${z1.toString()}\\right) =${z2.toString()}$<br>

   $\\mathcal{Im}(z) = ${ReZ}$`
    this.reponse = ReZ
      break;
       case 2 :
          this.question +='Déterminer la partie imaginaire de $-\\mathrm{i}z$.'
   this.correction = `Par définition, la partie imaginaire est le réel facteur du nombre imaginaire $\\mathrm{i}$.<br>
   $-\\mathrm{i}z=-\\mathrm{i}\\left( ${z1.toString()}\\right) =${moinsiz2.toString()}$<br>

   $\\mathcal{Im}(z) = ${-ReZ}$`
    this.reponse = ReZ
      break;
  }

}}
