import { droiteGraduee } from '../../lib/2d/DroiteGraduee'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { remplisLesBlancs } from '../../lib/interactif/questionMathLive'
import { arrayClone, choice } from '../../lib/outils/arrayOutils'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { lettreIndiceeDepuisChiffre } from '../../lib/outils/outilString'
import { texNombre } from '../../lib/outils/texNombre'
import { context } from '../../modules/context'

import { fraction } from '../../modules/fractions'
import { mathalea2d } from '../../modules/mathalea2d'

import {
  gestionnaireFormulaireTexte,
  listeQuestionsToContenu,
  quotientier,
  randint,
} from '../../modules/outils'
import Exercice from '../Exercice'

export const titre = 'Lire des abscisses fractionnaires'
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcReady = true
export const amcType = 'AMCOpen'
export const dateDePublication = '14/01/2025'

/**
 *  :
 * Lire des abscisses sous forme de fractions avec possibilté d'avoir des fractions simplifiées
 * @author Olivier Mimeau d'après Jean-Claude Lhote 6N21-2
 */
export const uuid = '0e527'

export const refs = {
  'fr-fr': ['CM2N2F-1'],
  'fr-2016': ['6N21-3'],
  'fr-ch': ['9NO11-10'],
}
export default class LireAbscissesFractionnairesComplexes extends Exercice {
  constructor() {
    super()
    this.sup = 13 // 3
    /* this.sup2 = true // sous forme fractionnaire
    this.sup3 = true // avec des fractions simplifiées
    this.sup4 = false // valeurs positives si false sinon valeurs positives et négatives */
    this.besoinFormulaireTexte = [
      'Types de questions',
      'Nombres séparés par des tirets  :\n2 : Demis\n3 : Tiers\n4 : Quarts\n5 : Cinquièmes\n6 : Sixièmes\n7 : Septièmes\n8 : Huitièmes\n9 : Neuvièmes\n10: Dixièmes\n11: Onzièmes\n12 : Douzièmes\n13 : Mélange',
    ]
    /* this.besoinFormulaire2CaseACocher = [
      'Ajouter "sous forme fractionnaire" dans l\'énoncé',
      true,
    ]
    this.besoinFormulaire3CaseACocher = [
      'Avec des fractions simplifiées (le cas échéant)',
      true,
    ]
    this.besoinFormulaire4CaseACocher = ['Avec des valeurs négatives', false] */
    this.nbQuestions = 3

    // evitons les nombreuses cases a cocher

    this.besoinFormulaire2Texte = [
      'Options supplémentaires',
      '0: Sans option\n1 : Ajouter "sous forme fractionnaire" dans l\'énoncé\n2 : Avec des fractions simplifiées (le cas échéant)\n3 : Avec des valeurs négatives\n4 : Correction détaillée\n5 : Utiliser la notation ()',
    ]
    this.sup2 = '1-2-4'
    this.spacingCorr = context.isHtml ? 2.5 : 4 // ecart pour les fractions
  }

