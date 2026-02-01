import{E as Z,Y as J,$ as _,r as c,p as x,ap as C,F as d,m as r,x as m,n as u,q as Q,v as D,a4 as W,w as M,y as O,k as y,a as ee,K as te,o as ie,t as X}from"./index-CMKaCP9B.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const mt="Calculer des images ou des antécédents",pt=!0,xt="mathLive",ut="23/11/2025",bt="397d2",ft={"fr-fr":["2F20-5"],"fr-ch":[""]};function R(f,g,S,k){return`Soit $${f}$ la fonction définie sur $${g}$ par :
              ${X(`$${f}(x)=${S}$`)}
              Calculer l'image de $${k}$ par ${typeof k=="number"?`la fonction $${f}$`:`$${f}$`}.`}function A(f,g,S,k){return`Soit $${f}$ la fonction définie sur $${g}$ par :
                ${X(`$${f}(x)=${S}$`)}
                Déterminer les éventuels antécédents de $${k}$ par la fonction $${f}$.`}function T(f,g){return`On calcule l'image de $${g}$ en remplaçant $x$ par $${g}$ dans l'expression de $${f}$ : <br>`}function L(f,g,S){return`On cherche s'il existe $x\\in ${g}$ tel que $${f}(x)=${S}$.<br>`}function E(f,g){return`L'antécédent de $${f}$ est $${m(g)}$.`}class ht extends Z{constructor(){super(),this.spacing=2,this.spacingCorr=1.5,this.besoinFormulaireTexte=["Choix des fonctions",["Nombres séparés par des tirets  :","1 : Fonction affine","2 : Polynôme de degré 2","3 : Fonction $\\dfrac{a}{x}+b$","4: Fonction $\\dfrac{a}{x+b}+c$","5 : Mélange"].join(`
