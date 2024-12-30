import { Point, point, pointAdistance } from '../../lib/2d/points'
import { triangle2points2longueurs } from '../../lib/2d/triangle'
import { barycentre, nommePolygone } from '../../lib/2d/polygones'
// import { angle, angleOriente, codageAngle, codageAngleDroit } from '../../lib/2d/angles'
import { angleOriente, codageAngle } from '../../lib/2d/angles'
import { afficheLongueurSegment } from '../../lib/2d/codages'
// import { longueur, segment, vecteur } from '../../lib/2d/segmentsVecteurs'
import { longueur, vecteur } from '../../lib/2d/segmentsVecteurs'
import { fixeBordures, mathalea2d } from '../../modules/2dGeneralites'
import { creerNomDePolygone } from '../../lib/outils/outilString'
import { similitude, translation } from '../../lib/2d/transformations'
import { deuxColonnesResp } from '../../lib/format/miseEnPage'

import Exercice from '../Exercice'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import { shuffle, shuffleLettres } from '../../lib/outils/arrayOutils'
import { texNombre } from '../../lib/outils/texNombre'
import { handleAnswers } from '../../lib/interactif/gestionInteractif' // fonction qui va préparer l'analyse de la saisie
import { remplisLesBlancs } from '../../lib/interactif/questionMathLive' // fonctions de mise en place des éléments interactifs
import { context } from '../../modules/context'
import { KeyboardType } from '../../lib/interactif/claviers/keyboard'

export const interactifReady = true // pour définir qu'exercice peut s'afficher en mode interactif.
export const interactifType = 'mathLive'

export const titre = 'Calculer des longueurs avec des triangles semblables'
export const dateDePublication = '30/12/2024' // La date de publication initiale au format 'jj/mm/aaaa' pour affichage temporaire d'un tag

