import{l as H}from"./message-Z3VLzHox.js";import{E as w,Y as D,p as g,r as k,N as B,a1 as C,aH as I,$ as Q,P as $,ar as N,o as V,W as M}from"./index-Dkwu26bg.js";import{s as U}from"./scratchblock-jByb4QH1.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ObjetMathalea2D-CXcNXRpD.js";const _e="Comprendre un script Scratch - 1",eo=!0,oo="AMCHybride",io="20/09/2022",to="08/05/2023",ro="defeb",so={"fr-fr":["3I12-2"],"fr-ch":[]};class no extends w{constructor(){super(),this.besoinFormulaireTexte=["Question(s) à sélectionner",`Nombres séparés par des tirets :
1 : Nombre de variables
2 : Nom de variables
3 : Description du script
4 : Test du script avec deux nombres multiples
5 : Test du script avec deux nombres non multiples
6 : Action initiale
   ------------   
7 : Une seule question parmi celles choisies
8 : Deux questions parmi celles choisies
9 : Trois questions parmi celles choisies
10 : Quatre questions parmi celles choisies
11 : Cinq questions parmi celles choisies
12 : L'ensemble des six questions`],this.besoinFormulaire2Texte=["Choix sur la brique intiale",`Nombres séparés par des tirets :
1 : La brique initiale est un clic sur drapeau vert.
2 : La brique initiale est un clic sur lutin.
3 : La brique initiale est un appui sur touche imposée
4 : La brique initiale est un appui sur touche non imposée
5 : Une des possiblités précédentes choisie au hasard`],this.besoinFormulaire3Texte=["Choix sur une des phrases finales",`Nombres séparés par des tirets :
1 : Une phrase finale contient : ... est un multiple de ...
2 : Une phrase finale contient : ... divise ...
3 : Une phrase finale contient : ... est un diviseur de ...
4 : Une des possiblités précédentes choisie au hasard`],this.besoinFormulaire4Numerique=["Choix de l'ordre sur la brique modulo",3,`1 : Premier entier demandé modulo le second
2 : Second entier demandé modulo le premier 
3 : Une des possiblités précédentes choisie au hasard`],this.sup=9,this.sup2=5,this.sup3=4,this.sup4=3,this.spacing=2,this.spacingCorr=2,this.nbQuestions=1,this.typeExercice="Scratch"}nouvelleVersion(){const E=D({max:4,defaut:5,melange:5,nbQuestions:this.nbQuestions,saisie:this.sup2}),l=D({max:3,defaut:4,melange:4,nbQuestions:this.nbQuestions,saisie:this.sup3}),n=this.sup4===3?g([!0,!1]):this.sup4===2;for(let t=0,q,v,S=0;t<this.nbQuestions&&S<50;){const u=[];for(let e=1;e<27;e++)u.push(String.fromCharCode(64+e).toLowerCase());for(let e=0;e<10;e++)u.push(e);u.push("espace"),u.push("flèche haut"),u.push("flèche bas"),u.push("flèche droite"),u.push("flèche gauche");const T=g(u),x=k(1,26,[23,9,15,17]),P=k(1,26,[23,9,15,17,x]);let a=M(x),r=M(P),o=`\\begin{scratch}[print,fill,blocks,scale=1]
`;const y=[[`\\blockinit{quand \\greenflag est cliqué}
`,"Quand le drapeau vert est cliqué"],[`\\blockinit{quand ce sprite est cliqué}
`,"Quand ce sprite est cliqué"],[`\\blockinit{quand la touche \\selectmenu{${T}} est pressée}
`,`Quand la touche ${T} est pressée`],[`\\blockinit{quand la touche \\selectmenu{n'importe laquelle} est pressée}
`,"Quand n'importe quelle touche est pressée"]],b=E[t];o+=typeof b=="number"?y[b-1][0]:"",o+=`\\blockmove{demander \\ovalnum{Donne-moi un nombre entier.} et attendre}
`,o+=`\\blockvariable{mettre \\selectmenu{${a}} à \\ovalsensing{réponse}}
`,o+=`\\blockmove{demander \\ovalnum{Donne-moi un second nombre entier.} et attendre}
`,o+=`\\blockvariable{mettre \\selectmenu{${r}} à \\ovalsensing{réponse}}
`;const F=M(x);switch(a=n?r:a,r=n?F:r,o+=`\\blockifelse{si \\booloperator{\\ovaloperator{\\ovalmove{${a}} modulo \\ovalmove{${r}}} = \\ovalnum{0}} alors}
`,l[t]){case 1:o+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{ est un multiple de } et \\ovalmove{${r}}}} et \\ovalnum{.}}}
}
`,o+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{ n'est pas un multiple de } et \\ovalmove{${r}}}} et \\ovalnum{.}}}
}
`;break;case 2:o+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${r}} et \\ovaloperator{regrouper \\ovalnum{ divise } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`,o+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${r}} et \\ovaloperator{regrouper \\ovalnum{ ne divise pas } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`;break;case 3:o+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${r}} et \\ovaloperator{regrouper \\ovalnum{ est un diviseur de } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`,o+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${r}} et \\ovaloperator{regrouper \\ovalnum{ n'est pas un diviseur de } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`;break}o+="\\end{scratch}";const L=U(o);o=typeof L=="string"?L:"problème avec scratchblock";const s=g([2,3,5,9,10]),m=g(B(5,15))*s,c=m+k(1,s-1),d=[["Combien ce script comporte-t-il de variables ?",`Ce script comporte ${C(2)} variables.`,1],["Comment se nomment les variables dans ce script ?",`Les variables de ce script se nomment ${C(a)} et ${C(r)}.`,1],["Que fait ce script ?",`Ce script demande deux nombres entiers à l'utilisateur, calcule le reste de la division euclidienne du
      ${n?" second nombre fourni par le premier ":" premier nombre fourni par le second "}
      puis indique si
      ${l[t]===1?n?" le second nombre ":" le premier nombre ":n?" le premier nombre ":" le second nombre "} ${l[t]===1?" est un multiple ou pas du ":l[t]===2?" divise ou pas le ":" est un diviseur ou pas du "} ${l[t]===1?n?"premier":"second":n?"second":"premier"} nombre.`,3],[`Si les nombres saisis sont d'abord ${n?s:m} puis ensuite ${n?m:s}, que dit précisément le lutin au final ?`,`${l[t]===1?m+" est un multiple de "+s:l[t]===2?s+" divise "+m:s+" est un diviseur de "+m}.`,1],[`Si les nombres saisis sont d'abord ${n?s:c} puis ensuite ${n?c:s}, que dit précisément le lutin au final ?`,`${l[t]===1?c+" n'est pas un multiple de "+s:l[t]===2?s+" ne divise pas "+c:s+" n'est pas un diviseur de "+c}.`,1],["Quelle action initiale permet de déclencher ce script ?",typeof b=="number"?y[b-1][1]:".",1]];let i=[],h=[6];if(!this.sup)i=d;else if(typeof this.sup=="number")this.sup=I(1,12,this.sup,12),this.sup<7?i=[d[this.sup]]:i=Q(d,6).slice(0,this.sup-6);else{const e=this.sup.split("-");for(let p=0;p<e.length;p++)e[p]=I(1,12,parseInt(e[p]),12),e[p]<7?i.push(d[e[p]-1]):h=[e[p]-6];i.length===0&&(i=Q(d,6).slice(0,h[0]))}i=Q(i,i.length),this.introduction=H({titre:$.isHtml?`${U(`\\begin{scratch}[print,fill,blocks,scale=0.5]
\\ovaloperator{\\ovalnum{ } modulo \\ovalnum{ }}\\end{scratch}`)}`:"Information",texte:($.isHtml?"":"$\\setscratch{print}\\ovaloperator{\\ovalnum{ } modulo \\ovalnum{ }}$<br>")+"Cette brique donne le reste de la division euclidienne du nombre de gauche par le nombre de droite.",couleur:"nombres"}),$.isAmc&&(this.autoCorrection[0]={enonce:"",enonceAvant:!1,propositions:[]}),this.consigne="Lire ce script Scratch associé à un lutin et répondre ensuite",this.consigne+=Math.min(i.length,h[0])>1?" aux questions.":" à la question.";let A="";v="";let f="";for(let e=0;e<Math.min(i.length,h[0]);e++)Math.min(i.length,h[0])===1?(f=i[0][0]+"<br>",v=i[0][1]+"<br>"):(f=N(e)+i[e][0]+"<br>",v+=N(e)+i[e][1]+"<br>"),$.isAmc&&(this.autoCorrection[0].propositions[e]={type:"AMCOpen",propositions:[{enonce:(e===0?o+"<br><br>":"")+f,texte:"",statut:i[e][2],pointilles:!1}]}),A+="<br>"+f;q=o+A,this.questionJamaisPosee(t,q)&&(this.listeQuestions[t]=q,this.listeCorrections[t]=v,t++),S++}V(this)}}export{eo as amcReady,oo as amcType,to as dateDeModifImportante,io as dateDePublication,no as default,so as refs,_e as titre,ro as uuid};
//# sourceMappingURL=3I12-2-Ah74_uSx.js.map
