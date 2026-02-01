import{A as c,K as d,J as m,p as s,r,k as o,v as n,x as $,a2 as p}from"./index-vfG7N0N9.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-BymNGK-G.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-CKp8Whw5.js";import"./json/refToUuidCH-C3otjGt1.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-CxJkatM_.js";import"./json/referentiel2022FR-DUyIuCDZ.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const qe="Déterminer une fonction affine avec deux images",Ae=!0,Ee="mathLive",Fe="30/04/2024",ye="571b2",De={"fr-fr":["can2F19"],"fr-ch":["11FA8-23","1mF2-18"]};class Le extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=d.clavierDeBaseAvecVariable,this.compare=m}nouvelleVersion(){switch(s([1,2])){case 1:{const e=s(["f","g","h"]),t=r(1,8),i=r(-10,10);this.reponse={reponse:{value:o(t,i),options:{variable:"x",domaine:[-100,100]},compare:m}},this.question=`$${e}$ est une fonction affine vérifiant $${e}(0)=${i}$ et $${e}(1)=${i+t}$.<br>`,this.interactif?this.question+=`L'expression algébrique de $${e}$ est $${e}(x)=$`:this.question+=`Déterminer l'expression algébrique de $${e}$.`,this.correction=`$${e}$ est une fonction affine donc de la forme $${e}(x)=mx+p$ avec $p=${e}(0)=${i}$.<br>
          $\\begin{aligned}
          m&=\\dfrac{${e}(1)-${e}(0)}{1-0}\\\\
          &=${e}(1)-${e}(0)\\\\
          &=${i+t}-${n(i)}\\\\
          &=${t}
          \\end{aligned}$<br>

          On en déduit  $${e}(x)=${$(o(t,i))}$<br>`,this.correction+=p(`
    Mentalement : <br>
Les images de $0$ et de $1$ permettent de déterminer rapidement le coefficient directeur qui est la différence des images, 
soit $${i+t}-${n(i)}=${t}$.
`,"blue")}break;case 2:{const e=s(["f","g","h"]),t=r(1,8),i=r(-10,10);this.reponse={reponse:{value:o(t,i),options:{variable:"x",domaine:[-100,100]},compare:m}},this.question=`$${e}$ est une fonction affine vérifiant $${e}(-1)=${i-t}$ et $${e}(0)=${i}$.<br>`,this.interactif?this.question+=`L'expression algébrique de $${e}$ est $${e}(x)=$`:this.question+=`Déterminer l'expression algébrique de $${e}$.`,this.correction=`$${e}$ est une fonction affine donc de la forme $${e}(x)=mx+p$ avec $p=${e}(0)=${i}$.<br>
        $\\begin{aligned}
        m&=\\dfrac{${e}(0)-${e}(-1)}{0-(-1)}\\\\
        &=${e}(0)-${e}(-1)\\\\
        &=${i}-${n(i-t)}\\\\
        &=${t}
        \\end{aligned}$<br>

        On en déduit  $${e}(x)=${$(o(t,i))}$<br>`,this.correction+=p(`
  Mentalement : <br>
Les images de $-1$ et de $0$ permettent de déterminer rapidement le coefficient directeur qui est la différence des images, 
soit $${i}-${n(i-t)}=${t}$.
`,"blue")}break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{Fe as dateDePublication,Le as default,Ae as interactifReady,Ee as interactifType,De as refs,qe as titre,ye as uuid};
//# sourceMappingURL=can2F19-Ej6-RExw.js.map
