import{A as m,p as a,r,y as t,D as o,m as s,w as n,k as x}from"./index-Bl1vqpvV.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const q$="Déterminer la fonction dérivée d’un polynôme de degré 3",S$=!0,R$="mathLive",L$="21/06/2022",D$="ffbf6",y$={"fr-fr":["can1F11"],"fr-ch":["3mA2-7"]};class g$ extends m{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let $,i,e,f;switch(a([1,2,3,4,5,6])){case 1:$=r(-10,10,[0]),i=r(-10,10,[0]),e=r(-10,10,[0]),f=r(-10,10,[0]),this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)= ${n($,i,e,f)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
          
          $f(x)= ${n($,i,e,f)}$.<br>

       Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$.<br>
    La fonction dérivée est donnée par la somme des dérivées des fonctions $u$, $v$ et $w$ définies par $u(x)=${t($)}x^3$, $v(x)=${t(i)}x^2$ et $w(x)=${x(e,f)}$.<br>
     Comme $u'(x)=${3*$}x^2$, $v'(x)=${2*i}x$ et $w'(x)=${e}$, on obtient  $f'(x)=${n(0,3*$,2*i,e)}$. `,this.reponse=[`${3*$}x^2+${2*i}x+${e}`];break;case 2:$=r(-10,10,[0]),i=r(-10,10,[0]),e=r(-10,10,[0]),f=r(-10,10,[0]),a([!0,!1])?this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
            $f(x)= ${t(i)}x^2${o($)}x^3${o(e)}x${s(f)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)= ${t(i)}x^2${o($)}x^3${o(e)}x${s(f)}$.<br>
       
            Déterminer $f'(x)$.`:this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=${t(e)}x${o(i)}x^2${s(f)}${o($)}x^3 $.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>
            
            $f(x)=${t(e)}x${o(i)}x^2${s(f)}${o($)}x^3 $.<br>
    
            Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$.<br>
    La fonction dérivée est donnée par la somme des dérivées des fonctions $u$, $v$ et $w$ définies par $u(x)=${t($)}x^3$, $v(x)=${t(i)}x^2$ et $w(x)=${x(e,f)}$.<br>
     Comme $u'(x)=${3*$}x^2$, $v'(x)=${2*i}x$ et $w'(x)=${e}$, on obtient  $f'(x)=${n(0,3*$,2*i,e)}$. `,this.reponse=[`${3*$}x^2+${2*i}x+${e}`];break;case 3:$=r(-10,10,[0]),i=r(-10,10,[0]),e=r(-10,10,[0]),a([!0,!1])?this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
            $f(x)= ${n($,i,0,e)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)= ${n($,i,0,e)}$.<br>

        Déterminer $f'(x)$.`:this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
             $f(x)=${t($)}x^3${s(e)}${o(i)}x^2$.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)=${t($)}x^3${s(e)}${o(i)}x^2 $.<br>

      Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$ avec $c=0$.<br>
        La fonction dérivée est donnée par la somme des dérivées des fonctions $u$, $v$ et $w$ définies par $u(x)=${t($)}x^3$, $v(x)=${t(i)}x^2$ et $w(x)=${e}$.<br>
         Comme $u'(x)=${3*$}x^2$, $v'(x)=${2*i}x$ et $w'(x)=0$, on obtient  $f'(x)=${n(0,3*$,2*i,0)}$. `,this.reponse=[`${3*$}x^2+${2*i}x`];break;case 4:$=r(-10,10,[0]),i=r(-10,10,[0]),e=r(-10,10,[0]),a([!0,!1])?this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
            $f(x)= ${n($,0,i,e)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)= ${n($,0,i,e)}$.<br>

       Déterminer $f'(x)$.`:this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
             $f(x)=${t(i)}x${s(e)}${o($)}x^3 $.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)=${t(i)}x${s(e)}${o($)}x^3 $.<br>

     Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$ avec $b=0$.<br>
        La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$  définies par $u(x)=${t($)}x^3$ et $v(x)=${x(i,e)}$.<br>
         Comme $u'(x)=${3*$}x^2$, $v'(x)=${i}$, on obtient  $f'(x)=${3*$}x^2${s(i)}$. `,this.reponse=[`${3*$}x^2+${i}`];break;case 5:$=r(-10,10,[0]),i=r(-10,10,[0]),a([!0,!1])?this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
            $f(x)= ${n($,0,0,i)}$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
            $f(x)= ${n($,0,0,i)}$.<br>
       Déterminer la fonction dérivée de $f$.`:this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
             $f(x)=${i}${o($)}x^3 $.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :<br>

            $f(x)=${i}${o($)}x^3 $.<br>

      Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$ avec $b=0$ et $c=0$.<br>
        La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$  définies par $u(x)=${t($)}x^3$ et $v(x)=${i}$.<br>
         Comme $u'(x)=${3*$}x^2$, $v'(x)=0$, on obtient  $f'(x)=${3*$}x^2$. `,this.reponse=[`${3*$}x^2`];break;case 6:$=r(-10,10,[0]),i=r(-10,10,[0]),a([!0,!1])?(this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
                      $f(x)= ${t(i)}x^2${o($)}x^3$.<br>
        La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)= ${t(i)}x^2${o($)}x^3$.<br>

       Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$ avec $c=0$ et $d=0$.<br>
        La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$  définies par $u(x)=${t($)}x^3$ et $v(x)=${i}x^2$.<br>
         Comme $u'(x)=${3*$}x^2$, $v'(x)=${2*i}x$, on obtient  $f'(x)=${3*$}x^2${2*i}x$. `,this.reponse=[`${3*$}x^2+${2*i}x`]):(this.interactif?this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :<br>
             $f(x)=${t(i)}x${o($)}x^3 $.<br>
      La fonction dérivée de $f$ est définie par : <br>$f'(x)=$`:this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)=${t(i)}x${o($)}x^3 $.<br>

     Déterminer $f'(x)$.`,this.correction=`$f$ est une fonction polynôme du troisième degré de la forme $f(x)=ax^3+bx^2+cx+d$ avec $b=0$ et $d=0$.<br>
        La fonction dérivée est donnée par la somme des dérivées des fonctions $u$ et $v$  définies par $u(x)=${t($)}x^3$ et $v(x)=${i}x$.<br>
         Comme $u'(x)=${3*$}x^2$, $v'(x)=${i}$, on obtient  $f'(x)=${3*$}x^2${s(i)}$. `,this.reponse=[`${3*$}x^2+${i}`]);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{L$ as dateDePublication,g$ as default,S$ as interactifReady,R$ as interactifType,y$ as refs,q$ as titre,D$ as uuid};
//# sourceMappingURL=can1F11-Cx0tCTXQ.js.map
