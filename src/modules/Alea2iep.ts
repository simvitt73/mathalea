// import iepLoadPromise from 'instrumenpoche'
import { angleOriente } from '../lib/2d/angles'
import { droite } from '../lib/2d/droites'
import { milieu, point, pointAdistance, pointSurSegment } from '../lib/2d/points'
import { pointAbstrait, PointAbstrait } from '../lib/2d/points-abstraits'
import { longueur, norme, Segment, segment, vecteur } from '../lib/2d/segmentsVecteurs'
import { homothetie, rotation, translation, translation2Points } from '../lib/2d/transformations'
import { context } from './context'
import { bissectriceAuCompas, cercleCirconscrit, hauteur, mediane, mediatriceAuCompas, mediatriceRegleEquerre } from './iepMacros/droitesRemarquables'
import { paralleleAuCompas, paralleleAuCompasAvecDescription, paralleleRegleEquerre2points3epoint, paralleleRegleEquerreDroitePointAvecDescription, perpendiculaireCompasPoint, perpendiculaireCompasPointSurLaDroite, perpendiculaireRegleEquerre2points3epoint, perpendiculaireRegleEquerreDroitePoint, perpendiculaireRegleEquerrePointSurLaDroite } from './iepMacros/parallelesEtPerpendiculaires'
import { parallelogramme2sommetsConsecutifsCentre, parallelogramme3sommetsConsecutifs, parallelogrammeAngleCentre, partageSegment } from './iepMacros/parallelogrammes'
import { carre1point1longueur } from './iepMacros/quadrilateres'
import { demiTourPoint, demiTourPolygone, homothetiePoint, homothetiePolygone, rotationPoint, rotationPolygone, symetrieAxialePoint, symetrieAxialePolygone, translationPoint, translationPolygone } from './iepMacros/transformations'
import { triangle1longueur2angles, triangle2longueurs1angle, triangle3longueurs, triangleEquilateral, triangleEquilateral2Sommets, triangleRectangle2Cotes, triangleRectangleCoteHypotenuse } from './iepMacros/triangles'

const store: Record<string, string> = {}

export class StoreIep {
  static getXml (id: string) {
    return store[id]
  }

  static saveXml (id: string, xml: string) {
    store[id] = xml
  }
}

type ObjetIep = {
  visibilite: boolean
  position: PointAbstrait
  angle: number
  zoom: number
}

type Regle = ObjetIep & {
  longueur: number // Longueur de la règle en cm
}

type Rapporteur = ObjetIep & {
  rayon: number // Rayon du rapporteur en cm
}

type Compas = ObjetIep & {
  orientation: 'droite' | 'gauche' // Orientation du compas
  ecartement: number // Ecartement du compas en cm
  leve: boolean // Le compas est-il levé ?
}

type StringOutil = 'regle' | 'equerre' | 'requerre' | 'rapporteur' | 'compas' | 'crayon'

type OptionsIep = {
  id?: string // Identifiant de l'objet
  tempo?: number // Temps d'attente après l'instruction
  vitesse?: number // Vitesse de déplacement des instruments
  couleur?: string // Couleur des traits
  couleurCompas?: string // Couleur du compas
  couleurTexte?: string // Couleur du texte
  couleurPoint?: string // Couleur du nom des points
  couleurCodage?: string // Couleur du codage
  couleurTraitsDeConstruction?: string // Couleur des traits de construction
  epaisseur?: number // Epaisseur des traits
  epaisseurTraitsDeConstruction?: number // Epaisseur des traits de construction
  pointilles?: boolean // Pointillés ou traits pleins
  sens?: number // Sens de la rotation
  label?: string // Label du point
  dx?: number // Décalage horizontal du label du point
  dy?: number // Décalage vertical du label du point
  couleurLabel?: string // Couleur du label du point
  delta?: number // Delta pour l'arc de cercle autour d'un point
  longueur?: number // Longueur pour la règle ou le compas
  vecteur?: boolean // Si true, on applique un style vecteur pour tracer un segment
  codage?: string // Code pour le codage
  rayon?: number // Rayon pour le codage d'angle
}

type OptionsTexte = {
  police?: string
  taille?: number
  couleur?: string
  couleurFond?: string
  opaciteFond?: string
  couleurCadre?: string
  epaisseurCadre?: number
  marge?: number
  margeGauche?: number
  margeDroite?: number
  margeHaut?: number
  margeBas?: number
}
/*
 * Classe parente de tous les objets Alea2iep
 *
 * @author Rémi Angot
 */
export default class Alea2iep {
  idIEP: number // Identifiant pour les tracés
  idHTML: number // Identifiant pour les div et le svg
  tempo: number // Pause par défaut après une instruction
  vitesse: number // Vitesse par défaut pour les déplacements d'instruments
  couleur: string // Couleur par défaut
  couleurCompas: string
  couleurTexte: string
  couleurPoint: string // Couleur du nom des points
  couleurCodage: string
  couleurTraitsDeConstruction: string
  epaisseur: number
  epaisseurTraitsDeConstruction: number
  pointilles: boolean
  liste_script: string[] // Liste des instructions xml mise à jour par les méthodes
  translationX: number
  translationY: number // Par défaut l'angle en haut à gauche est le point de coordonnées (0,10)
  xMin: number // Garde en mémoire les coordonnées extrêmes des objets créés
  yMin: number
  xMax: number
  yMax: number
  regle: Regle
  crayon: ObjetIep
  equerre: ObjetIep
  requerre: ObjetIep
  rapporteur: Rapporteur
  compas: Compas
  xml: string // Code XML de l'animation
  symetrieAxialePoint: typeof symetrieAxialePoint
  parallelogramme3sommetsConsecutifs: typeof parallelogramme3sommetsConsecutifs
  parallelogrammeAngleCentre: typeof parallelogrammeAngleCentre
  partageSegment: typeof partageSegment
  paralleleRegleEquerre2points3epoint: typeof paralleleRegleEquerre2points3epoint
  perpendiculaireRegleEquerre2points3epoint: typeof perpendiculaireRegleEquerre2points3epoint
  perpendiculaireRegleEquerreDroitePoint: typeof perpendiculaireRegleEquerreDroitePoint
  perpendiculaireRegleEquerrePointSurLaDroite: typeof perpendiculaireRegleEquerrePointSurLaDroite
  perpendiculaireCompasPointSurLaDroite: typeof perpendiculaireCompasPointSurLaDroite
  perpendiculaireCompasPoint: typeof perpendiculaireCompasPoint
  paralleleRegleEquerreDroitePointAvecDescription: typeof paralleleRegleEquerreDroitePointAvecDescription
  paralleleAuCompasAvecDescription: typeof paralleleAuCompasAvecDescription
  paralleleAuCompas: typeof paralleleAuCompas
  mediatriceAuCompas: typeof mediatriceAuCompas
  mediatriceRegleEquerre: typeof mediatriceRegleEquerre
  hauteur: typeof hauteur
  mediane: typeof mediane
  bissectriceAuCompas: typeof bissectriceAuCompas
  cercleCirconscrit: typeof cercleCirconscrit
  triangle3longueurs: typeof triangle3longueurs
  triangleRectangleCoteHypotenuse: typeof triangleRectangleCoteHypotenuse
  triangleRectangle2Cotes: typeof triangleRectangle2Cotes
  triangle1longueur2angles: typeof triangle1longueur2angles
  triangle2longueurs1angle: typeof triangle2longueurs1angle
  triangleEquilateral2Sommets: typeof triangleEquilateral2Sommets
  triangleEquilateral: typeof triangleEquilateral
  carre1point1longueur: typeof carre1point1longueur
  rotationPoint: typeof rotationPoint
  translationPoint: typeof translationPoint
  demiTourPoint: typeof demiTourPoint
  homothetiePoint: typeof homothetiePoint
  rotationPolygone: typeof rotationPolygone
  symetrieAxialePolygone: typeof symetrieAxialePolygone
  translationPolygone: typeof translationPolygone
  demiTourPolygone: typeof demiTourPolygone
  homothetiePolygone: typeof homothetiePolygone
  parallelogramme2sommetsConsecutifsCentre: typeof parallelogramme2sommetsConsecutifsCentre

