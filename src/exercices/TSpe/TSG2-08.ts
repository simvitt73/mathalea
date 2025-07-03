import Exercice from '../Exercice'
import { choice, combinaisonListes } from '../../lib/outils/arrayOutils'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { ecritureAlgebrique, ecritureAlgebriqueSauf1, ecritureParentheseSiNegatif, reduireAxPlusB, rienSi0, rienSi1 } from '../../lib/outils/ecritures'
import { miseEnEvidence, texteEnCouleurEtGras, texteGras, texteItalique } from '../../lib/outils/embellissements'
import FractionEtendue from '../../modules/FractionEtendue'

export const titre = 'Position relative de deux droites'

export const dateDePublication = '28/06/2025' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

export const uuid = '36144'
export const refs = {
  'fr-fr': ['TSG2-08'],
  'fr-ch': []
}

function generateur (type: 'secantes' | 'paralleles' | 'nonCoplanaires' = 'secantes', original = false): {
  xB: number,
  yB: number,
  zB: number,
  vx: number,
  vy: number,
  vz: number,
  ux: number,
  uy: number,
  uz: number,
  xA: number,
  yA: number,
  zA: number,
  lambda: number | null,
  u1: FractionEtendue,
  u2: FractionEtendue,
  u3: FractionEtendue,
  u4: FractionEtendue,
  u5: FractionEtendue,
  u6: FractionEtendue,
  resultat1: FractionEtendue,
  resultat2: FractionEtendue,
  quotient1: FractionEtendue,
  quotient2: FractionEtendue
} {
  if (original) {
    return ({
      xA: 15,
      yA: 8,
      zA: -6,
      ux: 1,
      uy: -1,
      uz: 2,
      xB: 1,
      yB: 2,
      zB: 1,
      vx: 4,
      vy: 4,
      vz: -6,
      lambda: null,
      u1: new FractionEtendue(4, 1),
      u2: new FractionEtendue(4, -1),
      u3: new FractionEtendue(-6, 2),
      u4: new FractionEtendue(1, 1),
      u5: new FractionEtendue(2, -1),
      u6: new FractionEtendue(1, 2),
      resultat1: new FractionEtendue(4, 1),
      resultat2: new FractionEtendue(2, -1),
      quotient1: new FractionEtendue(4, 1),
      quotient2: new FractionEtendue(-6, 1)
    })
  } else {
    const xA = randint(-10, 10, 0) // abscisse du point A
    const yA = randint(-10, 10, 0) // ordonnée du point A
    const zA = randint(-10, 10, 0) // cote du point A
    // On choisit un vecteur directeur u de la droite (d)
    const ux = randint(-10, 10, 0) // composante x du vecteur directeur u
    const uy = randint(-10, 10, [yA, 0]) // composante y du vecteur directeur u
    const uz = randint(-10, 10, [zA, 0]) // composante z du vecteur directeur u
    // On choisit un vecteur directeur v de la droite (d')
    let xB = randint(-10, 10, [xA, 0]) // abscisse du point B
    let yB = randint(-10, 10, [yA, 0]) // ordonnée du point B
    let zB = randint(-10, 10, [zA, 0]) // cote du point B
    let vx = 0 // composante x du vecteur directeur v
    let vy = 0 // composante y du vecteur directeur v
    let vz = 0 // composante z du vecteur directeur v
    let lambda: number | null = null // Pour les droites parallèles, on utilise un lambda pour la colinéarité
    if (type === 'paralleles') {
      lambda = randint(-4, 4, [0, 1, -1]) // Pour éviter les droites parallèles
      vx = lambda * ux // On choisit un vecteur directeur v de la droite (d') parallèle à u
      vy = lambda * uy // On choisit un vecteur directeur v de la droite (d') parallèle à u
      vz = lambda * uz // On choisit un vecteur directeur v de la droite (d') parallèle
    } else { // sécant ou non coplanaire
      vx = randint(-10, 10, [ux, xA, 0]) // composante x du vecteur directeur v
      vy = randint(-10, 10, [uy, yA, 0]) // composante y du vecteur directeur v
      vz = randint(-10, 10, [uz, zA, 0]) // composante z du vecteur directeur v
      if (vx / ux === vy / uy && vy / uy === vz / uz) { vz = vz + 1 } // On s'assure que les droites ne sont pas parallèles
      if (type === 'secantes') {
        // vecteur AB = (xB-xA, yB-yA, zB-zA) colinéaire avec u et v
        const alpha = randint(-3, 3, 0) // Pour éviter les droites parallèles
        const beta = randint(-3, 3, 0) // Pour éviter les droites parallèles
        xB = alpha * ux + beta * vx + xA // Choisir xB pour que AB colinéaire avec u et v
        yB = alpha * uy + beta * vy + yA // Choisir yB pour que AB colinéaire avec u et v
        zB = alpha * uz + beta * vz + zA // Choisir zB pour que AB colinéaire avec u et v
      } else {
        zB -= 1 // Pour s'assurer que les droites ne sont pas coplanaires, on décale zB
      }
    }
    const u1 = new FractionEtendue(vx, ux)  // On crée les fractions étendues pour les vecteurs directeurs
    const u2 = new FractionEtendue(vy, uy) // On crée les fractions étendues pour les vecteurs directeurs
    const u3 = new FractionEtendue(vz, uz)  // On crée les fractions étendues pour les vecteurs directeurs
    const u4 = new FractionEtendue(xB - xA, ux)  // On crée les fractions étendues pour les vecteurs directeurs
    const u5 = new FractionEtendue(yB - yA, uy)  // On crée les fractions étendues pour les vecteurs directeurs
    const u6 = new FractionEtendue(zB - zA, uz)  // On crée les fractions étendues pour les vecteurs directeurs
    const det1 = vx * uy - ux * vy // On calcule le déterminant pour les vecteurs directeurs
    const det2 = vx * uz - ux * vz // On calcule le déterminant pour les vecteurs directeurs
    const resultat1 = type !== 'paralleles' ? new FractionEtendue(ux * (yB - yA) - uy * (xB - xA), det1) : new FractionEtendue(1, 1) // Pour le calcul de colinéarité si den === 0, alors on évite la division par 0
    const resultat2 = type !== 'paralleles' ? new FractionEtendue(ux * (zB - zA) - uz * (xB - xA), det2) : new FractionEtendue(1, 1) // Pour le calcul de colinéarité si den === 0, alors on évite la division par 0
    const quotient1 = new FractionEtendue(ux * uy, det1 !== 0 ? det1 : 1) // Pour la dernière ligne de calcul du quotient de la colinéarité
    const quotient2 = new FractionEtendue(ux * uz, det2 !== 0 ? det2 : 1) // Pour la dernière ligne de calcul du quotient de la colinéarité

    return {
      xA, yA, zA, ux, uy, uz, xB, yB, zB, vx, vy, vz, lambda: lambda ?? null, u1, u2, u3, u4, u5, u6, resultat1, resultat2, quotient1, quotient2
    }
  }
}

