/**
 * Exercice 1A-S1 : Choisir le bon diagramme circulaire
 *
 * OBJECTIF PÉDAGOGIQUE :
 * L'élève doit identifier le bon diagramme circulaire parmi 4 propositions
 * en fonction d'effectifs donnés dans une situation concrète.
 *
 * PRINCIPE DE FONCTIONNEMENT :
 * 1. On choisit une proportion prédéfinie (ex: [1/2, 1/4, 1/4])
 * 2. On choisit un total compatible parmi ceux prédéfinis pour cette proportion
 * 3. On calcule les effectifs correspondants
 * 4. On génère 3 distracteurs selon les règles de types
 * 5. La correction montre le calcul des parts et angles
 *
 * NOUVEAUTÉ : Système de types pour garantir des distracteurs visuellement distincts
 * - 8 types exhaustifs basés sur la composition angulaire
 * - Règles strictes : pas de même type entre bonne réponse et distracteurs
 *
 * @author G.Marris
 * @date 26/09/2025
 */

import { diagrammeCirculaire } from '../../lib/2d/diagrammes'
import { tableauColonneLigne } from '../../lib/2d/tableau'
import { createList } from '../../lib/format/lists'
import { choice, shuffle } from '../../lib/outils/arrayOutils'
import { fixeBordures, mathalea2d } from '../../modules/2dGeneralites'
import FractionEtendue from '../../modules/FractionEtendue'
import ExerciceQcmA from '../ExerciceQcmA'

// ============================================================================
// MÉTADONNÉES DE L'EXERCICE
// ============================================================================
export const dateDePublication = '26/09/2025'
export const uuid = 'q5c12f'
export const refs = { 'fr-fr': ['1A-S1'], 'fr-ch': [] }
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'Choisir le bon diagramme circulaire'

// ============================================================================
// INTERFACES TYPESCRIPT
// ============================================================================

/**
 * Définit une proportion visuelle avec 3 secteurs
 */
interface ProportionVisuelle {
  fractions: [number, number, number]
  totauxPossibles: number[]
  typeId: number
}

/**
 * Définit un contexte de situation réaliste
 */
interface ContexteSituation {
  sujet: string
  unite: string
  groupes: string[]
}

// ============================================================================
// CLASSE PRINCIPALE DE L'EXERCICE
// ============================================================================
export default class Auto1AS1 extends ExerciceQcmA {
  // ============================================================================
  // CLASSIFICATION DES TYPES DE DIAGRAMMES (8 types exhaustifs)
  // ============================================================================
  /**
   * TYPES DE DIAGRAMMES SELON LA COMPOSITION ANGULAIRE :
   *
   * Classification par ordre décroissant des angles :
   * - Rentrant (R) : 180° < α < 360°
   * - Plat (P)     : α = 180°
   * - Obtus (O)    : 90° < α < 180°
   * - Droit (D)    : α = 90°
   * - Aigu (A)     : 0° < α < 90°
   *
   * ┌────────┬───┬───┬───┬───┬───┬──────────────────────────────────┐
   * │ Type   │ R │ P │ O │ D │ A │ Description                      │
   * ├────────┼───┼───┼───┼───┼───┼──────────────────────────────────┤
   * │ Type 1 │ 1 │ 0 │ 1 │ 0 │ 1 │ Ex: 210°, 120°, 30°              │
   * │ Type 2 │ 1 │ 0 │ 0 │ 1 │ 1 │ Ex: 225°, 90°, 45°               │
   * │ Type 3 │ 1 │ 0 │ 0 │ 0 │ 2 │ Ex: 216°, 72°, 72°               │
   * │ Type 4 │ 0 │ 1 │ 1 │ 0 │ 1 │ Ex: 180°, 120°, 60°              │
   * │ Type 5 │ 0 │ 1 │ 0 │ 2 │ 0 │ Ex: 180°, 90°, 90°               │
   * │ Type 6 │ 0 │ 0 │ 3 │ 0 │ 0 │ Ex: 120°, 120°, 120°             │
   * │ Type 7 │ 0 │ 0 │ 2 │ 1 │ 0 │ Ex: 135°, 135°, 90°              │
   * │ Type 8 │ 0 │ 0 │ 2 │ 0 │ 1 │ Ex: 144°, 144°, 72°              │
   * └────────┴───┴───┴───┴───┴───┴──────────────────────────────────┘
   *
   * RÈGLES DE SÉLECTION DES DISTRACTEURS :
   * - Bonne réponse et distracteurs doivent être de types différents
   * - Type 4 : au plus 2 occurrences parmi les 4 propositions
   * - Autres types : au plus 1 occurrence parmi les 4 propositions
   */

