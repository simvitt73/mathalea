import { combinaisonListes } from '../../lib/outils/arrayOutils'
import Exercice from '../Exercice'
import { fixeBordures, mathalea2d } from '../../modules/2dGeneralites'
import { listeQuestionsToContenu, randint } from '../../modules/outils'

import { cube } from '../../lib/3d/3dProjectionMathalea2d/CubeIso'
import { ajouteChampTexteMathLive } from '../../lib/interactif/questionMathLive'
import { handleAnswers } from '../../lib/interactif/gestionInteractif'
import { deuxColonnes } from '../../lib/format/miseEnPage'
import { context } from '../../modules/context'
import { ajouteCanvas3d, type Elements3DDescription } from '../../lib/3d/3d_dynamique/Canvas3DElement'
import { KeyboardType } from '../../lib/interactif/claviers/keyboard'

export const dateDePublication = '03/03/2021'
export const dateDeModificationImportante = '15/07/2025'
export const titre = 'Compter les cubes manquants ou pas'
export const interactifReady = true
export const interactifType = 'mathLive'
export const amcType = 'AMCNum'
export const amcReady = true

/**
 * Compter des cubes dans un empilement de cubes
 * @author Erwan DUPLESSY
 * Source : http://cache.media.education.gouv.fr/file/Geometrie_et_espace/47/1/RA16_C4_MATH_geo_espace_flash_567471.pdf
 * Ajout de la 3D dynamique par Jean-Claude Lhote
 */

export const uuid = '5f115'

export const refs = {
  'fr-fr': ['6G43'],
  'fr-ch': ['9ES7-6']
}
export function empilementCubes (long: number, larg: number, hmax: number) {
  const tabHauteurs = new Array(larg)
  for (let i = 0; i < larg; i++) {
    tabHauteurs[i] = new Array(long)
  }
  // premiere ligne
  for (let i = 0; i < larg; i++) {
    tabHauteurs[i][0] = randint(0, 1)
  }
  // deuxième ligne et suivantes
  for (let i = 0; i < larg; i++) {
    for (let j = 1; j < long; j++) {
      tabHauteurs[i][j] = Math.min(tabHauteurs[i][j - 1] + randint(1, 2), hmax)
    }
  }
  // Vérification Dernière Ligne : ne pas être vide.
  for (let i = 0; i < larg; i++) {
    tabHauteurs[i][long - 1] = Math.max(2, tabHauteurs[i][long - 1])
  }
  // Ajoute les cubes dans un tableau une dimension
  // il faut trier les cubes : x décroissant puis y décroissant, puis z croissant
  const lstCoordonneesCubes = []
  for (let i = larg - 1; i > -1; i = i - 1) {
    for (let j = long - 1; j > -1; j = j - 1) {
      for (let k = 0; k < tabHauteurs[i][j]; k++) {
        lstCoordonneesCubes.push([i, j, k])
      }
    }
  }
  return lstCoordonneesCubes
}

function cubesToSceneContent (lstCoordonneesCubes: number[][]) {
  return lstCoordonneesCubes.map(([x, y, z]) => ({
    type: 'cube' as const,
    pos: [x, z, -y] as [number, number, number],
    size: 1,
    edges: true
  }))
}
function cubesToSceneContentCorr (lstCoordonneesCubes: number[][]) {
  return lstCoordonneesCubes.map(([x, y, z]) => ({
    type: 'cube' as const,
    pos: [3 * x, z, -y] as [number, number, number],
    size: 1,
    edges: true
  }))
}
export default class DenombrerCubes extends Exercice {
  constructor () {
    super()
    this.besoinFormulaireNumerique = ['Type de questions', 3, '1 : Compter les cubes\n2 : Compter les cubes manquants\n3 : Mélange']
    this.besoinFormulaire4Numerique = ['Volume', 2, '1 : Volume en cubes\n2 : Volume en cm³\n']
    this.besoinFormulaire2Numerique = ["Taille de l'empilement", 5, 'De taille 3\nDe taille 4\nDe taille 5\nDe taille 6\nDe taille 7']
    this.besoinFormulaire3CaseACocher = ['3D dynamique', false]
    this.sup3 = false
    this.nbQuestions = 3 // Ici le nombre de questions

    this.sup = 1 // A décommenter : valeur par défaut d'un premier paramètre
    this.sup2 = 1 // A décommenter : valeur par défaut d'un deuxième paramètre
  // c'est ici que commence le code de l'exercice cette fonction crée une copie de l'exercice
  }