  nouvelleVersion() {
    //    let typeDeQuestions: number[]

    if (this.sup3 === true) {
      this.sup2 += '-2'
    }
    if (this.sup3 === false) {
      // !this.sup3 ne reflete pas s3=false si s3 non defini
      this.sup2 = this.sup2.replace('2', '')
    }
    if (this.sup4 === true) {
      this.sup2 += '-3'
    }
    if (this.sup4 === false) {
      this.sup2 = this.sup2.replace('3', '')
    }
    const typeDeQuestions = gestionnaireFormulaireTexte({
      saisie: this.sup,
      min: 2,
      max: 12,
      defaut: 13,
      melange: 13,
      nbQuestions: this.nbQuestions,
    })
    const listeOptions = gestionnaireFormulaireTexte({
      saisie: this.sup2,
      nbQuestions: 0,
      min: 0,
      max: 5,
      melange: 6,
      defaut: 0,
    })
    const motFractionnaire = listeOptions.includes(1)
    const fractionsSimplifiees = listeOptions.includes(2)
    const valeursNegatives = listeOptions.includes(3)
    const correctionDetaillee = listeOptions.includes(4)
    const correctionNotationParentheses = listeOptions.includes(5)
    const data: Record<
      number,
      { id: number; den: number[]; max: number; min: number }
    > = {
      2: {
        id: 2,
        den: [2],
        max: !valeursNegatives ? 8 : 4,
        min: !valeursNegatives ? 0 : -4,
      },
      3: {
        id: 3,
        den: [3],
        max: !valeursNegatives ? 8 : 4,
        min: !valeursNegatives ? 0 : -4,
      },
      4: {
        id: 4,
        den: [2, 4],
        max: !valeursNegatives ? 8 : 4,
        min: !valeursNegatives ? 0 : -4,
      },
      5: {
        id: 5,
        den: [5],
        max: !valeursNegatives ? 8 : 4,
        min: !valeursNegatives ? 0 : -4,
      },
      6: {
        id: 6,
        den: [2, 3, 6],
        max: !valeursNegatives ? 6 : 3,
        min: !valeursNegatives ? 0 : -3,
      },
      7: {
        id: 7,
        den: [7],
        max: !valeursNegatives ? 4 : 2,
        min: !valeursNegatives ? 0 : -2,
      },
      8: {
        id: 8,
        den: [2, 4, 8],
        max: !valeursNegatives ? 4 : 2,
        min: !valeursNegatives ? 0 : -2,
      },
      9: {
        id: 9,
        den: [3, 9],
        max: !valeursNegatives ? 4 : 2,
        min: !valeursNegatives ? 0 : -2,
      },
      10: {
        id: 10,
        den: [2, 5, 10],
        max: !valeursNegatives ? 4 : 2,
        min: !valeursNegatives ? 0 : -2,
      },
      11: {
        id: 11,
        den: [11],
        max: !valeursNegatives ? 3 : 2,
        min: !valeursNegatives ? 0 : -1,
      },
      12: {
        id: 12,
        den: [2, 3, 4, 6, 12],
        max: !valeursNegatives ? 3 : 2,
        min: !valeursNegatives ? 0 : -1,
      },
    }

    for (let i = 0, texte, cpt = 0; i < this.nbQuestions && cpt < 50; cpt++) {
      texte = ''
      const tab = Number(typeDeQuestions[i])
      const origine = data[tab].min

      const den1 =
        !fractionsSimplifiees || data[tab].den.length === 1
          ? data[tab].id
          : choice(data[tab].den)
      const tab1 = data[tab].id / den1

      const num1 = trouveNumerateur(den1, origine, data[tab].max)
      const den2 =
        !fractionsSimplifiees || data[tab].den.length === 1
          ? data[tab].id
          : choice(data[tab].den, den1)
      const tab2 = data[tab].id / den2
      const num2 = trouveNumerateur(den2, origine, data[tab].max, [
        { num: num1, den: den1 },
      ])
      const den3 =
        !fractionsSimplifiees || data[tab].den.length === 1
          ? data[tab].id
          : choice(
              data[tab].den,
              data[tab].den.length > 2 ? [den1, den2] : [den1],
            )
      const tab3 = data[tab].id / den3
      const num3 = trouveNumerateur(den3, origine, data[tab].max, [
        { num: num1, den: den1 },
        { num: num2, den: den2 },
      ])
      const fraction1 = fraction(num1, den1)
      const fraction2 = fraction(num2, den2)
      const fraction3 = fraction(num3, den3)
      const reponse1 = fraction1.reduire(tab1 * 2).texFraction
      const reponse2 = fraction2.reduire(tab2 * 2).texFraction
      const reponse3 = fraction3.reduire(tab3 * 2).texFraction
      texte +=
        'Donner les abscisses des points ' +
        (motFractionnaire ? 'sous forme fractionnaire ' : '') +
        ': '
      let textePourRemplisLesBlancs = ''
      if (correctionNotationParentheses) {
        textePourRemplisLesBlancs = `\\quad ${lettreIndiceeDepuisChiffre(i * 3 + 1)}\\left( \\; %{champ1} \\right) \\quad ${lettreIndiceeDepuisChiffre(i * 3 + 2)} \\left( \\; %{champ2} \\right) \\quad ${lettreIndiceeDepuisChiffre(i * 3 + 3)} \\left( \\;  %{champ3} \\right)`
      } else {
        textePourRemplisLesBlancs = `\\quad ${lettreIndiceeDepuisChiffre(i * 3 + 1)} \\; %{champ1}  \\quad ${lettreIndiceeDepuisChiffre(i * 3 + 2)}  \\; %{champ2}  \\quad ${lettreIndiceeDepuisChiffre(i * 3 + 3)}  \\;  %{champ3} `
      }
      texte += remplisLesBlancs(
        this,
        i,
        textePourRemplisLesBlancs,
        'clavierDeBaseAvecFraction',
        '\\ldots',
      )
      handleAnswers(
        this,
        i,
        {
          bareme: (listePoints) => [
            listePoints[0] + listePoints[1] + listePoints[2],
            3,
          ],
          champ1: {
            value: reponse1,
            options: { fractionSimplifiee: motFractionnaire },
          }, // avecFractions
          champ2: {
            value: reponse2,
            options: { fractionSimplifiee: motFractionnaire },
          },
          champ3: {
            value: reponse3,
            options: { fractionSimplifiee: motFractionnaire },
          },
        },
        { formatInteractif: 'fillInTheBlank' },
      )

      const tailleUnite = 20 / (data[tab].max - origine)
      const d = droiteGraduee({
        Min: origine,
        Max: data[tab].max,
        Unite: tailleUnite,
        thickSec: true,
        thickSecDist: 1 / data[tab].id,
        thickEpaisseur: 3,
        pointListe: [
          [num1 / den1, lettreIndiceeDepuisChiffre(i * 3 + 1)],
          [num2 / den2, lettreIndiceeDepuisChiffre(i * 3 + 2)],
          [num3 / den3, lettreIndiceeDepuisChiffre(i * 3 + 3)],
        ],
      })

      texte +=
        '<br>' +
        mathalea2d(
          {
            xmin: -0.2,
            xmax: (data[tab].max - origine) * tailleUnite + 1,
            ymin: -1,
            ymax: 1,
            style: 'margin-top:10px ',
            scale: 0.6,
          },
          d,
        )
      const dCorr = droiteGraduee({
        Min: origine,
        Max: data[tab].max,
        Unite: tailleUnite,
        thickSec: true,
        thickSecDist: 1 / data[tab].id,
        thickEpaisseur: 3,
        pointListe: [
          [num1 / den1, lettreIndiceeDepuisChiffre(i * 3 + 1)],
          [num2 / den2, lettreIndiceeDepuisChiffre(i * 3 + 2)],
          [num3 / den3, lettreIndiceeDepuisChiffre(i * 3 + 3)],
        ],
        labelListe: [
          [num1 / den1, textFractionCorr(num1, den1, fractionsSimplifiees)],
          [num2 / den2, textFractionCorr(num2, den2, fractionsSimplifiees)],
          [num3 / den3, textFractionCorr(num3, den3, fractionsSimplifiees)],
        ],
        labelDistance: 0.8,
        labelCustomDistance: 1.7,
      })
      let texteCorr = mathalea2d(
        {
          xmin: -0.2,
          xmax: (data[tab].max - origine) * tailleUnite + 1,
          ymin: -2.5,
          ymax: 1,
          style: 'margin-top:10px ',
          scale: 0.6,
        },
        dCorr,
      )

      // correction textuelle
      if (!context.isHtml) {
        texteCorr += '<br><br>'
      }
      // correction textuelle
      if (correctionDetaillee) {
        texteCorr += textCorrectionDetaillee(
          lettreIndiceeDepuisChiffre(i * 3 + 1),
          data[tab].id,
          num1,
          den1,
          fractionsSimplifiees,
          correctionNotationParentheses,
        )
        texteCorr += textCorrectionDetaillee(
          lettreIndiceeDepuisChiffre(i * 3 + 2),
          data[tab].id,
          num2,
          den2,
          fractionsSimplifiees,
          correctionNotationParentheses,
        )
        texteCorr += textCorrectionDetaillee(
          lettreIndiceeDepuisChiffre(i * 3 + 3),
          data[tab].id,
          num3,
          den3,
          fractionsSimplifiees,
          correctionNotationParentheses,
        )
      } else {
        texteCorr += `Il y a $${data[tab].id}$ intervalles entre 0 et 1, `
        texteCorr += `on peut donc écrire des fractions du type $\\dfrac{...}{${data[tab].id}}$`
        if (fractionsSimplifiees) {
          if (data[tab].den.length > 1) {
            const autresDen = arrayClone(data[tab].den).filter(
              (n) => n !== data[tab].id,
            )
            while (autresDen.length > 1) {
              texteCorr += `, $\\dfrac{...}{${autresDen[0]}}$`
              autresDen.shift()
            }
            texteCorr += ` ou $\\dfrac{...}{${autresDen[0]}}$ `
          }
          texteCorr += ''
        }
        texteCorr += `.<br> Donc `

        texteCorr +=
          ecritAbscisse(
            lettreIndiceeDepuisChiffre(i * 3 + 1),
            textFractionCorr(num1, den1, fractionsSimplifiees),
            correctionNotationParentheses,
          ) + ' , '
        // ` $${lettreIndiceeDepuisChiffre(i * 3 + 1)} \\left( ${textFractionCorr(num1, den1, fractionsSimplifiees)}  \\right)$, `
        texteCorr +=
          ecritAbscisse(
            lettreIndiceeDepuisChiffre(i * 3 + 2),
            textFractionCorr(num2, den2, fractionsSimplifiees),
            correctionNotationParentheses,
          ) + ' et '
        texteCorr +=
          ecritAbscisse(
            lettreIndiceeDepuisChiffre(i * 3 + 3),
            textFractionCorr(num3, den3, fractionsSimplifiees),
            correctionNotationParentheses,
          ) + '.'
      }

      if (!motFractionnaire) {
        texteCorr += '<br>'
        type PrepareReponseDecimale = { lettre: string; valeur: string }
        const listeReponseDecimale: PrepareReponseDecimale[] = []
        if (fraction1.multiplieEntier(100).estEntiere) {
          listeReponseDecimale.push({
            lettre: lettreIndiceeDepuisChiffre(i * 3 + 1),
            valeur: texNombre(fraction1.toNumber()),
          })
        } // texNombre(L > l ? L : l)
        if (fraction2.multiplieEntier(100).estEntiere) {
          listeReponseDecimale.push({
            lettre: lettreIndiceeDepuisChiffre(i * 3 + 2),
            valeur: texNombre(fraction2.toNumber()),
          })
        }
        if (fraction3.multiplieEntier(100).estEntiere) {
          listeReponseDecimale.push({
            lettre: lettreIndiceeDepuisChiffre(i * 3 + 3),
            valeur: texNombre(fraction3.toNumber()),
          })
        }
        if (listeReponseDecimale.length > 0) {
          texteCorr += 'On peut aussi écrire : '
          texteCorr += ecritAbscisse(
            listeReponseDecimale[0].lettre,
            listeReponseDecimale[0].valeur,
            correctionNotationParentheses,
          )

          listeReponseDecimale.shift()
          if (listeReponseDecimale.length > 0) {
            if (listeReponseDecimale.length > 1) {
              texteCorr += ecritAbscisse(
                listeReponseDecimale[0].lettre,
                listeReponseDecimale[0].valeur,
                correctionNotationParentheses,
              )
              listeReponseDecimale.shift()
            }
            texteCorr += ecritAbscisse(
              listeReponseDecimale[0].lettre,
              listeReponseDecimale[0].valeur,
              correctionNotationParentheses,
            )
          }
          texteCorr += '.'
        }
      }
      if (this.questionJamaisPosee(i, den1, num1, num2, num3)) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        if (context.isAmc) {
          this.autoCorrection[i] = {
            enonce: texte + '\n',
            propositions: [
              {
                texte: texteCorr,
                statut: 5,
                sanscadre: true,
                pointilles: true,
                feedback: '',
              },
            ],
          }
        }
        i++
      }
    }
    listeQuestionsToContenu(this)
  }
}

