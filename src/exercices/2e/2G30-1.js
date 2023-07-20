import { ecritureParentheseSiNegatif } from '../../lib/outils/ecritures.js'
import FractionEtendue from '../../modules/FractionEtendue.js'
import Exercice from '../Exercice.js'
import { listeQuestionsToContenu, combinaisonListes, randint, lettreDepuisChiffre, miseEnEvidence, texteEnCouleurEtGras } from '../../modules/outils.js'
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
      const valeurEntierePourA = randint(1, 26, [24, 23, 9, 15, 17]) // On exclut O, Q, I, X et W.
      const A = lettreDepuisChiffre(valeurEntierePourA)
      const B = lettreDepuisChiffre(randint(1, 26, [24, 23, 9, 15, 17, valeurEntierePourA]))
      this.consigne = 'Soit $\\big(O,\\vec \\imath;\\vec \\jmath\\big)$ un repère orthogonal. Déterminer'
      this.consigne += !this.interactif ? ", s'il existe et en justifiant," : ''
      // this.consigne += `  le coefficient directeur de la droite $${miseEnEvidence('(' + A + B + ')', 'black')}$ dans les cas suivants.`
      this.consigne += '  le coefficient directeur de la droite passant par les points suivants.'
      this.consigne += this.interactif ? " (Écrire 'non' si la droite n'a pas de coefficicient directeur.)" : ''
      const xA = randint(-5, 5)
      const yA = randint(-5, 5)
      const yB = randint(-5, 5)
      const xB = oblique ? randint(-5, 5, xA) : xA // xB = xA si !oblique
      let texte = `$${A}(${xA};${yA})$ et $${B}(${xB};${yB})$. `
      const coefficient = oblique ? new FractionEtendue(yB - yA, xB - xA) : new FractionEtendue(0, 1) // zéro n'est utilisé que pour AMC si !oblique
      let texteCorr
      if (oblique) {
        const solution = coefficient.estIrreductible ? coefficient.texFSD : coefficient.texSimplificationAvecEtapes()
        texteCorr = `On observe que les abscisses respectives des points $${A}$ et $${B}$ ne sont pas égales ($x_${A}\\neq x_${B}$).`
        texteCorr += `<br>La droite $${miseEnEvidence('(' + A + B + ')', 'black')}$ n'est donc pas verticale.`
        texteCorr += '<br>On peut donc calculer le coefficient directeur de la droite.'
        texteCorr += `<br>On sait d'après le cours que $m=\\dfrac{y_${B}-y_${A}}{x_${B}-x_${A}}$.`
        texteCorr += `<br>On applique avec les données de l'énoncé : $m=\\dfrac{${yB}-${ecritureParentheseSiNegatif(yA)}}{${xB}-${ecritureParentheseSiNegatif(xA)}}=${solution}$.`
        texteCorr += `<br>Le coefficient directeur de la droite $${miseEnEvidence('(' + A + B + ')', 'black')}$ est $${miseEnEvidence(coefficient.texFractionSimplifiee)}$.`
        console.log(coefficient)
        if (yA === yB) {
          texteCorr += '<br>On observe que $y_A=y_B$, la droite $(AB)$ est donc horizontale.'
        }
        setReponse(this, i, coefficient.simplifie(), { formatInteractif: 'fractionEgale' })
      } else {
        texteCorr = `On observe que les abscisses respectives des points $${A}$ et $${B}$ sont égales ($x_${A} = x_${B}$).`
        texteCorr += `<br>La droite $${miseEnEvidence('(' + A + B + ')', 'black')}$ est verticale et n'admet donc ${texteEnCouleurEtGras('aucun coefficient directeur')}.`
        setReponse(this, i, ['non', 'Non', 'NON'])
      }
      if (context.isAmc) {
        this.autoCorrection[i] = {
          enonce: '',
          propositions: [
            {
              type: 'qcmMono',
              enonce: `Soit $\\big(O,\\vec i;\\vec j\\big)$ un repère orthogonal. Soit $${A}(${xA};${yA})$ et $${B}(${xB};${yB})$.<br>Préciser si le coefficient directeur de la droite $\\bm{(AB)}$ existe et si c'est le cas, préciser sa valeur. S'il n'existe pas, inutile évidemment de préciser de valeur.<br>`,
              propositions: [{
                texte: 'Le coefficient directeur existe.',
                statut: oblique,
                feedback: "On observe que $ x_B\\neq x_A$, donc la droite n'est pas verticale et elle a un coefficient directeur."
              },
              {
                texte: "Le coefficient directeur n'existe pas.",
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
                questionIndicative: !oblique,
                reponse: {
                  texte: 'Coefficient directeur ' + (coefficient.d === 1 ? ':' : 'sous forme de fraction irréductible :'),
                  alignement: 'center',
                  // valeur: oblique ? coefficient : new FractionEtendue(0, 1), // @todo vérifier que ça fonctionne pour aucune case cochée
                  valeur: oblique ? (coefficient.d === 1 ? coefficient.n : coefficient) : new FractionEtendue(0, 1), // @todo vérifier que ça fonctionne pour aucune case cochée
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
