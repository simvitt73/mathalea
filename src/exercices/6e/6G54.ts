import { angleOriente } from '../../lib/2d/angles'
import { arc, cercle } from '../../lib/2d/cercle'
import { afficheCoteSegment, placeLatexSurSegment } from '../../lib/2d/codages'
import { droite } from '../../lib/2d/droites'
import { Point, point, pointIntersectionLC, pointIntersectionDD, pointSurSegment, tracePoint } from '../../lib/2d/points'
import { BoiteBuilder, polygone } from '../../lib/2d/polygones'
import { cordelette, segment } from '../../lib/2d/segmentsVecteurs'
import { labelPoint, latex2d, texteParPosition } from '../../lib/2d/textes'
import { homothetie, rotation } from '../../lib/2d/transformations'
import { combinaisonListes } from '../../lib/outils/arrayOutils'
import { numAlpha } from '../../lib/outils/outilString'
import { colorToLatexOrHTML, fixeBordures, mathalea2d } from '../../modules/2dGeneralites'
import { gestionnaireFormulaireTexte, randint } from '../../modules/outils'
import Exercice from '../Exercice'

export const titre = 'Problème de la chèvre dans son enclos'

export const dateDePublication = '03/08/2025'

/**
 * Exercice tiré des documents officiels : un classique de la géométrie plane
 * @author Jean-Claude Lhote

*/
export const uuid = '29c3c'

export const refs = {
  'fr-fr': [],
  'fr-ch': []
}
export default class ProblemeDeLaChevreDansSonEnclos extends Exercice {
  constructor () {
    super()
    this.nbQuestions = 1
    this.besoinFormulaireTexte = ['Types de question', 'Nombres séparés par des tirets\n1 : Cabane au coin de l\'enclos\n2 : Cabane sur un côté de l\'enclos\n3 : Cabane au milieu de l\'enclos\n4 : Mélange']
    this.sup = '1'
  }

