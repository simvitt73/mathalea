import{E as B,r as d,a1 as f,x as o,o as O}from"./index-CMKaCP9B.js";import{b as c}from"./style-mQF2O0cc.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const At="Démontrer l'équivalence de deux programmes de calcul",Ft="21/02/2022",It="",Jt="501f9",Lt={"fr-fr":["4L12"],"fr-ch":["11FA4-1"]};class Vt extends B{constructor(){super(),this.nbQuestions=1,this.nbCols=2,this.nbColsCorr=2,this.video="https://www.youtube.com/watch?v=-iw4OkMhgCA"}nouvelleVersion(){for(let e=0,l,b,i,p,u,x,a,m,g,h,q,C=0;e<this.nbQuestions&&C<50;){const t=d(-9,9,[0]),r=d(2,6),$=d(-9,9,[0,-1*r*t]),s=r,n=t*r+$,v=d(-9,9),P=d(-9,9,[v]);s===2?i="doubler":s===3?i="tripler":i=`multiplier par $${s}$`,n<0?(p=`enlever $${-n}$`,a=""):(p=`ajouter $${n}$`,a="+"),t<0?(u=`soustraire $${-t}$`,m=""):(u=`ajouter $${t}$`,m="+"),$<0?(x=`soustraire $${-$}$`,g=""):(x=`ajouter $${$}$`,g="+"),t*r<0?h="":h="+",t*r+$<0?q="":q="+",l=`On considère les programmes de calcul suivants :<br><br>
      ${c("Programme A :")}<br>
      - choisir un nombre,<br>
      - le ${i},<br>
      - puis ${p}.<br><br>
      ${c("Programme B :")}<br>
      - choisir un nombre,<br>
      - lui ${u},<br>
      - multiplier le résultat par ${r},<br>
      - ${x}.<br><br>
      ${f("1)")} Tester ces programmes avec le nombre $${v}$ et en choisissant un autre nombre quelconque. Émettre une conjecture.<br>
      ${f("2)")} Prouver cette conjecture.`,b=`${f("1)")} ${this.testeProgrammesDeCalcul(v,s,n,t,r,$,a,m,g)}
      Testons ces deux programmes de calcul avec le nombre $${P}$ par exemple :<br>
      ${this.testeProgrammesDeCalcul(P,s,n,t,r,$,a,m,g)}
      À chaque fois, le programme A a donné le même résultat que le programme B.<br>
      On conjecture que le programme A donnera le même résultat que le programme B pour tous les nombres.<br><br>
      ${f("2)")} Appliquons ces deux programmes de calcul à un nombre (n'importe lequel) qu'on va noter $${o("\\textit{x}")}$ :<br>
      ${c("Programme A :")}<br>
      $${o("\\textit{x}")} \\times ${s} = ${s} ${o("\\textit{x}")}$<br>
      $${s} ${o("\\textit{x}")} ${a} ${n} = ${o(s+" \\textit{x} "+a+" "+n)}$<br><br>
      ${c("Programme B :")}<br>
      $${o("\\textit{x}")} ${m} ${t} = ${o("\\textit{x}")} ${m} ${t}$<br>
      $(${o("\\textit{x}")} ${m} ${t}) \\times ${r} = ${o("\\textit{x}")} \\times ${r} ${m} ${t} \\times ${r} = ${r} ${o("\\textit{x}")} ${h} ${t*r}$<br>
      $${r} ${o("\\textit{x}")} ${h} ${t*r} ${g} ${$} = ${o(r+" \\textit{x} "+q+" "+(t*r+$))}$<br><br>
      
      On a obtenu le même résultat avec les deux programmes de calcul.<br>
      Comme on peut remplacer $${o("\\textit{x}")}$ par n'importe quel nombre, on a donc montré qu'on obtient le même résultat avec les deux programmes de calcul pour n'importe quel nombre.`,this.questionJamaisPosee(e,s,n,t,$)&&(this.listeQuestions[e]=l,this.listeCorrections[e]=b,e++),C++}O(this)}testeProgrammesDeCalcul(e,l,b,i,p,u,x,a,m){return`${c("Programme A :")}<br>
  $${e} \\times ${l} = ${e*l}$ <br>
  $${e*l} ${x} ${b} = ${o(e*l+b)}$ <br><br>
  ${c("Programme B :")}<br>
  $${e} ${a} ${i} = ${e+i}$ <br>
  $${e+i} \\times ${p} = ${(e+i)*p}$ <br>
  $${(e+i)*p} ${m} ${u} = ${o((e+i)*p+u)}$ <br><br>`}}export{It as dateDeModifImportante,Ft as dateDePublication,Vt as default,Lt as refs,At as titre,Jt as uuid};
//# sourceMappingURL=4L12-PTO9UIT_.js.map