  nouvelleVersion () {
    let typesDeQuestionsDisponibles: number[] = [] // tableau à compléter par valeurs possibles des types de questions
    switch (this.sup) {
      case 1:
        typesDeQuestionsDisponibles = [1]
        break
      case 2:
        typesDeQuestionsDisponibles = [2]
        break
      case 3:
        typesDeQuestionsDisponibles = [1, 2]
        break
    }
    const unitesCubes = this.sup4 === 1

    const listeTypeDeQuestions = combinaisonListes(typesDeQuestionsDisponibles, this.nbQuestions)
    const longueur = 2 + parseInt(this.sup2) // longueur de l'empilement
    const largeur = longueur // largeur de l'empilement
    const hauteur = longueur // hauteur de l'empilement

    for (let q = 0, texte, texteCorr, cpt = 0; q < this.nbQuestions && cpt < 50;) {
      const L = empilementCubes(longueur, largeur, hauteur) // crée un empilement aléatoire
      texteCorr = '' // Idem pour le texte de la correction.
      let figure = ''
      let figureCorrection = ''

      if (!this.sup3 || !context.isHtml) {
        texte = 'Un empilement de cubes est représenté ci-dessous sous deux angles différents. <br>' // Nous utilisons souvent cette variable pour construire le texte de la question.

        const objetsCorrection = [] // Idem pour la correction
        const objetsEnonce = []
        const objetsEnonce2 = []

        let cosa, cosb, sina, sinb
        const alpha1 = 10 // choix de la projection
        const beta1 = -40// choix de la projection
        const alpha2 = 35// choix de la projection
        const beta2 = -20 // choix de la projection
        for (let i = 0; i < L.length; i++) {
          objetsEnonce.push(...cube(L[i][0], L[i][1], L[i][2], alpha1, beta1, {}).c2d)
        }

        for (let i = 0; i < L.length; i++) {
          objetsEnonce2.push(...cube(L[i][0], L[i][1], L[i][2], alpha2, beta2, {}).c2d)
        }
        for (let i = 0; i < L.length; i++) {
          objetsCorrection.push(...cube(3 * L[i][0], L[i][1], L[i][2], alpha2, beta2, {}).c2d)
        }
        cosa = Math.cos(alpha1 * Math.PI / 180)
        sina = Math.sin(alpha1 * Math.PI / 180)
        cosb = Math.cos(beta1 * Math.PI / 180)
        sinb = Math.sin(beta1 * Math.PI / 180)
        const paramsEnonce = Object.assign({
          pixelsParCm: 20,
          scale: 0.6,
          mainlevee: false,
          style: 'display: inline'
        }, fixeBordures(objetsEnonce))

        cosa = Math.cos(alpha2 * Math.PI / 180)
        sina = Math.sin(alpha2 * Math.PI / 180)
        cosb = Math.cos(beta2 * Math.PI / 180)
        sinb = Math.sin(beta2 * Math.PI / 180)
        const paramsEnonce2 = Object.assign({
          pixelsParCm: 20,
          scale: 0.6,
          mainlevee: false,
          style: 'display: inline'
        }, fixeBordures(objetsEnonce2))
        const paramsCorrection = {
          xmin: -sina * largeur - 0.5,
          ymin: -0.5,
          xmax: cosa * longueur * 3 + 0.5,
          ymax: -sina * sinb * longueur * 1.5 - cosa * sinb * largeur + cosb * hauteur * 1.5 + 0.5,
          pixelsParCm: 20,
          scale: 0.6,
          mainlevee: false,
          style: 'display: inline'
        }
        figure = deuxColonnes(mathalea2d(paramsEnonce, objetsEnonce), mathalea2d(paramsEnonce2, objetsEnonce2))
        figureCorrection = mathalea2d(paramsCorrection, objetsCorrection)
      } else {
        texte = 'Un empilement de cubes est représenté ci-dessous (on peut faire tourner l\'empilement). <br>' // Nous utilisons souvent cette variable pour construire le texte de la question.

        const objects: Elements3DDescription[] = cubesToSceneContent(L)
        const objectsCorr: Elements3DDescription[] = cubesToSceneContentCorr(L)
        objects.push({ type: 'ambientLight' as const, color: 0xffffff, intensity: 0.8 },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 1.2, position: [1, 0, 0] },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 1.2, position: [0, 1, 0] },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 1.2, position: [0, 0, 1] },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 0.6, position: [-1, 0, 0] },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 0.6, position: [0, -1, 0] },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 0.6, position: [0, 0, -1] }
        )
        objectsCorr.push({ type: 'ambientLight' as const, color: 0xffffff, intensity: 0.8 },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 1.2, position: [1, 0, 0] },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 1.2, position: [0, 1, 0] },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 1.2, position: [0, 0, 1] },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 0.6, position: [-1, 0, 0] },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 0.6, position: [0, -1, 0] },
          { type: 'directionalLight' as const, color: 0xffffff, intensity: 0.6, position: [0, 0, -1] }
        )
        const content = {
          objects,
          autoCenterZoomMargin: 1.2
        }
        const contentCorr = {
          objects: objectsCorr,
          autoCenterZoomMargin: 1
        }
        const sceneId = `scene3dEx${this.numeroExercice}Q${q}`
        figure = ajouteCanvas3d({ id: sceneId, content, width: 300, height: 300 })

        figureCorrection = ajouteCanvas3d({ id: `${sceneId}Correction`, content: contentCorr, width: 400, height: 400 })
      }
      // début de l'exercice
      texte += unitesCubes
        ? 'L\'unité de volume étant le cube, '
        : 'Les cubes ayant des arêtes de $1\\text{cm}$ de longueur, '
      switch (listeTypeDeQuestions[q]) {
        case 1:
          texte += unitesCubes
            ? 'combien de petits cubes contient cet empilement de cubes ?' + ajouteChampTexteMathLive(this, q, '')
            : 'quel est le volume en $\\text{cm}^3$ de cet empilement de cubes ?' + ajouteChampTexteMathLive(this, q, KeyboardType.volume)
          texte += '<br>' + figure
          // correction :
          texteCorr += "On peut représenter l'empilement par tranches : <br>"
          texteCorr += figureCorrection + '<br>'
          texteCorr += `Il y a au total ${L.length} cubes.`
          handleAnswers(this, q, { reponse: { value: L.length, options: unitesCubes ? {} : { unite: true } } })
          break
        case 2:
          texte += unitesCubes
            ? `combien de petits cubes manque-t-il pour reconstruire un grand cube de $${longueur}\\text{cm}$ d'arête ?` + ajouteChampTexteMathLive(this, q, '')
            : `quel volume en $\\text{cm}^3$ manque-t-il pour reconstruire un cube de $${longueur}\\text{cm}$ d'arête ?` + ajouteChampTexteMathLive(this, q, KeyboardType.volume)
          texte += '<br>' + figure
          // correction :
          texteCorr += "On peut, par exemple, représenter l'empilement par tranches : <br>"
          texteCorr += figureCorrection + '<br>'
          texteCorr += unitesCubes
            ? `Il y a au total $${L.length}$ cubes. On en veut $${longueur}\\times ${largeur} \\times ${hauteur} = ${longueur * largeur * hauteur}$. <br>`
            : `Il y a au total $${L.length}$ cm³. On en veut $${longueur}\\text{cm} \\times ${largeur}\\text{cm} \\times ${hauteur}\\text{cm} = ${longueur * largeur * hauteur}\\text{cm}^3$. <br>`
          texteCorr += unitesCubes
            ? `Il manque $${longueur * largeur * hauteur - L.length}$ cubes.`
            : `Il manque $${longueur * largeur * hauteur - L.length}$ cm³.`
          handleAnswers(this, q, { reponse: { value: longueur * largeur * hauteur - L.length, options: unitesCubes ? {} : { unite: true } } })
          break
      }
      if (this.questionJamaisPosee(q, JSON.stringify(L))) { // Si la question n'a jamais été posée, on la stocke dans la liste des questions
        // Si la question n'a jamais été posée, on la stocke dans la liste des questions
        this.listeQuestions[q] = texte
        this.listeCorrections[q] = texteCorr
        q++
      }
      cpt++
    }

    listeQuestionsToContenu(this) // On envoie l'exercice à la fonction de mise en page
  }
}
