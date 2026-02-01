var I=Object.defineProperty;var z=(u,i,t)=>i in u?I(u,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[i]=t;var P=(u,i,t)=>z(u,typeof i!="symbol"?i+"":i,t);import{c as S}from"./CodageSegment-CxyIX_Oo.js";import{p as h}from"./PointAbstrait-Cz1GEocE.js";import{p as w,a as G}from"./polygones-BR_6nVP4.js";import{s as K}from"./segmentsVecteurs-Bz-aNFOx.js";import{t as L}from"./textes-3SpigYLc.js";import{h as B}from"./transformations-CvkJBE7u.js";import{t as g}from"./style-Bj5ld-NO.js";import{E as H,Y as J,a as Y,s as W,K as M,P as A,aL as X,n as R,o as Z,r as a,a1 as p,x as f,p as T,m as C,B as s,aC as O,y as D,v as _}from"./index-BB3ZcMz7.js";import{b as y}from"./Personne-CcYLH3w1.js";import{m as k}from"./mathalea2d-CCccAZwe.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./vendors/earcut-jJVragJp.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./pattern-C89A9uFw.js";import"./vendors/roughjs-CycZv-lV.js";import"./droites-CG5i26jo.js";import"./Vide2d-lYMmc9eB.js";import"./vendors/decimal.js-BceHFVC1.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-fVupTN-r.js";import"./json/refToUuidCH-BX1ZhSY0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-eCsKGSUT.js";import"./json/referentiel2022FR-noHHLeEt.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const zt="Mettre en équation un problème et le résoudre",Gt=!0,Kt="mathLive",Ht=!0,Jt="AMCHybride",Yt="15/02/2022",Wt="06/04/2023",Xt="22412",Zt={"fr-fr":["3L13-3","BP2RES14"],"fr-ch":["11FA6-6"]};function ee(){const u=h(6,1.5),i=h(0,0),t=h(0,3),n=w(u,t,i),e=S("//","black",u,t,u,i);return k({xmin:-1,xmax:7,ymin:-1,ymax:4,pixelsParCm:20,scale:.8,zoom:1},n,e)}function te(){const u=h(3,1.5),i=h(6,0),t=h(0,0),n=w(u,t,i),e=S("//","black",u,t,u,i);return k({xmin:-1,xmax:7,ymin:-1,ymax:2.5,pixelsParCm:20,scale:.8,zoom:1},n,e)}function V(u,i,t,n){const e=h(1.5,0,"O"),r=h(4,6,"B"),o=h(0,5,"A"),$=B(r,e,.4,"D"),b=B(o,e,.4,"C"),m=G(e,b,o,r,$),l=K(b,$),c=L(`${n}`,.5,1),d=L(`${i}`,0,3),x=L(`${t}`,2,6),v=L(`${u}`,1.5,2.5);return k({xmin:-1,xmax:5,ymin:-1,ymax:7,pixelsParCm:20,scale:.8,zoom:1},m[0],m[1],c,d,x,v,l)}function ne(u){const i=a(5,15),t=a(5,12),n=a(15,30),e=n+(t+i)*2+i*3,o={equation:`x\\times 3+(${t}+x)\\times 2+${n}=${e}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
 Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}x\\times 3 + (${t}+x)\\times 2 + ${n} &= 3x + 2x +2\\times${t} + ${n}\\\\
  &=5x + ${2*t} + ${n}\\\\
  &=5x + ${2*t+n}
  \\end{aligned}$.<br>
 Ainsi, l'équation devient : $5x + ${2*t+n} = ${e}$.<br>
 Soustrayons $${2*t+n}$ des deux membres : $5x = ${e} - ${2*t+n} = ${e-(2*t+n)}$.<br>
 Divisons les deux membres par 5 : $x = \\dfrac{${e-(2*t+n)}}{5} = ${i}$.<br>`};let $=`Une équipe de basket a marqué $${e}$ points lors d'un match. Au cours de ce match, elle a marqué $${n}$ points sur lancers francs.<br>`;$+=`L'équipe a marqué $${t}$ paniers à deux points de plus que de paniers à trois points.<br>Combien a-t-elle marqué de paniers à trois points ?`;let b=`Posons $x$ le nombre de paniers à trois points.<br>Le nombre de paniers à deux points est donc : $${t}+x$.<br>`;b+="Le score de l'équipe fournit donc l'équation :<br>";const m=`L'équipe a donc marqué $${f(i)}$ paniers à trois points.<br>`,l="",c=`${p("Vérification :","black")}<br> $\\begin{aligned}3\\times ${i}+(${i}+${t})\\times 2 + ${n}&=${3*i} + ${i+t}\\times 2+${n}\\\\
  &= ${3*i+n} + ${(i+t)*2}\\\\
  &= ${e}\\end{aligned}$<br>`;return{enonce:$,intro:b,conclusion:m,figure:l,verification:c,uniteOptions:["","",""],x:i,resolution:o}}function re(u){const i=a(17,27),t=a(5,12),n=a(15,30),e=n+(i-t)*3+i*2,o={equation:`x\\times 2+(x-${t})\\times 3+${n}=${e}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
    Commençons par développer et réduire le membre de gauche :<br>
    $\\begin{aligned}x\\times 2 + (x - ${t})\\times 3 + ${n} &= 2x + 3x - 3\\times${t} + ${n}\\\\
    &=5x - ${3*t} + ${n}\\\\
    &=5x + ${n-3*t}
    \\end{aligned}$.<br>
    Ainsi, l'équation devient : $5x + ${n-3*t} = ${e}$.<br>
    Soustrayons $${n-3*t}$ des deux membres : $5x = ${e} - ${n-3*t} = ${e-(n-3*t)}$.<br>
    Divisons les deux membres par 5 : $x = \\dfrac{${e-(n-3*t)}}{5} = ${i}$.<br>`};let $=`Une équipe de basket a marqué $${e}$ points lors d'un match. Au cours de ce match, elle a marqué $${n}$ points sur lancers francs.<br>`;$+=`L'équipe a marqué $${t}$ paniers à trois points de moins que de paniers à deux points.<br>Combien a-t-elle marqué de paniers à deux points ?`;let b=`Posons $x$ le nombre de paniers à deux points.<br>Le nombre de paniers à trois points est donc : $x-${t}$.<br>`;b+="Le score de l'équipe fournit donc l'équation: <br>";const m=`L'équipe a donc marqué $${f(i)}$ paniers à deux points.<br>`,l="",c=["","",""],d=`${p("Vérification :","black")}<br> $\\begin{aligned}2\\times ${i} + ( ${i} - ${t})\\times 3 + ${n}&=${2*i} + ${i-t} \\times 3 + ${n} \\\\
  &= ${2*i+n} + ${(i-t)*3}\\\\
  &= ${e}\\end{aligned}$<br>`;return{enonce:$,intro:b,conclusion:m,figure:l,uniteOptions:c,verification:d,x:i,resolution:o}}function ie(u){return Q(!0)}function se(u){return Q(!1)}function Q(u,i){let t,n,e;const r=y(2),o=T(["fraises","pêches","poires","pommes","mangues","prunes","citrons"]);do t=a(2,5)+(u?0:a(0,4)/5),n=a(2,5)+(u?0:a(0,1)/5),e=n*t;while(e>=100||e<=5||e%10===0);const $=e>50?100:e>20?50:e>10?20:10,m={equation:`${s(n,2)}\\times x+${s($-e,2)}=${$}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par soustraire $${s($-e,2)}$ des deux membres :<br>
  $\\begin{aligned}${s(n,2)}\\times x + ${s($-e,2)} - ${s($-e,2)} &= ${$} - ${s($-e,2)}\\\\
  ${s(n,2)}\\times x &= ${s(e,2)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${s(n,2)}$ :<br>
  $x = \\dfrac{${s(e,2)}}{${s(n,2)}} = ${s(t)}$.<br>`};let l=`${r[0]} a acheté $${s(n)}$ kg de ${o} avec un billet de $${$}$ €. Le marchand lui a rendu $${g($-e)}$ €.<br>`;l+=`Quel est le prix d'un kilogramme de ${o} ?`;const c=`Posons $x$ le prix d'un kilogramme de ${o}.<br>L'énoncé se traduit par l'équation suivante :<br>`,d=`<br>Le prix d'un kilogramme de ${o} est donc de $${f(s(t,2,!0))}$ €.`,x="",v=`${p("Vérification :","black")}<br> $\\begin{aligned}${s(n,2)}\\times ${s(t)} + ${s($-e,2)} &= ${s(e,2)} + ${s($-e,2)}\\\\
  &= ${$}\\\\
  \\end{aligned}$<br>`;return{enonce:l,intro:c,conclusion:d,figure:x,verification:v,uniteOptions:["","","€"],x:t,resolution:m}}function oe(u){return E(!0)}function $e(u){return E(!1)}function E(u,i){const t=["triangle","quadrilatère","pentagone","hexagone"],n=a(2,4)+(u?0:a(0,45)/5),e=a(2,5)+(u?0:a(0,45)/5),r=a(2,5),o=r*n+e,b={equation:`${r}x+${s(e,1)}=${s(o,1)}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par soustraire $${s(e,1)}$ des deux membres :<br>
  $\\begin{aligned}${r}x + ${s(e,1)} - ${s(e,1)} &= ${s(o,1)} - ${s(e,1)}\\\\
  ${r}x &= ${s(o-e,1)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${r}$ :<br>
  $x = \\dfrac{${s(o-e,1)}}{${r}} = ${s(n)}$.<br>`};let m=`Un ${t[r-2]} possède un côté de longueur $${s(e)}\\text{ cm}$ et $${r}$ autres côtés de longueur égale.<br>Son périmètre est $${s(o)}\\text{ cm}$.<br>`;m+="Quelle est la longueur"+(A.isAmc?", en cm,":"")+" des côtés de même longueur ?";let l="Posons $x$ la longueur des côtés de même longueur.<br>";l+=`Un ${t[r-2]} possède $${r+1}$ côtés, donc celui-ci possède $${r}$ côtés de longueur $x$.<br>`,l+="L'énoncé se traduit par l'équation suivante :<br>";const c=`<br>Les côtés de même longueur mesurent donc $${f(s(n))}\\text{ cm}$.`,d="",x=`${p("Vérification :","black")}<br> $\\begin{aligned}${r} \\times ${s(n)} + ${s(e,1)} &= ${s(r*n,1)} + ${s(e,1)}\\\\
  &= ${s(o,1)}\\\\
  \\end{aligned}$<br>`,v=[" unites[Longueurs]",new O(n,"cm"),""];return{enonce:m,intro:l,conclusion:c,figure:d,verification:x,uniteOptions:v,x:n,resolution:b}}function ae(u){return j(1)}function ue(u){return j(2)}function j(u,i){let t,n,e,r;if(u===1)do t=a(2,15),n=a(1,10),e=a(2,15),r=a(1,10);while((e*r-t*n)*(t-e)<=0||Math.abs(e*r-t*n)%Math.abs(t-e)!==0);else do t=a(2,15),n=a(1,10),e=a(2,15),r=a(1,10);while((e*r-t*n)*(t-e)>=0||Math.abs(e*r-t*n)%Math.abs(t-e)!==0);const o=Math.round((e*r-t*n)/(t-e)),$=y(2),m={equation:`(x+${n})\\times ${t}=(x+${r})\\times ${e}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire les deux membres :<br>
  $\\begin{aligned}(x + ${n})\\times ${t} &= ${t}x + ${t*n}\\\\
  (x + ${r})\\times ${e} &= ${e}x + ${e*r}\\\\
  \\end{aligned}$<br>
  Ainsi, l'équation devient : $${t}x + ${t*n} = ${e}x + ${e*r}$.<br>  
  Soustrayons $${e}x$ des deux membres et soustrayons $${t*n}$ des deux membres :<br>
  $\\begin{aligned}${t}x - ${e}x &= ${e*r} - ${t*n}\\\\
  ${t-e}\\times x &= ${e*r-t*n}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${t-e}$ :<br>
  $x = \\dfrac{${e*r-t*n}}{${t-e}} = ${o}$.<br>`};let l=`${$[0]} et ${$[1]} choisissent un même nombre.<br> ${$[0]} lui ajoute $${n}$ puis multiplie le résultat par $${t}$ alors que `;l+=`${$[1]} lui ajoute $${r}$ puis multiplie le résultat par $${e}$.<br>`,l+=`${$[0]} et ${$[1]} obtiennent le même résultat.<br>`,l+=`Quel nombre commun ont choisi ${$[0]} et ${$[1]} ?`;let c="Posons $x$ le nombre choisi au départ.<br>";c+=`Le programme de calcul effectué par ${$[0]} se traduit par : $(x+${n})\\times ${t}$.<br>`,c+=`Le programme de calcul effectué par ${$[1]} se traduit par : $(x+${r})\\times ${e}$.<br>`,c+="L'égalité des résultats se traduit par l'équation suivante :<br>";const d=`<br>${$[0]} et ${$[1]} ont donc choisi au départ le nombre $${f(o)}$.`,x="",v=`${p("Vérification :","black")}<br> $(${o} + ${n})\\times ${t} = ${o+n}\\times ${t} = ${t*o+t*n}$<br> 
  $(${o} + ${r})\\times ${e} = ${o+r}\\times ${e} = ${e*o+e*r}$<br>`;return{enonce:l,intro:c,conclusion:d,figure:x,verification:v,uniteOptions:["","",""],x:o,resolution:m}}function le(u){return N(1)}function ce(u){return N(2)}function N(u,i){let t,n,e,r;if(u===1)do t=a(2,15),n=a(1,10),e=a(2,15),r=a(1,10);while((r-t*n)*(t-e)<=0||Math.abs(r-t*n)%Math.abs(t-e)!==0);else do t=a(2,15),n=a(1,10),e=a(2,15),r=a(1,10);while((r-t*n)*(t-e)>=0||Math.abs(r-t*n)%Math.abs(t-e)!==0);const o=Math.round((r-t*n)/(t-e)),$=y(2),m={equation:`(x+${n})\\times${t}=${e}x+${r}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}(x + ${n})\\times ${t} &= ${t}x + ${t*n}\\\\
  \\end{aligned}$.<br>
  Ainsi, l'équation devient : $${t}x + ${t*n} = ${e}x + ${r}$.<br>  
  Soustrayons $${e}x$ des deux membres et soustrayons $${t*n}$ des deux membres :<br>
  $\\begin{aligned}${t}x - ${e}x &= ${r} - ${t*n}\\\\
  ${D(t-e)}${Math.abs(t-e)===1?"":"\\times "}x &= ${r-t*n}\\\\
  \\end{aligned}$.<br>
  ${t-e!==1?`Divisons les deux membres par $${t-e}$ :<br>
  $x = \\dfrac{${r-t*n}}{${t-e}} = ${o}$.<br>`:""}`};let l=`${$[0]} et ${$[1]} choisissent un même nombre.<br> ${$[0]} lui ajoute $${n}$ puis multiplie le résultat par $${t}$ alors que `;l+=`${$[1]} le multiplie par $${e}$ puis ajoute au résultat $${r}$.<br>`,l+=`${$[0]} et ${$[1]} obtiennent le même résultat.<br>`,l+=`Quel nombre commun ont choisi ${$[0]} et ${$[1]} ?`;let c="Posons $x$ le nombre choisi au départ.<br>";c+=`Le programme de calcul effectué par ${$[0]} se traduit par : $(x+${n})\\times ${t}$.<br>`,c+=`Le programme de calcul effectué par ${$[1]} se traduit par : $${e}x + ${r}$.<br>`,c+="L'égalité des résultats se traduit par l'équation suivante :<br>";const d=`<br>${$[0]} et ${$[1]} ont donc choisi au départ le nombre $${f(o)}$.`,x="",v=`${p("Vérification :","black")}<br> $(${o} + ${n})\\times ${t} = ${o+n}\\times ${t} = ${t*o+t*n}$<br> 
  $${e} \\times ${_(o)} + ${r} = ${e*o+r}$<br>`;return{enonce:l,intro:c,conclusion:d,figure:x,verification:v,uniteOptions:["","",""],x:o,resolution:m}}function me(u){return U(!0)}function de(u){return U(!1)}function U(u,i){const t=["ciné-club","club de fitness","club de ski"];let n,e,r,o;do n=a(0,2),e=u?a(5,8):a(50,80)/10,r=a(4,10)*5,o=e-(u?a(1,3):a(2,6)*.5);while(r/(e-o)>=30||r/(e-o)<=10||r*2%((e-o)*2)!==0);const $=Math.ceil(r/(e-o)),m={equation:`x\\times${e}>=${r}+x\\times${s(o,1)}`,texteCorr:`${p("Résolvons cette inéquation :","black")}<br>
  Commençons par soustraire $${s(o,1)}x$ des deux membres :<br>
  $\\begin{aligned}${s(e,1)}x - ${s(o,1)}x &= ${r}\\\\
  ${Math.abs(e-o)!==1?`${s(e-o,1)} x &= ${r}\\\\`:`${D(e-o)}x &= ${r}\\\\`}
  \\end{aligned}$.<br>
  ${D(e-o)!==""?`Divisons les deux membres par $${s(e-o,1)}$ :<br>
  $x \\geq \\dfrac{${r}}{${s(e-o,1)}} = ${s(r/(e-o),2)}$.<br>`:""}
      ${r/(e-o)%1!==0?`Comme $x$ représente un nombre de séances, il doit être un entier. Il faut donc arrondir $${s(r/(e-o),2)}$ à l'entier supérieur.<br>`:""}
  Ainsi, le tarif B devient plus avantageux à partir de $${f($)}$ séances.<br>`};let l=`Le ${t[n]} d'un village propose deux tarifs à ses pratiquants.<br>`;l+=`Le tarif A propose de payer $${g(e)}$ € à chaque séance.<br>`,l+=`Le tarif B propose de payer un abonnement annuel de $${g(r)}$ € puis de payer $${g(o)}$ € par séance.<br>`,l+="Pour quel nombre de séances le tarif B devient-il plus avantageux que le tarif A ?";let c="Posons $x$ le nombre de séances.<br>";c+=`Le prix à payer avec le tarif A est : $x\\times ${g(e)}$.<br>`,c+=`Le prix à payer avec le tarif B est : $${g(r)}+x\\times ${g(o)}$.<br>`,c+="Pour que le tarif B soit plus avantageux, $x$ doit vérifier l'inéquation suivante:<br>";const d=`<br>C'est à partir de $${f($)}$ séances que le tarif B devient plus avantageux que le tarif A (pour $${$}$ séances, les deux tarifs sont équivalents).`,x="",v=p("Vérification pour ","black")+`$${f(`x = ${$}`,"black")}$`+p(" : ","black")+`<br>Prix avec le tarif A : $${g(e)} \\times ${$} = ${g(e*$)}$<br>
  Prix avec le tarif B : $${g(r)} + ${g(o)} \\times ${$} = ${g(r+o*$)}$<br>`+p("Vérification pour ","black")+`$${f(`x=${$+1}`,"black")}$`+p(" : ","black")+`.<br>Prix avec le tarif A : $${g(e)} \\times ${$+1} = ${g(e*($+1))}$<br>
  Prix avec le tarif B : $${g(r)} + ${g(o)} \\times ${$+1} = ${g(r+o*($+1))}$.<br>
  Ainsi, pour $x=${$}$ séances, les deux tarifs sont équivalents et pour $x=${$+1}$ séances, le tarif B est plus avantageux.<br>`;return{enonce:l,intro:c,conclusion:d,figure:x,verification:v,uniteOptions:["","",""],x:$,resolution:m}}function be(u){return F(!0)}function pe(u){return F(!1)}function F(u,i){let t,n,e,r,o;do t=a(200,300)*10,n=u?a(10,20):a(100,200)/10,e=u?a(5,15):a(50,150)/10,o=a(1e3,t-500),r=n*o+(t-o)*e;while(n<=e);const b={equation:`x\\times${s(n,2,!0)}+(${t}-x)\\times${s(e,2,!0)}=${s(r,2,!0)}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}x\\times ${s(n,1)} + (${t} - x)\\times ${s(e,1)} &= ${s(n,1)}x + ${t} \\times ${s(e,1)} - ${s(e,1)}x\\\\
  &= ${s(n-e,1)} x + ${s(t*e,1)}\\\\
  \\end{aligned}$.<br>
  Ainsi, l'équation devient : $${s(n-e,1)} x + ${s(t*e,1)} = ${s(r,1)}$.<br>
  Soustrayons $${s(t*e,1)}$ des deux membres :<br>
  $\\begin{aligned}${s(n-e,1)} x &= ${s(r,1)} - ${s(t*e,1)}\\\\
  ${s(n-e,1)} x &=${s(r-t*e,1)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${s(n-e,1)}$ :<br>
  $x = \\dfrac{${s(r-t*e,1)}}{${s(n-e,1)}} = ${f(s(o))}$.<br>`};let m=`Dans une salle de spectacle de $${s(t)}$ places, le prix d'entrée pour un adulte est $${g(n)}$ € et, pour un enfant, il est de $${g(e)}$ €.<br>`;m+=`Le spectacle de ce soir s'est déroulé devant une salle pleine et la recette est de $${g(r)}$ €.<br>`,m+="Combien d'adultes y avait-il dans la salle ?";let l="Posons $x$ le nombre de places adultes vendues.<br>";l+=`Comme les $${s(t)}$ places ont été vendues, le nombre de places enfants est : $${t}-x$.<br>`,l+="Le calcul de la recette donne l'équation suivante.<br>";const c=`<br>Il y a donc eu $${f(s(o))}$ adultes au spectacle.`,d="",x=`${p("Vérification :","black")}<br> $\\begin{aligned}${s(o,1)}\\times ${s(n,1)} + (${s(t,1)} - ${s(o,1)})\\times ${s(e,1)} &= ${s(n*o,2)} + ${s(t-o,2)}\\times ${s(e,2)}\\\\
  &= ${s(n*o,2)}+ ${s(e*(t-o),2)}\\\\
  &= ${s(r,1)}\\\\
  \\end{aligned}$<br>`;return{enonce:m,intro:l,conclusion:c,figure:d,verification:x,uniteOptions:["","",""],x:o,resolution:b}}function xe(u){let i,t,n,e;do i=a(50,100),n=(1-2*a(0,2))*a(10,30),t=i+n,e=2*i+t;while(t<=0||2*i<=t);let r=`Un triangle isocèle a pour périmètre $${e}\\text{ mm}$. `,o="",$="",b="",m,l;n>0?r+=`Sa base est plus longue de $${n}\\text{ mm}$ que chacun des côtés égaux.`:r+=`Sa base est plus courte de $${-n}\\text{ mm}$ que chacun des côtés égaux.`,T([!0,!1])?(r+="<br>Quelle est la mesure de sa base"+(A.isAmc?", en $\\text{mm}$":"")+" ? (La figure n'est pas en vraie grandeur.)",o=`Posons $x$ la longueur de sa base. La longueur des côtés égaux est : $x${C(-n)}$.<br>`,o+="Le calcul du périmètre donne l'équation suivante :<br>",b=`2(x${C(-n)})+x=${e}`,$=`<br>La base de ce triangle isocèle mesure donc $${f(t)}\\text{ mm}$.`,m=t):(r+="<br>Quelle est la mesure de ses côtés égaux ? (la figure n'est pas en vraie grandeur)",o=`Posons $x$ la longueur d'un des côtés égaux. La longueur de la base est : $x${C(n)}$.<br>`,o+="Le calcul du périmètre donne l'équation suivante :<br>",b=`2x+x${C(n)}=${e}`,$=`<br>Les deux côtés égaux de ce triangle isocèle mesurent donc $${f(i)}\\text{ mm}$.`,m=i);const c={equation:b,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}2x ${C(-2*n)} + x &= ${e}\\\\
  3x ${C(-2*n)} &= ${e}\\\\
  \\end{aligned}$.<br>
  ${n<0?`Soustrayons $${-2*n}$ des deux membres :<br>
  $\\begin{aligned}3x &= ${e} ${C(2*n)}\\\\
  3x &= ${e+2*n}\\\\
  \\end{aligned}$.<br>`:`Ajoutons $${2*n}$ aux deux membres :<br>
  $\\begin{aligned}3x &= ${e} + ${2*n}\\\\
  3x &= ${e+2*n}\\\\
  \\end{aligned}$<br>`}
  Divisons les deux membres par $3$ :<br>
  $x = \\dfrac{${e+2*n}}{3} = ${f(m)}$.<br>`};n>0?l=te():l=ee();const d=`${p("Vérification :","black")}<br> $\\begin{aligned}2 \\times ${s(i,1)} + ${s(t,1)} &= ${s(2*i,1)} + ${s(t,1)}\\\\
  &= ${s(e,1)}\\\\
  \\end{aligned}$<br>`,x=[" unites[Longueurs]",new O(m,"mm"),""];return{enonce:r,intro:o,conclusion:$,figure:l,verification:d,uniteOptions:x,x:m,resolution:c}}function ge(u){let i,t,n,e;do i=a(5,40),t=a(5,40),n=a(41,100),e=i*t/(n-i);while(e<=0||i*t%Math.abs(n-i)!==0);const r=Math.round(e),$={equation:`(x+${t})\\times${i}=${n}x`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire le membre de gauche :<br>
  $\\begin{aligned}(x + ${t})\\times ${i} &= ${i}x + ${i*t}\\\\
  \\end{aligned}$<br>
  Ainsi, l'équation devient : $${i}x + ${i*t} = ${n}x$.<br>  
  Soustrayons $${i}x$ des deux membres :<br>
  $\\begin{aligned}${i*t} &= ${n}x - ${i}x\\\\
  ${i*t} &= ${n-i}x\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${n-i}$ :<br>
  $x = \\dfrac{${i*t}}{${n-i}} = ${f(r)}$.<br>`},b=V(i,t,n,"");let m="Soit la figure ci-dessous qui n'est pas en vraie grandeur où $[CD]$ et $[AB]$ sont parallèles.";m+=` $AB=${n}\\text{ mm}$, $AC=${t}\\text{ mm}$ et $CD=${i}\\text{ mm}$.<br> Déterminer la longueur $OC$${A.isAmc?", en $\\text{mm}$.":"."}`;let l="Dans cette configuration de Thalès, on a l'égalité suivante : $\\dfrac{OC}{OA}=\\dfrac{CD}{AB}$.<br>";l+="Cette égalité est équivalente à l'égalité des produits en croix : $CD\\times OA=OC\\times AB$.<br>",l+="En remplaçant les longueurs par les données de l'énoncé et en posant $x=OC$, on obtient l'équation suivante :<br>";const c=`donc $OA=${f(r)}\\text{ mm}$.<br>`,d=`${p("Vérification :","black")}<br>
  D'une part : $CD\\times OA = ${s(i,1)} \\times ${s(t+r,1)} = ${s(i*t+i*r,1)}$<br>
  D'autre part : $OC\\times AB = ${s(r,1)} \\times ${s(n,1)} = ${s(n*r,1)}$<br>
  Les produits en croix sont bien égaux pour $x=${r}$<br>
  `,x=[" unites[Longueurs]",new O(r,"mm"),""];return{enonce:m,intro:l,conclusion:c,figure:b,verification:d,uniteOptions:x,x:r,resolution:$}}function fe(u){let i,t,n,e;do i=a(5,40),e=a(5,40),t=a(41,100),n=i*e/(t-i);while(n<=0||i*e%Math.abs(t-i)!==0);const r=Math.round(n),$={equation:`(x+${r})\\times${i}=${r}\\times${t}`,texteCorr:`${p("Résolvons cette équation :","black")}<br>
  Commençons par développer et réduire le membre de droite :<br>
  $\\begin{aligned}(x + ${r})\\times ${i} &= ${i}x + ${i*r}\\\\
  \\end{aligned}$.<br>
  Ainsi, l'équation devient : $${i}x + ${i*r} = ${r} \\times ${t}$.<br>  
  Soustrayons $${i*r}$ des deux membres :<br>
  $\\begin{aligned}${i}x &= ${r} \\times ${t} - ${i*r}\\\\
  ${i}x &= ${r*(t-i)}\\\\
  \\end{aligned}$.<br>
  Divisons les deux membres par $${i}$ :<br>
  $x = \\dfrac{${r*(t-i)}}{${i}} = ${f(e)}$.<br>`},b=V(i,"",t,r);let m="Soit la figure ci-dessous qui n'est pas en vraie grandeur où $[CD]$ et $[AB]$ sont parallèles.";m+=` $AB=${t}\\text{ mm}$, $OC=${r}\\text{ mm}$ et $CD=${i}\\text{ mm}$.<br> Déterminer la longueur $AC$${A.isAmc?", en $\\text{mm}$.":"."}`;let l="Dans cette configuration de Thalès, on a l'égalité suivante : $\\dfrac{OA}{OC}=\\dfrac{AB}{CD}$.<br>";l+="Cette égalité est équivalente à l'égalité des produits en croix : $CD\\times OA = OC\\times AB$.<br>",l+="En remplaçant les longueurs par les données de l'énoncé et en posant $x=OC$, on obtient l'équation suivante :<br>";const c=`donc $CA=${f(e)}\\text{ mm}$.<br>`,d=`${p("Vérification :","black")}<br>
  D'une part : $CD\\times OA = ${s(i,1)} \\times ${s(e+r,1)} = ${s(i*e+i*r,1)}$.<br>
  D'autre part : $OC\\times AB = ${s(r,1)} \\times ${s(t,1)} = ${s(r*t,1)}$.<br>
  Les produits en croix sont bien égaux pour $x=${e}$.<br>
  `,x=[" unites[Longueurs]",new O(e,"mm"),""];return{enonce:m,intro:l,conclusion:c,figure:b,verification:d,uniteOptions:x,x:e,resolution:$}}const ve=[ne,re,[ie,se],[oe,$e],[ae,ue],[le,ce],[me,de],[be,pe],xe,ge,fe];class _t extends H{constructor(){super();P(this,"niveau",3);this.nbQuestions=2,this.spacingCorr=1.5,this.besoinFormulaireTexte=["Choix des problèmes",`Nombres séparés par des tirets :
1 : basket
2 : basket2
3 : achats
4 : polygone
5 : programmes (produit vs produit,
 ... solution entière positive)
6 : programmes (produit vs produit,
 ... solution entière négative)
7 : tarifs
8 : spectacle
9 : isocèle
10 : Thalès
11 : Thalès2
14 : Mélange`],this.sup="12",this.besoinFormulaire2CaseACocher=["Uniquement des nombres entiers"],this.sup2=!1,this.correctionDetaillee=!0}nouvelleVersion(){const t=J({saisie:this.sup,min:1,max:11,melange:12,defaut:1,shuffle:!0,nbQuestions:this.nbQuestions}).map(Number);for(let n=0,e=0;n<this.nbQuestions&&e<50;){let r=ve[t[n]-1];Array.isArray(r)&&(r=r[this.sup2?0:1]);let{enonce:o,intro:$,conclusion:b,figure:m,verification:l,uniteOptions:c,x:d,resolution:x}=r(this.correctionDetaillee);m=m??"",c=c??["","",""];const v=o+m+Y(this,n,c[0]===" unites[Longueurs]"?M.longueur:M.clavierDeBase,{texteApres:W(2)+c[2]});let q=$;q+=`$${x.equation}$<br>`,q+=x.texteCorr,q+=l,q+=b,A.isAmc&&(this.autoCorrection[n]={enonce:v+"\\\\",enonceAvant:!1,propositions:[{type:"AMCOpen",propositions:[{texte:"",enonce:v+"<br>Mettre le problème en équation ci-dessous et la résoudre.",statut:3,pointilles:!0}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"Réponse au problème : ",valeur:[d],param:{digits:Math.max(X(d),2),signe:!0}}}]}]}),this.questionJamaisPosee(n,d,x.texteCorr)&&(this.listeQuestions[n]=v,this.listeCorrections[n]=q,c[0]===""?R(this,n,{reponse:{value:d}}):R(this,n,{reponse:{value:c[1],options:{unite:!0}}}),n++),e++}Z(this)}}export{Ht as amcReady,Jt as amcType,Wt as dateDeModifImportante,Yt as dateDePublication,_t as default,Gt as interactifReady,Kt as interactifType,Zt as refs,zt as titre,Xt as uuid};
//# sourceMappingURL=3L13-3-PLaKLBnS.js.map
