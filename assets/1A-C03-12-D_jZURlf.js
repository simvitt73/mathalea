var k=Object.defineProperty;var x=(b,l,$)=>l in b?k(b,l,{enumerable:!0,configurable:!0,writable:!0,value:$}):b[l]=$;var C=(b,l,$)=>x(b,typeof l!="symbol"?l+"":l,$);import{x as h,r}from"./index-Dkwu26bg.js";import{E as y}from"./ExerciceQcmA-C-OLCyFt.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ExerciceQcm-DTsM0cRO.js";import"./lists-OzKsERu-.js";const z$="2137a",B$={"fr-fr":["1A-C03-12"],"fr-ch":["11QCM-9"]},G$=!0,H$="qcm",I$="true",J$="qcmMono",K$="Trouver  l'égalité correcte (puissances)",N$="23/07/2025";class S$ extends y{constructor(){super();C(this,"versionOriginale",()=>{this.enonce="La seule égalité vraie est :",this.correction=`La seule égalité vraie est  : $${h("\\dfrac{10^{-5}}{10^8}=10^{-13}")}$.<br>
    En effet, <br>  
      $\\begin{aligned}
     \\dfrac{10^{-5}}{10^8}&=10^{-5-8}\\\\
      &=10^{-13}
      \\end{aligned}$<br>
      Les égalités corrigées (et donc correctes) pour les autres égalités, sont :  <br>
      $40\\times \\dfrac{1}{40^3}=40^{-2}$<br>
       $\\left(2^{-4}\\right)^3=2^{-12}$<br>
       $5^{-6}\\times 11^{-6}=55^{-6}$`,this.reponses=["$\\dfrac{10^{-5}}{10^8}=10^{-13}$","$40\\times \\dfrac{1}{40^3}=40^2$","$\\left(2^{-4}\\right)^3=2^{-1}$","$5^{-6}\\times 11^{-6}=55^{-12}$"]});C(this,"versionAleatoire",()=>{const $=r(3,15),i=r(-10,-3),n=-i+r(4,8),t=r(2,6)*10,o=r(3,6),a=r(2,6)*10,c=r(-8,-3),p=r(3,6),s=r(3,7),m=r(3,7,s),e=r(-6,-2),d=`\\dfrac{${$}^{${i}}}{${$}^{${n}}}=${$}^{${i-n}}`,f=`${t}\\times \\dfrac{1}{${t}^{${o}}}=${t}^{${1-o}}`,g=`\\left(${a}^{${c}}\\right)^${p}=${a}^{${c*p}}`,u=`${s}^{${e}}\\times ${m}^{${e}}=${s*m}^{${e}}`,v=`\\dfrac{${$}^{${i}}}{${$}^{${n}}}=${$}^{${i+n}}`,q=`${t}\\times \\dfrac{1}{${t}^{${o}}}=${t}^{${o-1}}`,L=`\\left(${a}^{${c}}\\right)^${p}=${a}^{${c+p}}`,E=`${s}^{${e}}\\times ${m}^{${e}}=${s*m}^{${2*e}}`;switch(r(1,4)){case 1:this.enonce="La seule égalité vraie est :",this.correction=`La seule égalité vraie est  : $${h(`${d}`)}$.<br>
    En effet, <br>  
      $\\begin{aligned}
    \\dfrac{${$}^{${i}}}{${$}^{${n}}}&=${$}^{${i}-${n}}\\\\
      &=${$}^{${i-n}}
      \\end{aligned}$<br>
    Concernant les autres propositions  :  <br>
     $${f}\\neq ${t}^{${o-1}}$<br>
  $${g}\\neq ${a}^{${c+p}}$<br>
       $${u}\\neq ${s*m}^{${2*e}}$`,this.reponses=[`$${d}$`,`$${q}$`,`$${L}$`,`$${E}$`];break;case 2:this.enonce="La seule égalité vraie est :",this.correction=`La seule égalité vraie est  : $${h(`${f}`)}$.<br>
    En effet, <br>  
      $\\begin{aligned}
    ${t}\\times \\dfrac{1}{${t}^{${o}}}&=\\dfrac{${t}^1}{${t}^{${o}}}\\\\
    &=${t}^{1-${o}}\\\\
      &=${t}^{${1-o}}
      \\end{aligned}$<br>
     Concernant les autres propositions  :  <br>
    $${d}\\neq ${$}^{${i+n}}$<br>
  $${g}\\neq ${a}^{${c+p}}$<br>
       $${u}\\neq ${s*m}^{${2*e}}$`,this.reponses=[`$${f}$`,`$${v}$`,`$${L}$`,`$${E}$`];break;case 3:this.enonce="La seule égalité vraie est :",this.correction=`La seule égalité vraie est  : $${h(`${g}`)}$.<br>
    En effet, <br>  
      $\\begin{aligned}
    \\left(${a}^{${c}}\\right)^${p}&=${a}^{${c} \\times ${p}}\\\\
    &=${a}^{${c*p}}
      \\end{aligned}$<br>
     Concernant les autres propositions  :  <br>
     $${d}\\neq ${$}^{${i+n}}$<br>
  $${f}\\neq ${t}^{${o-1}}$<br>
       $${u}\\neq ${s*m}^{${2*e}}$`,this.reponses=[`$${g}$`,`$${q}$`,`$${v}$`,`$${E}$`];break;default:this.enonce="La seule égalité vraie est :",this.correction=`La seule égalité vraie est  : $${h(`${u}`)}$.<br>
    En effet, <br>  
      $\\begin{aligned}
      ${s}^{${e}}\\times ${m}^{${e}}&=(${s}\\times  ${m})^{${e}}\\\\
    &=${s*m}^{${e}}
      \\end{aligned}$<br>
     Concernant les autres propositions  :  <br>
    $${d}\\neq ${$}^{${i+n}}$<br>
  $${f}\\neq ${t}^{${o-1}}$<br>
       $${g}\\neq ${a}^{${c+p}}$`,this.reponses=[`$${u}$`,`$${v}$`,`$${L}$`,`$${q}$`];break}});this.versionAleatoire()}}export{I$ as amcReady,J$ as amcType,N$ as dateDePublication,S$ as default,G$ as interactifReady,H$ as interactifType,B$ as refs,K$ as titre,z$ as uuid};
//# sourceMappingURL=1A-C03-12-D_jZURlf.js.map