  // ============================================================================
  // PROPORTIONS VISUELLES (configurations concrètes)
  // ============================================================================      id: 6,
  private static readonly PROPORTIONS_VISUELLES: ProportionVisuelle[] = [
    // Type 1
    {
      fractions: [7 / 12, 4 / 12, 1 / 12],
      totauxPossibles: [60, 120],
      typeId: 1,
    },
    // Type 2
    {
      fractions: [5 / 8, 1 / 4, 1 / 8],
      totauxPossibles: [40, 80, 120, 160, 200],
      typeId: 2,
    },
    // Type 3
    {
      fractions: [3 / 5, 1 / 5, 1 / 5],
      totauxPossibles: [40, 60, 80, 100, 120, 160, 200],
      typeId: 3,
    },
    // Type 4 (3 configurations)
    {
      fractions: [1 / 2, 4 / 10, 1 / 10],
      totauxPossibles: [40, 60, 80, 100, 120, 160, 200],
      typeId: 4,
    },
    {
      fractions: [1 / 2, 3 / 10, 2 / 10],
      totauxPossibles: [40, 60, 80, 100, 120, 160, 200],
      typeId: 4,
    },
    {
      fractions: [1 / 2, 1 / 3, 1 / 6],
      totauxPossibles: [60, 120],
      typeId: 4,
    },
    // Type 5
    {
      fractions: [1 / 2, 1 / 4, 1 / 4],
      totauxPossibles: [40, 60, 80, 100, 120, 160, 200],
      typeId: 5,
    },
    // Type 6
    {
      fractions: [1 / 3, 1 / 3, 1 / 3],
      totauxPossibles: [60, 120],
      typeId: 6,
    },
    // Type 7
    {
      fractions: [3 / 8, 3 / 8, 1 / 4],
      totauxPossibles: [40, 80, 120, 160, 200],
      typeId: 7,
    },
    // Type 8
    {
      fractions: [2 / 5, 2 / 5, 1 / 5],
      totauxPossibles: [40, 60, 80, 100, 120, 160, 200],
      typeId: 8,
    },
  ]

