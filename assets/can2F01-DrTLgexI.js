import{A as u,p as b,r as a,m as s,v as t,x as c,B as o,a2 as m,y as p}from"./index-CMKaCP9B.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Q$="Calculer une image avec le second degré",M$=!0,P$="mathLive",j$="b2c31",C$={"fr-fr":["can2F01"],"fr-ch":[]};class E$ extends u{constructor(){super(),this.typeExercice="simple",this.versionQcmDisponible=!0,this.nbQuestions=1}nouvelleVersion(){let $,i,e,r,n,l;switch(b(["a","b","c","d"])){case"a":$=this.versionQcm?a(-5,-1):a(1,4),i=a(1,2),e=a(1,2),r=a(2,5),l=`${p(i)}x^2+${p(e)}x+${r}`,this.question=`On considère la fonction $f$ définie par $f(x)= ${l}$. <br>`,this.question+=this.versionQcm?`L'image de $${$}$ par la fonction $f$ est égale à :`:`Calculer $f(${$})$.`,i===1&&e!==1&&(this.correction=`On a : <br>
          $\\begin{aligned}
          f(${$})&= ${t($)}^2+${e}\\times ${t($)}+${r}\\\\
          &=${$*$}${s(e*$)}+${r}\\\\
          &= ${i*$*$}${s(e*$)}+${r}\\\\
          &=${c(i*$*$+e*$+r)}
          \\end{aligned}$<br>`,this.correction+=m(` Mentalement : <br>
          On commence par calculer le carré de $${$}$, soit $${t($)}^2=${o($**2)}$. <br>
   On calcule $${e}\\times ${t($)}$ que l'on ajoute à $${o(i*$**2)}$, soit $${i*$**2}+${t(e*$)}=${i*$**2+e*$}$.<br>
  Pour finir, on ajoute   $${r}$, ce qui donne $${o(i*$**2+e*$)}+${r}$, soit $${o(i*$**2+e*$+r)}$.<br>
    `,"blue")),i!==1&&e!==1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=${i}\\times${t($)}^2+${e}\\times ${t($)}+${r}\\\\
          &=${i}\\times ${$*$}${s(e*$)}+${r}\\\\
          &=${i*$*$}${s(e*$)}+${r}\\\\
          &=${c(i*$*$+e*$+r)}
          \\end{aligned}$.<br>`,this.correction+=m(` Mentalement : <br>
              On commence par calculer le carré de $${$}$, soit $${t($)}^2=${o($**2)}$. <br>
     On multiplie ensuite cette valeur par le coefficient devant $x^2$, soit $${i}\\times ${o($**2)}=${o(i*$**2)}$.<br>
      On calcule $${e}\\times ${t($)}$ que l'on ajoute à $${o(i*$**2)}$, soit $${i*$**2}+${t(e*$)}=${i*$**2+e*$}$.<br>
      Pour finir, on ajoute   $${r}$, ce qui donne $${o(i*$**2+e*$)}+${r}$, soit $${o(i*$**2+e*$+r)}$.<br>
        `,"blue")),i===1&&e===1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=${t($)}^2+ ${t($)}+${r}\\\\
          &=${$*$}+${t($)}+${r}\\\\
          &=${c($*$+e*$+r)}
          \\end{aligned}$<br>`,this.correction+=m(` Mentalement : <br>
          On commence par calculer le carré de $${$}$, soit $${t($)}^2=${o($**2)}$. <br>
   On ajoute  $${$}$ soit $${i*$**2}+${t($)}=${$**2+e*$}$.<br>
  Pour finir, on ajoute   $${r}$, ce qui donne $${o(i*$**2+e*$)}+${r}$, soit $${o(i*$**2+e*$+r)}$.<br>
    `,"blue")),i!==1&&e===1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=${i}\\times${t($)}^2+${e}\\times ${t($)}+${r}\\\\
          &=${i}\\times ${$*$}${s(e*$)}+${r}\\\\
          &=${i*$*$}${s(e*$)}+${r}\\\\
          &=${c(i*$*$+e*$+r)}
          \\end{aligned}$<br>`,this.correction+=m(` Mentalement : <br>
          On commence par calculer le carré de $${$}$, soit $${t($)}^2=${o($**2)}$. <br>
 On multiplie ensuite cette valeur par le coefficient devant $x^2$, soit $${i}\\times ${o($**2)}=${o(i*$**2)}$.<br>
 On ajoute  $${$}$ soit $${i*$**2}+${t($)}=${i*$**2+e*$}$.<br>
  Pour finir, on ajoute   $${r}$, ce qui donne $${o(i*$**2+e*$)}+${r}$, soit $${o(i*$**2+e*$+r)}$.<br>
    `,"blue")),this.reponse=this.versionQcm?`$${o(i*$*$+e*$+r)}$`:i*$*$+e*$+r,this.distracteurs=[i*$*$+e*$+r===-i*$*$+e*$+r?`$${o(i*$-e*$-r)}$`:`$${o(-i*$*$+e*$+r)}$`,i*$*$+e*$+r===2*$+e*$+r?`$${o(-2*i*$+e*$+r)}$`:`$${o(-2*$+e*$+r)}$`,i*$*$+e*$+r===$+e*$+r?`$${o(-$+e*$+r)}$`:`$${o($+e*$+r)}$`];break;case"b":i=a(1,3),e=a(-2,2,[0]),r=a(1,3),n=a(-3,3,[0,e]),$=this.versionQcm?a(-5,-1):a(-3,3,[0]),l=`(${p(i)}x${s(e)})(${p(r)}x${s(n)})`,this.question=`On considère la fonction $f$ définie par $f(x)= ${l}$. <br>`,this.question+=this.versionQcm?`L'image de $${$}$ par la fonction $f$ est égale à :`:`Calculer $f(${$})$.`,i===1&&r===1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=\\left(${t($)}${s(e)}\\right)\\left(${t($)}${s(n)}\\right)\\\\
          &=(${i*$}${s(e)})(${r*$}${s(n)})\\\\
          &=${i*$+e}\\times${t(r*$+n)}\\\\
          &=${c((i*$+e)*(r*$+n))}
          \\end{aligned}$<br>`,this.reponse=this.versionQcm?`$${(i*$+e)*(r*$+n)}$`:`${(i*$+e)*(r*$+n)}`,this.correction+=m(` Mentalement : <br>
          On commence par "calculer" la première parenthèse :  $${t($)}${s(e)}=${i*$+e}$.<br>
           Puis la deuxième : $${t($)}${s(n)}=${r*$+n}$.<br>
        On fait le produit des nombres obtenus : $${i*$+e}\\times ${r*$+n}=${(i*$+e)*(r*$+n)}$.
    `,"blue")),i!==1&&r!==1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=\\left(${p(i)}\\times${t($)}${s(e)}\\right)\\left(${r}\\times${t($)}${s(n)}\\right)\\\\
          &=(${i*$}${s(e)})(${r*$}${s(n)})\\\\
          &= ${i*$+e}\\times${t(r*$+n)}=${c((i*$+e)*(r*$+n))}
          \\end{aligned}$<br>`,this.correction+=m(` Mentalement : <br>
        On commence par "calculer" la première parenthèse :  $${p(i)}\\times${t($)}${s(e)}=${i*$+e}$.
        <br>Puis la deuxième : $${r}\\times${t($)}${s(n)}=${r*$+n}$.<br>
        On fait le produit des nombres obtenus : $${i*$+e}\\times ${t(r*$+n)}=${(i*$+e)*(r*$+n)}$.
    `,"blue")),i===1&&r!==1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=\\left(${t($)}${s(e)}\\right)\\left(${r}\\times${t($)}${s(n)}\\right)\\\\
          &=(${i*$}${s(e)})(${r*$}${s(n)})\\\\
          &=${i*$+e}\\times${t(r*$+n)}=${c((i*$+e)*(r*$+n))}
          \\end{aligned}$<br>`,this.correction+=m(` Mentalement : <br>
        On commence par "calculer" la première parenthèse :  $${t($)}${s(e)}=${i*$+e}$.
        <br>Puis la deuxième : $${r}\\times${t($)}${s(n)}=${r*$+n}$.<br>
        On fait le produit des nombres obtenus : $${i*$+e}\\times ${r*$+n}=${(i*$+e)*(r*$+n)}$.
    `,"blue")),i!==1&&r===1&&(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=\\left(${i}\\times${t($)}${s(e)}\\right)\\left(${t($)}${s(n)}\\right)\\\\
          &=(${i*$}${s(e)})(${r*$}${s(n)})\\\\
          &=${i*$+e}\\times${t(r*$+n)}=${c((i*$+e)*(r*$+n))}
          \\end{aligned}$<br>`,this.correction+=m(` Mentalement : <br>
        On commence par "calculer" la première parenthèse :  $${i}\\times${t($)}${s(e)}=${i*$+e}$.
        <br>Puis la deuxième : $${t($)}${s(n)}=${r*$+n}$.<br>
        On fait le produit des nombres obtenus : $${i*$+e}\\times ${t(r*$+n)}=${(i*$+e)*(r*$+n)}$.
    `,"blue")),this.reponse=this.versionQcm?`$${o((i*$+e)*(r*$+n))}$`:(i*$+e)*(r*$+n),this.distracteurs=[`$${o((i*$-e)*(r*$+n))}$`,`$${o((i*$+e)*(r*$-n))}$`,`$${o(i*$+e+(r*$+n))}$`,`$${o(-i*$+e+(r*$+n))}$`,`$${o(-i*$+e+(-r*$+n))}$`];break;case"c":i=a(-3,3,0),e=a(1,3),$=this.versionQcm?a(-5,-1):a(-3,3,[0]),l=`${i}-${p(e)}x^2`,this.question=`On considère la fonction $f$ définie par $f(x)= ${l}$. <br>`,this.question+=this.versionQcm?`L'image de $${$}$ par la fonction $f$ est égale à :`:`Calculer $f(${$})$.`,this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=${i}- ${t($)}^2\\\\
          &=${c(i-e*$*$)}
          \\end{aligned}$<br>`,this.reponse=this.versionQcm?`$${o(i-e*$*$)}$`:i-e*$*$,e===1?this.correction+=m(` Mentalement : <br>
          On commence par "calculer" le carré de $${$}$ :  $${t($)}^2=${$*$}$.<br>
          On calcule alors $${i}-${$*$}=${i-$*$}$.<br>
    `,"blue"):(this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=${i}- ${e}\\times ${t($)}^2\\\\
          &=${c(i-e*$*$)}
          \\end{aligned}$<br>`,this.correction+=m(` Mentalement : <br>
    On commence par "calculer" le carré de $${$}$ :  $${t($)}^2=${$*$}$.<br>
    Puis on multiplie le résultat par $${e}$ : $${e}\\times ${$**2}=${e*$*$}$.<br>
    On calcule alors : $${i}-${e*$*$}=${i-e*$*$}$.`,"blue")),this.distracteurs=[`$${o(i+e*$*$)}$`,`$${o((i-e*$)**2)}$`,`$${o(-i+e*$*$)}$`,`$${o(i-2*e*$)}$`,`$${o(i+2*e*$)}$`];break;case"d":i=a(-4,4,[0,-1,1]),e=a(-4,4,[0]),r=a(-4,4,[0,-1,1]),n=a(-4,4,[0]),$=this.versionQcm?a(-4,-1,[0]):a(-2,2,[0]),l=`(${i}x${s(e)})^2`,this.question=`On considère la fonction $f$ définie par $f(x)= ${l}$. <br>`,this.question+=this.versionQcm?`L'image de $${$}$ par la fonction $f$ est égale à :`:`Calculer $f(${$})$.`,this.correction=`On a :<br>
          $\\begin{aligned}
          f(${$})&=\\left(${i}\\times${t($)}${s(e)}\\right)^2\\\\
          &= (${i*$}${s(e)})^2\\\\
          &=${t(i*$+e)}^2\\\\
        &=${c((i*$+e)*(i*$+e))}
        \\end{aligned}$<br>`,this.reponse=this.versionQcm?`$${o((i*$+e)*(i*$+e))}$`:(i*$+e)*(i*$+e),this.correction+=m(` Mentalement : <br>
          On commence par "calculer" l'intérieur de la parenthèse, puis on élève le résultat au carré.
    `,"blue"),this.distracteurs=[`$${o(-1*(i*$+e)*(i*$+e))}$`,`$${o((i*$-e)*(i*$+e))}$`,`$${o(i*$+e)}$`,`$${o((i+$+e)*(i+$+e))}$`];break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{E$ as default,M$ as interactifReady,P$ as interactifType,C$ as refs,Q$ as titre,j$ as uuid};
//# sourceMappingURL=can2F01-DrTLgexI.js.map
