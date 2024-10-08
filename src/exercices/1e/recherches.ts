import Exercice from '../Exercice'
import { listeQuestionsToContenu } from '../../modules/outils.js'
import engine from '../../lib/interactif/comparisonFunctions'
import type { BoxedExpression, SemiBoxedExpression } from '@cortex-js/compute-engine'
import { parse, latex } from './latex'
import { removeNegate, developper, factoriserPar, powerRule, reduire, simplifierFractionPar, getCoeff } from './formel'
import { Point } from '../../lib/2d/points'
import type { Vecteur } from 'src/lib/2d/segmentsVecteurs'
import { tableauVariationsFonction } from '../../lib/mathFonctions/etudeFonction'

export const titre = 'RECHERCHE Dérivée fonctions usuelles'
export const dateDePublication = '24/06/2024'

/**
 * Généralisation de l'utilisation de cortex
 * @florianpicard
 */

let log = x => console.log(x)
let Log = x => console.log(JSON.stringify(x))

export const uuid = '0088f'
export const ref = '1AN12'
export const refs = {
  'fr-fr': ['1AN12'],
  'fr-ch': []
}

type Comment<T> = {
  value: T
  comment: string
}

class CommentedResult<T> {
  data: Comment<T>
  lvl: number

  constructor (data: Comment<T>, lvl = 0) {
    this.data = data
    this.lvl ??= lvl
  }

  valueOf () {
    return this.data.value
  }
  
  toLatex () {
    return this.data.comment
  }
}

class Expression {
  e: BoxedExpression
  historique: [BoxedExpression, string][]
  constructor (expr: string | BoxedExpression, options = {nom: 'f', inc: 'x'}) {
    this.nom = options.nom
    this.inc = options.inc
    this.fDe = (this.inc) ? `${this.nom}(${this.inc})` : null
    this.e = parse(expr)
    this.historique = [[this.e, '']]
  }

  apply (fun = (expr: BoxedExpression) => [expr, 'Rien fait'], { log } = { log: true}) {
    const e_avant = this.e
    let commentaire: string
    [this.e, commentaire] = fun(this.e)
    // this.e = removeNegate(this.e)
    // if ((log) && !(e_avant.isSame(this.e))) {
    if (log) {
      this.historique.push([this.e, commentaire])
    }
  }

  push (e: SemiBoxedExpression,
	{commentaire, log} = {commentaire: '', log: true} ) {
    this.apply((expr) => [parse(e), commentaire], {log} )
  }

  evalLast () {
    const last = this.historique.at(-1)[0]
    Log(last)
    this.push(last.evaluate())
  }

  latexDetails () {
    const [e, _] = this.historique.shift()
    let res = '\\begin{align*}'
    res += `& & ${this.fDe ?? this.nom} &= ${latex(e)} & \\\\` + this.historique.map((e, i) => `& & &= ${latex(e[0])} & \\text{${e[1]}}`).join('\\\\')
    res += '\\end{align*}'
    return res
  }

  developper (term?: string) {
    if (!term) {
      this.apply((expr) => [developper(expr, expr), 'On développe tout.'])
    } else {
      const pattern = engine.parse(term)
      this.apply((expr) => [developper(expr, pattern), 'On développe.'])
    }
  }
}

class Equation {
  lhs: BoxedExpression
  rhs: BoxedExpression
  historique: [BoxedExpression, BoxedExpression, string][]

  constructor (expr: string) {
    const e = engine.parse(expr)
    if (!(e.head === 'Equal')) {
      throw new Error(`${e} n'est pas une équation`)
    }
    this.lhs = parse(e.ops[0]).simplify()
    this.rhs = parse(e.ops[1]).simplify()
    this.historique = [[this.lhs, this.rhs, '']]
  }

  toString () {
    return `${this.lhs.latex} = ${this.rhs.latex}`
  }

  ajouter (k: string | BoxedExpression, log = true) {
    k = parse(k)
    k = (typeof k.value === 'number') ? k.simplify() : k
    const commentaire =  `On ajoute $${k.latex}$ aux deux membres de l'égalité.`
    const addK = expr => parse(["Add", expr, k])
    this.apply((lhs, rhs) => [addK(lhs), addK(rhs), commentaire], log)
  }