  constructor () {
    this.idIEP = 0 // Identifiant pour les tracés
    this.idHTML = 0 // Identifiant pour les div et le svg
    this.tempo = 5 // Pause par défaut après une instruction
    this.vitesse = 10 // Vitesse par défaut pour les déplacements d'instruments
    this.couleur = 'blue' // Couleur par défaut
    this.couleurCompas = 'forestgreen'
    this.couleurTexte = 'black'
    this.couleurPoint = 'black' // Couleur du nom des points
    this.couleurCodage = '#f15929'
    this.couleurTraitsDeConstruction = 'gray'
    this.epaisseur = 2
    this.epaisseurTraitsDeConstruction = 1
    this.pointilles = false
    this.liste_script = [] // Liste des instructions xml mise à jour par les méthodes

    this.translationX = 0
    this.translationY = 10 // Par défaut l'angle en haut à gauche est le point de coordonnées (0,10)

    // Garde en mémoire les coordonnées extrêmes des objets créés
    this.xMin = 0
    this.yMin = 0
    this.xMax = 0
    this.yMax = 0

    // Sauvegarde de l'état des instruments
    this.regle = {
      visibilite: false,
      position: point(0, 0),
      angle: 0,
      longueur: 15,
      zoom: 100
    }

    this.crayon = {
      visibilite: false,
      position: point(0, 0),
      angle: 0,
      zoom: 100
    }

    this.equerre = {
      visibilite: false,
      position: point(0, 0),
      angle: 0,
      zoom: 100
    }

    this.requerre = {
      visibilite: false,
      position: point(0, 0),
      angle: 0,
      zoom: 100
    }

    this.rapporteur = {
      visibilite: false,
      position: point(0, 0),
      angle: 0,
      rayon: 5.2,
      zoom: 100
    }

    this.compas = {
      visibilite: false,
      position: point(0, 0),
      angle: 0,
      orientation: 'droite',
      ecartement: 0,
      leve: false,
      zoom: 100
    }

    this.xml = ''
    this.symetrieAxialePoint = symetrieAxialePoint
    this.parallelogramme3sommetsConsecutifs = parallelogramme3sommetsConsecutifs
    this.parallelogramme2sommetsConsecutifsCentre = parallelogramme2sommetsConsecutifsCentre
    this.parallelogrammeAngleCentre = parallelogrammeAngleCentre
    this.partageSegment = partageSegment
    this.paralleleRegleEquerre2points3epoint = paralleleRegleEquerre2points3epoint
    this.paralleleRegleEquerre2points3epoint = paralleleRegleEquerre2points3epoint
    this.perpendiculaireRegleEquerre2points3epoint = perpendiculaireRegleEquerre2points3epoint
    this.perpendiculaireRegleEquerreDroitePoint = perpendiculaireRegleEquerreDroitePoint
    this.perpendiculaireRegleEquerrePointSurLaDroite = perpendiculaireRegleEquerrePointSurLaDroite
    this.perpendiculaireCompasPointSurLaDroite = perpendiculaireCompasPointSurLaDroite
    this.perpendiculaireCompasPoint = perpendiculaireCompasPoint
    this.paralleleRegleEquerreDroitePointAvecDescription = paralleleRegleEquerreDroitePointAvecDescription
    this.paralleleAuCompasAvecDescription = paralleleAuCompasAvecDescription
    this.paralleleAuCompas = paralleleAuCompas
    this.mediatriceAuCompas = mediatriceAuCompas
    this.mediatriceRegleEquerre = mediatriceRegleEquerre
    this.hauteur = hauteur
    this.mediane = mediane
    this.bissectriceAuCompas = bissectriceAuCompas
    this.cercleCirconscrit = cercleCirconscrit
    this.triangle3longueurs = triangle3longueurs
    this.triangleRectangleCoteHypotenuse = triangleRectangleCoteHypotenuse
    this.triangleRectangle2Cotes = triangleRectangle2Cotes
    this.triangle1longueur2angles = triangle1longueur2angles
    this.triangle2longueurs1angle = triangle2longueurs1angle
    this.triangleEquilateral2Sommets = triangleEquilateral2Sommets
    this.triangleEquilateral = triangleEquilateral
    this.carre1point1longueur = carre1point1longueur
    this.rotationPoint = rotationPoint
    this.translationPoint = translationPoint
    this.demiTourPoint = demiTourPoint
    this.homothetiePoint = homothetiePoint
    this.rotationPolygone = rotationPolygone
    this.symetrieAxialePolygone = symetrieAxialePolygone
    this.translationPolygone = translationPolygone
    this.demiTourPolygone = demiTourPolygone
    this.homothetiePolygone = homothetiePolygone
  }
  /** **** Fin du constructeur */

  // Transforme les coordonnées MathALEA2D en coordonnées pour le XML d'IEP
  x (A: PointAbstrait) {
    const x = Math.round((A.x + this.translationX) * 30)
    if (A.x > this.xMax) {
      this.xMax = A.x
    }
    if (A.x < this.xMin) {
      this.xMin = A.x
    }
    return x
  }

  y (A: PointAbstrait) {
    const y = Math.round((-A.y + this.translationY) * 30)
    if (A.y < this.yMin) {
      this.yMin = A.y
    }
    if (A.y > this.yMax) {
      this.yMax = A.y
    }
    return y
  }

  /**
   * Renvoie le script xml
   *
   */
  script () {
    if (this.xml.length > 1) {
      return this.xml
    } else {
      let codeXML = '<?xml version="1.0" encoding="UTF-8"?>\n'
      codeXML += '<INSTRUMENPOCHE version="2">\n'
      codeXML += this.liste_script.join('\n')
      codeXML += '\n</INSTRUMENPOCHE>'
      return codeXML
    }
  }

  /**
   * Renvoie le code HTML de l'animation
   * @param {number} numeroExercice - Numéro de l'exercice
   * @param {number} i - Numéro de la question
   */
  html (numeroExercice: number, id2 = 0) {
    if (context.isHtml) {
      const id = `IEP_${numeroExercice}_${id2}`
      StoreIep.saveXml(id, this.script())
      const codeHTML = `<alea-instrumenpoche id=${id}>`
      return codeHTML
    }
    return ''
  }

  /**
   *
   * @param {number} [id1] NumeroExercice - Numéro de l'exercice
   * @param {number} [id2] Numéro de la question
   * @return Code HTML avec le bouton qui affiche ou masque un div avec l'animation
   */
  htmlBouton (id1 = 0, id2 = 0) {
    if (context.isHtml) {
      const id = `IEP_${id1}_${id2}`
      StoreIep.saveXml(id, this.script())
      const codeHTML = `<alea-buttoninstrumenpoche id=${id}>`
      return codeHTML
    }
    return ''
  }

  /**
 **************************
 *** FONCTIONS COMMUNES ***
 **************************
 */

  recadre (xmin: number, ymax: number) {
    this.translationX = 1 - xmin
    this.translationY = ymax + 3
  }

  taille (width: number, height: number) {
    this.liste_script.push(`<viewBox width="${width}" height="${height}" />`)
  }

  montrer (outil: StringOutil, A: PointAbstrait, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    if (!this[outil].visibilite || this[outil].position !== A) { // On ajoute une ligne xml que si l'objet est caché ou doit apparaitre à un autre endroit
      let codeXML = ''
      let A1
      if (typeof A === 'undefined') { // A1 est une copie de A ou (0,0) si A n'est pas défini
        A1 = this[outil].position
      } else {
        A1 = A
      }
      if (this[outil].visibilite) { // S'il est déjà visible, montrer devient un déplacer
        this.deplacer(outil, A1, options)
      } else {
        codeXML = `<action objet="${outil}" mouvement="montrer" abscisse="${this.x(A1)}" ordonnee="${this.y(A1)}" tempo="${options.tempo}" />`
        this[outil].visibilite = true
      }
      this[outil].position = A1
      this.liste_script.push(codeXML)
    }
  }

