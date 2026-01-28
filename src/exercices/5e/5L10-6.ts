import { point } from '../../lib/2d/PointAbstrait'
import { segment } from '../../lib/2d/segmentsVecteurs'
import { polygone } from '../../lib/2d/polygones'
import {texteSurSegment} from '../../lib/2d/texteSurSegment'
import {codageSegment} from '../../lib/2d/CodageSegment'
import {codageAngleDroit} from '../../lib/2d/CodageAngleDroit'
import { choice } from '../../lib/outils/arrayOutils'
import { miseEnEvidence } from '../../lib/outils/embellissements'
import { context } from '../../modules/context'
import { mathalea2d } from '../../modules/mathalea2d'
import { listeQuestionsToContenu, randint } from '../../modules/outils'
import Exercice from '../Exercice'
export const titre = "Produire une formule à partir d'une figure géométrique"

/**
 * * Traduire la dépendance des grandeurs et produire une formule.
 * @author François-Rémi Zawadzki
 */

export const uuid = 'b3643'

export const refs = {
  'fr-fr': ['5L10-6'],
}


export default class perimetreVersFormule extends Exercice {
  constructor() {
    super()
    this.besoinFormulaireNumerique = [
      'Nombre de figures', // text
      5, // max 
    ]

    this.besoinFormulaire2Numerique = [
      'Nombre d\'inconnues', // text
      3, //max
      '1 inconnue\n2 inconnues\nMélange' //tooltip
    ]

    this.sup = 3
    this.sup2 = 1
    this.nbQuestions = 1

    context.isHtml ? (this.spacing = 3) : (this.spacing = 2)
    context.isHtml ? (this.spacingCorr = 2.5) : (this.spacingCorr = 1)
  }

