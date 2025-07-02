import Exercice from '../Exercice'
import { combinaisonListes } from '../../lib/outils/arrayOutils'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { texteGras } from '../../lib/outils/embellissements'
import { reduireAxPlusB } from '../../lib/outils/ecritures'
export const titre = 'Nom de l\'exercice'

export const dateDePublication = '02/07/2025' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

export const uuid = '5eb2c'
export const refs = {
  'fr-fr': ['TSG2-09'],
  'fr-ch': []
}

/**
 *
 * @author
Stéphane Guyon
*/
export default class NomExercice extends Exercice {
  constructor () {
    super()
    this.consigne = 'Pour chacune des affirmations suivantes, indiquer si elle est vraie ou fausse. Justifier chaque réponse. Une réponse non justifiée ne rapporte aucun point.'
  }

  nouvelleVersion () {
    const typeQuestionsDisponibles = ['favorable']

    const listeTypeQuestions = combinaisonListes(typeQuestionsDisponibles, this.nbQuestions)
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      let texte = 'On munit l\'espace d\'un repère orthonormé $(O~;~\\vec \\imath~;~ \\vec \\jmath ~,~ \\vec k)$ où $O$ est l\'origine, $\\vec \\imath~,~ \\vec \\jmath ~$ et , $\\vec k$ sont les vecteurs unitaires de l\'axe des abscisses, des ordonnées et des altitudes respectivement.<br> '

      let texteCorr = ''
      const xA = randint(-10, 10, 0)
      const yA = randint(-10, 10, 0)
      const zA = randint(-10, 10, 0)
      const xB = randint(-10, 10, [0, xA])
      const yB = randint(-10, 10, [0, yA])
      const zB = randint(-10, 10, [0, zA])
      const lambda = randint(-4, 4, [0, 1, -1])
      const ux = lambda * (xB - xA)
      const uy = lambda * (yB - yA)
      const uz = lambda * (zB - zA)
      switch (listeTypeQuestions[i]) {
        case 'favorable':
          texte += `<br>On note A$(${xA}~;~${yA}~;~${zA})$ et B$(${xB}~;~${yB}~;~${zB})$ deux points de l'espace.<br>`
          texte += `${texteGras('Affirmation')} : Une représentation paramétrique de la droite $(AB)$ est `
          texte += `$ \\begin{cases} x = ${reduireAxPlusB(ux, xA, 'false')} \\\\ y = ${yB} + ${uy}t \\\\ z = ${zB} + ${uz}t \\end{cases}$`
          texteCorr = 'En prenant $t=0$ dans la représentation paramétrique, on obtient les cooronnées du point B.'
          texteCorr += ' On en déduit que le point $B$ est un point de la droite proposée.<br>'
          texteCorr += 'Il y a principalement deux méthodes pour conclure :'
          texteCorr += `<br>${texteGras('Méthode 1')} : On vérifie si les coordonnées du point $A$ vérifient le système proposé.`
          texteCorr += `<br>$ \\begin{cases} ${xA} = ${xB} + ${ux}t \\\\ ${yA} = ${yB} + ${uy}t \\\\ ${zA} = ${zB} + ${uz}t \\end{cases}$`
          texteCorr += `<br>${texteGras('Méthode 2')} : On vérifie que le vecteur directeur de la droite proposée est colinéaire au vecteur $\\overrightarrow{AB}$.`
          break
        case 'defavorable':

          break

          break
      }
      if (this.questionJamaisPosee(i)) { // <- laisser le i et ajouter toutes les variables qui rendent les exercices différents (par exemple a, b, c et d)
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}