  regleMontrer (A?: PointAbstrait, options: OptionsIep = {}) {
    this.montrer('regle', A ?? this.regle.position, options)
  }

  crayonMontrer (A?: PointAbstrait, options: OptionsIep = {}) {
    this.montrer('crayon', A ?? this.crayon.position, options)
  }

  equerreMontrer (A?: PointAbstrait, options: OptionsIep = {}) {
    this.montrer('equerre', A ?? this.equerre.position, options)
  }

  requerreMontrer (A?: PointAbstrait, options: OptionsIep = {}) {
    this.montrer('requerre', A ?? this.requerre.position, options)
  }

  compasMontrer (A?: PointAbstrait, options: OptionsIep = {}) {
    this.montrer('compas', A ?? this.compas.position, options)
  }

  rapporteurMontrer (A?: PointAbstrait, options: OptionsIep = {}) {
    this.montrer('rapporteur', A ?? this.rapporteur.position, options)
  }

  masquer (outil: StringOutil, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    if (this[outil].visibilite) { // On ajoute une ligne xml que si l'objet est visible
      const codeXML = `<action objet="${outil}" mouvement="masquer" tempo="${options.tempo}" />`
      this[outil].visibilite = false
      this.liste_script.push(codeXML)
    }
  }

  regleMasquer (options: OptionsIep = {}) {
    this.masquer('regle', options)
  }

  crayonMasquer (options: OptionsIep = {}) {
    this.masquer('crayon', options)
  }

  equerreMasquer (options: OptionsIep = {}) {
    this.masquer('equerre', options)
  }

  requerreMasquer (options: OptionsIep = {}) {
    this.masquer('requerre', options)
  }

  compasMasquer (options: OptionsIep = {}) {
    this.masquer('compas', options)
  }

  rapporteurMasquer (options: OptionsIep = {}) {
    this.masquer('rapporteur', options)
  }

  deplacer (outil: StringOutil, A: PointAbstrait, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    options.vitesse = options.vitesse ?? this.vitesse
    if (this[outil].position !== A) { // On n'ajoute une commande xml que s'il y a vraiment un déplacement
      const codeXML = `<action objet="${outil}" mouvement="translation" abscisse="${this.x(A)}" ordonnee="${this.y(A)}" tempo="${options.tempo}" vitesse="${options.vitesse}" />`
      this[outil].position = A
      this.liste_script.push(codeXML)
    }
  }

  regleDeplacer (A: PointAbstrait, options: OptionsIep = {}) {
    this.deplacer('regle', A, options)
  }

  texteDeplacer (id: string, A: PointAbstrait, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    options.vitesse = options.vitesse ?? this.vitesse
    const codeXML = `<action objet="texte" id="${id}" mouvement="translation" abscisse="${this.x(A)}" ordonnee="${this.y(A)}" tempo="${options.tempo}" vitesse="${options.vitesse}" />`
    this.liste_script.push(codeXML)
  }

  crayonDeplacer (A: PointAbstrait, options: OptionsIep = {}) {
    this.deplacer('crayon', A, options)
  }

  equerreDeplacer (A: PointAbstrait, options: OptionsIep = {}) {
    this.deplacer('equerre', A, options)
  }

  requerreDeplacer (A: PointAbstrait, options: OptionsIep = {}) {
    this.deplacer('requerre', A, options)
  }

  compasDeplacer (A: PointAbstrait, options: OptionsIep = {}) {
    this.deplacer('compas', A, options)
  }

  rapporteurDeplacer (A: PointAbstrait, options: OptionsIep = {}) {
    this.deplacer('rapporteur', A, options)
  }

  rotation (outil: StringOutil, angle: number | PointAbstrait, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    options.sens = options.sens ?? Math.round(this.vitesse / 2)
    let angleDeRotation: number
    if (typeof angle === 'number') {
      angleDeRotation = angle
    } else {
      const d = droite(this[outil].position, angle)
      angleDeRotation = d.angleAvecHorizontale
    }
    if (this[outil].angle !== angle) { // Si la rotation est inutile, on ne la fait pas
      // Les angles de MathALEA2D et de IEP sont opposés !!!!!
      const codeXML = `<action objet="${outil}" mouvement="rotation" angle="${-1 * angleDeRotation}" tempo="${options.tempo}" sens="${options.sens}" />`
      this[outil].angle = angleDeRotation
      if (typeof angleDeRotation === 'number' && isFinite(angleDeRotation)) {
        this.liste_script.push(codeXML)
      } else {
        console.error('Angle de rotation non défini pour l\'objet .', outil)
      }
    }
  }

  regleRotation (angle: number | PointAbstrait, options: OptionsIep = {}) {
    this.rotation('regle', angle, options)
  }

  crayonRotation (angle: number | PointAbstrait, options: OptionsIep = {}) {
    this.rotation('crayon', angle, options)
  }

  equerreRotation (angle: number | PointAbstrait, options: OptionsIep = {}) {
    this.rotation('equerre', angle, options)
  }

  requerreRotation (angle: number | PointAbstrait, options: OptionsIep = {}) {
    this.rotation('requerre', angle, options)
  }

  compasRotation (angle: number | PointAbstrait, options: OptionsIep = {}) {
    this.rotation('compas', angle, options)
  }

  rapporteurRotation (angle: number | PointAbstrait, options: OptionsIep = {}) {
    this.rotation('rapporteur', angle, options)
  }

  /**
 * @param {string} outil - 'regle', 'equerre', 'requerre, 'compas' ou 'rapporteur'
 * @param {number} echelle 200 pour doubler la taille
 * @param {objet} [options] tempo = 0 par défaut
 */
  zoom (outil: StringOutil, echelle: number, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? 0
    this[outil].zoom = echelle
    this.liste_script.push(`<action echelle="${echelle}" mouvement="zoom" objet="${outil}" tempo="${options.tempo}" />`)
  }

  /**
 *
 * @param {number} pourcentage 200 pour doubler la taille
 * @param {objet} [options] tempo = 0 par défaut
 */
  regleZoom (echelle: number, options: OptionsIep = {}) {
    this.zoom('regle', echelle, options)
    this.regle.longueur = this.regle.longueur * echelle / 100
  }

  /**
 *
 * @param {number} pourcentage 200 pour doubler la taille
 * @param {objet} [options] tempo = 0 par défaut
 */
  equerreZoom (echelle: number, options: OptionsIep = {}) {
    this.zoom('equerre', echelle, options)
  }

  /**
 *
 * @param {number} pourcentage 200 pour doubler la taille
 * @param {objet} [options] tempo = 0 par défaut
 */
  requerreZoom (echelle: number, options: OptionsIep = {}) {
    this.zoom('requerre', echelle, options)
  }

  /**
 *
 * @param {number} pourcentage 200 pour doubler la taille
 * @param {objet} [options] tempo = 0 par défaut
 */
  rapporteurZoom (echelle: number, options: OptionsIep = {}) {
    this.zoom('rapporteur', echelle, options)
  }

  /**
 *
 * @param {number} pourcentage 200 pour doubler la taille
 * @param {objet} [options] tempo = 0 par défaut
 */
  compasZoom (echelle: number, options: OptionsIep = {}) {
    this.zoom('compas', echelle, options)
  }

  /**
 **************************
 ********* POINT **********
 **************************
 */