  nouvelleVersion() {
    for (
      let i = 0, texte, texteCorr, cpt = 0;
      i < this.nbQuestions && cpt < 50;

    ) {

      const listeLettres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      
      var nombreFigures = this.sup
      
      const cote1 = choice(listeLettres)
      const cote2 = choice(listeLettres, [cote1])
      const coteLettre = [cote1, cote2]

      var inconnueId = [true, false]

      if (this.sup2 === 1){
        inconnueId = choice([[true, false], [false,true]])
      }
      else if (this.sup2 === 2){
        inconnueId = [true, true]
      }
      else if (this.sup2 === 3){
        inconnueId = choice([[true,false], [false,true], [true,true], [true, true]])
      }

      const coteValueConnu = [randint(2,8), randint(2,8)]

      const coteValueDraw = [1.5, 3] // utile uniquement pour le tracé de la légende
      
      const codageString = ['|', '||']

      var appels2D = []
      
      // pour tracer les figures, on crée d'abord les fonctions utiles

      var drawLegend = function() {
        var a1 = point(0,3)
        var a2 = point(coteValueDraw[0],3)
        var b1 = point(0,1)
        var b2 = point(coteValueDraw[1],1)

        appels2D.push(segment(a1,a2))
        if (inconnueId[0]){
          appels2D.push(texteSurSegment('$'+coteLettre[0]+'$', a1, a2, 'black', 0.8))
        }
        else {
          appels2D.push(texteSurSegment('$'+coteLettre[0]+'='+coteValueConnu[0]+'$', a1, a2, 'black', 0.8))
        }
        appels2D.push(codageSegment(a1, a2, codageString[0], 'black', 0.8))
        appels2D.push(segment(b1,b2))
        if (inconnueId[1]){
          appels2D.push(texteSurSegment('$'+coteLettre[1]+'$', b1, b2, 'black', 0.8))
        }
        else {
          appels2D.push(texteSurSegment('$'+coteLettre[1]+'='+coteValueConnu[1]+'$', b1, b2, 'black', 0.8))
        }
        appels2D.push(codageSegment(b1,b2, codageString[1], 'black', 0.8))
      }
      
      var drawRectangle = function(x, id0=0, id1=0) {
        var y = 4
        var theta = (Math.random() * 0.3 - 0.15) * Math.PI
        
        var l0 = coteValueDraw[id0]
        var l1 = coteValueDraw[id1]
        var cs0 = codageString[id0]
        var cs1 = codageString[id1]

        var A = point(x, y)
        var B = point(A.x+Math.cos(theta)*l0, A.y+Math.sin(theta)*l0)
        var C = point(B.x + Math.sin(theta) * l1, B.y - Math.cos(theta)*l1)
        var D = point(C.x - Math.cos(theta)*l0, C.y - Math.sin(theta)*l0)
        appels2D.push(polygone(A,B,C,D))
        appels2D.push(codageSegment(A,B,cs0, 'black', 0.8))
        appels2D.push(codageSegment(B,C,cs1, 'black', 0.8))
        appels2D.push(codageSegment(C,D,cs0, 'black', 0.8))
        appels2D.push(codageSegment(D,A,cs1, 'black', 0.8))

        return Math.max(A.x, B.x, C.x, D.x)
      }

      var drawTriangle = function(x, id0, id1) {
        var y = 2 / coteValueDraw[id0]
        var theta = (Math.random() * 0.3 - 0.15) * Math.PI
        
        var l = coteValueDraw[id0]
        var cs = codageString[id0]

        var A = point(x, y)
        var B = point(A.x+Math.cos(theta)*l, A.y+Math.sin(theta)*l)
        var C = point(A.x+Math.cos(theta+Math.PI/3)*l, A.y+Math.sin(theta+Math.PI/3)*l)

        appels2D.push(polygone(A,B,C))
        appels2D.push(codageSegment(A,B,cs,'black',0.8))
        appels2D.push(codageSegment(B,C,cs,'black',0.8))
        appels2D.push(codageSegment(A,C,cs,'black',0.8))

        return Math.max(A.x, B.x, C.x)
      } 

      var drawHexagone = function(x, id0=0, id1=1) {
        var y = 3.5
        var theta = (Math.random() * 0.3 - 0.15) * Math.PI
        theta = 0        
        var phi = 0 * Math.PI
        var khi = -0.1 * Math.PI

        var l0 = coteValueDraw[id0]
        var l1 = coteValueDraw[id1]
        var cs0 = codageString[id0]
        var cs1 = codageString[id1]

        var A = point(x,y)
        var B = point(A.x+Math.cos(theta)*l1,A.y+Math.sin(theta)*l1)
        var E = point(A.x + Math.sin(theta)*l0, A.y - Math.cos(theta)*l0)
        var D = point(E.x + Math.cos(theta)*l1, E.y+Math.sin(theta)*l1)

        if (id0===0 && id1===1){
          var C = point(B.x - Math.cos(theta+Math.PI*(1/2-1/3))*l0, B.y - Math.sin(theta+Math.PI*(1/2-1/3))*l0)
        }
        else {
          var C = point(B.x + Math.cos(theta+Math.PI*(1/2-1/3))*l0, B.y - Math.sin(theta+Math.PI*(1/2-1/3))*l0)
        }

        appels2D.push(polygone(A,B,C,D,E))
        appels2D.push(codageSegment(A,B,cs1, 'black', 0.8))
        appels2D.push(codageSegment(B,C,cs0, 'black', 0.8))
        appels2D.push(codageSegment(C,D,cs0, 'black', 0.8))
        appels2D.push(codageSegment(D,E,cs1, 'black', 0.8))
        appels2D.push(codageSegment(E,A,cs0, 'black', 0.8))

        return Math.max(A.x, B.x, C.x, D.x, E.x)
      }

      // On trace la figure
      // on prépare la fenetre mathalea2d
      const fenetreMathalea2D = {
        xmin: 0,
        ymin: -1,
        xmax: 30,
        ymax: 6,
        pixelsParCm: 20,
        scale: 0.5,
      }
      
      // on trace la légende
      drawLegend()
      
      // on trace nombreFigures figures
      var x = 4
      var nombreCotes = [0, 0]
      for (let iFigure=0; iFigure<nombreFigures; iFigure++) {
        var selectDraw = choice(['rectangle01', 'rectangle10', 'carre0', 'carre1', 'triangle0', 'triangle1', 'hexagone01', 'hexagone10'])

        var dictDraw = {'rectangle01':{f:drawRectangle, id0:0, id1:1, n0:2, n1:2},
                        'rectangle10':{f:drawRectangle, id0:1, id1:0, n0:2, n1:2},
                        'carre0':{f:drawRectangle, id0:0, id1: 0, n0:4, n1:0},
                        'carre1':{f:drawRectangle, id0:1, id1:1, n0:0, n1:4},
                        'triangle0':{f:drawTriangle, id0:0, id1:1, n0:3, n1:0},
                        'triangle1':{f:drawTriangle, id0:1, id1:1, n0:0, n1:3},
                        'hexagone01':{f:drawHexagone, id0:0, id1:1, n0:3, n1:2},
                        'hexagone10':{f:drawHexagone, id0:1, id1:0, n0:2, n1:3},
        }
        
        var dictDrawValue = dictDraw[selectDraw]
        x = dictDrawValue.f(x+1, dictDrawValue.id0, dictDrawValue.id1)
        nombreCotes[0] += dictDrawValue.n0
        nombreCotes[1] += dictDrawValue.n1
      }      
      
      // on trace pour de bon
      const figure = mathalea2d(fenetreMathalea2D, appels2D)

      var finEnonce = ''
      var coteLettreString = [coteLettre[0], coteLettre[1]]
      var detailCalcul = `$${nombreCotes[0]} \\times ${coteLettre[0]} + ${nombreCotes[1]} \\times ${coteLettre[1]}`

      if (inconnueId[0] === true && inconnueId[1] === true){
        finEnonce += '$'+coteLettre[0]+'$ et de $'+coteLettre[1]+'$ ?'
        detailCalcul += '='+miseEnEvidence(`${nombreCotes[0]} ${coteLettre[0]} + ${nombreCotes[1]} ${coteLettre[1]}`) 
      }
      else if(inconnueId[0] === true && inconnueId[1] === false){
        finEnonce += '$'+coteLettre[0]+'$ ?'
        coteLettreString[1] += '=' + coteValueConnu[1]
        detailCalcul += `=${nombreCotes[0]} \\times ${coteLettre[0]} + ${nombreCotes[1]} \\times ${coteValueConnu[1]}` 
        detailCalcul += '='+miseEnEvidence(`${nombreCotes[0]} ${coteLettre[0]} + ${nombreCotes[1] * coteValueConnu[1]}`) 
      }
      else if (inconnueId[0] === false && inconnueId[1] === true){
        finEnonce += '$'+coteLettre[1]+'$ ?'
        coteLettreString[0] += '=' + coteValueConnu[0]
        detailCalcul += `=${nombreCotes[0]} \\times ${coteValueConnu[0]} + ${nombreCotes[1]} \\times ${coteLettre[1]}`
        detailCalcul += '='+miseEnEvidence(`${nombreCotes[0] * coteValueConnu[0]} + ${nombreCotes[1]} ${coteLettre[1]}`) 
      }

      detailCalcul += '$'
      var enonce = `
On considère l'ensemble de figures ci-dessous :<br>
${figure}

Quelle formule permet de calculer le périmètre de l'ensemble des figures en fonction de ${finEnonce}`

      var correction = `
Pour calculer le périmètre d'une figure, on additionne les longueurs de tous les côtés.<br>
On compte $${nombreCotes[0]}$ côtés $${coteLettreString[0]}$ et $${nombreCotes[1]}$ côtés $${coteLettreString[1]}$.<br>
Ainsi, le périmètre global est : ` + detailCalcul

      if (this.questionJamaisPosee(i, enonce)) {
        // <- laisser le i et ajouter toutes les variables qui rendent les exercices différents (par exemple a, b, c et d)
        this.listeQuestions[i] = enonce
        this.listeCorrections[i] = correction
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}
