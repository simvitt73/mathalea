import { gestionnaireFormulaireTexte, listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'
import FractionEtendue from '../../modules/FractionEtendue'
import EquationSecondDegre from '../../modules/EquationSecondDegre'

export const titre = 'Résoudre une équaton du second degré à l\'aide la racine carrée'
export const dateDePublication = '14/05/2024'
export const interactifReady = false
export const uuid = '1be55'
export const refs = {
  'fr-fr': ['3L15-2'],
  'fr-ch': ['11FA10-14']
}

// export const dateDeModifImportante = '24/10/2021'

/**
 * Description didactique de l'exercice
 * @author Nathan Scheinmann
*/

export default class nomExercice extends Exercice {
  constructor () {
    super()
    this.besoinFormulaireTexte = ['Nombre de solutions', '1 : Une solution\n2 : Deux solutions\n3 : Pas de solution\n4 : Mélange']
    this.besoinFormulaire2Texte = ['Types de solution', '1 : Entier\n2 : Fraction\n3 : Racine\n4 : Mélange']
    this.besoinFormulaire3Texte = ['Nature des coefficients', '1 : Entiers\n2 : Fractions\n3 : Mélange']
    this.besoinFormulaire4Texte = ['Format de l\'équation', '1 : Réduite ordonnée\n2 : Réduite mélangée\n3 : Mélangée simple\n4 : Mélangée compliquée\n5 : Mélange']
    this.sup = 4
    this.sup2 = 4
    this.sup3 = 4
    this.sup4 = 4
    this.nbQuestions = 3
  }

  nouvelleVersion () {
    // Exemple d'utilisation :
    const equation1 = EquationSecondDegre.aPartirDesCoefficients(new FractionEtendue(1, 2), new FractionEtendue(10, 1), new FractionEtendue(-4, 1), new FractionEtendue(0, 1), new FractionEtendue(0, 1), new FractionEtendue(0, 1), { variable: 'x', format: 'melangeComplique' })
    console.log(equation1.delta, equation1.natureDesSolutions)
    this.listeQuestions = []
    this.listeCorrections = []
    this.autoCorrection = []
    this.listeQuestions = [] // Liste de questions
    this.listeCorrections = [] // Liste de questions corrigées
    const listeTypeDeQuestions = gestionnaireFormulaireTexte({
      saisie: this.sup,
      min: 1,
      max: 3,
      melange: 4,
      defaut: 4,
      listeOfCase: ['uneSol', 'deuxSol', 'pasSol'],
      shuffle: true,
      nbQuestions: this.nbQuestions
    })
    const sousChoixSol = gestionnaireFormulaireTexte({
      saisie: this.sup2,
      min: 1,
      max: 3,
      melange: 4,
      defaut: 4,
      listeOfCase: ['entier', 'fraction', 'racine'],
      nbQuestions: this.nbQuestions,
      shuffle: true
    })
    const sousChoixCoeff = gestionnaireFormulaireTexte({
      saisie: this.sup3,
      min: 1,
      max: 2,
      melange: 3,
      defaut: 3,
      listeOfCase: ['entier', 'fraction'],
      nbQuestions: this.nbQuestions,
      shuffle: true
    })
    const sousChoixForme = gestionnaireFormulaireTexte({
      saisie: this.sup4,
      min: 1,
      max: 4,
      melange: 5,
      defaut: 5,
      listeOfCase: ['reduit', 'reduitMelange', 'melangeSimple', 'melangeComplique'],
      nbQuestions: this.nbQuestions,
      shuffle: true
    })
    if (this.nbQuestions === 1) {
      this.consigne = 'Résoudre l\'équation suivante en utilisant la formule quadratique.'
    } else {
      this.consigne = 'Résoudre les équations suivantes en utilisant la formule quadratique.'
    }
    if (this.interactif) {
      this.consigne += ' Entrer les solutions sous forme d\'un ensemble en séparant les éléments séparé par des point-virgules. Si une équation n\'a pas de solution entrer l\'ensemble vide.'
    }

    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      let texte = ''
      let texteCorr = ''
      let equation = new EquationSecondDegre(new FractionEtendue(1, 1), new FractionEtendue(1, 1), new FractionEtendue(1, 1), new FractionEtendue(0, 1), new FractionEtendue(0, 1), new FractionEtendue(0, 1), { variable: 'x', format: 'melangeComplique' })
      let a : FractionEtendue
      let b : FractionEtendue
      let c : FractionEtendue
      let s1: FractionEtendue
      let s2 : FractionEtendue
      console.log(listeTypeDeQuestions[i], sousChoixSol[i], sousChoixCoeff[i], sousChoixForme[i])
      if (listeTypeDeQuestions[i] === 'pasSol') {
        if (sousChoixCoeff[i] === 'entier') {
          do {
            a = new FractionEtendue(randint(-10, 10,[0]), 1)
            b = new FractionEtendue(randint(-10, 10), 1)
            c = new FractionEtendue(randint(-10, 10), 1)
            equation = EquationSecondDegre.aPartirDesCoefficients(a, b, c, new FractionEtendue(0, 1), new FractionEtendue(0, 1), new FractionEtendue(0, 1), { variable: 'x', format: sousChoixForme[i] as string })
          } while (!(equation.delta.signe === -1))
        } else if (sousChoixCoeff[i] === 'fraction') {
          do {
            a = new FractionEtendue(randint(-10, 10,[0]), randint(-10, 10, [0]))
            b = new FractionEtendue(randint(-10, 10), randint(-10, 10, [0]))
            c = new FractionEtendue(randint(-10, 10), randint(-10, 10, [0]))
            equation = EquationSecondDegre.aPartirDesCoefficients(a, b, c, new FractionEtendue(0, 1), new FractionEtendue(0, 1), new FractionEtendue(0, 1), { variable: 'x', format: sousChoixForme[i] as string })
          } while (!(equation.delta.signe === -1) || (a.den === 1 && b.den === 1 && c.den === 1))
        }
      } else if (listeTypeDeQuestions[i] === 'uneSol') {
        if (sousChoixSol[i] === 'entier') {
          s1 = new FractionEtendue(randint(-10, 10), 1)
          const coeffLead = new FractionEtendue(randint(-3, 3, [0]), 1)
          equation = EquationSecondDegre.aPartirDesSolutions(s1, s1, coeffLead, { variable: 'x', format: sousChoixForme[i] as string })
        }
        if (sousChoixSol[i] === 'fraction') {
          do {
            s1 = new FractionEtendue(randint(-10, 10), randint(1, 10, [0]))
            const coeffLead = new FractionEtendue(randint(-3, 3, [0]), 1)
            equation = EquationSecondDegre.aPartirDesSolutions(s1, s1, coeffLead, { variable: 'x', format: sousChoixForme[i] as string })
          } while (s1.den === 1)
        }
      } else if (listeTypeDeQuestions[i] === 'deuxSol') {
        if (sousChoixSol[i] === 'entier') {
          do {
            s1 = new FractionEtendue(randint(-10, 10), 1)
            s2 = new FractionEtendue(randint(-10, 10), 1)
            const coeffLead = new FractionEtendue(1, 1)
            equation = EquationSecondDegre.aPartirDesSolutions(s1, s2, coeffLead, { variable: 'x', format: sousChoixForme[i] as string })
          } while (s1.num === s2.num && s1.den === s2.den)
        }
        if (sousChoixSol[i] === 'fraction') {
          do {
            s1 = new FractionEtendue(randint(-10, 10), randint(1, 10, [0]))
            s2 = new FractionEtendue(randint(-10, 10), randint(1, 10, [0]))
            const coeffLead = new FractionEtendue(1, 1)
            equation = EquationSecondDegre.aPartirDesSolutions(s1, s2, coeffLead, { variable: 'x', format: sousChoixForme[i] as string })
          } while (s1.den === 1 || s2.den === 1 || (s1.den === s2.den && s1.num === s2.num))
        }
      }
      texte += `$${equation.equationTex}$`
      texteCorr += `${equation.correctionDetailleeTex}`
      if (this.questionJamaisPosee(i, equation.ensembleDeSolutionsTex, equation.equationTex)) {
        this.listeQuestions.push(texte)
        this.listeCorrections.push(texteCorr)
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}
