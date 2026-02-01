import{A as q,p as $,v as i,x as o,Z as n}from"./index-BB3ZcMz7.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-fVupTN-r.js";import"./json/refToUuidCH-BX1ZhSY0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-eCsKGSUT.js";import"./json/referentiel2022FR-noHHLeEt.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const fr="Calculer avec une racine carrée*",gr=!0,Cr="mathLive",Ar="3a350",Er={"fr-fr":["can2C08"],"fr-ch":[]};class Rr extends q{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const m=[[2,8],[2,32],[2,50],[3,27],[5,20],[2,18],[2,72],[3,48],[5,45]];let s,e,t,r;switch($([1,2])){case 1:s=$(m),e=s[0],t=s[1],r=n(t),$([!0,!1])?(this.question=`Le carré de $\\sqrt{${e}}+\\sqrt{${t}}$ est égal à : `,this.correction=`On simpifie $\\sqrt{${t}}$ en $${r[0]}\\sqrt{${r[1]}}$, car
    $\\sqrt{${t}}=\\sqrt{${r[0]}^2\\times ${r[1]}} =
    \\sqrt{${r[0]}^2}\\times \\sqrt{${r[1]}}
    =${r[0]}\\sqrt{${r[1]}}$.<br>
    Ainsi :
    <br>
    $\\begin{aligned}
    (\\sqrt{${e}}+\\sqrt{${t}})^2&=(\\sqrt{${e}}+${r[0]}\\sqrt{${r[1]}})^2\\\\
    &= (${r[0]+1}\\sqrt{${r[1]}})^2 \\\\
    &=(${r[0]+1}\\sqrt{${r[1]}})\\times (${r[0]+1}\\sqrt{${r[1]}})\\\\
    &=\\underbrace{${r[0]+1}\\times ${r[0]+1}}_{${(r[0]+1)**2}}\\times \\underbrace{\\sqrt{${r[1]}}\\times \\sqrt{${r[1]}}}_{${r[1]}}\\\\
    &=  ${o(`${(r[0]+1)**2*r[1]}`)}
    \\end{aligned}$
  `,this.canEnonce=`Calculer le carré de $\\sqrt{${e}}+\\sqrt{${t}}$.`,this.canReponseACompleter=""):(this.question=`Le carré de $\\sqrt{${t}}+\\sqrt{${e}}$ est égal à : `,this.correction=`On simpifie $\\sqrt{${t}}$ en $${r[0]}\\sqrt{${r[1]}}$, car
  $\\sqrt{${t}}=\\sqrt{${r[0]}^2\\times ${r[1]}} =
  \\sqrt{${r[0]}^2}\\times \\sqrt{${r[1]}}
  =${r[0]}\\sqrt{${r[1]}}$.<br>
  Ainsi :
  <br>
  $\\begin{aligned}
  (\\sqrt{${t}}+\\sqrt{${e}})^2&=(${r[0]}\\sqrt{${r[1]}}+\\sqrt{${e}})^2\\\\
  &= (${r[0]+1}\\sqrt{${r[1]}})^2 \\\\
  &=(${r[0]+1}\\sqrt{${r[1]}})\\times (${r[0]+1}\\sqrt{${r[1]}})\\\\
  &=\\underbrace{${r[0]+1}\\times ${r[0]+1}}_{${(r[0]+1)**2}}\\times \\underbrace{\\sqrt{${r[1]}}\\times \\sqrt{${r[1]}}}_{${r[1]}}\\\\
   &=  ${o(`${(r[0]+1)**2*r[1]}`)}
  \\end{aligned}$
`,this.canEnonce=`Calculer le carré de $\\sqrt{${t}}+\\sqrt{${e}}$.`,this.canReponseACompleter=""),this.reponse=e+t+2*Math.sqrt(e*t);break;case 2:s=$(m),e=s[0],t=s[1],r=n(t),$([!0,!1])?(this.question=`Le carré de $\\sqrt{${e}}-\\sqrt{${t}}$ est égal à : `,this.correction=`On simpifie $\\sqrt{${t}}$ en $${r[0]}\\sqrt{${r[1]}}$, car
    $\\sqrt{${t}}=\\sqrt{${r[0]}^2\\times ${r[1]}} =
    \\sqrt{${r[0]}^2}\\times \\sqrt{${r[1]}}
    =${r[0]}\\sqrt{${r[1]}}$.<br>
    Ainsi :
    <br>
    $\\begin{aligned}
    (\\sqrt{${e}}-\\sqrt{${t}})^2&=(\\sqrt{${e}}-${r[0]}\\sqrt{${r[1]}})^2\\\\
    &= (${1-r[0]}\\sqrt{${r[1]}})^2 \\\\
    &=(${1-r[0]}\\sqrt{${r[1]}})\\times (${1-r[0]}\\sqrt{${r[1]}})\\\\
  &=\\underbrace{${i(1-r[0])}\\times ${i(1-r[0])}}_{${(1-r[0])**2}}\\times \\underbrace{\\sqrt{${r[1]}}\\times \\sqrt{${r[1]}}}_{${r[1]}}\\\\
      &=  ${o(`${(1-r[0])**2*r[1]}`)}
    \\end{aligned}$
  `,this.canEnonce=`Calculer le carré de $\\sqrt{${e}}-\\sqrt{${t}}$.`,this.canReponseACompleter=""):(this.question=`Le carré de $\\sqrt{${t}}-\\sqrt{${e}}$ est égal à : `,this.correction=`On simpifie $\\sqrt{${t}}$ en $${r[0]}\\sqrt{${r[1]}}$, car
  $\\sqrt{${t}}=\\sqrt{${r[0]}^2\\times ${r[1]}} =
  \\sqrt{${r[0]}^2}\\times \\sqrt{${r[1]}}
  =${r[0]}\\sqrt{${r[1]}}$.<br>
  Ainsi :
  <br>
  $\\begin{aligned}
  (\\sqrt{${t}}-\\sqrt{${e}})^2&=(${r[0]}\\sqrt{${r[1]}}-\\sqrt{${e}})^2\\\\
  &= (${r[0]-1}\\sqrt{${r[1]}})^2 \\\\
  &=(${r[0]-1}\\sqrt{${r[1]}})\\times (${r[0]-1}\\sqrt{${r[1]}})\\\\
  &=\\underbrace{${i(r[0]-1)}\\times ${i(r[0]-1)}}_{${(r[0]-1)**2}}\\times \\underbrace{\\sqrt{${r[1]}}\\times \\sqrt{${r[1]}}}_{${r[1]}}\\\\
       &=  ${o(`${(r[0]-1)**2*r[1]}`)}
  \\end{aligned}$
`,this.canEnonce=`Calculer le carré de $\\sqrt{${t}}-\\sqrt{${e}}$.`,this.canReponseACompleter=""),this.reponse=e+t-2*Math.sqrt(e*t);break}}}export{Rr as default,gr as interactifReady,Cr as interactifType,Er as refs,fr as titre,Ar as uuid};
//# sourceMappingURL=can2C08-Bq7Jgm6g.js.map
