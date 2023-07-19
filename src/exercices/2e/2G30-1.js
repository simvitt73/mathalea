import { ecritureParentheseSiNegatif } from '../../lib/outils/ecritures.js'
import FractionEtendue from '../../modules/FractionEtendue.js'
import Exercice from '../Exercice.js'
import { listeQuestionsToContenu, combinaisonListes, randint } from '../../modules/outils.js'
import { setReponse } from '../../lib/interactif/gestionInteractif.js'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive.js'
import { context } from '../../modules/context.js'
export const titre = "Déterminer le coefficient directeur d'une droite"
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcReady = true
export const amcType = 'AMCHybride'

/**
 * Description didactique de l'exercice
 * @author Stéphane Guyon
 * 2G30-1, ex 2G50
*/
export const uuid = '1ea16'
export const ref = '2G30-1'
export default function CoefficientDirecteurDeDroite () {
  Exercice.call(this) // Héritage de la classe Exercice()

  this.nbQuestions = 3
  this.nbCols = 2 // Uniquement pour la sortie LaTeX
  this.nbColsCorr = 2 // Uniquement pour la sortie LaTeX
  this.sup = 1 // Niveau de difficulté
  this.tailleDiaporama = 3 // Pour les exercices chronométrés. 50 par défaut pour les exercices avec du texte
  this.video = '' // Id YouTube ou url

  this.nouvelleVersion = function () {
    this.listeQuestions = [] // Liste de questions
    this.listeCorrections = [] // Liste de questions corrigées
    this.autoCorrection = []
    const obliques = [true, true, true, true, false] // On créé 2 types de questions avec une répartition 80%/20%
    const listeTypeQuestions = combinaisonListes(obliques, this.nbQuestions) // Tous les types de questions sont posés mais l'ordre diffère à chaque "cycle"
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      const oblique = listeTypeQuestions[i] // un booléen pour différencier les deux cas
      this.consigne = 'Soit $\\big(O,\\vec \\imath;\\vec \\jmath\\big)$ un repère orthogonal. Déterminer'
      this.consigne += !this.interactif ? ", s'il existe et en justifiant," : ''
      this.consigne += '  le coefficient directeur de la droite $\\bm{(AB)}$ dans les cas suivants.'
      this.consigne += this.interactif ? " (Écrire 'non' si la droite n'a pas de coefficicient directeur.)" : ''
      const xA = randint(-5, 5)
      const yA = randint(-5, 5)
      const yB = randint(-5, 5)
      const xB = oblique ? randint(-5, 5, xA) : xA // xB = xA si !oblique
      let texte = `Avec $A(${xA};${yA})$ et $B(${xB};${yB})$. `
      const coefficient = oblique ? new FractionEtendue(yB - yA, xB - xA) : new FractionEtendue(0, 1) // zéro n'est utilisé que pour AMC si !oblique
      let texteCorr
      if (oblique) {
        texteCorr = 'On observe que $ x_B\\neq x_A$.'
        texteCorr += "<br>La droite $(AB)$ n'est donc pas verticale."
        texteCorr += '<br>On peut donc calculer le coefficient directeur de la droite.'
        texteCorr += "<br>On sait d'après le cours : $m=\\dfrac{y_B-y_A}{x_B-x_A}$."
        texteCorr += `<br>On applique avec les données de l'énoncé : $m=\\dfrac{${yB}-${ecritureParentheseSiNegatif(yA)}}{${xB}-${ecritureParentheseSiNegatif(xA)}}`
        if (coefficient.estIrreductible) {
          texteCorr += `=${coefficient.texFSD}$`
        } else {
          texteCorr += `${coefficient.texSimplificationAvecEtapes()}$`
        }
        texteCorr += '.'
        if (yA === yB) {
          texteCorr += '<br>On observe que $y_A=y_B$, la droite $(AB)$ est donc horizontale.'
        }
        setReponse(this, i, coefficient.simplifie(), { formatInteractif: 'fractionEgale' })
      } else {
        texteCorr = 'On observe que $ x_B = x_A$.'
        texteCorr += '<br>La droite $(AB)$ est donc verticale.'
        texteCorr += "<br>Elle n'admet donc pas de coefficient directeur."
        setReponse(this, i, ['non', 'Non', 'NON', '\\times'])
      }
      if (context.isAmc) {
        this.autoCorrection[i] = {
          enonce: `Soit $\\big(O,\\vec i;\\vec j\\big)$ un repère orthogonal. Soit $A(${xA};${yA})$ et $B(${xB};${yB})$.<br>Déterminer, s'il existe, le coefficient directeur de la droite $\\bm{(AB)}$ sous la forme d'une fraction irréductible (coder deux fois zéro si le coefficient n'existe pas).<br>`,
          propositions: [
            {
              type: 'qcmMono',
              propositions: [{
                texte: 'Le coefficient existe',
                statut: oblique,
                feedback: "On observe que $ x_B\\neq x_A$, donc la droite n'est pas verticale et elle a un coefficient directeur."
              },
              {
                texte: "Le coefficient n'existe pas",
                statut: !oblique,
                feedback: "On observe que $ x_B\\neq x_A$, donc la droite n'est pas verticale et elle a un coefficient directeur."
              }
              ]
            },
            {
              type: 'AMCNum',
              propositions: [{
                texte: texteCorr,
                statut: '',
                reponse: {
                  texte: 'coefficient',
                  valeur: oblique ? coefficient : new FractionEtendue(0, 1), // @todo vérifier que ça fonctionne pour aucune case cochée
                  param: {
                    digits: 2,
                    digitsNum: 1,
                    digitsDen: 1,
                    decimals: 0,
                    signe: true,
                    approx: 0
                  }
                }
              }]
            }
          ]
        }
      }
      texte += ajouteChampTexteMathLive(this, i)
      if (this.questionJamaisPosee(i, xA, yA, xB, yB)) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.listeQuestions.push(texte)
        this.listeCorrections.push(texteCorr)
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}
