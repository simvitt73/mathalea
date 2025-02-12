import Exercice from '../Exercice'
import { combinaisonListes } from '../../lib/outils/arrayOutils'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { ecritureAlgebrique, ecritureParentheseSiMoins, ecritureParentheseSiNegatif } from '../../lib/outils/ecritures'
import { texNombre } from '../../lib/outils/texNombre'
import { sp } from '../../lib/outils/outilString'
import FractionEtendue from '../../modules/FractionEtendue'
import { miseEnEvidence, texteEnCouleurEtGras } from '../../lib/outils/embellissements'
export const titre = 'Déterminer si un vecteur est normal à un plan.'

export const dateDePublication = '26/01/2025' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

export const uuid = 'd5253'
export const refs = {
  'fr-fr': ['TSG2-05'],
  'fr-ch': []
}

/**
 *
 * @author Stéphane Guyon

*/
export default class nomExercice extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 1
    this.consigne = ''
  }

  nouvelleVersion () {
    const typeQuestionsDisponibles = ['type1', 'type2'] // On crée 3 types de questions

    const listeTypeQuestions = combinaisonListes(typeQuestionsDisponibles, this.nbQuestions) // Tous les types de questions sont posés mais l'ordre diffère à chaque "cycle"
    for (let i = 0, texte, texteCorr, cpt = 0; i < this.nbQuestions && cpt < 50;) { // Boucle principale où i+1 correspond au numéro de la question
      let a1 = randint(-5, 5, 0)// coord du vecteur AB
      let b1 = randint(-5, 5, 0)// coord du vecteur AB
      let c1 = 0// coord du vecteur AB
      let a2 = randint(-5, 5, [0, a1])// coord du vecteur AC
      let b2 = randint(-5, 5, [0, b1])// coord du vecteur AC
      const a = randint(-5, 5, 0) // coord du vecteur normal
      const b = randint(-5, 5, 0)// coord du vecteur normal
      const c = randint(-5, 5, 0)// coord du vecteur normal
      const xA = randint(-5, 5, 0) // coord de A
      const yA = randint(-5, 5, 0)// coord de A
      const zA = randint(-5, 5, 0)// coord de A

      const normal = listeTypeQuestions[i] === 'type1'
      a1 = a1 * c// on adapte les coord du vect AB pour avoir des coord entières
      b1 = b1 * c// on adapte les coord du vect AB pour avoir des coord entières
      a2 = a2 * c// et vecteur AC
      b2 = b2 * c
      c1 = -(a * a1 + b * b1) / c// On calcule c1 pour annuler le pdt scla
      let c2 = -(a * a2 + b * b2) / c // On calcule c1 pour annuler le pdt scla
      c2 += normal ? 0 : 1  // on ajoute le +1 pour planter la nullité du produit scalaire ('type2')
      console.log(normal, a * a2, b * b2, c2)
      const xB = xA + a1// on déduit les coord de B
      const yB = yA + b1
      const zB = zA + c1
      const xC = xA + a2// et celles de C
      const yC = yA + b2
      const zC = zA + c2

      texte = `Dans un repère orthonormé de l'espace, déterminer si le vecteur $\\vec{n}\\begin{pmatrix}${a}\\\\${b}\\\\${c}\\end{pmatrix}$ est normal au plan $\\mathcal{ABC}$ engendré par les points :<br>`
      texte += `$A(${xA}${sp()};${yA}${sp()};${zA})${sp(5)} B(${xB}${sp()};${yB}${sp()};${zB})${sp(5)}\\text{et}${sp()}${sp()}C(${xC}${sp()};${yC}${sp()};${zC}).$`
      texteCorr = 'On calcule les coordonnées des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.<br> '
      texteCorr += `$\\overrightarrow{AB}\\begin{cases}x_B-x_A&=${xB}-${ecritureParentheseSiNegatif(xA)}\\\\y_B-y_A&=${yB}-${ecritureParentheseSiNegatif(yA)}\\\\z_B-z_A&=${zB}-${ecritureParentheseSiNegatif(zA)}\\\\\\end{cases}$ `
      texteCorr += ` $${sp(5)}$ et $${sp(5)}\\overrightarrow{AC}\\begin{cases}x_C-x_A=${xC}-${ecritureParentheseSiNegatif(xA)}\\\\y_C-yA=${yC}-${ecritureParentheseSiNegatif(yA)}\\\\z_C-z_A=${zC}-${ecritureParentheseSiNegatif(zA)}\\\\\\end{cases}$ `
      texteCorr += `<br><br>Ce qui donne après simplification : $\\overrightarrow{AB}\\begin{pmatrix}${xB - xA}\\\\${yB - yA}\\\\${zB - zA}\\\\\\end{pmatrix}${sp(3)}$ `
      texteCorr += ` et $${sp(3)}\\overrightarrow{AC}\\begin{pmatrix}${xC - xA}\\\\${yC - yA}\\\\${zC - zA}\\\\\\end{pmatrix}.$<br> `
      texteCorr += `On vérifie que leurs coordonnées ne sont pas proportionnelles : $\\dfrac{x_B-x_A}{x_C-x_A}=${new FractionEtendue(xB - xA, xC - xA).texFractionSimplifiee}\\neq\\dfrac{y_B-y_A}{y_C-y_A}=${new FractionEtendue(yB - yA, yC - yA).texFractionSimplifiee}$.`
      texteCorr += '<br> Ce qui permet de déduire que les vecteurs ne sont pas colinéaires.'
      texteCorr += '<br>$\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ forment donc une base du plan $\\mathcal{ABC}$.'
      texteCorr += '<br>Pour vérifier si $\\vec n$ est normal au plan $\\mathcal{ABC}$, il suffit de vérifier que le vecteur $\\vec n$ est orthogonal aux deux vecteurs de sa base, donc à $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.'
      texteCorr += '<br>On calcule alors les deux produits scalaires suivants.'
      texteCorr += `<br>$\\begin{aligned}\\overrightarrow{AB}\\cdot\\vec{n}&=${a1}\\times ${ecritureParentheseSiMoins(a)}${ecritureAlgebrique(b1)}\\times ${ecritureParentheseSiMoins(b)}${ecritureAlgebrique(c1)}\\times ${ecritureParentheseSiMoins(c)}\\\\&=${a1 * a + b1 * b + c1 * c}\\end{aligned}.$`
      texteCorr += `<br>$\\begin{aligned}\\overrightarrow{AC}\\cdot\\vec{n}&=${a2}\\times ${ecritureParentheseSiMoins(a)}${ecritureAlgebrique(b2)}\\times ${ecritureParentheseSiMoins(b)}${ecritureAlgebrique(c2)}\\times ${ecritureParentheseSiMoins(c)}\\\\&=${a2 * a + b2 * b + c2 * c}\\end{aligned}.$`
      texteCorr += normal
        ? `<br>On en déduit que $\\vec n$ est orthogonal aux vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$, $${miseEnEvidence('\\vec n')}$ ${texteEnCouleurEtGras('est donc normal au plan')}  $${miseEnEvidence('\\mathcal{ABC}')}$.`
        : `<br>On en déduit que $\\vec n$ n'est pas orthogonal aux vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$, $${miseEnEvidence('\\vec n')}$ ${texteEnCouleurEtGras('n\'est donc pas normal au plan')}  $${miseEnEvidence('\\mathcal{ABC}')}$.`
      if (this.questionJamaisPosee(i, a, b, c, a2, b2, c2)) { // <- laisser le i et ajouter toutes les variables qui rendent les exercices différents (par exemple a, b, c et d)
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this) // On envoie l'exercice à la fonction de mise en page
  }
}
