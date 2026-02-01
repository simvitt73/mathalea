import{E as u,$ as b,r as t,B as r,o as d}from"./index-Bl1vqpvV.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const De="Déterminer la parité d'une expression",Se="3ec5c",ke={"fr-fr":["2N20-8"],"fr-ch":["11FA4-2"]};class ye extends u{constructor(){super(),this.consigne="Soit $n$ un entier naturel.",this.nbQuestions=4,this.nbCols=2,this.nbColsCorr=2}nouvelleVersion(){const a=[1,2,3];let o;const p=b(a,this.nbQuestions);for(let $=0,s=0;$<this.nbQuestions&&s<50;){let e=0,n=0,m="",i="";switch(o=p[$],o){case 1:e=t(2,6),n=t(2,11,[4,8,9]),m=`Que peut-on dire de la parité de ${e}$n$ ?`,e%2===0&&e!==2&&(i=`${e}$n=2\\times ${r(e/2)}n$<br>
                        Comme $${r(e/2)}n$ est un entier naturel, ${e}$n$ s'écrit comme le double d'un entier naturel, il est donc pair`),e===2&&(i=`${e}$n=2\\times n$<br>
                        Comme $n$ est un entier naturel, ${e}$n$ s'écrit comme le double d'un entier naturel, il est donc pair`),e===3&&(i=`${e}$n=2n+n$<br>
                            Comme $n$ est un entier naturel, $2 n$ est un nombre pair.<br>
                            Si $n$ est pair, $2n+n$ est la somme de deux nombres pairs, il sera donc pair. <br>
                            Si $n$ est impair, $2n+n$ est la somme d'un nombre pair et d'un impair, il sera donc impair. <br>
                            Au final, ${e}$n$ a donc la même parité que $n$.`),e%2!==0&&e!==3&&(i=`${e}$n=2\\times ${r((e-1)/2)}n+n$<br>
                            Comme $${r((e-1)/2)}n$ est un entier naturel, $2\\times ${r((e-1)/2)}n$ est un nombre pair.<br>
                            Si $n$ est pair, $2\\times${r((e-1)/2)}n+n$ est la somme de deux nombres pairs, il sera donc pair. <br>
                            Si $n$ est impair, $2\\times${r((e-1)/2)}n+n$ est la somme d'un nombre pair et d'un impair, il sera donc impair. <br>
                            Au final, ${e}$n$ a donc la même parité que $n$.`);break;case 2:e=t(2,6),n=t(2,11),m=`Que peut-on dire de la parité de $${e}n+${n}$ ?`,e%2===0&&n%2===0&&e!==2&&(i=`$${e}n+${n}=2\\times ${r(e/2)}n+${n}$<br>
                        Comme $${r(e/2)}n$ est un entier naturel, $2\\times ${r(e/2)}n$ est donc un nombre pair<br>
                        ${n} est aussi un nombre pair.
                        $${e}n+${n}$ est donc la somme de deux nombres pairs, il est donc pair`),e%2===0&&n%2!==0&&e!==2&&(i=`$${e}n+${n}=2\\times ${r(e/2)}n+${n}$<br>
                        Comme $${r(e/2)}n$ est un entier naturel, $2\\times ${r(e/2)}n$ est donc un nombre pair<br>
                        ${n} est un nombre impair.
                        $${e}n+${n}$ est donc la somme d'un nombre pair et d'un nombre impair. Il est donc impair`),e===2&&n%2===0&&(i=`Comme $n$ est un entier naturel, $2n$ est un nombre pair<br>
                        ${n} est aussi un nombre pair.
                        $${e}n+${n}$ est donc la somme de deux nombres pairs, il est donc pair`),e===2&&n%2!==0&&(i=`
                        Comme $n$ est un entier naturel, $2n$ est un nombre pair<br>
                        ${n} est un nombre impair.<br>
                        $2n+${n}$ est donc la somme d'un nombre pair et d'un nombre impair. Il est donc impair`),e===3&&n%2===0&&(i=`$${e}n+${n}=2n+n+${n}$<br>
                        Comme $n$ est un entier naturel, $2n$ est un nombre pair.<br>
                        ${n} est un nombre pair. <br>
                        $2n + ${n}$ est donc un nombre pair. <br>
                        $${e}n+${n}=2n+${n}+n$ est donc la somme d'un nombre pair et de $n$, il a donc la même parité que $n$.`),e===3&&n%2!==0&&(i=`$${e}n+${n}=2n+n+${n}$<br>
                        Comme $n$ est un entier naturel, $2n$ est un nombre pair.<br>
                        ${n} est un nombre impair. <br>
                        $2n + ${n}$ est donc un nombre impair. <br>
                        $${e}n+${n}=2n+${n}+n$ est donc la somme d'un nombre impair et de $n$, il a donc la parité contraire de $n$.`),e%2!==0&&n%2===0&&e!==3&&(i=`${e}$n=2\\times ${r((e-1)/2)}n+n+${n}$<br>
                        Comme $${r((e-1)/2)}n$ est un entier naturel, $2 ${r((e-1)/2)}n$ est donc un nombre pair<br>
                        ${n} est aussi un nombre pair.<br>
                        $${r((e-1)/2)}n +${n}$ est donc un nombre pair.<br>
                        $${e}n+${n}=2\\times${r((e-1)/2)}n+${n}+n$ est donc la somme d'un nombre pair et de $n$, il a donc la même parité que $n$.`),e%2!==0&&n%2!==0&&e!==3&&(i=`$${e}n+${n}=2\\times ${r((e-1)/2)}n+n+${n}$<br>
                        Comme $${r((e-1)/2)}n$ est un entier naturel, $2 \\times ${r((e-1)/2)}n$ est donc un nombre pair<br>
                        ${n} est un nombre impair.<br>
                        $2\\times${r((e-1)/2)}n +${n}$ est une somme d'un nombre pair et d'un nombre impair, c'est donc un nombre impair.<br>
                        $${e}n+${n}=2\\times${r((e-1)/2)}n+${n}+n$ est donc la somme d'un nombre impair et de $n$,  il a donc la parité contraire de $n$.`);break;case 3:e=t(2,6),n=t(2,11),m=`Que peut-on dire de la parité de $${e}n^{2}$ ?`,e===2&&(i=`
                        Comme $n^{2}$ est un entier naturel, $2n^{2}$ est un nombre pair<br>
                        `),e%2===0&&e!==2&&(i=`$${e}n^{2}=2\\times ${r(e/2)}n^{2}$<br>
                        Comme $${r(e/2)}n^{2}$ est un entier naturel, $2\\times ${r(e/2)}n^{2}$ est donc un nombre pair<br>
                        `),e%2===2&&(i=`Comme $n^{2}$ est un entier naturel, $2n^{2}$ est un nombre pair<br>
                        `),e%2!==0&&e!==3&&(i=`$${e}n^{2}=2\\times ${r((e-1)/2)}n^{2}+n^{2}$<br>
                        Comme $${r((e-1)/2)}n^{2}$ est un entier naturel, $2\\times ${r((e-1)/2)}n^{2}$ est donc un nombre pair<br>
                        $${e}n^{2}$ est donc la somme d'un nombre pair et de $n^{2}$. Il a donc la même parité que $n^{2}$<br>
                        Or, on sait d'après le cours (démonstration fondamentale) que $n^{2}$ et $n$ ont la même parité.<br>
                        Donc $${e}n^{2}$ a la même parité que $n$`);break}this.listeQuestions.indexOf(m)===-1&&(this.listeQuestions[$]=m,this.listeCorrections[$]=i,$++),s++}d(this)}}export{ye as default,ke as refs,De as titre,Se as uuid};
//# sourceMappingURL=2N20-8-BpbuCXLC.js.map
