import type {
  IExercice,
  OldFormatInteractifType,
} from '../exercices/Exercice.type'
import type { CanOptions, CanSolutionsMode } from './types/can'
import type { Language } from './types/languages'

// Types pour gestionInteractif
import type { IFractionEtendue } from '../modules/FractionEtendue.type'
// import Grandeur from '../modules/Grandeur'
import type Decimal from 'decimal.js'
import Hms from '../modules/Hms'

/*
Code inspiré de Sylvain, merci!
https://stackoverflow.com/questions/55020193/is-it-possible-to-create-a-typescript-type-from-an-array
*/
const VueTypeArray = <const>[
  'alacarte',
  'diaporama',
  'can',
  'eleve',
  'latex',
  'pdf',
  'confeleve',
  'amc',
  'anki',
  'moodle',
  'l',
  'l2',
  'overview',
  'myriade',
  'indices',
  '',
]
type VueTypeArrayType = typeof VueTypeArray
export type VueType = VueTypeArrayType[number] // equiv to diaporama' | 'can' | 'eleve' | 'latex' | 'confeleve' | 'amc' | 'anki' | 'moodle' | 'l' | 'l2' | 'overview'

// export type VueType = 'diaporama' | 'can' | 'eleve' | 'latex' | 'confeleve' | 'amc' | 'anki' | 'moodle' | 'l' | 'l2' | 'overview'

export const convertVueType = (type: string): VueType | undefined => {
  return VueTypeArray.indexOf(type as VueType) < 0
    ? undefined
    : VueTypeArray[VueTypeArray.indexOf(type as VueType)]
}

/**
 * setInteractive à 0 on enlève tout, à 1 on les met tous en interactif, à 2 on ne change rien
 * iframe est un identifiant de l'iframe utilisé par des recorders comme Moodle
 */
export interface InterfaceGlobalOptions {
  v?: VueType
  z?: string
  durationGlobal?: number
  ds?: string
  nbVues?: 1 | 2 | 3 | 4
  flow?: 0 | 1 | 2 // 0: Q->Q, 1: Q->R->Q, 2: Q->(Q+R)->Q
  screenBetweenSlides?: boolean
  pauseAfterEachQuestion?: boolean
  sound?: 0 | 1 | 2 | 3 | 4
  isImagesOnSides?: boolean
  shuffle?: boolean
  select?: number[]
  order?: number[]
  manualMode?: boolean
  es?: string
  title?: string
  presMode?:
    | 'liste_exos'
    | 'un_exo_par_page'
    | 'une_question_par_page'
    | 'recto'
    | 'verso'
  // | 'cartes'
  setInteractive?: string
  isSolutionAccessible?: boolean
  isTitleDisplayed?: boolean
  isInteractiveFree?: boolean
  oneShot?: boolean
  recorder?: 'capytale' | 'labomep' | 'moodle' | 'anki'
  done?: '1'
  answers?: string
  iframe?: string
  twoColumns?: boolean
  beta?: boolean
  isDataRandom?: boolean
  canD?: string
  canT?: string
  canSA?: boolean
  canSM?: CanSolutionsMode
  canI?: boolean
  lang?: Language
}

export interface InterfaceParams
  extends Partial<Record<string, string | number>> {
  uuid: string
  id?: string
  alea?: string
  interactif?: '0' | '1'
  cd?: '0' | '1'
  sup?: string
  sup2?: string
  sup3?: string
  sup4?: string
  sup5?: string
  versionQcm?: '0' | '1' // pour la version QCM des exercices de type simple
  nbQuestions?: number
  duration?: number
  cols?: number
  type?: 'mathalea' | 'static' | 'app'
  bestScore?: number
}

export interface InterfaceReferentiel {
  uuid: string
  id: string
  url: string
  titre: string
  tags: { interactif: boolean; interactifType: string; amc: boolean }
  datePublication?: string
  dateModification?: string
  annee?: string
}