  // ==========================================================================
  // CONTEXTES DE SITUATIONS
  // ==========================================================================
  private static readonly CONTEXTES: ContexteSituation[] = [
    {
      sujet: 'employés dans une entreprise',
      unite: 'employés',
      groupes: [
        'service commercial',
        'service technique',
        'service administratif',
      ],
    },
    {
      sujet: 'visiteurs dans un musée',
      unite: 'visiteurs',
      groupes: ['adultes', 'enfants', 'seniors'],
    },
    {
      sujet: 'votes lors d’une élection',
      unite: 'votes',
      groupes: ['candidat A', 'candidat B', 'candidat C'],
    },
    {
      sujet: 'produits vendus dans un magasin',
      unite: 'ventes',
      groupes: ['produit A', 'produit B', 'produit C'],
    },
    {
      sujet: 'votes du public pour un jeu télé',
      unite: 'votes',
      groupes: ['candidat A', 'équipe bleue', 'équipe verte'],
    },
    {
      sujet: 'animaux dans un parc naturel',
      unite: 'animaux',
      groupes: ['éléphants', 'lions', 'girafes'],
    },
    {
      sujet: 'votes pour un logo',
      unite: 'votes',
      groupes: ['logo 1', 'logo 2', 'logo 3'],
    },
    {
      sujet: 'pièces produites dans une usine',
      unite: 'pièces',
      groupes: ['pièces type A', 'pièces type B', 'pièces type C'],
    },
    {
      sujet: 'adhérents à un club sportif local',
      unite: 'adhérents',
      groupes: ['activité A', 'activité B', 'activité C'],
    },
    {
      sujet: 'véhicules dans un parking',
      unite: 'véhicules',
      groupes: ['voitures', 'motos', 'camions'],
    },
    {
      sujet: 'arbres dans un parc',
      unite: 'arbres',
      groupes: ['chênes', 'érables', 'autres essences'],
    },
    {
      sujet: 'logements dans un quartier',
      unite: 'logements',
      groupes: ['appartements', 'maisons individuelles', 'autres types'],
    },
    {
      sujet: 'réponses à un sondage',
      unite: 'réponses',
      groupes: ['réponse A', 'réponse B', 'réponse C'],
    },
    {
      sujet: 'articles vendus dans un magasin',
      unite: 'articles',
      groupes: ['catégorie 1', 'catégorie 2', 'catégorie 3'],
    },
  ]
  // ==========================================================================
  // MÉTHODE : Génération d'un diagramme circulaire (figure SVG)
  // ==========================================================================
  private fig = (effectifs: number[]): string => {
    const r = 3
    const n = effectifs.length
    const labels = Array(n).fill('')

    const diag = diagrammeCirculaire({
      effectifs,
      labels,
      rayon: r,
      legendeAffichage: false,
      visibles: Array(n).fill(true),
      remplissage: Array(n).fill(true),
    })

    const objets = [diag]

    return mathalea2d(
      Object.assign(
        {
          style: 'display: inline-block;',
          pixelsParCm: 16,
          scale: 0.4,
        },
        fixeBordures(objets, { rxmin: 0, rymin: 0, rxmax: 0, rymax: 0 }),
      ),
      objets,
    )
  }

  // ==========================================================================
  // MÉTHODE : Calcul des effectifs
  // ==========================================================================
  private calculerEffectifs(
    proportion: ProportionVisuelle,
    total: number,
  ): number[] {
    return proportion.fractions.map((f) => total * f)
  }

  // ==========================================================================
  // MÉTHODE : Détection des angles égaux
  // ==========================================================================
  private detecterAnglesEgaux(
    fractions: [number, number, number],
  ): { nb: 2 | 3; valeur: number } | null {
    const angles = fractions.map((f) => Math.round(f * 360))

    if (angles[0] === angles[1] && angles[1] === angles[2]) {
      return { nb: 3, valeur: angles[0] }
    }

    if (angles[0] === angles[1]) return { nb: 2, valeur: angles[0] }
    if (angles[0] === angles[2]) return { nb: 2, valeur: angles[0] }
    if (angles[1] === angles[2]) return { nb: 2, valeur: angles[1] }

    return null
  }

