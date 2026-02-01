import{c as M}from"./CodageAngleDroit-cfGe7_q5.js";import{p as P}from"./PointAbstrait-Cz1GEocE.js";import{a as E}from"./polygones-dllpvdk8.js";import{t as g}from"./textes-CS7rU0Yo.js";import{s as L}from"./transformations-BnhWpg4x.js";import{p as O,m as c}from"./segmentsVecteurs-Dh5p_FwX.js";import{A,K as R,ab as D,r as m,p as N,x as d,a2 as u,ai as p,Z as q,B as x}from"./index-vfG7N0N9.js";import{m as T}from"./mathalea2d-CVCH8NiC.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./fixeBordures-BSnKuTIe.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./Polyline-B90cPRFI.js";import"./vendors/earcut-jJVragJp.js";import"./pattern-I1sXJuF2.js";import"./droites-C34ydQPV.js";import"./Vide2d-lYMmc9eB.js";import"./vendors/roughjs-CycZv-lV.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-BymNGK-G.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-CKp8Whw5.js";import"./json/refToUuidCH-C3otjGt1.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-CxJkatM_.js";import"./json/referentiel2022FR-DUyIuCDZ.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const i$="Calculer l’hypoténuse avec le théorème de Pythagore",o$=!0,a$="mathLive",n$="01/06/2025",s$="d9524",m$={"fr-fr":["can4G03","3AutoG11-1"],"fr-ch":[]};class p$ extends A{constructor(){super(),this.typeExercice="simple",this.formatChampTexte=R.clavierFullOperations,this.nbQuestions=1}nouvelleVersion(){let r,$;const e=D(3,["QD"]);r=m(2,7),$=m(3,7);const o=P(0,0,e[0]),i=O(o,r,m(0,45),e[1]),n=L(o,i,90,$/r,e[2]),b=E(o,i,n),h=[],y=Math.min(o.x,i.x,n.x)-1,f=Math.min(o.y,i.y,n.y)-1,v=Math.max(o.x,i.x,n.x)+1,C=Math.max(o.y,i.y,n.y)+1;let t,a,s,l;switch(N(["a","b"])){case"a":t=r**2+$**2,a=q(t),s=a[0]!==1,l=a[1]===1,h.push(b[0],b[1],M(o,i,n)),h.push(g(`${x(r)}`,c(o,i).x,c(o,i).y+.4),g(`${x($)}`,c(i,n).x+.4,c(i,n).y)),this.question=`Sur cette figure, calculer la valeur exacte de $${e[0]}${e[2]}$.<br>`,this.question+=T({xmin:y,ymin:f,xmax:v,ymax:C,pixelsParCm:22,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},h),l?(this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[1]}$.<br>
            On obtient :<br>
            $\\begin{aligned}
              ${e[0]}${e[1]}^2+${e[1]}${e[2]}^2&=${e[0]}${e[2]}^2\\\\
              ${e[0]}${e[2]}^2&=${e[1]}${e[2]}^2+${e[0]}${e[1]}^2\\\\
              ${e[0]}${e[2]}^2&=${$}^2+${r}^2\\\\
              ${e[0]}${e[2]}^2&=${$**2}+${r**2}\\\\
              ${e[0]}${e[2]}^2&=${t}\\\\
              ${e[0]}${e[2]}&=\\sqrt{${t}}\\\\
              ${e[0]}${e[2]}&=${d(`${a[0]}`)}
              \\end{aligned}$`,this.correction+=u(`<br> Mentalement : <br>
    La longueur $${e[0]}${e[2]}$ est donnée par la racine carrée de la somme des carrés de $${$}$ et de $${r}$.<br>
    Cette somme vaut $${$**2}+${r**2}=${t}$. <br>
    La valeur cherchée est donc : $\\sqrt{${t}}$, soit $${a[0]}$.`)):(this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[1]}$.<br>
      On obtient :<br>
      $\\begin{aligned}
        ${e[0]}${e[1]}^2+${e[1]}${e[2]}^2&=${e[0]}${e[2]}^2\\\\
        ${e[0]}${e[2]}^2&=${e[1]}${e[2]}^2+${e[0]}${e[1]}^2\\\\
        ${e[0]}${e[2]}^2&=${$}^2+${r}^2\\\\
        ${e[0]}${e[2]}^2&=${$**2}+${r**2}\\\\
        ${e[0]}${e[2]}^2&=${t}\\\\
        ${e[0]}${e[2]}&=${d(`\\sqrt{${t}}`)}
        \\end{aligned}$
        ${s?`En simplifiant, on obtient : $${e[0]}${e[2]} = ${p(t)}$`:""}`,this.correction+=u(`<br> Mentalement : <br>
La longueur $${e[0]}${e[2]}$ est donnée par la racine carrée de la somme des carrés de $${$}$ et de $${r}$.<br>
Cette somme vaut $${$**2}+${r**2}=${t}$. <br>
La valeur cherchée est donc : $\\sqrt{${t}}$.
`)),this.reponse=[`\\sqrt{${t}}`,`${Math.sqrt(t)}`,p(t)],this.canEnonce=this.question,this.canReponseACompleter=`$${e[0]}${e[2]}=\\ldots$`;break;case"b":r=m(1,10),$=m(2,10,[4,9]),t=r**2+$,a=q(t),s=a[0]!==1,l=a[1]===1,l?(this.question=`$${e[0]}${e[1]}${e[2]}$ est un triangle rectangle en $${e[0]}$ dans lequel
                  $${e[0]}${e[1]}=${r}$ et $${e[0]}${e[2]}=\\sqrt{${$}}$.<br>
                   Calculer la valeur exacte de $${e[1]}${e[2]}$ .<br>`,this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[0]}$.<br>
        On obtient :<br>
        $\\begin{aligned}
          ${e[0]}${e[1]}^2+${e[0]}${e[2]}^2&=${e[1]}${e[2]}^2\\\\
          ${e[1]}${e[2]}^2&=${e[0]}${e[1]}^2+${e[0]}${e[2]}^2\\\\
          ${e[1]}${e[2]}^2&=\\sqrt{${$}}^2+${r}^2\\\\
          ${e[1]}${e[2]}^2&=${$}+${r**2}\\\\
          ${e[1]}${e[2]}^2&=${t}\\\\
          ${e[1]}${e[2]}&=\\sqrt{${t}}\\\\
          ${e[1]}${e[2]}&=${d(`${a[0]}`)}
          \\end{aligned}$`,this.correction+=u(`<br> Mentalement : <br>
    La longueur $${e[1]}${e[2]}$ est donnée par la racine carrée de la somme des carrés de $\\sqrt{${$}}$ et de $${r}$.<br>
    Cette somme vaut $${$}+${r**2}=${t}$ (n'oubliez pas que $(\\sqrt{${$}})^2=${$}$). <br>
    La valeur cherchée est donc : $${a[0]}$.`)):(this.question=`$${e[0]}${e[1]}${e[2]}$ est un triangle rectangle en $${e[0]}$ dans lequel
      $${e[0]}${e[1]}=${r}$ et $${e[0]}${e[2]}=\\sqrt{${$}}$.<br>
       Calculer la valeur exacte de $${e[1]}${e[2]}$ .<br>`,this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[0]}$.<br>
On obtient :<br>
$\\begin{aligned}
${e[0]}${e[1]}^2+${e[0]}${e[2]}^2&=${e[1]}${e[2]}^2\\\\
${e[1]}${e[2]}^2&=${e[0]}${e[1]}^2+${e[0]}${e[2]}^2\\\\
${e[1]}${e[2]}^2&=\\sqrt{${$}}^2+${r}^2\\\\
${e[1]}${e[2]}^2&=${$}+${r**2}\\\\
${e[1]}${e[2]}^2&=${t}\\\\
${e[1]}${e[2]}&=${d(`\\sqrt{${t}}`)}
\\end{aligned}$
${s?`En simplifiant, on obtient : $${e[1]}${e[2]} = ${p(t)}$`:""}`,this.correction+=u(`<br> Mentalement : <br>
La longueur $${e[1]}${e[2]}$ est donnée par la racine carrée de la somme des carrés de $\\sqrt{${$}}$ et de $${r}$.<br>
Cette somme vaut $${$}+${r**2}=${t}$ (n'oubliez pas que $(\\sqrt{${$}})^2=${$}$). <br>
La valeur cherchée est donc : $\\sqrt{${t}}${s?"="+p(t):""}$.`)),this.reponse=[`\\sqrt{${t}}`,p(t),`${Math.sqrt(t)}`],this.canEnonce=this.question,this.canReponseACompleter=`$${e[1]}${e[2]}=\\ldots$`;break}}}export{n$ as dateDeModifImportante,p$ as default,o$ as interactifReady,a$ as interactifType,m$ as refs,i$ as titre,s$ as uuid};
//# sourceMappingURL=can4G03-nPFalgwD.js.map
