import{A as c,p as a,r as m,B as t,a2 as n}from"./index-BvuGzI-o.js";import{t as o}from"./style-KvKZZuow.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-K3nUGUh4.js";import"./json/refToUuidCH-DBCD2E_6.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-OtHQ7xZ3.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const ve="Calculer un prix à partir d'un prix au kg",Me=!0,ke="mathLive",Ae=!0,Le="AMCNum",ye="13/11/2022",Te="7b350",qe={"fr-fr":["can5P09"],"fr-ch":[]};class Ee extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.optionsChampTexte={texteApres:" €"}}nouvelleVersion(){let e,i,$,r,s,p;switch(a([1,2,3])){case 1:e=m(2,6),$=a([" de pommes de terre"," de carottes"," de courgettes","de navets","de tomates","de poireaux","d'aubergines"]),i=m(1,9)*100,r=i/1e3,s=r*e,p=s,this.question=`Le prix d'un kg ${$} est $${o(e)}$ €. <br>

        Quel est le prix de $${i}$ g ? `,this.optionsChampTexte={texteApres:"€"},this.correction=`Comme $${i}$ g $=${t(r,1)}$ kg, le  prix  de $${i}$ g ${$} est donné par : <br>
        $${t(r,1)}\\times ${o(e)}=${t(s,2)}$.<br>
        Le prix de $${i}$ g ${$} est $${o(s)}$ €.`,i!==100?i===500?this.correction+=n(`
  <br> Mentalement : <br>
  Multiplier par $0,5$ revient à diviser par $2$. <br>
  Ainsi, $${t(r,1)}\\times ${o(e)}=${o(e)}\\div 2=${o(p)}$.
  
`):this.correction+=n(`
  <br> Mentalement : <br>
  $${t(r,1)}\\times ${o(e)}=${t(r*10,1)}\\times 0,1\\times ${t(e,1)}=${t(r*10,1)}\\times ${t(e/10,1)}=${o(p)}$.
  
`):this.correction+="",this.reponse=p;break;case 2:e=m(7,15),$=a(["de cerises","de fraises","de framboises"]),i=m(1,9)*100,r=i/1e3,s=r*e,p=s,this.question=`Le prix d'un kg ${$} est $${o(e)}$ €. <br>

        Quel est le prix de $${i}$ g ? `,this.optionsChampTexte={texteApres:"€"},this.correction=`Comme $${i}$ g $=${t(r,1)}$ kg, le  prix  de $${i}$ g ${$} est donné par : <br>
        $${t(r,1)}\\times ${o(e)}=${t(s,2)}$.<br>
        Le prix de $${i}$ g ${$} est $${o(s)}$ €.`,i!==100?i===500?this.correction+=n(`
  <br> Mentalement : <br>
  Multiplier par $0,5$ revient à diviser par $2$. <br>
  Ainsi, $${t(r,1)}\\times ${o(e)}=${o(e)}\\div 2=${o(p)}$.
  
`):this.correction+=n(`
  <br> Mentalement : <br>
  $${t(r,1)}\\times ${o(e)}=${t(r*10,1)}\\times 0,1\\times ${t(e,1)}=${t(r*10,1)}\\times ${t(e/10,1)}=${o(p)}$.
  
`):this.correction+="",this.reponse=p;break;default:e=m(16,25),$=a(["du Costa Rica","du Kenya","de Colombie","d'Ethiopie","du Salvador","du Nicaragua","du Mexique","du Honduras","du Guatemala"]),i=m(1,9)*100,r=i/1e3,s=r*e,p=s,this.question=`Le prix d'un kg de café ${$} est $${o(e)}$ €. <br>
        
          Quel est le prix de $${i}$ g ? `,this.optionsChampTexte={texteApres:"€"},this.correction=`Comme $${i}$ g $=${t(r,1)}$ kg, le  prix  de $${i}$ g de café ${$} est donné par : <br>
          $${t(r,1)}\\times ${o(e)}=${t(s,2)}$.<br>
          Le prix de $${i}$ g de café ${$} est $${o(s)}$ €.`,i!==100?i===500?this.correction+=n(`
    <br> Mentalement : <br>
    Multiplier par $0,5$ revient à diviser par $2$. <br>
    Ainsi, $${t(r,1)}\\times ${o(e)}=${o(e)}\\div 2=${o(p)}$.
    
  `):this.correction+=n(`
    <br> Mentalement : <br>
    $${t(r,1)}\\times ${o(e)}=${t(r*10,1)}\\times 0,1\\times ${t(e,1)}=${t(r*10,1)}\\times ${t(e/10,1)}=${o(p)}$.
    
  `):this.correction+="",this.reponse=p;break}this.reponse=this.reponse.toFixed(2),this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ €"}}export{Ae as amcReady,Le as amcType,ye as dateDePublication,Ee as default,Me as interactifReady,ke as interactifType,qe as refs,ve as titre,Te as uuid};
//# sourceMappingURL=can5P09-BEHTk8y_.js.map
