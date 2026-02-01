import{E as T,Y as Q,r as q,y as c,D as o,m as a,v as E,F as u,x as g,p as S,o as P}from"./index-Dkwu26bg.js";import{E as C}from"./EquationSecondDegre-CE3F99DZ.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./MonomePlusieursVariables-BV89JCNC.js";import"./PolynomePlusieursVariables-DkThvlR5.js";const ke="Déterminer l'équation de la tangente à une courbe ou un cercle passant par un point",ze="04/09/2025",Be=!1,Ge="asdea",He={"fr-fr":[],"fr-ch":["2mEqCar-3"]};class Ke extends T{constructor(){super(),this.besoinFormulaireTexte=["Tangente à",`1 : Une courbe
2 : Un cercle
3 : Mélange`],this.sup=1,this.nbQuestions=3}nouvelleVersion(){const L=Q({saisie:this.sup,min:1,max:2,melange:3,defaut:3,listeOfCase:["courbe","cercle"],shuffle:!0,nbQuestions:this.nbQuestions});for(let b=0,w=0;b<this.nbQuestions&&w<50;){let y="",p="",v=[];if(L[b]==="courbe"){let d,l,r,m,$,i;do $=q(-5,5,[0]),i=q(-5,5,[0]),d=q(-5,5,[0]),m=q(-5,5,[0]),l=m-i+d*$,r=2*l+d;while(l===0);y=`Déterminer les équations de toutes les tangentes à la courbe d'équation $y = ${c(l)}x^2${o(r)}x${a(m)}$ passant par le point $(${$} \\,;\\, ${i})$.`,p=`On pose $y=ax+b$ la droite tangente avec inconnues $a$ et $b$.<br> On va déterminer les valeurs de $a$ et $b$.<br> La droite passe par le point $(${$}\\,;\\,${i})$, donc $${i}=${$}a+b$, d'où $b=${i}${o(-$)}a$. On obtient 
            \\[y=ax${a(i)}${o(-$)}a\\]
            On impose que cette droite et la courbe aient un unique point d'intersection, donc que le système
            \\[\\begin{cases}
            y=${c(l)}x^2${o(r)}x${o(m)}\\\\
            y=ax${a(i)}${o(-$)}a
            \\end{cases}\\]
            ait une unique solution. On résout le système par comparaison :
            \\[${c(l)}x^2${o(r)}x${o(m)}=ax${a(i)}${o(-$)}a\\]
            Cette équation est équivalente à 
            \\[${c(l)}x^2${r<0?`-(${-r}+a)`:`(${r}-a)`}x${o($)}a${a(m-i)}=0\\]
            Le discriminant de ce polynôme doit être nul, afin que l'équation ait une unique solution. Il vaut :
            \\[\\Delta=(${r}-a)^2-4\\cdot${E(l)}\\cdot\\left(${c($)}a${a(m-i)}\\right).\\] On impose donc $\\Delta=0$, d'où
            \\[(${r}-a)^2-4\\cdot${E(l)}\\cdot\\left(${c($)}a${a(m-i)}\\right)=0\\]
            On obtient l'équation du second degré en $a$ suivante :
            \\[a^2${o(-(2*r+4*l*$))}a${a(r*r-4*l*(m-i))}=0.\\]
            On résout cette équation et on obtient comme ensemble de solutions
            `;const x=C.aPartirDesCoefficients(new u(1,1),new u(-(2*r+4*l*$),1),new u(r*r-4*l*(m-i),1),new u(0,1),new u(0,1),new u(0,1),{format:"initial",variable:"a"}),t=x.solutionFrac();if(p+=`$${x.ensembleDeSolutionsTex}$.`,x.delta.num===0){p+=` Il y a qu'une seule valeur de $a$ possible et donc une seule tangente.
          On déduit l'ordonnée à l'origine en substituant la valeur trouvée pour $a$ dans $b=${i}${o(-$)}a$.<br>`;const e=t[0],n=new u(i,1).sommeFraction(e.multiplieEntier(-$));p+=`\\[b=${n.texFractionSimplifiee}\\]
        L'équation de la tangente est donc :<br>
        \\[${g(`y=${c(e.simplifie())}x${n.simplifie().texFractionSignee}`)}.\\]
        `}else{`${i}${o(-$)}`;const e=t[0],n=t[1],s=new u(i,1).sommeFraction(n.multiplieEntier(-$)),f=new u(i,1).sommeFraction(e.multiplieEntier(-$));p+=`\\[b=${s.texFractionSimplifiee} \\text{ si } a=${n.texFractionSimplifiee}\\quad \\text{ ou } b=${f.texFractionSimplifiee} \\text{ si } a=${e.texFractionSimplifiee}\\]
        Les équations des tangentes sont donc :<br>
        \\[${g(`y=${c(n.simplifie())}x${s.simplifie().texFractionSignee}`)} \\text{ et } ${g(`y=${c(e.simplifie())}x${f.simplifie().texFractionSignee}`)}.\\]
        `}v=[x.solutionsListeTex[0]]}else{const d=[[[1,8],[4,7]],[[9,13],[15,5]]],l=S([0,1]),r=[[0,0],[0,1],[1,0],[1,1]],m=S([0,1,2,3]),$=S([0,1]),i=d[l][r[m][0]][r[m][1]],x=d[l][r[m][0]][(r[m][1]+1)%2];let t,e,n,s;n=q(-14,14,[0]),s=q(-14,14,[0]),t=d[l][(r[m][0]+1)%2][$]+n,e=d[l][(r[m][0]+1)%2][($+1)%2]+s,y=`Déterminer les équations de toutes les tangentes au cercle d'équation $(x${a(-n)})^2+(y${a(-s)})^2 = ${i**2}$ passant par le point $(${t} \\,;\\, ${e})$.`,p=`On pose $y=ax+b$ la droite tangente avec inconnues $a$ et $b$.<br> On va déterminer les valeurs de $a$ et $b$.<br> La droite passe par le point $(${t}\\,;\\,${e})$, donc $${e}=${c(t)}a+b$, d'où $b=${e}${o(-t)}a$. On obtient 
            \\[y=ax${a(e)}${o(-t)}a\\]
            On impose que cette droite et la courbe aient un unique point d'intersection, donc que le système
            \\[\\begin{cases}
             ${i**2}=(x${a(-n)})^2+(y${a(-s)})^2\\\\
            y=ax${a(e)}${o(-t)}a
            \\end{cases}\\]
            ait une unique solution. On résout le système par substitution de la valeur de $y$ dans la première équation :
            \\[\\begin{cases}
             ${i**2}=(x${a(-n)})^2+(ax${a(e)}${o(-t)}a${a(-s)})^2\\\\
            y=ax${a(e)}${o(-t)}a
            \\end{cases}\\iff\\begin{cases}
             ${i**2}=(x${a(-n)})^2+(ax${o(-t)}a${a(e-s)})^2\\\\
            y=ax${a(e)}${o(-t)}a
            \\end{cases}\\]
            La première équation du système est équivalente à 
            \\[(a^2+1)x^2+(${c(-2*t)}a^2${o(2*e-2*s)}a${o(-2*n)})x${o(t**2)}a^2${o(2*t*s-2*e*t)}a${a(n**2+(e-s)**2-i**2)}=0\\]
            Le discriminant de ce polynôme doit être nul, afin que l'équation ait une unique solution. Il vaut :
            \\[\\Delta=(${c(-2*t)}a^2${o(2*e-2*s)}a${o(-2*n)})^2-4(a^2+1)(${c(t**2)}a^2${o(2*t*s-2*e*t)}a${a(n**2+(e-s)**2-i**2)}).\\] On impose donc $\\Delta=0$ et on obtient l'équation du second degré en $a$ suivante :
            \\[${c(4*i**2-4*t**2+8*t*n-4*n**2)}a^2${o(8*t*e-8*n*e-8*t*s+8*n*s)}a${a(4*i**2-4*e**2+8*e*s-4*s**2)}=0.\\]
            On résout cette équation et on obtient les deux solutions
            `;const f=C.aPartirDesCoefficients(new u(4*i**2-4*t**2+8*t*n-4*n**2,1),new u(8*t*e-8*n*e-8*t*s+8*n*s,1),new u(4*i**2-4*e**2+8*e*s-4*s**2,1),new u(0,1),new u(0,1),new u(0,1),{format:"initial",variable:"a"});p+=`$${f.ensembleDeSolutionsTex}$. Ces deux solutions correspondent aux pentes des deux tangentes.<br> On en déduit l'ordonnées à l'origine de chaque droite en substituant la valeur trouvée pour $a$ dans $b=${e}${o(-t)}a$.<br>`;const F=new u(x*i+t*(s-e)+n*e-n*s,i**2-(t-n)**2),h=new u(-x*i+t*(s-e)+n*e-n*s,i**2-(t-n)**2),O=new u(e,1).sommeFraction(h.multiplieEntier(-t)),D=new u(e,1).sommeFraction(F.multiplieEntier(-t));p+=`\\[b=${O.texFractionSimplifiee} \\text{ si } a=${h.texFractionSimplifiee}\\quad \\text{ ou } b=${D.texFractionSimplifiee} \\text{ si } a=${F.texFractionSimplifiee}\\]
        Les équations des tangentes sont donc :<br>
        \\[${g(`y=${c(h.simplifie())}x${O.simplifie().texFractionSignee}`)} \\text{ et } ${g(`y=${c(F.simplifie())}x${D.simplifie().texFractionSignee}`)}.\\]
        
`,v=[f.solutionsListeTex[0],f.solutionsListeTex[1]]}this.questionJamaisPosee(b,v[0])&&(this.listeQuestions[b]=y,this.listeCorrections[b]=p,b++),w++}P(this)}}export{ze as dateDePublication,Ke as default,Be as interactifReady,He as refs,ke as titre,Ge as uuid};
//# sourceMappingURL=2mEQ3-3-zddbZyv4.js.map
