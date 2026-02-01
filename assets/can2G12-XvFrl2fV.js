import{E as d,p as u,r as a,u as m,v as s,a1 as p,a2 as l,o as b}from"./index-CMKaCP9B.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Ve="Reconnaitre des vecteurs colinéaires (V/F)",qe=!0,Fe="qcm",Le="30/10/2021",Oe="2ba42",Qe={"fr-fr":["can2G12"],"fr-ch":["2mQCM-5"]};class ke extends d{constructor(){super(),this.nbQuestions=1}nouvelleVersion(){let e,t,r,i,o;for(let $=0,n,v,c,x=0;$<this.nbQuestions&&x<50;){switch(u([1,2,3,4,5])){case 1:e=a(-3,3,0)*2,t=a(-3,3,[0,e/2])*2,o=u([.5,1.5,3,2.5,3.5])*u([-1,1]),r=o*e,i=o*t,n=`Dans un repère, on considère les vecteurs $\\vec{u}\\begin{pmatrix}${e} \\\\ ${t} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}${r} \\\\ ${i} \\end{pmatrix}$.<br>
        Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.canEnonce=`Dans un repère, on considère les vecteurs $\\vec{u}(${e}\\;;\\; ${t})$ et $\\vec{v}(${r}\\;;\\;${i})$.<br>

        Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.autoCorrection[$]={enonce:n,propositions:[{texte:"Vrai",statut:e*i===t*r},{texte:"Faux",statut:e===50}],options:{ordered:!0,radio:!0}},c=m(this,$),n+=c.texte,v=c.texteCorr+`<br>Deux vecteurs $\\vec{u}$ et $\\vec{v}$
        sont colinéaires si et seulement si leur déterminant $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=0$.<br>
        Si $\\vec{u}\\begin{pmatrix}x_{\\vec{u}} \\\\ x_{\\vec{v}} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x_{\\vec{v}} \\\\ y_{\\vec{v}} \\end{pmatrix}$,
        alors $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=x_{\\vec{u}}\\times y_{\\vec{v}}-y_{\\vec{u}}\\times x_{\\vec{v}}$.<br>
        En utilisant les données de l'énoncé, on obtient : <br>
        $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=
        ${s(e)}\\times ${s(i)}-${s(t)}\\times ${s(r)}
        =${e*i}-${s(t*r)}=${e*i-t*r}$.<br>
        On en déduit que les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires, il fallait donc cocher "${p("Vrai")}".`,v+=l(`<br><br> Mentalement : <br>
        On compare les produits en croix : $${s(e)}\\times ${s(i)}=${e*i}$ et $${s(t)}\\times ${s(r)}=${t*r}$.<br>
        Ils sont égaux, donc les vecteurs sont colinéaires.`,"blue");break;case 2:r=a(-3,3,0)*2,i=a(-3,3,[0,r/2])*2,o=u([.5,1.5,3,2.5,3.5])*u([-1,1]),e=o*r,t=o*i,n=`Dans un repère, on considère les vecteurs $\\overrightarrow{u}\\begin{pmatrix}${e} \\\\ ${t} \\end{pmatrix}$ et $\\overrightarrow{v}\\begin{pmatrix}${r} \\\\ ${i} \\end{pmatrix}$.<br>
        Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.canEnonce=`Dans un repère, on considère les vecteurs $\\vec{u}(${e}\\;;\\; ${t})$ et $\\vec{v}(${r}\\;;\\;${i})$.<br>
       
        Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.autoCorrection[$]={enonce:n,propositions:[{texte:"Vrai",statut:e*i===t*r},{texte:"Faux",statut:e===50}],options:{ordered:!0}},c=m(this,$),n+=c.texte,v=c.texteCorr+`<br>Deux vecteurs $\\vec{u}$ et $\\vec{v}$
            sont colinéaires si et seulement si leur déterminant $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=0$.<br>
            Si $\\vec{u}\\begin{pmatrix}x_{\\vec{u}} \\\\ x_{\\vec{v}} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x_{\\vec{v}} \\\\ y_{\\vec{v}} \\end{pmatrix}$,
            alors $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=x_{\\vec{u}}\\times y_{\\vec{v}}-y_{\\vec{u}}\\times x_{\\vec{v}}$.<br>
            En utilisant les données de l'énoncé, on obtient : <br>
            $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=
            ${s(e)}\\times ${s(i)}-${s(t)}\\times ${s(r)}
            =${e*i}-${s(t*r)}=${e*i-t*r}$.<br>
            On en déduit que les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires, il fallait donc cocher "${p("Vrai")}".`,v+=l(`<br><br> Mentalement : <br>
            On compare les produits en croix : $${s(e)}\\times ${s(i)}=${e*i}$ et $${s(t)}\\times ${s(r)}=${t*r}$.<br>
            Ils sont égaux, donc les vecteurs sont colinéaires.`,"blue");break;case 3:e=a(-3,3,0)*2,t=a(-3,3,[0,e/2])*2,o=u([.5,1.5,3,2.5,3.5])*u([-1,1]),r=o*e,i=o*t+1,n=`Dans un repère, on considère les vecteurs $\\vec{u}\\begin{pmatrix}${e} \\\\ ${t} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}${r} \\\\ ${i} \\end{pmatrix}$.<br>
            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.canEnonce=`Dans un repère, on considère les vecteurs $\\vec{u}(${e}\\;;\\; ${t})$ et $\\vec{v}(${r}\\;;\\;${i})$.<br>

            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.autoCorrection[$]={enonce:n,propositions:[{texte:"Vrai",statut:e===100},{texte:"Faux",statut:e*i!==t*r}],options:{ordered:!0}},c=m(this,$),n+=c.texte,v=c.texteCorr+`<br>Deux vecteurs $\\vec{u}$ et $\\vec{v}$
            sont colinéaires si et seulement si leur déterminant $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=0$.<br>
            Si  $\\vec{u}\\begin{pmatrix}x_{\\vec{u}} \\\\ x_{\\vec{v}} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x_{\\vec{v}} \\\\ y_{\\vec{v}} \\end{pmatrix}$,
            alors $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=x_{\\vec{u}}\\times y_{\\vec{v}}-y_{\\vec{u}}\\times x_{\\vec{v}}$.<br>
            En utilisant les données de l'énoncé, on obtient : <br>
            $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=
            ${s(e)}\\times ${s(i)}-${s(t)}\\times ${s(r)}
            =${e*i}-${s(t*r)}=${e*i-t*r}\\neq0$.<br>
            On en déduit que les vecteurs $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires, il fallait donc cocher "${p("Faux")}".`,v+=l(`<br><br> Mentalement : <br>
            On compare les produits en croix : $${s(e)}\\times ${s(i)}=${e*i}$ et $${s(t)}\\times ${s(r)}=${t*r}$.<br>
            Ils ne sont pas égaux, donc les vecteurs ne sont pas colinéaires.`,"blue");break;case 4:e=a(-3,3,0)*2,t=a(-3,3,[0,e/2])*2,o=u([.5,1.5,3,2.5,3.5])*u([-1,1]),r=o*e+1,i=o*t,n=`Dans un repère, on considère les vecteurs $\\vec{u}\\begin{pmatrix}${e} \\\\ ${t} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}${r} \\\\ ${i} \\end{pmatrix}$.<br>
            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.canEnonce=`Dans un repère, on considère les vecteurs $\\vec{u}(${e}\\;;\\; ${t})$ et $\\vec{v}(${r}\\;;\\;${i})$.<br>

            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.autoCorrection[$]={enonce:n,propositions:[{texte:"Vrai",statut:e===100},{texte:"Faux",statut:e*i!==t*r}],options:{ordered:!0}},c=m(this,$),n+=c.texte,v=c.texteCorr+`<br>Deux vecteurs $\\vec{u}$ et $\\vec{v}$
            sont colinéaires si et seulement si leur déterminant $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=0$.<br>
            Si  $\\vec{u}\\begin{pmatrix}x_{\\vec{u}} \\\\ x_{\\vec{v}} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x_{\\vec{v}} \\\\ y_{\\vec{v}} \\end{pmatrix}$,
            alors $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=x_{\\vec{u}}\\times y_{\\vec{v}}-y_{\\vec{u}}\\times x_{\\vec{v}}$.<br>
            En utilisant les données de l'énoncé, on obtient : <br>
            $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=
            ${s(e)}\\times ${s(i)}-${s(t)}\\times ${s(r)}
            =${e*i}-${s(t*r)}=${e*i-t*r}\\neq0$.<br>
            On en déduit que les vecteurs $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires, il fallait donc cocher "${p("Faux")}".`,v+=l(`<br><br> Mentalement : <br>
            On compare les produits en croix : $${s(e)}\\times ${s(i)}=${e*i}$ et $${s(t)}\\times ${s(r)}=${t*r}$.<br>
            Ils ne sont pas égaux, donc les vecteurs ne sont pas colinéaires.`,"blue");break;default:e=a(-3,3,0)*2,t=a(-3,3,[0,e/2])*2,o=u([.5,1.5,3,2.5,3.5])*u([-1,1]),r=o*e,i=o*t*-1,n=`Dans un repère, on considère les vecteurs $\\vec{u}\\begin{pmatrix}${e} \\\\ ${t} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}${r} \\\\ ${i} \\end{pmatrix}$.<br>
            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.canEnonce=`Dans un repère, on considère les vecteurs $\\vec{u}(${e}\\;;\\; ${t})$ et $\\vec{v}(${r}\\;;\\;${i})$.<br>
        
            Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires.`,this.autoCorrection[$]={enonce:n,propositions:[{texte:"Vrai",statut:e===100},{texte:"Faux",statut:e*i!==t*r}],options:{ordered:!0}},c=m(this,$),n+=c.texte,v=c.texteCorr+`<br>Deux vecteurs $\\vec{u}$ et $\\vec{v}$
            sont colinéaires si et seulement si leur déterminant $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=0$.<br>
            Si  $\\vec{u}\\begin{pmatrix}x_{\\vec{u}} \\\\ x_{\\vec{v}} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix}x_{\\vec{v}} \\\\ y_{\\vec{v}} \\end{pmatrix}$,
            alors $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=x_{\\vec{u}}\\times y_{\\vec{v}}-y_{\\vec{u}}\\times x_{\\vec{v}}$.<br>
            En utilisant les données de l'énoncé, on obtient : <br>
            $det\\left(\\vec{u}\\,;\\,\\vec{v}\\right)=
            ${s(e)}\\times ${s(i)}-${s(t)}\\times ${s(r)}
            =${e*i}-${s(t*r)}=${e*i-t*r}\\neq0$.<br>
            On en déduit que les vecteurs $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires, il fallait donc cocher "${p("Faux")}".`,v+=l(`<br><br> Mentalement : <br>
            On compare les produits en croix : $${s(e)}\\times ${s(i)}=${e*i}$ et $${s(t)}\\times ${s(r)}=${t*r}$.<br>
            Ils ne sont pas égaux, donc les vecteurs ne sont pas colinéaires.`,"blue");break}this.questionJamaisPosee($,e,t,r,i)&&(this.listeQuestions[$]=n,this.listeCorrections[$]=v,$++),this.canReponseACompleter=c.texte,this.listeCanEnonces.push(this.canEnonce),this.listeCanReponsesACompleter.push(this.canReponseACompleter),x++}b(this)}}export{Le as dateDePublication,ke as default,qe as interactifReady,Fe as interactifType,Qe as refs,Ve as titre,Oe as uuid};
//# sourceMappingURL=can2G12-XvFrl2fV.js.map
