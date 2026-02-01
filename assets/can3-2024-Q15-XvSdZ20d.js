import{A as m,K as c,F as s,x as e,p as a,ao as p}from"./index-CMKaCP9B.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const bt="Soustraire deux fractions",gt=!0,At="mathLive",Et="50e11";class vt extends m{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=c.clavierDeBaseAvecFraction,this.optionsChampTexte={texteAvant:" $=$"},this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=new s(3,35).texFraction,this.question="$\\dfrac{13}{35}-\\dfrac{2}{7}$    ",this.correction=`Pour soustraire des fractions, on les met au même dénominateur.<br>
      Ainsi, <br><br>
      $\\begin{aligned}
      \\dfrac{13}{35}-\\dfrac{2}{7}&=\\dfrac{13}{35}-\\dfrac{10}{35}\\\\
      &=${e(this.reponse)}
      \\end{aligned}$`;else{const i=a(p()),r=a([2,4]),t=new s(1,i.d*r),o=new s(i.n*r-t.n,t.d);if(this.reponse=o.texFraction,a([!0,!1]))this.question=`$${i.texFraction} - ${t.texFraction}$
       `,this.correction=`Pour soustraire des fractions, on les met au même dénominateur.<br>
       Ainsi, <br><br>
       $\\begin{aligned}
       ${i.texFraction} - ${t.texFraction}
       &=\\dfrac{${i.n}\\times ${r}}{${i.d}\\times ${r}}- ${t.texFraction}\\\\
      &=${i.reduire(r).texFraction} - ${t.texFraction}\\\\
      &=\\dfrac{${i.n*r}-${t.n}}{${t.d}}\\\\
      &=${e(o.texFraction)}${o.texSimplificationAvecEtapes()}
      \\end{aligned}$<br>
      Par conséquent, $ ${i.texFraction}-${t.texFraction}= ${e(o.simplifie().texFraction)}$.`;else{const n=new s(t.n-i.n*r,t.d);this.reponse=n.texFraction,this.question=`$ ${t.texFraction}-${i.texFraction}$`,this.correction=`Pour soustraire des fractions, on les met au même dénominateur.
       <br>
       Ainsi, <br><br>$\\begin{aligned} ${t.texFraction}-${i.texFraction}
       &= ${t.texFraction}-\\dfrac{${i.n}\\times ${r}}{${i.d}\\times ${r}}\\\\
      &=${t.texFraction}-${i.reduire(r).texFraction}\\\\
      &=\\dfrac{${t.n}-${i.n*r}}{${t.d}}\\\\
      &=${e(n.texFraction)}${n.texSimplificationAvecEtapes()}
      \\end{aligned}$<br>
      Par conséquent, $ ${t.texFraction}-${i.texFraction}= ${e(n.simplifie().texFraction)}$.`}}this.canEnonce=this.question,this.canReponseACompleter=""}}export{vt as default,gt as interactifReady,At as interactifType,bt as titre,Et as uuid};
//# sourceMappingURL=can3-2024-Q15-XvSdZ20d.js.map
