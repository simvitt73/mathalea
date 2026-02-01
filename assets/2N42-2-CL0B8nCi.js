import{E as p,_ as o,$ as b,x as t,p as a,a as f,s as u,K as g,n as h,o as A}from"./index-vfG7N0N9.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-BymNGK-G.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-CKp8Whw5.js";import"./json/refToUuidCH-C3otjGt1.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-CxJkatM_.js";import"./json/referentiel2022FR-DUyIuCDZ.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Fe=!0,ye="mathLive",ke="Exprimer une variable en fonction des autres à  partir de formules mathématiques",Oe="02/10/2023",ve="06/11/2024",Qe="96bac",Ue={"fr-fr":["2N42-2","BP2AutoJ1"],"fr-ch":["11FA5-4"]};class De extends p{constructor(){super(),this.besoinFormulaireNumerique=["Cas possibles",3,`1 : Sans rappel de formule
 2 : Avec rappel d'une formule
 3 : Mélange `],this.nbQuestions=1,this.sup=1}nouvelleVersion(){let s=[];this.sup===1?s=o([1,2,3,4,5,6,7,8,9,10,11,12,13,14]):this.sup===2?s=o([15,16,17,18,19,20,21,22]):s=o([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]);const l=b(s,this.nbQuestions);for(let d=0,c=0;d<this.nbQuestions&&c<50;){const m=l[d];let i="",r="",$="",n=[];switch(m){case 1:$="c",r="Exprimer le côté $c$ d'un carré  en fonction de son périmètre $P$.<br>",n=["\\dfrac{P}{4}","0.25\\times P","P\\times 0.25"],i=`Le périmètre $P$ d'un carré en fonction de son côté $c$ est donné par $P=4\\times c$.<br>
          On isole $c$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
      P&=4\\times c\\\\
      \\dfrac{P}{4}&=c
                 \\end{aligned}$ <br>      
                 Ainsi, $c=${t("\\dfrac{P}{4}")}$. `;break;case 2:$="c",r="Exprimer le côté $c$ d'un triangle équilatéral  en fonction de son périmètre $P$.<br>",n=["\\dfrac{P}{3}","\\dfrac{P}{3}","\\dfrac{1}{3}\\times P","P\\times \\dfrac{1}{3}"],i=`Le périmètre $P$ d'un triangle équilatéral en fonction de son côté $c$ est donné par $P=3\\times c$.<br>
          On isole $c$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
      P&=3\\times c\\\\
     \\dfrac{P}{3}&=c
     \\end{aligned}$ <br>      
    Ainsi, $c=${t("\\dfrac{P}{3}")}$. `;break;case 3:$="r",r="Exprimer le rayon $r$ d'un cercle  en fonction de son périmètre $P$.<br>",n=["\\dfrac{P}{2\\pi}","\\dfrac{1}{2\\pi}\\times P","\\dfrac{1}{2\\pi}\\times P"],i=`Le périmètre $P$ d'un cerclce en fonction de son rayon $r$ est donné par $P=2\\pi r$.<br>
          On isole $r$ dans un membre de l'égalité :<br>
           $\\begin{aligned}
 P&=2\\times \\pi \\times r\\\\
  \\dfrac{P}{2\\times \\pi}&=r
 \\end{aligned}$ <br>      
   Ainsi, $r=\\dfrac{P}{2\\times \\pi}$ ou encore $r=${t("\\dfrac{P}{2\\pi}")}$.`;break;case 4:$="d",r="Exprimer le diamètre $d$ d'un cercle  en fonction de son périmètre $P$.<br>",n=["\\dfrac{P}{\\pi}","\\dfrac{1}{\\pi}\\times P"],i=`Le périmètre $P$ d'un cerclce en fonction de son diamètre $d$ est donné par $P=\\pi \\times d$.<br>
          On isole $d$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
     P&=\\pi \\times d\\\\
     \\dfrac{P}{\\pi}&=d
       \\end{aligned}$ <br>      
     Ainsi, $d=${t("\\dfrac{P}{\\pi}")}$.`;break;case 5:$="P",r="Exprimer le périmètre $P$  d'un cercle  en fonction de son diamètre $d$.<br>",n=["\\pi\\times d","\\pi\\times d"],i=`Le périmètre $P$ d'un cerclce en fonction de son diamètre $d$ est donné par $P=\\pi \\times d$ ou encore $P=${t("\\pi d")}$.`;break;case 6:$="P",r="Exprimer le périmètr $P$  d'un cercle  en fonction de son rayon $r$.<br>",n=["2\\pi\\times r","2\\pi\\times r"],i=`Le périmètre $P$ d'un cerclce en fonction de son rayon $r$ est donné par $P=2\\pi\\times r$ ou plus simplement $P=${t("2\\pi r")}$.`;break;case 7:$="c",r="Exprimer le côté $c$ d'un carré  en fonction de son aire $A$.<br>",n=["\\sqrt{A}"],i=`L'aire $A$ d'un carré en fonction de son côté $c$ est donnée par $A=c^2$.<br>
          On isole $c$ dans un membre de l'égalité :<br>
  $\\begin{aligned}
  A&=c^2\\\\
  \\sqrt{A}&=c
  \\end{aligned}$ <br>      
  Ainsi, $c=${t("\\sqrt{A}")}$.`;break;case 8:$="d",r="Exprimer le diamètre $d$ d'un cercle  en fonction de son périmètre $P$.<br>",n=["\\dfrac{P}{\\pi}","\\dfrac{2P}{2\\pi}"],i=`Le périmètre d'un cercle en fonction de son rayon $r$ est donné par $P=2\\times \\pi\\times r$.<br>
    Or $r=\\dfrac{d}{2}$, donc le périmètre d'un cercle en fonction de son diamètre $d$ est donné par $P=2\\times \\pi\\times \\dfrac{d}{2}$.<br>
    On isole $d$ dans un membre de l'égalité :<br>
    $\\begin{aligned}
    P&=2\\times \\pi\\times \\dfrac{d}{2}\\\\
    P&= \\pi\\times d\\\\
    \\dfrac{P}{\\pi}&=d
    \\end{aligned}$ <br>      
    Ainsi, $d=${t("\\dfrac{P}{\\pi}")}$.`;break;case 9:$="r",r="Exprimer le rayon $r$ d'un disque en fonction de son aire $A$.<br>",n=["\\sqrt{\\dfrac{A}{\\pi}}","\\dfrac{\\sqrt{A}}{\\sqrt{\\pi}}"],i=`L'aire $A$ d'un disque en fonction de son rayon $r$ est donnée par $A=\\pi\\times r^2$.<br>
          On isole $r$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
    A&=\\pi\\times r^2\\\\
    \\dfrac{A}{\\pi}&=r^2\\\\
    \\sqrt{ \\dfrac{A}{\\pi}}&=r
    \\end{aligned}$ <br>  
    Ainsi, $r=\\sqrt{\\dfrac{A}{\\pi}}$ ou encore $r=${t("\\dfrac{\\sqrt{A}}{\\sqrt{\\pi}}")}$.`;break;case 10:$="d",r="Exprimer le diamètre $d$ d'un disque en fonction de son aire $A$.<br>",n=["\\sqrt{\\dfrac{4\\times A}{\\pi}}","\\dfrac{2\\sqrt{A}}{\\sqrt{\\pi}}","2\\times\\sqrt{\\dfrac{A}{\\pi}}","2\\times\\dfrac{\\sqrt{A}}{\\sqrt{\\pi}}"],i=`L'aire $A$ d'un disque en fonction de son rayon $r$ est donnée par $A=\\pi\\times r^2$.<br>
      Comme $r=\\dfrac{d}{2}$, alors $A=\\pi\\times \\left(\\dfrac{d}{2}\\right)^2$.<br>
      On isole $d$ dans un membre de l'égalité :<br>
      $\\begin{aligned}
      A&=\\pi\\times \\left(\\dfrac{d}{2}\\right)^2\\\\
      A&=\\pi \\times \\dfrac{d^2}{4}\\\\
     4\\times A &=\\pi \\times d^2\\\\
    \\dfrac{4\\times A}{\\pi} &= d^2\\\\
    \\sqrt{\\dfrac{4\\times A}{\\pi}} &= d
      \\end{aligned}$ <br>  
      Ainsi, $d=\\sqrt{\\dfrac{4\\times A}{\\pi}}$ ou encore $d=${t("2\\dfrac{\\sqrt{A}}{\\sqrt{\\pi}}")}$.`;break;case 11:{const e=a([["longueur","L","largeur","l"],["largeur","l","longueur","L"]]);$=e[1],r=`Exprimer la ${e[0]} $${e[1]}$ d'un rectangle en fonction de son périmètre $P$ et de sa ${e[2]} $${e[3]}$.<br>`,n=[`\\dfrac{P-2${e[3]}}{2}`,`\\dfrac{P}{2}-${e[3]}`],i=`Le périmètre $P$ d'un rectangle en fonction de sa longueur et de largeur est donné par $P=2L+2l$.<br>
          On isole $${e[1]}$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
    P&=2L+2l\\\\
   P-2${e[3]}&=2${e[1]}\\\\
    \\dfrac{P-2${e[3]}}{2}&=${e[1]}
    \\end{aligned}$ <br>  
    Ainsi, $${e[1]}=${t(`\\dfrac{P-2${e[3]}}{2}`)}$ ou, par exemple $${e[1]}=\\dfrac{P}{2}-${e[3]}$.`}break;case 12:{const e=a([["longueur","L","largeur","l"],["largeur","l","longueur","L"]]);$=e[1],r=`Exprimer la ${e[0]} $${e[1]}$ d'un rectangle en fonction de son aire $A$ et de sa ${e[2]} $${e[3]}$.<br>`,n=[`\\dfrac{A}{${e[3]}}`],i=`L'aire $A$ d'un rectangle en fonction de sa longueur et de largeur est donnée par $A=L\\times l$.<br>
          On isole $${e[1]}$ dans un membre de l'égalité :<br>
          $\\begin{aligned}
