import{A as g,K as h,r as s,p as a,y as r,B as $,v as c,x as m,w as b,k as u,a3 as d,m as n,D as f}from"./index-Dkwu26bg.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const De="Réduire une expression littérale",Re=!0,Se="mathLive",Te="23/02/2022",Be="97664",we={"fr-fr":["can4L07"],"fr-ch":[]};class Ke extends g{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=h.clavierDeBaseAvecFractionPuissanceCrochets,this.optionsChampTexte={texteAvant:"<br>"}}nouvelleVersion(){let i,e,t,x,o,p,l;switch(s(1,3)){case 1:x=a([1,2,3]),x===1?(i=s(1,10),e=s(1,10),t=s(1,10),this.question=`Écrire le plus simplement possible : <br>  
          $${r(i)}x+${r(e)}x+${$(t)}$.`,this.correction=`En regroupant les termes en $x$, on obtient : <br>
        $\\begin{aligned}
        ${r(i)}x+${r(e)}x+${$(t)}&=(${i}+${e})x+${t}\\\\
        &=${m(`${$(i+e)}x+${$(t)}`)}
        \\end{aligned}$`):x===2?(i=s(1,5),e=s(1,5),t=s(1,5),this.question=`Écrire le plus simplement possible : <br>
          $${r(e)}x+${$(t)}+${r(i)}x$.`,this.correction=`En regroupant les termes en $x$, on obtient : <br>
        $\\begin{aligned}
        ${r(e)}x+${$(t)}+${r(i)}x&=(${i}+${e})x+${t}\\\\
        &=${m(`${$(i+e)}x+${$(t)}`)}
        \\end{aligned}$`):(i=s(-4,-1),e=s(-4,-1),t=s(1,10),this.question=`Écrire le plus simplement possible : <br>
          $${r(e)}x+${$(t)}${r(i)}x$.`,this.correction=`En regroupant les termes en $x$, on obtient : <br>
          $\\begin{aligned}
          ${r(e)}x+${$(t)}${r(i)}x&=(${i}${e})x+${t}\\\\
          &=${m(`${$(i+e)}x+${$(t)}`)}
          \\end{aligned}$`),l=`${u(i+e,t,"x")}`;break;case 2:x=a([1,2]),x===1?(e=s(1,3),t=s(1,3),o=s(1,5),p=a([-1,1]),i=s(1,4,o),this.question=`Écrire le plus simplement possible : <br>
          $${r(i)}x^2+${r(e)}x+${$(t)}+${r(o)}x^2${d(p)}x$.`,e+p===0?(this.correction=`En regroupant les termes en $x$ et les termes en $x^2$, on obtient : <br>
            $\\begin{aligned}
            ${r(i)}x^2+${r(e)}x+${$(t)}+${r(o)}x^2+x&=(${i} + ${o})x^2+(${e}${n(p)})x+${$(t)}\\\\
            &=${m(`${r(i+o)}x^2+${$(t)}`)}
            \\end{aligned}$`,l=`${$(i+o)}x^2+${$(t)}`):this.correction=`En regroupant les termes en $x$ et les termes en $x^2$, on obtient : <br>
            $\\begin{aligned}
            ${r(i)}x^2+${r(e)}x+${$(t)}+${r(o)}x^2+x&=(${i} + ${o})x^2+(${e}${n(p)})x+${$(t)}\\\\
            &=${m(`${r(i+o)}x^2+${r(e+p)}x+${$(t)}`)}
            \\end{aligned}$`):(e=s(-5,-2),t=s(1,5),o=s(-5,-2),p=a([-1,1]),i=s(-5,5,0),this.question=`Écrire le plus simplement possible : <br>
          $${r(i)}x^2${n(e)}x${n(t)}${n(o)}x^2${d(p)}x$.`,i+o===0?(this.correction=`En regroupant les termes en $x$ et les termes en $x^2$, on obtient : <br>
            $\\begin{aligned}
            ${r(i)}x^2${n(e)}x${n(t)}${n(o)}x^2+x&=
            (${i}${n(o)})x^2+(${e}${n(p)})x${n(t)}\\\\
            &=${m(`${n(e+p)}x+${$(t)}`)}\\end{aligned}$`,l=`${r(e+p)}x+${$(t)}`):this.correction=`En regroupant les termes en $x$ et les termes en $x^2$, on obtient : <br>
            $\\begin{aligned}
            ${r(i)}x^2${n(e)}x${n(t)}${n(o)}x^2+x&=(${i}${n(o)})x^2+(${e}${n(p)})x${n(t)}\\\\
            &=${m(`${r(i+o)}x^2${f(e+p)}x+${$(t)}`)}
            \\end{aligned}$`),l=`${b(0,i+o,e+p,t,"x")}`;break;default:x=a([1,2]),x===1&&(i=s(-9,9,0),e=s(-9,9,[0,-1,1]),e>0?this.question=`Écrire le plus simplement possible : <br> 
            $${r(i)}x\\times${e}x$.`:this.question=`Écrire le plus simplement possible : <br>$${r(i)}x\\times(${e}x)$.`,e>0?this.correction=`On a : <br>
            $\\begin{aligned}
            ${r(i)}x\\times${e}x&=(${$(i)}\\times  ${c(e)})x^2\\\\
            &=${m(`${$(i*e)}x^2`)}
            \\end{aligned}$`:this.correction=`On a : <br>
              $\\begin{aligned}
              ${r(i)}x\\times (${e}x)&=(${$(i)}\\times  ${c(e)})x^2\\\\
              &=${m(`${$(i*e)}x^2`)}\\end{aligned}$`,l=`${b(0,i*e,0,0,"x")}`),x===2&&(i=s(-9,9,0),e=s(-9,9,[0,-1,1]),this.question=`Écrire le plus simplement possible : <br>
          $${r(i)}x\\times${c(e)}$.`,this.correction=`$${r(i)}x\\times${c(e)}=${m(`${$(i*e)}x`)}$`,l=`${u(i*e,0,"x")}`);break}this.reponse=l,this.canEnonce=this.question,this.canReponseACompleter=""}}export{Te as dateDePublication,Ke as default,Re as interactifReady,Se as interactifType,we as refs,De as titre,Be as uuid};
//# sourceMappingURL=can4L07-BefWTTZz.js.map
