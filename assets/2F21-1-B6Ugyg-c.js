import{D as i}from"./vendors/decimal.js-BceHFVC1.js";import{b as z}from"./InterpolationCosinusoidale-B-vJ5tGN.js";import{c as F}from"./Courbe-CHOW_P-D.js";import{c as te}from"./CourbeInterpolee.1-YxzhqDqg.js";import{a as ne}from"./droites-1cMQNrTw.js";import{p as y}from"./PointAbstrait-Cz1GEocE.js";import{r as U}from"./reperes-DYK4Mtmm.js";import{s as A}from"./segmentsVecteurs-DWWtoN_4.js";import{t as H,a as L}from"./textes-BLrhx9_h.js";import{c as b}from"./lists-OzKsERu-.js";import{E as re,Y as se,$ as ie,r as a,B as e,p as q,s as x,ae as m,af as T,o as ae}from"./index-Dkwu26bg.js";import{p as _,b as oe}from"./Personne-Bn9qwUJ2.js";import{m as E}from"./mathalea2d-DE7tFmfi.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./Polyline-CMaVFuZW.js";import"./Vide2d-lYMmc9eB.js";import"./fixeBordures-BSnKuTIe.js";import"./Plot-B0YvSjpj.js";import"./vendors/roughjs-CycZv-lV.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-DByOnDAE.js";import"./json/refToUuidCH-Co2Ho8bY.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-DjDOIBSG.js";import"./json/referentiel2022FR-BT6kfVfP.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const St="Modéliser une situation à l'aide d'une fonction",Qt="14/02/2023",Vt="13/12/2024",Bt="5621b",jt={"fr-fr":["2F21-1"],"fr-ch":["10FA5-16","11FA9-10"]};class zt extends re{constructor(){super(),this.nbQuestions=1,this.sup="12",this.spacing=1.5,this.spacingCorr=2,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : La salle de sport","2 : Location de voitures","3 : Distance de freinage","4 : Abonnement à une revue","5 : Station service","6 : La moto","7 : Alcool dans le sang","8 : Pression artérielle","9 : Le silo à grains","10 : Le hand-spinner","11 : La facture d'eau","12 : Mélange"].join(`
`)]}nouvelleVersion(){const J=se({saisie:this.sup,min:1,max:11,melange:12,defaut:12,nbQuestions:this.nbQuestions}),N=ie(J,this.nbQuestions);for(let w=0,c,g,Y=0;w<this.nbQuestions&&Y<50;){const O=[["f"],["g"],["h"],["u"],["v"],["w"]];switch(N[w]){case 1:{const t=a(11,13),n=a(1,9)/10,r=new i(a(5,6)).add(n),s=a(20,25),o=a(4,7)/10,$=new i(a(4,4)).add(o),u=_(),d=a(30,70),p=a(35,37);c=` Dans une salle de sport, deux formules sont proposées :<br>
            ${T("Formule A :")} abonnement mensuel de $${t}$ € puis $${m(r)}$ € par séance ;<br>
            ${T("Formule B :")} abonnement mensuel de $${s}$ € puis $${m($)}$ € par séance.<br>
            Le nombre de séances mensuelles ne peut excéder $${p}$. <br>
            On note $x$ le nombre de séances mensuelles d'un abonné, $f(x)$ le prix payé avec la formule A et $g(x)$ le prix payé avec la formule B.<br>
            `,c+=b({items:[" Donner l'ensemble de définition des fonctions $f$ et $g$."," Exprimer en fonction de $x$, $f(x)$, puis $g(x)$.",`${u} choisit une formule mais ne veut pas dépenser plus de $${d}$ € pour un mois.<br>
                Quelle formule lui conseiller s'il veut faire le maximum de séances de sport dans le mois ?`," À partir de combien de séances mensuelles, la formule B est-elle plus avantageuse ?"],style:"nombres"}),g=b({items:[`Le nombre minimal de séances dans le mois est $0$ et le nombre maximal est $${p}$, donc l'ensemble de définition des fonctions $f$ et $g$ est l'ensemble des entiers de l'intervalle $[0\\,;\\,${p}]$.`,` Les formules comprennent un abonnement fixe et un tarif particulier pour une séance. <br>
          Ainsi, le montant mensuel pour une formule est : Abonnement + Coût d'une séance $\\times$ Nombre de séances. <br>
          La fonction $f$ est définie par $f(x)=${t}+${m(r)}x$ et la fonction $g$ est définie par $g(x)=${s}+${m($)}x$.`,` On cherche le nombre de séances maximum que l'on peut faire avec $${d}$ € avec les formule A et B.<br>
          Pour la formule A, on cherche $x$ tel que $f(x)\\leqslant${d}$.<br>
          $\\begin{aligned}
${t}+${m(r)}x&\\leqslant${d}\\\\
${m(r)}x&\\leqslant ${d}-${t}${x(8)} \\text{(On retranche ${t} à chaque membre)} \\\\
${m(r)}x&\\leqslant ${d-t}\\\\
x&\\leqslant \\dfrac{${d-t}}{${m(r)}}${x(8)}\\text{(On divise par ${m(r)}  chaque membre)}
\\end{aligned}$
<br>
Le plus grand entier inférieur ou égal à $\\dfrac{${d-t}}{${m(r)}}$ est $${new i(d-t).div(r).floor()}$.<br>
Avec la formule A, ${u} pourra faire au maximum $${new i(d-t).div(r).floor()}$ séances.<br><br>
Pour la formule B, on cherche $x$ tel que $g(x)\\leqslant${d}$.<br>
$\\begin{aligned}
${s}+${m($)}x&\\leqslant${d}\\\\
${m($)}x&\\leqslant ${d}-${s}${x(8)} \\text{(On retranche ${s} à chaque membre)} \\\\
${m($)}x&\\leqslant ${d-s}\\\\
x&\\leqslant \\dfrac{${d-s}}{${m($)}}${x(8)} \\text{(On divise par ${m($)} chaque membre)}
\\end{aligned}$
<br>
Le plus grand entier inférieur ou égal à $\\dfrac{${d-s}}{${m($)}}$ est $${new i(d-s).div($).floor()}$.<br>
Avec la formule B, ${u} pourra faire au maximum $${new i(d-s).div($).floor()}$ séances.<br><br>
               ${T("Conclusion : ")}  ${new i(d-s).div($).floor().equals(new i(d-t).div(r).floor())?"Les formules A et B permettent de faire autant de séances. Il n'y a donc pas de formule avantageuse dans ce cas.":new i(d-s).div($).floor()<new i(d-t).div(r).floor()?`La formule A permet de faire plus de séances, elle est plus avanatgeuse pour ${u}.`:`La formule B permet de faire plus de séances, elle est plus avanatgeuse pour ${u}.`} 
          `,` La formule B est plus avantageuse que la formule A lorsque $g(x)$ est strictement inférieure à $f(x)$.<br>
            ${x(8)} $\\begin{aligned}
            ${s}+${m($)}x&<${t}+${m(r)}x\\\\
            ${m($)}x&< ${t}+${m(r)}x-${s}${x(8)}\\text{(On retranche ${s} à chaque membre)} \\\\
            ${m($)}x-${m(r)}x&< ${t-s}${x(8)}\\text{(On retranche ${m(r)}  }x\\text{ à chaque membre)} \\\\
            ${m($.sub(r))}x&<${t-s}\\\\
            x&> \\dfrac{${t-s}}{${m($.sub(r))}}${x(8)}\\text{(On divise par } ${e($.sub(r),2)}   < 0 \\text{  chaque membre)}\\\\
            x&> \\dfrac{${s-t}}{${m(r.sub($))}} \\end{aligned}$<br>
            Le plus grand entier supérieur  à $\\dfrac{${s-t}}{${m(r.sub($))}}$ est 
            $${new i(t-s).div($.sub(r)).floor().add(1)}$.<br>
            La formule B est plus intéressante que la formule A à partir de $${new i(t-s).div($.sub(r)).floor().add(1)}$  séances.`],style:"nombres"})}break;case 2:{const t=a(80,120),n=new i(a(41,65,[50,60])).div(100),r=a(7,10)*100,s=a(50,400),o=new i(n).mul(s).add(t);c=`  Une société de location de véhicules particuliers propose le tarif suivant pour un week-end de location :<br>
          ${T("TARIF WEEK-END :")}  forfait de $${t}$ € puis $${e(n,2)}$ € par $\\text{km}$ parcouru (dans la limite de $${e(r,0)}\\text{ km}$).<br>
          On note $x$ le nombre de $\\text{km}$ parcourus par un client au cours d'un week-end et on considère la fonction $T$ qui à chaque valeur de $x$ associe le prix payé par le client.<br>`,c+=b({items:["Donner l'ensemble de définition de la fonction $T$."," Exprimer $T(x)$ en fonction de $x$.",` Résoudre l'équation $T(x)=${e(o,2)}$.
          Interpréter ce résultat dans le contexte de l'exercice. `],style:"nombres"}),g=b({items:[`   On ne peut pas faire plus de $${e(r)}\\text{ km}$ durant le week-end, ainsi l'ensemble de 
                  définition de la fonction $T$ est $[0\\,;\\,${r}]$.`,` Le tarif  comprend un forfait fixe et un tarif par $\\text{km}$ parcouru. <br>
          Ainsi, le montant de la location est  : 
          Forfait + Coût d'un $\\text{km}$ $\\times$ Nombre de $\\text{km}$ parcourus, soit $T(x)=${t}+${e(n,2)}x$.`,` On résout l'équation  $T(x)=${e(o,2)}$.<br>
          $\\begin{aligned}
          ${t}+${e(n,2)}x&=${e(o,2)}\\\\
          ${e(n,2)}x&= ${e(o,2)}-${t}${x(8)} \\text{(On retranche ${t} à chaque membre)} \\\\
x&=\\dfrac{${e(new i(o).sub(t),2)}}{${e(n,2)}}${x(8)}\\text{(On divise par ${e(n,2)}  chaque membre)}\\\\
x&=${e(s,0)}
\\end{aligned}$<br>
L'équation a pour solution $${e(s,2)}$.<br>
On peut dire que lorsque le prix payé pour la location est $${e(o,2)}$ €, le client a parcouru $${e(s,0)}\\text{ km}$ durant le week-end.`],style:"nombres"})}break;case 3:{const t=new i(a(2011,2035)).div(10),n=a(30,80),r=new i(a(70,100));c=`  Sur toute sèche, la distance de freinage en mètres, d'une voiture est modélisée de la façon suivante : <br>
          En notant $v$ la vitesse du véhicule (en $\\text{km/h}$), sa distance de freinage $d(v)$  (en $\\text{m}) est donnée par le carré de sa vitesse divisée par $${e(t,1)}$.`,c+=b({items:[" Donner l'expression de $d(v)$ en fonction de $v$. ",` Calculer au mètre près, la distance de freinage de la voiture si elle roule à $${r}\\text{ km/h}$.`," La distance de freinage est-elle proportionnelle à la vitesse ?",`  La distance de freinage de cette voiture a été de $${n}\\text{ m}$. Quelle était sa vitesse en $\\text{km/h}$ arrondie à l'unité ? `],style:"nombres"}),g=b({items:[` Le carré de la vitesse est $v^2$, donc la fonction $d$ est définie par : $d(v)=\\dfrac{v^2}{${e(t,1)}}$. `,` $d(${r})=\\dfrac{${r}^2}{${e(t,1)}}\\simeq ${e(new i(r.pow(2).div(t)),0)}$. La distance de freinage est d'environ $${e(new i(r.pow(2).div(t)),0)}$.`," La distance de freinage n'est pas proportionnelle à la vitesse car la fonction $d$ n'est pas une fonction linéaire. Elle ne traduit pas une situation de proportionnalité.",`   On cherche $v$ tel que $d(v)=${n}$.<br>
                    $\\begin{aligned}
\\dfrac{v^2}{${e(t,1)}}&=${n}\\\\
v^2&=${n} \\times ${e(t,2)} ${x(8)} \\text{(On multiplie par ${e(t,1)} chaque membre)} \\\\
v^2&= ${e(new i(n).mul(t),2)}\\\\
v&= -\\sqrt{${e(new i(n).mul(t),2)}} ${x(8)} \\text{ou} ${x(8)} v= \\sqrt{${e(new i(n).mul(t),2)}}${x(8)}\\text{(deux nombres ont pour carré } ${e(new i(n).mul(t),2)} \\text{)}
\\end{aligned}$<br>
Puisque $v$ est un nombre positif, on en déduit $v= \\sqrt{${e(new i(n).mul(t),2)}}\\simeq ${new i(n).mul(t).sqrt().round()}$.<br>
Lorsque la distance de freinage de la voiture est $${n}\\text{ m}$, sa vitesse est alors d'environ $${new i(n).mul(t).sqrt().round()}\\text{ km/h}$.<br>
`],style:"nombres"})}break;case 4:{const t=q(O),n=a(6,10)*1e3,r=q([40,50,80,100]),s=a(31,49)*100,o=a(30,39)*10;c=` Le nombre d'abonnés à une revue dépend du prix de l'abonnement à cette revue, prix exprimé en euros.<br>
          On considère que l'on a la relation : <br>
          nombre d'abonnés $= ${e(n)} - ${r} \\times$ (prix de l'abonnement en euros).<br>
          Soit $${t}$ la fonction qui donne le nombre d'abonnés en fonction du prix de l'abonnement annuel à cette revue.`,c+=b({items:[`Déterminer l'expression algébrique de $${t}$. Préciser la variable.`," Que peut-on dire du nombre d'abonnés lorsque le prix de l'abonnement augmente ?",` Expliquer pourquoi le prix de l'abonnement ne doit pas être de $${o}$ €. Déterminer l'ensemble de définition de la fonction $${t}$.`,` La directrice des abonnements souhaite avoir $${e(s)}$ abonnés à la revue. Quel doit être le prix de l'abonnement ?`,` On obtient la recette de la vente de $x$ abonnements en multipliant le nombre d'abonnés par le prix d'un abonnement. <br>
               Exprimer la recette en fonction du prix de l'abonnement sous forme développée.`],style:"nombres"}),g=b({items:[` En notant $x$ la variable, l'expression algébrique de $${t}$ est : $${t}(x)=${e(n)}-${r}x$.`,` La relation $${t}(x)=${e(n)}-${r}x$ montre que lorsque le prix de l'abonnement $x$ augmente, le nombre d'abonnés $${t}(x)$ diminue. <br>
          Plus précisément, à chaque hausse de $1$ €, le nombre d'abonnés diminue de $${r}$ (coefficient devant $x$).`,` Pour un montant de $${o}$ € de l'abonnement, on obtient $${t}(${o})=${e(n,0)}-${r}\\times ${o}=${e(n-r*o,0)}$.<br>
          On obtiendrait alors un nombre d'abonnés négatif ce qui est impossible. On ne peut donc pas fixer le montant de l'abonnement à $${o}$ €.<br>
          On cherche la valeur de $x$ donnant un nombre d'abonnés nul en résolvant l'équation $${t}(x)=0$ :<br>
          $\\begin{aligned}
          ${e(n)}-${r}x&=0\\\\
         - ${r}x&= -${e(n)}${x(8)} \\text{(On retranche ${e(n)} à chaque membre)} \\\\
x&=\\dfrac{${e(-n)}}{${-r}}${x(8)}\\text{(On divise par } ${-r} \\text{ chaque membre)}\\\\
x&=\\dfrac{${e(n)}}{${r}}\\\\
x&=${e(n/r,2)}
\\end{aligned}$<br>
On en déduit que le montant de l'abonnement doit se situer entre $0$ € et $${e(n/r,2)}$ €. <br>
Par conséquent l'ensemble de définition de la fonction $${t}$ est : $[0\\,;\\,${e(n/r,2)}]$.`,` On cherche la valeur de $x$  afin que $${t}(x)=${e(s)}$.<br>
          $\\begin{aligned}
          ${e(n)}-${r}x&=${e(s)}\\\\
         - ${r}x&= ${e(s)}-${n}${x(8)} \\text{(On retranche ${e(n)} à chaque membre)} \\\\
x&=\\dfrac{${e(-n+s)}}{${-r}}${x(8)}\\text{(On divise par } ${-r} \\text{ chaque membre)}\\\\
x&=\\dfrac{${e(n-s)}}{${r}}\\\\
x&=${e((n-s)/r,2)}
\\end{aligned}$<br>
Pour avoir $${e(s)}$ abonnés, la directrice des abonnements doit fixer le prix de l'abonnement à $${m((n-s)/r)}$ €.`,` Comme $x$ désigne le montant de l'abonnement et $${t}(x)$ le nombre d'abonnés, le produit du nombre d'abonnés par le prix d'un abonnement est $${t}(x)\\times x$, soit $(${e(n)}-${r}x)\\times x$.<br>
          Son expression développée est :  $${e(n)}x-${r}x^2$.`],style:"nombres"})}break;case 5:{const t=new i(a(150,200)).div(100),n=a(3,6),r=q([40,45,50,55,60,65,70]),s=a(n,r),o=new i(t).mul(s),$=oe(),u=q(O);c=`  Dans une station service, le prix de l'essence sans plomb 95 est de $${e(t)}$ € le litre.<br>
Dans cette station, il n'est pas possible de prendre moins de $${n}$ litres d'essence.<br>
${$} fait le plein de sa voiture dans cette station service. Le réservoir de sa voiture est vide et peut contenir au maximum $${r}$ litres.<br>

On note $x$ le nombre de litres que met ${$} pour faire le plein du réservoir  de sa voiture. <br>
On considère la fonction $${u}$ qui associe à chaque valeur de $x$, le prix payé en euros par ${$}.`,c+=b({items:[`Donner l'ensemble de définition de la fonction $${u}$. `,` Déterminer l'expression algébrique de la fonction $${u}$ (c'est-à-dire l'expression de $${u}(x)$ en fonction de $x$).`," Le prix payé est-il proportionnel au nombre de litres mis dans le réservoir ? Justifier.",`  Résoudre l'équation $${u}(x)=${e(o,2)}$. Interpréter ce résultat dans le contexte de l'exercice. `],style:"nombres"}),g=b({items:[` Le minimum de litres que ${$} peut mettre est  $${n}$ et le maximum est $${r}$. <br>
            L'ensemble de définition de $${u}$ est donc $[${n}\\,;\\,${r}]$.`,` Pour obtenir le prix payé, on multiplie le nombre de litres par le prix d'un litre. <br>
            Ainsi, l'expression algébrique de $${u}$ est : $${u}(x)=${e(t,2)}\\times x$, soit $${u}(x)=${e(t,2)}x$.`,` Le prix payé est proportionnel au nombre de litres. La fonction $${u}$ est une fonction linéaire traduisant une situation de proportionnalité.`,`   On cherche $x$ tel que $${u}(x)=${e(o,2)}$.<br>
            $\\begin{aligned}
                      ${e(t,2)}x&=${e(o,2)}\\\\
  x&=\\dfrac{${e(o,2)}}{${e(t,2)}} ${x(8)} \\text{(On divise par ${e(t,2)} chaque membre)} \\\\
  x&= ${s}
    \\end{aligned}$<br>
  Pour $${s}$ litres mis dans le réservoir, le coût est de  $${e(o,2)}$ €.`],style:"nombres"})}break;case 6:{const t=new i(a(-5,-2)),n=new i(a(-15,-10)).div(10),r=new i(a(-39,-25)).div(10),s=_(),o=q(O),$=L("\\text{O}",-.3,-.3,{letterSize:"scriptsize"}),u=L("\\text{Temps (en s)}",9,-.7,{letterSize:"scriptsize"}),d=L("\\text{Hauteur (en m)}",1,7,{letterSize:"scriptsize"}),p=U({xMin:0,yMin:0,yMax:3,xMax:5,xUnite:2,yUnite:2,axeXStyle:"->",axeYStyle:"->",grilleX:!1,grilleY:!1,xThickMax:0,yThickMax:0}),l=E({xmin:-1,xmax:13,ymin:-1.2,ymax:7,pixelsParCm:20,scale:.7,style:"margin: auto"},F(h=>-.5*(h+1)*(h-4),{repere:p,xMin:0,xMax:4,color:"blue",epaisseur:2,step:.2}),u,d,p,$);c=`  Lors d'une course en moto-cross, après avoir franchi une rampe, ${s} a effectué un saut en moto.
          On note $t$ la durée (en secondes) de ce saut.<br>
          Le saut commence dès que ${s} quitte la rampe c'est-à-dire lorsque $t=0$.<br>
          La hauteur (en mètres) en fonction de la durée $t$ est donnée par la fonction $${o}$ défine par   :  $${o}(t)=(${e(t,3)}t${e(n,2)})(t${e(r,2)})$.<br>
          Voici la courbe représentative de cette fonction $${o}$ :<br><br>
          `,c+=`${l}`,c+=b({items:[` Calculer $${o}(4)$. Que peut-on en déduire ?`,`  À quelle hauteur ${s} se trouve-t-il lorsqu'il quitte la rampe ?`,`  Combien de temps dure le saut de ${s} ?`,`  Développer et réduire l'expression de $${o}$.`],style:"nombres"}),g=b({items:[` $${o}(4)=(${e(t,3)}\\times 4${e(n,2)})(4 ${e(r,2)})=
                  ${e(t.mul(4).plus(n),2)}\\times ${e(r.plus(4),2)}
                  =${e(new i(t).mul(4).plus(n).mul(r.plus(4)),2)}$<br>
                  
                  Comme le résultat est négatif, on en déduit que le saut dure moins de $4$ secondes.`,` La hauteur du début du saut est donnée par : $${o}(0)=(${e(t,3)}\\times 0${e(n,2)})(0 ${e(r,2)})
                    =${e(n.mul(r),2)}$.<br>
                     ${s} se trouve à $${e(n.mul(r),2)}$ mètres au début du saut.`,` Le saut commence à $t=0$ et se termine lorsque ${s} se retrouve au sol, c'est-à-dire lorsque la hauteur est nulle. <br>
                    Ainsi, le temps du saut est donnée par la solution positive de l'équation $(${e(t,3)}t${e(n,2)})(t${e(r,2)})=0$<br>
                    Il s'agit d'une équation produit nul qui a deux solutions : $t_1= -\\dfrac{${e(-n,2)}}{${e(-t,2)}}$ (valeur négative)  et   $t_2= ${e(-r,2)}$.  <br>
                    Le saut dure  $${e(-r,2)}$ secondes.`,`On développe en utilisant la double distributivité :<br>
                    $\\begin{aligned}
                    ${o}(t)&=(${e(t,3)}t${e(n,2)})(t${e(r,2)})\\\\
                    &=${e(t,3)}t^2+${e(t.mul(r),3)}t${e(n,2)}t+${e(n.mul(r),2)}\\\\
                    &=${e(t,3)}t^2+${e(t.mul(r).plus(n),2)}t+${e(n.mul(r),2)}     
                  \\end{aligned}$`],style:"nombres"})}break;case 7:{const t=a(17,21)/10,n=a(-10,-5)/10,r=q([11,12,13,17,18]),s=q(O),o=H("O",-.3,-.3),$=D=>t*D*Math.exp(n*D),u=D=>(t+t*n*D)*Math.exp(n*D),d=ne(y(0,5),0,"","red");d.epaisseur=2;const p=z(0,7,u,0,.01);if(p===!1){window.notify("antecedentParDichotomie n'a pas trouvé d'antécédent",{s0:p});continue}const f=z(0,p*1.5,$,.5,.01);if(f===!1){window.notify("antecedentParDichotomie n'a pas trouvé d'antécédent",{s0:p,s1:f});continue}const l=z(p*1.5,6*1.5,$,.5,.01);if(l===!1){window.notify("antecedentParDichotomie n'a pas trouvé d'antécédent",{s0:p,s1:f,s2:l});continue}const h=U({xMin:0,yMin:0,yMax:$(-1/n)+.2,xMax:10,xUnite:1,yUnite:10,axeXStyle:"->",axeYStyle:"->",xThickDistance:1,yThickDistance:.1,xLabelMin:0,yLabelMin:0,yLabelEcart:1,xLabelEcart:.6,grilleXDistance:1,grilleYDistance:1,grilleXMin:0,grilleYMin:0,grilleXMax:10,grilleYMax:$(p)+.2}),v=y(p,$(p)*10),S=y(v.x,0),k=A(v,S);k.epaisseur=2,k.pointilles=5;const Q=y(0,v.y),M=A(v,Q);M.epaisseur=2,M.pointilles=5;const C=y(f,$(f)*10),P=y(C.x,0),V=A(C,P);V.epaisseur=2,V.pointilles=5;const B=y(l,$(l)*10),I=y(B.x,0),j=A(B,I);j.epaisseur=2,j.pointilles=5;const X=A(P,I,"red");X.epaisseur=5;const R=L(`Max = ${Math.round($(p)*100)/100}`,-3,v.y,{letterSize:"scriptsize"}),G=L(`${Math.round(p*10)/10}`,v.x,-1,{letterSize:"scriptsize"}),K=L(`${Math.round(f*10)/10}`,C.x,-1,{letterSize:"scriptsize"}),W=L(`${Math.round(l*10)/10}`,B.x,-1,{letterSize:"scriptsize"}),Z=E({xmin:-2,xmax:16,ymin:-1,ymax:($(p)+.2)*10,pixelsParCm:30,scale:.7,style:"margin: auto"},[F($,{repere:h,xMin:0,xMax:10,color:"blue",epaisseur:2,step:.15}),h,o]),ee=E({xmin:-5,xmax:16,ymin:-2.5,ymax:($(p)+.2)*10,pixelsParCm:30,scale:.7,style:"margin: auto"},[F($,{repere:h,xMin:0,xMax:9,color:"blue",epaisseur:2,step:.2}),h,o,k,M,j,V,X,R,G,K,W,d,h,o]);c=`Le Code de la route interdit toute conduite d'un véhicule lorsque le taux d'alcoolémie est supérieur ou égal à $0,5$ g/L.<br>
            Le taux d'alcoolémie d'une personne pendant les $10$ heures suivant la consommation d'une certaine quantité d'alcool est modélisé par la fonction $${s}$.<br>
          $\\bullet$  $t$ représente le temps (exprimé en heure) écoulé depuis la consommation d'alcool ;<br>
          $\\bullet$  $${s} (t)$ représente le taux d'alcoolémie (exprimé en g/L) de cette personne.<br>
          On donne la représentation graphique de la fonction $${s}$ dans un repère. <br>`,c+=`${Z}`,c+=b({items:[`
                  À quel instant le taux d'alcoolémie de cette personne est-il maximal ? <br>Quelle est alors sa valeur ? Arrondir
                au centième.`,`Résoudre graphiquement l'inéquation $${s}(t)>0,5$.`,` À l'instant $t=0$, il était $${r}$ h. <br>À quelle heure, à la minute près, l'automobiliste peut-il reprendre le volant sans être en infraction ?`],style:"nombres"}),g=b({items:[`     Le taux d'alcoolémie maximal est atteint lorsque $t=${e(Math.round(p*10)/10,1)}$. Sa valeur
            est environ  $${e(Math.round($(p)*100)/100,2)}$.`,` Les solutions de l'inéquation $${s}(t)>0,5$ sont les abscisses des points de la courbe qui se situent strictement en dessous de la droite d'équation $y=0,5$. <br>
            Cette inéquation a pour ensemble de solution $]${e(Math.round(f*10)/10,1)}\\,;\\,${e(Math.round(l*10)/10,1)}[$. <br>
              `,`${Math.round(l*10)/10===2||Math.round(l*10)/10===3||Math.round(l*10)/10===4||Math.round(l*10)/10===5||Math.round(l*10)/10===6?` L'automobiliste peut reprendre la route (sans être en infraction)  $${Math.round(l*10)/10} \\text{ h }$ après la consommation de l'alcool,
              soit à $${Math.round(l*10)/10+r} \\text{ h}$.<br><br>`:`  $${e(Math.round(l*10)/10,1)}\\text{ h } =${Math.floor(l)} \\text{ h } +${e(Math.round(l*10)/10-Math.floor(l))}\\text{ h }$.<br>
              Or, $${e(Math.round(l*10)/10-Math.floor(l))}\\text{ h }=${e(Math.round(l*10)/10-Math.floor(l))}\\times 60 \\text{ min }=${e((Math.round(l*10)/10-Math.floor(l))*60)} \\text{ min }$.<br>
               L'automobiliste peut reprendre la route (sans être en infraction)  $${Math.floor(l)} \\text{ h }$ et $${e((Math.round(l*10)/10-Math.floor(l))*60)} \\text{ min }$ après la consommation de l'alcool,
              soit à $${Math.floor(l+r)} \\text{ h }$ et $${e((Math.round(l*10)/10-Math.floor(l))*60)} \\text{ min}$.`}<br>
              ${ee}`],style:"nombres"})}break;case 8:{const t=a(100,120),n=a(90,98),r=a(10,14)*10,s=a(60,75)*2,o=a(25,27)*10,$=a(48,53)*2,u=a(38,42)*10,d=a(55,60)*2,p=a(50,52)*10,f=a(43,47)*2,l=a(56,65)*10,h=f+5,v=q(O),S=H("O",0,15.5),k=H("Pression artérielle en mmHg",-2.4,24,-90,"black",1,"milieu",!1,1),Q=L("\\text{Temps (en ms)}",670*.03,72*.2,{orientation:0}),M=U({xMin:0,xMax:800,yMin:80,yMax:150,xUnite:.03,yUnite:.2,xThickDistance:50,yThickDistance:10,xLabelMin:0,yLabelMin:80,yLabelEcart:1,grilleXDistance:50*.03,grilleYDistance:10*.2}),C=te([[0,n],[r,s],[o,$],[u,d],[p,f],[l,h]],{color:"blue",epaisseur:2,repere:M,xMin:0,xMax:650,step:2}),P=E({xmin:-3,xmax:24,ymin:15,ymax:31,pixelsParCm:20,scale:.5,style:"margin: auto"},k,Q,M,S,C);c=`La tonométrie artérielle permet d'obtenir une mesure continue de la pression artérielle. L'examen renseigne sur
          l'état des artères du patient dans le cadre du développement de l'hypertension artérielle. <br>
          Un enregistrement des mesures permet d'apprécier la courbe de pression artérielle.<br>
          On note $${v}$ la fonction qui au temps $t$ en millisecondes (ms) associe la pression artérielle radiale $${v}(t)$ en millimètres
          de mercure (mmHg), mesurée au repos chez un patient suspecté d'insuffisance cardiaque. On donne la courbe représentative de $${v}$ ci-dessous.<br>`,c+=`${P}`,c+=b({items:[`Quel est l'ensemble de définition de $${v}$.`,` Quelle inéquation a pour ensemble de solution l'imtervalle de temps pendant lequel la pression artérielle est supérieure ou égale à $${t}$ mmHg ?`," Déterminer la valeur systolique mesurée, c'est-à-dire la valeur maximale de la pression artérielle.","  Déterminer la valeur diastolique mesurée, c'est-à-dire la valeur minimale de la pression artérielle.",`  Un patient est en hypertension artérielle lorsque la pression systolique est supérieure ou égale à $140$ mmHg
                        ou que la pression diastolique est supérieure ou égale à $90$ mmHg.<br>
                        Ce patient est-il en hypertension ? Justifier.`,` La fonction $${v}$ a été représentée sur un intervalle de temps  correspondant à celui
                        d'un battement de cœur du patient.<br>On parle de tachycardie lorsque, au repos, le nombre de battements du cœur est supérieur à $100$ par minute. <br>
                        D'après cet examen, peut-on estimer que le patient souffre de tachycardie ?`],style:"nombres"}),g=b({items:[`L'ensemble de définition de $${v}$ est $[0\\,;\\, ${l}]$. `,` L'inéquation ayant pour ensemble de solution l'imtervalle de temps pendant lequel la pression artérielle est supérieure ou égale à $${t}$ mmHg est $${v}(t)\\geqslant ${t}$.`,` La valeur systolique mesurée est est donnée par l'ordonnée du point le plus haut de la courbe : $${s}$ mmHg.`,`  La valeur diastolique mesurée est est donnée par l'ordonnée du point le plus bas de la courbe : $${f}$ mmHg.`,`   La valeur systolique est $${s}$ mmHg, la valeur diastolique est $${f}$ mmHg. <br>
              ${s>=140||f>=90?f>=90?`Comme $${f} \\geqslant 90$, le patient est en hypertension artérielle.<br>`:`Comme $${s} \\geqslant 140$, le patient est en hypertension artérielle.<br>`:`Comme $${f} < 90$ et $${s} < 140$, le patient n'est pas en hypertension artérielle.<br>`}`,`L'intervalle de temps est $[0\\,;\\, ${l}]$, le temps d'un battement de cœur est donc $${l}$ ms.<br>
                              Comme $${l}$ ms $=${e(l/1e3,3)}$ s, en notant $n$ le nombre de battements en $1$ minute, on obtient le tableau de proportionnalité suivant :<br>
                               $\\begin{array}{|c|c|c|}
 \\hline

            
\\text{Nombre de battements} &1 &n   \\\\
 \\hline

            
 \\text{Temps (en s)}&${e(l/1e3,3)}&60  \\\\
 \\hline

            \\end{array}
$
            <br>
             $n=\\dfrac{60\\times 1}{${e(l/1e3,3)}}\\simeq ${e(60*1e3/l,0)}$.<br>
             ${60*1e3/l>100?`Comme $${e(60*1e3/l,0)}>100$, ce patient souffre de tachycardie.`:`Comme $${e(60*1e3/l,0)}\\leqslant 100$, ce patient ne souffre pas de tachycardie.`}`],style:"nombres"})}break;case 9:{const t=new i(a(27,38,30)).add(q([.2,.4,.6,.8])),n=new i(t).mul(5).mul(a(6,11)),r=a(15,25,20),s=t.mul(-1).mul(a(12,17)).add(n),o=a(251,299);c=`  Un éleveur de poulets décide de remplir son silo à grains.<br>
             En notant $t$ le nombre de jours écoulés après avoir rempli son silo à grains et $f(t)$ la masse (en $\\text{kg}$) restante 
            au bout de $t$ jours, on a : $f(t)=${e(n,0)}-${e(t,1)}t$<br>`,c+=b({items:[`Calculer l'image de $${r}$ par $f$. Interpréter le résultat dans le contexte de l'exercice.`,`Calculer l'antécédent de $${e(s,1)}$ par $f$.<br>`,"Sachant que l'éleveur avait rempli son silo au maximum de sa capacité, quelle est la contenance (en $\\text{kg}$) du silo ?<br> ","  Au bout de combien de jours, l'éleveur sera-t-il à court de grains ? Justifier.<br> "," Quelle quantité de grains en kg consomment les poulets en une journée ?<br> ",` Un jour, des renards ont tué la moitié des poulets, divisant par deux la quantité de grains consommée par jour.<br>
                  Il  reste à l'éleveur $${o}$ kg de grains. <br>
                  Donner la fonction qui modélise la quantité de grains restante en fonction du nombre de jours écoulés. <br>
                  On notera $g$ cette fonction. `],style:"nombres"}),g=b({items:[` $f(${r})=${e(n,0)}-${e(t,1)}\\times ${r}=${e(new i(n).sub(t.mul(r)),2)}$.<br>
            Au bout de $${r}$ jours, il reste $${e(new i(n).sub(t.mul(r)),2)}$ kg de grains dans le silo.`,` L'antécédent de $${e(s,1)}$ est la solution de l'équation $f(x)=${e(s,1)}$. <br>
          $\\begin{aligned}
          ${e(n,0)}-${e(t,1)}t&=${e(s,1)}\\\\
          -${e(t,1)}t&=${e(s,1)}-${e(n,0)}\\\\
         t&=\\dfrac{${e(new i(s).sub(n),1)}}{-${e(t,1)}}\\\\
         t&=${e(new i(n.sub(s)).div(t),1)}
          \\end{aligned}$<br>
          L'antécédent de $${e(s,1)}$ est $${e(new i(n.sub(s)).div(t),1)}$.
`,` La contenance du silo est donnée par $f(0)$. <br>
          Comme $f(0)=${e(n,0)}-${e(t,1)}\\times 0=${e(n,0)}$, la contenance du silo est $${e(n,0)}$ kg.
          `,` On cherche $t$ tel que $f(t)=0$.<br>
$\\begin{aligned}
${e(n,0)}-${e(t,1)}t&=0\\\\
-${e(t,1)}x&=-${e(n,0)}\\\\
t&=\\dfrac{${e(-n,0)}}{-${e(t,1)}}\\\\
t&=${e(-n/-t,0)}
\\end{aligned}$<br>

Au bout de $${e(new i(n).div(t),0)}$ jours, l'éleveur sera à court de grains.`,` Chaque jour les poulets consomment $${e(t,1)}$ kg de grains. <br>
Par exemple,  la masse de grains mangés le premier jour est donnée par $f(0)-f(1)$.<br>
$\\begin{aligned}
f(0)-f(1)&=(${e(n,0)}-${e(t,1)}\\times 0)-(${e(n,0)}-${e(t,1)}\\times 1)\\\\
&=${e(n,0)}-${e(new i(n).sub(t),1)}\\\\
&=${e(t,1)}
\\end{aligned}$
`,` La fonction $g$ est donnée par : <br>
$g(t)=(\\text{masse dans le silo})-(\\text{masse  consommée par les poulets en un jour})\\times t$.<br>
Ainsi, $g(t)=${o}-${e(new i(t).div(2),1)}t$.
`],style:"nombres"})}break;case 10:{const t=a(20,27),n=new i(a(-300,-200)).div(1e3);c=`  Le hand-spinner est une sorte de toupie plate qui tourne sur elle-même.<br>
On donne au  hand-spinner  une vitesse de rotation initiale au temps $t = 0$, puis, au cours du temps, sa vitesse de rotation diminue jusqu'à l'arrêt complet du hand-spinner.<br>
Sa vitesse de rotation est alors égale à $0$.<br>
Pour calculer la vitesse de rotation du  hand-spinner (en nombre de tours par seconde) en fonction du temps $t$ (en secondes), notée $V(t)$, on utilise la fonction suivante :
$V(t) = ${e(n,3)} \\times t + V_{\\text{initiale}}.$<br>
$\\bullet$ $t$ est le temps (en s) qui s'est écoulé depuis le début de rotation du hand-spinner  ;<br>
$\\bullet$ $V_{\\text{initiale}}$ est la vitesse de rotation (en nombre de tours par seconde) à laquelle on a lancé le  hand-spinner  au départ.<br><br>
On lance le  hand-spinner  à une vitesse initiale de $${t}$ tours par seconde.`,c+=b({items:[`
Calculer sa vitesse de rotation au bout de $1$ minute.`,"Le temps et la vitesse de rotation du  hand-spinner sont-ils proportionnels ? Justifier.","Au bout de combien de temps le hand-spinner va-t-il s'arrêter ? Arrondir le résultat à la seconde.","Est-il vrai que, d'une manière générale, si l'on fait tourner le hand-spinner deux fois plus vite au départ, il tournera deux fois plus longtemps ? Justifier. "],style:"nombres"}),g=b({items:[` Comme la vitesse initiale est $${t}$ tours par seconde, $V(t)$ est donné par : $V(t) = ${e(n,3)} \\times t + ${t}$.<br>
                  $1$ minute $=60$ secondes,<br>
                  $\\begin{aligned}
                  V(60)&=${e(n,3)} \\times 60 + ${t}\\\\
                  &=${e(new i(n.mul(60)),3)}+ ${t}\\\\
                  &=${e(new i(n.mul(60).add(t)),3)}
                  \\end{aligned}$
            <br>
            Au bout d'une minute, le hand-spinner a une vitesse de  $${e(new i(n.mul(60).add(t)),3)}$ tours par seconde.`,"Le temps et la vitesse de rotation du  hand-spinner ne sont pas proportionnels car la fonction $V$ n'est pas une fonction linéaire (elle n'est pas de la forme $V(t)=a\\times t$).",`Le hand-spinner s'arrête lorsque la vitesse de rotation est nulle. <br>
            On cherche donc la valeur de $t$ telle que : <br>
            $\\begin{aligned}
            V(t)&=0\\\\
            ${e(n,3)} \\times t + ${t}&= 0\\\\
           ${e(n,3)} \\times t&=-${t}\\\\
           t&=\\dfrac{${t}}{${e(-n,3)}}
           \\end{aligned}$<br>
           Comme  $\\dfrac{${t}}{${e(-n,3)}}\\simeq ${e(new i(-t).div(n),0)}$, le hand-spinner s'arrte au bout de $${e(new i(-t).div(n),0)}$ secondes (valeur arrondie à la seconde).`,` D'une manière générale, on a  : <br>
           $\\begin{aligned}
            V(t)&=0\\\\
            ${e(n,3)} \\times t + V_{\\text{initiale}}&= 0\\\\
           ${e(n,3)} \\times t&=- V_{\\text{initiale}}\\\\
           t&=\\dfrac{ V_{\\text{initiale}}}{${e(-n,3)}}
           \\end{aligned}$<br>
          Le hand-spinner s'arrête au bout de $\\dfrac{ V_{\\text{initiale}}}{${e(-n,3)}}$ secondes.<br>
           Si on fait tourner le hand-spinner deux fois plus vite au départ, il s'arrête au bout de $2\\times \\dfrac{  V_{\\text{initiale}}}{${e(-n,3)}}$ secondes.<br>
          On en déduit  si l'on fait tourner le hand-spinner deux fois plus vite au départ, il tournera bien deux fois plus longtemps.
           `],style:"nombres"})}break;default:{const t=new i(a(451,691)).div(10),n=new i(a(301,399)).div(100),r=a(70,99),s=new i(n).mul(r).add(t),o=a(90,110),$=a(60,80),u=new i(n).mul($).add(t);c=` Dans une région de France, le tarif de l'eau est le suivant : <br>
            un abonnement annuel et $${e(n,2,!0)}$ € par mètre cube consommé. 
            `,c+=b({items:[`Une famille a payé une facture de $${e(s,2,!0)}$ € pour une consommation de $${r}\\text{ m}^3$.<br>
                  Calculer le prix de l'abonnement.`,"Soit $f$ la fonction qui, à tout réel $x$ de $[0\\,;\\,+\\infty[$ associe le prix payé annuellement pour une consommation d'eau de $x\\text{ m}^3$."+b({items:["Exprimer $f(x)$ en fonction de $x$.",`Déterminer le prix payé par un ménage consommant $${o}\\text{ m}^3$ d'eau par an.`,`À partir de quelle quantité d'eau consommée, la facture s'élève à plus de $${e(u,2,!0)}$ € ? `],style:"alpha"})],style:"nombres"}),g=b({items:[`La facture s'élève à $${e(s,3)}$ € pour une consommation de $${r}\\text{ m}^3$.<br>
                 En notant $a$ le montant de l'abonnement, on obtient : <br>
                 $\\begin{aligned}
                 a+${e(n,2,!0)}\\times ${r} &=${e(s,3)}\\\\
                 a+${e(new i(n).mul(r),3)}&=${e(s,3)}\\\\
                 a&=${e(s,3)}-${e(new i(n).mul(r),3)}\\\\
                 a&=${e(t,2)}
                 \\end{aligned}$<br>
                 Le montant de l'abonnement est donc $${e(t,2,!0)}$ €.
                 `,b({items:[`Le tarif est composé du montant de l'abonnement et $${e(n,2,!0)}$ € par mètre cube consommé, on en déduit que : <br>
                      $f(x)=${e(t,2,!0)}+${e(n,2,!0)}x$.`,`Le prix payé par un ménage consommant $${o}\\text{ m}^3$ d'eau par an est donné par $f(${o})$.<br>
                     $f(${o})=${e(t,2,!0)}+${e(n,2,!0)}\\times ${o}=${e(new i(n).mul(o).add(t),2)}$.<br>
                     Le ménage devra payer  $${e(new i(n).mul(o).add(t),2,!0)}$ €.`,`On cherche $x$ tel que : <br>
                      $\\begin{aligned}
                      f(x)&\\geqslant ${e(u,2,!0)}\\\\
                       ${e(t,2,!0)}+${e(n,2,!0)}x&\\geqslant ${e(u,2,!0)}\\\\
                       ${e(n,2,!0)}x&\\geqslant ${e(u,2,!0)}-${e(t,2,!0)}\\\\
                       x&\\geqslant \\dfrac{${e(new i(u).sub(t),3)}}{${e(n,2,!0)}}
                       \\end{aligned}$
                       <br>
                       Comme $\\dfrac{${e(new i(u).sub(t),3)}}{${e(n,2,!0)}}= ${e(new i(u.sub(t)).div(n),3)}$, c'est à partir d'une consommation de $${e(new i(u.sub(t)).div(n),3)}\\text{ m}^3$ d'eau que la facture sera supérieure ou égale à  $${e(u,2,!0)}$ €.

                       
                       `],style:"alpha"})],style:"nombres"})}break}this.questionJamaisPosee(w,c)&&(this.listeQuestions[w]=c,this.listeCorrections[w]=g,w++),Y++}ae(this)}}export{Vt as dateDeModifImportante,Qt as dateDePublication,zt as default,jt as refs,St as titre,Bt as uuid};
//# sourceMappingURL=2F21-1-B6Ugyg-c.js.map
