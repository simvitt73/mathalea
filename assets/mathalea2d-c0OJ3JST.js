import{k as I}from"./vendors/katex-BISJkeK-.js";import{O as b}from"./ObjetMathalea2D-CXcNXRpD.js";import{n as R}from"./utilitairesGeometriques-rO8Jz15i.js";import{P as V,Q as W}from"./index-BvuGzI-o.js";const Z=(a="")=>W(a).join(" ");function x({xmin:a=0,ymin:p=0,xmax:k=15,ymax:u=6,pixelsParCm:r=20,scale:m=1,zoom:g=1,optionsTikz:z=[],mainlevee:E=!1,amplitude:q=1,style:O="display: block",id:A="",usePgfplots:Q=!1,centerLatex:w=!1}={},...T){const K=(o,n,$,y,h)=>{let f="";if(n instanceof b&&n.objets!=null&&(n=n.objets),!Array.isArray(n)&&n!=null)try{const i=n;if(!o||typeof(i==null?void 0:i.svgml)>"u"){if(i!=null&&i.svg){const c=i.svg(r);if(typeof c=="string")f="	"+i.svg(r)+`
`;else{const e=c;if(typeof e!="object")return window.notify("Dans mathalea2d, la méthode svg() de l'objet a renvoyé quelque chose d'inconnu",{codeLatex:e}),f;const l=(e.x-y)*r*g,D=-(e.y-h)*r*g;if("letterSize"in e){e.backgroundColor=e.backgroundColor.replace("{","").replace("}",""),e.color=e.color.replace("{","").replace("}","");const v=e.backgroundColor!==""&&e.backgroundColor!=="none"?`<div class="divLatex" style="background-color: ${e.backgroundColor}; position: absolute; top: ${D}px; left: ${l}px; transform: translate(-50%,-50%) rotate(${-e.orientation}deg); opacity: ${e.opacity};" data-top=${D} data-left=${l}>${I.renderToString("\\"+e.letterSize+" {\\color{"+e.color+"}{"+(e.gras?"\\textbf{":"")+e.latex+(e.gras?"}":"")+"}}")}</div>`:`<div class="divLatex" style="position: absolute; top: ${D}px; left: ${l}px; transform: translate(-50%,-50%) rotate(${R(-e.orientation)}deg); opacity: ${e.opacity};" data-top=${D} data-left=${l}>${I.renderToString("{\\color{"+e.color+"} \\"+e.letterSize+"{"+(e.gras?"\\textbf{":"")+e.latex+(e.gras?"}":"")+"}}")}</div>`;$.push(v)}else if("exercice"in e){if("inputs"in e){const v=e,U=v.inputs,G=v.exercice.interactif;for(const s of U){const B=(s.x-y)*r*g,J=-(s.y-h)*r*g,L=Z(s.classe),M=`<div class="divLatex" style="position: absolute; top: ${J}px; left: ${B}px; transform: translate(-50%,-50%); opacity: ${s.opacity};" data-top=${J} data-left=${B}>${G?`<math-field data-keyboard="${L}" virtual-keyboard-mode=manual readonly class="${s.classe} fillInTheBlanks" id="MetaInteractif2dEx${v.exercice.numeroExercice}Q${v.question}field${s.index}">${s.content.replace("%{champ1}","\\placeholder[champ1]{}")}</math-field>`:I.renderToString(s.content.replace("%{champ1}",s.blanc))}</div>`;$.push(M)}}}else window.notify("Dans mathalea2d, la méthode svg() de l'objet a renvoyé un objet inconnu",{codeLatex:e})}}}else i!=null&&i.svgml&&(f="	"+i.svgml(r,q)+`
`)}catch(i){window.notify(i instanceof Error?i.message:String(i),{objet:JSON.stringify(n)})}else if(n!=null&&Array.isArray(n))for(const i of n)f+=K(o,i,$,y,h);else window.notify("Un problème avec ce mathalea2d, la liste des objets contient un truc louche",{objets:JSON.stringify(n)});return f},H=(o,n,$=!1,y,h,f,i)=>{let c="";if($&&n instanceof b&&n.isRepere===!0)return c;const e=n instanceof b&&n.usePgfplots===!0;if(n instanceof b&&n.objets!=null&&!e&&(n=n.objets),Array.isArray(n))for(const l of n)c+=H(o,l,$,y,h,f,i);else try{n instanceof b&&(!o||typeof n.tikzml>"u"?typeof n.tikz=="function"&&(n.usePgfplots===!0?c="	"+n.tikz(y,h,f,i)+`
`:c="	"+n.tikz()+`
`):typeof n.tikzml=="function"&&(c="	"+n.tikzml(q)+`
`))}catch(l){console.log(l instanceof Error?l.message:String(l))}return c},N=[];let S=`<svg class="mathalea2d"  ${A!==""?`id="${A}"`:""} width="${(k-a)*r*g}" height="${(u-p)*r*g}" viewBox="${a*r} ${-u*r} ${(k-a)*r} ${(u-p)*r}" xmlns="http://www.w3.org/2000/svg" >
`;S+=K(E,T,N,a,u),S+=`
</svg>`,S=S.replace(/\\thickspace/gm," ");const F=`<div class="svgContainer" ${O?`style="${O}"`:""}>
        <div ${A!==""?`id="M2D${A}"`:""} style="position: relative;${O}">
          ${S}
          ${N.join(`
`)}
        </div>
      </div>`;let t;const d=[];if(z!==void 0&&(typeof z=="string"?d.push(z):z.forEach(o=>d.push(o))),Q){t=w?`{\\centering
`:"",t+="\\begin{tikzpicture}[baseline";for(let o=0;o<d.length;o++)t+=`,${d[o]}`;m!==1&&(t+=`,scale = ${m}`),t+=`]
`,t+=`\\begin{axis}[
`,t+=`  xmin=${a}, xmax=${k},
`,t+=`  ymin=${p}, ymax=${u},
`,t+=`  axis lines=middle,
`,t+=`  axis line style={-Stealth},
`,t+=`  axis on top=false,
`,t+=`  xlabel={},
`,t+=`  ylabel={},
`,t+=`  xtick distance=2,
`,t+=`  ytick distance=2,
`,t+=`  minor tick num=1,
`,t+=`  grid=both,
`,t+=`  grid style={line width=.1pt, draw=gray!30},
`,t+=`  major grid style={line width=.2pt,draw=gray!50},
`,t+=`  tick label style={font=\\scriptsize},
`,t+=`  every axis plot/.append style={line width=1pt},
`,t+=`  clip=true,
`,t+=`]
`,t+=H(E,T,!0,p,u,a,k),t+=`\\end{axis}
`,t+="\\end{tikzpicture}",w&&(t+="\\par}")}else{if(t=w?`{\\centering
`:"",m===1){t+="\\begin{tikzpicture}[baseline";for(let o=0;o<d.length;o++)t+=`,${d[o]}`;t+=`]
`}else{t+="\\begin{tikzpicture}[baseline";for(let o=0;o<d.length;o++)t+=`,${d[o]}`;t+=`,scale = ${m}`,t+=`]
`}t+=`
    \\tikzset{
      point/.style={
        thick,
        draw,
        cross out,
        inner sep=0pt,
        minimum width=5pt,
        minimum height=5pt,
      },
    }
    \\clip (${a},${p}) rectangle (${k},${u});
    `,t+=H(E,T),t+=`
\\end{tikzpicture}`,w&&(t+="\\par}")}return O.includes("display: block")&&!w&&(t+=`\\\\
`),V.isHtml?F:t}export{x as m};
//# sourceMappingURL=mathalea2d-c0OJ3JST.js.map