`)],this.besoinFormulaire2Texte=["Choix des valeurs",["Nombres séparés par des tirets  :","1 : Valeurs entières","2 : Valeurs fractionnaires","3 : Mélange"].join(`
`)],this.besoinFormulaire3Texte=["Type de calcul",["Nombres séparés par des tirets  :","1 : Calculer une image","2 : Calculer un antécédent","3 : Mélange"].join(`
`)],this.sup=5,this.sup2=3,this.sup3=3,this.nbQuestions=1}nouvelleVersion(){const g=J({saisie:this.sup,max:4,melange:5,defaut:5,nbQuestions:this.nbQuestions}).map(Number),S=[];for(const o of g)switch(o){case 1:S.push("affine");break;case 2:S.push("polynôme");break;case 3:S.push("a/x+b");break;case 4:S.push("a/(x+b)+c");break}const k=_(S,this.nbQuestions),I=J({saisie:this.sup2,max:2,melange:3,defaut:3,nbQuestions:this.nbQuestions}).map(Number).map(o=>o-1),q=J({saisie:this.sup3,max:2,melange:3,defaut:3,nbQuestions:this.nbQuestions}).map(Number).map(o=>o===1),F=["f","g","h","u","v","w"];for(let o=0,B,Y,$,K,z,t,e,a,i,s,n,l,h,j,P,G,w,N,V,v,b,p,H=0;o<this.nbQuestions&&H<50;){switch(K=c(-9,9,[0,1,-1]),z=c(-9,9,[K,0]),k[o]){case"affine":I[o]===0?(t=c(-5,12,[0,1]),e=c(-10,10,0),i=c(-12,12,0),$=x(F),q[o]?(n=t*i+e,b=R($,"\\mathbb{R}",y(t,e),i),p=T($,i)+`$\\begin {aligned}
                ${$}(${i})&=${t}\\times ${D(i)}${r(e)}\\\\
              &=${t*i}${r(e)}\\\\
              &=${m(n)}
              \\end{aligned}$`,u(this,o,{reponse:{value:n}})):(n=c(-10,10,0),i=new d(n-e,t),b=A($,"\\mathbb{R}",y(t,e),n),p=`On cherche $x$ tel que $${$}(x)=${n}$.<br>
                $\\begin{aligned}
                ${y(t,e)}&=${n}\\\\
                ${y(t,e)}${m(r(-e))}&=${n}${m(r(-e))}\\\\
                ${O(t)}x&=${n-e}\\\\
                x&=${i.texFractionSimplifiee}
                \\end{aligned}$<br>
                ${E(n,i.texFractionSimplifiee)}`,u(this,o,{reponse:{value:i}}))):(t=c(-5,10,[0,1]),s=x(C()),e=c(-9,9,0),$=x(F),q[o]?(P=new d(t*s.n,s.d),G=new d(e*s.d,s.d),l=new d(t*s.n+e*s.d,s.d),b=R($,"\\mathbb{R}",y(t,e),s.texFraction),p=T($,s.texFraction)+`$\\begin {aligned}
                ${$}\\left(${s.texFraction}\\right)&=${t}\\times ${s.texFraction}${r(e)}\\\\
              &=${P.texFractionSimplifiee}${r(e)}\\\\
             ${Number.isInteger(t*s.n/s.d)?" ":`&=${P.texFractionSimplifiee} ${r(G)}\\\\`}
              &=${m(l.texFractionSimplifiee)}
              \\end{aligned}$`,u(this,o,{reponse:{value:l}})):(n=x(C()),l=Q(n.n-e*n.d,t*n.d),b=A($,"\\mathbb{R}",y(t,e),n.texFraction),p=`On cherche $x$ tel que $${$}(x)=${n.texFraction}$.<br>
              $\\begin{aligned}
              ${y(t,e)}&=${n.texFraction}\\\\
              ${y(t,e)}${m(r(-e))}&=${n.texFraction}${m(r(-e))}\\\\
              ${O(t)}x&=${Q(n.n-e*n.d,n.d).texFraction}\\\\
              x&=${l.texFraction}${l.texSimplificationAvecEtapes()}
              \\end{aligned}$<br>
              ${E(n.texFraction,l.texFractionSimplifiee)}`,u(this,o,{reponse:{value:l}})));break;case"polynôme":I[o]===0?(t=c(-3,5,[0,1,-1]),e=c(-5,5,0),a=c(-10,10,0),i=c(-5,5,[0,1,-1]),$=x(F),q[o]?(n=t*i**2+e*i+a,b=R($,"\\mathbb{R}",M(0,t,e,a),i),p=T($,i)+`$\\begin {aligned}
                ${$}(${i})&=${t}\\times ${D(i)}^2${r(e)}\\times ${D(i)}${r(a)}\\\\
                &=${t}\\times ${i**2}${r(e*i)}${r(a)}\\\\
                &=${t*i**2}${r(e*i)}${r(a)}\\\\
                &=${m(n)}
                \\end{aligned}$`,u(this,o,{reponse:{value:n}})):(t=c(-5,10,0),a=c(-5,10,0),i=c(-5,16),n=t*i+a,$=x(F),b=A($,"\\mathbb{R}",M(0,t,0,a),n),this.interactif&&(b+=`<br>S'il y a plusieurs antécédents, les écrire séparés par un point-virgule.<br>
                S'il n'y a pas d'antécédent, écrire $\\emptyset$.`),p=L($,"\\mathbb{R}",n)+`On résout cette équation en isolant le carré.<br>
                  $\\begin{aligned}
                 ${M(0,t,0,a)}&=${n}\\\\
                 ${O(t)}x^2&=${n-a}\\\\
                 x^2&=\\dfrac{${n-a}}{${t}}\\\\
                 x^2&=${i}
                 \\end{aligned}$ <br>`,i===0?(p+=` Cette équation n'a qu'une seule solution : $0$.<br>
                  ${E(n,"0")} `,u(this,o,{reponse:{value:0}})):i<0?(p+=` Cette équation n'a pas de solution car un carré est toujours positif.<br>
                  Il n'existe pas d'antécédent de $${n}$ par la fonction $${$}$. `,u(this,o,{reponse:{value:"\\emptyset",options:{ensembleDeNombres:!0}}})):i===1||i===4||i===9||i===16?(p+=` Cette équation a deux solutions : $-\\sqrt{${i}}=-${Math.sqrt(i)}$ et $\\sqrt{${i}}=${Math.sqrt(i)}$.<br>
                    Les antécédents de $${n}$ sont : $${m(`-${Math.sqrt(i)}`)}$ et $${m(Math.sqrt(i))}$. `,u(this,o,{reponse:{value:`-${Math.sqrt(i)};${Math.sqrt(i)}`,options:{suiteDeNombres:!0}}})):(p+=` Cette équation a deux solutions : $-\\sqrt{${i}}$ et $\\sqrt{${i}}$.<br>
                    Les antécédents de $${n}$ sont : $${m(`-\\sqrt{${i}}`)}$ et $${m(`\\sqrt{${i}}`)}$. `,u(this,o,{reponse:{value:`-\\sqrt{${i}};\\sqrt{${i}}`,options:{suiteDeNombres:!0}}})))):q[o]?(t=c(-2,2,0),e=c(-2,3,0),a=c(-3,3,0),s=x(C()),$=x(F),P=new d(t*s.n**2,s.d**2),w=new d(e*s.n,s.d),N=new d(e*s.n*s.d,s.d**2),V=new d(a*s.d**2,s.d**2),l=new d(t*s.n**2+e*s.n*s.d+a*s.d**2,s.d**2),b=R($,"\\mathbb{R}",M(0,t,e,a),s.texFraction),p=`On calcule l'image de $${s.texFraction}$ en remplaçant $x$ par $${s.texFraction}$ dans l'expression de $${$}$ : <br>
                  
                  $\\begin{aligned}
                  ${$}\\left(${s.texFraction}\\right)&=${t===1?"":t===-1?"-":`${t}\\times`} \\left(${s.texFraction}\\right)^2${e===1?"+":e===-1?"-":`${e}\\times`}${s.texFraction}${r(a)}\\\\
                  &=${t===1?"":t===-1?"-":`${t}\\times`} \\dfrac{${s.n**2}}{${s.d**2}}${w.ecritureAlgebrique}${r(a)}\\\\
                  &=${new d(t*s.n**2,s.d**2).texFractionSimplifiee}${N.ecritureAlgebrique}${V.ecritureAlgebrique}\\\\
                  &=${m(l.texFractionSimplifiee)}
                  \\end{aligned}$`,u(this,o,{reponse:{value:l}})):(t=c(-2,2,0),e=0,a=c(-3,3,0),s=x(C()),$=x(F),v=new d(s.n-a*s.d,t*s.d),b=A($,"\\mathbb{R}",M(0,t,0,a),s.texFraction),this.interactif&&(b+=`<br>S'il y a plusieurs antécédents, les écrire séparés par un point-virgule.<br>
                S'il n'y a pas d'antécédent, écrire $\\emptyset$.`),p=L($,"\\mathbb{R}",s.texFraction)+`On résout cette équation en isolant le carré.<br>
                  $\\begin{aligned}
                 ${M(0,t,0,a)}&=${s.texFraction}\\\\
                 ${O(t)}x^2&=${s.texFraction} ${r(-a)}\\\\
                 ${O(t)}x^2&=${new d(s.n-a*s.d,s.d).texFractionSimplifiee}\\\\
                 ${t===1?"":`x^2&=${v.texFractionSimplifiee}`}
                 \\end{aligned}$ <br>`,new d(s.n-a*s.d,t*s.d).signe===-1?(p+=` Cette équation n'a pas de solution car un carré est toujours positif.<br>
                  Il n'existe pas d'antécédent de $${s.texFraction}$ par la fonction $${$}$. `,u(this,o,{reponse:{value:"\\emptyset",options:{ensembleDeNombres:!0}}})):(p+=` Cette équation a deux solutions : $-\\sqrt{${v.texFractionSimplifiee}}$ et $\\sqrt{${v.texFractionSimplifiee}}$.<br>
                    Les antécédents de $${s.texFraction}$ sont : $${m(`-\\sqrt{${v.texFractionSimplifiee}}`)}$ et $${m(`\\sqrt{${v.texFractionSimplifiee}}`)}$. `,u(this,o,{reponse:{value:`-\\sqrt{${v.texFraction}};\\sqrt{${v.texFraction}}`,options:{suiteDeNombres:!0}}})));break;case"a/x+b":switch(I[o]){case 0:if(q[o]){for(t=c(-3,9,0),e=c(-3,9,0),i=c(-9,9,[0,1,-1]),$=x(F);W(t,i)!==1;)t=c(-9,9,0);l=new d(t+e*i,i),h=new d(t,i),j=new d(e*i,i),b=R($,"\\mathbb{R}^*",`\\dfrac{${t}}{x}${r(e)}`,i),p=T($,i)+`$\\begin{aligned}
                  ${$}(${i})&=\\dfrac{${t}}{${i}}${r(e)}\\\\
                &=${h.texFractionSimplifiee}${r(e)}\\\\
                &=${h.texFractionSimplifiee}${j.ecritureAlgebrique}\\\\
                &=${m(l.texFractionSimplifiee)}
                \\end{aligned}$`,u(this,o,{reponse:{value:l}})}else t=c(-3,10,0),e=c(-9,9,0),n=c(-9,9,[0,1,-1,e]),$=x(F),l=new d(t,n-e),b=A($,"\\mathbb{R}^*",`\\dfrac{${t}}{x}${r(e)}`,n),p=L($,"\\mathbb{R}^*",n)+`$\\begin{aligned}
                      \\dfrac{${t}}{x}${r(e)}&=${n}\\\\
                      \\dfrac{${t}}{x}${r(e)}${m(r(-e))}&=${n}${m(r(-e))}\\\\
                      \\dfrac{${t}}{x}&=${n-e}\\\\
                      x\\times${D(n-e)} &=${t} \\\\
                      x&=${l.texFraction}${l.texSimplificationAvecEtapes()}\\\\
                                                \\end{aligned}$<br>
                ${E(n,l.texFractionSimplifiee)}`,u(this,o,{reponse:{value:l}});break;default:q[o]?(t=c(-3,9,0),e=c(-3,9,0),i=x(C()),l=new d(t*i.d+e*i.n,i.n),h=new d(t*i.d,i.n),j=new d(e*i.n,i.n),$=x(F),b=R($,"\\mathbb{R}^*",`\\dfrac{${t}}{x}${r(e)}`,i.texFraction),p=T($,i.texFraction)+`$\\begin{aligned}
                  ${$}\\left(${i.texFraction}\\right)
              &=\\dfrac{${t}}{${i.texFraction}}${r(e)}\\\\
              &=\\dfrac{${t}\\times ${i.d}}{${i.n}}${r(e)}\\\\
              &=${h.texFractionSimplifiee}${r(e)}\\\\
              &=${h.texFractionSimplifiee}${j.ecritureAlgebrique}\\\\
              &=${m(l.texFractionSimplifiee)}
                  \\end{aligned}$`,u(this,o,{reponse:{value:l}})):(t=c(-9,9,0),e=c(-9,9,0),n=x(C()),h=Q(n.n-e*n.d,n.d),l=Q(t*n.d,n.n-e*n.d),$=x(F),b=A($,"\\mathbb{R}^*",`\\dfrac{${t}}{x}${r(e)}`,n.texFraction),p=L($,"\\mathbb{R}^*",n.texFraction)+`$\\begin{aligned}
                      \\dfrac{${t}}{x}${r(e)}&=${n.texFraction}\\\\
                      \\dfrac{${t}}{x}${r(e)}${m(r(-e))}&=${n.texFraction}${m(r(-e))}\\\\
                      \\dfrac{${t}}{x}&=${h.texFraction}\\\\
                      x\\times${D(n.n-e*n.d)} &=${t}\\times ${n.d} \\\\
                      x&=${l.texFraction}${l.texSimplificationAvecEtapes()}
                                                \\end{aligned}$<br>
                ${E(n.texFraction,l.texFractionSimplifiee)}`,u(this,o,{reponse:{value:l}}));break}break;default:switch(I[o]){case 0:if(q[o]){for(t=c(-2,5,0),e=c(-5,5,0),a=c(-3,9,0),i=c(-5,5,[0,-e]),$=x(F);W(t,i+e)!==1;)i=c(-9,9,[0,-e]);l=new d(t+a*(i+e),i+e),h=new d(t,i+e),b=R($,`\\mathbb{R}\\smallsetminus\\{${-e}\\}`,`\\dfrac{${t}}{x${r(e)}}${r(a)}`,i),p=T($,i)+`$\\begin{aligned}
                  ${$}(${i})&=\\dfrac{${t}}{${i}${r(e)}}${r(a)}\\\\
                &=\\dfrac{${t}}{${i+e}}${r(a)}\\\\
                &=${h.texFractionSimplifiee}${r(a)}\\\\
                &=${m(l.texFractionSimplifiee)}
                \\end{aligned}$`,u(this,o,{reponse:{value:l}})}else t=c(-2,5,0),e=c(-5,5,0),a=c(-3,9,0),n=c(-5,5,[0,-e,a]),$=x(F),l=new d(t,n-a),w=new d(t,n-a),b=A($,`\\mathbb{R}\\smallsetminus\\{${-e}\\}`,`\\dfrac{${t}}{x${r(e)}}${r(a)}`,n),p=L($,`\\mathbb{R}\\smallsetminus\\{${-e}\\}`,n)+`$\\begin{aligned}
                      \\dfrac{${t}}{x${r(e)}}${r(a)}&=${n}\\\\
                      \\dfrac{${t}}{x${r(e)}}${r(a)}${m(r(-a))}&=${n}${m(r(-a))}\\\\
                      \\dfrac{${t}}{x${r(e)}}&=${n-a}\\\\
                      (x${r(e)})\\times${D(n-a)} &=${t} \\\\
                      x${r(e)}&=${w.texFractionSimplifiee}\\\\
                      x&=${w.texFractionSimplifiee}${r(-e)}\\\\
                      x&=${m(new d(t-e*(n-a),n-a).texFractionSimplifiee)}
                      \\end{aligned}$<br>
                ${E(n,new d(t-e*(n-a),n-a).texFractionSimplifiee)}`,u(this,o,{reponse:{value:new d(t-e*(n-a),n-a)}});break;default:q[o]?(t=c(-2,5,0),e=c(-5,5,0),a=c(-3,9,0),i=x(C().filter(U=>U.n!==-e*U.d)),$=x(F),w=new d(i.n+e*i.d,i.d),h=new d(t*i.d,i.n+e*i.d),V=new d(a*(i.n+e*i.d),i.n+e*i.d),l=new d(t*i.d+a*(i.n+e*i.d),i.n+e*i.d),b=R($,`\\mathbb{R}\\smallsetminus\\{${-e}\\}`,`\\dfrac{${t}}{x${r(e)}}${r(a)}`,i.texFraction),p=T($,i.texFraction)+`$\\begin{aligned}
                ${$}\\left(${i.texFraction}\\right)&=\\dfrac{${t}}{${i.texFraction}${r(e)}}${r(a)}\\\\
              &=\\dfrac{${t}}{${w.texFraction}}${r(a)}\\\\
              &=${t}\\times ${w.inverse().texFraction}${r(a)}\\\\
              &=${h.texFractionSimplifiee}${r(a)}\\\\
              &=${h.texFractionSimplifiee}${V.ecritureAlgebrique}\\\\
              &=${m(l.texFractionSimplifiee)}
              \\end{aligned}$`,u(this,o,{reponse:{value:l}})):(t=c(-2,5,0),e=c(-5,5,0),a=c(-3,9,0),n=x(C()),$=x(F),h=Q(n.n-a*n.d,n.d),w=Q(t*n.d,n.n-a*n.d),N=Q(t*n.d-e*(n.n-a*n.d),n.n-a*n.d),b=A($,`\\mathbb{R}\\smallsetminus\\{${-e}\\}`,`\\dfrac{${t}}{x${r(e)}}${r(a)}`,n.texFraction),p=L($,`\\mathbb{R}\\smallsetminus\\{${-e}\\}`,n.texFraction)+`$\\begin{aligned}
                      \\dfrac{${t}}{x${r(e)}}${r(a)}&=${n.texFraction}\\\\
                      \\dfrac{${t}}{x${r(e)}}${r(a)}${m(r(-a))}&=${n.texFraction}${m(r(-a))}\\\\
                      \\dfrac{${t}}{x${r(e)}}&=${h.texFraction}\\\\
                      (x${r(e)})\\times${D(n.n-a*n.d)} &=${t}\\times ${n.d} \\\\
                      x${r(e)}&=${w.texFractionSimplifiee}\\\\
                      x&=${w.texFractionSimplifiee}${r(-e)}\\\\
                      x&=${N.texFraction}${N.texSimplificationAvecEtapes()}
                      \\end{aligned}$<br>
                ${E(n.texFraction,N.texFractionSimplifiee)}`,u(this,o,{reponse:{value:N}}));break}break}B=b,B+=" "+ee(this,o,te.clavierEnsemble,{texteAvant:"<br>"}),Y=p,this.questionJamaisPosee(o,k[o],K,z,I[o])&&(this.listeQuestions[o]=B,this.listeCorrections[o]=Y,o++),H++}ie(this)}}export{ut as dateDePublication,ht as default,pt as interactifReady,xt as interactifType,ft as refs,mt as titre,bt as uuid};
//# sourceMappingURL=2F20-5-rEhYYg0T.js.map