  /**
 * Créer un point avec la croix pour le situer et son nom en bas à droite par défaut. L'id sera sauvegardé dans l'objet point. S'il n'est pas défini alors on prend le premier entier disponible.
 * @param {PointAbstrait} A
 * @param {objet} [options] Défaut : { dx = 0.1, dy, label = A.nom, tempo = this.tempo, couleur = this.couleurPoint, couleurLabel = this.couleurTexte, id }
 */
  pointCreer (A: PointAbstrait, options: OptionsIep = {}) {
    options.label = options.label ?? A.nom
    options.couleur = options.couleur ?? this.couleurPoint
    options.tempo = options.tempo ?? this.tempo
    options.couleurLabel = options.couleurLabel ?? this.couleurTexte
    if (options.id) {
      A.id = options.id
    } else {
      this.idIEP++
      A.id = this.idIEP
    }
    let codeXML
    if (options.label) {
      codeXML = `<action abscisse="${this.x(A)}" ordonnee="${this.y(A)}" couleur="${options.couleur}" id="${A.id}" mouvement="creer" objet="point" tempo="${options.tempo}"/>`
      // codeXML += `\n<action couleur="${couleurLabel}" nom="${label}" id="${this.idIEP}" mouvement="nommer" objet="point" tempo="${tempo}"  />`
      const M = point(A.x, A.y)
      if (options.dx) {
        M.x += options.dx
      }
      if (options.dy) {
        M.y += options.dy
      }
      this.textePoint(`$${options.label}$`, M, { tempo: 0 }, { couleur: options.couleurLabel })
    } else {
      codeXML = `<action abscisse="${this.x(A)}" ordonnee="${this.y(A)}" couleur="${options.couleur}" id="${A.id}" mouvement="creer" objet="point" tempo="${options.tempo}" />`
    }
    this.liste_script.push(codeXML)
  }

  /**
  *
  * Création de plusieurs points
  * On peut passer des points ou des options. Toutes les options sont intégrées à tous les points.
  */
  pointsCreer (...args: (PointAbstrait | OptionsIep)[]) {
    const options: OptionsIep = { tempo: 0 }
    args.filter(arg => !(arg instanceof PointAbstrait)).forEach(option => { // On intègre aux options les paramètres des arguments qui ne sont pas des points
      Object.assign(options, option)
    })
    args.filter(arg => arg instanceof PointAbstrait).forEach(point => {
      this.pointCreer(point, options)
    })
  }

  /**
 * Masquer un point
 * @param {PointAbstrait} A
 * @param {objet} [options] Défaut : { tempo: 0 }
 */
  pointMasquer (...args: (PointAbstrait | OptionsIep)[]) {
    const options: OptionsIep = { tempo: 0 }
    args.filter(arg => !(arg instanceof PointAbstrait)).forEach(option => { // On intègre aux options les paramètres des arguments qui ne sont pas des points
      Object.assign(options, option)
    })
    args.filter(arg => arg instanceof PointAbstrait).forEach(point => {
      this.liste_script.push(`<action id="${point.id}" mouvement="masquer" objet="point" tempo="${options.tempo}" />`)
    })
  }

  /**
 * Montrer un point qui aurait été caché
 * @param {PointAbstrait} A
 * @param {objet} [options] Défaut : { tempo: 0 }
 */
  pointMontrer (A: PointAbstrait, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    this.liste_script.push(`<action id="${A.id}" mouvement="montrer" objet="point" tempo="${options.tempo}" />`)
  }

  /**
   * Anime la translation d'un point
   * @param {PointAbstrait} A
   * @param {number} x Abscisse du point d'arrivée
   * @param {number} y Ordonnée du point d'arrivée
   * @param {objet} [options] Défaut : { tempo: this.tempo, vitesse: this.vitesse }
   */
  pointDeplacer (A: PointAbstrait, x: number, y: number, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    options.vitesse = options.vitesse ?? this.vitesse
    const B = point(x, y)
    this.liste_script.push(`<action abscisse="${this.x(B)}" ordonnee="${this.y(B)}" id="${A.id}" mouvement="translation" objet="point" tempo="${options.tempo}" vitesse="${options.vitesse}" />`)
  }

  /**
   * Ajoute un label au point { dx, dy, couleur = this.couleurPoint, tempo = this.tempo }
   * @param {PointAbstrait} A
   * @param {string} nom
   * @param {objet} [options] dx pour le déplacement vertical du nom du point, dy pour le déplacemetn horizontal, couleur: this.couleurPoint, tempo: this.tempo
   */
  pointNommer (A: PointAbstrait, nom: string, options: OptionsIep = {}) {
    // const coordonneesTexte = ''
    const M = point(A.x, A.y)
    if (options.dx) {
      M.x += options.dx
    }
    if (options.dy) {
      M.y += options.dy
    }
    this.textePoint(`$${nom}$`, M, options, {})
    // this.liste_script.push(`<action couleur="${couleur}" nom="${nom}" id="${A.id}" mouvement="nommer" objet="point" tempo="${tempo}" ${coordonneesTexte} />`)
  }

  /**
 **************************
 ********* COMPAS *********
 **************************
 */

  /**
* Change l'orientation du compas. Par défaut, elle est vers la droite. L'orientation courante du compas est sauvegardée dans this.compas.orientation
* @param {objet} [options] Défaut : { tempo: this.tempo}
*/
  compasRetourner (options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    const codeXML = `<action mouvement="retourner" objet="compas" tempo="${options.tempo}" />`
    if (this.compas.orientation === 'droite') {
      this.compas.orientation = 'gauche'
    } else {
      this.compas.orientation = 'droite'
    }
    this.liste_script.push(codeXML)
  }

  /**
*
* @param {number} longueur écartement en cm
* @param {objet} [options] Défaut : { tempo: this.tempo, vitesse: this.vitesse }
*/
  compasEcarter (l: number, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    options.vitesse = options.vitesse ?? this.vitesse
    const codeXML = `<action ecart="${l * 30}" mouvement="ecarter" objet="compas" tempo="${options.tempo}" vitesse="${options.vitesse}" />`
    this.compas.ecartement = l
    this.liste_script.push(codeXML)
  }

  /**
* Fais apparaitre la règle à l'horizontale, met le compas vertical et écarte le compas le long de la règle pour lire son écartement
* @param {number} longueur
* @param {*} options Défaut : { tempo: this.tempo, vitesse: this.vitesse, sens : this.vitesse / 2 }
*/
  compasEcarterAvecRegle (l: number, options: OptionsIep = {}) {
    this.regleRotation(0, options)
    this.regleMontrer(this.compas.position, options)
    this.regleDeplacer(this.compas.position, options)
    this.compasMontrer(this.compas.position, options)
    this.compasRotation(0, options)
    this.compasEcarter(l, options)
  }

  /**
*
* @param {PointAbstrait} A Pointe du compas
* @param {PointAbstrait} B Mine du compas
* @param {objet} [options] Défaut : { tempo: this.tempo, vitesse: this.vitesse, sens : this.vitesse / 2 }
*/
  compasEcarter2Points (A: PointAbstrait, B: PointAbstrait, options: OptionsIep = {}) {
    this.compasMontrer(A, options)
    this.compasDeplacer(A, options)
    const s = segment(A, B)
    s.isVisible = false
    const angle = s.angleAvecHorizontale
    this.compasRotation(angle, options)
    this.compasEcarter(longueur(A, B), options)
  }

  /**
* Remettre le compas en position standard. Son état est sauvegardé dans le booléen this.compas.leve.
* @param {objet} [options] Défaut : { tempo: this.tempo }
*/
  compasLever (options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    if (!this.compas.leve) { // On ne fait rien si le compas est déjà levé
      const codeXML = `<action mouvement="lever" objet="compas" tempo="${options.tempo} />`
      this.compas.leve = true
      this.liste_script.push(codeXML)
    }
  }

  /**
* Voir le compas en vue de dessus avant qu'il trace un arc de cercle
* @param {objet} [options] Défaut : { tempo: this.tempo }
*/
  compasCoucher (options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    if (this.compas.leve) { // On ne fait rien si le compas est déjà levé
      const codeXML = `<action mouvement="coucher" objet="compas" tempo="${options.tempo}" />`
      this.compas.leve = false
      this.liste_script.push(codeXML)
    }
  }