export interface InterfaceResultExercice {
  numberOfPoints: number
  numberOfQuestions: number
  uuid?: string
  title?: string
  alea?: string
  answers?: { [key: string]: string }
  indice?: number
  state?: 'done'
  type?: 'mathalea' | 'static' | 'app'
  bestScore?: number
  duration?: number
  checkSum?: string
  resultsByQuestion?: boolean[]
}

// Pour Capytale
export interface Activity {
  globalOptions: InterfaceGlobalOptions
  exercicesParams: InterfaceParams[]
  canOptions: CanOptions
}

export interface StudentAssignment {
  resultsByExercice: InterfaceResultExercice[]
}

// Pour les listes d'entrées de référentiel dans le side menu
// * `title` : titre affiché dans le menu
// * `content` : le référentiel lui-même
// * `type` : type du référentiel pour gérer l'affichage (exploration récursive ou pas par exemple)
// * `activated`: flag pour afficher ou pas le référentiel
export type ReferentielTypes =
  | 'outils'
  | 'exercices'
  | 'ressources'
  | 'bibliotheque'
  | 'apps'
  | 'examens'
export type ReferentielNames =
  | 'outils'
  | 'aleatoires'
  | 'statiques'
  | 'ressources'
  | 'bibliotheque'
  | 'apps'
  | 'examens'
  | 'geometrieDynamique'
export type ReferentielForList = {
  name: ReferentielNames
  title: string
  content: InterfaceReferentiel[]
  type: ReferentielTypes
  activated: boolean
}

// Pour les exercices statiques de la bibliotheque
export interface bibliothequeExercise {
  uuid: string
  url: string
  png: string
  pngCor: string
}

// Pour les couleurs utilisées dans le site
// chaînes de caractères possible à ajouter après <text|fill|bg|border|...>-coopmaths- ou <text|fill|bg|border|...>-coopmathsdark-
export type CoopmathsColor =
  | 'canvas'
  | 'canvas-light'
  | 'canvas`lightest'
  | 'canvas-dark'
  | 'canvas-darkest'
  | 'warn'
  | 'warn-light'
  | 'warn-lightest'
  | 'warn-dark'
  | 'warn-darkest'
  | 'corpus'
  | 'corpus-light'
  | 'corpus-lightest'
  | 'corpus-dark'
  | 'corpus-darkest'
  | 'struct'
  | 'struct-ligh'
  | 'struct-lightest'
  | 'struct-dark'
  | 'struct-darkest'

// type pour une fonction qui n'admet pas d'argument et de retourne rien
export type Action = () => void

// type pour un intervalle de nombres
// usage : const myNumber: NumericRange<0, 100> = 3 (par de valeur possible inférieure à 0 et supérieure à 100)
// source: https://github.com/microsoft/TypeScript/issues/43505#issuecomment-1686128430
export type NumericRange<
  start extends number,
  end extends number,
  arr extends unknown[] = [],
  acc extends number = never,
> = arr['length'] extends end
  ? acc | start | end
  : NumericRange<
      start,
      end,
      [...arr, 1],
      arr[start] extends undefined ? acc : acc | arr['length']
    >
// autre type pour intervalle de nombre
// source : https://github.com/type-challenges/type-challenges/issues/9230
export type NumberRange<
  L extends number,
  H extends number,
  Out extends number[] = [],
  Flag extends boolean = false,
> = Out['length'] extends L
  ? NumberRange<L, H, [...Out, L], true>
  : Flag extends true
    ? Out['length'] extends H
      ? [...Out, Out['length']][number]
      : NumberRange<L, H, [...Out, Out['length']], Flag>
    : NumberRange<L, H, [...Out, never], Flag>
// type pour les chips des exercices
export type ChipContentType = { ref: string; title: string; key: string }

// type pour les filtres affichés
export type DisplayedFilterContent<T> = {
  title: string
  values: T[]
  isSelected: boolean
  clicked: number
}
export type DisplayedFilter<T> = Record<string, DisplayedFilterContent<T>>
export type FilterType = 'levels' | 'specs' | 'types'
export type FilterObject<T> = {
  type: FilterType
  key: string
  content: DisplayedFilterContent<T>
}

