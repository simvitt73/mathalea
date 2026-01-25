
import { createList } from '../../lib/format/lists'
import { ecritureAlgebrique, ecritureParentheseSiNegatif, rienSi1 } from '../../lib/outils/ecritures'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const titre =
  "Déterminer le projeté orthogonal d'un point sur une droite."

export const dateDePublication = '26/01/2025' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

export const uuid = 'd5251'

export const refs = {
  'fr-fr': ['TSG2-11'],
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
      const k = randint(-5, 5, [0,-1,1])
      const ux = randint(-5, 5, 0)
      const uy = randint(-5, 5, 0)
      const uz = randint(-5, 5, 0)

      // Point H
      const xH = xA + ux*k
      const yH = yA + uy*k
      const zH = zA + uz*k
      const nx=uy-uz  
      const ny=uz-ux
      const nz=ux-uy
      const xM = xH+ nx
      const yM = yH+ny
      const zM = zH+nz
      const xB=xA+ux
      const yB=yA+uy
      const zB=zA+uz

      texte = 'Dans un repère orthonormé de l\'espace, on considère les points $A$ , $B$  et $M$de coordonnées respectives : '
texte+=`$A(${xA} ; ${yA} ; ${zA})$ , $B(${xB} ; ${yB} ; ${zB})$ et $M(${xM} ; ${yM} ; ${zM})$ .<br>`
texte+=`Déterminer les coordonnées du point $H$ projeté orthogonal du point $M$ sur la droite $(AB)$ .<br>`

      texteCorr =
        'Soit $x$, $y$ et $z$ des réels tels que les coordonnées du point $H$ soient $H(x;y;z)$.<br>' 
texteCorr +='<br>Par définition du projeté orthogonal, on déduit deux informations :'
+ createList({items :['Les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{MH}$ sont orthogonaux','Le point $H$ appartient à la droite $(AB)$'], style: 'fleches'})
texteCorr +=` On va donc procéder en deux étapes :<br> On calcule les coordonnées du vecteur $\\overrightarrow{AB}\\begin{pmatrix}${xB}${ecritureAlgebrique(-xA)} \\\\${yB}${ecritureAlgebrique(-yA)} \\\\${zB}${ecritureAlgebrique(-zA)})\\end{pmatrix}$ d'où $\\overrightarrow{AB}\\begin{pmatrix}${ux} \\\\ ${uy} \\\\ ${uz}\\end{pmatrix}$ .<br>`
texteCorr +=`On calcule les coordonnées du vecteur $\\overrightarrow{MH} \\begin{pmatrix}x  ${ecritureAlgebrique(-xM)} \\\\ y  ${ecritureAlgebrique(-yM)} \\\\ z  ${ecritureAlgebrique(-zM)}\\end{pmatrix}$.`
texteCorr +=`Comme le vecteur $\\overrightarrow{AB}$ est orthogonal au vecteur $\\overrightarrow{AB}$, leur produit scalaire est nul.<br>`
texteCorr +=`Donc : $\\begin{aligned}\\phantom{\\iff}&\\overrightarrow{MH} \\cdot \\overrightarrow{AB} = 0\\\\
\\iff &(x ${ecritureAlgebrique(-xM)}) \\times ${ecritureParentheseSiNegatif(ux)} + (y ${ecritureAlgebrique(-yM)}) \\times ${ecritureParentheseSiNegatif(uy)} + (z ${ecritureAlgebrique(-zM)}) \\times ${ecritureParentheseSiNegatif(uz)} = 0\\\\
\\iff &${rienSi1(ux)}  x + ${rienSi1(uy)} y + ${rienSi1(uz)} z  ${ecritureAlgebrique(-(ux * xM + uy * yM + uz * zM))}=0\\end{aligned}$ <br>`
texteCorr +=`On cherche un point $H$ de la droite $(AB)$ , donc il existe un réel $t$ tel que : <br>`
texteCorr +=`$\\left\\{ \\begin{array}{l} x = ${xA} + ${ux} \\times t \\\\ y = ${yA} + ${uy} \\times t \\\\ z = ${zA} + ${uz} \\times t \\end{array} \\right.$ <br>`
texteCorr +=`En remplaçant dans l'équation précédente on obtient : <br>`
texteCorr +=`$${ux} \\times (${xA} + ${ux} \\times t) + ${uy} \\times (${yA} + ${uy} \\times t) + ${uz} \\times (${zA} + ${uz} \\times t) = ${ux * xM + uy * yM + uz * zM}$ <br>`
texteCorr +=`$\\Leftrightarrow (${ux}^2 + ${uy}^2 + ${uz}^2) \\times t = ${ux * xM + uy * yM + uz * zM} - (${ux} \\times ${xA} + ${uy} \\times ${yA} + ${uz} \\times ${zA})$ <br>`
texteCorr +=`$\\Leftrightarrow t = \\dfrac{${ux * xM + uy * yM + uz * zM} - (${ux} \\times ${xA} + ${uy} \\times ${yA} + ${uz} \\times ${zA})}{${ux * ux} + ${uy * uy} + ${uz * uz}} = ${((ux * xM + uy * yM + uz * zM) - (ux * xA + uy * yA + uz * zA)) / (ux * ux + uy * uy + uz * uz)}$ <br>`
texteCorr +=`On en déduit les coordonnées du point $H$ : <br>`
texteCorr +=`$\\left\\{ \\begin{array}{l} x_H = ${xA} + ${ux} \\times ${((ux * xM + uy * yM + uz * zM) - (ux * xA + uy * yA + uz * zA)) / (ux * ux + uy * uy + uz * uz)} \\\\ y_H = ${yA} + ${uy} \\times ${((ux * xM + uy * yM + uz * zM) - (ux * xA + uy * yA + uz * zA)) / (ux * ux + uy * uy + uz * uz)} \\\\ z_H = ${zA} + ${uz} \\times ${((ux * xM + uy * yM + uz * zM) - (ux * xA + uy * yA + uz * zA)) / (ux * ux + uy * uy + uz * uz)} \\end{array} \\right.$ <br>`


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
