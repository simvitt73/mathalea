import{A as p,p as m,r as o,B as $,s as t,a2 as c}from"./index-Dkwu26bg.js";import{a as u}from"./deprecatedFractions-C2OiATGl.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./colors-vbveSA7f.js";const _$="Calculer une moyenne",E$=!0,M$="mathLive",O$="c9d15",g$={"fr-fr":["can3S05"],"fr-ch":[]};class k$ extends p{constructor(){super(),this.versionQcmDisponible=!0,this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let e,i,s,n,r,l,a;switch(this.versionQcm?m([1,2]):m([1,2,3,3])){case 1:e=o(2,6),i=o(8,15),s=o(7,11),r=m([36,40,44,48,52]),n=r-e-i-s,this.question=`$${e}$ ${t(2)} ; ${t(2)} $${i}$ ${t(2)} ; ${t(2)} $${s}$${t(2)} ; ${t(2)} $${n}$<br>
   
        ${this.versionQcm?"La moyenne de cette série est :":" Quelle est la moyenne de cette série ?"}`,this.correction=`La somme des $4$ valeurs est : $${e}+${i}+${s}+${n} =${r}$.<br>
         La moyenne est donc $\\dfrac{${r}}{4}=${u(r,4)}$.`,this.reponse=r/4,this.distracteurs=[`$${$(r/4-1)}$`,`$${$((r+1)/4)}$`,`$${$(r/4+1)}$`,`$${$(r/4+2)}$`,`$${$(r/4-2)}$`,`$${$(r/4-.5)}$`,`$${$(r/4+.5)}$`];break;case 2:e=o(1,2)*5,i=o(9,10),s=o(5,7),n=o(1,5),r=m([35,40,45,50]),l=r-e-i-s-n,this.question=`$${i}$${t(2)} ; ${t(2)} $${e}$ ${t(2)} ; ${t(2)}$${s}$${t(2)} ; ${t(2)}$${n}$ ${t(2)} ; ${t(2)}$${l}$<br>
       
        ${this.versionQcm?"La moyenne de cette série est :":" Quelle est la moyenne de cette série ?"}`,this.distracteurs=[`$${$(r/5-1)}$`,`$${$((r+1)/5)}$`,`$${$(r/5+1)}$`,`$${$(r/5+2)}$`,`$${$(r/5-2)}$`,`$${$(r/5-.5)}$`,`$${$(r/5+.5)}$`],this.correction=`La somme des $5$ valeurs est : $${i}+${e}+${s}+${n}+${l}= ${r}$.<br>
         La moyenne est donc $\\dfrac{${$(r)}}{5}=${u(r,5)}$.`,this.reponse=r/5;break;case 3:a=m(["a","b","c","d"]),a==="a"&&(e=o(1,10)+o(31,89,[40,50,60,70,80])/100,r=o(2,9)/100,i=e-r,s=e+r,this.question=`$${$(e)}$ ${t(2)} ; ${t(2)}  $${$(i)}$  ${t(2)} ; ${t(2)}  $${$(s)}$<br>
         
          Quelle est la moyenne de cette série ?`,this.correction=`La somme des $3$ valeurs est : $${$(e)}+${$(i)}+${$(s)} =${$(3*e)}$.<br>
          La moyenne est donc $\\dfrac{${$(3*e)}}{3}=${$(e)}$.`,this.correction+=c(`<br> Mentalement : <br>
          En écrivant les valeurs dans l'ordre croissant : <br>$\\underbrace{${$(i)}}_{${$(e)}- ${$(r)}}$ ${t(2)} ; ${t(2)}  $${$(e)}$  ${t(2)} ; ${t(2)}  $\\underbrace{${$(s)}}_{${$(e)}+ ${$(r)}}$,
                    on remarque que les écarts entre la valeur intermédiaire ($${$(e)}$) et les deux autres valeurs ($${$(e-r)}$ et $${$(e+r)}$) sont égaux (ils valent $${$(r)}$).<br>
          On en déduit que la moyenne est la valeur intermédiaire : $${$(e)}$.

          
          
          `),this.reponse=e),a==="b"&&(e=o(1,10)+o(31,89,[40,50,60,70,80])/100,r=o(2,9)/100,i=e-r,s=e+r,this.question=`$${$(i)}$ ${t(2)} ; ${t(2)}  $${$(s)}$  ${t(2)} ; ${t(2)}  $${$(e)}$<br>
        
          Quelle est la moyenne de cette série ?`,this.correction=`La somme des $3$ valeurs est : $${$(e)}+${$(i)}+${$(s)} =${$(3*e)}$.<br>
          La moyenne est donc $\\dfrac{${$(3*e)}}{3}=${$(e)}$.`,this.correction+=c(`<br> Mentalement : <br>
          En écrivant les valeurs dans l'ordre croissant : <br>$\\underbrace{${$(i)}}_{${$(e)}- ${$(r)}}$ ${t(2)} ; ${t(2)}  $${$(e)}$  ${t(2)} ; ${t(2)}  $\\underbrace{${$(s)}}_{${$(e)}+ ${$(r)}}$,
                    on remarque que les écarts entre la valeur intermédiaire ($${$(e)}$) et les deux autres valeurs ($${$(e-r)}$ et $${$(e+r)}$) sont égaux (ils valent $${$(r)}$).<br>
          On en déduit que la moyenne est la valeur intermédiaire : $${$(e)}$.

          
          
          `),this.reponse=e),a==="c"&&(e=o(100,200),r=o(2,9),i=e-r,s=e+r,this.question=`$${$(s)}$${t(2)} ; ${t(2)} $${$(e)}$ ${t(2)} ; ${t(2)}$${$(i)}$<br>
          
          Quelle est la moyenne de cette série ?`,this.correction=`La somme des $3$ valeurs est : $${$(e)}+${$(i)}+${$(s)} =${$(3*e)}$.<br>
                            La moyenne est donc $\\dfrac{${$(3*e)}}{3}=${$(e)}$.`,this.correction+=c(`<br> Mentalement : <br>
          On remarque que les écarts entre la valeur intermédiaire ($${$(e)}$) et les deux autres valeurs ($${$(e-r)}$ et $${$(e+r)}$) sont égaux (ils valent $${$(r)}$) :
          $\\underbrace{${$(s)}}_{${e}+ ${r}}$ ${t(2)} ; ${t(2)}  $${$(e)}$  ${t(2)} ; ${t(2)}  $\\underbrace{${$(i)}}_{${e}- ${r}}$. <br>
                            
                            On en déduit que la moyenne est la valeur intermédiaire : $${$(e)}$.
                  
                            
                            
                            `),this.reponse=e),a==="d"&&(e=o(100,200),r=o(2,9),i=e-r,s=e+r,this.question=`$${$(e)}$${t(2)} ; ${t(2)} $${$(s)}$ ${t(2)} ; ${t(2)}$${$(i)}$<br>
          
          Quelle est la moyenne de cette série ?`,this.correction=`La somme des $3$ valeurs est : $${$(e)}+${$(i)}+${$(s)} =${$(3*e)}$.<br>
                            La moyenne est donc $\\dfrac{${$(3*e)}}{3}=${$(e)}$.`,this.correction+=c(`<br> Mentalement : <br>
          En écrivant les valeurs dans l'ordre croissant : $\\underbrace{${$(i)}}_{${$(e)}- ${$(r)}}$ ${t(2)} ; ${t(2)}  $${$(e)}$  ${t(2)} ; ${t(2)}  $\\underbrace{${$(s)}}_{${$(e)}+ ${$(r)}}$,
                    on remarque que les écarts entre la valeur intermédiaire ($${$(e)}$) et les deux autres valeurs ($${$(e-r)}$ et $${$(e+r)}$) sont égaux (ils valent $${$(r)}$).<br>
          On en déduit que la moyenne est la valeur intermédiaire : $${$(e)}$.
                            
                            
                            `),this.reponse=e);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{k$ as default,E$ as interactifReady,M$ as interactifType,g$ as refs,_$ as titre,O$ as uuid};
//# sourceMappingURL=can3S05-CD7RDHPY.js.map