function bloc1Alea ({ xA, yA, zA, ux, uy, uz, xB, yB, zB, vx, vy, vz, u1, u2, u3, u4, u5, u6 }: { xA: number, yA: number, zA: number, ux: number, uy: number, uz: number, xB: number, yB: number, zB: number, vx: number, vy: number, vz: number, u1: FractionEtendue, u2: FractionEtendue, u3: FractionEtendue, u4: FractionEtendue, u5: FractionEtendue, u6: FractionEtendue }): string {
  return ` <br>$\\begin{cases}
            ${reduireAxPlusB(ux, xA, 't', { ordreInverse: true })} = ${reduireAxPlusB(vx, xB, 's', { ordreInverse: true })} \\\\
            ${reduireAxPlusB(uy, yA, 't', { ordreInverse: true })} = ${reduireAxPlusB(vy, yB, 's', { ordreInverse: true })} \\\\
            ${reduireAxPlusB(uz, zA, 't', { ordreInverse: true })} = ${reduireAxPlusB(vz, zB, 's', { ordreInverse: true })}
            \\end{cases}
          \\quad \\iff \\begin{cases}
            ${rienSi1(ux)}t = ${rienSi1(vx)}s ${ecritureAlgebrique(xB - xA)} \\\\
            ${rienSi1(uy)}t = ${rienSi1(vy)}s ${ecritureAlgebrique(yB - yA)} \\\\
            ${rienSi1(uz)}t = ${rienSi1(vz)}s ${ecritureAlgebrique(zB - zA)}
            \\end{cases}
          \\quad\\iff\\begin{cases}
            t = ${rienSi1(u1.simplifie())}s ${u4.simplifie().ecritureAlgebrique} \\\\
            t= ${rienSi1(u2.simplifie())}s ${u5.simplifie().ecritureAlgebrique} \\\\
            t = ${rienSi1(u3.simplifie())}s ${u6.simplifie().ecritureAlgebrique}
            \\end{cases}$`
}
function bloc2Alea ({ ux, vx, uy, vy, uz, vz, u1, u2, u3 }:{ ux: number, uy: number, uz: number, vx: number, vy: number, vz: number, u1: FractionEtendue, u2: FractionEtendue, u3: FractionEtendue }): string {
  return `On cherche si les coordonnées des vecteurs sont proportionnelles  c'est à dire s'il existe un réel $\\lambda$ tel que $\\vec u=\\lambda \\vec v$.<br>
         $\\phantom{\\iff}\\vec u=\\lambda \\vec v$
          $\\quad\\iff \\begin{cases}${ux}= ${rienSi1(vx)}\\lambda\\\\${uy}= ${rienSi1(vy)}\\lambda\\\\${uz}=${rienSi1(vz)}\\lambda\\end{cases}$
          $\\quad\\iff \\begin{cases}\\lambda =${u1.inverse().texFractionSimplifiee}\\\\\\lambda =${u2.inverse().texFractionSimplifiee}\\\\
           \\lambda =${u3.inverse().texFractionSimplifiee}\\end{cases}$`
}
/**
 * Stéphane Guyon
 * @author

*/
export default class NomExercice extends Exercice {
  constructor () {
    super()
    this.consigne = texteItalique('Préciser si l\'affirmation suivante est vraie ou fausse, puis justifier la réponse donnée.<br> Une réponse non argumentée ne sera pas prise en compte.')
    this.consigne += '<br> Dans un repère orthonormé de l\'espace, on considère les représentations paramétriques des droites $(d)$ et $(d~\')$'
    this.nbQuestions = 1 // Nombre de questions à générer
    this.correctionDetaillee = false
    this.correctionDetailleeDisponible = true
    this.besoinFormulaireCaseACocher = ['Sujet original', false]
    this.sup = false
  }

