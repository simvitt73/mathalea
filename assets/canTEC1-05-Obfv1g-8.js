import{A as g,r as m,x as e}from"./index-Dkwu26bg.js";import{H as o,J as n}from"./vendors/mathjs-DKCMnljp.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";const qi="Déterminer le conjugué d'un nombre complexe",xi=!0,Zi="mathLive",ji=!0,Di="AMCHybride",yi="07/092025",ki="ac62a",Ei={"fr-fr":["canTEC1-05"],"fr-ch":[]};class Oi extends g{constructor(){super(),this.nbQuestions=1,this.typeExercice="simple"}nouvelleVersion(){const i=m(-5,5),t=m(-5,5),r=o(i,t),p=o(-i,-t),s=o(-t,i),$=o(i,-t),c=o(t,i),a=o(t,-i),l=m(0,4);switch(this.question=`On donne le nombre complexe $z = ${r.toString()}$.<br>`,this.correction="Par définition, le conjugué d'un nombre complexe qui s'écrit sous la forme $z=a+ib$, avec $a$ et $b$ deux réels, est $\\overline{z} =a-ib$.<br>",l){case 0:this.question+="Déterminer le conjugué de $z$.",this.correction+=`On a donc ici : $\\overline{z} = ${e(`${n(r).toString()}`)}$.`,this.reponse=`${i}+${-t}i`;break;case 1:this.question+="Déterminer $\\overline{z}$.",this.correction+=`On a donc ici : $\\overline{z} = ${e(`${n(r).toString()}`)}$.`,this.reponse=`${i}+${-t}i`;break;case 2:this.question+="Déterminer la forme algébrique de $Z=\\overline{-z}$.",this.correction+=`
    $\\begin{aligned}
    Z&=\\overline{-z}\\\\
     &= \\overline{${p.toString()}}\\\\
    &=${e(`${n(p).toString()}`)}.
    \\end{aligned}$`,this.reponse=`${-i}+${t}i`;break;case 3:this.question+="Déterminer la forme algébrique de $Z=\\overline{iz}$.",this.correction+=`
    $\\begin{aligned}
    Z&=\\overline{iz}\\\\
      &= \\overline{i\\left(${r.toString()}\\right)}\\\\
      &= \\overline{${s.toString()}}\\\\
    &=${e(`${n(s).toString()}`)}.
    \\end{aligned}$<br>
    On aurait pu aussi utiliser la propriété  des produits des conjugués :<br>
     $\\begin{aligned}
    Z&=\\overline{iz}\\\\
      &= \\overline{i} \\times \\overline{${r.toString()}}\\\\
       &= -i \\left({${$.toString()}}\\right)\\\\
       &=${e(`${n(s).toString()}`)}.
    \\end{aligned}$<br>`,this.reponse=`${-i}+${-t}i`;break;case 4:this.question+="Déterminer la forme algébrique de $Z=\\overline{-iz}$.",this.correction+=`
    $\\begin{aligned}
    Z&=\\overline{-iz}\\\\
      &= \\overline{-i\\left(${r.toString()}\\right)}\\\\
      &= \\overline{${a.toString()}}\\\\
    &=${e(`${c.toString()}`)}.
    \\end{aligned}$<br>
    On aurait pu aussi utiliser la propriété  des produits des conjugués :<br>
     $\\begin{aligned}
    Z&=\\overline{-iz}\\\\
      &= \\overline{-i} \\times \\left(\\overline{${r.toString()}}\\right)\\\\
       &= i \\left({${n(r).toString()}}\\right)\\\\
      &=${e(`${c.toString()}`)}.
    \\end{aligned}$<br>`,this.reponse=`${-t}+${-i}i`;break}}}export{ji as amcReady,Di as amcType,yi as dateDePublication,Oi as default,xi as interactifReady,Zi as interactifType,Ei as refs,qi as titre,ki as uuid};
//# sourceMappingURL=canTEC1-05-Obfv1g-8.js.map
