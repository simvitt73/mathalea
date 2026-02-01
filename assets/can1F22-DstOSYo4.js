import{E as q,p as d,r as s,y as l,m as i,u as y,w as C,D as E,L as _,o as v}from"./index-CMKaCP9B.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const we="Reconnaitre une fonction polynôme du second degré (V/F)",Pe=!0,Te="qcm",Je="24/09/2022",je="6e9df",ze={"fr-fr":["can1F22"],"fr-ch":[]};class Be extends q{constructor(){super(),this.nbQuestions=1}nouvelleVersion(){const g=[["f"],["g"],["h"],["u"],["v"],["w"],["r"]];let e,$;for(let f=0,S=0;f<this.nbQuestions&&S<50;){let n="",r="",t={texte:"",texteCorr:""};this.canEnonce="";let o=0,p=0,c=0,h=0,x=0,a=0,u=0,b=0,m,L;switch(d([1,2,3,4,5,6])){case 1:o=s(-3,3,0),p=s(-9,9,0),c=s(-9,9,0),h=d([5,7,10]),m=d([2,3,5,6,7,10]),e=d(g),$=d(["a","b","c","d","e","f","g"]),$==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${C(0,o,p,c)}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="b"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${C(0,o,0,c)}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="c"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${C(0,o,p,0)}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="d"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${l(p)}x${i(c)}${E(o)}x^2$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="e"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${l(p)}x${E(o)}x^2${i(c)}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="f"?(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=\\dfrac{${C(0,o,0,c)}}{${h}}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
            $${e}(x)=${l(o)}x^2+\\sqrt{${m}}x${i(c)}$. <br>
            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:o<10},{texte:"Faux",statut:o>10}],options:{ordered:!0,radio:!0}},t=y(this,f),n+=t.texte,$==="a"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${o}$, $b=${p}$ et $c=${c}$.<br>
             $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:$==="b"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${o}$, $b=0$ et $c=${c}$.<br>
            $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:$==="c"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${o}$, $b=${p}$ et $c=0$.<br>
            $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:$==="d"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${o}$, $b=${p}$ et $c=${c}$.<br>
            $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:$==="e"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${o}$, $b=${p}$ et $c=${c}$.<br>
            $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:$==="f"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
            $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=\\dfrac{${o}}{${h}}$, $b=0$ et $c=\\dfrac{${c}}{${h}}$.<br>
            $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `:r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
                $${e}(x)$ est de la forme $ax^2+bx+c$ avec $a=${o}$, $b=\\sqrt{${m}}$ et $c=${c}$.<br>
                $a$, $b$ et $c$ sont bien des constantes et $a\\neq 0$.   `;break;case 2:o=s(-3,3,0),x=s(-9,9,0),a=s(-9,9,[0,x]),e=d(g),m=d([2,3,5,6,7,10]),L=d([2,3,5,6,7,10]),$=d(["a","b","c","d","e","f"]),$==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${l(o)}(x${i(x)})(x${i(a)})$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="b"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${l(o)}x(x${i(a)})$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="c"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=x(x${i(a)})$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="d"?(n=`Soit $${e}$ la fonction définie  par :<br>
                $${e}(x)=(${x}-x)(x${i(a)})$. <br>
                $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="e"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${l(o)}(x+\\sqrt{${m}})(x-\\sqrt{${L}})$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=\\sqrt{${m}}(x${i(x)})(x${i(a)})$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:o<10},{texte:"Faux",statut:o>10}],options:{ordered:!0}},t=y(this,f),n+=t.texte,$==="a"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
              $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=${o}$, $x_1=${-x}$ et $x_2=${-a}$.<br>  Il s'agit de la forme factorisée d'une fonction polynôme du second degré. `:$==="b"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
              $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=${o}$, $x_1=0$ et $x_2=${-a}$.<br> Il s'agit de la forme factorisée d'une fonction polynôme du second degré.   `:$==="c"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
              $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=1$, $x_1=0$ et $x_2=${-a}$.<br> Il s'agit de la forme factorisée d'une fonction polynôme du second degré.   `:$==="d"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
                $${e}(x)=(${x}-x)(x${i(a)})=-(x${i(-x)})(x${i(a)})$.<br>
                $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=1$, $x_1=0$ et $x_2=${-a}$.<br> Il s'agit de la forme factorisée d'une fonction polynôme du second degré.   `:$==="e"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
              $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=${o}$, $x_1=-\\sqrt{${m}}$ et $x_2=\\sqrt{${L}}$.<br>  Il s'agit de la forme factorisée d'une fonction polynôme du second degré. `:r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
              $${e}(x)$ est de la forme $a(x-x_1)(x-x_2)$ avec $a=\\sqrt{${m}}$, $x_1=${-x}$ et $x_2=${-a}$.<br>  Il s'agit de la forme factorisée d'une fonction polynôme du second degré. `;break;case 3:o=s(-5,5,0),x=s(-9,9,0),a=s(-9,9,[0,x]),u=s(-9,9,0),b=s(-9,9,0),e=d(g),$=d(["a","b","c"]),$==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
                  $${e}(x)=${l(o)}(x${i(u)})^2${i(b)}$. <br>         
                  $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="b"?(n=`Soit $${e}$ la fonction définie  par :<br>
                  $${e}(x)=${l(o)}(x${i(u)})^2$. <br>
                  $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
                  $${e}(x)=(x${i(u)})^2$. <br>
                  $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:o<10},{texte:"Faux",statut:o>10}],options:{ordered:!0}},t=y(this,f),n+=t.texte,$==="a"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
                  $${e}(x)$ est de la forme $a(x-\\alpha)^2+\\beta$ avec $a=${o}$, $\\alpha=${-u}$ et $\\beta=${b}$. <br> Il s'agit de la forme canonique d'une fonction polynôme du second degré. `:$==="b"?r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
                  $${e}(x)$ est de la forme $a(x-\\alpha)^2+\\beta$ avec $a=${o}$, $\\alpha=${-u}$ et $\\beta=0$. <br> Il s'agit de la forme canonique d'une fonction polynôme du second degré. `:r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second degré. <br>
                    $${e}(x)$ est de la forme $a(x-\\alpha)^2+\\beta$ avec $a=1$, $\\alpha=${-u}$ et $\\beta=0$. <br> Il s'agit de la forme canonique d'une fonction polynôme du second degré. `;break;case 4:o=s(-3,3,0),p=s(-9,9,0),c=s(-9,9,0),h=d([5,7]),e=d(g),$=d(["a","b","c","d"]),$==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${C(o,p,c,0)}$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="b"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${p}${E(c)}x^3$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="c"?(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${l(o)}x^2${E(p)}x+\\dfrac{${_(c)}}{x}$. <br>
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
              $${e}(x)=${l(o)}x^2${E(p)}\\sqrt{x}${i(c)}$. <br>          
              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:o>10},{texte:"Faux",statut:o<10}],options:{ordered:!0}},t=y(this,f),n+=t.texte,$==="a"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
              $${e}(x)$ est une fonction polynôme du troisième degré.   `:$==="b"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
              $${e}(x)$ est une fonction polynôme du troisième degré.   `:$==="c"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
             L'expression  $${e}(x)$ contient une division par $x$.  `:r=t.texteCorr+`La fonction $${e}$ est une fonction polynôme du second. <br>
              L'expression  $${e}(x)$ contient une racine carrée de $x$.   `;break;case 5:o=s(-3,3,0),x=s(-9,9,0),a=s(-9,9,[0,x]),e=d(g),$=d(["a","b"]),$==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
                    $${e}(x)=${l(o)}x(x${i(x)})(x${i(a)})$. <br>          
                    $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
                  $${e}(x)=${l(o)}x(\\sqrt{x}${i(x)})(x${i(a)})$. <br>            
                  $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:o>10},{texte:"Faux",statut:o<10}],options:{ordered:!0}},t=y(this,f),n+=t.texte,$==="a"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
                   En développant l'expression, on obtient une fonction polynôme du troisième degré. `:r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
                  L'expression $${e}(x)$ contient une racine carrée de $x$. `;break;case 6:o=s(-5,5,0),u=s(-9,9,0),b=s(-9,9,0),e=d(g),$=d(["a","b","c"]),$==="a"?(n=`Soit $${e}$ la fonction définie  par :<br>
                            $${e}(x)=${l(o)}x(x${i(u)})^2${i(b)}$. <br>                
                            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):$==="b"?(n=`Soit $${e}$ la fonction définie  par :<br>
                            $${e}(x)=${l(o)}(x${i(u)})^2+\\sqrt{x}$. <br>
                            $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n):(n=`Soit $${e}$ la fonction définie  par :<br>
                              $${e}(x)=${l(o)}(\\sqrt{x}${i(u)})^2${i(b)}$. <br>         
                              $${e}$ est une fonction polynôme du second degré.`,this.canEnonce=n),this.autoCorrection[f]={enonce:n,propositions:[{texte:"Vrai",statut:o>10},{texte:"Faux",statut:o<10}],options:{ordered:!0}},t=y(this,f),n+=t.texte,$==="a"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
                      En développant l'expression, on obtient une fonction polynôme du troisième degré. `:$==="b"?r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
                      L'expression $${e}(x)$ contient une racine carrée de $x$. `:r=t.texteCorr+`La fonction $${e}$ n'est pas une fonction polynôme du second degré. <br>
                        L'expression $${e}(x)$ contient une racine carrée de $x$. `;break}this.questionJamaisPosee(f,o,x,a,p,c,u,b)&&(this.listeQuestions[f]=n,this.listeCorrections[f]=r,this.canReponseACompleter=t.texte,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),f++),S++}v(this)}}export{Je as dateDePublication,Be as default,Pe as interactifReady,Te as interactifType,ze as refs,we as titre,je as uuid};
//# sourceMappingURL=can1F22-DstOSYo4.js.map
