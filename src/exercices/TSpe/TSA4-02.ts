import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { Spline, spline, type NoeudSpline } from '../../lib/mathFonctions/Spline'
import { repere } from '../../lib/2d/reperes'
import { fixeBordures } from '../../lib/2d/fixeBordures'
import { mathalea2d } from '../../modules/mathalea2d'
import { choice } from '../../lib/outils/arrayOutils'
import { texNombre } from '../../lib/outils/texNombre'
import ExerciceSimple from '../ExerciceSimple'
import { randint } from '../../modules/outils'
import { createList } from '../../lib/format/lists'
import { tableauDeVariation } from '../../lib/mathFonctions/etudeFonction'
export const dateDePublication = '27/10/2023'
export const interactifReady = true
export const interactifType = 'mathLive'
export const titre = 'Reconnaître la convexité graphiquement'

/**
 * @author Stéphane Guyon
 */
export const uuid = '5d293'

export const refs = {
  'fr-fr': ['TSA4-02'],
  'fr-ch': [],
}
export default class CourbeConvexite extends ExerciceSimple {
  compteur = 0
  spline?: Spline
  constructor() {
    super()

    this.typeExercice = 'simple'
    this.nbQuestions = 1
    this.formatChampTexte = KeyboardType.clavierEnsemble
    this.optionsDeComparaison = { ensembleDeNombres: true }
  }

