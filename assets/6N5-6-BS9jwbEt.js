var k=Object.defineProperty;var O=(x,f,m)=>f in x?k(x,f,{enumerable:!0,configurable:!0,writable:!0,value:m}):x[f]=m;var A=(x,f,m)=>O(x,typeof f!="symbol"?f+"":f,m);import{E as C,Y as Q,r as p,P as h,ar as d,a as Y,K as B,B as c,x as w,z as L,n as M,o as H}from"./index-Bl1vqpvV.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Pe="Résoudre des problèmes (impliquant diverses opérations)",je=!0,Re="AMCHybride",We=!0,Ke="mathLive",Ie="24/05/2025",Je="72e9d",Ue={"fr-fr":["6N5-6"],"fr-2016":["6C12-6"],"fr-ch":[]};class Xe extends C{constructor(){super();A(this,"generateBalanceTikz",(m,b,l)=>`
\\begin{tikzpicture}[baseline={(current bounding box.north)}, scale=1]

\\fill[gray!60] (2,-0.8) rectangle (8,-0.6); % barre horizontale
\\fill[gray!60] (1.9,-0.8) rectangle (2.1,-0.2); % barre horizontale
\\fill[gray!60] (7.9,-0.8) rectangle (8.1,-0.2); % barre horizontale

% Barres et socle
\\fill[gray!70] (0,-0.4) rectangle (4,-0.2); % plateau gauche
\\fill[gray!70] (6,-0.4) rectangle (10,-0.2); % plateau droit
\\fill[gray!70] (4.8,-1) rectangle (5.2,-0); % support central
\\fill[gray!50] (4.7,0.2) -- (5.3,0.2) -- (5,.9) -- cycle; % base triangle

% Définir une variable locale à tikzpicture
\\pgfmathsetmacro{\\boules}{${m}}
\\pgfmathsetmacro{\\etoiles}{${b}}
\\pgfmathsetmacro{\\masse}{${l}}

% Objets sur plateau gauche
\\ifthenelse{\\boules>0}{
\\ifthenelse{\\boules<11}{
% forme triangulaire
\\foreach \\i in {0,...,\\numexpr\\boules-1\\relax} {
  \\ifthenelse{\\i<4}{
    \\fill (0.3+0.4*\\i,0) circle (0.2);
  }{
    \\ifthenelse{\\i<7}{
      \\fill (0.3+0.4*\\i-1.4,0.4) circle (0.2);
    }{
      \\ifthenelse{\\i<9}{
        \\fill (0.3+0.4*\\i-2.4,0.8) circle (0.2);
      }{
        \\fill (0.3+0.4*\\i-3,1.2) circle (0.2);
      }
    }
  }
} % fin de forme triangulaire forEach
}{
% forme carrée
\\foreach \\i in {0,...,\\numexpr\\boules-1\\relax} {
  \\ifthenelse{\\i<4}{
    \\fill (0.3+0.4*\\i,0) circle (0.2);
  }{
    \\ifthenelse{\\i<8}{
      \\fill (0.3+0.4*\\i-1.6,0.4) circle (0.2);
    }{
      \\ifthenelse{\\i<12}{
        \\fill (0.3+0.4*\\i-3.2,0.8) circle (0.2);
      }{
        \\ifthenelse{\\i<16}{
          \\fill (0.3+0.4*\\i-4.8,1.2) circle (0.2);
         }{
          \\fill (0.3+0.4*\\i-6.4,1.6) circle (0.2);
        }
      }
    }
  }
} % fin de forme carrée forEach
}
}{}