  nouvelleVersion () {
    const listeTypesDeQuestions = gestionnaireFormulaireTexte({ saisie: this.sup, nbQuestions: this.nbQuestions, min: 1, max: 3, defaut: 1, melange: 4 }).map(Number)
    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      const longueurEnclos = randint(12, 16)
      const largeurEnclos = randint(10, longueurEnclos - 1)
      const longueurCabane = randint(4, Math.ceil(longueurEnclos / 3))
      const largeurCabane = randint(3, Math.min(Math.ceil(largeurEnclos / 3), longueurCabane - 1))
      const offsetPointP = randint(1, longueurCabane - 1)
      // La corde n'intercepte jamais le bord gauche quand la cabane est collée au bord droit... Mais attention à la cabane au centre !
      const longueurCordelette = randint(Math.max(offsetPointP, longueurCabane - offsetPointP + 1), largeurEnclos - largeurCabane)

      const objetsEnonce = []
      const objetsCorrection = []
      let texte = ''
      let texteCorr = ''
      const A = point(0, 0)
      const B = point(longueurEnclos, 0)
      const C = point(longueurEnclos, largeurEnclos)
      const D = point(0, largeurEnclos)
      let cabA: Point
      let cabB: Point
      let cabC: Point
      let cabD: Point
      let P: Point
      const enclos = polygone(A, B, C, D)

      switch (listeTypesDeQuestions[i]) {
        case 2 : {
          cabA = point(longueurEnclos, randint(3, largeurEnclos - largeurCabane - 1))
          cabB = point(longueurEnclos, cabA.y + largeurCabane)
          cabD = point(cabA.x - longueurCabane, cabA.y)
          cabC = point(cabD.x, cabB.y)
          P = point(cabA.x - offsetPointP, cabA.y, 'P', 'above')
          // longueur additionnelle énoncé
          const hSousCabane = afficheCoteSegment(segment(cabA, B), `${cabA.y}\\,\\text{m}`, 0.2, 'black', 1, 1, 'black', true)
          objetsEnonce.push(hSousCabane)
          // On s'occupe d'abord de ce qu'il y a sous la cabane
          let I: Point
          const J = homothetie(P, cabA, (offsetPointP + longueurCordelette) / offsetPointP)
          const c1 = cercle(P, longueurCordelette)
          if (cabA.y >= longueurCordelette) {
            if (longueurCordelette < offsetPointP) { // On a un demi-cercle de centre P
              I = pointIntersectionLC(droite(cabA, cabD), c1, '', 2) as Point
              const a1 = arc(I, P, -Math.abs(angleOriente(I, P, J)), true, 'pink', 'black', 0.4)
              a1.couleurDesHachures = colorToLatexOrHTML('black')
              a1.hachures = 'north east lines'
              a1.opacite = 0.2
              objetsCorrection.push(a1)
            } else { // la corde intercepte le coté droit et comme longueurCordelette<=cabA.y, ça se trouve dans l'enclos et l'arc n'est pas intercepté par le bord de l'enclos
              I = pointIntersectionLC(droite(cabA, B), c1, '', 2) as Point
              const a1 = arc(I, P, -Math.abs(angleOriente(I, P, J)), true, 'pink', 'black', 0.4)
              a1.couleurDesHachures = colorToLatexOrHTML('black')
              a1.hachures = 'north east lines'
              a1.opacite = 0.2

              const t1 = polygone(I, cabA, P)
              t1.couleurDeRemplissage = colorToLatexOrHTML('pink')
              t1.opaciteDeRemplissage = 0.4
              t1.couleurDesHachures = colorToLatexOrHTML('black')
              t1.hachures = 'north east lines'
              t1.opacite = 0.2
              objetsCorrection.push(a1, t1)
            }
          } else { // la corde intercepte le bord bas
            if (longueurCordelette < offsetPointP) { // On a un demi-cercle de centre P itercepté par le bord bas de l'enclos
              // On va faire : 1 triangle PMN et deux arcs IM et NJ de centre P
              I = pointIntersectionLC(droite(cabA, cabD), c1, '', 2) as Point
              const M = pointIntersectionLC(droite(A, B), c1, '', 2) as Point
              const N = pointIntersectionLC(droite(A, B), c1, '', 1) as Point
              const a1 = arc(I, P, -Math.abs(angleOriente(I, P, M)), true, 'pink', 'black', 0.4)
              a1.couleurDesHachures = colorToLatexOrHTML('black')
              a1.hachures = 'north east lines'
              a1.opacite = 0.2

              const t1 = polygone(P, M, N)
              t1.couleurDeRemplissage = colorToLatexOrHTML('pink')
              t1.opaciteDeRemplissage = 0.4
              t1.couleurDesHachures = colorToLatexOrHTML('black')
              t1.hachures = 'north east lines'
              t1.opacite = 0.2
              const a2 = arc(N, P, -Math.abs(angleOriente(N, P, J)), true, 'pink', 'black', 0.4)
              a2.couleurDesHachures = colorToLatexOrHTML('black')
              a2.hachures = 'north east lines'
              a2.opacite = 0.2
              objetsCorrection.push(a1, t1, a2)
            } else { // la corde intercepte le coté droit et est aussi intercepté par le bord bas.
              // on va faire : t1, a1, t2, a2 ou, si le coin est à portée de cordelette, un trapèze et un arc.
              if (longueurCordelette ** 2 >= offsetPointP ** 2 + cabA.y ** 2) { // on s'occupe déja du trapèze
                const N = pointIntersectionLC(droite(A, B), c1, '', 1) as Point
                I = N
                const t1 = polygone(P, cabA, B, N)
                t1.couleurDeRemplissage = colorToLatexOrHTML('pink')
                t1.opaciteDeRemplissage = 0.4
                t1.couleurDesHachures = colorToLatexOrHTML('black')
                t1.hachures = 'north east lines'
                t1.opacite = 0.2
                const a2 = arc(N, P, -Math.abs(angleOriente(N, P, J)), true, 'pink', 'black', 0.4)
                a2.couleurDesHachures = colorToLatexOrHTML('black')
                a2.hachures = 'north east lines'
                a2.opacite = 0.2
                objetsCorrection.push(t1, a2)
              } else {
                I = pointIntersectionLC(droite(cabA, B), c1, '', 2) as Point
                const M = pointIntersectionLC(droite(A, B), c1, '', 2) as Point
                const N = pointIntersectionLC(droite(A, B), c1, '', 1) as Point
                if (I.y !== cabA.y) { // On peut avoir un arc tangent au bord droit, dans ce cas, pas besoin de triangle.
                  const t1 = polygone(P, cabA, I)
                  t1.couleurDeRemplissage = colorToLatexOrHTML('pink')
                  t1.opaciteDeRemplissage = 0.4
                  t1.couleurDesHachures = colorToLatexOrHTML('black')
                  t1.hachures = 'north east lines'
                  t1.opacite = 0.2
                  objetsCorrection.push(t1)
                }
                const a1 = arc(I, P, -Math.abs(angleOriente(I, P, M)), true, 'pink', 'black', 0.4)
                a1.couleurDesHachures = colorToLatexOrHTML('black')
                a1.hachures = 'north east lines'
                a1.opacite = 0.2
                const t2 = polygone(P, M, N)
                t2.couleurDeRemplissage = colorToLatexOrHTML('pink')
                t2.opaciteDeRemplissage = 0.4
                t2.couleurDesHachures = colorToLatexOrHTML('black')
                t2.hachures = 'north east lines'
                t2.opacite = 0.2
                const a2 = arc(N, P, -Math.abs(angleOriente(N, P, J)), true, 'pink', 'black', 0.4)
                a2.couleurDesHachures = colorToLatexOrHTML('black')
                a2.hachures = 'north east lines'
                a2.opacite = 0.2
                objetsCorrection.push(a1, t2, a2)
              }
            }
          }
          const r1Mes = placeLatexSurSegment(`${longueurCordelette}\\text{ m}`, P, I, { distance: 0.3 })
          objetsCorrection.push(r1Mes)
          // fin de la partie 'sous-cabane' on attaque la partie commençant à J qui ne peut pas intercepter le bord gauche (ouf !)
          const longueurRestante1 = longueurCordelette - (longueurCabane - offsetPointP)
          const diff = afficheCoteSegment(segment(P, cabD), `${longueurCabane - offsetPointP}\\,\\text{m}`, 0.5, 'black', 1, 0.5, 'black')
          if (longueurRestante1 + cabA.y > largeurEnclos) { // Le quart de cercle intercepte le bord haut de l'enclos : on a arc puis triangle puis arc
            const c2 = cercle(cabD, longueurRestante1)
            const M = pointIntersectionLC(droite(C, D), c2, '', 1) as Point
            const a1 = arc(J, cabD, angleOriente(J, cabD, M), true, 'pink', 'black', 0.3)
            a1.couleurDesHachures = colorToLatexOrHTML('black')
            a1.hachures = 'north east lines'
            a1.opacite = 0.2

            const K = pointIntersectionDD(droite(cabC, cabD), droite(C, D)) as Point
            const t1 = polygone(M, cabD, K)
            t1.couleurDeRemplissage = colorToLatexOrHTML('pink')
            t1.opaciteDeRemplissage = 0.3
            t1.couleurDesHachures = colorToLatexOrHTML('black')
            t1.hachures = 'north east lines'
            t1.opacite = 0.2
            const longueurRestante2 = longueurRestante1 - largeurCabane
            if (longueurRestante2 ** 2 >= longueurCabane ** 2 + (largeurEnclos - cabB.y) ** 2) { // La corde permet d'aller jusqu'au coin haut droit de l'enclos
              // on dessine un rectangle
              const r1 = polygone(K, C, cabB, cabC)
              r1.couleurDeRemplissage = colorToLatexOrHTML('pink')
              r1.opaciteDeRemplissage = 0.2
              r1.couleurDesHachures = colorToLatexOrHTML('black')
              r1.hachures = 'north east lines'
              r1.opacite = 0.2
              objetsCorrection.push(r1)
            } else { // on n'atteint pas le coin, mais peut-être le bord droit !
              // tout d'abord le triangle
              const c2 = cercle(cabC, longueurRestante2)
              const N = pointIntersectionLC(droite(C, D), c2, '', 2) as Point
              const t3 = polygone(K, N, cabC)
              t3.couleurDeRemplissage = colorToLatexOrHTML('pink')
              t3.opaciteDeRemplissage = 0.2
              t3.couleurDesHachures = colorToLatexOrHTML('black')
              t3.hachures = 'north east lines'
              t3.opacite = 0.2
              objetsCorrection.push(t3)
              if (longueurRestante2 > longueurCabane) { // Le bord droit bloque : triangle + arc + triangle
                const X = pointIntersectionLC(droite(B, C), c2, '', 2) as Point
                const a3 = arc(N, cabC, angleOriente(N, cabC, X), true, 'pink', 'black', 0.2)
                a3.couleurDesHachures = colorToLatexOrHTML('black')
                a3.hachures = 'north east lines'
                a3.opacite = 0.2
                const t4 = polygone(X, cabC, cabB)
                t4.couleurDeRemplissage = colorToLatexOrHTML('pink')
                t4.opaciteDeRemplissage = 0.2
                t4.couleurDesHachures = colorToLatexOrHTML('black')
                t4.hachures = 'north east lines'
                t4.opacite = 0.2
                objetsCorrection.push(a3, t4)
              } else { // On n'atteint pas le bord droit : triangle + arc
                const a3 = arc(N, cabC, angleOriente(N, cabC, cabB), true, 'pink', 'black', 0.2)
                a3.couleurDesHachures = colorToLatexOrHTML('black')
                a3.hachures = 'north east lines'
                a3.opacite = 0.2
                objetsCorrection.push(a3)
              }
            }
            objetsCorrection.push(a1, t1)
          } else { // Pas de contact avec bord haut, le quart de cercle est complet et ensuite on a un autre quart de cercle
            const quartDeC2 = arc(J, cabD, -90, true, 'pink', 'black', 0.3)
            quartDeC2.hachures = 'north east lines'
            quartDeC2.couleurDesHachures = colorToLatexOrHTML('black')
            quartDeC2.opacite = 0.2
            const r2 = placeLatexSurSegment(`${longueurRestante1}\\,\\text{m}`, cabD, rotation(J, cabD, -90), { distance: 0.7, horizontal: true, letterSize: 'normalsize' })
            objetsCorrection.push(quartDeC2, r2, diff)
            if (longueurRestante1 > largeurCabane) {
              const longueurRestante2 = longueurRestante1 - largeurCabane
              const K = rotation(J, cabD, -90)
              const quartDeC3 = arc(K, cabC, -90, true, 'pink', 'black', 0.2)
              quartDeC3.hachures = 'north east lines'
              quartDeC3.couleurDesHachures = colorToLatexOrHTML('black')
              quartDeC3.opacite = 0.2
              const r3 = placeLatexSurSegment(`${longueurRestante2}\\,\\text{m}`, cabC, rotation(K, cabC, -90), { distance: 0.7, horizontal: true, letterSize: 'normalsize' })
              objetsCorrection.push(quartDeC3, r3)
            }
          }
        }
          break
        case 3:
          {
            cabA = point(randint(Math.ceil(longueurEnclos / 2) + longueurCabane, longueurEnclos - 1), largeurEnclos / 2 - Math.floor(largeurCabane / 2) - randint(1, 2))
            cabB = point(cabA.x, cabA.y + largeurCabane)
            cabD = point(cabA.x - longueurCabane, cabA.y)
            cabC = point(cabD.x, cabB.y)
            P = point(cabA.x - offsetPointP, cabA.y, 'P', 'above')
          }
          break
        case 1 :
        default:{
          // éléments communs énoncé et correction
          cabA = point(longueurEnclos, largeurEnclos - largeurCabane)
          cabB = C
          cabC = point(longueurEnclos - longueurCabane, largeurEnclos)
          cabD = point(longueurEnclos - longueurCabane, largeurEnclos - largeurCabane)
          P = point(longueurEnclos - offsetPointP, largeurEnclos - largeurCabane, 'P', 'above')

          // éléments correction
          const c1 = cercle(P, longueurCordelette)
          const I = pointIntersectionLC(droite(B, C), c1, '', 2) as Point
          const r1Mes = placeLatexSurSegment(`${longueurCordelette}\\text{ m}`, P, I, { distance: -0.7, horizontal: true, letterSize: 'normalsize' })
          const J = homothetie(P, cabA, (offsetPointP + longueurCordelette) / offsetPointP)
          const t1 = polygone(I, cabA, P)
          t1.couleurDeRemplissage = colorToLatexOrHTML('pink')
          t1.opaciteDeRemplissage = 0.4
          t1.couleurDesHachures = colorToLatexOrHTML('black')
          t1.hachures = 'north east lines'
          const a1 = arc(I, P, -Math.abs(angleOriente(I, P, J)), true, 'pink', 'black', 0.4)
          a1.couleurDesHachures = colorToLatexOrHTML('black')
          a1.hachures = 'north east lines'

          const diff = afficheCoteSegment(segment(P, cabD), `${longueurCabane - offsetPointP}\\,\\text{m}`, 0.5, 'black', 1, 0.5, 'black')
          const longRestante = longueurCordelette - (longueurCabane - offsetPointP)
          if (longRestante < largeurCabane) {
            const quartDeC2 = arc(J, cabD, -90, true, 'pink', 'black', 0.2)
            quartDeC2.hachures = 'north east lines'
            quartDeC2.couleurDesHachures = colorToLatexOrHTML('black')
            quartDeC2.opacite = 0.2
            const r2 = placeLatexSurSegment(`${longRestante}\\,\\text{m}`, cabD, rotation(J, cabD, -90), { distance: 0.7, horizontal: true, letterSize: 'normalsize' })
            objetsCorrection.push(quartDeC2, r2, diff)
          } else {
            const c2 = cercle(cabD, longRestante)
            const K = pointIntersectionLC(droite(C, D), c2, '', 1) as Point
            const a2 = arc(J, cabD, -Math.abs(angleOriente(J, cabD, K)), true, 'pink', 'black', 0.2)
            a2.couleurDesHachures = colorToLatexOrHTML('black')
            a2.hachures = 'north east lines'
            const t2 = polygone(cabD, cabC, K)
            t2.couleurDeRemplissage = colorToLatexOrHTML('pink')
            t2.opaciteDeRemplissage = 0.2
            t2.couleurDesHachures = colorToLatexOrHTML('black')
            t2.hachures = 'north east lines'
            const r2 = placeLatexSurSegment(`${longRestante}\\,\\text{m}`, cabD, K, { distance: 0.7, horizontal: true, letterSize: 'normalsize' })
            t2.opacite = 0.2
            a2.opacite = 0.2
            objetsCorrection.push(a2, t2, r2, diff)
          }
          a1.opacite = 0.2
          t1.opacite = 0.2
          objetsCorrection.push(a1, r1Mes, t1)
        }
          break
      }
      // objets communs à tous les types de questions
      const indicEnclos = new BoiteBuilder({ xMin: 1, xMax: 4, yMin: largeurEnclos / 2 - 0.6, yMax: largeurEnclos / 2 + 0.6 })
      indicEnclos.addColor({ colorBackground: 'gray', color: 'none', opacity: 0, backgroudOpacity: 0.2 })
      indicEnclos.addTextIn({ textIn: 'Enclos', color: 'black', opacity: 0.8, size: 1 })
      const cabane = polygone(cabA, cabB, cabC, cabD)
      const indicCabane = new BoiteBuilder({ xMin: (cabA.x + cabD.x) / 2 - 1.5, xMax: (cabA.x + cabD.x) / 2 + 1.5, yMin: (cabA.y + cabB.y) / 2 - 0.6, yMax: (cabA.y + cabB.y) / 2 + 0.6 })
      indicCabane.addTextIn({ textIn: 'Cabane', color: 'black', opacity: 0.8, size: 1 })
      indicCabane.addColor({ colorBackground: 'gray', color: 'none', opacity: 0, backgroudOpacity: 0.2 })
      const longCab = afficheCoteSegment(segment(cabC, cabB), `${longueurCabane}\\text{ m}`, 0.2)
      const largCab = afficheCoteSegment(segment(cabB, cabA), `${largeurCabane}\\text{ m}`, 0.2, 'black', 1, 1, 'black', true)
      const distP = afficheCoteSegment(segment(cabA, P), `${offsetPointP}\\text{ m}`, 0.2, 'black', 1, 0.5, 'black', true)
      const longEnclos = afficheCoteSegment(segment(B, A), `${longueurEnclos}\\text{ m}`, 0.2)
      const largEnclos = afficheCoteSegment(segment(A, D), `${largeurEnclos}\\text{ m}`, 0.2, 'black', 1, 1, 'black', true)
      const ch = pointSurSegment(P, A, longueurCordelette * 0.85, '$\\text{chèvre}$', 'below left')
      const chLablel = texteParPosition('chèvre', ch.x - 0.6, ch.y - 0.5, 0, 'black', 1, 'milieu', false, 1)
      const longe = cordelette(P, ch)
      const longCord = latex2d(`\\text{Corde de }${longueurCordelette}\\text{ m}`, (P.x + ch.x) / 2 + 2, (P.y + ch.y) / 2 - 0.5, { color: 'gray', letterSize: 'scriptsize' })
      const PetCh = tracePoint(P, ch)
      PetCh.style = 'o'

      objetsEnonce.push(tracePoint(A), enclos, cabane, indicCabane.render(), indicEnclos.render(), longCab, largCab, distP, longEnclos, largEnclos, PetCh, labelPoint(P), chLablel, longe, longCord)
      objetsCorrection.push(enclos, cabane, indicCabane.render(), indicEnclos.render(), tracePoint(P), labelPoint(P))

      texte = 'Dans l\'enclos rectangulaire représenté ci-dessous, on a attaché une chèvre à un piquet $(P)$ situé sur le mur d\'une cabane rectangulaire, elle aussi.<br>'
      texte += `La corde qui limite les déplacements de la chèvre mesure $${longueurCordelette}\\,\\text{m}$.<br>`
      texte += `${numAlpha(0)} Réprésenter le schéma de l'enclos en utilisant comme échelle : $1\\,\\text{cm}$ pour $1\\,\\text{m}$.<br>`
      texte += `${numAlpha(1)} Délimiter et hachurer la zone de l'enclos dans laquelle peut brouter la chèvre.<br><br>`

      texte += mathalea2d(Object.assign({ scale: 0.5 }, fixeBordures(objetsEnonce)), objetsEnonce)
      texteCorr += mathalea2d(Object.assign({}, fixeBordures(objetsCorrection)), objetsCorrection)
      if (this.questionJamaisPosee(i, longueurEnclos, largeurEnclos, longueurCabane, largeurCabane, longueurCordelette, offsetPointP)) {
        this.listeQuestions.push(texte)
        this.listeCorrections.push(texteCorr)
        i++
      }
      cpt++
    }
  }
}
