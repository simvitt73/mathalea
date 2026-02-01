import{A as V,K as j,r as q,F as x,k as a,m as l,y as z,v as s,a1 as k}from"./index-BvuGzI-o.js";import{c as u}from"./lists-EM0cVZMP.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-K3nUGUh4.js";import"./json/refToUuidCH-DBCD2E_6.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-OtHQ7xZ3.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const $t="27/12/2025",ot="17/01/2026",at=!1,lt="Résoudre un problème avec le théorème du point fixe",st="5d294",ut={"fr-fr":["TSA4-03"],"fr-ch":[]};class pt extends V{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=j.clavierEnsemble,this.optionsDeComparaison={ensembleDeNombres:!0}}nouvelleVersion(){let r,m,e,t,$;do r=q(-3,3,0),m=q(1,7),e=q(-2,2,[0,r]),t=q(-5,5,[0]),$=m*(e*m+t-r);while(r*t-$*e<=0||t/e<0||$/t<0||$===0);const i=0,y=Math.floor(r/e),n=q(y+2,10),_=(t-r)*(t-r)-4*e*-$,S=r*t-$*e,v=Math.sqrt(_),d=new x(-t+r+v,2*e),b=new x(-t+r-v,2*e),L=d.valeurDecimale,A=b.valeurDecimale,p=q(m+1,n-1,[L,A]),P=S>0?"croissante":"décroissante",D=new x(r*p+$,e*p+t),o=`$[${i}~;~${n}]$`;let f=0;const h=new x(r*i+$,e*i+t),g=new x(r*n+$,e*n+t),C=`Montrer que la fonction $f$ est ${P} sur l'intervalle ${o}.`,E=`Résoudre dans ${o} l'équation $f(x) = x$. `,O=u({style:"alpha",items:[C,E]}),w="Calculer $u_1$.",M=`Montrer que pour tout entier naturel $n$, $${i} \\leqslant u_{n+1}\\leqslant u_n \\leqslant ${n}$. `,R=u({style:"alpha",items:[w,M]}),I=u({style:"alpha",items:["Montrer que la suite $\\left(u_n\\right)$ converge vers un réel $\\ell$.","Calculer la valeur de $\\ell$."]});this.question=`Soit $f$ la fonction définie sur l'intervalle ${o} par
			$f(x) = \\dfrac{${a(r,$)}}{${a(e,t)}}.$<br>
			On considère la suite $\\left(u_n\\right)$ définie par :
			$u_0 = ${p}$ et pour tout entier naturel $n$, par  $u_{n+1} = f\\left(u_n\\right).$<br>
			<br>`,this.question+=u({style:"nombres",items:[O,R,I]});const T=`Pour tout $x\\in [${i}~;~${n}]$, on pose <br>
      $u(x)=${a(r,$)}$ et $v(x)= ${a(e,t)}$.<br>
      Les fonctions $u$ et $v$ sont dérivables sur l'intervalle ${o} et on a : <br>
      $u'(x)=${r}$ et $v'(x)=${e}$.<br>
      De plus, pour tout $x\\in [${i}~;~${n}]$, on a $v(x) \\neq 0$.<br>
      Ainsi, $f=\\dfrac{u}{v}$ est dérivable sur ${o}, et par dérivation d'un quotient on en déduit que : <br>
      $\\begin{aligned}
      f'(x) &= \\dfrac{u'(x)v(x)-u(x)v'(x)}{v(x)^2} \\\\
      &= \\dfrac{${r}(${a(e,t)} ) ${l(-e)}(${a(r,$)})}{(${a(e,t)})^2} \\\\
      &= \\dfrac{${r*t}${l(-$*e)}}{(${a(e,t)})^2} \\\\
       &= \\dfrac{${S}}{(${a(e,t)})^2} \\\\
      \\end{aligned}  $ <br>
      Le dénominateur étant strictement positif sur l'intervalle ${o}, on a $f'(x)${S>0?">":"<"}0$.<br>
     La fonction $f$ est donc strictement ${P} sur l'intervalle ${o}.<br>`;let c=`On résout sur ${o} :<br>
     $\\begin{aligned}
      f(x) &= x \\\\
      \\dfrac{${a(r,$)}}{${a(e,t)}}&= x \\\\
      ${a(r,$)}&=${e}x^2 ${l(t)}x\\\\
      ${z(e)}x^2 ${l(t-r)}x ${l(-$)} &= 0 \\\\
      \\end{aligned}$ <br>
      Le discriminant de ce polynôme du second degré est <br>
      $\\begin{aligned}
      \\Delta &= b^2-4ac\\\\
      &= ${s(t-r)}^2 - 4 \\times (${s(e)}) \\times ${s(-$)} \\\\
      &= ${(t-r)*(t-r)}   ${l(4*e*$)}  \\\\
      &=${_}> 0
      \\end{aligned}$ <br>
      Ainsi, l'équation admet deux solutions réelles distinctes données par <br>
      $\\begin{aligned}
      x_1 &= \\dfrac{-b - \\sqrt{\\Delta}}{2 a} & x_2 &= \\dfrac{-b + \\sqrt{\\Delta}}{2 a} \\\\
      &=\\dfrac{-${s(t-r)} - \\sqrt{${_}}}{2 \\times ${s(e)}} &&= \\dfrac{-${s(t-r)}+ \\sqrt{${_}}}{2 \\times ${s(e)}} \\\\
      &= \\dfrac{${-t+r} - ${v} }{ ${2*e}}& &= \\dfrac{${-t+r} +${v} }{ ${2*e}} \\\\
       &= ${d.texFractionSimplifiee}& &= ${b.texFractionSimplifiee} \\\\
       \\end{aligned}$ <br>`;c+="On vérifie que ",d.valeurDecimale>=i&&d.valeurDecimale<=n?(c+=` $${d.texFractionSimplifiee} \\in [${i}~;~${n}]$ `,f=f+1):c+=` $${d.texFractionSimplifiee} \\notin [${i}~;~${n}]$ `,b.valeurDecimale>=i&&b.valeurDecimale<=n?(c+=`et que $${b.texFractionSimplifiee} \\in [${i}~;~${n}]$.<br>`,f=f+1):c+=`et que $${b.texFractionSimplifiee} \\notin [${i}~;~${n}]$.<br>`,c+=`L'équation $f(x)=x$ admet donc $${f}$ solution${f>1?"s":""} dans l'intervalle ${o}.<br>`;const B=`Pour tout entier naturel $n$, on a  $u_{n+1} = f\\left(u_n\\right).$<br>
      En particulier, on a <br>$\\begin{aligned}
      u_1 &= f\\left(u_0\\right) \\\\
      &= f\\left(${p}\\right) \\\\
      &= \\dfrac{${r}\\times ${s(p)} ${l($)}}{${e} \\times ${s(p)} ${l(t)}} \\\\
      &=${D.texFractionSimplifiee}\\end{aligned}$.<br>`;let F=`Pour tout entier naturel $n$, on pose la propriété $\\mathcal{P}_n$ :  $${i}\\leqslant u_{n+1} \\leqslant u_n \\leqslant ${n}.$<br>
    On va démontrer par récurrence que la propriété $\\mathcal{P}_n$ est vraie pour tout entier naturel $n$.<br>
    ${k("Initiatisation :","blue")} <br>
    Pour $n=0$, on a d'après l'énoncé $u_0=${p}$.<br>
    On a calculé, à la question 2.a, $u_1=${D.texFractionSimplifiee}$.<br>
    On vérifie que : $${i} \\leqslant u_1 \\leqslant u_0\\leqslant ${n}.$<br>
    Ainsi, la propriété $\\mathcal{P}_0$ est vraie.<br>
    La propriété est donc initialisée au rang $n=0$.<br>
    ${k("Hérédité :","blue")} <br>
    Soit $k$ un entier naturel tel que la propriété $\\mathcal{P}_k$ est vraie, c'est-à-dire que $${i} \\leqslant u_{k+1}\\leqslant u_k \\leqslant ${n}.$<br>
    On cherche à montrer qu'alors, la propriété $\\mathcal{P}_{k+1}$ est vraie, c'est-à-dire que $${i} \\leqslant u_{k+2}\\leqslant u_{k+1} \\leqslant ${n}.$<br>
    D'après  l'hypothèse de récurrence : <br>`;F+=`
 $  ${i} \\leqslant u_{k+1}\\leqslant u_k \\leqslant ${n}$<br>
 Par croissance de la fonction $f$ sur ${o}, on en déduit que : <br>
