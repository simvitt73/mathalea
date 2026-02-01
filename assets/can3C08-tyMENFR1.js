import{A as a,R as m,r as s,p as u,B as e,v as p,a2 as l}from"./index-vfG7N0N9.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-BymNGK-G.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-CKp8Whw5.js";import"./json/refToUuidCH-C3otjGt1.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-CxJkatM_.js";import"./json/referentiel2022FR-DUyIuCDZ.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Pr="Calculer avec un programme de calcul",xr=!0,gr="mathLive",Ar="9094b",Cr={"fr-fr":["can3C08"],"fr-ch":[]};class Qr extends a{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const i=m(s(2,9)*5),$=m(s(2,9)*4),o=m(s(2,9)*3),n=m(s(2,9)*6),r=s(2,9,[i/5,$/4,o/3,n/6]),t=u(["quart","tiers","cinquième","sixième"]);t==="cinquième"&&(this.question=`Prendre le ${t} de $${i}$, puis soustraire $${r}$ et élever le résultat au carré. <br>
      
     Quel nombre obtient-on ?`,this.correction=`$\\bullet$ On prend le ${t} de $${i}$ : $\\dfrac{1}{5}\\times ${i}=${e(i/5)}$.
    <br>
    $\\bullet$ On soustrait $${r}$, on obtient : $${e(i/5)}-${e(r)}=${e(i/5-r)}$.
    <br>
    $\\bullet$ On élève au carré :  $${p(i/5-r)}^2= ${e((i/5-r)*(i/5-r))}$.
      `,this.correction+=l(`<br> Mentalement : <br>
      Prendre le cinquième d'un nombre revient à le diviser par 5.<br>
       Ainsi, le ${t} de $${i}$ est égal à $${i}\\div 5=${i/5}$.
        `),this.reponse=(i/5-r)*(i/5-r)),t==="quart"&&(this.question=`Prendre le ${t} de $${$}$, puis soustraire $${r}$ et élever le résultat au carré. <br>

      Quel nombre obtient-on ?`,this.correction=`$\\bullet$ On prend le ${t} de $${$}$ : $\\dfrac{1}{4}\\times ${$}=${e($/4)}$.
      <br>
      $\\bullet$ On soustrait $${r}$, on obtient : $${e($/4)}-${e(r)}=${e($/4-r)}$.
      <br>
      $\\bullet$ On élève au carré : $${p($/4-r)}^2= ${e(($/4-r)*($/4-r))}$. `,this.correction+=l(`<br> Mentalement : <br>
    Prendre le quart d'un nombre revient à le diviser par 4.<br>
     Ainsi, le ${t} de $${$}$ est égal à $${$}\\div 4=${$/4}$.
      `),this.reponse=($/4-r)*($/4-r)),t==="tiers"&&(this.question=`Prendre le ${t} de $${o}$, puis soustraire $${r}$ et élever le résultat au carré. <br>

     Quel nombre obtient-on ?`,this.correction=`$\\bullet$ On prend le ${t} de $${o}$ : $\\dfrac{1}{3}\\times ${o}=${e(o/3)}$.
      <br>
      $\\bullet$ On soustrait $${r}$, on obtient : $${e(o/3)}-${e(r)}=${e(o/3-r)}$.
      <br>
      $\\bullet$ On élève au carré : $${p(o/3-r)}^2= ${e((o/3-r)*(o/3-r))}$. `,this.correction+=l(`<br> Mentalement : <br>
      Prendre le tiers d'un nombre revient à le diviser par 3.<br>
       Ainsi, le ${t} de $${o}$ est égal à $${o}\\div 3=${o/3}$.
        `),this.reponse=(o/3-r)*(o/3-r)),t==="sixième"&&(this.question=`Prendre le ${t} de $${n}$, puis soustraire $${r}$ et élever le résultat au carré. <br>
      Quel nombre obtient-on ?`,this.correction=`$\\bullet$ On prend le ${t} de $${n}$ : $\\dfrac{1}{6}\\times ${n}=${e(n/6)}$.
      <br>
      $\\bullet$ On soustrait $${r}$, on obtient : $${e(n/6)}-${e(r)}=${e(n/6-r)}$.
      <br>
      $\\bullet$ On élève au carré : $${p(n/6-r)}^2= ${e((n/6-r)*(n/6-r))}$. `,this.correction+=l(`<br> Mentalement : <br>
    Prendre le sixième d'un nombre revient à le diviser par 6.<br>
     Ainsi, le ${t} de $${n}$ est égal à $${n}\\div 6=${n/6}$.
      `),this.reponse=(n/6-r)*(n/6-r)),this.canEnonce=this.question,this.canReponseACompleter=""}}export{Qr as default,xr as interactifReady,gr as interactifType,Cr as refs,Pr as titre,Ar as uuid};
//# sourceMappingURL=can3C08-tyMENFR1.js.map