  soustraire (k: string | BoxedExpression, log = true ) {
    k = parse(k)
    k = (typeof k.value === 'number') ? k.simplify() : k
    const commentaire =  `On soustrait $${k.latex}$ aux deux membres de l'égalité.`
    const subK = expr => parse(["Add", expr, ["Multiply", -1, k]])
    this.apply((lhs, rhs) => [subK(lhs), subK(rhs), commentaire], log)
  }

  multiplier (k: string | BoxedExpression, log = true) {
    k = parse(k)
    k = (typeof k.value === 'number') ? k.simplify() : k
    const commentaire =  `On multiplie par $${k.latex}$ les deux membres de l'égalité.`
    const mulK = expr => parse(["Multiply", expr, k])
    this.apply((lhs, rhs) => [mulK(lhs), mulK(rhs), commentaire], log)
  }

  diviser (k: string | BoxedExpression, log = true) {
    k = parse(k)
    k = (typeof k.value === 'number') ? k.simplify() : k
    const commentaire =  `On divise par $${k.latex}$ les deux membres de l'égalité.`
    const divK = expr => parse(["Divide", expr, k])
    this.apply((lhs, rhs) => [divK(lhs), divK(rhs), commentaire], log)
  }

  simplifier ( { log } = { log: true}) {
    this.apply((lhs, rhs) => [lhs.simplify(), rhs.simplify(), 'On simplifie.'], log) 
  }

  // SimplificationFonction: [BoxedExpression, BoxedExpression] => [BoxedExpression, BoxedExpression, string]
  // apply applique une fonction aux deux membres de l'égalité. La valeur renvoyé correspond
  // aux membres de gauche et de droite d'une équation équivalente, ainsi que le commentaire indicatif sur
  // la modification effectuée.
  apply (fun = (lhs, rhs) => [lhs, rhs, 'Rien fait'], log = true ) {
    let avant = this.toString()
    let commentaire: string
    [this.lhs, this.rhs, commentaire] = fun(this.lhs, this.rhs);
    // this.lhs = removeNegate(this.lhs)
    // this.rhs = removeNegate(this.rhs)
    let apres = this.toString()
    if ((log) && (avant != apres)) { // on n'enregistre que les changements visibles
      this.historique.push([this.lhs, this.rhs, commentaire])
    }
  }

  latexDetails () {
    const [lhs, rhs, _] = this.historique.shift()
    return `& & ${latex(lhs)} &= ${latex(rhs)} & \\\\` + this.historique.map((e, i) => `&\\iff & ${latex(e[0])} &= ${latex(e[1])} & \\text{${e[2]}}`).join('\\\\')
  }
}

interface IFonctionAffineBuild {
  nom: string
  inc: string
  x1: number | BoxedExpression
  x0: number | BoxedExpression 
  A: Point
  B: Point
  u: Vecteur
  n: Vecteur
  expr: string 
  cart: string
}

class fonctionAffineTest {
  x1: BoxedExpression = parse(1)
  x0: BoxedExpression = parse(0)
  A: Point = new Point(0, 0, 'A')
  B: Point = new Point(0, 1, 'B')
  nom: string = 'f'
  inc: string = 'x'
  code: BoxedExpression = parse('x')
  cart: [BoxedExpression, BoxedExpression, BoxedExpression] = [parse(1), parse(-1), parse(0)]

