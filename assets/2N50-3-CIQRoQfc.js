import{b as m}from"./style-3ago9wg-.js";import{E as M,$ as y,r as a,bw as x,s,a2 as j,x as n,B as t,k as c,q as A,ar as g,o as C}from"./index-Bl1vqpvV.js";import{a as p}from"./deprecatedFractions-C-Ed8IAt.js";import{b as q}from"./Personne-d0UztHPp.js";import"./vendors/decimal.js-BceHFVC1.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./colors-vbveSA7f.js";const Ue="Modéliser une situation à l'aide d'une équation",we="16/12/2021",Ie="846b8",Re={"fr-fr":["2N50-3","BP2RES23"],"fr-ch":["10FA3-12","11FA6-8"]};class Ve extends M{constructor(){super(),this.besoinFormulaireNumerique=["Choix des questions",3,`1 : Situations concrètes
2 : Programmes de calculs
3 : Mélange`],this.nbQuestions=1,this.nbCols=2,this.nbColsCorr=2,this.sup=3}nouvelleVersion(){let f;this.sup===1?f=["typeE1","typeE2","typeE3","typeE4"]:this.sup===2?f=["typeE5","typeE6","typeE7","typeE8"]:f=["typeE1","typeE2","typeE3","typeE4","typeE5","typeE6","typeE7","typeE8"];const v=y(f,this.nbQuestions);for(let b=0,h=0;b<this.nbQuestions&&h<50;){let l="",u="";const d=[];switch(v[b]){case"typeE1":{const e=a(10,20)*10,$=a(15,20)*10,r=a(6,9)*10,i=$-e+r,o=a(3,6),E=A(o,100);l=`  Le salaire mensuel d'un commercial est composé d'un salaire fixe auquel
                  s'ajoute une prime suivant ses objectifs.<br>
                   Au mois de janvier, son salaire fixe est $x$ € et sa prime a été de $${e}$ €.  <br>
                  Au mois de février son salaire fixe a augmenté de $${o}~\\%$ et il reçoit une prime de $${$}$ €. <br>
                  Globalement, son salaire au mois
                  de février a augmenté de $${i}$ € par rapport à celui du mois de janvier. <br>
                  ${g(0)} Exprimer en fonction de $x$ son salaire au mois de janvier, puis celui du mois de février.<br>
                  ${g(1)} Déterminer le salaire du commercial au mois de janvier (arrondir à l'euro près).<br>
              `,u=`${g(0)} Le salaire du mois de janvier en fonction de $x$ est : $x+${e}$.<br>
            Le salaire du mois de février en fonction de $x$ est : $\\left(1+${E.texFraction}\\right)x+${$}=${t(1+o/100)}x+${$}$.<br>
            ${g(1)} Globalement, le salaire au mois
                  de février a augmenté de $${i}$ € par rapport à celui du mois de janvier, cela signifie que le salaire du
                   mois de janvier augmenté de $${i}$ € est donc égal au salaire du mois de février.<br>
            Ainsi, $(x+${e})+${i}=${t(1+o/100)}x+${$}$<br>
            On résout l'équation :<br>
          ${s(8)} $ \\begin{aligned}
                        x+${t(e+i)}&=(1+${t(o/100)})x+${$}\\\\
                       x+${t(e+i)}&=${t(1+o/100)}x+${$}\\\\
                       x+${t(e+i)}-${n(t(e+i))}&=${t(1+o/100)}x+${$}-${n(t(e+i))}\\\\
            x&=${t(1+o/100)}x${t($-e-i)}\\\\
            x-${n(t(1+o/100))}${n("\\textit{x}")}&=${t(1+o/100)}x${t($-e-i)}-${n(t(1+o/100))}${n("\\textit{x}")}\\\\
            \\dfrac{${t(-o/100)}x}{${n(t(-o/100))}}&=\\dfrac{${t($-e-i)}}{${n(t(-o/100))}}\\\\
            x&=\\dfrac{${t($-e-i)}}{${t(-o/100)}}
            \\end{aligned}$<br>`,Math.round(($-e-i)/(-o/100))===($-e-i)/(-o/100)?u+=` ${s(40)}$ \\begin{aligned}
            x&= ${Math.round(($-e-i)/(-o/100))}
            \\end{aligned}$<br>`:u+=` ${s(40)}$ \\begin{aligned}
            x&\\simeq ${Math.round(($-e-i)/(-o/100))}
            \\end{aligned}$<br>`,u+=`Puisque le salaire est composé du fixe et de la prime, le salaire de ce commercial au mois de janvier a été de :
      $${Math.round(($-e-i)/(-o/100))}+${e}$ €, soit  $${Math.round(($-e-i)/(-o/100)+e)}$ €.`,d.push(i,r,$,e,o)}break;case"typeE2":{const e=a(20,30),$=a(e+5,50);let r=a(20,35);const i=a(15,r-1)/100;r=r/100,l=`  Une société de location de véhicules propose deux tarifs :<br>
                $\\bullet$ Tarif A : un forfait de $${e}$ € et $${t(r)}$ € par $\\text{km}$ parcouru ;<br>
                $\\bullet$  Tarif B : un forfait de $${$}$ € et $${t(i)}$ € par $\\text{km}$ parcouru ;<br>
          
                       Pour quelle distance (arrondie au $\\text{km}$ près), les deux tarifs sont-ils égaux ?<br>
                                      `,u=`En notant $x$, le nombre de $\\text{km}$ parcourus, on a :<br>
                $\\bullet$ Avec le tarif A, le prix à payer est : $${c(r,e)}$ ;<br>
                $\\bullet$  Avec le tarif B, le prix à payer est : $${c(i,$)}$ ;<br>
                          Les deux tarifs sont identiques lorsque : $${c(r,e)}=${c(i,$)}$.<br>
                On résout l'équation :<br>
                $\\begin{aligned}
                ${t(r)}x+${e}&=${t(i)}x+${$}\\\\
                 ${t(r)}x-${n(t(i))}${n("\\textit{x}")}+${e}&=${t(i)}x+${$}-${n(t(i))}${n("\\textit{x}")}\\\\
                       ${t(r-i)}x+${e}&=${$}\\\\
                ${t(r-i)}x+${e}-${n(t(e))}&=${$}-${e}\\\\
                ${t(r-i)}x&=${$-e}\\\\
        \\dfrac{${t(r-i)}x}{${n(t(r-i))}}&=\\dfrac{${$-e}}{${n(t(r-i))}}\\\\
        \\end{aligned}$<br>`,Math.round(($-e)/(r-i))===($-e)/(r-i)?u+=` ${s(40)}$ \\begin{aligned}
                            x&= ${Math.round(($-e)/(r-i))}
                            \\end{aligned}$<br>
                                            C'est pour une distance de $${Math.round(($-e)/(r-i))}\\text{ km}$ que les deux tarifs sont identiques.
               `:u+=` ${s(40)}$ \\begin{aligned}
                            x&\\simeq ${Math.round(($-e)/(r-i))}
                            \\end{aligned}$<br>
                                         C'est pour une distance d'environ $${Math.round(($-e)/(r-i))}\\text{ km}$ que les deux tarifs sont identiques.
                                `,d.push(e,$,r,i)}break;case"typeE3":{const e=a(4,10)/100,$=a(300,400),r=a(Math.floor((e+1)*100),12);l=`  Une usine fabrique des bouteilles en verre. <br>
            En notant $x$ le nombre de bouteilles fabriquées dans une journée, les coûts de fabrication en euros, sont donnés par :
            $${t(e)}x+${t($)}$.<br>
            Ces bouteilles sont toutes revendues au tarif unitaire de $${t(r)}$ €.<br>
            On appelle recette le produit du nombre de bouteilles vendues par le prix unitaire.<br>
            On appelle résultat net de l'entreprise (lorsqu'elle produit et vend $x$ bouteilles), la différence entre la recette et les coûts de fabrication.<br>
      
      Combien de bouteilles l'entreprise doit-elle produire et vendre pour que le résultat net soit nul ?
            <br>
                          `,u=`
      $\\bullet$ La recette est donnée par : $${t(r)}\\times x=${t(r)}x$ ;<br>
      $\\bullet$ Les coûts de fabrication sont donnés par : $${t(e)}x+${t($)}$ ;<br>
      $\\bullet$ Le résultat net est donné par la différence entre la recette et les coûts, donc par :<br>
       $${t(r)}x-(${t(e)}x+${t($)})=${t(r)}x-${t(e)}x-${t($)}=${t(r-e)}x-${t($)}$.<br>
            Le résultat est nul lorsque  : $${t(r-e)}x-${t($)}=0$<br>
            On résout l'équation :<br>
           $\\begin{aligned}
                  ${t(r-e)}x-${t($)}+${n(t($))}&=0+${n(t($))}\\\\
            ${t(r-e)}x&=${t($)}\\\\
            \\dfrac{${t(r-e)}x}{${n(t(r-e))}}&=\\dfrac{${t($)}}{${n(t(r-e))}}\\\\
                 \\end{aligned}$<br>`,Math.round($/(r-e))===$/(r-e)?u+=`${s(37)} $\\begin{aligned}
         x&=${Math.round($/(r-e))}
         \\end{aligned}$<br>
            C'est pour une production de $${Math.round($/(r-e))}$ bouteilles  que le résultat net de l'entreprise est nul.
        `:u+=`${s(37)} $\\begin{aligned}
        x&\\simeq${Math.round($/(r-e))}
        \\end{aligned}$<br>
           C'est pour une production d'environ $${Math.round($/(r-e))}$ bouteilles  que le résultat net de l'entreprise est nul.
       `,d.push(e,$,r)}break;case"typeE4":{const e=a(48,55),$=a(3,6),r=a(12,25),i=a(3,5),o=r*(e+$)-i*e;l=`  $${e}$ élèves  d'un lycée font une sortie théâtre. Ils sont accompagnés de $${$}$ adultes. <br>
            Les élèves bénéficient d'un tarif réduit. Ils paient $${i}$ € de moins que les adultes. <br>
            Le coût total de cette sortie (élèves $+$ adultes) est de $${o}$ €. <br>
            En notant $x$ le tarif pour un adulte, modéliser la situation à l'aide d'une équation puis déterminer le prix de la place pour un adulte.
      
              `,u=`En notant $x$ le tarif pour un adulte,  celui d'un élève est $(x-${i})$ €. <br>
            Puisque le coût total est de $${o}$ €, on obtient l'équation : <br>
            $\\begin{aligned}
            ${e}\\times (x-${i})+${$}\\times x &=${o}\\\\
                        ${t(e)}x-${t(e*i)}+${$} x &=${o}\\\\
            ${t(e+$)}x-${t(e*i)} &=${o}\\\\
            ${t(e+$)}x-${t(e*i)}+${n(t(e*i))} &=${o}+${n(t(e*i))}\\\\
            ${t(e+$)}x &=${t(o+e*i)}\\\\
            \\dfrac{${t(e+$)}x}{${n(t(e+$))}} &= \\dfrac{${t(o+e*i)}}{${n(t(e+$))}}\\\\
            x &= ${t((o+e*i)/(e+$))}\\end{aligned}$<br>
      Le prix de la place de théâtre pour un adulte est : $${t((o+e*i)/(e+$))}$ €.
              `,d.push(e,$,o,i)}break;case"typeE5":{const e=a(4,10),$=a(2,10),r=a(2,10),i=a(-5,5);l=` ${m("Voici un programme de calcul :")} `,l+=x(["Choisir un nombre",`Multiplier ce nombre par $${e}$`,`Ajouter $${$}$`,`Multiplier le résultat par $${r}$`]),l+=`Quel nombre doit-on choisir au départ pour obtenir $${i}$ comme résultat final ?<br>
               On donnera le résultat sous la forme d'une fraction irréductible ou d'un nombre entier le cas échéant.`,u=`En notant $x$ le nombre choisi au départ, on obtient  :<br>
          $\\bullet$ Multiplier ce nombre par $${e}$ : ${s(6)}$${e}\\times x=${e}x$ ;<br>
          $\\bullet$ Ajouter $${$}$ : ${s(6)}$${e}x+${$}$ ; <br>
          $\\bullet$ Multiplier le résultat par $${r}$ :${s(6)}$${r}\\times (${e}x+${$})=${t(r*e)}x+${t($*r)}$.<br>
          <br>
          On cherche $x$ tel que : <br>
          $\\begin{aligned}
          ${t(r*e)}x+${t($*r)}&=${t(i)}\\\\
         ${t(r*e)}x+${t($*r)}-${n(t($*r))}&=${t(i)}-${n(t($*r))}\\\\
         ${t(r*e)}x&=${t(i-$*r)}\\\\
         \\dfrac{${t(r*e)}x}{${n(t(r*e))}}&=\\dfrac{${t(i-$*r)}}{${n(t(r*e))}}\\\\
         x&=${p(i-$*r,r*e)}
         \\end{aligned}$<br>
           Le nombre que l'on doit choisir pour obtenir $${i}$ à la fin du programme est :  $${p(i-$*r,r*e)}$.
                     `,d.push(e,$,r,i)}break;case"typeE6":{const e=a(2,10),$=a(2,10),r=a(2,10,[e]),i=q(),o=q();l=`${i} choisit un nombre, le multiplie par $${e}$ puis ajoute $${$}$.  <br>
           ${o} choisit le même nombre, lui ajoute $${r}$, multiplie le résultat par le nombre de départ, puis soustrait le carré du nombre de départ.<br>
            Quel nombre doivent-ils choisir au départ pour obtenir le même résultat ?`,u=`En notant $x$ le nombre choisi au départ, on obtient :<br>
          $\\bullet$  avec le calcul de ${i} :
      $${e}\\times x+${$}=${e}x+${$}$ ;<br>
              $\\bullet$ avec celui de ${o}, on obtient : <br>
      $(x+${r})\\times x-x^2=\\cancel{x^2}+${r}x-\\cancel{x^2}=${r}x$.<br>
      <br>
      On cherche donc $x$ tel que : <br>
      $\\begin{aligned}
      ${e}x+${$}&=${r}x\\\\
      ${e}x+${$}-${n(t(r))}${n("\\textit{x}")}&=${r}x-${n(t(r))}${n("\\textit{x}")}\\\\
      ${c(e-r,0)}+${$}&=0\\\\
      ${c(e-r,0)}+${$}-${n($)}&=0-${n($)}
      \\end{aligned}$<br>`,e-r===1?u+=`${s(25)}$x=-${$}$<br>
           Le nombre commun que ${i} et ${o} doivent choisir au départ pour obtenir le même résultat est : $-${$}$.
                  `:u+=`
            ${s(20)}$ \\begin{aligned}
           \\dfrac{${e-r}x}{${n(e-r)}}&=\\dfrac{${-$}}{${n(e-r)}}\\\\
           x&=${p(-$,e-r)}
           \\end{aligned}$<br>
          Le nombre commun que ${i} et ${o} doivent choisir au départ pour obtenir le même résultat est : $${p(-$,e-r)}$.`,d.push(e,$,r)}break;case"typeE7":{const e=a(2,8),$=a(10,100);l=`On donne les deux programmes de calcul suivants :<br>
          ${m("Programme 1 :")}<br>
                 `,l+=x(["Choisir un nombre",`Ajouter $${e}$`,"Prendre le carré du résultat"]),l+=`<br>
          ${m("Programme 2 :")}<br>
                      `,l+=x(["Choisir un nombre",`Multiplier par $${t(2*e)}$ `,`Ajouter $${$}$`]),l+="<br>Déterminer les nombres éventuels que l'on peut entrer dans ces deux programmes pour qu'au final ils donnent le même résultat.<br><br>",u=`En notant $x$ le nombre choisi au départ : <br>
                 
                 On obtient avec le ${m("programme 1 :")} <br>
      $\\bullet$ Ajouter $${e}$ :${s(5)} $x+${e}$ ;<br>
      $\\bullet$ Prendre le carré du résultat :${s(5)} $(x+${e})^2=x^2+2\\times x\\times ${e}+${e}^2=x^2+${t(2*e)}x+${t(e*e)}$ ;<br>
                  <br> On obtient avec le ${m("programme 2 :")} <br>
      $\\bullet$ Multiplier par $${t(2*e)}$ :${s(5)} $x\\times ${t(2*e)}=${t(2*e)}x$ ;<br>
      $\\bullet$ Ajouter $${$}$ : ${s(5)} $${t(2*e)}x+${$}$.<br><br>
      Les deux programmes donnent le même résultat lorsque : <br>
      $\\begin{aligned}
      x^2+${t(2*e)}x+${t(e*e)}&=${t(2*e)}x+${$}\\\\
      x^2+${t(2*e)}x+${t(e*e)}-${n(t(2*e))}${n("\\textit{x}")}&=${t(2*e)}x+${$}-${n(t(2*e))}${n("\\textit{x}")}\\\\
      x^2+${t(e*e)}&=${$}\\\\
      x^2+${t(e*e)}-${n(t(e*e))}&=${$}-${n(t(e*e))}\\\\
      x^2&=${t($-e*e)}
      \\end{aligned}$
      <br>
            `,$<e*e?u+=`
           L'équation n'a pas de solution car $${t($-e*e)}<0$. <br>Par conséquent il n'existe pas de nombre qui donne le même résultat avec les deux programmes.
                  `:$===e*e?u+=`${s(8)}$\\begin{aligned}x&=-${$}\\\\
              x&=0
              \\end{aligned}<br>
           Quand on entre $0$, les deux programmes donnent le même résultat.
                  `:$-e*e===1||$-e*e===4||$-e*e===9||$-e*e===16||$-e*e===25||$-e*e===36||$-e*e===49||$-e*e===64||$-e*e===81||$-e*e===100?u+=`${s(10)}$x=-${Math.sqrt($-e*e)}$ ou $x=${Math.sqrt($-e*e)}$.<br>
              Quand on entre $-${Math.sqrt($-e*e)}$ ou $-${Math.sqrt($-e*e)}$, on obtient le même résultat avec les deux programmes.
                  `:u+=`${s(10)}$x=-\\sqrt{${$-e*e}}$ ou $x=\\sqrt{${$-e*e}}$.<br>
              Quand on entre   $-\\sqrt{${$-e*e}}$ ou $\\sqrt{${$-e*e}}$, on obtient le même résultat avec les deux programmes.
            `,d.push(e,$)}break;default:{const e=a(2,10),$=a(2,10),r=a(2,10),i=a(2,10);l=`On donne les deux programmes de calcul suivants :<br>
          ${m("Programme 1 :")}<br>
                   `,l+=x(["Choisir un nombre","Prendre l'opposé de ce nombre",`Multiplier par $${$}$`,`Ajouter $${e}$`]),l+=`<br>
          ${m("Programme 2 :")}<br>
                        `,l+=x(["Choisir un nombre",`Multiplier par $${r}$ `,`Ajouter $${i}$`]),l+=`<br>On entre le même nombre dans chacun des deux programmes de calcul et on effectue le produit de ces deux nombres. <br>
              Quel(s) nombre(s) doit-on entrer pour que ce produit soit nul ?<br><br>`,u=`En notant $x$ le nombre choisi au départ : <br>
                   
                   On obtient avec le ${m("programme 1 :")} :<br>
        $\\bullet$ Prendre l'opposé de ce nombre :${s(10)} $-x$ <br>
        $\\bullet$ Multiplier par $${$}$ :${s(10)} $${$}\\times (-x)= -${$}x$ <br>
        $\\bullet$ Ajouter $${e}$ :${s(10)} $-${$}x+${e}$ <br>
                <br> On obtient avec le ${m("programme 1 :")} :<br>
        $\\bullet$ Multiplier par $${r}$ :${s(10)} $x\\times ${r}=${r}x$ <br>
        $\\bullet$ Ajouter $${i}$ : ${s(10)} $${r}x+${i}$<br>
        
        Le produit des deux nombres obtenu à l'issue de ces deux programmes est  : $(-${$}x+${e})(${r}x+${i})$<br>
        On cherche les valeurs de $x$ pour que ce produit soit nul c'est-à-dire les solutions de l'équation : $(-${$}x+${e})(${r}x+${i})=0$.<br>
        
        On reconnaît une équation produit nul.<br>
        ${j("Un produit est nul si et seulement si au moins un de ses facteurs est nul.")}<br>
        
        $\\begin{aligned}
        -${$}x+${e}=0  &${s(2)}\\text{ou}${s(2)}  ${r}x+${i}=0\\\\
                -${$}x+${e}-${n(e)}=0-${n(e)}&${s(2)}\\text{ou}${s(2)} ${r}x+${i}-${n(i)}=0-${n(i)}\\\\
        -${$}x=-${e}&${s(2)}\\text{ou}${s(2)}${r}x=${-i}\\\\
        \\dfrac{-${$}x}{${n(-$)}}=\\dfrac{-${e}}{${n(-$)}} &${s(2)}\\text{ou} ${s(2)}\\dfrac{-${i}x}{${n(r)}}=\\dfrac{-${i}}{${n(r)}}\\\\
        x=${p(-e,-$)}&${s(2)}\\text{ou}${s(2)}x=${p(-i,r)}\\end{aligned}$<br>
              On obtient $0$ en faisant le produit des deux résultats de ces programmes en choisissant comme nombres au départ : $${p(-e,-$)}$ ou $${p(-i,r)}$.
              `,d.push(e,$,r,i)}break}this.questionJamaisPosee(b,d.map(String).join())&&(this.listeQuestions[b]=l,this.listeCorrections[b]=u,b++),h++}C(this)}}export{we as dateDePublication,Ve as default,Re as refs,Ue as titre,Ie as uuid};
//# sourceMappingURL=2N50-3-CIQRoQfc.js.map