A&=L\\times l\\\\
\\dfrac{A}{${e[3]}}&=${e[1]}\\\\
\\end{aligned}$ <br>  
Ainsi, $${e[1]}=${t(`\\dfrac{A}{${e[3]}}`)}$.`}break;case 13:$="d",r="Exprimer le diamètre $d$ d'un cercle  en fonction de son rayon $r$.<br>",n=["2\\times r"],i=`Le diamètre d'un cercle est le double de son rayon. <br>
  Ainsi, $d=2\\times r$ ou encore $${t("d=2r")}$.`;break;case 14:$="r",r="Exprimer le rayon $r$ d'un cercle  en fonction de son diamètre $d$.<br>",n=["\\dfrac{d}{2}","\\dfrac{1}{2}\\times d","0.5\\times d"],i=`Le diamètre d'un cercle est le double de son rayon, donc le rayon est la moitié du diamètre : <br>
   Ainsi,  $r=${t("\\dfrac{d}{2}")}$.`;break;case 15:{const e=a([["hauteur","h","base","B"],["Base","B","hauteur","h"]]);$=e[1],r=`L'aire $A$ d'un triangle est donnée par : $A=\\dfrac{B\\times h}{2}$, avec $B$ la longueur d'un côté et $h$ la hauteur relative à ce côté.<br>
 Exprimer $${e[1]}$ en fonction de $A$ et de $${e[3]}$.<br>`,n=[`\\dfrac{2\\times A}{${e[3]}}`,`2\\times\\dfrac{A}{${e[3]}}`,`\\dfrac{2}{${e[3]}}\\times A`],i=`On isole $${e[1]}$ dans un membre de l'égalité :<br>
       $\\begin{aligned}
      A&=\\dfrac{B\\times h}{2}\\\\
      A\\times 2&=B\\times h\\\\
      \\dfrac{A\\times 2}{${e[3]}}&= ${e[1]}
                     \\end{aligned}$
      <br> 
     Une expression de  $${e[1]}$ en fonction de $A$ et de $${e[3]}$ est $${e[1]}=\\dfrac{A\\times 2}{${e[3]}}$ ou plus simplement $${e[1]}=${t(`\\dfrac{2A}{${e[3]}}`)}$.`}break;case 16:{const e=a([["b","B"],["B","b"]]);$=e[0],r=`L'aire $A$ d'un trapèze est donnée par : $A=\\dfrac{(b+B)\\times h}{2}$, avec $B$ la longueur de la grande base, $b$ la longueur de la petite base et  $h$ la hauteur du trapèze.<br>
