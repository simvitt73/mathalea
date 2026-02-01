import{c as d}from"./lists-CucBDS1e.js";import{E as H,Y as J,$ as V,r as m,m as r,k as N,y as S,x as c,F as Y,p as z,D as s,v as f,af as U,a as L,K as P,n as j,o as W}from"./index-vfG7N0N9.js";import{T as I}from"./Trinome-Bgft5BJC.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-BymNGK-G.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-CKp8Whw5.js";import"./json/refToUuidCH-C3otjGt1.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-CxJkatM_.js";import"./json/referentiel2022FR-DUyIuCDZ.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const ct="Calculer un nombre dérivé à partir de la définition",st="mathLive",lt=!0,ht="16/12/2021",dt="29/11/2025",ft="29202",mt={"fr-fr":["1AN10-1"],"fr-ch":["3mA2-1"]};class ut extends H{constructor(){super(),this.correctionDetaillee=!1,this.correctionDetailleeDisponible=!0,this.spacingCorr=1.5,this.besoinFormulaireTexte=["Type de fonctions",["Nombres séparés par des tirets :","1 : Fonction affine","2 : Fonction carré","3 : Fonction inverse","4 : Fonction racine carrée","5 : Fonction $x^2+bx+c$","6 : Fonction $ax^2+bx+c$ avec $a \\neq 1$","7 : Fonction  $\\dfrac{a}{x}$","8 : Fonction  $\\dfrac{a}{x+b}$","9 : Mélange"].join(`
`)],this.nbQuestions=1,this.sup="9"}nouvelleVersion(){const K=J({saisie:this.sup,min:1,max:8,melange:9,defaut:9,nbQuestions:this.nbQuestions}),B=V(K,this.nbQuestions);for(let b=0,M=0;b<this.nbQuestions&&M<50;){let e,i,o,l,F,n="",D="",v,u;const C=B[b];C===4?e=m(1,10):C===5||C===6?e=m(-2,3,[0]):C===8?e=0:e=m(-5,8,[0]);const E=`Calculer le taux de variation $t(h)$ de $f$ entre $${e}$ et $${e}+h$, où $h$ est un réel non nul.`,R=`En déduire que $f$ est dérivable en $${e}$ et déterminer $f'(${e})$.`,Q=`Pour déterminer le taux de variation de $f$ entre $${e}$ et $${e}+h$, on applique la définition (avec $h\\neq 0$) :<br>`,g="Comme la limite existe et est finie, on peut en conclure que $f$ est dérivable en ",q="\\text{Définition du taux de variation}",k="\\text{Développement au numérateur}",O="\\text{Simplification au numérateur}",y="\\text{Réduction au numérateur}",_="\\text{Factorisation par } h \\text{ au numérateur}",T="\\text{Simplification par } h";let h="";switch(C){case 1:l=m(-5,5,[0]),F=m(-5,5,[0]),h=`\\text{Application à la fonction } f(x)=${N(l,F)}`,n=`Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R}$ par $f(x)=${N(l,F)} $.<br>`,n+=d({items:[E,R],style:"nombres"}),D=d({items:[Q+`
$\\begin{aligned}t(h) &= \\dfrac{f(${e}+h)-f(${e})}{h}${this.correctionDetaillee?`&${q}`:""}\\\\
&= \\dfrac{${l}(${e}+h)${r(F)}-${f(l)}\\times ${f(e)}${r(-F)}}{h}${this.correctionDetaillee?`&${h}`:""}  \\\\
&= \\dfrac{${f(e*l)}${s(l)} h ${r(F)}-${f(e*l)} ${s(-F)}}{h}${this.correctionDetaillee?`&${k} `:""} \\\\
&= \\dfrac{${S(l)} h } {h}${this.correctionDetaillee?` &${y}`:""}  \\\\
&= ${c(l)} ${this.correctionDetaillee?`&${T}`:""}  \\\\
\\end{aligned}$`,`
On calcule la limite du taux de variation quand $h$ tend vers $0$.<br>
$\\lim\\limits_{h \\rightarrow 0} ${l}=${l}$<br>
`+g+` $${e}$ et donc $f'(${e})=${c(l)}$.<br>${this.correctionDetaillee?`${U("Remarque : ")}Le taux de variations de $f$ est une constante qui ne dépend pas de $h$.<br>
Ce résultat était prévisible puisque la représentation graphique d'une fonction affine est une droite.<br>
La pente entre deux points de la droite est donc toujours égale au coefficient directeur de la fonction affine, ici ${l}.<br>`:""}`],style:"nombres"}),v=l.toString(),u=l.toString();break;case 2:h="\\text{Application à la fonction carré}",n="Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R}$ par $f(x)=x^2$.<br>",n+=d({items:[E,R],style:"nombres"}),D=d({items:[Q+`
$\\begin{aligned}t(h) &= \\dfrac{f(${e}+h)-f(${e})}{h}${this.correctionDetaillee?`&${q}`:""}\\\\
&= \\dfrac{(${e}+h)^2-(${e})^2}{h}${this.correctionDetaillee?`&${h}`:""}\\\\
&= \\dfrac{${f(e)}^2+2\\times${f(e)}\\times h+h^2-${f(e)}^2}{h}${this.correctionDetaillee?"&\\text{Développement de l'identité remarquable}":""}\\\\
&= \\dfrac{${e*e}${r(2*e)} h+h^2-${e*e}}{h}${this.correctionDetaillee?`&${O}`:""}\\\\
&= \\dfrac{${2*e} h+h^2}{h}${this.correctionDetaillee?`&${y}`:""}\\\\
&= \\dfrac{h(${2*e}+h)}{h}${this.correctionDetaillee?`&${_}`:""}\\\\
&=${c(`${2*e} +h`)}${this.correctionDetaillee?`&${T}`:""}\\\\
\\end{aligned}$`,`On calcule la limite du taux de variation quand $h$ tend vers $0$.<br>
$\\lim\\limits_{h \\rightarrow 0} ${2*e} +h=${2*e}$ <br>`+g+` $${e}$ et donc $f'(${e})=${c(2*e)}$.`],style:"nombres"}),v=String(2*e)+"+h",u=String(2*e);break;case 3:h="\\text{Application à la fonction inverse}",n="Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R}^{*}$ par $f(x)=\\dfrac{1}{x}$.<br>",n+=d({items:[E,R],style:"nombres"}),D=d({items:[Q+`
$\\begin{aligned}t(h) &= \\dfrac{f(${e}+h)-f(${e})}{h}${this.correctionDetaillee?`&${q}`:""}\\\\
&= \\dfrac{\\dfrac{1}{${e}+h}-\\dfrac{1}{${e}}}{h}${this.correctionDetaillee?`&${h}`:""}\\\\
&= \\dfrac{\\dfrac{${e}}{(${e}+h)\\times ${f(e)}}-\\dfrac{${e}+h}{${e}\\times (${e}+h)}}{h}${this.correctionDetaillee?"&\\text{Mise au même dénominateur}":""}\\\\
&= \\dfrac{\\dfrac{${e}${s(-e)}-h}{(${e}+h)\\times ${f(e)}}}{h}${this.correctionDetaillee?`&${y}`:""}\\\\
&= \\dfrac{-h}{(${e}+h)\\times ${f(e)}}\\times \\dfrac{1}{h}${this.correctionDetaillee?"&\\text{Diviser par } h\\text{, c'est multiplier par }\\dfrac{1}{h}":""}\\\\
&= ${c(`\\dfrac{-1}{(${e}+h)\\times ${f(e)}}`)} ${this.correctionDetaillee?"&\\text{Simplification par }h":""} \\\\
\\end{aligned}$`,`On calcule la limite du taux de variation quand $h$ tend vers $0$.<br>
$\\lim\\limits_{h \\rightarrow 0} \\dfrac{-1}{(${e}+h)\\times ${f(e)}}= \\dfrac{-1}{${e*e}}$ <br>`+g+` $${e}$ et donc ${e!==1&&e!==-1?`$f'(${e})=${c(`\\dfrac{-1}{${e*e}}`)}$`:`$f'(${e})=${c(-1)}$.`}`],style:"nombres"}),v=`\\frac{-1}{(${e}+h)\\times${e}}`,e!==1&&e!==-1?u=`\\frac{-1}{${e*e}}`:u="-1";break;case 4:h="\\text{Application à la fonction racine carrée}",n="Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R}_{+}$ par $f(x)=\\sqrt{x}$.<br>",n+=d({items:[E,R],style:"nombres"}),D=d({items:[Q+`
$\\begin{aligned}t(h) &= \\dfrac{f(${e}+h)-f(${e})}{h}${this.correctionDetaillee?`&${q}`:""}\\\\
&= \\dfrac{\\sqrt{${e}+h}-\\sqrt{${e}}}{h}${this.correctionDetaillee?`&${h}`:""}\\\\
&=\\dfrac{(\\sqrt{${e}+h}-\\sqrt{${e}})(\\sqrt{${e}+h}+\\sqrt{${e}})}{h(\\sqrt{${e}+h}+\\sqrt{${e}})}${this.correctionDetaillee?'&\\text{Multiplication par la "quantité conjuguée"}':""}\\\\
&=\\dfrac{${e}+h${r(-e)}}{h(\\sqrt{${e}+h}+\\sqrt{${e}})}${this.correctionDetaillee?"&\\text{Identité remarquable : } (a-b)(a+b)=a^2-b^2":""}\\\\
&=\\dfrac{h}{h(\\sqrt{${e}+h}+\\sqrt{${e}})}${this.correctionDetaillee?`&${y}`:""}\\\\
&=${c(`\\dfrac{1}{\\sqrt{${e}+h}+\\sqrt{${e}}}`)} ${this.correctionDetaillee?"&\\text{Simplification de la fraction par } h":""}\\\\
\\end{aligned}$`,`On calcule la limite du taux de variation quand $h$ tend vers $0$.<br>
$\\lim\\limits_{h \\rightarrow 0} \\dfrac{1}{\\sqrt{${e}+h}+\\sqrt{${e}}}=\\dfrac{1}{2 \\sqrt{${e}}}$<br>
`+g+`$${e}$ et donc ${e===1?`$f'(${e})=${c("\\dfrac{1}{2}")}$`:e===4?`$f'(${e})=${c("\\dfrac{1}{4}")}$`:`$f'(${e})=${c(`\\dfrac{1}{2 \\sqrt{${e}}}`)}$.`}`],style:"nombres"}),v=`\\frac{1}{\\sqrt{${e}+h}+\\sqrt{${e}}}`,e===1?u="\\frac{1}{2}":e===4?u="\\frac{1}{4}":u=`\\frac{1}{2 \\sqrt{${e}}}`;break;case 5:{i=m(-2,3),o=m(-4,5,i);const t=new I(1,i,o),$=e*e+i*e+o,A=`((${e}+h)^2${i===0?"":`${s(i)}(${e}+h)`}${o===0?"":`${r(o)}`})`,w=`${e**2}${r(2*e)} h+h^2${i===0?"":`${r(i*e)}${s(i)}h`}${o===0?"":`${r(o)}`}`,p=`${e*e}${r(2*e)}h+h^2${i===0?"":`${r(i*e)}${s(i)}h`}${o===0?"":`${r(o)}`}`,a=`${S(2*e+i)}h+h^2`,x=`h(${2*e+i}+h)`;v=String(2*e+i)+"+h",u=String(2*e+i),h=`\\text{Application à  } f(x)=${t.tex}`,n=` Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R}$ par $f(x)=${t.tex}$.<br>`,n+=d({items:[E,R],style:"nombres"}),D=d({items:[Q+`
$\\begin{aligned}t(h) &= \\dfrac{f(${e}+h)-f(${e})}{h}${this.correctionDetaillee?`&${q}`:""}\\\\
&= \\dfrac{${A}-(${f(e)}^2${i===0?"":`${r(i*e)}`}${o===0?"":`${r(o)}`})}{h}${this.correctionDetaillee?`&${h}`:""}\\\\
&= \\dfrac{(${w})${e*e+i*e+o===0?"-0":`-${f($)}`}}{h}${this.correctionDetaillee?`&${k}`:""}\\\\
&= \\dfrac{${p}${$===0?"":`${r(-$)}`}}{h}${this.correctionDetaillee?`&${O}`:""}\\\\
&= \\dfrac{${a}}{h}${this.correctionDetaillee?`&${y}`:""}\\\\
&= \\dfrac{${x}}{h}${this.correctionDetaillee?`&${_}`:""}\\\\
&=${c(`${2*e+i}+h`)}${this.correctionDetaillee?`&${T}`:""}\\\\
\\end{aligned}$`,`On calcule la limite du taux de variation quand $h$ tend vers $0$.<br>
$\\lim\\limits_{h \\rightarrow 0} ${2*e+i}+h=${2*e+i}$<br>
`+g+` $${e}$ et donc $f'(${e})=${c(2*e+i)}$.`],style:"nombres"})}break;case 6:{const t=m(-2,3,[0,1]);i=m(-2,2),o=m(-2,3);const $=new I(t,i,o),A=t*e*e+i*e+o,w=`(${S(t)}(${e}+h)^2${i===0?"":`${s(i)}(${e}+h)`}${o===0?"":`${r(o)}`})`,p=`${S(t)}\\times${f(e)}^2${r(2*t*e)} h${s(t)}h^2${i===0?"":`${r(i*e)}${s(i)}h`}${o===0?"":`${r(o)}`}`,a=`${t*e*e}${r(2*t*e)}h${s(t)}h^2${i===0?"":`${r(i*e)}${s(i)}h`}${o===0?"":`${r(o)}`}`,x=`${S(2*t*e+i)}h${s(t)}h^2`,G=`h(${2*t*e+i}${s(t)}h)`;h=`\\text{Application à } f(x)=${$.tex}`,n=`Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R}$ par $f(x)=${$.tex}$.<br>`,n+=d({items:[E,R],style:"nombres"}),D=d({items:[Q+`
$\\begin{aligned}t(h) &= \\dfrac{f(${e}+h)-f(${e})}{h}${this.correctionDetaillee?`&${q}`:""}\\\\
&= \\dfrac{${w}-(${S(t)}\\times${f(e)}^2${i===0?"":`${r(i*e)}`}${o===0?"":`${r(o)}`})}{h}${this.correctionDetaillee?`&${h}`:""}\\\\
&= \\dfrac{(${p})${r(-A)}}{h}${this.correctionDetaillee?`&${k}`:""}\\\\
&= \\dfrac{${a}${r(-A)}}{h}${this.correctionDetaillee?`&${O}`:""}\\\\
&= \\dfrac{${x}}{h}${this.correctionDetaillee?`&${y}`:""}\\\\
&= \\dfrac{${G}}{h}${this.correctionDetaillee?`&${_}`:""}\\\\
&=${c(`${2*t*e+i}${s(t)}h`)}${this.correctionDetaillee?`&${T}`:""}\\\\
\\end{aligned}$`,`On calcule la limite du taux de variation quand $h$ tend vers $0$.<br>
$\\lim\\limits_{h \\rightarrow 0} ${2*t*e+i}${s(t)}h=${2*t*e+i}$<br>
`+g+` $${e}$ et donc $f'(${e})=${c(2*t*e+i)}$.`],style:"nombres"}),v=`${2*t*e+i}${s(t)}h`,u=String(2*t*e+i)}break;case 7:{const t=m(-5,10,[0,1,-1]),$=t+z([-1,1]),A=`Calculer le taux de variation $t(h)$ de $f$ entre $${$}$ et $${$}+h$, où $h$ est un réel non nul.`,w=`En déduire que $f$ est dérivable en $${$}$ et déterminer $f'(${$})$.`;h=`\\text{Application à } f(x)=\\dfrac{${t}}{x}`,n=`Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R}^*$ par $f(x)=\\dfrac{${t}}{x}$.<br>`,n+=d({items:[A,w],style:"nombres"}),D=d({items:[Q+`
$\\begin{aligned}t(h) &= \\dfrac{f(${$}+h)-f(${$})}{h}${this.correctionDetaillee?`&${q}`:""}\\\\
&= \\dfrac{\\dfrac{${t}}{${$}+h}-\\dfrac{${t}}{${$}}}{h}${this.correctionDetaillee?`&${h}`:""}\\\\
&= \\dfrac{\\dfrac{${t}\\times ${$}}{${$}(${$}+h)}-\\dfrac{${t}(${$}+h)}{${$}(${$}+h)}}{h}${this.correctionDetaillee?"&\\text{Mise au même dénominateur}":""}\\\\
&= \\dfrac{\\dfrac{${t*$}-${t}(${$}+h)}{${$}(${$}+h)}}{h}${this.correctionDetaillee?`&${y}`:""}\\\\
&= \\dfrac{\\dfrac{${t*$}${r(-t*$)}${s(-t)}h}{${$}(${$}+h)}}{h}${this.correctionDetaillee?`&${k}`:""}\\\\
&= \\dfrac{\\dfrac{${S(-t)}h}{${$}(${$}+h)}}{h}${this.correctionDetaillee?`&${O}`:""}\\\\
&= \\dfrac{${-t}h}{${$}(${$}+h)} \\times \\dfrac{1}{h}${this.correctionDetaillee?"&\\text{Diviser par } h\\text{, c'est multiplier par }\\dfrac{1}{h}":""}\\\\
&=${c(`\\dfrac{${-t}}{${$}(${$}+h)}`)}${this.correctionDetaillee?`&${T}`:""}\\\\
\\end{aligned}$`,`On calcule la limite du taux de variation quand $h$ tend vers $0$.<br>
$\\lim\\limits_{h \\rightarrow 0} \\dfrac{${-t}}{${$}(${$}+h)}=\\dfrac{${-t}}{${$*$}}$<br>
`+g+` $${$}$ et donc $f'(${$})=${c(`\\dfrac{${-t}}{${$*$}}`)}$.`],style:"nombres"}),v=`\\frac{${-t}}{${$}(${$}+h)}`,u=`\\frac{${-t}}{${$*$}}`}break;default:{const t=m(2,6),$=m(-5,5,[0,t+1]);e=t+1-$;const A=`Calculer le taux de variation $t(h)$ de $f$ entre $${e}$ et $${e}+h$, où $h$ est un réel non nul.`,w=`En déduire que $f$ est dérivable en $${e}$ et déterminer $f'(${e})$.`;h=`\\text{Application à } f(x)=\\dfrac{${t}}{x${r($)}}`;const p=e,a=p+$,x=-t;v=`\\frac{${x}}{${a}(${N(1,a,"h")}) }`,u=`\\frac{${x}}{${a*a}}`,n=`Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R} \\smallsetminus \\{${-$}\\}$ par $f(x)=\\dfrac{${t}}{x${r($)}}$.<br>`,n+=d({items:[A,w],style:"nombres"}),D=d({items:[`Pour déterminer le taux de variation de $f$ entre $${p}$ et $${p}+h$, on applique la définition :<br>
$\\begin{aligned}t(h) &= \\dfrac{f(${p}+h)-f(${p})}{h}${this.correctionDetaillee?`&${q}`:""}\\\\
&= \\dfrac{\\dfrac{${t}}{${p}+h${r($)}}-\\dfrac{${t}}{${a}}}{h}${this.correctionDetaillee?`&${h}`:""}\\\\
&= \\dfrac{\\dfrac{${t}\\times ${a}}{ ${a}(h${r(a)})}-\\dfrac{${t}(h${r(a)})}{${a}(h${r(a)})}}{h}${this.correctionDetaillee?"&\\text{Mise au même dénominateur}":""}\\\\
&= \\dfrac{\\dfrac{${t}\\times ${a}-${t}(h${r(a)})}{ ${a}(h${r(a)})}}{h}${this.correctionDetaillee?`&${y}`:""}\\\\
&= \\dfrac{\\dfrac{${t*a}-${t}h${r(-t*a)}}{ ${a}(h${r(a)})}}{h}${this.correctionDetaillee?`&${k}`:""}\\\\
&= \\dfrac{\\dfrac{${S(x)}h}{ ${a}(h${r(a)})}}{h}${this.correctionDetaillee?`&${O}`:""}\\\\
&= \\dfrac{${x}h}{${a}(h${r(a)})} \\times \\dfrac{1}{h}${this.correctionDetaillee?"&\\text{Diviser par } h\\text{, c'est multiplier par }\\dfrac{1}{h}":""}\\\\
&=${c(`\\dfrac{${x}}{${a}(h${r(a)}) }`)}${this.correctionDetaillee?`&${T}`:""}\\\\
\\end{aligned}$`,`On calcule la limite du taux de variation quand $h$ tend vers $0$.<br>
$\\lim\\limits_{h \\rightarrow 0} \\dfrac{${x}}{(h${r(a)})\\times ${a}}=\\dfrac{${x}}{${a*a}}$<br>
`+g+` $${p}$ et donc $f'(${p})=${c(`${new Y(x,a*a).texFractionSimplifiee}`)}$.`],style:"nombres"})}break}n+=L(this,2*b,P.lycee,{texteAvant:"$t(h)=$"}),n+=L(this,2*b+1,P.lycee,{texteAvant:`$f'(${e})=$`}),j(this,2*b,{reponse:{value:v,options:{calculFormel:!0}}}),j(this,2*b+1,{reponse:{value:u}}),this.questionJamaisPosee(b,C,e)&&(this.listeQuestions[b]=n,this.listeCorrections[b]=D,b++),M++}W(this)}}export{dt as dateDeModifImportante,ht as dateDePublication,ut as default,lt as interactifReady,st as interactifType,mt as refs,ct as titre,ft as uuid};
//# sourceMappingURL=1AN10-1-kgRIU0o3.js.map
