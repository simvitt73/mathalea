import{E as A,Y as C,$ as N,p as q,r as u,n as c,B as m,a_ as _,x as p,y as g,D as f,m as b,a as D,K as L,o as w}from"./index-Dkwu26bg.js";import{D as v}from"./vendors/decimal.js-BceHFVC1.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Pe="Calculer les termes d'une suite arithmétique ou géométrique",je=!0,Ke="mathLive",Ge="29/09/2024",Je="3ae4a",Re={"fr-fr":["1AL11-4"],"fr-ch":[]};class Ve extends A{constructor(){super(),this.nbQuestions=1,this.sup="7",this.spacing=1.5,this.spacingCorr=1.5,this.correctionDetaillee=!1,this.correctionDetailleeDisponible=!0,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Suite arithmétique avec premier terme u_0","2 : Suite arithmétique avec premier terme u_1","3 : Suite arithmétique avec premier terme u_p","4 : Suite géométrique avec premier terme u_1","5 : Suite géométrique avec premier terme u_1","6 : Suite géométrique avec premier terme u_p","7 : Mélange"].join(`
`)]}nouvelleVersion(){const S=C({saisie:this.sup,min:1,max:6,melange:7,defaut:7,nbQuestions:this.nbQuestions}),h=N(S,this.nbQuestions);for(let a=0,x=0;a<this.nbQuestions&&x<50;){let l="",r="",s;const e=q(["u","v","w","t"]);let $,i,t,n,o,d;switch(h[a]){case 1:t=u(-10,10),$=u(5,15),i=u(-10,10,0),s=m(t+$*i,0),c(this,a,{reponse:{value:s}}),l=`$(${e}_n)$ est une suite arithmétique de raison $r=${i}$ et de premier terme $${e}_0=${t}$.<br>
          Calculer $${e}_{${$}}$.`,this.correctionDetaillee?r="La forme explicite d'une suite arithmétique $(u_n)$ de raison $r$ et de premier terme $u_0$ est : $u_n=u_0+n\\times r$.<br>":r="",r+=`La suite $(${e}_n)$ est arithmétique de raison $r=${i}$ et de premier terme $${e}_0=${t}$.<br>
          On en déduit que pour tout $n\\in\\mathbb{N}$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_0+n\\times r\\\\
          ${e}_n&=${t}+n\\times ${_(i)}\\\\
           ${e}_n&=${t===0?`${g(i)}n`:`${t}${f(i)}n`}
           \\end{aligned}$
          <br>Ainsi, `,t===0?i===1||i===-1?r+=`$${e}_n=${p(s)}$.`:r+=`$${e}_{${$}}=${i}\\times ${$} =${p(s)}$.`:i===1||i===-1?r+=`$${e}_{${$}}=${t}${i===1?`${b($)}`:`${-$}`} =${p(s)}$.`:r+=`$${e}_{${$}}=${t}${b(i)}\\times ${$} =${p(s)}$.`;break;case 2:t=u(-10,10),$=u(5,15),i=u(-10,10,0),s=m(t-i+$*i,0),c(this,a,{reponse:{value:s}}),l=`$(${e}_n)$ est une suite arithmétique de raison $r=${i}$ et de premier terme $${e}_1=${t}$.<br>
          Calculer $${e}_{${$}}$.`,this.correctionDetaillee?r="La forme explicite d'une suite arithmétique $(u_n)$ de raison $r$ et de premier terme $u_1$ est : $u_n=u_1+(n-1)\\times r$.<br>":r="",r+=`
          La suite $(${e}_n)$ est arithmétique de raison $r=${i}$ et de premier terme $${e}_1=${t}$.<br>
          On en déduit que pour tout $n\\in\\mathbb{N}^*$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_1+(n-1)\\times r\\\\
          ${e}_n&=${t}+(n-1)\\times ${_(i)}\\\\
           ${e}_n&=${t-i===0?`${g(i)}n$.`:`${t-i}${f(i)}n`}
           \\end{aligned}$
          <br>   
          Ainsi, `,t-i===0?i===1||i===-1?r+=`$${e}_n=${p(s)}$.`:r+=`$${e}_{${$}}=${i}\\times ${$} =${p(s)}$.`:i===1||i===-1?r+=`$${e}_{${$}}=${t-i}${i===1?`${b($)}`:`${-$}`} =${p(s)}$.`:r+=`$${e}_{${$}}=${t-i}${b(i)}\\times ${$} =${p(s)}$.`;break;case 3:t=u(-10,10),$=u(9,15),i=u(-10,10,0),o=u(2,4),s=m(t+($-o)*i,0),c(this,a,{reponse:{value:s}}),l=`$(${e}_n)$ est une suite arithmétique de raison $r=${i}$ avec $${e}_${o}=${t}$.<br>
            Calculer $${e}_{${$}}$.`,this.correctionDetaillee?r="Si $(u_n)$ est une suite arithmétique  de raison $r$, alors pour tout entier naturel $n$ et $p$, on a $u_n=u_p+(n-p)\\times r$.<br>":r="",r+=`
              La suite $(${e}_n)$ est arithmétique de raison $r=${i}$ avec $${e}_${o}=${t}$.<br>
            On en déduit que pour tout $n\\in\\mathbb{N}$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_${o}+(n-${o})\\times r\\\\
          ${e}_n&=${t}+(n-${o})\\times ${_(i)}\\\\
          ${e}_n&=${t-o*i===0?`=${g(i)}n`:`${t-o*i}${f(i)}n`} 
           \\end{aligned}$
          <br>   
          Ainsi, `,t-o*i===0?i===1||i===-1?r+=`$${e}_n=${p(s)}$.`:r+=`$${e}_{${$}}=${i}\\times ${$} =${p(s)}$.`:i===1||i===-1?r+=`$${e}_{${$}}=${t-o*i}${i===1?`${b($)}`:`${-$}`} =${p(s)}$.`:r+=`$${e}_{${$}}=${t-o*i}${b(i)}\\times ${$} =${p(s)}$.`;break;case 4:t=u(-10,10,0),$=u(5,10),n=new v(u(8,29,[10,20])).div(10).mul(q([-1,1])),d=n.pow($).mul(t),s=d.toFixed(1),c(this,a,{reponse:{value:s}}),l=`$(${e}_n)$ est une suite géométrique de raison $q=${m(n,1)}$ et de premier terme $${e}_0=${t}$.<br>
            Calculer $${e}_{${$}}$.`,l+="<br>Donner la valeur arrondie au dixième.",this.correctionDetaillee?r="La forme explicite d'une suite géométrique $(u_n)$ de raison $q$ et de premier terme $u_0$ est : $u_n=u_0\\times q^n$.<br>":r="",r+=`La suite $(${e}_n)$ est géométrique de raison $q=${m(n,1)}$ et de premier terme $${e}_0=${t}$.<br>
          On en déduit que pour tout $n\\in\\mathbb{N}$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_0\\times q^n\\\\
          ${e}_n&=${t}\\times ${_(m(n,1))}^n\\\\
           ${e}_{${$}}&=${t===1?`${_(m(n,1))}^{${$}}`:`${t}\\times ${_(m(n,1))}^{${$}}`}
           \\end{aligned}$
          <br>Ainsi, $${e}_{${$}}\\simeq${p(m(d,1))}$.`;break;case 5:t=u(-10,10,0),$=u(5,10),n=new v(u(8,29,[10,20])).div(10).mul(q([-1,1])),d=n.pow($-1).mul(t),s=d.toFixed(1),c(this,a,{reponse:{value:s}}),l=`$(${e}_n)$ est une suite géométrique de raison $q=${m(n,1)}$ et de premier terme $${e}_1=${t}$.<br>
            Calculer $${e}_{${$}}$.`,l+="<br>Donner la valeur arrondie au dixième.",this.correctionDetaillee?r="La forme explicite d'une suite géométrique $(u_n)$ de raison $q$ et de premier terme $u_1$ est : $u_n=u_1\\times q^{n-1}$.<br>":r="",r+=`La suite $(${e}_n)$ est géométrique de raison $q=${m(n,1)}$ 
          et de premier terme $${e}_1=${t}$.<br>
          On en déduit que pour tout $n\\in\\mathbb{N}^*$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_1\\times q^{n-1}\\\\
          ${e}_n&=${t}\\times ${_(m(n,1))}^{n-1}\\\\
           ${e}_{${$}}&=${t===1?`${_(m(n,1))}^{${$-1}}`:`${t}\\times ${_(m(n,1))}^{${$-1}}`}
           \\end{aligned}$
          <br>Ainsi, $${e}_{${$}}\\simeq${p(m(d,1))}$.`;break;case 6:t=u(-10,10,0),$=u(9,11),o=u(2,4),n=new v(u(8,29,[10,20])).div(10).mul(q([-1,1])),d=n.pow($-o).mul(t),s=d.toFixed(1),c(this,a,{reponse:{value:s}}),l=`$(${e}_n)$ est une suite géométrique de raison $q=${m(n,1)}$ avec $${e}_${o}=${t}$.<br>
            Calculer $${e}_{${$}}$.`,l+="<br>Donner la valeur arrondie au dixième.",this.correctionDetaillee?r="Si $(u_n)$ est une suite géométrique  de raison $q$, alors pour tout entier naturel $n$ et $p$, on a $u_n=u_p\\times q^{n-p}$.<br>":r="",r+=` La suite $(${e}_n)$ est géométrique de raison $q=${m(n,1)}$ avec $${e}_${o}=${t}$.<br>
          On en déduit que pour tout $n\\in\\mathbb{N}$,  <br>
          $\\begin{aligned}
          ${e}_n&=${e}_{${o}}\\times q^{n-${o}}\\\\
          ${e}_n&=${t}\\times ${_(m(n,1))}^{n-${o}}\\\\
           ${e}_{${$}}&=${t===1?`${_(m(n,1))}^{${$-o}}`:`${t}\\times ${_(m(n,1))}^{${$-o}}`}
           \\end{aligned}$
          <br>Ainsi, $${e}_{${$}}\\simeq${p(m(d,1))}$.`;break}h[a]===1||h[a]===2||h[a]===3?l+="<br>"+D(this,a,L.clavierDeBase,{texteAvant:`$${e}_{${$}}=$`}):l+="<br>"+D(this,a,L.clavierDeBase,{texteAvant:`$${e}_{${$}}\\simeq$`}),this.questionJamaisPosee(a,l)&&(this.listeQuestions[a]=l,this.listeCorrections[a]=r,a++),x++}w(this)}}export{Ge as dateDePublication,Ve as default,je as interactifReady,Ke as interactifType,Re as refs,Pe as titre,Je as uuid};
//# sourceMappingURL=1AL11-4-RZ4-k8ZW.js.map
