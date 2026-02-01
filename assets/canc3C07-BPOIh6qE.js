import{A as q,K as g,p as n,r as p,x as u}from"./index-Bl1vqpvV.js";import{a as c,p as d}from"./Personne-d0UztHPp.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Qe='Résoudre un problème avec "de plus", "de moins"',Se=!0,je="mathLive",ke=!0,De="AMCNum",Me="25/07/2022",Pe="02561",Ke={"fr-fr":["canc3C07"],"fr-ch":["PR-8"]};class Le extends q{constructor(){super(),this.spacing=1.5,this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=g.clavierNumbers}nouvelleVersion(){const f=[["biscuits"],["billes"],["bonbons"],["ballons"],["vis"],["clous"],["bandes dessinées"]],b=[["judo"],["tennis"],["tennis de table"],["musique"],["théâtre"],["danse"]];let m,$,e,i,t,s,r,l,o,a,h;switch(n([1,2,3])){case 1:m=n(["a","b"]),m==="a"&&(s=n([!0,!1]),i=d(),t=c(),$=p(12,20),e=p(2,8),n([!0,!1])?(r=$+e,l=$-e,this.reponse=s?l:r,n([!0,!1])?this.question=`${i} a $${$}$ ans. Il a $${e}$ ans ${s?"de plus":" de moins "}
                que ${t}. <br>

                Quel est l'âge de ${t} ?`:this.question=`${i} a $${e}$ ans ${s?"de plus":" de moins "}
                que ${t}. <br>
                
                Sachant qu'il a $${$}$ ans, quel est l'âge de ${t} ?`,this.correction=`${i} a $${e}$ ans ${s?"de plus":" de moins "} que ${t} donc ${t}  a $${e}$ années ${s?"de moins":" de plus "} que ${i}.<br>
                Il a donc  (${s?`$${$}-${e}$`:`$${$}+${e}$`}) ans, soit  ${s?`$${u($-e)}$`:`$${u($+e)}$`} ans. `,this.interactif&&(this.optionsChampTexte={texteApres:" ans"})):(r=$+e,l=$-e,this.reponse=s?r:l,n([!0,!1])?this.question=`${i} a $${$}$ ans. ${t} a $${e}$ ans ${s?"de plus":" de moins "}
                que ${i}. <br>

                Quel est l'âge de ${t} ?`:this.question=`${t} a $${e}$ ans ${s?"de plus":" de moins "}
                que ${i} qui a $${$}$ ans.  <br>
                Quel est l'âge de ${t} ?`,this.correction=`${i} a $${e}$ ans ${s?"de plus":" de moins "} que ${t}.
           Il a donc  (${s?`$${$}+${e}$`:`$${$}-${e}$`}) ans, soit  ${s?`$${u($+e)}$`:`$${u($-e)}$`} ans. `,this.interactif&&(this.optionsChampTexte={texteAvant:"<br>",texteApres:" ans"}))),m==="b"&&(s=n([!0,!1]),i=d(),$=p(12,20),e=p(2,8),n([!0,!1])?(r=$+e,l=$-e,this.reponse=s?l:r,n([!0,!1])?this.question=`${i} a $${$}$ ans. Il a $${e}$ ans ${s?"de plus":" de moins "}
                  que sa sœur. <br>

                  Quel est l'âge de sa sœur ?`:this.question=`${i} a $${$}$ ans soit $${e}$ ans ${s?"de plus":" de moins "}
                  que sa sœur. <br>

                  Quel est l'âge de sa sœur ?`,this.correction=`${i} a $${e}$ ans ${s?"de plus":" de moins "} que sa sœur donc sa sœur a $${e}$ années ${s?"de moins":" de plus "} que son frère.<br>
                  Elle a donc  (${s?`$${$}-${e}$`:`$${$}+${e}$`}) ans, soit  ${s?`$${u($-e)}$`:`$${u($+e)}$`} ans. `):(r=$+e,l=$-e,this.reponse=s?r:l,n([!0,!1])?this.question=`${i} a $${$}$ ans. Sa sœur a $${e}$ ans ${s?"de plus":" de moins "}
                            que lui. <br>

                            Quel est l'âge de sa sœur ?`:this.question=`La sœur de ${i} a $${e}$ ans ${s?"de plus":" de moins "}
                            que lui. <br>Sachant que  ${i} a $${$}$ ans, quel est l'âge de sa sœur ?`,this.correction=`${i} a $${$}$ ans et sa sœur  a $${e}$ ans de ${s?"de plus":" de moins "}.<br>
                            Elle a donc  (${s?`$${$}+${e}$`:`$${$}-${e}$`}) ans, soit  ${s?`$${u($+e)}$`:`$${u($-e)}$`} ans. `)),this.interactif&&(this.optionsChampTexte={texteAvant:"<br>",texteApres:" ans"}),this.canEnonce=this.question,this.canReponseACompleter="$\\ldots$ ans";break;case 2:m=n(["a","b"]),m==="a"&&(s=n([!0,!1]),i=c(),t=d(),o=n(f),$=p(35,60),e=p(9,21,[10,20]),r=$+e,l=$-e,this.reponse=s?l:r,n([!0,!1])?this.question=`${i} a $${$}$ ${o}. Elle en  a $${e}$ ${s?"de plus":" de moins "}
                    que ${t}. <br>

                    Combien ${t} a-t-il de ${o} ?`:this.question=`${i} a $${e}$ ${o} ${s?"de plus":" de moins "} que ${t}. <br>
            
            Sachant que ${i} a $${$}$ ${o}, combien ${t} en a-t-il ?`,this.correction=`${i} a $${e}$ ${o} ${s?"de plus":" de moins "} que ${t} donc ${t}  a $${e}$ ${o} ${s?"de moins":" de plus "} que ${i}.<br>
                    Il a donc  (${s?`$${$}-${e}$`:`$${$}+${e}$`}) ${o}, soit  ${s?`$${u($-e)}$`:`$${u($+e)}$`} ${o}. `),m==="b"&&(s=n([!0,!1]),i=d(),t=c(),o=n(f),$=p(12,20),e=p(2,8),n([!0,!1])?(r=$+e,l=$-e,this.reponse=s?l:r,n([!0,!1])?this.question=`${i} a $${$}$ ${o}. Il a $${e}$ ${o} ${s?"de plus":" de moins "}
                que ${t}. <br>

                Combien ${t} a-t-il de ${o} ?`:this.question=`${i} a $${e}$ ${o} ${s?"de plus":" de moins "}
                que ${t}. <br>

                Sachant qu'il a $${$}$ ${o}, combien de ${o} possède ${t} ?`,this.correction=`${i} a $${e}$ ${o} ${s?"de plus":" de moins "} que ${t} donc ${t}  a $${e}$ ${o} ${s?"de moins":" de plus "} que ${i}.<br>
                Il en a donc  (${s?`$${$}-${e}$`:`$${$}+${e}$`}), soit  ${s?`$${u($-e)}$`:`$${u($+e)}$`}. `):(r=$+e,l=$-e,this.reponse=s?r:l,n([!0,!1])?this.question=`${i} a $${$}$ ${o}. ${t} a $${e}$ ${o} ${s?"de plus":" de moins "}
                que lui. <br>

                Combien ${t} a-t-il de ${o} ?`:this.question=`${t} a $${e}$ ${o} ${s?"de plus":" de moins "}
                que ${i} qui en a $${$}$.  <br>

                Combien ${t} a-t-il de ${o} ?`,this.correction=`${i} a $${e}$ ${o} ${s?"de plus":" de moins "} que ${t}.
           Il en a donc  (${s?`$${$}+${e}$`:`$${$}-${e}$`}), soit  ${s?`$${u($+e)}$`:`$${u($-e)}$`}. `)),this.interactif&&(this.optionsChampTexte={texteAvant:"<br>",texteApres:` ${o}`}),this.canEnonce=this.question,this.canReponseACompleter=`$\\ldots$ ${o}`;break;case 3:m=n(["a","b"]),m==="a"&&(s=n([!0,!1]),a=n([!0,!1]),i=c(),t=d(),h=n(b),$=p(35,60),e=p(9,21,[10,20]),r=$+e,l=$-e,this.reponse=s?r:l,this.question=`Dans un club de ${h}, il y a $${$}$ ${a?" garçons ":" filles"}. <br>
              Il y a $${e}$ ${a?" filles ":" garçons"} ${s?"de plus":" de moins "}
                      que de ${a?" garçons ":" filles"}. <br>

                      Combien y a-t-il de ${a?" filles":" garçons "} dans ce club ? `,this.correction=` Il y a $${e}$ ${a?" filles ":" garçons"} ${s?"de plus":" de moins "}
            que de ${a?" garçons ":" filles"}.<br>
                      Il y a donc  (${s?`$${$}+${e}$`:`$${$}-${e}$`}) ${a?" filles":" garçons"}, soit  ${s?`$${u($+e)}$`:`$${u($-e)}$`} ${a?" filles ":" garçons"}. `,this.interactif&&(this.optionsChampTexte={texteAvant:"<br>",texteApres:` ${a?" filles":" garçons"}`}),this.canEnonce=this.question,this.canReponseACompleter=`$\\ldots$ ${a?" filles":" garçons"}`),m==="b"&&(s=n([!0,!1]),a=n([!0,!1]),i=c(),t=d(),h=n(b),$=p(35,60),e=p(9,21,[10,20]),r=$+e,l=$-e,this.reponse=s?l:r,this.question=`Dans un club de ${h}, il y a $${$}$ ${a?" filles ":" garçons"}.<br>
          
          Sachant qu'il y a $${e}$ ${a?" filles ":" garçons"} ${s?"de plus":" de moins "} que de ${a?" garçons ":" filles"}, combien y a-t-il de ${a?"garçons":"filles"} dans ce club ? `,this.correction=` Il y a $${e}$ ${a?" filles ":" garçons"} ${s?"de plus":" de moins "}
                      que de ${a?" garçons ":" filles"}, il y a donc  $${e}$ ${a?" garçons ":" filles"} ${s?"de moins":" de plus "}
                      que de ${a?" filles ":" garçons"}.<br>
                     Il y a (${s?`$${$}-${e}$`:`$${$}+${e}$`}) ${a?" garçons":" filles"}, soit  ${s?`$${u($-e)}$`:`$${u($+e)}$`} ${a?" garçons":" filles"} dans ce club.
     `,this.interactif&&(this.optionsChampTexte={texteAvant:"<br>",texteApres:` ${a?" garçons":" filles"}`}),this.canEnonce=this.question,this.canReponseACompleter=`$\\ldots$ ${a?" garçons":" filles"}`);break}}}export{ke as amcReady,De as amcType,Me as dateDePublication,Le as default,Se as interactifReady,je as interactifType,Ke as refs,Qe as titre,Pe as uuid};
//# sourceMappingURL=canc3C07-BPOIh6qE.js.map
