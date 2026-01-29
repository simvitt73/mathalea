import { createList } from '../../lib/format/lists'
import { lampeMessage } from '../../lib/format/message'
import {
  ecritureAlgebrique,
  ecritureAlgebriqueSauf0,
  ecritureParentheseSiNegatif,
  rienSi0,
} from '../../lib/outils/ecritures'
import {
  miseEnEvidence,
  texteEnCouleurEtGras,
} from '../../lib/outils/embellissements'
import FractionEtendue from '../../modules/FractionEtendue'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const titre = "Calculer le volume d'un tétraèdre."

export const dateDePublication = '28/01/2026'

export const uuid = '7c2r9'

export const refs = {
  'fr-fr': ['TSG2-15'],
  'fr-ch': [],
}

export default class NomExercice extends Exercice {
  constructor() {
    super()
    this.nbQuestions = 1
  }

  nouvelleVersion() {
    const pgcd = (x: number, y: number): number =>
      y === 0 ? Math.abs(x) : pgcd(y, x % y)

    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      let texte = ''
      let texteCorr = ''

      // Point A
      const xA = randint(-4, 4)
      const yA = randint(-4, 4)
      const zA = randint(-4, 4)

      // Vecteur AB non nul
      let ABx = randint(-4, 4, 0)
      let ABy = randint(-4, 4, 0)
      let ABz = randint(-4, 4, 0)
      while (ABx === 0 && ABy === 0 && ABz === 0) {
        ABx = randint(-4, 4, 0)
        ABy = randint(-4, 4, 0)
        ABz = randint(-4, 4, 0)
      }

      // Vecteur AC choisi orthogonal à AB, avec composantes entières simples
      let ACx: number
      let ACy: number
      let ACz: number
      if (ABx !== 0 || ABy !== 0) {
        ACx = -ABy
        ACy = ABx
        ACz = 0
      } else {
        // AB est (0,0,ABz)
        ACx = 1
        ACy = 0
        ACz = 0
      }

      // Points B et C
      const xB = xA + ABx
      const yB = yA + ABy
      const zB = zA + ABz
      const xC = xA + ACx
      const yC = yA + ACy
      const zC = zA + ACz

      // Vecteur normal via produit vectoriel AB ^ AC
      let nx = ABy * ACz - ABz * ACy
      let ny = ABz * ACx - ABx * ACz
      let nz = ABx * ACy - ABy * ACx

      // Simplifier le vecteur normal
      const g = pgcd(pgcd(Math.abs(nx), Math.abs(ny)), Math.abs(nz))
      nx /= g
      ny /= g
      nz /= g

      // Point D quelconque, distinct pour la droite (d)
      const xD = randint(-4, 4, [xA, xB, xC])
      const yD = randint(-4, 4, [yA, yB, yC])
      const zD = randint(-4, 4, [zA, zB, zC])

      const dPlan = -(nx * xA + ny * yA + nz * zA)

      const question1 = 'Montrer que le triangle $ABC$ est rectangle en $A$.'
      const question2 = `Soit $\\vec n \\begin{pmatrix}${nx}\\\\${ny}\\\\${nz}\\end{pmatrix}$. Vérifier que ce vecteur est orthogonal au plan $(ABC)$.`
      const question3 = 'En déduire une équation cartésienne du plan $(ABC)$.'
      const question4 = `Donner une représentation paramétrique de la droite $(d)$ passant par $D(${xD} ; ${yD} ; ${zD})$ et de vecteur directeur $\\vec n$.`
      const question5 =
        'Calculer les coordonnées du point $H$, projection orthogonale de $D$ sur $(ABC)$.'
      const question6 = 'Calculer la longueur $DH$.'
      const question7 = 'Calculer le volume du tétraèdre $ABCD$.'

      texte =
        'Dans un repère orthonormé de l’espace, on considère les points :<br>' +
        `$A(${xA} ; ${yA} ; ${zA})$, $B(${xB} ; ${yB} ; ${zB})$, $C(${xC} ; ${yC} ; ${zC})$ et $D(${xD} ; ${yD} ; ${zD})$.<br>` +
        createList({
          items: [
            question1,
            question2,
            question3,
            question4,
            question5,
            question6,
            question7,
          ],
          style: 'nombres',
        })

      // Corrections
      let reponse1 = lampeMessage({
        titre: 'Méthode :',
        texte:
          'Pour montrer qu’un triangle $ABC$ est rectangle en $A$, on peut appliquer la réciproque du théorème de Pythagore ou vérifier que les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont orthogonaux en calculant leur produit scalaire.<br> La deuxième idée est plus rapide.',
      })

      reponse1 +='<br>On calcule les coordonnées des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ : <br>'
      reponse1 +='$\\overrightarrow{AB}\\begin{pmatrix}${xB}${ecritureAlgebrique(-xA)}\\\\${yB}${ecritureAlgebrique(-yA)}\\\\${zB}${ecritureAlgebrique(-zA)}\\end{pmatrix}$ donc $\\overrightarrow{AB}\\begin{pmatrix}${ABx}\\\\${ABy}\\\\${ABz}\\end{pmatrix}$'
      reponse1 +=`$\\overrightarrow{AC}\\begin{pmatrix}${xC}${ecritureAlgebrique(-xA)}\\\\${yC}${ecritureAlgebrique(-yA)}\\\\${zC}${ecritureAlgebrique(-zA)}\\end{pmatrix}$ donc $\\overrightarrow{AC}\\begin{pmatrix}${ACx}\\\\${ACy}\\\\${ACz}\\end{pmatrix}$.<br>` 
          reponse1 +=`Pour vérifier si ces vecteurs sont orthogonaux, on calcule leur produit scalaire : <bt>'` +
        ` $\\begin{aligned}\\overrightarrow{AB}\\cdot\\overrightarrow{AC} &= ${ABx}\\times${ACx} + ${ABy}\\times${ACy} + ${ABz}\\times${ACz} \\\\
        &= ${ABx * ACx + ABy * ACy + ABz * ACz}\\end{aligned}$.<br>` +
        'Il est nul et les deux vecteurs sont non nuls, donc $ABC$ est rectangle en $A$.'

      const reponse2 =
        texteEnCouleurEtGras('Vecteur normal au plan $(ABC)$ :') +
        `<br>On calcule $\\vec n \\cdot \\overrightarrow{AB} = ${nx}\\times${ecritureParentheseSiNegatif(
          ABx,
        )} ${ecritureAlgebrique(nx * ABy)} ${ecritureAlgebrique(nx * ABz)} = ${nx * ABx + ny * ABy + nz * ABz}$,` +
        ` et $\\vec n \\cdot \\overrightarrow{AC} = ${nx}\\times${ecritureParentheseSiNegatif(
          ACx,
        )} ${ecritureAlgebrique(nx * ACy)} ${ecritureAlgebrique(nx * ACz)} = ${nx * ACx + ny * ACy + nz * ACz}$.<br>` +
        'Les deux produits scalaires sont nuls : $\\vec n$ est bien orthogonal au plan $(ABC)$.'

      const reponse3 =
        lampeMessage({
          titre: 'Méthode :',
          texte:
            "Un vecteur normal $(a,b,c)$ conduit à une équation $ax+by+cz+d=0$. On remplace par les coordonnées d'un point du plan pour trouver $d$. Ici, on prend $A$.",
        }) +
        `On obtient $${nx}x ${ecritureAlgebrique(ny)}y ${ecritureAlgebrique(
          nz,
        )}z + d = 0$ et $${nx}\\times ${ecritureParentheseSiNegatif(
          xA,
        )} ${ecritureAlgebrique(ny)}\\times${ecritureParentheseSiNegatif(
          yA,
        )} ${ecritureAlgebrique(nz)}\\times${ecritureParentheseSiNegatif(
          zA,
        )} + d = 0$ d'où $d = ${dPlan}$.<br>` +
        `Ainsi, une équation du plan $(ABC)$ est ${miseEnEvidence(
          `$${rienSi0(nx)}x ${ecritureAlgebriqueSauf0(ny)}y ${ecritureAlgebriqueSauf0(
            nz,
          )}z ${ecritureAlgebriqueSauf0(dPlan)} = 0$`,
        )}.`

      const reponse4 =
        texteEnCouleurEtGras('Droite $(d)$ :') +
        `<br>Elle passe par $D(${xD} ; ${yD} ; ${zD})$ et a pour vecteur directeur $\\vec n$. Une représentation paramétrique est<br>` +
        `$\\left\\{ \\begin{array}{l}
x = ${xD} ${ecritureAlgebrique(nx)}t \\\\
y = ${yD} ${ecritureAlgebrique(ny)}t \\\\
z = ${zD} ${ecritureAlgebrique(nz)}t
\\end{array} \\right. \\quad (t \\in \\mathbb R).`

      // Projection orthogonale de D sur le plan (ABC)
      const denom = nx * nx + ny * ny + nz * nz
      const numer = nx * xD + ny * yD + nz * zD + dPlan
      const fracT = new FractionEtendue(-numer, denom)
      const xHFrac = new FractionEtendue(xD * denom - numer * nx, denom)
      const yHFrac = new FractionEtendue(yD * denom - numer * ny, denom)
      const zHFrac = new FractionEtendue(zD * denom - numer * nz, denom)
      const fracTDec = -numer / denom
      const xHDec = xHFrac.valeurDecimale
      const yHDec = yHFrac.valeurDecimale
      const zHDec = zHFrac.valeurDecimale
      const reponse5 =
        texteEnCouleurEtGras('Projection orthogonale :') +
        `<br>On cherche $t$ tel que $D + t\\vec n$ appartienne au plan d’équation $${nx}x ${ecritureAlgebrique(
          ny,
        )}y ${ecritureAlgebrique(nz)}z ${ecritureAlgebrique(dPlan)} = 0$ :<br>` +
        `${nx}(x_D + t\\,${nx}) ${ecritureAlgebrique(ny)}(y_D + t\\,${ny}) ${ecritureAlgebrique(
          nz,
        )}(z_D + t\\,${nz}) ${ecritureAlgebrique(dPlan)} = 0.<br>` +
        `Il vient $t = \\dfrac{-(${nx}x_D + ${ny}y_D + ${nz}z_D + ${dPlan})}{${denom}} = ${fracT.texFractionSimplifiee} \\approx ${fracTDec.toFixed(
          2,
        )}$.<br>` +
        `Donc $H\\left(${xHFrac.texFractionSimplifiee} ; ${yHFrac.texFractionSimplifiee} ; ${zHFrac.texFractionSimplifiee}\\right)$, soit numériquement $H(${xHDec.toFixed(
          2,
        )} ; ${yHDec.toFixed(2)} ; ${zHDec.toFixed(2)})$, et $\\overrightarrow{DH} = t\\,\\vec n$ est bien orthogonal au plan.`

      const normeDHDec = Math.abs(fracTDec) * Math.sqrt(denom)
      const reponse6 =
        texteEnCouleurEtGras('Longueur $DH$ :') +
        `<br>$DH = |t|\\,\\|\\vec n\\| = \\left|${fracT.texFractionSimplifiee}\\right|\\,\\sqrt{${denom}} \\approx ${normeDHDec.toFixed(
          2,
        )}.$`

      // Volume tétraèdre sans produit vectoriel : aire du triangle rectangle ABC puis hauteur DH
      const AB2 = ABx * ABx + ABy * ABy + ABz * ABz
      const AC2 = ACx * ACx + ACy * ACy + ACz * ACz
      const volumeDec = (Math.sqrt(AB2) * Math.sqrt(AC2) * normeDHDec) / 6
      const reponse7 =
        texteEnCouleurEtGras('Volume du tétraèdre :') +
        `<br>Le triangle $ABC$ est rectangle en $A$, donc $\\mathscr A_{ABC} = \\dfrac{\\|\\overrightarrow{AB}\\|\\,\\|\\overrightarrow{AC}\\|}{2} = \\dfrac{\\sqrt{${AB2}}\\,\\sqrt{${AC2}}}{2}$.<br>` +
        `Avec la hauteur $DH$, le volume vaut $V = \\dfrac{\\mathscr A_{ABC}\\,DH}{3} = \\dfrac{\\sqrt{${AB2}}\\,\\sqrt{${AC2}}\\,${fracT.texFractionSimplifiee}\\,\\sqrt{${denom}}}{6} \\approx ${volumeDec.toFixed(
          2,
        )}$.`

      texteCorr = createList({
        items: [
          reponse1,
          reponse2,
          reponse3,
          reponse4,
          reponse5,
          reponse6,
          reponse7,
        ],
        style: 'nombres',
      })

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