export type FilterSectionNameType = { [key in FilterType]: string }
export const FILTER_SECTIONS_TITLES: FilterSectionNameType = {
  levels: 'Niveaux',
  specs: 'Fonctionnalités',
  types: 'Types',
}

export type ResultType = { isOk: boolean; feedback?: string }
export type OptionsComparaisonType = {
  noFeedback?: boolean
  expressionsForcementReduites?: boolean
  avecSigneMultiplier?: boolean
  avecFractions?: boolean
  sansTrigo?: boolean
  fractionIrreductible?: boolean
  fractionSimplifiee?: boolean
  fractionReduite?: boolean
  fractionDecimale?: boolean
  fractionEgale?: boolean
  fractionIdentique?: boolean
  nombreDecimalSeulement?: boolean
  expressionNumerique?: boolean
  additionSeulementEtNonResultat?: boolean
  soustractionSeulementEtNonResultat?: boolean
  multiplicationSeulementEtNonResultat?: boolean
  divisionSeulementEtNonResultat?: boolean
  ensembleDeNombres?: boolean
  fonction?: boolean
  kUplet?: boolean
  seulementCertainesPuissances?: boolean
  sansExposantUn?: boolean
  suiteDeNombres?: boolean
  suiteRangeeDeNombres?: boolean
  factorisation?: boolean
  exclusifFactorisation?: boolean
  nbFacteursIdentiquesFactorisation?: boolean
  unSeulFacteurLitteral?: boolean
  HMS?: boolean
  intervalle?: boolean
  estDansIntervalle?: boolean
  ecritureScientifique?: boolean
  unite?: boolean
  precisionUnite?: number
  puissance?: boolean
  texteAvecCasse?: boolean
  texteSansCasse?: boolean
  nombreAvecEspace?: boolean
  developpementEgal?: boolean
  egaliteExpression?: boolean
  calculFormel?: boolean
  noUselessParen?: boolean
  nonReponseAcceptee?: boolean
  pluriels?: boolean
  multi?: boolean // options pour le drag and drop
  ordered?: boolean // options pour le drag and drop
  tolerance?: number
  variable?: string
  entier?: boolean
  domaine?: [number, number]
}
export type CompareFunction = (
  input: string,
  goodAnswer: string,
  options: OptionsComparaisonType,
) => ResultType

export type CleaningOperation =
  | 'fractions'
  | 'fractionsMemesNegatives'
  | 'virgules'
  | 'espaces'
  | 'parentheses'
  | 'puissances'
  | 'divisions'
  | 'latex'
  | 'foisUn'
  | 'unites'
  | 'doubleEspaces'
  | 'espaceNormal'
  | 'mathrm'

export type InteractivityType =
  | 'qcm'
  | 'mathlive'
  | 'fillInTheBlank'
  | 'tableauMathlive'
  | 'texte'
  | 'cliqueFigure'
  | 'dnd'
  | 'listeDeroulante'
  | 'custom'

export type TableauMathliveType = 'doubleEntree' | 'proportionnalite'

/**
 * Type pour les figures cliquables
 */
export type ClickFigures = Array<{ id: string; solution: boolean }>

export type AnswerType = {
  value: AnswerValueType
  compare?: CompareFunction
  options?: OptionsComparaisonType
}

export type AnswerNormalizedType = {
  value: string | string[]
  compare?: CompareFunction
  options?: OptionsComparaisonType
}

/**
 * Type pour une valeur de réponse avec ses options
 */
export interface Valeur {
  bareme?: (listePoints: number[]) => [number, number]
  feedback?: (saisies: Record<string, string>) => string
  reponse?: AnswerType
  champ1?: AnswerType
  champ2?: AnswerType
  champ3?: AnswerType
  champ4?: AnswerType
  champ5?: AnswerType
  champ6?: AnswerType
  rectangle1?: AnswerType
  rectangle2?: AnswerType
  rectangle3?: AnswerType
  rectangle4?: AnswerType
  rectangle5?: AnswerType
  rectangle6?: AnswerType
  rectangle7?: AnswerType
  rectangle8?: AnswerType

