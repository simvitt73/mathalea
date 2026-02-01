import{D as L}from"./vendors/decimal.js-BceHFVC1.js";import{a as q}from"./afficheLongueurSegment-BZy7sEwE.js";import{a as P}from"./AfficheMesureAngle-aptcPmuT.js";import{f as M}from"./fixeBordures-BSnKuTIe.js";import{p as K}from"./PointAbstrait-Cz1GEocE.js";import{p as N}from"./polygones-CHA8469v.js";import{c as S}from"./textes-BId1S-Qs.js";import{p as B}from"./segmentsVecteurs-DhSnlc3S.js";import{E as z,Y as G,$ as J,r as d,x as h,B as c,p as x,n as l,a as m,K as p,o as R}from"./index-CMKaCP9B.js";import{m as V}from"./mathalea2d-hmD9nuW5.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./transformations-KFxwrOCd.js";import"./droites-D3-ZzJ69.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./Vide2d-lYMmc9eB.js";import"./Arc-DVcwIrGW.js";import"./pattern-D34qyw5S.js";import"./vendors/earcut-jJVragJp.js";import"./vendors/roughjs-CycZv-lV.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const wt=!0,At="mathLive",ut="Calculer un produit scalaire avec un angle",Ct="29/04/2025",Dt="867cd",Bt={"fr-fr":["1G10-3"],"fr-ch":[]};class bt extends z{constructor(){super(),this.nbQuestions=1,this.sup=1,this.spacing=1.5,this.besoinFormulaire2CaseACocher=["Avec des radians"],this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Application de la formule","2 : Avec une figure (parallélogramme)","3 : Mélange"].join(`
`)]}nouvelleVersion(){const O=G({saisie:this.sup,min:1,max:2,melange:3,defaut:3,nbQuestions:this.nbQuestions}),k=J(O,this.nbQuestions);for(let e=0,a,$,i,b=0;e<this.nbQuestions&&b<50;){switch(k[e]){case 1:{const o=d(2,12),t=d(2,12),s=x([[30,"\\dfrac{\\pi}{6}"],[45,"\\dfrac{\\pi}{4}"],[60,"\\dfrac{\\pi}{3}"],[120,"\\dfrac{2\\pi}{3}"],[135,"\\dfrac{3\\pi}{4}"],[150,"\\dfrac{5\\pi}{6}"],[180,"\\pi"]]),n=`\\overrightarrow{AB}\\cdot\\overrightarrow{AC}&=${o}\\times ${t}\\times \\cos\\left(${this.sup2?`${s[1]}`:`${s[0]}^\\circ`}\\right)\\\\`;a=`On considère un triangle $ABC$ tel que $AB=${o}$, $AC=${t}$ et $\\widehat{BAC}=${this.sup2?`${s[1]}`:`${s[0]}^\\circ`}$.<br>
          Calculer $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.`,$=`D'après le cours on a : $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=AB\\times AC\\times \\cos(\\widehat{BAC})$.<br>
          On applique avec les données de l'énoncé : <br>`,a+=m(this,e,p.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=$"}),s[0]===30?($+=`$\\begin{aligned}
                ${n}
                &=${o*t}\\times \\dfrac{\\sqrt{3}}{2}\\\\
                &=${h(`${c(o*t/2,1)}\\sqrt{3}`)}
                \\end{aligned}$`,i=[`${o*t/2}\\sqrt{3}`]):s[0]===45?($+=`$\\begin{aligned}
                ${n}
                &=${o*t}\\times \\dfrac{\\sqrt{2}}{2}\\\\
                &=${h(`${c(o*t/2,1)}\\sqrt{2}`)}
                \\end{aligned}$`,i=[`${o*t/2}\\sqrt{2}`]):s[0]===60?($+=`$\\begin{aligned}
                ${n}
                &=${o*t}\\times \\dfrac{1}{2}\\\\
                &=${h(`${c(o*t/2,1)}`)}
                \\end{aligned}$`,i=[`${o*t/2}`]):s[0]===120?($+=`$\\begin{aligned}
                ${n}
                &=${o*t}\\times \\left(-\\dfrac{1}{2}\\right)\\\\
                &=${h(`${c(-o*t/2,1)}`)}
                \\end{aligned}$`,i=[`${-o*t/2}`]):s[0]===135?($+=`$\\begin{aligned}
                        ${n}
                        &=${o*t}\\times \\left(-\\dfrac{\\sqrt{2}}{2}\\right)\\\\
                        &=${h(`${c(-o*t/2,1)}\\sqrt{2}`)}
                        \\end{aligned}$`,i=[`${-o*t/2}\\sqrt{2}`]):s[0]===150?($+=`$\\begin{aligned}
                            ${n}
                            &=${o*t}\\times \\left(-\\dfrac{\\sqrt{3}}{2}\\right)\\\\
                            &=${h(`${c(-o*t/2,1)}\\sqrt{3}`)}
                            \\end{aligned}$`,i=[`${-o*t/2}\\sqrt{3}`]):($+=`$\\begin{aligned}
                            ${n}
                            &=${o*t}\\times (-1)\\\\
                            &=${h(`${c(-o*t,1)}`)}
                            \\end{aligned}$`,i=[`${-o*t}`]),l(this,e,{reponse:{value:i}})}break;default:{const o=K(0,0,"A","below"),t=d(3,6),g=d(4,8),s=new L(t*g).div(2),n=B(o,g,0,"B","below"),F=[[30,"\\dfrac{\\pi}{6}","\\dfrac{\\sqrt{3}}{2}",`${h(`${c(s,1)}\\sqrt{3}`)}`,`${h(`-${c(s,1)}\\sqrt{3}`)}`,`${c(s,1)}\\sqrt{3}`,"\\dfrac{5\\pi}{6}",150],[45,"\\dfrac{\\pi}{4}","\\dfrac{\\sqrt{2}}{2}",`${h(`${c(s,1)}\\sqrt{2}`)}`,`${h(`-${c(s,1)}\\sqrt{2}`)}`,`${c(s,1)}\\sqrt{2}`,"\\dfrac{3\\pi}{4}",135],[60,"\\dfrac{\\pi}{3}","\\dfrac{1}{2}",`${h(`${c(s,1)}`)}`,`${h(`-${c(s,1)}`)}`,`${c(s,1)}`,"\\dfrac{2\\pi}{3}",120]],r=x(F),w=`&=${t}\\times ${g}\\times \\cos\\left(${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}\\right)\\\\
                         &=${t*g}\\times${r[2]}\\\\
                         &=${r[3]}
                         \\end{aligned}$`,f=`&=-${t}\\times ${g}\\times \\cos\\left(${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}\\right)\\\\
                         &=-${t*g}\\times${r[2]}\\\\
                         &=${r[4]}
                         \\end{aligned}$`,A=`&=-${t}\\times ${g}\\times \\cos\\left(${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}\\right)\\\\
                                  &=-${t*g}\\times\\left(-${r[2]}\\right)\\\\
                                  &=${r[3]}
                                  \\end{aligned}$`,y=`&=${t}\\times ${g}\\times \\cos\\left(${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}\\right)\\\\
                                  &=${t*g}\\times\\left(-${r[2]}\\right)\\\\
                                  &=${r[4]}
                                  \\end{aligned}$`,v="On écrit le produit scalaire en utilisant des vecteurs de même origine.<br>",u=B(n,t,r[0],"C","above"),C=B(o,t,r[0],"D","above"),Q=N(o,n,u,C),T=q(n,o,"black",.5,""),j=q(u,n,"black",.5,""),E=P(n,o,C,"black",1,`${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}`),D=[];switch(D.push(S(o,n,u,C),T,j,E,Q),a="$ABCD$ est un parallélogramme.<br>",a+=V(Object.assign({zoom:1,scale:.6},M(D)),D),d(1,10)){case 1:a+="Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>",$=`On a :<br> $\\begin{aligned}
         \\overrightarrow{AB}\\cdot \\overrightarrow{AD}&=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
         ${w}`,i=`${r[5]}`,l(this,e,{reponse:{value:i}}),a+=m(this,e,p.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{AB}\\cdot \\overrightarrow{AD}=$"});break;case 2:a+="Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{BC}$.<br>",$=v+`Comme  $\\overrightarrow{BC}=\\overrightarrow{AD}$, on a $\\overrightarrow{AB}\\cdot \\overrightarrow{BC}=\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
                         $\\begin{aligned}
             \\overrightarrow{AB}\\cdot \\overrightarrow{BC}&= \\overrightarrow{AB}\\cdot \\overrightarrow{AD}\\\\
             &=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
             ${w}`,i=`${r[5]}`,l(this,e,{reponse:{value:i}}),a+=m(this,e,p.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{AB}\\cdot \\overrightarrow{BC}=$"});break;case 3:a+="Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{CB}$.<br>",$=v+`Comme  $\\overrightarrow{CB}=-\\overrightarrow{AD}$, on a $\\overrightarrow{AB}\\cdot \\overrightarrow{CB}=-\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
                         $\\begin{aligned}
             \\overrightarrow{AB}\\cdot \\overrightarrow{CB}&= -\\overrightarrow{AB}\\cdot \\overrightarrow{AD}\\\\
             &=-AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
             ${f}`,i=`-${r[5]}`,l(this,e,{reponse:{value:i}}),a+=m(this,e,p.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{AB}\\cdot \\overrightarrow{CB}=$"});break;case 4:a+="Calculer $\\overrightarrow{DC}\\cdot \\overrightarrow{BC}$.<br>",$=v+`Comme  $\\overrightarrow{DC}=\\overrightarrow{AB}$ et $\\overrightarrow{BC}=\\overrightarrow{AD}$, on a $\\overrightarrow{DC}\\cdot \\overrightarrow{BC}=\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
                             $\\begin{aligned}
                 \\overrightarrow{DC}\\cdot \\overrightarrow{BC}&= \\overrightarrow{AB}\\cdot \\overrightarrow{AD}\\\\
                 &=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
                 ${w}`,i=`${r[5]}`,l(this,e,{reponse:{value:i}}),a+=m(this,e,p.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{DC}\\cdot \\overrightarrow{BC}=$"});break;case 5:a+="Calculer $\\overrightarrow{CD}\\cdot \\overrightarrow{AD}$.<br>",$=v+`Comme  $\\overrightarrow{CD}=-\\overrightarrow{AB}$, on a $\\overrightarrow{CD}\\cdot \\overrightarrow{AD}=-\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
                                 $\\begin{aligned}
                     \\overrightarrow{CD}\\cdot \\overrightarrow{AD}&= -\\overrightarrow{AB}\\cdot \\overrightarrow{AD}\\\\
                     &=-AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
                     ${f}`,i=`-${r[5]}`,l(this,e,{reponse:{value:i}}),a+=m(this,e,p.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{CD}\\cdot \\overrightarrow{AD}=$"});break;case 6:a+="Calculer $\\overrightarrow{DA}\\cdot \\overrightarrow{BA}$.<br>",$=v+`Comme  $\\overrightarrow{DA}=-\\overrightarrow{AD}$ et $\\overrightarrow{BA}=-\\overrightarrow{AB}$, on a $\\overrightarrow{DA}\\cdot \\overrightarrow{BA}=\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
                                     $\\begin{aligned}
                 \\overrightarrow{DA}\\cdot \\overrightarrow{BA}&= \\overrightarrow{AB}\\cdot \\overrightarrow{AD}\\\\
                 &=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
                 ${w}`,i=`${r[5]}`,l(this,e,{reponse:{value:i}}),a+=m(this,e,p.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{DA}\\cdot \\overrightarrow{BA}=$"});break;case 7:a+="Calculer $\\overrightarrow{DA}\\cdot \\overrightarrow{DC}$.<br>",$=v+`Comme  $ABCD$ est un parallélogramme, les angles consécutifs sont supplémentaires. <br>
                    Ainsi, $\\widehat{ADC}=${this.sup2?"\\pi":"180^\\circ"}-${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}= ${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}$.<br>
                                         $\\begin{aligned}
                     \\overrightarrow{DA}\\cdot \\overrightarrow{DC}&= \\overrightarrow{DA}\\cdot \\overrightarrow{DC}\\\\
                     &=DA\\times DC\\times \\cos(\\widehat{ADC})\\\\
                     ${y}`,i=`-${r[5]}`,l(this,e,{reponse:{value:i}}),a+=m(this,e,p.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{DA}\\cdot \\overrightarrow{DC}=$"});break;case 8:a+="Calculer $\\overrightarrow{AD}\\cdot \\overrightarrow{DC}$.<br>",$=v+`Comme  $\\overrightarrow{AD}=-\\overrightarrow{DA}$, $\\overrightarrow{AD}\\cdot \\overrightarrow{DC}=-\\overrightarrow{DA}\\cdot \\overrightarrow{DC}$.<br>
                        De plus,  $ABCD$ est un parallélogramme donc ses angles consécutifs sont supplémentaires. <br>
                        Ainsi, $\\widehat{ADC}=${this.sup2?"\\pi":"180^\\circ"}-${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}= ${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}$.<br>
                                             $\\begin{aligned}
                         \\overrightarrow{AD}\\cdot \\overrightarrow{DC}&= -\\overrightarrow{DA}\\cdot \\overrightarrow{DC}\\\\
                         &=-DA\\times DC\\times \\cos(\\widehat{ADC})\\\\
                         ${A}`,i=`${r[5]}`,l(this,e,{reponse:{value:i}}),a+=m(this,e,p.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{AD}\\cdot \\overrightarrow{DC}=$"});break;case 9:a+="Calculer $\\overrightarrow{BC}\\cdot \\overrightarrow{DC}$.<br>",$=v+`Comme  $\\overrightarrow{BC}=-\\overrightarrow{DA}$, on a  $\\overrightarrow{BC}\\cdot \\overrightarrow{DC}=-\\overrightarrow{DA}\\cdot \\overrightarrow{DC}$.<br>
                        De plus,  $ABCD$ est un parallélogramme donc ses angles consécutifs sont supplémentaires. <br>
                        Ainsi, $\\widehat{ADC}=${this.sup2?"\\pi":"180^\\circ"}-${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}= ${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}$.<br>
                                             $\\begin{aligned}
                         \\overrightarrow{BC}\\cdot \\overrightarrow{DC}&= -\\overrightarrow{DA}\\cdot \\overrightarrow{DC}\\\\
                         &=-DA\\times DC\\times \\cos(\\widehat{ADC})\\\\
                         ${A}`,i=`${r[5]}`,l(this,e,{reponse:{value:i}}),a+=m(this,e,p.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{BC}\\cdot \\overrightarrow{DC}=$"});break;default:a+="Calculer $\\overrightarrow{BA}\\cdot \\overrightarrow{CB}$.<br>",$=v+`Comme  $\\overrightarrow{CB}=-\\overrightarrow{BC}$, on a  $\\overrightarrow{BA}\\cdot \\overrightarrow{CB}=-\\overrightarrow{BA}\\cdot \\overrightarrow{BC}$.<br>
                            De plus,  $ABCD$ est un parallélogramme donc ses angles consécutifs sont supplémentaires. <br>
                            Ainsi, $\\widehat{ABC}=${this.sup2?"\\pi":"180^\\circ"}-${this.sup2?`${r[1]}`:`${r[0]}^\\circ`}= ${this.sup2?`${r[6]}`:`${r[7]}^\\circ`}$.<br>
                                                 $\\begin{aligned}
                             \\overrightarrow{BA}\\cdot \\overrightarrow{CB}&= -\\overrightarrow{BA}\\cdot \\overrightarrow{BC}\\\\
                             &=-BA\\times BC\\times \\cos(\\widehat{ABC})\\\\
                             ${A}`,i=`${r[5]}`,l(this,e,{reponse:{value:i}}),a+=m(this,e,p.clavierFullOperations,{texteAvant:"<br>$\\overrightarrow{BA}\\cdot \\overrightarrow{CB}=$"});break}break}}this.questionJamaisPosee(e,a)&&(this.listeQuestions[e]=a,this.listeCorrections[e]=$,e++),b++}R(this)}}export{Ct as dateDePublication,bt as default,wt as interactifReady,At as interactifType,Bt as refs,ut as titre,Dt as uuid};
//# sourceMappingURL=1G10-3-CY38JL9T.js.map
