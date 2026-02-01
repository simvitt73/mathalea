import{E as T,$ as O,r as n,p as F,k as r,P as D,F as g,s as S,y as d,x as h,D as q,a as y,K as E,n as R,o as C}from"./index-BvuGzI-o.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-K3nUGUh4.js";import"./json/refToUuidCH-DBCD2E_6.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-OtHQ7xZ3.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const ze=!0,Ge="mathlive",He="02/05/2023",Ue="Résoudre des équations avec un quotient",We="b5828",Xe={"fr-fr":["2N52-5","BP2RES32"],"fr-ch":[]};class Ye extends T{constructor(){super(),this.besoinFormulaireNumerique=["Type d'équations",3,`1 : A(x)/B(x)=0
 2 : A(x)/B(x)=a ou a/A(x)=b/B(x)
 3 : Mélange`],this.nbQuestions=2,this.sup=3}nouvelleVersion(){let A=[];this.sup===1?A=[1,2]:this.sup===2?A=[3,4]:A=[1,2,3,4];const Q=O(A,this.nbQuestions);for(let b=0,P=0;b<this.nbQuestions&&P<50;){let f="",l="",e,t,i,s,a,v,p,$,o;const k=Q[b],w="Préciser les valeurs interdites éventuelles, puis résoudre l'équation : ";let m,u,c,B,x;switch(k){case 1:for(e=n(-3,9,0),t=n(-9,9),i=n(-9,9,0),s=n(-9,9);e*s-t*i===0;)e=n(-3,9,0),t=n(-9,9),i=n(-9,9,0),s=n(-9,9);p=F([!0,!1]),f=w,t===0?f+=`$\\dfrac{${r(e,t)}}{${r(i,s)}}=0$.`:f+=`${p?`$\\dfrac{${r(e,t)}}{${r(i,s)}}=0$`:`$\\dfrac{${t}${q(e)}x}{${r(i,s)}}=0$`}.`,D.isDiaporama?l="":l="Déterminer les valeurs interdites revient à déterminer les valeurs qui annulent le dénominateur du quotient, puisque la division par $0$ n'existe pas.<br>",c=new g(-s,i),x=new g(-t,e),m=`\\left\\{${c.texFractionSimplifiee}\\right\\}`,u=`\\left\\{${x.texFractionSimplifiee}\\right\\}`,l+=`Or $${r(i,s)}=0$ si et seulement si  $x=${c.texFractionSimplifiee}$. <br>
          Donc l'ensemble des valeurs interdites est  $${m}$. <br>`,t===0?l+=`Pour tout $x\\in \\mathbb{R}\\smallsetminus\\left\\{${c.texFractionSimplifiee}\\right\\}$, <br>
 $\\begin{aligned}
 \\dfrac{${r(e,t)}}{${r(i,s)}}&=0 \\\\
 ${r(e,t)}&=0 ${S(7)} \\text{ car }\\dfrac{A(x)}{B(x)}=0 \\text{ si et seulement si } A(x)=0 \\text{ et } B(x)\\neq 0\\\\
x&= ${x.texFractionSimplifiee}
\\end{aligned}$<br>`:l+=`Pour tout $x\\in \\mathbb{R}\\smallsetminus\\left\\{${c.texFractionSimplifiee}\\right\\}$,<br>
 $\\begin{aligned}
 ${p?`\\dfrac{${r(e,t)}}{${r(i,s)}}&=0`:`\\dfrac{${t}${q(e)}x}{${r(i,s)}}&=0`}\\\\
 ${p?`${r(e,t)}&=0`:`${t}${q(e)}x&=0`}${S(7)} \\text{ car }\\dfrac{A(x)}{B(x)}=0 \\text{ si et seulement si } A(x)=0 \\text{ et } B(x)\\neq 0\\\\
