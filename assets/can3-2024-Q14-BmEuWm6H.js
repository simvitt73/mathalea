import{A as $,K as a,P as o,s as t,x as s,p as u,r as e,v as n}from"./index-Dkwu26bg.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const xt="Calculer avec un programme de calcul",wt=!0,ft="mathLive",yt="f9727";class Et extends ${constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=a.clavierDeBase,this.canOfficielle=!1}nouvelleVersion(){if(this.canOfficielle)this.reponse=9,o.isHtml?(this.question="Nombre de départ <br>",this.question+=`${t(15)}$\\downarrow$<br>`,this.question+=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\text{Soustraire } 5 \\
`,this.question+=`\\\\
 \\text{Prendre son carré } \\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$<br>`,this.question+=`${t(15)}$\\downarrow$<br>
       `,this.question+=`${t(7)}Résultat<br>`):(this.question=`${t(2)}\\texttt{Nombre de départ}`,this.question+=`<br>${t(8)}$\\downarrow$<br>`,this.question+=`${t(8)} \\fbox{ \\texttt{Soustraire } 5}`,this.question+=`<br>${t(8)}$\\downarrow$<br>`,this.question+=`${t(8)} \\fbox{ \\texttt{Prendre son carré } }`,this.question+=`<br>${t(8)}$\\downarrow$<br>`,this.question+=`${t(4)}\\texttt{Résultat}`,this.question+="<br>"),this.question+="Quel est le résultat  si le nombre de départ est $2$ ?",this.correction=`On soustrait $5$, on obtient : $2-5=-3$.<br>
      En prenant le carré, on obtient  : $(-3)^2=${s(this.reponse)}$.`;else if(u([!0,!1])){const i=e(6,10),r=e(1,i-1);this.reponse=(r-i)**2,o.isHtml?(this.question="Nombre de départ <br>",this.question+=`${t(15)}$\\downarrow$<br>`,this.question+=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\text{Soustraire } ${i} \\
`,this.question+=`\\\\
 \\text{Prendre son carré } \\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$<br>`,this.question+=`${t(15)}$\\downarrow$<br>
         `,this.question+=`${t(7)}Résultat<br>`):(this.question=`${t(2)}\\texttt{Nombre de départ}`,this.question+=`<br>${t(8)}$\\downarrow$<br>`,this.question+=`${t(8)} \\fbox{ \\texttt{Soustraire } ${i}}`,this.question+=`<br>${t(8)}$\\downarrow$<br>`,this.question+=`${t(8)} \\fbox{ \\texttt{Prendre son carré } }`,this.question+=`<br>${t(8)}$\\downarrow$<br>`,this.question+=`${t(4)}\\texttt{Résultat}`,this.question+="<br>"),this.question+=`Quel est le résultat  si le nombre de départ est $${r}$ ?`,this.correction=`On soustrait $${i}$, on obtient : $${r}-${i}=${r-i}$.<br>
         En prenant le carré, on obtient  : $${n(r-i)}^2=${s(this.reponse)}$.
        `}else{const i=e(1,10),r=e(-10,-1);this.reponse=(r+i)**2,o.isHtml?(this.question="Nombre de départ <br>",this.question+=`${t(15)}$\\downarrow$<br>`,this.question+=`$\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\text{Ajouter } ${i} \\
`,this.question+=`\\\\
 \\text{Prendre son carré } \\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$<br>`,this.question+=`${t(15)}$\\downarrow$<br>
         `,this.question+=`${t(8)}Résultat`,this.question+="<br>"):(this.question=`${t(2)}\\texttt{Nombre de départ}`,this.question+=`<br>${t(8)}$\\downarrow$<br>`,this.question+=`${t(8)} \\fbox{ \\texttt{Ajouter } ${i}}`,this.question+=`<br>${t(8)}$\\downarrow$<br>`,this.question+=`${t(8)} \\fbox{ \\texttt{Prendre son carré } }`,this.question+=`<br>${t(8)}$\\downarrow$<br>`,this.question+=`${t(4)}\\texttt{Résultat}`,this.question+="<br>"),this.question+=`Quel est le résultat  si le nombre de départ est $${r}$ ?`,this.correction=`On ajoute  $${i}$, on obtient : $${r}+${i}=${r+i}$.<br>
       En prenant le carré, on obtient  : $${n(r+i)}^2=${s(this.reponse)}$.
      `}this.canEnonce=this.question,this.canReponseACompleter=""}}export{Et as default,wt as interactifReady,ft as interactifType,xt as titre,yt as uuid};
//# sourceMappingURL=can3-2024-Q14-BmEuWm6H.js.map