  // ==========================================================================
  // MÉTHODE : Génération de la description
  // ==========================================================================
  private genererDescription(fractions: [number, number, number]): string {
    const angles = fractions.map((f) => Math.round(f * 360))
    const anglesEgaux = this.detecterAnglesEgaux(fractions)

    const categoriser = (angle: number): string => {
      if (angle > 180) return 'rentrant'
      if (angle === 180) return 'plat'
      if (angle > 90) return 'obtus'
      if (angle === 90) return 'droit'
      return 'aigu'
    }

    // Helper pour le pluriel (obtus reste obtus au pluriel)
    const avecPluriel = (categorie: string, nb: number): string => {
      if (nb === 1) return categorie
      if (categorie === 'obtus') return 'obtus'
      return categorie + 's'
    }

    // Cas 1 : Trois angles égaux
    if (anglesEgaux && anglesEgaux.nb === 3) {
      const categorie = categoriser(anglesEgaux.valeur)
      const categoriePluriel = avecPluriel(categorie, 3)
      return `trois angles ${categoriePluriel} égaux (de $${anglesEgaux.valeur}°$)`
    }

    // Cas 2 : Deux angles égaux
    if (anglesEgaux && anglesEgaux.nb === 2) {
      const categorie = categoriser(anglesEgaux.valeur)
      const categoriePluriel = avecPluriel(categorie, 2)
      const angleDifferent = angles.find((a) => a !== anglesEgaux.valeur)!
      const categorieDiff = categoriser(angleDifferent)

      return `deux angles ${categoriePluriel} égaux (de $${anglesEgaux.valeur}°$) et un angle ${categorieDiff} (de $${angleDifferent}°$)`
    }

    // Cas 3 : Trois angles différents
    const descriptions: string[] = []
    const valeursAngles: number[] = []

    for (const angle of angles) {
      const categorie = categoriser(angle)
      descriptions.push(`un angle ${categorie}`)
      valeursAngles.push(angle)
    }

    let resultat = ''
    if (descriptions.length === 2) {
      resultat = descriptions.join(' et ')
    } else {
      resultat =
        descriptions.slice(0, -1).join(', ') +
        ' et ' +
        descriptions[descriptions.length - 1]
    }
    resultat += ` (respectivement de $${valeursAngles.join('°, ')}°$)`
    return resultat
  }
  // ==========================================================================
  // MÉTHODE : Construction du tableau de correction
  // ==========================================================================
  /**
   * Construit le tableau de correction (effectifs → parts → angles)
   *
   * @param effectifs Tableau des 3 effectifs
   * @param total Total des effectifs
   * @param groupes Noms des 3 groupes
   * @param fractions Fractions correspondantes [frac1, frac2, frac3]
   * @returns Code HTML du tableau
   */
  private construireTableauCorrection(
    effectifs: [number, number, number],
    total: number,
    groupes: [string, string, string],
    fractions: [number, number, number],
  ): string {
    const [eff1, eff2, eff3] = effectifs
    const [frac1, frac2, frac3] = fractions
    const a1 = Math.round(360 * frac1)
    const a2 = Math.round(360 * frac2)
    const a3 = Math.round(360 * frac3)

    const entetesColonnes: (string | number)[] = []
    const entetesLignes = [
      '\\text{Groupe}',
      '\\text{Effectif}',
      '\\text{Part}',
      '\\text{Angle}',
    ]

    const frac1Obj = new FractionEtendue(eff1, total)
    const frac2Obj = new FractionEtendue(eff2, total)
    const frac3Obj = new FractionEtendue(eff3, total)

    const frac1NR = frac1Obj.texFraction.replace(/\$/g, '')
    const frac2NR = frac2Obj.texFraction.replace(/\$/g, '')
    const frac3NR = frac3Obj.texFraction.replace(/\$/g, '')

    const frac1Simpl = frac1Obj.texFractionSimplifiee.replace(/\$/g, '')
    const frac2Simpl = frac2Obj.texFractionSimplifiee.replace(/\$/g, '')
    const frac3Simpl = frac3Obj.texFractionSimplifiee.replace(/\$/g, '')

    const cellules = [
      `\\text{${groupes[0]}}`,
      `\\text{${groupes[1]}}`,
      `\\text{${groupes[2]}}`,
      `${eff1}`,
      `${eff2}`,
      `${eff3}`,
      `${frac1NR}=${frac1Simpl}`,
      `${frac2NR}=${frac2Simpl}`,
      `${frac3NR}=${frac3Simpl}`,
      `${frac1Simpl} \\times 360° = ${a1}°`,
      `${frac2Simpl} \\times 360° = ${a2}°`,
      `${frac3Simpl} \\times 360° = ${a3}°`,
    ]

    return tableauColonneLigne(
      entetesColonnes,
      entetesLignes,
      cellules,
      1.6,
      true,
      0,
      1,
      false,
      {},
    )
  }
  // ==========================================================================
  // MÉTHODE : Version originale
  // ==========================================================================
  versionOriginale: () => void = () => {
    this.enonce =
      `Sur $60$ personnes présentes à une exposition, on distingue trois groupes :` +
      createList({
        items: [
          'groupe A : $30$ personnes ;',
          'groupe B : $12$ personnes ;',
          'groupe C : les autres.',
        ],
        style: 'fleches',
      }) +
      'Quel diagramme circulaire représente la situation ?'

    this.reponses = [
      this.fig([30, 12, 18]),
      this.fig([20, 20, 20]),
      this.fig([15, 15, 30]),
      this.fig([24, 12, 24]),
    ]

    const effectifs: [number, number, number] = [30, 12, 18]
    const total = 60
    const groupes: [string, string, string] = [
      'groupe A',
      'groupe B',
      'groupe C',
    ]
    const fractions: [number, number, number] = [30 / 60, 12 / 60, 18 / 60]

    const tableau = this.construireTableauCorrection(
      effectifs,
      total,
      groupes,
      fractions,
    )
    const description = this.genererDescription(fractions)

    this.correction =
      `Les effectifs des groupes A, B et C sont respectivement $30$, $12$ et $18$.<br><br>` +
      tableau +
      `Le bon diagramme est le seul avec : ${description}.`
  }