  // on va aller jusque 8 pour l'instant, si besoin on en ajoutera
  L1C1?: AnswerType
  L1C2?: AnswerType
  L1C3?: AnswerType
  L2C1?: AnswerType
  L2C2?: AnswerType
  L2C3?: AnswerType
  L3C1?: AnswerType
  L3C2?: AnswerType
  L3C3?: AnswerType

  // idem on en ajoutera si besoin
  callback?: (
    exercice: IExercice,
    question: number,
    variables: [string, AnswerType][],
    bareme: (listePoints: number[]) => [number, number],
  ) => {
    isOk: boolean
    feedback: string
    score: { nbBonnesReponses: number; nbReponses: number }
  }
}

/**
 * Type pour une valeur normalisée (après traitement)
 */
export type ValeurNormalized =
  | string
  | number
  | IFractionEtendue
  | Decimal
  | IGrandeur
  | Hms

/**
 * Type guard pour vérifier si une valeur est de type Valeur
 */
export function isValeur(value: unknown): value is Valeur {
  return typeof value === 'object' && value !== null
}

/**
 * Détecte structurellement une FractionEtendue sans dépendance runtime.
 * On considère qu'un objet avec une méthode sommeFraction est une FractionEtendue.
 */
export function isFractionEtendue(x: unknown): x is IFractionEtendue {
  return (
    typeof x === 'object' &&
    x !== null &&
    typeof (x as any).sommeFraction === 'function'
  )
}

/**
 * Détecte structurellement une Grandeur sans dépendance runtime.
 * On considère qu'un objet avec une propriété uniteDeReference est une Grandeur.
 */
export function isGrandeur(x: unknown): x is IGrandeur {
  return (
    typeof x === 'object' &&
    x !== null &&
    typeof (x as any).uniteDeReference === 'string'
  )
}

/**
 * Détecte structurellement un Decimal sans utiliser instanceof.
 * On vérifie la présence de quelques méthodes caractéristiques des instances Decimal.
 */
export function isDecimal(x: unknown): x is Decimal {
  return (
    typeof x === 'object' &&
    x !== null &&
    typeof (x as any).toDP === 'function' &&
    typeof (x as any).toFixed === 'function' &&
    typeof (x as any).plus === 'function'
  )
}

export interface IGrandeur {
  readonly mesure: number
  readonly mesureDecimal: Decimal
  readonly unite: string
  readonly puissanceUnite: number
  readonly uniteDeReference: string
  readonly prefixe: string
  readonly puissancePrefixe: number
  readonly latexUnit: string

  convertirEn(uniteConversion: string): IGrandeur
  estEgal(unite2: IGrandeur): boolean
  estUneApproximation(unite2: IGrandeur, precision: number): boolean
  toString(precision?: number): string
  toTex(precision?: number): string
  toHHMMSS(): string
}

export interface ReponseParams {
  digits?: number
  decimals?: number
  signe?: boolean
  exposantNbChiffres?: number
  exposantSigne?: boolean
  approx?: number | 'intervalleStrict'
  aussiCorrect?: number | IFractionEtendue
  digitsNum?: number
  digitsDen?: number
  basePuissance?: number
  exposantPuissance?: number
  baseNbChiffres?: number
  milieuIntervalle?: number
  formatInteractif?: InteractivityType | OldFormatInteractifType
  precision?: number
  scoreapprox?: number
  vertical?: boolean
  strict?: boolean
  vhead?: boolean
  tpoint?: string
}

export type AnswerValueType =
  | string
  | string[]
  | number
  | number[]
  | IFractionEtendue
  | Decimal
  | IGrandeur
  | Hms
  | IGrandeur[]
  | Hms[]
  | Decimal[]
  | IFractionEtendue[]

