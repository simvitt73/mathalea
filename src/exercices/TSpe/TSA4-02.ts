import { KeyboardType } from '../../lib/interactif/claviers/keyboard'
import { Spline, spline, type NoeudSpline } from '../../lib/mathFonctions/Spline'
import { repere } from '../../lib/2d/reperes'
import { fixeBordures } from '../../lib/2d/fixeBordures'
import { mathalea2d } from '../../modules/mathalea2d'
import ExerciceSimple from '../ExerciceSimple'
import { randint } from '../../modules/outils'
export const dateDePublication = '27/10/2023'
export const interactifReady = true
export const interactifType = 'mathLive'
export const titre = 'Reconnaître la convexité graphiquement'

/**
 * @author Gilles Mora
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
  const y0=randint(1,5)
  const y1=y0+randint(-3,-1)
    const noeuds1: NoeudSpline[] = [
      { x: -4, y: y0, deriveeGauche: 2, deriveeDroit: 2, isVisible: true },
      { x: -3, y: y1, deriveeGauche: 1, deriveeDroit: 1, isVisible: true },
      { x: -2, y: -2, deriveeGauche: 0, deriveeDroit: 0, isVisible: true },
      { x: -1, y: -1, deriveeGauche: -1, deriveeDroit: -1, isVisible: true },
      { x: 0, y: 0, deriveeGauche: -2, deriveeDroit: -2, isVisible: true },
      { x: 2, y: 1, deriveeGauche: -3, deriveeDroit: -3, isVisible: true },
      { x: 3, y: 2, deriveeGauche: -2, deriveeDroit: -2, isVisible: true },
      { x: 4, y: 1, deriveeGauche: -1, deriveeDroit: -1, isVisible: true },
      { x: 5, y: 0, deriveeGauche: 0, deriveeDroit: 0, isVisible: true },
    ]

    const theSpline = spline(noeuds1)
    this.spline = theSpline

    const bornes = theSpline.trouveMaxes()
    const repere1 = repere({
      xMin: bornes.xMin - 1,
      xMax: bornes.xMax + 1,
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
      optionsNoeuds: { color: 'blue', taille: 2, style: 'x', epaisseur: 2 },
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

    this.question = `On donne la représentation graphique d'une fonction $f$.<br>${dessin}`
    this.reponse = 'convexe sur [-4;-2] et [3;5], concave sur [-2;3]'
    this.correction = ''
    this.canEnonce = this.question
    this.canReponseACompleter = ''
  }
}
