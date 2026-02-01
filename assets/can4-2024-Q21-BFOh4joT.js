import{A as p,K as m,r as u,p as l,x as r}from"./index-vfG7N0N9.js";import{s as n}from"./scratchblock-ChvGld0N.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-BymNGK-G.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-CKp8Whw5.js";import"./json/refToUuidCH-C3otjGt1.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-CxJkatM_.js";import"./json/referentiel2022FR-DUyIuCDZ.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ObjetMathalea2D-CXcNXRpD.js";const Ae="Comprendre un programme scratch",Ee=!0,Ce="mathLive",ye="fdd2f";class Le extends p{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=m.clavierDeBase,this.canOfficielle=!1}nouvelleVersion(){const c=this.canOfficielle?3:u(2,6),a=this.canOfficielle?50:l([10,20,50,100]);let t=`\\begin{scratch}[print,fill,blocks,scale=0.8]
`;t+=`\\blockinit{quand \\greenflag est cliqué}
`,t+=`\\blocklook{Le lutin est placé au centre de l'écran} 
`,t+=`\\blockrepeat{répéter \\ovalnum{${c}} fois}
`,t+=`{
`,t+=`\\blockmove{avancer de \\ovalnum{${a}} pas}
`,t+=`\\blockmove{attendre \\ovalmove{2} secondes}
`,t+=`}
`,t+="\\end{scratch}<br>";let i=`\\begin{scratch}[print,fill,blocks,scale=0.8]
`;i+=`\\blockinit{quand \\greenflag est cliqué}
`,i+=`\\blockrepeat{répéter \\ovalnum{4} fois}
`,i+=`{
`,i+=`\\blockpen{stylo en position d'écriture} 
`,i+=`\\blockmove{avancer de \\ovalnum{100} pas}
`,i+=`\\blockmove{tourner \\turnright{} de \\ovalnum{...} degrés}
`,i+=`}
`,i+="\\end{scratch}<br>";let o=`\\begin{scratch}[print,fill,blocks,scale=0.8]
`;o+=`\\blockinit{quand \\greenflag est cliqué}
`,o+=`\\blockrepeat{répéter \\ovalnum{3} fois}
`,o+=`{
`,o+=`\\blockpen{stylo en position d'écriture} 
`,o+=`\\blockmove{avancer de \\ovalnum{100} pas}
`,o+=`\\blockmove{tourner \\turnright{} de \\ovalnum{...} degrés}
`,o+=`}
`,o+="\\end{scratch}<br>";let e=`\\begin{scratch}[print,fill,blocks,scale=0.8]
`;if(e+=`\\blockinit{quand \\greenflag est cliqué}
`,e+=`\\blockrepeat{répéter \\ovalnum{...} fois}
`,e+=`{
`,e+=`\\blockpen{stylo en position d'écriture} 
`,e+=`\\blockmove{avancer de \\ovalnum{100} pas}
`,e+=`\\blockmove{tourner \\turnright{} de \\ovalnum{90} degrés}
`,e+=`\\blockmove{avancer de \\ovalnum{50} pas}
`,e+=`\\blockmove{tourner \\turnright{} de \\ovalnum{90} degrés}
`,e+=`}
`,e+="\\end{scratch}<br>",this.canOfficielle)this.reponse=150,this.question=`${n(t)}`,this.question+="À l'issue de l'exécution de ce programme, de combien de pas le lutin a-t-il avancé ?",this.correction=`Le lutin a avancé de $3\\times 50 =${r("150")}$ pas.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ pas",this.interactif&&(this.optionsChampTexte={texteApres:"pas "});else{const s=l(["a","b","c","d"]);s==="a"&&(this.reponse=90,this.question=`${n(i)}`,this.question+="Quel nombre doit-on écrire à la place des pointillés pour tracer un carré ?",this.correction=`Un carré a des angles droits, il faut donc écrire  $${r(90)}$.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$"),s==="b"&&(this.reponse=120,this.question=`${n(o)}`,this.question+="Quel nombre doit-on écrire à la place des pointillés pour tracer un triangle équilatéral ?",this.correction=`Un triangle équilatéral a des anlges de $60°$.<br>
     Le lutin doit tourner de $180-60=120°$ après avoir tracé un côté. <br>
     Ainsi, à la place des pointillés il faut écrire  $${r(120)}$.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$"),s==="c"&&(this.reponse=2,this.question=`${n(e)}`,this.question+="Quel nombre doit-on écrire à la place des pointillés pour tracer un  rectangle ?",this.correction=`
      La boucle contient le tracé d'une longueur et d'une largeur du rectangle. <br>
      Ainsi, à la place des pointillés il faut écrire  $${r(2)}$.`,this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$"),s==="d"&&(this.reponse=c*a,this.question=`${n(t)}`,this.question+="À l'issue de l'exécution de ce programme, de combien de pas le lutin a-t-il avancé ?",this.correction=`Le lutin a avancé de $${c}\\times ${a} =${r(this.reponse)}$ pas.`,this.interactif&&(this.optionsChampTexte={texteApres:"pas "}),this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ pas")}}}export{Le as default,Ee as interactifReady,Ce as interactifType,Ae as titre,ye as uuid};
//# sourceMappingURL=can4-2024-Q21-BFOh4joT.js.map
