import{D as n}from"./vendors/decimal.js-BceHFVC1.js";import{t as i}from"./style-Bj5ld-NO.js";import{A as k,K as y,p as l,r as q,B as t,x as p}from"./index-BB3ZcMz7.js";import{p as w,a as x}from"./Personne-CcYLH3w1.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-fVupTN-r.js";import"./json/refToUuidCH-BX1ZhSY0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-eCsKGSUT.js";import"./json/referentiel2022FR-noHHLeEt.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Ne='Résoudre un problème avec "de plus", "de moins"',De=!0,Me="mathLive",Oe=!0,Pe="AMCNum",Ke="27/07/2022",Be="95dd2",Fe={"fr-fr":["can6C35","6N2A-flash6"],"fr-ch":[]};class Le extends k{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte=y.clavierNumbers}nouvelleVersion(){let e,s,u,r,o,$,a,m,c,g,f,d,h,b;switch(l([1,1,1,2,3,3,3])){case 1:for(c=l(["a","b","c","d"]),$=l([!0,!1]),r=x(),o=x();o===r;)o=w();e=new n(q(81,119,[80,90,100,110])).div(10),s=new n(l([15,25,35,45,55])).div(10),u=new n(s).div(100),c==="a"?(a=new n(e).add(s),m=new n(e).sub(s),this.reponse=$?a:m,this.question=`${r} et ${o} sont allées acheter un déjeuner dans une sandwicherie.<br>
                ${r} a payé $${i(e)}$ € pour son déjeuner. ${o} a payé le sien $${i(s)}$ € ${$?"de plus":" de moins "}.<br>
                
                Combien ${o} a-t-elle payé son déjeuner ? `,this.correction=`${o} a payé son déjeuner $${i(s)}$ € ${$?"de plus":" de moins "} que celui de ${r}.<br>
        Elle l'a donc payé  (${$?`$${i(e)}+${i(s)}$`:`$${i(e)}-${i(s)}$`}) €, soit ${$?`$${p(i(a))}$`:`$${p(i(m))}$`} €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ €"):c==="b"?(m=new n(e).add(s),a=new n(e).sub(s),this.reponse=$?a:m,this.question=`${r} et ${o} sont allées acheter un déjeuner dans une sandwicherie.<br>
                      ${r} a payé $${i(e)}$ € pour son déjeuner soit $${i(s)}$ € ${$?"de plus":" de moins "} que ${o}. <br>
                     
                      Combien ${o} a-t-elle payé son déjeuner ? `,this.correction=`${r} a payé son déjeuner $${i(s)}$ € ${$?"de plus":" de moins "} que celui de ${o}.<br>
              ${o} a donc payé son déjeuner $${i(s)}$ € ${$?"de moins":" de plus "}.  Elle l'a donc payé  (${$?`$${i(e)}-${i(s)}$`:`$${i(e)}+${i(s)}$`}) €, soit ${$?`$${p(i(a))}$`:`$${p(i(m))}$`} €.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ €"):c==="c"?(g=new n(e).add(s),f=new n(e).sub(s),m=new n(e).mul(2).add(s),a=new n(e).mul(2).sub(s),this.reponse=$?a:m,this.question=`${r} et ${o} sont allées acheter un déjeuner dans une sandwicherie.<br>
                      ${r} a payé $${i(e)}$ € pour son déjeuner soit $${i(s)}$ € ${$?"de plus":" de moins "}
                       que ${o}.<br>
                      
                      Combien ont-elles payé ensemble leur déjeuner ? `,this.correction=`${r} a payé son déjeuner $${i(s)}$ € ${$?"de plus":" de moins "}
          que celui de ${o}.<br>
              ${o} a donc payé son déjeuner $${i(s)}$ € ${$?"de moins":" de plus "}.
              Elle l'a donc payé  (${$?`$${i(e)}-${i(s)}$`:`$${i(e)}+${i(s)}$`}) €,
              soit ${$?`$${i(f)}$`:`$${i(g)}$`} €.<br>
              Ensemble, elles ont donc payé : (${$?`$${i(e)}+${i(f)}$`:`$${i(e)}+${i(g)}$`}) €,
              soit ${$?`$${i(a)}$`:`$${p(i(m))}$`} €. `,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ €"):(g=new n(e).add(s),f=new n(e).sub(s),m=new n(e).add(g),a=new n(e).add(f),this.reponse=$?m:a,this.question=`${r} et ${o} sont allées acheter un déjeuner dans une sandwicherie.<br>
          ${r} a payé $${i(e)}$ € pour son déjeuner. ${o} a payé le sien $${i(s)}$ € ${$?"de plus":" de moins "}.<br>
          
          Combien ont-elles payé ensemble leur déjeuner ? `,this.correction=`${o} a payé son déjeuner $${i(s)}$ € ${$?"de plus":" de moins "} que celui de ${r}.<br>
          Elle l'a donc payé  (${$?`$${i(e)}+${i(s)}$`:`$${i(e)}-${i(s)}$`}) €, soit ${$?`$${i(g)}$`:`$${i(f)}$`} €. <br>
              Ensemble, elles ont donc payé : (${$?`$${i(e)}+${i(g)}$`:`$${i(e)}+${i(f)}$`}) €,
              soit ${$?`$${i(m)}$`:`$${i(a)}$`} €. `,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ €"),this.interactif&&(this.optionsChampTexte={texteApres:" €"});break;case 2:for($=l([!0,!1]),r=w(),o=w();o===r;)o=w();e=new n(q(130,160)).div(100),s=q(2,15),u=new n(s).div(100),l([!0,!1])?(a=new n(e).add(u),m=new n(e).sub(u),this.reponse=$?m:a,this.question=`${r} mesure $${t(e,2,!0)}\\text{ m}$. Il mesure $${s}\\text{ cm}$ ${$?"de plus":" de moins "}
              que ${o}. <br>

              Quelle est la taille de ${o} ?`,this.correction=`${r} mesure $${s}\\text{ cm}$ ${$?"de plus":" de moins "} que ${o} donc ${o} mesure $${s}\\text{ cm}$ ${$?"de moins":" de plus "} que ${r}.<br>
              Il mesure donc  (${$?`$${t(e,2,!0)}-${t(u,2,!0)}$`:`$${t(e,2,!0)}+${t(u,2,!0)}$`}) $\\text{m}$, soit  ${$?`$${t(m,2,!0)}$`:`$${p(t(a,2,!0))}$`} $\\text{m}$. `,this.canEnonce=this.question,this.canReponseACompleter="$\\dots\\text{ m}$"):(a=new n(e).add(u),m=new n(e).sub(u),this.reponse=$?a:m,this.question=`${r} mesure $${t(e,2,!0)}\\text{ m}$. ${o} mesure $${s}\\text{ cm}$ ${$?"de plus":" de moins "}
                    que ${r}. <br>
                    Quelle est la taille de ${o} ?`,this.correction=`${o} mesure $${s}\\text{ cm}$ ${$?"de plus":" de moins "} que ${r} donc ${o} mesure (${$?`$${t(e,2,!0)}+${t(u,2,!0)}$`:`$${t(e,2,!0)}-${t(u,2,!0)}$`}) $\\text{m}$, soit  ${$?`$${t(a,2,!0)}$`:`$${p(t(m,2,!0))}$`} $\\text{m}$. `,this.canEnonce=this.question,this.canReponseACompleter="$\\dots\\text{ m}$"),this.interactif&&(this.optionsChampTexte={texteApres:"$\\text{ m}$"});break;case 3:for(c=l(["a","b","c","d"]),$=l([!0,!1]),d=l([!0,!1]),r=w(),o=w();o===r;)o=w();e=new n(q(1,5)*10+q(1,10)).div(10),s=q(1,9)*100,u=new n(s).div(1e3),c==="a"?(a=new n(e).add(u),m=new n(e).sub(u),this.reponse=$?m:a,this.question=`Chez le primeur, ${r} a acheté  $${t(e,1)}$ kg de ${d?"fruits":" légumes "}.<br>
            Il en a acheté $${s}$ g ${$?"de plus":" de moins "} que ${o}.<br>

            Quelle masse de ${d?"fruits":" légumes "} a acheté ${o} ?`,this.correction=`${r} a acheté $${s}$ g de ${d?"fruits":" légumes "}  ${$?"de plus":" de moins "} que ${o}, donc ${o} en a acheté $${s}$ g ${$?"de moins":" de plus "} que ${r}.<br>
            Or $${s}$ g $=${t(u,1)}$ kg. <br>
            ${o} a donc acheté $(${$?`${t(e,1)}-${t(u,1)}`:`${t(e,1)}+${t(u,1)}`})$ kg
            soit $${$?`${p(t(m,1))}`:`${p(t(a,1))}`}$ kg de ${d?"fruits":" légumes "}.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ kg"):c==="b"?(a=new n(e).add(u),m=new n(e).sub(u),this.reponse=$?a:m,this.question=`Chez le primeur, ${r} a acheté  $${t(e,1)}$ kg de ${d?"fruits":" légumes "}.<br>
          ${o} en a acheté $${s}$ g ${$?"de plus":" de moins "}.<br>

            Quelle masse de ${d?"fruits":" légumes "} a acheté ${o} ?`,this.correction=`$${s}$ g $=${t(u,1)}$ kg. <br>
          ${o} a acheté $${t(u,1)}$ kg de ${d?"fruits":" légumes "}  ${$?"de plus":" de moins "} que ${r},
          donc ${o} en a acheté  $(${$?`${t(e,1)}+${t(u,1)}`:`${t(e,1)}-${t(u,1)}`})$ kg
            soit $${$?`${p(t(a,1))}`:`${p(t(m,1))}`}$ kg de ${d?"fruits":" légumes "}.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ kg"):c==="c"?(h=new n(e).add(u),b=new n(e).sub(u),a=new n(h).add(e),m=new n(b).add(e),this.reponse=$?a:m,this.question=`Chez le primeur, ${r} a acheté  $${t(e,1)}$ kg de ${d?"fruits":" légumes "}.<br>
          ${o} en a acheté $${s}$ g ${$?"de plus":" de moins "}.<br>

            Quelle masse de ${d?"fruits":" légumes "} ont-ils acheté ensemble ?`,this.correction=`$${s}$ g $=${t(u,1)}$ kg. <br>
          ${o} a acheté $${t(u,1)}$ kg de ${d?"fruits":" légumes "}  ${$?"de plus":" de moins "} que ${r},
          donc ${o} en a acheté  $(${$?`${t(e,1)}+${t(u,1)}`:`${t(e,1)}-${t(u,1)}`})$ kg
            soit $${$?`${t(h,1)}`:`${t(b,1)}`}$ kg de ${d?"fruits":" légumes "}.<br>
            Ensemble, ils ont donc acheté :  $(${$?`${t(e,1)}+${t(h,1)}`:`${t(e,1)}+${t(b,1)}`})$ kg
            soit $${$?`${p(t(a,1))}`:`${p(t(m,1))}`}$ kg de ${d?"fruits":" légumes "}.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ kg"):(h=new n(e).add(u),b=new n(e).sub(u),a=new n(h).add(e),m=new n(b).add(e),this.reponse=$?m:a,this.question=`Chez le primeur, ${r} a acheté  $${t(e,1)}$ kg de ${d?"fruits":" légumes "}.<br>
          Il en a acheté $${s}$ g ${$?"de plus":" de moins "} que ${o}.<br>

          Quelle masse de ${d?"fruits":" légumes "} ont-ils acheté ensemble ?`,this.correction=`${r} a acheté $${s}$ g  ${d?"fruits":" légumes "} de ${$?"de plus":" de moins "} que ${o}, donc ${o} en a acheté $${s}$ g ${$?"de moins":" de plus "} que ${r}.<br>
            Or $${s}$ g $=${t(u,1)}$ kg. <br>
            ${o} a donc acheté $(${$?`${t(e,1)}-${t(u,1)}`:`${t(e,1)}+${t(u,1)}`})$ kg
            soit $${$?`${t(b,1)}`:`${t(h,1)}`}$ kg de ${d?"fruits":" légumes "}.<br>
            Ensemble, ils ont donc acheté :  $(${$?`${t(e,1)}+${t(b,1)}`:`${t(e,1)}+${t(h,1)}`})$ kg
            soit $${$?`${p(t(m,1))}`:`${p(t(a,1))}`}$ kg de ${d?"fruits":" légumes "}.`,this.canEnonce=this.question,this.canReponseACompleter="$\\dots$ kg"),this.interactif&&(this.optionsChampTexte={texteApres:" kg"});break}}}export{Oe as amcReady,Pe as amcType,Ke as dateDePublication,Le as default,De as interactifReady,Me as interactifType,Fe as refs,Ne as titre,Be as uuid};
//# sourceMappingURL=can6C35-B54Izg4S.js.map