function trouveNumerateur(
  den: number,
  min: number,
  max: number,
  fractionsAEviter: { num: number; den: number }[] = [],
) {
  const isNombreEntier = function (nu: number, de: number) {
    if (nu % de === 0) return true
    return false
  }

  let trouve = false
  let num = 0
  let i = 0
  while (!trouve && i < 10) {
    num = randint(min * den, den * max)

    // on veut éviter l'entier
    let k = 0
    while (isNombreEntier(num, den) && k < 5) {
      num = randint(min * den, den * max)
      k++
    }

    // on veut éviter d'être trop proche d'un autre point
    trouve = true
    for (const fraction of fractionsAEviter) {
      if (Math.abs(fraction.num / fraction.den - num / den) < 2 / den) {
        trouve = false
        break
      }
    }
    i++
  }
  return num
}

function textFractionCorr(
  num: number,
  den: number,
  simplifier: boolean,
): string {
  return simplifier
    ? fraction(num, den).texFractionSimplifiee
    : fraction(num, den).texFraction
}

function ecritAbscisse(
  point: string,
  nombre: string,
  parenthese: boolean,
): string {
  let texte = ''
  if (parenthese) {
    texte += `$${point} \\left( ${miseEnEvidence(nombre)} \\right)$`
  } else {
    texte += `l'abscisse de $${point}$ est $${miseEnEvidence(nombre)}$`
    // texte += `\\text{l'abscisse de }${point}\\text{ est }${nombre}`
  }
  return texte
}