  nouvelleVersion () {
    const typeQuestionsDisponibles: Array<'secantes' | 'paralleles' | 'nonCoplanaires'> = ['secantes', 'paralleles', 'nonCoplanaires'] // Liste des types de questions disponibles

    const listeTypeQuestions: Array<'secantes' | 'paralleles' | 'nonCoplanaires'> = combinaisonListes(typeQuestionsDisponibles, this.nbQuestions) as Array<'secantes' | 'paralleles' | 'nonCoplanaires'> // On génère la liste des types de questions à poser
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      let texte = ''
      let texteCorr = ''
      const affirmation = this.sup
        ? 'Les droites $(d)$ et $(d~\')$ sont non coplanaires.'
        : choice(['Les droites $(d)$ et $(d~\')$ sont parallèles.',
          'Les droites $(d)$ et $(d~\')$ sont sécantes.',
          'Les droites $(d)$ et $(d~\')$ sont non coplanaires.']) // On choisit une affirmation aléatoire parmi les trois possibles

      const { xA, yA, zA, ux, uy, uz, xB, yB, zB, vx, vy, vz, u1, u2, u3, u4, u5, u6, resultat1, resultat2, quotient1, quotient2 } = generateur(listeTypeQuestions[i], this.sup) // On génère les coordonnées des points A et B et les vecteurs directeurs u et v
      const bloc1 = bloc1Alea({ xA, yA, zA, ux, uy, uz, xB, yB, zB, vx, vy, vz, u1, u2, u3, u4, u5, u6 }) // On génère le bloc 1 avec les coordonnées des points A et B et les vecteurs directeurs u et v
      const bloc2 = bloc2Alea({ ux, uy, uz, vx, vy, vz, u1, u2, u3 }) // On génère le bloc 2 avec les coordonnées des vecteurs directeurs u et v

      switch (listeTypeQuestions[i]) {
        //* ****************************************************************************
        // NON COPLANAIRES
        //* ****************************************************************************
        // */
        case 'nonCoplanaires':// Droites non-coplanaires
          texte += ` $(d):\\begin{cases}x=${reduireAxPlusB(ux, xA, 't', { ordreInverse: true })} \\\\y= ${rienSi0(yA)}  ${ecritureAlgebriqueSauf1(uy)}t\\quad(t\\in\\mathbb{R})\\\\z= ${rienSi0(zA)} ${ecritureAlgebriqueSauf1(uz)}t\\end{cases}$`
          texte += `$\\quad\\quad(d'):\\begin{cases}x=${rienSi0(xB)}${ecritureAlgebriqueSauf1(vx)}s\\\\y= ${rienSi0(yB)}  ${ecritureAlgebriqueSauf1(vy)}s\\quad(s\\in\\mathbb{R})\\\\z= ${rienSi0(zB)} ${ecritureAlgebriqueSauf1(vz)}s\\end{cases}$`
          // On écrit les représentations paramétriques des droites (d) et (d')
          texte += `<br><br>${texteEnCouleurEtGras('Affirmation :')}  ${affirmation}`

          texteCorr = texteEnCouleurEtGras('Étape 1 : Droites parallèles ?')
          if (this.correctionDetaillee) {
            texteCorr += '<br>On sait que la représentation paramétrique d\'une droite est de la forme '
            texteCorr += '$(d):\\begin{cases}x=x_A+at \\\\y= y_A+bt\\quad(t\\in\\mathbb{R})\\\\z= z_A+ct\\end{cases}$'
            texteCorr += '<br>où le point $A(x_A, y_A, z_A)$ est un point de la droite et $\\vec u\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}$ est un vecteur directeur de la droite.<br>'
          }
          texteCorr += `<br>On déduit de l'énoncé que le vecteur $\\vec u$ de coordonnées $\\vec u\\begin{pmatrix} ${ux}\\\\${uy}\\\\${uz}\\end{pmatrix}$ est un vecteur directeur de (d) `
          texteCorr += `et que $\\vec v$ de coordonnées $\\vec v\\begin{pmatrix} ${vx}\\\\${vy}\\\\${vz}\\end{pmatrix}$ est un vecteur directeur de (d'). <br>`
          // On teste la colinéarité des vecteurs directeurs
          texteCorr += bloc2
          texteCorr += '<br>Le système n\'admet pas de solutions donc les vecteurs ne sont donc pas colinéaires. <br>'
          texteCorr += `<br>${texteGras('Les droites $(d)$ et $(d~\')$ ne sont pas parallèles.')}`
          // On teste si les droites sont sécantes ou non-coplanaires
          texteCorr += texteEnCouleurEtGras('<br>Étape 2 : Droites sécantes ou non-coplanaires ?')
          texteCorr += '<br>Les droites $(d)$ et $(d\')$ sont sécantes, si et seulement s\'il existe un point d\'intersection $M(x;y;z)$ tel que $M\\in(d)\\cap (d\')$.'
          texteCorr += '<br>Les coordonnées du point $M$ vérifient donc les deux représentations paramétriques. <br>Ce qui est équivalent à résoudre le système suivant :'
          texteCorr += bloc1
          texteCorr += `<br>En égalisant les lignes 1 et 2, et les lignes 1 et 3, cela ${texteGras('implique')} que $s$ doit vérifier le système :<br>`
          texteCorr += `<br>$\\begin{cases}
            ${u1.texFractionSimplifiee}s ${u4.texFractionSimplifiee}=${u2.texFractionSimplifiee}s ${u5.texFractionSimplifiee} \\\\
             \\addlinespace[7pt]
         ${u1.texFractionSimplifiee}s ${u4.texFractionSimplifiee} = ${u3.texFractionSimplifiee}s ${u6.texFractionSimplifiee}
            \\end{cases}$`
          texteCorr += `$\\quad\\quad\\begin{cases}
            \\left(${u1.texFractionSimplifiee}+${u2.oppose().texFractionSimplifiee}\\right)s =${u5.texFractionSimplifiee}${u4.oppose().simplifie().ecritureAlgebrique} \\\\
          \\addlinespace[7pt]
          \\left(${u1.texFractionSimplifiee}+${u3.oppose().texFractionSimplifiee}\\right)s = ${u6.texFractionSimplifiee}${u4.oppose().simplifie().ecritureAlgebrique}
            \\end{cases}$`

          texteCorr += `$\\quad\\quad\\begin{cases}
            ${u1.differenceFraction(u2).simplifie().texFraction}s =${u5.differenceFraction(u4).simplifie().texFraction} \\\\
            \\addlinespace[7pt]
            ${u1.differenceFraction(u3).simplifie().texFraction}s = ${u6.differenceFraction(u4).simplifie().texFraction}
            \\end{cases}$`
          texteCorr += `<br><br>$\\begin{cases}
           s =${u5.differenceFraction(u4).simplifie().texFraction} \\times ${quotient1.simplifie().texFraction} \\\\
           \\addlinespace[7pt]
          s = ${u6.differenceFraction(u4).simplifie().texFraction} \\times ${quotient2.simplifie().texFraction} \\\\
            \\end{cases}$`

          texteCorr += `$\\quad\\quad\\begin{cases}
          s =${resultat1.simplifie().texFraction} \\\\
             \\addlinespace[7pt]
          s = ${resultat2.simplifie().texFraction}
            \\end{cases}$`
          texteCorr += '<br>Les deux équations sont incompatibles donc le système n\'admet pas de solution.<br>'
          texteCorr += texteEnCouleurEtGras('Conclusion :<br>')
          texteCorr += 'Donc les droites $(d)$ et $(d\')$ ont des vecteurs directeurs non colinéaires et ne sont pas sécantes, elles sont donc non-coplanaires.<br>'
          if (affirmation === 'Les droites $(d)$ et $(d~\')$ sont non coplanaires.') { texteCorr += texteEnCouleurEtGras('L\'affirmation est donc vraie.') } else { texteCorr += texteEnCouleurEtGras('L\'affirmation est donc fausse.') }
          break
          //* ****************************************************************************
          // SECANTES
          //* ****************************************************************************
          // */
        case 'secantes':{ // Droites sécantes
          texte += `$(d):\\begin{cases}x=${reduireAxPlusB(ux, xA, 't', { ordreInverse: true })} \\\\y= ${rienSi0(yA)}  ${ecritureAlgebriqueSauf1(uy)}t\\quad(t\\in\\mathbb{R})\\\\z= ${rienSi0(zA)} ${ecritureAlgebriqueSauf1(uz)}t\\end{cases}$`
          texte += `$\\quad\\quad(d'):\\begin{cases}x=${rienSi0(xB)}${ecritureAlgebriqueSauf1(vx)}s\\\\y= ${rienSi0(yB)}  ${ecritureAlgebriqueSauf1(vy)}s\\quad(s\\in\\mathbb{R})\\\\z= ${rienSi0(zB)} ${ecritureAlgebriqueSauf1(vz)}s\\end{cases}$`
          // On écrit les représentations paramétriques des droites (d) et (d')
          texte += `<br><br>${texteEnCouleurEtGras('Affirmation :')}  ${affirmation}`

          texteCorr = texteEnCouleurEtGras('Étape 1 : Droites parallèles ?')
          if (this.correctionDetaillee) {
            texteCorr += '<br>On sait que la représentation paramétrique d\'une droite est de la forme '
            texteCorr += '$(d):\\begin{cases}x=x_A+at \\\\y= y_A+bt\\quad(t\\in\\mathbb{R})\\\\z= z_A+ct\\end{cases}$'
            texteCorr += '<br>où le point $A(x_A, y_A, z_A)$ est un point de la droite et $\\vec u\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}$ est un vecteur directeur de la droite.<br>'
          }
          texteCorr += `<br>On déduit de l'énoncé que le vecteur $\\vec u$ de coordonnées $\\vec u\\begin{pmatrix} ${ux}\\\\${uy}\\\\${uz}\\end{pmatrix}$ est un vecteur directeur de (d) `
          texteCorr += `et que $\\vec v$ de coordonnées $\\vec v\\begin{pmatrix} ${vx}\\\\${vy}\\\\${vz}\\end{pmatrix}$ est un vecteur directeur de (d'). <br>`
          // On teste la colinéarité des vecteurs directeurs
          texteCorr += bloc2
          texteCorr += '<br>Le système n\'admet pas de solutions donc les vecteurs ne sont donc pas colinéaires. <br>'
          texteCorr += `<br>${texteGras('Les droites $(d)$ et $(d~\')$ ne sont pas parallèles.')}`
          // On teste si les droites sont sécantes ou non-coplanaires
          texteCorr += texteEnCouleurEtGras('<br>Étape 2 : Droites sécantes ou non-coplanaires ?')
          texteCorr += '<br> Un point M de coordonnées $M(x,y,z)$ appartient aux deux droites si, et seulement si, ses coordonnées vérifient les représentations  paramétriques des deux droites.'
          texteCorr += '<br>Ce qui est équivalent à résoudre le système suivant :'
          texteCorr += bloc1
          texteCorr += `<br><br>En égalisant les lignes 1 et 2, et les lignes 1 et 3, cela ${texteGras('implique')} que $s$ doit vérifier le système :<br>`
          texteCorr += `<br>$\\begin{cases}
            ${u1.texFractionSimplifiee}s ${u4.simplifie().ecritureAlgebrique}=${new FractionEtendue(vy, uy).texFractionSimplifiee}s ${u5.simplifie().ecritureAlgebrique} \\\\
           \\addlinespace[7pt]
           ${u1.texFractionSimplifiee}s ${u4.simplifie().ecritureAlgebrique} = ${new FractionEtendue(vz, uz).texFractionSimplifiee}s ${u6.simplifie().ecritureAlgebrique}
            \\end{cases}$`
          texteCorr += `$\\quad\\quad\\begin{cases}
            \\left(${u1.texFractionSimplifiee}+${u2.oppose().texFractionSimplifiee}\\right)s =${u5.texFractionSimplifiee}${u4.oppose().simplifie().ecritureAlgebrique} \\\\
          \\left(${u1.texFractionSimplifiee}+${u3.oppose().texFractionSimplifiee}\\right)s = ${u6.texFractionSimplifiee}${u4.oppose().simplifie().ecritureAlgebrique}
            \\end{cases}$`

          texteCorr += `$\\quad\\quad\\begin{cases}
            ${u1.differenceFraction(u2).simplifie().texFraction}s =${u5.differenceFraction(u4).simplifie().texFraction} \\\\
            \\addlinespace[7pt]
          ${u1.differenceFraction(u3).simplifie().texFraction}s = ${u6.differenceFraction(u4).simplifie().texFraction}
            \\end{cases}$`
          texteCorr += `<br><br>$\\begin{cases}
           s =${u5.differenceFraction(u4).simplifie().texFraction} \\times ${quotient1.simplifie().texFraction} \\\\
         \\addlinespace[7pt]
           s = ${u6.differenceFraction(u4).simplifie().texFraction} \\times ${quotient2.simplifie().texFraction} \\\\
            \\end{cases}$`

          texteCorr += `$\\quad\\quad\\begin{cases}
          s =${resultat1.simplifie().texFraction} \\\\
         \\addlinespace[7pt]
           s = ${resultat2.simplifie().texFraction}
            \\end{cases}$`
          texteCorr += '<br>En remplaçant la valeur de $s$ dans le sytème, on obtient :'
          texteCorr += `<br>$t =${u1.texFractionSimplifiee}\\times ${resultat2.simplifie().texFraction}${u4.simplifie().ecritureAlgebrique}$`
          const t = u1.produitFraction(resultat2).sommeFraction(u4).valeurDecimale // On calcule la valeur de t
          texteCorr += `d'où $t =${t}$.`

          texteCorr += `<br>${texteGras('Réciproquement')}, on vérifie que pour $t=${t}$ et $s=${resultat2.valeurDecimale}$ les deux représentations donnent les coordonnées de leur point commun.<br>`
          texteCorr += `$(d):\\begin{cases}x=${ux}\\times ${ecritureParentheseSiNegatif(t)}${ecritureAlgebrique(xA)}\\\\ y=${uy}\\times ${ecritureParentheseSiNegatif(t)}${ecritureAlgebrique(yA)}\\\\ z=${uz}\\times ${ecritureParentheseSiNegatif(t)}${ecritureAlgebrique(zA)}\\end{cases}$`
          texteCorr += `$\\quad\\quad(d):\\begin{cases}x=${ux * t + xA}\\\\ y=${uy * t + yA}\\\\ z=${uz * t + zA}\\end{cases}$`
          texteCorr += `<br>$(d'):\\begin{cases}x=${vx}\\times ${ecritureParentheseSiNegatif(resultat2.valeurDecimale)})${ecritureAlgebrique(xB)}\\\\ y=${vy}\\times ${ecritureAlgebrique(resultat2.valeurDecimale)}${ecritureAlgebrique(yB)}\\\\ z=${vz}\\times ${ecritureAlgebrique(resultat2.valeurDecimale)}${ecritureAlgebrique(zB)}\\end{cases}$`
          texteCorr += `$\\quad\\quad(d'):\\begin{cases}x=${vx * resultat2.valeurDecimale + xB}\\\\ y=${vy * resultat2.valeurDecimale + yB}\\\\ z=${vz * resultat2.valeurDecimale + zB}\\end{cases}$`
          texteCorr += `<br>On a montré que les droites $(d)$ et $(d')$ étaient sécantes au point de coordonnées $(${vx * resultat2.valeurDecimale + xB}; ${vy * resultat2.valeurDecimale + yB};${vz * resultat2.valeurDecimale + zB})$.<br>`

          texteCorr += texteEnCouleurEtGras('Conclusion :<br>')
          texteCorr += 'Donc les droites $(d)$ et $(d\')$ ont des vecteurs directeurs non colinéaires et un point en commun. Elles sont donc sécantes.<br>'
          if (affirmation === 'Les droites $(d)$ et $(d~\')$ sont sécantes.') { texteCorr += texteEnCouleurEtGras('L\'affirmation est donc vraie.') } else { texteCorr += texteEnCouleurEtGras('L\'affirmation est donc fausse.') }
        }
          break
          //* ****************************************************************************
          // PARALLELES
          //* ****************************************************************************
          // */

        case 'paralleles':// Droites parallèles

          texte += `$(d):\\begin{cases}x=${reduireAxPlusB(ux, xA, 't', { ordreInverse: true })} \\\\y= ${rienSi0(yA)}  ${ecritureAlgebriqueSauf1(uy)}t\\quad(t\\in\\mathbb{R})\\\\z= ${rienSi0(zA)} ${ecritureAlgebriqueSauf1(uz)}t\\end{cases}$`
          texte += `$\\quad\\quad(d'):\\begin{cases}x=${rienSi0(xB)}${ecritureAlgebriqueSauf1(vx)}s\\\\y= ${rienSi0(yB)}  ${ecritureAlgebriqueSauf1(vy)}s\\quad(s\\in\\mathbb{R})\\\\z= ${rienSi0(zB)} ${ecritureAlgebriqueSauf1(vz)}s\\end{cases}$`
          // On écrit les représentations paramétriques des droites (d) et (d')
          texte += `<br><br>${texteEnCouleurEtGras('Affirmation :')}  ${affirmation}`

          texteCorr = texteEnCouleurEtGras('Étape 1 : Droites parallèles ?')
          if (this.correctionDetaillee) {
            texteCorr += '<br>On sait que la représentation paramétrique d\'une droite est de la forme '
            texteCorr += '$(d):\\begin{cases}x=x_A+at \\\\y= y_A+bt\\quad(t\\in\\mathbb{R})\\\\z= z_A+ct\\end{cases}$'
            texteCorr += '<br>où le point $A(x_A, y_A, z_A)$ est un point de la droite et $\\vec u\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}$ est un vecteur directeur de la droite.<br>'
          }
          texteCorr += `<br>On déduit de l'énoncé que le vecteur $\\vec u$ de coordonnées $\\vec u\\begin{pmatrix} ${ux}\\\\${uy}\\\\${uz}\\end{pmatrix}$ est un vecteur directeur de (d) `
          texteCorr += `et que $\\vec v$ de coordonnées $\\vec v\\begin{pmatrix} ${vx}\\\\${vy}\\\\${vz}\\end{pmatrix}$ est un vecteur directeur de (d'). <br>`
          // On teste la colinéarité des vecteurs directeurs
          texteCorr += bloc2
          texteCorr += `<br>On peut conclure que $\\vec u =  ${u3.inverse().texFractionSimplifiee ?? ''} \\vec v$, les vecteurs sont alors colinéaires. <br>`
          texteCorr += `<br>${texteGras('Les droites $(d)$ et $(d~\')$ sont donc portées par des vecteurs de même direction.')}`
          // On teste si les droites sont sécantes ou non-coplanaires
          texteCorr += texteEnCouleurEtGras('<br>Étape 2 : Droites parallèles ou confondues ?')
          texteCorr += '<br>Dans ces conditions, les droites $(d)$ et $(d\')$ sont strictement parallèles, si et seulement si $(d)\\cap (d\')=\\emptyset$.'
          texteCorr += '<br>Un point M de coordonnées $M(x,y,z)$ appartient aux deux droites si, et seulement si, ses coordonnées vérifient les représentations paramétriques des deux droites.'
          texteCorr += '<br>Ce qui est équivalent à résoudre le système suivant :'
          texteCorr += bloc1
          texteCorr += '<br>Les équations sont incompatibles donc le système n\'admet pas de solution.<br>'
          texteCorr += texteEnCouleurEtGras('Conclusion :<br>')
          texteCorr += 'Donc les droites $(d)$ et $(d\')$ sont portées par des vecteurs colinéaires et ne sont pas sécantes, elles sont donc strictement parallèles.<br>'
          if (affirmation === 'Les droites $(d)$ et $(d~\')$ sont parallèles.') { texteCorr += texteEnCouleurEtGras('L\'affirmation est donc vraie.') } else { texteCorr += texteEnCouleurEtGras('L\'affirmation est donc fausse.') }
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
