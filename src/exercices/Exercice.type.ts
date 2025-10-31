import type Figure from 'apigeom/src/Figure'
import type { PartialKbType } from '../lib/interactif/claviers/keyboard'
import type {
  AutoCorrection,
  ClickFigures,
  IGrandeur,
  InteractivityType,
  OptionsComparaisonType,
  ReponseComplexe,
} from '../lib/types'

// Pour retro compatibilité avec setReponse
export type OldFormatInteractifType =
  | 'calcul'
  | 'texte'
  | 'tableauMathlive'
  | 'Num'
  | 'Den'
  | 'fractionEgale'
  | 'unites'
  | 'intervalleStrict'
  | 'intervalle'
  | 'puissance'
  | 'canonicalAdd'
  | 'ignorerCasse'

export interface IExercice {
  titre: string
  id?: string
  uuid: string
  sup: any
  sup2: any
  sup3: any
  sup4: any
  sup5: any
  exoCustomResultat?: boolean
  duree?: number
  seed?: string
  numeroExercice?: number
  typeExercice?: string
  duration?: number
  consigne: string
  consigneCorrection: string
  introduction: string
  listeQuestions: string[]
  listeCorrections: string[]
  listeCanReponsesACompleter: string[]
  listeCanEnonces: string[]
  listeCanLiees: number[][]
  listeCanNumerosLies: number[]
  question?: string
  reponse?: ReponseComplexe
  correction?: string
  canOfficielle?: boolean
  canEnonce?: string
  canReponseACompleter: string
  canNumeroLie: number
  canLiee: number[]
  formatChampTexte: string | PartialKbType | undefined
  optionsChampTexte?: object
  compare?:
    | ((
        input: string,
        goodAnswer: string,
      ) => { isOk: boolean; feedback?: string })
    | ((
        input: string,
        goodAnswer: IGrandeur,
      ) => { isOk: boolean; feedback?: string })
  optionsDeComparaison?: Partial<OptionsComparaisonType>
  formatInteractif?: InteractivityType | OldFormatInteractifType
  contenu?: string
  contenuCorrection?: string
  autoCorrection: AutoCorrection[]
  figures?: Figure[] | ClickFigures[]
  amcReady?: boolean
  amcType?: string
  tableauSolutionsDuQcm?: object[]
  spacing: number
  spacingCorr: number
  pasDeVersionLatex: boolean
  listePackages?: string[]
  consigneModifiable: boolean
  nbQuestionsModifiable: boolean
  nbCols: number
  nbColsCorr: number
  nbColsModifiable: boolean
  nbColsCorrModifiable: boolean
  spacingModifiable: boolean
  spacingCorrModifiable: boolean
  listeAvecNumerotation?: boolean
  beamer: boolean
  nbQuestions: number
  pointsParQuestions: number
  correctionDetailleeDisponible: boolean
  correctionDetaillee: boolean
  correctionIsCachee: boolean
  video: string
  interactif: boolean
  interactifObligatoire: boolean
  interactifReady: boolean
  interactifType?: string
  besoinFormulaireNumerique:
    | boolean
    | [titre: string, max: number, tooltip: string]
    | [titre: string, max: number]
  besoinFormulaireTexte: boolean | [string, string]
  besoinFormulaireCaseACocher: boolean | [string] | [string, boolean]
  besoinFormulaire2Numerique:
    | boolean
    | [titre: string, max: number, tooltip: string]
    | [titre: string, max: number]
  besoinFormulaire2Texte: boolean | [string, string]
  besoinFormulaire2CaseACocher: boolean | [string] | [string, boolean]
  besoinFormulaire3Numerique:
    | boolean
    | [titre: string, max: number, tooltip: string]
    | [titre: string, max: number]
  besoinFormulaire3Texte: boolean | [string, string]
  besoinFormulaire3CaseACocher: boolean | [string] | [string, boolean]
  besoinFormulaire4Numerique:
    | boolean
    | [titre: string, max: number, tooltip: string]
    | [titre: string, max: number]
  besoinFormulaire4Texte: boolean | [string, string]
  besoinFormulaire4CaseACocher: boolean | [string] | [string, boolean]
  besoinFormulaire5Numerique:
    | boolean
    | [titre: string, max: number, tooltip: string]
    | [titre: string, max: number]
  besoinFormulaire5Texte: boolean | [string, string]
  besoinFormulaire5CaseACocher: boolean | [string] | [string, boolean]
  listeArguments: string[]
  lastCallback: string
  checkSum?: string
  examen?: string
  mois?: string
  annee?: string
  lieu?: string
  content?: string
  contentCorr?: string
  comment?: string
  answers?: { [key: string]: string }
  dragAndDrops?: IDragAndDrop[]
  isDone?: boolean
  html: HTMLElement
  score?: number
  vspace?: number

  destroy(): void
  nouvelleVersionWrapper: (...args: any[]) => void
  correctionInteractive?(i: number): string | string[]
  nouvelleVersion(numeroExercice?: number, numeroQuestion?: number): void
  reinit: (...args: any[]) => void
  applyNewSeed: (...args: any[]) => void
  questionJamaisPosee: (...args: any[]) => boolean
}

export interface IExerciceSimple extends IExercice {
  typeExercice: 'simple'
  distracteurs: (string | number)[]
  versionQcmDisponible?: boolean
  versionQcm?: boolean
}

export interface IEtiquette {
  id: string
  contenu: string
  duplicable?: boolean
  callback?: (e: Event) => void
}

export interface IDragAndDrop {
  exercice: IExercice
  question: number
  consigne: string
  etiquettes: IEtiquette[][]
  enonceATrous: string
  listeners: [Element, string, EventListener][]

  ajouteDragAndDrop(options: { melange: boolean; duplicable: boolean }): string
}

export interface IExerciceBrevet extends IExercice {
  enonce: string
  checksum: string
  versionAleatoire?: (i: number) => void
  versionOriginale: () => void
}

export interface IExerciceBrevetA extends IExerciceBrevet {
  versionAleatoire: (i: number) => void
}

export interface IExerciceCan extends IExerciceSimple {
  canOfficielle?: boolean
}

export interface IExerciceQcm extends IExercice {
  versionQcm?: boolean
  versionQcmDisponible: boolean
  enonce: string
  reponses: string[]
  bonnesReponses?: boolean[]
  corrections?: string[]
  options: { vertical?: boolean; ordered: boolean; lastChoice?: number }
  ajouteQcmCorr: boolean
  versionAleatoire?: () => void
  versionOriginale?: () => void
  qcmCamExport(): { question: string; reponse: string }[]
}

export interface IExerciceQcmA extends IExerciceQcm {
  versionAleatoire: () => void
  aleatoire: () => void
}
