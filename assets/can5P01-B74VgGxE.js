import{A as a,p as i,r as n,B as $,x as o,a2 as r}from"./index-vfG7N0N9.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-BymNGK-G.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-CKp8Whw5.js";import"./json/refToUuidCH-C3otjGt1.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-CxJkatM_.js";import"./json/referentiel2022FR-DUyIuCDZ.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const he="Calculer un prix après une évolution en pourcentage",xe=!0,qe="mathLive",ge=!0,Le="AMCNum",fe="7487c",Pe={"fr-fr":["can5P01"],"fr-ch":[]};class Qe extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.versionQcmDisponible=!0,this.spacing=1.5,this.optionsChampTexte={texteApres:" €",texteAvant:"<br>"}}nouvelleVersion(){let e,t,s;switch(i(["a","b","c","d","e"])){case"a":e=n(4,13)*5,s=i(["pull","pantalon","tee-shirt","vêtement","blouson","sweat"]),t=i([10,20]),this.question=`Le prix d'un ${s} est $${e}$ €.<br>
       Il baisse de $${t}\\,\\%$. `,this.versionQcm?this.question+="Son nouveau prix est : ":this.question+="  Quel est son nouveau prix ? ",this.distracteurs=[`$${$(e+t*e/100,2)} $ €`,`$${$(e-t*e/1e3,2)} $ €`,`$${$(e-t/100,2)} $ €`],this.correction=`Le nouveau prix est de $${o($(e-t*e/100,2))} $ €.`,t===10?this.correction+=r(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de la réduction. <br>
    Prendre $10\\,\\,\\%$  d'une quantité revient à la diviser par $10$. <br>
    Ainsi, $${t}\\,\\,\\%$  de $${e}$ est égal à $${e}\\div 10=${$(e/10,2)}$.<br>
                 La réduction est donc de : $${$(t*e/100,2)}$ €.<br>
         Le nouveau prix est :   $${e}-${$(t*e/100,2)}= ${$(e-t*e/100,2)}$  €.
    
  `):this.correction+=r(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de la réduction. <br>
    Pour calculer $20\\,\\%$  d'une quantité, on commence par calculer $10\\,\\%$  en divisant
    par $10$ :<br> $10\\,\\%$ de $${e}$ est égal à $${e}\\div 10=${e/10}$.<br>
    Puisque $20\\,\\%$  est deux fois plus grand que $10\\,\\%$ ,  $20\\,\\%$  de $${e}$ est égal à $2\\times ${e/10}=${2*e/10}$.<br>
                    La réduction est donc de : $${$(t*e/100)}$ €.<br>
         Le nouveau prix est :   $${e}-${$(t*e/100)}= ${$(e-t*e/100)}$  €.`),this.reponse=this.versionQcm?`$${$(e-t*e/100)}$ €`:e-t*e/100;break;case"b":e=n(2,6)*10,s=i(["pull","pantalon","tee-shirt","vêtement","blouson","sweat"]),t=i([5,15]),this.question=`Le prix d'un ${s} est $${e}$ €.<br>
        Il baisse de $${t}\\,\\%$. `,this.versionQcm?this.question+="Son nouveau prix est : ":this.question+="  Quel est son nouveau prix ? ",this.distracteurs=[`$${$(e+t*e/100,2)} $ €`,`$${$(e-t*e/1e3,2)} $ €`,`$${$(e-t/100,2)} $ €`],this.correction=`
         Le nouveau prix est :  $ ${o($(e-t*e/100,2))} $ €.`,t===5?this.correction+=r(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de la réduction. <br>
    Pour calculer $5\\,\\%$  d'une quantité, on commence par calculer $10\\,\\%$  en divisant
    par $10$ :<br> $10\\,\\%$  de $${e}$ est égal à $${e}\\div 10=${$(e/10,2)}$.<br>
    Puisque $5\\,\\%$  est deux fois plus petit  que $10\\,\\%$ ,  $5\\,\\%$  de $${e}$ est égal à $ ${$(e/10,2)}\\div 2=${$(e/20,2)}$.<br>
                 La réduction est donc de : $${$(t*e/100,2)}$ €.<br>
         Le nouveau prix est :   $${e}-${$(t*e/100,2)}= ${$(e-t*e/100,2)}$  €.
    
  `):this.correction+=r(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de la réduction. <br>
    Pour calculer $15\\,\\%$  d'une quantité, on commence par calculer $10\\,\\%$  en divisant
    par $10$ :<br> $10\\,\\%$ de $${e}$ est égal à $${e}\\div 10=${e/10}$.<br>
    Puis on calcule $5\\,\\%$  de $${e}$ qui est égal à la moitié de $10\\,\\%$  de $${e}$, soit
    $${e/10}\\div 2=${e/20}$.<br>
    Puisque $15\\,\\%$  est égal à $10\\,\\%$  $+5\\,\\%$ ,  $15\\,\\%$  de $${e}$ est égal à $${e/10}+${e/20}=${3*e/20}$.<br>
                    La réduction est donc de : $${$(3*e/20)}$ €.<br>
         Le nouveau prix est :   $${e}-${$(t*e/100)}= ${$(e-t*e/100)}$  €.
    
`),this.reponse=this.versionQcm?`$${$(e-t*e/100,2)}$ €`:e-t*e/100;break;case"c":e=n(4,13)*5,s=i(["pull","pantalon","tee-shirt","vêtement","blouson"]),t=i([10,20]),this.question=`Le prix d'un ${s} est $${e}$ €.<br>
        Il augmente de $${t}\\,\\%$. `,this.versionQcm?this.question+="Son nouveau prix est : ":this.question+="  Quel est son nouveau prix ? ",this.distracteurs=[`$${$(e-t*e/100,2)} $ €`,`$${$(e+t*e/1e3,2)} $ €`,`$${$(e+t/100,2)} $ €`],this.correction=`
         Le nouveau prix est :  $ ${o($(e+t*e/100,2))} $ €.`,this.reponse=this.versionQcm?`$${$(e+t*e/100,2)}$ €`:e+t*e/100,t===10?this.correction+=r(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de l'augmentation. <br>
    Prendre $10\\,\\%$  d'une quantité revient à la diviser par $10$. <br>
    Ainsi, $${t}\\,\\%$ de $${e}$ est égal à $${e}\\div 10=${$(e/10,2)}$.<br>
                 L'augmentation est donc de : $${$(t*e/100,2)}$ €.<br>
         Le nouveau prix est :   $${e}+${$(t*e/100,2)}= ${o($(e+t*e/100,2))}$  €.
    
  `):this.correction+=r(`
    <br> Mentalement : <br>
    On calcule d'abord le montant de l'augmentation. <br>
    Pour calculer $20\\,\\%$ d'une quantité, on commence par calculer $10\\,\\%$  en divisant
    par $10$ :<br> $10\\,\\%$  de $${e}$ est égal à $${e}\\div 10=${$(e/10)}$.<br>
    Puisque $20\\,\\%$  est deux fois plus grand que $10\\,\\%$ ,  $20\\,\\%$  de $${e}$ est égal à $2\\times ${e/10}=${2*e/10}$.<br>
                    L'augmentation est donc de : $${$(t*e/100)}$ €.<br>
         Le nouveau prix est :   $${e}+${$(t*e/100)}= ${o($(e+t*e/100))}$  €.
    
`);break;case"d":e=n(10,20)*1e3,t=n(1,5),this.question=`Le prix d'une voiture est $${$(e)}$ €.<br>
        Il augmente de $${t}\\,\\%$. `,this.versionQcm?this.question+="Son nouveau prix est : ":this.question+="Quel est son nouveau prix ? ",this.correction=`
         Le nouveau prix est : $ ${o($(e+t*e/100,2))} $ €.`,this.reponse=this.versionQcm?`$${$(e+t*e/100,2)}$ €`:e+t*e/100,this.distracteurs=[`$${$(e-t*e/100,2)} $ €`,`$${$(e+t*e/1e3,2)} $ €`,`$${$(e+t/100,2)} $ €`],t===1&&(this.correction+=r(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de l'augmentation. <br>
        Prendre $1\\,\\%$  d'une quantité revient à la diviser par $100$. <br>
        Ainsi, $${$(t,2)}\\,\\%$  de $${$(e,2)}$ est égal à $${$(e,2)}\\div 100=${$(e/100,2)}$.<br>
                     L'augmentation est donc de : $${$(t*e/100,2)}$ €.<br>
             Le nouveau prix est :   $${$(e,2)}+${$(t*e/100,2)}= ${$(e+t*e/100,2)}$  €.
        
      `)),t===5&&(this.correction+=r(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de l'augmentation. <br>
        Pour calculer $5\\,\\%$  d'une quantité, on commence par calculer $10\\,\\%$  en divisant
        par $10$ :<br> $10\\,\\%$  de $${$(e)}$ est égal à $${$(e)}\\div 10=${$(e/10)}$.<br>
        Puisque $5\\,\\%$  est deux fois plus petit  que $10\\,\\%$ ,  $5\\,\\%$  de $${$(e)}$ est égal à $ ${$(e/10)}\\div 2=${$(e/20)}$.<br>
                     L'augmentation est donc de : $${$(t*e/100)}$ €.<br>
             Le nouveau prix est :   $${$(e)}+${$(t*e/100)}= ${$(e+t*e/100)}$  €.
        
      `)),(t===2||t===3||t===4)&&(this.correction+=r(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de l'augmenattion. <br>
        Pour calculer $${$(t)}\\,\\%$  d'une quantité, on commence par calculer $1\\,\\%$  en divisant
        par $100$ :<br> $1\\,\\%$  de $${$(e)}$ est égal à $${$(e)}\\div 100=${$(e/100)}$.<br>
        Puisque $${$(t)}\\,\\%$  est $${t}$ fois plus grand que $1\\,\\%$ ,  $${$(t)}\\,\\%$  de $${$(e)}$ est égal à $${$(t)}\\times ${$(e/100)}=${$(t*e/100)}$.<br>
                        L'augmentation est donc de : $${$(t*e/100)}$ €.<br>
             Le nouveau prix est :   $${$(e)}+${$(t*e/100)}= ${$(e+t*e/100)}$  €.
        
    `));break;case"e":e=n(10,20)*1e3,t=n(1,5),this.question=`Le prix d'une voiture est $${$(e)}$ €.<br>
        Il baisse de $${t}\\,\\%$. `,this.versionQcm?this.question+="Son nouveau prix est : ":this.question+="  Quel est son nouveau prix ? ",this.optionsChampTexte={texteApres:"€"},this.correction=`
         Le nouveau prix est :   $ ${o($(e-t*e/100,2))} €.$`,this.distracteurs=[`$${$(e+t*e/100,2)} $ €`,`$${$(e-t*e/1e3,2)} $ €`,`$${$(e-t/100,2)} $ €`],this.reponse=this.versionQcm?`$${$(e-t*e/100,2)}$ €`:e-t*e/100,t===1&&(this.correction+=r(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de la réduction. <br>
        Prendre $1\\,\\%$  d'une quantité revient à la diviser par $100$. <br>
        Ainsi, $${t}\\,\\%$  de $${$(e,2)}$ est égal à $${$(e,2)}\\div 100=${$(e/100,2)}$.<br>
        La réduction est donc de : $${$(t*e/100,2)}$ €.<br>
             Le nouveau prix est :   $${$(e,2)}-${$(t*e/100,2)}= ${$(e-t*e/100,2)}$  €.
        
      `)),t===5&&(this.correction+=r(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de la réduction. <br>
        Pour calculer $5\\,\\%$  d'une quantité, on commence par calculer $10\\,\\%$  en divisant
        par $10$ :<br> $10\\,\\%$  de $${$(e,2)}$ est égal à $${$(e,2)}\\div 10=${$(e/10,2)}$.<br>
        Puisque $5\\,\\%$  est deux fois plus petit  que $10\\,\\%$ ,  $5\\,\\%$  de $${$(e)}$ est égal à $ ${$(e/10,2)}\\div 2=${$(e/20,2)}$.<br>
        La réduction est donc de : $${$(t*e/100,2)}$ €.<br>
             Le nouveau prix est :   $${$(e,2)}-${$(t*e/100,2)}= ${$(e-t*e/100,2)}$  €.
        
      `)),(t===2||t===3||t===4)&&(this.correction+=r(`
        <br> Mentalement : <br>
        On calcule d'abord le montant de la réduction. <br>
        Pour calculer $${t}\\,\\%$  d'une quantité, on commence par calculer $1\\,\\%$  en divisant
        par $100$ :<br> $1\\,\\%$  de $${$(e)}$ est égal à $${$(e)}\\div 100=${$(e/100)}$.<br>
        Puisque $${t}\\,\\%$  est $${t}$ fois plus grand que $1\\,\\%$,  $${t}\\,\\%$  de $${$(e)}$ est égal à $${t}\\times ${e/100}=${t*e/100}$.<br>
        La réduction est donc de : $${$(t*e/100)}$ €.<br>
             Le nouveau prix est :   $${$(e)}-${$(t*e/100)}= ${$(e-t*e/100)}$  €.
        
    `));break}this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €"}}export{ge as amcReady,Le as amcType,Qe as default,xe as interactifReady,qe as interactifType,Pe as refs,he as titre,fe as uuid};
//# sourceMappingURL=can5P01-B74VgGxE.js.map
