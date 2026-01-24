import {
  ecritureAlgebrique,
  ecritureAlgebriqueSauf0,
  ecritureAlgebriqueSauf1,
  ecritureParentheseSiNegatif,
  rienSi1,
} from '../../lib/outils/ecritures'

import { listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'
import { createList } from '../../lib/format/lists'
import { texteEnCouleurEtGras } from '../../lib/outils/embellissements'

export const titre =
  "Déterminer une équation cartésienne d'un plan."

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
      const ux = randint(-5, 5, 0)
      const uy = randint(-5, 5, 0)
      const uz = randint(-5, 5, 0)
    

      const vx = randint(-5, 5, 0)
      let vy = randint(-5, 5, 0)
      while (vy * ux === uy * vx) {
        vy = randint(-5, 5, 0)
      }
      let vz = randint(-5, 5, 0)
      while (vz*vy === uz*uy)
        {  vz = randint(-5, 5, 0)}
      const nz = ux * vy - uy * vx
      const nx = uy * vz - uz * vy
      const ny = uz * vx - ux * vz
   

    
    

      const d = -(nx * xA + ny * yA + nz * zA)
      const produitAvecU = nx * ux + ny * uy + nz * uz
      const produitAvecV = nx * vx + ny * vy + nz * vz
      const valeurEnA = nx * xA + ny * yA + nz * zA + d
      const equationPlane = `${rienSi1(nx)}x${ecritureAlgebriqueSauf1(ny)}y${ecritureAlgebriqueSauf1(nz)}z${ecritureAlgebriqueSauf0(d)}=0`

      texte =
        "Dans un repère orthonormé de l'espace, on considère le point " +
        `$A(${xA}~;${yA}~;${zA})$ et les vecteurs $\\vec u\\begin{pmatrix}${ux}\\\\${uy}\\\\${uz}\\end{pmatrix}$ et $\\vec v\\begin{pmatrix}${vx}\\\\${vy}\\\\${vz}\\end{pmatrix}$ qui ne sont pas colinéaires.<br>`
      texte +=
        "On note $\\mathcal{P}$ le plan passant par $A$ et engendré par $\\vec u$ et $\\vec v$. "
      texte +=
        `<br>Justifier que l'équation $${equationPlane}$  est une équation cartésienne du plan $\\mathcal{P}$.<br>`
   
let engendreparuv=''
     
      texteCorr =
        `Considérons le plan d'équation cartésienne $${equationPlane}$.<br>Nous allons procéder en deux étapes :` + createList({items:[engendreparuv,`${texteEnCouleurEtGras('Démontrer que le point A appartient à ce plan')}`] ,style: 'nombres'})  
engendreparuv=`${texteEnCouleurEtGras('Démontrer que ce plan est engendré par $\\vec u$ et $\\vec v$')}Démontrer que ce plan est engendré par $\\vec u$ et $\\vec v$, ce qui prouvera que ce plan est parallèle ou confondu au plan $\\mathcal{P}$. Par construction, $\\vec n$ est un vecteur normal au plan $(P)$.`
engendreparuv+=`${texteEnCouleurEtGras('Démontrer que ce plan est engendré par $\\vec u$ et $\\vec v$')}
      texteCorr +=
        'On vérifie qu'il est orthogonal aux deux générateurs :`
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

     if (this.questionJamaisPosee(i, texte)) {
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }

    listeQuestionsToContenu(this)
  }
}