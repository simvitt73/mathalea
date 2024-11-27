import { texteItalique } from '../../lib/outils/embellissements'
import ExerciceBrevetA from '../ExerciceBrevetA'
import { SVG, registerWindow } from '@svgdotjs/svg.js'
import { context } from '../../modules/context'
import { rangeMinMax } from '../../lib/outils/nombres'
import { shuffle } from '../../lib/outils/arrayOutils'
import { createList } from '../../lib/format/lists'

export const uuid = 'd11ae'
export const refs = {
  'fr-fr': [],
  'fr-ch': []
}
export const titre = 'Probabilités. Exercice de brevet'
export const dateDePublication = '27/11/2024'

const latexRoulette = `
Au casino, la roulette est un jeu de hasard pour lequel chaque joueur mise au choix sur un ou plusieurs numéros. On lance une bille sur une roue qui tourne, numérotée de 0 à 36.\\
La bille a la même probabilité de s'arrêter sur chaque numéro.\\
\\begin{center}
  \\tikzset{%
    number/.code={%
        \\tikzset{every number/.try=#1}%
        \\ifodd#1\\relax
          \\tikzset{every odd number/.try=#1}%
        \\else
          \\tikzset{every even number/.try=#1}%
        \\fi%
        \\tikzset{execute for this number/.try=#1, number #1/.try=#1}%
      },
    execute for this number/.code={}
  }
  \\begin{tikzpicture}[rotate=90]
    \\pgfmathsetmacro{\\Ra}{2.3}
    \\pgfmathsetmacro{\\Rb}{\\Ra+0.6}
    \\pgfmathsetmacro{\\Rc}{\\Rb+0.6}
    \\pgfmathsetmacro{\\Rd}{\\Rc+0.3}
    \\draw[black!70,line width=3mm] (0,0) circle (\\Rd);
    \\draw[thick] (0,0) circle (\\Rc);
    \\draw[thick] (0,0) circle (\\Rb);
    \\draw[thick] (0,0) circle (\\Ra);
    \\pgfmathsetmacro{\\angle}{360/37}
    
    \\begin{scope}[%
      every odd number/.style={opacity=1},
      every even number/.style={opacity=0}]
      \\foreach \\i in {0,...,36} {
          \\fill[black!70,number=\\i] (\\i*\\angle:\\Ra) -- (\\i*\\angle:\\Rc) arc[start angle={\\i*\\angle},delta angle=\\angle,radius=\\Rc]-- ({(\\i+1)*\\angle}:\\Ra) arc[start angle={(\\i+1)*\\angle},delta angle=-\\angle,radius=\\Ra];
          \\draw[thick] (\\i*\\angle:\\Ra) -- (\\i*\\angle:\\Rc);
        }
    \\end{scope}
    
    \\begin{scope}[%
      every odd number/.style={text=white},
      every even number/.style={text=black!70}]
      \\foreach \\number [count=\\i] in {26,3,35,12,28,7,29,18,22,9,31,14,20,11,33,16,24,5,10,23,8,30,11,36,13,27,6,34,17,25,2,21,4,19,15,32,0} {
        \\node[number=\\i,rotate={\\i*\\angle+\\angle/2}] at ({\\i*\\angle+\\angle/2}:{(\\Rb+\\Rc)/2}) {\\sffamily\\bfseries\\number};
      }
    \\end{scope}
    \\node[rotate={\\angle/2},text=black!70] at ({\\angle/2}:{(\\Rb+\\Rc)/2}) {\\sffamily\\bfseries0};
    \\fill[black!70] ({\\angle/2}:{(\\Rb+\\Ra)/2}) circle (1.5mm);
  \\end{tikzpicture}
\\end{center}
\\begin{enumerate}[itemsep=1em]
   \\item Expliquer pourquoi la probabilité s'arrête sur le numéro 7 est $\\frac{1}{37}$.
   \\item Déterminer la probabilité que la bille s'arrête sur une case à la fois noire et paire.
   \\item \\begin{enumerate}
       \\item Déterminer la probabilité que la bille s'arrête sur un numéro inférieur ou égal à 6.
   \\item En déduire la probabilité que la bille s'arrête sur un numéro supérieur ou égal à 7.
   \\item Un joueur affirme qu'on a plus de 3 chances sur 4 d'obtenir un numéro supérieur ou égal à 7. A-t-il raison?
      \\end{enumerate}
\\end{enumerate}

`
const numeros = shuffle(rangeMinMax(0, 36))
function rouletteSVG (): string {
  const document = window.document
  registerWindow(window, document)

  const draw = SVG().addTo(document.documentElement).size(480, 480)
  const outerRadius = 240
  const innerRadius = outerRadius / 2
  const secondRadius = (17 / 24) * outerRadius
  const thirdRadius = (22 / 24) * outerRadius
  const fourthRadius = (23 / 24) * outerRadius

  // Créer les cercles
  draw.circle(outerRadius * 2).center(240, 240).stroke({ width: 2 }).fill('black').stroke({ width: 1, color: 'black' })
  draw.circle(fourthRadius * 2).center(240, 240).fill('white').stroke({ width: 1, color: 'black' })
  draw.circle(thirdRadius * 2).center(240, 240).fill('white').stroke({ width: 1, color: 'black' })
  draw.circle(innerRadius * 2).center(240, 240).fill('white').stroke({ width: 1, color: 'black' })

  // Créer les secteurs
  const numSectors = 37
  const angleStep = 360 / numSectors

  for (let i = 0; i < numSectors; i++) {
    const startAngle = i * angleStep
    const endAngle = startAngle + angleStep
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

    const x1 = 240 + innerRadius * Math.cos((startAngle - 90) * (Math.PI / 180))
    const y1 = 240 + innerRadius * Math.sin((startAngle - 90) * (Math.PI / 180))
    const x2 = 240 + innerRadius * Math.cos((endAngle - 90) * (Math.PI / 180))
    const y2 = 240 + innerRadius * Math.sin((endAngle - 90) * (Math.PI / 180))

    const x3 = 240 + thirdRadius * Math.cos((startAngle - 90) * (Math.PI / 180))
    const y3 = 240 + thirdRadius * Math.sin((startAngle - 90) * (Math.PI / 180))
    const x4 = 240 + thirdRadius * Math.cos((endAngle - 90) * (Math.PI / 180))
    const y4 = 240 + thirdRadius * Math.sin((endAngle - 90) * (Math.PI / 180))

    const pathData = [
      'M 240 240',
      `L ${x1} ${y1}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      `L ${x4} ${y4}`,
      `A ${thirdRadius} ${thirdRadius} 0 ${largeArcFlag} 0 ${x3} ${y3}`,
      'Z'
    ].join(' ')

    draw.path(pathData).fill(i % 2 === 1 ? 'black' : 'white')
    // Ajouter les segments pour délimiter chaque secteur
    draw.line(x1, y1, x3, y3).stroke({ width: 1, color: 'black' })
    // Ajouter les numéros
    const angle = i * angleStep + angleStep / 2
    const rotation = angle
    const x = 240 + (secondRadius + (thirdRadius - secondRadius) / 2) * Math.cos((angle - 90) * (Math.PI / 180))
    const y = 240 + (secondRadius + (thirdRadius - secondRadius) / 2) * Math.sin((angle - 90) * (Math.PI / 180))
    draw.text(`${numeros[i]}`).font({ size: 20 }).center(x, y).fill(i % 2 === 1 ? 'white' : 'black').rotate(rotation, x, y)
  }

  draw.circle(secondRadius * 2).center(240, 240).fill('none').stroke({ width: 1, color: 'black' })
  const svg = draw.svg()
  draw.remove()
  return svg
}

/**
 * @Author Jean-Claude Lhote
 * Cet exerice exploite la nouvelle classe d'exercice que j'ai conçue pour les sujets de brevet
 * Il s'agit d'un exercice de type Brevet Aléatoirisé (à partir des sources Latex de l'APMEP)
 * La méthode privée appliquerLesValeurs permet de générer les valeurs aléatoires et de construire l'énoncé et la correction
 * La méthode versionOriginale permet de générer les valeurs de l'exercice telles qu'elles sont dans le sujet original
 * La méthode versionAleatoire permet de générer des valeurs aléatoires pour l'exercice
 */
export default class Exercice3S2DNB0 extends ExerciceBrevetA {
  constructor () {
    super()
    this.besoinFormulaireCaseACocher = ['Sujet original', false]
    this.sup = false
    this.nbQuestionsModifiable = true
    this.versionAleatoire(0)
    this.introduction = texteItalique('D\'après l\'exercice 3 du brevet Métropole 2024.')
  }

  private appliquerLesValeurs (i: number): void {
    const codeFigure = context.isHtml ? rouletteSVG() : latexRoulette
    const enonce = `Au casino, la roulette est un jeu de hasard pour lequel chaque joueur mise au choix sur un ou plusieurs numéros.<br> On lance une bille sur une roue qui tourne, numérotée de 0 à 36.<br>
La bille a la même probabilité de s'arrêter sur chaque numéro.<br><br>
${codeFigure}<br>
${createList({
  items: [
      'Expliquer pourquoi la probabilité s\'arrête sur le numéro 7 est $\\frac{1}{37}$.',
      'Déterminer la probabilité que la bille s\'arrête sur une case à la fois noire et paire.',
      createList({
        items: [
        'Déterminer la probabilité que la bille s\'arrête sur un numéro inférieur ou égal à 6.',
        'En déduire la probabilité que la bille s\'arrête sur un numéro supérieur ou égal à 7.',
        'Un joueur affirme qu\'on a plus de 3 chances sur 4 d\'obtenir un numéro supérieur ou égal à 7. A-t-il raison?'
      ],
style: 'alpha'
})
      ],
style: 'nombres'
})}`

    this.enonce = `${enonce}`
    this.correction = `${enonce}`
  }

  versionOriginale: () => void = () => {
    this.appliquerLesValeurs(0)
  }

  versionAleatoire: (i:number) => void = (i:number) => {
    this.appliquerLesValeurs(i)
  }
}