  constructor ({x1, x0}: {x1: number | BoxedExpression, x0: number | BoxedExpression});
  constructor ({expr}: {expr: string});
  constructor ({cart}: {cart: string});
  constructor ({A, B}: {A: Point, B: Point});
  constructor ({A, u}: {A: Point, u: Vecteur});
  constructor ({A, n}: {A: Point, n: Vecteur});
  constructor (data: Partial<IFonctionAffineBuild>) {
    if (data.x1 && data.x0) this.buildFromCoefs(data.x1, data.x0) ;
    if (data.expr) this.buildFromCode(data.expr) ;
    if ((data.A) && (data.B)) this.buildFromPoints(data.A, data.B) ;
    this.cart = [parse(this.x1), parse(1), parse(this.x0)]
    if (data.cart) this.buildFromCart(data.cart) ;
    // if ((data.A) && (data.u)) this.buildFromDirection(data.A, data.u) ;
    // if ((data.A) && (data.n)) this.buildFromNormal(data.A, data.n) ;
  }

  toString () {
    return `${this.nom}(${this.inc}) = ` + latex(this.code)
  }

  image (a: SemiBoxedExpression) {
    a = parse(a)
    return this.code.subs({[this.inc]: a})
  }

  racine () {
    return parse(['Negate', ['Divide', this.x0, this.x1]])
  }

  resoudre (other: fonctionAffineTest, niveau = 6) {
    // ax + b = mx + p
    const eq = new Equation(`${this.x1}*x + ${this.x0} = ${other.x1}*x + ${other.x0}`)
    // ax = mx + p - b
    eq.soustraire(this.x0, {log: 2 <= niveau })
    eq.simplifier({ log: 3 <= niveau })
    // ax - mx = p - b
    if (other.x1.N().value != 0) eq.soustraire(`${other.x1}*x`, { log: 2 <= niveau});
    eq.simplifier({log: 3 <= niveau})
    // (a - m)x = p - b
    eq.apply((lhs, rhs) => [factoriserPar(lhs, "x"), rhs, `On factorise par $x$ le membre de droite`], {log: 2<= niveau})
    // x = (p - b)/(a - m)
    eq.diviser(parse(['Add', this.x1, ['Negate', other.x1]]), {log: 2 <= niveau})
    eq.simplifier({log: true})

    return {
      details: eq.latexDetails(),
      resultat: eq.rhs
    }
  }

  derivee (x: SemiBoxedExpression) {
    x = parse(x)
    let taux = new Expression(parse(['Divide', ['Add', this.image(['Add', x, 'h']), ['Negate', this.image(x)]], 'h']))
    taux.apply((expr) => [reduire(expr), `On réduit.`])
    taux.apply((expr) => [developper(expr, engine.parse(`${this.x1}*(${x} + h)`)), `On développe.`])
    taux.apply((expr) => [reduire(expr), `On réduit.`])
    taux.apply((expr) => [simplifierFractionPar(expr, parse('h')), `On simplifie par $h$.`])
    return {
      details: taux.latexDetails(),
      resultat: engine.parse(`${this.x1}`)
    }
  }

  variations (xMin = -10, xMax = 10) {
    let fonction = x => this.image(x).N().value
    let derivee = x => this.x1.N().value
    return tableauVariationsFonction(fonction, derivee, xMin, xMax)
  }

  buildFromCoefs (x0: number | BoxedExpression, x1: number | BoxedExpression){
    this.x0 = parse(x0)
    this.x1 = parse(x1)
    this.code = parse(['Add', ['Multiply', x1, 'x'], x0])
    this.A = new Point(0, x0)
    this.B = new Point(1, this.image(1).simplify())
  }

  buildFromCode (code: string){
    this.code = parse(code)
    const coeffs = getCoeff(this.code).toSorted((a, b) => Number(a[1]) - Number(b[1]))
    this.buildFromCoefs(coeffs[0][0], coeffs[1][0])
  }

  buildFromPoints (A: Point, B: Point) {
    this.A = A
    this.B = B
    const m = parse(`(${B.y} - ${A.y})/(${B.x} - ${A.x})`, { canonical: false })
    const p = parse(`${A.y} - ${m.evaluate()}*${A.x}`)
    this.buildFromCoefs(p.evaluate(), m.evaluate())
  }