function expliciteNbPas(num: number, den: number): string {
  let texte = ''
  if (quotientier(num, den) > 0) {
    texte += `(${quotientier(num, den)} \\times  ${den}) + ${num % den} = `
  }
  texte += `${num}`
  return texte
}

function textCorrectionDetaillee(
  lettre: string,
  PasPrincipal: number,
  num: number,
  den: number,
  simplifier: boolean,
  parentheses: boolean,
): string {
  let reponse = ''
  if (simplifier) {
    const fractSimp = fraction(num, den).simplifie()
    reponse += `Il y a $${PasPrincipal}$ intervalles dans une unité. `
    if (fractSimp.den !== PasPrincipal) {
      reponse += `En groupant ces intervalles par ${quotientier(PasPrincipal, fractSimp.den)}, `
      reponse += `on obtient un pas de $\\dfrac{1}{${fractSimp.den}}$.<br>`
      reponse += `Pour aller de l'origine au point $${lettre}$, il y a $${expliciteNbPas(fractSimp.num, fractSimp.den)}$ groupements de  ${quotientier(PasPrincipal, fractSimp.den)} intervalles : $${fractSimp.num} \\times \\dfrac{1}{${fractSimp.den}}$ = `
    } else {
      reponse += ` donc le pas est de $\\dfrac{1}{${PasPrincipal}}$ car $${PasPrincipal} \\times \\dfrac{1}{${PasPrincipal}}$  = 1.<br>`
      reponse += `Pour aller de l'origine au point $${lettre}$, il y a $${expliciteNbPas(num, PasPrincipal)}$ pas : $${num} \\times \\dfrac{1}{${PasPrincipal}}$ = `
    }
  } else {
    reponse += `Il y a $${PasPrincipal}$ intervalles dans une unité, donc le pas est de $\\dfrac{1}{${PasPrincipal}}$ car $${PasPrincipal} \\times \\dfrac{1}{${PasPrincipal}}$  = 1.<br>`
    reponse += `Pour aller de l'origine au point $${lettre}$, il y a $${expliciteNbPas(num, PasPrincipal)}$ pas : $${num} \\times \\dfrac{1}{${PasPrincipal}}$ = `
  }
  reponse += `$${textFractionCorr(num, den, simplifier)}$.<br>L'abscisse du point $${lettre}$ est $${miseEnEvidence(textFractionCorr(num, den, simplifier))}$`
  if (parentheses) {
    reponse += ` et se note $${lettre} \\left( ${miseEnEvidence(textFractionCorr(num, den, simplifier))} \\right)$`
  }
  reponse += `.<br>`
  return reponse
}
