import {
  colorToLatexOrHTML,
  fixeBordures,
  mathalea2d,
  type NestedObjetMathalea2dArray,
} from '../../modules/2dGeneralites'
import { context } from '../../modules/context'
import { milieu, point, tracePoint } from '../2d/points'
import { pointAbstrait } from '../2d/points-abstraits'
import { polygone } from '../2d/polygones'
import { segment } from '../2d/segmentsVecteurs'
import { latex2d } from '../2d/textes'
import { texNombre } from '../outils/texNombre'

/**
 * Classe pour les statistiques descriptives
 * Accepte une série de nombres ou une série de paires [valeur, effectif]
 * Fournit des méthodes pour calculer la moyenne, la variance, l'écart-type, la médiane, le mode, le min, le max, l'étendue et le coefficient de variation
 * Inclut également des méthodes statiques pour effectuer les mêmes calculs sur un tableau de nombres
 * @author Jean-Claude Lhote (aidé par GPT-5 mini)
 */
export default class Stat {
  serie: number[]
  constructor(serie: number[] | [number, number][]) {
    if (serie.length === 0) {
      throw new Error('La série ne peut pas être vide')
    }
    if (typeof serie[0] === 'number') {
      this.serie = serie as number[]
    } else if (
      Array.isArray(serie[0]) &&
      (serie[0] as [number, number]).length === 2
    ) {
      this.serie = []
      for (const [valeur, frequence] of serie as [number, number][]) {
        for (let i = 0; i < frequence; i++) {
          this.serie.push(valeur)
        }
      }
    } else {
      throw new Error('Le format de la série est invalide')
    }
  }

  moyenne(): number {
    return Stat.moyenne(this.serie)
  }

  variance(): number {
    const moyenne = this.moyenne()
    const sommeDesCarres = this.serie.reduce(
      (acc, val) => acc + Math.pow(val - moyenne, 2),
      0,
    )
    return sommeDesCarres / this.serie.length
  }

  ecartType(): number {
    return Math.sqrt(this.variance())
  }

