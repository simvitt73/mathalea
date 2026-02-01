var a=Object.defineProperty;var c=(r,i,o)=>i in r?a(r,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[i]=o;var s=(r,i,o)=>c(r,typeof i!="symbol"?i+"":i,o);import{x as n,_ as t,p as d,r as m}from"./index-vfG7N0N9.js";import{E as l}from"./ExerciceQcmA-D0pLmsFU.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-BymNGK-G.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-CKp8Whw5.js";import"./json/refToUuidCH-C3otjGt1.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-CxJkatM_.js";import"./json/referentiel2022FR-DUyIuCDZ.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./ExerciceQcm-Cgcpcs4G.js";import"./lists-CucBDS1e.js";const k$="8d642",A$={"fr-fr":["1A-C11-2"],"fr-ch":[]},E$=!0,y$="qcm",w$="true",C$="qcmMono",R$="Exprimer une variable en fonction des autres",T$="05/08/2025";class V$ extends l{constructor(){super();s(this,"versionOriginale",()=>{this.enonce=`Soient $a$, $b$, $c$ et $d$ quatre nombres (avec $d$ non nul) vérifiant l'égalité :<br>
    $a = b - cd$.<br>
    Exprimer $c$ en fonction de $a$, $b$ et $d$.`,this.correction=`On isole $c$ dans un membre de l'égalité :<br>
    $\\begin{aligned}
    a &= b - cd\\\\
    a - b &= -cd\\\\
    -a + b &= cd\\\\
    \\dfrac{-a + b}{d} &= c
    \\end{aligned}$
    <br>Une expression de $c$ en fonction de $a$, $b$ et $d$ est $${n("c = \\dfrac{b - a}{d}")}$.`,this.reponses=["$c = \\dfrac{b - a}{d}$","$c = \\dfrac{a - b}{d}$","$c = d(b - a)$","$c = \\dfrac{b + a}{d}$"]});s(this,"versionAleatoire",()=>{const o=[t(["a","b","c","e"]),t(["x","y","z","w"]),t(["u","v","w","t"]),t(["A","B","C","E"]),t(["R","S","T","U"]),t(["I","J","K","L"]),t(["c","g","e","f"]),t(["c","m","f","e"]),t(["K","L","M","N"]),t(["r","s","t","u"]),t(["U","V","W","X"])],$=d(o);switch(m(1,12)){case 1:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = ${$[1]} - ${$[2]}${$[3]}$.<br>
        Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= ${$[1]} - ${$[2]}${$[3]}\\\\
        ${$[0]} - ${$[1]} &= -${$[2]}${$[3]}\\\\
        -${$[0]} + ${$[1]} &= ${$[2]}${$[3]}\\\\
        \\dfrac{-${$[0]} + ${$[1]}}{${$[3]}} &= ${$[2]}
        \\end{aligned}$
        <br>Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est $${n($[2]+" = \\dfrac{"+$[1]+" - "+$[0]+"}{"+$[3]+"}")}$.`,this.reponses=[`$${$[2]} = \\dfrac{${$[1]} - ${$[0]}}{${$[3]}}$`,`$${$[2]} = \\dfrac{${$[0]} - ${$[1]}}{${$[3]}}$`,`$${$[2]} = ${$[3]}(${$[1]} - ${$[0]})$`,`$${$[2]} = \\dfrac{${$[1]} + ${$[0]}}{${$[3]}}$`];break}case 2:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[2]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = ${$[1]} - ${$[2]}${$[3]}$.<br>
        Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= ${$[1]} - ${$[2]}${$[3]}\\\\
        ${$[0]} - ${$[1]} &= -${$[2]}${$[3]}\\\\
        -${$[0]} + ${$[1]} &= ${$[2]}${$[3]}\\\\
        \\dfrac{-${$[0]} + ${$[1]}}{${$[2]}} &= ${$[3]}
        \\end{aligned}$
        <br>Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est $${n($[3]+" = \\dfrac{"+$[1]+" - "+$[0]+"}{"+$[2]+"}")}$.`,this.reponses=[`$${$[3]} = \\dfrac{${$[1]} - ${$[0]}}{${$[2]}}$`,`$${$[3]} = \\dfrac{${$[0]} - ${$[1]}}{${$[2]}}$`,`$${$[3]} = ${$[2]}(${$[1]} - ${$[0]})$`,`$${$[3]} = \\dfrac{${$[1]} + ${$[0]}}{${$[2]}}$`];break}case 3:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = ${$[1]} - ${$[2]}${$[3]}$.<br>
         Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= ${$[1]} - ${$[2]}${$[3]}\\\\
        ${$[0]} + ${$[2]}${$[3]} &= ${$[1]}
        \\end{aligned}$
        <br>Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est $${n($[1]+" = "+$[0]+" + "+$[2]+$[3])}$.`,this.reponses=[`$${$[1]} = ${$[0]} + ${$[2]}${$[3]}$`,`$${$[1]} = ${$[0]} - ${$[2]}${$[3]}$`,`$${$[1]} = \\dfrac{${$[0]}}{${$[2]}${$[3]}}$`,`$${$[1]} = ${$[0]} \\times ${$[2]}${$[3]}$`];break}case 4:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[2]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = ${$[1]}${$[2]} + ${$[3]}$.<br>
        Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= ${$[1]}${$[2]} + ${$[3]}\\\\
        ${$[0]} - ${$[3]} &= ${$[1]}${$[2]}\\\\
        \\dfrac{${$[0]} - ${$[3]}}{${$[2]}} &= ${$[1]}
        \\end{aligned}$
        <br>Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est $${n($[1]+" = \\dfrac{"+$[0]+" - "+$[3]+"}{"+$[2]+"}")}$.`,this.reponses=[`$${$[1]} = \\dfrac{${$[0]} - ${$[3]}}{${$[2]}}$`,`$${$[1]} = \\dfrac{${$[0]} + ${$[3]}}{${$[2]}}$`,`$${$[1]} = ${$[2]}(${$[0]} - ${$[3]})$`,`$${$[1]} = \\dfrac{${$[3]} - ${$[0]}}{${$[2]}}$`];break}case 5:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres vérifiant l'égalité suivante :`;this.enonce=`${e} $${$[0]} = ${$[1]}${$[2]} + ${$[3]}$.<br>
         Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= ${$[1]}${$[2]} + ${$[3]}\\\\
        ${$[0]} - ${$[1]}${$[2]} &= ${$[3]}
        \\end{aligned}$
        <br>Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est $${n($[3]+" = "+$[0]+" - "+$[1]+$[2])}$.`,this.reponses=[`$${$[3]} = ${$[0]} - ${$[1]}${$[2]}$`,`$${$[3]} = ${$[0]} + ${$[1]}${$[2]}$`,`$${$[3]} = \\dfrac{${$[0]}}{${$[1]}${$[2]}}$`,`$${$[3]} = ${$[0]} \\times ${$[1]}${$[2]}$`];break}case 6:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}$.<br>
        Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}\\\\
        ${$[0]} \\times ${$[3]} &= ${$[1]} + ${$[2]}\\\\
        ${$[0]} \\times ${$[3]} - ${$[2]} &= ${$[1]}
        \\end{aligned}$
        <br>Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[2]}$ et $${$[3]}$ est $${n($[1]+" = "+$[3]+" \\times "+$[0]+" - "+$[2])}$.`,this.reponses=[`$${$[1]} = ${$[3]} \\times ${$[0]} - ${$[2]}$`,`$${$[1]} = ${$[3]} \\times ${$[0]} + ${$[2]}$`,`$${$[1]} = \\dfrac{${$[0]} - ${$[2]}}{${$[3]}}$`,`$${$[1]} = ${$[0]} - ${$[2]} \\times ${$[3]}$`];break}case 7:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}$.<br>
         Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}\\\\
        ${$[0]} \\times ${$[3]} &= ${$[1]} + ${$[2]}\\\\
        ${$[0]} \\times ${$[3]} - ${$[1]} &= ${$[2]}
        \\end{aligned}$
        <br>Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est $${n($[2]+" = "+$[3]+" \\times "+$[0]+" - "+$[1])}$.`,this.reponses=[`$${$[2]} = ${$[3]} \\times ${$[0]} - ${$[1]}$`,`$${$[2]} = ${$[3]} \\times ${$[0]} + ${$[1]}$`,`$${$[2]} = \\dfrac{${$[0]} - ${$[1]}}{${$[3]}}$`,`$${$[2]} = ${$[0]} - ${$[1]} \\times ${$[3]}$`];break}case 8:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ et $${$[0]}$ non nuls) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}$.<br>
         Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= \\dfrac{${$[1]} + ${$[2]}}{${$[3]}}\\\\
        ${$[0]} \\times ${$[3]} &= ${$[1]} + ${$[2]}\\\\
        ${$[3]} &= \\dfrac{${$[1]} + ${$[2]}}{${$[0]}}
        \\end{aligned}$
        <br>Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est $${n($[3]+" = \\dfrac{"+$[1]+" + "+$[2]+"}{"+$[0]+"}")}$.`,this.reponses=[`$${$[3]} = \\dfrac{${$[1]} + ${$[2]}}{${$[0]}}$`,`$${$[3]} = \\dfrac{${$[1]} - ${$[2]}}{${$[0]}}$`,`$${$[3]} = ${$[0]}(${$[1]} + ${$[2]})$`,`$${$[3]} = \\dfrac{${$[0]}}{${$[1]} + ${$[2]}}$`];break}case 9:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = (${$[1]} + ${$[2]})${$[3]}$.<br>
         Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= (${$[1]} + ${$[2]})${$[3]}\\\\
        ${$[0]} &= ${$[1]}${$[3]} + ${$[2]}${$[3]}\\\\
        ${$[0]} - ${$[2]}${$[3]} &= ${$[1]}${$[3]}\\\\
        \\dfrac{${$[0]} - ${$[2]}${$[3]}}{${$[3]}} &= ${$[1]}
        \\end{aligned}$
        <br>Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et $${$[2]}$ est $${n($[1]+" = \\dfrac{"+$[0]+"}{"+$[3]+"} - "+$[2])}$.`,this.reponses=[`$${$[1]} = \\dfrac{${$[0]}}{${$[3]}} - ${$[2]}$`,`$${$[1]} = \\dfrac{${$[0]}}{${$[3]}} + ${$[2]}$`,`$${$[1]} = ${$[0]} - ${$[2]}${$[3]}$`,`$${$[1]} = \\dfrac{${$[0]} + ${$[2]}${$[3]}}{${$[3]}}$`];break}case 10:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[1]} + ${$[2]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = (${$[1]} + ${$[2]})${$[3]}$.<br>
         Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[3]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= (${$[1]} + ${$[2]})${$[3]}\\\\
        \\dfrac{${$[0]}}{${$[1]} + ${$[2]}} &= ${$[3]}
        \\end{aligned}$
        <br>Une expression de $${$[3]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[2]}$ est $${n($[3]+" = \\dfrac{"+$[0]+"}{"+$[1]+" + "+$[2]+"}")}$.`,this.reponses=[`$${$[3]} = \\dfrac{${$[0]}}{${$[1]} + ${$[2]}}$`,`$${$[3]} = \\dfrac{${$[0]}}{${$[1]} - ${$[2]}}$`,`$${$[3]} = ${$[0]}(${$[1]} + ${$[2]})$`,`$${$[3]} = \\dfrac{${$[1]} + ${$[2]}}{${$[0]}}$`];break}case 11:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = (${$[1]} - ${$[2]})${$[3]}$.<br>
        Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et $${$[2]}$ est :`,this.correction=`On isole $${$[1]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= (${$[1]} - ${$[2]})${$[3]}\\\\
        ${$[0]} &= ${$[1]}${$[3]} - ${$[2]}${$[3]}\\\\
        ${$[0]} + ${$[2]}${$[3]} &= ${$[1]}${$[3]}\\\\
        \\dfrac{${$[0]} + ${$[2]}${$[3]}}{${$[3]}} &= ${$[1]}
        \\end{aligned}$
        <br>Une expression de $${$[1]}$ en fonction de $${$[0]}$, $${$[3]}$ et $${$[2]}$ est $${n($[1]+" = \\dfrac{"+$[0]+"}{"+$[3]+"} + "+$[2])}$.`,this.reponses=[`$${$[1]} = \\dfrac{${$[0]}}{${$[3]}} + ${$[2]}$`,`$${$[1]} = \\dfrac{${$[0]}}{${$[3]}} - ${$[2]}$`,`$${$[1]} = ${$[0]} + ${$[2]}${$[3]}$`,`$${$[1]} = \\dfrac{${$[0]} - ${$[2]}${$[3]}}{${$[3]}}$`];break}default:{const e=`Soient $${$[0]}$, $${$[1]}$, $${$[2]}$ et $${$[3]}$ quatre nombres (avec $${$[3]}$ non nul) vérifiant l'égalité :`;this.enonce=`${e} $${$[0]} = (${$[1]} - ${$[2]})${$[3]}$.<br>
        Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est :`,this.correction=`On isole $${$[2]}$ dans un membre de l'égalité :<br>
        $\\begin{aligned}
        ${$[0]} &= (${$[1]} - ${$[2]})${$[3]}\\\\
        ${$[0]} &= ${$[1]}${$[3]} - ${$[2]}${$[3]}\\\\
        ${$[0]} - ${$[1]}${$[3]} &= -${$[2]}${$[3]}\\\\
        \\dfrac{${$[0]} - ${$[1]}${$[3]}}{-${$[3]}} &= ${$[2]}\\\\
        \\dfrac{-${$[0]} + ${$[1]}${$[3]}}{${$[3]}} &= ${$[2]}
        \\end{aligned}$
        <br>Une expression de $${$[2]}$ en fonction de $${$[0]}$, $${$[1]}$ et $${$[3]}$ est $${n($[2]+" = "+$[1]+" - \\dfrac{"+$[0]+"}{"+$[3]+"}")}$.`,this.reponses=[`$${$[2]} = ${$[1]} - \\dfrac{${$[0]}}{${$[3]}}$`,`$${$[2]} = ${$[1]} + \\dfrac{${$[0]}}{${$[3]}}$`,`$${$[2]} = \\dfrac{${$[0]} - ${$[1]}${$[3]}}{${$[3]}}$`,`$${$[2]} = ${$[0]} - ${$[1]}${$[3]}$`];break}}});this.versionAleatoire()}}export{w$ as amcReady,C$ as amcType,T$ as dateDePublication,V$ as default,E$ as interactifReady,y$ as interactifType,A$ as refs,R$ as titre,k$ as uuid};
//# sourceMappingURL=1A-C11-2-JfJFhz92.js.map
