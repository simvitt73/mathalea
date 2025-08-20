import { miseEnEvidence, texteEnCouleur } from '../../lib/outils/embellissements'
import { ecritureAlgebrique, ecritureParentheseSiNegatif, reduireAxPlusB } from '../../lib/outils/ecritures'
import { texNombre } from '../../lib/outils/texNombre'
import { randint } from '../../modules/outils'
import ExerciceQcmA from '../ExerciceQcmA'
import FractionEtendue from '../../modules/FractionEtendue'
export const dateDePublication = '10/08/2025'
export const uuid = '3bd46'
// Author Stéphane Guyon
export const refs = {
  'fr-fr': ['1A-SN-2'],
  'fr-ch': []
}
export const interactifReady = true
export const interactifType = 'qcm'
export const amcReady = 'true'
export const amcType = 'qcmMono'
export const titre = 'Calculer avec les suites arithmétiques et géométriques'
export default class Puissances extends ExerciceQcmA {
  versionOriginale: () => void = () => {
    this.enonce = 'Soit $a$ un nombre réel non nul et $n$ un entier non nul. A quelle expression est égale $a^{3n}(a^n)^2$ ?'
    this.correction = 'On applique la propriété du quotient des puissances d\'un réel : <br>'
    this.correction += 'Soit n et p deux entiers et a un réel :  $\\dfrac{a^n}{a^p}=a^{n-p}$<br>'
    this.correction += 'On applique la propriété du produit des puissances d\'un réel : <br>'
    this.correction += 'Soient n et p deux entiers et a un réel :  $a^n\\times a^p=a^{n+p}$<br>'
    this.correction += 'et du produit de puissances : <br>'
    this.correction += 'Soient n et p deux entiers et a un réel :  $\\left(a^{n}\\right)^p=a^{np}$<br>'
    this.correction += '$\\begin{aligned} a^{3n}(a^n)^2&=a^{3n}\\times a^{3n}\\\\    &=a^{5n}    \\end{aligned}$<br>'
    this.reponses = [
      '$a^{5n}$',
      '$a^{6n}$',
      '$a^{3n^2}$',
      '$a^{6n^2}$',
    ]
  }

