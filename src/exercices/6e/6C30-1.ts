import { choice, combinaisonListes, enleveDoublonNum } from '../../lib/outils/arrayOutils'
import { coloreUnSeulChiffre, miseEnEvidence } from '../../lib/outils/embellissements'
import { texFractionFromString } from '../../lib/outils/deprecatedFractions'
import { arrondi, nombreDeChiffresDansLaPartieDecimale, nombreDeChiffresDansLaPartieEntiere } from '../../lib/outils/nombres'
import { texNombre } from '../../lib/outils/texNombre'
import { context } from '../../modules/context'
import { gestionnaireFormulaireTexte, listeQuestionsToContenu, randint } from '../../modules/outils'
import { ajouteChampTexteMathLive, remplisLesBlancs } from '../../lib/interactif/questionMathLive'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import Exercice from '../Exercice'
import FractionEtendue from '../../modules/FractionEtendue'
import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { sp } from '../../lib/outils/outilString'
import { bleuMathalea } from '../../lib/colors'
import { createList } from '../../lib/format/lists'
import GlisseNombreElement from 'glisse-nombre'

export const amcReady = true
export const amcType = 'AMCNum'
export const interactifReady = true
export const interactifType = 'mathLive'

export const titre = 'Multiplier un nombre décimal par 10, 100 ou 1 000'
export const dateDeModifImportante = '11/02/2025'

/**
 * Multiplication d'un nombre décimal dans différentes écritures par 10, 100, 1000
 *
 *  * Type 1 : écriture entière
 *  * Type 3 : écriture décimale
 *  * Type 3 : écriture fractionnaire
 *  * Type 4 : écritures fractionnaires, décimales ou entières
 *
 *  * Sup2 : avec ou sans calculs à trous
 * @author Rémi Angot (Ajout 3 décimales maxi et que des entiers par Eric Elter)
 * @author Eric Elter modifie la correction pour l'adapter aux programmes 2025 + Nouveau paramètre (plus petit ou plus grand que 1)
 * Relecture : Décembre 2021 par EE
 *
 */
export const uuid = '2471d'

export const refs = {
  'fr-fr': ['6C30-1'],
  'fr-ch': ['9NO1-10', '10NO5-1']
}

/**
 * Définit le customElement glisse-nombre
 */
if (customElements.get('glisse-nombre') === undefined) {
  customElements.define('glisse-nombre', GlisseNombreElement)
}

function donneNomClasse (valeur: number): string[] {
  switch (valeur) {
    case 10:
      return ['dizaines', 'dixièmes']
    case 100:
      return ['centaines', 'centièmes']
    case 1000:
      return ['milliers', 'millièmes']
    default:
      throw new Error('Valeur non prise en charge. Utilise 10, 100 ou 1000.')
  }
}

function chiffreAPositionDecimale (nombre: number, position: number): number {
  const partieDecimale = Math.abs(nombre)
  const decale = Math.floor(partieDecimale * position)
  return decale % 10
}

function analyserNombre (nombre: number): { estEntier: boolean; doublonUnites: boolean } {
  const estEntier = Math.floor(nombre) === nombre
  // Étape 1 : récupérer le chiffre des unités
  const chiffreUnites = Math.abs(Math.floor(nombre)) % 10

  // Étape 2 : transformer le nombre en chaîne, sans le signe
  const chiffres = Math.abs(nombre).toString().replace('.', '')

  // Étape 3 : compter combien de fois le chiffre des unités apparaît
  const occurrences = chiffres
    .split('')
    .filter((chiffre, index, arr) => parseInt(chiffre) === chiffreUnites)

  // Il y a un doublon si le chiffre des unités apparaît au moins deux fois
  const doublonUnites = occurrences.length > 1

  return { estEntier, doublonUnites }
}

export default class MultiplierDecimauxPar101001000 extends Exercice {
  constructor () {
    super()
    this.besoinFormulaireTexte = [
      'Type des résultats', [
        'Nombres séparés par des tirets  :',
        '1 : Entiers',
        '2 : Décimaux',
        '3 : Fractionnaires',
        '4 : Mélange'
      ].join('\n')
    ]
    this.besoinFormulaire2CaseACocher = ['Avec des calculs à trous']
    this.besoinFormulaire3CaseACocher = ['Trois décimales maximum', true]
    this.besoinFormulaire4Texte = [
      'Facteur autre que la puissance de 10', [
        'Nombres séparés par des tirets  :',
        '1 : Plus petit que 1',
        '2 : Plus grand que 1',
        '3 : Mélange'
      ].join('\n')
    ]
    this.besoinFormulaire5CaseACocher = ['Avec glisse-nombres']
    this.sup = '4'
    this.sup2 = false
    this.sup3 = true
    this.sup4 = '1-2'
    this.sup5 = true
    this.spacing = 2
    this.spacingCorr = 2
    this.nbQuestions = 8
    this.comment = 'Le premier paramètre permet de choisir si le résultat de chaque calcul est un nombre entier, un nombre décimal, une fraction ou un mélange des trois.<br><br>'
    this.comment += 'Le deuxième paramètre permet de trouver soit le résultat du calcul, soit un nombre dans le calcul.<br><br>'
    this.comment += 'Le troisième paramètre permet d\'imposer, ou non, 3 décimales maximum dans le résultat du calcul.<br><br>'
    this.comment += 'Le quatrième paramètre permet de choisir le facteur (qui n\'est pas une puissance) est inférieur ou supérieur à 1.<br><br>'
    this.comment += 'Le cinquième paramètre permet de choisir si cet exercice dispose d\'un glisse-nombre.'
    this.comment += 'Le sixième paramètre permet de choisir si cet exercice propose une correction sèche ou une correction détaillée.'
    this.correctionDetaillee = false
    this.correctionDetailleeDisponible = true
  }

