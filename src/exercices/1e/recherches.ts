import Exercice from '../Exercice'
import { listeQuestionsToContenu } from '../../modules/outils.js'
// import { create, all } from 'mathjs'
import engine from '../../lib/interactif/comparisonFunctions'
import type { BoxedExpression, SemiBoxedExpression } from '@cortex-js/compute-engine'

export const titre = 'RECHERCHE Dérivée fonctions usuelles'
export const dateDePublication = '24/06/2024'

let log = x => console.log(x) ;
/**
 * Généralisation de l'utilisation de cortex
 * @florianpicard
 */

export const uuid = '0088f'
export const ref = '1AN12'
export const refs = {
  'fr-fr': ['1AN12'],
  'fr-ch': []
}

function parse(expr: SemiBoxedExpression): BoxedExpression {
  return (typeof expr === 'string')
    ? engine.parse(expr, {canonical: false})
    : engine.box(expr, {canonical: false})
}

function latex(expr: BoxedExpression): string {
  return expr.toLatex({
    prettify: false,
    invisiblePlus: "+",
    fractionStyle: () => "block-quotient",
    applyFunctionStyle: () => 'scaled'
    groupStyle: () => 'scaled'
  })
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

/* Supprime op des opérandes de expr. Renvoie null si op n’est pas une des opérandes */
function removeFromOps (expr: BoxedExpression, op: BoxedExpression): BoxedExpression | null {
  if (expr.ops === null) {
    return null
    // throw new Error(`${expr} : pas une fonction`)
  }
  const i = expr.ops.findIndex((o: BoxedExpression) => o.isSame(op))
  return (i >= 0) ? engine.box([expr.head].concat(expr.ops.toSpliced(i, 1))) : null
}

function factoriserPar (expr: BoxedExpression, term: string): BoxedExpression {
  // Appel : factoriserPar(engine.parse("2ax + x + 1"), "x")
  if (expr.ops === null) return expr;
  if (expr.head !== 'Add') return engine.box([expr.head].concat(expr.ops.map(e => factoriserPar(e, term))));
  expr = removeNegate(expr) // On s'assure de n'avoir *aucun* negate
  // log("EXPRESSION : " + expr.latex)
  // log(expr)
  let n = 0
  let sommeAutreFacteurs = ['Add']
  let sommeReste = ['Add']
  term = engine.parse(term)
  for (let t of expr.ops) {
    if (t.isSame(term)){
      n += 1
    }
    // TODO : cas produit(term)/denum
    // else if (t.head === 'Divide') {
    //   const num = t.ops[0]
    //   const denum = t.ops[1]
    //   let numSans = removeFromOps(num, term) 
    //   if (reste === null) {
    //     sommeReste.push(t)
    //   } else {
    //     sommeAutreFacteurs.push(['Divide', numSans, denum])
    //   }
  // }
    else if (t.head === 'Multiply') {
      let reste = removeFromOps(t, term) 
      if (reste === null) {
	sommeReste.push(t)
      } else {
	sommeAutreFacteurs.push(reste)
      }
    } else {
      // term n'est pas un facteur de t
      sommeReste.push(t)
    }
  }
  if (n > 0) sommeAutreFacteurs.push(n);
  if (sommeAutreFacteurs.length === 1) return expr; // Aucune factorisation n'a été trouvée
  return engine.box(['Add',
    sommeReste,
    engine.box(['Multiply', sommeAutreFacteurs, term])])
}

function simplifierFractionPar (expr: BoxedExpression, term: SemiBoxedExpression): BoxedExpression {
  if (expr.head !== 'Divide') {
    return expr
  }
  term = (typeof term === 'string') ? engine.parse(term) : term
  // expr = engine.parse("a/3")
  const num = expr.ops[0]
  const denum = expr.ops[1]
  // factorisation impossible expr not n’est pas du type :
  // produit(term)/term, term/produit(term), ou produit(term)/produit(term)
  // TODO : à tester
  if ((!(num.isSame(term)) && (num.head !== 'Multiply')) || (!(denum.isSame(term)) && (denum.head != 'Multiply'))) {
    return expr
  }
  // on supprime le terme de la liste des facteurs du numérateur
  // on laisse 1 si le numérateur est le terme à simplifier
  let numSans = (num.isSame(term)) ? 1 : null
  const restenum = removeFromOps(num, term)
  numSans ??= (restenum === null) ? num : restenum
  // même chose au dénominateur
  let denumSans = (denum.isSame(term)) ? 1 : null
  const restedenum = removeFromOps(denum, term)

  return engine.box(['Divide', numSans, denumSans])
}

function powerRule (expr: BoxedExpression): BoxedExpression {
  // (Produit(ai))^n = Produit((ai^n))
  if (expr.ops === null){
    return expr
  } else if ((expr.head) !== 'Power'){
    return engine.box([expr.head].concat(expr.ops.map(e => powerRule(e))))
  } else if (expr.ops[0].head !== 'Multiply'){
    return expr
  }
  const n = expr.ops[1]
  const args = expr.ops[0].ops?.map((e => engine.box(["Power", e, n])))
  return engine.box(['Multiply'].concat(args))
}

function developper(expr: BoxedExpression, term: BoxedExpression): BoxedExpression{
  // Développe term dans expr
  if (expr.ops === null) {
    return expr
  }
  if (!expr.isSame(term)) {
    return engine.box([expr.head].concat(expr.ops.map(e => developper(e, term))))
  }
  return engine.box(["Expand", [expr.head].concat(expr.ops)]).evaluate()
}

function reduire(expr: BoxedExpression): BoxedExpression{
  if (expr.ops === null) return expr;
  if (expr.head !== 'Add') return engine.box([expr.head].concat(expr.ops.map(e => reduire(e)))) ;
  expr = removeNegate(expr) // On s'assure de n'avoir *aucun* negate
  // log("EXPRESSION : " + expr.latex)
  // log(expr)
  // Add(..., a, ..., Negate(a), ...) ~> Add(..., ..., ...)
  // On parcourt tous les arguments. On supprime toutes les paires de a, Negate(a)
  let actualargs = expr.ops?.slice();
  // for (a of expr.ops){
  //   actualargs.push(a)
  // }
  let filteredargs = []

  while (actualargs.length > 0) {
    a = actualargs.shift()
    filteredargs.push(a)
    // Bizarre. Mais il faut bien ça pour se débarrasser des Negates....
    let minusa = removeNegate(engine.box(["Multiply", -1, a], {canonical: 'Flatten'}).evaluate())
    // log("a = " + a.latex)
    // log(a)
    // log("-a = " + minusa.latex)
    // log(minusa)
    for (let i = 0; i < actualargs.length; i++){
      let autre = actualargs[i]
      // log("AUTRE ARGUMENT = " + autre.latex)
      // log(autre)
      if (minusa.isSame(autre)) {
	// log(`match de ${a} et ${actualargs[i]}`)
	actualargs = actualargs.toSpliced(i, 1)
	filteredargs.pop()
	break
      }
    }
  }

  return engine.box([expr.head].concat(filteredargs), {canonical: false})
  }

function removeNegate(expr: BoxedExpression): BoxedExpression {
  if (expr.ops === null) return expr;
  if (expr.head !== 'Negate') return engine.box([expr.head].concat(expr.ops.map(e => removeNegate(e))), {canonical: 'Flatten'}) ;

  return engine.box(['Multiply', -1].concat(expr.ops), {canonical: false})
}

class Expression {
  e: BoxedExpression
  historique: [BoxedExpression, string][]
  constructor (expr: string, options = {nom: 'f', inc: 'x'}) {
    this.nom = options.nom
    this.inc = options.inc
    this.fDe = (this.inc) ? `${this.nom}(${this.inc})` : null
    this.e = engine.parse(expr)
    this.historique = [[this.e, '']]
  }

  apply (fun = (expr: BoxedExpression) => [expr, 'Rien fait'], { log } = { log: true}) {
    const e_avant = this.e
    let commentaire: string
    [this.e, commentaire] = fun(this.e)
    this.e = removeNegate(this.e)
    // if ((log) && !(e_avant.isSame(this.e))) {
    if (log) {
      this.historique.push([this.e, commentaire])
    }
  }

  latexDetails () {
    const [e, _] = this.historique.shift()
    return `& & ${this.fDe ?? this.nom} &= ${e.latex} & \\\\` + this.historique.map((e, i) => `& & &= ${e[0].latex} & \\text{${e[1]}}`).join('\\\\')
  }

  developper (term?: string) {
    if (!term) {
      this.apply((expr) => [developper(expr, expr), 'On développe tout.'])
    } else {
      const pattern = engine.parse(term)
      this.apply((expr) => [developper(expr, pattern), 'On développe.'])
    }
  }

  diviser (h: string) {
    this.apply((expr) => [engine.box(["Divide", expr, engine.parse(h)]), `On divise par $h$`])
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
    this.lhs = engine.box(e.ops[0]).simplify()
    this.rhs = engine.box(e.ops[1]).simplify()
    this.historique = [[this.lhs, this.rhs, '']]
  }

  toString () {
    return `${this.lhs.latex} = ${this.rhs.latex}`
  }

  ajouter (k: string, { log } = { log: true }) {
    k = engine.parse(k)
    const commentaire =  `On ajoute $${k.latex}$ aux deux membres de l'égalité.`
    const addK = expr => engine.box(["Add", expr, k])
    this.apply((lhs, rhs) => [addK(lhs), addK(rhs), commentaire])
  }

  soustraire (k: string, { log } = { log: true }) {
    k = engine.parse(k)
    const commentaire =  `On soustrait $${k.latex}$ aux deux membres de l'égalité.`
    const subK = expr => engine.box(["Add", expr, ["Multiply", -1, k]])
    this.apply((lhs, rhs) => [subK(lhs), subK(rhs), commentaire])
  }

  multiplier (k: string, { log } = { log: true }) {
    k = engine.parse(k)
    const commentaire =  `On multiplie par $${k.latex}$ les deux membres de l'égalité.`
    const mulK = expr => engine.box(["Multiply", expr, k])
    this.apply((lhs, rhs) => [mulK(lhs), mulK(rhs), commentaire])
  }

  diviser (k: string, { log } = { log: true }) {
    k = engine.parse(k)
    const commentaire =  `On divise par $${k.latex}$ les deux membres de l'égalité.`
    const divK = expr => engine.box(["Divide", expr, k])
    this.apply((lhs, rhs) => [divK(lhs), divK(rhs), commentaire])
  }

  // SimplificationFonction: [BoxedExpression, BoxedExpression] => [BoxedExpression, BoxedExpression, string]
  // apply applique une fonction aux deux membres de l'égalité. La valeur renvoyé correspond
  // aux membres de gauche et de droite d'une équation équivalente, ainsi que le commentaire indicatif sur
  // la modification effectuée.
  apply (fun = (lhs, rhs) => [lhs, rhs, 'Rien fait'], { log } = { log: true}) {
    let avant = this.toString()
    let commentaire: string
    [this.lhs, this.rhs, commentaire] = fun(this.lhs, this.rhs);
    this.lhs = removeNegate(this.lhs)
    this.rhs = removeNegate(this.rhs)
    let apres = this.toString()
    if ((log) && (avant != apres)) { // on n'enregistre que les changements visibles
      this.historique.push([this.lhs, this.rhs, commentaire])
    }
  }

  latexDetails () {
    const [lhs, rhs, _] = this.historique.shift()
    return `& & ${lhs.latex} &= ${rhs.latex} & \\\\` + this.historique.map((e, i) => `&\\iff & ${e[0].latex} &= ${e[1].latex} & \\text{${e[2]}}`).join('\\\\')
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

  resoudre (other: FonctionAffine, niveau = 6) {
    // ax + b = mx + p
    const eq = new Equation(`${this.x1}*x + ${this.x0} = ${other.x1}*x + ${other.x0}`)
    // ax = mx + p - b
    eq.soustraire(`${this.x0}`, {log: 2 <= niveau })
    const simplifier = (lhs, rhs) => [lhs.simplify(), rhs.simplify(), 'On simplifie.']
    eq.apply(simplifier, { log: 3 <= niveau })
    // ax - mx = p - b
    if (other.x1 != 0) eq.soustraire(`${other.x1}x`, { log: 2 <= niveau});
    eq.apply(simplifier, {log: 3 <= niveau})
    // (a - m)x = p - b
    eq.apply((lhs, rhs) => [factoriserPar(lhs, "x"), rhs, `On factorise par $x$ le membre de droite`])
    // x = (p - b)/(a - m)
    eq.diviser(`${this.x1} - ${other.x1}`, {log: 2 <= niveau})
    // eq.apply(simplifier, {log: false})
    // console.log(eq.lhs)
    const aminusm = engine.parse(`${this.x1} - ${other.x1}`)
    eq.apply((lhs, rhs) => [simplifierFractionPar(lhs, aminusm),
			    rhs,
			    `On simplifie par $${aminusm}$`], {log: 3 <= niveau})
    eq.apply((lhs, rhs) => [lhs, rhs, ''], {log: 1 >= niveau})

    return {
      details: eq.latexDetails(),
      resultat: eq.rhs
    }
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

  derivee (x: Parametre) {
    let taux = new Expression(`(${this.x1}*(${x} + h) + ${this.x0} - (${this.x1}*(${x}) + ${this.x0}))/(h)`, {nom: "\\tau", inc: "h"})
    taux.apply((expr) => [reduire(expr), `On réduit.`])
    taux.apply((expr) => [developper(expr, engine.parse(`${this.x1}*(${x} + h)`)), `On développe.`])
    taux.apply((expr) => [reduire(expr), `On réduit.`])
    taux.apply((expr) => [simplifierFractionPar(expr, engine.parse("h")), `On simplifie.`])
    return {
      details: taux.latexDetails(),
      resultat: engine.parse(`${this.x1}`)
    }
  }


}

function Fraction(num: SemiBoxedExpression, denum?: SemiBoxedExpression): BoxedExpression {
  return engine.box(['Divide', num, denum ?? 1])
}

function questionDeriveeAffine (): {question: string, reponse: string} {
  const a = new Parametre({ nom: 'a' })
  const b = new Parametre({ nom: 'b' })
  const m = new Parametre({ nom: 'm', valeur: Fraction(8, 5)})
  const p = new Parametre({ nom: 'p', valeur: Fraction(3, 2) })
  const f = new FonctionAffine({ a, b, nom: 'f' })
  const g = new FonctionAffine({ a: m, b: p, nom: 'g' })
  let e = new Expression('(a*x + b)^2 + (cx^2 + dx + f)')
  e.developper()
  e.apply(e => [powerRule(e), "On applique la règle des puissances."])
  e.apply(e => [factoriserPar(e, "x"), "On factorise par $x$."])
  e.apply(e => [factoriserPar(e, "x^2"), "On factorise par $x^2$."])
  let e2 = new Expression('(ax + (-8/5)x)/(a - 8/5)')
  e2.apply(e => [factoriserPar(e, "x"), `On factorise par $x$`])
  e2.apply(e => [simplifierFractionPar(e, "a - 8/5"), `On simplifie`])
  let texte = ""

  let fde3 = f.image(3)
  texte += `<br> Calcul d'une image $${f}$ <br> \\[\\begin{align*}${fde3.calcul} = ${fde3.resultat.latex}\\end{align*}\\]`
  let gde3 = g.image(3)
  texte += `<br> Calcul d'une image $${g}$ <br> \\[\\begin{align*}${gde3.calcul} = ${gde3.resultat.latex}\\end{align*}\\]`
  texte += `<br> Détermination des racines <br> \\[\\begin{align*}${f.racine().details}\\end{align*}\\]`
  texte += `<br> Résolution d'une équation de degré 1. <br> \\[\\begin{align*}${f.resoudre(g).details}\\end{align*}\\]`
  const a0 = new Parametre({ nom: 'v' })
  texte += `<br> Calcul de dérivée <br> \\[\\begin{align*}${f.derivee(a0).details}\\end{align*}\\]`
  texte += `<br> Factorisation<br> \\[\\begin{align*}${e2.latexDetails()}\\end{align*}\\]`
  texte += `<br> Forme développée d'une expression <br> \\[\\begin{align*}${e.latexDetails()}\\end{align*}\\]`

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
    this.nbQuestions = 10
  }

  nouvelleVersion () {
    this.listeQuestions = []
    this.listCorrections = []
    this.autoCorrection = []

    const questions = []

    for (let i = 0, cpt = 0; i < this.nbQuestions && cpt < 50;) {
      const [texte, texteCorr] = questions[i](i)
      if (this.questionJamaisPosee(i, texte)) {
        this.listeQuestions.push(texte)
        this.listeCorrections.push(texteCorr)
        i++
      }
      cpt++
    }
    listeQuestionsToContenu(this)
  }
}
