import{O as D}from"./ObjetMathalea2D-CXcNXRpD.js";import{P as I}from"./index-CMKaCP9B.js";function R(g,v="block",B=!1){const w=/[\\{}]/,P=/[{ ]/,$=function(s){let n;return s[0]==="}"?"}":(n=s.split(P)[0],n)},l=function(s,n,a){let t=[],r=[],e=[],u=[],i,b,h,f,o;const S=s.substring(n),k=$(S);switch(k.substring(0,5)){case"\\bloc":switch(b=k.split("{")[0],i=b.length,b=b.substring(6),a++,b){case"stop":r=l(s,n+i+1,a),e=l(s,r[1],r[2]),t=[`${r[0]} ${e[0]} `,e[1],e[2]];break;case"look":r=l(s,n+i+1,a),t=[r[0],r[1],r[2]];break;case"move":r=l(s,n+i+1,a),t=[r[0],r[1],r[2]];break;case"variable":r=l(s,n+i+1,a),t=[r[0],r[1],r[2]];break;case"control":r=l(s,n+i+1,a),t=[r[0],r[1],r[2]];break;case"pen":r=l(s,n+i+1,a),t=[r[0]+" :: pen",r[1],r[2]];break;case"list":r=l(s,n+i+1,a),t=[r[0]+" :: list",r[1],r[2]];break;case"init":r=l(s,n+i+1,a),t=[r[0],r[1],r[2]];break;case`space
`:a--,t=[`
`,11+n,a];break;case"if":for(r=l(s,n+i+1,a),e=l(s,r[1],r[2]),u=l(s,e[1],e[2]),t=[`${r[0]} ${e[0]} ${u[0]}`,u[1]+1,u[2]-1],a=t[2],f=a+1,o=s.substring(t[1]).indexOf("{")+t[1],t[1]=o+1,t[0]+=`
`;f>a;)r=l(s,t[1],f),t[0]+=" "+r[0],t[1]=r[1],f=r[2];t[0]+=" fin";break;case"ifelse":for(r=l(s,n+i+1,a),e=l(s,r[1],r[2]),u=l(s,e[1],e[2]),t=[`${r[0]} ${e[0]} ${u[0]}`,u[1]+1,u[2]-1],a=t[2],f=a+1,o=s.substring(t[1]).indexOf("{")+t[1],t[1]=o+1,t[0]+=`
`;f>a;)r=l(s,t[1],f),t[0]+=" "+r[0],t[1]=r[1],f=r[2];for(t[0]+=" sinon",f=a+1,o=s.substring(t[1]).indexOf("{")+t[1],t[1]=o+1,t[0]+=`
`;f>a;)r=l(s,t[1],f),t[0]+=" "+r[0],t[1]=r[1],f=r[2];t[0]+=" fin";break;case"repeat":for(r=l(s,n+i+1,a),r[0].split(" ")[1]!=="indéfiniment"?r[0].split(" ")[1]!=="jusqu'à"?(e=l(s,r[1],r[2]),u=l(s,e[1],e[2]),t=[`${r[0]} ${e[0]} ${u[0]}`,u[1]+1,u[2]-1],a=t[2]):(e=l(s,r[1],r[2]),t=[`${r[0]} ${e[0]} `,e[1]+1,e[2]-1],a=t[2]):(t=[`${r[0]} `,r[1]+1,r[2]-1],a=t[2]),f=a+1,o=s.substring(t[1]).indexOf("{")+t[1],t[1]=o+1,t[0]+=`
`;f>a;)r=l(s,t[1],f),t[0]+=" "+r[0],t[1]=r[1],f=r[2];t[0]+=" fin";break;default:r=l(s,n+i+1,a),t=[r[0],r[1],r[2]];break}break;case"\\oval":switch(b=k.split("{")[0],i=b.length,b=b.substring(5),a++,b.charAt(b.length-1)==="*"?(h=!0,b=b.substring(0,b.length-1)):h=!1,b){case"num":r=l(s,n+i+1,a),t=[`[${r[0]}]`,r[1]+1,r[2]-1];break;case"moreblocks":r=l(s,n+i+1,a),h?t=[`(${r[0]} v)`,r[1],r[2]]:t=[`(${r[0]})`,r[1],r[2]];break;case"variable":r=l(s,n+i+1,a),h?t=[`(${r[0]} v)`,r[1]+1,r[2]-1]:t=[`(${r[0]})`,r[1]+1,r[2]-1];break;case"sound":r=l(s,n+i+1,a),h?t=[`(${r[0]} v :: sound)`,r[1]+1,r[2]-1]:t=[`(${r[0]} :: sound)`,r[1]+1,r[2]-1];break;case"sensing":r=l(s,n+i+1,a),h?t=[`(${r[0]} v :: sensing)`,r[1]+1,r[2]-1]:t=[`(${r[0]} :: sensing)`,r[1]+1,r[2]-1];break;case"operator":for(r=l(s,n+i+1,a),e=l(s,r[1],r[2]),t=[`(${r[0]} ${e[0]}`,e[1],e[2]];s.charAt(e[1])!=="}";)e=l(s,e[1],e[2]),t[0]+=" "+e[0];t[0]+=")",t[1]=e[1]+1,t[2]=e[2]-1;break;default:r=l(s,n+i+1,a),h?t=[`(${r[0]} v)`,r[1]+1,r[2]-1]:t=[`(${r[0]})`,r[1]+1,r[2]-1];break}break;case"\\bool":switch(b=k.split(/\{ /)[0],i=b.length,b=b.substring(5,9),b){case"oper":for(a++,r=l(s,n+i+1,a),e=l(s,r[1],r[2]),t=[`<${r[0]} ${e[0]}`,e[1],e[2]];s.charAt(e[1])!=="}";)e=l(s,e[1],e[2]),t[0]+=" "+e[0];t[0]+=" :: operators boolean>",t[1]=e[1]+1,t[2]=e[2]-1;break;case"empt":t=["< vide :: operators boolean>",n+i+1,a];break;case"sens":for(a++,r=l(s,n+i+1,a),e=l(s,r[1],r[2]),t=[`<${r[0]} ${e[0]}`,e[1],e[2]];s.charAt(e[1])!=="}";)e=l(s,e[1],e[2]),t[0]+=" "+e[0];t[0]+=" :: sensing>",t[1]=e[1]+1,t[2]=e[2]-1;break;case"list":for(a++,r=l(s,n+i+1,a),e=l(s,r[1],r[2]),t=[`<${r[0]} ${e[0]}`,e[1],e[2]];s.charAt(e[1])!=="}";)e=l(s,e[1],e[2]),t[0]+=" "+e[0];t[0]+=" :: list>",t[1]=e[1]+1,t[2]=e[2]-1;break;default:r=l(s,n+i+1,a),t=[`<${r[0]}>`,r[1],r[2]];break}break;case"\\init":b=k.split("{")[0],i=b.length,a++,r=l(s,n+i+1,a),e=l(s,r[1],r[2]),t=[`${r[0]} ${e[0]} `,e[1],e[2]];break;case"\\name":for(b=k.split("{")[0],i=b.length,a++,r=l(s,n+i+1,a),e=l(s,r[1],r[2]),t=[`${r[0]} ${e[0]}`,e[1],e[2]];s.charAt(e[1])!=="}";)e=l(s,e[1],e[2]),t[0]+=" "+e[0];t[1]=e[1]+1,t[2]=e[2]-1;break;default:switch(k){case"}":a--,t=[" ",1+n,a];break;case"\\begin":{a++,s.substring(15+n)[0]==="["?n=s.substring(15+n).indexOf("]")+16+n:n+=15,t=[" <!-- Code Scratch -->",n,a];break}case"\\end":a--,t=[` <!-- Fin du Code Scratch  -->
`,13+n,a];break;case"\\turnleft":t=["gauche ",11+n,a];break;case"\\turnright":t=["droite ",12+n,a];break;case"\\greenflag":t=[" @greenFlag ",10+n,a];break;case"\\selectmenu":a++,r=l(s,12+n,a),t=[`[${r[0]} v]`,r[1]+1,r[2]-1];break;case"\\selectmenu*":a++,r=l(s,13+n,a),t=[`[${r[0]} v] `,r[1]+1,r[2]-1];break;default:b=s.substring(n).split(w)[0],t=[b,b.length+n,a];break}break}return t};let y="",c,O=[],M,C=0;if((g.match(/\{/g)||[]).length!==(g.match(/\}/g)||[]).length)return!1;if(!I.isHtml)y=g;else{const s=/scale=([\d.]+)/,n=g.match(s),a=v!=="block"?' style="display:inline-block; vertical-align:middle";':"",t=B?" scratchblocks-style-scratch3-high-contrast":"";if(n){const e=n[0];y=`<pre class="blocks2${t}" ${a} ${e}>`}else y=`<pre class="blocks${t}" ${a}>`;M=0,c=!1;let r=0;for(;!c&&r<300;)O=l(g,M,C),y+=O[0],M=O[1],C=O[2],C===0&&(c=!0),r++;c||window.notify("Il y a un problème avec le scratchblock, une commande certainement non gérée : ",{stringLatex:g}),y+=`</pre>
`}return y}class z extends D{constructor(){super(),this.bordures=[-6,-6,6,6]}svg(v){function B(){let $=`<g>
`;for(let l=0;l<360;l+=15)$+=`<line x1="${115+Math.round(45*Math.cos(l*Math.PI/180))}" y1="${115+Math.round(45*Math.sin(l*Math.PI/180))}" x2="${115+Math.round(35*Math.cos(l*Math.PI/180))}" y2="${115+Math.round(35*Math.sin(l*Math.PI/180))}" stroke="white" />
`;return $+`</g>
`}function w($){return`<g id="sorientera${$}" style="transform: scale(0.675)">
<g transform="translate(0 0)">
<g transform="translate(2 1)">
<path class="sb3-motion" d="M 0 4
      A 4 4 0 0 1 4 0
      H 12 c 2 0 3 1 4 2
      l 4 4
      c 1 1 2 2 4 2
      h 12
      c 2 0 3 -1 4 -2
      l 4 -4
      c 1 -1 2 -2 4 -2
      L 139 0
      a 4 4 0 0 1 4 4 L 143 44 a 4 4 0 0 1 -4 4 L 48 48 c -2 0 -3 1 -4 2 l -4 4 c -1 1 -2 2 -4 2 h -12 c -2 0 -3 -1 -4 -2 l -4 -4 c -1 -1 -2 -2 -4 -2 L 4 48 a 4 4 0 0 1 -4 -4 Z"></path>
      <text class="sb3-label sb3-" x="0" y="13" transform="translate(8 17)">s'orienter</text>
      <text class="sb3-label sb3-" x="0" y="13" transform="translate(78 17)">à</text>
      <g transform="translate(95 8)">
      <rect rx="16" ry="16" x="0" y="0" width="40" height="32" class="sb3-motion sb3-input sb3-input-number"></rect>
      <text class="sb3-label sb3-literal-number" x="0" y="13" transform="translate(11 9)">${$}</text>
      </g>
      </g>
      </g>
      </g>`}return`<g class="roseDesVents" id=roseDesVents${this.id} transform="translate(-115 -115) scale(${v/20})">
<rect x="50" y="50" rx="4" ry="4" width="130" height="130" fill="#4c97ff" stroke="#3373cc"/>
<circle r="50" cx="115" cy="115" fill="#3373cc" stroke="#3373cc"/>
${B()}
<clipPath id="monClip">
    <rect x="115" y="50" width="50" height="65"></rect>
  </clipPath>
  <circle r="50" cx="115" cy="115" id="quartDeCercle" fill-opacity="0.3" fill="white" clip-path="url(#monClip)"/>
  <defs>
  <g id="direction" x="0" y="0">
  <circle r="10" cx="0" cy="0" fill="white"/>
  <path d="M -6 3 h 7 v 3 l 5 -6 l -5 -6 v 3 h -7 v 6 z" fill="#4c97ff" />
  </g>
 </defs>
 <use href="#direction" x="165" y="115" />
 <use href="#direction" transform="rotate(-90 115 65)" x="115" y="65" />
 <use href="#direction" transform="rotate(-180 65 115)" x="65" y="115" />
 <use href="#direction" transform="rotate(90 115 165)" x="115" y="165" />
  <g transform="translate(65 0)">${w(0)}</g>
<g transform="translate(230 65) rotate(90)">${w(90)}</g>
<g transform="translate(165 230) rotate(180)">${w(180)}</g>
<g transform="translate(0 165) rotate(-90)">${w(-90)}</g>
</g>
`}tikz(){return`\\node (centre) {
    \\begin{tikzpicture}[baseline, scale=0.5]
              \\definecolor{scratchBlue}{RGB}{76, 151, 255}
               \\definecolor{scratchBlue2}{RGB}{51, 115, 204}
                \\pgfmathsetmacro{\\rayon}{1.5}
                \\coordinate (O) at (2,2);
                \\draw[scratchBlue2,thin,fill=scratchBlue,rounded corners] (0,0) rectangle (4,4);
                \\fill[scratchBlue2] (O) circle (\\rayon);
                \\fill[white,opacity=0.3] (O) -- ++(\\rayon,0) arc [start angle=0, end angle=90, radius=\\rayon cm] -- (O);
                \\draw[white,thick] ($(O)+(0,\\rayon)$) -- (O) -- ($(O)+(\\rayon,0)$) coordinate (dir90);
                \\fill[white] (O) circle (2pt);
                \\foreach \\angle in {0,15,...,345} {
      \\coordinate (A) at ($(O)+(\\angle:1.3)$);
                    \\draw[white,thin] ($(O)!0.8!(A)$) -- (A);
      }
                \\fill[white] (dir90) circle (10pt);
                \\node[scratchBlue,fill=scratchBlue,single arrow,scale=0.2] at (dir90) {aa};
                \\coordinate (N) at (2,\\rayon+2);
                \\fill[white] (N) circle (10pt);
                 \\node[scratchBlue,fill=scratchBlue,single arrow,scale=0.2, rotate=90] at (N) {aa};
                   \\coordinate (S) at (2,2-\\rayon);
                   \\fill[white] (S) circle (10pt);
                 \\node[scratchBlue,fill=scratchBlue,single arrow,scale=0.2, rotate=-90] at (S) {aa};
                   \\coordinate (W) at (2-\\rayon,2);
                   \\fill[white] (W) circle (10pt);
                 \\node[scratchBlue,fill=scratchBlue,single arrow,scale=0.2, rotate=180] at (W) {aa};
                 
            \\end{tikzpicture}
    };
        \\node[above] at (centre.north){
    \\begin{scratch}[scale=0.5]
                \\blockmove{s'orienter à \\ovalnum{$0$}}
            \\end{scratch}
      };
        \\node[above,rotate=-90] at (centre.east) {
      \\begin{scratch}[scale=0.5]
                \\blockmove{s'orienter à \\ovalnum{$90$}}
            \\end{scratch}
        };
        \\node[above, rotate=180] at (centre.south){
        \\begin{scratch}[scale=0.5]
                \\blockmove{s'orienter à \\ovalnum{$180$}}
            \\end{scratch}
          };
        \\node[above,rotate=90] at (centre.west){
          \\begin{scratch}[scale=0.5]
                \\blockmove{s'orienter à \\ovalnum{$-90$}}
            \\end{scratch}
            };`}}function W(){return new z}export{W as r,R as s};
//# sourceMappingURL=scratchblock-WmRmb2qv.js.map
