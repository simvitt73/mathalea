import{E as a,Y as m,a as u,K as l,n as c,o as b,r as n,x as p,B as x}from"./index-Bl1vqpvV.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Qe="Résoudre des problèmes en utilisant une équation",Te=!0,Le="mathLive",Ee="12/01/2026",Ie="67519",ke={"fr-fr":["3L13-6"],"fr-ch":[""]};class Pe extends a{constructor(){super(),this.nbQuestions=2,this.sup="1-2",this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets :","1 : Motos + voitures","2 : Prix cinéma adultes/enfants","3 : Fleurs (jonquilles, roses, tulipes)","4 : Mélange"].join(`
`)]}nouvelleVersion(){const e=m({saisie:this.sup,min:1,max:3,melange:4,defaut:4,nbQuestions:this.nbQuestions});for(let o=0,r=0,s,$;o<this.nbQuestions&&r<50;r++){let i;switch(e[o]){case 1:{i=d();break}case 2:{i=f();break}case 3:{i=h();break}default:continue}i&&(s=`${i.enonce} 
        ${u(this,o,l.clavierDeBase,{texteApres:" "+i.texteApres})}`,c(this,o,{reponse:{value:i.reponse.toString()}}),$=`${i.solution}`,this.questionJamaisPosee(o,i.donnees.a,i.donnees.b)&&(this.listeQuestions[o]=s||"",this.listeCorrections[o]=$||"",o++))}b(this)}}function d(){const t=n(20,49),e=n(5,t),o=t-e,r=2*e+4*o,s=`
Sur un parking, il y a des voitures et des motos.
J'ai compté $${t}$ véhicules et $${r}$ roues.<br>
Combien y a-t-il de motos ?`.trim(),$=`
Soit x le nombre de motos.<br>
et $${t} - x$ le nombre de voitures.<br>

Chaque moto a 2 roues et chaque voiture a 4 roues.<br>

On écrit l'équation :<br>
$2x + 4(${t} - x) = ${r}$<br>

$2x + ${4*t} - 4x = ${r}$<br>
$${4*t} - 2x = ${r}$<br>
$-2x = ${r-4*t}$<br>
$x = ${e}$<br>

Il y a $${p(e)}$ motos et $${o}$ voitures.
`.trim();return{enonce:s,solution:$,reponse:e,donnees:{a:e,b:o},texteApres:"motos"}}function f(){const t=n(50,89),e=n(30,59),o=n(4,9),r=o+n(2,7),s=t*r+e*o,$=`
Au cinéma pour la sortie d'un film, il y a eu $${t}$ adultes et $${e}$ enfants.<br>
La place pour adulte coûte $${r-o}$ € de plus que celle pour enfant.<br>
Au total, le cinéma a récolté $${x(s)}$ €.<br>
Quel est le prix du tarif enfant ? 
`.trim(),i=`
Soit $x$ le prix du tarif enfant.<br>
Le prix du tarif adulte est donc x + $${r-o}$.<br>

On calcule la recette totale :<br>
$${e}x + ${t}(x + ${r-o}) = ${s}$<br>
$${e}x + ${t}x + ${t*(r-o)} = ${s}$<br>
$${t+e}x = ${s-t*(r-o)}$<br>
$x = ${o}$<br>

Le prix du tarif enfant est $${p(o)}$ €.<br>
`.trim();return{enonce:$,solution:i,reponse:o,donnees:{a:t,b:e},texteApres:"€"}}function h(){const t=n(8,17),e=t+n(5,6),o=e*n(3,5),r=t+e+o,s=`
Un grossiste livre $${r}$ plantes à un fleuriste.<br>
Cette livraison se compose de roses, de tulipes et de jonquilles.<br>
Il y a $${e-t}$ roses de plus que de jonquilles et $${o/e}$ fois plus de tulipes que de roses.<br>
Combien y a-t-il de jonquilles ? 
`.trim(),$=`
Soit $x$ le nombre de jonquilles.<br>
Il y a donc $x + ${e-t}$ roses.<br>
Il y a $${o/e}(x + ${e-t})$ tulipes.<br>

Le total est :
$x + (x + ${e-t}) + ${o/e}(x + ${e-t}) = ${r}$<br>
$x + x + ${e-t} + ${o/e}x + ${o/e*(e-t)} = ${r}$<br>
$${2+o/e}x + ${e-t+o/e*(e-t)} = ${r}$<br>
$${2+o/e}x  = ${r} -  ${e-t+o/e*(e-t)}$<br>
$${2+o/e}x  = ${r-(e-t+o/e*(e-t))}$<br>
$x  = \\dfrac{${r-(e-t+o/e*(e-t))}}{${2+o/e}}$<br>
$x = ${t}$<br>

Il y a $${p(t)}$ jonquilles.<br>
`.trim();return{enonce:s,solution:$,reponse:t,donnees:{a:t,b:e},texteApres:"jonquilles"}}export{Ee as dateDeModifImportante,Pe as default,d as genererProblemeParking,Te as interactifReady,Le as interactifType,ke as refs,Qe as titre,Ie as uuid};
//# sourceMappingURL=3L13-6-D9eOIkK_.js.map
