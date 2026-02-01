import{E,$ as q,_ as i,p as g,r as u,x as c,a as U,s as v,K as S,n as O,o as y}from"./index-Dkwu26bg.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const D$=!0,M$="mathLive",V$="Exprimer une variable en fonction des autres",R$="25/09/2023",F$="27/09/2024",I$="ef686",J$={"fr-fr":["2N42-1"],"fr-ch":["11FA5-3"]};class k$ extends E{constructor(){super(),this.besoinFormulaireNumerique=["Niveau de difficulté",4,`1 : Niveau 1
 2 : Niveau 2
 3 : Niveau 3
 4 : Mélange des niveaux précédents`],this.nbQuestions=1,this.sup=1}nouvelleVersion(){let l=[];this.sup===1?l=[1]:this.sup===2?l=[2]:this.sup===3?l=[3]:l=[1,2,3];const h=q(l,this.nbQuestions);for(let s=0,t,n,r,x=0,b,e,d,$,o,a;s<this.nbQuestions&&x<50;){switch(b=h[s],n="",b){case 1:d=[i(["a","b","c"]),i(["x","y","z"]),i(["u","v","w"]),i(["A","B","C"]),i(["R","S","T"]),i(["I","J","K"]),i(["c","d","e"]),i(["K","L","M"]),i(["r","s","t"]),i(["U","V","W"])],$=g(d),o=u(1,5),o===1?(t=`Soient $${$[0]}$, $${$[1]}$ et $${$[2]}$ trois nombres vérifiant l'égalité : 
          $${$[0]}=${$[1]}-${$[2]}$.<br>
          Exprimer $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$.`,a=$[1],r=`${$[0]}+${$[2]}`,n=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
            $\\begin{aligned}
            ${$[0]}&=${$[1]}-${$[2]}\\\\
            ${$[0]}+${c($[2])}&=${$[1]}-${$[2]}+${c($[2])}\\\\
            ${$[0]}+${$[2]}&= ${$[1]}
                           \\end{aligned}$
                       <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$ est $${$[1]}= ${$[0]}+${$[2]}$.`):o===2?(t=`Soient $${$[0]}$, $${$[1]}$ et $${$[2]}$ trois nombres vérifiant l'égalité :
             $${$[0]}=${$[1]}+${$[2]}$.<br>
            Exprimer $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$.`,a=$[1],r=[`${$[1]}=${$[0]}-${$[2]}`,`${$[0]}-${$[2]}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
              $\\begin{aligned}
              ${$[0]}&=${$[1]}+${$[2]}\\\\
              ${$[0]}-${c($[2])}&=${$[1]}-${$[2]}-${c($[2])}\\\\
              ${$[0]}-${$[2]}&= ${$[1]}
                             \\end{aligned}$
                         <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$ est $${$[1]}= ${$[0]}-${$[2]}$.`):o===3?(t=`Soient $${$[0]}$, $${$[1]}$ et $${$[2]}$ trois nombres non nuls vérifiant l'égalité  : 
  $${$[0]}=\\dfrac{${$[1]}}{${$[2]}}$.<br>
                            Exprimer $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$.`,a=$[1],r=[`${$[1]}=${$[0]}\\times ${$[2]}`,`${$[0]}\\times ${$[2]}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
                              $\\begin{aligned}
                              ${$[0]}&=\\dfrac{${$[1]}}{${$[2]}}\\\\
                              ${$[0]}\\times ${$[2]}&=${$[1]}                              
                                             \\end{aligned}$
                                         <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$ est $${$[1]}=${$[0]}\\times ${$[2]}$.`):o===4?(t=`Soient $${$[0]}$, $${$[1]}$ et $${$[2]}$ trois nombres non nuls vérifiant l'égalité  :
  $${$[0]}=\\dfrac{${$[1]}}{${$[2]}}$.<br>
Exprimer $${$[2]}$ en fonction de $${$[0]}$ et $${$[1]}$.`,a=$[2],r=`\\dfrac{${$[1]}}{${$[0]}}`,n=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
$\\begin{aligned}   
 ${$[0]}&=\\dfrac{${$[1]}}{${$[2]}}\\\\
 ${$[0]}\\times ${$[2]}&=${$[1]} \\\\
 ${$[2]}&=\\dfrac{${$[1]}}{${$[0]}}                        
 \\end{aligned}$
<br> Une expression de $${$[2]}$ en fonction de $${$[0]}$ et $${$[1]}$ est $${$[2]}=\\dfrac{${$[1]}}{${$[0]}}$.`):(t=`Soient $${$[0]}$, $${$[1]}$ et $${$[2]}$ trois nombres non nuls vérifiant l'égalité  :
  $${$[0]}=${$[1]}\\times ${$[2]}$.<br>
  Exprimer $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$.`,a=$[1],r=[`${$[1]}=\\dfrac{${$[0]}}{${$[2]}}`,`\\dfrac{${$[0]}}{${$[2]}}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
    $\\begin{aligned}
    ${$[0]}&=${$[1]}\\times ${$[2]}\\\\
    \\dfrac{${$[0]}}{${$[2]}}&=${$[1]}
                   \\end{aligned}$
               <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$ et $${$[2]}$ est $${$[1]}= \\dfrac{${$[0]}}{${$[2]}}$.`);break;case 2:d=[i(["a","b","c","e"]),i(["x","y","z","w"]),i(["u","v","w","t"]),i(["A","B","C","E"]),i(["R","S","T","U"]),i(["I","J","K","L"]),i(["c","g","e","f"]),i(["c","m","f","e"]),i(["K","L","M","N"]),i(["r","s","t","u"]),i(["U","V","W","X"])],$=g(d),o=u(1,12),o===1?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité  :`,t=`${e} $${$[0]}=${$[1]}-${$[2]}${$[3]}$.<br>
   Exprimer $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$.`,a=$[2],r=[`\\dfrac{${$[1]}-${$[0]}}{${$[3]}}`,`\\dfrac{${$[0]}-${$[1]}}{-${$[3]}}`],n=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
       $\\begin{aligned}
      ${$[0]}&=${$[1]}-${$[2]}${$[3]}\\\\
      ${$[0]}-${$[1]}&=-${$[2]}${$[3]}\\\\
       -${$[0]}+${$[1]}&= ${$[2]}${$[3]}\\\\
       \\dfrac{-${$[0]}+${$[1]}}{${$[3]}}&=${$[2]}
                 \\end{aligned}$
      <br> Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$ est $${$[2]}=  \\dfrac{${$[1]}-${$[0]}}{${$[3]}}$.`):o===2?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres (avec $${$[2]}$ non nul) vérifiant l'égalité  :`,t=`${e} $${$[0]}=${$[1]}-${$[2]}${$[3]}$.<br>
          Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$.`,a=$[3],r=[`\\dfrac{${$[1]}-${$[0]}}{${$[2]}}`,`\\dfrac{${$[0]}-${$[1]}}{-${$[2]}}`],n=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
              $\\begin{aligned}
             ${$[0]}&=${$[1]}-${$[2]}${$[3]}\\\\
             ${$[0]}-${$[1]}&=-${$[2]}${$[3]}\\\\
              -${$[0]}+${$[1]}&= ${$[2]}${$[3]}\\\\
              \\dfrac{-${$[0]}+${$[1]}}{${$[2]}}&=${$[3]}
                        \\end{aligned}$
      <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$ est $${$[3]}=  \\dfrac{${$[1]}-${$[0]}}{${$[2]}}$.`):o===3?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres vérifiant l'égalité :`,t=`${e} $${$[0]}=${$[1]}-${$[2]}${$[3]}$.<br>
     Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[3]}$.`,a=$[1],r=[`${$[0]}+${$[2]}${$[3]}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br> 
         $\\begin{aligned}
        ${$[0]}&=${$[1]}-${$[2]}${$[3]}\\\\
        ${$[0]}+${$[2]}${$[3]}&=${$[1]}
                   \\end{aligned}$
 <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[2]}$ est $${$[1]}= ${$[0]}+${$[2]}${$[3]}$.`):o===4?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres (avec $${$[2]}$ non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=${$[1]}${$[2]}+${$[3]}$.<br>
    Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[3]}$.`,a=$[1],r=[`\\dfrac{${$[0]}-${$[3]}}{${$[2]}}`,`\\dfrac{-${$[0]}+${$[3]}}{-${$[2]}}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br> 
        $\\begin{aligned}
       ${$[0]}&=${$[1]}${$[2]}+${$[3]}\\\\
       ${$[0]}-${$[3]}&=${$[1]}${$[2]}\\\\
        \\dfrac{${$[0]}-${$[3]}}{${$[2]}}&=${$[1]}
                  \\end{aligned}$
       <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[3]}$ est $${$[1]}=  \\dfrac{${$[0]}-${$[3]}}{${$[2]}}$.`):o===5?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres vérifiant l'égalité suivante :`,t=`${e}  $${$[0]}=${$[1]}${$[2]}+${$[3]}$.<br>
     Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$.`,a=$[3],r=`${$[0]}-${$[1]}${$[2]}`,n=`On isole $${$[3]}$ dans un membre de l'égalité :<br> 
 $\\begin{aligned}
 ${$[0]}&=${$[1]}${$[2]}+${$[3]}\\\\
  ${$[0]}-${$[1]}${$[2]}&=${$[3]}
 \\end{aligned}$
   <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$ est $${$[3]}=  ${$[0]}-${$[1]}${$[2]}$.`):o===6?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$  quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}$.<br>
  Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[3]}$.`,a=$[1],r=`${$[3]}\\times ${$[0]}-${$[2]}`,n=`On isole $${$[1]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}\\\\
 ${$[0]}\\times ${$[3]}&=${$[1]}+${$[2]}\\\\
 ${$[0]}\\times ${$[3]}-${$[2]}&=${$[1]}
 \\end{aligned}$
    <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et  $${$[3]}$ est $${$[1]}= ${$[3]}\\times ${$[0]}-${$[2]}$.`):o===7?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}$.<br>
  Exprimer $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$.`,a=$[2],r=`${$[3]}\\times ${$[0]}-${$[1]}`,n=`On isole $${$[2]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}\\\\
 ${$[0]}\\times ${$[3]}&=${$[1]}+${$[2]}\\\\
 ${$[0]}\\times ${$[3]}-${$[1]}&=${$[2]}
 \\end{aligned}$
    <br> Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$ est $${$[2]}= ${$[3]}\\times ${$[0]}-${$[1]}$.`):o===8?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$   quatre nombres (avec $${$[3]}$ et $${$[0]}$  non nuls) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}$.<br>
  Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$.`,a=$[3],r=[`\\dfrac{${$[1]} +${$[2]}}{${$[0]}}`,`\\dfrac{-${$[1]} -${$[2]}}{-${$[0]}}`],n=`On isole $${$[3]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=\\dfrac{${$[1]}+${$[2]}}{${$[3]}}\\\\
 ${$[0]}\\times ${$[3]}&=${$[1]}+${$[2]}\\\\
  ${$[3]}&=\\dfrac{${$[1]} +${$[2]}}{${$[0]}}
 \\end{aligned}$
    <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$ est $${$[3]}= \\dfrac{${$[1]} +${$[2]}}{${$[0]}}$.`):o===9?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$   quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=(${$[1]}+${$[2]})${$[3]}$.<br>
  Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et  $${$[2]}$.`,a=$[1],r=[`\\dfrac{${$[0]} -${$[2]}\\times ${$[3]}}{${$[3]}}`,`\\dfrac{-${$[0]} +${$[2]}\\times ${$[3]}}{-${$[3]}}`,`\\dfrac{${$[0]}}{${$[3]}}-${$[2]}`,`\\dfrac{${$[0]}}{${$[3]}}-${$[2]}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=(${$[1]}+${$[2]})${$[3]}\\\\
 ${$[0]}&=${$[1]}${$[3]}+${$[2]}${$[3]}\\\\
  ${$[0]}-${$[2]}${$[3]}&=${$[1]}${$[3]}\\\\
 \\dfrac{${$[0]}-${$[2]}${$[3]}}{${$[3]}}&=${$[1]}
 \\end{aligned}$
    <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et  $${$[2]}$ est 
    $${$[1]}= \\dfrac{${$[0]} -${$[2]}\\times ${$[3]}}{${$[3]}}$ ou plus simplement $${$[1]}=\\dfrac{${$[0]}}{${$[3]}}-${$[2]}$.`):o===10?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$   quatre nombres (avec $${$[1]}+${$[2]}$  non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=(${$[1]}+${$[2]})${$[3]}$.<br>
  Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$.`,a=$[3],r=`\\dfrac{${$[0]}}{${$[1]}+${$[2]}}`,n=`On isole $${$[3]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=(${$[1]}+${$[2]})${$[3]}\\\\
\\dfrac{${$[0]}}{${$[1]}+${$[2]}} &=${$[3]}
 \\end{aligned}$
    <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[2]}$ est 
    $${$[3]}= \\dfrac{${$[0]}}{${$[1]}+${$[2]}}$.`):o===11?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$   quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=(${$[1]}-${$[2]})${$[3]}$.<br>
  Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et  $${$[2]}$.`,a=$[1],r=[`\\dfrac{${$[0]} +${$[2]}\\times ${$[3]}}{${$[3]}}`,`\\dfrac{${$[0]}}{${$[3]}}+${$[2]}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=(${$[1]}-${$[2]})${$[3]}\\\\
 ${$[0]}&=${$[1]}${$[3]}-${$[2]}${$[3]}\\\\
  ${$[0]}+${$[2]}${$[3]}&=${$[1]}${$[3]}\\\\
 \\dfrac{${$[0]}+${$[2]}${$[3]}}{${$[3]}}&=${$[1]}
 \\end{aligned}$
    <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et  $${$[2]}$ est 
    $${$[1]}= \\dfrac{${$[0]} +${$[2]}${$[3]}}{${$[3]}}$ ou plus simplement $${$[1]}=\\dfrac{${$[0]}}{${$[3]}}+${$[2]}$.`):(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$   quatre nombres (avec $${$[3]}$  non nul) vérifiant l'égalité  :`,t=`${e}  $${$[0]}=(${$[1]}-${$[2]})${$[3]}$.<br>
  Exprimer $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$.`,a=$[2],r=[`\\dfrac{-${$[0]} +${$[1]}\\times ${$[3]}}{${$[3]}}`,`${$[1]}-\\dfrac{${$[0]}}{${$[3]}}`],n=`On isole $${$[2]}$ dans un membre de l'égalité :<br> 
  $\\begin{aligned}
 ${$[0]}&=(${$[1]}-${$[2]})${$[3]}\\\\
 ${$[0]}&=${$[1]}${$[3]}-${$[2]}${$[3]}\\\\
  ${$[0]}-${$[1]}${$[3]}&=-${$[2]}${$[3]}\\\\
 \\dfrac{${$[0]}-${$[1]}${$[3]}}{-${$[3]}}&=${$[2]}\\\\
 \\dfrac{-${$[0]}+${$[1]}${$[3]}}{${$[3]}}&=${$[2]}
 \\end{aligned}$
    <br> Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et  $${$[3]}$ est 
    $${$[2]}=  \\dfrac{-${$[0]}+${$[1]}${$[3]}}{${$[3]}}$ ou plus simplement : 
    $${$[2]}= ${$[1]} -\\dfrac{${$[0]}}{${$[3]}}$ .`);break;default:d=[i(["a","b","c","e","f"]),i(["x","y","z","w","v"]),i(["u","v","w","t","r"]),i(["A","B","C","E","F"]),i(["R","S","T","U","V"]),i(["I","J","K","L","M"]),i(["c","g","e","f","h"]),i(["c","m","f","e","a"]),i(["K","L","M","N","P"]),i(["r","s","t","u","a"]),i(["U","V","W","X","R"])],$=g(d),o=u(1,6),o===1?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (avec $${$[3]}-${$[4]}$ non nul) vérifiant l'égalité  :`,t=`${e} $${$[0]}=(${$[1]}+${$[2]})(${$[3]}-${$[4]})$.<br>
       Exprimer $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$.`,a=$[1],r=[`\\dfrac{${$[0]}-${$[2]}${$[3]}+${$[2]}${$[4]}}{${$[3]}-${$[4]}}`,` \\dfrac{${$[0]}}{${$[3]}-${$[4]}}-${$[2]}`,` \\dfrac{${$[0]}-${$[2]}(${$[3]}-${$[4]})}{${$[3]}-${$[4]}}`],n=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
           $\\begin{aligned}
          ${$[0]}&=(${$[1]}+${$[2]})(${$[3]}-${$[4]})\\\\
          ${$[0]}&=${$[1]}${$[3]}-${$[1]}${$[4]}+${$[2]}${$[3]}-${$[2]}${$[4]}\\\\
           ${$[0]}-${$[2]}${$[3]}+${$[2]}${$[4]}&= ${$[1]}(${$[3]}-${$[4]})\\\\
           \\dfrac{${$[0]}-${$[2]}${$[3]}+${$[2]}${$[4]}}{${$[3]}-${$[4]}}&=${$[1]}
                     \\end{aligned}$
          <br> Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[3]}$ et $${$[4]}$ est $${$[1]}=\\dfrac{${$[0]}-${$[2]}${$[3]}+${$[2]}${$[4]}}{${$[3]}-${$[4]}}$ ou plus simplement 
          $${$[1]}= \\dfrac{${$[0]}}{${$[3]}-${$[4]}}-${$[2]}$.`):o===2?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (avec $${$[1]}+${$[2]}$ non nul) vérifiant l'égalité  :`,t=`${e} $${$[0]}=(${$[1]}+${$[2]})(${$[3]}-${$[4]})$.<br>
                Exprimer $${$[4]}$ en fonction de $${$[0]}$, $${$[2]}$, $${$[3]}$ et $${$[1]}$.`,a=$[4],r=[`\\dfrac{${$[0]}-${$[1]}${$[3]}-${$[2]}${$[3]}}{-${$[1]}-${$[2]}}`,`\\dfrac{-${$[0]}+${$[1]}${$[3]}+${$[2]}${$[3]}}{${$[1]}+${$[2]}}`,` \\dfrac{-${$[0]}}{${$[1]}+${$[2]}}+${$[3]}`,`\\dfrac{-${$[0]}+${$[3]}(${$[1]}+${$[2]})}{${$[1]}+${$[2]}}`,`\\dfrac{${$[0]}-${$[3]}(${$[1]}+${$[2]})}{-${$[1]}-${$[2]}}`],n=`On isole $${$[4]}$ dans un membre de l'égalité :<br>
                    $\\begin{aligned}
                   ${$[0]}&=(${$[1]}+${$[2]})(${$[3]}-${$[4]})\\\\
                   ${$[0]}&=${$[1]}${$[3]}-${$[1]}${$[4]}+${$[2]}${$[3]}-${$[2]}${$[4]}\\\\
${$[0]}-${$[1]}${$[3]}-${$[2]}${$[3]}&= -${$[1]}${$[4]}-${$[2]}${$[4]})\\\\
${$[0]}-${$[1]}${$[3]}-${$[2]}${$[3]}&= ${$[4]}(-${$[1]}-${$[2]})\\\\
 \\dfrac{${$[0]}-${$[1]}${$[3]}-${$[2]}${$[3]}}{-${$[1]}-${$[2]}}&=${$[4]}\\\\
 \\dfrac{-${$[0]}+${$[1]}${$[3]}+${$[2]}${$[3]}}{${$[1]}+${$[2]}}&=${$[4]}
                              \\end{aligned}$
                   <br> Une expression de $${$[4]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ est 
                   $${$[4]}=\\dfrac{-${$[0]}+${$[1]}${$[3]}+${$[2]}${$[3]}}{${$[1]}+${$[2]}}$ 
                   ou plus simplement 
                   $${$[4]}= -\\dfrac{${$[0]}}{${$[1]}+${$[2]}}+${$[3]}$.<br>
                   `):o===3?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (avec $${$[3]}-${$[4]}$ et $${$[0]}$ non nuls) vérifiant l'égalité  :`,t=`${e} $${$[0]}=\\dfrac{${$[1]}+${$[2]}}{${$[3]}-${$[4]}}$.<br>
 Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[4]}$.`,a=$[3],r=`\\dfrac{${$[1]}+${$[2]}+${$[0]}${$[4]}}{${$[0]}}`,n=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
 $\\begin{aligned}
   ${$[0]}=&\\dfrac{${$[1]}+${$[2]}}{${$[3]}-${$[4]}}\\\\
    ${$[0]}(${$[3]}-${$[4]})&=${$[1]}+${$[2]}\\\\
   ${$[0]}${$[3]}-${$[0]}${$[4]}&= ${$[1]}+${$[2]}\\\\
   ${$[0]}${$[3]}&=${$[1]}+${$[2]}+${$[0]}${$[4]}\\\\
   ${$[3]}&=\\dfrac{${$[1]}+${$[2]}+${$[0]}${$[4]}}{${$[0]}}
     \\end{aligned}$
     <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[4]}$ est 
       $${$[3]}=\\dfrac{${$[1]}+${$[2]}+${$[0]}${$[4]}}{${$[0]}}$.`):o===4?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (avec $${$[3]}-${$[4]}$ et $${$[0]}$ non nuls) vérifiant l'égalité  :`,t=`${e} $${$[0]}=\\dfrac{${$[1]}+${$[2]}}{${$[3]}-${$[4]}}$.<br>
    Exprimer $${$[4]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$.`,a=$[4],r=[`\\dfrac{${$[1]}+${$[2]}-${$[0]}${$[3]}}{-${$[0]}}`,`\\dfrac{-${$[1]}-${$[2]}+${$[0]}${$[3]}}{${$[0]}}`,`\\dfrac{-${$[1]}-${$[2]}}{${$[0]}}+${$[3]}`],n=`$${r}$On isole $${$[4]}$ dans un membre de l'égalité :<br>
     $\\begin{aligned}
      ${$[0]}=&\\dfrac{${$[1]}+${$[2]}}{${$[3]}-${$[4]}}\\\\
        ${$[0]}(${$[3]}-${$[4]})&=${$[1]}+${$[2]}\\\\
      ${$[0]}${$[3]}-${$[0]}${$[4]}&= ${$[1]}+${$[2]}\\\\
      -${$[0]}${$[4]} &=${$[1]}+${$[2]}-${$[0]}${$[3]}\\\\
      ${$[4]}&=\\dfrac{${$[1]}+${$[2]}-${$[0]}${$[3]}}{-${$[0]}}\\\\
      ${$[4]}&=\\dfrac{-${$[1]}-${$[2]}+${$[0]}${$[3]}}{${$[0]}}
         \\end{aligned}$
         <br> Une expression de $${$[4]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ est 
           $${$[4]}=\\dfrac{-${$[1]}-${$[2]}+${$[0]}${$[3]}}{${$[0]}}$.`):o===5?(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (strictement positifs) vérifiant l'égalité  :`,t=`${e} $${$[0]}=${$[1]}+${$[2]}\\sqrt{${$[3]}+${$[4]}}$.<br>
    Exprimer $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[4]}$.`,a=$[3],r=[`\\dfrac{${$[0]}^2-2${$[0]}${$[1]}+${$[1]}^2}{${$[2]}^2}-${$[4]}`,`(\\dfrac{${$[0]}-${$[1]}}{${$[2]}})^2-${$[4]}`,`$\\dfrac{${$[0]}^2-2${$[0]}${$[1]}+${$[1]}^2-${$[4]}${$[2]}^2}{${$[2]}^2}`,`\\dfrac{(${$[0]}-${$[1]})^2-${$[4]}${$[2]}^2}{${$[2]}^2}`],n=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
 $\\begin{aligned}
  ${$[0]}=&${$[1]}+${$[2]}\\sqrt{${$[3]}+${$[4]}}\\\\
   ${$[0]}-${$[1]}&=${$[2]}\\sqrt{${$[3]}+${$[4]}}\\\\
   \\dfrac{${$[0]}-${$[1]}}{${$[1]}}&= \\sqrt{${$[3]}+${$[4]}}\\\\
   \\left(\\dfrac{${$[0]}-${$[1]}}{${$[1]}}\\right)^2 &=${$[3]}+${$[4]}\\\\
   \\left(\\dfrac{${$[0]}-${$[1]}}{${$[1]}}\\right)^2-${$[4]}&=${$[3]}
\\end{aligned}$
 <br> Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[4]}$ est 
   $${$[3]}=\\left(\\dfrac{${$[0]}-${$[1]}}{${$[1]}}\\right)^2-${$[4]}$ ou par exemple $${$[3]}=\\dfrac{\\left(${$[0]}-${$[1]}\\right)^2-${$[4]}${$[1]}^2}{${$[1]}^2}$.
 `):(e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$, $${$[3]}$ et $${$[4]}$ cinq nombres (strictement positifs) vérifiant l'égalité  :`,t=`${e} $${$[0]}=${$[1]}+${$[2]}\\sqrt{${$[3]}+${$[4]}}$.<br>
     Exprimer $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[3]}$ et $${$[4]}$.`,a=$[2],r=`\\dfrac{${$[0]}-${$[1]}}{\\sqrt{${$[3]}+${$[4]}}}`,n=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
  $\\begin{aligned}
   ${$[0]}=&${$[1]}+${$[2]}\\sqrt{${$[3]}+${$[4]}}\\\\
    ${$[0]}-${$[1]}&=${$[2]}\\sqrt{${$[3]}+${$[4]}}\\\\
    \\dfrac{${$[0]}-${$[1]}}{\\sqrt{${$[3]}+${$[4]}}}&=${$[2]}
 \\end{aligned}$
  <br> Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$, $${$[3]}$ et $${$[4]}$ est 
    $${$[2]}= \\dfrac{${$[0]}-${$[1]}}{\\sqrt{${$[3]}+${$[4]}}}$.
  `);break}t+="<br>"+U(this,s,S.alphanumeric,{texteAvant:v(10)+`$${a} =$`}),O(this,s,{reponse:{value:r}});const f=n.split("=");let p=f[f.length-1];p=p.replace("$","").replace("<br>",""),n="";for(let m=0;m<f.length-1;m++)n+=f[m],n+=m<f.length-2?"=":"";n=n.slice(0,n.length-1)+v(2)+`${c(n[n.length-1]+"="+p)}$`,this.questionJamaisPosee(s,b,o,$.join())&&(this.listeQuestions[s]=t,this.listeCorrections[s]=n,s++),x++}y(this)}}export{F$ as dateDeModifImportante,R$ as dateDePublication,k$ as default,D$ as interactifReady,M$ as interactifType,J$ as refs,V$ as titre,I$ as uuid};
//# sourceMappingURL=2N42-1-PmXenzwt.js.map