  buildFromCart (eq: string) {
    const equation = parse(eq)
    if (equation.head !== 'Equal') throw new Error('Ceci n\' pas une équation')
    const rhs = equation.op1
    const lhs = equation.op2
    if (lhs.value !== 0) throw new Error('Membre de droite non nul')
    const a = getCoeff(rhs, 'x', 1)
    const b = getCoeff(rhs, 'y', 1)
    const c = getCoeff(rhs, ['x', 'y'], 0)
    this.cart = [a, b, c]
    this.buildFromCoefs(parse(['Divide', c, b]), parse(['Divide', a, b]))
  }

  buildFromDirection (A: Point, u: Vecteur) {
    // Implémenter le calcul vectoriel
  }

  buildFromNormal (A: Point, n: Vecteur) {
    // Implémenter le calcul vectoriel
  }
}


class Parametre {
  nom: string
  valeur?: BoxedExpression

  constructor ({ nom, valeur }: {nom: string, valeur?: SemiBoxedExpression}) {
    this.nom = nom
    this.valeur = (valeur === undefined) ? undefined : parse(valeur)
  }

  hasValue () {
    return !(this.valeur === undefined)
  }

  toString () {
    return (this.hasValue()) ? this.valeur.latex : this.nom
  }
}



class FonctionAffine {
  /**
   * Définit une fonction affine f(x) = mx + p
   */
  x1?: Parametre
  x0?: Parametre
  nom: string
  code: BoxedExpression

  constructor ({ a, b, nom = 'f' }: {a: Parametre, b: Parametre, nom?: string}) {
    this.x1 = a
    this.x0 = b
    this.nom = nom
    this.code = engine.parse(`${this.x1}*x + ${this.x0}`)
  }

  toString () {
    return `${this.nom}(x) \\mapsto ${this.code.latex}`
  }


  image (a: SemiBoxedExpression) {
    a = (typeof a === 'string') ? engine.parse(a) : a
    return {
      calcul: `${this.nom}\\left( ${a} \\right) = ` + this.code.subs({ x: a }).latex,
      resultat: this.code.subs({ x: a }).evaluate()
    }
  }

  racine () {
    const r = engine.parse(`-(${this.x1})/(${this.x0})`) // il faut un espace entre - et ${this.a}. --2 est parsé en ["Predecrement", 2]
    const g = new FonctionAffine({a: new Parametre({nom: 'a', valeur: 0}),
				  b: new Parametre({nom: 'b', valeur: 0})})
    const {details, res} = this.resoudre(g)
    return {
      details,
      resultat: r
    }
  }
}

class suiteGeometrique {
  /**
   * Définit une suite géométrique
   */
  up: BoxedExpression
  q: BoxedExpression
  p: number
  nom: string

  constructor ({ u0, q, p = 0, nom = 'u' }: {}) {
    this.nom = nom
    this.up = parse(u0)
    this.q = parse(q)
    this.p = p
  }

  terme (i:number): BoxedExpression {
    if (i === this.p) { return this.up }
    if (i === this.p + 1) {return parse(`${this.up}*${this.q}`)}
    return parse(['Multiply', this.up, ['Power', this.q, (i - this.p)]])
  }

  toString () {
    return `$(${this.nom}_n)_{n \\geq ${this.p}}$ est une suite géométrique de premier terme ${this.up} et de raison ${this.q}`
  }

  somme (i:number, j: number) {
    let s = Array.from({length: j - i + 1},
		       (k, key) => latex(this.terme(i + key))).join(' + ')
    log(s)
    let e = new Expression(s, {nom: `\\sum\\limits_{k = ${i}}^${j}${this.nom}_k`})
    Log(e)
    let normalform = Array.from({length: j - i},
				(v, k) => `${this.q}^${1 + k}`).join(' + ')
    e.push(`${latex(this.terme(i - this.p))}*(1 + ${normalform})`)
    e.push(`${latex(this.terme(i - this.p))}*(1 - (${this.q})^{${j - i + 1}})/(1 - ${this.q})`)
    // e.evalLast()
    return {
      details: e.latexDetails(),
      resultat: parse(`(${this.up})*((1 - (${this.q})^{${j - i + 1}})/(1 - ${this.q}))`)
    }
  }
}


