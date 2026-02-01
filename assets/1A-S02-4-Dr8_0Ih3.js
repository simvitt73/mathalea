var O=Object.defineProperty;var S=(c,l,r)=>l in c?O(c,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[l]=r;var L=(c,l,r)=>S(c,typeof l!="symbol"?l+"":l,r);import{t as T}from"./tableau-D39nftgD.js";import{r as b,p as V,B as h,x as Q}from"./index-BB3ZcMz7.js";import{n as _}from"./ExerciceQcm-DtmA7F-t.js";import{E as z}from"./ExerciceQcmA-BnGbkBNV.js";import"./vendors/mathlive-2YgxEGya.js";import"./colors-vbveSA7f.js";import"./fixeBordures-BSnKuTIe.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./PointAbstrait-Cz1GEocE.js";import"./polygones-BR_6nVP4.js";import"./vendors/earcut-jJVragJp.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./pattern-C89A9uFw.js";import"./segmentsVecteurs-Bz-aNFOx.js";import"./vendors/roughjs-CycZv-lV.js";import"./textes-3SpigYLc.js";import"./Polyline-_SF4nvVR.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-fVupTN-r.js";import"./json/refToUuidCH-BX1ZhSY0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-eCsKGSUT.js";import"./json/referentiel2022FR-noHHLeEt.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./lists-Cw7-nZza.js";const ut="91cbe",$t={"fr-fr":["1A-S02-4"],"fr-ch":[]},dt=!0,ft="qcm",bt="true",ht="qcmMono",gt="Déterminer la valeur manquante d'une série de valeurs pondérées dont on connaît la moyenne",xt="01/08/2025";class vt extends z{constructor(){super();L(this,"versionAleatoire",()=>{do this.appliquerLesValeurs();while(_(this.reponses)<4)});this.besoinFormulaireCaseACocher=!1,this.options={vertical:!1,ordered:!1},this.versionAleatoire()}appliquerLesValeurs(){let r,a,o,i,s,n,g=!0,d;do{d=b(3,4),a=Array.from({length:d},()=>b(8,15)),o=V([2,3]),i=b(10,16);const e=a.reduce((m,$)=>m+$,0);n=d+o,s=e,r=(i*n-s)/o,Number.isInteger(r)&&(g=r>=0&&r<=20)}while(!Number.isInteger(r)||!g&&Math.random()<.8);function f(e){for(let t=e.length-1;t>0;t--){const m=Math.floor(Math.random()*(t+1));[e[t],e[m]]=[e[m],e[t]]}}function A(e,t){const m=[-3,-2,-1,1,2,3].map(p=>e+p).filter(p=>Number.isInteger(p)&&p>=0&&p<=20&&p!==e);f(m);const $=m.slice(0,t?2:3).map(p=>`$x=${h(p)}$`);return t&&$.push("Impossible, il faudrait une note supérieure à 20."),f($),$}const E=a.length+1,I=["\\text{Devoir}"].concat(Array.from({length:E},(e,t)=>`${t+1}`)),N=["\\text{Note}","\\text{Coefficient}"],P=[...a.map(e=>`${e}`),"x"],M=[...a.map(()=>"1"),`${o}`],D=[...P,...M],w=T(I,N,D),v=a.map(e=>`${e} \\times 1`).join(" + "),q=`${s} + ${o}x`,y=a.map(()=>"1").join(" + ")+` + ${o}`,C=Array.from({length:a.length},(e,t)=>t+1),R=C.reduce((e,t)=>e+t,0)+(a.length+1),j=a.reduce((e,t,m)=>e+t*C[m],0),x=(i*R-j)/(a.length+1);let u=null;if(Number.isInteger(x)&&(x>20?u="Impossible, il faudrait une note supérieure à 20.":u=`$x=${h(x)}$`),this.enonce=`Voici les $${d+1}$ notes sur vingt obtenues par un élève en mathématiques :<br><br>
${w}
<br><br>
On cherche ce que doit valoir $x$ pour que la moyenne de l'élève soit égale $${i}$.`,g){const e=r>=18,t=A(r,e);u&&!t.includes(u)&&(t.pop(),t.push(u),f(t)),this.reponses=[`$x=${h(r)}$`,...t],this.correction=`
Pour déterminer la moyenne de l'élève, on calcule :<br>
$\\bullet$ La somme des produits de chaque note par son coefficient :

$${v} + x \\times ${o} = ${q}$.<br>

$\\bullet$ La somme des coefficients : $${y}= ${n}$.
<br>Remarque : On fera bien attention à ne pas utiliser la ligne des numéros de devoirs du tableau, donnée qui n'intervient pas dans le calcul de la moyenne.
<br>La moyenne est donc égale à $\\dfrac{${s} + ${o}x}{${n}}$. <br> Comme elle doit être égale à $${i}$, on doit résoudre l'équation suivante :
<br>
$
\\begin{aligned}
\\dfrac{${s} + ${o}x}{${n}} &= ${i}\\\\
${s} + ${o}x &= ${i} \\times ${n}\\\\
    ${s} + ${o}x&= ${i*n}\\\\
${o}x &= ${i*n} - ${s}\\\\
 ${o}x &= ${i*n-s}\\\\
x &= \\dfrac{${i*n-s}}{${o}}\\\\
x&= ${Q(r)}.
\\end{aligned}
$
`}else{const e=new Set;for(e.add(20);e.size<3;){const m=b(17,20,0);e.add(m)}const t=Array.from(e).map(m=>`$x=${h(m)}$`);f(t),this.reponses=["Impossible, il faudrait une note supérieure à 20.",...t],this.correction=`
Pour déterminer la moyenne de l'élève, on calcule :<br>
$\\bullet$ La somme des produits de chaque note par son coefficient :

$${v} + x \\times ${o} = ${q}$.

<br>$\\bullet$ La somme des coefficients : $${y}= ${n}$.
<br>Remarque : On fera bien attention à ne pas utiliser la ligne des numéros de devoirs du tableau, donnée qui n'intervient pas dans le calcul de la moyenne.
<br>La moyenne est donc égale à $\\dfrac{${s} + ${o}x}{${n}}$. <br> Comme elle doit être égale à $${i}$, on doit résoudre l'équation suivante :
<br>
$\\dfrac{${s} + ${o}x}{${n}} = ${i}$<br>
$${s} + ${o}x = ${i*n}$<br>
$x = \\dfrac{${i*n-s}}{${o}} = ${r}$<br>
Mais cette valeur dépasse 20. Il est donc <strong>impossible</strong> d'obtenir une telle moyenne avec une note sur 20.
`}}}export{bt as amcReady,ht as amcType,xt as dateDePublication,vt as default,dt as interactifReady,ft as interactifType,$t as refs,gt as titre,ut as uuid};
//# sourceMappingURL=1A-S02-4-Dr8_0Ih3.js.map
