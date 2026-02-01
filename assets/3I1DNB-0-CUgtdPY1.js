var tt=Object.defineProperty;var ot=(d,p,o)=>p in d?tt(d,p,{enumerable:!0,configurable:!0,writable:!0,value:o}):d[p]=o;var O=(d,p,o)=>ot(d,typeof p!="symbol"?p+"":p,o);import{f as v}from"./fixeBordures-BSnKuTIe.js";import{p as g}from"./PointAbstrait-Cz1GEocE.js";import{p as D}from"./polygones-CHA8469v.js";import{s as et}from"./segmentsVecteurs-DhSnlc3S.js";import{t as I}from"./textes-BId1S-Qs.js";import{t as l,r as f}from"./transformations-KFxwrOCd.js";import{v as a}from"./droites-D3-ZzJ69.js";import{c as R}from"./lists-SAG-gkx2.js";import{b1 as rt,P as b,aE as Z,G as st,bH as M,a1 as _,bj as it,p as k,r as nt}from"./index-CMKaCP9B.js";import{m as x}from"./mathalea2d-hmD9nuW5.js";import{s as S}from"./scratchblock-WmRmb2qv.js";import{E as ct}from"./ExerciceBrevetA-Baf-wVKY.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./vendors/earcut-jJVragJp.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./pattern-D34qyw5S.js";import"./vendors/roughjs-CycZv-lV.js";import"./Vide2d-lYMmc9eB.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ExerciceBrevet-C7eH2x-x.js";const Vo="972f6",wo={"fr-fr":["3I1DNB-0","3Z1DNB-16"],"fr-ch":[]},No="Scratch",Fo="7/12/2024";class Go extends ct{constructor(){super();O(this,"versionOriginale",()=>{this.appliquerLesValeurs("losange",20,3,40,3,60,"direct")});O(this,"versionAleatoire",o=>{const e=k(["carré","losange","rectangle"]),m=k([3,4,5]),u=nt(4,5)*5,j=m>4?u/2:m>3?u:u*2,i=e==="losange"?k([50,60,70]):45,q=e==="losange"?k([3,4,5]):k([4,6]),V=k(["direct","indirect"]);this.appliquerLesValeurs(e,u,q,j,m,i,V)});this.besoinFormulaireCaseACocher=["Sujet original",!1],this.sup=!1,this.introduction=rt("D'après l'exercice 5 du brevet Amérique du sud 2024.<br>"),this.versionAleatoire(0)}appliquerLesValeurs(o,e,m,u,j,i,q){let P,y,r;const n=q==="direct",$=n?-1:1;switch(o){case"rectangle":{P=`\\begin{scratch}[${b.isHtml?"":"print,"} fill blocks,scale=0.8]
        \\initmoreblocks{définir \\namemoreblocks{${o}}}
        \\blockpen{stylo en position d'écriture}
        \\blockrepeat{répéter \\ovalnum{2} fois}
        {
        \\blockmove{avancer de \\ovalnum{${e}} pas}
        \\blockmove{tourner ${n?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{90} degrés}
         \\blockmove{avancer de \\ovalnum{a} pas}
        \\blockmove{tourner  ${n?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{b} degrés}
      }
         \\blockpen{relever le stylo}
         \\end{scratch}`,y=`\\begin{scratch}[${b.isHtml?"":"print,"} fill blocks,scale=0.8]
        \\initmoreblocks{définir \\namemoreblocks{Motif A}}
        \\blockrepeat{répéter \\ovalnum{${m}} fois}
        {
           \\blockmoreblocks{${o}}
           \\blockmove{tourner ${n?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{${i}} degrés}
        }
         \\end{scratch}
`;const t=g(0,0),s=l(t,a(e/5,0)),c=f(l(s,a(e/10,0)),s,$*90),h=l(c,a(-e/5,0));r=D([t,s,c,h])}break;case"carré":{P=`\\begin{scratch}[${b.isHtml?"":"print,"} fill blocks,scale=0.8]
        \\initmoreblocks{définir \\namemoreblocks{${o}}}
        \\blockpen{stylo en position d'écriture}
        \\blockrepeat{répéter \\ovalnum{2} fois}
        {
        \\blockmove{avancer de \\ovalnum{${e}} pas}
        \\blockmove{tourner ${n?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{90} degrés}
         \\blockmove{avancer de \\ovalnum{a} pas}
        \\blockmove{tourner  ${n?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{b} degrés}
      }
         \\blockpen{relever le stylo}
         \\end{scratch}
`,y=`\\begin{scratch}[${b.isHtml?"":"print,"} fill blocks,scale=0.8]
        \\initmoreblocks{définir \\namemoreblocks{Motif A}}
        \\blockrepeat{répéter \\ovalnum{${m}} fois}
        {
           \\blockmoreblocks{${o}}
           \\blockmove{tourner ${n?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{${i}} degrés}
        }
         \\end{scratch}
`;const t=g(0,0),s=l(t,a(e/5,0)),c=f(l(s,a(e/5,0)),s,$*90),h=l(c,a(-e/5,0));r=D([t,s,c,h])}break;default:{P=`\\begin{scratch}[${b.isHtml?"":"print,"} fill blocks,scale=0.8]

        \\initmoreblocks{définir \\namemoreblocks{${o}}}
        \\blockpen{stylo en position d'écriture}
        \\blockrepeat{répéter \\ovalnum{2} fois}
        {
        \\blockmove{avancer de \\ovalnum{${e}} pas}
        \\blockmove{tourner ${n?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{60} degrés}
         \\blockmove{avancer de \\ovalnum{a} pas}
        \\blockmove{tourner  ${n?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{b} degrés}
      }
         \\blockpen{relever le stylo}
         \\end{scratch}
`,y=`\\begin{scratch}[${b.isHtml?"":"print,"} fill blocks,scale=0.8]
        \\initmoreblocks{définir \\namemoreblocks{Motif A}}
        \\blockrepeat{répéter \\ovalnum{${m}} fois}
        {
           \\blockmoreblocks{${o}}
           \\blockmove{tourner ${n?"\\turnright{}":"\\turnleft{}"} de \\ovalnum{${i}} degrés}
        }
         \\end{scratch}
`;const t=g(0,0),s=l(t,a(e/5,0)),c=f(l(s,a(e/5,0)),s,$*60),h=l(c,a(-e/5,0));r=D([t,s,c,h])}break}const z=I("Point et",-5,1),J=I("orientation",-5,0),K=I("de départ.",-5,-1),w=et(g(-3,0),g(-.5,0));w.styleExtremites="->";const N=[r,w,z,J,K],Q=x(Object.assign({pixelsParCm:15,scale:.5},v(N)),N),B=[r];for(let t=1;t<m;t++)B.push(f(r,r.listePoints[0],$*i*t));const T=x(Object.assign({pixelsParCm:15,scale:.5},v(B)),B),F=this.sup?i-10:i===50?60:i===60?70:60,C=[r];for(let t=1;t<(o==="losange"?6:8);t++)C.push(f(r,r.listePoints[0],$*i*t));const U=x(Object.assign({pixelsParCm:15,scale:.5},v(C)),C),E=[r];for(let t=1;t<m;t++)E.push(f(r,r.listePoints[0],$*F*t));let H=[x(Object.assign({pixelsParCm:15,scale:.5},v(E)),E),U,T];const A=3;this.sup||(H=H.map((t,s,c)=>c[(s-A+3)%3]));const L=[r];for(let t=1;t<j;t++)L.push(l(r,a(t*u/5,0)));const W=x(Object.assign({pixelsParCm:15,scale:.5},v(L)),L);let G=`Dans cet exercice, aucune justification n'est attendue pour les réponses apportées aux questions 1 et 2.<br>
À l'aide d'un logiciel de programmation, on définit un bloc ${Z(o)} pour construire un ${o}.<br>
${st(`${M(_(`Bloc «${o}»`,"black"))}
${S(P)}`,`${M(_(`${Z(o)} obtenu`,"black"))}
${Q}`,{largeur1:50,widthmincol1:"100px",widthmincol2:"100px",eleId:""})}
`;const X=H.map((t,s)=>`${M(`figure ${s+1}`)}${t}`);G+=R({items:[`Dans le bloc «${o}», par quelles valeurs faut-il remplacer $a$ et $b$ pour obtenir le ${o} ci-dessus ?`,`On définit ensuite un nouveau bloc nommé  «Motif A» :<br>
    ${S(y)}<br>
    Parmi les figures ci-dessous, laquelle est obtenue en utilisant le bloc «Motif A» ?<br>
    ${it(...X,200,200)}`,`On définit un nouveau bloc nommé «Motif B» :<br>
    En l'exécutant on obtient la figure ci-dessous :<br>
    ${M(W)}
    Écrire un script du bloc «Motif B».`],style:"nombres"});const Y=R({items:[`${o==="rectangle"?`Le ${o} ci-dessus, a une largeur qui est la moitié de sa longueur, il faut donc remplacer $a$ par $${e/2}$.<br>`:`La figure ci-dessus est un ${o} dont les côtés sont de même mesure, il faut donc remplacer $a$ par $${e}$.<br>`}
         Il faut remplacer $b$  par $2$ car les instructions de la boucle ne construisent que deux côtés.`,`La figure obtenue en utilisant le bloc «Motif A» est la figure ${this.sup?3:(2+A)%3+1}.<br>
        En effet, la figure ${this.sup?1:(0+A)%3+1} est obtenue en utilisant un angle de $${F}^{\\circ}$ et la figure ${this.sup?2:(1+A)%3+1} comporte ${o==="rectangle"?8:6} ${o}s.`,`Voici un script du bloc «Motif B» :<br>
        ${S(`\\begin{scratch}[${b.isHtml?"print,":""}fill,blocks,scale=0.8]

        \\initmoreblocks{définir \\namemoreblocks{Motif B}}
        \\blockpen{stylo en position d'écriture}
        \\blockrepeat{répéter \\ovalnum{${j}} fois}
        {
           \\blockmoreblocks{${o}}
           \\blockmove{avancer de \\ovalnum{${u}} pas}
        }
         \\end{scratch}
`)}`],style:"nombres"});this.enonce=G,this.correction=Y}}export{Fo as dateDePublication,Go as default,wo as refs,No as titre,Vo as uuid};
//# sourceMappingURL=3I1DNB-0-CUgtdPY1.js.map