  /**
* Trace un arc de cercle en gardant l'écartement et le centre actuel. L'angle de départ sera choisi pour être le plus proche de l'angle actuel
* @param {number} angle1
* @param {number} angle2
* @param {objet} [options] Défaut : { tempo: this.tempo, sens: this.vitesse / 2, epaisseur: this.epaisseur, couleur: this.couleurCompas, pointilles: this.pointilles }
* @return {id}
*/
  compasTracerArc2Angles (angle1: number, angle2: number, options: OptionsIep = {}) {
    options.pointilles = options.pointilles ?? this.pointilles
    options.tempo = options.tempo ?? this.tempo
    options.sens = options.sens ?? this.vitesse / 2
    options.epaisseur = options.epaisseur ?? this.epaisseur
    options.couleurCompas = options.couleurCompas ?? this.couleurCompas
    const pointillesTexte = options.pointilles ? 'pointille="tiret"' : ''
    this.idIEP += 1
    if (Math.abs(this.compas.angle - angle1) > Math.abs(this.compas.angle - angle2)) { // On cherche à commencer par le point le plus proche de la position courante du compas
      [angle1, angle2] = [angle2, angle1]
    }
    let codeXML = `<action sens="${options.sens}" angle="${-angle1}" mouvement="rotation" objet="compas" tempo="${options.tempo}" />\n`
    codeXML += '<action mouvement="lever" objet="compas" />\n'
    codeXML += `<action sens="${options.sens}" angle="${-angle1}" mouvement="rotation" objet="compas" />\n`
    let sensTexte
    if (angle2 > angle1) {
      sensTexte = options.sens
    } else {
      sensTexte = -1 * (options.sens)
    }
    codeXML += `<action couleur="${options.couleurCompas}" epaisseur="${options.epaisseur}" sens="${sensTexte}" debut="${-angle1}" fin="${-angle2}" mouvement="tracer" objet="compas"  ${pointillesTexte} id="${this.idIEP}" />\n`
    codeXML += `<action mouvement="coucher" objet="compas" tempo="${options.tempo}"/>`
    this.compas.angle = angle2
    this.liste_script.push(codeXML)
    return this.idIEP
  }

  /**
* Trace un arc de cercle autour d'un point. La longueur de l'arc est déterminée par l'option delta en degré qui est ajoutée de part et d'autre du point
* @param {PointAbstrait} centre
* @param {PointAbstrait} point
* @param {objet} [options] Défaut : { delta: 10, tempo: this.tempo, sens: this.vitesse / 2, epaisseur: this.epaisseur, couleur: this.couleurCompas, pointilles: this.pointilles }
* @return {id}
*/
  compasTracerArcCentrePoint (centre: PointAbstrait, point: PointAbstrait, options: OptionsIep = {}) {
    options.delta = options.delta ?? 10
    this.compasMontrer(this.compas.position, options)
    this.compasDeplacer(centre, options)
    const s = segment(centre, point)
    s.visibility = false
    const angle1 = s.angleAvecHorizontale - options.delta
    const angle2 = s.angleAvecHorizontale + options.delta
    if ((Math.abs(this.compas.ecartement - longueur(this.compas.position, point))) > 0.1) {
      this.compasEcarter(longueur(centre, point), options)
    }
    return this.compasTracerArc2Angles(angle1, angle2, options)
  }

  /**
*
* @param {PointAbstrait} centre
* @param {PointAbstrait} point Point de départ du tracé du cercle
* @param {objet} [options] Défaut : { tempo: this.tempo, sens: this.vitesse / 2, epaisseur: this.epaisseur, couleur: this.couleurCompas, pointilles: this.pointilles }
*/
  compasCercleCentrePoint (centre: PointAbstrait, point: PointAbstrait, options: OptionsIep = {}) {
    this.compasEcarter2Points(centre, point, options)
    const d = droite(centre, point)
    const angle1 = d.angleAvecHorizontale
    this.compasTracerArc2Angles(angle1, angle1 + 360, options)
  }

  /**
 **************************
 ******** REQUERRE ********
 **************************
 */

  /**
   *
   * @param {number} déplacement en nombre de cm (le déplacement peut être positif ou négatif)
   * @param {*} options Défaut : { tempo: this.tempo, vitesse: this.vitesse }
   */
  requerreGlisserEquerre (deplacement: number, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    options.vitesse = options.vitesse ?? this.vitesse
    this.liste_script.push(`<action abscisse="${deplacement * 30}" mouvement="glisser" objet="requerre" tempo="${options.tempo}" vitesse="${options.vitesse}" />`)
  }

  /**
 **************************
 ******* RAPPORTEUR *******
 **************************
 */

  // Non pris en charge par le lecteur JS
  // this.rapporteurCirculaire = function (tempo=this.tempo) {
  // //     this.liste_script.push(`<action mouvement="circulaire" objet="rapporteur" tempo="${tempo}"/>`)
  // }
  // this.rapporteurSemiCirculaire = function (tempo=this.tempo) {
  // //     this.liste_script.push(`<action mouvement="semicirculaire" objet="rapporteur" tempo="${tempo}"/>`)
  // }

  /**
   * Montre ou masque les graduations du rapporteur
   * @param {PointAbstrait} A
   * @param {string} nom
   * @param {objet} [options] Défaut : { tempo: this.tempo }
   */
  // rapporteurGraduations ()

  /**
   * Masque la graduation externe du rapporteur (laisse l'autre graduation visible)
   * @param {objet} [options] Défaut : { tempo: this.tempo }
   */

  rapporteurMasquerGraduationsExterieures (options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    this.liste_script.push(`<action mouvement="masquer_nombres" objet="rapporteur" tempo="${options.tempo}"/>`)
  }

  /**
   * Montre la graduation extérieure si elle avait été précédemment cachée
   * @param {objet} [options] Défaut : { tempo: this.tempo }
   */
  rapporteurMontrerGraduationsExterieures (options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    this.liste_script.push(`<action mouvement="montrer_nombres" objet="rapporteur" tempo="${options.tempo}"/>`)
  }

  /**
   * Masque la graduation interne du rapporteur (laisse l'autre graduation visible)
   * @param {objet} [options] Défaut : { tempo: this.tempo }
   */
  rapporteurMasquerGraduationsInterieures (options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    this.liste_script.push(`<action mouvement="vide" objet="rapporteur" tempo="${options.tempo}"/>`)
  }

  /**
   * Montre la graduation interne si elle avait été précédemment cachée
   * @param {objet} [options] Défaut : { tempo: this.tempo }
   */
  rapporteurMontrerGraduationsInterieures (options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    this.liste_script.push(`<action mouvement="graduations" objet="rapporteur" tempo="${options.tempo}"/>`)
  }

  /**
 * Met le rapporteur en position avec le centre en A et le 0 de droite alogné avec le point B
 * @param {PointAbstrait} A
 * @param {PointAbstrait} B
 * @param {objet} [options] Défaut : { tempo: this.tempo, vitesse: this.vitesse, sens : this.vitesse / 2 }
 */
  rapporteurDeplacerRotation2Points (A: PointAbstrait, B: PointAbstrait, options: OptionsIep = {}) {
    const d = droite(A, B)
    d.isVisible = false
    this.rapporteurMontrer(this.rapporteur.position, options)
    this.rapporteurDeplacer(A, options)
    this.rapporteurRotation(d.angleAvecHorizontale, options)
  }

  /**
 * Fais une petite marque (couleur et épaisseur d'un trait de construction) sur une graduation du rapporteur
 * @param {number} angle
 * @param {objet} [options] Défaut : { tempo: this.tempo, vitesse: this.vitesse, couleur: this.couleurTraitsDeConstruction, epaisseur: this.epaisseurTraitsDeConstruction }
 */
  rapporteurCrayonMarqueAngle (angle: number, options: OptionsIep = {}) {
    const O = this.rapporteur.position
    const distanceBord = this.rapporteur.rayon * this.rapporteur.zoom / 100
    const M = pointAdistance(O, distanceBord, angle + this.rapporteur.angle)
    const N = pointAdistance(O, distanceBord + 0.3, angle + this.rapporteur.angle)
    this.crayonMontrer(this.crayon.position, options)
    this.crayonDeplacer(M, options)
    this.tracer(N, options)
  }

