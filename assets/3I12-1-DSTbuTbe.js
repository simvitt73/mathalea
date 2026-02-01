import{l as P}from"./message-Z3VLzHox.js";import{E as D,P as d,Y as h,at as p,p as C,r as S,o as E,W as b}from"./index-Dkwu26bg.js";import{s as g}from"./scratchblock-jByb4QH1.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ObjetMathalea2D-CXcNXRpD.js";const Ve="Compléter un script Scratch - 1",We=!0,Ye="AMCOpen",ze="20/09/2022",Ge="08/05/2023",Ke="39a32",Xe={"fr-fr":["3I12-1"],"fr-ch":[]};class Ze extends D{constructor(){super(),this.besoinFormulaireTexte=["Brique(s) à trouver",`Nombres séparés par des tirets :
1 : Lignes 3 et 5
2 : Ligne 6
3 : Lignes 7 et 8 (aux extrèmes)
4 : Lignes 7 et 8 (au centre)
5 : Une des possiblités précédentes choisie au hasard`],this.besoinFormulaire2Texte=["Choix sur la brique intiale",`Nombres séparés par des tirets :
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
3 : Une des possiblités précédentes choisie au hasard`],this.sup=5,this.sup2=5,this.sup3=4,this.sup4=3,this.spacing=2,this.nbQuestions=1,this.typeExercice="Scratch"}nouvelleVersion(){this.introduction=P({titre:d.isHtml?`${g(`\\begin{scratch}[print,fill,blocks,scale=0.5]
\\ovaloperator{\\ovalnum{ } modulo \\ovalnum{ }}\\end{scratch}`)}`:"Information",texte:(d.isHtml?"":"$\\setscratch{print}\\ovaloperator{\\ovalnum{ } modulo \\ovalnum{ }}$<br>")+"Cette brique donne le reste de la division euclidienne du nombre de gauche par le nombre de droite.",couleur:"nombres"}),this.consigne="Compléter les briques manquantes.";const u=h({max:4,defaut:5,melange:5,nbQuestions:this.nbQuestions,shuffle:!1,saisie:this.sup}),k=p(u,1)>0,L=p(u,2)>0,n=p(u,3)>0,r=p(u,4)>0,T=h({max:4,defaut:5,melange:5,nbQuestions:this.nbQuestions,saisie:this.sup2}),Q=h({max:3,defaut:4,melange:4,nbQuestions:this.nbQuestions,saisie:this.sup3});for(let s=0,m,v,$=0;s<this.nbQuestions&&$<50;){const f=this.sup4===3?C([!0,!1]):this.sup4===2,i=[];for(let l=1;l<27;l++)i.push(String.fromCharCode(64+l).toLowerCase());for(let l=0;l<10;l++)i.push(l);i.push("espace"),i.push("flèche haut"),i.push("flèche bas"),i.push("flèche droite"),i.push("flèche gauche");const y=C(i),c=S(1,26,[23,9,15,17]),U=S(1,26,[23,9,15,17,c]);let a=b(c),t=b(U),o=`\\begin{scratch}[print,fill,blocks,scale=1]
`;switch(T[s]){case 1:o+=`\\blockinit{quand \\greenflag est cliqué}
`;break;case 2:o+=`\\blockinit{quand ce sprite est cliqué}
`;break;case 3:o+=`\\blockinit{quand la touche \\selectmenu{${y}} est pressée}
`;break;case 4:o+=`\\blockinit{quand la touche \\selectmenu{n'importe laquelle} est pressée}
`;break}o+=`\\blockmove{demander \\ovalnum{Donne-moi un nombre entier.} et attendre}
`;const e=[o];e.push(`\\blockvariable{mettre \\selectmenu{${a}} à \\ovalsensing{réponse}}
`),o+=k?`\\blockvariable{mettre \\selectmenu{${a}} à \\ovalnum{ ................ }}
`:e[1],e.push(`\\blockmove{demander \\ovalnum{Donne-moi un second nombre entier.} et attendre}
`),o+=e[2],e.push(`\\blockvariable{mettre \\selectmenu{${t}} à \\ovalsensing{réponse}}
`),o+=k?`\\blockvariable{mettre \\selectmenu{${t}} à \\ovalnum{ ................ }}
`:e[3];const I=b(c);switch(a=f?t:a,t=f?I:t,e.push(`\\blockifelse{si \\booloperator{\\ovaloperator{\\ovalmove{${a}} modulo \\ovalmove{${t}}} = \\ovalnum{0}} alors}
`),o+=L?`\\blockifelse{si \\booloperator{\\ovaloperator{\\ovalnum{ ................ } modulo \\ovalnum{ ................ }} = \\ovalnum{0}} alors}
`:e[4],Q[s]){case 1:e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{ est un multiple de } et \\ovalmove{${t}}}} et \\ovalnum{.}}}
}
`),o+=n?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" est un multiple de "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" est un multiple de "}} et \\ovalmove{${t}}}} et \\ovalnum{.}}}
}
`:e[5],e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{ n'est pas un multiple de } et \\ovalmove{${t}}}} et \\ovalnum{.}}}
}
`),o+=n?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" n'est pas un multiple de "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${a}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" n'est pas un multiple de "}} et \\ovalmove{${t}}}} et \\ovalnum{.}}}
}
`:e[6];break;case 2:e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ divise } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`),o+=n?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" divise "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" divise "}} et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`:e[5],e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ ne divise pas } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`),o+=n?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" ne divise pas "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" ne divise pas "}} et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`:e[6];break;case 3:e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ est un diviseur de } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`),o+=n?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" est un diviseur de "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" est un diviseur de "}} et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`:e[5],e.push(`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{ n'est pas un diviseur de } et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`),o+=n?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalnum{ ................ } et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" n'est pas un diviseur de "}} et \\ovalnum{ ................ }}} et \\ovalnum{.}}}
}
`:r?`{\\blocklook{dire \\ovaloperator{regrouper \\ovaloperator{regrouper \\ovalmove{${t}} et \\ovaloperator{regrouper \\ovalnum{${r?" ................ ":" n'est pas un diviseur de "}} et \\ovalmove{${a}}}} et \\ovalnum{.}}}
}
`:e[6];break}e.push("\\end{scratch}"),o+=e[7];const x=g(o);typeof x=="string"?o=x:o="Il y a un problème avec texteScratch",m=o;const q=g(e.join(""));typeof q=="string"?v=q:v="Il y a un problème avec texteSansTrou",d.isAmc&&(this.autoCorrection=[{enonce:this.consigne+"<br>"+o+"<br>",propositions:[{statut:3,sanscadre:!0}]}]),this.questionJamaisPosee(s,m)&&(this.listeQuestions[s]=m,this.listeCorrections[s]=v,s++),$++}E(this)}}export{We as amcReady,Ye as amcType,Ge as dateDeModifImportante,ze as dateDePublication,Ze as default,Xe as refs,Ve as titre,Ke as uuid};
//# sourceMappingURL=3I12-1-DSTbuTbe.js.map
