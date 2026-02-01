import{D as s}from"./vendors/decimal.js-BceHFVC1.js";import{A as x,p as r,r as $,F as c,B as a,m,k as h}from"./index-vfG7N0N9.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-BymNGK-G.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-CKp8Whw5.js";import"./json/refToUuidCH-C3otjGt1.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-CxJkatM_.js";import"./json/referentiel2022FR-DUyIuCDZ.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Ri="Déterminer la fonction dérivée d’une fonction affine*",Li=!0,Oi="mathLive",Ai="20/06/2022",Ei="84ae6",Fi={"fr-fr":["can1F09"],"fr-ch":[]};class ki extends x{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){const p=[[2,5],[-2,3],[-3,4],[5,7],[-3,7],[3,5],[4,5],[-2,7],[-7,9],[-4,9],[4,7],[2,11],[-3,11],[8,9],[6,7],[-8,3],[-7,3],[2,15],[-2,15],[3,17],[-3,10]],d=[[2,5],[2,3],[3,4],[5,7],[3,7],[3,5],[4,5],[2,7],[7,9],[-4,9],[4,7],[2,11],[3,11],[8,9],[6,7],[10,7],[11,7],[9,8],[7,8],[11,3],[2,15]];let i,t,f,n,o=[],e=[];switch(r([1,2,3,4])){case 1:i=$(2,15),t=r([$(1,10)*r([-1,1]),new s($(-19,19,[0,-10,10])).div(10)]),r([!0,!1])?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)=\\dfrac{x}{${i}}${m(t)}$. <br>

            Déterminer $f'(x)$.   <br>       `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=\\dfrac{1}{${i}}$ et $p=${a(t,1)}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{1}{${i}}$. `,this.reponse=new c(1,i)):(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

         $f(x)=-\\dfrac{x}{${i}}${m(t)}$.<br>
         
          Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=-\\dfrac{1}{${i}}$ et $p=${a(t,1)}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=-\\dfrac{1}{${i}}$. `,this.reponse=new c(-1,i));break;case 2:f=$(2,15)*r([-1,1]),t=r([$(1,10)*r([-1,1]),new s($(-19,19,[0,-10,10])).div(10)]),i=$(2,15),n=new c(f,i),r([!0,!1])?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

           $f(x)=\\dfrac{${h(f,t)}}{${i}}$. <br>

            Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=\\dfrac{${f}}{${i}}$ et $p=\\dfrac{${a(t,1)}}{${i}}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{${f}}{${i}}${n.texSimplificationAvecEtapes()}$. `,this.reponse=n):(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :<br>

           $f(x)=\\dfrac{${a(t,1)}${m(f)}x}{${i}}$.<br>
           
            Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=\\dfrac{${f}}{${i}}$ et $p=\\dfrac{${a(t,1)}}{${i}}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{${f}}{${i}}${n.texSimplificationAvecEtapes()}$. `,this.reponse=n);break;case 3:f=$(2,15)*r([-1,1]),t=r([$(1,10)*r([-1,1]),new s($(-19,19,[0,-10,10])).div(10)]),i=$(2,15),o=r(p),n=new c(o[0],o[1]),r([!0,!1])?(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

         $f(x)=\\dfrac{${o[0]}x}{${o[1]}}${m(t)}$.<br>

          Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=\\dfrac{${o[0]}}{${o[1]}}$  et $p=${a(t,1)}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{${o[0]}}{${o[1]}}$. `,this.reponse=n):(this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

            $f(x)=\\dfrac{${o[0]}x}{${o[1]}}$.<br>

            Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction linéaire de la forme $f(x)=mx$ avec $m=\\dfrac{${o[0]}}{${o[1]}}$.<br>
              La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{${o[0]}}{${o[1]}}$. `,this.reponse=n);break;case 4:f=$(2,15)*r([-1,1]),t=r([$(1,10)*r([-1,1]),new s($(-19,19,[0,-10,10])).div(10)]),i=$(2,15),e=r(d),r([!0,!1])?(n=new c(e[0],e[1]),this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

          $f(x)=${a(t,1)}+\\dfrac{${e[0]}x}{${e[1]}}$. <br>
          
          Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=\\dfrac{${e[0]}}{${e[1]}}$  et $p=${a(t,1)}$.<br>
            La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=\\dfrac{${e[0]}}{${e[1]}}$. `,this.reponse=n):(n=new c(-e[0],e[1]),this.question=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : <br>

           $f(x)=${a(t,1)}-\\dfrac{${e[0]}x}{${e[1]}}$. <br>

            Déterminer $f'(x)$.   <br>  `,this.interactif&&(this.question+="$f'(x)=$"),this.correction=`On reconnaît une fonction affine de la forme $f(x)=mx+p$ avec $m=-\\dfrac{${e[0]}}{${e[1]}}$  et $p=${a(t,1)}$.<br>
              La fonction dérivée est donnée par $f'(x)=m$, soit ici $f'(x)=-\\dfrac{${e[0]}}{${e[1]}}$. `,this.reponse=n);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{Ai as dateDePublication,ki as default,Li as interactifReady,Oi as interactifType,Fi as refs,Ri as titre,Ei as uuid};
//# sourceMappingURL=can1F09-BmuVGiGR.js.map