  /**
 * Le crayon va faire une marque sur la graduation du rapporteur, le rapporteur va se cacher et on trace une demi-droite dont on peut choisir la "longueur" (par défaut 90% de celle de la règle)
 * @param {PointAbstrait} A Centre du rapporteur
 * @param {PointAbstrait} B Point avec lequel le 0 de droite sera aligné
 * @param {number} angle
 * @param {objet} [options] { longueur: 0.9 * this.regle.longueur, couleur: this.couleur, tempo: this.tempo, vitesse: this.vitesse, sens : this.vitesse / 2, epaisseur: this.epaisseur, pointilles: this.pointilles }
 */
  rapporteurTracerDemiDroiteAngle (A: PointAbstrait, B: PointAbstrait, angle: number, options: OptionsIep = {}) {
    if (angle > 0) {
      this.rapporteurDeplacerRotation2Points(A, B, options)
      this.rapporteurCrayonMarqueAngle(angle, options)
    } else {
      const B2 = rotation(B, A, 180)
      this.rapporteurDeplacerRotation2Points(A, B2, options)
      this.rapporteurCrayonMarqueAngle(180 - Math.abs(angle), options)
    }
    const d = droite(A, B)
    d.isVisible = false
    const M = pointAdistance(A, this.rapporteur.rayon * this.rapporteur.zoom / 100, d.angleAvecHorizontale + angle)
    this.rapporteurMasquer(options)
    this.regleDemiDroiteOriginePoint(A, M, options)
  }

  /**
 **************************
 ********* REGLE **********
 **************************
 */

  /**
 * Masquer les graduations sur la règle
 * @param {objet} [options] Défaut : { tempo: this.tempo }
 */
  regleMasquerGraduations (options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    this.liste_script.push(`<action mouvement="vide" objet="regle" tempo="${options.tempo}"/>`)
  }

  /**
 * Montrer les graduations sur la règle si elles avaient été masquées
 * @param {objet} [options] Défaut : { tempo: this.tempo }
 */
  regleMontrerGraduations (options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    this.liste_script.push(`<action mouvement="graduations" objet="regle" tempo="${options.tempo}"/>`)
  }

  /**
   * Modifie la taille de la règle
   * @param {number} longueur
   * @param {objet} [options] Défaut : { tempo: this.tempo }
   */
  regleModifierLongueur (longueur = 20, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    this.regle.longueur = longueur
    this.liste_script.push(`<action mouvement="modifier_longueur" objet="regle" longueur="${this.regle.longueur}" tempo="${options.tempo}"/>`)
  }

  /**
 * Trace une demi-droite d'origine O passant par A (ou en direction de A si les points sont trop éloignés)
 * @param {PointAbstrait} O Origine
 * @param {PointAbstrait} A Direction
 * @param {objet} [options] Défaut {longueur: this.regle.longueur, tempo : this.tempo, vitesse: this.vitesse, sens: this.vitesse / 2}
 */
  regleDemiDroiteOriginePoint (O: PointAbstrait, A: PointAbstrait, options: OptionsIep = {}) {
    options.longueur = options.longueur ?? this.regle.longueur
    const M = pointSurSegment(O, A, options.longueur)
    this.regleSegment(O, M, options)
  }

  /**
   * Trace une droite passanrt par les points A et B
   * @param {PointAbstrait} A
   * @param {PointAbstrait} B
   * @param {objet} [options] Défaut {longueur: this.regle.longueur, tempo : this.tempo, vitesse: this.vitesse, sens: this.vitesse / 2}
   */
  regleDroite (A: PointAbstrait, B: PointAbstrait, options: OptionsIep = {}) {
    options.longueur = options.longueur ?? this.regle.longueur
    const M = homothetie(B, A, (-(options.longueur) * 0.5 + longueur(A, B) * 0.5) / longueur(A, B))
    const N = homothetie(A, B, (-(options.longueur) * 0.5 + longueur(A, B) * 0.5) / longueur(A, B))
    if (this.x(A) <= this.x(B)) {
      this.regleMontrer(M)
      this.regleRotation(N, options)
      this.regleSegment(M, N, options)
    } else {
      this.regleMontrer(N)
      this.regleRotation(M, options)
      this.regleSegment(N, M, options)
    }
  }

  /**
 * Avec la règle, on prolonge le segment de l cm du coté de la 2e extrémité si l est positif sinon du côté de la première extrémité
 * @param {PointAbstrait} A
 * @param {PointAbstrait} B
 * @param {objet} [options] Défaut {longueur: this.regle.longueur - 3, tempo: this.tempo, vitesse: this.vitesse, sens: this.vitesse / 2}
 */
  regleProlongerSegment (A: PointAbstrait, B: PointAbstrait, options: OptionsIep = {}) {
    options.longueur = options.longueur ?? (this.regle.longueur - 3)
    const longueur = options.longueur
    if (longueur > 0) {
      const B1 = pointSurSegment(B, A, 3)
      const B2 = pointSurSegment(B, A, -longueur)
      this.regleSegment(B1, B2, options)
    } else {
      const A1 = pointSurSegment(A, B, 3)
      const A2 = pointSurSegment(A, B, longueur)
      this.regleSegment(A1, A2, options)
    }
  }

  /**
 **************************
 ********* TRAITS *********
 **************************
 */

  /**
 * Le crayon trace un trait de sa position courante jusqu'au point B
 * @param {PointAbstrait} B
 * @param {objet} [options] Défaut { tempo: this.tempo, vitesse: this.vitesse, epaisseur: this.epaisseur, couleur: this.couleur, pointilles: this.pointilles, vecteur: false }
 * @return {id} id utilisée pour le tracé
 */
  tracer (B: PointAbstrait, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    options.vitesse = options.vitesse ?? this.vitesse
    options.epaisseur = options.epaisseur ?? this.epaisseur
    options.couleur = options.couleur ?? this.couleur
    options.pointilles = options.pointilles ?? this.pointilles
    const pointillesTexte = options.pointilles ? 'pointille="tiret"' : ''
    const vecteurTexte = options.vecteur ? 'style="vecteur"' : ''
    this.idIEP += 1
    const codeXML = `<action abscisse="${this.x(B)}" ordonnee="${this.y(B)}" epaisseur="${options.epaisseur}" couleur="${options.couleur}" mouvement="tracer" objet="crayon" tempo="${options.tempo}" vitesse="${options.vitesse}"  ${pointillesTexte} ${vecteurTexte} id="${this.idIEP}" />`
    this.crayon.position = B
    this.liste_script.push(codeXML)
    return this.idIEP
  }

  /**
   * Trace au crayon le segment [AB]
   * @param {PointAbstrait} A Première extrémité
   * @param {PointAbstrait} B Deuxième extrémité
   * @param {*} options
   * @return {id} id utilisée pour le tracé
   */
  trait (A: PointAbstrait, B: PointAbstrait, options: OptionsIep = {}) {
    this.crayonDeplacer(A, options)
    return this.tracer(B, options)
  }

  /**
   * Trace au crayon le segment [AB] sans tempo et avec une vitesse multipliée par 1 000
   * @param {PointAbstrait} A Première extrémité
   * @param {PointAbstrait} B Deuxième extrémité
   * @param {*} options
   * @return {id} id utilisée pour le tracé
   */
  traitRapide (A: PointAbstrait, B: PointAbstrait, options: OptionsIep = {}) {
    options.tempo = 0
    options.vitesse = 10000
    this.crayonDeplacer(A, options)
    return this.tracer(B, options)
  }

  /**
 * Masque le trait d'id fourni
 * @param {number} id
 * @param {objet} [options] Défaut : { vitesse: 200 }
 */
  traitMasquer (id: number, options: OptionsIep = {}) {
    options.vitesse = options.vitesse ?? 200
    this.liste_script.push(`<action mouvement="masquer" objet="trait" id="${id}" vitesse="${options.vitesse}" />`)
  }

