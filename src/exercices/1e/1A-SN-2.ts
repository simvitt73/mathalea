import { ecritureAlgebrique, ecritureParentheseSiNegatif, reduireAxPlusB } from '../../lib/outils/ecritures'
import { texNombre } from '../../lib/outils/texNombre'
import { randint } from '../../modules/outils'
import ExerciceQcmA from '../ExerciceQcmA'
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
   const cas =randint(1,6)
   if (cas===1){const a = randint(-5, 5,[0,1])
    const b = randint(-5, 5,[-1,0,1,a])
    
    this.enonce = `Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${reduireAxPlusB(a,b,'n')}$`
    this.correction = `Soit $p\\in \\mathbb{N}$ et $r\\in\\mathbb{R}$.<br>
    On sait que le terme de rang $n$ d'une suite arithmétique $(u_n)$ de premier terme $u_p$ et de rasion $r$ s'écrit $u_n=u_p + (n-p)r$.<br>
    Il vient donc, en appliquant les valeurs de l'énoncé :<br>
   `
   
    this.reponses = [
     `$(u_n)$ est une suite arithmétique de raison $${a}$`,
     `$(u_n)$ est une suite arithmétique de raison $${b}$`,
     `$(u_n)$ est une suite géométrique de raison $${a}$`,
     `$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique`
    ]}
 if (cas===2){const a = randint(-5, 5,[0,1])
    const b = randint(-5, 5,[-1,0,1,a])
    
    this.enonce = `Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${a}\\times ${ecritureParentheseSiNegatif(b)}^n$.`
    this.correction = `Soit $p\\in \\mathbb{N}$ et $r\\in\\mathbb{R}$.<br>
    On sait que le terme de rang $n$ d'une suite arithmétique $(u_n)$ de premier terme $u_p$ et de rasion $r$ s'écrit $u_n=u_p + (n-p)r$.<br>
    Il vient donc, en appliquant les valeurs de l'énoncé :<br>
   `
   
    this.reponses = [
       `$(u_n)$ est une suite géométrique de raison $${b}$`,
     `$(u_n)$ est une suite arithmétique de raison $${b}$`,
     `$(u_n)$ est une suite géométrique de raison $${a}$`,
     `$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique`
    ]}
 if (cas===3){const a = randint(-5, 5,[0,1])
    const b = randint(-5, 5,[-1,0,1,a])
    
    this.enonce = `Soit $(u_n)$ la suite définie pour tout entier $n$ par $u_n=${a}+ ${ecritureParentheseSiNegatif(b)}^n$.`
    this.correction = `Soit $p\\in \\mathbb{N}$ et $r\\in\\mathbb{R}$.<br>
    On sait que le terme de rang $n$ d'une suite arithmétique $(u_n)$ de premier terme $u_p$ et de rasion $r$ s'écrit $u_n=u_p + (n-p)r$.<br>
    Il vient donc, en appliquant les valeurs de l'énoncé :<br>
   `
   
    this.reponses = [
      `$(u_n)$ n'est ni une suite arithmétique, ni une suite géométrique`,
       `$(u_n)$ est une suite géométrique de raison $${b}$`,
     `$(u_n)$ est une suite arithmétique de raison $${b}$`,
     `$(u_n)$ est une suite arithmétique de raison $${a}$`,
     
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
