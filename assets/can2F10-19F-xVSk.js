import{E as b,p as S,r as x,u as c,x as u,v as d,m as a,R as m,s as n,Z as o,B as l,o as h}from"./index-Dkwu26bg.js";import{a as p}from"./deprecatedFractions-C2OiATGl.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./colors-vbveSA7f.js";const Ot="Résoudre une équation avec une fonction de référence*",Dt=!0,Qt="qcm",Ft="27/12/2021",Pt="1380f",Nt={"fr-fr":["can2F10"],"fr-ch":["1mCL3-1"]};class Tt extends b{constructor(){super(),this.nbQuestions=1,this.spacing=2}nouvelleVersion(){let s,r,t,e,$,f;for(let i=0,q=0;i<this.nbQuestions&&q<50;){switch(S([1,2,3,4,5,6])){case 1:e=x(-5,5,0),$=x(-5,5,0),t=m($-e),s=`L'ensemble des solutions $S$ de l'équation $x^2${a(e)}=${$}$ est :
                 `,t>0&&(t===1||t===4||t===9||t===16||t===25?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-${o(t)[0]}${n(1)};${n(1)}${o(t)[0]}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{${o(t)[0]}\\}$`,statut:!1}]}:o(t)[1]===t?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-\\sqrt{${$-e}}${n(1)};${n(1)}\\sqrt{${$-e}}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{\\sqrt{${$-e}}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-${Math.sqrt(t)};${Math.sqrt(t)}\\}$`,statut:!0},{texte:`$S=\\{${Math.sqrt(t)}\\}$`,statut:!1},{texte:`$S=\\{${t}\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\{0\\}$",statut:!0},{texte:"$S=\\{1}\\}$",statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}),t<0&&(t===-1||t===-4||t===-9||t===-16||t===-25?this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{-${Math.sqrt(-t)};${Math.sqrt(-t)}\\}$`,statut:!1},{texte:`$S=\\{-${Math.sqrt(-t)}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{-\\sqrt{${-t}};\\sqrt{${-t}}\\}$`,statut:!1},{texte:`$S=\\{\\sqrt{${-t}}\\}$`,statut:!1}]}),f=c(this,i),this.interactif?s+=f.texte:s=`Résoudre dans $\\mathbb{R}$ :<br>
  
        $x^2${a(e)}=${$}$`,e>0?r=`On isole $x^2$ :<br>
            
            $\\begin{aligned}
           x^2${a(e)}&=${$}\\\\
           x^2${a(e)}-${u(e)}&=${$}-${u(e)}\\\\
           x^2&=${$-e}
           \\end{aligned}$`:r=`On isole $x^2$ :<br>
            
            $\\begin{aligned}
           x^2${a(e)}&=${$}\\\\
           x^2${a(e)}+${u(-e)}&=${$}+${u(-e)}\\\\
           x^2&=${$-e}
           \\end{aligned}$`,t>0&&(t===1||t===4||t===9||t===16||t===25?r+=`<br>L'équation est de la forme $x^2=k$ avec $k=${l(t)}>0$, donc l'équation a deux solutions : $-\\sqrt{${l(t)}}$ et $\\sqrt{${l(t)}}$.
              <br> Comme $-\\sqrt{${l(t)}}=-${o(t)[0]}$ et $\\sqrt{${t}}=${o(t)[0]}$ alors
              les solutions de l'équation peuvent s'écrire plus simplement : $-${o(t)[0]}$ et $${o(t)[0]}$.<br>
              Ainsi,  $S=\\{-${o(t)[0]}${n(1)};${n(1)}${o(t)[0]}\\}$.`:o(t)[1]!==t?r+=`<br>L'équation est de la forme $x^2=k$ avec $k=${l(t)}>0$, donc l'équation a deux solutions : $-\\sqrt{${l(t)}}$ et $\\sqrt{${l(t)}}$. <br>
                  Comme $-\\sqrt{${t}}=-${o(t)[0]}\\sqrt{${o(t)[1]}}$ et $\\sqrt{${t}}=${o(t)[0]}\\sqrt{${o(t)[1]}}$ alors
                  les solutions de l'équation peuvent s'écrire plus simplement : $-${o(t)[0]}\\sqrt{${o(t)[1]}}$ et $${o(t)[0]}\\sqrt{${o(t)[1]}}$.<br>
                  Ainsi,  $S=\\{-${o(t)[0]}\\sqrt{${o(t)[1]}}${n(1)};${n(1)}${o(t)[0]}\\sqrt{${o(t)[1]}}\\}$.`:r+=`<br>L'équation est de la forme $x^2=k$ avec $k=${$-e}>0$,
                  donc l'équation a deux solutions : $-\\sqrt{${$-e}}$ et $\\sqrt{${$-e}}$.<br>
                  Ainsi,  $S=\\{-\\sqrt{${$-e}}${n(1)};${n(1)}\\sqrt{${$-e}}\\}$.`),t===0&&(r+=`
            <br>L'équation est de la forme $x^2=k$ avec $k=${l(t)}$, alors l'équation a une solution : $0$.<br>
            Ainsi, $S=\\{0\\}$. `),t<0&&(r+=`
            <br>L'équation est de la forme $x^2=k$ avec $k=${l($-e)}$, alors l'équation n'a pas de solution.
              <br>Ainsi, $S=\\emptyset$. `),this.canEnonce=`Résoudre dans $\\mathbb{R}$ l'équation $x^2${a(e)}=${$}$.`,this.canReponseACompleter="";break;case 2:e=x(-5,5,0),$=x(-5,5,0),t=m(e-$),s=`L'ensemble des solutions $S$ de l'équation $-x^2${a(e)}=${$}$ est :
           `,t>0&&(t===1||t===4||t===9||t===16||t===25?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-${o(t)[0]}${n(1)};${n(1)}${o(t)[0]}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{${o(t)[0]}\\}$`,statut:!1}]}:o(t)[1]===t?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-\\sqrt{${t}}${n(1)};${n(1)}\\sqrt{${t}}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{\\sqrt{${t}}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{-${Math.sqrt(t)};${Math.sqrt(t)}\\}$`,statut:!0},{texte:`$S=\\{${Math.sqrt(t)}\\}$`,statut:!1},{texte:`$S=\\{${t}\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\{0\\}$",statut:!0},{texte:"$S=\\{1}\\}$",statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}),t<0&&(t===-1||t===-4||t===-9||t===-16||t===-25?this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{-${Math.sqrt(-t)};${Math.sqrt(-t)}\\}$`,statut:!1},{texte:`$S=\\{-${Math.sqrt(-t)}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{-\\sqrt{${-t}};\\sqrt{${-t}}\\}$`,statut:!1},{texte:`$S=\\{\\sqrt{${-t}}\\}$`,statut:!1}]}),f=c(this,i),this.interactif?s+=f.texte:s=`Résoudre dans $\\mathbb{R}$ :<br>
  
   $-x^2${a(e)}=${$}$`,e>0?r=`On isole $x^2$ :<br>
            
            $\\begin{aligned}
     -x^2${a(e)}&=${$}\\\\
     -x^2${a(e)}-${u(e)}&=${$}-${u(e)}\\\\
     x^2&=${e-$}
     \\end{aligned}$`:r=`On isole $x^2$ :<br>
  
            $\\begin{aligned}
     -x^2${a(e)}&=${$}\\\\
    - x^2${a(e)}+${u(-e)}&=${$}+${u(-e)}\\\\
     x^2&=${e-$}
     \\end{aligned}$`,t>0&&(t===1||t===4||t===9||t===16||t===25?r+=`<br>
  
              L'équation est de la forme $x^2=k$ avec $k=${l(t)}>0$, donc l'équation a deux solutions : $-\\sqrt{${l(t)}}$ et $\\sqrt{${l(t)}}$.
        <br> Comme $-\\sqrt{${l(t)}}=-${o(t)[0]}$ et $\\sqrt{${t}}=${o(t)[0]}$ alors
        les solutions de l'équation peuvent s'écrire plus simplement : $-${o(t)[0]}$ et $${o(t)[0]}$.<br>
        Ainsi,  $S=\\{-${o(t)[0]}${n(1)};${n(1)}${o(t)[0]}\\}$.`:o(t)[1]!==t?r+=`<br>
                L'équation est de la forme $x^2=k$ avec $k=${l(t)}>0$, donc l'équation a deux solutions : $-\\sqrt{${l(t)}}$ et $\\sqrt{${l(t)}}$. <br>
            Comme $-\\sqrt{${t}}=-${o(t)[0]}\\sqrt{${o(t)[1]}}$ et $\\sqrt{${t}}=${o(t)[0]}\\sqrt{${o(t)[1]}}$ alors
            les solutions de l'équation peuvent s'écrire plus simplement : $-${o(t)[0]}\\sqrt{${o(t)[1]}}$ et $${o(t)[0]}\\sqrt{${o(t)[1]}}$.<br>
            Ainsi,  $S=\\{-${o(t)[0]}\\sqrt{${o(t)[1]}}${n(1)};${n(1)}${o(t)[0]}\\sqrt{${o(t)[1]}}\\}$.`:r+=`<br>
                L'équation est de la forme $x^2=k$ avec $k=${t}>0$,
            donc l'équation a deux solutions : $-\\sqrt{${t}}$ et $\\sqrt{${t}}$.<br>
            Ainsi,  $S=\\{-\\sqrt{${t}}${n(1)};${n(1)}\\sqrt{${t}}\\}$.`),t===0&&(r+=`<br>
            L'équation est de la forme $x^2=k$ avec $k=${l(t)}$, alors l'équation a une solution : $0$.<br>
      Ainsi, $S=\\{0\\}$. `),t<0&&(r+=`<br>
            L'équation est de la forme $x^2=k$ avec $k=${l(t)}$, alors l'équation n'a pas de solution.
        <br>Ainsi, $S=\\emptyset$. `),this.canEnonce=`Résoudre dans $\\mathbb{R}$ l'équation $-x^2${a(e)}=${$}$.`,this.canReponseACompleter="";break;case 3:e=x(-5,5,0),$=x(-5,5),t=m($-e),s=`L'ensemble des solutions $S$ de l'équation $\\sqrt{x}${a(e)}=${$}$ est :
                       `,t>0&&(t!==1?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{${t**2}\\}$`,statut:!0},{texte:`$S=\\{${2*t}\\}$`,statut:!1},{texte:`$S=\\{${t}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{${t}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{${2*t}\\}$`,statut:!1}]}),t<0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{\\sqrt{${-t}}\\}$`,statut:!1},{texte:`$S=\\{${t**2}\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\{0\\}$",statut:!0},{texte:`$S=\\{${t+1}\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}),f=c(this,i),this.interactif?s+=f.texte:s=`Résoudre dans $[0${n(1)};${n(1)}+\\infty[$ :<br>
  
               $\\sqrt{x}${a(e)}=${$}$`,e>0?r=`
            
            On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
              $\\begin{aligned}
              \\sqrt{x}${a(e)}&=${$}\\\\
              \\sqrt{x}${a(e)}-${u(e)}&=${$}-${u(e)}\\\\
              \\sqrt{x}&=${$-e}
                             \\end{aligned}$<br>`:r=`
            
            On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                             $\\begin{aligned}
                             \\sqrt{x}${a(e)}&=${$}\\\\
                             \\sqrt{x}${a(e)}+${u(-e)}&=${$}+${u(-e)}\\\\
                             \\sqrt{x}&=${$-e}
                                            \\end{aligned}$<br>`,$-e<0&&(r+=`
            L'équation est de la forme $\\sqrt{x}=k$ avec $k=${t}$. Comme $${t}<0$ alors l'équation n'admet pas de solution. <br>
  Ainsi,   $S=\\emptyset$.<br>
  `),($-e>0||$-e===0)&&(r+=`
            L'équation est de la forme $\\sqrt{x}=k$ avec $k=${$-e}$. Comme $${$-e}\\geqslant 0$ alors l'équation admet une solution : $${t}^2=${t**2}$.<br>
  Ainsi $S=\\{${t**2}\\}$.
  `),this.canEnonce=`Résoudre dans $[0${n(1)};${n(1)}+\\infty[$ l'équation $\\sqrt{x}${a(e)}=${$}$.`,this.canReponseACompleter="";break;case 4:e=x(-5,5,0),$=x(-5,5),t=m(e-$),s=`L'ensemble des solutions $S$ de l'équation $${e}-\\sqrt{x}=${$}$ est :
                           `,t>0&&(t!==1?t===2?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{${t**2}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{${t}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{${t**2}\\}$`,statut:!0},{texte:`$S=\\{${2*t}\\}$`,statut:!1},{texte:`$S=\\{${t}\\}$`,statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\{${t}\\}$`,statut:!0},{texte:"$S=\\emptyset$",statut:!1},{texte:`$S=\\{${2*t}\\}$`,statut:!1}]}),t<0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:`$S=\\{\\sqrt{${-t}}\\}$`,statut:!1},{texte:`$S=\\{${t**2}\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\{0\\}$",statut:!0},{texte:`$S=\\{${t+1}\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}),f=c(this,i),this.interactif?s+=f.texte:s=`Résoudre dans $[0${n(1)};${n(1)}+\\infty[$ :<br>
  
                  $-\\sqrt{x}${a(e)}=${$}$`,e>0?r=`On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                  $\\begin{aligned}
                  ${e}-\\sqrt{x}&=${$}\\\\
                  ${e}-\\sqrt{x}-${u(e)}&=${$}-${u(e)}\\\\
                  -\\sqrt{x}&=${$-e}\\\\
                  \\sqrt{x}&=${e-$}
                                 \\end{aligned}$<br>`:r=`On isole $\\sqrt{x}$ dans le membre de gauche pour obtenir une équation du type $\\sqrt{x}=k$.<br>
                                 $\\begin{aligned}
                                 ${e}-\\sqrt{x}&=${$}\\\\
                                 ${e}-\\sqrt{x}+${u(-e)}&=${$}+${u(-e)}\\\\
                                 -\\sqrt{x}&=${$-e}\\\\
                                 \\sqrt{x}&=${e-$}
                                                \\end{aligned}$<br>`,t<0&&(r+=`L'équation est de la forme $\\sqrt{x}=k$ avec $k=${t}$. Comme $${t}<0$ alors l'équation n'admet pas de solution. <br>
  Ainsi,   $S=\\emptyset$.<br>
  `),(t>0||t===0)&&(r+=`L'équation est de la forme $\\sqrt{x}=k$ avec $k=${e-$}$. Comme $${e-$}\\geqslant0$ alors l'équation admet une solution : $${t}^2=${t**2}$.<br>
     Ainsi $S=\\{${t**2}\\}$.
    `),this.canEnonce=`Résoudre dans $[0${n(1)};${n(1)}+\\infty[$ l'équation $-\\sqrt{x}${a(e)}=${$}$.`,this.canReponseACompleter="";break;case 5:e=x(-10,10,0),$=x(-10,10),t=$-e,s=`L'ensemble des solutions $S$ de l'équation $\\dfrac{1}{x}${a(e)}=${$}$ est :
                         `,t!==0&&(t===1?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${p(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${p(1,-t)}\\right\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}:t===-1?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${p(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${p(1,-t)}\\right\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${p(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${p(1,-t)}\\right\\}$`,statut:!1},{texte:`$S=\\left\\{${t}\\right\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:"$S=\\left\\{0\\right\\}$",statut:!1},{texte:"$S=\\left\\{-1\\right\\}$",statut:!1}]}),f=c(this,i),this.interactif?s+=f.texte:s=`
                       Résoudre dans $\\mathbb{R}^*$ :<br>
  
                        $\\dfrac{1}{x}${a(e)}=${$}$`,r=`On isole $\\dfrac{1}{x}$ dans le membre de gauche pour obtenir une équation du type $\\dfrac{1}{x}=k$.<br>
              $\\begin{aligned}
              \\dfrac{1}{x}${a(e)}&=${$}\\\\
              \\dfrac{1}{x}${a(e)}+${u(d(-e))}&=${$}+${u(-e)}\\\\
              \\dfrac{1}{x}&=${$-e}
                                          \\end{aligned}$<br>`,t===0&&(r+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${t}$. Donc l'équation n'admet pas de solution.<br>
  Ainsi,   $S=\\emptyset$.
  `),t!==0&&(r+=`$k=${t}$ et $${t}\\neq 0$, donc l'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${t}$. Donc l'équation admet une solution :
  $${p(1,t)}$.<br>
  Ainsi $S=\\left\\{${p(1,t)}\\right\\}$.
  `),this.canEnonce=`Résoudre dans $\\mathbb{R}^*$ l'équation $\\dfrac{1}{x}${a(e)}=${$}$.`,this.canReponseACompleter="";break;default:e=x(-10,10,0),$=x(-10,10),t=e-$,s=`L'ensemble des solutions $S$ de l'équation $${e}-\\dfrac{1}{x}=${$}$ est :
                             `,t!==0&&(t===1?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${p(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${p(1,-t)}\\right\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}:t===-1?this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${p(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${p(1,-t)}\\right\\}$`,statut:!1},{texte:"$S=\\emptyset$",statut:!1}]}:this.autoCorrection[i]={enonce:s,propositions:[{texte:`$S=\\left\\{${p(1,t)}\\right\\}$`,statut:!0},{texte:`$S=\\left\\{${p(1,-t)}\\right\\}$`,statut:!1},{texte:`$S=\\left\\{${t}\\right\\}$`,statut:!1}]}),t===0&&(this.autoCorrection[i]={enonce:s,propositions:[{texte:"$S=\\emptyset$",statut:!0},{texte:"$S=\\left\\{0\\right\\}$",statut:!1},{texte:"$S=\\left\\{-1\\right\\}$",statut:!1}]}),f=c(this,i),this.interactif?s+=f.texte:s=`
                           Résoudre dans $\\mathbb{R}^*$ :<br>
  
                           $${e}-\\dfrac{1}{x}=${$}$`,r=`On isole $\\dfrac{1}{x}$ dans le membre de gauche pour obtenir une équation du type $\\dfrac{1}{x}=k$.<br>
                  $\\begin{aligned}
                  ${e}-\\dfrac{1}{x}&=${$}\\\\
                  ${e}-\\dfrac{1}{x}+${u(d(-e))}&=${$}+${u(d(-e))}\\\\
                  \\dfrac{1}{x}&=${e-$}
                                              \\end{aligned}$<br>`,t===0&&(r+=`L'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${t}$. Donc l'équation n'admet pas de solution.<br>
      Ainsi,   $S=\\emptyset$.
      `),t!==0&&(r+=`$k=${t}$ et $${t}\\neq 0$, donc l'équation est de la forme $\\dfrac{1}{x}=k$ avec $k=${t}$. Donc l'équation admet une solution :
      $${p(1,t)}$.<br>
      Ainsi $S=\\left\\{${p(1,t)}\\right\\}$.
      `),this.canEnonce=`Résoudre dans $\\mathbb{R}^*$ l'équation $${e}-\\dfrac{1}{x}=${$}$.`,this.canReponseACompleter="";break}this.questionJamaisPosee(i,t,e,$)&&(this.listeQuestions[i]=s,this.listeCorrections[i]=r,h(this),i++),q++}}}export{Ft as dateDePublication,Tt as default,Dt as interactifReady,Qt as interactifType,Nt as refs,Ot as titre,Pt as uuid};
//# sourceMappingURL=can2F10-19F-xVSk.js.map
