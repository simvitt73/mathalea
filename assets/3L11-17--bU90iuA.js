import{t as T}from"./tableau-BhXMMYON.js";import{E as F,P as g,r as c,W as $,k as l,w as v,aF as D,a as M,K as q,x as f,n as y,ag as A,a6 as P,Y as N,$ as w}from"./index-BvuGzI-o.js";import"./vendors/mathlive-2YgxEGya.js";import"./colors-vbveSA7f.js";import"./fixeBordures-BSnKuTIe.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./PointAbstrait-Cz1GEocE.js";import"./polygones-89tGuAkc.js";import"./vendors/earcut-jJVragJp.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./pattern-CVTyZw4v.js";import"./segmentsVecteurs-BYbXXoZp.js";import"./vendors/roughjs-CycZv-lV.js";import"./textes-Dv2jXPNF.js";import"./Polyline-C6hvR_V-.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-K3nUGUh4.js";import"./json/refToUuidCH-DBCD2E_6.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-OtHQ7xZ3.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const ie="Table de simple distributivité",se="29/12/2025",oe=!0,re="mathLive",ne="de188",pe={"fr-fr":["3L11-17"],"fr-ch":[""]};class ae extends F{constructor(){super(),this.besoinFormulaireTexte=["Choix des questions",`Nombres séparés par des tirets :

1 : a(bx+c)

2 : ax(bx+c)
`],this.besoinFormulaire2Texte=["Choix pour a",`Nombres séparés par des tirets :

1 : 1<a<10

2 : a=1 si forme ax(bx+c)

3 : a<0

4: Mélange
`],this.besoinFormulaire3Texte=["Choix pour b",`Nombres séparés par des tirets :

1 : 1<b<10

2 : b=1

3 : b<0

4: Mélange
`],this.besoinFormulaire4Texte=["pour c",`Nombres séparés par des tirets :

1 : 0<c<10

2 : c<0

3: Mélange
`],this.spacing=g.isHtml?1:2,this.spacingCorr=g.isHtml?1:2,this.nbQuestions=4,this.sup="1-2",this.sup2="1",this.sup3="1",this.sup4="3",this.listeAvecNumerotation=!1,this.exoCustomResultat=!0}nouvelleVersion(){this.answers={},this.consigne=this.nbQuestions>1?"Dans chaque cas, compléter les tables de multiplication puis écrire le développement obtenu.":"Compléter la table de multiplication puis écrire le développement obtenu.";const a=C(this.sup,1,2,5,5,this.nbQuestions),n=C(this.sup2,1,3,4,4,this.nbQuestions),s=C(this.sup3,1,3,4,4,this.nbQuestions),h=C(this.sup4,1,2,3,3,this.nbQuestions);for(let t=0,b=0,e,i,m,o,d;t<this.nbQuestions&&b<50;){d=a[t];let p="",x="",r={entetesCol:[],entetesLgn:[],contenu:[],L1C1txt:"",L1C2txt:[]};e=n[t]===2?1:c(2,9),i=c(2,9),m=s[t]===2?1:s[t]===3?-c(1,9,[e,i]):c(2,9,[e,i]),o=c(1,9,[i,e]),h[t]===2&&(o=-o),d===2?(i=0,e=n[t]===3?-e:e):(e=0,i=n[t]===3?-i:i),this.autoCorrection[2*t]={},this.autoCorrection[2*t+1]={},p=`$${$(t+1)} = ${l(e,i)}(${l(m,o)})$`,p+="<br><br>",x=p;const L=v(0,e*m,e*o+i*m,i*o);if(r=k(e,i,m,o),this.interactif){const E=D.convertTclToTableauMathlive(r.entetesCol,r.entetesLgn,["",""]),Q=D.create(this.numeroExercice??0,2*t,E,"tableauMathlive",!0,{L0C0:"red"});p+=Q.output}else p+=T(r.entetesCol,r.entetesLgn,r.contenu,1.7,!0,this.numeroExercice,t,!1,{L0C0:"red"});p+="<br><br> Développement réduit : ",p+=M(this,2*t+1,q.lyceeClassique),p+="<br><br>",x+=T(r.entetesCol,r.entetesLgn,[f(v(0,e*m,i*m,0)),f(l(e*o,i*o))],1,!0,this.numeroExercice,t,!1,{L0C0:"red"}),x+=`<br><br>Développement réduit : $${$(t+1)} = ${f(L)}$`,y(this,2*t,{bareme:P,L1C1:{value:r.L1C1txt,options:{calculFormel:!0}},L1C2:{value:r.L1C2txt,options:{calculFormel:!0}}}),y(this,2*t+1,{reponse:{value:L,options:{avecSigneMultiplier:!1}}}),this.questionJamaisPosee(t,e,i,m,o,d)&&(this.listeQuestions[t]=p,this.listeCorrections[t]=x,t++),b++}A(this)}}function k(u,a,n,s){return{entetesCol:["\\phantom{A.}\\times\\phantom{E.}",l(n,0),`${s}`],entetesLgn:[l(u,a)],contenu:["\\phantom{A.xE.}","\\phantom{A.xE.}"],L1C1txt:v(0,u*n,a*n,0),L1C2txt:[l(u*s,a*s),`${u}x\\times${s}+${a}\\times${s}`]}}function C(u,a,n,s,h,t){const b=N({saisie:u,min:a,max:n,melange:s,defaut:h,nbQuestions:t});return w(b,t)}export{se as dateDePublication,ae as default,oe as interactifReady,re as interactifType,pe as refs,ie as titre,ne as uuid};
//# sourceMappingURL=3L11-17--bU90iuA.js.map
