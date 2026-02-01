import{A as p,p as m,r as c,q as u,k as r,m as a,x as n,w as d,v as o,a2 as l}from"./index-BB3ZcMz7.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-fVupTN-r.js";import"./json/refToUuidCH-BX1ZhSY0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-eCsKGSUT.js";import"./json/referentiel2022FR-noHHLeEt.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Fe="Déterminer le nombre de solutions d’une équation du second degré",ye=!0,ve="mathLive",Ee="1/11/2021",Pe="c74ea",Ce={"fr-fr":["can1L02"],"fr-ch":[]};class Le extends p{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,i,t,s,$;switch(m([1,2])){case 1:e=c(1,4)*m([-1,1]),i=c(-4,4,0),t=c(-4,4,0),s=i*i-4*e*t,this.question=`Donner le nombre de solutions de l'équation  $${d(0,e,i,t)}=0$.`,s<0&&(this.correction=`Le nombre de solutions est donné par le signe de $\\Delta$ :<br>
    $\\Delta =b^2-4ac=${o(i)}^2 - 4 \\times ${o(e)} \\times ${o(t)}=${s}$.<br>
    Comme $${s}$ est strictement négatif, l'équation n'a pas de solution.`,this.correction+=l(`<br> Mentalement : <br>
          Il n'est pas nécessaire de faire le calcul du discriminant puisque seul
          le signe de celui-ci permet de répondre à la question :<br>
          faites deux calculs séparés mentalement :
          $b^2=${o(i)}^2=${i**2}$ puis
          $4ac=4 \\times ${o(e)} \\times ${o(t)}=${4*e*t}$
          et évaluez le signe de leur différence.  `),this.reponse=0),s>0&&(this.correction=`Le nombre de solutions est donné par le signe de $\\Delta$ :<br>
    $\\Delta =b^2-4ac=${o(i)}^2 - 4 \\times ${o(e)} \\times ${o(t)}=${s}$.<br>
    Comme $${s}$ est strictement positif, l'équation a 2 solutions.`,this.correction+=l(`<br> Mentalement : <br>
          Il n'est pas nécessaire de faire le calcul du discriminant puisque seul
          le signe de celui-ci permet de répondre à la question :<br>
    par exemple, si le produit $4\\times a\\times c$ (c'est le cas lorsque $a$ et $c$ sont de signes contraires) est négatif, l'équation aura deux solutions puisque $\\Delta$ sera strictement positif.
<br>  Dans les autres cas, faites deux calculs séparés mentalement : $b^2=${o(i)}^2=${i**2}$ puis
$4ac=4 \\times ${o(e)} \\times ${o(t)}=${4*e*t}$
et évaluez le signe de leur différence. `),this.reponse=2),s===0&&(this.correction=`Le nombre de solutions est donné par le signe de $\\Delta$ :<br>
            $\\Delta =b^2-4ac=${o(i)}^2 - 4 \\times ${o(e)} \\times ${o(t)}=${s}$.<br>
            Comme $${s}$ est nul, l'équation a une unique solution.`,this.correction+=l(`<br> Mentalement : <br>
               Faites deux calculs séparés mentalement : $b^2=${o(i)}^2=${i**2}$ puis
     $4ac=4 \\times ${o(e)} \\times ${o(t)}=${4*e*t}$.  `),this.reponse=1);break;case 2:e=c(-10,10,0),i=c(-5,5,0),t=c(-5,5),$=u(-t,e),-t/e>0&&(this.question=`Donner le nombre de solutions de l'équation
       $${e===1?"":e}(${r(1,i)})^2${a(t)}=0$.`,this.correction=`On isole le carré : <br>
        $\\begin{aligned}
        ${e===1?"":e}(${r(1,i)})^2${a(t)}&=0\\\\
        ${e===1?"":e}(${r(1,i)})^2${a(t)}${n(a(-t))}&=0${n(a(-t))}\\\\`,this.correction+=e===1?"":`\\dfrac{${e}}{${n(e)}}(${r(1,i)})^2&=\\dfrac{${-t}}{${n(e)}}\\\\`,this.correction+=`
        (${r(1,i)})^2&=${$.texFractionSimplifiee}
                \\end{aligned}$<br>
        Puisque $${$.texFractionSimplifiee}$ est strictement positif, il y a deux nombres dont le carré est égal à $${$.texFractionSimplifiee}$, donc l'équation a deux solutions. `,this.reponse=2),-t/e===0&&(e===-1?(this.question=`Donner le nombre de solutions de l'équation
       $-(${r(1,i)})^2=0$.`,this.correction=`On isole le carré : <br>
             $\\begin{aligned}
             -(${r(1,i)})^2&=0\\\\
             ${e===1?"":e}(${r(1,i)})^2&=0\\\\`,this.correction+=e===1?"":`\\dfrac{${e}}{${n(e)}}(${r(1,i)})^2&=\\dfrac{${-t}}{${n(e)}}\\\\`,this.correction+=`
             (${r(1,i)})^2&=${$.texFractionSimplifiee}
                     \\end{aligned}$<br>
             Il y a un nombre dont le carré est nul, donc l'équation a une solution. `,this.reponse=1):(this.question=`Donner le nombre de solutions de l'équation
          $${e===1?"":e}(${r(1,i)})^2=0$.`,this.correction=`On isole le carré : <br>
                $\\begin{aligned}
                ${e===1?"":e}(${r(1,i)})^2&=0\\\\`,this.correction+=e===1?"":`\\dfrac{${e}}{${n(e)}}(${r(1,i)})^2&=\\dfrac{${-t}}{${n(e)}}\\\\`,this.correction+=`
                (${r(1,i)})^2&=${$.texFractionSimplifiee}
                        \\end{aligned}$<br>
                Il y a un nombre dont le carré est nul, donc l'équation a une solution. `,this.reponse=1)),-t/e<0&&(this.question=`Donner le nombre de solutions de l'équation
       $${e===1?"":e}(${r(1,i)})^2${a(t)}=0$.`,this.correction=`On isole le carré : <br>
                 $\\begin{aligned}
                 ${e===1?"":e}(${r(1,i)})^2${a(t)}&=0\\\\
                 ${e===1?"":e}(${r(1,i)})^2${a(t)}${n(a(-t))}&=0${n(a(-t))}\\\\`,this.correction+=e===1?"":`\\dfrac{${e}}{${n(e)}}(${r(1,i)})^2&=\\dfrac{${-t}}{${n(e)}}\\\\`,this.correction+=`(${r(1,i)})^2&=${$.texFractionSimplifiee}
                         \\end{aligned}$<br>
                         Puisque $${$.texFractionSimplifiee}$ est strictement négatif, il n'existe pas de nombres réels dont le carré est strictement négatif, donc l'équation n'a pas de solution. `,this.reponse=0);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{Ee as dateDePublication,Le as default,ye as interactifReady,ve as interactifType,Ce as refs,Fe as titre,Pe as uuid};
//# sourceMappingURL=can1L02-6F9KH7xm.js.map
