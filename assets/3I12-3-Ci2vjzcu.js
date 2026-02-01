import{l as U}from"./message-Hp-zfcIq.js";import{E as A,P as m,aH as E,r as x,Y as c,al as I,aK as P,at as i,p as j,o as w,W as H}from"./index-BB3ZcMz7.js";import{s as v}from"./scratchblock-CRG8pjDI.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-fVupTN-r.js";import"./json/refToUuidCH-BX1ZhSY0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-eCsKGSUT.js";import"./json/referentiel2022FR-noHHLeEt.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ObjetMathalea2D-CXcNXRpD.js";const Xe="Compléter un script Scratch - 2",Ze=!0,_e="AMCOpen",eo="22/09/2022",oo="08/05/2023",to="52c97",ro={"fr-fr":["3I12-3"],"fr-ch":[]};class io extends A{constructor(){super(),this.besoinFormulaireTexte=["Brique(s) à trouver",`Nombres séparés par des tirets :
1 : Ligne 2 (variable)
2 : Ligne 2 (nombre)
3 : Ligne 4
4 : Ligne 5 (réponse)
5 : Ligne 5 (variable)
6 : Ligne 5 (nombre)
7 : Ligne 6 (variable et réponse)
8 : Ligne 6 (mot(s))
9 : Ligne 7 (nombre)
10 : Ligne 7 (variable)
11 : Tous ces choix`],this.besoinFormulaire2Numerique=["Nombre de briques à trouver",10],this.besoinFormulaire3Texte=["Choix sur la brique intiale",`Nombres séparés par des tirets :
1 : La brique initiale est un clic sur drapeau vert.
2 : La brique initiale est un clic sur lutin.
3 : La brique initiale est un appui sur touche imposée
4 : La brique initiale est un appui sur touche non imposée
5 : Une des possiblités précédentes choisie au hasard`],this.besoinFormulaire4Texte=["Choix sur une des phrases finales",`Nombres séparés par des tirets :
1 : Une phrase finale contient : ... est un multiple de ...
2 : Une phrase finale contient : ... divise ...
3 : Une phrase finale contient : ... est un diviseur de ...
4 : Une des possiblités précédentes choisie au hasard`],this.sup=11,this.sup2=3,this.sup3=5,this.sup4=4,this.spacing=2,this.nbQuestions=1,this.typeExercice="Scratch"}nouvelleVersion(){this.introduction=U({titre:m.isHtml?`${v(`\\begin{scratch}[print,fill,blocks,scale=0.5]
\\ovaloperator{\\ovalnum{ } modulo \\ovalnum{ }}\\end{scratch}`)}`:"Information",texte:(m.isHtml?"":"$\\setscratch{print}\\ovaloperator{\\ovalnum{ } modulo \\ovalnum{ }}$<br>")+"Cette brique donne le reste de la division euclidienne du nombre de gauche par le nombre de droite.",couleur:"nombres"});const h=E(1,10,this.sup2,x(1,10));this.consigne="Compléter ",this.consigne+=h>1?"les briques manquantes.":"la brique manquante.";let o=c({max:10,defaut:11,melange:11,nbQuestions:0,saisie:this.sup});o.push(...I(10)),o=P(o).slice(0,h);const k=i(o,1)>0,L=i(o,2)>0,q=i(o,3)>0,$=i(o,4)>0,C=i(o,5)>0,S=i(o,6)>0,l=i(o,7)>0,p=i(o,8)>0,T=i(o,9)>0,Q=i(o,10)>0,D=c({max:4,defaut:5,melange:5,nbQuestions:this.nbQuestions,saisie:this.sup2}),N=c({max:3,defaut:4,melange:4,nbQuestions:this.nbQuestions,saisie:this.sup3});for(let n=0,u,b,d=0;n<this.nbQuestions&&d<50;){const s=[];for(let a=1;a<27;a++)s.push(String.fromCharCode(64+a).toLowerCase());for(let a=0;a<10;a++)s.push(a);s.push("espace"),s.push("flèche haut"),s.push("flèche bas"),s.push("flèche droite"),s.push("flèche gauche");const y=j(s),F=x(1,26,[23,9,15,17]),r=H(F);let e=`\\begin{scratch}[print,fill,blocks,scale=1]
`;switch(D[n]){case 1:e+=`\\blockinit{quand \\greenflag est cliqué}
`;break;case 2:e+=`\\blockinit{quand ce sprite est cliqué}
`;break;case 3:e+=`\\blockinit{quand la touche \\selectmenu{${y}} est pressée}
`;break;case 4:e+=`\\blockinit{quand la touche \\selectmenu{n'importe laquelle} est pressée}
`;break}const t=[e];switch(t.push(`\\blockvariable{mettre \\selectmenu{${r}} à \\ovalnum{1}}
`),e+=`\\blockvariable{mettre \\selectmenu{${k?" ................ ":r}} à ${L?"\\ovalnum{ ................ }":"\\ovalnum{1}"}}
`,t.push(`\\blockmove{demander \\ovalnum{Donne-moi un nombre entier.} et attendre}
`),e+=t[2],t.push(`\\blockrepeat{répéter \\ovalsensing{réponse} fois}
{
`),e+=q?`\\blockrepeat{répéter \\ovalnum{ ................ } fois}
{
`:t[3],t.push(`\\blockif{si \\booloperator{\\ovaloperator{\\ovalsensing{réponse} modulo \\ovalmove{${r}}} = \\ovalnum{0}} alors}
`),e+="\\blockif{si \\booloperator{\\ovaloperator{",e+=$?"\\ovalnum{ ................ }":"\\ovalsensing{réponse}",e+=" modulo ",e+=C?"\\ovalnum{ ................ }":`\\ovalmove{${r}}`,e+="} =  ",e+=S?"\\ovalnum{ ................ }}":"\\ovalnum{0}}",e+=`  alors}
`,N[n]){case 1:t.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalsensing{réponse} et \\ovaloperator{regrouper \\ovalnum{ est un multiple de } et \\ovalmove{${r}}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`),e+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper ${l?"\\ovalnum{ ................ }":"\\ovalsensing{réponse}"} et \\ovaloperator{regrouper \\ovalnum{${p?" ................ ":" est un multiple de "}} et ${l?"\\ovalnum{ ................ }":"\\ovalmove{"+r+"}"}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`;break;case 2:t.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${r}} et \\ovaloperator{regrouper \\ovalnum{ divise } et \\ovalsensing{réponse}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`),e+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper ${l?"\\ovalnum{ ................ }":"\\ovalmove{"+r+"}"} et \\ovaloperator{regrouper \\ovalnum{${p?" ................ ":" divise "}} et ${l?"\\ovalnum{ ................ }":"\\ovalsensing{réponse}"}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`;break;case 3:t.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${r}} et \\ovaloperator{regrouper \\ovalnum{ est un diviseur de } et \\ovalsensing{réponse}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`),e+=`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper ${l?"\\ovalnum{ ................ }":"\\ovalmove{"+r+"}"} et \\ovaloperator{regrouper \\ovalnum{${p?" ................ ":" est un diviseur de "}} et ${l?"\\ovalnum{ ................ }":"\\ovalsensing{réponse}"}}} et \\ovalnum{.}} pendant \\ovalnum{0.5} secondes}
}
`;break}t.push(`\\blockvariable{ajouter \\ovalnum{1} à \\selectmenu{${r}}}
`),e+=`\\blockvariable{ajouter ${T?"\\ovalnum{ ................ }":"\\ovalnum{1}"} à \\selectmenu{${Q?" ................ ":r}}}
`,t.push(`}
\\end{scratch}`),e+=t[7];const g=v(e);u=typeof g=="string"?g:"problème avec texteScratch";const f=v(t.join(""));b=typeof f=="string"?f:"problème avec texteCorr",m.isAmc&&(this.autoCorrection=[{enonce:this.consigne+"<br>"+u+"<br>",propositions:[{statut:3,sanscadre:!0}]}]),this.questionJamaisPosee(n,u)&&(this.listeQuestions[n]=u,this.listeCorrections[n]=b,n++),d++}this.nbQuestions=this.listeQuestions.length,w(this)}}export{Ze as amcReady,_e as amcType,oo as dateDeModifImportante,eo as dateDePublication,io as default,ro as refs,Xe as titre,to as uuid};
//# sourceMappingURL=3I12-3-Ci2vjzcu.js.map
