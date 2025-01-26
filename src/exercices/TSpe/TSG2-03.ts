import Exercice from '../Exercice'
import { combinaisonListes } from '../../lib/outils/arrayOutils'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { ecritureAlgebriqueSauf1, rienSi1 } from '../../lib/outils/ecritures'
export const titre = 'Nom de l\'exercice'

export const dateDePublication = '4/5/2024' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

export const uuid = 'f0619'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}

/**
 *
 * @author Stéphane Guyon

*/
export default class nomExercice extends Exercice {
  constructor () {
    super()
    this.consigne = ''
  }

  nouvelleVersion () {
    const typeQuestionsDisponibles = ['type1', 'type2'] // On créé 3 types de questions

    const listeTypeQuestions = combinaisonListes(typeQuestionsDisponibles, this.nbQuestions) // Tous les types de questions sont posés mais l'ordre diffère à chaque "cycle"
    for (let i = 0, texte, texteCorr, cpt = 0; i < this.nbQuestions && cpt < 50;) { // Boucle principale où i+1 correspond au numéro de la question
      const xA = randint(-10, 10, 0)
      const yA = randint(-10, 10, 0)
      const zA = randint(-10, 10, 0)
      const a = randint(-10, 10, 0)
      const b = randint(-10, 10, 0)
      const c = randint(-10, 10, 0)
      const t = randint(-4, 4, 0) // coeff de proportionnalité en cas d'appartennance
      let xM = 0
      let yM = 0
      let zM = 0
      switch (listeTypeQuestions[i]) { // Suivant le type de question, le contenu sera différent
        case 'type1':// M appartient à la droite
          xM = xA + t * a
          yM = yA + t * b
          zM = zA + t * c
          texteCorr = 'Il suffit de vérifier s\'il existe un réel $t$ qui valide le système pour les coordonnées du point $M$.<br>'
          texteCorr += `Résolvons le système :<br>$ \\begin{cases}${xM}=${xA}${ecritureAlgebriqueSauf1(a)} t\\\\${yM}=${yA}${ecritureAlgebriqueSauf1(b)} t\\\\${zM}=${zA}${ecritureAlgebriqueSauf1(c)} t\\end{cases}$`
          texteCorr += `$\\iff \\begin{cases}${rienSi1(a)} t=${xM}${ecritureAlgebriqueSauf1(-xA)}\\\\${rienSi1(b)} t=${yM}${ecritureAlgebriqueSauf1(-yA)}\\\\${rienSi1(c)} t=${zM}${ecritureAlgebriqueSauf1(-zA)}\\end{cases}$`
          texteCorr += `$\\iff \\begin{cases}${rienSi1(a)} t=${xM - xA}\\\\${rienSi1(b)} t=${yM - yA}\\\\${rienSi1(c)} t=${zM - zA}\\end{cases}$`
          texteCorr += `$\\iff \\begin{cases} t=${t}\\\\ t=${t}\\\\t=${t}\\end{cases}$`
          texteCorr += '<br>Pour la valeur $t=2$, on vérifie donc que les coordonnées du point $M$ vérifient la représentation paramétrique de $(\\Delta)$.'
          texteCorr += '<br>On peut donc conclure : $M\\in(\\Delta)$'
          break
        case 'type2':
        default :
          texte = `Question ${i + 1} de type 2`
          texteCorr = `Correction ${i + 1} de type 2`
          break
      }
      texte = `Déterminer si le point $M(${xM};${yM};${zM})$ appartient à la droite $(\\Delta)$ dont on donne la représentation paramétrique ci-dessous :<br>`
      texte += `$(\\Delta) \\begin{cases}x=${xA}${ecritureAlgebriqueSauf1(a)} t\\\\y=${yA}${ecritureAlgebriqueSauf1(b)} t\\quad (t\\in\\mathbb{R})\\\\z=${zA}${ecritureAlgebriqueSauf1(c)} t\\end{cases}$`

      if (this.questionJamaisPosee(i, a, b, c, xA, yA, zA, t, texte)) { // <- laisser le i et ajouter toutes les variables qui rendent les exercices différents (par exemple a, b, c et d)
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this) // On envoie l'exercice à la fonction de mise en page
  }
}
