import { codageAngleDroit } from '../../lib/2d/CodageAngleDroit'
import { codageSegments } from '../../lib/2d/CodageSegment'
import { colorToLatexOrHTML } from '../../lib/2d/colorToLatexOrHtml'
import { fixeBordures } from '../../lib/2d/fixeBordures'
import { Interactif2d } from '../../lib/2d/interactif2d'
import { pointAbstrait } from '../../lib/2d/PointAbstrait'
import { polygone } from '../../lib/2d/polygones'
import { carre } from '../../lib/2d/polygonesParticuliers'
import { latex2d } from '../../lib/2d/textes'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { texNombre } from '../../lib/outils/texNombre'
import type { IExercice } from '../../lib/types'
import { mathalea2d } from '../../modules/mathalea2d'
import { gestionnaireFormulaireTexte, randint } from '../../modules/outils'
import type { NestedObjetMathalea2dArray } from '../../types/2d'
import Exercice from '../Exercice'

export const titre = 'Calculer l’aire d’un carré ou d’un rectangle'
export const interactifReady = true
export const interactifType = 'mathLive'
export const dateDePublication = '10/01/2026'

/**
 * Calculer l’aire in situ d’un carré ou d’un rectangle
 * @author Jean-Claude Lhote
 */

export const uuid = 'f36f4'

export const refs = {
  'fr-fr': ['6M2B-1'],
  'fr-2016': [],
  'fr-ch': [''],
}
const figureCarre = (cote: number, exercice: IExercice, question: number) => {
  const c = Math.max(5, cote)
  const A = pointAbstrait(0, 0)
  const B = pointAbstrait(c, 0)
  const C = pointAbstrait(c, c)
  const D = pointAbstrait(0, c)
  const ang1 = codageAngleDroit(A, B, C)
  const ang2 = codageAngleDroit(B, C, D)
  const ang3 = codageAngleDroit(C, D, A)
  const ang4 = codageAngleDroit(D, A, B)
  const cotesMarques = codageSegments('//', 'blue', A, B, B, C, C, D, D, A)
  const square = carre(A, B)
  square.hachures = true
  square.couleurDesHachures = colorToLatexOrHTML('lightgray')
  const afficheCote = latex2d(
    `${texNombre(cote, 1)} \\text{ cm}`,
    c / 2,
    c + 0.5,
    {
      letterSize: 'small',
    },
  )
  const input = new Interactif2d(
    '\\mathcal{A}=%{champ1}\\text{ cm}^2',
    c / 2,
    c / 2,
    {
      exercice,
      question,
    },
  )
  const objets: NestedObjetMathalea2dArray = [
    square,
    afficheCote,
    ang1,
    ang2,
    ang3,
    ang4,
    cotesMarques,
    input,
  ]
  return mathalea2d(Object.assign({}, fixeBordures(objets)), objets)
}
const figureRectangle = (
  largeur: number,
  longueur: number,
  exercice: IExercice,
  question: number,
) => {
  const l = Math.max(5, largeur)
  const L = Math.max(7, longueur)
  const A = pointAbstrait(0, 0)
  const B = pointAbstrait(L, 0)
  const C = pointAbstrait(L, l)
  const D = pointAbstrait(0, l)
  const ang1 = codageAngleDroit(A, B, C)
  const ang2 = codageAngleDroit(B, C, D)
  const ang3 = codageAngleDroit(C, D, A)
  const ang4 = codageAngleDroit(D, A, B)
  const rect = polygone(A, B, C, D)
  rect.hachures = true
  rect.couleurDesHachures = colorToLatexOrHTML('lightgray')
  const afficheLargeur = latex2d(
    `${texNombre(largeur, 1)} \\text{ cm}`,
    L + 1.5,
    l / 2,
    {
      letterSize: 'small',
    },
  )
  const afficheLongueur = latex2d(
    `${texNombre(longueur, 1)} \\text{ cm}`,
    L / 2,
    l + 0.5,
    {
      letterSize: 'small',
    },
  )
  const input = new Interactif2d(
    '\\mathcal{A}=%{champ1}\\text{ cm}^2',
    L / 2,
    l / 2,
    {
      exercice,
      question,
    },
  )
  const objets: NestedObjetMathalea2dArray = [
    rect,
    afficheLargeur,
    afficheLongueur,
    ang1,
    ang2,
    ang3,
    ang4,
    input,
  ]
  return mathalea2d(Object.assign({}, fixeBordures(objets)), objets)
}

export default class AireCarreRectangle extends Exercice {
  constructor() {
    super()
    this.besoinFormulaireTexte = [
      'Types de figure',
      'Nombres séparés par des tirets\n1 : Carré\n2 : Rectangle\n3 : Mélange',
    ]
    this.besoinFormulaire2CaseACocher = ['Valeurs décimales', false]
    this.sup2 = false
    this.sup = '3'
    this.spacing = 2
    this.spacingCorr = 2
    this.nbQuestions = 4
  }

  nouvelleVersion() {
    this.consigne =
      this.nbQuestions > 1
        ? 'Dans chaque cas, calculer l’aire de la figure donnée.'
        : 'Calculer l’aire de la figure donnée.'
    const listeTypeDeQuestions = gestionnaireFormulaireTexte({
      saisie: this.sup,
      nbQuestions: this.nbQuestions,
      min: 1,
      max: 2,
      melange: 3,
      defaut: 3,
    })
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50; ) {
      const typeDeQuestion = listeTypeDeQuestions[i]
      let texte = ''
      let texteCorr = ''
      let a = 0

      if (typeDeQuestion === 1) {
        // carré
        const cote = this.sup2 ? randint(20, 70) / 10 : randint(2, 9)
        a = cote * cote
        texte = figureCarre(cote, this, i)
        handleAnswers(this, i, { champ1: { value: a } })
        texteCorr = `L'aire du carré est de $${texNombre(cote, 1)}\\text{ cm}\\times ${texNombre(cote, 1)}\\text{ cm}=${miseEnEvidence(texNombre(a, 2))}\\text{ cm}^2$.`
      } else if (typeDeQuestion === 2) {
        // rectangle
        const largeur = this.sup2 ? randint(20, 50) / 10 : randint(2, 5)
        const longueur = this.sup2 ? randint(55, 100) / 10 : randint(6, 10)
        a = largeur * longueur
        texte = figureRectangle(largeur, longueur, this, i)
        texteCorr = `L'aire du rectangle est de $${texNombre(largeur, 1)}\\text{ cm}\\times ${texNombre(longueur, 1)}\\text{ cm}=${miseEnEvidence(texNombre(a, 2))}\\text{ cm}^2$.`
        handleAnswers(this, i, { champ1: { value: a } })
      }
      if (this.questionJamaisPosee(i, a)) {
        this.listeQuestions.push(texte)
        this.listeCorrections.push(texteCorr)
        i++
      }
      cpt++
    }
  }
}
