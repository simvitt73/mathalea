import{A as o,p as t,r as $,B as r,R as s,a2 as i}from"./index-Bl1vqpvV.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const ve="Calculer avec une proportion",fe=!0,he="mathLive",ye=!0,qe="AMCNum",Se="eb6bc",Pe={"fr-fr":["can5P04"],"fr-ch":[]};class Ne extends o{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,n;switch(t(["a","b","c","d","e","f"])){case"a":e=$(3,7)*5,n=t(["des lunettes","un frère","un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$\\dfrac{1}{5}$ des élèves d'une classe de $${e}$ élèves a ${n}.<br>
        
              Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $\\dfrac{1}{5}$ de $${e}$ .<br>
        $\\dfrac{1}{5}\\times ${e}=\\dfrac{${e}}{5}=${r(e/5)}$.<br>
        $${r(e/5)}$ élèves ont ${n} .<br>
          Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${r(e/5)}=${r(e-e/5)}$`,this.correction+=i(`<br> Mentalement : <br>
          Pour calculer $\\dfrac{1}{5}$ d'une quantité, on la divise par $5$. <br>
          Ainsi, $\\dfrac{1}{5}\\times ${e}=${e}\\div 5=${e/5}$.`),this.reponse=s(4*e/5);break;case"b":e=$(3,6)*6,n=t(["des lunettes","un frère"," un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$\\dfrac{1}{6}$ des élèves d'une classe de $${e}$ élèves a ${n}.<br>

            Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $\\dfrac{1}{6}$ de $${e}$ .<br>
        $\\dfrac{1}{6}\\times ${e}=\\dfrac{${e}}{6}=${r(e/6)}$.<br>
        $${r(e/6)}$ élèves ont ${n} .<br>
          Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${r(e/6)}=${r(e-e/6)}$`,this.correction+=i(`<br> Mentalement : <br>
          Pour calculer $\\dfrac{1}{6}$ d'une quantité, on la divise par $6$. <br>
          Ainsi, $\\dfrac{1}{6}\\times ${e}=${e}\\div 6=${e/6}$.`),this.reponse=s(5*e/6);break;case"c":e=$(2,5)*7,n=t(["des lunettes","un frère","un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$\\dfrac{1}{7}$ d'une classe de $${e}$ élèves a ${n}.<br>

        Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $\\dfrac{1}{7}$ de $${e}$ .<br>
        $\\dfrac{1}{7}\\times ${e}=\\dfrac{${e}}{7}=${r(e/7)}$.<br>
        $${r(e/7)}$ élèves ont ${n} .<br>
          Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${r(e/7)}=${r(e-e/7)}$`,this.correction+=i(`<br> Mentalement : <br>
          Pour calculer $\\dfrac{1}{7}$ d'une quantité, on la divise par $7$. <br>
          Ainsi, $\\dfrac{1}{7}\\times ${e}=${e}\\div 7=${e/7}$.`),this.reponse=s(6*e/7);break;case"d":e=$(3,9)*4,n=t(["des lunettes","un frère","un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$\\dfrac{1}{4}$ d'une classe de $${e}$ élèves a ${n}.<br>

            Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $\\dfrac{1}{4}$ de $${e}$ .<br>
            $\\dfrac{1}{4}\\times ${e}=\\dfrac{${e}}{4}=${r(e/4)}$.<br>
            $${r(e/4)}$ élèves ont ${n} .<br>
              Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${r(e/4)}=${r(e-e/4)}$`,this.correction+=i(`<br> Mentalement : <br>
              Pour calculer $\\dfrac{1}{4}$ d'une quantité, on la divise par $4$. <br>
              Ainsi, $\\dfrac{1}{4}\\times ${e}=${e}\\div 4=${e/4}$.`),this.reponse=s(3*e/4);break;case"e":e=$(3,7)*5,n=t(["des lunettes","un frère","un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$20 \\%$  des élèves d'une classe de $${e}$ élèves ont ${n}.<br>
              Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $20 \\%$  de $${e}$ .<br>
             Prendre $20 \\%$  d'une quantité revient à en prendre le cinquième, c'est-à-dire à la diviser par $5$.<br>
              $20\\%$  de $${e}$ est égal à $\\dfrac{${e}}{5}=${r(e/5)}$.<br>
                            $${r(e/5)}$ élèves ont ${n} .<br>
                Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${r(e/5)}=${r(e-e/5)}$`,this.reponse=s(8*e/10);break;case"f":e=$(3,9)*4,n=t(["des lunettes","un frère","un chien","un abonnement à une revue","une licence à l’UNSS","un sac à roulette"]),this.question=`$25\\%$  des élèves d'une classe de $${e}$ élèves ont ${n}.<br>

                  Quel est le nombre d'élèves n'en ayant pas ?`,this.correction=`On calcule d'abord $25 \\%$  de $${e}$ .<br>
                  Prendre $25 \\%$  d'une quantité revient à en prendre le quart, c'est-à-dire à la diviser par $4$.<br>
                   $25 \\%$  de $${e}$ est égal à $\\dfrac{${e}}{4}=${r(e/4)}$.<br>
                                 $${r(e/4)}$ élèves ont ${n} .<br>
                     Le nombre d'élèves  n'en ayant pas est donc donné par : $${e}-${r(e/4)}=${r(e-e/4)}$`,this.reponse=s(e-.25*e);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{ye as amcReady,qe as amcType,Ne as default,fe as interactifReady,he as interactifType,Pe as refs,ve as titre,Se as uuid};
//# sourceMappingURL=can5P04-XOVxtcYx.js.map