function questionDeriveeAffine (): {question: string, reponse: string} {
  // const a = new Parametre({ nom: 'a' })
  // const b = new Parametre({ nom: 'b' })
  // const m = new Parametre({ nom: 'm', valeur: Fraction(8, 5)})
  // const p = new Parametre({ nom: 'p', valeur: Fraction(3, 2) })
  // const f = new FonctionAffine({ a, b, nom: 'f' })
  // const g = new FonctionAffine({ a: m, b: p, nom: 'g' })
  // let e = new Expression('(a*x + b)^2 + (cx^2 + dx + f)')
  // e.developper()
  // e.apply(e => [powerRule(e), "On applique la règle des puissances."])
  // e.apply(e => [factoriserPar(e, "x"), "On factorise par $x$."])
  // e.apply(e => [factoriserPar(e, "x^2"), "On factorise par $x^2$."])
  // let e2 = new Expression('(ax + (-8/5)x)/(a - 8/5)')
  // e2.apply(e => [factoriserPar(e, "x"), `On factorise par $x$`])
  // e2.apply(e => [simplifierFractionPar(e, "a - 8/5"), `On simplifie`])

 
  let u = new suiteGeometrique({u0:'(3/4)', q:'1/2'})
  let texte = ""
  texte += `${u} <br>`
  texte += `$${latex(u.terme(3))}$ <br>`
  texte += `$${u.terme(3)}$ <br>`
  let s = u.somme(4, 6)
  texte += `\\[${s.details}\\]`

  // texte += `\\[${latex(s)} = ${s.evaluate()}\\]`


  // let f = new fonctionAffineTest({expr: '-3/2*x + 2' })
  // let g = new fonctionAffineTest({expr: '5*x - 1' })
  // // Log(f.resoudre(g))
  // let texte = ""
  // texte += `<br> Calcul de dérivée $${f}$ <br> \\[\\begin{align*}${f.derivee(3).details}\\end{align*}\\]`
  // texte += `<br> Résolution d'une équation de degré 1 : <br> \\[\\begin{align*}${f.resoudre(g).details}\\end{align*}\\]`

  // let fde3 = f.image(3)
  // texte += `<br> Calcul d'une image $${f}$ <br> \\[\\begin{align*}${fde3.calcul} = ${fde3.resultat.latex}\\end{align*}\\]`
  // let gde3 = g.image(3)
  // texte += `<br> Calcul d'une image $${g}$ <br> \\[\\begin{align*}${gde3.calcul} = ${gde3.resultat.latex}\\end{align*}\\]`
  // texte += `<br> Détermination des racines <br> \\[\\begin{align*}${f.racine().details}\\end{align*}\\]`
  // texte += `<br> Résolution d'une équation de degré 1. <br> \\[\\begin{align*}${f.resoudre(g).details}\\end{align*}\\]`
  // const a0 = new Parametre({ nom: 'v' })
  // texte += `<br> Calcul de dérivée <br> \\[\\begin{align*}${f.derivee(a0).details}\\end{align*}\\]`
  // texte += `<br> Factorisation<br> \\[\\begin{align*}${e2.latexDetails()}\\end{align*}\\]`
  // texte += `<br> Forme développée d'une expression <br> \\[\\begin{align*}${e.latexDetails()}\\end{align*}\\]`

  // tests
  // texte += "<br>" + powerRule(engine.parse("1 + (a(u + v)bc)^{u + v}")).latex
  // texte += "<br>" + removeFromOps(engine.parse("2(x + 1)xabcd"), engine.parse("x"))?.latex
  // texte += "<br>" + factoriserPar(engine.parse("2ax + x + 1"), "x")


  return {
    question: texte,
    reponse: ''
  }
}

export default class nomExercice extends Exercice {
  constructor () {
    super()
    this.consigne = `${questionDeriveeAffine().question}`
    // this.consigne = `${f.variations()}`
    this.nbQuestions = 10
  }

  nouvelleVersion () {
    this.listeQuestions = []
    this.listCorrections = []
    this.autoCorrection = []

    const questions = []
    listeQuestionsToContenu(this)
  }
}