Exprimer $${e[0]}$ en fonction de $A$, de $${e[1]}$ et de $h$.<br>`,n=[`2\\times\\dfrac{A}{h}-${e[1]}`,`\\dfrac{2\\times A}{h}-${e[1]}`,`\\dfrac{2\\times A-${e[1]}\\times h}{h}`],i=`On isole $${e[0]}$ dans un membre de l'égalité :<br>
    $\\begin{aligned}
   A&=\\dfrac{(b+B)\\times h}{2}\\\\
  2\\times A&=(b+B)\\times h\\\\
  \\dfrac{2A}{h}&=b+B\\\\
  \\dfrac{2A}{h}-${e[1]}   &=${e[0]}\\end{aligned}$
     <br> 
    
 Une expression de  $${e[0]}$ en fonction de $A$, de  $${e[1]}$ et de $h$ est $${e[0]}=${t(`\\dfrac{2A}{h}-${e[1]}`)}$.`}break;case 17:$="h",r=`L'aire $A$ d'un trapèze est donnée par : $A=\\dfrac{(b+B)\\times h}{2}$, avec $B$ la longueur de la grande base, $b$ la longueur de la petite base et  $h$ la hauteur du trapèze.<br>
Exprimer $h$ en fonction de $A$, de $B$ et de $b$.<br>`,n=["\\dfrac{2\\times A}{B+b}","2\\times \\dfrac{A}{B+b}"],i=`On isole $h$ dans un membre de l'égalité :<br>
 $\\begin{aligned}
  A&=\\dfrac{(b+B)\\times h}{2}\\\\
  2\\times A&=(b+B)\\times h\\\\
  \\dfrac{2A}{b+B}&=h
  \\end{aligned}$
     <br> 
                 
  Une expression de  $h$ en fonction de $A$, de  $B$ et de $b$ est $h= ${t("\\dfrac{2A}{b+B}")}$.`;break;case 18:{const e=a([["a","b"],["b","a"]]);$=e[0],r=`La moyenne arithmétique de deux nombres $a$ et $b$ est le nombre $m$ défini par  : 
      $m=\\dfrac{a+b}{2}$.<br>
     Exprimer $${e[0]}$ en fonction de $m$ et de $${e[1]}$.<br>`,n=[`2\\times m - ${e[1]}`,`-${e[1]}+2\\times m`],i=`On isole $${e[0]}$ dans un membre de l'égalité :<br>
         $\\begin{aligned}
        m&=\\dfrac{a+b}{2}\\\\
       2\\times m&=a+b\\\\
       2\\times m-${e[1]}&=${e[0]}\\end{aligned}$
          <br> 
         
      Une expression de  $${e[0]}$ en fonction de $m$ et de $${e[1]}$ est $${e[0]}=${t(`2m-${e[1]}`)}$.`}break;case 19:{const e=a([["a","b"],["b","a"]]);$=e[0],r=`La moyenne géométrique de deux nombres non nuls $a$ et $b$ (de même signe) est le nombre $m$ défini par  : 
      $m=\\sqrt{a\\times b}$.<br>
     Exprimer $${e[0]}$ en fonction de $m$ et de $${e[1]}$.<br>`,n=[`\\dfrac{m^2}{${e[1]}}`,`\\dfrac{1}{${e[1]}}\\times m^2`],i=`On isole $${e[0]}$ dans un membre de l'égalité :<br>
         $\\begin{aligned}
        m&=\\sqrt{a\\times b}\\\\
        m^2&=a\\times b\\\\
       \\dfrac{m^2}{${e[1]}}&=${e[0]}\\end{aligned}$
          <br> 
         
      Une expression de  $${e[0]}$ en fonction de $m$ et de $${e[1]}$ est  $${t(`\\dfrac{m^2}{${e[1]}}`)}$.`}break;case 20:{const e=a([["a","b"],["b","a"]]);$=e[0],r=`La moyenne harmonique de deux nombres non nuls $a$ et $b$  est le nombre $h$ défini par  : 
      $\\dfrac{1}{h}=\\dfrac{1}{2}\\left(\\dfrac{1}{a}+\\dfrac{1}{b}\\right)$.<br>
     Exprimer $${e[0]}$ en fonction de $h$ et de $${e[1]}$.<br>`,n=[`\\dfrac{1}{\\dfrac{2}{h}-\\dfrac{1}{${e[1]}}}`,`\\dfrac{${e[1]}\\times h}{2\\times ${e[1]}-h}`,`\\dfrac{1}{\\dfrac{2\\times ${e[1]}-h}{${e[1]}\\times h}}`],i=`On isole $${e[0]}$ dans un membre de l'égalité :<br>
         $\\begin{aligned}
         \\dfrac{1}{h}&=\\dfrac{1}{2}\\left(\\dfrac{1}{a}+\\dfrac{1}{b}\\right)\\\\
         \\dfrac{2}{h}&=\\dfrac{1}{a}+\\dfrac{1}{b}\\\\
         \\dfrac{2}{h}-\\dfrac{1}{${e[1]}}&=\\dfrac{1}{${e[0]}}\\\\
       \\dfrac{1}{\\dfrac{2}{h}-\\dfrac{1}{${e[1]}}}&=${e[0]}\\\\
       \\dfrac{1}{\\dfrac{2${e[1]}}{${e[1]}h}-\\dfrac{h}{${e[1]}h}}&=${e[0]}\\\\
       \\dfrac{1}{\\dfrac{2${e[1]}-h}{${e[1]}h}}&=${e[0]}\\\\
       \\dfrac{${e[1]}h}{2${e[1]}-h}&=${e[0]}
       \\end{aligned}$
          <br> 
         
      Une expression de  $${e[0]}$ en fonction de $h$ et de $${e[1]}$ est  $${e[0]}=${t(`\\dfrac{${e[1]}h}{2${e[1]}-h}`)}$.`}break;case 21:$="F",r=`Le taux d'évolution  entre deux valeurs $I$ et  $F$ est le nombre $T$ défini par  : 
      $T=\\dfrac{F-I}{I}$.<br>
     Exprimer $F$ en fonction de $I$ et de $T$.<br>`,n=["T\\times I+I","I\\times(T+1)"],i=`On isole $F$ dans un membre de l'égalité :<br>
         $\\begin{aligned}
         T&=\\dfrac{F-I}{I}\\\\
         T\\times I&=F-I\\\\
         T\\times I+I&=F
       \\end{aligned}$
          <br> 
         
      Une expression de  $F$ en fonction de $T$ et de $I$ est  $F=T\\times I +I$ ou encore $F=${t("I(T+1)")}$.`;break;default:$="I",r=`Le taux d'évolution  entre deux valeurs $I$ et  $F$ est le nombre $T$ défini par  : 
      $T=\\dfrac{F-I}{I}$.<br>
     Exprimer $I$ en fonction de $F$ et de $T$.<br>`,n=["\\dfrac{F}{T+1}"],i=`On isole $I$ dans un membre de l'égalité :<br>
         $\\begin{aligned}
         T&=\\dfrac{F-I}{I}\\\\
         T\\times I+I&=F\\\\
         I(T+1)&=F\\\\
         I&=\\dfrac{F}{T+1}
       \\end{aligned}$
          <br> 
         
      Une expression de  $I$ en fonction de $T$ et de $F$ est  $I=${t("\\dfrac{F}{T+1}")}$.`;break}this.interactif&&(r+="<br>"+f(this,d,g.alphanumeric,{texteAvant:u(10)+`$${$} =$`})),h(this,d,{reponse:{value:n}}),this.questionJamaisPosee(d,m,$)&&(this.listeQuestions[d]=r,this.listeCorrections[d]=i,d++),c++}A(this)}}export{ve as dateDeModifImportante,Oe as dateDePublication,De as default,Fe as interactifReady,ye as interactifType,Ue as refs,ke as titre,Qe as uuid};
//# sourceMappingURL=2N42-2-CL0B8nCi.js.map