export function isAnswerValueType(value: unknown): value is AnswerValueType {
  return (
    typeof value === 'string' ||
    (Array.isArray(value) &&
      value.every((value) => typeof value === 'string')) ||
    typeof value === 'number' ||
    (Array.isArray(value) &&
      value.every((value) => typeof value === 'number')) ||
    isFractionEtendue(value) ||
    (Array.isArray(value) && value.every((v) => isFractionEtendue(v))) ||
    isDecimal(value) ||
    (Array.isArray(value) && value.every((v) => isDecimal(v))) ||
    isGrandeur(value) ||
    (Array.isArray(value) && value.every((v) => isGrandeur(v))) ||
    value instanceof Hms ||
    (Array.isArray(value) && value.every((value) => value instanceof Hms))
  )
}

export type ReponseComplexe = AnswerValueType | Valeur

export function isReponseComplexe(value: unknown): value is ReponseComplexe {
  return isAnswerValueType(value) || isValeur(value)
}

// Ajout d'un type dédié pour les choix de QCM
export type ChoixQcm = {
  texte: string // obligatoire pour les QCM interactif mais facultatif pour les QCM AMC (le forcer à vide si besoin)
  statut?: boolean | string | number // boolean pour les QCM interacif et string | number pour les QCM AMC
  // Ci-dessous, utile que pour AMC
  sanscadre?: boolean
  enonce?: string
  feedback?: string
  multicolsBegin?: boolean
  multicolsEnd?: boolean
  numQuestionVisible?: boolean
  pointilles?: boolean
  reponse?: {
    texte?: string
    valeur?: number | number[]
    alignement?: string
    param?: {
      digits?: number
      decimals?: number
      signe?: boolean
      approx?: number
      aussiCorrect?: number
    }
  }
}

export type UneProposition = {
  texte?: string
  statut?: number | boolean | string
  sanscadre?: boolean | number
  multicolsBegin?: boolean
  multicolsEnd?: boolean
  numQuestionVisible?: boolean
  type?: string
  feedback?: string
  pointilles?: boolean | number
  enonce?: string
  propositions?: ChoixQcm[]
  options?: {
    ordered?: boolean
    vertical?: boolean
    lastChoice?: number
    barreseparation?: boolean
    multicols?: boolean
    nbCols?: number
    digits?: number
    decimals?: number
    signe?: boolean
    exposantNbChiffres?: number
    exposantSigne?: boolean
    approx?: number
    multicolsAll?: boolean
    numerotationEnonce?: boolean
    avecSymboleMult?: boolean
  }
  reponse?: {
    valeur?:
      | ValeurNormalized
      | ValeurNormalized[]
      | number
      | number[]
      | IFractionEtendue
      | Decimal
      | IFractionEtendue[]
      | Decimal[]
      | string
      | string[]
    param?: ReponseParams
    textePosition?: string
    texte?: string
    alignement?: string
  }
}

export type LegacyReponse = string | IFractionEtendue | Decimal | number
export type LegacyReponses = LegacyReponse[] | LegacyReponse

export interface AutoCorrection {
  enonce?: string
  enonceAvant?: boolean
  melange?: boolean
  enonceAGauche?: boolean
  enonceAvantUneFois?: boolean
  enonceCentre?: boolean
  enonceApresNumQuestion?: boolean
  propositions?: UneProposition[]
  reponse?: {
    valeur?: ValeurNormalized
    param?: ReponseParams
    textePosition?: string
    texte?: string
  }
  options?: {
    radio?: boolean
    ordered?: boolean
    vertical?: boolean
    lastChoice?: number
    barreseparation?: boolean
    multicols?: boolean
    nbCols?: number
    digits?: number
    decimals?: number
    signe?: boolean
    exposantNbChiffres?: number
    exposantSigne?: boolean
    approx?: number
    multicolsAll?: boolean
    numerotationEnonce?: boolean
    avecSymboleMult?: boolean
  }
}

export interface MathaleaSVG extends SVGSVGElement {
  etat: boolean
  hasMathaleaListener: boolean
}

export type ResultOfExerciceInteractif = {
  numberOfPoints: number
  numberOfQuestions: number
}
