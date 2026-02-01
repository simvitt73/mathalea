var R=p=>{throw TypeError(p)};var $=(p,s,t)=>s.has(p)||R("Cannot "+t);var h=(p,s,t)=>($(p,s,"read from private field"),t?t.call(p):s.get(p)),G=(p,s,t)=>s.has(p)?R("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(p):s.set(p,t),O=(p,s,t,e)=>($(p,s,"write to private field"),e?e.call(p,t):s.set(p,t),t),m=(p,s,t)=>($(p,s,"access private method"),t);import{Q as q}from"./mathlive-2YgxEGya.js";import{s as E}from"./seedrandom-Cz-2rAdY.js";class U{constructor(s){this.rows=8,this.cols=8,this.seed=null,this.rnd=Math.random,this.valuesRnd=null,this.orientationMode="random",this.lastOrientation="vertical",this.start={row:0,col:0},this.end={row:0,col:0},this.grid=[],this.correctClicks=0,this.badClicks=0,this.win=!1,this.gameOver=!1,this.goodAnswers=[],this.badAnswers=[],this.width=null,this.height=null,s&&this.configure(s)}get cellWidth(){return this.width}get cellHeight(){return this.height}configure(s){if(s.seed!==void 0&&(this.seed=s.seed??null,this.rnd=this.seed!=null?E(this.seed):Math.random,this.valuesRnd=this.seed!=null?E(this.seed+"-values"):null),s.orientation!==void 0&&(this.orientationMode=s.orientation),s.rows!==void 0){const t=Math.floor(Number(s.rows));Number.isFinite(t)&&t>0&&(this.rows=t)}if(s.cols!==void 0){const t=Math.floor(Number(s.cols));Number.isFinite(t)&&t>0&&(this.cols=t)}s.width!==void 0&&(this.width=s.width),s.height!==void 0&&(this.height=s.height)}regenerate(){this.correctClicks=0,this.badClicks=0,this.win=!1,this.gameOver=!1,this.seed!=null&&(this.rnd=E(this.seed),this.valuesRnd=E(this.seed+"-values"));const{mask:s,start:t,end:e,orientation:r}=this.generateNewPathMask();this.start=t,this.end=e,this.lastOrientation=r,this.grid=Array(this.rows).fill(0).map((i,o)=>Array(this.cols).fill(0).map((a,n)=>({isGood:s[o][n]===1,clicked:!1,text:""}))),(this.goodAnswers.length>0||this.badAnswers.length>0)&&this.assignValuesToGrid()}setValues(s,t){this.goodAnswers=Array.isArray(s)?s.map(String):[],this.badAnswers=Array.isArray(t)?t.map(String):[],this.assignValuesToGrid()}clickCell(s,t){if(this.gameOver||!this.inBounds(s,t))return;const e=this.grid[s][t];e.clicked||(e.clicked=!0,e.isGood?(this.correctClicks++,this.correctClicks>=this.numberOfGoodAnswers()-2&&(this.win=!0,this.gameOver=!0)):(this.badClicks++,this.win=!1,this.gameOver=!0))}snapshot(){return{seed:this.seed,orientation:this.lastOrientation,rows:this.rows,cols:this.cols,start:{...this.start},end:{...this.end},grid:this.cloneGrid(this.grid),win:this.win,gameOver:this.gameOver,correctClicks:this.correctClicks,badAnswers:this.badClicks}}serializeState(){const s=this.grid.map(t=>t.map(e=>e.clicked?1:0));return JSON.stringify({c:this.correctClicks,b:this.badClicks,g:s})}restoreState(s){var t;try{const e=JSON.parse(s),r=e==null?void 0:e.g;if(Array.isArray(r))for(let a=0;a<this.rows;a++)for(let n=0;n<this.cols;n++){const b=(t=r==null?void 0:r[a])==null?void 0:t[n];this.grid[a][n].clicked=b===1}let i=0,o=0;for(let a=0;a<this.rows;a++)for(let n=0;n<this.cols;n++){const b=this.grid[a][n];b.clicked&&(b.isGood?i++:o++)}this.correctClicks=i,this.badClicks=o,o>0?(this.win=!1,this.gameOver=!0):i>=this.numberOfGoodAnswers()-2&&i>0?(this.win=!0,this.gameOver=!0):(this.win=!1,this.gameOver=!1)}catch{}}numberOfGoodAnswers(){var t,e,r;let s=0;for(let i=0;i<this.rows;i++)for(let o=0;o<this.cols;o++)(r=(e=(t=this.grid)==null?void 0:t[i])==null?void 0:e[o])!=null&&r.isGood&&s++;return s}numberOfIncorrectAnswers(){return this.rows*this.cols-this.numberOfGoodAnswers()}generateNewPathMask(){const t=this.chooseOrientation();for(let e=0;e<200;e++){const r=this.tryGeneratePathOnce(t);if(r)return r}return this.generateFallbackStraightPath(t)}tryGeneratePathOnce(s){const t=this.zeroMask();let e,r;s==="vertical"?(e=0,r=Math.floor(this.rnd()*this.cols)):(e=Math.floor(this.rnd()*this.rows),r=0),t[e][r]=1;const i=[[e,r]],o=(c,v,u,f)=>{for(let w=-1;w<=1;w++)for(let x=-1;x<=1;x++){if(w===0&&x===0)continue;const A=c+w,M=v+x;if(!(A===u&&M===f)&&this.inBounds(A,M)&&t[A][M]===1)return!1}return!0},a=this.rows*this.cols*4;let n=0;for(;;){if(++n>a)return null;const c=[];for(let f=-1;f<=1;f++)for(let w=-1;w<=1;w++){if(f===0&&w===0)continue;const x=e+f,A=r+w;this.inBounds(x,A)&&t[x][A]===0&&o(x,A,e,r)&&c.push([x,A])}if(c.length===0){if(t[e][r]=0,i.pop(),i.length===0)return null;[e,r]=i[i.length-1];continue}const[v,u]=c[Math.floor(this.rnd()*c.length)];if(t[v][u]=1,i.push([v,u]),[e,r]=[v,u],s==="vertical"&&e===this.rows-1||s==="horizontal"&&r===this.cols-1)break}if(!this.isUniquePath(t))return null;const b={row:i[0][0],col:i[0][1]},l={row:i[i.length-1][0],col:i[i.length-1][1]};return{mask:t,start:b,end:l,orientation:s}}generateFallbackStraightPath(s){const t=this.zeroMask();if(s==="vertical"){const e=Math.floor(this.rnd()*this.cols);for(let r=0;r<this.rows;r++)t[r][e]=1;return{mask:t,start:{row:0,col:e},end:{row:this.rows-1,col:e},orientation:s}}else{const e=Math.floor(this.rnd()*this.rows);for(let r=0;r<this.cols;r++)t[e][r]=1;return{mask:t,start:{row:e,col:0},end:{row:e,col:this.cols-1},orientation:s}}}isUniquePath(s){const t=(l,c)=>`${l},${c}`,e=new Set;for(let l=0;l<this.rows;l++)for(let c=0;c<this.cols;c++)s[l][c]===1&&e.add(t(l,c));if(e.size<2)return!1;const r=(l,c)=>this.inBounds(l,c)&&e.has(t(l,c)),i=(l,c)=>{const v=[];for(let u=-1;u<=1;u++)for(let f=-1;f<=1;f++){if(u===0&&f===0)continue;const w=l+u,x=c+f;r(w,x)&&v.push([w,x])}return v},o=[];for(const l of e){const[c,v]=l.split(",").map(Number),u=i(c,v).length;if(u===1)o.push([c,v]);else if(u!==2)return!1}if(o.length!==2)return!1;const a=o[0],n=[a],b=new Set([t(a[0],a[1])]);for(;n.length;){const l=n.pop();if(!l)break;const[c,v]=l;for(const[u,f]of i(c,v)){const w=t(u,f);b.has(w)||(b.add(w),n.push([u,f]))}}return b.size===e.size}inBounds(s,t){return s>=0&&s<this.rows&&t>=0&&t<this.cols}zeroMask(){return Array(this.rows).fill(0).map(()=>Array(this.cols).fill(0))}chooseOrientation(){return this.orientationMode==="random"?this.rnd()>.5?"vertical":"horizontal":this.orientationMode}assignValuesToGrid(){var r,i;if(!this.grid||this.grid.length===0)return;let s=0,t=0,e=0;for(let o=0;o<this.rows;o++)for(let a=0;a<this.cols;a++){const n=this.grid[o][a];n.isGood?(n.text=((r=this.goodAnswers)==null?void 0:r[s++])??"",n.text===""&&e++):(n.text=((i=this.badAnswers)==null?void 0:i[t++])??"",n.text===""&&e++)}e>0&&console.warn(`assignValuesToGrid: ${e} cellules vides détectées`,{goodUsed:s,goodAvailable:this.goodAnswers.length,badUsed:t,badAvailable:this.badAnswers.length})}cloneGrid(s){return s.map(t=>t.map(e=>({isGood:e.isGood,clicked:e.clicked,text:e.text})))}randomInt(s,t){const e=this.valuesRnd??Math.random;return Math.floor(e()*(t-s+1))+s}random(){return this.valuesRnd?this.valuesRnd():Math.random()}escapeForTabular(s){return s==null?"":String(s).replace(/&/g,"\\&").replace(/\r?\n/g," ")}generateLatex(s={}){var c,v;const{correction:t=!1,align:e="c",borders:r=!0,rowSeparators:i=!0}=s,o=this.snapshot(),a=o.rows,n=o.cols,b=r?"|"+`${e}|`.repeat(n):`${e}`.repeat(n),l=[];l.push(`\\begin{tabular}{${b}}`),i&&l.push("\\hline");for(let u=0;u<a;u++){const f=[];for(let w=0;w<n;w++){const x=(v=(c=o.grid)==null?void 0:c[u])==null?void 0:v[w],A=!!(x!=null&&x.isGood);let M=(x==null?void 0:x.text)??"";t&&A&&(M=`\\textbf{${M}}`);const I=o.start.row===u&&o.start.col===w,j=o.end.row===u&&o.end.col===w,_=I||j||t&&A;let L=this.escapeForTabular(M);_&&(L.trim()===""?L="\\cellcolor{gray!20}~":L=`\\cellcolor{gray!20}${L}`),f.push(L)}i?l.push(`${f.join(" & ")} \\\\ \\hline`):l.push(`${f.join(" & ")} \\\\`)}return l.push("\\end{tabular}"),l.join(`
`)}generateLatexCorrection(s={}){return this.generateLatex({...s,correction:!0})}}class V{constructor(s){this.math=s}render(s,t,e,r){var o,a;this.ensureStyle(s);const i=this.ensureContainer(s);e!=null&&e>0?i.style.setProperty("--cell-width",`${e}em`):i.style.removeProperty("--cell-width"),r!=null&&r>0?i.style.setProperty("--cell-height",`${r}em`):i.style.removeProperty("--cell-height"),i.style.gridTemplateColumns=`repeat(${t.cols}, var(--cell-width))`,i.style.gridTemplateRows=`repeat(${t.rows}, var(--cell-height))`,this.removeGridCells(i);for(let n=0;n<t.rows;n++)for(let b=0;b<t.cols;b++){const l=(o=t.grid[n])==null?void 0:o[b],c=document.createElement("div");c.className="grid-cell",c.dataset.row=String(n),c.dataset.col=String(b),t.start.row===n&&t.start.col===b&&c.classList.add("start"),t.end.row===n&&t.end.col===b&&c.classList.add("end"),l!=null&&l.clicked&&(l.isGood?c.classList.add("correct"):c.classList.add("incorrect")),c.textContent=(l==null?void 0:l.text)??"",i.appendChild(c)}(a=this.math)==null||a.typeset(i)}showCorrection(s,t){var r,i;const e=s.querySelector(".grid-container");if(e)for(let o=0;o<t.rows;o++)for(let a=0;a<t.cols;a++){const n=e.querySelector(`.grid-cell[data-row="${o}"][data-col="${a}"]`);if(!n)continue;(i=(r=t.grid[o])==null?void 0:r[a])!=null&&i.isGood&&(n.classList.add("correct"),n.classList.remove("incorrect"))}}setDisabled(s,t){const e=s.querySelector(".grid-container");e&&(t?(e.classList.add("disabled"),e.setAttribute("aria-disabled","true"),e.style.opacity="0.6",e.style.pointerEvents="none"):(e.classList.remove("disabled"),e.removeAttribute("aria-disabled"),e.style.opacity="",e.style.pointerEvents=""))}ensureStyle(s){let t=s.querySelector('style[data-labyrinthe-style="1"]');return t||(t=document.createElement("style"),t.setAttribute("data-labyrinthe-style","1"),t.textContent=`
      :host {
        --cell-width: clamp(44px, 9vw, 72px);
        --cell-height: clamp(44px, 9vw, 72px);
        --gap: 6px;
        --radius: 14px;
        --cell-radius: 12px;

        --bg-start: #f8fafc; /* slate-50 */
        --bg-end: #eef2f7;   /* subtle */
        --border: 1px solid rgba(2, 6, 23, 0.08);

        --cell-bg-start: #ffffff;
        --cell-bg-end: #f3f6fb;

        --accent: #3b82f6;       /* blue-500 */
        --correct-1: #34d399;    /* emerald-400 */
        --correct-2: #10b981;    /* emerald-500 */
        --incorrect-1: #f87171;  /* red-400 */
        --incorrect-2: #ef4444;  /* red-500 */
        --start-1: #60a5fa;      /* blue-400 */
        --start-2: #3b82f6;      /* blue-500 */
        --end-1: #a78bfa;        /* violet-400 */
        --end-2: #8b5cf6;        /* violet-500 */

        --shadow: 0 6px 16px rgba(2, 6, 23, 0.09), 0 2px 6px rgba(2, 6, 23, 0.05);
        --shadow-hover: 0 10px 24px rgba(2, 6, 23, 0.12), 0 3px 8px rgba(2, 6, 23, 0.06);

        display: inline-block;
      }

      .grid-container {
        display: grid;
        gap: var(--gap);
        margin: 8px auto;
        padding: calc(var(--gap) + 6px);
        background: linear-gradient(180deg, var(--bg-start) 0%, var(--bg-end) 100%);
        border-radius: var(--radius);
        border: var(--border);
        box-shadow: var(--shadow);
        position: relative;
      }



      .grid-cell {
        width: var(--cell-width);
        height: var(--cell-height);
        display: flex;
        align-items: center;
        justify-content: center;
        font: 600 14px/1 system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";
        color: #0f172a; /* slate-900 */
        letter-spacing: 0.2px;

        background: linear-gradient(180deg, var(--cell-bg-start) 0%, var(--cell-bg-end) 100%);
        border-radius: var(--cell-radius);
        border: 1px solid rgba(2, 6, 23, 0.08);
        box-shadow:
          0 1px 0 rgba(255, 255, 255, 0.65) inset,
          0 1.5px 3px rgba(2, 6, 23, 0.06);

        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;

        transition:
          transform 0.18s ease,
          background 0.25s ease,
          box-shadow 0.25s ease,
          color 0.25s ease,
          border-color 0.25s ease;
      }

      .grid-cell * {
        user-select: none;
        pointer-events: none;
      }

      .grid-cell:hover {
        background: linear-gradient(180deg, #eef2ff 0%, #e5e9f2 100%);
        transform: translateY(-1px);
        box-shadow: var(--shadow-hover);
        border-color: rgba(2, 6, 23, 0.12);
      }

      .grid-cell:active {
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(2, 6, 23, 0.10);
      }

      .grid-cell.start,
      .grid-cell.start.correct {
        background: linear-gradient(180deg, var(--start-1) 0%, var(--start-2) 100%);
        color: #fff;
        border-color: transparent;
        position: relative;
      }

      .grid-cell.end,
      .grid-cell.end.correct {
        background: linear-gradient(180deg, var(--end-1) 0%, var(--end-2) 100%);
        color: #fff;
        border-color: transparent;
        position: relative;
      }

      .grid-cell.start::after,
      .grid-cell.end::after {
        position: absolute;
        top: 6px;
        left: 6px;
        padding: 2px 6px;
        border-radius: 999px;
        font-size: 10px;
        line-height: 1;
        letter-spacing: .2px;
        background: rgba(255,255,255,.85);
        color: #0f172a;
        border: 1px solid rgba(2,6,23,.08);
        box-shadow: 0 1px 0 rgba(255,255,255,.6) inset, 0 1px 2px rgba(2,6,23,.08);
        pointer-events: none;
        content: '';
      }
      .grid-cell.start::after { content: "Départ"; }
      .grid-cell.end::after { content: "Arrivée"; }

      @keyframes pop {
        0% { transform: scale(0.96); }
        60% { transform: scale(1.03); }
        100% { transform: scale(1); }
      }

      .grid-cell.correct,
      .grid-cell.incorrect {
        color: #fff;
        border-color: transparent;
        animation: pop 180ms ease-out;
      }

      .grid-cell.correct {
        background: linear-gradient(180deg, var(--correct-1) 0%, var(--correct-2) 100%);
        box-shadow:
          0 2px 10px rgba(16, 185, 129, 0.25),
          0 1px 0 rgba(255, 255, 255, 0.35) inset;
      }

      .grid-cell.incorrect {
        background: linear-gradient(180deg, var(--incorrect-1) 0%, var(--incorrect-2) 100%);
        box-shadow:
          0 2px 10px rgba(239, 68, 68, 0.25),
          0 1px 0 rgba(255, 255, 255, 0.35) inset;
      }







      @media (max-width: 720px) {
        :host {
          --gap: 5px;
          --cell-radius: 10px;
        }
        .grid-container {
          padding: calc(var(--gap) + 4px);
        }
        .grid-cell {
          font-weight: 600;
          font-size: 13px;
        }
        .grid-cell.start::after,
        .grid-cell.end::after {
          display: none;
        }
      }
    `,s.appendChild(t),t)}ensureContainer(s){let t=s.querySelector(".grid-container");return t||(t=document.createElement("div"),t.className="grid-container mx-auto",s.appendChild(t)),t}removeGridCells(s){s.querySelectorAll(".grid-cell").forEach(e=>{e.remove()})}}var y,d,S,k,g,P,F,C,z,N,T;class B extends HTMLElement{constructor(){super();G(this,g);G(this,y);G(this,d);G(this,S);G(this,k);this.ready=!1,this.gameOver=!1,this.win=!1,O(this,d,new U),O(this,S,new V(new D)),O(this,k,null),O(this,y,this.attachShadow({mode:"closed"}))}static get observedAttributes(){return["state","disabled","seed","rows","cols","orientation","width","height"]}connectedCallback(){if(!this.getAttribute("seed"))throw new Error('[LabyrintheElement] Missing required "seed" attribute');m(this,g,P).call(this),h(this,d).regenerate(),m(this,g,C).call(this),this.getAttribute("state")&&(O(this,k,this.getAttribute("state")),m(this,g,N).call(this),m(this,g,C).call(this)),h(this,S).setDisabled(h(this,y),this.disabled),m(this,g,F).call(this),this.ready=!0}attributeChangedCallback(t,e,r){switch(t){case"state":{O(this,k,r??""),this.isConnected&&(m(this,g,N).call(this),m(this,g,C).call(this));break}case"disabled":{this.isConnected&&h(this,S).setDisabled(h(this,y),r!==null);break}case"seed":case"rows":case"cols":case"orientation":{if(!this.isConnected)break;m(this,g,P).call(this),h(this,d).regenerate(),h(this,k)!=null&&m(this,g,N).call(this),m(this,g,C).call(this),h(this,S).setDisabled(h(this,y),this.disabled);break}case"width":case"height":{this.isConnected&&m(this,g,C).call(this);break}}}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get seed(){return this.getAttribute("seed")??""}set seed(t){t==null?this.removeAttribute("seed"):this.setAttribute("seed",String(t))}get orientation(){const t=this.getAttribute("orientation");if(t==null)return null;const e=t.toLowerCase();return e==="vertical"?"vertical":e==="horizontal"?"horizontal":null}set orientation(t){t==null?this.removeAttribute("orientation"):this.setAttribute("orientation",t)}get rows(){return h(this,d).snapshot().rows}set rows(t){const e=Math.floor(Number(t));!Number.isFinite(e)||e<=0||this.setAttribute("rows",String(e))}get cols(){return h(this,d).snapshot().cols}set cols(t){const e=Math.floor(Number(t));!Number.isFinite(e)||e<=0||this.setAttribute("cols",String(e))}get state(){return this.getAttribute("state")??""}set state(t){const e=t==null?"":String(t);this.getAttribute("state")!==e&&this.setAttribute("state",e)}get width(){const t=this.getAttribute("width");if(t==null)return null;const e=parseFloat(t);return Number.isFinite(e)&&e>0?e:null}set width(t){t==null?this.removeAttribute("width"):this.setAttribute("width",String(t))}get height(){const t=this.getAttribute("height");if(t==null)return null;const e=parseFloat(t);return Number.isFinite(e)&&e>0?e:null}set height(t){t==null?this.removeAttribute("height"):this.setAttribute("height",String(t))}get numberOfGoodAnswers(){return h(this,d).numberOfGoodAnswers()}get numberOfIncorrectAnswers(){return h(this,d).numberOfIncorrectAnswers()}get correctClicks(){return h(this,d).snapshot().correctClicks}get totalGood(){return h(this,d).numberOfGoodAnswers()}regenerate(){h(this,d).regenerate(),m(this,g,C).call(this)}setValues(t,e){h(this,d).setValues(t,e),m(this,g,C).call(this)}showCorrection(){const t=h(this,d).snapshot();h(this,S).showCorrection(h(this,y),t),m(this,g,z).call(this)}get latex(){return m(this,g,T).call(this,!1)}set latex(t){this.setAttribute("latex",m(this,g,T).call(this,!1))}get latexCorrection(){return m(this,g,T).call(this,!0)}}y=new WeakMap,d=new WeakMap,S=new WeakMap,k=new WeakMap,g=new WeakSet,P=function(){const t=this.getAttribute("seed")??null,e=this.getAttribute("rows"),r=this.getAttribute("cols"),i=this.getAttribute("orientation"),o=e!=null?Math.floor(parseInt(e,10)):void 0,a=r!=null?Math.floor(parseInt(r,10)):void 0,n=i&&(i.toLowerCase()==="vertical"||i.toLowerCase()==="horizontal")?i.toLowerCase():void 0;h(this,d).configure({seed:t,rows:o,cols:a,orientation:n})},F=function(){h(this,y).addEventListener("click",t=>{if(this.gameOver||this.disabled)return;const e=t.composedPath().find(n=>n instanceof HTMLElement&&n.classList.contains("grid-cell"));if(!e)return;const r=e.dataset.row,i=e.dataset.col;if(r==null||i==null)return;const o=h(this,d).snapshot().gameOver;h(this,d).clickCell(parseInt(r,10),parseInt(i,10)),m(this,g,C).call(this);const a=h(this,d).snapshot();if(this.gameOver=a.gameOver,this.win=a.win,!o&&a.gameOver){this.disabled=!0;const n={win:a.win,correctClicks:a.correctClicks,totalGood:h(this,d).numberOfGoodAnswers(),totalBad:h(this,d).numberOfIncorrectAnswers(),state:this.state};this.dispatchEvent(new CustomEvent("labyrinthe:gameend",{detail:n,bubbles:!0,composed:!0}))}})},C=function(){const t=h(this,d).snapshot();h(this,S).render(h(this,y),t,this.width,this.height),m(this,g,z).call(this),this.gameOver=t.gameOver,this.win=t.win},z=function(){const t=h(this,d).serializeState();this.getAttribute("state")!==t&&this.setAttribute("state",t)},N=function(){if(h(this,k)==null)return;const t=h(this,k);O(this,k,null);const e=t.trim();if(e.startsWith("{")||e.startsWith("[")){h(this,d).restoreState(e);return}const r=h(this,d).snapshot(),i=r.rows,o=r.cols,a=Array(i).fill(0).map(()=>Array(o).fill(0)),n=e.split("|").map(l=>l.trim()).filter(l=>l.length>0);for(const l of n){const[c,v]=l.split("-");if(c==null||v==null)continue;const u=parseInt(c,10),f=parseInt(v,10);Number.isFinite(u)&&Number.isFinite(f)&&u>=0&&u<i&&f>=0&&f<o&&(a[u][f]=1)}const b=JSON.stringify({c:0,b:0,g:a});h(this,d).restoreState(b)},T=function(t){return t?h(this,d).generateLatexCorrection():h(this,d).generateLatex()};class D{typeset(s){const t=s instanceof ShadowRoot?s:s.getRootNode(),e=t instanceof ShadowRoot?t:null;if(e&&!e.querySelector('style[data-mathlive-style="1"]')){const r=document.createElement("style");r.setAttribute("data-mathlive-style","1"),r.textContent='@import url("https://cdn.jsdelivr.net/npm/mathlive/mathlive-static.css");',e.appendChild(r)}s instanceof HTMLElement&&q(s,{TeX:{delimiters:{inline:[["$","$"],["\\(","\\)"]],display:[]}}})}}const X=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{U as L,X as a};
//# sourceMappingURL=labyrinthe-K4T69MwU.js.map
