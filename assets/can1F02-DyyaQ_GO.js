import{E as u,p as x,r,q as p,k as $,s as t,u as g,v as d,m as s,w as m,o as h}from"./index-Dkwu26bg.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const De="Déterminer le sens de variation d’un pôlynome du second degré",Re=!0,Oe="qcm",Le="1/11/2021",Ie="10/06/2022",ke="cc460",Qe={"fr-fr":["can1F02"],"fr-ch":[]};class Pe extends u{constructor(){super(),this.nbQuestions=1}nouvelleVersion(){let a,f,e,i,o,n,l,b;for(let c=0;c<this.nbQuestions;c++){switch(x([1,2,3,4,5,6])){case 1:e=r(-5,5,0),i=r(-9,9),n=r(-9,9,0),o=p(-i,2*e),l=p(i,2*e),a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=${m(0,e,i,n)}$.<br>
  
              Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`,i===0?this.autoCorrection[c]={enonce:a,options:{vertical:!1},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e>0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${o.texFractionSimplifiee} \\bigg]$ `,statut:e<0},{texte:`$\\bigg[${e}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${e} \\bigg]$ `,statut:e===0}]}:this.autoCorrection[c]={enonce:a,options:{vertical:!1},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e>0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${o.texFractionSimplifiee} \\bigg]$ `,statut:e<0},{texte:`$\\bigg[${l.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:e===0}]},b=g(this,c),this.interactif&&(a+=b.texte),e>0?f=`Comme le coefficient $${e}$ devant $x^2$ est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
            <br> $-\\dfrac{b}{2a}=-\\dfrac{${i}}{2\\times ${d(e)}}=${o.texFractionSimplifiee}$.
            <br>Ainsi, $f$ est croissante sur $\\bigg[${o.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$.    `:f=`Comme le coefficient $${e}$ devant $x^2$ est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
            <br>$-\\dfrac{b}{2a}=-\\dfrac{${i}}{2\\times ${d(e)}}=${o.texFractionSimplifiee}$.
            <br>Ainsi, $f$ est croissante sur $\\bigg]-\\infty${t(1)} ;${t(1)}${o.texFractionSimplifiee} \\bigg]$.    `;break;case 2:e=r(-10,10,0),i=r(-5,5,0),n=r(-9,9,0),e===1?a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=(${$(1,i)})^2${s(n)}$.
            <br>
            
            Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`:e===-1?a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=-(${$(1,i)})^2${s(n)}$.
              <br>   Le plus grand intervalle sur lequel la fonction $f$ est croissante est :`:a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=${$(0,e)}(${$(1,i)})^2${s(n)}$.
              <br>
              
              Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`,this.autoCorrection[c]={enonce:a,options:{vertical:!1},propositions:[{texte:`$\\bigg[${-i}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e>0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${-i} \\bigg]$ `,statut:e<0},{texte:`$\\bigg[${i}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${i} \\bigg]$ `,statut:e===0}]},b=g(this,c),this.interactif&&(a+=b.texte),e>0&&(i>0?f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>  $f(x)=a(x-\\alpha)^2+\\beta$
          <br>    Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
          <br>  Ici,  $f(x)=${$(0,e)}(${$(1,i)})^2${s(n)}=
         ${$(0,e)}(x-(\\underbrace{-${i}}_{\\alpha}))^2${s(n)}$, d'où $\\alpha=-${i}$.
         <br> Le coefficient $${e}$ devant la parenthèse est strictement positif, la fonction est donc
         d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
         <br>  Ainsi, $f$ est croissante sur $\\bigg[-${i} ${t(1)} ;${t(1)} +\\infty\\bigg[$.    `:f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>$f(x)=a(x-\\alpha)^2+\\beta$
           <br> Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
           <br>
           Ici,  $f(x)=${$(0,e)}(${$(1,i)})^2${s(n)}$, d'où $\\alpha=${-i}$.
           <br>  Le coefficient $${e}$ devant la parenthèse est strictement positif, la fonction est donc
          d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
          <br>  Ainsi, $f$ est croissante sur $\\bigg[${-i} ${t(1)} ;${t(1)} +\\infty\\bigg[$.    `),e<0&&(i>0?f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>$f(x)=a(x-\\alpha)^2+\\beta$<br>
          Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
          <br> Ici,  $f(x)=${$(0,e)}(${$(1,i)})^2${s(n)}=
         ${$(0,e)}(x-(\\underbrace{-${i}}_{\\alpha}))^2${s(n)}$, d'où $\\alpha=-${i}$.
         <br> Comme le coefficient $${e}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
         <br>    Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${t(1)} ;${t(1)} -${i}  \\bigg]$.    `:f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>  $f(x)=a(x-\\alpha)^2+\\beta$
              <br> Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
           <br> Ici,  $f(x)=${$(0,e)}(${$(1,i)})^2${s(n)}$, d'où $\\alpha=${-i}$.
           <br> Comme le coefficient $${e}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
           Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${t(1)} ;${t(1)} ${-i}  \\bigg]$.    `);break;case 3:e=r(-5,5,0),i=r(-9,9),n=r(-9,9,0),l=p(i+n,2),o=p(-(i+n),2),e===1?a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=(${$(1,i)})(${$(1,n)})$.
            <br>
            
            Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`:e===-1?a=a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=-(${$(1,i)})(${$(1,n)})$.
              <br>
              
              Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`:a=a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=${e}(${$(1,i)})(${$(1,n)})$.
              <br>
              
              Donner le plus grand intervalle sur lequel la fonction $f$ est croissante.`,this.autoCorrection[c]={enonce:a,options:{vertical:!1},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e>0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${o.texFractionSimplifiee} \\bigg]$ `,statut:e<0},{texte:`$\\bigg[${l.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:e===0}]},b=g(this,c),this.interactif&&(a+=b.texte),e<0?f=`On reconnaît une forme factorisée d'une fonction polynôme du second degré :
            <br>       $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.
            <br>         L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-i}+${d(-n)}}{2}= ${o.texFractionSimplifiee}$.
            <br>           Comme le coefficient $${e}$ devant les parenthèses est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
                <br>           Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${t(1)} ;${t(1)} ${o.texFractionSimplifiee}  \\bigg]$.    `:f=`On reconnaît une forme factorisée d'une fonction polynôme du second degré :
            <br>      $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.
            <br>    L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-i}+${d(-n)}}{2}= ${o.texFractionSimplifiee}$.
            <br>            Comme le coefficient $${e}$ devant les parenthèses est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
              <br>     Ainsi, $f$ est croissante sur $\\bigg[${o.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$.    `;break;case 4:e=r(-5,5,0),i=r(-9,9),n=r(-9,9,0),o=p(-i,2*e),l=p(i,2*e),a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=${m(0,e,i,n)}$.
          <br>
          
          Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`,i===0?this.autoCorrection[c]={enonce:a,options:{vertical:!1},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e<0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${o.texFractionSimplifiee} \\bigg]$ `,statut:e>0},{texte:`$\\bigg[${e}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${e} \\bigg]$ `,statut:e===0}]}:this.autoCorrection[c]={enonce:a,options:{vertical:!1},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e<0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${o.texFractionSimplifiee} \\bigg]$ `,statut:e>0},{texte:`$\\bigg[${l.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:e===0}]},b=g(this,c),this.interactif&&(a+=b.texte),e>0?f=`Comme le coefficient $${e}$ devant $x^2$ est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
            <br>         $-\\dfrac{b}{2a}=-\\dfrac{${i}}{2\\times ${d(e)}}=${o.texFractionSimplifiee}$.
           <br>          Ainsi, $f$ est décroissante sur $\\bigg]-\\infty${t(1)} ;${t(1)}${o.texFractionSimplifiee} \\bigg]$.    `:f=`Comme le coefficient $${e}$ devant $x^2$ est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
            <br>  $-\\dfrac{b}{2a}=-\\dfrac{${i}}{2\\times ${d(e)}}=${o.texFractionSimplifiee}$.
    <br>   Ainsi, $f$ est décroissante sur $\\bigg[${o.texFractionSimplifiee}${t(1)} ;${t(1)} +\\infty\\bigg[$.    `;break;case 5:e=r(-10,10,0),i=r(-5,5,0),n=r(-9,9,0),e===1?a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=(${$(1,i)})^2${s(n)}$.
            <br>
  
            Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`:e===-1?a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=-(${$(1,i)})^2${s(n)}$.
              <br>
  
          Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`:a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=${$(0,e)}(${$(1,i)})^2${s(n)}$.
              <br>
  
          Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`,this.autoCorrection[c]={enonce:a,options:{vertical:!1},propositions:[{texte:`$\\bigg[${-i}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e<0},{texte:`$\\bigg]-\\infty${t(1)} ;${t(1)}${-i} \\bigg]$ `,statut:e>0},{texte:`$\\bigg[${i}${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${i} \\bigg]$ `,statut:e===0}]},b=g(this,c),this.interactif&&(a+=b.texte),e>0&&(i>0?f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>        $f(x)=a(x-\\alpha)^2+\\beta$<br>
          Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
          <br>       Ici,  $f(x)=${$(0,e)}(${$(1,i)})^2${s(n)}=
         ${$(0,e)}(x-(\\underbrace{-${i}}_{\\alpha}))^2${s(n)}$, d'où $\\alpha=-${i}$.
         <br>       Le coefficient $${e}$ devant la parenthèse est strictement positif, la fonction est donc
         d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
         <br>    Ainsi, $f$ est décroissante sur $\\bigg]-\\infty${t(1)} ;${t(1)}${-i} \\bigg]$.    `:f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>         $f(x)=a(x-\\alpha)^2+\\beta$
              <br>         Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
              <br>         Ici,  $f(x)=${$(0,e)}(${$(1,i)})^2${s(n)}$, d'où $\\alpha=${-i}$.
              <br>        Le coefficient $${e}$ devant la parenthèse est strictement positif, la fonction est donc
          d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
          <br>           Ainsi, $f$ est décroissante sur $\\bigg]-\\infty${t(1)} ;${t(1)}${-i} \\bigg]$.    `),e<0&&(i>0?f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>        $f(x)=a(x-\\alpha)^2+\\beta$
          <br>        Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
          <br>       Ici,  $f(x)=${$(0,e)}(${$(1,i)})^2${s(n)}=
         ${$(0,e)}(x-(\\underbrace{-${i}}_{\\alpha}))^2${s(n)}$, d'où $\\alpha=-${i}$.
         <br>       Comme le coefficient $${e}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
         <br>         Ainsi, $f$ est décroissante sur $\\bigg[${-i}${t(1)} ;${t(1)} +\\infty\\bigg[$.    `:f=`On reconnaît la forme canonique d'une fonction polynôme du second degré :
              <br>         $f(x)=a(x-\\alpha)^2+\\beta$
           <br>         Comme $\\alpha=-\\dfrac{b}{2a}$, le changement de variation de la fonction $f$ se fait en $\\alpha$.
           <br>         Ici,  $f(x)=${$(0,e)}(${$(1,i)})^2${s(n)}$, d'où $\\alpha=${-i}$.
           <br>         Comme le coefficient $${e}$ devant la parenthèse est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
           <br>         Ainsi, $f$ est décroissante sur $\\bigg[${-i}${t(1)} ;${t(1)} +\\infty\\bigg[$.    `);break;case 6:e=r(-5,5,0),i=r(-9,9),n=r(-9,9,0),l=p(i+n,2),o=p(-(i+n),2),e===1?a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par  $f(x)=(${$(1,i)})(${$(1,n)})$.
            <br>
  
          Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`:e===-1?a=a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=-(${$(1,i)})(${$(1,n)})$.
              <br>                           Le plus grand intervalle sur lequel la fonction $f$ est décroissante est :`:a=a=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par : $f(x)=${e}(${$(1,i)})(${$(1,n)})$.
              <br>
              
          Donner le plus grand intervalle sur lequel la fonction $f$ est décroissante.`,this.autoCorrection[c]={enonce:a,options:{vertical:!1},propositions:[{texte:`$\\bigg[${o.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e<0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${o.texFractionSimplifiee} \\bigg]$ `,statut:e>0},{texte:`$\\bigg[${l.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$ `,statut:e===0},{texte:`$\\bigg]-\\infty ${t(1)} ;${t(1)} ${l.texFractionSimplifiee} \\bigg]$ `,statut:e===0}]},b=g(this,c),this.interactif&&(a+=b.texte),e<0?f=`On reconnaît une forme factorisée d'une fonction polynôme du second degré :
            <br>              $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.
            <br>              L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-i}+${d(-n)}}{2}= ${o.texFractionSimplifiee}$.
                <br>              Comme le coefficient $${e}$ devant les parenthèses est strictement négatif, la fonction est d'abord croissante puis décroissante (la parabole est "tournée vers le bas").
                <br>              Ainsi, $f$ est décroissante sur $\\bigg[${o.texFractionSimplifiee} ${t(1)} ;${t(1)} +\\infty\\bigg[$.    `:f=`On reconnaît une forme factorisée d'une fonction polynôme du second degré :
            <br>            $f(x)=a(x-x_1)(x-x_2)$ où $x_1$ et $x_2$ sont les racines du polynôme.
            <br> L'abscisse du sommet de la parabole est donné par la moyenne des racines soit par : $\\dfrac{x_1+x_2}{2}=\\dfrac{${-i}+${d(-n)}}{2}= ${o.texFractionSimplifiee}$.
              <br>            Comme le coefficient $${e}$ devant les parenthèses est strictement positif, la fonction est d'abord décroissante puis croissante (la parabole est "tournée vers le haut").
              <br> Ainsi, $f$ est croissante sur $\\bigg]-\\infty ${t(1)} ;${t(1)} ${o.texFractionSimplifiee} \\bigg]$.    `;break}this.listeQuestions.push(a),this.listeCorrections.push(f),h(this),this.canEnonce=a,this.canReponseACompleter=""}}}export{Ie as dateDeModifImportante,Le as dateDePublication,Pe as default,Re as interactifReady,Oe as interactifType,Qe as refs,De as titre,ke as uuid};
//# sourceMappingURL=can1F02-DyyaQ_GO.js.map
