import{c as U}from"./CodageAngleDroit-BIf4PZ8S.js";import{p}from"./PointAbstrait-Cz1GEocE.js";import{p as j}from"./polygones-DsgvV9bw.js";import{s as O,m as c}from"./segmentsVecteurs-D7d77vVw.js";import{t as v,c as W}from"./textes-BRWEBQB6.js";import{b as R,t as X}from"./style-3ago9wg-.js";import{E as Y,$ as Z,r as u,F as B,p as T,bw as S,s as h,v as z,m as y,y as M,L as C,a4 as G,a as A,K as E,n as D,B as $,x as d,k as L,o as _}from"./index-Bl1vqpvV.js";import{a as ee}from"./Personne-d0UztHPp.js";import{c as w}from"./utilitairesGeometriques-rO8Jz15i.js";import{m as H}from"./mathalea2d-Bag0NjHD.js";import"./fixeBordures-BSnKuTIe.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./Polyline-BCj_U9wL.js";import"./transformations-BomNx0LR.js";import"./droites-CiSMhYdi.js";import"./Vide2d-lYMmc9eB.js";import"./vendors/earcut-jJVragJp.js";import"./pattern-lywlDurK.js";import"./vendors/roughjs-CycZv-lV.js";import"./vendors/decimal.js-BceHFVC1.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Mt=!0,Ct="mathLive",Dt="Modéliser un problème par une inéquation",Bt="14/02/2023",Lt="03/04/2025",Pt="d2084",jt={"fr-fr":["2N60-1","BP2RES18"],"fr-ch":[]};class Ot extends Y{constructor(){super(),this.besoinFormulaireNumerique=["Choix des questions",4,`1 : Situation concrète
2 : Situation géométrique
3 : Programme de calcul
4 : Mélange des cas précédents`],this.nbQuestions=1,this.sup=4,this.spacing=1.5,this.spacingCorr=1.5}nouvelleVersion(){let Q;this.sup===1?Q=["typeE1","typeE2","typeE3"]:this.sup===2?Q=["typeE4","typeE5","typeE6"]:this.sup===3?Q=["typeE7","typeE8"]:Q=["typeE1","typeE2","typeE3","typeE4","typeE5","typeE6","typeE7","typeE8"];const J=Z(Q,this.nbQuestions);for(let l=0,N=0;l<this.nbQuestions&&N<50;){let s="",a="",m="";switch(J[l]){case"typeE1":{const t=u(20,30),e=u(t+5,50),r=u(20,35)/100,i=u(14,19)/100;s=`  Une société de location de véhicules particuliers propose deux tarifs :<br>
              $\\bullet$ Tarif A : un forfait de $${t}$ € et $${$(r,2)}$ € par $\\text{km}$ parcouru ;<br>
              $\\bullet$  Tarif B : un forfait de $${e}$ € et $${$(i,2)}$ € par $\\text{km}$ parcouru ;<br>
                      À partir de combien de $\\text{km}$ (arrondi à l'unité), le tarif B est-il plus intéressant que le tarif A ?<br>`,a=`En notant $x$, le nombre de $\\text{km}$ parcourus, on a :<br>
              $\\bullet$ Avec le tarif A, le prix à payer est : $${L(r,t)}$ ;<br>
              $\\bullet$  Avec le tarif B, le prix à payer est : $${L(i,e)}$ ;<br>
                       Le tarif B est plus avantageux que le tarif A lorsque $x$ vérifie : $${L(i,e)} < ${L(r,t)}$.<br>
                       On résout cette inéquation : <br>
              $\\begin{aligned}
              ${$(i,2)}x+${e}&<${$(r,2)}x+${t}\\\\
              ${$(i,2)}x+${e}-${d($(r,2))}${d("\\textit{x}")}&< ${$(r,2)}x-${d($(r,2))}${d("\\textit{x}")}+${t}\\\\
                     ${$(i-r)}x+${e}&<${t}\\\\
              ${$(i-r,2)}x+${e}-${d($(e))}&<${t}-${e}\\\\
              ${$(i-r,2)}x&<${t-e}\\\\
      \\dfrac{${$(i-r,2)}x}{${d($(i-r,2))}}&>\\dfrac{${t-e}}{${d($(i-r,2))}}${h(7)} \\text{On divise par } ${$(i-r,2)} <0\\\\
      x&>\\dfrac{${C(t-e)}}{${$(C(i-r),2)}}
      \\end{aligned}$<br>`,Math.round((t-e)/(i-r))===(t-e)/(i-r)?(a+=`Comme $\\dfrac{${C(t-e)}}{${$(C(i-r),2)}}= ${$((t-e)/(i-r),2)}$, c'est donc pour une distance minimale de  $${d($(Math.ceil((t-e)/(i-r))+1,0))}\\text{ km}$ que le tarif B est plus intéressant que le tarif A.
             `,m=$(Math.ceil((t-e)/(i-r))+1,0)):(a+=` Comme $\\dfrac{${C(t-e)}}{${$(C(i-r),2)}}\\simeq ${$((t-e)/(i-r),2)}$, c'est donc pour une distance minimale de  $${d(Math.ceil((t-e)/(i-r)))}\\text{ km}$ que le tarif B est plus intéressant que le tarif A.
                            `,m=$(Math.ceil((t-e)/(i-r)),0)),s+="<br>"+A(this,l,E.clavierDeBaseAvecFraction,{texteApres:"$\\text{ km}$"}),D(this,l,{reponse:{value:m}})}break;case"typeE2":{const t=ee(),e=u(90,120),r=u(15,25)/100,i=u(20,35)*10;s=` Pour la location mensuelle d'un véhicule, une entreprise propose le tarif suivant :<br>
            Forfait de $${e}$ € quel que soit le nombre de $\\text{km}$ parcourus, puis un supplément par kilomètre parcouru de $${$(r,2)}$ €. <br>
            
            ${t} loue une voiture à cette société. Elle a un budget de $${i}$ € et ne veut pas le dépasser.<br>
                      Quel nombre maximum de $\\text{km}$ (arrondi à l'unité) pourra-t-elle parcourir sans dépasser son budget  ?
                                   `,a=`En notant $x$, le nombre de $\\text{km}$ parcourus, le coût pour la location mensuelle est donné par : $${L(r,e)}$.<br>
            Le budget de ${t} étant de  $${i}$ €, le nombre de $\\text{km}$ $x$ qu'elle pourra parcourir doit vérifier $${L(r,e)}<${i}$.<br>
            $\\begin{aligned}
            ${L(r,e)}&\\leqslant${i}\\\\
            ${$(r,2)}x+${e}-${d(e)}&\\leqslant ${i}x-${d(e)}\\\\
            ${$(r,2)}x&\\leqslant${i-e}\\\\
            x&\\leqslant\\dfrac{${i-e}}{${$(r,2)}}
    \\end{aligned}$<br>`,a+=`Comme $\\dfrac{${i-e}}{${$(r,2)}}${Math.round((i-e)/r)===(i-e)/r?"=":"\\simeq"} ${$((i-e)/r,2)}$, ${t} pourra faire au maximum  $${Math.floor((i-e)/r)}\\text{ km}$ pendant le mois avec son budget de $${i}$ €.
       `,m=$(Math.floor((i-e)/r),0),s+="<br>"+A(this,l,E.clavierDeBaseAvecFraction,{texteApres:"$\\text{ km}$"}),D(this,l,{reponse:{value:m}})}break;case"typeE3":{const t=u(7,25,[10,20])/2,e=u(70,150),r=u(200,400)*10;s=` À la mi-journée, la recette d'un musée s'élève à $${$(t*e,2)}$ € pour $${e}$ entrées. Le prix de l'entrée est unique.<br>
                Quel doit être le minimum d'entrées en deuxième partie de journée pour que la recette de la journée soit au moins égale à  $${$(r)}$ € ?<br>
                Résoudre ce problème en écrivant et résolvant une inéquation modélisant la situation.
                                       `,a=`Le montant du billet d'entrée est donné par $${$(t*e,2)}${h(1)} € \\div ${e}=${X(t)}$ €.<br>

                En notant $x$ le nombre d'entrées en deuxième partie de journée, on obtient : $${$(t*e,2)} +${$(t,2)}\\times x\\geqslant ${$(r)}$.<br>

                $\\begin{aligned}
                ${$(t*e,2)} +${$(t,2)} x&\\geqslant ${$(r)}\\\\
                ${$(t*e,2)} +${$(t,2)}x-${d($(t*e,2))}&\\geqslant ${$(r)}-${d($(t*e,2))}\\\\
                ${$(t,2)}x&\\geqslant ${$(r-t*e,2)}\\\\
                x&\\geqslant \\dfrac{${$(r-t*e,2)}}{${$(t,2)}}\\\\
    \\end{aligned}$<br>
  Comme  $\\dfrac{${$(r-t*e,2)}}{${$(t,2)}}${Math.round((r-t*e)/t)===(r-t*e)/t?"=":"\\simeq"} ${$((r-t*e)/t,1)}$,
  il faudra au minimum ${Math.round((r-t*e)/t)===(r-t*e)/t?`$${$((r-t*e)/t,0)}$`:`$${$(Math.floor((r-t*e)/t)+1,0)} $`} entrées pour que la recette de la journée soit au moins égale à  $${$(r)}$ €.
                            `,m=Math.round((r-t*e)/t)===(r-t*e)/t?$((r-t*e)/t,0):$(Math.floor((r-t*e)/t)+1,0),s+="<br>"+A(this,l,E.clavierDeBaseAvecFraction,{texteApres:"entrées"}),D(this,l,{reponse:{value:m}})}break;case"typeE4":{const t=T([!0,!1]),e=u(3,10),r=e+u(3,10),i=T([["au tiers",3],["au quart",4],["à la moitié",2],["au dixième",10],["au cinquième",5]]),o=new B(r*e/2,i[1]*e/2+e/2).simplifie(),n=new B(e*r,e*i[1]+e).simplifie(),f=p(0,0,"A","below"),F=p(10,0,"B","below"),g=p(10,6,"C"),x=p(4,0,"M","below"),b=p(0,6,"D"),q=[],k=j([f,x,b],"black"),P=j([g,x,F],"black");k.couleurDeRemplissage=w("lightgray"),P.couleurDeRemplissage=w("lightgray"),q.push(O(f,F),O(F,g),O(b,f),O(g,b),W(f,F,g,b,x),k,P),q.push(v("x",c(f,x).x,c(f,x).y-.7,0,"black",1,"milieu",!0),v(`${$(e)}`,c(f,b).x-.5,c(f,b).y,0,"black",1,"milieu",!0),v(`${$(r)}`,c(g,b).x,c(g,b).y+.5,0,"black",1,"milieu",!0)),s=` Soit $ABCD$ un rectangle tel que $AD=${e}$ et $DC=${r}$.<br>
            $M$ est un point du segment $[AB]$. On note $AM=x$.<br>
            Pour quelles valeurs de $x$ l'aire du triangle $AMD$ est-elle ${t?"au plus":"au moins"} égale ${i[0]} de l'aire du triangle $CMB$ ?<br>
              `,s+=H({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!1,amplitude:.5,scale:.5,style:"margin: auto"},q),a=` L'aire du triangle $AMD$ est : ${e%2===0?`$\\dfrac{x\\times ${e}}{2}=${$(e/2,0)}x$`:`$\\dfrac{x\\times ${e}}{2}$`}. <br>
            Comme $MB=${r}-x$, l'aire du triangle $CMB$ est : ${e%2===0?`$\\dfrac{(${r}-x)\\times ${e}}{2}=${$(e/2,0)}(${r}-x)$`:`$\\dfrac{(${r}-x)\\times ${e}}{2}$`}. <br>
            Le problème revient donc à déterminer les valeurs de $x$ telles que : $${e%2===0?`${$(e/2,0)}x`:`\\dfrac{${e}x}{2}`} ${t?"\\leqslant":"\\geqslant"} ${e%2===0?`\\dfrac{1}{${i[1]}}\\times ${$(e/2,0)}(${r}-x)`:`\\dfrac{1}{${i[1]}}\\times \\dfrac{${e}(${r}-x)}{2}`}$. <br>`,e%2===0?(a+=`$\\begin{aligned}
            ${$(e/2,0)}x &${t?"\\leqslant":"\\geqslant"}  \\dfrac{${$(e/2,0)}(${r}-x)}{${i[1]}}${h(7)}\\\\`,a+=` ${$(e/2,0)}x \\times ${i[1]}&${t?"\\leqslant":"\\geqslant"} \\dfrac{${$(e/2,0)}(${r}-x)}{${i[1]}}\\times ${i[1]} ${h(7)}\\text{ On  multiplie par ${i[1]}, le sens de l'inéquation ne change pas.}\\\\`,a+=` ${$(i[1]*e/2,0)}x &${t?"\\leqslant":"\\geqslant"}  ${$(e/2,0)}(${r}-x)\\\\`,a+=` ${$(i[1]*e/2,0)}x &${t?"\\leqslant":"\\geqslant"}  ${$(r*e/2,0)}-${$(e/2,0)}x\\\\`,a+=` ${$(i[1]*e/2,0)}x +${$(e/2,0)}x&${t?"\\leqslant":"\\geqslant"}  ${$(r*e/2,0)}\\\\`,a+=` ${$(i[1]*e/2+e/2,0)}x &${t?"\\leqslant":"\\geqslant"}  ${$(r*e/2,0)}\\\\`,a+=` x &${t?"\\leqslant":"\\geqslant"}  ${o.texFraction}\\\\`,a+="\\end{aligned}$<br>",a+=`L'aire du triangle $AMD$ est ${t?"au plus":"au moins"} égale ${i[0]} de l'aire du triangle $CMB$ pour $x\\in ${t?`${d(`\\left[0\\,;\\,${o.texFraction}\\right]`)}`:`${d(`\\left[${o.texFraction}\\,;\\,${r}\\right]`)}`}$`,m=t?`[0;${o.texFraction}]`:`[${o.texFraction};${r}]`,s+="<br>"+A(this,l,E.clavierEnsemble)):(a+=`$\\begin{aligned}
              \\dfrac{${e} x}{2} &${t?"\\leqslant":"\\geqslant"} \\dfrac{${e}(${r}-x)}{${2*i[1]}}\\\\`,a+=`\\dfrac{${e} x}{2} \\times ${2*i[1]}&${t?"\\leqslant":"\\geqslant"} \\dfrac{${e}(${r}-x)}{${$(i[1]*2,0)}}\\times ${2*i[1]} ${h(7)}\\text{ On multiplie par ${2*i[1]}, le sens des inégalités ne change pas.}\\\\`,a+=` ${$(e*i[1],0)}x &${t?"\\leqslant":"\\geqslant"} ${e}(${r}-x)\\\\`,a+=` ${$(e*i[1],0)}x &${t?"\\leqslant":"\\geqslant"} ${e*r}-${e}x\\\\`,a+=` ${$(e*i[1],0)}x +${e}x&${t?"\\leqslant":"\\geqslant"} ${e*r}\\\\`,a+=` ${$(e*i[1]+e,0)}x &${t?"\\leqslant":"\\geqslant"} ${e*r}\\\\`,a+=` x &${t?"\\leqslant":"\\geqslant"}  ${n.texFraction}\\\\`,a+="\\end{aligned}$<br>",a+=`L'aire du triangle $AMD$ est ${t?"au plus":"au moins"} égale ${i[0]} de l'aire du triangle $CMB$ pour $x\\in ${t?`${d(`\\left[0\\,;\\,${o.texFraction}\\right]`)}`:`${d(`\\left[${o.texFraction}\\,;\\,${r}\\right]`)}`}$`,m=t?`[0;${o.texFraction}]`:`[${o.texFraction};${r}]`,s+="<br>"+A(this,l,E.clavierEnsemble)),D(this,l,{reponse:{value:m,options:{intervalle:!0}}})}break;case"typeE5":{const t=u(8,15),e=u(2,6),r=u(50,70),i=p(0,0,"A"),o=p(10,0,"B"),n=p(10,6,"C"),f=p(0,6,"D"),F=p(0,2,"E"),g=p(-2,2,"F"),x=p(-2,0,"G"),b=O(i,F);b.pointilles=2;const q=[],k=j([i,o,n,f,F,g,x],"black");k.couleurDeRemplissage=w("lightgray"),q.push(k,b),q.push(v("x",c(x,g).x-.5,c(x,g).y,0,"black",1,"milieu",!0),v("x",c(x,i).x,c(x,i).y-.5,0,"black",1,"milieu",!0),v(`x+${$(e)}`,c(o,n).x+1,c(o,n).y,0,"black",1,"milieu",!0),v(`${$(t)}`,c(i,o).x,c(i,o).y-.5,0,"black",1,"milieu",!0)),s=` On considère la figure ci-dessous (l'unité est le centimètre). <br>
            Quelles sont les valeurs possibles de $x$ pour que le périmètre de la figure soit supérieur à $${r}\\text{ cm}$.<br>
              `,s+=H({xmin:-3,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!1,amplitude:.5,scale:.5,style:"margin: auto"},q),a=`Le périmètre de la figure est : $x+${t}+(x+${e})+${t}+${e}+x+x=4x+${2*e+2*t}$.<br>
            Le périmètre de la figure doit être supérieur à $${r}$, on cherche $x$ tel que : <br>

             `,a+=`$\\begin{aligned}
            4x+${2*e+2*t} &>${r}\\\\
            4x &>${r}-${2*e+2*t}\\\\
            4x&>${r-2*e-2*t}\\\\
            x&>\\dfrac{${r-2*e-2*t}}{4}`,a+="\\end{aligned}$<br>",a+=`Comme $\\dfrac{${r-2*e-2*t}}{4}=${$((r-2*e-2*t)/4,2)}$, $x$ doit être supérieur à $${$((r-2*e-2*t)/4,2)}\\text{ cm}$ pour que le périmètre de la figure soit supérieur à $${r}\\text{ cm}$.

             `,m=new B(r-2*e-2*t,4).texFraction,s+="<br>"+A(this,l,E.clavierDeBaseAvecFraction,{texteAvant:"$x>$"}),D(this,l,{reponse:{value:m}})}break;case"typeE6":{const t=u(1,3),e=T([6,8,10,12]),r=u(50,70),i=new B(r-t**2,t+e/2).simplifie(),o=p(0,0,"A"),n=p(8,0,"B"),f=p(10,0,"C"),F=p(10,2,"D"),g=p(8,2,"E"),x=p(4,8,"F"),b=p(0,2,"G"),q=p(4,2,"H"),k=O(x,q);k.pointilles=2;const P=[],I=j([o,n,g,b],"black");I.couleurDeRemplissage=w("#7dbdd8");const K=j([n,f,F,g],"black");K.couleurDeRemplissage=w("#e1ac66");const V=j([b,g,x],"black");V.couleurDeRemplissage=w("#75ee7e"),P.push(I,K,V,k,U(x,q,g)),P.push(v("x",c(o,n).x,c(o,n).y-.7,0,"black",1,"milieu",!0),v(`${$(t)}`,c(b,o).x-.8,c(b,o).y,0,"black",1,"milieu",!0),v(`${$(t)}`,c(n,f).x,c(n,f).y-.7,0,"black",1,"milieu",!0),v(`${$(e)}`,c(x,q).x+.5,c(x,q).y,0,"black",1,"milieu",!0)),s=` On considère la figure ci-dessous sur laquelle les longueurs sont en cm. <br>
            Quelles sont les valeurs possibles de $x$ pour que l'aire de cette  figure dépasse  $${r}\\text{ cm}^2$ ?<br>
            Résoudre ce problème en le modélisant par une inéquation.<br>
              `,s+=H({xmin:-3,ymin:-1,xmax:12,ymax:9,pixelsParCm:20,mainlevee:!1,amplitude:.5,scale:.5,style:"margin: auto"},P),a=`La figure est constituée d'un rectangle, d'un carré et d'un triangle.<br>
           $\\bullet$  L'aire du rectangle est : $${t}\\times x=${M(t)}x$.<br>
           $\\bullet$  L'aire du carré est : $${t}\\times ${t}=${t**2}$.<br>
           $\\bullet$  L'aire du triangle est : $\\dfrac{${e}\\times x}{2}=${$(e/2,0)}x$.<br>
Le problème revient donc à trouver les valeurs de $x$ vérifiant : $${M(t)}x+${t**2}+${$(e/2,0)}x>${r}$, soit $${$(t+e/2,0)}x+${t**2}>${r}$.<br>

             `,a+=`$\\begin{aligned}
            ${$(t+e/2,0)}x+${t**2} &>${r}\\\\
            ${$(t+e/2,0)}x &>${r}-${t**2}\\\\
            ${$(t+e/2,0)}x &>${r-t**2}\\\\
            x&>\\dfrac{${r-t**2}}{${$(t+e/2,0)}}`,a+="\\end{aligned}$<br>",G(r-t**2,t+e/2)===1?(a+=`$x$ doit être supérieur à $\\dfrac{${r-t**2}}{${$(t+e/2,0)}}\\text{ cm}$ pour que l'aire  de la figure dépasse $${r}\\text{ cm}^2$.
            `,m=new B(r-t**2,t+e/2).texFraction):(a+=`Comme $\\dfrac{${r-t**2}}{${$(t+e/2,0)}}=${i.texFraction}$, $x$ doit être supérieur à $${i.texFraction}\\text{ cm}$ pour que l'aire  de la figure dépasse $${r}\\text{ cm}^2$.
             `,m=i.texFraction),s+="<br>"+A(this,l,E.clavierDeBaseAvecFraction,{texteAvant:"$x>$"}),D(this,l,{reponse:{value:m}})}break;case"typeE7":{const t=u(-10,10,[-1,0,1]),e=u(-10,10,[-1,0,1]),r=u(2,10),i=u(-20,20,0),o=new B(i-e*r,r*t).simplifie(),n=T([["strictement supérieur",">","<"],["strictement inférieur","<",">"],["inférieur ou égal ","\\leqslant","\\geqslant"],["supérieur ou égal ","\\geqslant","\\leqslant"]]);s=` ${R("Voici un programme de calcul :")} `,s+=S(["Choisir un nombre",`Multiplier ce nombre par $${t}$`,`Ajouter $${e}$`,`Multiplier le résultat par $${r}$`]),s+=`Quels nombres doit-on choisir au départ pour obtenir un nombre ${n[0]} à $${i}$.<br>
               `,a=`En notant $x$ le nombre choisi au départ, on obtient  :<br>
          $\\bullet$ Multiplier ce nombre par $${t}$ : ${h(6)}$${t}\\times x=${t}x$ ;<br>
          $\\bullet$ Ajouter $${e}$ : ${h(6)}$${t}x${y(e)}$ ; <br>
          $\\bullet$ Multiplier le résultat par $${r}$ :${h(6)}$${r}\\times (${t}x${y(e)})=${$(r*t)}x${y(e*r)}$.<br>
          On cherche $x$ tel que : <br>`,a+=`$\\begin{aligned}
         ${$(r*t)}x${y(e*r)} &${n[1]}${i}\\\\
         ${$(r*t)}x &${n[1]}${i}${y(-e*r)}\\\\`,a+=` x &${r*t>0?`${n[1]}`:`${n[2]}`}\\dfrac{${i-e*r}}{${$(r*t)}}\\\\`,a+="\\end{aligned}$<br>",G(i-e*r,r*t)===1?(a+=`On doit choisir $x${r*t>0?`${n[1]}`:`${n[2]}`}${o.texFraction}$ pour obtenir un nombre ${n[0]} à $${i}$. .
            `,s+="<br>"+A(this,l,E.clavierDeBaseAvecFraction,{texteAvant:r*t>0?`$x${n[1]}$`:`$x${n[2]}$`})):(a+=`Comme $\\dfrac{${i-e*r}}{${$(r*t)}}=${o.texFraction}$, on doit choisir $x${r*t>0?`${n[1]}`:`${n[2]}`}${o.texFraction}$ pour obtenir un nombre ${n[0]} à $${i}$.
             `,s+="<br>"+A(this,l,E.clavierDeBaseAvecFraction,{texteAvant:r*t>0?`$x${n[1]}$`:`$x${n[2]}$`})),m=o.texFraction,D(this,l,{reponse:{value:m}})}break;case"typeE8":{const t=u(-10,10,0),e=u(-10,10,0),r=new B(e*e,t-2*e).simplifie(),i=T([["strictement supérieur",">","<"],["strictement inférieur","<",">"],["inférieur ou égal ","\\leqslant","\\geqslant"],["supérieur ou égal ","\\geqslant","\\leqslant"]]);s=`On donne les deux programmes de calcul suivants :<br>
            ${R("Programme 1 :")}<br>
                   `,s+=S(["Choisir un nombre",`Ajouter $${t}$`,"Multiplier le résultat par le nombre choisi au départ"]),s+=`<br>
            ${R("Programme 2 :")}<br>
                        `,s+=S(["Choisir un nombre",`Ajouter $${e}$`,"Prendre le carré du résultat"]),s+=`<br>Déterminer les nombres que l'on  doit entrer dans ces deux programmes pour qu'au final le résultat obtenu
            avec le programme 1 soit ${i[0]} à celui obtenu avec le programme 2.<br><br>`,a=`En notant $x$ le nombre choisi au départ : <br>
            On obtient avec le ${R("programme 1 :")} <br>
            $\\bullet$ Ajouter $${t}$ : ${h(5)} $x+${z(t)}$ ;<br>
            $\\bullet$ Multiplier le résultat par le nombre choisi au départ: ${h(5)} $x\\times(x${y(t)})=x^2${t>0?"+":"-"}${M(C(t))}x$.<br>
                   On obtient avec le ${R("programme 2 :")} <br>
        $\\bullet$ Ajouter $${e}$ :${h(5)} $x+${z(e)}$ ;<br>
        $\\bullet$ Prendre le carré du résultat :${h(5)} $(x${y(e)})^2=x^2${y(2*e)}x+${e*e}$.<br>
        
        Les nombres $x$ que l'on  doit entrer dans les deux programmes pour qu'au final le résultat obtenu avec le programme 1 soit ${i[0]} à celui obtenu avec le programme 2 vérifient : <br>
        $\\begin{aligned}
        x^2${t>0?"+":"-"}${M(C(t))}x & ${i[1]} x^2${y(2*e)}x+${e*e}\\\\
 ${M(t)}x & ${i[1]} ${y(2*e)}x+${e*e}\\\\
 ${2*e>0?`${M(t)}x- ${2*e}x`:`${M(t)}x- (${2*e}x)`}& ${i[1]} ${e*e}\\\\
 ${M(t-2*e)}x& ${i[1]} ${e*e}\\\\`,t-2*e===1?a+="":a+=` x &${t-2*e>0?`${i[1]}`:`${i[2]}`}\\dfrac{${e*e}}{${t-2*e}}\\\\`,a+="\\end{aligned}$<br>",G(e*e,t-2*e)===1?a+=`On doit choisir $x${t-2*e>0?`${i[1]}`:`${i[2]}`}${r.texFraction}$ pour que le résultat obtenu
  avec le programme 1 soit ${i[0]} à celui obtenu avec le programme 2.
`:a+=`Comme $\\dfrac{${e*e}}{${t-2*e}}=${r.texFraction}$, on doit choisir $x${t-2*e>0?`${i[1]}`:`${i[2]}`}${r.texFraction}$ pour que le résultat obtenu
  avec le programme 1 soit ${i[0]} à celui obtenu avec le programme 2.`,s+=A(this,l,E.clavierDeBaseAvecFraction,{texteAvant:t-2*e>0?`$x${i[1]}$`:`$x${i[2]}$`}),m=r.texFraction,D(this,l,{reponse:{value:m}})}break}this.questionJamaisPosee(l,m)&&(this.listeQuestions[l]=s,this.listeCorrections[l]=a,l++),N++}_(this)}}export{Lt as dateDeModifImportante,Bt as dateDePublication,Ot as default,Mt as interactifReady,Ct as interactifType,jt as refs,Dt as titre,Pt as uuid};
//# sourceMappingURL=2N60-1-73GvW8UO.js.map
