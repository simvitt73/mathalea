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
 
     const degre1 = randint(2,2)
     const a2 = randint(1, 5) * choice([-1, 1])
     const b2 = randint(-5, 5, 0)
     const c2 = randint(-5, 5, 0)
     const d2 = randint(-5, 5, 0)
     const degre2 = randint(2,2)
   
   let sign1 = ''
   if (a1 > 0) {
     sign1 = 'plus'
   } else {
     sign1 = 'moins'
   }
   let p1: Polynome 
  let p2: Polynome
   if (degre1 === 2) {
     p1 = new Polynome({coeffs: [c1, b1, a1],letter:'n'})
   } else if (degre1 === 3) {
     p1 = new Polynome({coeffs: [d1, c1, b1, a1],letter:'n'})
   }     
   if (degre2 === 2) {
     p2 = new Polynome({coeffs: [c2, b2, a2],letter:'n'})
   } else if (degre2 === 3) {
     p2 = new Polynome({coeffs: [d2, c2, b2, a2],letter:'n'})
   }    


  this.question =
       `Déterminer la limite de la suite $(u_n)$ définie pour tout $n\\in\\mathbb{N}$ par : $u_n=\\dfrac{${p1.toString()}}{${p2.toString()}}$`
  this.correction = 'On observe une forme indéterminée du type $\\dfrac{\\infty}{\\infty}$ : <br>'
      this.correction += `Pour lever l'indétermination, on met en facteur le terme de plus haut degré.<br>`
 if (degre1 === 2 || degre2===2) {
     this.correction += `$\\lim\\limits_{n\\to+\\infty} ${rienSi1(a1)}n^{${degre1}}=${signe(a1)}\\infty$.<br>`
    
    
      this.correction += `$\\lim\\limits_{n\\to+\\infty} ${rienSi1(b1)}n^{${rienSi1(degre1-1)}}${ecritureAlgebrique(c1)}=${signe(b1)}\\infty$.<br>`
      this.correction += `Il s'agit d'une forme indéterminée du type $\\infty - \\infty$.<br>Pour lever cette indétermination, on met en facteur le terme de plus haut degré, ici $n^{2} :$<br>`
      this.correction += `Soit $n\\in\\mathbb{N}^{*}$, on a : <br>$\\begin{aligned} u_n&=${p1.toString()}\\\\&=n^{2}\\times \\left(${a1} ${signe(b1)}\\dfrac{${abs(b1)}}{n}${signe(c1)}\\dfrac{${abs(c1)}}{n^2}\\right)\\end{aligned}$<br><br>`
      this.correction += `Or $\\lim\\limits_{n\\to+\\infty} \\dfrac{${abs(b1)}}{n}=0$ et $\\lim\\limits_{n\\to+\\infty} \\dfrac{${abs(c1)}}{n^2}=0$.<br>`
      this.correction += `On en déduit, par somme, que $\\lim\\limits_{n\\to+\\infty} \\left(${a1} ${signe(b1)}\\dfrac{${abs(b1)}}{n}${signe(c1)}\\dfrac{${abs(c1)}}{n^2}\\right)=${a1}$.<br>`
      this.correction += `Comme $\\lim\\limits_{n\\to+\\infty} n^{2}=+\\infty$, par produit, $\\lim\\limits_{n\\to+\\infty} u_n=${miseEnEvidence(`${signe(a1)}\\infty.`)}$<br>`
         }   
 if (a1>0) {
         this.reponse = '+\\infty'
       } else {
         this.reponse = '-\\infty'
       }
       break
   
       this.correction += ` $\\lim\\limits_{n\\to+\\infty} ${rienSi1(b1)}n^{${degre1-1}}=${signe(b1)}\\infty.$<br>`
        this.correction += `$\\lim\\limits_{n\\to+\\infty}${rienSi1(c1)}n${ecritureAlgebrique(d1)}=${signe(c1)}\\infty$.<br>`
 
         
       if ((a1 > 0 && b1 > 0&& c1 > 0) || (a1 < 0 && b1 < 0&& c1 < 0)) {
         this.correction += `La suite $(u_n)$ est donc une somme de suites qui tendent vers ${sign1} l'infini. <br>On peut en déduire que $\\lim\\limits_{n\\to+\\infty} u_n= ${miseEnEvidence(`${signe(a1)}\\infty.`)}$<br>`
         } else {
           this.correction += `Il s'agit d'une forme indéterminée du type $\\infty - \\infty$.<br>Pour lever cette indétermination, on met en facteur le terme de plus haut degré, ici $n^{3} :$<br>`
            this.correction += `Soit $n\\in\\mathbb{N}^{*}$, on a : <br>$\\begin{aligned} u_n&=${p1.toString()}\\\\&=n^{3}\\times \\left(${a1} ${signe(b1)}\\dfrac{${abs(b1)}}{n}${signe(c1)}\\dfrac{${abs(c1)}}{n^2}${signe(d1)}\\dfrac{${abs(d1)}}{n^3}\\right)\\end{aligned}$<br><br>`
           this.correction += `Or $\\lim\\limits_{n\\to+\\infty} \\dfrac{${abs(b1)}}{n}=0$ , $\\lim\\limits_{n\\to+\\infty} \\dfrac{${abs(c1)}}{n^2}=0$ , et $\\lim\\limits_{n\\to+\\infty} \\dfrac{${abs(d1)}}{n^3}=0$ .<br>`
           this.correction += `On en déduit, par somme, que $\\lim\\limits_{n\\to+\\infty} \\left(${a1} ${signe(b1)}\\dfrac{${abs(b1)}}{n}${signe(c1)}\\dfrac{${abs(c1)}}{n^2}\\right)=${a1}$.<br>`
           this.correction += `Comme $\\lim\\limits_{n\\to+\\infty} n^{${a1}}=+\\infty$, par produit, $\\lim\\limits_{n\\to+\\infty} u_n=${miseEnEvidence(`${signe(a1)}\\infty.`)}$<br>`
         }
 
         this.reponse = '+\\infty'
      
      
    
   }
 }

export default N2PlusUnSurN