  /**
   *
   * @param {segment/point} arg1 Segment à tracer ou première extrémité
   * @param {objet/point} arg2 options ou deuxième extrémité
   * @param {objet} [arg3] si les deux premiers arguments étaient des points
   * @returns {id} identifiant utilisé pour le trait
   */
  regleSegment (arg1: Segment | PointAbstrait, arg2?: OptionsIep | PointAbstrait, arg3?: OptionsIep) {
    let A: PointAbstrait, B: PointAbstrait
    let id: number = -1
    let options: OptionsIep = {}
    if (arg1 instanceof Segment) {
      A = arg1.extremite1
      B = arg1.extremite2
      if (arg2 instanceof PointAbstrait) {
        window.notify('regleSegment appelé avec un mauvais jeu d\'arguments (arg1 est un segment mais arg2 est un point)', { arg1, arg2, arg3 })
      } else {
        if (typeof arg2 === 'object') {
          options = arg2
        }
      }
    } else {
      if (arg1 instanceof PointAbstrait && arg2 instanceof PointAbstrait) {
        A = arg1
        B = arg2
      } else {
        window.notify('regleSegment appelé avec un mauvais jeu d\'arguments (arg1 et arg2 ne sont pas des points)', { arg1, arg2, arg3 })
        A = pointAbstrait(0, 0)
        B = pointAbstrait(0, 0)
      }
      if (typeof arg3 === 'object') {
        options = arg3
      }
    }
    if (A.x <= B.x) { // Toujours avoir la règle de gauche à droite
      this.regleMontrer(A, options)
      this.regleRotation(B, options)
    } else {
      this.regleMontrer(B, options)
      this.regleRotation(A, options)
    }
    if (this.crayon != null) {
      if (longueur(this.crayon.position, A) < longueur(this.crayon.position, B)) { // Le crayon ira au point le plus proche
        this.crayonMontrer(A, options)
        id = this.tracer(B, options)
      } else {
        this.crayonMontrer(B, options)
        id = this.tracer(A, options)
      }
    }
    return id
  }

  /**
   * Trace un polygone avec les options par défaut que l'on ne peut pas changer ici
   * @param  {...points} sommets du polygonne séparés par des virgules
   */
  polygoneTracer (...sommets: PointAbstrait[]) {
    for (let i = 0; i < sommets.length - 1; i++) {
      this.regleSegment(sommets[i], sommets[i + 1])
    }
    this.regleSegment(sommets[sommets.length - 1], sommets[0])
  }

  /**
   * Trace un polygone avec traitRapide()
   * @param  {...points} sommets du polygonne séparés par des virgules
   */
  polygoneRapide (...sommets: PointAbstrait[]) {
    if (Array.isArray(sommets) && sommets.length > 2) {
      for (let i = 0; i < sommets.length - 1; i++) {
        this.traitRapide(sommets[i], sommets[i + 1])
      }
      this.traitRapide(sommets[sommets.length - 1], sommets[0])
    } else throw Error(`Pour utiliser polygoneRapide, il faut passer une liste de points ! et pas ça : ${JSON.stringify(sommets)} `)
  }

  /**
 **************************
 ********* TEXTE **********
 **************************
 */

  /**
   * Ecris un texte collé au point. On peut choisir un fond, un cadre, l'opacité du fond, la police...
   * @param {string} texte
   * @param {PointAbstrait} A
   * @param {objet} [optionsTexte] Défaut : { tempo: this.tempo, police: false, couleur: this.couleurTexte, couleurFond, opaciteFond, couleurCadre, epaisseurCadre, marge, margeGauche, margeDroite, margeHaut, margeBas }
   * @return {id}
   */
  textePoint (texte: string, A: PointAbstrait, optionsIep: OptionsIep = {}, optionsTexte: OptionsTexte = {}) {
    optionsIep.tempo = optionsIep.tempo ?? this.tempo
    this.idIEP++
    const policeTexte = optionsTexte.police ? `police="${optionsTexte.police}"` : ''
    let stringOptions = ''
    if (optionsTexte.couleurFond) {
      stringOptions += ` couleur_fond="${optionsTexte.couleurFond}"`
    }
    if (optionsTexte.opaciteFond) {
      stringOptions += ` opacite_fond="${optionsTexte.opaciteFond}"`
    }
    if (optionsTexte.couleurCadre) {
      stringOptions += ` couleur_cadre="${optionsTexte.couleurCadre}"`
    }
    if (optionsTexte.epaisseurCadre) {
      stringOptions += ` epaisseur_cadre="${optionsTexte.epaisseurCadre}"`
    }
    if (optionsTexte.marge) {
      stringOptions += ` marge="${optionsTexte.marge}"`
    }
    if (optionsTexte.margeGauche) {
      stringOptions += ` marge_gauche="${optionsTexte.margeGauche}"`
    }
    if (optionsTexte.margeDroite) {
      stringOptions += ` marge_droite="${optionsTexte.margeDroite}"`
    }
    if (optionsTexte.margeBas) {
      stringOptions += ` marge_bas="${optionsTexte.margeBas}"`
    }
    if (optionsTexte.margeHaut) {
      stringOptions += ` marge_haut="${optionsTexte.margeHaut}"`
    }
    if (optionsTexte.taille) {
      stringOptions += ` taille="${optionsTexte.taille}"`
    }
    let codeXML = `<action abscisse="${this.x(A)}" ordonnee="${this.y(A)}" id="${this.idIEP}" mouvement="creer" objet="texte" />`
    codeXML += `\n<action ${policeTexte} couleur="${optionsTexte.couleur || optionsIep.couleurTexte || this.couleurTexte}" texte="${texte}" id="${this.idIEP}" mouvement="ecrire" objet="texte" ${stringOptions} tempo="${optionsIep.tempo}" />`
    this.liste_script.push(codeXML)
    return this.idIEP
  }

  /**
   * Ecris un texte collé au point de coordonnées (x,y). On peut choisir un fond, un cadre, l'opacité du fond, la police...
   * @param {string} texte
   * @param {number} x Abscisse du coin en haut à gauche
   * @param {number} y Ordonnée du coin en haut à gauche
   * @param {objet} [options] Défaut : { tempo: this.tempo, police: false, couleur: this.couleurTexte, couleurFond, opaciteFond, couleurCadre, epaisseurCadre, marge, margeGauche, margeDroite, margeHaut, margeBas }
   */
  textePosition (texte: string, x: number, y: number, options: OptionsIep = {}, optionsTexte: OptionsTexte = {}) {
    const A = point(x, y)
    return this.textePoint(texte, A, options, optionsTexte)
  }

  longueurSegment (A: PointAbstrait, B: PointAbstrait, dy: number, options: OptionsIep = {}, optionsTexte: OptionsTexte = {}) {
    const l = longueur(A, B)
    const v = vecteur(A, B)
    const w = vecteur(-v.y * dy / norme(v), v.x * dy / norme(v))
    const ancrage = translation(translation(pointSurSegment(A, B, l / 2 - 0.7), w), vecteur(0, 1))
    return this.textePoint(`${l} cm`, ancrage, options, optionsTexte)
  }

  mesureAngle (A: PointAbstrait, O: PointAbstrait, B: PointAbstrait) {
    const a = angleOriente(A, O, B)
    const C = translation(homothetie(rotation(A, O, a / 2), O, 1.3 / longueur(O, A)), vecteur(-0.2, 0.5))
    return this.textePoint(Math.abs(a) + '°', C)
  }

  /**
 * Masque le trait d'id fourni
 * @param {array} id
 * @param {objet} [options] Défaut : { tempo: 0 }
 */
  texteMasquer (...args: (number | OptionsIep)[]) {
    const options: OptionsIep = { tempo: 0 }
    args.filter(arg => !(typeof arg === 'number')).forEach(option => { // On intègre aux options les paramètres des arguments qui ne sont pas des id
      Object.assign(options, option)
    })
    args.filter(arg => typeof arg === 'number').forEach(id => {
      this.liste_script.push(`<action mouvement="masquer" objet="texte" id="${id}" tempo="${options.tempo}" />`)
    })
  }