x&= ${x.texFractionSimplifiee}
\\end{aligned}$<br>`,l+=` $${x.texFractionSimplifiee}$ n'est pas une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.`;break;case 2:e=n(1,4),a=n(1,10),t=e*a*a,i=n(-9,9,0),v=n(-4,4,0),s=i*v,p=F([!0,!1]),f=w,F([!0,!1])?(f+=`${p?`$\\dfrac{${d(e)}x^2-${t}}{${r(i,s)}}=0$`:`$\\dfrac{${t}-${d(e)}x^2}{${r(i,s)}}=0$`}.`,D.isDiaporama?l="":l="Déterminer les valeurs interdites revient à déterminer les valeurs qui annulent le dénominateur du quotient, puisque la division par $0$ n'existe pas.<br>",c=new g(-v,1),m=`\\left\\{${c.texFractionSimplifiee}\\right\\}`,l+=`Or $${r(i,s)}=0$ si et seulement si  $x=${c.texFractionSimplifiee}$. <br>
          Donc l'ensemble des valeurs interdites est  $${m}$.<br>
          Pour tout $x\\in \\mathbb{R}\\smallsetminus${m}$, <br>
            $\\begin{aligned}
            ${p?`\\dfrac{${d(e)}x^2-${t}}{${r(i,s)}}&=0`:`\\dfrac{${t}-${d(e)}x^2}{${r(i,s)}}&=0`}\\\\
            ${p?`${d(e)}x^2-${t}&=0`:`${t}-${d(e)}x^2&=0`}${S(7)} \\text{ car }\\dfrac{A(x)}{B(x)}=0 \\text{ si et seulement si } A(x)=0 \\text{ et } B(x)\\neq 0\\\\
            ${d(e)}x^2&=${t}\\\\
            x^2&=${a*a}\\\\
           x= ${a}&\\text{ ou } x= -${a}
           \\end{aligned}$<br>
           `,-v===a||v===a?-v===a?(u=`\\left\\{${-a}\\right\\}`,l+=`  $${a}$ est une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.
        `):(u=`\\left\\{${a}\\right\\}`,l+=`  $${-a}$ est une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.
        `):(u=`\\left\\{${-a}\\,;\\,${a}\\right\\}`,l+=`  $${-a}$ et $${a}$ ne sont pas des valeurs interdites, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.
        `)):(f+=`${p?`$\\dfrac{${d(e)}x^2+${t}}{${r(i,s)}}=0$`:`$\\dfrac{${t}+${d(e)}x^2}{${r(i,s)}}=0$`}.`,D.isDiaporama?l="":l="Déterminer les valeurs interdites revient à déterminer les valeurs qui annulent le dénominateur du quotient, puisque la division par $0$ n'existe pas.<br>",m=`\\left\\{${-v}\\right\\}`,u="\\emptyset",l+=`Or $${r(i,s)}=0$ si et seulement si  $x=${-v}$. <br>