$f(${i}) \\leqslant f(u_{k+1})\\leqslant f(u_k) \\leqslant f(${n}) $<br>
 or $f(${i})= \\dfrac{${r}\\times ${s(i)}${l($)}}{${e} \\times ${i}${l(t)}}=${h.texFractionSimplifiee}$ 
 et $f(${n})=\\dfrac{${r}\\times ${s(n)}${l($)}}{${e} \\times ${n}${l(t)}}=${g.texFractionSimplifiee}$, 
   donc : <br>
   $${h.texFractionSimplifiee} \\leqslant f(u_{k+1})\\leqslant f(u_k) \\leqslant ${g.texFractionSimplifiee}$<br>
   Comme pour tout entier naturel $n$, $f(u_n)=u_{n+1}$, <br>
   $  ${h.texFractionSimplifiee} \\leqslant u_{k+2} \\leqslant u_{k+1}\\leqslant ${g.texFractionSimplifiee}\\\\$<br>
   
   Ce qui implique que : <br>
  
    $${i} \\leqslant ${h.texFractionSimplifiee} \\leqslant u_{k+2} \\leqslant ${g.texFractionSimplifiee}\\leqslant ${n} $<br>
    et donc : <br>
  $      ${i} \\leqslant  u_{k+2}\\leqslant u_{k+1} \\leqslant ${n} $.
       <br>
       Ainsi, la propriété $\\mathcal{P}_{k+1}$ est vraie.<br>
       L'hérédité de la propriété est démontrée pour tout entier naturel $n$.<br>
        ${k("Conclusion :","blue")} <br>
        La propriété $\\mathcal{P}_n$ est initialisée au rang $n-0$ et héréditaire pour tout entier naturel $n$.<br>
        Par le principe de récurrence, on en déduit qu'elle est vraie pour tout entier naturel $n$. <br>
        Pour tout entier naturel $n$, $${i} \\leqslant u_n \\leqslant ${n}.$<br>`;const K=`Comme pour tout entier naturel $n$, $${i} \\leqslant u_n \\leqslant ${n}$, on en déduit que le suite $(u_n)$ est bornée. <br>
      D'autre part, pour tout entier naturel $n$,  $u_{n+1} \\leqslant u_n $, on en déduit que la suite $(u_n)$ est décroissante.<br>
      La suite $(u_n)$ est donc décroissante et minorée. D'après le théorème de convergence des suites monotones, elle converge donc vers un réel $\\ell$.<br>`,N=`
      La suite $(u_n)$ converge vers un réel $l\\in $ ${o}. <br>
      Pour tout entier naturel $n$,  $u_{n+1} = f\\left(u_n\\right).$<br>
      $f$ étant dérivable sur l'intervalle ${o}, elle est continue sur ${o}.<br>
      D'après le théorème du point fixe, la limite $\\ell$ vérifie l'égalité $f(\\ell)=\\ell$.<br>
     La seule solution de cette équation dans ${o} est $l=${m}$, d'aprèsla question 1.b.<br>
     La suite $(u_n)$ converge donc vers $${m}$.<br>`,G=u({style:"alpha",items:[T,c]}),H=u({style:"alpha",items:[B,F]}),Q=u({style:"alpha",items:[K,N]});this.reponse=u({style:"nombres",items:[G,H,Q]}),this.correction=this.reponse,this.canEnonce=this.question,this.canReponseACompleter=""}}export{ot as dateDeModifImportante,$t as dateDePublication,pt as default,at as interactifReady,ut as refs,lt as titre,st as uuid};
//# sourceMappingURL=TSA4-03-Dss6S6af.js.map
