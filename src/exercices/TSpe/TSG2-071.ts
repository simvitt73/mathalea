import Exercice from '../Exercice'
import { choice, combinaisonListes } from '../../lib/outils/arrayOutils'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { texteEnCouleurEtGras, texteItalique } from '../../lib/outils/embellissements'
import { ecritureAlgebrique, ecritureAlgebriqueSauf1, rienSi1 } from '../../lib/outils/ecritures'
import { abs } from '../../lib/outils/nombres'
export const titre = 'Nom de l\'exercice'

export const dateDePublication = '4/5/2024' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

export const uuid = 'c550e'
export const refs = {
  'fr-fr': ['TSG2-071'],
  'fr-ch': []
}

/**
 *
 * @author Stéphane Guyon

*/
export default class NomExercice extends Exercice {
  constructor () {
    super()
    this.consigne = texteItalique('Préciser si l\'affirmation suivante est vraie ou fausse, puis justifier la réponse donnée.<br> Une réponse non argumentée ne sera pas prise en compte.')
    this.nbQuestions = 1 // Nombre de questions à générer
    this.correctionDetaillee = false
    this.correctionDetailleeDisponible = true
    this.besoinFormulaireCaseACocher = ['Sujet original : Métropole Juin 2025 - J1', true]
    this.sup = false
  }

  nouvelleVersion () {
    const typeQuestionsDisponibles = ['type1', 'type2', 'type3']

    const listeTypeQuestions = combinaisonListes(typeQuestionsDisponibles, this.nbQuestions)
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      let texte = ''
      let texteCorr = ''
      const a = randint(-10, 10, 0)
      const b = randint(-10, 10, 0)
      const c = randint(-10, 10, 0)
      const d = randint(-10, 10, [0, a])
      const xA = randint(-10, 10, [0, a])
      const yA = randint(-10, 10, 0)
      let zA = randint(-10, 10, [0, d])
      const proposition = 0
      const affirmation = choice(['vraie', 'fausse'])
      const numerateur = abs(a * xA + b * yA + c * zA + d)
      const denominateur = a ** 2 + b ** 2 + c ** 2 ${extraireRacineCarree(a)}

      if (a * xA + b * yA + c * zA + d === 0) { zA = zA + 1 } // on s'ssure que A n'est pas dans (P)
      switch (listeTypeQuestions[i]) {
        case 'type1':
          texte = 'Dans un repère orthonormé de l\'espace, on considère '
          texte += `le plan $P$ d'équation  $${rienSi1(a)}x${ecritureAlgebriqueSauf1(b)}y${ecritureAlgebriqueSauf1(c)}z${ecritureAlgebrique(d)}=0$ et`
          texte += `<br>le point $A$ de coordonnées $A\\left(${xA}~;~${yA}~;~${zA}\\right)$`
          texte += `<br>${texteEnCouleurEtGras('Affirmation :')} La distance du point $A$ au plan $\\mathcal P$ vaut ${proposition}`
          texteCorr = `Correction ${i + 1} de type 1`
          break
        case 'type2':
          texte = `Question ${i + 1} de type 2`
          texteCorr = `Correction ${i + 1} de type 2`
          break
        default: // On termine toujours par default qui ici correspond à 'type3':
          texte = `Question ${i + 1} de type 3`
          texteCorr = `Correction ${i + 1} de type 3`
          break
      }
      if (this.questionJamaisPosee(i, a)) { // <- laisser le i et ajouter toutes les variables qui rendent les exercices différents (par exemple a, b, c et d)
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}
