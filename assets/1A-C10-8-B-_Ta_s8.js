var v=Object.defineProperty;var A=(d,a,u)=>a in d?v(d,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):d[a]=u;var w=(d,a,u)=>A(d,typeof a!="symbol"?a+"":a,u);import{x as c,p as L,r as l,y as $,m as o,F as s,a3 as f,L as x,a4 as S}from"./index-Bl1vqpvV.js";import{t as q}from"./deprecatedFractions-C-Ed8IAt.js";import{E as y}from"./ExerciceQcmA-CCRIa16T.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./colors-vbveSA7f.js";import"./ExerciceQcm-ByjAGTRK.js";import"./lists-Cb1jXPcV.js";const Gi="2e7a5",Hi={"fr-fr":["1A-C10-8"],"fr-ch":["11QCM-12","1mQCM-12"]},Ii=!0,Ji="qcm",Ki="true",Ni="qcmMono",Ui="Résoudre une équation du premier degré",Vi="05/08/2025";class Wi extends y{constructor(){super();w(this,"versionOriginale",()=>{this.enonce="La solution de l'équation $4(x-5)=7x+3$ est : ",this.correction=`On développe, puis on isole l'inconnue dans le membre de gauche :<br>
 $\\begin{aligned}
 4(x-5)&=7x+3\\\\
 4x-20&=7x+3\\\\
 4x-7x&=3+20\\\\
 -3x&=23\\\\
 x&=-\\dfrac{23}{3}
\\end{aligned}$
 `,this.correction+=` La solution est $${c("-\\dfrac{23}{3}")}$.`,this.reponses=["$-\\dfrac{23}{3}$","$\\dfrac{23}{3}$","$26$","$-\\dfrac{17}{3}$"]});w(this,"versionAleatoire",()=>{const u=L(["k(ax+b)=cx+d","k-(ax+b)=cx+d"]);let b,i,g,h,F;const r=l(-9,9,0),n=l(-9,9,0);i=l(-9,9,0);const t=l(-9,9,0),e=l(2,9,n);if(u==="k(ax+b)=cx+d")i===e*r&&(i=l(1,9,[r])),this.enonce=`La solution de l'équation $${e}(${$(r)}x${o(n)})=${$(i)}x${o(t)}$ est : `,this.correction=`On développe, puis on isole l'inconnue dans le membre de gauche :<br>
 $\\begin{aligned}
 ${e}(${$(r)}x${o(n)})&=${$(i)}x${o(t)}\\\\
 ${e*r}x${o(e*n)}&=${$(i)}x${o(t)}\\\\
 ${e*r}x${o(e*n)}${c(f(-1*i)+$(x(i))+"x")}&=${i}x${o(t)}${c(f(-1*i)+$(x(i))+"x")}\\\\
 ${$(e*r-i)}x${o(e*n)}&=${t}\\\\
 ${$(e*r-i)}x${o(e*n)}${c(o(-e*n))}&=${t}${c(o(-e*n))}\\\\
 ${$(e*r-i)}x&=${t-e*n}\\\\
 x&=${q(t-e*n,e*r-i)}
 ${S(x(t-e*n),x(e*r-i))>1||e*r-i<0?`\\\\x&=${new s(t-e*n,e*r-i).texFractionSimplifiee}`:""}\\end{aligned}$
 `,this.correction+=`<br> La solution est $${c(new s(t-e*n,e*r-i).texFractionSimplifiee)}$.`,b=new s(t-e*n,e*r-i).texFractionSimplifiee,g=new s(t-n,r-i).texFractionSimplifiee,h=new s(t+e*n,e*r-i).texFractionSimplifiee,F=new s(t-e*n,e*r+i).texFractionSimplifiee;else{i===-r&&(i=l(-9,9,[0,r,-r]));const m=-r,p=e-n;this.enonce=`La solution de l'équation $${e}-(${$(r)}x${o(n)})=${$(i)}x${o(t)}$ est : `,this.correction=`On développe, puis on isole l'inconnue dans le membre de gauche :<br>
 $\\begin{aligned}
 ${e}-(${$(r)}x${o(n)})&=${$(i)}x${o(t)}\\\\
 ${e}${o(-r)}x${o(-n)}&=${$(i)}x${o(t)}\\\\
 ${$(m)}x${o(p)}&=${$(i)}x${o(t)}\\\\
 ${$(m)}x${o(p)}${c(f(-1*i)+$(x(i))+"x")}&=${i}x${o(t)}${c(f(-1*i)+$(x(i))+"x")}\\\\
 ${$(m-i)}x${o(p)}&=${t}\\\\
 ${$(m-i)}x${o(p)}${c(o(-1*p))}&=${t}${c(o(-1*p))}\\\\
 ${$(m-i)}x&=${t-p}\\\\
 x&=${q(t-p,m-i)}
 ${S(x(t-p),x(m-i))>1||m-i<0?`\\\\x&=${new s(t-p,m-i).texFractionSimplifiee}
`:""}\\end{aligned}$
 `,this.correction+=`<br> La solution est $${c(new s(t-p,m-i).texFractionSimplifiee)}$.`,b=new s(t-p,m-i).texFractionSimplifiee,g=new s(t+p,m-i).texFractionSimplifiee,h=new s(t-n,r-i).texFractionSimplifiee,F=new s(-t+p,m-i).texFractionSimplifiee}this.reponses=[`$${b}$`,`$${g}$`,`$${h}$`,`$${F}$`]});this.versionAleatoire(),this.spacing=1.5}}export{Ki as amcReady,Ni as amcType,Vi as dateDePublication,Wi as default,Ii as interactifReady,Ji as interactifType,Hi as refs,Ui as titre,Gi as uuid};
//# sourceMappingURL=1A-C10-8-B-_Ta_s8.js.map
