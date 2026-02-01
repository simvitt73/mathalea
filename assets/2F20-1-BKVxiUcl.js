import{E as U,$ as y,r as o,p,ap as E,q as s,t as h,m as r,a4 as I,F as T,w as M,v as m,ao as N,k as P,y as A,o as B}from"./index-BB3ZcMz7.js";import{s as S}from"./deprecatedFractions-DrS_KNBa.js";import{T as V}from"./Trinome-wibkk2de.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-fVupTN-r.js";import"./json/refToUuidCH-BX1ZhSY0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-eCsKGSUT.js";import"./json/referentiel2022FR-noHHLeEt.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./colors-vbveSA7f.js";const it="Montrer qu'un point appartient ou non à une courbe",$t="36795",nt={"fr-fr":["2F20-1"],"fr-ch":["11FA9-1"]};class rt extends U{constructor(){super(),this.besoinFormulaireNumerique=["Choix des questions",4,`1 : Fonction affine
2 : Polynôme de degré 2 
3 : Fonction a/x+b 
4 : Mélange`],this.besoinFormulaire2Numerique=["Choix des questions",3,`1 : Abscisse du point A entière
2 : Abscisse du point A fractionnaire
3 : Mélange`],this.sup=1,this.sup2=1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1,this.nbQuestions=2}nouvelleVersion(){let F;switch(this.sup){case 1:F=["affine"];break;case 2:F=["polynôme"];break;case 3:F=["a/x+b"];break;default:F=["affine","polynôme","a/x+b"];break}const v=y(F,this.nbQuestions);let u;parseInt(this.sup2)===1?u=y([0],this.nbQuestions):parseInt(this.sup2)===2?u=y([1],this.nbQuestions):u=y([0,1],this.nbQuestions);for(let c=0,k,Q,L,w,t,i,d,e,$,f,l,a,b,_,q,g,x,n,J=0;c<this.nbQuestions&&J<50;){switch(L=o(-9,9,[0,1,-1]),w=o(-9,9,[L,0]),v[c]){case"affine":u[c]===0?(t=o(-9,9,[0,1]),i=o(-9,9,0),e=o(-9,9),f=p([t*e+i,t*(e+1)+i]),x=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
              ${h(`$f(x)=${P(t,i)}$`)}
              On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
              Le point $A(${e}; ${f})$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
              $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
              et <br>
              $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>
               `),f===t*e+i?n+=`$${e}$ est bien dans l'ensemble de définition de $f$ et :<br>
                   $f(x_A)=f(${e})=${t}\\times ${m(e)}${r(i)}=${f}=y_A$.<br>
                L'image de $${e}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$${e}$ est bien dans l'ensemble de définition de $f$ et :<br>
                  $f(x_A)=f(${e})=${t}\\times ${m(e)}${r(i)}=${t*e+i}\\neq${f}$.<br>
                L'image de $${e}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$.`):(t=o(-9,9,[0,1]),i=o(-9,9,0),$=p(N()),a=s(t*$.n+i*$.d,$.d),b=s(t*$.n+i*$.d+1,$.d),l=p([a,b]),g=s(i*a.d,a.d),x=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
              ${h(`$f(x)=${P(t,i)}$`)}
              On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
              Le point $A\\left(${$.texFraction}; ${l.texFractionSimplifiee}\\right)$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
              $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
              et <br>
              $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>
               `),l===a?(n+=`$${$.texFraction}$ est bien dans l'ensemble de définition de $f$ et  : <br>
                $f(x_A)=f\\left(${$.texFraction}\\right)=$`,t===-1?n+=`$${A(t)}${$.texFraction}${r(i)}=
                  ${A(t)}${$.texFraction}${g.ecritureAlgebrique} =
                  \\dfrac{${A(t)}${$.n}${r(i*$.d)}}{${$.d}}=
               ${a.texFraction}${S(t*$.n+i*$.d,$.d)}=y_A$.<br>
               L'image de $${$.texFraction}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$${t}\\times ${$.texFraction}${r(i)}=
                  ${t}\\times${$.texFraction}${g.ecritureAlgebrique} =
                  \\dfrac{${t}\\times${$.n}${r(i*$.d)}}{${$.d}}=
               ${a.texFraction}${S(t*$.n+i*$.d,$.d)}=y_A$.<br>
               L'image de $${$.texFraction}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`):(n+=`$${$.texFraction}$ est bien dans l'ensemble de définition de $f$ et  : <br>
              $f(x_A)=f\\left(${$.texFraction}\\right)=$`,t===-1?n+=`$${A(t)}${$.texFraction}${r(i)}=
                ${A(t)}${$.texFraction}${g.ecritureAlgebrique} =
                \\dfrac{${A(t)}${$.n}${r(i*$.d)}}{${$.d}}=
             ${$.texFraction}${S(t*$.n+i*$.d,$.d)}\\neq${b.texFractionSimplifiee}$.<br>
             L'image de $${$.texFraction}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$.`:n+=`$${t}\\times ${$.texFraction}${r(i)}=
                ${t}\\times${$.texFraction}${g.ecritureAlgebrique} =
                \\dfrac{${t}\\times${$.n}${r(i*a.d)}}{${a.d}}=
             ${a.texFraction}${S(t*$.n+i*$.d,$.d)}\\neq${b.texFractionSimplifiee}$.<br>
             L'image de $${$.texFraction}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$.`));break;case"polynôme":switch(u[c]){case 0:t=o(-9,9,0),i=o(-9,9,0),d=o(-9,9),e=o(-9,9),f=p([t*e**2+i*e+d,t*e**2+i*e+d-1]),x=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
              ${h(`$f(x)=${M(0,t,i,d)}$`)}
              On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
              Le point $A(${e}\\,;\\, ${f})$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
              $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
              et <br>
              $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>
               `),f===t*e**2+i*e+d?(n+=`$${e}$ est bien dans l'ensemble de définition de $f$ et :<br> `,t!==1?n+=`$f(x_A)=f(${e})=${t}\\times ${m(e)}^2${r(i)}\\times${m(e)}${r(d)}
                =${t*e**2}${r(i*e)}${r(d)}=${f}=y_A$.<br>
                L'image de $${e}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$f(x_A)=f(${e})= ${m(e)}^2${r(i)}\\times${m(e)}${r(d)}
                =${t*e**2}${r(i*e)}${r(d)}=${f}=y_A$.<br>
                L'image de $${e}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`):(n+=`$${e}$ est bien dans l'ensemble de définition de $f$ et :<br> `,t!==1?n+=`
                $f(x_A)=f(${e})=${t}\\times ${m(e)}^2${r(i)}\\times${m(e)}${r(d)}
                =${t*e**2}${r(i*e)}${r(d)}=${t*e**2+i*e+d}\\neq${f}$.<br>
                L'image de $${e}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$`:n+=` $f(x_A)=f(${e})= ${m(e)}^2${r(i)}\\times${m(e)}${r(d)}
                =${t*e**2}${r(i*e)}${r(d)}=${t*e**2+i*e+d}\\neq${f}$.<br>
                L'image de $${e}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$`);break;default:{t=o(-2,2,0),i=o(-5,5),d=o(-3,3,0);const O=p([s(1,3),s(1,4),s(1,5),s(2,3),s(2,5),s(1,6),s(4,3),s(5,3),s(3,4)]);$=p([O,O.oppose()]);const D=new V(t,i,d),C=D.image($),R=new T(C.n-1,C.d);l=p([C,R]),x=`Soit $f$ la fonction définie sur $\\mathbb{R}$ par :
  ${h(`$f(x)=${D.tex}$`)}
  On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
  Le point $A\\left(${$.texFSD}\\,;\\,${l.texFractionSimplifiee}\\right)$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
  $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
  et <br>
  $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>`),n+=`$${$.texFSD}$ est bien dans l'ensemble de définition de $f$ et :<br>
  $f(x_A)=f\\left(${$.texFSD}\\right)=${D.texCalculImage($)}$`,l.isEqual(C)?n+=`$=y_A$.<br>
    L'image de $${$.texFSD}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$\\neq${l.texFractionSimplifiee}$.<br>
    L'image de $${$.texFSD}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$.`}break}break;default:switch(u[c]){case 0:for(t=o(-9,9,0),i=o(-9,9,0),e=o(-9,9,[0,1,-1]);I(t,e)!==1;)t=o(-9,9,0);a=s(t+i*e,e),b=s(t+i*e+1,e),_=s(t,e),q=s(i*e,e),l=p([a,b]),x=`Soit $f$ la fonction définie sur $\\mathbb{R}^*$ par :
              ${h(`$f(x)=\\dfrac{${t}}{x}${r(i)}$`)}
              On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
              Le point $A\\left(${e}\\,;\\, ${l.texFractionSimplifiee}\\right)$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
              $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
              et <br>
              $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>`),n+=`$${e}$ est bien dans l'ensemble de définition de $f$ et : <br>
                              $f(x_A)=f(${e})=\\dfrac{${t}}{${e}}${r(i)}
              =${_.texFractionSimplifiee}${r(i)}
              =${_.texFractionSimplifiee}${q.ecritureAlgebrique}=${a.texFractionSimplifiee}
              $`,l===a?n+=`$=y_A$.<br>
                L'image de $${e}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$\\neq${l.texFractionSimplifiee}$.<br>
                               L'image de $${e}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$`;break;default:t=o(-9,9,0),i=o(-9,9,0),e=p(E()),a=s(t*e.d+i*e.n,e.n),b=s(t*e.d+i*e.n-1,e.n),_=s(t*e.d,e.n),q=s(i*e.n,e.n),l=p([a,b]),x=`Soit $f$ la fonction définie sur $\\mathbb{R}^*$ par :
              ${h(`$f(x)=\\dfrac{${t}}{x}${r(i)}$`)}
              On note $\\mathscr{C}_f$ la courbe représentative de la fonction $f$ dans un repère.<br>
              Le point $A\\left(${e.texFractionSimplifiee}\\,;\\, ${l.texFractionSimplifiee}\\right)$ appartient-il à $\\mathscr{C}_f$ ? Justifier.`,n="",this.correctionDetaillee&&(n+=`Un point de coordonnées $(x;y)$ est sur la courbe représentative d'une fonction $f$ si et seulement si :<br>
              $\\bullet$  $x$ appartient à l'ensemble de définition de $f$ <br>
              et <br>
              $\\bullet$ l'ordonnée $y$ du point est l'image de son abscisse, c'est à dire $y=f(x)$.<br>`),n+=`$${e.texFractionSimplifiee}$ est bien dans l'ensemble de définition de $f$ et :<br>
              $f(x_A)=f\\left(${e.texFractionSimplifiee}\\right)
              =\\dfrac{${t}}{${e.texFractionSimplifiee}}${r(i)}
              =${t}\\times \\dfrac{${e.d}}{${e.n}}${r(i)}=
              ${_.texFractionSimplifiee}${r(i)}
              =${a.texFractionSimplifiee}
              $`,l===a?n+=`$=y_A$.<br>
                L'image de $${e.texFractionSimplifiee}$ est bien l'ordonnée du point $A$, donc le point $A$ est sur $\\mathscr{C}_f$.`:n+=`$\\neq${l.texFractionSimplifiee}$.<br>
                               L'image de $${e.texFractionSimplifiee}$ n'est pas l'ordonnée du point $A$, donc le point $A$ n'est pas sur $\\mathscr{C}_f$`;break}break}k=x,Q=n,this.questionJamaisPosee(c,v[c],L,w,u[c])&&(this.listeQuestions[c]=k,this.listeCorrections[c]=Q,c++),J++}B(this)}}export{rt as default,nt as refs,it as titre,$t as uuid};
//# sourceMappingURL=2F20-1-BKVxiUcl.js.map
