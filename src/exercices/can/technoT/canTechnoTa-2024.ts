import Question1 from '../can2a-2024/can2a-2024-Q1.js'
import Question2 from '../can2a-2024/can2a-2024-Q2.js'
import Question3 from '../can2a-2024/can2a-2024-Q3.js'
import Question4 from '../can2a-2024/can2a-2024-Q4.js'
import Question5 from '../can2a-2024/can2a-2024-Q5.js'
import Question6 from '../can2a-2024/can2a-2024-Q6.js'
import Question7 from '../can1a-2024/can1a-2024-Q7'
import Question8 from '../can2a-2024/can2a-2024-Q8.js'
import Question9 from '../can5a-2024/can5a-2024-Q9' // TODO
import Question10 from '../can5a-2024/can5a-2024-Q10' // TODO
import Question11 from '../can3a-2024/can3-2024-Q11.js' // TODO
import Question12 from '../can3a-2024/can3-2024-Q12.js' // TODO
import Question13 from '../can3a-2024/can3-2024-Q13.js' // TODO
import Question14 from '../can3a-2024/can3-2024-Q14.js' // TODO
import Question15 from '../can3a-2024/can3-2024-Q15.js' // TODO
import Question16 from '../can3a-2024/can3-2024-Q16.js' // TODO
import Question17 from '../can3a-2024/can3-2024-Q17.js' // TODO
import Question18 from '../can3a-2024/can3-2024-Q18.js' // TODO
import Question19 from '../can3a-2024/can3-2024-Q19.js' // TODO
import Question20 from '../can3a-2024/can3-2024-Q20.js' // TODO
import Question21 from '../can3a-2024/can3-2024-Q21.js' // TODO
import Question22 from '../can3a-2024/can3-2024-Q22.js' // TODO
import Question23 from '../can3a-2024/can3-2024-Q23.js' // TODO
import Question24 from '../can3a-2024/can3-2024-Q24.js' // TODO
import Question25 from '../can3a-2024/can3-2024-Q25.js' // TODO
import Question26 from '../can3a-2024/can3-2024-Q26.js' // TODO
import Question27 from '../can3a-2024/can3-2024-Q27.js' // TODO
import Question28 from '../can3a-2024/can3-2024-Q28.js' // TODO
import Question29 from '../can3a-2024/can3-2024-Q29.js' // TODO
import Question30 from '../can3a-2024/can3-2024-Q30.js' // TODO

import MetaExercice from '../../MetaExerciceCan'
import Exercice from '../../Exercice'

export const titre = 'CAN Terminale Techno sujet 2024'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '20ca2'
export const refs = {
  'fr-fr': ['canTechnoTa-2024'],
  'fr-ch': []
}
export const dateDePublication = '08/12/2024'
/**
 * Annales CAN 2024
 * @author Mathieu Degrange
*/

const exercices = [
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
  Question11,
  Question12,
  Question13,
  Question14,
  Question15,
  Question16,
  Question17,
  Question18,
  Question19,
  Question20,
  Question21,
  Question22,
  Question23,
  Question24,
  Question25,
  Question26,
  Question27,
  Question28,
  Question29,
  Question30
] as unknown

const questions = exercices as Exercice[]

export default class Can3a2024 extends MetaExercice {
  constructor () {
    super(questions)
  }
}
