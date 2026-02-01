var $=Object.defineProperty;var b=(e,s,t)=>s in e?$(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var r=(e,s,t)=>b(e,typeof s!="symbol"?s+"":s,t);import{f as d}from"./fixeBordures-BSnKuTIe.js";import{O as m}from"./ObjetMathalea2D-CXcNXRpD.js";import{r as x,a as g,t as A}from"./transformations-XOBa9Ou2.js";import{R as p}from"./index-BvuGzI-o.js";function h(e){const s=document.getElementById(e);s!=null?s.style.visibility="visible":console.log(e+" n'existe pas et ne peut pas être rendu visible.")}function l(e){const s=document.getElementById(e);s!=null?s.style.visibility="hidden":console.log(e+" n'existe pas et ne peut pas être caché.")}function f(e,s=1,t=5,i="Infinity"){let n=1;const a=setInterval(function(){if(document.getElementById(String(e.id)))if(clearInterval(a),l(String(e.id)),Number(i)===1)setTimeout(function(){h(String(e.id))},s*1e3);else{const o=setInterval(function(){l(String(e.id))},t*1e3);setTimeout(function(){h(String(e.id));const u=setInterval(function(){h(String(e.id)),n++,typeof i=="number"&&n>=i&&(clearInterval(o),clearInterval(u))},t*1e3)},s*1e3)}},100)}function y(e,s=1,t=5,i="Infinity"){let n=1;const a=setInterval(function(){if(document.getElementById(String(e.id)))if(clearInterval(a),h(String(e.id)),Number(i)===1)setTimeout(function(){l(String(e.id))},s*1e3);else{const o=setInterval(function(){h(String(e.id))},t*1e3);setTimeout(function(){l(String(e.id));const u=setInterval(function(){l(String(e.id)),n++,typeof i=="number"&&n>=i&&(clearInterval(u),clearInterval(o))},t*1e3)},s*1e3)}},100)}class S extends m{constructor(t,i=2,n=.5,a="indefinite"){super();r(this,"liste");r(this,"dur");r(this,"pourcentage");r(this,"repeat");this.liste=t,this.dur=i,this.pourcentage=n,this.repeat=a}svg(t){let i="<g> ";if(Array.isArray(this.liste))for(const n of this.liste)i+=`
`+n.svg(t);else i+=`
`+this.liste.svg(t);return i+=`<animate attributeType="CSS"
    attributeName="visibility"
    from="hidden"
    to="hidden"
    values="hidden;visible;hidden"
    keyTimes="0; ${this.pourcentage}; 1"
    dur="${this.dur}"
    repeatCount="${this.repeat}"/>`,i+="</g>",i}tikz(){return""}}function N(e,s=2,t=.5,i="indefinite"){return new S(e,s,t,i)}class I extends m{constructor(t,i,n='begin="0s" dur="2s" repeatCount="indefinite"'){super();r(this,"liste");r(this,"v");r(this,"animation");this.liste=Array.isArray(t)?t:[t],this.v=i,this.animation=n;const a=this.liste.map(u=>A(u,i)),o=d(this.liste.concat(a));this.bordures=[o.xmin,o.ymin,o.xmax,o.ymax]}svg(t){let i="<g> ";if(Array.isArray(this.liste))for(const n of this.liste)i+=`
`+n.svg(t);else i+=`
`+this.liste.svg(t);if(Array.isArray(this.v)){i+='<animateMotion path="M 0 0 l';for(const n of this.v)i+=` ${n.xSVG(t)} ${n.ySVG(t)} `;i+=`${this.animation} />`}else i+=`<animateMotion path="M 0 0 l ${this.v.xSVG(t)} ${this.v.ySVG(t)} " ${this.animation} />`;return i+="</g>",i}tikz(){return""}}function w(e,s,t='begin="0s" dur="2s" repeatCount="indefinite"'){return new I(e,s,t)}class G extends m{constructor(t,i,n,a='begin="0s" dur="2s" repeatCount="indefinite"'){super();r(this,"liste");r(this,"O");r(this,"angle");r(this,"animation");this.liste=Array.isArray(t)?t:[t],this.O=i,this.angle=n,this.animation=a;const o=this.liste.map(c=>x(c,i,n)),u=d([...this.liste.concat(o)]);this.bordures=[u.xmin,u.ymin,u.xmax,u.ymax]}svg(t){let i="<g> ";for(const n of this.liste)i+=`
`+n.svg(t);return i+=`<animateTransform
  attributeName="transform"
  type="rotate"
  from="0 ${this.O.xSVG(t)} ${this.O.ySVG(t)}"
  to="${-this.angle} ${this.O.xSVG(t)} ${this.O.ySVG(t)}"
  ${this.animation}
  />`,i+="</g>",i}tikz(){return""}}function z(e,s,t,i='begin="0s" dur="2s" repeatCount="indefinite"'){return new G(e,s,t,i)}class T extends m{constructor(t,i,n='begin="0s" dur="2s" repeatCount="indefinite"'){super();r(this,"p");r(this,"d");r(this,"animation");this.p=t,this.d=i,this.animation=n;const a=d([t,g(t,i)]);this.bordures=[a.xmin,a.ymin,a.xmax,a.ymax]}svg(t){const i=this.p.binomesXY(t),a=g(this.p,this.d).binomesXY(t);return`<polygon stroke="${this.p.color[0]}" stroke-width="${this.p.epaisseur}" fill="${this.p.couleurDeRemplissage[0]}" >
    <animate attributeName="points" ${this.animation}
    from="${i}"
    to="${a}"
    />
    </polygon>`}tikz(){return""}}function M(e,s,t='begin="0s" dur="2s" repeatCount="indefinite"'){return new T(e,s,t)}class V extends m{constructor(t,i,n,a,o,u,c=5,v=2){super();r(this,"figure1");r(this,"v");r(this,"figure2");r(this,"O");r(this,"angle");r(this,"t1");r(this,"t2");r(this,"numId");this.figure1=i,this.v=n,this.figure2=a,this.O=o,this.angle=u,this.t1=c,this.t2=v,this.numId=t}svg(t){Array.isArray(this.figure2)?this.figure2.forEach(n=>{f(n,this.t1,this.t1+this.t2,1)}):f(this.figure2,this.t1,this.t1+this.t2,1);let i="<g> ";if(Array.isArray(this.figure1))for(const n of this.figure1)i+=`
`+n.svg(t);else i+=`
`+this.figure1.svg(t);if(i+=`<animateTransform
    attributeName="transform"
    attributeType="XML"
    type="translate"
    from="0 0"
    to="${p(this.v.xSVG(t),0)} ${p(this.v.ySVG(t),0)}"
    begin="0s" dur="${this.t1}s" fill="freeze"  repeatCount="1" id="translat${this.numId}"
    /></path></g>`,Array.isArray(this.figure1)?this.figure1.forEach(n=>{y(n,this.t1,0,1)}):y(this.figure1,this.t1,0,1),i+="<g>",Array.isArray(this.figure2))for(const n of this.figure2)i+=`
`+n.svg(t);else i+=`
`+this.figure2.svg(t);return i+=`<animateTransform
  attributeName="transform"
  type="rotate"
  from="0 ${this.O.xSVG(t)} ${this.O.ySVG(t)}"
  to="${-this.angle} ${this.O.xSVG(t)} ${this.O.ySVG(t)}"
  begin="translat${this.numId}.end" dur="${this.t2}s" fill="freeze" repeatCount="1" id="rotat-${this.numId}"
  /></path>`,i+="</g>",i}}function B(e,s,t,i,n,a,o=5,u=2){return new V(e,s,t,i,n,a,o,u)}export{N as a,B as b,z as r,M as s,w as t};
//# sourceMappingURL=2dAnimation-Bev4BI_H.js.map
