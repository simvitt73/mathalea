var B=Object.defineProperty;var u=(n,p,i)=>p in n?B(n,p,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[p]=i;var s=(n,p,i)=>u(n,typeof p!="symbol"?p+"":p,i);import{a$ as b,P as $,B as e,x as c,r as l}from"./index-CMKaCP9B.js";import{A as t}from"./arbres-Ccdc25BR.js";import{m as A}from"./mathalea2d-hmD9nuW5.js";import{E as f}from"./ExerciceQcmA-yzB4dxov.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./PointAbstrait-Cz1GEocE.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./segmentsVecteurs-DhSnlc3S.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./vendors/roughjs-CycZv-lV.js";import"./textes-BId1S-Qs.js";import"./transformations-KFxwrOCd.js";import"./droites-D3-ZzJ69.js";import"./Vide2d-lYMmc9eB.js";import"./polygones-CHA8469v.js";import"./vendors/earcut-jJVragJp.js";import"./pattern-D34qyw5S.js";import"./ExerciceQcm-Bg9RomNU.js";import"./lists-SAG-gkx2.js";const Ge="15/09/2025",Ie="3a5ab",Je={"fr-fr":["1A-P05-1"],"fr-ch":[]},Ke=!0,Le="qcm",Se="true",Ve="qcmMono",We="Utiliser un arbre pour calculer une probabilité (totale)";class Xe extends f{constructor(){super();s(this,"versionOriginale",()=>{let i=[];const a=new t({racine:!0,nom:"",proba:1,visible:!1,alter:"",enfants:[new t({rationnel:!1,nom:"A",proba:.4,enfants:[new t({rationnel:!1,nom:"B",proba:.3}),new t({rationnel:!1,nom:"\\bar B",proba:.7,visible:!1})]}),new t({rationnel:!1,nom:"\\bar A",proba:.6,visible:!1,enfants:[new t({rationnel:!1,nom:"B",proba:.09999999999999998,visible:!1}),new t({rationnel:!1,nom:"\\bar B",proba:.9,visible:!0,alter:""})]})]});a.setTailles(),i=a.represente(0,6,0,3,!0,1,8),this.enonce=`${b(`On considère l'arbre de probabilités ci-contre.<br><br>
      On cherche la probabilité de l'événement $B$.<br><br>
      On a :`,$.isHtml?A({xmin:-.1,xmax:12,ymin:-5,ymax:5,style:"inline",scale:.7},i):`
 \\pstree[treemode=R,labelsep=1mm,treesep=12mm]{\\TR{}}
            {
              \\pstree[labelsep=1mm]{\\TR{$A$}\\taput{$0,4$}}
              {
                \\TR{$B$}\\taput{$0,3$}
                \\TR{$\\overline{B}$}\\tbput{$$}
              }
              \\pstree[labelsep=1mm]{\\TR{$\\overline{A}$}\\tbput{$$}}
              {
                \\TR{$B$}\\taput{$$}
                \\TR{$\\overline{B}$}\\tbput{$0,9$}
              }

            }	

`)}<br>`,this.correction=`
    On applique la formule de probabilité totale :<br> $\\begin{aligned}
    p(B)&=p(A)\\times p_A(B)+p(\\overline A)\\times p_{\\overline A}(B)\\\\
    &=${e(.4,2)}\\times ${e(.3)}+${e(1-.4)}\\times ${e(1-.9)}\\\\
    &=${c(e(.4*.3+(1-.4)*(1-.9),2))}.
    \\end{aligned}$`,this.reponses=[`$p(B)=${e(.4*.3+(1-.4)*(1-.9))} $`,`$p(B)=${e(.12)}$ `,`$p(B)=${e(.66)}$ `,`$p(B)=${e(.3)}$ `]});s(this,"versionAleatoire",()=>{let i=[];const r=l(1,9)/10,o=l(1,9)/10,m=l(1,9)/10,a=new t({racine:!0,nom:"",proba:1,visible:!1,alter:"",enfants:[new t({rationnel:!1,nom:"A",proba:r,enfants:[new t({rationnel:!1,nom:"B",proba:o}),new t({rationnel:!1,nom:"\\bar B",proba:Number(1-o),visible:!1})]}),new t({rationnel:!1,nom:"\\bar A",proba:Number(1-r),visible:!1,enfants:[new t({rationnel:!1,nom:"B",proba:Number(1-m),visible:!1}),new t({rationnel:!1,nom:"\\bar B",proba:m,visible:!0,alter:""})]})]});a.setTailles(),i=a.represente(0,6,0,3,!0,1,8),this.enonce=`${b(`On considère l'arbre de probabilités ci-contre.<br><br>
      On cherche la probabilité de l'événement $B$.<br><br>
      On a :`,$.isHtml?A({xmin:-.1,xmax:10,ymin:-5,ymax:5,style:"inline",scale:.7},i):`
 \\pstree[treemode=R,labelsep=1mm,treesep=12mm]{\\TR{}}
            {
              \\pstree[labelsep=1mm]{\\TR{$A$}\\taput{$${e(r)}$}}
              {
                \\TR{$B$}\\taput{$${e(o)}$}
                \\TR{$\\overline{B}$}\\tbput{$$}
              }
              \\pstree[labelsep=1mm]{\\TR{$\\overline{A}$}\\tbput{$$}}
              {
                \\TR{$B$}\\taput{$$}
                \\TR{$\\overline{B}$}\\tbput{$${e(m)}$}
              }

            }	

`)}<br>`,this.correction=`
    On applique la formule de probabilité totale :<br> $\\begin{aligned}
    p(B)&=p(A)\\times p_A(B)+p(\\overline A)\\times p_{\\overline A}(B)\\\\
    &=${e(r,2)}\\times ${e(o)}+${e(1-r)}\\times ${e(1-m)}\\\\
    &=${c(e(r*o+(1-r)*(1-m),2))}.
    \\end{aligned}$`,this.reponses=[`$p(B)=${e(r*o+(1-r)*(1-m))} $`,`$p(B)=${e(r*o)}$ `,`$p(B)=${e(r*o+(1-r)*m)}$ `,`$p(B)=${e(o)}$ `]});this.versionAleatoire()}}export{Se as amcReady,Ve as amcType,Ge as dateDePublication,Xe as default,Ke as interactifReady,Le as interactifType,Je as refs,We as titre,Ie as uuid};
//# sourceMappingURL=1A-P05-1-4xUrWkiU.js.map
