import { cercle, cercleCentrePoint } from '../../../lib/2d/cercle'
import { colorToLatexOrHTML } from '../../../lib/2d/colorToLatexOrHtml'
import { pointAbstrait } from '../../../lib/2d/PointAbstrait'
import { polygone } from '../../../lib/2d/polygones'
import { segment } from '../../../lib/2d/segmentsVecteurs'
import { KeyboardType } from '../../../lib/interactif/claviers/keyboard'
import { choice } from '../../../lib/outils/arrayOutils'
import { miseEnEvidence } from '../../../lib/outils/embellissements'
import { texNombre } from '../../../lib/outils/texNombre'
import FractionEtendue from '../../../modules/FractionEtendue'
import { mathalea2d } from '../../../modules/mathalea2d'
import { randint } from '../../../modules/outils'
import ExerciceCan from '../../ExerciceCan'

export const titre = 'Calculer le périmètre d\'un rectangle'
export const interactifReady = true
export const interactifType = 'mathLive'
export const uuid = 'jjs2e'
export const refs = {
  'fr-fr': [],
  'fr-ch': [],
}

/**
 * @author Gilles Mora

*/
export default class Can52026Q16 extends ExerciceCan {
  enonce(nbBlanches?: number, nbNoires?: number) {
    if (nbBlanches == null || nbNoires == null) {
      const listeCas = [
        [3, 5], [4, 4], [2, 6], [5, 3], [3, 6],
        [4, 5], [2, 5], [3, 4], [4, 6], [5, 5],
      ]
      const cas = choice(listeCas)
      nbBlanches = cas[0]
      nbNoires = cas[1]
    }

    const total = nbBlanches + nbNoires
    const fraction = new FractionEtendue(nbBlanches, total)
    const fractionSimplifiee = fraction.simplifie()

    const boiteGauche = 1
    const boiteDroite = 4
    const boiteBas = 0
    const boiteHaut = 3

    const coinBasGauche = pointAbstrait(boiteGauche, boiteBas)
    const coinBasDroit = pointAbstrait(boiteDroite, boiteBas)
    const coinHautGauche = pointAbstrait(boiteGauche, boiteHaut)
    const coinHautDroit = pointAbstrait(boiteDroite, boiteHaut)

    const coteGauche = segment(coinBasGauche, coinHautGauche)
    const coteBas = segment(coinBasGauche, coinBasDroit)
    const coteDroit = segment(coinBasDroit, coinHautDroit)

    const objets = []
    objets.push(coteGauche, coteBas, coteDroit)

    let compteur = 0
    const rayonBoule = 0.25
    const espacementX = 0.6
    const espacementY = 0.6
    const margeBas = 0.5
    const margeGauche = 1.3

    for (let ligne = 0; ligne < 5 && compteur < total; ligne++) {
      const boulesParLigne = ligne < 4 ? Math.min(4, total - compteur) : total - compteur
      for (let col = 0; col < boulesParLigne && compteur < total; col++) {
        const x = margeGauche + col * espacementX
        const y = margeBas + ligne * espacementY
        const centre = pointAbstrait(x, y)
        const boule = cercle(centre, rayonBoule)
        
        boule.epaisseur = 2
        boule.color = colorToLatexOrHTML('black')
        
        if (compteur < nbBlanches) {
          // Boules blanches : pas de remplissage
          boule.opaciteDeRemplissage = 0
        } else {
          // Boules noires : remplissage noir
          boule.opaciteDeRemplissage = 1
        }
        
        objets.push(boule)
        compteur++
      }
    }

    this.canEnonce = mathalea2d(
      {
        xmin: 0,
        ymin: -0.5,
        xmax: 5,
        ymax: 3.5,
        pixelsParCm: 30,
        scale: 0.8,
        style: 'margin: auto',
      },
      objets,
    )

    this.question = this.canEnonce
    this.question += '<br>La proportion de boules blanches de ce sac est :'

    this.correction = `Il y a $${nbBlanches}$ boules blanches sur un total de $${total}$ boules.<br>
La proportion de boules blanches est donc : $\\dfrac{${nbBlanches}}{${total}}=${miseEnEvidence(fractionSimplifiee.texFraction)}$.`

    this.reponse = fractionSimplifiee.texFraction
    this.canReponseACompleter = '$\\dfrac{\\ldots}{\\ldots}$'
    this.optionsDeComparaison = { fractionIrreductible: true }
  }

  nouvelleVersion() {
    this.canOfficielle ? this.enonce(3, 5) : this.enonce()
  }
}