  nouvelleVersion() {
    type ScenarioConvexite = {
      noeuds: NoeudSpline[]
      positif: [number, number][]
      negatif: [number, number][]
      croissant: [number, number][]
      decroissant: [number, number][]
      inflexion: number[]
      zero: number[]
      commentaire: string
       }

    const perturb = (amplitude: number, offset = 0) =>
      offset + randint(-amplitude, amplitude) / 10

    const scenarios: ScenarioConvexite[] = [
       {
        // f' en forme de U : concave puis convexe, minimum à x=0 (y<0)
        // noeud 0
        noeuds: [
          { x: -4, y: 2 + perturb(2), deriveeGauche: -0.6, deriveeDroit: -0.6, isVisible: true },
          { x: -2, y: 0, deriveeGauche: -0.3, deriveeDroit: -0.3, isVisible: true }, // zéro entier
          { x: 0, y: -1.5 + perturb(1, -0.1), deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // y≈0-, dérivée nulle
          { x: 2, y: 0, deriveeGauche: 0.5, deriveeDroit: 0.5, isVisible: true }, // zéro entier
          { x: 4, y: 2.2 + perturb(2), deriveeGauche: 0.2, deriveeDroit: 0.2, isVisible: true },
        ],
        positif: [[-4, -2],[2,4 ]],
        negatif: [[-2, 2]],
        decroissant: [[-4, 0]],
        croissant: [[0, 4]],
        inflexion: [-2,2],
        zero: [],
        commentaire: "f' décroît puis croît, donc f est concave puis convexe.",

      },
      {
        // f' en cloche : concave, convexe, concave avec zéros entiers en x=-3,1,4 OK
        noeuds: [
          { x: -4, y: 2.6 + perturb(2), deriveeGauche: -0.6, deriveeDroit: -0.6, isVisible: true },
          { x: -3, y: 0, deriveeGauche: -0.9, deriveeDroit: -0.9, isVisible: true }, // zéro
          { x: -2, y: -1.5 + perturb(1, -0.2), deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // min <0
           { x: -1, y: 0, deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // min <0
          { x: 0, y: 1.5 + perturb(1), deriveeGauche: 0, deriveeDroit: 0, isVisible: true },
          { x: 1, y: 0, deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // zéro et palier
          { x: 2, y: 2 + perturb(2, 0.2), deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // max
          { x: 4, y: 0, deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // zéro
          { x: 5, y: 2 + perturb(1), deriveeGauche: -0.2, deriveeDroit: -0.2, isVisible: true },
        ],
        negatif: [
          [-3, -1]
        ],
        positif: [[-4, -3], [-1, 5]],
        croissant: [[-2, 0], [1, 2],[4,5]],
        decroissant: [
          [-4, -2],
          [0,1],
          [2, 4],
        ],
        inflexion: [-3, -1],
        zero: [1,4],
        commentaire:
          "f' décroît puis croît puis décroît : f est concave, puis convexe, puis concave.",
      }, 
      {
        // f' strictement croissante : f convexe partout, zéros en x=-1,2
         // noeud 1
        noeuds: [
          { x: -4, y: -2 + perturb(2, -0.2), deriveeGauche: 0.4, deriveeDroit: 0.4, isVisible: true },
          
          { x: -1, y: 0, deriveeGauche: 0.5, deriveeDroit: 0.5, isVisible: true }, // zéro
          { x: 0, y: 3 + perturb(1), deriveeGauche: 0, deriveeDroit: 0, isVisible: true },
          { x: 2, y: 0, deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // deuxième zéro
          { x: 4, y: 5.1 + perturb(2), deriveeGauche: 0.2, deriveeDroit: 0.2, isVisible: true },
        ],
        negatif: [[-4,-1]],
        positif: [[-1, 4]],
        croissant: [[-4, 0], [2, 4]],
        decroissant: [[0, 2]],
        inflexion: [-1],
        zero: [2],
        commentaire: "f' est croissante sur tout \\mathbb{R}, donc f est convexe sur tout \\mathbb{R}.",
      },
      {
        // f' en S aplatie : convexité change deux fois, zéros en x=-2,1,3
        noeuds: [
          { x: -4, y: 3 + perturb(2), deriveeGauche: -0.4, deriveeDroit: -0.4, isVisible: true }, // décroissante
          { x: -2, y: 0, deriveeGauche: -0.4, deriveeDroit: -0.4, isVisible: true }, // zéro, encore décroissant
          { x: -1, y: -1.5 + perturb(1, -0.1), deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // min, pente nulle
          { x: 1, y: 0, deriveeGauche: 0.25, deriveeDroit: 0.25, isVisible: true }, // zéro, montée
          { x: 2, y: 2 + perturb(1), deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // max aplati
          { x: 3, y: 0, deriveeGauche: -0.4, deriveeDroit: -0.4, isVisible: true }, // zéro, redescente
          { x: 4, y: -1.5 + perturb(1, 0.1), deriveeGauche: -0.35, deriveeDroit: -0.35, isVisible: true },
        ],
        positif: [
          [-4, -2],
          [1, 3],
        ],
        negatif: [[-2, 1], [3, 4]],
        decroissant: [[-4, -1], [2, 4]],
        croissant: [
          [-1, 2],
        ],
        inflexion: [-2, 1, 3],
        zero: [],
        commentaire:
          "f' décroît, croît, puis décroît de nouveau : f est concave, puis convexe, puis concave.",
      } , 
      {
        // f' oscillante douce : convexité alterne, zéros en x=-3,-1,2,4 OK
         // noeud 2
        noeuds: [
          { x: -4, y: 1.8 + perturb(2), deriveeGauche: -0.5, deriveeDroit: -0.5, isVisible: true },
          { x: -3, y: 0, deriveeGauche: -0.8, deriveeDroit: -0.8, isVisible: true }, // zéro
          { x: -2, y: -1.4 + perturb(1, -0.1), deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // min
          { x: -1, y: 0, deriveeGauche: 0.8, deriveeDroit: 0.8, isVisible: true }, // zéro
          { x: 0, y: 2 + perturb(1), deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // max
          { x: 1, y: 0, deriveeGauche: -0.8, deriveeDroit: -0.8, isVisible: true }, // zéro
          { x: 2, y: -2 + perturb(1, -0.1), deriveeGauche: 0, deriveeDroit: 0, isVisible: true }, // min
        ],
        positif: [
          [-4, -3],
          [-1, 2],
          [4, 5],
        ],
        negatif: [
          [-3, -1],
          [2, 4],
        ],
        croissant: [
          [-2, 0],
          [3, 4],
        ],
        decroissant: [
          [-4, 2],
          [-1, 3],
        ],
        inflexion: [-3, -1, 2, 4],
        zero: [],
        commentaire:
          "f' alterne décroissance/croissance, fournissant plusieurs changements de convexité.",
      }
    ]

    const scenario = choice(scenarios)

    // Perturbation des abscisses : translation entière et pas multiplicatif entier (>=2), borné pour rester sous 15.
    const baseX0 = scenario.noeuds[0].x
    let deltaX = 0
    let pasX = 2
    let transformX: (x: number) => number = (x) => x
    let maxX = Infinity
    do {
      deltaX = randint(-1, 1)
      pasX = 2 + randint(0, 1) // 2 ou 3 pour espacer davantage les abscisses
      transformX = (x: number) =>
        x === Infinity || x === -Infinity
          ? x
          : baseX0 + deltaX + (x - baseX0) * pasX
      maxX = Math.max(...scenario.noeuds.map((n) => transformX(n.x)))
    } while (maxX > 15)

    const k =
      choice([-1, 1]) *
      (randint(8, 12) / 10) // facteur d'échelle sur les ordonnées de f'

    const noeudsK = scenario.noeuds.map((n) => ({
      ...n,
      x: transformX(n.x),
      y: n.y * k,
      deriveeGauche: n.deriveeGauche * k,
      deriveeDroit: n.deriveeDroit * k,
    }))

    // Garantit qu'aucune paire de nœuds consécutifs n'ait la même ordonnée
    // et préserve les nœuds de y=0 aux abscisses entières.
    const enforceOrder = (noeuds: NoeudSpline[]) => {
      if (noeuds.length === 0) return noeuds
      const adjusted: NoeudSpline[] = [noeuds[0]]
      for (let i = 1; i < noeuds.length; i++) {
        const prev = adjusted[i - 1]
        const target = noeuds[i]
        const current = { ...target }
        // Préserver strictement les zéros déclarés
        if (current.y === 0) {
          adjusted.push(current)
          continue
        }
        let signRef = Math.sign(target.y - noeuds[i - 1].y)
        if (signRef === 0) {
          signRef = Math.sign(target.y) || 1
        }
        const eps = 0.05
        if (signRef > 0 && current.y <= prev.y) {
          current.y = prev.y + eps
        } else if (signRef < 0 && current.y >= prev.y) {
          current.y = prev.y - eps
        }
        adjusted.push(current)
      }
      return adjusted
    }

    const noeudsAjustes = enforceOrder(noeudsK)

    const transformeIntervalle = ([a, b]: [number, number]) =>
      [transformX(a), transformX(b)] as [number, number]

    const positifBase = scenario.positif.map(transformeIntervalle)
    const negatifBase = scenario.negatif.map(transformeIntervalle)
    const croissantBase = scenario.croissant.map(transformeIntervalle)
    const decroissantBase = scenario.decroissant.map(transformeIntervalle)
    const inflexion = scenario.inflexion.map((x) => transformX(x))
    const zero = scenario.zero.map((x) => transformX(x))

    // Si k<0, le sens de variation de f' s'inverse : intervalles positifs/négatifs s'échangent.
    const positif =
      k >= 0 ? positifBase : (negatifBase as [number, number][])
    const negatif =
      k >= 0 ? negatifBase : (positifBase as [number, number][])
    const croissant =
      k >= 0 ? croissantBase : (decroissantBase as [number, number][])
    const decroissant =
      k >= 0 ? decroissantBase : (croissantBase as [number, number][])
    const commentaireK =
      k >= 0
        ? scenario.commentaire
        : `${scenario.commentaire} (inversée car $k<0$).`

    const theSpline = spline(noeudsAjustes)
    this.spline = theSpline

    const bornes = theSpline.trouveMaxes()
    const a = bornes.xMin - 1
    const b = bornes.xMax + 1
    const repere1 = repere({
      xMin: a,
      xMax: b,
      yMin: bornes.yMin - 1,
      yMax: bornes.yMax + 1,
      grilleX: false,
      grilleY: false,
      grilleSecondaire: true,
      grilleSecondaireYDistance: 1,
      grilleSecondaireXDistance: 1,
      grilleSecondaireYMin: bornes.yMin - 1,
      grilleSecondaireYMax: bornes.yMax + 1,
      grilleSecondaireXMin: bornes.xMin - 1,
      grilleSecondaireXMax: bornes.xMax + 1,
    })
    const courbe1 = theSpline.courbe({
      epaisseur: 1.5,
      ajouteNoeuds: true,
      optionsNoeuds: { color: 'blue', taille: 2, style: '.', epaisseur: 1 },
      color: 'blue',
    })
    const objetsEnonce = [repere1, courbe1]

    this.compteur = 0

    const cadre = fixeBordures(objetsEnonce)

    const dessin = mathalea2d(
      {
        pixelsParCm: 30,
        scale: 0.9,
        style: 'margin: auto',
        xmin: cadre.xmin,
        ymin: cadre.ymin,
        xmax: cadre.xmax,
        ymax: cadre.ymax,
      },
      objetsEnonce,
    )

    const texBorne = (x: number) =>
      x === Infinity ? '+\\infty' : x === -Infinity ? '-\\infty' : texNombre(x)
    const texInterval = ([a, b]: [number, number]) =>
      `]${texBorne(a)};${texBorne(b)}[`

    const positifTex =
      positif.length > 0
        ? positif.map((it) => texInterval(it)).join('\\cup ')
        : '\\emptyset'
    const negatifTex =
      negatif.length > 0
        ? negatif.map((it) => texInterval(it)).join('\\cup ')
        : '\\emptyset'
    const croissantTex =
      croissant.length > 0
        ? croissant.map((it) => texInterval(it)).join('\\cup ')
        : '\\emptyset'
    const decroissantTex =
      decroissant.length > 0
        ? decroissant.map((it) => texInterval(it)).join('\\cup ')
        : '\\emptyset'
    const inflexionTex =
      inflexion.length > 0
        ? inflexion.map((x) => texNombre(x)).join('\\;;\\;')
        : 'aucun'
    const zeroTex =
      zero.length > 0
        ? zero.map((x) => texNombre(x)).join('\\;;\\;')
        : 'aucun'
  let question1 =``
  let question2 = ``
  let reponse1=''
  let reponse2=''
        
     switch (randint(1,1)) {
      case 1 :
         question1 =`Déterminer les variations de la fonction $f$`
   question2 = `Etudier la convexité de la fonction $f$`
        this.question =
      `Soit $f$ une fonction deux fois dérivable sur $[${texBorne(a+1)};${texBorne(b-1)}]$. <bR>
      La représentation graphique $\\mathcal C_{f'}$ de sa fonction dérivée est donnée ci-dessous.<br>` +
      `Répondre, en justifiant, avec la précision permise par le graphique.<br>` +
      createList({items:[question1,question2], style: 'nombres',}) 
        +
      dessin

reponse1=`La représentation graphique proposée est celle de la fonction dérivée de $f$.<br>
On sait que le signe de la dérivée $f'$ donne les variations de $f$.<br>`

reponse2=`La convexité de $f$ dépend du sens de variation de $f'$. ${commentaireK}<br>
    - $f''>0$ (donc $f$ convexe) sur $${positifTex}$.<br>
    - $f''<0$ (donc $f$ concave) sur $${negatifTex}$.<br>
    - $f'$ croissante sur $${croissantTex}$; $f'$ décroissante sur $${decroissantTex}$.<br>
    - Points d'inflexion (changement de signe) : $${inflexionTex}$.<br>
    - Zéros sans changement de signe : $${zeroTex}$.`
    this.correction = createList({items:[reponse1, reponse2], style: 'nombres',}) 
    this.canEnonce = this.question
    this.canReponseACompleter = ''
    this.reponse = ''
    break
      default:
        this.question =
      `La courbe ci-dessous représente la fonction dérivée $f'$.<br>` +
      `À partir de ce graphe, déterminer les intervalles où la fonction $f$ est convexe et concave, ainsi que les points d'inflexion éventuels.<br>` +
      dessin

    this.correction = `La convexité de $f$ dépend du sens de variation de $f'$. ${commentaireK}<br>
    - $f$ est convexe sur $${positifTex}$.<br>
    - $f$ est concave sur $${negatifTex}$.<br>
    - Points d'inflexion (changement de signe) : $${inflexionTex}$.`
    this.canEnonce = this.question
    this.canReponseACompleter = ''
    this.reponse = ''
    break
     }
  }
}
