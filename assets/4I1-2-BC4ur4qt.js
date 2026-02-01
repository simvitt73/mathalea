var I=Object.defineProperty;var V=(y,k,g)=>k in y?I(y,k,{enumerable:!0,configurable:!0,writable:!0,value:g}):y[k]=g;var R=(y,k,g)=>V(y,typeof k!="symbol"?k+"":k,g);import{c as L}from"./utilitairesGeometriques-rO8Jz15i.js";import{p as w}from"./PointAbstrait-Cz1GEocE.js";import{s as _}from"./segmentsVecteurs-DhSnlc3S.js";import{b as z}from"./textes-BId1S-Qs.js";import{t as J}from"./TracePoint-eOswwPl5.js";import{E as K,p as S,r as f,P as q,R as U,_ as W,bM as X,ag as Y}from"./index-CMKaCP9B.js";import{m as N}from"./mathalea2d-hmD9nuW5.js";import{c as Z,a as E,d as ee,o as H,h as l,t as s,g as a,l as re,f as oe}from"./2dLutin-DoskqgWV.js";import{s as te}from"./scratchblock-WmRmb2qv.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./vendors/roughjs-CycZv-lV.js";import"./cercle-OsCHYdE0.js";import"./pattern-D34qyw5S.js";import"./Plot-C1bTmEuU.js";import"./vendors/decimal.js-BceHFVC1.js";import"./polygonesParticuliers-BROuI4ng.js";import"./CodageAngleDroit-VRrLlM6p.js";import"./fixeBordures-BSnKuTIe.js";import"./polygones-CHA8469v.js";import"./vendors/earcut-jJVragJp.js";import"./Polyline-4vOEDh5O.js";import"./transformations-KFxwrOCd.js";import"./droites-D3-ZzJ69.js";import"./Vide2d-lYMmc9eB.js";import"./CodageSegment-B5xV8M5a.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-qEtoRB--.js";import"./json/refToUuidCH-DNJKehD0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-hGgYBJeX.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const Rr=!0,Lr="cliqueFigure",wr=!0,Nr="qcmMono",Hr="Tortue Scratch avec répétitions",Ar="29/06/2021",Br="8ded2",Gr={"fr-fr":["4I1-2"],"fr-ch":[]};class Ir extends K{constructor(){super();R(this,"indiceBonneFigure");this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.besoinFormulaireNumerique=["Type de figure",5,`1 : Polygone régulier
2 : Spirale
3 : Rosace
4 : Roue dentée
5 : Frise
6 : Au hasard`],this.sup=6,this.typeExercice="Scratch",this.interactif=!0,this.listeAvecNumerotation=!1,this.indiceBonneFigure=0}nouvelleVersion(g){this.figures=[];const T=[];this.autoCorrection[0]={};const P=["polygonesReguliers","spirales","rosaces1","roueDentee","frise1"],A=this.sup<6?P[this.sup-1]:S(P);let o,t,i,n,c;const m=S(["turnright","turnleft"]);let x,v;m==="turnright"?v="turnleft":v="turnright";const e=[],u=f(0,3),F=90,j=0,D=0;q.unitesLutinParCm=10,q.pixelsParCm=20;let Q="";for(let r=0;r<4;r++)e[r]=Z(),e[r].color=L("green"),e[r].epaisseur=3,e[r].pointilles=0,E(j,D,e[r]),ee(e[r]),H(oe(F),e[r]);switch(e[0].codeScratch=`\\begin{scratch}[print,fill,blocks,scale=0.75]
 \\blockinit{quand \\greenflag est cliqué}
 `,e[0].codeScratch+=`\\blockmove{aller à x: \\ovalnum{${j}} y: \\ovalnum{${D}}}
 `,e[0].codeScratch+=`\\blockmove{s'orienter à \\ovalnum{${F}}}
 `,e[0].codeScratch+=`\\blockpen{stylo en position d'écriture}
 `,A){case"polygonesReguliers":n=S([3,5,6,7,8]),o=U(360/n,1),t=(10-n)*10,u!==3?e[0].codeScratch+=`\\blockrepeat{répéter \\ovalnum{${n}} fois}
{
\\blockmove{avancer de \\ovalnum{${t}} pas}
`:e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${o}} degrés}
\\blockrepeat{répéter \\ovalnum{${n-1}} fois}
{
\\blockmove{avancer de \\ovalnum{${t}} pas}

`,u===0||u===3?e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${o}} degrés}
}
`:u===1?e[0].codeScratch+=`\\blockmove{tourner \\${v}{} de \\ovalnum{${o}} degrés}
}
`:o!==90?e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${180-o}} degrés}
}
`:e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${o}} degrés}
              \\blockmove{avancer de \\ovalnum{${t}} pas}

              \\blockmove{tourner \\${m}{} de \\ovalnum{${o}} degrés}
}
`,H(-90,e[2]);for(let r=0;r<n;r++)l(t,e[0]),l(t,e[1]),l(t,e[2]),r!==0&&l(t,e[3]),m==="turnright"?(s(o,e[0]),s(o,e[3]),a(o,e[1]),o!==90?s(180-o,e[2]):(s(o,e[2]),l(t,e[2]),s(o,e[2]))):(a(o,e[0]),a(o,e[3]),s(o,e[1]),o!==90?a(180-o,e[2]):(a(o,e[2]),l(t,e[2]),a(o,e[2])));break;case"rosaces1":switch(n=S([3,4,5,6,8]),c=f(3,6,5),o=f(2,4)*10,t=(10-n)*5,i=(8-c)*4,e[0].codeScratch+=`\\blockrepeat{répéter \\ovalnum{${n}} fois} 
{`,u<2&&(e[0].codeScratch+=`\\blockmove{aller à x: \\ovalnum{0} y: \\ovalnum{0}}
`),u%2===0?e[0].codeScratch+=`\\blockmove{avancer de \\ovalnum{${o}} pas}
`:u===1?e[0].codeScratch+=`\\blockmove{avancer de \\ovalnum{${o/2}} pas}
`:e[0].codeScratch+=`\\blockmove{avancer de \\ovalnum{${o+2}} pas}
`,u){case 0:e[0].codeScratch+=`\\blockmove{tourner \\turnright{} de \\ovalnum{${90-180/c}} degrés}
`;break;case 1:e[0].codeScratch+=`\\blockmove{tourner \\turnright{} de \\ovalnum{90} degrés}
`;break;case 2:e[0].codeScratch+=`\\blockmove{tourner \\turnleft{} de \\ovalnum{90} degrés}
`;break}switch(e[0].codeScratch+=`\\blockrepeat{répéter \\ovalnum{${c}} fois}
        {
          \\blockmove{avancer de \\ovalnum{${i}} pas}
          \\blockmove{tourner \\turnleft{} de \\ovalnum{${360/c}} degrés}
        }
`,u){case 0:e[0].codeScratch+=`\\blockmove{tourner \\turnleft{} de \\ovalnum{${90-180/c}} degrés}
`;break;case 1:e[0].codeScratch+=`\\blockmove{tourner \\turnleft{} de \\ovalnum{90} degrés}
`;break;case 2:e[0].codeScratch+=`\\blockmove{tourner \\turnright{} de \\ovalnum{90} degrés}
`;break;case 3:e[0].codeScratch+=`\\blockmove{tourner \\turnright{} de \\ovalnum{180} degrés}
`;break}e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${360/n}} degrés}
}
`;for(let r=0;r<n;r++){E(0,0,e[0]),E(0,0,e[1]),l(o,e[0]),l(o/2,e[1]),l(o,e[2]),l(o+2,e[3]),s(90-180/c,e[0]),s(90,e[1]),a(90,e[2]);for(let d=0;d<c;d++)l(i,e[0]),l(i,e[1]),l(i,e[2]),l(i,e[3]),a(360/c,e[0]),a(360/c,e[1]),a(360/c,e[2]),a(360/c,e[3]);a(90-180/c,e[0]),a(90,e[1]),s(90,e[2]),s(180,e[3]),m==="turnright"?(s(360/n,e[0]),s(360/n,e[1]),s(360/n,e[2]),s(360/n,e[3])):(a(360/n,e[0]),a(360/n,e[1]),a(360/n,e[2]),a(360/n,e[3]))}break;case"spirales":n=S([3,4,5,6,8]),c=f(1,4)+Math.floor((9-n)/2),o=f(1,4)*5,t=60+f(0,4)*5,i=360/n,u!==2?e[0].codeScratch+=`\\blockvariable{mettre \\selectmenu*{longueur} à \\ovalnum{${o}}}
          \\blockrepeat{répéter jusqu'à ce que \\booloperator{\\ovalvariable{longueur}>\\ovalnum{${t}}}}
          {
          \\blockmove{avancer de \\ovalvariable{longueur} pas}
`:e[0].codeScratch+=`\\blockvariable{mettre \\selectmenu*{longueur} à \\ovalnum{${t}}}
          \\blockrepeat{répéter jusqu'à ce que \\booloperator{\\ovalvariable{longueur}<\\ovalnum{${o}}}}
          {
          \\blockmove{avancer de \\ovalvariable{longueur} pas}
`,u%2===0?e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${i}} degrés}
`:u===1?m==="turnright"?e[0].codeScratch+=`\\blockmove{tourner \\turnleft{} de \\ovalnum{${i}} degrés}
`:e[0].codeScratch+=`\\blockmove{tourner \\turnright{} de \\ovalnum{${i}} degrés}
`:e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${i-10}} degrés}
`,u===2?(e[0].codeScratch+=`\\blockvariable{ajouter \\ovalnum{${-c}} à \\ovalvariable{longueur}}
`,e[0].codeScratch+=`}
`):(e[0].codeScratch+=`\\blockvariable{ajouter \\ovalnum{${c}} à \\ovalvariable{longueur}}
`,e[0].codeScratch+=`}
`);for(let r=o;r<t;r+=c)l(r,e[0]),l(r,e[1]),l(r,e[3]),m==="turnright"?(s(i,e[0]),a(i,e[1]),s(i-10,e[3])):(a(i,e[0]),s(i,e[1]),a(i-10,e[3]));for(let r=t;r>o;r-=c)l(r,e[2]),m==="turnright"?s(i,e[2]):a(i,e[2]);break;case"roueDentee":n=S([3,4,5,6,8]),o=f(1,2)*10,t=720/n,i=360/n,u<5&&(e[0].codeScratch+=`\\blockrepeat{répéter \\ovalnum{${n}} fois}
                                  {
                                  \\blockmove{avancer de \\ovalvariable{${o}} pas}
`,u<2?e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${i}} degrés}
`:e[0].codeScratch+=`\\blockmove{tourner \\${v}{} de \\ovalnum{${i}} degrés}
`,e[0].codeScratch+=`\\blockmove{avancer de \\ovalvariable{${o*2}} pas}
`,u===0?e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${t}} degrés}
`:e[0].codeScratch+=`\\blockmove{tourner \\${v}{} de \\ovalnum{${t}} degrés}
`,u<3?e[0].codeScratch+=`\\blockmove{avancer de \\ovalvariable{${o*2}} pas}
`:e[0].codeScratch+=`\\blockmove{avancer de \\ovalvariable{${o}} pas}
`,u>0?e[0].codeScratch+=`\\blockmove{tourner \\${m}{} de \\ovalnum{${t}} degrés}
`:e[0].codeScratch+=`\\blockmove{tourner \\${v}{} de \\ovalnum{${t}} degrés}
`,e[0].codeScratch+=`}
`);for(let r=0;r<n;r++)l(o,e[0]),l(o,e[1]),l(o,e[2]),l(o,e[3]),m==="turnright"?(s(i,e[0]),s(i,e[1]),a(i,e[2]),a(i,e[3])):(a(i,e[0]),a(i,e[1]),s(i,e[2]),s(i,e[3])),l(o*2,e[0]),l(o*2,e[1]),l(o*2,e[2]),l(o*2,e[3]),m==="turnright"?(s(t,e[0]),a(t,e[1]),a(t,e[2]),a(t,e[3])):(a(t,e[0]),s(t,e[1]),s(t,e[2]),s(t,e[3])),l(o*2,e[0]),l(o*2,e[1]),l(o*2,e[2]),l(o,e[3]),m==="turnright"?(a(t,e[0]),s(t,e[1]),s(t,e[2]),s(t,e[3])):(s(t,e[0]),a(t,e[1]),a(t,e[2]),a(t,e[3]));break;case"frise1":n=3,c=S([45,60,90]),c=S([45,60,90]),o=f(1,2)*5,t=f(1,3)*5,i=f(2,4)*5,x=[[`\\blockmove{avancer de \\ovalvariable{${t}} pas}
`,t],[`\\blockmove{tourner \\${m}{} de \\ovalnum{${c}} degrés}
`,m,c],[`\\blockmove{avancer de \\ovalvariable{${o}} pas}
`,o],[`\\blockmove{tourner \\${m}{} de \\ovalnum{${c}} degrés}
`,m,c],[`\\blockmove{avancer de \\ovalvariable{${o}} pas}
`,o],[`\\blockmove{tourner \\${v}{} de \\ovalnum{${c}} degrés}
`,v,c],[`\\blockmove{avancer de \\ovalvariable{${o}} pas}
`,o],[`\\blockmove{tourner \\${v}{} de \\ovalnum{${c}} degrés}
`,v,c],[`\\blockmove{avancer de \\ovalvariable{${i}} pas}
`,i],[`\\blockmove{tourner \\${v}{} de \\ovalnum{${c}} degrés}
`,v,c],[`\\blockmove{avancer de \\ovalvariable{${t}} pas}
`,t],[`\\blockmove{tourner \\${m}{} de \\ovalnum{${c}} degrés}
`,m,c]],e[0].codeScratch+=`\\blockrepeat{répéter \\ovalnum{${n}} fois}
{
`;for(let r=0;r<6;r++)e[0].codeScratch+=x[2*(u+r)%12][0],e[0].codeScratch+=x[(2*(u+r)+1)%12][0];e[0].codeScratch+=`}
`;for(let r=0;r<n;r++)for(let d=0;d<6;d++)for(let $=0;$<4;$++)l(Number(x[2*($+d)%12][1]),e[$]),x[(2*($+d)+1)%12][1]==="turnright"?s(Number(x[(2*($+d)+1)%12][2]),e[$]):a(Number(x[(2*($+d)+1)%12][2]),e[$]);break}e[0].codeScratch+=`\\blockpen{relever le stylo}
`,e[0].codeScratch+="\\end{scratch}";let p="Quelle figure est tracée par le stylo à l'exécution du programme ci-dessous ?<br>Le tracé démarre à la croix bleue.<br>";p+="S'orienter à 90° signifie s'orienter vers la droite de l'écran.<br>";let h=1,M=1;for(let r=0;r<4;r++)re(e[r]),h=Math.max(h,e[r].xMax-e[r].xMin),M=Math.max(M,e[r].yMax-e[r].yMin);h=Math.round(h+1.5),q.isHtml?p+='<table style="width: 100%"><tr><td>':p+="\\begin{minipage}[b]{.25\\textwidth}",p+=te(e[0].codeScratch),q.isHtml?(p+="</td><td>",p+="    ",p+='</td><td style="vertical-align: top; text-align: center">'):(p+="\\end{minipage} ",p+="\\hfill \\begin{minipage}[b]{.74\\textwidth}");let b=[0,1,2,3];b=W(b);for(let r=0;r<4;r++)for(let d=0;d<e[r].listeTraces.length;d++)e[r].listeTraces[d][0]-=Math.floor(e[r].xMin),e[r].listeTraces[d][2]-=Math.floor(e[r].xMin),e[r].listeTraces[d][1]-=Math.floor(e[r].yMin),e[r].listeTraces[d][3]-=Math.floor(e[r].yMin);const C=[];for(let r=0;r<4;r++)C[r]=J(w(e[r].listeTraces[0][0],e[r].listeTraces[0][1])),C[r].taille=5,C[r].color=L("blue"),C[r].epaisseur=2,r===u&&T.push(C[r]);const O=_(0,M+.5,1,M+.5);O.epaisseur=2,O.styleExtremites="|-|",T.push(e[u]);const B={xmin:-.5,ymin:-1.5,xmax:h,ymax:M+1,pixelsParCm:Math.round(400/h),scale:4/h,style:"display: inline-block"},G={xmin:-.5,ymin:-1.5,xmax:h,ymax:M+1,pixelsParCm:Math.round(400/h),scale:4/h,style:"display: inline-block"};for(let r=0;r<4;r++){const d={...B,id:`cliquefigure${r}Ex${g}Q0`};p+=N(d,e[b[r]],C[b[r]],z(`figure ${r+1}`,w((e[b[r]].xMax-e[b[r]].xMin)/2,-.8),0,"black",1)),r===1&&(p+="<br>")}q.isHtml?p+="</td></tr></table>":p+="\\end{minipage} ",this.autoCorrection[0]={enonce:p,propositions:[{texte:"figure 1",statut:!1},{texte:"figure 2",statut:!1},{texte:"figure 3",statut:!1},{texte:"figure 4",statut:!1}],options:{ordered:!0}},this.autoCorrection[0].propositions[b.indexOf(u)].statut=!0,X(this.autoCorrection[0]),this.indiceBonneFigure=b.indexOf(u),Q+=`La bonne figure est la figure ${this.indiceBonneFigure+1}`,this.interactif&&q.isHtml&&(p+=`<span id="resultatCheckEx${this.numeroExercice}Q0"></span>`),this.figures[0]=[{id:`cliquefigure0Ex${this.numeroExercice}Q0`,solution:b.indexOf(u)===0},{id:`cliquefigure1Ex${g}Q0`,solution:b.indexOf(u)===1},{id:`cliquefigure2Ex${g}Q0`,solution:b.indexOf(u)===2},{id:`cliquefigure3Ex${g}Q0`,solution:b.indexOf(u)===3}],Q+=N(G,T),this.listeQuestions.push(p),this.listeCorrections.push(Q),Y(this)}}export{wr as amcReady,Nr as amcType,Ar as dateDePublication,Ir as default,Rr as interactifReady,Lr as interactifType,Gr as refs,Hr as titre,Br as uuid};
//# sourceMappingURL=4I1-2-BC4ur4qt.js.map
