import { createList } from '../../lib/format/lists'
import {
  ecritureAlgebrique,
  ecritureParentheseSiNegatif,
} from '../../lib/outils/ecritures'
import { texteEnCouleurEtGras } from '../../lib/outils/embellissements'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const titre = "Déterminer la position relative d'une droite et d'un plan"

export const dateDePublication = '26/01/2025' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

export const uuid = 'd5252'

export const refs = {
  'fr-fr': ['TSG2-10'],
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
    const pgcd = (a: number, b: number) => {
      let x = Math.abs(a)
      let y = Math.abs(b)
      while (y !== 0) {
        const t = y
        y = x % y
        x = t
      }
      return x === 0 ? 1 : x
    }

    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      let texte = ''
      let texteCorr = ''

      // Plan : équation ax + by + cz = 0 avec (a,b,c) non nul
      const a = randint(-4, 4, 0)
      const b = randint(-4, 4, 0)
      const c = randint(-4, 4, 0)
      
      const equationPlan = `${a}x${ecritureAlgebrique(b)}y${ecritureAlgebrique(c)}z=0`

      // Choix du cas : secant plus fréquent
      const tirageCas = randint(1, 6)
      const cas =
        tirageCas <= 3 ? 'secant' : tirageCas <= 5 ? 'parallele' : 'incluse'

      // Fonction pour obtenir un vecteur directeur orthogonal à (a,b,c)
      let ux: number
      let uy: number
      let uz: number

      // Données de la droite
      let x0 = 0
      let y0 = 0
      let z0 = 0
    

      if (cas === 'incluse') {
        // Point du plan et direction incluse dans le plan
       
          x0 = b
          y0 = -a
          z0 = 0
        
       
          ux=b
       uy= -a
       uz= 0
      } else if (cas === 'parallele') {
        // Direction dans le plan mais point extérieur
       
        ux=b
       uy= -a
       uz= 0
        // On part d'un point du plan puis on le translate selon la normale pour sortir du plan
        const pPlan =
          a !== 0 || b !== 0
            ? { x: b, y: -a, z: 0 }
            : { x: 1, y: 0, z: 0 }
        x0 = pPlan.x + a
        y0 = pPlan.y + b
        z0 = pPlan.z + c
      } else {
        // Cas sécant : vecteur non orthogonal au normal
        let produit = 0
        let essais = 0
        do {
          ux = randint(-4, 4, 0)
          uy = randint(-4, 4, 0)
          uz = randint(-4, 4, 0)
          produit = a * ux + b * uy + c * uz
          essais++
        } while (produit === 0 && essais < 20)
        if (produit === 0) {
          cpt++
          continue
        }
        x0 = randint(-5, 5, 0)
        y0 = randint(-5, 5, 0)
        z0 = randint(-5, 5, 0)
      }

      const produitScalaire = a * ux + b * uy + c * uz
      const valeurDuPoint = a * x0 + b * y0 + c * z0
   
      // Énoncé
      texte =
        'Dans l\'espace muni d\'un repère orthonormé, on considère un plan $\\mathcal{P}$ et une droite $(d)$ :<br>'
    texte += createList({
      items: [
        `Le plan $P$ a pour équation cartésienne : $${equationPlan}$.<br>`,
        `La droite $(d)$ admet la représentation paramétrique suivante :
        $(d) \\begin{cases}x=${x0}${ecritureAlgebrique(ux)}t\\\\y=${y0}${ecritureAlgebrique(uy)}t\\quad (t\\in\\mathbb{R})\\\\z=${z0}${ecritureAlgebrique(uz)}t\\end{cases}.$`
      ],
      style: 'fleches',
    })
      texte +=
        '<br>Déterminer la position relative de $(d)$ et $\\mathcal{P}$ .'
      texte +=
        '<br>En cas d’intersection, calculer les coordonnées du point commun.'

      // Correction
      let orthogonalite =`${texteEnCouleurEtGras('Etudier l\'orthogonalité d\'un vecteur directeur de $(d)$ et d\'un vecteur normal à $\\mathcal{P}$ ')}<br>Si un vecteur directeur de la droite $(d)$ est orthogonal au vecteur normal du plan $\\mathcal{P}$, alors la droite $(d)$ est parallèle au plan $\\mathcal{P}$ ou incluse dedans. <br>`
         orthogonalite +='Dans le cas contraire, la droite $(d)$ est sécante au plan $\\mathcal{P}$.<br>'
       orthogonalite +='On sait qu\'un plan qui a une équation cartesienne du type $ax+by+cz+d=0$ admet  $\\vec n\\begin{pmatrix}' +
        `a\\\\b\\\\c\\end{pmatrix}$ comme vecteur normal. <br>`
        orthogonalite +=
        'On en déduit que le vecteur $\\vec n\\begin{pmatrix}' +
        `${a}\\\\${b}\\\\${c}\\end{pmatrix}$ est un vecteur normal au  plan $(\\mathcal{P})$. <br>`
      orthogonalite +=
       'On sait qu\' une droite qui admet une représentation paramétrique de la forme $(d) \\begin{cases}x=x_0+at\\\\y=y_0+bt\\quad (t\\in\\mathbb{R})\\\\z=z_0+ct\\end{cases}$'
        orthogonalite +=
        '$\\quad$ admet comme vecteur directeur $\\vec u\\begin{pmatrix}' +
        `a\\\\b\\\\c\\end{pmatrix}$. <br>`
         orthogonalite +='On en déduit qu\'un vecteur directeur de la droite $(d)$ est $\\vec u\\begin{pmatrix}' +
        `${ux}\\\\${uy}\\\\${uz}\\end{pmatrix}$. <br>`
      orthogonalite +='On calcule le produit scalaire des vecteurs $\\vec n$ et $ \\vec u$ :<br>' +
        `$\\begin{aligned}\\vec n \\cdot \\vec u &=${a}\\times ${ecritureParentheseSiNegatif(ux)}${ecritureAlgebrique(b)}\\times ${ecritureParentheseSiNegatif(uy)}${ecritureAlgebrique(c)}\\times ${ecritureParentheseSiNegatif(uz)}\\\\
        & = ${produitScalaire}\\end{aligned}$.`
         if (produitScalaire !== 0) {
           orthogonalite += '<br>Le produit scalaire est non nul, les vecteurs ne sont donc pas orthogonaux.  La droite $(d)$ est sécante au plan $\\mathcal{P}$.'
           
         }
      else {orthogonalite += '<br>Le produit scalaire est nul, les vecteurs sont donc orthogonaux.  La droite $(d)$ est soit strictement parallèle au plan $\\mathcal{P}$ soit incluse dedans.'}
      
      let PointCommun =''
      PointCommun +=`${texteEnCouleurEtGras('Calcul du point d\'intersection entre la droite $(d)$ et le plan $\\mathcal{P}$ :')}<br>`
      PointCommun +='Pour déterminer le point d\'intersection entre la droite $(d)$ et le plan $\\mathcal{P}$, on remplace les expressions de $x$, $y$ et $z$ issues de la représentation paramétrique de la droite dans l\'équation cartésienne du plan. <br>'
      PointCommun +='On obtient ainsi une équation à une inconnue $t$. <br>'
      PointCommun +='En résolvant cette équation, on trouve la valeur de $t$ qui permet de déterminer les coordonnées du point d\'intersection en les remplaçant dans la représentation paramétrique de la droite. <br>'
      texteCorr =
        'Etudier la position relative de la droite $(d)$ et du plan $\\mathcal{P}$, c\'est déterminer si : '
         texteCorr +=createList({items:['$(d)$ est strictement parallèle à $\\mathcal{P}$', '$(d)$ est incluse dans $\\mathcal{P}$','$(d)$ est sécante $\\mathcal{P}$'],  style: 'fleches',
      })
        texteCorr +='<br>Nous allons pour cela procéder en deux étapes : <br>'+createList({items:[orthogonalite, PointCommun], style: 'nombres',
      })
            
     


      if (produitScalaire === 0 && valeurDuPoint === 0) {
        texteCorr +=
          '<br>Le vecteur directeur est orthogonal à $\\vec n$ et le point de passage vérifie l’équation du plan : la droite est incluse dans $(P)$.'
      } else if (produitScalaire === 0) {
        texteCorr +=
          "<br>Le vecteur directeur est orthogonal à $\\vec n$ mais le point n'appartient pas au plan ("
        texteCorr +=
          `$${a}\\times ${ecritureParentheseSiNegatif(x0)}${ecritureAlgebrique(b)}\\times ${ecritureParentheseSiNegatif(y0)}${ecritureAlgebrique(c)}\\times ${ecritureParentheseSiNegatif(z0)}=${valeurDuPoint}\\neq 0$)`
        texteCorr +=
          ' : la droite est parallèle au plan (sans point commun).'
      } else {
        const numerateur = -valeurDuPoint
        const denominateur = produitScalaire
        const div = pgcd(numerateur, denominateur)
        const numReduit = numerateur / div
        const denReduit = denominateur / div
        const tTex =
          denReduit === 1
            ? `${numReduit}`
            : `\\dfrac{${numReduit}}{${denReduit}}`
        const tValeur = numerateur / denominateur
        const xI = x0 + ux * tValeur
        const yI = y0 + uy * tValeur
        const zI = z0 + uz * tValeur

       
        texteCorr +=
          '<br>On résout le système $\\begin{cases}x=' +
          `${x0}${ecritureAlgebrique(ux)}t\\\\y=${y0}${ecritureAlgebrique(uy)}t\\\\z=${z0}${ecritureAlgebrique(uz)}t\\\\${equationPlan}\\end{cases}$.`
        texteCorr +=
          `<br>En remplaçant dans l’équation du plan, on obtient ${a}\\big(${x0}${ecritureAlgebrique(ux)}t\\big)${ecritureAlgebrique(b)}\\big(${y0}${ecritureAlgebrique(uy)}t\\big)${ecritureAlgebrique(c)}\\big(${z0}${ecritureAlgebrique(uz)}t\\big)=0, soit ${denominateur}t${ecritureAlgebrique(numerateur)}=0.`
        texteCorr += `<br>D’où $t=${tTex}$.`
        texteCorr +=
          `<br>Le point d’intersection est donc $I\\Big(${x0}${ecritureAlgebrique(ux)}\\times ${tTex}\\ ;\\ ${y0}${ecritureAlgebrique(uy)}\\times ${tTex}\\ ;\\ ${z0}${ecritureAlgebrique(uz)}\\times ${tTex}\\Big)$`
        texteCorr +=
          `, soit numériquement $I\\approx\\big(${xI.toFixed(2)}\\ ;\\ ${yI.toFixed(2)}\\ ;\\ ${zI.toFixed(2)}\\big)$.`
      }

      if (
        this.questionJamaisPosee(
          i,
          a,
          b,
          c,
          ux,
          uy,
          uz,
          x0,
          y0,
          z0,
          cas,
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
