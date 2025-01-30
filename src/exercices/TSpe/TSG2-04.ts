import Exercice from '../Exercice'
import { combinaisonListes } from '../../lib/outils/arrayOutils'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { ecritureAlgebriqueSauf1 } from '../../lib/outils/ecritures'
export const titre = 'Déterminer deux droites sont orthogonales.'

export const dateDePublication = '29/01/2025' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

export const uuid = '34648'
export const refs = {
  'fr-fr': ['TSG2-04'],
  'fr-ch': []
}

/**
 *
 * @author Stéphane Guyon

*/
export default class nomExercice extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 2
    this.consigne = ''
  }

  nouvelleVersion () {
    const typeQuestionsDisponibles = ['type1'] // On créé 3 types de questions

    const listeTypeQuestions = combinaisonListes(typeQuestionsDisponibles, this.nbQuestions) // Tous les types de questions sont posés mais l'ordre diffère à chaque "cycle"
    for (let i = 0, texte, texteCorr, cpt = 0; i < this.nbQuestions && cpt < 50;) { // Boucle principale où i+1 correspond au numéro de la question
      const xA = randint(-10, 10, 0)
      const yA = randint(-10, 10, 0)
      const zA = randint(-10, 10, 0)
      let xB = 0
      let yB = 0
      let zB = 0
      const x = randint(-10, 10, [0, xA])
      const y = randint(-10, 10, [0, yA])
      const z = randint(-10, 10, [0, zA])
      const a = randint(-10, 10, 0)
      const b = randint(-10, 10, 0)
      const c = randint(-10, 10, 0)
      const t = randint(-4, 4, [0, 1])
      const alea = randint(1, 3)// aléatoirisation pour non appartenance, déterminer quelle cooronnée est modifiée pour planter
      switch (listeTypeQuestions[i]) { // Suivant le type de question, le contenu sera différent
        case 'type1':// orthogonal
          xB = xA + t * x
          yB = yA + t * y
          zB = zA + t * z
          texteCorr = 'Il suffit de vérifier s\'il existe un réel $t$ qui valide le système pour les coordonnées du point $M$.<br>'

          break
        case 'type2':// défavorable
        default :
          texteCorr = 'Il suffit de vérifier s\'il existe un réel $t$ qui valide le système pour les coordonnées du point $M$.<br>'
          break
      }
      texte = 'Dans un repère orthonormé de l\'espace, on donne les coordonénes des points $A$ et $B$ et la représentation paramétrique d\'une droite $(\\Delta)$ :<br>'
      texte += `$ A(${xA}~;~${yA}~;~${zA})$ ; $B(${xB}~;~${yB}~;~${zB})$ et `
      texte += `$(\\Delta) : \\begin{cases}x=${x}${ecritureAlgebriqueSauf1(a)} t\\\\y=${y}${ecritureAlgebriqueSauf1(b)} t\\quad (t\\in\\mathbb{R})\\\\z=${z}${ecritureAlgebriqueSauf1(c)} t\\end{cases}$`

      if (this.questionJamaisPosee(i, a, b, c, xA, yA, zA, xB, yB, zB, x, y, z, t, texte)) { // <- laisser le i et ajouter toutes les variables qui rendent les exercices différents (par exemple a, b, c et d)
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this) // On envoie l'exercice à la fonction de mise en page
  }
}
