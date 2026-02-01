import{E as q,Y as y,$ as k,r as a,B as e,x as m,a as l,K as B,s as p,n as S,o as I}from"./index-BvuGzI-o.js";import{D as c}from"./vendors/decimal.js-BceHFVC1.js";import{t as L}from"./tableau-BhXMMYON.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-K3nUGUh4.js";import"./json/refToUuidCH-DBCD2E_6.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-OtHQ7xZ3.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./colors-vbveSA7f.js";import"./fixeBordures-BSnKuTIe.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./PointAbstrait-Cz1GEocE.js";import"./polygones-89tGuAkc.js";import"./vendors/earcut-jJVragJp.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./pattern-CVTyZw4v.js";import"./segmentsVecteurs-BYbXXoZp.js";import"./vendors/roughjs-CycZv-lV.js";import"./textes-Dv2jXPNF.js";import"./Polyline-C6hvR_V-.js";const rt="Calculer des probabilités avec des unions et intersections d'événements",$t="25/05/2024",nt=!0,st="mathLive",ot="ea35b",at={"fr-fr":["2S30-6"],"fr-ch":[]};class pt extends q{constructor(){super(),this.sup=7,this.nbQuestions=1,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : On cherche P(A union B)","2 : On cherche P(A inter B)","3 : On cherche P(A)","4 : Avec des événements incompatibles","5 : Avec des événements contraires","6 : Avec un tableau","7 : Mélange"].join(`
`)]}nouvelleVersion(){const T=y({saisie:this.sup,min:1,max:6,melange:7,defaut:7,nbQuestions:this.nbQuestions}),v=k(T,this.nbQuestions);for(let n=0,h=0;n<this.nbQuestions&&h<50;){const C=a(1,20);let i="",o="",u="",r,t;r=new c(a(1,99)).div(100),t=new c(a(1,99)).div(100);let $;$=new c(a(1,99)).div(100);let s=r.add(t).sub($);for(;s.greaterThan(.99)===!0||s.lessThan(.01)===!0||$.greaterThan(r.sub(.01))===!0||$.greaterThan(t.sub(.01))===!0;)r=new c(a(1,99)).div(100),t=new c(a(1,99)).div(100),$=new c(a(1,99)).div(100),s=r.add(t).sub($);switch(v[n]){case 1:i=e(s,2),o=`Soient $A$ et $B$ deux événements vérifiant :  <br>
           $\\bullet$  $P(A)=${e(r,2)}$ ${p(4)} $\\bullet$  $P(B)=${e(t,2)}$ ${p(4)}
           $\\bullet$  $P(A\\cap B)=${e($,2)}$.<br>
            Calculer $P(A\\cup B)$.
           `,u=`On sait que $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.<br><br>
            $\\begin{aligned} 
            P(A\\cup B)&=P(A)+P(B)-P(A\\cap B)\\\\
            &=${e(r,2)}+${e(t,2)}-${e($,2)}\\\\
            &=${i}
            \\end{aligned}$<br>
            Ainsi $P(A\\cup B)=${m(i)}$.`,o+="<br>"+l(this,n,B.clavierDeBase,{texteAvant:" $P(A\\cup B)=$"});break;case 2:i=e($,2),o=`Soient $A$ et $B$ deux événements vérifiant :  <br>
         $\\bullet$  $P(A)=${e(r,2)}$  ${p(4)} $\\bullet$  $P(B)=${e(t,2)}$  ${p(4)} $\\bullet$  $P(A\\cup B)=${e(s,2)}$.<br>
          Calculer $P(A\\cap B)$.
         `,u=`On sait que $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.<br><br>
          $\\begin{aligned} 
          P(A\\cup B)&=P(A)+P(B)-P(A\\cap B)\\\\
          ${e(s,2)} &=${e(r,2)}+${e(t,2)}-P(A\\cap B)\\\\
          P(A\\cap B) &=${e(r,2)}+${e(t,2)}-${e(s,2)}\\\\
          P(A\\cap B)&=${i}
          \\end{aligned}$<br>
          Ainsi $P(A\\cap B)=${m(i)}$.`,o+="<br>"+l(this,n,B.clavierDeBase,{texteAvant:"$P(A\\cap B)=$"});break;case 3:i=e(r,2),o=`Soient $A$ et $B$ deux événements vérifiant :  <br>
           $\\bullet$  $P(B)=${e(t,2)}$  ${p(4)} $\\bullet$  $P(A\\cap B)=${e($,2)}$  ${p(4)}$\\bullet$  $P(A\\cup B)=${e(s,2)}$.<br>
            Calculer $P(A)$.
           `,u=`On sait que $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.<br><br>
            $\\begin{aligned} 
            P(A\\cup B)&=P(A)+P(B)-P(A\\cap B)\\\\
            ${e(s,2)}&=P(A)+${e(t,2)}-${e($,2)}\\\\
            P(A)&=${e(s,2)}-${e(t,2)}+${e($,2)}\\\\
            &=${i}
            \\end{aligned}$<br>
            Ainsi $P(A)=${m(i)}$.`,o+="<br>"+l(this,n,B.clavierDeBase,{texteAvant:"$P(A)=$"});break;case 4:{const b=new c(a(1,40)).div(100),A=new c(a(1,40)).div(100),P=b.add(A);i=e(P,2),o=`Soient $A$ et $B$ deux événements incompatibles vérifiant :  <br>
          $\\bullet$  $P(A)=${e(b,2)}$ ${p(4)} $\\bullet$  $P(B)=${e(A,2)}$.<br>
           Calculer $P(A\\cup B)$.`,u=`Lorsque deux événements sont incompatibles,  $P(A\\cup B)=P(A)+P(B)$.<br><br>
          $\\begin{aligned} 
            P(A\\cup B)&=P(A)+P(B)\\\\
            P(A\\cup B)&=${e(b,2)}+${e(A,2)}\\\\
            P(A\\cup B) &=${i}           
            \\end{aligned}$<br>
            Ainsi $P(A\\cup B)=${m(i)}$.`,o+="<br>"+l(this,n,B.clavierDeBase,{texteAvant:"$P(A\\cup B)=$"})}break;case 5:{const b=r.mul(-1).add(1),A=t.mul(-1).add(1);i=e(s,2),o=`Soient $A$ et $B$ deux événements  vérifiant :  <br>
             $\\bullet$  $P(\\bar{A})=${e(b,2)}$  ${p(4)} $\\bullet$  $P(\\bar{B})=${e(A,2)}$  ${p(4)} $\\bullet$  $P(A\\cap B)=${e($,2)}$.<br>
              Calculer $P(A\\cup B)$.`,u=`On sait que $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.<br><br>
             Or $P(A)=1-P(\\bar{A})=${e(r,2)}$ et $P(B)=1-P(\\bar{B})=${e(t,2)}$.<br>
             <br>$\\begin{aligned} 
             P(A\\cup B)&=P(A)+P(B)-P(A\\cap B)\\\\
             P(A\\cup B)&=${e(r,2)}+${e(t,2)}-${e($,2)}\\\\
             P(A\\cup B)&=${e(s,2)}
             \\end{aligned}$<br>
             Ainsi $P(A\\cup B)=${m(i)}$.`,o+="<br>"+l(this,n,B.clavierDeBase,{texteAvant:"$P(A\\cup B)=$"})}break;case 6:{const b=r.mul(-1).add(1),A=t.mul(-1).add(1),P=r.mul(100),x=t.mul(100),d=$.mul(100),g=x.sub(d),D=P.sub(d),f=b.mul(100),w=A.mul(100),O=f.sub(g),Q=L(["","A","\\overline{A}","\\text{Total}"],["B","\\overline{B}","\\text{Total}"],[`${e(d,2)}`,`${e(g,2)}`,`${e(x,2)}`,`${e(D,2)}`,`${e(O,2)}`,`${e(w,2)}`,`${e(P,2)}`,`${e(f,2)}`,100]);i=e(s,2),o=`Voici un tableau d'effectifs concernant deux événements $A$ et $B$ :  <br>
            ${Q}
              
                Calculer $P(A\\cup B)$.`,u=`On sait que $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.<br><br>
               <br>$\\begin{aligned} 
               P(A\\cup B)&=P(A)+P(B)-P(A\\cap B)\\\\
               P(A\\cup B)&=${e(r,2)}+${e(t,2)}-${e($,2)}\\\\
               P(A\\cup B)&=${e(s,2)}
               \\end{aligned}$<br>
               Ainsi $P(A\\cup B)=${m(i)}$.`,o+="<br>"+l(this,n,B.clavierDeBase,{texteAvant:"$P(A\\cup B)=$"})}break}S(this,n,{reponse:{value:i}}),this.questionJamaisPosee(n,v[n],C)&&(this.listeQuestions[n]=o,this.listeCorrections[n]=u,n++),h++}I(this)}}export{$t as dateDePublication,pt as default,nt as interactifReady,st as interactifType,at as refs,rt as titre,ot as uuid};
//# sourceMappingURL=2S30-6-BARCid3F.js.map
