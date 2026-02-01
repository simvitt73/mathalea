import{b as P}from"./style-mQF2O0cc.js";import{a as g}from"./etudeFonction-CWSfWYQB.js";import{E as O,Y as v,aU as Q,p as S,r as m,w as n,k as o,ar as a,Z as s,y as h,m as p,x as q,D as _,a4 as A,o as G}from"./index-CMKaCP9B.js";import{a as u}from"./deprecatedFractions-CTPmbX7e.js";import"./vendors/decimal.js-BceHFVC1.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./fixeBordures-BSnKuTIe.js";import"./mathalea2d-hmD9nuW5.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./PointAbstrait-Cz1GEocE.js";import"./polygones-CHA8469v.js";import"./vendors/earcut-jJVragJp.js";import"./pattern-D34qyw5S.js";import"./segmentsVecteurs-DhSnlc3S.js";import"./vendors/roughjs-CycZv-lV.js";import"./textes-BId1S-Qs.js";import"./representantVecteur-BA1uohJy.js";import"./transformations-KFxwrOCd.js";import"./droites-D3-ZzJ69.js";import"./Vide2d-lYMmc9eB.js";import"./Matrice-xePgs7UG.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./colors-vbveSA7f.js";const ae="25/05/2023",ue="Étudier la position relative de deux courbes",me="53e8f",be={"fr-fr":["2N60-6"],"fr-ch":[]};class fe extends O{constructor(){super(),this.sup=1,this.sup2=1,this.nbQuestions=1,this.besoinFormulaireTexte=["Choix des fonctions",`1 : Fonctions affines
2 : Polynôme de degré 2 et fonction affine
3 : Mélange`],this.besoinFormulaire2Texte=["Choix des questions",`1 : Avec questions intermédiaires
2 : Sans question intermédiaire`]}nouvelleVersion(){const z=v({saisie:this.sup,min:1,max:2,melange:3,defaut:3,listeOfCase:["affines","polynômeEtAffine"],shuffle:!1,nbQuestions:this.nbQuestions}),C=v({saisie:this.sup2,min:1,max:2,defaut:1,listeOfCase:["true","false"],nbQuestions:this.nbQuestions,shuffle:!1,melange:0}).map(Boolean);Q(z,C);for(let c=0,L=0;c<this.nbQuestions&&L<50;){let b="",i="",r=0,t,e,$,f,x,d;const y=z[c],l=`${P("Remarque :")} vous pouvez vérifier ce résultat en représentant les courbes sur votre calculatrice graphique.`;if(y==="affines")C[c]?(r=m(-9,9,0),t=m(-9,9,0),e=m(-9,9,[0,r]),$=m(-9,9,0),b=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${o(r,t)}$ et $g(x)=${o(e,$)}$. <br>
              On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,b+=`${a(0)} Résoudre dans $\\mathbb R$ l'inéquation $f(x) < g(x)$.<br>
          ${a(1)} Quelle interprétation graphique peut-on en donner ?`,i=`${a(0)} Résolution de l'inéquation :<br>
              $\\begin{aligned}
              ${o(r,t)}&<${o(e,$)}\\\\
              ${o(r,t)}\\,${q(_(-e)+"x")}&<${o(e,$)}\\,${q(_(-e)+"x")}\\\\
              ${o(r-e,t)}&<${o(0,$)}\\\\
              ${o(r-e,t)}\\,${q(_(-t))}&<${o(0,$)}\\,${q(_(-t))}\\\\
              ${o(r-e,0)}&<${o(0,$-t)}\\\\
            ${r-e>0?`x&<\\dfrac{${$-t}}{${r-e}}`:`x&>\\dfrac{${$-t}}{${r-e}}`}
              \\end{aligned}$
              <br>
              ${A($-t,r-e)===1&&r-e>0?"L'":`Comme $\\dfrac{${$-t}}{${r-e}}=${u($-t,r-e)}$, l'`}  ensemble $S$ des solutions de l'inéquation est
              $S= ${r-e>0?`\\left]-\\infty\\,;\\,${u($-t,r-e)}\\right[`:`\\left]${u($-t,r-e)}\\,;\\,+\\infty\\right[`}$.<br>`,i+=`${a(1)} Position relative : <br>
              La courbe $\\mathscr{C}_f$ est en dessous de la courbe $\\mathscr{C}_g$ sur l'intervalle $${r-e>0?`\\left]-\\infty\\,;\\,${u($-t,r-e)}\\right[`:`\\left]${u($-t,r-e)}\\,;\\,+\\infty\\right[`}$.`,i+=`<br>${l}`):(r=m(-9,9,0),t=m(-9,9,0),e=m(-9,9,[0,r]),$=m(-9,9,0),b=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${o(r,t)}$ et $g(x)=${o(e,$)}$. <br>
              On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,b+="Étudier la position relative des deux courbes  $\\mathscr{C}_f$ et $\\mathscr{C}_g$.",i=`La position relative des deux courbes est donnée par l'étude du signe de la différence : $f(x)-g(x)$.<br>
              Plus précisément, si $f(x)-g(x)>0$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$, sinon, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.<br>
              Pour tout réel $x$,<br> $\\begin{aligned}
              f(x)-g(x)&=(${o(r,t)})-(${o(e,$)})\\\\
               &=${o(r,t)}${e>0?"":"+"}${o(-e,-$)}\\\\
               &=${o(r-e,t-$)}
               \\end{aligned}$<br>`,i+=`Il s'agit d'étudier le signe de l'expression affine $${o(r-e,t-$)}$.<br>
               Comme elle s'annule en $${u($-t,r-e)}$ et que $${r-e>0?`${r-e}>0`:`${r-e}<0`}$, on en déduit le tableau de signes : <br>`,r-e>0?f=["Line",10,"",0,"-",20,"z",20,"+"]:f=["Line",10,"",0,"+",20,"z",20,"-"],i+=g({tabInit:[[["$x$",2.5,10],["$f(x)-g(x)$",2,50]],["$-\\infty$",20,`$${u($-t,r-e)}$`,20,"$+\\infty$",30]],tabLines:[f],espcl:3.5,deltacl:.8,lgt:5}),i+=`Comme $f(x)-g(x)>0$ sur l'intervalle $${r-e>0?`\\left]${u($-t,r-e)}\\,;\\,+\\infty\\right[`:`\\left]-\\infty\\,;\\,${u($-t,r-e)}\\right[`}$,
                  la courbe $\\mathscr{C}_f$ est au dessus de la courbe $\\mathscr{C}_g$ sur cet intervalle et elle est en dessous sur $${r-e>0?`\\left]-\\infty\\,;\\,${u($-t,r-e)}\\right[`:`\\left]${u($-t,r-e)}\\,;\\,+\\infty\\right[`}$.
                  `,i+=`<br>${l}`);else{const R=S([1,2,3]);R===1?C[c]?(r=1,t=m(-9,9,0),e=m(-10,10),$=m(-10,10,0),b=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${n(0,1,t,e)}$ et $g(x)=${o(t,$)}$. <br>
            On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,e-$>0&&(b+=`
                ${a(0)} Montrer que pour tout $x$ de $\\mathbb R$, $f(x) - g(x)=${n(0,1,0,e-$)}$.<br>`),e-$===0&&(b+=`
                ${a(0)} Montrer que pour tout $x$ de $\\mathbb R$, $f(x) - g(x)=${n(0,1,0,e-$)}$.<br>`),e-$<0&&(b+=`${a(0)} Montrer que pour tout $x$ de $\\mathbb R$,
                $f(x)-g(x)=(x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`})(x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`})$.<br>
                `),b+=`${a(1)} Étudier pour tout $x$ de $\\mathbb R$, le signe de $f(x)-g(x)$.<br>
        ${a(2)} Quelle interprétation graphique peut-on en donner ?`,i=`${a(0)}  Pour tout $x$ de $\\mathbb R$, <br>
            $\\begin{aligned}
            f(x) - g(x)&=(${n(0,1,t,e)})-(${o(t,$)})\\\\
            &=${n(0,1,t,e)}${t>0?"":"+"}${o(-t,-$)}\\\\
            &=${n(0,1,0,e-$)}
            \\end{aligned}$
            <br>
           `,f=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],x=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],d=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20],e-$>0?(i+=`${a(1)}  Pour tout $x$ de $\\mathbb R$, $${n(0,1,0,e-$)}>0$.<br>
                ${a(2)} On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)>0$, soit $f(x)>g(x)$. <br>
                Graphiquement,  $\\mathscr{C}_f$ est toujours au dessus de $\\mathscr{C}_g$.`,i+=`<br>${l}`):e-$===0?(i+=`${a(1)}  Pour tout $x$ de $\\mathbb R$, $${n(0,1,0,e-$)}\\geqslant 0$.<br>
                ${a(2)} On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)\\geqslant0$, soit $f(x)\\geqslant g(x)$. <br>
                Graphiquement, $\\mathscr{C}_f$ et $\\mathscr{C}_g$ ont un point d'intersection (de coordonnées $(0\\,;\\${$})) et $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$.  .`,i+=`<br>${l}`):(i+=`  $${n(0,1,0,e-$)}$ est de la forme $a^2-b^2$ avec $a=x$ et $b=${s($-e)[0]}$.<br>
                  Comme $a^2-b^2=(a-b)(a+b)$, on en déduit $${n(0,1,0,e-$)}=(x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`})(x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`})$.<br>
                  Ainsi, pour tout $x$ de $\\mathbb R$,
                  $f(x)-g(x)=(x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`})(x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`})$.<br>
                 
                ${a(1)} Comme $x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$ s'annule en
                $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$ et
                 $x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$ s'annule en $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}$, on obtient le tableau de signes : <br>`,i+=g({tabInit:[[["$x$",2.5,30],[`$x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$`,2,75],[`$x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}$`,20,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$`,20,"$+\\infty$",30]],tabLines:[f,x,d],espcl:3.5,deltacl:.8,lgt:10}),i+=`<br>${a(2)} Comme $f(x)-g(x)<0$ pour $x\\in]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}[$, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                  $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur $]-\\infty\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}[$ et sur $]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}\\,;\\,+\\infty [$.`,i+=`<br>${l}`)):(r=1,t=m(-9,9,0),e=m(-10,10),$=m(-10,10,0),b=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par :$f(x)=${n(0,1,t,e)}$ et $g(x)=${o(t,$)}$. <br>
              On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,b+="Étudier la position relative des deux courbes $\\mathscr{C}_f$ et $\\mathscr{C}_g$.",i=`La position relative des deux courbes est donnée par l'étude du signe de la différence : $f(x)-g(x)$.<br>
            Plus précisément, si $f(x)-g(x)>0$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$, sinon, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.<br>`,i+=`  Pour tout $x$ de $\\mathbb R$, <br>
            $\\begin{aligned}
            f(x) - g(x)&=(${n(0,1,t,e)})-(${o(t,$)})\\\\
            &=${n(0,1,t,e)}${t>0?"":"+"}${o(-t,-$)}\\\\
            &=${n(0,1,0,e-$)}
            \\end{aligned}$
            <br>
           `,f=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],x=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],d=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20],e-$>0?(i+=`  Pour tout $x$ de $\\mathbb R$, $${n(0,1,0,e-$)}>0$.<br>
                 On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)>0$, soit $f(x)>g(x)$. <br>
                Graphiquement,  $\\mathscr{C}_f$ est toujours au dessus de $\\mathscr{C}_g$.`,i+=`<br>${l}`):e-$===0?(i+=`  Pour tout $x$ de $\\mathbb R$, $${n(0,1,0,e-$)}\\geqslant 0$.<br>
                On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)\\geqslant0$, soit $f(x)\\geqslant g(x)$. <br>
                Graphiquement, $\\mathscr{C}_f$ et $\\mathscr{C}_g$ ont un point d'intersection (de coordonnées $(0\\,;\\${$})) et $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$.  .`,i+=`<br>${l}`):(i+=`  $${n(0,1,0,e-$)}$ est de la forme $a^2-b^2$ avec $a=x$ et $b=${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$.<br>
                  Comme $a^2-b^2=(a-b)(a+b)$, on en déduit $${n(0,1,0,e-$)}=(x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`})(x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`})$.<br>
                  Ainsi, pour tout $x$ de $\\mathbb R$,
                  $f(x)-g(x)=(x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`})(x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`})$.<br>
                 
                 Comme $x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$ s'annule en
                $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$ et
                 $x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$ s'annule en $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}$, on obtient le tableau de signes : <br>`,i+=g({tabInit:[[["$x$",2.5,30],[`$x+${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$`,2,75],[`$x-${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}$`,20,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$`,20,"$+\\infty$",30]],tabLines:[f,x,d],espcl:3.5,deltacl:.8,lgt:10}),i+=`<br> Comme $f(x)-g(x)<0$ pour $x\\in]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}[$, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                  $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur $]-\\infty\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}[$ et sur $]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}\\,;\\,+\\infty [$.`,i+=`<br>${l}`)):R===2?C[c]?(r=1,t=m(-9,9,0),e=m(-10,10),$=m(-10,10,0),b=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${n(0,-1,t,-e)}$ et $g(x)=${o(t,-$)}$. <br>
              On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,e-$>0&&(b+=`
                  ${a(0)} Montrer que pour tout $x$ de $\\mathbb R$, $f(x) - g(x)=${n(0,-1,0,$-e)}$.<br>`),e-$===0&&(b+=`
                  ${a(0)} Montrer que pour tout $x$ de $\\mathbb R$, $f(x) - g(x)=${n(0,-1,0,$-e)}$.<br>`),e-$<0&&(b+=`${a(0)} Montrer que pour tout $x$ de $\\mathbb R$,
                  $f(x)-g(x)=(${$-e===1||$-e===4||$-e===9||$-e===16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}-x)(${$-e===1||$-e===4||e-$===9||e-$===16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}+x)$.<br>
                  `),b+=`${a(1)} Étudier pour tout $x$ de $\\mathbb R$, le signe de $f(x)-g(x)$.<br>
          ${a(2)} Quelle interprétation graphique peut-on en donner ?`,i=`${a(0)}  Pour tout $x$ de $\\mathbb R$, <br>
              $\\begin{aligned}
              f(x) - g(x)&=(${n(0,-1,t,-e)})-(${o(t,-$)})\\\\
              &=${n(0,-1,t,-e)}${t>0?"":"+"}${o(-t,$)}\\\\
              &=${n(0,-1,0,$-e)}
              \\end{aligned}$
              <br>
             `,f=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],x=["Line",30,"",0,"+",20,"t",20,"+",20,"z",20,"-",20],d=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20],e-$>0&&(i+=`${a(1)}  Pour tout $x$ de $\\mathbb R$, $${n(0,-1,0,$-e)}<0$.<br>
                  ${a(2)} On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)<0$, soit $f(x) < g(x)$. <br>
                  Graphiquement,  $\\mathscr{C}_f$ est toujours en dessous de $\\mathscr{C}_g$.`,i+=`<br>${l}`),e-$===0&&(i+=`${a(1)}  Pour tout $x$ de $\\mathbb R$, $${n(0,-1,0,$-e)}\\leqslant 0$.<br>
                  ${a(2)} On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)\\leqslant0$, soit $f(x)\\leqslant g(x)$. <br>
                  Graphiquement, $\\mathscr{C}_f$ et $\\mathscr{C}_g$ ont un point d'intersection (de coordonnées $(0\\,;\\${-$})) et $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.  .`,i+=`<br>${l}`),e-$<0&&(i+=`  $${$-e}-x^2$ est de la forme $a^2-b^2$ avec $a=${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$ et $b=x$.<br>
                    Comme $a^2-b^2=(a-b)(a+b)$, on en déduit $${$-e}-x^2=(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}-x)(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}+x)$.<br>
                    Ainsi, pour tout $x$ de $\\mathbb R$,
                    $f(x)-g(x)=
                    (${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}-x)(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}+x)$.<br>
                   
                  ${a(1)} Comme $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}-x$ s'annule en
                  $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$ et
                   $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}+x$ s'annule en $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}$, on obtient le tableau de signes : <br>`,i+=g({tabInit:[[["$x$",2.5,30],[`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}+x$`,2,75],[`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}-x$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}$`,20,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$`,20,"$+\\infty$",30]],tabLines:[f,x,d],espcl:3.5,deltacl:.8,lgt:10}),i+=`<br>${a(2)} Comme $f(x)-g(x)>0$ pour $x\\in]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}[$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                    $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur $]-\\infty\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}[$ et sur $]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}\\,;\\,+\\infty [$.`,i+=`<br>${l}`)):(t=m(-9,9,0),e=m(-10,10),$=m(-10,10,0),b=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${n(0,-1,t,-e)}$ et $g(x)=${o(t,-$)}$. <br>
            On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,b+="Étudier la position relative des deux courbes $\\mathscr{C}_f$ et $\\mathscr{C}_g$.",i=`La position relative des deux courbes est donnée par l'étude du signe de la différence : $f(x)-g(x)$.<br>
            Plus précisément, si $f(x)-g(x)>0$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$, sinon, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.<br>`,i+=`  Pour tout $x$ de $\\mathbb R$, <br>
            $\\begin{aligned}
            f(x) - g(x)&=(${n(0,-1,t,-e)})-(${o(t,-$)})\\\\
            &=${n(0,-1,t,-e)}${t>0?"":"+"}${o(-t,$)}\\\\
            &=${n(0,-1,0,$-e)}
            \\end{aligned}$
            <br>
           `,f=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],x=["Line",30,"",0,"+",20,"t",20,"+",20,"z",20,"-",20],d=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20],e-$>0&&(i+=`  Pour tout $x$ de $\\mathbb R$, $${n(0,-1,0,$-e)}<0$.<br>
                ${a(2)} On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)<0$, soit $f(x) < g(x)$. <br>
                Graphiquement,  $\\mathscr{C}_f$ est toujours en dessous de $\\mathscr{C}_g$.`),e-$===0&&(i+=`  Pour tout $x$ de $\\mathbb R$, $${n(0,-1,0,$-e)}\\leqslant 0$.<br>
                 On en déduit que pour tout $x$ de $\\mathbb R$, $f(x)-g(x)\\leqslant0$, soit $f(x)\\leqslant g(x)$. <br>
                Graphiquement, $\\mathscr{C}_f$ et $\\mathscr{C}_g$ ont un point d'intersection (de coordonnées $(0\\,;\\${-$})) et $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.  .`,i+=`<br>${l}`),e-$<0&&(i+=`  $${$-e}-x^2$ est de la forme $a^2-b^2$ avec $a=${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$ et $b=x$.<br>
                  Comme $a^2-b^2=(a-b)(a+b)$, on en déduit $${$-e}-x^2=(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}-x)(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}+x)$.<br>
                  Ainsi, pour tout $x$ de $\\mathbb R$,
                  $f(x)-g(x)=
                  (${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}-x)(${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}+x)$.<br>
                 
                ${a(1)} Comme $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}-x$ s'annule en
                $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$ et
                 $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}+x$ s'annule en $${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}$, on obtient le tableau de signes : <br>`,i+=g({tabInit:[[["$x$",2.5,30],[`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}+x$`,2,75],[`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}-x$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}$`,20,`$${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}$`,20,"$+\\infty$",30]],tabLines:[f,x,d],espcl:3.5,deltacl:.8,lgt:10}),i+=`<br> Comme $f(x)-g(x)>0$ pour $x\\in]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}[$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                  $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur $]-\\infty\\,;\\,${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`-${s($-e)[0]}`:`-\\sqrt{${$-e}}`}[$ et sur $]${e-$===-1||e-$===-4||e-$===-9||e-$===-16?`${s($-e)[0]}`:`\\sqrt{${$-e}}`}\\,;\\,+\\infty [$.`,i+=`<br>${l}`)):C[c]?(r=m(-3,3,0),t=m(-9,9,0),e=m(-10,10),$=m(-10,10,[0,t]),b=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${n(0,r,t,e)}$ et $g(x)=${o($,e)}$. <br>
          On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,b+=`${a(0)} Montrer que pour tout $x$ de $\\mathbb R$, $f(x) - g(x)=x(${h(r)}x${p(t-$)})$.<br>`,b+=`${a(1)} Étudier pour tout $x$ de $\\mathbb R$, le signe de $f(x)-g(x)$.<br>
      ${a(2)} Quelle interprétation graphique peut-on en donner ?`,i=`${a(0)}  Pour tout $x$ de $\\mathbb R$, <br>
          $\\begin{aligned}
          f(x) - g(x)&=(${n(0,r,t,e)}) -(${o($,e)})\\\\
          &=${n(0,r,t,e)}${$>0?"":"+"}${o(-$,-e)}\\\\
          &=${n(0,r,t-$,0)}\\\\
          &=x(${h(r)}x${p(t-$)})
          \\end{aligned}$
          <br>
         `,r>0&&($-t)/r>0?(f=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],x=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],d=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):r>0&&($-t)/r<0?(f=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],x=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],d=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):r<0&&($-t)/r>0?(f=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],x=["Line",30,"",0,"+",20,"t",20,"+",20,"z",20,"-",20],d=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]):(f=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],x=["Line",30,"",0,"+",20,"z",20,"-",20,"t",20,"-",20],d=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]),i+=` ${a(1)} $x$ s'annule en $0$ et $${h(r)}x${p(t-$)}$ s'annule en $${u($-t,r)}$.<br>
          On obtient le tableau de signes : <br>
          
          `,i+=g({tabInit:[[["$x$",2.5,30],["$x$",2,75],[`$${h(r)}x${p(t-$)}$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${($-t)/r<0?`${u($-t,r)}`:"0"}$`,20,`$${($-t)/r>0?`${u($-t,r)}`:"0"}$`,20,"$+\\infty$",30]],tabLines:[f,x,d],espcl:3.5,deltacl:.8,lgt:10}),r<0?(i+=`<br>${a(2)} Comme $f(x)-g(x)>0$ pour
          $x\\in\\left]${($-t)/r<0?`${u($-t,r)}`:"0"} \\,;\\,
          ${($-t)/r<0?"0":`${u($-t,r)}`}\\right[$, $\\mathscr{C}_f$ est au dessus de
            $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur $\\left]-\\infty\\,;\\,
                ${($-t)/r<0?`${u($-t,r)}`:"0"}\\right[$
                  et sur $\\left]${($-t)/r<0?"0":`${u($-t,r)}`}\\,;\\,+\\infty \\right[$.`,i+=`<br>${l}`):(i+=`<br>${a(2)} Comme $f(x)-g(x)<0$ pour
          $x\\in\\left]${($-t)/r<0?`${u($-t,r)}`:"0"} \\,;\\,
          ${($-t)/r<0?"0":`${u($-t,r)}`}\\right[$, $\\mathscr{C}_f$ est en dessous de
            $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur $\\left]-\\infty\\,;\\,
                ${($-t)/r<0?`${u($-t,r)}`:"0"}\\right[$
                  et sur $\\left]${($-t)/r<0?"0":`${u($-t,r)}`}\\,;\\,+\\infty \\right[$.`,i+=`<br>${l}`)):(r=m(-3,3,0),t=m(-9,9,0),e=m(-10,10),$=m(-10,10,[0,t]),b=`Soient $f$ et $g$ deux fonctions définies sur $\\mathbb R$ respectivement par : $f(x)=${n(0,r,t,e)}$ et $g(x)=${o($,e)}$. <br>
              On note $\\mathscr{C}_f$ et $\\mathscr{C}_g$ leur courbe représentative.<br>`,b+="Étudier la position relative des deux courbes $\\mathscr{C}_f$ et $\\mathscr{C}_g$.",i=`La position relative des deux courbes est donnée par l'étude du signe de la différence : $f(x)-g(x)$.<br>
            Plus précisément, si $f(x)-g(x)>0$, $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$, sinon, $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$.<br>`,i+=`  Pour tout $x$ de $\\mathbb R$, <br>
              $\\begin{aligned}
              f(x) - g(x)&=(${n(0,r,t,e)}) -(${o($,e)})\\\\
              &=${n(0,r,t,e)}${$>0?"":"+"}${o(-$,-e)}\\\\
              &=${n(0,r,t-$,0)}\\\\
              &=x(${h(r)}x${p(t-$)})
              \\end{aligned}$
              <br>
             `,r>0&&($-t)/r>0?(f=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],x=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],d=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):r>0&&($-t)/r<0?(f=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],x=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],d=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):r<0&&($-t)/r>0?(f=["Line",30,"",0,"-",20,"z",20,"+",20,"t",20,"+",20],x=["Line",30,"",0,"+",20,"t",20,"+",20,"z",20,"-",20],d=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]):(f=["Line",30,"",0,"-",20,"t",20,"-",20,"z",20,"+",20],x=["Line",30,"",0,"+",20,"z",20,"-",20,"t",20,"-",20],d=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]),i+=`  $x$ s'annule en $0$ et $${h(r)}x${p(t-$)}$ s'annule en $${u($-t,r)}$.<br>
              On obtient le tableau de signes : <br>
              
              `,i+=g({tabInit:[[["$x$",2.5,30],["$x$",2,75],[`$${h(r)}x${p(t-$)}$`,2,75],["$f(x)-g(x)$",2,200]],["$-\\infty$",30,`$${($-t)/r<0?`${u($-t,r)}`:"0"}$`,20,`$${($-t)/r>0?`${u($-t,r)}`:"0"}$`,20,"$+\\infty$",30]],tabLines:[f,x,d],espcl:3.5,deltacl:.8,lgt:10}),r<0?(i+=`<br> Comme $f(x)-g(x)>0$ pour
              $x\\in\\left]${($-t)/r<0?`${u($-t,r)}`:"0"} \\,;\\,
              ${($-t)/r<0?"0":`${u($-t,r)}`}\\right[$, $\\mathscr{C}_f$ est au dessus de
                $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                    $\\mathscr{C}_f$ est en dessous de $\\mathscr{C}_g$ sur $\\left]-\\infty\\,;\\,
                    ${($-t)/r<0?`${u($-t,r)}`:"0"}\\right[$
                      et sur $\\left]${($-t)/r<0?"0":`${u($-t,r)}`}\\,;\\,+\\infty \\right[$.`,i+=`<br>${l}`):(i+=`<br> Comme $f(x)-g(x)<0$ pour
              $x\\in\\left]${($-t)/r<0?`${u($-t,r)}`:"0"} \\,;\\,
              ${($-t)/r<0?"0":`${u($-t,r)}`}\\right[$, $\\mathscr{C}_f$ est en dessous de
                $\\mathscr{C}_g$ sur cet inetrvalle. <br>
                    $\\mathscr{C}_f$ est au dessus de $\\mathscr{C}_g$ sur $\\left]-\\infty\\,;\\,
                    ${($-t)/r<0?`${u($-t,r)}`:"0"}\\right[$
                      et sur $\\left]${($-t)/r<0?"0":`${u($-t,r)}`}\\,;\\,+\\infty \\right[$.`,i+=`<br>${l}`))}this.questionJamaisPosee(c,r,t,e,$)&&(this.listeQuestions[c]=b,this.listeCorrections[c]=i,c++),L++}G(this)}}export{ae as dateDePublication,fe as default,be as refs,ue as titre,me as uuid};
//# sourceMappingURL=2N60-6-rA-wIi8F.js.map
