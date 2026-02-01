import{E as G,Y as N,$ as H,r as l,p as b,ap as D,F as m,t as F,m as o,x as p,n as x,q as V,v as C,s as J,a4 as W,w as Q,ao as X,k as f,y as j,a as Z,K as _,o as ee}from"./index-CMKaCP9B.js";import{s as Y}from"./deprecatedFractions-CTPmbX7e.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./colors-vbveSA7f.js";const u$="Calculer des coordonnées de points appartenant à une courbe connaissant l'abscisse ou l'ordonnée",b$=!0,m$="mathLive",x$="24/09/2022",f$="18/11/2025",h$="ec059",F$={"fr-fr":["2F20-2"],"fr-ch":["11FA9-2"]};class C$ extends G{constructor(){super(),this.besoinFormulaireTexte=["Choix des fonctions",["Nombres séparés par des tirets  :","1 : Fonction affine","2 : Polynôme de degré 2","3 : Fonction a/x+b","4 : Mélange"].join(`
`)],this.besoinFormulaire2Texte=["Choix des valeurs",["Nombres séparés par des tirets  :","1 : Valeurs entières","2 : Valeurs fractionnaires","3 : Mélange"].join(`
`)],this.besoinFormulaire3Texte=["Type de calcul",["Nombres séparés par des tirets  :","1 : Calculer l'ordonnée","2 : Calculer les abscisses éventuelles","3 : Mélange"].join(`
`)],this.sup=4,this.sup2=3,this.sup3=3,this.nbQuestions=2}nouvelleVersion(){const z=N({saisie:this.sup,max:3,melange:4,defaut:4,nbQuestions:this.nbQuestions}).map(Number),P=[];for(const a of z)switch(a){case 1:P.push("affine");break;case 2:P.push("polynôme");break;case 3:P.push("a/x+b");break}const I=H(P,this.nbQuestions),E=N({saisie:this.sup2,max:2,melange:3,defaut:3,nbQuestions:this.nbQuestions}).map(Number).map(a=>a-1),y=N({saisie:this.sup3,max:2,melange:3,defaut:3,nbQuestions:this.nbQuestions}).map(Number).map(a=>a===1),g=[["f"],["g"],["h"],["u"],["v"],["w"]],q=[["M"],["N"],["P"],["R"],["S"],["T"]];for(let a=0,L,B,n,c,R,K,e,$,u,i,t,r,d,v,k,O,M,S,w,T,A,h,s,U=0;a<this.nbQuestions&&U<50;){switch(R=l(-9,9,[0,1,-1]),K=l(-9,9,[R,0]),I[a]){case"affine":E[a]===0?(e=l(-5,12,[0,1]),$=l(-12,12,0),i=l(-12,12,0),r=e*i+$,n=b(g),c=b(q),y[a]?(h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}$ par :
              ${F(`$${n}(x)=${f(e,$)}$`)}
              On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
             $${c}$ est le point de $\\mathscr{C}$ d'abscisse $${i}$. <br>Quelle est son ordonnée ?`,s=`Puisque le point $${c}$ appartient à $\\mathscr{C}$, son ordonnée est  l'image de son abscisse.<br>
              $${n}(${i})=${e}\\times ${C(i)}${o($)}=${r}$.<br>
              L'ordonnée du point $${c}$ est $${p(r)}$.`,x(this,a,{reponse:{value:r}})):(h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}$ par :
              ${F(`$${n}(x)=${f(e,$)}$`)}
              On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
             $${c}$ est le point de $\\mathscr{C}$ d'ordonnée $${r}$.<br>
              Quelle est son abscisse ?`,s=`$${n}$ est une fonction affine (non constante), donc il existe un unique point dont l'ordonnée est $${r}$.<br>
                Puisque le point $${c}$ appartient à $\\mathscr{C}$, son abscisse est l'antécédent de son ordonnée.<br>
              On cherche donc $x$ tel que $${n}(x)=${r}$, c'est-à-dire $${f(e,$)}=${r}$.<br>`,$<0?s+=`
              $\\begin{aligned}
              ${f(e,$)}&=${r}\\\\
              ${f(e,$)}+${p(-$)}&=${r}+${p(-$)}\\\\
              ${e}x&=${r-$}   \\\\
              x&=\\dfrac{${r-$}}{${e}}   \\\\
              x&=${i}
                                          \\end{aligned}$<br>`:s+=`
                                          $\\begin{aligned}
                                          ${f(e,$)}&=${r}\\\\
                                          ${f(e,$)}-${p($)}&=${r}-${p($)}\\\\
                                          ${e}x&=${r-$}   \\\\
                                          x&=\\dfrac{${r-$}}{${e}}   \\\\
                                          x&=${i}
                                                                      \\end{aligned}$<br>`,s+=`L'abscisse du point $${c}$ est $${p(i)}$.`,x(this,a,{reponse:{value:i}}))):(e=l(-5,10,[0,1]),$=l(-10,10,0),t=b(X()),d=new m(e*t.n+$*t.d,t.d),w=new m($*d.d,d.d),O=new m(t.n-$*t.d,t.d),M=new m($*t.d,t.d),S=new m(t.n-$*t.d,e*t.d),n=b(g),c=b(q),y[a]?(h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}$ par :
              ${F(`$${n}(x)=${f(e,$)}$`)}
              On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
              $${c}$ est le point de $\\mathscr{C}$ d'abscisse $${t.texFraction}$.<br>
               Quelle est son ordonnée ?
              `,s=`Puisque le point $${c}$ appartient à $\\mathscr{C}$, son ordonnée est l'image de son abscisse.<br>
                $${n}\\left(${t.texFraction}\\right)=$`,e===-1||e===1?s+=`$${j(e)}${t.texFraction}${o($)}=
                  ${j(e)}${t.texFraction}${w.ecritureAlgebrique} =
                  \\dfrac{${j(e)}${t.n}${o($*t.d)}}{${t.d}}=
               ${d.texFraction}${Y(e*t.n+$*t.d,t.d)}$.<br>`:s+=`$${e}\\times ${t.texFraction}${o($)}=
                  ${e}\\times${t.texFraction}${w.ecritureAlgebrique} =
                  \\dfrac{${e}\\times${t.n}${o($*t.d)}}{${t.d}}=
               ${d.texFraction}${Y(e*t.n+$*t.d,t.d)}$.<br>`,s+=`L'ordonnée du point $${c}$ est $${p(d.texFractionSimplifiee)}$.`,x(this,a,{reponse:{value:d}})):(h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}$ par :
               ${F(`$${n}(x)=${f(e,$)}$`)}
               On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
               $${c}$ est le point de $\\mathscr{C}$ d'ordonnée $${t.texFraction}$. <br>
               Quelle est son abscisse ?
               `,s=`$${n}$ est une fonction affine (non constante), donc il existe un unique point dont l'ordonnée est $${t.texFraction}$.<br>
                 Puisque le point $${c}$ appartient à $\\mathscr{C}$, son abscisse est l'antécédent de son ordonnée.<br>
               On cherche donc $x$ tel que $${n}(x)=${t.texFraction}$, c'est-à-dire $${f(e,$)}=${t.texFraction}$.<br>
                `,$<0?s+=`
                    $\\begin{aligned}
                    ${f(e,$)}&=${t.texFraction}\\\\
                    ${f(e,$)}+${p(-$)}&=${t.texFraction}+${p(-$)}\\\\
                    ${e}x&=${t.texFraction}+${M.oppose().texFraction}   \\\\
                    ${e}x&=${O.texFraction}\\\\
                    ${e}x\\div${p(C(e))} &=${O.texFraction}\\div${p(C(e))} \\\\
                    x&=${S.texFraction}${S.texSimplificationAvecEtapes()}
                                                \\end{aligned}$<br>`:s+=`
                    $\\begin{aligned}
                    ${f(e,$)}&=${t.texFraction}\\\\
                    ${f(e,$)}-${p($)}&=${t.texFraction}-${p($)}\\\\
                    ${e}x&=${t.texFraction}-${M.texFraction}   \\\\
                    ${e}x&=${O.texFraction}\\\\
                    ${e}x\\div${p(C(e))} &=${O.texFraction}\\div${p(C(e))} \\\\
                    x&=${S.texFraction}${S.texSimplificationAvecEtapes()}
                                                \\end{aligned}$<br>`,s+=`L'abscisse du point $${c}$ est $${p(S.texFractionSimplifiee)}$.`,x(this,a,{reponse:{value:S}})));break;case"polynôme":E[a]===0?y[a]?(e=l(-10,10,0),$=l(-10,10,0),u=l(-10,10),i=l(-9,9),r=e*i**2+$*i+u,n=b(g),c=b(q),h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}$ par :
              ${F(`$${n}(x)=${Q(0,e,$,u)}$`)}
              On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
              $${c}$ est le point de $\\mathscr{C}$ d'abscisse $${i}$. <br>
              Quelle est son ordonnée ?`,s=`Puisque le point $${c}$ appartient à $\\mathscr{C}$, son ordonnée est  l'image de son abscisse.<br> `,e!==1?s+=`$${n}(${i})=${e}\\times ${C(i)}^2${o($)}\\times${C(i)}${u===0?"":`${o(u)}`}
                =${e*i**2}${o($*i)}${u===0?"":`${o(u)}`}=${r}$.<br>`:s+=`$${n}(${i})= ${C(i)}^2${o($)}\\times${C(i)}${u===0?"":`${o(u)}`}
                =${e*i**2}${o($*i)}${u===0?"":`${o(u)}`}=${r}$.<br>`,s+=`L'ordonnée du point $${c}$ est $${p(r)}$.`,x(this,a,{reponse:{value:r}})):(e=l(-10,10,0),$=l(-10,10,0),u=l(-10,10,0),i=l(-9,16),r=e*i+u,n=b(g),c=b(q),h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}$ par :
                ${F(`$${n}(x)=${Q(0,e,0,u)}$`)}
                On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
                Existe-t-il des points de $\\mathscr{C}$ d'ordonnée $${r}$ ? <br>
                Si ces points existent, calculer leurs abscisses respectives.`,this.interactif&&(h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}$ par :
${F(`$${n}(x)=${Q(0,e,0,u)}$`)}
On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
Existe-t-il des points de $\\mathscr{C}$ d'ordonnée $${r}$ ? <br>
 Si ces points existent, calculer leurs abscisses respectives.<br>
Écrire les valeurs séparées par un point-virgule ou $\\emptyset$ s'il n'y en a pas.`),s=` Si un point de $\\mathscr{C}$ a pour ordonnée $${r}$, son abscisse est un antécédent de $${r}$.<br> `,s+=` On cherche donc $x$ tel que $${n}(x)=${r}$, c'est-à-dire $${Q(0,e,0,u)}=${r}$.<br>
                  On résout cette équation en isolant le carré, c'est-à-dire en l'écrivant $x^2=${i}$. <br>`,i===0?(s+=` Cette équation n'a qu'une seule solution : $0$.<br>
 On en déduit qu'il existe un unique point de $\\mathscr{C}$ ayant pour ordonnée $${r}$ : son abscisse est $${p(0)}$. `,x(this,a,{reponse:{value:0}})):i<0?(s+=` Cette équation n'a pas de solution.<br>
 On en déduit qu'il n'existe pas de point de $\\mathscr{C}$ ayant pour ordonnée $${r}$. `,x(this,a,{reponse:{value:"\\emptyset",options:{ensembleDeNombres:!0}}})):i===1||i===4||i===9||i===16?(s+=` Cette équation a deux solutions : $-\\sqrt{${i}}=-${Math.sqrt(i)}$ et $\\sqrt{${i}}=${Math.sqrt(i)}$.<br>
                On en déduit qu'il existe deux points de $\\mathscr{C}$ ayant pour ordonnée $${r}$.<br>
                Les  abscisses de ces points sont : $${p(`-${Math.sqrt(i)}`)}$ et $${p(Math.sqrt(i))}$. `,x(this,a,{reponse:{value:`-${Math.sqrt(i)};${Math.sqrt(i)}`,options:{suiteDeNombres:!0}}})):(s+=` Cette équation a deux solutions : $-\\sqrt{${i}}$ et $\\sqrt{${i}}$.<br>
On en déduit qu'il existe deux points de $\\mathscr{C}$ ayant pour ordonnée $${r}$.<br>
Les  abscisses de ces points sont : $${p(`-\\sqrt{${i}}`)}$ et $${p(`\\sqrt{${i}}`)}$. `,x(this,a,{reponse:{value:`-\\sqrt{${i}};\\sqrt{${i}}`,options:{suiteDeNombres:!0}}}))):(e=l(-2,2,0),$=l(-3,3),u=l(-2,2,0),t=b(D()),d=V(e*t.n**2+$*t.n*t.d+u*t.d**2,t.d**2),n=b(g),c=b(q),w=new m($*t.n,t.d),T=new m($*t.n*t.d,t.d**2),A=new m(u*t.d**2,t.d**2),h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}$ par :
              ${F(`$${n}(x)=${Q(0,e,$,u)}$`)}
              On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
              $${c}$ est le point de $\\mathscr{C}$ d'abscisse $${t.texFraction}$. <br>
              Quelle est son ordonnée ?`,s=`Puisque le point $${c}$ appartient à $\\mathscr{C}$, son ordonnée est  l'image de son abscisse.<br>`,e!==1?$===0?s+=`
                    $${n}\\left(${t.texFraction}\\right)=${e}\\times \\left(${t.texFraction}\\right)^2${o(u)}
                =\\dfrac{${e}\\times ${t.n**2}}{${t.d**2}}${o(u)}
                =\\dfrac{${e*t.n**2}}{${t.d**2}}${A.ecritureAlgebrique}
               = ${d.texFractionSimplifiee}$`:s+=`
                    $${n}\\left(${t.texFraction}\\right)=${e}\\times \\left(${t.texFraction}\\right)^2${o($)}\\times${t.texFraction}${o(u)}
                  =\\dfrac{${e}\\times ${t.n**2}}{${t.d**2}}${w.ecritureAlgebrique}${o(u)}
                  =\\dfrac{${e*t.n**2}}{${t.d**2}}${T.ecritureAlgebrique}${A.ecritureAlgebrique}
                  =${d.texFractionSimplifiee}$`:$===0?s+=`$${n}\\left(${t.texFraction}\\right)=\\left(${t.texFraction}\\right)^2${o(u)}
                =\\dfrac{${t.n**2}}{${t.d**2}}${o(u)}
                =\\dfrac{${t.n**2}}{${t.d**2}}${A.ecritureAlgebrique}
                =${d.texFractionSimplifiee}$`:s+=`$${n}\\left(${t.texFraction}\\right)=\\left(${t.texFraction}\\right)^2${o($)}\\times${t.texFraction}${o(u)}
                =\\dfrac{ ${t.n**2}}{${t.d**2}}${w.ecritureAlgebrique}${o(u)}
                =\\dfrac{${e*t.n**2}}{${t.d**2}}${T.ecritureAlgebrique}${A.ecritureAlgebrique}
                =${d.texFractionSimplifiee}$
                `,s+=`<br> L'ordonnée du point $${c}$ est $${p(d.texFractionSimplifiee)}$.`,x(this,a,{reponse:{value:d}}));break;default:switch(E[a]){case 0:if(y[a]){for(e=l(-9,9,0),$=l(-9,9,0),i=l(-9,9,[0,1,-1]),n=b(g),c=b(q);W(e,i)!==1;)e=l(-9,9,0);d=new m(e+$*i,i),v=new m(e,i),k=new m($*i,i),h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}^*$ par :
                ${F(`$${n}(x)=\\dfrac{${e}}{x}${o($)}$`)}
                On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
                $${c}$ est le point de $\\mathscr{C}$ d'abscisse $${i}$. <br>
                Quelle est son ordonnée ?`,s=`Puisque le point $${c}$ appartient à $\\mathscr{C}$, son ordonnée est l'image de son abscisse.<br>
                                $${n}(${i})=\\dfrac{${e}}{${i}}${o($)}
                =${v.texFractionSimplifiee}${o($)}
                =${v.texFractionSimplifiee}${k.ecritureAlgebrique}=${d.texFractionSimplifiee}$<br>`,s+=`L'ordonnée du point $${c}$ est $${p(d.texFractionSimplifiee)}$.`,x(this,a,{reponse:{value:d}})}else e=l(-10,10,0),$=l(-9,9,0),r=l(-9,9,[0,1,-1,$]),n=b(g),c=b(q),d=new m(e,r-$),h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}^*$ par :
                    ${F(`$${n}(x)=\\dfrac{${e}}{x}${o($)}$`)}
                    On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
                    Existe-t-il des points de $\\mathscr{C}$ d'ordonnée $${r}$ ? <br>
                   Si ces points existent, calculer leurs abscisses respectives.`,s=` Si un point de $\\mathscr{C}$ a pour ordonnée $${r}$, son abscisse est un antécédent de $${r}$.<br> `,s+=` On cherche donc $x$ tel que $${n}(x)=${r}$, c'est-à-dire $\\dfrac{${e}}{x}${o($)}=${r}$.<br> `,s+=`Pour $x\\neq 0$, <br>
                      $\\begin{aligned}
                      \\dfrac{${e}}{x}${o($)}&=${r}\\\\
                      \\dfrac{${e}}{x}${o($)}${p(o(-$))}&=${r}${p(o(-$))}\\\\
                      \\dfrac{${e}}{x}&=${r-$}\\\\
                      x\\times${C(r-$)} &=${e} ${J(4)}{\\text{(Produit en croix)}}\\\\
                      x&=${d.texFraction}${d.texSimplificationAvecEtapes()}\\\\
                                                \\end{aligned}$<br>
                                                Un seul point de $\\mathscr{C}$ a pour ordonnée $${r}$. `,s+=`Son abscisse est $${p(d.texFractionSimplifiee)}$.`,x(this,a,{reponse:{value:d}});break;default:y[a]?(e=l(-9,9,0),$=l(-9,9,0),i=b(D()),d=new m(e*i.d+$*i.n,i.n),v=new m(e*i.d,i.n),k=new m($*i.n,i.n),n=b(g),c=b(q),h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}^*$ par :
              ${F(`$${n}(x)=\\dfrac{${e}}{x}${o($)}$`)}
             On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
                $${c}$ est le point de $\\mathscr{C}$ d'abscisse $${i.texFraction}$.<br>
                Quelle est son ordonnée ?`,s=`Puisque le point $${c}$ appartient à $\\mathscr{C}$, son ordonnée est  l'image de son abscisse.<br>
              $${n}\\left(${i.texFraction}\\right)
              =\\dfrac{${e}}{${i.texFraction}}${o($)}
              =${e}\\times \\dfrac{${i.d}}{${i.n}}${o($)}=
              ${v.texFractionSimplifiee}${o($)}
              =${d.texFractionSimplifiee}
              $<br>`,s+=`L'ordonnée du point $${c}$ est $${p(d.texFractionSimplifiee)}$.`,x(this,a,{reponse:{value:d}})):(e=l(-9,9,0),$=l(-9,9,0),r=b(D()),v=V(r.n-$*r.d,r.d),d=V(e*r.d,r.n-$*r.d),n=b(g),c=b(q),h=`Soit $${n}$ la fonction définie sur $\\mathbb{R}^*$ par :
                ${F(`$${n}(x)=\\dfrac{${e}}{x}${o($)}$`)}
                On note $\\mathscr{C}$ la courbe représentative de la fonction $${n}$ dans un repère.<br>
                Existe-t-il des points de $\\mathscr{C}$ d'ordonnée $${r.texFraction}$ ? <br>
               Si ces points existent, calculer leurs abscisses respectives.`,s=` Si un point de $\\mathscr{C}$ a pour ordonnée $${r.texFraction}$, son abscisse est un antécédent de $${r.texFraction}$.<br> `,s+=` On cherche donc $x$ tel que $${n}(x)=${r.texFraction}$, c'est-à-dire $\\dfrac{${e}}{x}${o($)}=${r.texFraction}$.<br> `,s+=`Pour $x\\neq 0$, <br>
                      $\\begin{aligned}
                      \\dfrac{${e}}{x}${o($)}&=${r.texFraction}\\\\
                      \\dfrac{${e}}{x}${o($)}${p(o(-$))}&=${r.texFraction}${p(o(-$))}\\\\
                      \\dfrac{${e}}{x}&=${v.texFraction}\\\\
                      x\\times${C(r.n-$*r.d)} &=${e}\\times ${r.d} ${J(4)}{\\text{(Produit en croix)}}\\\\
                      x&=${d.texFraction}${d.texSimplificationAvecEtapes()}
                                                \\end{aligned}$<br>
                                                Un seul point de $\\mathscr{C}$ a pour ordonnée $${r.texFraction}$. `,s+=`Son abscisse est $${p(d.texFractionSimplifiee)}$.`,x(this,a,{reponse:{value:d}}));break}break}L=h,L+=" "+Z(this,a,_.clavierEnsemble),B=s,this.questionJamaisPosee(a,I[a],R,K,E[a])&&(this.listeQuestions[a]=L,this.listeCorrections[a]=B,a++),U++}ee(this)}}export{f$ as dateDeModifImportante,x$ as dateDePublication,C$ as default,b$ as interactifReady,m$ as interactifType,F$ as refs,u$ as titre,h$ as uuid};
//# sourceMappingURL=2F20-2-zSsmmHVY.js.map
