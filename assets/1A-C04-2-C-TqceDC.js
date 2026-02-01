var C=Object.defineProperty;var x=($,e,m)=>e in $?C($,e,{enumerable:!0,configurable:!0,writable:!0,value:m}):$[e]=m;var h=($,e,m)=>x($,typeof e!="symbol"?e+"":e,m);import{B as r,x as f,r as v,p as l}from"./index-Bl1vqpvV.js";import{E as y}from"./ExerciceQcmA-CCRIa16T.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ExerciceQcm-ByjAGTRK.js";import"./lists-Cb1jXPcV.js";const Pr="1f233",jr={"fr-fr":["1A-C04-2"],"fr-ch":["10QCM-5","9QCM-7"]},kr=!0,zr="qcm",Gr="true",Hr="qcmMono",Ir="Calculer une somme de fractions décimales",Jr="02/09/2025";class Kr extends y{constructor(){super();h(this,"versionOriginale",()=>{this.enonce=`On considère $A=\\dfrac{1}{100}+\\dfrac{1}{${r(1e3)}}$. On a : `,this.correction=` On a  : <br>
   $\\begin{aligned}
   A&=\\dfrac{1}{100}+\\dfrac{1}{${r(1e3)}}\\\\
   &=0,01+${r(.001)}\\\\
   &=${f(.011)}
   \\end{aligned}$ <br>
  `,this.reponses=["$A=0,011$","$A=100,001$",`$\\dfrac{2}{${r(1e5)}}$`,"$A=0,11$"]});h(this,"versionAleatoire",()=>{const m=[10,100,1e3,1e4],i=v(1,9),o=l(m);let t=l(m);for(;t===o;)t=l(m);const n=i/o+i/t,A=(a,c)=>c===0?a:A(c,a%c),p=((a,c)=>a*c/A(a,c))(o,t),u=i*(p/o)+i*(p/t),g=A(u,p),s=u/g,d=p/g,O=g>1,b=l([!0,!1,!1]);this.enonce=`On considère $A=\\dfrac{${i}}{${r(o)}}+\\dfrac{${i}}{${r(t)}}$. On a : `,b?O?this.correction=` On a  : <br>
       $\\begin{aligned}
       A&=\\dfrac{${i}}{${r(o)}}+\\dfrac{${i}}{${r(t)}}\\\\
       &=${r(i/o,4)}+${r(i/t,4)}\\\\
       &=${r(n,4)}\\\\
       &=\\dfrac{${u}}{${r(p)}}\\\\
       &=${f(`\\dfrac{${s}}{${r(d)}}`)}
       \\end{aligned}$ <br>
      `:this.correction=` On a  : <br>
       $\\begin{aligned}
       A&=\\dfrac{${i}}{${r(o)}}+\\dfrac{${i}}{${r(t)}}\\\\
       &=${r(i/o,4)}+${r(i/t,4)}\\\\
       &=${r(n,4)}\\\\
       &=${f(`\\dfrac{${s}}{${r(d)}}`)}
       \\end{aligned}$ 
      `:this.correction=` On a  : <br>
     $\\begin{aligned}
     A&=\\dfrac{${i}}{${r(o)}}+\\dfrac{${i}}{${r(t)}}\\\\
     &=${r(i/o,4)}+${r(i/t,4)}\\\\
     &=${f(r(n,4))}
     \\end{aligned}$ 
    `,b?this.reponses=[`$A=\\dfrac{${s}}{${r(d)}}$`,`$A=${r(n/10,4)}$`,`$A=${r(n*10,4)}$`,`$A=\\dfrac{${2*i}}{${r(o*t)}}$`]:this.reponses=[`$A=${r(n,4)}$`,`$A=\\dfrac{${2*i}}{${r(o*t)}}$`,`$A=${r(n*10,4)}$`,`$A=\\dfrac{${s+1}}{${r(d)}}$`]});this.versionAleatoire(),this.spacing=1.5,this.spacingCorr=1}}export{Gr as amcReady,Hr as amcType,Jr as dateDePublication,Kr as default,kr as interactifReady,zr as interactifType,jr as refs,Ir as titre,Pr as uuid};
//# sourceMappingURL=1A-C04-2-C-TqceDC.js.map
