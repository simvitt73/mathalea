import{E as Q,Y as _,$ as w,r as b,F as T,y as F,m as o,v as c,x as g,k as p,a3 as P,a as R,K as k,n as I,o as M}from"./index-BB3ZcMz7.js";import{P as N}from"./Polynome-DpT9Nbbw.js";import{T as j}from"./Trinome-wibkk2de.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-fVupTN-r.js";import"./json/refToUuidCH-BX1ZhSY0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-eCsKGSUT.js";import"./json/referentiel2022FR-noHHLeEt.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const We="Déterminer une équation de tangente",Ze=!0,e$="mathLive",$$="16/12/2021",t$="09/12/2025",r$="4c8c7",i$={"fr-fr":["1AN11-3"],"fr-ch":[]};class n$ extends Q{constructor(){super(),this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets :","1 : Avec un nombre dérivé et une image donnés","2 : Polynôme degré 2","3 : Polynôme degré 3","4 : Fonction rationnelle","5 : Mélange"].join(`
`)],this.besoinFormulaire2CaseACocher=["Correction sans formule"],this.nbQuestions=1,this.nbCols=1,this.nbColsCorr=1,this.spacing=1.5,this.spacingCorr=1.5,this.sup="5"}nouvelleVersion(){const O=_({saisie:this.sup,min:1,max:4,melange:5,defaut:5,nbQuestions:this.nbQuestions}),A=w(O,this.nbQuestions);for(let f=0,L=0;f<this.nbQuestions&&L<50;){let m="",l="",$,t,i,e,n,y,D,E;const C=" L'équation réduite de la tangente $(T)$ au point d'abscisse $a$  est : $y=f'(a)(x-a)+f(a)$.<br><br>",q=` L'équation réduite de la tangente $(T)$ au point d'abscisse $a$  est : $y=mx+p$.<br>
       $m$ est le nombre dérivé de $f$ en $a$ et on calcule $p$ en utlisant un point qui appartient à la droite. <br>
       On utilise pour cela le point de coordonnées $(a\\,;\\,f(a))$.<br><br>`;switch(A[f]){case 1:$=b(-5,5),t=b(-5,5,0),i=b(-10,10),D=b(-10,-7),E=b(7,10),m=`Soit $f$ une fonction dérivable sur $[${D}\\,;\\,${E}]$ et $\\mathcal{C}_f$ sa courbe représentative.<br>`,m+=`On sait que $f(${$})=${t}$ et que $f'(${$})=${i}$.<br>`,m+=`Déterminer l'équation réduite de la tangente $(T)$ à la courbe $\\mathcal{C}_f$ au point d'abscisse $${$}$.<br>`,this.sup2?(l=q+`Le coefficient directeur de la tangente est égal au nombre dérivé. <br>
            Ainsi, $m=f'(${$})=${i}$.<br><br>`,l+=`On obtient alors $(T) : y=${i}x+p$.<br><br>`,l+=`La tangente passe par le point $A$ de coordonnées $(${$}\\,;\\,f(${$}))$.<br>`,l+=`On a $f(${$})=${t}$.<br><br>`,l+="Les coordonnées de $A$ vérifient l'équation, donc :<br>",l+=`$${t}=${i}\\times${c($)}+p$<br>`,l+=`$${t}=${i*$}+p$<br>`,l+=`$p=${t}${o(-i*$)}$<br>`,l+=`$p=${t-i*$}$<br><br>`,l+=`Ainsi, l'équation de la tangente est : $(T) : ${g(`y=${p(i,t-i*$)}`)}$.`):(l=C+`On obtient pour $a=${$}$ :<br>
          $y=f'(${$})(x-${c($)})+f(${$})$<br><br>
         D'après l'énoncé, $f'(${$})=${i}$ et $f(${$})=${t}$, on a alors :<br>
          ${$===0?`$y=${i}x${o(t)}$`:`$y=${i}(x${o(-$)})${o(t)}$`}<br><br>`,l+=`En simplifiant l'écriture, on obtient  : $(T) : ${g(`y=${p(i,t-i*$)}`)}$.`),y=p(i,t-i*$);break;case 2:{$=b(-3,3,[0]),t=b(3,3),i=b(-5,5),e=b(-4,4,[0]);const u=new j($,t,i),a=u.texCalculImage(e),s=u.image(e).valeurDecimale,r=2*$*e+t;m=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${u.tex}$ et $\\mathcal{C}_f$ sa courbe représentative.<br>`,m+=`Déterminer l'équation réduite de la tangente $(T)$ à $\\mathcal{C}_f$ au point d'abscisse $${e}$.`,this.sup2?l=q+`La fonction $f$ est un polynôme, donc elle est dérivable sur $\\mathbb{R}$.<br><br>
          $\\bullet$ Calcul de $f'(x)$ :<br>
          $f'(x)=${p(2*$,t)}$<br><br>
          $\\bullet$  Calcul de $f'(${e})$ :<br>
          $f'(${e})=${2*$}\\times${c(e)}${t===0?"":`${o(t)}`}=${r}$<br><br>
          $\\bullet$ Calcul de $f(${e})$ :<br>
          $f(${e})=${a}$<br><br>
      
          Le coefficient directeur de la tangente est le nombre dérivé. <br>
          Ainsi, $m=f'(${e})=${r}$.<br><br>
          On obtient alors $(T) : y=${r}x+p$.<br><br>
          La tangente passe par le point $A$ de coordonnées $(${e}\\,;\\,f(${e}))$ soit $(${e}\\,;\\,${s})$.<br><br>
          Les coordonnées de $A$ vérifient l'équation, donc :<br>
          $${s}=${r}\\times${c(e)}+p$<br>
          $${s}=${r*e}+p$<br>
          $p=${s}${o(-r*e)}$<br>
          $p=${s-r*e}$<br><br>
          Ainsi, l'équation de la tangente est : $(T) : ${g(`y=${p(r,s-e*r)}`)}$.`:l=C+`La fonction $f$ est un polynôme, donc elle est dérivable sur $\\mathbb{R}$.<br><br>
          $\\bullet$ Calcul de $f'(x)$ :<br>
          $f'(x)=${2*$===1?"":2*$===-1?"-":2*$}x${t===0?"":`${o(t)}`}$<br><br>
          $\\bullet$  Calcul de $f'(${e})$ :<br>
          $f'(${e})=${2*$}\\times${c(e)}${t===0?"":`${o(t)}`}=${r}$<br><br>
          $\\bullet$ Calcul de $f(${e})$ :<br>
          $f(${e})=${a}$<br><br>
          En remplaçant les valeurs dans cette équation, on obtient : <br>
       $y=f'(${e})(x${o(-e)})+f(${e})$ <br>
       $y=${r}(x${o(-e)})${o(s)}$<br> <br>
       En simplifiant l'écriture, on obtient  : $(T) : ${g(`y=${p(r,s-e*r)}`)}$.`,y=p(r,s-e*r)}break;case 3:{$=b(-2,2,[0]),t=b(-3,3),i=b(-2,5),e=b(-5,5,0),n=b(-2,4);const u=new N({coeffs:[e,i,t,$]}),a=u.image(n),s=u.derivee(),r=s.image(n),h=`${$===1||$===-1?`${F($)}`:`${$}\\times`}${c(n)}^3${t===0?"":`${t===1||t===-1?`${P(t)}`:`${o(t)}\\times`}${c(n)}^2`}${i===0?"":`${i===1||i===-1?`${P(i)}`:`${o(i)}\\times`}${c(n)}`}${e===0?"":`${o(e)}`}`,d=3*$,x=2*t,v=`${d===1||d===-1?F(d):`${d}\\times`}${c(n)}^2${x===0?"":`${x===1||x===-1?o(x):`${o(x)}\\times`}${c(n)}`}${i===0?"":`${o(i)}`}`,S="La fonction $f$ est un polynôme, donc elle est dérivable sur $\\mathbb{R}$.<br><br>";m=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${u.toLatex()}$ et $\\mathcal{C}_f$ sa courbe représentative.<br>`,m+=`Déterminer l'équation réduite de la tangente $(T)$ à $\\mathcal{C}_f$ au point d'abscisse $${n}$.`,this.sup2?l=q+S+`
          $\\bullet$ Calcul de $f'(x)$ :<br>
          $f'(x)=${s.toLatex()}$<br><br>
          $\\bullet$ Calcul de $f'(${n})$ :<br>
          $f'(${n})=${v}=${r}$<br><br>
          $\\bullet$ Calcul de $f(${n})$ :<br>
          $f(${n})=${h}=${a}$<br><br>
        
          Le coefficient directeur de la tangente est le nombre dérivé.<br>
          Ainsi, $m=f'(${n})=${r}$.<br><br>
          On obtient alors $(T) : y=${r}x+p$.<br><br>
          La tangente passe par le point $A$ de coordonnées $(${n}\\,;\\,f(${n}))=(${n}\\,;\\,${a})$.<br><br>
          Les coordonnées de $A$ vérifient l'équation, donc :<br>
          $${a}=${r}\\times${c(n)}+p$<br>
          $${a}=${r*n}+p$<br>
          $p=${a}${o(-r*n)}$<br>
          $p=${a-r*n}$<br><br>
          Ainsi, l'équation de la tangente est : $(T) : ${g(`y=${p(r,a-n*r)}`)}$.`:l=C+S+`
          $\\bullet$ Calcul de $f'(x)$ :<br>
          $f'(x)=${s.toLatex()}$<br><br>
          $\\bullet$ Calcul de $f'(${n})$ :<br>
          $f'(${n})=${v}=${r}$<br><br>
          $\\bullet$ Calcul de $f(${n})$ :<br>
          $f(${n})=${h}=${a}$<br><br>
          En remplaçant les valeurs dans cette équation, on obtient : <br>
       $y=f'(${n})(x${o(-n)})+f(${n})$ <br>
       $y=${r}(x${o(-n)})${o(a)}$<br> <br>
       En simplifiant l'écriture, on obtient  : $(T) : ${g(`y=${p(r,a-n*r)}`)}$.`,y=p(r,a-n*r)}break;default:{$=b(1,5),t=b(1,2);const u=b(1,4);i=-t*u,e=b(u+1,8);const a=t*e+i,s=new T($,a).simplifie(),r=new T(-$*t,a*a).simplifie(),h=new T(e,1),d=s.differenceFraction(r.produitFraction(h)).simplifie(),x=`${F(t)}x${o(i)}`,v=`La fonction $f$ est dérivable sur $]${u}\\,;\\,+\\infty[$ (quotient de fonctions dérivables dont le dénominateur ne s'annule pas sur $]${u}\\,;\\,+\\infty[$).<br><br>`;m=`Soit $f$ la fonction définie sur $]${u}\\,;\\,+\\infty[$ par $f(x)=\\dfrac{${$}}{${x}}$ et $\\mathcal{C}_f$ sa courbe représentative.<br>`,m+=`Déterminer l'équation réduite de la tangente $(T)$ à $\\mathcal{C}_f$ au point d'abscisse $${e}$.`,this.sup2?l=v+`
          $\\bullet$ Calcul de $f'(x)$ :<br>
          $f'(x)=\\dfrac{${-$*t}}{(${x})^2}$<br><br>
          $\\bullet$ Calcul de $f'(${e})$ :<br>
          $f'(${e})=\\dfrac{${-$*t}}{(${t===1?"":`${t}\\times`}${e}${o(i)})^2}=\\dfrac{${-$*t}}{${c(a)}^2}=${r.texFractionSimplifiee}$<br><br>
          $\\bullet$ Calcul de $f(${e})$ :<br>
          $f(${e})=\\dfrac{${$}}{${t===1?"":`${t}\\times`}${e}${o(i)}}=\\dfrac{${$}}{${a}}=${s.texFractionSimplifiee}$<br><br>
          L'équation réduite de la tangente est $(T) : y=mx+p$.<br><br>
          Le coefficient directeur de la tangente est le nombre dérivé. <br>
          Ainsi, $m=f'(${e})=${r.texFractionSimplifiee}$.<br><br>
          On obtient alors $(T) : y=${r.texFractionSimplifiee}x+p$.<br><br>
          La tangente passe par le point $A$ de coordonnées $(${e}\\,;\\,f(${e}))$ soit $\\left(${e}\\,;\\,${s.texFractionSimplifiee}\\right)$.<br><br>
          Les coordonnées de $A$ vérifient l'équation, donc :<br>
          $${s.texFractionSimplifiee}=${r.texFractionSimplifiee}\\times${c(e)}+p$<br>
          $p=${s.texFractionSimplifiee}${r.produitFraction(h).oppose().ecritureAlgebrique}$<br>
          $p=${d.texFractionSimplifiee}$<br><br>
          Ainsi, l'équation de la tangente est : $(T) : ${g(`y=${r.valeurDecimale===1?"x":r.valeurDecimale===-1?"-x":`${r.texFractionSimplifiee}x`}${d.ecritureAlgebrique}`)}$.`:l=C+v+`
          $\\bullet$ Calcul de $f'(x)$ :<br>
          $f'(x)=\\dfrac{${-$*t}}{(${x})^2}$<br><br>
          $\\bullet$ Calcul de $f'(${e})$ :<br>
          $f'(${e})=\\dfrac{${-$*t}}{(${t===1?"":`${t}\\times`}${e}${o(i)})^2}=\\dfrac{${-$*t}}{${a*a}}=${r.texFractionSimplifiee}$<br><br>
          $\\bullet$ Calcul de $f(${e})$ :<br>
          $f(${e})=\\dfrac{${$}}{${t===1?"":`${t}\\times`}${e}${o(i)}}=${s.texFractionSimplifiee}$<br><br>
          En remplaçant les valeurs dans cette équation, on obtient : <br>
       $y=f'(${e})(x-${c(e)})+f(${e})$ <br>
       $y=${r.texFractionSimplifiee}(x-${c(e)})${s.ecritureAlgebrique}$.<br> <br>
       En simplifiant l'écriture, on obtient  : $(T) : ${g(`y=${r.valeurDecimale===1?"x":r.valeurDecimale===-1?"-x":`${r.texFractionSimplifiee}x`}${d.ecritureAlgebrique}`)}$.`,y=p(r,d)}break}m+=R(this,f,k.lycee,{texteAvant:"<br>$y=$"}),I(this,f,{reponse:{value:y}}),this.questionJamaisPosee(f,A[f],$,t,i)&&(this.listeQuestions[f]=m,this.listeCorrections[f]=l,f++),L++}M(this)}}export{t$ as dateDeModifImportante,$$ as dateDePublication,n$ as default,Ze as interactifReady,e$ as interactifType,i$ as refs,We as titre,r$ as uuid};
//# sourceMappingURL=1AN11-3-DRMYLGgG.js.map
