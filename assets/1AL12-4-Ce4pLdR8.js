import{D as r}from"./vendors/decimal.js-BceHFVC1.js";import{f as ie}from"./fixeBordures-BSnKuTIe.js";import{p as T}from"./PointAbstrait-Cz1GEocE.js";import{R as ae}from"./RepereBuilder-DjjgfjyW.js";import{t as se}from"./TracePoint-BcXcNg6T.js";import{c as p}from"./lists-EM0cVZMP.js";import{E as le,Y as oe,$ as ue,p as P,r as l,R as Y,P as de,B as e,s,m as O,o as me}from"./index-BvuGzI-o.js";import{b as pe}from"./Personne-Bu5fydY4.js";import{m as ce}from"./mathalea2d-c0OJ3JST.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./reperes-CBdQD6Mm.js";import"./Plot-DUXk7rxj.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./segmentsVecteurs-BYbXXoZp.js";import"./vendors/roughjs-CycZv-lV.js";import"./textes-Dv2jXPNF.js";import"./cercle-CW-NIzC1.js";import"./pattern-CVTyZw4v.js";import"./polygonesParticuliers-BQc_Ltiy.js";import"./CodageAngleDroit-Dx3x7Z88.js";import"./polygones-89tGuAkc.js";import"./vendors/earcut-jJVragJp.js";import"./Polyline-C6hvR_V-.js";import"./transformations-XOBa9Ou2.js";import"./droites-Bwfi-_hx.js";import"./Vide2d-lYMmc9eB.js";import"./CodageSegment-BatDEUEF.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-K3nUGUh4.js";import"./json/refToUuidCH-DBCD2E_6.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-OtHQ7xZ3.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Vn="Résoudre plusieurs questions sur une même suite (bilan type E3C)",Gn="05/01/2025",Kn="33e54",Wn={"fr-fr":["1AL12-4"],"fr-ch":["NR"]};class Zn extends le{constructor(){super(),this.nbQuestions=1,this.sup="11",this.spacing=1.5,this.spacingCorr=1.5,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Création d'entreprises","2 : Prix d'un téléphone","3 : Population d'une commune","4 : Nombre d'abonnés à un réseau social","5 : Nombre de visionnage d'une série","6 : Prolifération des chardons","7 : Course cycliste","8 : Hauteur d'une balle","9 : Comparaison de salaires","10 : Population d'abeilles","11 : Mélange"].join(`
`)]}nouvelleVersion(){const ee=oe({saisie:this.sup,min:1,max:10,melange:11,defaut:11,nbQuestions:this.nbQuestions}),ne=ue(ee,this.nbQuestions);for(let B=0,z=0;B<this.nbQuestions&&z<50;){let b="",v="";const te=["u","w","v"],$e=["v","t"],$=P(te),re=P($e);let X,F,H,I,V,G,N,w,D,k,u,a,t,Q,j,i,x,C,q,U,E,o,L,A,c,n,d,S,g,M,K,R,y,m,h,f,J;switch(ne[B]){case 1:n=l(10,70),u=new r(l(6,19)).div(10),t=new r(u).div(100).add(1),Q=new r(t).pow(12).mul(-1).add(1),j=new r(1).sub(t),a=new r(n).mul(Q).div(j).round(),b=`Dans un pays, le nombre de créations d'entreprise augmente $${e(u,1)}\\,\\%$ par mois.<br>
En janvier $2024$ on compte $${e(n*1e3,0)}$ créations d'entreprise.<br>
On modélise le nombre de créations d'entreprise au $n$-ième mois par une suite $(${$}_n)$ telle que : 
$${$}_0 = ${n}$ et $${$}_{n+1} = ${$}_n \\times ${e(t,3)}$<br>
où $${$}_n$ est exprimé en milliers d'euros. `,b+=p({items:[`Calculer $${$}_1$ puis interpréter ce résultat dans le contexte de l'exercice.`,p({items:["Quelle est la nature de la suite $(u_n)$ ? Justifier.",`Exprimer $${re}_n$ en fonction de $n$.`,`Un journaliste annonce qu'au total dans l'année $2024$, environ $${e(new r(a).mul(1e3),0)}$ entreprises se sont
créées.<br>
Donner un calcul permettant de justifier les propos du journaliste.`],style:"alpha"})],style:"nombres"}),v=p({items:[`On calcule $${$}_1$ en utilisant la formule de récurrence : <br>
                      $\\begin{aligned}
                       ${$}_1&=${$}_0 \\times ${e(t,3)}\\\\
&=${n}\\times ${e(t,3)}\\\\
&=${e(new r(n).mul(t),3)}                                    
                       \\end{aligned}$ 
                       <br>
                       En février $2024$, on compte donc $${e(new r(n).mul(t).mul(1e3),0)}$ créations d'entreprise.`,p({items:[`Pour tout entier naturel $n$, on a $ ${$}_{n+1} = ${$}_n \\times ${e(t,3)}$.<br>
                            On reconnaît la définition par récurrence d'une suite géométrique de raison $q=${e(t,3)}$.<br>
La suite $(${$}_{n})$ est donc une suite géométrique de raison $q=${e(t,3)}$ et de premier terme $${$}_0 = ${n}$.`,`Pour tout entier naturel $n$, on a $${$}_n=${$}_0 \\times q^n$, soit $${$}_n=${n} \\times ${e(t,3)}^n$.`,`Le nombre d'entreprises crées en $2024$ est donné par la somme :  $S = ${$}_0 + ${$}_1 + \\dots + ${$}_{11}$.<br>
$\\begin{aligned}
S &= ${$}_0 + ${$}_1 + \\dots + ${$}_{11} \\\\
&= ${n} \\times \\dfrac{1 - ${e(t,3)}^{12}}{1 - ${e(t,3)}} \\\\
&\\approx ${e(a,3)}
\\end{aligned}$<br>

Il y a donc bien eu environ $${e(new r(a).mul(1e3),0)}$ créations d'entreprise en $2024$.`],style:"alpha"})],style:"nombres"});break;case 2:n=l(5,9)*100,u=l(4,9),i=new r(n),t=new r(u).div(100).add(1),Q=new r(t).pow(12).mul(-1).add(1),j=new r(1).sub(t),x=0,a=l(100,110)*10;for(let _=0;i.lessThan(a);_++)i=new r(t).mul(i),x=_+1;b=`Un téléphone coûte $${n}$ euros lors de son lancement. Tous les ans, le fabricant sort une nouvelle version de ce téléphone.<br>
         Le prix de ce téléphone augmente de $${u}\\,\\%$ chaque année.<br>
On note $${$}_n$ le prix du téléphone en euros $n$ années après son lancement. <br>
On a donc $${$}_0 = ${n}$. `,b+=p({items:[`Calculer $${$}_1$ et $${$}_2$. Interpréter les résultats.`,`Exprimer $${$}_{n+1}$ en fonction de $${$}_n$, pour tout entier naturel $n$ et en déduire la nature de
la suite $(${$}_n)$. <br>
Préciser sa raison et son premier terme.`,`Exprimer, pour tout entier $n$, $${$}_n$ en fonction de $n$.`,`Compléter la fonction Python ci-dessous pour qu'elle détermine le nombre minimum d'années nécessaires afin que le prix du téléphone dépasse $${e(a,0)}$
euros.<br>
  $\\begin{array}{|l|}

        \\hline

        \\
 \\texttt{def nombreAnnees():}  \\
 
         \\\\
 ${s(6)} \\texttt{n = 0}\\
 
       \\\\
 ${s(6)} \\texttt{u = ${n}}\\
 
        \\\\
 ${s(6)} \\texttt{while ${s(3)}\\ldots${s(3)} :}\\
 
       \\\\
 ${s(12)} \\texttt{n = \\ldots}\\
 
       \\\\
 ${s(12)} \\texttt{u = \\ldots}\\
 
        \\\\
 ${s(6)} \\texttt{return n}\\\\
 
        \\hline

        \\end{array}
$`,"Quelle est la valeur de $n$ renvoyée par cette fonction Python ?"],style:"nombres"}),v=p({items:[`Augmenter de $${u}\\,\\%$ revient à multiplier par $${e(t,2)}$.<br>
                    Ainsi, $${$}_{1}=${e(t,2)}\\times ${n}=${e(new r(t).mul(n),2)}$ et $${$}_{2}=${e(t,2)}\\times ${e(new r(t).mul(n),2)}=${e(new r(t).mul(n).mul(t),2)}$.<br>
                    Un an après son lancement, le téléphone coûte $${e(new r(t).mul(n),2)}$ € et deux ans après, il coûte $${e(new r(t).mul(n).mul(t),2)}$ €.`,`Pour tout entier naturel $n$,  $${$}_{n+1}=${e(t,2)}\\times ${$}_n$.<br>
                On reconnaît la définition par récurrence d'une suite géométrique de raison $${e(t,2)}$.<br>
                Son premier terme est $${$}_{0}=${n}$.`,`Pour tout entier naturel $n$, $${$}_n=${n}\\times ${e(t,2)}^n$.`,`On complète la fonction Python ci-dessous pour qu'elle détermine le nombre minimum d'années nécessaires afin que le prix du téléphone dépasse $${e(a,0)}$
euros.<br><br>
$\\begin{array}{|l|}

    \\hline

    \\
 \\texttt{def nombreAnnees():}  \\
 
     \\\\
 ${s(6)} \\texttt{n = 0}\\
 
   \\\\
 ${s(6)} \\texttt{${$} = ${n}}\\
 
    \\\\
 ${s(6)} \\texttt{while ${s(3)}${$} < ${a} :}\\
 
   \\\\
 ${s(12)} \\texttt{n = n+1}\\
 
   \\\\
 ${s(12)} \\texttt{${$} = ${e(t,2)} * ${$}}\\
 
    \\\\
 ${s(6)} \\texttt{return n}\\\\
 
    \\hline

    \\end{array}
$<br>
     `,` On obtient à l'aide de la calcultarice le tableau suivant : <br>
   $\\begin{array}{|c|c|c|}
 \\hline

            
 n&${$}_n   \\\\
 \\hline

            
 ${x-1}&${e(new r(i).div(t),2)} < ${a} \\\\
 \\hline

            
 ${x}&${e(i,2)} > ${a} \\\\
 \\hline

            \\end{array}
$
            <br>On en déduit que l'algorithme retourne la valeur $${x}$.<br>
            C'est donc $${x}$ ans après le lancement que le prix du téléphone dépassera $${a}$  €.`],style:"nombres"});break;case 3:n=l(8,18)*100,u=new r(l(2,8)),i=new r(n),C=l(5,10),t=new r(1).sub(u.div(100)),x=0,a=l(100,110)*10,b=`Une commune compte $${e(n,0)}$ habitants au début de l'année $2024$. <br>
          Le maire prévoit une baisse de $${u}\\,\\%$ par an du nombre d'habitants à partir de $2024$.<br>
Pour tout entier naturel $n$, on note $${$}_n$ le nombre d'habitants $n$ années après $2024$. <br>
Ainsi, $${$}_0 = ${e(n,0)}$.`,b+=p({items:[`Calculer $${$}_1$ et préciser ce que cette valeur représente dans le contexte de l'exercice.`,`Exprimer $${$}_{n+1}$ en fonction de $${$}_n$, pour tout entier naturel $n$ et en déduire la nature de
la suite $(${$}_n)$. <br>
Préciser sa raison et son premier terme.`,`Exprimer, pour tout entier $n$, $${$}_n$ en fonction de $n$.`,`Calculer une valeur approchée, à l'entier près, du nombre d'habitants dans cette commune en $${2024+C}$.`,`Compléter la fonction écrite en langage Python ci-dessous, afin qu'elle permette de calculer, pour tout entier naturel $n$, le terme $${$}_n$.<br>
$\\begin{array}{|l|}

      \\hline

      \\
 \\texttt{def ${$}(n):}  \\
 
       \\\\
 ${s(6)} \\texttt{${$} = \\ldots}\\
 
      \\\\
 ${s(6)} \\texttt{for i in range(1,\\ldots) :}\\
 
     \\\\
 ${s(12)} \\texttt{${$} = \\ldots}\\
 
      \\\\
 ${s(6)} \\texttt{return \\ldots}\\\\
 
      \\hline

      \\end{array}
$`],style:"nombres"}),v=p({items:[`Diminuer de $${u}\\,\\%$ revient à multiplier par $${e(t,2)}$.<br>
                  Ainsi, $${$}_{1}=${e(t,2)}\\times ${n}=${e(new r(t).mul(n),2)}$.<br>
                   Ce modèle prévoit $${e(new r(t).mul(n),2)}$ habitants en $2025$.`,`On obtient le nombre d'habitants d'une année en multipliant le nombre d'habitants l'année précédente par $${e(t,2)}$.<br>
              Ainsi, pour tout entier naturel $n$,  $${$}_{n+1}=${e(t,2)}\\times ${$}_n$.<br>
              On reconnaît la définition par récurrence d'une suite géométrique de raison $${e(t,2)}$.<br>
              Son premier terme est $${$}_{0}=${n}$.`,`Pour tout entier naturel $n$, $${$}_n=${n}\\times ${e(t,2)}^n$.`,`$${2024+C}$ correspond à $n=${C}$, d'où :<br>
$${$}_{${C}}=${n}\\times (${e(t,2)})^{${C}}\\simeq ${e(new r(t).pow(C).mul(n),0)}$.<br>
Ce modèle prévoit $${e(new r(t).pow(C).mul(n),0)}$ habitants en $${2024+C}$.`,`On complète la fonction Python ci-dessous afin qu'elle permette de calculer, pour tout entier naturel $n$, le terme $${$}_n$.<br><br>
$\\begin{array}{|l|}

      \\hline

      \\
 \\texttt{def ${$}(n):}  \\
 
       \\\\
 ${s(6)} \\texttt{${$} = ${n}}\\
 
      \\\\
 ${s(6)} \\texttt{for i in range(1,n+1) :}\\
 
     \\\\
 ${s(12)} \\texttt{${$} = ${$}*${e(t,2)}}\\
 
      \\\\
 ${s(6)} \\texttt{return ${$}}\\\\
 
      \\hline

      \\end{array}
$<br>
   `],style:"nombres"});break;case 4:u=new r(l(4,9)),i=l(80,140)*10,n=2*i*l(4,8),f=P([!0,!1]),x=0,a=l(100,110)*10,b=`En $2024$, le nombre d'abonnés à une page de réseau social d'un musicien était de $${e(n,0)}$.<br>
On suppose que chaque année, il obtient $${i}$ abonnés supplémentaires.<br>
On désigne par $${$}_n$ le nombre d'abonnés en $2024 + n$ pour tout entier naturel $n$.<br>
`,b+=p({items:["Calculer le nombre d'abonnés en $2025$ et $2026$.",`Exprimer $${$}_{n+1}$ en fonction de $${$}_n$, pour tout entier naturel $n$ et en déduire la nature de
la suite $(${$}_n)$. <br>
Préciser sa raison et son premier terme.`,`Exprimer, pour tout entier $n$, $${$}_n$ en fonction de $n$.`,`En quelle année le nombre d'abonnés aura ${f?"doublé":"triplé"} par rapport à l'année $2024$ ?`],style:"nombres"}),v=p({items:[`$${$}_1=${e(n,0)}+${i}=${e(n+i,0)}$<br>
              $${$}_2=${e(n+i,0)}+${i}=${e(n+2*i,0)}$<br>
                  En $2025$, ce modèle prévoit $${e(n+i,0)}$ abonnés.<br>
                   En $2026$, ce modèle prévoit $${e(n+2*i,0)}$ abonnés.`,`On obtient le nombre d'abonnés d'une année sur l'autre en ajoutant $${i}$ abonnés.<br>
              Ainsi, pour tout entier naturel $n$,  $${$}_{n+1}= ${$}_n+${i}$.<br>
              On reconnaît la définition par récurrence d'une suite arithmétique de raison $${i}$.<br>
              Son premier terme est $${$}_{0}=${e(n,0)}$.`,`Pour tout entier naturel $n$, $${$}_n=${n}+ n\\times ${i}$, soit plus simplement $${$}_n=${e(n,0)}+ ${i}n$.`,`On cherche $n$ tel que : $${e(n,0)}+ ${i}n = ${f===!0?`2\\times ${e(n,0)}`:`3\\times ${e(n,0)}`}$.<br>
$\\begin{aligned}
${e(n,0)}+ ${i}n&= ${f===!0?`${e(2*n,0)}`:`${e(3*n,0)}`}\\\\
${i}n&= ${f===!0?`${e(2*n,0)}-${e(n,0)}`:`${e(3*n,0)}-${e(n,0)}`}\\\\
${i}n&= ${f===!0?`${e(n,0)}`:`${e(2*n,0)}`}\\\\
n&= ${f===!0?`\\dfrac{${e(n,0)}}{${i}}`:`\\dfrac{${e(2*n,0)}}{${i}}`}\\\\
n&= ${f===!0?`${e(n/i,1)}`:`${e(2*n/i,1)}`}
\\end{aligned}$<br>
On en déduit que c'est à partir de 
$${f===!0?`${e(2024,0)}+${e(n/i,1)}`:`${e(2024,0)}+${e(2*n/i,1)}`}$
soit en $${f===!0?`${e(2024+n/i,1)}`:`${e(2024+2*n/i,1)}`}$ que le nombre d'abonnés aura ${f?"doublé":"triplé"} par rapport à l'année $2024$.
`],style:"nombres"});break;case 5:n=new r(l(8,20)*1e4),u=new r(P([2,4,5])),o=0,L=0,U=n,E=n,t=new r(1).add(u.div(100)),a=l(4,8)*1e5,q=new r(n).add(l(1,9)*1e4),A=l(35,60);for(let _=0;U.lessThan(q);_++)U=new r(U).mul(t),o=_+1;for(let _=0;E.lessThan(a);_++)E=new r(E).mul(t),L=_+1;b=`Un service de vidéos à la demande réfléchit au lancement d'une nouvelle série mise en ligne chaque semaine.<br>
        Le nombre de visionnages estimé la première semaine est de $${e(n,0)}$.<br>
         Ce nombre augmenterait ensuite de $${e(u,0)}\\,\\%$ chaque semaine.<br>
Les dirigeants souhaiteraient obtenir au moins $${e(a,0)}$ visionnages par semaine.

On modélise cette situation par une suite $(${$}_n)$ où $${$}_n$ représente le nombre de visionnages $n$ semaines après le début de la diffusion. <br>
On a donc $${$}_0 = ${e(n,0)}$.`,b+=p({items:[` Calculer le nombre $${$}_1$ de visionnages une semaine après le début de la diffusion. `,`Justifier que pour tout entier naturel $n$ : $${$}_n = ${e(n,0)} \\times  ${e(t,2)}^n$.`,`À partir de combien de semaines le nombre de visionnages hebdomadaire sera-t-il supérieur à $${e(q,0)}$ ?`,`Voici un algorithme écrit en langage Python:<br>
$\\begin{array}{|l|}

    \\hline

    \\
 \\texttt{def seuil():}  \\
 
     \\\\
 ${s(6)} \\texttt{${$} = ${n}}\\
 
      \\\\
 ${s(6)} \\texttt{n = 0}\\

    \\\\
 ${s(6)} \\texttt{while ${$} < ${a}  :}\\
 
   \\\\
 ${s(12)} \\texttt{${$} = ${t}*${$}}\\
 
    \\\\
 ${s(6)} \\texttt{return n}\\\\
 
    \\hline

    \\end{array}
$<br>
    Déterminer la valeur affichée par cet algorithme et interpréter le résultat précédent
dans le contexte de l'exercice.`,`On pose pour tout entier naturel $n$ : $S_n = ${$}_0 + \\ldots + ${$}_n$.<br>
 Montrer que l'on a : $S_n = ${e(new r(n).div(t.sub(1)))} \\times \\left(${e(t,2)}^{n+1} - 1\\right)$.<br>
En déduire le nombre total de visionnages au bout de $${A}$ semaines (arrondir à
l'unité).`],style:"nombres"}),v=p({items:[`Augmenter de $${u}\\,\\%$ revient à multiplier par $${e(t,2)}$.<br>
                Ainsi, $${$}_{1}=${e(t,2)}\\times ${e(n,0)}=${e(new r(t).mul(n),2)}$.<br>
                 Ce modèle prévoit $${e(new r(t).mul(n),2)}$ visionnages une semaine après le début de la diffusion.`,`Toutes les semaines, le nombre de visionnages prévu est multiplié par $${e(t,2)}$.<br>
On en déduit que $(${$}_{n})$ est une suite géométrique de raison $${e(t,2)}$.<br>
Ainsi, pour tout entier naturel $n$, $${$}_n=${e(n,0)}\\times ${e(t,2)}^n$.`,`On cherche $n$ tel que $${$}_n > ${e(q,0)}$, c'est-à-dire $${e(n,0)}\\times ${e(t,2)}^n>${e(q,0)}$.<br>
En utilisant la calculatrice, on trouve $n=${o}$.`,`On obtient à l'aide de la calcultarice le tableau suivant : <br>
   $\\begin{array}{|c|c|c|}
 \\hline

            
 n&${$}_n   \\\\
 \\hline

            
 ${L-1}&${e(new r(E).div(t),2)} <${e(a,0)}\\\\
 \\hline

            
 ${L}&${e(E,2)} > ${e(a,0)} \\\\
 \\hline

            \\end{array}
$
            <br>On en déduit que l'algorithme retourne la valeur $${L}$.<br>
            C'est donc à partir de la $${L}$ ième semaine que le nombre de visionnages dépassera  $${e(a,0)}$.
 `,`$S_n$ est la somme des $(n+1)$ premiers termes d'une suite géométrique de premier terme $${e(n,0)}$ et de raison $${e(t,2)}$.<br>
 Ainsi : <br>
 $\\begin{aligned}
 S_n&=${e(n,2)}\\times \\dfrac{1-${e(t,2)}^{n+1}}{1-${e(t,2)}}\\\\
 &=\\dfrac{${e(n,2)}}{1-${e(t,2)}}\\times (1-${e(t,2)}^{n+1})\\\\
&=${e(new r(n).div(t.sub(1)).mul(-1))}\\times (1-${e(t,2)}^{n+1})\\\\
&=${e(new r(n).div(t.sub(1)))}\\times (${e(t,2)}^{n+1}-1)
 \\end{aligned}$<br>
 
 Pour $n=${A}$, on obtient $S_{${A}}=${e(new r(n).div(t.sub(1)))}\\times (${e(t,2)}^{${A}+1}-1)\\simeq ${e(new r(n).div(t.sub(1)).mul(t.pow(A+1)),0)}$.<br>
 Au bout de $${A}$ semaines, le nombre total de visionnages est $${e(new r(n).div(t.sub(1)).mul(t.pow(A+1)),0)}$.`],style:"nombres"});break;case 6:u=new r(P([2,4,5])),t=new r(1).add(u.div(100)),n=new r(l(2,6)*100),c=new r(l(2,8)*10),a=new r(c).div(t.mul(-1).add(1)),d=new r(t).mul(n).add(c),S=new r(t).mul(t.mul(n).add(c)).add(c),y=l(8,20),f=P([!0,!1]),b=`Aujourd'hui les chardons (une plante vivace) ont envahi $${n}\\text{ m}^2$ des champs d'une région.<br>
 Chaque semaine, la surface envahie augmente de $${e(u,0)}\\,\\%$ par le développement des racines, auquel s'ajoutent $${e(c,2)}\\text{ m}^2$ suite à la dissémination des graines.<br>
Pour tout entier naturel $n$, on note $${$}_n$ la surface envahie par les chardons, en $\\text{ m}$$^2$, après $n$ semaines ; on a donc $${$}_0 = ${n}\\text{ m}^2$.`,b+=p({items:[`Calculer $${$}_1$ et $${$}_2$.`,`Montrer que la suite $(${$}_n)$ ainsi définie, n'est ni arithmétique ni géométrique.`,`On admet dans la suite de l'exercice que, pour tout entier naturel $n$ : $${$}_{n+1} = ${e(t,2)}${$}_n+ ${c}$.`+p({items:[`On considère la suite $(t_n)$, définie pour tout entier naturel $n$, par : $t_n = ${$}_n${O(-a)}$.<br>
Calculer $t_0$, puis montrer que la suite $(t_n)$ est géométrique de raison $q = ${e(t,2)}$.`,`Pour tout entier naturel $n$, exprimer $t_n$ en fonction de $n$, puis montrer que $${$}_n = ${e(new r(n).sub(a),1)} \\times ${e(t,2)}^n ${O(a)}$`,`Est-il correct d'affirmer que la surface envahie par les chardons aura doublé au bout de $${y}$ semaines ? Justifier la réponse.`],style:"alpha"})],style:"nombres"}),v=p({items:[`Augmenter de $${u}\\,\\%$ revient à multiplier par $${e(t,2)}$.<br>
                Ainsi, $${$}_{1}=${e(t,2)}\\times ${e(n,0)}+${c}=${e(d,2)}$ et 
                $${$}_{2}=${e(t,2)}\\times ${e(d,2)}+${c}=${e(S,2)}$.`,`$${$}_{1}-${$}_{0}=${e(d,2)}-${n}=${e(new r(d).sub(n),2)}$ <br>
                $${$}_{2}-${$}_{1}=${e(S,2)}-${e(d,2)}=${e(new r(S).sub(d),2)}$ <br> 
                $${$}_{1}-${$}_{0}\\neq ${$}_{2}-${$}_{1}$ donc la suite n'est pas arithmétique.<br><br>
                $\\dfrac{${$}_{1}}{${$}_{0}}=\\dfrac{${e(d,2)}}{${n}}\\simeq${e(new r(d).div(n),3)}$ <br>
                $\\dfrac{${$}_{2}}{${$}_{1}}=\\dfrac{${e(S,2)}}{${e(d,2)}}\\simeq${e(new r(S).div(d),3)}$ <br> 
                $\\dfrac{${$}_{1}}{${$}_{0}}\\neq \\dfrac{${$}_{2}}{${$}_{1}}$ donc la suite n'est pas géométrique.<br><br>
                `,p({items:[`Pour tout entier naturel $n$, <br>
            $\\begin{aligned}
           t_{n+1}&=${$}_{n+1} ${O(-a)}\\\\
           &=${e(t,2)}${$}_n+ ${c} ${O(-a)}\\\\
           &=${e(t,2)}${$}_n ${O(new r(c).sub(a))}\\\\
           &=${e(t,2)}(${$}_n${O(-a)})\\\\
           &=${e(t,2)}t_n
           \\end{aligned}$<br>
           On a donc $t_{n+1}=${e(t,2)}t_n$.<br>
           $(t_n)$ est donc une suite géométrique de raison $${e(t,2)}$.<br>
           On calcule son premier terme $t_0$ : <br>
           $\\begin{aligned}
          t_0&=${$}_0${O(-a)}\\\\
          &=${e(n,1)}${O(-a)}\\\\
          &=${e(new r(n).sub(a),1)}
          \\end{aligned}$`,` On en déduit l'expression de $t_n$ en fonction de $n$ pour tout entier naturel $n$ : $t_n=${e(new r(n).sub(a),1)}\\times ${e(t,2)}^n$.<br>
Or $t_n = ${$}_n${O(-a)}$ donc $${$}_n = ${e(new r(n).sub(a),1)}\\times ${e(t,2)}^n${O(a)}$
`,`On a $${$}_{${y}}=${e(new r(n).sub(a),1)}\\times ${e(t,2)}^{${y}}${O(a)}
\\simeq ${e(new r(a.sub(n).mul(-1).mul(t.pow(y)).add(a)),0)}$.<br>
Au bout de $${y}$ semaines, la surface envahie par les chardons est d'environ $${e(new r(a.sub(n).mul(-1).mul(t.pow(y)).add(a)),0)}\\text{ m}^2$.<br>
Comme $${e(new r(a.sub(n).mul(-1).mul(t.pow(y)).add(a)),0)} ${a.sub(n).mul(-1).mul(t.pow(y)).add(a).lessThan(n.mul(2))?"<":">"} 2\\times ${e(n,0)}$, la surface envahie par les chardons 
${a.sub(n).mul(-1).mul(t.pow(y)).add(a).lessThan(n.mul(2))?"n'aura pas":"aura"} doublé au bout de $${y}$ semaines. `],style:"alpha"})],style:"nombres"});break;case 7:n=new r(l(25,35)),d=n,u=new r(l(7,15)),o=0,t=new r(1).add(u.div(100)),a=l(11,19)*10;for(let _=0;d.lessThan(a);_++)d=new r(d).mul(t),o=_+1;Q=new r(t).pow(o+1).mul(-1).add(1),j=new r(1).sub(t),R=new r(n).mul(Q).div(j).round(),b=`Désirant participer à une course de $${a}\\text{ km}$, un cycliste prévoit l'entraînement suivant :<br>
$\\bullet$  parcourir $${n}\\text{ km}$ en première semaine ;<br>
$\\bullet$  chaque semaine qui suit, augmenter la distance parcourue de $${u}\\,\\%$ par rapport à celle parcourue la semaine précédente.<br>
On modélise la distance parcourue chaque semaine à l'entraînement par la suite $(d_n)$ où $d_n$ représente la distance en $\\text{km}$ parcourue pendant la $n$-ième semaine d'entraînement.
<br>
On a ainsi $d_1 = ${n}$.
`,b+=p({items:["Calculer $d_3$. Arrondir le résultat au $\\text{km}$ près.",`Exprimer $d_{n+1}$ en fonction de $d_n$. <br>
                 En déduire la nature de la suite $(d_n)$. Justifier.`,"Exprimer, pour tout entier $n$ non nul, $d_n$ en fonction de $n$.",`On considère la fonction définie de la façon suivante en langage Python.<br>
$\\begin{array}{|l|}

      \\hline

      \\
 \\texttt{def distance(k):}  \\
 
       \\\\
 ${s(6)} \\texttt{d = ${n}}\\
 
       \\\\
 ${s(6)} \\texttt{n = 1}\\
 
      \\\\
 ${s(6)} \\texttt{while d<=k :}\\
 
     \\\\
 ${s(12)} \\texttt{d = d*${e(t,2)}}\\
 
      \\\\
 ${s(6)} \\texttt{return n}\\\\
 
      \\hline

      \\end{array}
$<br>
      Donner l'information obtenue par le calcul de $\\texttt{distance(${a})}$ ?
      `,`Calculer la distance totale parcourue par le cycliste pendant les $${o+1}$ premières semaines d'entraînement.`],style:"nombres"}),v=p({items:[`Augmenter de $${u}\\,\\%$ revient à multiplier par $${e(t,2)}$.<br>
                  Ainsi, $d_{2}=${e(t,2)}\\times ${n}=${e(new r(t).mul(n),2)}$ et $d_{3}=${e(t,2)}\\times ${e(new r(t).mul(n),2)}\\simeq ${e(new r(t).pow(2).mul(n),0)}$
                  `,`Chaque semaine, la distance parcourue augmente de $${u}\\,\\%$ par rapport à celle parcourue la semaine précédente. <br>
              Ainsi, quel que soit $n \\geqslant 1$, $d_{n+1} = ${e(t,2)} \\times d_n$.<br>
              On reconnaît la définition par récurrence d'une suite géométrique de raison $${e(t,2)}$ et de premier terme $d_1=${n}$.`,`Pour tout entier naturel $n \\geqslant 1$, $d_n=${n}\\times ${e(t,2)}^{n-1}$.`,`La fonction $\\texttt{distance(${a})}$ renverra le nombre de semaines nécessaires pour atteindre une distance de $${a}\\text{ km}$.<br>
On obtient à l'aide de la calcultarice le tableau suivant : <br>
   $\\begin{array}{|c|c|c|}
 \\hline

            
 n&d_n   \\\\
 \\hline

            
 ${o}&${e(new r(d).div(t),2)} <${e(a,0)}\\\\
 \\hline

            
 ${o+1}&${e(d,2)} > ${e(a,0)} \\\\
 \\hline

            \\end{array}
$
            <br>On en déduit que l'algorithme retourne la valeur $${o+1}$.<br>
            C'est donc  la $${o+1}$ ième semaine que la distance parcourue lors de l'entraînement dépasse  pour la première fois $${a}\\text{ km}$.`,`La distance totale parcourue par le cycliste pendant les $${o+1}$ premières semaines d'entraînement est donnée par : $S_{${o+1}}=d_1+d_2+\\ldots +d_{${o+1}}$.<br>
            $S_{${o+1}}$ est la somme des $${o+1}$ premiers termes d'une suite géométrique de raison $${e(t,2)}$ et de premier terme $d_1=${n}$.<br>
             $\\begin{aligned}
S_{${o+1}} &= d_1 + d_2 + \\dots + ${$}_{${o+1}} \\\\
&= ${n} \\times \\dfrac{1 - ${e(t,2)}^{${o+1}}}{1 - ${e(t,2)}} \\\\
&\\approx ${e(R,0)}
\\end{aligned}$<br>

Au cours des $${o+1}$ séances d'entraînement, le cycliste a parcouru au total $${e(R,0)}\\text{ km}$. `],style:"nombres"});break;case 8:u=new r(l(15,30)),i=l(80,140)*10,n=new r(l(2,5)),d=n,f=P([!0,!1]),x=l(4,8),o=0,a=l(8,15),q=new r(a).div(100),t=new r(1).sub(u.div(100));for(let _=0;q.lessThan(d);_++)d=new r(d).mul(t),o=_+1;b=`Une balle est lâchée d'une hauteur de $${n}$ mètres au-dessus du sol. Elle touche le sol et rebondit. <br>
          À chaque rebond, la balle perd $${u}\\,\\%$ de sa hauteur précédente.<br>
On modélise la hauteur de la balle par une suite $(h_n)$ où $h_n$ désigne la hauteur maximale de la balle, en mètres, après le $n$-ième rebond.<br>
`,b+=p({items:["Calculer $h_1$ et $h_2$. Arrondir au cm près si besoin.",`Exprimer $h_{n+1}$ en fonction de $h_n$, pour tout entier naturel $n$ et en déduire la nature de
la suite $(h_n)$. <br>
Préciser sa raison et son premier terme.`,"Exprimer, pour tout entier $n$, $h_n$ en fonction de $n$.",`Déterminer la hauteur, arrondie au cm, de la balle après $${x}$ rebonds.`,`La fonction  « seuil » est définie ci-dessous en langage Python.<br>
$\\begin{array}{|l|}

      \\hline

      \\
 \\texttt{def seuil():}  \\
 
       \\\\
 ${s(6)} \\texttt{h = ${n}}\\
 
       \\\\
 ${s(6)} \\texttt{n = 0}\\
 
      \\\\
 ${s(6)} \\texttt{while \\ldots :}\\
 
     \\\\
 ${s(12)} \\texttt{h = \\ldots}\\
 
     \\\\
 ${s(12)} \\texttt{n = n+1}\\
 
      \\\\
 ${s(6)} \\texttt{return n}\\\\
 
      \\hline

      \\end{array}
$<br>
      Compléter les pointillés pour que cette fonction renvoie le nombre de rebonds à partir duquel la hauteur maximale de la balle sera inférieure ou égale à $${a}$ centimètres.<br>
      Déterminer ce nombre.
      `],style:"nombres"}),v=p({items:[`Diminuer de $${u}\\,\\%$ revient à multiplier par $${e(t,2)}$.<br>
                Ainsi, $h_{1}=${e(t,2)}\\times ${e(n,0)}=${e(new r(t).mul(n),2)}$ et  $h_{2}=${e(t,2)}\\times ${e(new r(t).mul(n),2)}\\simeq${e(new r(t).pow(2).mul(n),2)}$.<br>`,`À chaque rebond, la balle perd $${u}\\,\\%$ de sa hauteur précédente, donc pour tout entier naturel $n$, $h_{n+1}=${e(t,2)}\\times h_n$.<br>
On reconnaît la définition par récurrence d'une suite géométrique de raison $${e(t,2)}$.<br>
Son premier terme est $h_0=${n}$.`,`Pour tout entier naturel $n$, $h_n=${e(n,0)}\\times ${e(t,2)}^n$.`,`$h_{${x}}=${e(n,0)}\\times (${e(t,2)})^{${x}}\\simeq ${e(t.pow(x).mul(n),2)}$.<br>
La balle rebondit à une hauteur de $${e(t.pow(x).mul(n),2)}\\text{ m}$ après $${x}$ rebonds.`,`On compléte les pointillés pour que cette fonction renvoie le nombre de rebonds à partir duquel la hauteur maximale de la balle sera inférieure ou égale à $${a}$ centimètres : <br>
   $\\begin{array}{|l|}

      \\hline

      \\
 \\texttt{def seuil():}  \\
 
       \\\\
 ${s(6)} \\texttt{h = ${n}}\\
 
       \\\\
 ${s(6)} \\texttt{n = 0}\\
 
      \\\\
 ${s(6)} \\texttt{while h >= ${q} :}\\
 
     \\\\
 ${s(12)} \\texttt{h = h*${t}}\\
 
     \\\\
 ${s(12)} \\texttt{n = n+1}\\
 
      \\\\
 ${s(6)} \\texttt{return n}\\\\
 
      \\hline

      \\end{array}
$<br>
            
            En utilisant une calcultarice, on obtient le tableau suivant : <br>
            $\\begin{array}{|c|c|c|}
 \\hline

            
 n&d_n   \\\\
 \\hline

            
 ${o-1}&${e(new r(d).div(t),3)} >${e(q,2)}\\\\
 \\hline

            
 ${o}&${e(d,3)} < ${e(q,2)} \\\\
 \\hline

            \\end{array}
$<br>
            C'est donc à partir du $${o}$ ième rebond que   la hauteur maximale de la balle sera inférieure ou égale à $${a}$ centimètres.
 `],style:"nombres"});break;case 9:m=pe(2),u=new r(l(3,5)),t=new r(1).add(u.div(100)),i=l(55,75)*10,c=l(5,8),n=l(180,220)*100,g=n-l(15,20)*100,d=new r(n),M=new r(g),h=2020+l(5,9),x=l(4,8),o=0,a=l(8,15),q=new r(a).div(100);for(let _=0;M.lessThan(d);_++)d=new r(d).add(i),M=new r(M).mul(t),o=_+1;b=`${m[0]} et ${m[1]} ont été embauchés au même moment dans une entreprise et ont négocié leur contrat à des conditions différentes :<br>
$\\bullet$  ${m[0]} a commencé en $2020$ avec un salaire annuel de $${e(n,0)}$ € alors que le salaire de ${m[1]} était, cette même année, de $${e(g,0)}$ €.<br>
$\\bullet$ Le salaire de ${m[0]} augmente de $${i}$ € par an alors que celui de ${m[1]} augmente de $${u}\\,\\%$ par an.

`,b+=p({items:[`Quels étaient les salaires annuels de ${m[0]} et de ${m[1]} en $2022$ ? `,`On modélise les salaires de ${m[0]} et de ${m[1]} à l'aide de suites.`+p({items:[`On note $u_n$ le salaire de ${m[0]} en l'année $2020 +n$. On a donc $u_0 = ${e(n,0)}$.<br>
     Quelle est la nature de la suite $(u_n)$ ?`,`Déterminer en quelle année le salaire de ${m[0]} dépassera $${e(n+c*i+10,0)}$.`,`On note $v_n$ le salaire de ${m[1]} en l'année $2020 +n$.<br>
Exprimer $v_{n+1}$ en fonction de $v_n$, puis $v_n$ en fonction de $n$.`,`Calculer le salaire de ${m[1]} en $${h}$. On arrondira le résultat à l'euro.`],style:"alpha"}),`On veut déterminer à partir de quelle année le salaire de ${m[1]} dépassera celui de ${m[0]}. <br>
Pour cela, on dispose du programme incomplet ci-dessous écrit en langage Python.<br>
Compléter les quatre parties en pointillé du programme ci-dessous, puis déterminer l'année cherchée :<br>
$\\begin{array}{|l|}

      \\hline

      \\
 \\texttt{def algo():}  \\
 
       \\\\
 ${s(6)} \\texttt{A = ${n}}\\
 
       \\\\
 ${s(6)} \\texttt{B = ${g}}\\
 
       \\\\
 ${s(6)} \\texttt{n = 0}\\

      \\\\
 ${s(6)} \\texttt{while \\ldots :}\\
 
     \\\\
 ${s(12)} \\texttt{A = \\ldots}\\
 
       \\\\
 ${s(12)} \\texttt{B = \\ldots}\\

     \\\\
 ${s(12)} \\texttt{n = \\ldots}\\
 
      \\\\
 ${s(6)} \\texttt{return n}\\\\
 
      \\hline

      \\end{array}
$`],style:"nombres"}),v=p({items:[`Tous les ans le salaire de ${m[0]} augmente de $${i}$ €.<br>
             $${e(n,0)}+2\\times ${i}=${e(n+2*i,0)}$.<br>
             Le salaire de ${m[0]} en $2022$ est $${e(n+2*i,0)}$ €.<br>
           Tous les ans le salaire de ${m[1]} augmente de $${u}\\,\\%$.<br>
           Augmenter de $${u}\\,\\%$ revient à multiplier par $${e(t,2)}$.<br>
              $${e(g,0)}\\times ${e(t,2)}^2=
              ${e(new r(t.pow(2).mul(g)),2)}$.<br>
              Le salaire de ${m[1]} en $2022$ est  $${e(new r(t.pow(2).mul(g)),2)}$ €.`,p({items:[`Comme le salaire de ${m[0]} augmente de $${i}$ € tous les ans, on a pour tout entier naturel $n$, $u_{n+1}=u_n+${i}$.<br>
 On reconnaît la définition par récurrence d'une suite arithmétique de raison $${i}$.`,`On cherche $n$ tel que $u_n > ${e(n+c*i+10,0)}$.<br>   
Comme $(u_n)$ est une suite arithmétique de raison $${i}$ et de premier terme $${n}$, alors pour tout entier naturel $n$, $u_n=${e(n,0)}+${i}n$.
<br>
$\\begin{aligned}
u_n &> ${e(n+c*i+10,0)} \\\\
${e(n,0)}+${i}n&> ${e(n+c*i+10,0)} \\\\
${i}n&>${e(c*i+10,0)}\\\\
n&>\\dfrac{${e(c*i+10,0)}}{${i}}
\\end{aligned}$<br>
$\\dfrac{${e(c*i+10,0)}}{${i}}\\simeq ${e((c*i+10)/i,2)}$, c'est donc $${Math.ceil((c*i+10)/i)}$ ans après $2020$ que le salaire de ${m[0]} dépassera $${e(n+c*i+10,0)}$, 
c'est-à-dire en $${e(2020+Math.ceil((c*i+10)/i),0)}$.`,`Le salaire de ${m[1]} augmente tous les ans de $${u}\\,\\%$.<br>
On a donc pour tout entier naturel $n$, $v_{n+1}=${e(t,2)}\\times v_n$.<br>
On reconnaît la définition par récurrence d'une suite géométrique de raison $${e(t,2)}$.<br>
Comme  son premier terme  est $v_0=${e(g,0)}$, alors pour tout entier naturel $n$, $v_n=${e(g,0)}\\times ${e(t,2)}^n$.
`,`Le salaire de ${m[1]} en $${h}$ est donné par $v_{${e(h-2020,0)}}$. <br>
$v_{${e(h-2020,0)}}=${e(g,0)}\\times ${e(t,2)}^{${e(h-2020,0)}}\\simeq
 ${e(new r(t).pow(h-2020).mul(g),2)}$<br>
 En $${h}$, ${m[1]} gagne $${e(new r(t).pow(h-2020).mul(g),2)}$ € par an.
 `],style:"alpha"}),`Le programme ci-dessous  permet de déterminer à partir de quelle année le salaire de ${m[1]} dépassera celui de ${m[0]} :<br>
$\\begin{array}{|l|}

  \\hline

  \\
 \\texttt{def algo():}  \\
 
   \\\\
 ${s(6)} \\texttt{A = ${n}}\\
 
   \\\\
 ${s(6)} \\texttt{B = ${g}}\\
 
   \\\\
 ${s(6)} \\texttt{n = 0}\\

  \\\\
 ${s(6)} \\texttt{while A >= B :}\\
 
 \\\\
 ${s(12)} \\texttt{A = A+${i}}\\
 
   \\\\
 ${s(12)} \\texttt{B = B*${t}}\\

 \\\\
 ${s(12)} \\texttt{n = n+1}\\
 
  \\\\
 ${s(6)} \\texttt{return n}\\\\
 
  \\hline

  \\end{array}
$<br>
  En utilisant une calcultarice, on obtient le tableau suivant : <br>
            $\\begin{array}{|c|c|c|}
 \\hline

            
 n&u_n  &v_n \\\\
 \\hline

            
 ${o}&${e(new r(d).sub(i),0)} &${e(new r(M).div(t),1)}\\\\
 \\hline

            
 ${o+1}&${e(new r(d),0)} &${e(new r(M),1)}\\\\
 \\hline

            \\end{array}
$<br>
            C'est donc  $${o+1}$ après $2020$ que  le salaire de ${m[1]} dépassera celui de ${m[0]}, soit en  $${e(2020+o+1,0)}$.`],style:"nombres"});break;default:{i=l(28,39)*10,D=l(1,3),h=l(2021,2024),n=l(71,75)*100,a=l(3,4),k=P([4,5,8]),N=Y((n+a*i)/100,0)*100+100,w=l(9,11)*1e3,X=T(0,n/100),F=T(4,n/100+.01*i),H=T(8,n/100+.02*i),I=T(12,n/100+.03*i),V=T(16,n/100+.04*i),G=T(20,n/100+.05*i),J=new ae({xMin:0,xMax:6,yMin:7e3,yMax:n+6*i}).setGrille({grilleX:{dx:4,xMin:0,xMax:6},grilleY:{dy:2,yMin:7e3,yMax:n+6*i}}).setUniteX(4).setUniteY(.01).setThickY({yMin:7e3,yMax:n+6*i,dy:200}).setThickX({xMin:0,xMax:6,dx:1}).setLabelY({yMin:7e3,yMax:n+6*i,dy:200}),J.yLabelEcart=1.5;const W=[J.buildCustom(),se(X,F,H,I,V,G)];K=ce(Object.assign({pixelsParCm:15,scale:.4,style:"inline-block"},ie(W)),W),d=n,o=0;for(let Z=0;d<w;Z++)d=d+i,o=Z+1;de.isHtml?b=`En $${h}$, une ruche est composée de $${e(n,0)}$ abeilles dont une reine.<br>
          On modélise, à partir de cette année, le nombre d'abeilles dans la ruche par une suite $(u_n)$.<br>
          Le graphique ci-dessous représente les premières valeurs de $u_n$  donnant le nombre d'abeilles de cette ruche prévues en $${h}+n$.<br>
          ${K}`:b=`En $${h}$, une ruche est composée de $${e(n,0)}$ abeilles dont une reine.<br>
          On modélise, à partir de cette année, le nombre d'abeilles dans la ruche par une suite $(u_n)$.<br>
          Le graphique ci-dessous représente les premières valeurs de $u_n$  donnant le nombre d'abeilles de cette ruche prévues en $${h}+n$.<br>
          \\begin{tikzpicture}
  \\begin{axis}[%
      /pgf/number format/.cd, % trois lignes pour un format de nombre à la française pour les grand nombres
      use comma,
      1000 sep={\\,},
      axis y line=center,axis x line=middle,% pour avoir les axes cenré sur l'origine
      x=1.5cm,y=0.003cm,% unités sur les axes
      xmin=0,xmax=6,ymin=7200,ymax=${n+6*i},% bornes du repère
      xtick distance=1,ytick distance =200,% nombre d'unités entre deux laabels
      minor y tick num = 1, % sous grille supplémentaire (indiquer le nombre de trait entre deux graduations)
      minor grid style = {thin, black!10}, % style des traits pour la sous-grille
      grid=both,%
      tick label style={font=\\scriptsize,black!50}, % description des styles des labels sur les axes
    ]
    \\addplot+[only marks,mark=+,mark size=3pt,red,thick,domain=0:5,samples={6}] {${i}*x+${n}};
  \\end{axis}
\\end{tikzpicture}`,b+=p({items:["Avec la précision permise par ce graphique, répondre aux questions suivantes."+p({items:[`Quel est le nombre d'abeilles prévues en $${h+D}$ ?`,`En quelle année le nombre d'abeilles dans la ruche dépassera $${e(N,0)}$ abeilles ?`,"Pourquoi peut-on conjecturer que le suite $(u_n)$ est une suite arithmétique ?"],style:"alpha"}),`En admettant que la suite $(u_n)$ est une suite arithmétique et que $u_{${k}}=${e(n+k*i,0)}$, déterminer la raison de la suite $(u_n)$.<br>
                  Justifier en écrivant le(s) calcul(s).`,`Une ruche produit du miel si au moins $${e(w,0)}$ abeilles l'habitent.<br>
                  À partir de combien d'années cette ruche produira-t-elle du miel ? Justifier.`],style:"nombres"}),v=p({items:[p({items:[`On lit l'ordonnée du point d'abscisse $${D}$.<br>
 Ainsi, d'après le graphique, le nombre d'abeilles prévues en $${h+D}$ est $${e(Y((n+D*i)/10,0)*10,0)}$.`,`Les ordonnées des points dépassent $${e(N,0)}$ à partir de $n=${a+1}$.<br>
C'est donc en  $${h+a+1}$ que le nombre d'abeilles dépassera $${e(N,0)}$.`,"Les points sur le graphique sont alignés, on conjecture que la suite est arithmétique."],style:"alpha"}),`La raison $r$ de la suite est donnée par : $r=\\dfrac{u_{${k}}-u_0}{${k}}$.<br>
              $r=\\dfrac{${e(n+k*i,0)}-${e(n,0)}}{${k}}=${e(i,0)}$.
              `,`L'expression du terme général de la suite $(u_n)$ est $u_n=${e(n,0)}+n\\times ${i}$.<br>
              On cherche $n$ tel que $${e(n,0)}+n\\times ${i}>${e(w,0)}$.<br>
              $\\begin{aligned}
              ${e(n,0)}+n\\times ${i}&>${e(w,0)}\\\\
              n&>\\dfrac{${e(w,0)}-${e(n,0)}}{${i}}\\\\
              n&>\\dfrac{${e(w-n,0)}}{${i}}
              \\end{aligned}$<br>
              Comme $\\dfrac{${e(w-n,0)}}{${i}}
              ${(w-n)%i===0?"=":"\\approx"}  ${e(Y((w-n)/i,1),1)}$, c'est à partir de la 
              
              ${(w-n)%i===0?`$${o+1}$`:`$${o}$`}e année après $${h}$ que la ruche produira du miel, soit en ${(w-n)%i===0?`$${h+o+1}$`:`$${h+o}$`}.`],style:"nombres"})}break}this.questionJamaisPosee(B,a,n)&&(this.listeQuestions.push(b),this.listeCorrections.push(v),B++),z++}me(this)}}export{Gn as dateDePublication,Zn as default,Wn as refs,Vn as titre,Kn as uuid};
//# sourceMappingURL=1AL12-4-Ce4pLdR8.js.map
