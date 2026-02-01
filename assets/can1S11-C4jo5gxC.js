import{A as c,p as a,r as o,s as e,m}from"./index-BB3ZcMz7.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-fVupTN-r.js";import"./json/refToUuidCH-BX1ZhSY0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-eCsKGSUT.js";import"./json/referentiel2022FR-noHHLeEt.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const gt="Donner le résultat d’un programme Python",yt=!0,Ot="mathLive",Pt="21/02/2022",kt="0f014",wt={"fr-fr":["can1S11"],"fr-ch":["autres-7"]};class Lt extends c{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let t,s,n,i,u,p,$=0;switch(a(["a","b","c"])){case"a":t=o(2,5),i=o(1,8)*a([-1,1]),u=o(1,9)*a([-1,1]),n=t,this.question=`Que renvoie l'instruction $\\texttt{suite(${t})}$ ?<br>
        
        $\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\texttt{def suite(n) :}  \\
 `,this.question+=`\\\\
 ${e(6)} \\texttt{u = ${i}}\\
 `,this.question+=`\\\\
 ${e(6)} \\texttt{for i in range(n) :}\\
 `,this.question+=`\\\\
 ${e(12)} \\texttt{u = u${m(u)}}\\
 `,this.question+=`\\\\
 ${e(6)} \\texttt{return u}\\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$`,this.question+=`
        
        `,this.correction=` L'instruction $\\texttt{for i in range(n)}$ signifie : pour i allant de $0$ à $${t-1}$.<br>
      On calcule les valeurs successives de la variable u :
           `;for(let r=0;r<n;r++)this.correction+=`<br>Pour i=${r},  u = $${i} ${m(u)} = ${i+u}$`,i=i+u;this.reponse=i;break;case"b":t=o(3,4),i=o(1,8)*a([-1,1]),n=t,this.question=`Que renvoie l'instruction $\\texttt{suite(${t})}$ ?<br>
        
        $\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\texttt{def suite(n) :}  \\
 `,this.question+=`\\\\
 ${e(6)} \\texttt{u = ${i}}\\
 `,this.question+=`\\\\
 ${e(6)} \\texttt{for i in range(1,n) :}\\
 `,this.question+=`\\\\
 ${e(12)} \\texttt{u = u+i}\\
 `,this.question+=`\\\\
 ${e(6)} \\texttt{return u}\\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$`,this.question+=`
        
        `,this.correction=` L'instruction $\\texttt{for i in range(1,n)}$ signifie : pour i allant de 1 à $${t-1}$.<br>
        
        On calcule les valeurs successives de la variable u :`;for(let r=1;r<n;r++)this.correction+=`<br>Pour i=${r}, u = $${i} +${r} = ${i+r}$`,i=i+r;this.reponse=i;break;case"c":for(t=o(1,5),s=o(6,80),p=o(2,3),n=t,this.question=`Que renvoie l'instruction $\\texttt{suite(${t})}$ ?<br>
        
        $\\begin{array}{|l|}
`,this.question+=`\\hline
`,this.question+=`\\
 \\texttt{def suite(u) :}  \\
 `,this.question+=`\\\\
 ${e(6)} \\texttt{u=${t}}\\
 `,this.question+=`\\\\
 ${e(6)} \\texttt{n=0}\\
 `,this.question+=`\\\\
 ${e(6)} \\texttt{while u<${s}:}\\
 `,this.question+=`\\\\
 ${e(12)} \\texttt{u = u*${p}}\\
 `,this.question+=`\\\\
 ${e(12)} \\texttt{n = n+1}\\
 `,this.question+=`\\\\
 ${e(6)} \\texttt{return n}\\\\
 `,this.question+=`\\hline
`,this.question+=`\\end{array}
$`,this.question+=`
        
        `,this.correction=` L'instruction $\\texttt{while u<${s}}$ signifie : tant que u<${s}.<br>

        On calcule les valeurs successives des  variables u et n. On s'arrête dès que u dépasse ${s} :<br>
        On a au départ, u=${t} et n=0, puis, <br>`;t<s;)this.correction+=`<br>n=${$+1} et u=${t}$\\times$ ${p} = ${t*p} `,$=$+1,t=p*t;this.correction+=`$> ${s}$. Donc l'algorithme retourne $${$}$.`,this.reponse=$;break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{Pt as dateDePublication,Lt as default,yt as interactifReady,Ot as interactifType,wt as refs,gt as titre,kt as uuid};
//# sourceMappingURL=can1S11-C4jo5gxC.js.map
