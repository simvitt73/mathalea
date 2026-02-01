var q=Object.defineProperty;var h=(x,s,p)=>s in x?q(x,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):x[s]=p;var g=(x,s,p)=>h(x,typeof s!="symbol"?s+"":s,p);import{s as f,r as t,B as a,a1 as b,p as u}from"./index-CMKaCP9B.js";import{E as v}from"./ExerciceQcmA-yzB4dxov.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ExerciceQcm-Bg9RomNU.js";import"./lists-SAG-gkx2.js";const Dn="28/07/2025",Gn="4c3c0",Mn={"fr-fr":["1A-F03-1"],"fr-ch":[]},Nn=!0,Pn="qcm",Qn="true",jn="qcmMono",zn="Reconnaître une fonction affine";class Hn extends v{constructor(){super();g(this,"versionOriginale",()=>{this.enonce=`On considère les trois fonctions définies sur $\\mathbb{R}$ par : <br>
    $f_1\\,:\\,x \\longmapsto x^2-(1-x)^2$${f(8)}$f_2\\,:\\,x \\longmapsto \\dfrac{x}{2}-\\left(1+\\dfrac{1}{\\sqrt{2}}\\right)$${f(8)}$f_3\\,:\\,x \\longmapsto\\dfrac{5-\\dfrac{2}{3}x}{0,7}$<br>

    On peut affirmer que :`,this.correction=`En développant, on obtient :<br> 
    $\\begin{aligned}
    f_1(x)&=x^2-(1-x)^2\\\\
    &=x^2-(1-2x+x^2)\\\\
    &=2x-1
    \\end{aligned}$<br>
    On retrouve une forme $mx+p$ avec $m=2$ et $p=1$, donc $f_1$ est une fonction affine.<br><br>
    
$f_2$ est une fonction affine avec $m=\\dfrac{1}{2}$ et $p=-\\left(1+\\dfrac{1}{\\sqrt{2}}\\right)$.<br><br>

 $\\begin{aligned}
    f_3(x)&=\\dfrac{5-\\dfrac{2}{3}x}{0,7}\\\\
    &=-\\dfrac{2}{2,1}x+\\dfrac{5}{0,7}
    \\end{aligned}$<br>
    On retrouve une forme $mx+p$ avec $m=\\dfrac{2}{2,1}$ et $p=\\dfrac{5}{0,7}$, donc $f_3$ est une fonction affine.<br><br>
    `,this.reponses=["Toutes ces fonctions sont affines","Aucune de ces fonctions n'est affine","Uniquement la fonction $f_1$ est affine","Uniquement les fonctions $f_2$ et $f_3$ sont affines"]});g(this,"versionAleatoire",()=>{const p=t(1,4),l="On cherche si les fonctions $f$ peuvent s'écrire sous la forme $f(x)=mx+p$.<br>";switch(p){case 1:{const n=t(2,5),o=t(1,4),e=t(2,4),i=t(1,3),$=t(4,12),r=$+u([-1,1]),m=u([1,3]),c=u([1,2]),_=u([3,5,7,9]),d=u([.7,.9,.5,.6]);this.enonce=`On considère les trois fonctions définies  par : <br>
        $f_1\\,:\\,x \\longmapsto ${n}x^2-(${n}x+${o})(x-${e})$${f(8)}$f_2\\,:\\,x \\longmapsto \\dfrac{${i*r}x+${$}}{${r}}$${f(8)}$f_3\\,:\\,x \\longmapsto\\dfrac{${m}-\\dfrac{${c}}{${_}}x}{${a(d,1)}}$<br>

        On peut affirmer que :`,this.correction=l+` $\\bullet$ En développant, on obtient :<br> 
        $\\begin{aligned}
        f_1(x)&=${n}x^2-(${n}x+${o})(x-${e})\\\\
        &=${n}x^2-(${n}x^2-${n*e}x+${o}x-${o*e})\\\\
        &=${n}x^2-${n}x^2+${n*e}x-${o}x+${o*e}\\\\
        &=${n*e-o}x+${o*e}
        \\end{aligned}$<br>
        On retrouve une forme $mx+p$, donc $f_1$ est une fonction affine.<br>
        
         $\\bullet$ $f_2(x)=\\dfrac{${i*r}x+${$}}{${r}}=${i}x+\\dfrac{${$}}{${r}}$<br>
        $f_2$ est une fonction affine.<br>

        $\\bullet$ $f_3(x)=\\dfrac{${m}-\\dfrac{${c}}{${_}}x}{${a(d,1)}}=-\\dfrac{${c}}{${a(_*d,1)}}x+\\dfrac{${m}}{${a(d,1)}}$<br>
        $f_3$ est une fonction affine.<br>
${b("Toutes ces fonctions sont affines.")}`,this.reponses=["Toutes ces fonctions sont affines","Aucune de ces fonctions n'est affine","Uniquement la fonction $f_1$ est affine","Uniquement les fonctions $f_2$ et $f_3$ sont affines"]}break;case 2:{const n=t(2,5),o=t(1,4),e=t(2,6),i=t(3,7),$=t(2,5),r=t(3,8);this.enonce=`On considère les trois fonctions définies  par : <br>
        $f_1\\,:\\,x \\longmapsto \\dfrac{${n}x+${o}}{x}$${f(8)}$f_2\\,:\\,x \\longmapsto ${i}\\sqrt{x}-${e}$${f(8)}$f_3\\,:\\,x \\longmapsto\\dfrac{${$}}{x}+${r}$<br>

        On peut affirmer que :`,this.correction=l+` $\\bullet$ $f_1(x)=\\dfrac{${n}x+${o}}{x}=${n}+\\dfrac{${o}}{x}$<br>
        Après simplification, cette fonction contient un terme en $\\dfrac{1}{x}$, elle n'est donc pas affine.<br>
        
         $\\bullet$ $f_2(x)=${i}\\sqrt{x}-${e}$<br>
        Cette fonction contient un terme en $\\sqrt{x}$, elle n'est donc pas affine.<br>

        $\\bullet$ $f_3(x)=\\dfrac{${$}}{x}+${r}$<br>
        Cette fonction contient un terme en $\\dfrac{1}{x}$, elle n'est donc pas affine.<br>
${b("Aucune de ces fonctions n'est affine.")}`,this.reponses=["Aucune de ces fonctions n'est affine","Toutes ces fonctions sont affines","Uniquement la fonction $f_1$ est affine","Uniquement les fonctions $f_2$ et $f_3$ sont affines"]}break;case 3:{const n=t(2,5),o=t(3,7,n),e=t(2,5),i=t(3,7),$=t(2,4),r=t(3,8);this.enonce=`On considère les trois fonctions définies  par : <br>
        $f_1\\,:\\,x \\longmapsto x^2-(x+${n})(x-${o})$${f(8)}$f_2\\,:\\,x \\longmapsto ${e}\\sqrt{x}+${i}$${f(8)}$f_3\\,:\\,x \\longmapsto\\dfrac{${$}}{x}-${r}$<br>

        On peut affirmer que :`,this.correction=l+` $\\bullet$ En développant, on obtient :<br> 
        $\\begin{aligned}
        f_1(x)&=x^2-(x+${n})(x-${o})\\\\
        &=x^2-(x^2-${o}x+${n}x-${n*o})\\\\
        &=x^2-x^2+${o}x-${n}x+${n*o}\\\\
        &=${o-n}x+${n*o}
        \\end{aligned}$<br>
        On retrouve une forme $mx+p$, donc $f_1$ est une fonction affine.<br>
        
         $\\bullet$ $f_2(x)=${e}\\sqrt{x}+${i}$<br>
        Cette fonction contient un terme en $\\sqrt{x}$, elle n'est donc pas affine.<br>

         $\\bullet$ $f_3(x)=\\dfrac{${$}}{x}-${r}$<br>
        Cette fonction contient un terme en $\\dfrac{1}{x}$, elle n'est donc pas affine.<br>
        ${b("Uniquement la fonction $f_1$ est affine.")}`,this.reponses=["Uniquement la fonction $f_1$ est affine","Toutes ces fonctions sont affines","Aucune de ces fonctions n'est affine","Uniquement les fonctions $f_2$ et $f_3$ sont affines"]}break;case 4:{const n=t(2,5),o=t(3,7),e=t(2,4),i=t(3,6),$=t(1,5),r=t(4,9),m=t(2,5),c=t(21,29)/100;this.enonce=`On considère les trois fonctions définies sur leur domaine de définition par : <br>
        $f_1\\,:\\,x \\longmapsto ${n}x^2+${o}$${f(8)}$f_2\\,:\\,x \\longmapsto ${e}x^2-${e}(x-${i})(x+${$})$${f(8)}$f_3\\,:\\,x \\longmapsto\\dfrac{${r}+${m}x}{${a(c,2)}}$<br>

        On peut affirmer que :`,this.correction=l+` $\\bullet$ $f_1(x)=${n}x^2+${o}$<br>
        Cette fonction contient un terme en $x^2$, elle n'est donc pas affine.<br>
        
         $\\bullet$ En développant, on obtient :<br> 
        $\\begin{aligned}
        f_2(x)&=${e}x^2-${e}(x-${i})(x+${$})\\\\
        &=${e}x^2-${e}(x^2+${$}x-${i}x-${i*$})\\\\
        &=${e}x^2-${e}x^2-${e*$}x+${e*i}x+${e*i*$}\\\\
        &=${e*(i-$)}x+${e*i*$}
        \\end{aligned}$<br>
        On retrouve une forme $mx+p$, donc $f_2$ est une fonction affine.<br>

       $\\bullet$  $f_3(x)=\\dfrac{${r}+${m}x}{${a(c,2)}}=\\dfrac{${m}}{${a(c,2)}}x+\\dfrac{${r}}{${a(c,2)}}$<br>
        On retrouve une forme $mx+p$, donc $f_3$ est une fonction affine.<br>
        ${b("Uniquement les fonctions $f_2$ et $f_3$ sont affines.")}`,this.reponses=["Uniquement les fonctions $f_2$ et $f_3$ sont affines","Toutes ces fonctions sont affines","Aucune de ces fonctions n'est affine","Uniquement la fonction $f_1$ est affine"]}break}});this.versionAleatoire(),this.options={vertical:!0,ordered:!1}}}export{Qn as amcReady,jn as amcType,Dn as dateDePublication,Hn as default,Nn as interactifReady,Pn as interactifType,Mn as refs,zn as titre,Gn as uuid};
//# sourceMappingURL=1A-F03-1-CnUevcU6.js.map
