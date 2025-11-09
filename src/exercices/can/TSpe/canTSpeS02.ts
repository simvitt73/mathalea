import { Polynome } from '../../../lib/mathFonctions/Polynome'
import { choice } from '../../../lib/outils/arrayOutils'
import { ecritureAlgebrique, rienSi1 } from '../../../lib/outils/ecritures'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { abs, signe } from '../../../lib/outils/nombres'
import { randint } from '../../../modules/outils'
import ExerciceSimple from '../../ExerciceSimple'
export const titre = 'Limite de suites rationnelles'
export const interactifReady = true
export const interactifType = 'mathLive'

export const uuid = '81cd8'
export const refs = {
  'fr-fr': ['canTSpeS02'],
  'fr-ch': [],
}
export const dateDePublication = '12/08/2024'

/**
 * limites de suites (canT)
 * @author Jean-Claude Lhote et Stéphane Guyon
 *
 */
class N2PlusUnSurN extends ExerciceSimple {
  constructor() {
    super()
    this.nbQuestions = 1
    this.typeExercice = 'simple'
  }

  nouvelleVersion() {
   const a1 = randint(1, 5) * choice([-1, 1])
     const b1 = randint(-5, 5, 0)
     const c1 = randint(-5, 5, 0)
     const d1 = randint(-5, 5, 0)
     const e = randint(-5, 5, 0)
     const degre1 = randint(3,3)
     const a2 = randint(1, 5) * choice([-1, 1])
     const b2 = randint(-5, 5, 0)
     const c2 = randint(-5, 5, 0)
     const d2 = randint(-5, 5, 0)
     const degre2 = randint(2,2)
   
   let sign = ''
   if (a1 > 0) {
     sign = 'plus'
   } else {
     sign = 'moins'
   }
   let p: Polynome 
    let p2: Polynome
   if (degre1 === 2) {
     p = new Polynome({coeffs: [c1, b1, a1],letter:'n'})
   } else if (degre1 === 3) {
     p = new Polynome({coeffs: [d1, c1, b1, a1],letter:'n'})
   }     
   if (degre2 === 2) {
     p2 = new Polynome({coeffs: [c2, b2, a2],letter:'n'})
   } else if (degre2 === 3) {
     p2 = new Polynome({coeffs: [d2, c2, b2, a2],letter:'n'})
   }    
 
 
     this.question =
       `Déterminer la limite de la suite $(u_n)$ définie pour tout $n\\in\\mathbb{N}$ par : $u_n=${p.toString()}$`
     this.correction = 'On sait avec les limites de références que : <br>'
     this.correction += `$\\lim\\limits_{n\\to+\\infty} ${rienSi1(a)}n^{${degre}}=${signe(a)}\\infty$.<br>`
    
     switch (degre) {
       case 2:
        this.correction += `$\\lim\\limits_{n\\to+\\infty} ${rienSi1(b)}n^{${rienSi1(degre-1)}}${ecritureAlgebrique(c)}=${signe(b)}\\infty$.<br>`
         if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
           this.correction += `La suite $(u_n)$ est donc une somme de suites qui tendent vers ${sign} l'infini. <br>On peut en déduire que $\\lim\\limits_{n\\to+\\infty} u_n= ${miseEnEvidence(`${signe(a)}\\infty.`)}$<br>`
         } else {
           this.correction += `Il s'agit d'une forme indéterminée du type $\\infty - \\infty$.<br>Pour lever cette indétermination, on met en facteur le terme de plus haut degré, ici $n^{2} :$<br>`
            this.correction += `Soit $n\\in\\mathbb{N}^{*}$, on a : <br>$\\begin{aligned} u_n&=${p.toString()}\\\\&=n^{2}\\times \\left(${a} ${signe(b)}\\dfrac{${abs(b)}}{n}${signe(c)}\\dfrac{${abs(c)}}{n^2}\\right)\\end{aligned}$<br><br>`
           this.correction += `Or $\\lim\\limits_{n\\to+\\infty} \\dfrac{${abs(b)}}{n}=0$ et $\\lim\\limits_{n\\to+\\infty} \\dfrac{${abs(c)}}{n^2}=0$.<br>`
           this.correction += `On en déduit, par somme, que $\\lim\\limits_{n\\to+\\infty} \\left(${a} ${signe(b)}\\dfrac{${abs(b)}}{n}${signe(c)}\\dfrac{${abs(c)}}{n^2}\\right)=${a}$.<br>`
           this.correction += `Comme $\\lim\\limits_{n\\to+\\infty} n^{2}=+\\infty$, par produit, $\\lim\\limits_{n\\to+\\infty} u_n=${miseEnEvidence(`${signe(a)}\\infty.`)}$<br>`
         }
 if (a>0) {
         this.reponse = '+\\infty'
       } else {
         this.reponse = '-\\infty'
       }
       break
     case 3:
       this.correction += ` $\\lim\\limits_{n\\to+\\infty} ${rienSi1(b)}n^{${degre-1}}=${signe(b)}\\infty.$<br>`
        this.correction += `$\\lim\\limits_{n\\to+\\infty}${rienSi1(c)}n${ecritureAlgebrique(d)}=${signe(c)}\\infty$.<br>`
 
         
       if ((a > 0 && b > 0&& c > 0) || (a < 0 && b < 0&& c < 0)) {
         this.correction += `La suite $(u_n)$ est donc une somme de suites qui tendent vers ${sign} l'infini. <br>On peut en déduire que $\\lim\\limits_{n\\to+\\infty} u_n= ${miseEnEvidence(`${signe(a)}\\infty.`)}$<br>`
         } else {
           this.correction += `Il s'agit d'une forme indéterminée du type $\\infty - \\infty$.<br>Pour lever cette indétermination, on met en facteur le terme de plus haut degré, ici $n^{3} :$<br>`
            this.correction += `Soit $n\\in\\mathbb{N}^{*}$, on a : <br>$\\begin{aligned} u_n&=${p.toString()}\\\\&=n^{3}\\times \\left(${a} ${signe(b)}\\dfrac{${abs(b)}}{n}${signe(c)}\\dfrac{${abs(c)}}{n^2}${signe(d)}\\dfrac{${abs(d)}}{n^3}\\right)\\end{aligned}$<br><br>`
           this.correction += `Or $\\lim\\limits_{n\\to+\\infty} \\dfrac{${abs(b)}}{n}=0$ , $\\lim\\limits_{n\\to+\\infty} \\dfrac{${abs(c)}}{n^2}=0$ , et $\\lim\\limits_{n\\to+\\infty} \\dfrac{${abs(d)}}{n^3}=0$ .<br>`
           this.correction += `On en déduit, par somme, que $\\lim\\limits_{n\\to+\\infty} \\left(${a} ${signe(b)}\\dfrac{${abs(b)}}{n}${signe(c)}\\dfrac{${abs(c)}}{n^2}\\right)=${a}$.<br>`
           this.correction += `Comme $\\lim\\limits_{n\\to+\\infty} n^{${a}}=+\\infty$, par produit, $\\lim\\limits_{n\\to+\\infty} u_n=${miseEnEvidence(`${signe(a)}\\infty.`)}$<br>`
         }
 
         this.reponse = '+\\infty'
         break
      
     }
   }
 }
 
export default N2PlusUnSurN
