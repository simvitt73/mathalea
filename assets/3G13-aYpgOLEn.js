import{f as Z}from"./fixeBordures-BSnKuTIe.js";import{p as Oe}from"./PointAbstrait-Cz1GEocE.js";import{c as he}from"./segmentsVecteurs-DhSnlc3S.js";import{c as Pe}from"./textes-BId1S-Qs.js";import{t as Le}from"./texteSurSegment-CFnnCFne.js";import{h as Ie,r as Qe}from"./transformations-KFxwrOCd.js";import{c as Ge}from"./aleatoires-DgKjmCd-.js";import{E as Je,P as De,Y as We,F as O,p as ae,r as g,R as Xe,B as t,$ as K,u as Ue,x as D,a as E,n as N,o as Ze}from"./index-CMKaCP9B.js";import{m as _}from"./mathalea2d-hmD9nuW5.js";import{b as $e}from"./Arc-DVcwIrGW.js";import{t as P}from"./TexteSurArc-TdWgeEn3.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./vendors/roughjs-CycZv-lV.js";import"./placeLatexSurSegment-tpwl1248.js";import"./droites-D3-ZzJ69.js";import"./Vide2d-lYMmc9eB.js";import"./polygones-CHA8469v.js";import"./vendors/earcut-jJVragJp.js";import"./pattern-D34qyw5S.js";import"./dateEtHoraires-tmSef6Lv.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./radToDeg-DiSwSl7m.js";const Bi="Effectuer des calculs liés aux homothéties",Fi="28/11/2021",Si="15/04/2024",Ci=!0,ji="mathLive",yi="6f383",qi={"fr-fr":["3G13"],"fr-ch":["11ES3-5"]};function L(de,z,Y,H="black",y=.5,n=!1){return z.x<Y.x?Le(de,z,Y,H,y,n):Le(de,Y,z,H,y,n)}class wi extends Je{constructor(){super(),this.nbQuestions=4,this.nbCols=0,this.nbColsCorr=0,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,De.isHtml?this.spacing=1.5:this.spacing=0,De.isHtml?this.spacingCorr=1.5:this.spacingCorr=0,this.sup=12,this.sup2=3,this.sup3=1,this.sup4=!0,this.besoinFormulaireTexte=["Type de questions",["Nombres séparés par des tirets  :","1 : Calculer le rapport","2 : Calculer une longueur image","3 : Calculer une longueur antécédent","4 : Calculer une longueur image (deux étapes)","5 : Calculer une longueur antécédent (deux étapes)","6 : Calculer une aire image","7 : Calculer une aire antécédent","8 : Calculer le rapport à partir des aires","9 : Calculer le rapport connaissant OA et AA'","10 : Encadrer le rapport k","11 : Encadrer le rapport k connaissant OA et AA'","12 : Mélange"].join(`
`)],this.besoinFormulaire2Numerique=["Signe du rapport",3,`1 : Positif
2 : Négatif
3 : Mélange`],this.besoinFormulaire3Numerique=["Choix des valeurs",3,`1 : k est décimal
2 : k est fractionnaire
3 : k est une fractionnaire et les mesures sont entières`],this.besoinFormulaire4CaseACocher=["Figure dans l'énoncé (Cas 1 à 5 et 9 à 11)",!1]}nouvelleVersion(){const z=["rapport","image","antécédent","image2etapes","antecendent2etapes","aireImage","aireAntécédent","aireRapport","rapport2","encadrerk","encadrerk2"],Y=We({saisie:this.sup,min:1,max:11,melange:12,defaut:12,nbQuestions:this.nbQuestions,listeOfCase:z}).map(String),H=+(this.sup3>1),y=+(this.sup3===3);for(let n=0,se,h,l,$="",fe=0;n<this.nbQuestions&&fe<50;){const ee=Ge(5,["P","Q","U","V","W","X","Y","Z"].join("")),r=ee[0],a=ee[1],i=ee[2],C=ee[3],S=ee[4],Me=new O(this.sup2===1?1:this.sup2===2?-1:ae([1,-1]),1);let s=new O(1,1);do s=new O(H?g(1,9):ae([g(15,40),g(1,9)]),H?g(1,9):10),s=s.produitFraction(Me),s=s.simplifie();while(s.valeurDecimale===1);const m=s.valeurAbsolue(),v=m.valeurDecimale>1,u=s.valeurDecimale>0,be=y?new O(g(1,19),1):new O(g(11,99),1);let c=v?be.entierDivise(10):be;c=c.multiplieEntier(10**y*m.d**H);const te=s.produitFraction(c);let q=new O(g(10,99,[Math.round(be.valeurDecimale)]),10);q=q.multiplieEntier(10**y*m.d**H);const I=s.produitFraction(q);let j=te.differenceFraction(c).simplifie();j=j.valeurAbsolue();let A=new O(ae([g(1,4)*10+5+ae([0,5]),g(1,9)]),1);A=A.entierDivise(10),A=A.simplifie();const x=y===1?new O(g(10,99),1):new O(g(100,999),10),f=A.produitFractions(A,x).valeurDecimale,ie=Xe(f,2),G=v?">":"<",Q=v?"un agrandissement":"une réduction",U=v?u?"k > 1":"k < -1":u?"0 < k < 1":"-1 < k < 0",V=u?"positif":"négatif",p=u?"":"-",oe=u?"":"l'opposé de ",ne=u?"le":"l'opposé du ",J=this.sup4?"":`de rapport ${V} et `,ge=u?"\\in":"\\notin",M=this.sup4?"":"Pour vous aider, illustrer cette situation par une figure (sans forcément respecter l'échelle).<br>",k=new O(1,1).diviseFraction(m),Te=te.entierDivise(k.d).simplifie().valeurAbsolue().texFSD,Re=I.entierDivise(k.denIrred).valeurAbsolue().valeurDecimale;let W=new O(Math.max(c.valeurAbsolue().valeurDecimale,te.valeurAbsolue().valeurDecimale,j.valeurAbsolue().valeurDecimale),1);W=new O(10,1).diviseFraction(W),W=W.multiplieEntier(2);let le=te.multiplieEntier(1),xe=c,ke=!0;m.valeurDecimale<.3?le=c.produitFraction(new O(3,10).multiplieEntier((-1)**+(s.valeurDecimale<0))):m.valeurDecimale<1&&m.valeurDecimale>.7?le=c.produitFraction(new O(7,10).multiplieEntier((-1)**+(s.valeurDecimale<0))):m.valeurDecimale>1&&m.valeurDecimale<1.3?le=c.produitFraction(new O(13,10).multiplieEntier((-1)**+(s.valeurDecimale<0))):m.valeurDecimale>4?xe=c.multiplieEntier(2):ke=!1;const w=!(ke&&this.sup4)||["image2etapes","antecendent2etapes","aireImage","aireAntécédent","aireRapport"].includes(Y[n])?"":"La figure ci-dessous n'est pas à l'échelle.<br>",He=this.sup4?"La figure ci-dessous n'est pas à l'échelle.<br>":"";let e={O:Oe(0,0,`${i}`,"below"),A:Oe(xe.produitFraction(W).valeurDecimale,0,`${r}`,"below"),hA:Oe(le.produitFraction(W).valeurDecimale,0,`${a}`,"below")};const Be=ae([g(20,50),g(130,160)]);e=Object.assign({},e,{B:Ie(Qe(e.A,e.O,Be),e.O,1.2,`${C}`),hB:Ie(Qe(e.hA,e.O,Be),e.O,1.2,`${S}`,u?"above":"below")});const d=te.valeurAbsolue().valeurDecimale,Ve=y&&!m.estEntiere?`=${t(d)}\\times ${k.texFSD}`+(k.d!==1?`=\\dfrac{${t(d)}}{${k.d}}\\times ${k.n}=${Te}\\times ${k.n}`:""):"",Fe=I.valeurAbsolue().valeurDecimale,Ye=y&&!m.estEntiere?`=${t(Fe)}\\times ${k.texFSD}`+(k.d!==1?`=\\dfrac{${t(Fe)}}{${k.d}}\\times ${k.n}=${Re}\\times ${k.n}`:""):"",re=(m.d===1||this.sup3===1)&&u?t(A.valeurDecimale):`\\left(${p}${this.sup3===1?t(A.valeurDecimale):A.texFSD}\\right)`,Se=u?v?`${i}${r} + ${r}${a} = ${t(c.valeurAbsolue().valeurDecimale,2)} + ${t(j.valeurAbsolue().valeurDecimale,2)} `:`${i}${r} - ${r}${a} = ${t(c.valeurAbsolue().valeurDecimale,2)} - ${t(j.valeurAbsolue().valeurDecimale,2)}`:`${a}${r} - ${i}${r} = ${t(j.valeurAbsolue().valeurDecimale,2)} - ${t(c.valeurAbsolue().valeurDecimale,2)}`;e=Object.assign({},e,{segmentOA:he(e.O,e.A),segmentOhA:he(e.O,e.hA),segmentOB:he(e.O,e.B),segmentOhB:he(e.O,e.hB)}),e=Object.assign({},e,{arcOA:v||!u?e.A:$e(e.O,e.A,60,!1),arcOhA:!v||!u?e.hA:$e(e.O,e.hA,60,!1),arcOB:v||!u?e.B:$e(e.B,e.O,60,!1),arcOhB:!v||!u?e.hB:$e(e.hB,e.O,60,!1),arcAhA:u?e.A:$e(e.hA,e.A,60,!1),legendeOA:v||!u?L(`$${t(c.valeurDecimale)}\\text{ cm}$`,e.A,e.O,"black",.6):P(`$${t(c.valeurDecimale)}\\text{ cm}$`,e.O,e.A,90,"black",.3),legendeOhA:!v||!u?L(`$${t(d)}\\text{ cm}$`,e.hA,e.O,"black",.6):P(`$${t(d)}\\text{ cm}$`,e.O,e.hA,60,"black",.3),legendeOB:v||!u?L(`$${t(q.valeurDecimale)}\\text{ cm}$`,e.B,e.O,"black",.6):P(`$${t(q.valeurDecimale)}\\text{ cm}$`,e.B,e.O,60,"black",.3),legendeOhB:!v||!u?L(`$${t(I)}\\text{ cm}$`,e.hB,e.O,"black",.6):P(`$${t(I)}\\text{ cm}$`,e.hB,e.O,60,"black",.3),legendeAhA:u?L(`$${t(j.valeurDecimale)}\\text{ cm}$`,e.hA,e.A,"black",.6):P(`$${t(j.valeurDecimale)}\\text{ cm}$`,e.hA,e.A,60,"black",.3)}),e.arcOA.pointilles=5,e.arcOhA.pointilles=5,e.arcOB.pointilles=5,e.arcOhB.pointilles=5,e.arcAhA.pointilles=5,e=Object.assign({},e,{legendeOAi:v||!u?L("$?$",e.O,e.A,"black",.6):P("$?$",e.O,e.A,60,"black",.3),legendeOhAi:!v||!u?L("$?$",e.O,e.hA,"black",.6):P("$?$",e.hA,e.O,60,"black",.3),legendeOBi:v||!u?L("$?$",e.O,e.B,"black",.6):P("$?$",e.B,e.O,60,"black",.3),legendeOhBi:!v||!u?L("$?$",e.O,e.hB,"black",.6):P("$?$",e.hB,e.O,60,"black",.3)});let o=[];const X=De.isHtml?1:.4,T=Pe(e.O,e.A,e.hA);o=[e.segmentOA,e.segmentOhA,e.legendeOA,e.legendeOhA],e.arcOA.typeObjet!=="point"&&o.push(e.arcOA),e.arcOhA.typeObjet!=="point"&&o.push(e.arcOhA);const Ce=_(Object.assign({},Z([...o,...T]),{style:"inline",scale:X}),o,T),R={enonce:this.sup4?Ce+"<br>":"",solution:this.sup4?"":Ce+"<br>"};o=[e.segmentOA,e.segmentOhA,e.legendeOA,e.legendeOhAi],e.arcOA.typeObjet!=="point"&&o.push(e.arcOA),e.arcOhA.typeObjet!=="point"&&o.push(e.arcOhA);const je=_(Object.assign({},Z([...o,...T]),{style:"inline",scale:X}),o,T),Ae={enonce:this.sup4?je+"<br>":"",solution:this.sup4?"":je+"<br>"};o=[e.segmentOA,e.segmentOhA,e.legendeOhA,e.legendeOAi],e.A.typeObjet!=="point"&&o.push(e.A),e.O.typeObjet!=="point"&&o.push(e.O),e.hA.typeObjet!=="point"&&o.push(e.hA),e.arcOA.typeObjet!=="point"&&o.push(e.arcOA),e.arcOhA.typeObjet!=="point"&&o.push(e.arcOhA);const ye=_(Object.assign({},Z([...o,...T]),{style:"inline",scale:X}),o,T),ve={enonce:this.sup4?ye+"<br>":"",solution:this.sup4?"":ye+"<br>"},ce=Pe(e.O,e.A,e.hA,e.B,e.hB);o=[e.segmentOA,e.segmentOhA,e.segmentOB,e.segmentOhB,e.legendeOA,e.legendeOhA,e.legendeOB,e.legendeOhBi],e.A.typeObjet!=="point"&&o.push(e.A),e.O.typeObjet!=="point"&&o.push(e.O),e.hA.typeObjet!=="point"&&o.push(e.hA),e.B.typeObjet!=="point"&&o.push(e.B),e.hB.typeObjet!=="point"&&o.push(e.hB),e.arcOA.typeObjet!=="point"&&o.push(e.arcOA),e.arcOB.typeObjet!=="point"&&o.push(e.arcOB),e.arcOhA.typeObjet!=="point"&&o.push(e.arcOhA),e.arcOhB.typeObjet!=="point"&&o.push(e.arcOhB);const qe=_(Object.assign({},Z([...o,...ce]),{style:"inline",scale:X}),o,ce),ue={enonce:this.sup4?qe+"<br>":"",solution:this.sup4?"":qe+"<br>"};o=[e.segmentOA,e.segmentOhA,e.segmentOB,e.segmentOhB,e.legendeOBi,e.legendeOhB,e.legendeOA,e.legendeOhA],e.arcOA.typeObjet!=="point"&&o.push(e.arcOA),e.arcOhA.typeObjet!=="point"&&o.push(e.arcOhA),e.arcOB.typeObjet!=="point"&&o.push(e.arcOB),e.arcOhB.typeObjet!=="point"&&o.push(e.arcOhB);const we=_(Object.assign({},Z([...o,...ce]),{style:"inline",scale:X}),o,ce),Ee={enonce:this.sup4?we+"<br>":"",solution:this.sup4?"":we+"<br>"};o=[e.segmentOA,e.segmentOhA,e.legendeOA,e.legendeOhA,e.legendeAhA],e.arcOA.typeObjet!=="point"&&o.push(e.arcOA),e.arcOhA.typeObjet!=="point"&&o.push(e.arcOhA),e.arcAhA.typeObjet!=="point"&&o.push(e.arcAhA);const Ne=_(Object.assign({},Z([...o,...T]),{style:"inline",scale:X}),o,T),pe={enonce:this.sup4?"<br>"+Ne+"<br>":"",solution:this.sup4?"":Ne+"<br>"};let b,B,F,me;switch(Y[n]){case"rapport":b=[`${i}${a}=${t(d)}\\text{ cm}`,`${i}${r}=${t(c.valeurDecimale)}\\text{ cm}`],h=K([0,1]),B=b[h[0]],F=b[h[1]],l=`$${a}$ est l'image de $${r}$
          par une homothétie ${J}
          de centre $${i}$ tel que $${B}$ et $${F}$.
          <br>
          ${M} ${w}
          Calculer le rapport $k$ de cette homothétie`,l+=E(this,n,"clavierDeBaseAvecFraction  ",{texteAvant:" :"}),l+=".<br>"+R.enonce,N(this,n,{reponse:{value:s.texFSD}}),this.correctionDetaillee?($=`$[${i}${a}]$ est l'image de $[${i}${r}]$ par cette homothétie
            et $${i} ${a} ${G} ${i} ${r}$,
            donc c'est ${Q} et on a : $${U}$.<br>
            ${R.solution}
            `,$+=`Le rapport de cette homothétie est ${ne} quotient
            de la longueur d'un segment "à l'arrivée"
            par sa longueur "au départ".
            <br>
            Soit `):$=R.solution,$+=`$k=${p}\\dfrac{${i}${a}}{${i}${r}}=${p}\\dfrac{${t(d)}}{${t(c.valeurDecimale)}}=${D(this.sup3===1?t(s.valeurDecimale,2):s.texFSD)}$.`;break;case"image":l=`$${a}$ est l'image de $${r}$ par une homothétie
          de centre $${i}$ et de rapport $k=${this.sup3===1?t(s.valeurDecimale):s.texFSD}$
          tel que $ {${i}${r}=${c.valeurDecimale}\\text{ cm}}$.
          <br>
          ${M} ${w} 
          Calculer $${i}${a}$`,l+=E(this,n,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:"$ \\text{ cm}$"}),l+=".<br>"+Ae.enonce,N(this,n,{reponse:{value:d}}),this.correctionDetaillee?($=`$[${i}${a}]$ est l'image de $[${i}${r}]$ par cette homothétie et $${U}$, donc $[${i}${a}]$ est ${Q} de $[${i}${r}]$.
            <br>${Ae.solution}`,$+=`Une homothétie de rapport ${V} est
            une transformation qui multiplie
            toutes les longueurs par ${oe} son rapport.
            <br>
            Soit $${i}${a}=${p}k \\times ${i}${r}$.
            <br>
            Donc `):$=Ae.solution,$+=`$${i}${a}= ${this.sup3===1?t(m.valeurDecimale):m.texFSD} \\times ${t(c.valeurDecimale)} =  ${D(t(d))}\\text{ cm}$.`;break;case"antécédent":l=`$${a}$ est l'image de $${r}$ par une
          homothétie de centre $${i}$ et de rapport
          $k=${this.sup3===1?t(s.valeurDecimale):s.texFSD}$ tel que $ {${i}${a}=${t(d)}\\text{ cm}}$.
          <br>
          ${M} ${w} 
          Calculer $${i}${r}$`,l+=E(this,n,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:"$ \\text{ cm}$"}),l+=".<br>"+ve.enonce,N(this,n,{reponse:{value:c.texFSD}}),this.correctionDetaillee?$=`$[${i}${a}]$ est l'image de $[${i}${r}]$ par cette homothétie et 
            $${U}$, donc $[${i}${a}]$ est ${Q} de $[${i}${r}]$.
            <br>${ve.solution}
            Une homothétie de rapport ${V} est
            une transformation qui multiplie
            toutes les longueurs par ${oe} son rapport.
            <br>
            Soit $${i}${a}=${p}k \\times  ${i}${r}$.
            <br>
            Donc `:$=ve.solution,$+=`$${i}${r}=\\dfrac{${i}${a}}{${p}k}=\\dfrac{${t(d)}}{${this.sup3===1?t(m.valeurDecimale):m.texFSD}} ${Ve} = ${D(t(c.valeurDecimale))}\\text{ cm}$.`;break;case"image2etapes":b=[`${i}${C}=${t(q.valeurDecimale)}\\text{ cm}`,`${i}${a}=${t(d)}\\text{ cm}`,`${i}${r}=${t(c.valeurDecimale)}\\text{ cm}`],h=K([0,1,2]),B=b[h[0]],F=b[h[1]],me=b[h[2]],l=`$${a}$ et $${S}$ sont les images respectives
          de $${r}$ et $${C}$ par une homothétie
          ${J} de centre $${i}$ tel que
          $ {${B}}$, $ {${F}}$ et $ {${me}}$.
          <br>
          ${M} ${w} 
          Calculer $${i}${S}$`,l+=E(this,n,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:"$ \\text{ cm}$"}),l+=".<br>"+ue.enonce,N(this,n,{reponse:{value:I}}),this.correctionDetaillee?($=`$[${i}${a}]$ est l'image de $[${i}${r}]$
            et $${i} ${a} ${G} ${i} ${r}$
            donc c'est ${Q} et on a : $${U}$.
            <br>${ue.solution}`,$+=`Le rapport de cette homothétie est
            ${ne} quotient de la longueur d'un segment
            "à l'arrivée" par sa longueur "au départ".
            <br>
            Soit $k=${p}\\dfrac{${i}${a}}{${i}${r}}=${p}\\dfrac{${t(d)}}{${t(c.valeurDecimale)}}=${this.sup3===1?t(s.valeurDecimale):s.texFSD}$.
            <br>
            $[${i}${S}]$ est l'image de $[${i}${C}]$.
            <br>
            Or, une homothétie de rapport ${V}
            est une transformation qui multiplie
            toutes les longueurs par ${oe} son rapport.
            <br>
            Soit $${i}${S}= ${p}k \\times ${i}${C}$.
            <br>
            Donc `):($=ue.solution,$+=`Soit $k=${p}\\dfrac{${i}${a}}{${i}${r}}=${p}\\dfrac{${t(d)}}{${t(c.valeurDecimale)}}=${this.sup3===1?t(s.valeurDecimale):s.texFSD}$.
            <br><br>`),$+=`$${i}${S}= ${this.sup3===1?t(m.valeurDecimale):m.texFSD} \\times ${t(q.valeurDecimale)} = ${D(t(I))}\\text{ cm}$.`;break;case"antecendent2etapes":b=[`${i}${S}=${t(I)}\\text{ cm}`,`${i}${a}=${t(d)}\\text{ cm}`,`${i}${r}=${t(c.valeurDecimale)}\\text{ cm}`],h=K([0,1,2]),B=b[h[0]],F=b[h[1]],me=b[h[2]],l=`$${a}$ et $${S}$ sont les images respectives
          de $${r}$ et $${C}$ par une homothétie ${J}
          de centre $${i}$ tel que
          $ {${B}}$, $ {${F}}$ et $ {${me}}$.
          <br>
          ${M} ${He} 
          Calculer $${i}${C}$`,l+=E(this,n,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:"$ \\text{ cm}$"}),l+=".<br>"+Ee.enonce,N(this,n,{reponse:{value:q.texFSD}}),this.correctionDetaillee?($=`$[${i}${a}]$ est l'image de $[${i}${r}]$
            et $${i} ${a} ${G} ${i} ${r}$
            donc c'est ${Q} et on a : $${U}$.
            <br>${Ee.solution}`,$+=`Le rapport de cette homothétie est ${ne} quotient
            de la longueur d'un segment "à l'arrivée" par sa longueur "au départ".
            <br>
            Soit $k=${p}\\dfrac{${i}${a}}{${i}${r}}=${p}\\dfrac{${t(d)}}{${t(c.valeurDecimale)}}=${this.sup3===1?t(s.valeurDecimale):s.texFSD}$.
            <br>
            $[${i}${S}]$ est l'image de $[${i}${C}]$.
            <br>
            Or, une homothétie de rapport ${V} est
            une transformation qui multiplie
            toutes les longueurs par ${oe} son rapport.
            <br>
            Soit $${i}${S}=${p}k \\times ${i}${C}$.
            <br>
            Donc `):($=ue.solution,$+=`Soit $k=${p}\\dfrac{${i}${a}}{${i}${r}}=${p}\\dfrac{${t(d)}}{${t(c.valeurDecimale)}}=${this.sup3===1?t(s.valeurDecimale):s.texFSD}$.
            <br><br>`),$+=`$${i}${C}=\\dfrac{${i}${S}}{${p}k}=\\dfrac{${t(I)}}{${this.sup3===1?t(m.valeurDecimale):m.texFSD}} ${Ye} = ${D(t(q.valeurDecimale))}\\text{ cm}$.`;break;case"aireImage":se=f===ie?"":"environ",l=`Une figure a pour aire $ {${t(x.valeurDecimale)}\\text{ cm}^2}$.<br>
          Calculer l'aire de son image par une homothétie de rapport $${p}${this.sup3===1?t(A.valeurDecimale):A.texFSD}$`,this.interactif?l+=E(this,n,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:" $\\text{ cm}^2$ (arrondi au $\\text{ mm}^2$ si besoin)"}):l+=" (arrondir au $\\text{mm}^2$ près si besoin)",N(this,n,{reponse:{value:ie}}),$=`$${re}^2 \\times ${t(x.valeurDecimale)}`,$+=se==="environ"?` = ${t(f)} \\approx ${D(t(ie))}`:` = ${D(t(f))}`,$+="\\text{ cm}^2$",this.correctionDetaillee&&($=`Une homothétie est une transformation qui multiplie toutes les aires par le carré de son rapport.
            <br>
            $${re}^2 \\times ${t(x.valeurDecimale)} = ${t(f)}`,$+=se==="environ"?`\\approx ${t(ie)}`:"",$+=`$<br>
            Donc l'aire de l'image de cette figure est ${se} $ {${D(t(ie))}\\text{ cm}^2}$.`);break;case"aireAntécédent":l=`L'image d'une figure par une homothétie de rapport $${p}${this.sup3===1?t(A.valeurDecimale):A.texFSD}$ a pour aire $ {${t(f)}\\text{ cm}^2}$.
          <br>
          Calculer l'aire de la figure de départ`,l+=E(this,n,"clavierDeBaseAvecFraction  ",{texteAvant:" :",texteApres:" $\\text{ cm}^2$"}),l+=".",N(this,n,{reponse:{value:x.texFSD}}),$=`$ {\\dfrac{${t(f)}}{${re}^2} = ${D(t(x.valeurDecimale))}\\text{ cm}^2}$`,this.correctionDetaillee&&($=`Une homothétie est une transformation qui multiplie toutes les aires par le carré de son rapport.
            <br>
            Notons $\\mathscr{A}$ l'aire de la figure de départ.
            <br>
            D'où $${re}^2 \\times \\mathscr{A} = ${t(f)}$.
            <br>
            Puis $\\mathscr{A}=\\dfrac{${t(f)}}{${re}^2}=${t(x.valeurDecimale)}$.
            <br>
            Donc l'aire de la figure de départ est $ {${D(t(x.valeurDecimale))}\\text{ cm}^2}$.`);break;case"aireRapport":A=V==="positif"?A:A.multiplieEntier(-1),l=`Une figure et son image par une homothétie de rapport ${V} ont respectivement pour aires $ {${t(x.valeurDecimale)}\\text{ cm}^2}$ et $ {${t(f)}\\text{ cm}^2}$.
          <br>
          Calculer le rapport de l'homothétie`,l+=E(this,n,"clavierDeBaseAvecFraction  ",{texteAvant:" :"}),l+=".",N(this,n,{reponse:{value:A.texFSD}}),this.correctionDetaillee&&($=`Une homothétie est une transformation qui multiplie toutes les aires par le carré de son rapport. <br>
            Notons $k$ le rapport de cette homothétie.
            On a donc $k^2 \\times ${t(x.valeurDecimale)} = ${t(f)}$,
            ou encore $k^2=\\dfrac{${t(f)}}{${t(x.valeurDecimale)}}$.
            <br>
            D'où `),$+=`$ {k=${p}\\sqrt{\\dfrac{${t(f)}}{${t(x.valeurDecimale)}}} = ${D(this.sup3===1?t(A.valeurDecimale):A.texFSD)}}$.`;break;case"rapport2":b=[`${r}${a}=${t(j.valeurDecimale)}\\text{ cm}`,`${i}${r}=${t(c.valeurDecimale)}\\text{ cm}`],h=K([0,1]),B=b[h[0]],F=b[h[1]],l=`$${a}$ est l'image de $${r}$
          par une homothétie ${J}
          de centre $${i}$ tel que $ {${B}}$ et $ {${F}}$.
          <br>
          ${M} ${w} 
          Calculer le rapport $k$ de cette homothétie`,l+=E(this,n,"clavierDeBaseAvecFraction  ",{texteAvant:" :"}),l+=".<br>"+pe.enonce,N(this,n,{reponse:{value:s.texFSD}}),this.correctionDetaillee?($=`$${i}${a} = ${Se} = ${t(d)}\\text{ cm}$
            <br>
            $[${i}${a}]$ est l'image de $[${i}${r}]$
            et $${i} ${a} ${G} ${i} ${r}$
            donc c'est ${Q} et on a : $${U}$.
            <br> ${R.solution}`,$+=`Le rapport de cette homothétie est ${ne} quotient
            de la longueur d'un segment "à l'arrivée"
            par sa longueur "au départ".
            <br>
            Soit `):$=R.solution,$+=`$k=${p}\\dfrac{${i}${a}}{${i}${r}}=${p}\\dfrac{${t(d)}}{${t(c.valeurDecimale)}}=${D(this.sup3===1?t(s.valeurDecimale):s.texFSD)}$.`;break;case"encadrerk":b=[`${i}${a}=${t(d)}\\text{ cm}`,`${i}${r}=${t(c.valeurDecimale)}\\text{ cm}`],h=K([0,1]),B=b[h[0]],F=b[h[1]],l=`$${a}$ est l'image de $${r}$
          par une homothétie ${J}
          de centre $${i}$ tel que $ {${B}}$ et $ {${F}}$.
          <br>
          ${M} ${w} 
          Sans effectuer de calculs, que peut-on dire du rapport $k$ de cette homothétie ? Choisir la bonne réponse.
          <br>
          ${w}
          ${R.enonce}`,this.autoCorrection[n]={},this.autoCorrection[n].propositions=[{texte:"$k < -1$",statut:s.valeurDecimale<-1},{texte:"$ -1 < k < -0 $",statut:s.valeurDecimale>-1&&s.valeurDecimale<0},{texte:"$0 < k < 1$",statut:s.valeurDecimale<1&&s.valeurDecimale>0},{texte:"$k > 1$",statut:s.valeurDecimale>1}],this.autoCorrection[n].options={ordered:!1},l+="<br>"+Ue(this,n).texte,this.correctionDetaillee?$=`$[${i}${a}]$ est l'image de $[${i}${r}]$
            et $${i} ${a} ${G} ${i} ${r}$
            donc c'est ${Q}.
            <br>
            De plus, $${a}${ge}[${i}${r})$.
            ${R.solution}
            <br>Donc `:$=R.solution+"<br>",$+=`$${D(U)}$`,$+=this.correctionDetaillee?".":"";break;default:b=[`${r}${a}=${t(j.valeurDecimale)}\\text{ cm}`,`${i}${r}=${t(c.valeurDecimale)}\\text{ cm}`],h=K([0,1]),B=b[h[0]],F=b[h[1]],l=`$${a}$ est l'image de $${r}$
          par une homothétie ${J}
          de centre $${i}$ tel que $ {${B}}$ et $ {${F}}$.
          <br>
          ${M} ${w} 
          Sans effectuer de calculs, que peut-on dire du rapport $k$ de cette homothétie ? Choisir la bonne réponse.
          <br>
          ${w}
          ${pe.enonce}`,this.autoCorrection[n]={},this.autoCorrection[n].propositions=[{texte:"$k < -1$",statut:s.valeurDecimale<-1},{texte:"$ -1 < k < -0 $",statut:s.valeurDecimale>-1&&s.valeurDecimale<0},{texte:"$0 < k < 1$",statut:s.valeurDecimale<1&&s.valeurDecimale>0},{texte:"$k > 1$",statut:s.valeurDecimale>1}],this.autoCorrection[n].options={ordered:!1},l+="<br>"+Ue(this,n).texte,this.correctionDetaillee?$=`$${i}${a} = ${Se} = ${t(d)}\\text{ cm}$
            <br>
            $[${i}${a}]$ est l'image de $[${i}${r}]$
            et $${i} ${a} ${G} ${i} ${r}$
            donc c'est ${Q}.
            <br>
            De plus, $${a}${ge}[${i}${r})$.
            ${pe.solution}
            <br>Donc `:$=pe.solution+"<br>",$+=`$${D(U)}$`,$+=this.correctionDetaillee?".":"";break}this.questionJamaisPosee(n,s)&&(this.listeQuestions[n]=l,this.listeCorrections[n]=$,n++),fe++}Ze(this)}}export{Si as dateDeModifImportante,Fi as dateDePublication,wi as default,Ci as interactifReady,ji as interactifType,qi as refs,Bi as titre,yi as uuid};
//# sourceMappingURL=3G13-aYpgOLEn.js.map
