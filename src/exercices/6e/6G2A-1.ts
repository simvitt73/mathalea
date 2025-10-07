import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { combinaisonListes } from '../../lib/outils/arrayOutils'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const titre = 'Trouver le rayon quand on connaît le diamètre, et inversement'
export const amcReady = true
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcType = 'AMCNum'

/**
 * Calculer un rayon quand on connaît un diamètre, et inversement
 * @author Mireille Gain
 */
export const uuid = '4d9ca'

export const refs = {
  'fr-fr': ['6G2A-1'],
  'fr-ch': [],
}
export default class RayonDiametre extends Exercice {
  constructor() {
    super()
    this.nbQuestions = 2
  }

  nouvelleVersion() {
    const typesDeQuestionsDisponibles = [1, 2]
    const listeTypeDeQuestions = combinaisonListes(typesDeQuestionsDisponibles, this.nbQuestions)

    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      let a: number
      let answer: number
      let texte=''
      let texteCorr=''
      switch (listeTypeDeQuestions[i]) {
        case 1: // Diamètre
          a = randint(11, 49)
          texte = `Si le rayon d'un cercle mesure $${a}$ cm, alors `
          if (this.interactif) {
            texte += 'son diamètre mesure '
          } else {
             texte += 'combien mesure son diamètre ?'
          }
          texteCorr = `Si le rayon d'un cercle mesure ${a} cm alors son diamètre mesure ${a * 2} cm.`
          answer = a * 2
          break
        default: // case 2 Rayon
          a = randint(11, 49) * 2
          texte = `Si le diamètre d'un cercle mesure ${a * 2} cm, alors `
          if (this.interactif) {
            texte += 'son rayon mesure '
          } else {
             texte += 'combien mesure son rayon ?'
          }
          texteCorr = `Si le diamètre d'un cercle mesure ${a * 2} cm, alors son rayon mesure ${a} cm.`
          answer = a
          break
      }
      if (this.interactif) {
        handleAnswers(this, i, {reponse: { value: answer }})
        texte += ajouteChampTexteMathLive(this, i, KeyboardType.clavierDeBase, {texteApres: ' cm'})
      }
      if (this.listeQuestions.indexOf(texte) === -1) {
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}
