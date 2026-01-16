import { codageAngleDroit } from '../../../lib/2d/CodageAngleDroit'
import { point } from '../../../lib/2d/PointAbstrait'
import { polygoneAvecNom } from '../../../lib/2d/polygones'
import { segment } from '../../../lib/2d/segmentsVecteurs'
import { latex2d } from '../../../lib/2d/textes'
import { milieu } from '../../../lib/2d/utilitairesPoint'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { choice } from '../../../lib/outils/arrayOutils'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { texNombre } from '../../../lib/outils/texNombre'
import { mathalea2d } from '../../../modules/mathalea2d'
import { randint } from '../../../modules/outils'
import ExerciceCan from '../../ExerciceCan'

export const titre = 'Calculer le périmètre d\'un rectangle'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = '3hsdf'
export const refs = {
  'fr-fr': [],
  'fr-ch': [],
}

/**
 * @author Gilles Mora

*/
export default class Can52026Q17 extends ExerciceCan {
  enonce(AB?: number, CH?: number, AH?: number, AC?: number, BC?: number) {
    if (AB == null || CH == null || AH == null || AC == null || BC == null) {
      // Configurations valides avec aire entière
      const listeCas = [
        [10, 4, 6, 5, 8],   // Aire = 20
        [12, 5, 4, 6.4, 9.4], // Aire = 30 (à vérifier les côtés)
        [8, 6, 3, 6.7, 7.2],  // Aire = 24 (à vérifier les côtés)
        [6, 4, 3, 5, 5],      // Aire = 12 (triangle isocèle)
        [14, 4, 7, 8.1, 8.1], // Aire = 28 (triangle isocèle, à vérifier)
      ]
      const cas = choice(listeCas)
      AB = cas[0]
      CH = cas[1]
      AH = cas[2]
      AC = cas[3]
      BC = cas[4]
    }

    const BH = AB - AH
    const aire = (AB * CH) / 2

    // Construction de la figure
    const A = point(0, 0, 'A')
    const B = point(AB, 0, 'B')
    const H = point(AH, 0, 'H')
    const C = point(AH, CH, 'C')

    const objets = []
    
    // Triangle avec noms
    const pol = polygoneAvecNom(A, B, C)
    objets.push(pol[0], pol[1])
    
    // Hauteur [CH]
    objets.push(
      segment(C, H, 'gray'),
      codageAngleDroit(C, H, A)
    )

    // Cotations des longueurs
    objets.push(
      latex2d(
        `${AC} \\text{ cm}`,
        milieu(A, C).x - 1,
        milieu(A, C).y,
        { color: 'black' }
      ),
      latex2d(
        `${BC} \\text{ cm}`,
        milieu(B, C).x + 1,
        milieu(B, C).y,
        { color: 'black' }
      ),
      latex2d(
        `${CH} \\text{ cm}`,
        milieu(C, H).x + 0.5,
        milieu(C, H).y,
        { color: 'black' }
      ),
      latex2d(
        `${AB} \\text{ cm}`,
        milieu(A, B).x,
        milieu(A, B).y - 0.8,
        { color: 'black' }
      )
    )

    this.question = mathalea2d(
      {
        xmin: -2,
        ymin: -2,
        xmax: AB + 2,
        ymax: CH + 2,
        pixelsParCm: 20,
        mainlevee: false,
        scale: 0.7,
        style: 'margin: auto',
      },
      objets,
    )

    this.question += "<br>L'aire du triangle ABC est égale à :"

    this.correction = `L'aire du triangle $ABC$ est égale à :<br>
$\\mathcal{A}=\\dfrac{AB \\times CH}{2}=\\dfrac{${AB} \\times ${CH}}{2}=\\dfrac{${AB * CH}}{2}=${miseEnEvidence(aire)}\\text{ cm}^2$`

    this.reponse = aire
    this.canEnonce = "L'aire du triangle ABC est égale à :"
    this.canReponseACompleter = '$\\ldots \\text{ cm}^2$'
    
    if (this.interactif) {
      this.optionsChampTexte = { texteApres: '$\\text{ cm}^2$' }
    }
  }

  nouvelleVersion() {
    this.canOfficielle ? this.enonce(10, 4, 6, 5, 8) : this.enonce()
  }
}