export const uuid = '58a64'
export const refs = {
  'fr-fr': ['3G24-2'],
  'fr-ch': []
}
/**
 * calcul de longueurs avec des triangles semblables
 * @author Olivier Mimeau
*/
export default class nomExercice extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 3
  }

  nouvelleVersion () {
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      const listeDeNomsDePolygones: string[] = []
      let texte = ''
      let texteCorr = ''
      // longueurAB, longueurAC, longueurBC, coeff : dimension triangle 1 et coefficient de proportionalité
      let coeff = randint(5, 25, [10, 11, 9])
      let longueurAB : number
      let longueurAC: number
      let longueurBC : number
      if (coeff % 5 === 0) {
        longueurAB = randint(20, 40)
        longueurAC = randint(25, 45, longueurAB)
        longueurBC = randint(30, Math.min(longueurAB + longueurAC - 10,55), [longueurAB, longueurAC])
        longueurAB /= 5
        longueurAC /= 5
        longueurBC /= 5
      } else {
        longueurAB = randint(4, 8)
        longueurAC = randint(5, 9, longueurAB)
        longueurBC = randint(6, Math.min(longueurAB + longueurAC - 2,11), [longueurAB, longueurAC])
      }
      coeff /= 10
      const motAgrandissementReduction = coeff > 1 ? 'd\'agrandissement' : 'de réduction'
      const A = point(0, 0)
      const B = pointAdistance(A, longueurAB)
      const p1 = triangle2points2longueurs(A, B, longueurAC, longueurBC)
      const C = p1.listePoints[2]
      // deuxieme triangle par similitude on peut effectuer dessus car les figures sont séparée à l'affichage
      const O = barycentre(p1)
      const angle = randint(70, 220 - coeff * 20) 
      const p2 = similitude(p1, O, angle, coeff)
      const D = p2.listePoints[0]
      const E = p2.listePoints[1]
      const F = p2.listePoints[2]
      // shuffle... : afin d'avoir un codage qui ne suit pas d'ordre precis
      const codeAnglesHomologues = shuffle(['|', '||', 'X'])
      const codeAngleA = codageAngle(B, A, C, 0.8, codeAnglesHomologues[0])
      const codeAngleD = codageAngle(E, D, F, 0.8, codeAnglesHomologues[0])
      const codeAngleB = codageAngle(A, B, C, 0.8, codeAnglesHomologues[1])
      const codeAngleE = codageAngle(D, E, F, 0.8, codeAnglesHomologues[1])
      const codeAngleC = codageAngle(B, C, A, 0.8, codeAnglesHomologues[2])
      const codeAngleF = codageAngle(E, F, D, 0.8, codeAnglesHomologues[2])
      // affiche la longueur à l'exterieur du triangle
      const codeAB = angleOriente(C, A, B) > 0 ? afficheLongueurSegment(A, B) : afficheLongueurSegment(B, A)
      const codeAC = angleOriente(B, C, A) > 0 ? afficheLongueurSegment(C, A) : afficheLongueurSegment(A, C)
      const codeBC = angleOriente(A, B, C) > 0 ? afficheLongueurSegment(B, C) : afficheLongueurSegment(C, B)
      const codeDE = angleOriente(F, D, E) > 0 ? afficheLongueurSegment(D, E) : afficheLongueurSegment(E, D)
      // shuffleLettres : afin d'avoir l'ordre alphabetique mais pas pour les points homologues
      const nom1 = shuffleLettres(creerNomDePolygone(3, listeDeNomsDePolygones))
      listeDeNomsDePolygones.push(nom1)
      const nom2 = shuffleLettres(creerNomDePolygone(3, listeDeNomsDePolygones))
      listeDeNomsDePolygones.push(nom2)
      const nommeP1 = nommePolygone(p1, nom1)
      const nommeP2 = nommePolygone(p2, nom2)
      const objetsAAfficher1 = [p1, codeAngleA, codeAngleB, codeAngleC, codeAB, codeAC, codeBC, nommeP1]
      const objetsAAfficher2 = [p2, codeAngleD, codeAngleE, codeAngleF, codeDE, nommeP2]
// preparer la sortie PDF et HTML des figures
      let scaleDessin1=0.5 // sert pour sortie PDF
      let scaleDessin2=scaleDessin1 
      let pixelsParCmDessin2=20// sert pour sortie HTML
      const tailleMaxLargeurFigure = 9 // en unite sert pour sortie PDF
      const tailleMaxhauteurFigure = 7 // en unite sert pour sortie PDF
      const tailleMinFigure = 3
      const largeurCol=50 // en % sert pour sortie PDF et HTML ?
      // calculs ici pour assurer un affichage PDF des figures compris entre tailleMinFigure en tailleMaxFigure
      // l'idee est de garder scaleDessin1=scaleDessin2 si possible
      const bord1=fixeBordures(objetsAAfficher1,{ rxmin: -0.1,  rymin: -0.1, rxmax: 0.1, rymax: 0.1 })
      const bord2=fixeBordures(objetsAAfficher2,{ rxmin: -0.1,  rymin: -0.1, rxmax: 0.1, rymax: 0.1 })
      const bord1Largeur=bord1.xmax-bord1.xmin
      const bord1hauteur=bord1.ymax-bord1.ymin
      const bord2Largeur=bord2.xmax-bord2.xmin
      const bord2hauteur=bord2.ymax-bord2.ymin
      if (bord2Largeur*scaleDessin2>tailleMaxLargeurFigure) {
        scaleDessin2=tailleMaxLargeurFigure/bord2Largeur
        scaleDessin1=scaleDessin2
      }
      if (bord2hauteur*scaleDessin2>tailleMaxhauteurFigure) {
        scaleDessin2=tailleMaxhauteurFigure/bord2hauteur
        scaleDessin1=scaleDessin2
      }
      if (Math.min(bord2hauteur,bord2Largeur)*scaleDessin2<tailleMinFigure) {
        scaleDessin2=tailleMinFigure/Math.min(bord2hauteur,bord2Largeur)
        scaleDessin1=scaleDessin2
      }
      if (bord1Largeur*scaleDessin1>tailleMaxLargeurFigure) { scaleDessin1=tailleMaxLargeurFigure/bord1Largeur  }
      if (bord1hauteur*scaleDessin1>tailleMaxhauteurFigure) { scaleDessin1=tailleMaxhauteurFigure/bord1hauteur  }
      if (Math.min(bord1hauteur,bord1Largeur)*scaleDessin1<tailleMinFigure) {scaleDessin1=tailleMinFigure/Math.min(bord1hauteur,bord1Largeur) }
      if (Math.max(bord2hauteur,bord2Largeur)>15) {   pixelsParCmDessin2=20-(Math.max(bord2hauteur,bord2Largeur)*7/26 ) } // decroissant à partir de 20 à 13
// fin de  preparer la sortie PDF et HTML des figures
      const colonne1 = mathalea2d(
        Object.assign({ pixelsParCm: 20,scale: scaleDessin1, optionsTikz: ['baseline=(current bounding box.north)'], mainlevee: false },
          bord1), objetsAAfficher1)
      const colonne2 = mathalea2d(
        Object.assign({ pixelsParCm: pixelsParCmDessin2,scale: scaleDessin2, optionsTikz: ['baseline=(current bounding box.north)'], mainlevee: false },
          bord2), objetsAAfficher2)
      if (this.interactif && context.isHtml) {
        texte += `Donner les longueurs des segments $[${D.nom}${F.nom}]$ et $[${E.nom}${F.nom}]$.<br>`
        texte += deuxColonnesResp(colonne1, colonne2, {
          largeur1: largeurCol,
          eleId: '',
          widthmincol1: '0',
          widthmincol2: '0'
        })
        texte += '<br><br><em>Il ne faut pas saisir d\'unité.</em> <br>'
        texte += remplisLesBlancs(this, i, `${D.nom}${F.nom} =  %{champ1}` + ' cm ' + `${E.nom}${F.nom} =  %{champ2}` + ' cm', KeyboardType.clavierNumbers, '\\ldots\\ldots')
        handleAnswers(this, i, {
          bareme: (listePoints) => [listePoints[0] + listePoints[1], 2],
          champ1: { value: texNombre(longueurAC * coeff, 1) },
          champ2: { value: texNombre(longueurBC * coeff, 1) }
        })
      } else {
        texte += `Calculer les longueurs des segments $[${D.nom}${F.nom}]$ et $[${E.nom}${F.nom}]$. Justifier.<br>`
        texte += deuxColonnesResp(colonne1, colonne2, {
          largeur1: largeurCol,
          eleId: '',
          widthmincol1: '0',
          widthmincol2: '0'
        })
      }
      texteCorr = rediger(A, B, C, D, E, F)
      texteCorr += `Le coefficient ${motAgrandissementReduction} est égal à $${texNombre(longueur(D, E), 1)} \\div  ${texNombre(longueurAB, 1)} = ${texNombre(coeff, 1)}$.<br>`
      texteCorr += `donc $${D.nom}${F.nom} = ${texNombre(coeff, 1)} \\times ${A.nom}${C.nom} = ${texNombre(coeff, 1)} \\times ${texNombre(longueurAC, 1)} = ${texNombre(longueurAC * coeff, 1)}$ cm.<br>`
      texteCorr += `donc $${E.nom}${F.nom} = ${texNombre(coeff, 1)} \\times ${B.nom}${C.nom} = ${texNombre(coeff, 1)} \\times ${texNombre(longueurBC, 1)} = ${texNombre(longueurBC * coeff, 1)}$ cm.`

      if (this.questionJamaisPosee(i, texte, longueurAB, longueurAC, longueurBC, coeff)) {
        this.listeQuestions[i] = texte
        this.listeCorrections[i] = texteCorr
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}

function rediger (A: Point, B: Point, C: Point, D: Point, E: Point, F: Point): string {
  let redaction = `$\\widehat{${A.nom + B.nom + C.nom}}$ = $\\widehat{${D.nom + E.nom + F.nom}}$.<br>`
  redaction += `$\\widehat{${C.nom + A.nom + B.nom}}$ = $\\widehat{${F.nom + D.nom + E.nom}}$.<br>`
  redaction += `$\\widehat{${B.nom + C.nom + A.nom}}$ = $\\widehat{${E.nom + F.nom + D.nom}}$.<br>`
  redaction += 'Les 3 paires d\'angles sont égales. Comme les angles sont égaux deux à deux, les deux triangles sont semblables.<br>'
  redaction += `Les longueurs ${D.nom}${E.nom}, ${D.nom}${F.nom} et ${E.nom}${F.nom} sont donc proportionnelles à ${A.nom}${B.nom}, ${A.nom}${C.nom} et ${B.nom}${C.nom} respectivement.<br>`
  return redaction
}
