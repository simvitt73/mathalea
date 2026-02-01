var S=Object.defineProperty;var j=(c,s,e)=>s in c?S(c,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[s]=e;var y=(c,s,e)=>j(c,typeof s!="symbol"?s+"":s,e);import{b1 as C,P as B,s as V,aX as F,B as f,a1 as N,r as h,p as q}from"./index-Dkwu26bg.js";import{E as G}from"./ExerciceBrevetA-DKuA7N1U.js";import{S as O,r as U}from"./vendors/svgdotjs_svg.js-BXYA4B-E.js";import{c as $}from"./lists-OzKsERu-.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ExerciceBrevet-CcgTdFxu.js";const ot="d11ae",at={"fr-fr":["3S20DNB","3Z1DNB-15","BP2FLUC9"],"fr-ch":[]},st="Probabilités. Exercice de brevet",nt="27/11/2024",P=[26,3,35,12,28,7,29,18,22,9,31,14,20,1,33,16,24,5,10,23,8,30,11,36,13,27,6,34,17,25,2,21,4,19,15,32,0];function Z(c){return`
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
      \\foreach \\number [count=\\i] in {${c.join(",")}} {
        \\node[number=\\i,rotate={\\i*\\angle+\\angle/2}] at ({\\i*\\angle+\\angle/2}:{(\\Rb+\\Rc)/2}) {\\sffamily\\bfseries\\number};
      }
    \\end{scope}
    \\node[rotate={\\angle/2},text=black!70] at ({\\angle/2}:{(\\Rb+\\Rc)/2}) {\\sffamily\\bfseries0};
    \\fill[black!70] ({\\angle/2}:{(\\Rb+\\Ra)/2}) circle (1.5mm);
  \\end{tikzpicture}`}function H(c){const s=window.document;U(window,s);const e=O().addTo(s.documentElement).size(480,480),r=240,o=r/2,t=17/24*r,i=22/24*r,b=23/24*r;e.circle(r*2).center(240,240).stroke({width:2}).fill("black").stroke({width:1,color:"black"}),e.circle(b*2).center(240,240).fill("white").stroke({width:1,color:"black"}),e.circle(i*2).center(240,240).fill("white").stroke({width:1,color:"black"}),e.circle(o*2).center(240,240).fill("white").stroke({width:1,color:"black"});const p=37,a=360/p;for(let l=0;l<p;l++){const n=l*a,u=n+a,m=u-n<=180?"0":"1",d=240+o*Math.cos((n-90)*(Math.PI/180)),R=240+o*Math.sin((n-90)*(Math.PI/180)),L=240+o*Math.cos((u-90)*(Math.PI/180)),A=240+o*Math.sin((u-90)*(Math.PI/180)),x=240+i*Math.cos((n-90)*(Math.PI/180)),w=240+i*Math.sin((n-90)*(Math.PI/180)),z=240+i*Math.cos((u-90)*(Math.PI/180)),I=240+i*Math.sin((u-90)*(Math.PI/180)),E=["M 240 240",`L ${d} ${R}`,`A ${o} ${o} 0 ${m} 1 ${L} ${A}`,`L ${z} ${I}`,`A ${i} ${i} 0 ${m} 0 ${x} ${w}`,"Z"].join(" ");e.path(E).fill(l%2===1?"black":"white"),e.line(d,R,x,w).stroke({width:1,color:"black"});const k=l*a+a/2,D=k,M=240+(t+(i-t)/2)*Math.cos((k-90)*(Math.PI/180)),v=240+(t+(i-t)/2)*Math.sin((k-90)*(Math.PI/180));e.text(`${c[l]}`).font({size:20}).center(M,v).fill(l%2===1?"white":"black").rotate(D,M,v)}e.circle(t*2).center(240,240).fill("none").stroke({width:1,color:"black"});const g=e.svg();return e.remove(),g}class ct extends G{constructor(){super();y(this,"versionOriginale",()=>{this.appliquerLesValeurs(7,!0,"noire",6,P)});y(this,"versionAleatoire",()=>{const e=P.slice();let r=0;for(;r<34;){if(r%2===0){const p=e[r],a=h(r/2,18)*2;e[r]=e[a],e[a]=p}else{const p=e[r],a=h((r+1)/2,18)*2-1;e[r]=e[a],e[a]=p}r+=h(1,4)}const o=h(0,36),t=h(5,30),i=q([!0,!1]),b=q(["noire","blanche"]);this.appliquerLesValeurs(o,i,b,t,e)});this.besoinFormulaireCaseACocher=["Sujet original",!1],this.sup=!1,this.versionAleatoire(0),this.introduction=C("D'après l'exercice 1 du brevet Métropole 2024.<br>")}appliquerLesValeurs(e,r,o,t,i){const b=B.isHtml?H(i):Z(i),p=(l,n)=>{let u=0;for(let m=0;m<37;m++){const d=i[m];d%2===0&&l?(m%2===0&&n==="blanche"||m%2===1&&n==="noire")&&u++:d%2===1&&!l&&(m%2===0&&n==="blanche"||m%2===1&&n==="noire")&&u++}return u},a=`Au casino, la roulette est un jeu de hasard pour lequel chaque joueur mise au choix sur un ou plusieurs numéros.<br> On lance une bille sur une roue qui tourne, numérotée de 0 à 36.<br>
La bille a la même probabilité de s'arrêter sur chaque numéro.<br><br>
${b}
${$({items:[`Expliquer pourquoi la probabilité s'arrête sur le numéro ${e} est $\\dfrac{1}{37}$.`,`Déterminer la probabilité que la bille s'arrête sur une case à la fois ${o} et ${r?"paire":"impaire"}.`,`${V(1)}${$({items:[`Déterminer la probabilité que la bille s'arrête sur un numéro inférieur ou égal à ${t}.`,`En déduire la probabilité que la bille s'arrête sur un numéro supérieur ou égal à ${t+1}.`,`Un joueur affirme qu'on a plus de 3 chances sur 4 d'obtenir un numéro supérieur ou égal à ${t+1}. A-t-il raison?`],style:"alpha"})}`],style:"nombres"})}`,g=$({items:[`La probabilité que la bille s'arrête sur le numéro ${e} est $\\dfrac{1}{37}$ car il y a 37 numéros.`,`La probabilité que la bille s'arrête sur une case à la fois ${o} et ${r?"paire":"impaire"} est $\\dfrac{${p(r,o)}}{37}$.`,$({items:[`La probabilité que la bille s'arrête sur un numéro inférieur ou égal à ${t} est $\\dfrac{${t+1}}{37}$.`,`La probabilité que la bille s'arrête sur un numéro supérieur ou égal à ${t+1} est $\\dfrac{37 - ${t+1}}{37} = \\dfrac{${37-(t+1)}}{37}$.`,`Comparons cette probabilité avec $\\dfrac{3}{4}$ :<br>
        $\\dfrac{${37-(t+1)}}{37} ${F((37-(t+1))/37,3)} ${f((37-(t+1))/37,3)}$ et $\\dfrac{3}{4} = ${f(.75,2)}$<br>
        Comme $${f((37-(t+1))/37,3)} ${(37-(t+1))/37>.75?">":"<"} ${f(.75,2)}$, ${N(`le joueur ${(37-(t+1))/37>.75?"a":"n'a pas"} raison`)}.`],style:"alpha"})],style:"nombres"});this.enonce=`${a}`,this.correction=`${g}`}}export{nt as dateDePublication,ct as default,at as refs,st as titre,ot as uuid};
//# sourceMappingURL=3S20DNB-B47DOJnU.js.map