\\ifthenelse{\\etoiles>0}{
\\ifthenelse{\\etoiles<11}{
% forme triangulaire
\\foreach \\i in {0,...,\\numexpr\\etoiles-1\\relax} {
  \\ifthenelse{\\i<4}{
    \\node at (2.5+0.4*\\i,0) {\\textcolor{orange}{\\Large \\ding{72}}};
  }{
    \\ifthenelse{\\i<7}{
      \\node at (2.5+0.4*\\i-1.4,0.4) {\\textcolor{orange}{\\Large \\ding{72}}};
    }{
      \\ifthenelse{\\i<9}{
        \\node at (2.5+0.4*\\i-2.4,0.8) {\\textcolor{orange}{\\Large \\ding{72}}};
      }{
        \\node at (2.5+0.4*\\i-3,1.2) {\\textcolor{orange}{\\Large \\ding{72}}};
      }
    }
  }
} % fin de forme triangulaire
}{
% forme carrée
\\foreach \\i in {0,...,\\numexpr\\etoiles-1\\relax} {
  \\ifthenelse{\\i<4}{
    \\node at (2.5+0.4*\\i,0) {\\textcolor{orange}{\\Large \\ding{72}}};
  }{
    \\ifthenelse{\\i<8}{
      \\node at (2.5+0.4*\\i-1.6,0.4) {\\textcolor{orange}{\\Large \\ding{72}}};
    }{
      \\ifthenelse{\\i<12}{
        \\node at (2.5+0.4*\\i-3.2,0.8) {\\textcolor{orange}{\\Large \\ding{72}}};
      }{
        \\ifthenelse{\\i<16}{
          \\node at (2.5+0.4*\\i-4.8,1.2) {\\textcolor{orange}{\\Large \\ding{72}}};
         }{
          \\node at (2.5+0.4*\\i-6.4,1.6) {\\textcolor{orange}{\\Large \\ding{72}}};;
        }
      }
    }
  }
} % fin de forme carrée
}
}{}

% Masse à droite
\\fill[yellow] (7.4,-0.2) rectangle +(1.2,1);
\\pgfkeys{/pgf/number format/set decimal separator={,}}
\\pgfkeys{/pgf/number format/set thousands separator={\\,}}
\\node[black, font={\\small},anchor=center] at (8,0.3) {\\pgfmathprintnumber{\\masse}\\,g};

