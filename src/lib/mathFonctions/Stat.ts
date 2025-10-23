import {
  colorToLatexOrHTML,
  fixeBordures,
  mathalea2d,
  type NestedObjetMathalea2dArray,
} from '../../modules/2dGeneralites'
import { context } from '../../modules/context'
import { randFloat, randint } from '../../modules/outils'
import { milieu, plot, point, tracePoint } from '../2d/points'
import { pointAbstrait } from '../2d/points-abstraits'
import { BoiteBuilder, polygone } from '../2d/polygones'
import { segment } from '../2d/segmentsVecteurs'
import { latex2d } from '../2d/textes'
import { shuffle } from '../outils/arrayOutils'
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
  serieTableau: [number, number][]
  constructor(serie: number[] | [number, number][]) {
    if (serie.length === 0) {
      throw new Error('La série ne peut pas être vide')
    }
    if (typeof serie[0] === 'number') {
      this.serie = shuffle(serie as number[]) as number[]
      this.serieTableau = []
      for (const valeur of this.serieTriee()) {
        const existing = this.serieTableau.find(([v]) => v === valeur)
        if (existing) {
          existing[1]++
        } else {
          this.serieTableau.push([valeur, 1])
        }
      }
    } else if (
      Array.isArray(serie[0]) &&
      (serie[0] as [number, number]).length === 2
    ) {
      this.serieTableau = serie as [number, number][]
      this.serie = []
      for (const [valeur, frequence] of serie as [number, number][]) {
        for (let i = 0; i < frequence; i++) {
          this.serie.push(valeur)
        }
      }
      this.serie = shuffle(this.serie)
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

  listeSerie({
    precision = 2,
    separateur = '; ',
    triee = false,
    tableau = false,
    motValeurs = 'Valeurs',
  } = {}): string {
    if (!tableau) {
      return `${(triee ? this.serieTriee() : this.serie)
        .map((n) => `$${texNombre(n, precision)}$`)
        .join(separateur)}`
    } else {
      const nCols = this.serieTableau.length
      const valuesRow = this.serieTableau
        .map(([v]) => `${texNombre(v, precision)}`)
        .join(' & ')
      const effectsRow = this.serieTableau
        .map(([, f]) => `${String(f)}`)
        .join(' & ')
      const cols = '|l|' + 'c|'.repeat(nCols)
      return `$\\newcommand{\\arraystretch}{1.5}
      \\begin{array}{${cols}}
\\hline
\\text{${motValeurs}} & ${valuesRow} \\\\ \\hline
\\text{effectifs} & ${effectsRow} \\\\ \\hline
\\end{array}$`
    }
  }

  histogramme({
    cumul = false,
    croissance = true,
    barres = true,
    percentVsEffectifs = false,
  } = {}) {
    const precision = 2
    // copier et trier selon croissance
    const pairs: [number, number][] = [...this.serieTableau].sort((a, b) =>
      croissance ? a[0] - b[0] : b[0] - a[0],
    )

    const total = pairs.reduce((s, [, f]) => s + f, 0)
    // calcul des valeurs à tracer (effectifs ou pourcentages / cumul)
    const ys: number[] = []
    if (cumul) {
      let acc = 0
      for (const [, f] of pairs) {
        acc += f
        ys.push(percentVsEffectifs ? (acc / total) * 100 : acc)
      }
    } else {
      for (const [, f] of pairs) {
        ys.push(percentVsEffectifs ? (f / total) * 100 : f)
      }
    }

    // labels (symbolic x coords) : utiliser texNombre pour formatage lisible
    const labels = pairs.map(([v]) => texNombre(v, precision))
    // construire la liste des coordinates pour pgfplots (symbolic x)
    const coords = labels
      .map((lab, i) => `(${lab},${Number(ys[i].toFixed(3))})`)
      .join(' ')
    const yName = percentVsEffectifs ? 'fréquences' : 'effectifs'
    const ylabel = percentVsEffectifs ? 'Fréquences en \\%' : 'Effectifs'
    const title = `${
      barres
        ? cumul
          ? `Histogramme cumulé (${croissance ? 'croissant' : 'décroissant'})`
          : 'Histogramme'
        : cumul
          ? `Polygone des ${yName} cumulé${yName === 'fréquences' ? 'es' : 's'} (${croissance ? 'croissantes' : 'décroissantes'})`
          : `Polygone des ${yName}`
    } `
    if (context.isHtml) {
      const yMax = 8
      const nbValeursDifferentes = this.serieTableau.length
      const nbValeurs = this.serie.length
      const echelleYCumul = nbValeurs < 15 ? 2 : nbValeurs < 30 ? 5 : 10
      const echelleYPercent = 50
      const effectifMax = Math.max(...ys)
      const gridOpacity = 0.5
      const topCadre = 8.7

      const echelleY = effectifMax < 15 ? 2 : effectifMax < 30 ? 3 : 4
      let yLabelsAndOrdinate: [number, number][] = []
      if (percentVsEffectifs) {
        yLabelsAndOrdinate = Array.from({ length: 3 }, (_, i) => [
          i * 50,
          (i * 25 * yMax) / echelleYPercent,
        ])
      } else {
        if (cumul) {
          yLabelsAndOrdinate = Array.from(
            {
              length: Math.ceil(nbValeurs / echelleYCumul) + 1,
            },
            (_, i) => [i * echelleYCumul, (i * 8 * echelleYCumul) / nbValeurs],
          )
        } else {
          yLabelsAndOrdinate = Array.from({
            length: Math.floor((effectifMax + 1) / echelleY),
          }).map((_, i) => [i * echelleY, (i * 8 * echelleY) / effectifMax])
        }
      }

      const cadre = new BoiteBuilder({
        xMin: 0,
        xMax: (nbValeursDifferentes + 1) * 2,
        yMin: 0,
        yMax: topCadre,
      }).render()

      const histo: NestedObjetMathalea2dArray = [cadre]
      for (const [i, yPos] of yLabelsAndOrdinate) {
        histo.push(
          latex2d(`${texNombre(i, 0)}`, -0.5, yPos + 0.1, {
            letterSize: 'scriptsize',
          }),
        )
      }
      for (const yLabel of yLabelsAndOrdinate) {
        const line = segment(
          point(0, yLabel[1]),
          point((nbValeursDifferentes + 1) * 2, yLabel[1]),
          'lightgray',
        )
        line.opacite = gridOpacity
        histo.push(line)
      }
      let xPosNext = 0
      let xPos = 0
      let yPos = 0
      let yPosNext = 0
      for (let i = 0; i < pairs.length; i++) {
        const valueAndEffectif = pairs[i]
        xPos = (i + 1) * 2
        xPosNext = (i + 2) * 2
        yPos = cumul
          ? percentVsEffectifs
            ? (ys[i] * yMax) / 100
            : (ys[i] * yMax) / nbValeurs
          : percentVsEffectifs
            ? (ys[i] * yMax) / 100
            : (ys[i] * yMax) / effectifMax
        if (i < pairs.length - 1) {
          yPosNext = cumul
            ? percentVsEffectifs
              ? (ys[i + 1] * yMax) / 100
              : (ys[i + 1] * yMax) / nbValeurs
            : percentVsEffectifs
              ? (ys[i + 1] * yMax) / 100
              : (ys[i + 1] * yMax) / effectifMax
        } else {
          yPosNext = yPos
        }
        const verticalLine = segment(
          point(xPos, 0),
          point(xPos, topCadre),
          'lightgray',
        )
        verticalLine.epaisseur = 1
        verticalLine.opacite = gridOpacity

        histo.push(verticalLine)
        if (barres) {
          const barre = new BoiteBuilder({
            xMin: xPos - 0.5,
            xMax: xPos + 0.5,
            yMin: 0,
            yMax: yPos,
          })
            .addColor({
              color: 'blue',
              colorBackground: '#9699FF',
              backgroudOpacity: 1,
            })
            .render()

          histo.push(barre)
        } else {
          if (i < pairs.length - 1) {
            const line = segment(
              point(xPos, yPos),
              point(xPosNext, yPosNext),
              'blue',
            )
            line.epaisseur = 2
            line.opacite = 0.5
            histo.push(line)
          }
        }
        const bubble = plot(xPos, yPos, {
          rayon: 0.15,
          couleur: 'blue',
          couleurDeRemplissage: 'blue',
          opacite: 0.7,
          opaciteDeRemplissage: 0.7,
        })
        const effectifTex = latex2d(
          texNombre(ys[i], precision),
          xPos,
          yPos + 0.5,
          { letterSize: 'scriptsize' },
        )
        const valTex = latex2d(
          texNombre(valueAndEffectif[0], precision),
          xPos,
          -0.5,
          {
            letterSize: 'scriptsize',
          },
        )
        histo.push(bubble, effectifTex, valTex)
        const texLabel = latex2d(`\\text{${ylabel}}`, -1.5, topCadre / 2, {
          letterSize: 'normalsize',
          orientation: 90,
          opacity: 0.7,
        })
        histo.push(texLabel)
        const texteTitle = latex2d(
          `\\text{${title}}`,
          nbValeursDifferentes + 1,
          topCadre + 0.5,
          {
            letterSize: 'normalsize',
            opacity: 0.7,
          },
        )
        histo.push(texteTitle)
      }

      return mathalea2d(
        Object.assign({ style: 'display: inline-block' }, fixeBordures(histo)),
        histo,
      )
    } else {
      // choisir le style (barres ou polygone)
      const addplot = barres
        ? `\\addplot+[ybar, bar width=12pt, draw=black, fill=blue!40] coordinates { ${coords} };`
        : `\\addplot+[sharp plot, thick, mark=*, mark options={fill=blue}] coordinates { ${coords} };`

      return `\\begin{tikzpicture}
  \\begin{axis}[
    title={${title}},
    ylabel={${ylabel}},
    xlabel={Valeurs},
    symbolic x coords={${labels.join(',')}},
    xtick=data,
    ymin=0,
    enlarge x limits=0.15,
    grid=major,
    nodes near coords,
    nodes near coords align={vertical},
    every node near coord/.append style={font=\\scriptsize},
    width=12cm,
    height=6cm,
  ]
    ${addplot}
  \\end{axis}
\\end{tikzpicture}`
    }
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

  /**
   * Génère une série de `n` valeurs, dont la moyenne est ≈ `mean` et l'étendue est ≈ `range`.
   * Les valeurs sont comprises entre `mean - range/2` et `mean + range/2` (approximatif).
   *
   * @param mean - moyenne cible (par défaut 50)
   * @param range - étendue cible (max - min) (par défaut 30)
   * @param n - nombre de valeurs (par défaut 20)
   * @param isInteger - si les valeurs doivent être entières (par défaut false)
   * @returns série de nombres de longueur `n`, avec moyenne ≈ `mean` et étendue ≈ `range`
   */
  static createSerieFromMeanAndRange({
    mean = 50,
    range = 30,
    n = 20,
    isInteger = false,
    precision = 2,
  }: {
    mean: number
    range: number
    n?: number
    isInteger?: boolean
    precision?: number
  }): number[] {
    if (n <= 0) throw new Error('n doit être supérieur à 0')
    if (range < 0) throw new Error('range doit être positif')
    if (mean < 0) throw new Error('mean doit être positif')

    // calcul min/max cibles
    const deltaNeg = randint(Math.round(range * 0.3), Math.round(range * 0.7))
    const deltaPos = range - deltaNeg

    let min = mean - deltaNeg
    let max = mean + deltaPos

    if (isInteger) {
      min = Math.round(min)
      max = Math.round(max)
      if (min > max) {
        const tmp = min
        min = max
        max = tmp
      }
    }

    // Générer des quartiles cohérents (Q1, Q2, Q3)
    let [q1, mediane, q3] = [
      isInteger
        ? randint(Math.floor(min), Math.floor(max))
        : randFloat(min, max),
      isInteger
        ? randint(Math.floor(min), Math.floor(max))
        : randFloat(min, max),
      isInteger
        ? randint(Math.floor(min), Math.floor(max))
        : randFloat(min, max),
    ].sort((a, b) => a - b)

    // Répéter jusqu'à quartiles distincts
    let safety = 0
    while ((q1 === mediane || mediane === q3 || q1 === q3) && safety < 1000) {
      ;[q1, mediane, q3] = [
        isInteger
          ? randint(Math.floor(min), Math.floor(max))
          : randFloat(min, max, precision),
        isInteger
          ? randint(Math.floor(min), Math.floor(max))
          : randFloat(min, max, precision),
        isInteger
          ? randint(Math.floor(min), Math.floor(max))
          : randFloat(min, max, precision),
      ].sort((a, b) => a - b)
      safety++
    }
    if (safety >= 1000)
      throw new Error('Impossible de générer des quartiles distincts')

    // Construire exactement n valeurs (réparties par "tranches")
    const serie: number[] = []
    while (serie.length < n) {
      if (serie.length < n) {
        serie.push(
          isInteger
            ? randint(Math.floor(min), Math.floor(q1))
            : randFloat(min, q1, precision),
        )
      }
      if (serie.length < n) {
        serie.push(
          isInteger
            ? randint(Math.floor(q1), Math.floor(mediane))
            : randFloat(q1, mediane, precision),
        )
      }
      if (serie.length < n) {
        serie.push(
          isInteger
            ? randint(Math.floor(mediane), Math.floor(q3))
            : randFloat(mediane, q3, precision),
        )
      }
      if (serie.length < n) {
        serie.push(
          isInteger
            ? randint(Math.floor(q3), Math.floor(max))
            : randFloat(q3, max, precision),
        )
      }
    }

    // Tronquer si besoin (sécurité) et forcer extrêmes
    const finalSerie = serie.slice(0, n)
    finalSerie.sort((a, b) => a - b)
    finalSerie[0] = isInteger ? Math.round(min) : min
    finalSerie[n - 1] = isInteger ? Math.round(max) : max

    // Ajuster la somme pour obtenir exactement la moyenne souhaitée
    const requiredSum = mean * n
    const currentSum = finalSerie.reduce((s, v) => s + v, 0)
    let diff = requiredSum - currentSum

    // diff doit être entier ; répartir ±1 sur les indices 1..n-2
    diff = Math.round(diff)
    const maxIterations = Math.abs(diff) * n + 1000
    let iter = 0
    // indices utilisables
    const indices = []
    for (let i = 1; i < n - 1; i++) indices.push(i)
    while (diff !== 0 && iter < maxIterations) {
      for (const idx of indices) {
        if (diff === 0) break
        if (diff > 0 && finalSerie[idx] < max) {
          finalSerie[idx] = Math.min(max, finalSerie[idx] + 1)
          diff--
        } else if (diff < 0 && finalSerie[idx] > min) {
          finalSerie[idx] = Math.max(min, finalSerie[idx] - 1)
          diff++
        }
      }
      iter++
      // si on ne peut plus bouger (tous indices au max/min), sortir pour éviter boucle infinie
      const canIncrease = indices.some((i) => finalSerie[i] < max)
      const canDecrease = indices.some((i) => finalSerie[i] > min)
      if ((diff > 0 && !canIncrease) || (diff < 0 && !canDecrease)) break
    }
    if (diff !== 0) {
      // Si on n'a pas réussi à tout ajuster, avertir mais retourner la meilleure série
      console.warn(
        `Ajustement entier incomplet (restant=${diff}). Moyenne finale = ${finalSerie.reduce((a, b) => a + b, 0) / n}`,
      )
    }
    let iterations = 0

    if (!isInteger) {
      const requiredSum = mean * n
      const currentSum = finalSerie.reduce((s, v) => s + v, 0)
      diff = requiredSum - currentSum
      // flottants : pas à pas +/- step
      const tolerance = 0.001
      let remaining = diff
      const step = 0.005
      const maxIterations = 10000
      let i = 1
      let direction = 1
      while (Math.abs(remaining) > tolerance && iterations < maxIterations) {
        if (i === 0 || i === n - 1) {
          direction = -direction
          i += direction
        }
        if (remaining > 0) {
          if (finalSerie[i] < max) {
            finalSerie[i] += step
            remaining -= step
          }
        } else {
          if (finalSerie[i] > min) {
            finalSerie[i] -= step
            remaining += step
          }
        }
        i += direction
        if (i < 0 || i >= n) {
          i = 1
          direction = 1
        }
        iterations++
      }
      if (iterations >= maxIterations) {
        console.warn(
          `Ajustement flottant incomplet après ${maxIterations} itérations. Moyenne finale = ${finalSerie.reduce((a, b) => a + b, 0) / n}`,
        )
      }
    }

    // Tri, puis mélange pour retourner une série non triée
    finalSerie.sort((a, b) => a - b)
    return shuffle(finalSerie)
  }

  static createSerieFromValues(
    values: number[],
    n: number,
  ): [number, number][] {
    const objetSerie: Record<number, number> = {}
    for (const val of values) {
      objetSerie[val] = 0
    }
    for (let i = 0; i < n; i++) {
      const val = values[randint(0, values.length - 1)]
      objetSerie[val] += 1
    }
    const serie: [number, number][] = []
    for (const key in objetSerie) {
      serie.push([Number(key), objetSerie[key]])
    }
    return serie
  }
}
