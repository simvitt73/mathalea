var o=Object.defineProperty;var a=(r,m,i)=>m in r?o(r,m,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[m]=i;var e=(r,m,i)=>a(r,typeof m!="symbol"?m+"":m,i);import{x as t,r as $}from"./index-CMKaCP9B.js";import{E as h}from"./ExerciceQcmA-yzB4dxov.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ExerciceQcm-Bg9RomNU.js";import"./lists-SAG-gkx2.js";const Ei="10/08/2025",vi="41fa7",yi={"fr-fr":["canTEC1-04"],"fr-ch":[]},ki=!0,Ai="qcm",Ci="true",Oi="qcmMono",Pi="Calculer les puissances de $i$";class Ti extends h{constructor(){super();e(this,"versionOriginale",()=>{this.enonce="$\\mathrm{i}^{4}$ est égal à : ",this.correction=`On sait que $\\mathrm{i}^{2}=-1$ donc $\\mathrm{i}^{4}=\\left(-1\\right)^{2}=${t("1")}.$`,this.reponses=["$1 $","$-1$ ","$\\mathrm{i} $","$-\\mathrm{i}$ "]});e(this,"versionAleatoire",()=>{const i=$(3,15);switch($(1,2)){case 1:this.enonce=`$\\mathrm{i}^{${i}}$ est égal à `,this.correction="Par définition, on sait que $\\mathrm{i}^{2}=-1$. ",i%4===0?(i===4?this.correction+=` donc $\\mathrm{i}^{4}=${t("1")}$ .`:this.correction+=`donc $\\mathrm{i}^{4}=1$.<br>
        $ \\begin{aligned}\\mathrm{i}^{${i}}&=\\left(\\mathrm{i}^{4}\\right)^{${i/4}}\\\\
        &=${t("1")}
        \\end{aligned}$`,this.reponses=["$1$","$-1$ ","$\\mathrm{i}$","$-\\mathrm{i}$ "]):i===7?(this.correction+=`donc $\\mathrm{i}^{4}=1$. <br>
         $\\begin{aligned}
         \\mathrm{i}^{7}&=\\mathrm{i}^{4}\\times \\mathrm{i}^{3}\\\\
          &=\\mathrm{i}^{3}\\\\
         &=\\mathrm{i}^{2}\\times \\mathrm{i}\\\\
          &=${t("-i")}
         \\end{aligned}$`,this.reponses=["$-\\mathrm{i} $","$1 $","$-1$ ","$\\mathrm{i}$ "]):i===3?(this.correction+=`  <br>
         $\\begin{aligned}
         \\mathrm{i}^{3}&=\\mathrm{i}^{2}\\times \\mathrm{i}\\\\
         &=${t("-i")}
         \\end{aligned}$`,this.reponses=["$-\\mathrm{i} $","$1 $","$-1$ ","$\\mathrm{i}$ "]):i%4===2?(this.correction+=`donc $\\mathrm{i}^{4}=1$. <br>
         $\\begin{aligned}
         \\mathrm{i}^{${i}}&=\\mathrm{i}^{${i-2}}\\times \\mathrm{i}^{2}\\\\
         &=\\left(\\mathrm{i}^{4}\\right)^{${(i-2)/4}}\\times \\mathrm{i}^{2}\\\\
         &=${t("-1")}
         \\end{aligned}$`,this.reponses=["$-1$ ","$-\\mathrm{i}$ ","$1 $","$\\mathrm{i}$ "]):i%4===1&&(this.correction+=`donc $\\mathrm{i}^{4}=1$. <br>
         $\\begin{aligned}
          \\mathrm{i}^{${i}}&=\\mathrm{i}^{${i-1}}\\times \\mathrm{i}\\\\
         &=\\left(\\mathrm{i}^{4}\\right)^{${(i-1)/4}}\\times \\mathrm{i}\\\\
         &=${t("\\mathrm{i}")}
         \\end{aligned}$`,this.reponses=["$\\mathrm{i}$ ","$1 $","$-1$ ","$-\\mathrm{i}$ "]);break;case 2:this.enonce=`$\\left(\\mathrm{-i}\\right)^{${i}}$ est égal à `,this.correction=`On sait que $\\left(\\mathrm{-i}\\right)^{${i}}=\\left(\\mathrm{-1}\\right)^{${i}}\\times \\mathrm{i}^{${i}}$. <br>`,this.correction+="Par définition, on a $\\mathrm{i}^{2}=-1$ ",i%4===0?(i===4?this.correction+=` donc $\\mathrm{i}^{4}=1$ et finalement $\\left(\\mathrm{-i}\\right)^{4}=${t("1")}$.`:this.correction+=` donc $\\mathrm{i}^{4}=1$.<br>
        $\\begin{aligned}\\left(\\mathrm{-i}\\right)^{${i}}
        &=\\mathrm{-i}^{${i}}\\\\
        &=\\left(\\mathrm{i}^{4}\\right)^{${i/4}}\\\\
        &=${t("1")}
        \\end{aligned}$`,this.reponses=["$1 $","$-1$ ","$\\mathrm{i} $","$-\\mathrm{i}$ "]):i===7?(this.correction+=`donc $\\mathrm{i}^{4}=1$.<br>
         $\\begin{aligned}
         \\left(\\mathrm{-i}\\right)^{7}&=\\left(-1\\right)^{7}\\times \\mathrm{i}^{7}\\\\
         &=-\\mathrm{i}^{4}\\times \\mathrm{i}^{3}\\\\
         &=-\\mathrm{i}^{3}\\\\
         &=-\\mathrm{i}^{2}\\times \\mathrm{i}\\\\
          &=${t("i")}
         \\end{aligned}$`,this.reponses=["$i $","$1 $","$-1$ ","$-i$ "]):i===3?(this.correction+=`   <br> 
         $\\begin{aligned}
         \\left(\\mathrm{-i}\\right)^{3}&= -i^{3}\\\\
         &=-i^{2}\\times i\\\\
         &=${t("i.")}
         \\end{aligned}$`,this.reponses=["$\\mathrm{i} $","$1 $","$-1$ ","$-\\mathrm{i}$ "]):i%4===2?(this.correction+=`donc $\\mathrm{i}^{4}=1$, <br> 
         $\\begin{aligned}
         \\left(\\mathrm{-i}\\right)^{${i}}&=\\left(-1\\right)^{${i}}\\times \\mathrm{i}^{${i-2}}\\times \\mathrm{i}^{2}\\\\
         &=\\mathrm{i}^{${i-2}}\\times \\mathrm{i}^{2}\\\\
         &=\\left(\\mathrm{i}^{4}\\right)^{${(i-2)/4}}\\times \\mathrm{i}^{2}\\\\
         &=${t("-1.")}
         \\end{aligned}$`,this.reponses=["$-1$ ","$-\\mathrm{i}$ ","$1 $","$\\mathrm{i} $"]):i%4===1&&(this.correction+=`donc $\\mathrm{i}^{4}=1$, <br>  
         $\\begin{aligned}
         \\left(\\mathrm{-i}\\right)^{${i}}&=(-1)^{${i}}\\times \\mathrm{-i}^{${i-1}}\\times \\mathrm{-i}\\\\
         &=-\\mathrm{i}^{${i-1}}\\times \\mathrm{-i}\\\\
         &=${t("-\\mathrm{i}.")}
         \\end{aligned}$`,this.reponses=["$-\\mathrm{i}$ ","$1 $","$-1$ ","$\\mathrm{i} $"]);break}});this.versionAleatoire()}}export{Ci as amcReady,Oi as amcType,Ei as dateDePublication,Ti as default,ki as interactifReady,Ai as interactifType,yi as refs,Pi as titre,vi as uuid};
//# sourceMappingURL=canTEC1-04-BmmdHpox.js.map
