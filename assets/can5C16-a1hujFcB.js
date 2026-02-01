import{A as $,p as s,r as o,B as t,R as n}from"./index-Dkwu26bg.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const gt="Calculer astucieusement avec une factorisation",ft=!0,qt="mathLive",Ct="7d21c",Et={"fr-fr":["can5C16"],"fr-ch":[]};class xt extends ${constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,r,i,m;switch(s(["a","b","c","c","d","e"])){case"a":e=o(5,99)/10,r=o(2,9)*5,i=100-r,this.question=`Calculer $${r}\\times${t(e)} + ${t(e)}\\times${i}$.
`,this.correction=`On remarque de part et d'autre  du signe "$+$" un facteur commun : $${t(e)}$.<br>
En factorisant par ce nombre, on obtient : <br>
$\\begin{aligned}
${t(r)}\\times${t(e)} + ${t(e)}\\times${i}&=${t(e)}\\underbrace{(${t(r)}+${t(i)})}_{=100}\\\\
&=${t(e)}\\times 100\\\\
&=${t(100*e)}
\\end{aligned}$`,this.reponse=n(100*e);break;case"b":e=o(5,99)/100,r=o(2,8),i=10-r,this.question=`Calculer $ ${r}\\times${t(e)}+ ${i}\\times${t(e)}$.
`,this.correction=`On remarque de part et d'autre  du signe "$+$" un facteur commun : $${t(e)}$.<br>
        En factorisant par ce nombre, on obtient : <br>
        $\\begin{aligned}
        ${t(r)}\\times${t(e)} + ${t(i)}\\times${t(e)}&=${t(e)}\\underbrace{(${t(r)}+${t(i)})}_{=10}\\\\
        &=${t(e)}\\times 10\\\\
        &=${t(10*e)}
        \\end{aligned}$`,this.reponse=n(10*e);break;case"c":e=o(5,99,[10,20,30,40,50,60,70,80,90])/10,r=o(2,8)/10,m=o(1,2),i=m-r,this.question=`Calculer $ ${t(r)}\\times${t(e)}+ ${t(i)}\\times${t(e)}$.
`,this.correction=`On remarque de part et d'autre  du signe "$+$" un facteur commun : $${t(e)}$.<br>
        En factorisant par ce nombre, on obtient : <br>
$\\begin{aligned}
${t(e)}\\times ${t(r)}+${t(e)}\\times ${t(i)}&=${t(e)}\\underbrace{(${t(r)}+${t(i)})}_{=${m}}\\\\
&=${t(e)}\\times ${m}\\\\
&=${t(m*e)}
\\end{aligned}$`,this.reponse=n(m*e);break;case"d":e=o(5,99)/100,r=o(2,99)/10,i=10-r,this.question=`Calculer $ ${t(r)}\\times${t(e)}+ ${t(i)}\\times${t(e)}$.
    `,this.correction=`On remarque de part et d'autre  du signe "$+$" un facteur commun : $${t(e)}$.<br>
            En factorisant par ce nombre, on obtient : <br>
            $\\begin{aligned}
            ${t(r)}\\times${t(e)} + ${t(i)}\\times${t(e)}&=${t(e)}\\underbrace{(${t(r)}+${t(i)})}_{=10}\\\\
            &=${t(e)}\\times 10\\\\
            &=${t(10*e)}
            \\end{aligned}$`,this.reponse=n(10*e);break;case"e":e=o(1,12)*10,r=o(2,9)/10,i=5-r,this.question=`Calculer $ ${t(e)}\\times${t(r)}+ ${t(i)}\\times${t(e)}$.
    `,this.correction=`On remarque de part et d'autre  du signe "$+$" un facteur commun : $${t(e)}$.<br>
            En factorisant par ce nombre, on obtient : <br>
            $\\begin{aligned}
            ${t(e)}\\times${t(r)}+ ${t(i)}\\times${t(e)}&=${t(e)}\\underbrace{(${t(r)}+${t(i)})}_{=5}\\\\
            &=${t(e)}\\times 5\\\\
            &=${t(5*e)}
            \\end{aligned}$`,this.reponse=n(5*e);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{xt as default,ft as interactifReady,qt as interactifType,Et as refs,gt as titre,Ct as uuid};
//# sourceMappingURL=can5C16-a1hujFcB.js.map