  // ==========================================================================
  // MÉTHODE : Version aléatoire
  // ==========================================================================
  versionAleatoire: () => void = () => {
    // Sélection de la bonne réponse
    const bonne = choice(Auto1AS1.PROPORTIONS_VISUELLES)
    const total = choice(bonne.totauxPossibles)
    const [eff1, eff2, eff3] = this.calculerEffectifs(bonne, total)

    // Sélection des distracteurs
    let candidats = Auto1AS1.PROPORTIONS_VISUELLES.filter((p) => {
      if (p === bonne) return false
      if (p.typeId === bonne.typeId) return false
      if (!p.totauxPossibles.includes(total)) return false
      return true
    })

    if (bonne.typeId === 4) {
      const type4Candidats = candidats.filter((p) => p.typeId === 4)
      const autresCandidats = candidats.filter((p) => p.typeId !== 4)
      const type4Selectionne =
        type4Candidats.length > 0 ? [choice(type4Candidats)] : []
      candidats = [...type4Selectionne, ...autresCandidats]
    }

    const proportionsDistractrices = shuffle(candidats).slice(0, 3)

    if (proportionsDistractrices.length < 3) {
      console.warn('Pas assez de distracteurs disponibles')
      this.versionOriginale()
      return
    }

    // Sélection du contexte
    const ctx = choice(Auto1AS1.CONTEXTES)

    // Construction de l'énoncé
    this.enonce =
      `Sur $${total}$ ${ctx.sujet}, on distingue trois groupes :` +
      createList({
        items: [
          `${ctx.groupes[0]} : $${eff1}$ ${ctx.unite} ;`,
          `${ctx.groupes[1]} : $${eff2}$ ${ctx.unite} ;`,
          `${ctx.groupes[2]} : les autres.`,
        ],
        style: 'fleches',
      }) +
      'Quel diagramme circulaire représente la situation ?'

    // Construction des réponses
    this.reponses = [
      this.fig([eff1, eff2, eff3]),
      ...proportionsDistractrices.map((p) =>
        this.fig(this.calculerEffectifs(p, total)),
      ),
    ]

    // Construction de la correction (tableau et description)
    const tableau = this.construireTableauCorrection(
      [eff1, eff2, eff3],
      total,
      [ctx.groupes[0], ctx.groupes[1], ctx.groupes[2]],
      bonne.fractions,
    )

    const description = this.genererDescription(bonne.fractions)

    this.correction =
      `Les effectifs des $3$ groupes sont respectivement $${eff1}$, $${eff2}$ et $${total}-${eff1}-${eff2}=${eff3}$.<br><br>` +
      tableau +
      `Le bon diagramme est le seul avec : ${description}.`
  }

  // ==========================================================================
  // CONSTRUCTEUR
  // ==========================================================================
  constructor() {
    super()
    this.versionAleatoire()
    this.ajouteQcmCorr = true
    this.spacing = 1.5
    this.spacingCorr = 1.5
  }
}