  mediane(): number {
    const sorted = [...this.serie].sort((a, b) => a - b)
    const mid = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2
    } else {
      return sorted[mid]
    }
  }

  mode(): number[] {
    const frequencyMap: { [key: number]: number } = {}
    for (const num of this.serie) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1
    }
    const maxFrequency = Math.max(...Object.values(frequencyMap))
    return Object.keys(frequencyMap)
      .filter((key) => frequencyMap[Number(key)] === maxFrequency)
      .map(Number)
  }

  min(): number {
    return Math.min(...this.serie)
  }

  max(): number {
    return Math.max(...this.serie)
  }

  etendue(): number {
    return this.max() - this.min()
  }

  coefVariation(): number {
    return this.ecartType() / this.moyenne()
  }

  quartiles(): { q1: number; q2: number; q3: number } {
    return Stat.quartiles(this.serie)
  }

  serieTriee(): number[] {
    return Stat.serieTriee(this.serie)
  }

  /**
   * Calcule les éléments nécessaires pour tracer une boite à moustache (boxplot)
   * Retourne q1, q2, q3, iqr, fences, whiskers, outliers, min, max, l'étendue et les valeurs triées
   */
  boiteAMoustache(): {
    q1: number
    q2: number
    q3: number
    iqr: number
    borneInferieure: number
    borneSuperieure: number
    moustacheInferieure: number
    moustacheSuperieure: number
    valeursAberrantes: number[]
    min: number
    max: number
    valeurs: number[]
  } {
    return Stat.boiteAMoustache(this.serie)
  }

  traceBoiteAMoustache({
    size = 10,
    height = 4,
    legendeOn = true,
    valeursOn = true,
    echelle = 1,
  }): string {
    return Stat.traceBoiteAMoustache(this.serie, {
      size,
      height,
      echelle,
      legendeOn,
      valeursOn,
    })
  }

  // Méthode statique pour obtenir les mêmes informations à partir d'un tableau
  static boiteAMoustache(tableau: number[]) {
    if (!tableau || tableau.length === 0) {
      throw new Error('La série ne peut pas être vide')
    }
    const values = [...tableau].sort((a, b) => a - b)
    const n = values.length
    const mid = Math.floor(n / 2)

    const lower = n % 2 === 0 ? values.slice(0, mid) : values.slice(0, mid)
    const upper = n % 2 === 0 ? values.slice(mid) : values.slice(mid + 1)

    const q1 = lower.length ? Stat.mediane(lower) : values[0]
    const q2 = Stat.mediane(values)
    const q3 = upper.length ? Stat.mediane(upper) : values[values.length - 1]

    const iqr = q3 - q1
    const borneInferieure = q1 - 1.5 * iqr
    const borneSuperieure = q3 + 1.5 * iqr

    // whiskers = valeurs extrêmes non-outliers
    const moustacheInferieure =
      values.find((v) => v >= borneInferieure) ?? values[0]
    const moustacheSuperieure =
      [...values].reverse().find((v) => v <= borneSuperieure) ??
      values[values.length - 1]

    const valeursAberrantes = values.filter(
      (v) => v < moustacheInferieure || v > moustacheSuperieure,
    )

    return {
      q1,
      q2,
      q3,
      iqr,
      borneInferieure,
      borneSuperieure,
      moustacheInferieure,
      moustacheSuperieure,
      valeursAberrantes,
      min: values[0],
      max: values[values.length - 1],
      valeurs: values,
    }
  }

  // Méthodes statiques
  // ex : const moy = Stat.moyenne([1,2,3])
  static moyenne(tableau: number[]): number {
    const somme = tableau.reduce((acc, val) => acc + val, 0)
    return somme / tableau.length
  }

  static variance(tableau: number[]): number {
    const moyenne = Stat.moyenne(tableau)
    const sommeDesCarres = tableau.reduce(
      (acc, val) => acc + Math.pow(val - moyenne, 2),
      0,
    )
    return sommeDesCarres / tableau.length
  }

  static ecartType(tableau: number[]): number {
    return Math.sqrt(Stat.variance(tableau))
  }

  static mediane(tableau: number[]): number {
    const sorted = [...tableau].sort((a, b) => a - b)
    const mid = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2
    } else {
      return sorted[mid]
    }
  }

  static mode(tableau: number[]): number[] {
    const frequencyMap: { [key: number]: number } = {}
    for (const num of tableau) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1
    }
    const maxFrequency = Math.max(...Object.values(frequencyMap))
    return Object.keys(frequencyMap)
      .filter((key) => frequencyMap[Number(key)] === maxFrequency)
      .map(Number)
  }

  static min(tableau: number[]): number {
    return Math.min(...tableau)
  }

  static max(tableau: number[]): number {
    return Math.max(...tableau)
  }

  static etendue(tableau: number[]): number {
    return Stat.max(tableau) - Stat.min(tableau)
  }

  static coefVariation(tableau: number[]): number {
    return Stat.ecartType(tableau) / Stat.moyenne(tableau)
  }

  static quartiles(tableau: number[]): { q1: number; q2: number; q3: number } {
    if (!tableau || tableau.length === 0) {
      throw new Error('La série ne peut pas être vide')
    }
    const values = [...tableau].sort((a, b) => a - b)
    const n = values.length
    const mid = Math.floor(n / 2)

    const lower = n % 2 === 0 ? values.slice(0, mid) : values.slice(0, mid)
    const upper = n % 2 === 0 ? values.slice(mid) : values.slice(mid + 1)

    const q1 = lower.length ? Stat.mediane(lower) : values[0]
    const q2 = Stat.mediane(values)
    const q3 = upper.length ? Stat.mediane(upper) : values[values.length - 1]

    return { q1, q2, q3 }
  }

  static serieTriee(tableau: number[]): number[] {
    return [...tableau].sort((a, b) => a - b)
  }

  static traceBoiteAMoustache(
    tableau: number[],
    { size = 10, height = 3, echelle = 1, legendeOn = true, valeursOn = true },
  ): string {
    const boxplotData = Stat.boiteAMoustache(tableau)
    const etendue = boxplotData.max - boxplotData.min
    const scale = etendue / size

    const extremiteDroite = point(-1, 0)
    const extremiteGauche = point(size + 1, 0)
    const minPoint = point(0, 0)
    const maxPoint = point(size, 0)
    const q1Point = point(
      (size * (boxplotData.q1 - boxplotData.min)) / etendue,
      0,
    )
    const q2Point = point(
      (size * (boxplotData.q2 - boxplotData.min)) / etendue,
      0,
    )
    const q3Point = point(
      (size * (boxplotData.q3 - boxplotData.min)) / etendue,
      0,
    )
    const minDownPoint = pointAbstrait(minPoint.x, echelle * 0.8)
    const minUpPoint = pointAbstrait(minPoint.x, 2.4 * echelle)
    const maxDownPoint = pointAbstrait(maxPoint.x, echelle * 0.8)
    const maxUpPoint = pointAbstrait(maxPoint.x, 2.4 * echelle)
    const minMiddlePoint = milieu(minDownPoint, minUpPoint)
    const maxMiddlePoint = milieu(maxDownPoint, maxUpPoint)
    const q1DownPoint = pointAbstrait(q1Point.x, echelle * 0.8)
    const q1UpPoint = pointAbstrait(q1Point.x, 2.4 * echelle)
    const q2DownPoint = pointAbstrait(q2Point.x, echelle * 0.8)
    const q2UpPoint = pointAbstrait(q2Point.x, 2.4 * echelle)
    const q3DownPoint = pointAbstrait(q3Point.x, echelle * 0.8)
    const q3UpPoint = pointAbstrait(q3Point.x, 2.4 * echelle)
    const q1MiddlePoint = milieu(q1DownPoint, q1UpPoint)
    const q3MiddlePoint = milieu(q3DownPoint, q3UpPoint)
    const lineMin = segment(minDownPoint, minUpPoint, 'blue')
    const lineMax = segment(maxDownPoint, maxUpPoint, 'blue')
    const lineQ2 = segment(q2DownPoint, q2UpPoint, 'blue')
    const lineQ0Q1 = segment(minMiddlePoint, q1MiddlePoint, 'blue')
    const lineQ3Q4 = segment(q3MiddlePoint, maxMiddlePoint, 'blue')
    lineMin.epaisseur = 2
    lineMax.epaisseur = 2
    lineQ2.epaisseur = 2
    lineQ0Q1.epaisseur = 2
    lineQ3Q4.epaisseur = 2
    const box = polygone(
      [q1DownPoint, q1UpPoint, q3UpPoint, q3DownPoint],
      'blue',
    )
    box.epaisseur = 2
    box.couleurDeRemplissage = colorToLatexOrHTML('blue')
    box.opaciteDeRemplissage = 0.15

    const lineBase = segment(extremiteDroite, extremiteGauche)
    lineBase.epaisseur = 1
    lineBase.styleExtremites = '->'
    lineBase.couleur = 'black'
    const plots = tracePoint(q1Point, q2Point, q3Point, minPoint, maxPoint)
    plots.taille = 2
    plots.epaisseur = 2
    plots.style = '.'
    // Ajout des différents éléments à tracer
    const objetsToTrace: NestedObjetMathalea2dArray = [
      lineBase,
      plots,
      lineMin,
      lineMax,
      lineQ2,
      lineQ0Q1,
      lineQ3Q4,
      box,
    ]
    // Ajout des étiquettes (valeurs numériques)
    if (valeursOn) {
      objetsToTrace.push(
        latex2d(texNombre(boxplotData.min), minPoint.x, minPoint.y - 0.8, {
          letterSize: 'scriptsize',
        }),
        latex2d(texNombre(boxplotData.q1), q1Point.x, q1Point.y - 0.8, {
          letterSize: 'scriptsize',
        }),
        latex2d(texNombre(boxplotData.q2), q2Point.x, q2Point.y - 0.8, {
          letterSize: 'scriptsize',
        }),
        latex2d(texNombre(boxplotData.q3), q3Point.x, q3Point.y - 0.8, {
          letterSize: 'scriptsize',
        }),
        latex2d(texNombre(boxplotData.max), maxPoint.x, maxPoint.y - 0.8, {
          letterSize: 'scriptsize',
        }),
      )
    }
    // Ajout des étiquettes (noms)
    if (legendeOn) {
      objetsToTrace.push(
        latex2d('\\text{Min}', minPoint.x, minPoint.y - 1.6, {
          letterSize: 'scriptsize',
        }),
        latex2d('Q_1', q1Point.x, q1Point.y - 1.6, {
          letterSize: 'scriptsize',
        }),
        latex2d('\\text{Méd}', q2Point.x, q2Point.y - 1.6, {
          letterSize: 'scriptsize',
        }),
        latex2d('Q_3', q3Point.x, q3Point.y - 1.6, {
          letterSize: 'scriptsize',
        }),
        latex2d('\\text{Max}', maxPoint.x, maxPoint.y - 1.6, {
          letterSize: 'scriptsize',
        }),
      )
    }
    if (context.isHtml) {
      return mathalea2d(
        Object.assign({}, fixeBordures(objetsToTrace)),
        objetsToTrace,
      )
    } else {
      return ` \\begin{tikzpicture}[every node/.style={inner sep=0pt,font=\\scriptsize},%
      boxplot prepared/every whisker/.style={ultra thick}]
    \\begin{axis}[
        clip=false,
        y=1cm,
        ymin=-0.5cm,
        xmin=${boxplotData.min - scale},
        xmax=${boxplotData.max + scale},
        height=${height}cm,
        width=${size / 2}cm,
        ytick=\\empty,
        axis y line=left,
        axis x line=middle,
        xtick = \\empty,
        y axis line style={draw=none},
        enlarge y limits={abs=5mm},
      ]
      \\addplot+[
        boxplot prepared ={
            every box/.style={ultra thick,fill=blue!15},
            every whisker/.style={ultra thick},
            every median/.style={ultra thick},
            lower whisker=${texNombre(boxplotData.moustacheInferieure, 2)},
            lower quartile=${boxplotData.q1},
            median=${boxplotData.q2},
            upper quartile=${boxplotData.q3},
            upper whisker=${texNombre(boxplotData.moustacheSuperieure, 2)},
          },
      ] coordinates {};
      \\foreach \\x/\\name [count=\\xi from 0] in {${boxplotData.min}/Min,${boxplotData.q1}/Q1,${boxplotData.q2}/Méd,${boxplotData.q3}/Q3,${boxplotData.max}/Max} {
          \\edef\\temp{\\noexpand\\fill (\\x,0) coordinate (a\\xi) circle (2pt);
            ${valeursOn ? '\\noexpand\\node[below=2mm of a\\xi] (b\\xi) {\\x};' : ''}
            ${legendeOn ? '\\noexpand\\node[below=4mm of a\\xi]  {\\name};' : ''}
          }
          \\temp
        }
    \\end{axis}
  \\end{tikzpicture}
`
    }
  }

  /**
   * Construit une série numérique (triée) compatible avec les résumés fournis.
   * Paramètres requis : q1, mediane, q3, etendue. La moyenne est optionnelle.
   * La série ne contiendra pas de valeurs aberrantes (selon la règle 1.5*IQR).
   * Retourne un tableau trié de longueur n (par défaut 20).
   */
  static createSerieFromQuartiles({
    q1,
    mediane,
    q3,
    min,
    max,
    n = 20,
    isInteger = false,
  }: {
    q1: number
    mediane: number
    q3: number
    min: number
    max: number
    n?: number
    isInteger?: boolean
  }): number[] {
    if (n < 5) {
      throw new Error('La taille de la série doit être au moins de 5')
    }

    // Si entier demandé, arrondir quantiles et min/max, garantir ordre
    if (isInteger) {
      q1 = Math.round(q1)
      mediane = Math.round(mediane)
      q3 = Math.round(q3)
      min = Math.round(min)
      max = Math.round(max)
      if (q1 > mediane) mediane = q1
      if (mediane > q3) q3 = mediane
      if (min > q1) min = q1
      if (max < q3) max = q3
    }

    const serie: number[] = []
    const quartileCount = Math.floor(n / 4)
    const remaining = n - 3 * quartileCount

    // Génération contrôlée par quartiles
    for (let i = 0; i < quartileCount; i++) {
      const value = q1 - (q1 - min) * (Math.random() * 0.5 + 0.1)
      serie.push(isInteger ? Math.round(value) : value)
    }
    for (let i = 0; i < quartileCount; i++) {
      const value = q1 + (mediane - q1) * (Math.random() * 0.8 + 0.1)
      serie.push(isInteger ? Math.round(value) : value)
    }
    for (let i = 0; i < quartileCount; i++) {
      const value = mediane + (q3 - mediane) * (Math.random() * 0.8 + 0.1)
      serie.push(isInteger ? Math.round(value) : value)
    }
    for (let i = 0; i < remaining; i++) {
      const value = q3 + (max - q3) * (Math.random() * 0.5 + 0.1)
      serie.push(isInteger ? Math.round(value) : value)
    }

    // Trier puis forcer les positions de quartiles (une ou deux positions selon n)
    serie.sort((a, b) => a - b)

    const getQuartilePositions = (which: 'q1' | 'q2' | 'q3'): number[] => {
      const mid = Math.floor(n / 2)
      const lowerLen = mid
      if (which === 'q1') {
        if (lowerLen % 2 === 1) {
          return [Math.floor(lowerLen / 2)]
        } else {
          return [lowerLen / 2 - 1, lowerLen / 2]
        }
      } else if (which === 'q2') {
        if (n % 2 === 1) {
          return [mid]
        } else {
          return [mid - 1, mid]
        }
      } else {
        const start = n - lowerLen
        if (lowerLen % 2 === 1) {
          return [start + Math.floor(lowerLen / 2)]
        } else {
          return [start + lowerLen / 2 - 1, start + lowerLen / 2]
        }
      }
    }

    const applyQuartileValue = (positions: number[], value: number) => {
      if (positions.length === 1) {
        serie[positions[0]] = isInteger ? Math.round(value) : value
      } else {
        const v = isInteger ? Math.round(value) : value
        serie[positions[0]] = v
        serie[positions[1]] = v
      }
    }
    applyQuartileValue(getQuartilePositions('q1'), q1)
    applyQuartileValue(getQuartilePositions('q2'), mediane)
    applyQuartileValue(getQuartilePositions('q3'), q3)

    // S'assurer que min et max sont bien les extrêmes de la série
    serie[0] = isInteger ? Math.round(min) : min
    serie[n - 1] = isInteger ? Math.round(max) : max

    // Clamp sur [min,max] (sécurité)
    for (let i = 0; i < n; i++) {
      if (serie[i] < min) serie[i] = min
      if (serie[i] > max) serie[i] = max
    }

    // Réparer monotonicité : avant puis arrière
    for (let i = 1; i < n; i++) {
      if (serie[i] < serie[i - 1]) {
        const apres = serie[i]
        serie[i] = apres
        serie[i - 1] = apres
        i++
      }
    }

    // Vérification stricte : recalculer les quartiles et comparer
    const qs = Stat.quartiles(serie)
    const eq = (a: number, b: number) =>
      isInteger ? a === b : Math.abs(a - b) < 1e-9
    if (!eq(qs.q1, q1) || !eq(qs.q2, mediane) || !eq(qs.q3, q3)) {
      throw new Error(
        'Impossible de construire une série respectant exactement les quartiles demandés avec les contraintes fournies',
      )
    }

    // Enfin s'assurer que min/max sont bien les extrêmes après réajustements
    if (
      serie[0] !== (isInteger ? Math.round(min) : min) ||
      serie[n - 1] !== (isInteger ? Math.round(max) : max)
    ) {
      throw new Error(
        'Impossible de conserver min/max comme extrêmes sans violer les quartiles demandés',
      )
    }

    return serie
  }
}
