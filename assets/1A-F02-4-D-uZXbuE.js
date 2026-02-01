var f=Object.defineProperty;var d=($,o,n)=>o in $?f($,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):$[o]=n;var p=($,o,n)=>d($,typeof o!="symbol"?o+"":o,n);import{x as c,p as a,F as s,r as l}from"./index-Dkwu26bg.js";import{E as x}from"./ExerciceQcmA-C-OLCyFt.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ExerciceQcm-DTsM0cRO.js";import"./lists-OzKsERu-.js";const Mt="20/09/2025",Rt="d294c",qt={"fr-fr":["1A-F02-4"],"fr-ch":[]},wt=!0,Tt="qcm",jt="true",Ct="qcmMono",Dt="Calculer une image avec le second degré";class Pt extends x{constructor(){super();p(this,"versionOriginale",()=>{this.enonce=`On considère la fonction  $f$ définie sur $\\mathbb{R}$ par $f(x)=7-\\dfrac{1}{2}(x-3)^2$<br>
    L'image de $3$ par cette fonction est : `,this.correction=`On remplace $x$ par $3$ dans l'expression de $f$ :<br>
     
    $\\begin{aligned}
    f\\left(3\\right)&=7-\\dfrac{1}{2}(3-3)^2\\\\
    &=7-\\dfrac{1}{2}\\times 0\\\\
    &=7
    \\end{aligned}$<br>
    
    
    L'image de $3$  par la  fonction  $f$ est : $${c("7")}$.`,this.reponses=["$7$","$7-\\dfrac{1}{2}$","$7-\\dfrac{1}{2}(9+9)$","$0$"]});p(this,"versionAleatoire",()=>{const m=a([[1,2],[1,3],[2,3],[3,4],[3,5],[4,5],[5,3],[4,3],[5,4],[6,5],[5,3],[2,5]]),i=new s(m[0],m[1]),t=m[0]+1,e=l(2,5),r=a([e,e-1,e+1]);this.enonce=`On considère la fonction  $f$ définie sur $\\mathbb{R}$ par $f(x)=${t}-${i.texFraction}(x-${e})^2$<br>
    L'image de $${r}$ par cette fonction est : `,this.correction=`On remplace $x$ par $${r}$ dans l'expression de $f$ :<br>`,r===e?(this.correction=`
    $\\begin{aligned}
    f\\left(${r}\\right)&=${t}-${i.texFraction}(${r}-${e})^2\\\\
    &=${t}-${i.texFraction}\\times 0\\\\
    &=${t}
    \\end{aligned}$<br>
    
    
    L'image de $${r}$  par la  fonction  $f$ est : $${c(t)}$.`,this.reponses=[`$${t}$`,"$0$",`$${t}-${i.texFraction}$`,`$${t}-${i.texFraction}(${r**2}+${e**2})$`]):(this.correction=`
    $\\begin{aligned}
    f\\left(${r}\\right)&=${t}-${i.texFraction}(${r}-${e})^2\\\\
    &=${t}-${i.texFraction}\\times 1\\\\
    &=${i.entierMoinsFraction(t).texFraction}
    \\end{aligned}$<br>
    
    
    L'image de $${r}$  par la  fonction  $f$ est : $${c(i.entierMoinsFraction(t).texFraction)}$.`,this.reponses=[`$${i.entierMoinsFraction(t).texFraction}$`,`$${t}$`,`$${i.ajouteEntier(t).texFraction}$`,`$${new s(1,m[1]).texFraction}$`])});this.versionAleatoire()}}export{jt as amcReady,Ct as amcType,Mt as dateDePublication,Pt as default,wt as interactifReady,Tt as interactifType,qt as refs,Dt as titre,Rt as uuid};
//# sourceMappingURL=1A-F02-4-D-uZXbuE.js.map
