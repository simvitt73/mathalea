import{A as m,K as a,p as e,x as $,Z as p}from"./index-Bl1vqpvV.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const dt="Calculer avec une racine carrée",gt=!0,vt="mathLive",xt="2af85",Ct={"fr-fr":["can2C07"],"fr-ch":["11NO1-11"]};class At extends m{constructor(){super(),this.optionsChampTexte={texteAvant:"<br>"},this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierFullOperations,this.optionsDeComparaison={texteSansCasse:!0}}nouvelleVersion(){const o=[[2,8],[2,32],[2,50],[3,27],[5,20],[2,18],[2,72],[3,48],[5,45],[2,200],[3,300],[5,500],[6,600],[7,700]];let s,i,r,t;switch(e([1,2])){case 1:s=e(o),i=s[0],r=s[1],t=p(r),e([!0,!1])?(this.question=`Écrire $\\sqrt{${i}}+\\sqrt{${r}}$ sous la forme $a\\sqrt{b}$ avec $a$ et $b$ entiers et $b$ le plus petit possible. `,this.correction=`On a  $${r}=${t[0]}^2\\times ${t[1]}$.<br>
          Ainsi, $\\sqrt{${r}}=\\sqrt{${t[0]}^2\\times${t[1]}}=\\sqrt{${t[0]}^2}\\times \\sqrt{${t[1]}}
    =${t[0]}\\sqrt{${t[1]}}$.<br>
    $\\begin{aligned}
    \\sqrt{${i}}+\\sqrt{${r}}&=\\sqrt{${i}}+${t[0]}\\sqrt{${t[1]}}\\\\
    &= ${$(`${t[0]+1}\\sqrt{${t[1]}}`)}
    \\end{aligned}$
  `):(this.question=`Écrire $\\sqrt{${r}}+\\sqrt{${i}}$ sous la forme $a\\sqrt{b}$ avec $a$ et $b$ entiers et $b$ le plus petit possible. `,this.correction=`On a  $${r}=${t[0]}^2\\times ${t[1]}$.<br>
          Ainsi, $\\sqrt{${r}}=\\sqrt{${t[0]}^2\\times${t[1]}}=\\sqrt{${t[0]}^2}\\times \\sqrt{${t[1]}}
    =${t[0]}\\sqrt{${t[1]}}$.<br>
  $\\begin{aligned}
  \\sqrt{${r}}+\\sqrt{${i}}&=${t[0]}\\sqrt{${t[1]}}+\\sqrt{${i}}\\\\
  &= ${$(`${t[0]+1}\\sqrt{${t[1]}}`)}
  \\end{aligned}$
`),this.reponse=[`${t[0]+1}\\sqrt${t[1]}`];break;case 2:s=e(o),i=s[0],r=s[1],t=p(r),e([!0,!1])?(this.question=`Écrire $\\sqrt{${i}}-\\sqrt{${r}}$ sous la forme $a\\sqrt{b}$ avec $a$ et $b$ entiers et $b$ le plus petit possible. `,this.correction=`On a  $${r}=${t[0]}^2\\times ${t[1]}$.<br>
          Ainsi, $\\sqrt{${r}}=\\sqrt{${t[0]}^2\\times${t[1]}}=\\sqrt{${t[0]}^2}\\times \\sqrt{${t[1]}}
    =${t[0]}\\sqrt{${t[1]}}$.<br>
    $\\begin{aligned}
    \\sqrt{${i}}-\\sqrt{${r}}&=\\sqrt{${i}}-${t[0]}\\sqrt{${t[1]}}\\\\
    &= ${$(`${1-t[0]}\\sqrt{${t[1]}}`)}
    \\end{aligned}$
  `,1-t[0]===-1?this.reponse=[`${1-t[0]}\\sqrt${t[1]}`]:this.reponse=[`${1-t[0]}\\sqrt${t[1]}`,`-\\sqrt${t[1]}`]):(this.question=`Écrire $\\sqrt{${r}}-\\sqrt{${i}}$ sous la forme $a\\sqrt{b}$ avec $a$ et $b$ entiers et $b$ le plus petit possible. `,this.correction=`On a  $${r}=${t[0]}^2\\times ${t[1]}$.<br>
          Ainsi, $\\sqrt{${r}}=\\sqrt{${t[0]}^2\\times${t[1]}}=\\sqrt{${t[0]}^2}\\times \\sqrt{${t[1]}}
    =${t[0]}\\sqrt{${t[1]}}$.<br>
  $\\begin{aligned}
  \\sqrt{${r}}-\\sqrt{${i}}&=${t[0]}\\sqrt{${t[1]}}-\\sqrt{${i}}\\\\
  &= ${$(`${t[0]-1}\\sqrt{${t[1]}}`)}
  \\end{aligned}$
`,1-t[0]===1?this.reponse=[`${t[0]-1}\\sqrt${t[1]}`,`\\sqrt${t[1]}`]:this.reponse=[`${t[0]-1}\\sqrt${t[1]}`]);break}}}export{At as default,gt as interactifReady,vt as interactifType,Ct as refs,dt as titre,xt as uuid};
//# sourceMappingURL=can2C07-Bryugo21.js.map