Donc l'ensemble des valeurs interdites est  $${m}$.<br>
Pour tout $x\\in \\mathbb{R}\\smallsetminus${m}$, <br>
  $\\begin{aligned}
  ${p?`\\dfrac{${d(e)}x^2+${t}}{${r(i,s)}}&=0`:`\\dfrac{${t}+${d(e)}x^2}{${r(i,s)}}&=0`}\\\\
  ${p?`${d(e)}x^2+${t}&=0`:`${t}+${d(e)}x^2&=0`}${S(7)} \\text{ car }\\dfrac{A(x)}{B(x)}=0 \\text{ si et seulement si } A(x)=0 \\text{ et } B(x)\\neq 0\\\\
  ${d(e)}x^2&=-${t}\\\\
  x^2&=-${a*a}
 \\end{aligned}$<br>
 `,l+=`Puisque $-${a*a}<0$, cette équation n'a pas de solution, donc l'ensemble des solutions est  $${h(`\\mathscr{S}=${u}`)}$.`);break;case 3:for(e=n(-3,5,0),t=n(-9,9),i=n(-9,9,0),s=n(-9,9),$=n(-9,9,0);e*s-t*i===0||e-$*i===0;)e=n(-3,5),t=n(-9,9),i=n(-9,9,0),s=n(-9,9),$=n(-9,9,0);p=F([!0,!1]),f=w,t===0?f+=`$\\dfrac{${r(e,t)}}{${r(i,s)}}=${$}$.`:f+=`${p?`$\\dfrac{${r(e,t)}}{${r(i,s)}}=${$}$`:`$\\dfrac{${t}${q(e)}x}{${r(i,s)}}=${$}$`}.`,D.isDiaporama?l="":l="Déterminer les valeurs interdites revient à déterminer les valeurs qui annulent le dénominateur du quotient, puisque la division par $0$ n'existe pas.<br>",c=new g(-s,i),m=`\\left\\{${c.texFractionSimplifiee}\\right\\}`,x=new g($*s-t,e-$*i),l+=`Or $${r(i,s)}=0$ si et seulement si  $x=${c.texFractionSimplifiee}$. <br>
          Donc l'ensemble des valeurs interdites est  $${m}$. <br>
          Pour tout $x\\in \\mathbb{R}\\smallsetminus${m}$,<br>`,t===0?l+=`
            $\\begin{aligned}
            \\dfrac{${r(e,t)}}{${r(i,s)}}&=${$}\\\\
            ${r(e,t)}&=${$}\\times(${r(i,s)})${S(7)} \\text{ car les produits en croix sont égaux.}\\\\
            ${r(e,t)}&= ${r($*i,$*s)}\\\\
           ${d(e-$*i)}x&= ${$*s-t} ${e-$*i===1?"":"\\\\"}
          ${e-$*i===1?"":`x&=${x.texFractionSimplifiee}`} 
           \\end{aligned}$<br>`:l+=`
            $\\begin{aligned}
           ${p?`\\dfrac{${r(e,t)}}{${r(i,s)}}&=${$}`:`\\dfrac{${t}${q(e)}x}{${r(i,s)}}&=${$}`}\\\\
            ${p?`${r(e,t)}&=${$}\\times(${r(i,s)})`:`${t}${q(e)}x&=${$}\\times(${r(i,s)})`}${S(7)}\\text{ car les produits en croix sont égaux.}\\\\
            ${r(e,t)}&= ${r($*i,$*s)}\\\\
            ${d(e-$*i)}x&= ${$*s-t}\\\\
           x&=${x.texFractionSimplifiee}
           \\end{aligned}$<br>`,-s*(e-$*i)-i*($*s-t)===0?(u="\\emptyset",l+=`$${x.texFractionSimplifiee}$ est  une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.`):(u=`\\left\\{${x.texFractionSimplifiee}\\right\\}`,l+=`$${x.texFractionSimplifiee}$ n'est pas une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.`);break;default:for(e=n(-3,9,0),t=n(-9,9),i=n(-2,9,[0,e]),s=n(-9,9),$=n(-9,9,0),o=n(-9,9,0);i*(o*t-e*s)===-s*($*i-o*e)||e*(o*t-e*s)===-t*($*i-o*e);)e=n(-3,9,0),t=n(-9,9),i=n(-2,9,[0,e]),s=n(-9,9),$=n(-9,9,0),o=n(-9,9,0);$*i-o*e===0&&($=$+10),p=F([!0,!1]),f=w,f+=`$\\dfrac{${$}}{${r(e,t)}}=\\dfrac{${o}}{${r(i,s)}}$.`,D.isDiaporama?l="":l="Déterminer les valeurs interdites revient à déterminer les valeurs qui annulent les dénominateurs des quotients, puisque la division par $0$ n'existe pas.<br>",c=new g(-s,i),B=new g(-t,e),x=new g(-$*s+o*t,$*i-o*e),-e*s+t*i===0?m=`\\left\\{${c.texFractionSimplifiee}\\right\\}`:-s/i<-t/e?m=`\\left\\{${c.texFractionSimplifiee}\\,;\\,${B.texFractionSimplifiee} \\right\\}`:m=`\\left\\{${B.texFractionSimplifiee} \\, ; \\,${c.texFractionSimplifiee}\\right\\}`,l+=`Or $${r(e,t)}=0$ si et seulement si  $x = ${B.texFractionSimplifiee}$ et $${r(i,s)}=0$ si et seulement si  $x = ${c.texFractionSimplifiee} $. <br>Donc l'ensemble des valeurs interdites est $${m}$. <br>`,l+=`Pour tout $x\\in \\mathbb{R}\\smallsetminus ${m}$,<br>
 $\\begin{aligned}
 \\dfrac{${$}}{${r(e,t)}}&=\\dfrac{${o}}{${r(i,s)}}\\\\
 ${o}\\times (${r(e,t)})&=${$}\\times (${r(i,s)})${S(7)} \\text{ car les produits en croix sont égaux.}\\\\
 ${r(o*e,o*t)}&=${r($*i,$*s)}\\\\
${d(-$*i+o*e)}x&= ${$*s-o*t}${-$*i+o*e===1?"":"\\\\"}
          ${-$*i+o*e===1?"":`x&=${x.texFractionSimplifiee}`} 
\\end{aligned}$<br>`,-t*($*i-o*e)===e*(-$*s+o*t)?(u="\\emptyset",l+=` $${x.texFractionSimplifiee}$ est  une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.`):(u=`\\left\\{${x.texFractionSimplifiee}\\right\\}`,l+=` $${x.texFractionSimplifiee}$ n'est pas une valeur interdite, donc l'ensemble des solutions de cette équation est  $${h(`\\mathscr{S}=${u}`)}$.`);break}this.interactif&&(f+=y(this,2*b,E.clavierEnsemble,{texteAvant:"<br>Ensemble des valeurs interdites : "}),f+=y(this,2*b+1,E.clavierEnsemble,{texteAvant:"<br>Ensemble des solutions : "})),R(this,2*b,{reponse:{value:m,options:{ensembleDeNombres:!0}}}),R(this,2*b+1,{reponse:{value:u,options:{ensembleDeNombres:!0}}}),this.questionJamaisPosee(b,e,t,i,s)&&(this.listeQuestions[b]=f,this.listeCorrections[b]=l,b++),P++}C(this)}}export{He as dateDePublication,Ye as default,ze as interactifReady,Ge as interactifType,Xe as refs,Ue as titre,We as uuid};
//# sourceMappingURL=2N52-5-Cf6OTuda.js.map
