import{E as w,ab as l,p as g,s,u as a,x as o,o as c}from"./index-Dkwu26bg.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const _r="Utiliser la relation de Chasles/réductions vectorielles*",Er=!0,Rr="qcm",Ar="30/10/2021",Or="03/01/2022",Qr="7bc4a",Dr={"fr-fr":["can2G11"],"fr-ch":[]};class kr extends w{constructor(){super(),this.nbQuestions=1,this.spacing=3}nouvelleVersion(){let e,$,i,h;for(let t=0,n=0;t<this.nbQuestions&&n<50;){const r=l(7,["QD"]),v=g([1,2,3,3]);switch(v){case 1:e=`$\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}=$`,this.autoCorrection[t]={enonce:e,propositions:[{texte:`$\\overrightarrow{${r[0]}${r[3]}}$ `,statut:!0},{texte:`$\\overrightarrow{${r[0]}${r[2]}}$ `,statut:!1},{texte:`$\\overrightarrow{${r[1]}${r[2]}}$ `,statut:!1}]},i=a(this,t),this.interactif?e+=i.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
      $\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=` $\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}=\\ldots$`,$=`On utilise la relation de Chasles :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}
        &=\\underbrace{\\overrightarrow{${r[0]}${o(r[1])}}+
        \\overrightarrow{${o(r[1])}${r[2]}}}_{\\overrightarrow{${r[0]}${r[2]}}}+
        \\overrightarrow{${r[2]}${r[3]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[0]}${o(r[2])}}+
        \\overrightarrow{${o(r[2])}${r[3]}}}_{\\overrightarrow{${o(r[0])}${r[3]}}}\\\\
        &=\\overrightarrow{${r[0]}${r[3]}}
        \\end{aligned}$
        `;break;case 2:h=g(["a","b"]),h==="a"?(e=`$\\overrightarrow{${r[5]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}-\\overrightarrow{${r[2]}${r[1]}}=$`,this.autoCorrection[t]={enonce:e,propositions:[{texte:`$\\overrightarrow{${r[5]}${r[3]}}$ `,statut:!0},{texte:`$\\overrightarrow{${r[5]}${r[2]}}$ `,statut:!1},{texte:`$\\overrightarrow{${r[1]}${r[2]}}$ `,statut:!1}]},i=a(this,t),this.interactif?e+=i.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[5]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}-\\overrightarrow{${r[2]}${r[1]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=` $\\overrightarrow{${r[5]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}-\\overrightarrow{${r[2]}${r[1]}}=\\ldots$`,$=`On utilise la relation de Chasles :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[5]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}\\underbrace{-\\overrightarrow{${r[2]}${r[1]}}}_{+\\overrightarrow{${r[1]}${r[2]}}}
        &=  \\overrightarrow{${r[5]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[5]}${o(r[1])}}+
        \\overrightarrow{${o(r[1])}${r[2]}}}_{\\overrightarrow{${r[5]}${r[2]}}}+
        \\overrightarrow{${r[2]}${r[3]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[5]}${o(r[2])}}+
        \\overrightarrow{${o(r[2])}${r[3]}}}_{\\overrightarrow{${o(r[5])}${r[3]}}}\\\\
        &=\\overrightarrow{${r[5]}${r[3]}}
        \\end{aligned}$
        `):(e=`$\\overrightarrow{${r[0]}${r[1]}}-\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[1]}${r[2]}}=$`,this.autoCorrection[t]={enonce:e,propositions:[{texte:`$\\overrightarrow{${r[0]}${r[3]}}$ `,statut:!0},{texte:`$\\overrightarrow{${r[0]}${r[2]}}$ `,statut:!1},{texte:`$\\overrightarrow{${r[1]}${r[2]}}$ `,statut:!1}]},i=a(this,t),this.interactif?e+=i.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[0]}${r[1]}}-\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[1]}${r[2]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`  $\\overrightarrow{${r[0]}${r[1]}}-\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[1]}${r[2]}}=\\ldots$`,$=`On utilise la relation de Chasles       :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[0]}${r[1]}}\\underbrace{-\\overrightarrow{${r[3]}${r[2]}}}_{+\\overrightarrow{${r[2]}${r[3]}}}+\\overrightarrow{${r[1]}${r[2]}}
        &=  \\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[2]}${r[3]}}+\\overrightarrow{${r[1]}${r[2]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[0]}${o(r[1])}}+
        \\overrightarrow{${o(r[1])}${r[2]}}}_{\\overrightarrow{${r[0]}${r[2]}}}+
        \\overrightarrow{${r[2]}${r[3]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[0]}${o(r[2])}}+
        \\overrightarrow{${o(r[2])}${r[3]}}}_{\\overrightarrow{${r[0]}${r[3]}}}\\\\
        &=\\overrightarrow{${r[0]}${r[3]}}
        \\end{aligned}$
        `);break;default:h=g(["a","b","c","d"]),h==="a"?(e=`$\\overrightarrow{${r[3]}${r[4]}}+\\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[4]}${r[3]}}=$`,this.autoCorrection[t]={enonce:e,propositions:[{texte:`$\\overrightarrow{${r[5]}${r[0]}}$ `,statut:!0},{texte:"$\\overrightarrow{0}$ ",statut:!1},{texte:`$2${s(1)}\\overrightarrow{${r[4]}${r[3]}}$ `,statut:!1}]},i=a(this,t),this.interactif?e+=i.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[3]}${r[4]}}+\\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[4]}${r[3]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`   $\\overrightarrow{${r[3]}${r[4]}}+\\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[4]}${r[3]}}=\\ldots$`,$=`On utilise la relation de Chasles :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[3]}${r[4]}}+\\overrightarrow{${r[5]}${r[0]}}+\\overrightarrow{${r[4]}${r[3]}}
        &=\\underbrace{\\overrightarrow{${r[3]}${o(r[4])}}+\\overrightarrow{${o(r[4])}${r[3]}}}_{\\overrightarrow{${r[3]}${r[3]}}}+\\overrightarrow{${r[5]}${r[0]}}\\\\
&= \\overrightarrow{0}+\\overrightarrow{${r[5]}${r[0]}}\\\\
&= \\overrightarrow{${r[5]}${r[0]}}
        \\end{aligned}$
        `):h==="b"?(e=`$\\overrightarrow{${r[2]}${r[0]}}+\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[0]}${r[3]}}=$`,this.autoCorrection[t]={enonce:e,propositions:[{texte:"$\\overrightarrow{0}$ ",statut:!0},{texte:`$2${s(1)}\\overrightarrow{${r[0]}${r[2]}}$ `,statut:!1},{texte:`$\\overrightarrow{${r[2]}${r[3]}}$ `,statut:!1}]},i=a(this,t),this.interactif?e+=i.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[2]}${r[0]}}+\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[0]}${r[3]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`    $\\overrightarrow{${r[2]}${r[0]}}+\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[0]}${r[3]}}=\\ldots$`,$=`On utilise la relation de Chasles       :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[2]}${r[0]}}+\\overrightarrow{${r[3]}${r[2]}}+\\overrightarrow{${r[0]}${r[3]}}
        &=  \\underbrace{\\overrightarrow{${r[2]}${o(r[0])}}+\\overrightarrow{${o(r[0])}${r[3]}}}_{\\overrightarrow{${r[2]}${r[3]}}}+\\overrightarrow{${r[3]}${r[2]}}\\\\
        &=  \\underbrace{\\overrightarrow{${r[2]}${o(r[3])}}+\\overrightarrow{${o(r[3])}${r[2]}}}_{\\overrightarrow{${r[2]}${r[2]}}}\\\\
        &=\\overrightarrow{${r[2]}${r[2]}}\\\\
        &=\\overrightarrow{0}
        \\end{aligned}$
        `):h==="c"?(e=`$\\overrightarrow{${r[4]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[4]}}=$`,this.autoCorrection[t]={enonce:e,propositions:[{texte:`$2${s(1)}\\overrightarrow{${r[0]}${r[1]}}$ `,statut:!0},{texte:"$\\overrightarrow{0}$ ",statut:!1},{texte:`$\\overrightarrow{${r[0]}${r[1]}}$ `,statut:!1}]},i=a(this,t),this.interactif?e+=i.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[4]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[4]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`    $\\overrightarrow{${r[4]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[4]}}=\\ldots$`,$=`On utilise la relation de Chasles       :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[4]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[4]}}
        &= \\underbrace{\\overrightarrow{${r[0]}${o(r[4])}}+\\overrightarrow{${o(r[4])}${r[1]}}}_{\\overrightarrow{${r[0]}${r[1]}}}+\\overrightarrow{${r[0]}${r[1]}}\\\\
        &=  \\overrightarrow{${r[0]}${r[1]}}+\\overrightarrow{${r[0]}${r[1]}}\\\\
        &=  2\\overrightarrow{${r[0]}${r[1]}}
        \\end{aligned}$
        `):(e=`$\\overrightarrow{${r[6]}${r[1]}}-\\overrightarrow{${r[6]}${r[0]}}+\\overrightarrow{${r[1]}${r[0]}}=$`,this.autoCorrection[t]={enonce:e,propositions:[{texte:"$\\overrightarrow{0}$ ",statut:!0},{texte:`$2${s(1)}\\overrightarrow{${r[0]}${r[1]}}$ `,statut:!1},{texte:`$\\overrightarrow{${r[1]}${r[0]}}$ `,statut:!1}]},i=a(this,t),this.interactif?e+=i.texte:e=`Écrire à l'aide d'un seul vecteur : <br>
          $\\overrightarrow{${r[6]}${r[1]}}-\\overrightarrow{${r[6]}${r[0]}}+\\overrightarrow{${r[1]}${r[0]}}=$`,this.canEnonce="Écrire à l'aide d'un seul vecteur.",this.canReponseACompleter=`   $\\overrightarrow{${r[6]}${r[1]}}-\\overrightarrow{${r[6]}${r[0]}}+\\overrightarrow{${r[1]}${r[0]}}=\\ldots$`,$=`On utilise la relation de Chasles       :<br>
        $\\begin{aligned}
        \\overrightarrow{${r[6]}${r[1]}}\\underbrace{-\\overrightarrow{${r[6]}${r[0]}}}_{+\\overrightarrow{${r[0]}${r[6]}}}+\\overrightarrow{${r[1]}${r[0]}}
        &=\\overrightarrow{${r[6]}${r[1]}}+\\overrightarrow{${r[0]}${r[6]}}+\\overrightarrow{${r[1]}${r[0]}}\\\\
        &= \\underbrace{\\overrightarrow{${r[1]}${o(r[0])}}+\\overrightarrow{${o(r[0])}${r[6]}}}_{\\overrightarrow{${r[1]}${r[6]}}}+\\overrightarrow{${r[6]}${r[1]}}\\\\
        &=\\underbrace{\\overrightarrow{${r[1]}${o(r[6])}}+\\overrightarrow{${o(r[6])}${r[1]}}}_{\\overrightarrow{${r[1]}${r[1]}}}\\\\
        &=\\overrightarrow{${r[1]}${r[1]}}\\\\
        &=\\overrightarrow{0}
        \\end{aligned}$
        `);break}this.questionJamaisPosee(t,r,v)&&(this.listeQuestions[t]=e,this.listeCorrections[t]=$,this.canEnonce=e,this.canReponseACompleter=i.texte,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),t++),n++}c(this)}}export{Or as dateDeModifImportante,Ar as dateDePublication,kr as default,Er as interactifReady,Rr as interactifType,Dr as refs,_r as titre,Qr as uuid};
//# sourceMappingURL=can2G11-Bo8d_aDZ.js.map
