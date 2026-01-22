import {
  ecritureAlgebrique,
  ecritureParentheseSiNegatif,
} from '../../lib/outils/ecritures'
import { texteItalique } from '../../lib/outils/embellissements'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const titre =
  "Montrer qu'une équation cartésienne correspond à un plan de l'espace"

export const dateDePublication = '26/01/2025' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

export const uuid = 'd5254'

export const refs = {
  'fr-fr': ['TSG2-09'],
  'fr-ch': [],
}

/**
 *
 * @author Stéphane Guyon
 */
export default class NomExercice extends Exercice {
  constructor() {
    super()
    this.nbQuestions = 1
    this.consigne = texteItalique(
      "On considère le plan $(P)$ défini par un point $A$ et deux vecteurs directeurs non colinéaires $\\vec u$ et $\\vec v$. Montrer que l'équation proposée est bien une équation cartésienne du plan.",
    )
  }

  nouvelleVersion() {
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      let texte = ''
      let texteCorr = ''

      // Point A
      const xA = randint(-6, 6, 0)
      const yA = randint(-6, 6, 0)
      const zA = randint(-6, 6, 0)

      // Vecteurs directeurs u et v non nuls et non colinéaires
      let ux = randint(-5, 5, 0)
      let uy = randint(-5, 5, 0)
      let uz = randint(-5, 5, 0)
      while (ux === 0 && uy === 0 && uz === 0) {
        ux = randint(-5, 5, 0)
        uy = randint(-5, 5, 0)
        uz = randint(-5, 5, 0)
      }

      let vx = randint(-5, 5, 0)
      let vy = randint(-5, 5, 0)
      let vz = randint(-5, 5, 0)

      // Regénérer v tant qu'il est colinéaire à u
      let nx = uy * vz - uz * vy
      let ny = uz * vx - ux * vz
      let nz = ux * vy - uy * vx
      let essais = 0
      while (
        ((vx === 0 && vy === 0 && vz === 0) ||
          (nx === 0 && ny === 0 && nz === 0)) &&
        essais < 20
      ) {
        vx = randint(-5, 5, 0)
        vy = randint(-5, 5, 0)
        vz = randint(-5, 5, 0)
        nx = uy * vz - uz * vy
        ny = uz * vx - ux * vz
        nz = ux * vy - uy * vx
        essais++
      }
      if (nx === 0 && ny === 0 && nz === 0) {
        cpt++
        continue
      }

      const d = -(nx * xA + ny * yA + nz * zA)
      const produitAvecU = nx * ux + ny * uy + nz * uz
      const produitAvecV = nx * vx + ny * vy + nz * vz
      const valeurEnA = nx * xA + ny * yA + nz * zA + d
      const equationPlane = `${nx}x${ecritureAlgebrique(ny)}y${ecritureAlgebrique(nz)}z${ecritureAlgebrique(d)}=0`

      texte =
        "Dans un repère orthonormé de l'espace, on considère le point " +
        `$A(${xA}~;${yA}~;${zA})$ et les vecteurs $\\vec u\\begin{pmatrix}${ux}\\\\${uy}\\\\${uz}\\end{pmatrix}$ et $\\vec v\\begin{pmatrix}${vx}\\\\${vy}\\\\${vz}\\end{pmatrix}$ qui ne sont pas colinéaires.<br>`
      texte +=
        "On note $(P)$ le plan passant par $A$ et engendré par $\\vec u$ et $\\vec v$. "
      texte +=
        "On affirme que l'équation suivante est une équation cartésienne du plan $(P)$ :<br>"
      texte += `$${equationPlane}$.<br>`
      texte +=
        'Justifier que cette équation correspond bien au plan $(P)$.'

      texteCorr =
        "Les vecteurs $\\vec u$ et $\\vec v$ ne sont pas colinéaires car leur produit vectoriel est non nul : "
      texteCorr += `$\\vec n = \\vec u \\wedge \\vec v = \\begin{pmatrix}${nx}\\\\${ny}\\\\${nz}\\end{pmatrix}\\neq\\vec 0$.`
      texteCorr +=
        '<br>Par construction, $\\vec n$ est un vecteur normal au plan $(P)$.'
      texteCorr +=
        `<br>On vérifie qu'il est orthogonal aux deux générateurs :`
      texteCorr += `<br>$\\vec n\\cdot\\vec u = ${nx}\\times ${ecritureParentheseSiNegatif(ux)}${ecritureAlgebrique(ny)}\\times ${ecritureParentheseSiNegatif(uy)}${ecritureAlgebrique(nz)}\\times ${ecritureParentheseSiNegatif(uz)} = ${produitAvecU}$.`
      texteCorr += `<br>$\\vec n\\cdot\\vec v = ${nx}\\times ${ecritureParentheseSiNegatif(vx)}${ecritureAlgebrique(ny)}\\times ${ecritureParentheseSiNegatif(vy)}${ecritureAlgebrique(nz)}\\times ${ecritureParentheseSiNegatif(vz)} = ${produitAvecV}$.`
      texteCorr +=
        '<br>Ces produits scalaires sont nuls, donc $\\vec n$ est bien normal au plan $(P)$.'
      texteCorr +=
        `<br>Une équation d'un plan de vecteur normal $\\vec n(a~;b~;c)$ passant par un point $A(x_A;y_A;z_A)$ est $ax+by+cz+d=0$ avec $d=-(ax_A+by_A+cz_A)$.`
      texteCorr += `<br>Ici, cela donne $${equationPlane}$.`
      texteCorr += `<br>Le point $A$ vérifie cette équation : ${nx}\\times ${ecritureParentheseSiNegatif(xA)}${ecritureAlgebrique(ny)}\\times ${ecritureParentheseSiNegatif(yA)}${ecritureAlgebrique(nz)}\\times ${ecritureParentheseSiNegatif(zA)}${ecritureAlgebrique(d)}=${valeurEnA}$.`
      texteCorr +=
        '<br>Pour tout point $M$ du plan $(P)$, il existe $\\lambda$ et $\\mu$ tels que $\\overrightarrow{AM}=\\lambda\\vec u+\\mu\\vec v$.'
      texteCorr +=
        '<br>Alors $a x_M + b y_M + c z_M + d = (\\vec n\\cdot\\vec u)\\lambda+(\\vec n\\cdot\\vec v)\\mu+\\vec n\\cdot \\overrightarrow{OA}+d=0$, puisque $\\vec n\\cdot\\vec u=\\vec n\\cdot\\vec v=0$ et que $A$ satisfait déjà l\'équation.'
      texteCorr +=
        "<br>Par conséquent, l'équation proposée décrit exactement le plan $(P)$."

      if (
        this.questionJamaisPosee(
          i,
          xA,
          yA,
          zA,
          ux,
          uy,
          uz,
          vx,
          vy,
          vz,
          equationPlane,
        )
      ) {
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}

