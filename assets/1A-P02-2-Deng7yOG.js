var d=Object.defineProperty;var f=(p,c,n)=>c in p?d(p,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):p[c]=n;var b=(p,c,n)=>f(p,typeof c!="symbol"?c+"":c,n);import{B as e,p as a}from"./index-Bl1vqpvV.js";import{E as q}from"./ExerciceQcmA-CCRIa16T.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ExerciceQcm-ByjAGTRK.js";import"./lists-Cb1jXPcV.js";const xe="f20ef",we={"fr-fr":["1A-P02-2"],"fr-ch":[""]},Re=!0,Ve="qcm",Ee="true",Ie="qcmMono",Te="Déterminer une probabilité avec un événement contraire",Ne="07/01/2026";class Qe extends q{constructor(){super();b(this,"versionOriginale",()=>{const n=.16666666666666666,s=3,r=Math.pow(1-n,s),t=1-r;this.appliquerLesValeurs("de1",n,s,t,r)});b(this,"versionAleatoire",()=>{const n=a([{type:"de1",p:.16666666666666666,n:a([3,4])},{type:"de2",p:.16666666666666666,n:a([3,4])},{type:"piece1",p:a([.6,.7,.4]),n:a([3,4])},{type:"piece2",p:a([.6,.7,.4]),n:a([3,4])},{type:"tir1",p:a([.7,.8,.6]),n:a([3,4])},{type:"tir2",p:a([.7,.8,.6]),n:a([3,4])},{type:"defaut1",p:a([.05,.1,.15]),n:a([3,4])},{type:"defaut2",p:a([.05,.1,.15]),n:a([3,4])},{type:"meteo1",p:a([.3,.4,.2]),n:a([3,4])},{type:"meteo2",p:a([.3,.4,.2]),n:a([3,4])}]),s=Math.pow(1-n.p,n.n),r=1-s;this.appliquerLesValeurs(n.type,n.p,n.n,r,s)});this.versionAleatoire(),this.spacing=1.5}appliquerLesValeurs(n,s,r,t,i){let o="",$="",u=0,l=0,m=0;switch(n){case"de1":o=`On lance un dé cubique ${r===3?"trois":"quatre"} fois de suite. Le dé est truqué. <br>
        La probabilité d'obtenir au moins une fois $6$ lors des ${r===3?"trois":"quatre"} lancers est égale à $${e(t,3)}$.<br>
On peut alors affirmer que la probabilité de n'obtenir aucun $6$ lors des ${r===3?"trois":"quatre"} lancers est égale à :`,$=`On note $A$ l'événement « obtenir au moins un 6 » et $B$ l'événement « n'obtenir aucun 6 ».<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(B) = 1 - P(A)$.<br>
$P(B) = 1 - ${e(t,3)} = ${e(i,3)}$`,u=i,l=1-s,m=t;break;case"de2":o=`On lance un dé cubique ${r===3?"trois":"quatre"} fois de suite. Le dé est truqué. <br>
        La probabilité de n'obtenir aucun $6$ lors des ${r===3?"trois":"quatre"} lancers est égale à $${e(i,3)}$.<br>
On peut alors affirmer que la probabilité d'obtenir au moins une fois $6$ lors des ${r===3?"trois":"quatre"} lancers est égale à :`,$=`On note $A$ l'événement « obtenir au moins un 6 » et $B$ l'événement « n'obtenir aucun 6 ».<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(A) = 1 - P(B)$.<br>
$P(A) = 1 - ${e(i,3)} = ${e(t,3)}$`,u=t,l=1-s,m=i;break;case"piece1":o=`On lance une pièce truquée ${r===3?"trois":"quatre"} fois de suite. <br>
        La pièce donne Pile avec une probabilité de $${e(s,2)}$. <br>
        La probabilité d'obtenir au moins un Pile lors des ${r===3?"trois":"quatre"} lancers est égale à $${e(t,3)}$.<br>
On peut alors affirmer que la probabilité de n'obtenir aucun Pile lors des ${r===3?"trois":"quatre"} lancers est égale à :`,$=`On note $A$ l'événement « obtenir au moins un Pile » et $B$ l'événement « n'obtenir aucun Pile ».<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(B) = 1 - P(A)$.<br>
$P(B) = 1 - ${e(t,3)} = ${e(i,3)}$`,u=i,l=1-s,m=t;break;case"piece2":o=`On lance une pièce truquée ${r===3?"trois":"quatre"} fois de suite. <br>
        La pièce donne Pile avec une probabilité de $${e(s,2)}$. <br>
        La probabilité de n'obtenir aucun Pile lors des ${r===3?"trois":"quatre"} lancers est égale à $${e(i,3)}$.<br>
On peut alors affirmer que la probabilité d'obtenir au moins un Pile lors des ${r===3?"trois":"quatre"} lancers est égale à :`,$=`On note $A$ l'événement « obtenir au moins un Pile » et $B$ l'événement « n'obtenir aucun Pile ».<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(A) = 1 - P(B)$.<br>
$P(A) = 1 - ${e(i,3)} = ${e(t,3)}$`,u=t,l=1-s,m=i;break;case"tir1":o=`Un archer réussit le tir sur sa cible avec une probabilité de $${e(s,2)}$. <br>
        Il tire ${r===3?"trois":"quatre"} flèches.
La probabilité qu'il réussisse au moins une fois un tir est égale à $${e(t,3)}$.<br>
On peut alors affirmer que la probabilité qu'il rate ses ${r===3?"trois":"quatre"} tirs est égale à :`,$=`On note $A$ l'événement « réussir au moins une fois un tir » et $B$ l'événement « rater tous les tirs ».<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(B) = 1 - P(A)$.<br>
$P(B) = 1 - ${e(t,3)} = ${e(i,3)}$`,u=i,l=1-s,m=t;break;case"tir2":o=`Un archer réussit sa cible avec une probabilité de $${e(s,2)}$. Il tire ${r===3?"trois":"quatre"} flèches.<br>
La probabilité qu'il rate tous ses tirs est égale à $${e(i,3)}$.<br>
On peut alors affirmer que la probabilité qu'il réussisse au moins une fois un tir est égale à :`,$=`On note $A$ l'événement « réussir au moins une fois un tir » et $B$ l'événement « rater tous les tirs ».<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(A) = 1 - P(B)$.<br>
$P(A) = 1 - ${e(i,3)} = ${e(t,3)}$`,u=t,l=1-s,m=i;break;case"defaut1":o=`Dans une production, $${e(s*100,0)} \\,\\%$ des pièces sont défectueuses. <br>
        On prélève ${r===3?"trois":"quatre"} pièces au hasard.<br>
La probabilité qu'au moins une pièce soit défectueuse est environ $${e(t,3)}$.<br>
On peut alors affirmer que la probabilité qu'aucune pièce ne soit défectueuse est égale à :`,$=`On note $A$ l'événement « au moins une pièce est défectueuse » et $B$ l'événement « aucune pièce n'est défectueuse ».<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(B) = 1 - P(A)$.<br>
$P(B) = 1 - ${e(t,3)} = ${e(i,3)}$`,u=i,l=1-s,m=t;break;case"defaut2":o=`Dans une production, $${e(s*100,0)} \\,\\%$ des pièces sont défectueuses. On prélève ${r===3?"trois":"quatre"} pièces au hasard.<br>
La probabilité qu'aucune pièce ne soit défectueuse est environ $${e(i,3)}$.<br>
On peut alors affirmer que la probabilité qu'au moins une pièce soit défectueuse est égale à :`,$=`On note $A$ l'événement « au moins une pièce est défectueuse » et $B$ l'événement « aucune pièce n'est défectueuse ».<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(A) = 1 - P(B)$.<br>
$P(A) = 1 - ${e(i,3)} = ${e(t,3)}$`,u=t,l=1-s,m=i;break;case"meteo1":o=`La probabilité qu'il pleuve un jour donné est de $${e(s,2)}$. <br>On observe la météo pendant ${r===3?"trois":"quatre"} jours.<br>
La probabilité qu'il pleuve au moins un jour est égale à $${e(t,3)}$.<br>
On peut alors affirmer que la probabilité qu'il ne pleuve aucun des ${r===3?"trois":"quatre"} jours est égale à :`,$=`On note $A$ l'événement « il pleut au moins un jour » et $B$ l'événement « il ne pleut aucun jour ».<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(B) = 1 - P(A)$.<br>
$P(B) = 1 - ${e(t,3)} = ${e(i,3)}$`,u=i,l=1-s,m=t;break;case"meteo2":o=`La probabilité qu'il pleuve un jour donné est de $${e(s,2)}$. <br>
        On observe la météo pendant ${r===3?"trois":"quatre"} jours.
La probabilité qu'il ne pleuve aucun des ${r===3?"trois":"quatre"} jours est égale à $${e(i,3)}$.<br>
On peut alors affirmer que la probabilité qu'il pleuve au moins un jour est égale à :`,$=`On note $A$ l'événement « il pleut au moins un jour » et $B$ l'événement « il ne pleut aucun jour ».<br>
Les événements $A$ et $B$ sont contraires.<br>
Donc : $P(A) = 1 - P(B)$.<br>
$P(A) = 1 - ${e(i,3)} = ${e(t,3)}$`,u=t,l=1-s,m=i;break}this.enonce=o,this.correction=$,this.reponses=[`$${e(u,3)}$`,`$${e(l,2)}$`,`$${e(m,3)}$`,"On ne peut pas savoir"]}}export{Ee as amcReady,Ie as amcType,Ne as dateDePublication,Qe as default,Re as interactifReady,Ve as interactifType,we as refs,Te as titre,xe as uuid};
//# sourceMappingURL=1A-P02-2-Deng7yOG.js.map