  nouvelleVersion () {
    const typesDeResultatsDisponibles = gestionnaireFormulaireTexte({
      saisie: this.sup,
      max: 3,
      melange: 4,
      defaut: 4,
      nbQuestions: this.nbQuestions
    })
    const typesDeResultats = combinaisonListes(typesDeResultatsDisponibles, this.nbQuestions)

    const typesDeFacteursDisponibles = gestionnaireFormulaireTexte({
      saisie: this.sup4,
      max: 2,
      melange: 3,
      defaut: 3,
      nbQuestions: this.nbQuestions
    })

    let tableau1 = !this.sup2 ? [1, 2] : [1, 2, 5, 6, 7, 8]
    let tableau3 = !this.sup2 ? [3, 4] : [3, 4, 5, 6, 7, 8, 9, 10]
    tableau1 = combinaisonListes(tableau1, this.nbQuestions)
    tableau3 = combinaisonListes(tableau3, this.nbQuestions)
    let indexTableau1 = 0
    let indexTableau3 = 0
    const typesDeQuestionsDisponibles = []

    for (let i = 0; i < typesDeResultats.length; i++) {
      const resultat = typesDeResultats[i]
      switch (resultat) {
        case 1 :
        case 2 :
          typesDeQuestionsDisponibles.push(tableau1[indexTableau1])
          indexTableau1++
          break
        default :
          typesDeQuestionsDisponibles.push(tableau3[indexTableau3])
          indexTableau3++
          break
      }
    }

    this.consigne = ''
    if (enleveDoublonNum(typesDeResultatsDisponibles.map(Number)).length === 1) {
      this.consigne = 'Calculer et donner le résultat sous forme d\'un nombre '
      this.consigne += typesDeResultatsDisponibles[0] === 1 ? 'entier.' : typesDeResultatsDisponibles[0] === 2 ? 'décimal.' : 'fractionnaire.'
    }
    if (this.sup2) this.consigne = 'Compléter.'

    if (context.isHtml && this.sup5) {
      this.consigne += '<br>Un glisse-nombre est à disposition pour répondre '
      this.consigne += this.nbQuestions === 1 ? 'à la question.' : 'aux questions.'
      this.consigne += `<glisse-nombre number="${texNombre(20.25)}"/>`
    }

    let typesDeQuestions
    let reponse

    const listeTypeDeQuestions = typesDeQuestionsDisponibles
    const facteurs = combinaisonListes(
      [10, 100, 1000],
      this.nbQuestions
    )
    const puissances = combinaisonListes(
      [1, 2, 3],
      this.nbQuestions
    )
    let texteIntro

    for (
      let i = 0, texte, texteCorr, cpt = 0, a, b, den, choixPuissance10, fractionSolution, aEntier, reponseAMC;
      i < this.nbQuestions && cpt < 50;
    ) {
      typesDeQuestions = listeTypeDeQuestions[i]
      if (enleveDoublonNum(typesDeResultatsDisponibles.map(Number)).length !== 1 && !this.sup2) {
        if (typesDeResultats[i] === 1) { texteIntro = 'Calculer et donner le résultat sous forme d\'un nombre entier.<br>' } else if (typesDeResultats[i] === 2) { texteIntro = 'Calculer et donner le résultat sous forme d\'un nombre décimal.<br>' } else { texteIntro = 'Calculer et donner le résultat sous forme d\'un nombre fractionnaire.<br>' }
      } else texteIntro = ''
      let choixClasseEntiere
      let choixClasseDecimale
      let chiffreDesUnites
      let chiffrePartieDecimale
      switch (typesDeQuestions) {
        case 1: // a,abcd × 10
          aEntier = choice([randint(11, 99), randint(101, 999)])
          b = puissances[i]

          if (typesDeResultats[i] !== 1) {
            if (this.sup3) {
              choixPuissance10 = randint(b, 3)
              if (choixPuissance10 === b) {
                if (b === 3) b--
                else choixPuissance10++
              }
              choixPuissance10 = Math.pow(10, choixPuissance10)
            } else {
              choixPuissance10 = Math.pow(10, randint(b + 1, 4))
            }
          } else choixPuissance10 = Math.pow(10, randint(0, b))

          a = arrondi(aEntier / choixPuissance10)

          if (typesDeFacteursDisponibles[i] === 1 && a > 1) {
            while (a > 1) {
              choixPuissance10 = arrondi(choixPuissance10 / 10)
              a = arrondi(a / 10)
            }
          } else if (typesDeFacteursDisponibles[i] === 2 && a < 1) {
            while (a < 1) {
              choixPuissance10 = arrondi(choixPuissance10 * 10)
              a = arrondi(a * 10)
            }
          }
          //          fractionSolution = new FractionEtendue(aEntier, choixPuissance10 / Math.pow(10, b)).texFraction
          fractionSolution = new FractionEtendue(aEntier / choixPuissance10 * Math.pow(10, b), 1).texFraction

          texte = `$${texNombre(a)}\\times${texNombre(Math.pow(10, b))}=$`

          if (this.interactif) texte = ajouteChampTexteMathLive(this, i, KeyboardType.clavierDeBaseAvecFraction, { texteAvant: texte })
          else texte += sp() + '$ \\ldots$'
          choixClasseEntiere = donneNomClasse(Math.pow(10, b))[0]
          choixClasseDecimale = donneNomClasse(Math.pow(10, b))[1]
          chiffreDesUnites = Math.abs(Math.floor(a)) % 10
          chiffrePartieDecimale = chiffreAPositionDecimale(a, Math.pow(10, b))

          texteCorr = ''
          if (this.correctionDetaillee) {
            texteCorr = `Quand on multiplie par $${texNombre(Math.pow(10, b))}$, tous les chiffres prennent une position $${texNombre(Math.pow(10, b))}$ fois plus grande.<br>`
            texteCorr += `En particulier, quand on multiplie $${texNombre(a)}$ par $${texNombre(Math.pow(10, b))}$, alors :<br>`
            texteCorr += createList({
              items: [
`le chiffre des unités de $${texNombre(a)}$ (${analyserNombre(a).doublonUnites ? 'ce ' : ''}chiffre $${miseEnEvidence(chiffreDesUnites, bleuMathalea)}$ dans $${coloreUnSeulChiffre(texNombre(a), bleuMathalea, 1)}$` +
              `) devient le chiffre des ${choixClasseEntiere} ;`,
`le chiffre des ${choixClasseDecimale} de $${texNombre(a)}$ (${analyserNombre(a * Math.pow(10, b)).doublonUnites ? 'ce ' : ''}chiffre $${miseEnEvidence(chiffrePartieDecimale, bleuMathalea)}$ dans $${coloreUnSeulChiffre(texNombre(a, Math.max(b, nombreDeChiffresDansLaPartieDecimale(a)), true, true), bleuMathalea, Math.pow(10, -b))}$` +
              ') devient le chiffre des unités.<br>'
              ],
              style: 'puces'
            })
          }
          texteCorr += `$${texNombre(a)} \\times ${texNombre(
            Math.pow(10, b)
                    )} = ${miseEnEvidence(typesDeResultats[i] !== 3 ? texNombre(a * Math.pow(10, b)) : fractionSolution)}$`
          if (context.isHtml && this.sup5) {
            texteCorr += `<glisse-nombre number="${texNombre(a)}"  animation="${b}"/>`
          }
          // reponse = new FractionEtendue(aEntier * Math.pow(10, b), choixPuissance10).texFraction
          reponse = fractionSolution
          reponseAMC = a * Math.pow(10, b)
          // Important laisser ici les deux options de comparaison
          handleAnswers(this, i, { reponse: { value: reponse, options: { fractionEgale: true, nombreDecimalSeulement: true } } })

          break
        case 2: // 10 × a,abcd
          aEntier = choice([randint(11, 99), randint(101, 999)])
          b = puissances[i]
          choixPuissance10 = Math.pow(10, randint(0, b))

          a = arrondi(aEntier / choixPuissance10)
          if (typesDeResultats[i] !== 1) {
            if (this.sup3) {
              choixPuissance10 = randint(b, 3)
              if (choixPuissance10 === b) {
                if (b === 3) b--
                else choixPuissance10++
              }
              choixPuissance10 = Math.pow(10, choixPuissance10)
            } else {
              choixPuissance10 = Math.pow(10, randint(b + 1, 4))
            }
          }

          if (typesDeFacteursDisponibles[i] === 1 && a > 1) {
            while (a > 1) {
              choixPuissance10 = arrondi(choixPuissance10 / 10)
              a = arrondi(a / 10)
            }
          } else if (typesDeFacteursDisponibles[i] === 2 && a < 1) {
            while (a < 1) {
              choixPuissance10 = arrondi(choixPuissance10 * 10)
              a = arrondi(a * 10)
            }
          }
          // fractionSolution = new FractionEtendue(aEntier, choixPuissance10 / Math.pow(10, b)).texFraction
          fractionSolution = new FractionEtendue(aEntier / choixPuissance10 * Math.pow(10, b), 1).texFraction

          choixClasseEntiere = donneNomClasse(Math.pow(10, b))[0]
          choixClasseDecimale = donneNomClasse(Math.pow(10, b))[1]
          chiffreDesUnites = Math.abs(Math.floor(a)) % 10
          chiffrePartieDecimale = chiffreAPositionDecimale(a, Math.pow(10, b))

          texte = `$${texNombre(Math.pow(10, b))}\\times${texNombre(a)}=$`

          if (this.interactif) texte = ajouteChampTexteMathLive(this, i, KeyboardType.clavierDeBaseAvecFraction, { texteAvant: texte })
          else texte += sp() + '$ \\ldots$'
          texteCorr = ''
          if (this.correctionDetaillee) {
            texteCorr = `Quand on multiplie par $${texNombre(Math.pow(10, b))}$, tous les chiffres prennent une position $${texNombre(Math.pow(10, b))}$ fois plus grande.<br>`
            texteCorr += `En particulier, quand on multiplie $${texNombre(a)}$ par $${texNombre(Math.pow(10, b))}$, alors :<br>`
            texteCorr += createList({
              items: [
`le chiffre des unités de $${texNombre(a)}$ (${analyserNombre(a).doublonUnites ? 'ce ' : ''}chiffre $${miseEnEvidence(chiffreDesUnites, bleuMathalea)}$ dans $${coloreUnSeulChiffre(texNombre(a), bleuMathalea, 1)}$` +
              `) devient le chiffre des ${choixClasseEntiere} ;`,
`le chiffre des ${choixClasseDecimale} de $${texNombre(a)}$ (${analyserNombre(a * Math.pow(10, b)).doublonUnites ? 'ce ' : ''}chiffre $${miseEnEvidence(chiffrePartieDecimale, bleuMathalea)}$ dans $${coloreUnSeulChiffre(texNombre(a, Math.max(b, nombreDeChiffresDansLaPartieDecimale(a)), true, true), bleuMathalea, Math.pow(10, -b))}$` +
              ') devient le chiffre des unités.<br>'
              ],
              style: 'puces'
            })

            if (context.isHtml) {
              texteCorr += `<glisse-nombre number="${texNombre(a)}"  animation="${b}"/>`
            }
          }
          texteCorr += `$${texNombre(
           Math.pow(10, b)
                   )} \\times ${texNombre(a)} = ${miseEnEvidence(typesDeResultats[i] !== 3 ? texNombre(a * Math.pow(10, b)) : fractionSolution)}$`
          // reponse = new FractionEtendue(aEntier * Math.pow(10, b), choixPuissance10).texFraction
          reponse = fractionSolution
          reponseAMC = a * Math.pow(10, b)
          handleAnswers(this, i, { reponse: { value: reponse, options: { fractionEgale: true, nombreDecimalSeulement: true } } })

          break
        case 3: // abcd/10 × 10
          a = choice([randint(1, 9) * 10 + randint(1, 9), randint(10, 99) * 10 + randint(1, 9)])
          b = puissances[i]
          choixPuissance10 = Math.pow(10, randint(0, b))

          if (typesDeResultats[i] !== 1) {
            if (this.sup3) {
              choixPuissance10 = randint(b, 3)
              if (choixPuissance10 === b) {
                if (b === 3) b--
                else choixPuissance10++
              }
              choixPuissance10 = Math.pow(10, choixPuissance10)
            } else {
              choixPuissance10 = Math.pow(10, randint(b + 1, 4))
            }
          }

          if (typesDeFacteursDisponibles[i] === 1 && a / choixPuissance10 > 1) {
            while (a / choixPuissance10 > 1) {
              a = arrondi(a / 10)
            }
          } else if (typesDeFacteursDisponibles[i] === 2 && a / choixPuissance10 < 1) {
            while (a / choixPuissance10 < 1) {
              a = arrondi(a * 10)
            }
          }

          // fractionSolution = new FractionEtendue(a * Math.pow(10, b), choixPuissance10).texFraction
          fractionSolution = new FractionEtendue(a * Math.pow(10, b) / choixPuissance10, 1).texFraction

          texte = `$${new FractionEtendue(a, choixPuissance10).texFraction}\\times${texNombre(Math.pow(10, b))}=$`

          if (this.interactif) texte = ajouteChampTexteMathLive(this, i, KeyboardType.clavierDeBaseAvecFraction, { texteAvant: texte })
          else texte += sp() + '$ \\ldots$'

          texteCorr = `$${new FractionEtendue(a, choixPuissance10).texFraction}\\times${texNombre(Math.pow(10, b))} = `
          // texteCorr += `${typesDeResultats[i] !== 3 ? (((choixPuissance10 !== 1 ? (new FractionEtendue(a * Math.pow(10, b), choixPuissance10).texFraction + ' = ') : '')) + miseEnEvidence(texNombre(a * Math.pow(10, b) / choixPuissance10))) : miseEnEvidence(fractionSolution)}$`
          texteCorr += `${typesDeResultats[i] !== 3 ? (miseEnEvidence(texNombre(a * Math.pow(10, b) / choixPuissance10))) : miseEnEvidence(fractionSolution)}$`
          if (context.isHtml && this.sup5 && this.correctionDetaillee) {
            texteCorr += `<glisse-nombre number="${texNombre(arrondi(a / choixPuissance10))}"  animation="${b}"/>`
          }
          reponse = fractionSolution
          reponseAMC = a * Math.pow(10, b) / choixPuissance10

          handleAnswers(this, i, { reponse: { value: reponse, options: { fractionEgale: true, nombreDecimalSeulement: true } } })

          break
        case 4: // 10 × abcd/10
          a = choice([randint(1, 9) * 10 + randint(1, 9), randint(10, 99) * 10 + randint(1, 9)])
          b = puissances[i]
          choixPuissance10 = Math.pow(10, randint(0, b))

          if (typesDeResultats[i] !== 1) {
            if (this.sup3) {
              choixPuissance10 = randint(b, 3)
              if (choixPuissance10 === b) {
                if (b === 3) b--
                else choixPuissance10++
              }
              choixPuissance10 = Math.pow(10, choixPuissance10)
            } else {
              choixPuissance10 = Math.pow(10, randint(b + 1, 4))
            }
          }

          if (typesDeFacteursDisponibles[i] === 1 && a / choixPuissance10 > 1) {
            while (a / choixPuissance10 > 1) {
              a = arrondi(a / 10)
            }
          } else if (typesDeFacteursDisponibles[i] === 2 && a / choixPuissance10 < 1) {
            while (a / choixPuissance10 < 1) {
              a = arrondi(a * 10)
            }
          }

          // fractionSolution = new FractionEtendue(a * Math.pow(10, b), choixPuissance10).texFraction
          fractionSolution = new FractionEtendue(a * Math.pow(10, b) / choixPuissance10, 1).texFraction

          texte = `$${texNombre(Math.pow(10, b))}\\times${new FractionEtendue(a, choixPuissance10).texFraction}=$`

          if (this.interactif) texte = ajouteChampTexteMathLive(this, i, KeyboardType.clavierDeBaseAvecFraction, { texteAvant: texte })
          else texte += sp() + '$ \\ldots$'

          texteCorr = `$${texNombre(Math.pow(10, b))} \\times ${new FractionEtendue(a, choixPuissance10).texFraction} = `
          // texteCorr += `${typesDeResultats[i] !== 3 ? (((choixPuissance10 !== 1 ? new FractionEtendue(a * Math.pow(10, b), choixPuissance10).texFraction + ' = ' : '')) + miseEnEvidence(texNombre(a * Math.pow(10, b) / choixPuissance10))) : miseEnEvidence(fractionSolution)}$`
          texteCorr += `${typesDeResultats[i] !== 3 ? miseEnEvidence(texNombre(a * Math.pow(10, b) / choixPuissance10)) : miseEnEvidence(fractionSolution)}$`
          if (context.isHtml && this.sup5 && this.correctionDetaillee) {
            texteCorr += `<glisse-nombre number="${texNombre(arrondi(a / choixPuissance10))}"  animation="${b}"/>`
          }
          reponse = fractionSolution
          reponseAMC = a * Math.pow(10, b) / choixPuissance10

          handleAnswers(this, i, { reponse: { value: reponse, options: { fractionEgale: true, nombreDecimalSeulement: true } } })

          break
        case 5: // .... × 10 = a,abcd
          aEntier = choice([randint(11, 99), randint(101, 999)])
          b = puissances[i]
          choixPuissance10 = Math.pow(10, randint(0, b))

          if (typesDeResultats[i] !== 1) {
            if (this.sup3) {
              choixPuissance10 = randint(b, 3)
              if (choixPuissance10 === b) {
                if (b === 3) b--
                else choixPuissance10++
              }
              choixPuissance10 = Math.pow(10, choixPuissance10)
            } else {
              choixPuissance10 = Math.pow(10, randint(b + 1, 4))
            }
          }

          a = arrondi(aEntier / choixPuissance10)

          if (typesDeFacteursDisponibles[i] === 1 && a > 1) {
            while (a > 1) {
              a = arrondi(a / 10)
            }
          } else if (typesDeFacteursDisponibles[i] === 2 && a < 1) {
            while (a < 1) {
              a = arrondi(a * 10)
            }
          }

          //          fractionSolution = new FractionEtendue(aEntier * Math.pow(10, b), choixPuissance10).texFraction
          fractionSolution = new FractionEtendue(a * Math.pow(10, b), 1).texFraction

          texte = `$\\times${texNombre(Math.pow(10, b))} = ${typesDeResultats[i] !== 3 ? texNombre(a * Math.pow(10, b)) : fractionSolution}$`
          if (this.interactif) texte = ajouteChampTexteMathLive(this, i, KeyboardType.clavierDeBaseAvecFraction, { texteApres: texte })
          else texte = '$\\ldots$' + texte
          choixClasseEntiere = donneNomClasse(Math.pow(10, b))[0]
          choixClasseDecimale = donneNomClasse(Math.pow(10, b))[1]
          chiffreDesUnites = Math.abs(Math.floor(a)) % 10
          chiffrePartieDecimale = chiffreAPositionDecimale(a, Math.pow(10, b))

          texteCorr = ''
          if (this.correctionDetaillee) {
            texteCorr = `Quand on multiplie par $${texNombre(Math.pow(10, b))}$, tous les chiffres prennent une position $${texNombre(Math.pow(10, b))}$ fois plus grande.<br>`
            if (chiffreAPositionDecimale(a * Math.pow(10, b), 1) === 0) {
              texteCorr += `Notamment, le chiffre des unités devient le chiffre des ${choixClasseEntiere}.<br>`
              texteCorr += `Dans $${coloreUnSeulChiffre(texNombre(a * Math.pow(10, b)), bleuMathalea, Math.pow(10, b))}$ (le résultat du calcul), le chiffre des ${choixClasseEntiere} est $${miseEnEvidence(chiffreDesUnites, bleuMathalea)}$`
              texteCorr += ` donc le chiffre des unités du nombre recherché est $${miseEnEvidence(chiffreDesUnites, bleuMathalea)}$.<br>`
            } else {
              texteCorr += `Notamment, le chiffre des ${choixClasseDecimale} devient le chiffre des unités.<br>`
              texteCorr += `Dans $${coloreUnSeulChiffre(texNombre(a * Math.pow(10, b)), bleuMathalea, 1)}$ (le résultat du calcul), le chiffre des unités est $${miseEnEvidence(chiffrePartieDecimale, bleuMathalea)}$`
              texteCorr += ` donc le chiffre des ${choixClasseDecimale} du nombre recherché est $${miseEnEvidence(chiffrePartieDecimale, bleuMathalea)}$.<br>`
            }
          }
          texteCorr += `$${miseEnEvidence(
                        typesDeResultats[i] !== 3 ? texNombre(a) : new FractionEtendue(a, 1).texFraction
                    )} \\times ${texNombre(Math.pow(10, b))} = ${typesDeResultats[i] !== 3 ? texNombre(a * Math.pow(10, b)) : fractionSolution}$`
          if (context.isHtml && this.sup5 && this.correctionDetaillee) {
            texteCorr += `<glisse-nombre number="${texNombre(a)}"  animation="${b}"/>`
          }

          reponse = a
          reponseAMC = a
          handleAnswers(this, i, { reponse: { value: reponse, options: { fractionEgale: true, nombreDecimalSeulement: true } } })
          break
        case 6: // 10 × .... = a,abcd
          aEntier = choice([randint(11, 99), randint(101, 999)])
          b = puissances[i]
          choixPuissance10 = Math.pow(10, randint(0, b))

          if (typesDeResultats[i] !== 1) {
            if (this.sup3) {
              choixPuissance10 = randint(b, 3)
              if (choixPuissance10 === b) {
                if (b === 3) b--
                else choixPuissance10++
              }
              choixPuissance10 = Math.pow(10, choixPuissance10)
            } else {
              choixPuissance10 = Math.pow(10, randint(b + 1, 4))
            }
          }

          a = arrondi(aEntier / choixPuissance10)

          if (typesDeFacteursDisponibles[i] === 1 && a > 1) {
            while (a > 1) {
              choixPuissance10 = arrondi(choixPuissance10 / 10)
              a = arrondi(a / 10)
            }
          } else if (typesDeFacteursDisponibles[i] === 2 && a < 1) {
            while (a < 1) {
              choixPuissance10 = arrondi(choixPuissance10 * 10)
              a = arrondi(a * 10)
            }
          }
          fractionSolution = new FractionEtendue(a * Math.pow(10, b), 1).texFraction

          texte = typesDeResultats[i] !== 3
            ? `$=${texNombre(a * Math.pow(10, b))}$`
            : `$=${fractionSolution}$`
          // texte = `$\\times${texNombre(Math.pow(10, b))} = ${typesDeResultats[i] !== 3 ? texNombre(a * Math.pow(10, b)) : fractionSolution}$`
          if (this.interactif) texte = ajouteChampTexteMathLive(this, i, KeyboardType.clavierDeBaseAvecFraction, { texteAvant: `$${texNombre(Math.pow(10, b))} \\times$`, texteApres: texte })
          else texte = `$${texNombre(Math.pow(10, b))} \\times \\ldots$` + texte
          choixClasseEntiere = donneNomClasse(Math.pow(10, b))[0]
          choixClasseDecimale = donneNomClasse(Math.pow(10, b))[1]
          chiffreDesUnites = Math.abs(Math.floor(a)) % 10
          chiffrePartieDecimale = chiffreAPositionDecimale(a, Math.pow(10, b))

          texteCorr = ''
          if (this.correctionDetaillee) {
            texteCorr = `Quand on multiplie par $${texNombre(Math.pow(10, b))}$, tous les chiffres prennent une position $${texNombre(Math.pow(10, b))}$ fois plus grande.<br>`
            if (chiffreAPositionDecimale(a * Math.pow(10, b), 1) === 0) {
              texteCorr += `Notamment, le chiffre des unités devient le chiffre des ${choixClasseEntiere}.<br>`
              texteCorr += `Dans $${coloreUnSeulChiffre(texNombre(a * Math.pow(10, b)), bleuMathalea, Math.pow(10, b))}$ (le résultat du calcul), le chiffre des ${choixClasseEntiere} est $${miseEnEvidence(chiffreDesUnites, bleuMathalea)}$`
              texteCorr += ` donc le chiffre des unités du nombre recherché est $${miseEnEvidence(chiffreDesUnites, bleuMathalea)}$.<br>`
            } else {
              texteCorr += `Notamment, le chiffre des ${choixClasseDecimale} devient le chiffre des unités.<br>`
              texteCorr += `Dans $${coloreUnSeulChiffre(texNombre(a * Math.pow(10, b)), bleuMathalea, 1)}$ (le résultat du calcul), le chiffre des unités est $${miseEnEvidence(chiffrePartieDecimale, bleuMathalea)}$`
              texteCorr += ` donc le chiffre des ${choixClasseDecimale} du nombre recherché est $${miseEnEvidence(chiffrePartieDecimale, bleuMathalea)}$.<br>`
            }
          }

          texteCorr += `$${texNombre(Math.pow(10, b))} \\times ${miseEnEvidence(
            typesDeResultats[i] !== 3 ? texNombre(a) : new FractionEtendue(a, 1).texFraction
        )}  = ${typesDeResultats[i] !== 3 ? texNombre(a * Math.pow(10, b)) : fractionSolution}$`
          if (context.isHtml && this.sup5 && this.correctionDetaillee) {
            texteCorr += `<glisse-nombre number="${texNombre(a)}"  animation="${b}"/>`
          }
          reponse = a
          reponseAMC = a

          handleAnswers(this, i, { reponse: { value: reponse, options: { fractionEgale: true, nombreDecimalSeulement: true } } })
          break
        case 7: // case 3 avec un trou sur l'entier
          a = choice([randint(1, 9) * 10 + randint(1, 9), randint(10, 99) * 10 + randint(1, 9)])
          b = puissances[i]
          choixPuissance10 = Math.pow(10, randint(0, b))

          if (typesDeResultats[i] !== 1) {
            if (this.sup3) {
              choixPuissance10 = randint(b, 3)
              if (choixPuissance10 === b) {
                if (b === 3) b--
                else choixPuissance10++
              }
              choixPuissance10 = Math.pow(10, choixPuissance10)
            } else {
              choixPuissance10 = Math.pow(10, randint(b + 1, 4))
            }
          }

          if (typesDeFacteursDisponibles[i] === 1 && a / choixPuissance10 > 1) {
            while (a / choixPuissance10 > 1) {
              a = arrondi(a / 10)
            }
          } else if (typesDeFacteursDisponibles[i] === 2 && a / choixPuissance10 < 1) {
            while (a / choixPuissance10 < 1) {
              a = arrondi(a * 10)
            }
          }

          // fractionSolution = new FractionEtendue(a * Math.pow(10, b), choixPuissance10).texFraction
          fractionSolution = new FractionEtendue(a * Math.pow(10, b) / choixPuissance10, 1).texFraction

          texte = `$=${typesDeResultats[i] !== 3 ? texNombre(a * Math.pow(10, b) / choixPuissance10) : fractionSolution}$`

          if (this.interactif) texte = ajouteChampTexteMathLive(this, i, KeyboardType.clavierDeBaseAvecFraction, { texteAvant: `$${typesDeResultats[i] !== 3 ? texNombre(a / choixPuissance10) : new FractionEtendue(a, choixPuissance10).texFraction}\\times$`, texteApres: texte })
          else texte = `$${typesDeResultats[i] !== 3 ? texNombre(a / choixPuissance10) : new FractionEtendue(a, choixPuissance10).texFraction} \\times` + sp() + '\\ldots$' + sp() + texte

          choixClasseEntiere = donneNomClasse(Math.pow(10, b))[0]
          choixClasseDecimale = donneNomClasse(Math.pow(10, b))[1]
          chiffreDesUnites = Math.abs(Math.floor(a / choixPuissance10)) % 10
          chiffrePartieDecimale = chiffreAPositionDecimale(a / choixPuissance10, Math.pow(10, b))

          texteCorr = ''
          if (this.correctionDetaillee) {
            texteCorr = a / choixPuissance10 > 1
              ? `Le chiffre des unités de $${texNombre(a / choixPuissance10)}$ (${analyserNombre(arrondi(a / choixPuissance10)).doublonUnites ? 'ce ' : ''}chiffre $${miseEnEvidence(chiffreDesUnites, bleuMathalea)}$ dans $${coloreUnSeulChiffre(texNombre(a / choixPuissance10), bleuMathalea, 1)}$` +
              `) devient le chiffre des ${choixClasseEntiere} (dans $${coloreUnSeulChiffre(texNombre(a / choixPuissance10 * Math.pow(10, b)), bleuMathalea, 1)}$).<br>`
              : `Le chiffre des ${choixClasseDecimale} de $${texNombre(a / choixPuissance10)}$ (${analyserNombre(arrondi(a / choixPuissance10 * Math.pow(10, b))).doublonUnites ? 'ce ' : ''}chiffre $${miseEnEvidence(chiffrePartieDecimale, bleuMathalea)}$ dans $${coloreUnSeulChiffre(texNombre(a / choixPuissance10), bleuMathalea, Math.pow(10, -b))}$` +
              `) devient le chiffre des unités (dans $${coloreUnSeulChiffre(texNombre(a / choixPuissance10 * Math.pow(10, b)), bleuMathalea, 1)}$).<br>`
            texteCorr += `Tous les chiffres prennent donc une position $${texNombre(Math.pow(10, b))}$ fois plus grande.<br>`
          }
          texteCorr += `$${typesDeResultats[i] !== 3 ? texNombre(a / choixPuissance10) : new FractionEtendue(a, choixPuissance10).texFraction} \\times${miseEnEvidence(texNombre(Math.pow(10, b)))} = `
          texteCorr += `${typesDeResultats[i] !== 3 ? (texNombre(a * Math.pow(10, b) / choixPuissance10)) : fractionSolution}$`
          if (context.isHtml && this.sup5 && this.correctionDetaillee) {
            texteCorr += `<glisse-nombre number="${texNombre(a / choixPuissance10)}"  animation="${b}"/>`
          }
          reponse = Math.pow(10, b)
          reponseAMC = Math.pow(10, b)

          handleAnswers(this, i, { reponse: { value: reponse } })

          break
        case 8: // case 4 avec un trou sur l'entier
          a = choice([randint(1, 9) * 10 + randint(1, 9), randint(10, 99) * 10 + randint(1, 9)])
          b = puissances[i]
          choixPuissance10 = Math.pow(10, randint(0, b))

          if (typesDeResultats[i] !== 1) {
            if (this.sup3) {
              choixPuissance10 = randint(b, 3)
              if (choixPuissance10 === b) {
                if (b === 3) b--
                else choixPuissance10++
              }
              choixPuissance10 = Math.pow(10, choixPuissance10)
            } else {
              choixPuissance10 = Math.pow(10, randint(b + 1, 4))
            }
          }

          if (typesDeFacteursDisponibles[i] === 1 && a / choixPuissance10 > 1) {
            while (a / choixPuissance10 > 1) {
              a = arrondi(a / 10)
            }
          } else if (typesDeFacteursDisponibles[i] === 2 && a / choixPuissance10 < 1) {
            while (a / choixPuissance10 < 1) {
              a = arrondi(a * 10)
            }
          }

          // fractionSolution = new FractionEtendue(a * Math.pow(10, b), choixPuissance10).texFraction
          fractionSolution = new FractionEtendue(a * Math.pow(10, b) / choixPuissance10, 1).texFraction

          texte = `$\\times ${typesDeResultats[i] !== 3 ? texNombre(a / choixPuissance10) : new FractionEtendue(a, choixPuissance10).texFraction}=${typesDeResultats[i] !== 3 ? texNombre(a * Math.pow(10, b) / choixPuissance10) : fractionSolution}$`

          // if (this.interactif) texte = ajouteChampTexteMathLive(this, i, KeyboardType.clavierDeBaseAvecFraction, { texteAvant: `$${new FractionEtendue(a, choixPuissance10).texFraction}\\times$`, texteApres: texte })
          if (this.interactif) texte = ajouteChampTexteMathLive(this, i, KeyboardType.clavierDeBaseAvecFraction, { texteApres: texte })
          else texte = '$ \\ldots$' + sp() + texte

          choixClasseEntiere = donneNomClasse(Math.pow(10, b))[0]
          choixClasseDecimale = donneNomClasse(Math.pow(10, b))[1]
          chiffreDesUnites = Math.abs(Math.floor(a / choixPuissance10)) % 10
          chiffrePartieDecimale = chiffreAPositionDecimale(a / choixPuissance10, Math.pow(10, b))

          texteCorr = ''
          if (this.correctionDetaillee) {
            texteCorr = a / choixPuissance10 > 1
              ? `Le chiffre des unités de $${texNombre(a / choixPuissance10)}$ (${analyserNombre(arrondi(a / choixPuissance10)).doublonUnites ? 'ce ' : ''}chiffre $${miseEnEvidence(chiffreDesUnites, bleuMathalea)}$ dans $${coloreUnSeulChiffre(texNombre(a / choixPuissance10), bleuMathalea, 1)}$` +
              `) devient le chiffre des ${choixClasseEntiere} (dans $${coloreUnSeulChiffre(texNombre(a / choixPuissance10 * Math.pow(10, b)), bleuMathalea, 1)}$).<br>`
              : `Le chiffre des ${choixClasseDecimale} de $${texNombre(a / choixPuissance10)}$ (${analyserNombre(arrondi(a / choixPuissance10 * Math.pow(10, b))).doublonUnites ? 'ce ' : ''}chiffre $${miseEnEvidence(chiffrePartieDecimale, bleuMathalea)}$ dans $${coloreUnSeulChiffre(texNombre(a / choixPuissance10), bleuMathalea, Math.pow(10, -b))}$` +
              `) devient le chiffre des unités (dans $${coloreUnSeulChiffre(texNombre(a / choixPuissance10 * Math.pow(10, b)), bleuMathalea, 1)}$).<br>`
            texteCorr += `Tous les chiffres prennent donc une position $${texNombre(Math.pow(10, b))}$ fois plus grande.<br>`
          }

          texteCorr += `$${miseEnEvidence(texNombre(Math.pow(10, b)))}\\times${typesDeResultats[i] !== 3 ? (texNombre(a / choixPuissance10)) : new FractionEtendue(a, choixPuissance10).texFraction}
          = ${typesDeResultats[i] !== 3 ? (texNombre(a * Math.pow(10, b) / choixPuissance10)) : fractionSolution}$`
          if (context.isHtml && this.sup5 && this.correctionDetaillee) {
            texteCorr += `<glisse-nombre number="${texNombre(a / choixPuissance10)}"  animation="${b}"/>`
          }
          reponse = Math.pow(10, b)
          reponseAMC = Math.pow(10, b)

          handleAnswers(this, i, { reponse: { value: reponse } })

          break
        case 9: // case 3 avec trou sur la fraction
          a = choice([randint(11, 99), randint(100, 999), randint(2, 9)])
          b = facteurs[i]
          if (this.sup4) {
            den = choice([10, 100, 1000])
            while (den > b) {
              den = choice([10, 100, 1000])
            }
          } else {
            den = choice([10, 100, 1000])
          }
          texte += `$${texFractionFromString(a, '\\ldots')}\\times${texNombre(
                        b
                    )} = ${texNombre((a / den) * b)}$`
          texteCorr = `$${texFractionFromString(
                        a,
                        miseEnEvidence(texNombre(den))
                    )} \\times ${texNombre(b)} = ${texFractionFromString(
                        a * b,
                        den
                    )} = ${texNombre((a / den) * b)}$`
          reponse = den

          a = choice([randint(11, 99), randint(101, 999)])
          b = puissances[i]
          choixPuissance10 = Math.pow(10, randint(0, b))

          if (typesDeResultats[i] !== 1) {
            if (this.sup3) {
              choixPuissance10 = randint(b, 3)
              if (choixPuissance10 === b) {
                if (b === 3) b--
                else choixPuissance10++
              }
              choixPuissance10 = Math.pow(10, choixPuissance10)
            } else {
              choixPuissance10 = Math.pow(10, randint(b + 1, 4))
            }
          }

          if (typesDeFacteursDisponibles[i] === 1 && a / choixPuissance10 > 1) {
            while (a / choixPuissance10 > 1) {
              a = arrondi(a / 10)
            }
          } else if (typesDeFacteursDisponibles[i] === 2 && a / choixPuissance10 < 1) {
            while (a / choixPuissance10 < 1) {
              a = arrondi(a * 10)
            }
          }

          // fractionSolution = new FractionEtendue(a * Math.pow(10, b), choixPuissance10).texFraction
          fractionSolution = new FractionEtendue(a * Math.pow(10, b) / choixPuissance10, 1).texFraction

          texte = remplisLesBlancs(this, i, `\\dfrac{${a}}{%{champ1}}\\times ${texNombre(Math.pow(10, b))}= ${typesDeResultats[i] !== 3 ? texNombre(a * Math.pow(10, b) / choixPuissance10) : fractionSolution}`, KeyboardType.clavierNumbers, '\\ldots\\ldots')

          texteCorr = `$${texFractionFromString(a, miseEnEvidence(choixPuissance10))}\\times${texNombre(Math.pow(10, b))}
          = ${typesDeResultats[i] !== 3 ? (((choixPuissance10 !== 1 ? new FractionEtendue(a * Math.pow(10, b), choixPuissance10).texFraction : '')) + ' = ' + texNombre(a * Math.pow(10, b) / choixPuissance10)) : fractionSolution}$`
          if (context.isHtml && this.sup5 && this.correctionDetaillee) {
            texteCorr += `<glisse-nombre number="${texNombre(a / choixPuissance10)}"  animation="${b}"/>`
          }
          reponse = choixPuissance10
          reponseAMC = reponse

          handleAnswers(this, i, { champ1: { value: reponse } })

          break
        default: // case 4 avec trou sur la fraction
          a = choice([randint(1, 9) * 10 + randint(1, 9), randint(10, 99) * 10 + randint(1, 9)])
          b = puissances[i]
          choixPuissance10 = Math.pow(10, randint(0, b))

          if (typesDeResultats[i] !== 1) {
            if (this.sup3) {
              choixPuissance10 = randint(b, 3)
              if (choixPuissance10 === b) {
                if (b === 3) b--
                else choixPuissance10++
              }
              choixPuissance10 = Math.pow(10, choixPuissance10)
            } else {
              choixPuissance10 = Math.pow(10, randint(b + 1, 4))
            }
          }
          fractionSolution = new FractionEtendue(a * Math.pow(10, b), choixPuissance10).texFraction

          texte = remplisLesBlancs(this, i, `${texNombre(Math.pow(10, b))} \\times \\dfrac{${a}}{%{champ1}} = ${typesDeResultats[i] !== 3 ? texNombre(a * Math.pow(10, b) / choixPuissance10) : fractionSolution}`, KeyboardType.clavierNumbers, '\\ldots\\ldots')

          texteCorr = `$${new FractionEtendue(a, choixPuissance10).texFraction} \\times ${miseEnEvidence(texNombre(Math.pow(10, b)))}
          = ${typesDeResultats[i] !== 3 ? (((choixPuissance10 !== 1 ? new FractionEtendue(a * Math.pow(10, b), choixPuissance10).texFraction + ' = ' : '')) + texNombre(a * Math.pow(10, b) / choixPuissance10)) : fractionSolution}$`
          reponse = choixPuissance10
          reponseAMC = reponse

          handleAnswers(this, i, { champ1: { value: reponse } })
          break
      }

      if (context.isAmc) {
        this.autoCorrection[i].enonce = texte
        this.autoCorrection[i].propositions = [{ texte: texteCorr }]
        // @ts-expect-error trop compliqué à typer
        this.autoCorrection[i].reponse.param = {
          digits: nombreDeChiffresDansLaPartieEntiere(reponseAMC) + nombreDeChiffresDansLaPartieDecimale(reponseAMC) + 2,
          decimals: nombreDeChiffresDansLaPartieDecimale(reponseAMC) + 1,
          signe: false,
          exposantNbChiffres: 0
        }
      }
      if (this.questionJamaisPosee(i, a, b)) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.listeQuestions[i] = texteIntro + texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}