  versionAleatoire = () => {
   const cas =randint(4,4)
   if (cas===1){const a = randint(-5, 5,[0,1])
    const b = randint(-5, 5,[-1,0,1,a])
    
    this.enonce = `Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${reduireAxPlusB(a,b,'n')}$.`
    this.correction = `Soit $n\\in \\mathbb{N}$. On sait que la forme explicite d'une suite arithmétique $(u_n)$, de premier terme $u_0\\in \\mathbb{R}$ et de raison $r\\in \\mathbb{R}$
    <br> est sous la forme : $u_n=u_0+n\\times r$.<br>
Avec $u_0=${b}$ et $r=${a}$, on a bien $u_n=${reduireAxPlusB(a,b,'n')}$.<br>
$${miseEnEvidence(`(u_n)`)}$  ${texteEnCouleur(`est donc une suite arithmétique de raison ${a}`)}. `  

   
    this.reponses = [
     `$(u_n)$ est une suite arithmétique de raison $${a}$.`,
     `$(u_n)$ est une suite arithmétique de raison $${b}$.`,
     `$(u_n)$ est une suite géométrique de raison $${a}$.`,
     `$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique.`
    ]}
 if (cas===2){const a = randint(-5, 5,[0,1])
    const b = randint(-5, 5,[-1,0,1,a])
    
    this.enonce = `Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${a}\\times ${ecritureParentheseSiNegatif(b)}^n$.`
    this.correction = `Soit $n\\in \\mathbb{N}$. On sait que la forme explicite d'une suite géométrique $(u_n)$, de premier terme $u_0\\in \\mathbb{R}$ et de raison $q\\in \\mathbb{R}$
    <br> est sous la forme : $u_n=u_0\\times q^n$.<br>
Avec $u_0=${a}$ et $q=${b}$, on a bien $u_n=${a}\\times ${ecritureParentheseSiNegatif(b)}^n$.<br>
$${miseEnEvidence(`(u_n)`)}$  ${texteEnCouleur(`est donc une suite géométrique de raison ${b}`)}. `

    this.reponses = [
       `$(u_n)$ est une suite géométrique de raison $${b}$`,
     `$(u_n)$ est une suite arithmétique de raison $${b}$`,
     `$(u_n)$ est une suite géométrique de raison $${a}$`,
     `$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique`
    ]}
 if (cas===3){const a = randint(-5, 5,[0,1])
    const b = randint(-5, 5,[-1,0,1,a,-a])
    const fraction1 = new FractionEtendue(a+b, a+1)
    const fraction2 = new FractionEtendue(a+b*b, a+b)
    this.enonce = `Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${a}+ ${ecritureParentheseSiNegatif(b)}^n$.`
    this.correction = `Soit $n\\in \\mathbb{N}$.<br>
    On calcule les premiers termes pour savoir si la suite peut être arithmétique ou géométrique : <br>
    $u_0=${a}+ ${ecritureParentheseSiNegatif(b)}^0=${a}+1=${a+1}.$<br>
    $u_1=${a}+ ${ecritureParentheseSiNegatif(b)}^1=${a}+${ecritureParentheseSiNegatif(b)}=${a+b}.$<br>
    $u_2=${a}+ ${ecritureParentheseSiNegatif(b)}^2=${a}+${ecritureParentheseSiNegatif(b)}^2=${a+b*b}.$<br>
    On observe que $u_2-u_1=${a+b*b}${ecritureAlgebrique(-a-b)}=${b*b-b}$.<br>
    et $u_1-u_0=${a+b}${ecritureAlgebrique(-a-1)}=${b-1}$.  <br>
   Comme $u_2-u_1\\neq u_1-u_0$, on en déduit que la suite n'est pas arithmétique.<br>
   De même, on compare les quotients des termes consécutifs: <br>
   $\\dfrac{u_1}{u_0} = \\dfrac{${a+b}}{${a+1}}$`
   if (fraction1.estIrreductible){}
   else{ this.correction +=` =$${fraction1.texFractionSimplifiee}$`}
   this.correction +=` et $\\dfrac{u_2}{u_1} = \\dfrac{${a+b*b}}{${a+b}}$`
    if (fraction2.estIrreductible){}
    else{ this.correction +=` =$${fraction2.texFractionSimplifiee}$`}
    this.correction +=`<br>On observe que la suite n'est pas géométrique. <br>
    $${miseEnEvidence('(u_n)')}$  ${texteEnCouleur('est donc une suite ni arithmétique, ni géométrique ')}. `
    this.reponses = [
      `$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique.`,
       `$(u_n)$ est une suite géométrique de raison $${b}$.`,
     `$(u_n)$ est une suite arithmétique de raison $${b}$.`,
     `$(u_n)$ est une suite arithmétique de raison $${a}$.`,
     
    ]}
     if (cas===4){const a = randint(-5, 5,[0,1])
    const b = randint(-5, 5,[-1,0,1,a])
    const c = randint(-5, 5,[-1,0,1,a])
    this.enonce = `Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${a}\\times ${ecritureParentheseSiNegatif(b)}^n${ecritureAlgebrique(c)}$.`
    this.correction = `Soit $p\\in \\mathbb{N}$ et $r\\in\\mathbb{R}$.<br>
    On sait que le terme de rang $n$ d'une suite arithmétique $(u_n)$ de premier terme $u_p$ et de rasion $r$ s'écrit $u_n=u_p + (n-p)r$.<br>
    Il vient donc, en appliquant les valeurs de l'énoncé :<br>
   `
   
    this.reponses = [
      `$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique`,
       `$(u_n)$ est une suite géométrique de raison $${a}$`,
     `$(u_n)$ est une suite arithmétique de raison $${c}$`,
     `$(u_n)$ est une suite arithmétique de raison $${c}$ et géométrique de raison $${b}$`,
     
    ]}
     if (cas===5){const a = randint(-5, 5,[0,1])
    const b = randint(-5, 5,[-1,0,1,a])
    const c = randint(-5, 5,[-1,0,1,a])
    this.enonce = `Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${a}n$.`
    this.correction = `Soit $p\\in \\mathbb{N}$ et $r\\in\\mathbb{R}$.<br>
    On sait que le terme de rang $n$ d'une suite arithmétique $(u_n)$ de premier terme $u_p$ et de rasion $r$ s'écrit $u_n=u_p + (n-p)r$.<br>
    Il vient donc, en appliquant les valeurs de l'énoncé :<br>
   `
   
    this.reponses = [
      `$(u_n)$ est une suite arithmétique de raison $${a}$`,
       `$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique`,
       `$(u_n)$ est une suite géométrique de raison $${a}$`,
     `$(u_n)$ est une suite arithmétique et géométriquede de raison $${a}$`,
     
    ]}
     if (cas===6){const a = randint(-5, 5,[0,1])
    const b = randint(-5, 5,[-1,0,1,a])
    const c = randint(-5, 5,[-1,0,1,a])
    this.enonce = `Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${a}n^2${ecritureAlgebrique(b)}$.`
    this.correction = `Soit $p\\in \\mathbb{N}$ et $r\\in\\mathbb{R}$.<br>
    On sait que le terme de rang $n$ d'une suite arithmétique $(u_n)$ de premier terme $u_p$ et de rasion $r$ s'écrit $u_n=u_p + (n-p)r$.<br>
    Il vient donc, en appliquant les valeurs de l'énoncé :<br>
   `
   
    this.reponses = [
       `$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique`,
       `$(u_n)$ est une suite arithmétique de raison $${a}$`,
       `$(u_n)$ est une suite géométrique de raison $${a}$`,
     `$(u_n)$ est une suite arithmétique de raison $${b}$`,
     
    ]}
  }

  constructor () {
    super()
     this.options = { vertical: true, ordered: false }
    this.versionAleatoire()
  }
}
