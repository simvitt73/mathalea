import{E as C,Y as A,$ as _,p as l,r as c,B as t,n as u,a as p,K as m,x as d,F as x,o as B,J as q}from"./index-Bl1vqpvV.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const ke="Calculer avec une probabilité conditionnelle",Ne=!0,Ue="mathLive",Ke="29/04/2025",Ie="baee1",Je={"fr-fr":["1P10-2"],"fr-ch":[]};class Me extends C{constructor(){super(),this.nbQuestions=1,this.sup=4,this.spacing=1.5,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Sans situation (valeurs décimales)","2 : Sans situation (valeurs fractionnaires)","3 : Dans une situation","4 : Mélange"].join(`
`)]}nouvelleVersion(){const F=A({saisie:this.sup,max:3,melange:4,defaut:4,nbQuestions:this.nbQuestions}),O=_(F,this.nbQuestions);for(let a=0,r,$,o,P=0,i,s,n,h,b,v,e,f,g;a<this.nbQuestions&&P<50;){switch(b=`Pour tout événement $A$ (avec $P(A)\\neq 0$) et $B$ d'un univers $\\Omega$, on a  : <br>
          $P_{A}(B)=\\dfrac{P(A\\cap B)}{P(A)}$ ou encore  $P(A\\cap B)=P(A)\\times P_{A}(B)$.<br>
          En appliquant avec les données de l'énoncé, on obtient :<br>`,v=[["A","B"],["A","C"],["R","T"],["K","L"]],e=l(v),f=[[1,3,1,4],[2,3,3,7],[1,4,1,6],[3,4,1,7],[3,5,3,7],[2,3,2,9],[3,8,1,4],[4,7,1,4],[4,7,1,3],[1,6,1,9]],g=l(f),O[a]){case 1:i=c(1,9)/10,s=c(1,49)/100,n=i*s,l([!0,!1])?(o=t(i*s,3),u(this,a,{reponse:{value:o,compare:q}}),r=`On considère deux événements $${e[0]}$ et  $${e[1]}$ tels que : <br>
          $P(${e[0]})=${t(i,1)}$ et $P_{${e[0]}}(${e[1]})=${t(s,2)}$.<br>
         ${this.interactif?`$P(${e[0]}\\cap ${e[1]})=$`:`Calculer $P(${e[0]}\\cap ${e[1]})$.`}`,r+=p(this,a,m.clavierNumbers),$=b,$+=`
          $\\begin{aligned}
          P(${e[0]}\\cap ${e[1]})&=P(${e[0]}) \\times P_{${e[0]}}(${e[1]})\\\\
          &=${t(i,2)}\\times ${t(s,2)}\\\\
          &=${d(`${t(i*s,3)}`)}
          \\end{aligned}$`):(o=t(s,2),u(this,a,{reponse:{value:o,compare:q}}),r=`On considère deux événements $${e[0]}$ et  $${e[1]}$ tels que : <br>
          $P(${e[0]})=${t(i,1)}$ et $P(${e[0]}\\cap ${e[1]})=${t(n,3)}$.<br>
         ${this.interactif?`$P_{${e[0]}}(${e[1]})=$`:`Calculer $P_{${e[0]}}(${e[1]})$.`}`,r+=p(this,a,m.clavierNumbers),$=b,$+=`
          $\\begin{aligned}
         P_{${e[0]}}(${e[1]})&=\\dfrac{P(${e[0]}\\cap ${e[1]})}{P(${e[0]})}\\\\
          &=\\dfrac{${t(i*s,3)}}{${t(i,3)}}\\\\
          &=${d(`${t(s,3)}`)}
          \\end{aligned}$`);break;case 2:i=new x(g[0],g[1]),s=new x(g[2],g[3]),n=i.produitFraction(s).simplifie(),l([!0,!1])?(o=n.texFraction,u(this,a,{reponse:{value:o,options:{fractionEgale:!0}}}),r=`On considère deux événements $${e[0]}$ et  $${e[1]}$ tels que : <br>
        $P(${e[0]})=${i.texFraction}$ et $P_{${e[0]}}(${e[1]})=${s.texFraction}$.<br>
       ${this.interactif?`$P(${e[0]}\\cap ${e[1]})=$`:`Calculer $P(${e[0]}\\cap ${e[1]})$.`}`,r+=p(this,a,m.clavierDeBaseAvecFraction),$=b,$+=`
        $\\begin{aligned}
        P(${e[0]}\\cap ${e[1]})&=P(${e[0]}) \\times P_{${e[0]}}(${e[1]})\\\\
        &=${i.texFraction}\\times ${s.texFraction}\\\\
        &=${d(n.texFraction)}
        \\end{aligned}$`):(o=s.texFraction,u(this,a,{reponse:{value:o,options:{fractionEgale:!0}}}),r=`On considère deux événements $${e[0]}$ et  $${e[1]}$ tels que : <br>
        $P(${e[0]})=${i.texFraction}$ et $P(${e[0]}\\cap ${e[1]})=${n.texFraction}$.<br>
       ${this.interactif?`$P_{${e[0]}}(${e[1]})=$`:`Calculer $P_{${e[0]}}(${e[1]})$.`}`,r+=p(this,a,m.clavierDeBaseAvecFraction),$=b,$+=`
        $\\begin{aligned}
       P_{${e[0]}}(${e[1]})&=\\dfrac{P(${e[0]}\\cap ${e[1]})}{P(${e[0]})}\\\\
        &=${n.texFraction}\\div ${i.texFraction}\\\\
         &=${n.texFraction}\\times ${i.inverse().texFraction}\\\\
        &=${d(s.texFraction)}
        \\end{aligned}$`);break;default:c(1,2)===1?(i=c(40,60)/100,s=c(65,85)/100,n=i*s,h=l([`On estime que la proportion de spams, sur la boîte de messagerie électronique d’un particulier est de $${t(i*100,0)}\\,\\%$. <br>
               Un logiciel de suppression de spams est installé sur l'ordinateur. Il ne supprime que des spams mais ne supprime pas tous les spams.<br>
               On constate qu'il  supprime $${t(s*100,3)}\\,\\%$ de spams.<br>
                On choisit un message au hasard et on note $${e[0]}$ : « le message est un spam » et $${e[1]}$ : « le message est supprimé ».<br>
              Calculer la valeur décimale de$P(${e[0]}\\cap ${e[1]})$`,`Le cuisinier d’une colonie de vacances a confectionné des beignets pour le goûter :<br>
 $${t(i*100,0)}\\,\\%$ des beignets sont à l’ananas, les autres sont aux pommes  et $${t(s*100,2)}\\,\\%$ des beignets à l’ananas sont aromatisés à la cannelle.<br>
On choisit un beignet au hasard. <br>
On définit les évènements suivants :<br>
• $${e[0]}$ : « le beignet choisi est à l’ananas » ;<br>
• $${e[1]}$ : « le beignet choisi est aromatisé à la cannelle ».<br>
Calculer la valeur décimale de $P(${e[0]}\\cap ${e[1]})$.`,`Le jour d'une grande journée de promotion, $${t(i*100,0)}\\,\\%$ des clients qui entrent dans un magasin ont été
contactés lors d'une  campagne publicitaire. Une étude statistique montre que la probabilité qu’un client effectue un achat sachant qu’il a été contacté au cours de la campagne publicitaire est de $${t(s,2)}$.<br>
On choisit au hasard un client du magasin lors de cette grande journée de promotion. <br>On définit les évènements suivants :<br>
• $${e[0]}$ : « le client choisi a été contacté lors de la campagne publicitaire ; »<br>
• $${e[1]}$ : le client choisi a effectué un achat ».<br>
Calculer la valeur décimale de $P(${e[0]}\\cap ${e[1]})$. `]),u(this,a,{reponse:{value:t(n,4)}}),r=h,r+="<br>"+p(this,a,m.clavierProbabilite,{texteAvant:`$P(${e[0]}\\cap ${e[1]})=$`}),$=`On a :<br>
              $\\begin{aligned}
              P(${e[0]}\\cap ${e[1]})&=P(${e[0]}) \\times P_{${e[0]}}(${e[1]})\\\\
              &=${t(i,4)}\\times ${t(s,4)}\\\\
              &=${d(`${t(i*s,4)}`)}
              \\end{aligned}$`):(i=c(40,60)/100,s=c(89,95)/100,n=i*s,h=l([`On estime que la proportion de spams, sur la boîte de messagerie électronique d’un particulier est de $${t(i*100,0)}\\,\\%$. <br>
                  Un logiciel de suppression de spams est installé sur l'ordinateur. Il ne supprime que des spams mais ne supprime pas tous les spams.<br>
                 $${t(n*100,2)}\\,\\%$ des messages sont des spams supprimés.<br>
                 On note $${e[0]}$ : « le message est un spam » et $${e[1]}$ : « le message est supprimé ».<br>
                 On choisit un message au hasard.<br>
                 Calculer la valeur décimale de$P_{${e[0]}}(${e[1]})$.`,`Le cuisinier d’une colonie de vacances a confectionné des beignets pour le goûter :<br>
                  $${t(i*100,0)}\\,\\%$  sont à l’ananas, les autres sont aux pommes  et $${t(n*100,2)}\\,\\%$  sont des beignets à l’ananas  aromatisés à la cannelle.<br>
                 On choisit un beignet au hasard. <br>
                 On définit les évènements suivants :<br>
                 • $${e[0]}$ : « le beignet choisi est à l’ananas » ;<br>
                 • $${e[1]}$ : « le beignet choisi est aromatisé à la cannelle ».<br>
                Calculer la valeur décimale de $P_{${e[0]}}(${e[1]})$.`,`Le jour d'une grande journée de promotion, $${t(i*100,0)}\\,\\%$ des clients qui entrent dans un magasin ont été
contactés lors d'une  campagne publicitaire. Une étude statistique montre que, parmi tous les clients,  $${t(n*100,3)}\\,\\%$ ont été contactés lors de la campagne publicitaire et ont fait un achat.<br>
On choisit au hasard un client du magasin lors de cette grande journée de promotion. <br>On définit les évènements suivants :<br>
• $${e[0]}$ : « le client choisi a été contacté lors de la campagne publicitaire  » ;<br>
• $${e[1]}$ : « le client choisi a effectué un achat. »<br>
Calculer la valeur décimale de $P_{${e[0]}}(${e[1]})$.`]),u(this,a,{reponse:{value:[`${t(s,4)}`]}}),r=h,r+=p(this,a,m.clavierProbabilite,{texteAvant:`<br>$P_{${e[0]}}(${e[1]})=$`}),$=`On a :<br>
          $\\begin{aligned}
         P_{${e[0]}}(${e[1]})&=\\dfrac{P(${e[0]}\\cap ${e[1]})}{P(${e[0]})}\\\\
          &=\\dfrac{${t(n,4)}}{${t(i,4)}}\\\\
          &=${d(`${t(s,4)}`)}
          \\end{aligned}$`);break}this.questionJamaisPosee(a,i)&&(this.listeQuestions[a]=r,this.listeCorrections[a]=$,a++),P++}B(this)}}export{Ke as dateDePublication,Me as default,Ne as interactifReady,Ue as interactifType,Je as refs,ke as titre,Ie as uuid};
//# sourceMappingURL=1P10-2-B6Fd2cQe.js.map
