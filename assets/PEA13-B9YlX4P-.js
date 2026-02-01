import{a as h,b as g}from"./baseConversions-D-aCpEPJ.js";import{E as C,P as I,r as o,o as P}from"./index-BvuGzI-o.js";import{o as q}from"./operations-CX7U7ZRD.js";import"./vendors/decimal.js-BceHFVC1.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-K3nUGUh4.js";import"./json/refToUuidCH-DBCD2E_6.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-OtHQ7xZ3.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./fixeBordures-BSnKuTIe.js";import"./segmentsVecteurs-BYbXXoZp.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./vendors/roughjs-CycZv-lV.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./PointAbstrait-Cz1GEocE.js";import"./textes-Dv2jXPNF.js";import"./colors-vbveSA7f.js";import"./mathalea2d-c0OJ3JST.js";const Kt="Multiplications dans d'autres bases",Rt="2/11/2021",Ut="a7016",Wt={"fr-fr":["PEA13"],"fr-ch":[]};class Yt extends C{constructor(){super(),this.besoinFormulaireNumerique=["Choix de la base",9,"3 à 9 (au hasard si laissé vide)"],this.video="pkp9e8XDH3M",this.consigne="Poser et effectuer les calculs suivants :",this.nbQuestions=3,this.pasDeVersionLatex=!0,this.spacingCorr=I.isHtml?2:1}nouvelleVersion(){const t=this.sup===void 0||this.sup<3||this.sup>9?o(3,5):this.sup;[3,4,5].includes(t)&&(this.listeQuestions[0]=`Écrire la table de Pythagore en base ${t}.`,this.listeCorrections[0]=Q(t));const N=[3,4,5].includes(t)?1:0;for(let l=N,_,s,b,u,i,r,d=0;l<this.nbQuestions&&d<50;){const f=t===3?o(0,2):o(2,t-1);r=(t===3?o(1,2):o(2,t-1,f))*10+f,u=h(r,t);const x=o(1,t-1),y=o(2,t-1);i=o(2,t-1)*100+y*10+x,u=h(r,t),b=h(i,t),i=i.toString(),r=r.toString(),_=`$(${i})_{${t}} \\times (${r})_{${t}}$`,parseInt(i)<parseInt(r)&&([i,r]=[r,i]),s=`En base ${t} :<br>`+q({operande1:b,operande2:u,type:"multiplication",base:t})+"<br>";for(let c=r.length-1;c>-1;c--){const a=[];s+=`Calcul de $${r[c]}\\times${i} :$ <br>`;for(let e=0;e<i.length;e++){const n=r[c],m=i[i.length-1-e];let p=g(Number(n)*Number(m),t);a[e-1]?(p=g(parseInt(n)*parseInt(m)+parseInt(a[e-1]),t),s+=`$\\qquad ${n} \\times ${m} + ${a[e-1]} = ${parseInt(n)*parseInt(m)+parseInt(a[e-1])} = (${p})_{${t}}  $`):s+=`$\\qquad ${n} \\times ${m} = ${Number(n)*Number(m)} = (${p})_{${t}}  $`,Number(n)*Number(m)>=t?(s+=`$\\quad$ On écrit ${p[p.length-1]} et on retient ${p.slice(0,-1)}.<br>`,a[e]=p.slice(0,-1).toString()):s+="<br>"}}this.listeQuestions.indexOf(_)===-1&&(this.listeQuestions[l]=_,this.listeCorrections[l]=s,l++),d++}P(this)}}const Q=$=>{switch($){case 3:return`$\\begin{array}{|c|c|c|}
      \\hline
      \\times & (1)_3 & (2)_3 \\\\
      \\hline
      (1)_3 & (1)_3 & (2)_3 \\\\
      \\hline
      (2)_3 & (2)_3 & (11)_3  \\\\
      \\hline
   \\end{array}$`;case 4:return`$\\begin{array}{|c|c|c|c|}
    \\hline
    \\times & (1)_4 & (2)_4 & (3)_4 \\\\
    \\hline
    (1)_4 & (1)_4 & (2)_4 & (3)_4  \\\\
    \\hline
    (2)_4 & (2)_4 & (10)_4 & (12)_4 \\\\
    \\hline
    (3)_4 & (3)_4 & (12)_4 & (21)_4 \\\\
    \\hline
 \\end{array}$`;case 5:return`$\\begin{array}{|c|c|c|c|c|}
    \\hline
    \\times & (1)_5 & (2)_5 & (3)_5 & (4)_5 \\\\
    \\hline
    (1)_5 & (1)_5 & (2)_5 & (3)_5 & (4)_5  \\\\
    \\hline
    (2)_5 & (2)_5 & (4)_5 & (11)_5 & (13)_5 \\\\
    \\hline
    (3)_5 & (3)_5 & (11)_5 & (14)_5 & (22)_5 \\\\
    \\hline
    (4)_5 & (4)_5 & (13)_5 & (22)_5 & (31)_5 \\\\
    \\hline
 \\end{array}$`;default:return""}};export{Rt as dateDePublication,Yt as default,Wt as refs,Kt as titre,Ut as uuid};
//# sourceMappingURL=PEA13-B9YlX4P-.js.map
