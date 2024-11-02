import type Exercice from '../../exercices/Exercice'
import ExerciceQcm from '../../exercices/ExerciceQcm'
import { lettreDepuisChiffre } from '../outils/outilString'

export function qcmCamExport (exercice: Exercice): {question: string, reponse: string} {
  const propositions = exercice.autoCorrection[0].propositions
  if (propositions == null) return { question: '', reponse: '' }
  const laQuestion = exercice.listeQuestions[0]
  const [enonce] = laQuestion.split('<div class="my-3">')
  const props = propositions.map(prop => prop.texte)
  const statuts = propositions.map(prop => prop.statut)
  let question = `<h3 data-translate="{&quot;html&quot;:&quot;questions.defaultquestion&quot;}">${enonce.replaceAll(/\$([^$]*)\$/g, '<span class="math-tex">$1</span>')}</h3><ol>`
  let reponse = ''
  for (let i = 0; i < props.length; i++) {
    const prop = props[i].replaceAll(/\$([^$]*)\$/g, '<span class="math-tex">$1</span>')
    const bonneReponse = statuts[i]
    question += `<li${bonneReponse ? ' class="rondvert"' : ''}>${prop}</li>`
    if (bonneReponse) reponse = lettreDepuisChiffre(i + 1)
  }
  question += '</ol>'
  const sortie = { question, reponse }
  console.log(sortie)
  return sortie
}

export function qcmCamExportAll (exercices: Exercice[]): string {
  const questionnaire = exercices.filter(exo => exo instanceof ExerciceQcm).map((exercice, index) => [String(index), qcmCamExport(exercice)])
  const questions = questionnaire.map(([index, exo]) => `"${index}":${JSON.stringify(exo)}`)
  const leJson = `{${questions.join(',')}}`
  return leJson
}
