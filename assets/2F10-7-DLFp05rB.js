import{a as v}from"./etudeFonction-DkvD0Dzs.js";import{E as L,$ as D,r as a,p as m,B as $,ar as c,m as f,o as O}from"./index-vfG7N0N9.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./fixeBordures-BSnKuTIe.js";import"./mathalea2d-CVCH8NiC.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./PointAbstrait-Cz1GEocE.js";import"./polygones-dllpvdk8.js";import"./vendors/earcut-jJVragJp.js";import"./pattern-I1sXJuF2.js";import"./segmentsVecteurs-Dh5p_FwX.js";import"./vendors/roughjs-CycZv-lV.js";import"./textes-CS7rU0Yo.js";import"./representantVecteur-BaW26zet.js";import"./transformations-BnhWpg4x.js";import"./droites-C34ydQPV.js";import"./Vide2d-lYMmc9eB.js";import"./Matrice-BjIQ9o1S.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-BymNGK-G.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-CKp8Whw5.js";import"./json/refToUuidCH-C3otjGt1.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-CxJkatM_.js";import"./json/referentiel2022FR-DUyIuCDZ.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Xe="01/10/2022",Ye="Dresser et utiliser le tableau de signes d'une fonction affine en lien avec son sens de variation",Ze="46bec",_e={"fr-fr":["2F10-7"],"fr-ch":[]};class et extends L{constructor(){super(),this.besoinFormulaireNumerique=["Types de question ",3,`1 : Donner le tableau de signes.
2 : Utiliser le tableau de signes.
3 : Mélange.`],this.nbQuestions=2,this.spacing=1.75,this.spacingCorr=1.75,this.sup=1}nouvelleVersion(){let b;this.sup===1?b=["Signes1"]:this.sup===2?b=["Signes2"]:b=["Signes1","Signes2"];const g=[["f"],["g"],["h"],["u"],["v"],["w"]],x=D(b,this.nbQuestions);for(let p=0,q=0;p<this.nbQuestions&&q<50;){let l="",o="";const d=[];switch(x[p]){case"Signes1":if(m([0,1])===0){const t=m(g),i=m([1,2,5,10])*m([-1,1]),n=a(1,15)*m([-1,1]),e=-n/i;l=`Une fonction affine $${t}$  définie sur $\\mathbb R$ est strictement ${i>0?"croissante":"décroissante"}. De plus $${t}(${$(e,1)})=0$.<br>
        ${c(0)} Dresser son tableau de signes sur $\\mathbb R$.<br>
        ${c(1)} Donner une fonction $${t}$ vérifiant les conditions précédentes.`,o=`${c(0)} $${t}$ est une fonction affine. Elle s'écrit donc sous la forme $${t}(x)=ax+b$. <br>
        Puisque $${t}$ est strictement ${i>0?"croissante":"décroissante"} sur $\\mathbb R$, les images sont ${i>0?"d'abord négatives, puis positives":"d'abord positives, puis négatives"}.<br>
        Sachant que $${t}$ s'annule en $${$(e,1)}$, le changement de signe intervient donc en $x=${$(e,1)}$. <br>
        On obtient ainsi le tableau de signes suivant : <br>
         `;let s;i>0?s=["Line",10,"",0,"-",20,"z",20,"+"]:s=["Line",10,"",0,"+",20,"z",20,"-"],o+=v({tabInit:[[["$x$",1.5,10],[`$${t}(x)$`,2,50]],["$-\\infty$",20,`$${$(e,1)}$`,20,"$+\\infty$",30]],tabLines:[s],espcl:3.5,deltacl:.8,lgt:5,hauteurLignes:[15,15]}),o+=`<br> ${c(1)} La fonction doit vérifier les trois conditions : <br>
        $\\bullet$ être une fonction affine ; <br>
        $\\bullet$ être strictement ${i>0?"croissante":"décroissante"} ;<br>
        $\\bullet$ s'annuler en $${$(e,1)}$.<br>
       Comme $${t}$ est une fonction ${i>0?"croissante":"décroissante"}, on doit choisir un coefficient directeur
       $a$ ${i>0?"positif":"négatif"}.<br>
       Prenons ${i>0?"$a=1$":"$a=-1$"}.<br>
       $${t}$ est alors de la forme : $${t}(x)=${i>0?"":"-"}x + b$.<br>
       On cherche maintenant $b$ : <br>
       Comme on sait que : $${t}(${$(e,1)})=0$, on en déduit :
        $${t}(${$(e,1)})=${i>0?`${$(e,1)}`:`${$(-e,1)}`}   + b=0$.<br>
       d'où $b=${i>0?`${$(-e,1)}`:`${$(e,1)}`}$.<br>
       On obtient la fonction $${t}$ définie par $${t}(x)=${i>0?"":"-"}x${i>0?`${f(-e)}`:`${f(e)}`}$.<br>
       En partant d'une autre valeur pour $a$, on aurait obtenu une autre expression pour $${t}$.<br>
       Il existe une infinité de fonctions qui possèdent ces trois propriétés. <br>
       Toutes les fonctions de la forme $${t}(x)= k\\times\\left( ${i>0?"":"-"}x${i>0?`${f(-e)}`:`${f(e)}`}\\right)$ avec $k$ un réel strictement positif sont solutions de l'exercice.
       
       `,d.push(i,n,e)}else{const t=m(g),i=a(-5,5,0),n=i*a(-9,9,0),e=-n/i,s=a(-10,10,e),u=i*s+n;l=`Une fonction affine $${t}$  définie sur $\\mathbb R$ vérifie $${t}(${$(e,1)})=0$ et $${t}(${s})=${u}$.<br>
           Dresser son tableau de signes sur $\\mathbb R$. Justifier.
         `,s>e?o=` $${t}$ est une fonction affine (non constante, puisque $${t}(${s})\\neq ${t}(${$(e,1)})$), elle
          est donc soit strictement croissante, soit strictement décroissante.<br>
         On observe que $${e}<${s}$ implique ${i>0?`$${t}(${e}) < ${t}(${s})$`:`$${t}(${e}) > ${t}(${s})$`}.<br>
          Les images et les antécédents sont donc rangés ${i>0?"dans le même ordre":"dans l'ordre inverse"}.<br>
          On en déduit que la fonction $${t}$ est${i>0?"croissante":"décroissante"} sur $\\mathbb R$.<br>
          Les images sont donc ${i>0?"d'abord négatives, puis positives":"d'abord positives, puis négatives"}.<br>
          Sachant que $${t}$ s'annule en $${$(e,1)}$, le changement de signe intervient donc en $x=${$(e,1)}$. <br>
          On obtient ainsi le tableau de signes suivant : <br>
           `:o=` $${t}$ est une fonction affine (non constante, puisque $${t}(${s})\\neq ${t}(${$(e,1)})$), elle
           est donc soit strictement croissante, soit strictement décroissante.<br>
           On observe que $${s}<${e}$ implique ${i>0?`$${t}(${s}) < ${t}(${e})$`:`$${t}(${s}) > ${t}(${e})$`}.<br>
          Les images et les antécédents sont donc rangés ${i>0?"dans le même ordre":"dans l'ordre inverse"}.<br>
          On en déduit que la fonction $${t}$ est${i>0?"croissante":"décroissante"} sur $\\mathbb R$.<br>
           
           Les images sont ${i>0?"d'abord négatives, puis positives":"d'abord positives, puis négatives"}.<br>
           Sachant que $${t}$ s'annule en $${$(e,1)}$, le changement de signe intervient donc en $x=${$(e,1)}$. <br>
           On obtient ainsi le tableau de signes suivant : <br>
            `;let h;i>0?h=["Line",10,"",0,"-",20,"z",20,"+"]:h=["Line",10,"",0,"+",20,"z",20,"-"],o+=v({tabInit:[[["$x$",1.5,10],[`$${t}(x)$`,2,50]],["$-\\infty$",20,`$${$(e,1)}$`,20,"$+\\infty$",30]],tabLines:[h],espcl:3.5,deltacl:.8,lgt:5,hauteurLignes:[15,15]}),d.push(i,n,e)}break;default:{const r=a(-5,5,0),t=r*a(-6,6,0),i=-t/r,n=m(g);let e,s;m([!0,!1])?(e=a(i+1,10),s=a(i+1,10,e)):(e=a(-10,i-1),s=a(-10,i-1,e)),l=`On donne le tableau de signes d'une fonction affine  $${n}$  définie sur $\\mathbb R$ :<br>`;let u;r>0?u=["Line",10,"",0,"-",20,"z",20,"+"]:u=["Line",10,"",0,"+",20,"z",20,"-"],l+=v({tabInit:[[["$x$",1.5,10],[`$${n}(x)$`,2,50]],["$-\\infty$",20,`$${$(i,1)}$`,20,"$+\\infty$",30]],tabLines:[u],espcl:3.5,deltacl:.8,lgt:5,hauteurLignes:[15,15]}),l+=`<br> ${c(0)} Donner le sens de varitions de $${n}$ sur $\\mathbb R$.<br>
        ${c(1)} Comparer $${n}(${e})$ et $${n}(${s})$.`,o=`${c(0)} D'après le tableau de signes, les images sont  ${r>0?"d'abord négatives, puis positives":"d'abord positives, puis négatives"}.<br>
        On en déduit que la fonction $${n}$ est ${r>0?"strictement croissante":"strictement décroissante"} sur $\\mathbb R$.<br>`,o+=`${c(1)} Comme $${n}$ est une fonction affine ${r>0?"strictement croissante":"strictement décroissante"},
          les antécédents et les images sont rangées ${r>0?"dans le même ordre":"dans l'ordre inverse"}. <br>
         `,s>e?o+=` Comme $${e} < ${s}$, alors  ${r>0?`$${n}(${e}) < ${n}(${s})$`:`$${n}(${e}) > ${n}(${s})$`}
         `:o+=` Comme $${s} < ${e}$, alors  ${r>0?`$${n}(${s}) < ${n}(${e})$`:`$${n}(${s}) > ${n}(${e})$`}
          `,d.push(r,t,i,e,s)}break}this.questionJamaisPosee(p,d.map(String).join(";")+x[p])&&(this.listeQuestions[p]=l,this.listeCorrections[p]=o,p++),q++}O(this)}}export{Xe as dateDePublication,et as default,_e as refs,Ye as titre,Ze as uuid};
//# sourceMappingURL=2F10-7-DLFp05rB.js.map