  /**
   * Change la couleur d'un texte déjà créé dont on donne l'id retourné par this.textePoint ou this.textePosition
   * Nécessité de redonner le texte car on réécrit le texte dans une autre couleur.
   * @param {string} texte
   * @param {number} id
   * @param {string} couleur
   */
  texteChangeCouleur (texte: string, id: number, couleur: string) {
    this.liste_script.push(`\n<action couleur="${couleur}" texte="${texte}" id="${id}" mouvement="ecrire" objet="texte" />`)
  }

  /**
   * Met l'animation en pause forçant l'utilisateur à appuyer sur lecture pour voir la suite
   */
  pause () {
    this.liste_script.push('<action mouvement="pause" />')
  }

  /**
 **************************
 ******* CODAGES **********
 **************************
 */

  /**
   *
   * @param {segment/point} Segment à coder ou première extrémité
   * @param {objet/point} options ou deuxième extrémité
   * @param {objet} [options] si les deux premiers arguments étaient des points. Défaut : { tempo: this.tempo, couleur: this.couleurCodage, codage: '//', }
   * @return {id}
  */
  segmentCodage (arg1: Segment | PointAbstrait, arg2?: OptionsIep | PointAbstrait, arg3?: OptionsIep) {
    let s: Segment
    let options: OptionsIep = {}
    if (arg1 instanceof Segment) {
      s = arg1
      if (arg2 instanceof PointAbstrait) {
        window.notify('segmentCodage appelé avec un mauvais jeu d\'arguments (arg1 est un segment mais arg2 est un point', { arg1, arg2, arg3 })
      } else {
        if (typeof arg2 === 'object') {
          options = arg2
        }
      }
    } else {
      if (arg1 instanceof PointAbstrait && arg2 instanceof PointAbstrait) {
        s = segment(arg1, arg2)
      } else {
        window.notify('segmentCodage appelé avec un mauvais jeu d\'arguments (arg1 et arg2 ne sont pas des points)', { arg1, arg2, arg3 })
        s = segment(pointAbstrait(0, 0), pointAbstrait(0, 0))
      }
      if (typeof arg3 === 'object') {
        options = arg3
      }
    }
    options.tempo = options.tempo ?? this.tempo
    options.couleur = options.couleur ?? this.couleurCodage
    options.codage = options.codage ?? '\\'
    this.idIEP++
    const id = this.idIEP
    const M = milieu(s.extremite1, s.extremite2)
    const codeXML = `<action abscisse="${this.x(M)}" ordonnee="${this.y(M)}" forme="${options.codage}"  couleur="${options.couleur}" id="${id}" tempo="${options.tempo}" mouvement="creer" objet="longueur" />`
    this.liste_script.push(codeXML)
    return id
  }

  /**
   *
   * @param {number} id Identifiant du codage
   * @param {objet} [options] Défaut : { tempo: this.tempo }
   */
  segmentCodageMasquer (id: number, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    this.liste_script.push(`<action id="${id}" mouvement="masquer" objet="longueur" tempo="${options.tempo}" />`)
  }

  /**
   *
   * @param {number} id Identifiant du codage
   * @param {objet} [options] Défaut : { tempo: this.tempo }
   */
  segmentCodageMontrer (id: number, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? this.tempo
    this.liste_script.push(`<action id="${id}" mouvement="montrer" objet="longueur" tempo="${options.tempo}" />`)
  }

  /**
   * Trace le petit carré au crayon
   * @param {PointAbstrait} A Point sur un côté de l'angle
   * @param {PointAbstrait} B Sommet de l'angle
   * @param {PointAbstrait} C Point sur un côté de l'angle
   * @param {objet} [options] Défaut : {longueur : 0.3, couleur: this.couleurCodage}
   * @return {array} [idTrait1, idTrait2]
   */
  codageAngleDroit (A: PointAbstrait, B: PointAbstrait, C: PointAbstrait, options: OptionsIep = {}) {
    options.longueur = options.longueur ?? 0.3
    options.couleur = options.couleur ?? this.couleurCodage
    this.crayonMontrer()
    const C1 = pointSurSegment(B, C, options.longueur)
    const A1 = pointSurSegment(B, A, options.longueur)
    const M = translation2Points(A1, B, C1)
    const options1 = { ...options } // On recopie options pour pouvoir en changer le tempo du premier tracé
    options1.tempo = 0
    const trait1 = this.trait(C1, M, options1)
    const trait2 = this.trait(M, A1, options)
    return [trait1, trait2]
  }

  /**
   * Masque le codage d'un angle droit
   * @param {number} id Identifiant du codage d'un angle droit
   * @param {objet} [options] Défaut { tempo: 0 }
   */
  codageAngleDroitMasquer (id: [number, number], options: OptionsIep = {}) {
    options.tempo = options.tempo ?? 0
    this.traitMasquer(id[0], options)
    this.traitMasquer(id[1], options)
  }

  /**
   * Code un angle. L'option codage peut être "simple", "/", "//", "///", "O"
   * "double", "double/", "double//", "double///", "doubleO"
   * "triple", "triple/", "triple//", "triple///", "tripleO"
   * "plein", "plein/", "plein//", "plein///", "pleinO"
   * @param {PointAbstrait} A Point sur un côté de l'angle
   * @param {PointAbstrait} B Sommet de l'angle
   * @param {PointAbstrait} C Point sur un côté de l'angle
   * @param {objet} [options] Défaut : { rayon : 1, couleur: this.couleurCodage, codage: 'plein'}
   * @return {id} L'identifiant correspond à l'identifiant des 3 points de l'angle séparés par _
   */
  angleCodage (B: PointAbstrait, A: PointAbstrait, C: PointAbstrait, options: OptionsIep = {}) {
    options.couleur = options.couleur ?? this.couleurCodage
    options.codage = options.codage ?? 'plein'
    options.rayon = options.rayon ?? 1
    options.tempo = options.tempo ?? this.tempo
    const id = B.id + '_' + A.id + '_' + C.id
    const d1 = droite(A, B)
    const d2 = droite(A, C)
    d1.isVisible = false
    d2.isVisible = false
    const angle1 = -d1.angleAvecHorizontale
    const angle2 = -d2.angleAvecHorizontale
    const codeXML = `<action abscisse="${this.x(A)}" ordonnee="${this.y(A)}" rayon="${options.rayon * 30}" angle1="${angle1}" angle2="${angle2}" forme="${options.codage}"  couleur="${options.couleur}" id="${id}" tempo="${options.tempo}" mouvement="creer" objet="angle" />`
    this.liste_script.push(codeXML)
    return id
  }

  /**
   * Masque un codage préalablement créé
   * @param {PointAbstrait} A
   * @param {PointAbstrait} B
   * @param {PointAbstrait} C
   * @param {objet} [options] Défaut { tempo: 0 }
   */
  angleCodageMasquer (B: PointAbstrait, A: PointAbstrait, C: PointAbstrait, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? 0
    const id = B.id + '_' + A.id + '_' + C.id
    this.liste_script.push(`<action id="${id}" mouvement="masquer" objet="angle" tempo="${options.tempo}" />`)
  }

  /**
   * Montre un codage préalablement créé
   * @param {PointAbstrait} A
   * @param {PointAbstrait} B
   * @param {PointAbstrait} C
   * @param {objet} [options] Défaut { tempo: 0 }
   */
  angleCodageMontrer (B: PointAbstrait, A: PointAbstrait, C: PointAbstrait, options: OptionsIep = {}) {
    options.tempo = options.tempo ?? 0
    const id = B.id + '_' + A.id + '_' + C.id
    this.liste_script.push(`<action id="${id}" mouvement="montrer" objet="angle" tempo="${options.tempo}" />`)
  }

  /**
   * Affiche une image (donnée par son URL) au point A
   * @param {string} url
   * @returns {id}
   */
  image (url: string, A = point(0, 0)) {
    this.idIEP++
    let codeXML
    codeXML = `<action id="${this.idIEP}" url="${url}" mouvement="chargement" objet="image" />`
    codeXML += `\n<action abscisse="${this.x(A)}" ordonnee="${this.y(A)}" id="${this.idIEP}" mouvement="translation" objet="image" vitesse="100000" />`
    this.liste_script.push(codeXML)
    return this.idIEP
  }
}
