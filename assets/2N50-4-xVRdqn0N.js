import{c as L}from"./CodageAngleDroit-lZ_78Kdc.js";import{c as M}from"./CodageSegment-Bhlkc4-p.js";import{p as n}from"./PointAbstrait-Cz1GEocE.js";import{s,c as N,m as o}from"./segmentsVecteurs-DWWtoN_4.js";import{c as D,t as h}from"./textes-BLrhx9_h.js";import{t as k}from"./texteSurSegment-B32w7q7w.js";import{E as H,$ as z,r as b,B as u,P as j,k as p,x as l,O as S,s as v,y as q,o as F}from"./index-Dkwu26bg.js";import{a as y}from"./deprecatedFractions-C2OiATGl.js";import{m as B}from"./mathalea2d-DE7tFmfi.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./fixeBordures-BSnKuTIe.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./polygones-BMzqJQvg.js";import"./vendors/earcut-jJVragJp.js";import"./pattern-DWd8Ia-0.js";import"./Polyline-CMaVFuZW.js";import"./transformations-CrKJZhMe.js";import"./droites-1cMQNrTw.js";import"./Vide2d-lYMmc9eB.js";import"./vendors/roughjs-CycZv-lV.js";import"./placeLatexSurSegment-BSWBP504.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./colors-vbveSA7f.js";const gt="Modéliser une situation géométrique à l'aide d'une équation",ht="16/12/2021",ft="cf5b7",yt={"fr-fr":["2N50-4","BP2RES24"],"fr-ch":["11FA6-13"]};class Ct extends H{constructor(){super(),this.nbQuestions=1,this.nbCols=2,this.nbColsCorr=2,this.sup=1}nouvelleVersion(){const Q=z(["typeE1","typeE2","typeE3","typeE4","typeE5","typeE6","typeE7","typeE8"],this.nbQuestions);for(let P=0,w=0;P<this.nbQuestions&&w<50;){const d=[];let C="",c="";const A=[];switch(Q[P]){case"typeE1":{const e=b(1,10),t=b(1,7),r=b(4*t+2*e+1,50),a=r-2*e-2*t,$=n(0,0,"A","below"),m=n(10,0,"B","below"),i=n(10,6,"C"),x=n(0,6,"D");d.push(s($,m),s(m,i),s(x,$),s(i,x),D($,m,i,x)),d.push(h(`x+${u(e)}`,o(i,x).x+0,o(i,x).y+.7,0,"black",1,"milieu",!0),h(`${u(t)}`,o($,x).x-.5,o($,x).y,0,"black",1,"milieu",!0)),C=` Un rectangle a pour largeur $${t}\\text{ cm}$ et pour longueur $x\\text{ cm}$.<br>
            En ajoutant $${e}\\text{ cm}$ à la longueur de ce rectangle, on obtient un nouveau rectangle dont le périmètre est $${r}\\text{ cm}$.<br>
             Quelle est la longueur $x$ du rectangle initial ?<br>
              `,c=" On réalise une petite figure à main levée pour visualiser la situation :<br>",c+=B({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},d),c+=`<br>Le périmètre du rectangle obtenu est donnée par la formule : $2\\times (\\ell+L)$ avec $\\ell$ la largeur du rectangle et $L$ sa longueur. <br>
                  Comme $\\ell=${t}$ et $L=x+${e}$, le périmètre est donné en fonction de $x$ par :  $ 2(${t}+x+${e})=2(x+${e+t})=2x+${2*e+2*t}$.<br>
       Puisque le périmètre du rectangle est $${r}\\text{ cm}$, on cherche $x$ tel que :   $2x+${2*e+2*t}=${r}$.<br>
       $\\begin{aligned}
       2x+${2*e+2*t}&=${r}\\\\
       2x+${2*e+2*t}${l(-2*e-2*t)}&=${r}${l(-2*e-2*t)}\\\\
       2x&=${r-2*e-2*t}\\\\
       x&=\\dfrac{${r-2*e-2*t}}{2}\\\\
       x&=${u(a/2)}\\end{aligned}$<br>

       La longueur $x$ du rectangle initial est  $${u(a/2)}\\text{ cm}$.
       `,A.push(e,r,a,t)}break;case"typeE2":{const e=b(1,10),t=b(1,5),r=b(t*t+t*e+1,100),a=n(0,0,"A","below"),$=n(10,0,"B","below"),m=n(10,6,"C"),i=n(0,6,"D");d.push(s(a,$),s($,m),s(i,a),s(m,i),D(a,$,m,i)),d.push(h(`x+${u(e)}`,o(m,i).x+0,o(m,i).y+.7,0,"black",1,"milieu",!0),h(`${u(t)}`,o(a,i).x-.5,o(a,i).y,0,"black",1,"milieu",!0)),C=` Un rectangle a pour largeur $${t}\\text{ cm}$ et pour longueur $x\\text{ cm}$.<br>
             En ajoutant $${e}\\text{ cm}$ à la longueur de ce rectangle, on obtient un nouveau rectangle dont l'aire est $${r}\\text{ cm}^2$.<br>
              Quelle est la longueur $x$ du rectangle initial ? <br>
              On donnera le résultat sous la forme d'une fraction irréductible ou d'un nombre entier le cas échéant.`,c=" On réalise une petite figure à main levée pour visualiser la situation :<br>",c+=B({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},d),c+=`L'aire du rectangle obtenu est donnée par la formule : $\\ell\\times L$ avec $\\ell$ la largeur du rectangle et $L$ sa longueur. <br>
                   Comme $\\ell=${t}$ et $L=x+${e}$, l'aire est donnée en fonction de $x$ par :  $ ${q(t)}\\times (x+${e})=${t}x+${t*e}$.<br>
        Puisque l'aire du rectangle est $${r}\\text{ cm}$, on cherche $x$ tel que :   $${q(t)}x+${t*e}=${r}$.<br>
       $\\begin{aligned}
        ${q(t)}x+${t*e}&=${r}\\\\
        ${q(t)}x+${t*e}${l(-t*e)}&=${r}${l(-t*e)}\\\\
                ${q(t)}x&=${r-t*e}
        \\end{aligned}$<br>`,t!==1?c+=`${v(18)}$\\begin{aligned}
          \\dfrac{${t}x}{${l(t)}}&=\\dfrac{${r-t*e}}{${l(t)}}\\\\
               x&=${y(r-t*e,t)}\\end{aligned}$<br>`:c+="",c+=` La longueur $x$ du rectangle initial est  $${y(r-t*e,t)}\\text{ cm}$.
        `,A.push(e,r,t)}break;case"typeE3":{const e=b(1,10),t=b(e*e+1,100),r=n(0,0,"A","below"),a=n(10,0,"B","below"),$=n(0,6,"C");d.push(s(r,a),s(a,$),s(r,$),D(r,a,$),L(a,r,$)),d.push(h(`${u(e)}`,o(r,a).x+0,o(r,a).y-.5,0,"black",1,"milieu",!0),h("x",o(r,$).x-.5,o(r,$).y,0,"black",1,"milieu",!0)),C=` Un triangle $ABC$ est rectangle en $A$. On a $AB= ${e}\\text{ cm}$  et $AC= x\\text{ cm}$.<br>
         Sachant que le carré de son hypoténuse est $${t}$, déterminer la valeur exacte de $x$. `,c=" On réalise une petite figure à main levée pour visualiser la situation :<br>",c+=B({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},d),c+=`Le carré de l'hypoténuse  est égal à $${t}$. On a donc $BC^2=${t}$.<br>
          Le triangle $ABC$ est rectangle en $A$, d'après le théorème de Pythagore :<br>
        $\\begin{aligned}
        AB^2+AC^2&=BC^2\\\\
        ${e*e}+x^2&=${t}\\\\
        ${e*e}+x^2${l(-e*e)}&=${t} ${l(-e*e)}\\\\
        x^2&=${t-e*e}\\\\
        x&=\\sqrt{${t-e*e}}${v(10)}  \\text{car}${v(2)} x>0
        \\end{aligned}$`,t-e*e===1||t-e*e===4||t-e*e===9||t-e*e===16||t-e*e===25||t-e*e===36||t-e*e===49||t-e*e===64||t-e*e===81||t-e*e===100?c+=`<br>
            ${v(28)} $x=${Math.sqrt(t-e*e)}$<br>
         La valeur de $x$ cherchée est  $${Math.sqrt(t-e*e)}$.
         `:c+=`<br>
         La valeur de $x$ cherchée est  $\\sqrt{${t-e*e}}$.
         `,A.push(e,t)}break;case"typeE4":{const e=b(1,10),t=b(e+1,15),r=n(0,0,"M","below"),a=n(10,0,"N","below"),$=n(0,6,"P");d.push(s(r,a),s(a,$),s(r,$),D(r,a,$),L(a,r,$)),d.push(h(`${u(t)}`,o(r,$).x-.5,o(r,$).y,0,"black",1,"milieu",!0),h("x",o(r,a).x+0,o(r,a).y-.5,0,"black",1,"milieu",!0),k(`$x+${u(e)}$`,$,a,"black",.5)),C=` Un triangle $MNP$ est rectangle en $M$. On a $MP= ${t}\\text{ cm}$  et $MN= x\\text{ cm}$.<br>
             L'hypoténuse du triangle $MNP$ mesure  $${e}\\text{ cm}$ de plus que le côté $[MN]$.<br>
             Déterminer la valeur de $x$ sous la forme d'une fraction irréductible ou d'un nombre entier le cas échéant. `,c=" On réalise une petite figure à main levée pour visualiser la situation :<br>",c+=B({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},d),c+=`Le triangle $MNP$ est rectangle en $M$, d'après le théorème de Pythagore :<br>
            $\\begin{aligned}
            MN^2+MP^2&=PN^2\\\\
            x^2+${t}^2&=(x+${e})^2\\\\
            x^2+${t*t}&= x^2+2\\times x\\times ${e}+${e}^2\\\\
            x^2+${t*t}&= x^2+${2*e}x+${e*e}\\\\
            ${t*t}+\\cancel{x^2}&=\\cancel{x^2}+${2*e}x+${e*e} \\\\
            ${2*e}x+${e*e}&=${t*t}\\\\
            ${2*e}x+${e*e}${l(-e*e)}&=${t*t}${l(-e*e)}\\\\
            ${2*e}x&=${t*t-e*e}\\\\
            \\dfrac{${2*e}x}{${l(2*e)}}&=\\dfrac{${t*t-e*e}}{${l(2*e)}}\\\\
            x&=${y(t*t-e*e,2*e)}\\end{aligned}$<br>
            
       La valeur de $x$ cherchée est : $${y(t*t-e*e,2*e)}$.
       `,A.push(t,e)}break;case"typeE5":{const e=b(1,8),t=b(e*e+1,100);C=` En augmentant le côté d'un carré de $${e}\\text{ cm}$, son aire aumente de $${t}\\text{ cm}^2$.<br>
      Quelle est la longueur du côté de ce carré ? <br>
      On donnera le résultat sous la forme d'une fraction irréductible ou d'un nombre entier le cas échéant.`,c=`On note $x$ la longueur du côté du carré que l'on cherche.<br>
      La différence des aires entre les deux carrés est  $${t}$, on cherche $x$ tel que :   <br>
      $\\begin{aligned}
      (x+${e})^2-x^2&=${t}\\\\
      \\cancel{x^2}+ ${2*e}x+${e}^2-\\cancel{x^2}&=${t}\\\\
       ${2*e}x+${e*e}&=${t}\\\\
        ${2*e}x+${e*e}${l(-e*e)}&=${t}${l(-e*e)}\\\\
         ${2*e}x&=${t-e*e}\\\\
         \\dfrac{${2*e}x}{${l(2*e)}}&=\\dfrac{${t-e*e}}{${l(2*e)}}\\\\
         x&=${y(t-e*e,2*e)}\\end{aligned}$
           <br>
           La longueur du côté du carré est  $${y(t-e*e,2*e)}\\text{ cm}$.
 `,A.push(e,t)}break;case"typeE6":{const e=b(1,7),t=b(e+2,14),r=(t-e)/2,$=b(1,10)*2*(t+e)/2,m=n(0,0,"A","below"),i=n(9,0,"H","below"),x=n(15,0,"B","below"),g=n(15,8,"C"),f=n(9,8,"D"),E=n(0,-1,"E"),O=n(15,-1,"F");d.push(s(m,f),N(E,O),s(m,x),s(x,g),s(f,g),s(f,i),L(m,x,g),L(x,g,f),D(m,i,f,x,g),L(x,i,f)),d.push(k(`${S(e)} cm`,f,g,"black",.5),k(`${S(t)} cm`,E,O,"black",-.5),h("x",o(x,g).x+.5,o(x,g).y,0,"black",1,"milieu",!0)),C=" $ABCD$ est un trapèze rectangle.<br> ",C+="Le schéma ci-dessous n'est pas à l'échelle.<br>"+B({xmin:-1,ymin:-2,xmax:16,ymax:10,pixelsParCm:20,scale:1},d),C+=`Sachant que l'aire de ce trapèze est $${$}\\text{ cm}^2$ et en utilisant les données du graphique, déterminer la hauteur de ce trapèze.<br>
                    <br>`,c=B({xmin:-1,ymin:-3,xmax:16,ymax:10,pixelsParCm:20,scale:.7},d),c+=`<br>La  hauteur du trapèze est  $x$. Il est constitué du rectangle $HBCD$ et du triangle rectangle $AHD$. <br>
                    Son aire est donc la somme des aires de ces deux figures. <br>
                    $\\bullet~$ L' aire du rectangle $HBCD$ est : $${e}\\times x=${p(e,0)}$.<br>
                    $\\bullet~$ L' aire de triangle rectangle $AHD$ est : $\\dfrac{(${t}-${e})\\times x}{2}=${p((t-e)/2,0)}$.
                    <br>
                    Puisque l'aire du trapèze est $${$}\\text{ cm}^2$, $x$ est donc la solution de l'équation : $${p(e,0)} + ${p((t-e)/2,0)}=${$}$.<br>
                    $\\begin{aligned}
                    ${p(e,0)} + ${p((t-e)/2,0)}&=${$}\\\\
                    ${u(e+(t-e)/2)}x&=${$}\\\\
                    \\dfrac{${u(e+r)}x}{${l(u(e+r))}}&=\\dfrac{${$}}{${l(u(e+r))}}\\\\
                    x&=${y($,e+r)}
                    \\end{aligned}$<br>
                    La hauteur du trapèze est : $${y($,e+r)}\\text{ cm}$.`,A.push(t,e,$,r)}break;case"typeE7":{const e=b(3,8),t=b(1,6),r=b(1,6),$=(b(1,20)*(2*e+t)+2*e*r+r*t)/2,m=n(0,0,"A","below"),i=n(5,6,"H","below"),x=n(10,0,"B","below"),g=n(10,6,"C"),f=n(0,6,"D"),E=n(5,10,"E");d.push(s(m,x),s(x,g),s(g,f),s(m,f),s(E,g),s(E,f),s(E,i),L(E,i,g),D(m,i,f,x,g,E),M("//","blue",f,E,E,g)),d.push(h(`${u(e)}`,o(x,g).x+.4,o(x,g).y,0,"black",1,"milieu",!0),h(`${u(t)}`,o(E,i).x+.4,o(E,i).y,0,"black",1,"milieu",!0),h(`x + ${u(r)}`,o(m,x).x+.4,o(m,x).y-.4,0,"black",1,"milieu",!0)),C=` La figure ci-dessous (qui n'est pas à l'échelle) est composée d'un rectangle $ABCD$ et d'un triangle isocèle $DEC$. <br>
        L'unité est le mètre.<br> `+B({xmin:-1,ymin:-1,xmax:12,ymax:11,pixelsParCm:20,scale:1},d),C+=`Sachant que l'aire de cette figure est $${u($)}\\text{ m}^2$ et en utilisant les données du graphique, déterminer la  valeur exacte de $x$.<br>
         <br>`,c=B({xmin:-1,ymin:-1,xmax:16,ymax:11,pixelsParCm:20,scale:.7},d),c+=`<br>La figure est  constituée du rectangle $ABCD$ et du triangle isocèle $DEC$.   <br>
        Son aire est donc la somme des aires de ces deux figures. <br>
        $\\bullet~$ L' aire du rectangle $ABCD$ est : $${e}\\times (x+${r})=${p(e,e*r)}$ ;<br>
        $\\bullet~$ L' aire de triangle isocèle $DEC$ est : $\\dfrac{${t}\\times(x +${r})}{2}=${y(t,2)}(x+${r})=${p(t/2,t*r/2)}$.<br>
        L'aire de la figure étant $${u($)}\\text{ m}^2$, on cherche $x$ tel que : <br>
        $\\begin{aligned}
        (${p(e,e*r)})+(${p(t/2,t*r/2)})&=${u($)}\\\\
        ${p(e,e*r)}+${p(t/2,t*r/2)}&=${u($)}\\\\
        ${p(e+t/2,e*r+t*r/2)}&=${u($)}\\\\
        ${p(e+t/2,e*r+t*r/2)}${l(u(-e*r-t*r/2))}&=${$}${l(u(-e*r-t*r/2))}\\\\
                ${p(e+t/2,0)}&=${p(0,$-e*r-t*r/2)}\\\\
                \\dfrac{${p(e+t/2,0)}}{${l(u(e+t/2))}}&=\\dfrac{${u($-e*r-t*r/2)}}{${l(u(e+t/2))}}\\\\
                x&=${y(($-e*r-t*r/2)*10,(e+t/2)*10)}
                \\end{aligned}$<br>
                La valeur de $x$ cherchée est donc : $ ${y(($-e*r-t*r/2)*10,(e+t/2)*10)}$.
                `,A.push(e,t,r,$)}break;default:{const e=b(10,50),t=n(0,0,"A","below"),r=n(10,0,"B","below"),a=n(10,6,"C"),$=n(4,6,"D"),m=n(2,3.46,"E"),i=n(4,0,"M","below"),x=n(10,-1,"K"),g=n(0,-1,"L");d.push(s(t,r),s(t,m),N(x,g),s(m,i),s(i,$),s(r,a),s($,a),L(r,i,$),L(i,r,a),L(r,a,$),L(a,$,i),D(t,i,r,a,$,m),M("//","blue",t,m,m,i,t,i),M("/","blue",i,r,r,a,a,$,$,i)),d.push(h("$x$",o(t,i).x,o(t,i).y-.3,0,"black",2,"milieu",!0),h(`${u(e)}`,o(t,r).x,o(t,r).y-1.5,0,"black",1,"milieu",!0)),C=`$[AB]$ est un segment de longueur $${e}$ et $M$ est un point de ce segment.<br>
      Du même côté du segment $[AB]$, on trace le triangle équilatéral $AME$ et le carré $MBCD$.<br>
      On pose $AM=x$.<br>
     Déterminer la valeur de $x$ pour que le périmètre du triangle $AME$ soit égal à celui du carré $MBCD$.  `,c=j.isHtml?"<br>":"On réalise une figure pour visualiser la situation :<br>",c+=B({xmin:-1,ymin:-3,xmax:12,ymax:8,pixelsParCm:30,scale:2},d),c+=` Le triangle $AME$ est un triangle équilatéral de côté $x$, son périmètre est donc  $3x$.<br>
      
      Le carré $MBCD$ a pour côté $MB=${e}-x$. Son périmètre est donc : $4\\times (${e}-x)=${p(-4,4*e)} $.
      <br>
      On cherche $x$ tel que : <br>
      $\\begin{aligned}
      ${p(-4,4*e)}&=3x\\\\
      ${p(-4,4*e)} ${l("-3\\textit{x}")}&=3x${l("-3\\textit{x}")}\\\\
      ${p(-7,4*e)}&=0\\\\
      ${p(-7,4*e)}${l(-4*e)}&=0${l(-4*e)}\\\\
      \\dfrac{${p(-7,0)}}{${l("-7")}}&=\\dfrac{${p(0,-4*e)}}{${l("-7")}}\\\\
      x&=${y(-4*e,-7)}
      \\end{aligned}$<br>
      Les deux périmètres sont égaux lorsque  : $x=${y(-4*e,-7)}$.
      `,A.push(e)}break}this.questionJamaisPosee(P,A.map(String).join())&&(this.listeQuestions[P]=C,this.listeCorrections[P]=c,P++),w++}F(this)}}export{ht as dateDePublication,Ct as default,yt as refs,gt as titre,ft as uuid};
//# sourceMappingURL=2N50-4-xVRdqn0N.js.map
