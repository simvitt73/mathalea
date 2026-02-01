var C=Object.defineProperty;var j=(p,e,t)=>e in p?C(p,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[e]=t;var A=(p,e,t)=>j(p,typeof e!="symbol"?e+"":e,t);import{W as Workspace,s as serialization,a as svgResize,u as utils,X as Xml,j as javascriptGenerator,b as setLocale,E as En,M as Msg,B as Blocks,d as defineBlocksWithJsonArray,i as inject,C as ContextMenuRegistry}from"./vendors/blockly-CF_6ufOa.js";import{E as Exercice,r as randint,P as context,be as ajouteFeedback,o as listeQuestionsToContenu}from"./index-Bl1vqpvV.js";import{r as runAStar}from"./findPath-_qdi366R.js";import"./vendors/seedrandom-Cz-2rAdY.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-q_6hD11P.js";import"./vendors/decimal.js-BceHFVC1.js";import"./vendors/katex-BISJkeK-.js";import"./vendors/apigeom-CvUqzk7F.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-B10GlhlX.js";import"./json/refToUuidCH-CKb1Gq_b.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-BM0iwKz4.js";import"./json/referentiel2022FR-DRcEqmJS.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const titre="Programmer le déplacement d'un bus",dateDePublication="15/07/2025",interactifReady=!0,interactifType="custom",uuid="f320c",refs={"fr-fr":["6I1D"],"fr-2016":["6I15"],"fr-ch":[]};class ExerciceLabyrintheChemin extends Exercice{constructor(){super();A(this,"destroyers",[]);A(this,"correctionInteractive",e=>{var l;if(e===void 0)return"";this.answers===void 0&&(this.answers={});let t="KO";const o=`${this.numeroExercice}_${e}`,r=retrieveWorkspace(`blocklyDiv${o}`);if(r){const a=exportBlocklyJSONUltraLight(r);this.answers[`blocklyDiv${o}`]=a}const n=document.querySelector(`#resultatCheckEx${this.numeroExercice}Q${e}`),i=document.querySelector(`#feedbackEx${this.numeroExercice}Q${e}`);n&&(n.innerHTML="");const s=document.getElementById(o);if(s){(l=s.querySelector("#runCode"))==null||l.click();const a=s.querySelector("#message-correct");(a==null?void 0:a.style.display)!=="none"?(t="OK",n&&(n.innerHTML="😎")):(n&&(n.innerHTML="☹️"),i&&(i.innerHTML="Le bus n'est pas arrivé à destination",i.style.display="block"))}return t});this.nbQuestions=2,this.besoinFormulaireNumerique=["Nombre de lignes du labyrinthe (entre 2 et 8 ou bien 1 si vous laissez le hasard décider)",8],this.besoinFormulaire2Numerique=["Nombre de colonnes du labyrinthe (entre 2 et 8 ou bien 1 si vous laissez le hasard décider)",8],this.sup=5,this.sup2=4}destroy(){this.destroyers.forEach(e=>e()),this.destroyers.length=0}nouvelleVersion(){this.destroyers.forEach(e=>e()),this.destroyers.length=0;for(let e=0,t=0,o,r;e<this.nbQuestions&&t<50;t++){const n=this.sup===1?randint(2,5):Math.min(Math.max(2,this.sup),5),i=this.sup===1?randint(3,5):Math.min(Math.max(3,this.sup2),5),s=randint(0,i-1),l=randint(0,i-1,[s]),a=this.generatePath(i,n,0,s,n-1,l),h=a.villeParCoord[s][0]||"Ville de départ",d=a.villeParCoord[l][n-1]||"Ville d'arrivée";o=`Retrouver les instructions pour représenter le parcours d'un bus entre ${h} et ${d}.<br>`,context.isHtml?o+=this.generateGrapheSVG(`${this.numeroExercice}_${e}`,i,n,0,s,n-1,l,a):o+=this.generateGrapheTikz(`${this.numeroExercice}_${e}`,i,n,0,s,n-1,l,a),r="Le bus part du lieu : "+a.villeParCoord[s][0]+" et arrive au lieu : "+a.villeParCoord[l][n-1]+".<br>",r+="Le bus suit le chemin suivant :<br>",r+=a.path.map(c=>`${a.villeParCoord[c[0]][c[1]]}`).join(" → ")+"<br>",r+="Voici une solution possible des instructions pour le trajet du bus :<br>",createSolutionStr(a.edges).forEach((c,y)=>{const v=c.split("-"),f=v.length>1?v[1].trim():c.trim();r+=`${y+1} - ${f}<br>`}),this.interactif&&(o+=`<div class="ml-2 py-2" id="resultatCheckEx${this.numeroExercice}Q${e}"></div>`,o+=ajouteFeedback(this,e)),this.questionJamaisPosee(e,o)&&(this.listeQuestions[e]=o,this.listeCorrections[e]=r,e++),listeQuestionsToContenu(this)}}generatePath(e,t,o,r,n,i){const s=[r,o],l=[i,n],a=["le stade","la boulangerie","la patisserie","l'école","la poste","la mairie","le fleuriste","le garagiste","la gare","la piscine","la pharmacie","l'hôpital","la banque","la librairie","le cinéma","le musée","les pompiers","le marché","le restaurant","l'hôtel","la laverie","le parking","la caserne","la station-service","le Bar"],h=(()=>{const u=new Set;return()=>{let m;do m=a[randint(0,a.length-1)];while(u.has(m));return u.add(m),m}})();function d(u,m){let[x,k]=u;const[_,L]=m,S=[[x,k]],$=_-x,B=L-k,b=[];for(let g=0;g<Math.abs($);g++)b.push([Math.sign($),0]);for(let g=0;g<Math.abs(B);g++)b.push([0,Math.sign(B)]);for(let g=b.length-1;g>0;g--){const w=randint(0,g),E=b[g];b[g]=b[w],b[w]=E}for(const[g,w]of b)x+=g,k+=w,S.push([x,k]);return S}let c;const y=runAStar(t,e,o,r,n,i);y?(y.sort((u,m)=>m.length-u.length),c=y[randint(0,y.length-1)].map(u=>[u.x,u.y])):c=d(s,l);const v=[];for(let u=0;u<c.length-1;u++){const m=c[u],x=c[u+1];v.push({from:m,to:x})}const f=[];for(let u=0;u<e;u++){f[u]=[];for(let m=0;m<t;m++)f[u][m]=h()}return{path:c,edges:v,villeParCoord:f}}generateGrapheTikz(e,t,o,r,n,i,s,l){const a=function(){const d=[];for(let c=0;c<o;c++)for(let y=0;y<t;y++)d.push(removeFirstWord(l.villeParCoord[y][c]));return d},h=l.path.map(d=>`${d[0]}/${d[1]}`).join(", ");return`
    \\begingroup
\\begin{tikzpicture}[
    >=Stealth, 
    every node/.style={
        draw, ellipse, minimum height=10mm, text width=14mm, align=center, font=\\sffamily\\footnotesize
    }
]

  % Définir variables locales pour les dimensions
  \\pgfmathsetmacro{\\rows}{${o}}
  \\pgfmathsetmacro{\\cols}{${t}}

  % Liste des villes (au moins rows × cols)
  \\def\\citylist{{${a().map(d=>`"${d}"`).join(", ")}}}

  % Chemin donné par une suite de coordonnées (x,y)
  \\def\\pathcoords{${h}}

  % Extraction du premier et dernier élément
  \\def\\firstcoord{}
  \\def\\lastcoord{}
  \\foreach \\x/\\y [count=\\i] in \\pathcoords {
    \\edef\\coord{\\x/\\y}
    \\ifnum\\i=1
      \\xdef\\firstcoord{\\coord}
    \\fi
    \\xdef\\lastcoord{\\coord}
  }
  
  % Placement des nœuds
  \\foreach \\j in {0,...,\\numexpr\\rows-1} {
    \\foreach \\i in {0,...,\\numexpr\\cols-1} {
      \\pgfmathtruncatemacro{\\index}{\\j * \\cols + \\i}
      \\pgfmathsetmacro{\\x}{\\i * 3} % horizontal spacing
      \\pgfmathsetmacro{\\y}{(\\rows - 1 - \\j) * 2} % vertical spacing
      \\edef\\coord{\\i/\\j}
      \\ifx\\coord\\firstcoord
        \\node[fill=gray!20] (C\\i\\j) at (\\x,\\y) {\\pgfmathparse{\\citylist[\\index]}\\pgfmathresult};
      \\else\\ifx\\coord\\lastcoord
        \\node[fill=gray!20] (C\\i\\j) at (\\x,\\y) {\\pgfmathparse{\\citylist[\\index]}\\pgfmathresult};
      \\else
        \\node (C\\i\\j) at (\\x,\\y) {\\pgfmathparse{\\citylist[\\index]}\\pgfmathresult};
      \\fi\\fi
    }
  }

  % Arêtes par défaut (grises)
  \\foreach \\j in {0,...,\\numexpr\\rows-1} {
    \\foreach \\i in {0,...,\\numexpr\\cols-2} {
      \\draw[->,gray] (C\\i\\j) -- (C\\the\\numexpr\\i+1\\relax\\j);
    }
  }

  \\foreach \\j in {0,...,\\numexpr\\rows-2} {
    \\foreach \\i in {0,...,\\numexpr\\cols-1} {
      \\draw[->,gray] (C\\i\\j) -- (C\\i\\the\\numexpr\\j+1\\relax);
    }
  }

  % Chemin rouge
   \\foreach \\xA/\\yA [count=\\i] in \\pathcoords {
    \\ifnum\\i>1
      \\pgfmathsetmacro{\\xprev}{\\xA}
      \\pgfmathsetmacro{\\yprev}{\\yA}
      \\draw[->, red] (C\\prevx\\prevy) -- (C\\xA\\yA);
    \\fi
    \\xdef\\prevx{\\xA}
    \\xdef\\prevy{\\yA}
  }

  % Macros d'extraction
  \\def\\getx#1/#2\\relax{#1} % Prend la partie avant le /
  \\def\\gety#1/#2\\relax{#2} % Prend la partie après le /

  % Extraction effective
  \\edef\\fx{\\expandafter\\getx\\firstcoord\\relax}
  \\edef\\fy{\\expandafter\\gety\\firstcoord\\relax}

  % Convertir en coordonnées TikZ
  \\pgfmathsetmacro\\xstart{\\fx * 3}
  \\pgfmathsetmacro\\ystart{(\\rows - 1 - \\fy) * 2}

  % Robot : une flèche en triangle
  \\begin{scope}[shift={(\\xstart,\\ystart)}, rotate=0, scale=1,opacity=0.3]
    \\filldraw[fill=gray, draw=black]
      (-0.8,-0.3) -- (0.2,-0.3) -- (0.2,-0.5) -- (1,0) -- (0.2,0.5) -- (0.2,0.3) -- (-0.8,0.3) -- cycle;
  \\end{scope}

\\end{tikzpicture}
\\endgroup\\\\
   
Les instructions à utiliser sont les suivantes :

\\setscratch{scale=0.8,line width=1pt}
\\begin{scratch}
\\blockmove{Avancer}
\\end{scratch}
ou 
\\begin{scratch}
\\blockmove{Tourner à gauche}
\\end{scratch}
ou 
\\begin{scratch}
\\blockmove{Tourner à droite}
\\end{scratch}.
 `}generateGrapheSVG(id,cols,rows,rowsStart,colsStart,rowsEnd,colsEnd,parcours){const svgWidth=cols*100,svgHeight=rows*100,start=[colsStart,rowsStart],orientation={angle:0},end=[colsEnd,rowsEnd],pos={x:start[0],y:start[1]},edges=parcours.edges,path=parcours.path,villeParCoord=parcours.villeParCoord;function resizeBlockly(e){if(e instanceof CustomEvent&&e.detail.uuid!==uuid)return;const t=retrieveWorkspace(`blocklyDiv${id}`);if(t){const o=document.getElementById(`blocklyDiv${id}`);o&&o.offsetParent!==null&&svgResize(t)}}function destroyerListener(){document.removeEventListener("questionDisplay",resizeBlockly)}this.destroyers.push(destroyerListener);function drawArrow(e,t,o,r,n){const l=r-t,a=n-o,h=Math.atan2(a,l),d=t+40*Math.cos(h),c=o+20*Math.sin(h),y=r-40*Math.cos(h),v=n-20*Math.sin(h),f=document.createElementNS("http://www.w3.org/2000/svg","line");f.setAttribute("x1",String(d)),f.setAttribute("y1",String(c)),f.setAttribute("x2",String(y)),f.setAttribute("y2",String(v)),f.setAttribute("stroke","red"),f.setAttribute("stroke-width","2"),f.setAttribute("marker-end",`url(#arrowhead${id})`),e.appendChild(f)}const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("width",`${svgWidth}`),svg.setAttribute("height",`${svgHeight}`),svg.setAttribute("viewBox",`0 0 ${svgWidth} ${svgHeight}`),svg.style.border="1px solid black";const positions={};for(let e=0;e<cols;e++)for(let t=0;t<rows;t++){const o=e*100+50,r=t*100+50;positions[`${e},${t}`]=[o,r]}for(let e=0;e<cols;e++)for(let t=0;t<rows;t++){const[o,r]=positions[`${e},${t}`],n=[[1,0],[0,1]];for(const[i,s]of n){const l=e+i,a=t+s;if(l<cols&&a<rows){const[h,d]=positions[`${l},${a}`],c=document.createElementNS("http://www.w3.org/2000/svg","line");c.setAttribute("x1",`${o}`),c.setAttribute("y1",`${r}`),c.setAttribute("x2",`${h}`),c.setAttribute("y2",`${d}`),c.setAttribute("stroke","black"),c.setAttribute("stroke-width","1"),svg.appendChild(c)}}}for(let e=0;e<cols;e++)for(let t=0;t<rows;t++){const[o,r]=positions[`${e},${t}`],n=document.createElementNS("http://www.w3.org/2000/svg","ellipse");n.setAttribute("cx",`${o}`),n.setAttribute("cy",`${r}`),n.setAttribute("rx","40"),n.setAttribute("ry","20"),e===start[0]&&t===start[1]?n.setAttribute("fill","green"):e===end[0]&&t===end[1]?n.setAttribute("fill","blue"):n.setAttribute("fill","#ccc"),svg.appendChild(n);const i=villeParCoord[e][t]||"Ville inconnue",s=document.createElementNS("http://www.w3.org/2000/svg","text");s.setAttribute("x",`${o}`),s.setAttribute("y",`${r+5}`),s.setAttribute("text-anchor","middle"),s.setAttribute("font-size","12"),s.textContent=removeFirstWord(i),svg.appendChild(s)}const robot=document.createElementNS("http://www.w3.org/2000/svg","path");robot.setAttribute("d","M -8,-2 L 4,-2 L 4,-6 L 12,0 L 4,6 L 4,2 L -8,2 Z"),robot.setAttribute("fill","grey"),robot.setAttribute("stroke","red"),robot.setAttribute("id","robot");const[px,py]=positions[`${start[0]},${start[1]}`],scale=1.2;robot.setAttribute("transform",`translate(${px}, ${py}) rotate(${orientation.angle}) scale(${scale})`),svg.appendChild(robot);function moveDir(e,t){var n;const o=[pos.x+e,pos.y+t];if(edges.find(i=>i.from[0]===pos.x&&i.from[1]===pos.y&&i.to[0]===o[0]&&i.to[1]===o[1])){pos.x+=e,pos.y+=t;const[i,s]=positions[`${pos.x},${pos.y}`],l=document.getElementById(id);return(n=l==null?void 0:l.querySelector("#robot"))==null||n.setAttribute("transform",`translate(${i}, ${s}) rotate(${orientation.angle}) scale(${scale})`),!0}return!1}function avancer(){orientation.angle===0?moveDir(1,0):orientation.angle===90?moveDir(0,1):orientation.angle===180?moveDir(-1,0):orientation.angle===270&&moveDir(0,-1)}function tourner(e){e===1?orientation.angle=(orientation.angle+90)%360:(orientation.angle=(orientation.angle-90)%360,orientation.angle<0&&(orientation.angle+=360)),rotate(orientation.angle)}function rotate(e){const t=document.getElementById(id);if(t){const o=t.querySelector("#robot"),n=(o.getAttribute("transform")||"").replace(/rotate\(\d+\)/,`rotate(${e})`);o.setAttribute("transform",n)}}let workspace;function createBlockLy(){setLocale(En),Msg.CONTROLS_REPEAT_TITLE="répéter %1 fois",Msg.CONTROLS_REPEAT_INPUT_DO="faire",Blocks.start||defineBlocksWithJsonArray([{type:"start",message0:"Démarrer",nextStatement:null,colour:20,hat:"true"},{type:"move_forward",message0:"avancer",previousStatement:null,nextStatement:null,colour:160},{type:"turn_left",message0:"tourner à gauche",previousStatement:null,nextStatement:null,colour:210},{type:"turn_right",message0:"tourner à droite",previousStatement:null,nextStatement:null,colour:210}]),javascriptGenerator.forBlock.start=function(i){return javascriptGenerator.statementToCode(i,"")},javascriptGenerator.forBlock.move_forward=function(i,s){return`avancer();
`},javascriptGenerator.forBlock.turn_left=function(i,s){return`tourner(-1);
`},javascriptGenerator.forBlock.turn_right=function(i,s){return`tourner(1);
`};const e=`
      <xml xmlns="https://developers.google.com/blockly/xml">
      <block type="start" deletable="false" movable="false" x="10" y="5"></block>
      </xml>`,t=document.getElementById("toolbox");if(!t)throw new Error("Toolbox element with id 'toolbox' not found.");const o=retrieveWorkspace(`blocklyDiv${id}`);o&&o.dispose(),workspace=inject(`blocklyDiv${id}`,{media:"/alea/blockly/media/",toolbox:t,sounds:!1,zoom:{controls:!0,wheel:!0,startScale:.8,maxScale:2.5,minScale:.3,scaleSpeed:1.2,pinch:!1}});const n=document.querySelector(`#blocklyDiv${id} .blocklyZoomReset`);n&&(n.style.display="none"),workspace.idkey=`blocklyDiv${id}`,Xml.domToWorkspace(utils.xml.textToDom(e),workspace),ContextMenuRegistry.registry.reset(),document.addEventListener("questionDisplay",resizeBlockly)}function ajouterBlocALaSuite(e){const t=retrieveWorkspace(`blocklyDiv${id}`);if(!t)return;const o=t.getTopBlocks(!0);if(o.length===0){console.warn("Aucun bloc de départ trouvé.");return}let r=o[0];for(;r.getNextBlock();){const i=r.getNextBlock();if(!i)break;r=i}const n=serialization.blocks.append({type:e},t);r.nextConnection&&n.previousConnection&&r.nextConnection.connect(n.previousConnection)}function resetRobot(){var r,n,i;const e=document.getElementById(id);if(e){const[s,l]=positions[`${start[0]},${start[1]}`];pos.x=start[0],pos.y=start[1],orientation.angle=0,(r=e==null?void 0:e.querySelector("#robot"))==null||r.setAttribute("transform",`translate(${s}, ${l}) rotate(${orientation.angle}) scale(${scale})`)}const t=(n=document.getElementById(id))==null?void 0:n.querySelector("#message-correct");t&&(t.style.display="none");const o=(i=document.getElementById(id))==null?void 0:i.querySelector("#message-faux");o&&(o.style.display="none")}function resetWorkspace(){const e=retrieveWorkspace(`blocklyDiv${id}`);if(e){e.clear();const o=utils.xml.textToDom('<xml><block type="start" deletable="false" movable="false" x="20" y="20"></block></xml>');Xml.domToWorkspace(o,e)}}function runCode(){var e,t,o;const workspace=retrieveWorkspace(`blocklyDiv${id}`);if(!workspace)return;javascriptGenerator.init(workspace);const blocks=workspace.getTopBlocks(!0),startBlock=blocks.find(r=>r.type==="start");if(!startBlock){alert('Ajoutez un bloc "Démarrer"');return}let code=javascriptGenerator.blockToCode(startBlock);Array.isArray(code)&&(code=code[0]);try{eval(code)}catch(r){console.error(r)}const btn=(e=document.getElementById(id))==null?void 0:e.querySelector("#message-encours");if(btn&&(btn.style.display="none"),checkIfSolution()){const r=(t=document.getElementById(id))==null?void 0:t.querySelector("#message-correct");r&&(r.style.display="block")}else{const r=(o=document.getElementById(id))==null?void 0:o.querySelector("#message-faux");r&&(r.style.display="block")}}async function runCodeWithDelay(){var e,t,o;const workspace=retrieveWorkspace(`blocklyDiv${id}`);if(!workspace)return;javascriptGenerator.init(workspace);const blocks=workspace.getTopBlocks(!0),startBlock=blocks.find(r=>r.type==="start");if(!startBlock){alert('Ajoutez un bloc "Démarrer"');return}let code=javascriptGenerator.blockToCode(startBlock);Array.isArray(code)&&(code=code[0]);const btnCorrect=(e=document.getElementById(id))==null?void 0:e.querySelector("#message-correct");btnCorrect&&(btnCorrect.style.display="none");const btnFaux=(t=document.getElementById(id))==null?void 0:t.querySelector("#message-faux");btnFaux&&(btnFaux.style.display="none");const btnEncours=(o=document.getElementById(id))==null?void 0:o.querySelector("#message-encours");btnEncours&&(btnEncours.style.display="block");try{const delayMs=1e3,lines=code.split(`
`).filter(r=>r.trim()!==""),delayedCode=lines.map(r=>`  ${r}
  await sleep(1000);`).join(`
`),asyncWrapper=`(async () => {
          const sleep = (ms) => new Promise(r => setTimeout(r, ms));
        ${delayedCode}
        })()`;await eval(asyncWrapper)}catch(r){console.error(r)}btnEncours&&(btnEncours.style.display="none"),checkIfSolution()?btnCorrect&&(btnCorrect.style.display="block"):btnFaux&&(btnFaux.style.display="block")}function checkIfSolution(){const e=edges.at(-1);if(!e)return!1;const{to:t}=e,o=pos.y-t[1],r=pos.x-t[0];return o===0&&r===0}function createSolution(){resetRobot(),resetWorkspace();for(const e of edges){const t=e.from,o=e.to,r=o[0]-t[0],n=o[1]-t[1];r===1&&n===0?orientation.angle===0?ajouterBlocALaSuite("move_forward"):orientation.angle===270?(ajouterBlocALaSuite("turn_right"),ajouterBlocALaSuite("move_forward"),orientation.angle=0):orientation.angle===180?(ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("move_forward"),orientation.angle=0):orientation.angle===90&&(ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("move_forward"),orientation.angle=0):r===-1&&n===0?orientation.angle===180?ajouterBlocALaSuite("move_forward"):orientation.angle===0?(ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("move_forward"),orientation.angle=180):orientation.angle===90?(ajouterBlocALaSuite("turn_right"),ajouterBlocALaSuite("move_forward"),orientation.angle=180):orientation.angle===270&&(ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("move_forward"),orientation.angle=180):r===0&&n===1?orientation.angle===90?ajouterBlocALaSuite("move_forward"):orientation.angle===0?(ajouterBlocALaSuite("turn_right"),ajouterBlocALaSuite("move_forward"),orientation.angle=90):orientation.angle===180?(ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("move_forward"),orientation.angle=90):orientation.angle===270&&(ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("move_forward")):r===0&&n===-1&&(orientation.angle===270?ajouterBlocALaSuite("move_forward"):orientation.angle===0?(ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("move_forward"),orientation.angle=270):orientation.angle===90?(ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("turn_left"),ajouterBlocALaSuite("move_forward"),orientation.angle=270):orientation.angle===180&&(ajouterBlocALaSuite("turn_right"),ajouterBlocALaSuite("move_forward"),orientation.angle=270))}orientation.angle=0}const listener=function(){var t,o,r,n,i,s,l,a;const e=document.getElementById(id);e&&!e._eventsBound&&((t=e.querySelector("#btn-av"))==null||t.addEventListener("click",()=>avancer()),(o=e.querySelector("#btn-left"))==null||o.addEventListener("click",()=>tourner(-1)),(r=e.querySelector("#btn-right"))==null||r.addEventListener("click",()=>tourner(1)),(n=e.querySelector("#resetRobot"))==null||n.addEventListener("click",resetRobot),(i=e.querySelector("#resetWorkspace"))==null||i.addEventListener("click",resetWorkspace),(s=e.querySelector("#showSolution"))==null||s.addEventListener("click",createSolution),(l=e.querySelector("#runCode"))==null||l.addEventListener("click",runCode),(a=e.querySelector("#runCodeWithDelay"))==null||a.addEventListener("click",runCodeWithDelay),createBlockLy(),e._eventsBound=!0),document.removeEventListener("exercicesAffiches",listener)};document.addEventListener("exercicesAffiches",listener);for(let e=0;e<path.length-1;e++){const[t,o]=positions[`${path[e][0]},${path[e][1]}`],[r,n]=positions[`${path[e+1][0]},${path[e+1][1]}`];drawArrow(svg,t,o,r,n)}const defs=document.createElementNS("http://www.w3.org/2000/svg","defs");defs.innerHTML=`
     <marker id="arrowhead${id}" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth" viewBox="0 0 6 6">
  <path d="M 0 0 L 6 3 L 0 6 L 2 3 Z" fill="red" />
</marker>
    `,svg.insertBefore(defs,svg.firstChild),svg.setAttribute("class","mathalea2d"),svg.setAttribute("viewBox",`0 0 ${svgWidth} ${svgHeight}`),svg.setAttribute("style","display: inline-block");const serializer=new XMLSerializer,svgString=serializer.serializeToString(svg);return`<div id=${id}>
    <div class="svgContainer" style="display: inline-block"> 
    ${svgString}<br>
    
  <!-- <button id="btn-av">⇒</button>
  <button id="btn-left" class="px-6 py-2.5 ml-6">↪</button>
  <button id="btn-right" class="px-6 py-2.5 ml-6">↩</button>
  <button id="generate" class="px-6 py-2.5 ml-6">🔁 Recommencer</button> -->
  </div>
  <xml id="toolbox" style="display: none">
  <category name="Déplacement">
    <block type="move_forward"></block>
    <block type="turn_left"></block>
    <block type="turn_right"></block>
  </category>
  <category name="Contrôle">
  <block type="start"></block>
    <block type="controls_repeat_ext">
      <value name="TIMES"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
    </block>
  </category>
  </xml>

  <div>
  <button id="runCode" class="px-6 py-2.5" style="display:none">▶️ Exécuter</button>
  <button id="runCodeWithDelay" class="px-6 py-2.5" ${this.interactif?'style="display:none"':""}>▶️ Exécuter (pas à pas) </button>
  <button id="resetWorkspace" class="px-6 py-2.5" ${this.interactif?'style="display:none"':""}>♻️ Reinit programme</button>
  <button id="resetRobot" class="px-6 py-2.5" ${this.interactif?'style="display:none"':""}>🔁 Reinit bus</button>
  <button id="showSolution" class="px-6 py-2.5" style="display:none">💡 Show solution</button>
  <div id="message-correct" style="display: none; margin: 10px 10px 10px 10px; font-weight: bold; color: green; font-size: 1.2em;">
  🎉 Bravo, le bus est bien arrivé !
  </div>
  <div id="message-faux" style="display: none; margin: 10px 10px 10px 10px; font-weight: bold; color: red; font-size: 1.2em;">
   ❌ Attention, le bus n'est pas arrivé à sa destination finale!
  </div>
  <style>
  @keyframes blink {
    50% { opacity: 0; }
  }
  </style>
  <div id="message-encours" style="animation: blink 1s step-start infinite;display: none; margin: 10px 10px 10px 10px; font-weight: bold; font-size: 1.2em;">
  En cours d'exécution...
  </div>
  <div id="blocklyDiv${id}" style="height:300px;width:100%"></div>
  </div>
  </div>
`}}function retrieveWorkspace(p){const e=Workspace.getAll();for(let t=0;t<e.length;t++){const o=e[t];if(o.idkey===p)return o}return null}function exportBlocklyJSONUltraLight(p){const e=serialization.workspaces.save(p),t=new Set(["id","x","y","collapsed","deletable","movable","editable","enabled","inline","inputsInline","data","extraState","isShadow","disabled"]);function o(n){if(Array.isArray(n))return n.map(o);if(n&&typeof n=="object"){const i={};for(const s in n)t.has(s)||(i[s]=o(n[s]));return i}return n}const r=o(e);return JSON.stringify(r,null,2)}function removeFirstWord(p){const e=p.replace(/^(les|la|le|l’|l')\s*/i,"").trim();return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function createSolutionStr(p){const e={angle:0},t=[];for(const o of p){const r=o.from,n=o.to,i=n[0]-r[0],s=n[1]-r[1];i===1&&s===0?e.angle===0?t.push("move_forward-Avancer"):e.angle===270?(t.push("turn_right-Tourner à droite"),t.push("move_forward-Avancer"),e.angle=0):e.angle===180?(t.push("turn_left-Tourner à gauche"),t.push("turn_left-Tourner à gauche"),t.push("move_forward-Avancer"),e.angle=0):e.angle===90&&(t.push("turn_left-Tourner à gauche"),t.push("move_forward-Avancer"),e.angle=0):i===-1&&s===0?e.angle===180?t.push("move_forward-Avancer"):e.angle===0?(t.push("turn_left-Tourner à gauche"),t.push("turn_left-Tourner à gauche"),t.push("move_forward-Avancer"),e.angle=180):e.angle===90?(t.push("turn_right-Tourner à droite"),t.push("move_forward-Avancer"),e.angle=180):e.angle===270&&(t.push("turn_left-Tourner à gauche"),t.push("move_forward-Avancer"),e.angle=180):i===0&&s===1?e.angle===90?t.push("move_forward-Avancer"):e.angle===0?(t.push("turn_right-Tourner à droite"),t.push("move_forward-Avancer"),e.angle=90):e.angle===180?(t.push("turn_left-Tourner à gauche"),t.push("move_forward-Avancer"),e.angle=90):e.angle===270&&(t.push("turn_left-Tourner à gauche"),t.push("turn_left-Tourner à gauche"),t.push("move_forward-Avancer")):i===0&&s===-1&&(e.angle===270?t.push("move_forward-Avancer"):e.angle===0?(t.push("turn_left-Tourner à gauche"),t.push("move_forward-Avancer"),e.angle=270):e.angle===90?(t.push("turn_left-Tourner à gauche"),t.push("turn_left-Tourner à gauche"),t.push("move_forward-Avancer"),e.angle=270):e.angle===180&&(t.push("turn_right-Tourner à droite"),t.push("move_forward-Avancer"),e.angle=270))}return e.angle=0,t}export{dateDePublication,ExerciceLabyrintheChemin as default,interactifReady,interactifType,refs,titre,uuid};
//# sourceMappingURL=6I1D-Da5h76F3.js.map