\\end{tikzpicture}`);this.consigne="On a réalisé deux pesées comme indiqué sur les schémas.",this.nbQuestions=4,this.sup=1,this.sup2=1,this.besoinFormulaireNumerique=["Niveau de difficulté",3,`1 : Soustraction et division
2 :Multiplication, soustraction et division
3 : Mélange`],this.besoinFormulaire2Numerique=["Précision de la masse",4,`1 : à la dizaine
2 :à l'unité
3 : au dixième
4 : Mélange`]}nouvelleVersion(){const m=Q({max:2,defaut:1,melange:3,nbQuestions:this.nbQuestions,saisie:this.sup}),b=Q({max:3,defaut:1,melange:4,nbQuestions:this.nbQuestions,saisie:this.sup2});for(let l=0,g,o,S=0;l<this.nbQuestions&&S<50;){const u=b[l],s=p(2,5)*10+p(1,9)*(u>=2?1:0)+p(1,9)*.1*(u>=3?1:0),n=p(2,5,[Math.floor(s/10)])*10+p(1,9)*(u>=2?1:0)+p(1,9)*.1*(u>=3?1:0),i=p(2,5),r=p(2,5,[i]);switch(m[l]){case 1:{const a=p(0,1)===0?[p(2,4),1]:[1,p(2,4)],$=this.generateBalance(r,i,n*r+s*i),e=this.generateBalance(r*a[0],i*a[1],n*r*a[0]+s*i*a[1]),t=p(0,1);g=(t===0?$+(h.isHtml?"":"<br>")+e:e+(h.isHtml?"":"<br>")+$)+"<br>",g+=`${d(0)} Quelle est la masse d'une ${a[0]===1?"étoile":"boule"} en grammes?<br>`,g+=this.interactif&&!h.isAmc?Y(this,l*2,B.clavierDeBase,{texteApres:" g"})+"<br>":"",g+=`${d(1)} Quelle est la masse d'une ${a[0]===1?"boule":"étoile"} en grammes?<br>`,g+=this.interactif&&!h.isAmc?Y(this,l*2+1,B.clavierDeBase,{texteApres:" g"})+"<br>":"",o=`${d(0)} Si on fait la soustraction entre les deux balances, ${a[0]===1?"les boules sont enlevées":"les étoiles sont enlevées"}.<br>`,o+=this.generateBalance(r*a[0]-r,i*a[1]-i,n*(r*a[0]-r)+s*(i*a[1]-i))+"<br>",o+=`On divise ensuite par le nombre ${a[0]===1?"d'étoiles restantes":"de boules restantes"} pour trouver la masse d'une ${a[0]===1?"étoile":"boule"}.<br>`,o+=`$ ${c(n*(r*a[0]-r)+s*(i*a[1]-i))} \\div ${a[0]===1?i*a[1]-i:r*a[0]-r} = ${c(a[0]===1?s:n)}$ g.<br>`,o+=`La masse d'une ${a[0]===1?"étoile":"boule"} est de $${w(c(a[0]===1?s:n))}$ g.<br>`,o+=`${d(1)} Si on reprend la ${t===0?"première":"deuxième"} balance<br>`,o+=$+"<br>",o+=`On supprime les ${a[0]===1?i:r} ${a[0]===1?"étoiles":"boules"} à gauche et on supprime à droite $${a[0]===1?i:r} \\times ${a[0]===1?c(s):c(n)} = ${a[0]===1?c(i*s):c(r*n)}$ g.<br>`,o+=this.generateBalance(a[0]===1?r:0,a[0]===1?0:i,a[0]===1?r*n:i*s)+"<br>",o+=`On en déduit que  ${a[0]===1?r:i} ${a[0]===1?"boules":"étoiles"} pèsent $${c(a[0]===1?n*r:s*i)}$ g.<br>`,o+=`On divise ensuite ${a[0]===1?r:i} pour trouver la masse d'une ${a[0]===1?"boule":"étoile"}.<br>`,o+=`$ ${c(a[0]===1?n*r:s*i)} \\div ${a[0]===1?r:i} = ${c(a[0]===1?n:s)}$ g.<br>`,o+=`La masse d'une ${a[0]===1?"boule":"étoile"} est de $${w(c(a[0]===1?n:s))}$ g.<br>`,h.isAmc?(L(this,l*2,a[0]===1?s:n),L(this,l*2+1,a[0]===1?n:s)):(M(this,l*2,{reponse:{value:a[0]===1?s:n}}),M(this,l*2+1,{reponse:{value:a[0]===1?n:s}}));break}case 2:{const a=p(2,4),$=p(2,4,[a]),e=p(0,1)===0?[a,$]:[$,a],t=e[0]<e[1]?1:0,v=this.generateBalance(r,i,n*r+s*i),z=this.generateBalance(r*e[0],i*e[1],n*r*e[0]+s*i*e[1]),y=p(0,1);g=(y?z+(h.isHtml?"":"<br>")+v:v+(h.isHtml?"":"<br>")+z)+"<br>",g+=`${d(0)} Quelle est la masse d'une ${t===1?"étoile":"boule"} en grammes?<br>`,g+=this.interactif&&!h.isAmc?Y(this,l*2,B.clavierDeBase,{texteApres:" g"})+"<br>":"",g+=`${d(1)} Quelle est la masse d'une ${t===0?"étoile":"boule"} en grammes?<br>`,g+=this.interactif&&!h.isAmc?Y(this,l*2+1,B.clavierDeBase,{texteApres:" g"})+"<br>":"",o=`${d(0)} Si on multiplie la ${y===0?"première":"deuxième"} par ${t===1?e[0]:e[1]} alors on obtient la même quantité ${t===1?"de boules":"d'étoiles"}.<br>`,o+=this.generateBalance(r*(t===1?e[0]:e[1]),i*(t===1?e[0]:e[1]),n*r*(t===1?e[0]:e[1])+s*i*(t===1?e[0]:e[1]))+"<br>",o+=`La ${y===1?"première":"deuxième"} étant: <br>`,o+=z+"<br>",o+=`Si on fait la soustraction entre les deux balances, ${t===1?"les boules sont enlevées":"les étoiles sont enlevées"}.<br>`,o+=this.generateBalance(Math.abs(r*(t===1?e[0]:e[1])-r*e[0]),Math.abs(i*(t===1?e[0]:e[1])-i*e[1]),Math.abs(n*(r*(t===1?e[0]:e[1])-r*e[0])+s*(i*(t===1?e[0]:e[1])-i*e[1])))+"<br>",o+=`On divise ensuite par le nombre ${t===1?"d'étoiles restantes":"de boules restantes"} pour trouver la masse d'une ${t===1?"étoile":"boule"}.<br>`,o+=`$ ${c(Math.abs(n*(r*(t===1?e[0]:e[1])-r*e[0])+s*(i*(t===1?e[0]:e[1])-i*e[1])))} \\div ${Math.abs(t===1?i*e[1]-i*e[0]:r*e[0]-r*e[1])} = ${t===1?c(s):c(n)}$ g.<br>`,o+=`La masse d'une ${t===1?"étoile":"boule"} est de $${w(c(t===1?s:n))}$ g.<br>`,o+=`${d(1)} Si on reprend la ${y===0?"première":"deuxième"} balance<br>`,o+=v+"<br>",o+=`On supprime les ${t===0?r:i} ${t===0?" boules":" étoiles"} à gauche et on supprime à droite $${t===0?r:i} \\times ${t===0?c(n):c(s)} = ${t===0?c(r*n):c(i*s)}$ g.<br>`,o+=this.generateBalance(t===1?r:0,t===1?0:i,t===1?r*n:i*s)+"<br>",o+=`On en déduit que  ${t===1?r:i} ${t===1?"boules":"étoiles"} pèsent $${c(t===1?n*r:s*i)}$ g.<br>`,o+=`On divise ensuite par ${t===1?r:i} pour trouver la masse d'une ${t===1?"boule":"étoile"}.<br>`,o+=`$ ${c(t===1?n*r:s*i)} \\div ${t===1?r:i} = ${t===1?c(n):c(s)}$ g.<br>`,o+=`La masse d'une ${t===1?"boule":"étoile"} est de $${w(c(t===1?n:s))}$ g.<br>`,h.isAmc?(L(this,l*2,t===1?s:n),L(this,l*2+1,t===1?n:s)):(M(this,l*2,{reponse:{value:t===1?s:n}}),M(this,l*2+1,{reponse:{value:t===1?n:s}}))}}this.questionJamaisPosee(l,i,n,n,s)&&(this.listeQuestions[l]=g??"",this.listeCorrections[l]=o??"",l++),S++}H(this)}generateBalance(m,b,l){return h.isHtml?this.generateBalanceSVG(m,b,l):this.generateBalanceTikz(m,b,l)}generateBalanceSVG(m,b,l){const u=(e,t)=>`<circle cx="${e}" cy="${t}" r="10" fill="black" />`,s=(e,t)=>`<text x="${e}" y="${t+10}" font-size="30" text-anchor="middle" fill="gold">★</text>`,n=(e,t,v)=>`<rect x="${e-25}" y="${t-20}" width="50" height="40" rx="5" ry="5" fill="#666" />
       <text x="${e}" y="${t+5}" font-size="14" text-anchor="middle" fill="white">${Intl.NumberFormat("fr-FR",{maximumFractionDigits:1}).format(l).toString()} g</text>`,i=[];for(let e=0;e<m;e++)m<11?e<4?i.push(u(30+e*20,90)):e<7?i.push(u(30+(e-4)*20+20/2,70)):e<9?i.push(u(30+(e-7)*20+20,50)):e<10?i.push(u(30+(e-9)*20+20+20/2,30)):i.push(u(30+(e-10)*20,50)):e<4?i.push(u(30+e*20,90)):e<8?i.push(u(30+(e-4)*20,70)):e<12?i.push(u(30+(e-8)*20,50)):e<16?i.push(u(30+(e-12)*20,30)):i.push(u(30+(e-16)*20,10));for(let e=0;e<b;e++)b<11?e<4?i.push(s(30+(4+e)*20,90)):e<7?i.push(s(30+(4+e-4)*20+20/2,70)):e<9?i.push(s(30+(4+e-7)*20+20,50)):e<10?i.push(s(30+(4+e-9)*20+20+20/2,30)):e<11?i.push(s(30+(4+e-10)*20,50)):e<12&&i.push(s(30+(4+e-11)*20+20+20+20,50)):e<4?i.push(s(30+(4+e)*20,90)):e<8?i.push(s(30+(4+e-4)*20,70)):e<12?i.push(s(30+(4+e-8)*20,50)):e<16?i.push(s(30+(4+e-12)*20,30)):i.push(s(30+(4+e-16)*20,10));const a=n(305,80);return`<div class="svgContainer" style="display: inline-block">
    <svg class="mathalea2d" viewBox="0 0 400 200" style="display: inline-block" width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        
    
      <!-- Barre horizontale -->
      <!--<rect x="80" y="50" width="240" height="5" fill="#333" />-->
    
      <!-- Plateaux -->
      <rect x="20" y="100" width="160" height="10" fill="#999" />
      <rect x="85" y="120" width="230" height="10" fill="#999" />
      <rect x="85" y="100" width="20" height="30" fill="#999" />
      <rect x="295" y="100" width="20" height="30" fill="#999" />
      <rect x="220" y="100" width="160" height="10" fill="#999" />
      
      <!-- Socle -->
      <rect x="190" y="110" width="20" height="40" fill="#444" />
      <polygon points="200,70 195,105 205,105" fill="#888" />
    
      <!-- Contenu plateau gauche -->
      ${i.join(`
`)}
    
      <!-- Contenu plateau droit -->
      ${a}
    </svg></div>
    `}}export{je as amcReady,Re as amcType,Ie as dateDePublication,Xe as default,We as interactifReady,Ke as interactifType,Ue as refs,Pe as titre,Je as uuid};
//# sourceMappingURL=6N5-6-BS9jwbEt.js.map
