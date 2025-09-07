
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { randint } from '../../../modules/outils'
import ExerciceQcmA from '../../ExerciceQcmA'
export const dateDePublication = '10/08/2025'
export const uuid = '41fa7'
/** @author Stéphane Guyon */
export const refs = {
  'fr-fr': ['canTEC1-04'],
  'fr-ch': [],
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'Calculer les puissances de $\\mathrm{i}$'
export default class Complexes1 extends ExerciceQcmA {
  versionOriginale: () => void = () => {
    this.enonce =
      '$\\mathrm{i}^{4}$ est égal à '
    this.correction =
      `On sait que $\\mathrm{i}^{2}=-1$ donc $\\mathrm{i}^{4}=\\left(-1\\right)^{2}=${miseEnEvidence('1')}.$`

    this.reponses = [
      '$1 $',
      '$-1$ ',
      '$\\mathrm{i} $',
      '$-\\mathrm{i}$ ',
    ]
  }

  versionAleatoire = () => {
    const k = randint(3,15)

const moins = randint(1, 1)

          switch(moins) {
    case 1: 
     this.enonce =
        `$\\mathrm{i}^{${k}}$ est égal à `
this.correction =
        `On sait que $\\mathrm{i}^{2}=-1$ `
    
    if (k%4===0) {
      if (k===4) {this.correction += ` donc $\\mathrm{i}^{4}=${miseEnEvidence('1')}$ .`}
      else {
        this.correction +=
        ` donc $\\mathrm{i}^{4}=1$ .<br>$\\begin{aligned}\\mathrm{i}^{${k}}&=\\left(\\mathrm{i}^{4}\\right)^{${k/4}}\\\\
        &=${miseEnEvidence('1')}.
        \\end{aligned}$`
        }
       this.reponses = [
          '$1 $',
          '$-1$ ',
          '$\\mathrm{i} $',
      '$-\\mathrm{i}$ ',
    ]}
     if (k===7) {
       this.correction +=
         ` donc $\\mathrm{i}^{4}=1$, <br> 
         $\\begin{aligned}
         \\mathrm{i}^{7}&=\\mathrm{i}^{4}\\times \\mathrm{i}^{3}\\\\
          &=\\mathrm{i}^{3}\\\\
         &=\\mathrm{i}^{2}\\times\\mathrm{i}\\\\
          &=${miseEnEvidence('-\\mathrm{i}.')}
         \\end{aligned}$`
       this.reponses = [
           '$-\\mathrm{i} $',
           '$1 $',
           '$-1$ ',
           '$\\mathrm{i}$ ',
       ]
    }
     if (k===3) {
      this.correction +=
         `  <br> 
         $\\begin{aligned}
         \\mathrm{i}^{3}&=\\mathrm{i}^{2}\\times \\mathrm{i}\\\\
         &=${miseEnEvidence('-\\mathrm{i}.')}
         \\end{aligned}$`
      this.reponses = [
           '$-\\mathrm{i} $',
           '$1 $',
           '$-1$ ',
           '$\\mathrm{i}$ ',
       ]
    }
      if (k%4===2) {
        this.correction +=
         ` donc $\\mathrm{i}^{4}=1$, <br>  
         $\\begin{aligned}
         \\mathrm{i}^{${k}}&=\\mathrm{i}^{${k-2}}\\times \\mathrm{i}^{2}\\\\
         &=\\left(\\mathrm{i}^{4}\\right)^{${(k-2)/4}}\\times \\mathrm{i}^{2}\\\\
         &=${miseEnEvidence('-1.')}
         \\end{aligned}$`
         this.reponses = [
           '$-1$ ',
           '$-\\mathrm{i}$ ',
           '$1 $',
           '$\\mathrm{i} $',
       ]
    }
     if (k%4===1) {
         this.correction +=
         ` donc $\\mathrm{i}^{4}=1$, <br>  
         $\\begin{aligned}
         \\mathrm{i}^{${k}}&=\\mathrm{i}^{${k-1}}\\times\\mathrm{i}\\\\
         &=\\left(\\mathrm{i}^{4}\\right)^{${(k-1)/4}}\\times\\mathrm{i}\\\\
         &=${miseEnEvidence('\\mathrm{i}.')}
         \\end{aligned}$`
         this.reponses = [
            '$\\mathrm{i}$ ',
            '$1 $',
            '$-1$ ',
            '-$\\mathrm{i} $'
       ]
     }
     break
    case 2:
      this.enonce =
        '$\\left(\\mathrm{i}\\right)^{n}$ est égal à '
      this.correction =
        'On sait que $\\left(\\mathrm{i}\\right)^{2}=-1$ donc'
      this.correction +=
        ` $\\left(\\mathrm{i}\\right)^{${k}}=`
       
      this.reponses = [
        '$\\left(-1\\right)^{n} $',
        '$\\left(-1\\right)^{n+1}$ ',
        '$-\\left(-1\\right)^{n} $',
        '$\\left(-1\\right)^{n-1}$ ',
      ]
    
      this.reponses = [
        '$1 $',
        '$-1$ ',
        '$\\mathrm{i} $',
        '$-\\mathrm{i}$ ',
      ]
      break
  }
}
  constructor() {
    super()
    this.versionAleatoire()
  }
}
