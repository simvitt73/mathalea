import{c as g}from"./CodageAngleDroit-DbjUDtr4.js";import{c as p}from"./CodageSegment-CxyIX_Oo.js";import{l as f,c as l}from"./utilitairesGeometriques-rO8Jz15i.js";import{f as x}from"./fixeBordures-BSnKuTIe.js";import{O as h}from"./ObjetMathalea2D-CXcNXRpD.js";import{r as k}from"./transformations-CvkJBE7u.js";import{m as v}from"./segmentsVecteurs-Bz-aNFOx.js";class z extends h{constructor(t,o,i="black",u="x"){super(),f(t,o)<.1&&window.notify("CodageMediatrice : Points trop rapprochés pour créer ce codage",{A:t,B:o}),this.color=l(i);const s=v(t,o),d=k(t,s,90),n=g(d,s,o,i),e=p(u,i,t,s,s,o),c=x([t,o,s,n]);this.bordures=[c.xmin,c.ymin,c.xmax,c.ymax],this.svg=function(r){return`<g id="${this.id}">${n.svg(r)+`
`+e.svg(r)}</g>`},this.tikz=function(){return n.tikz()+`
`+e.tikz()},this.svgml=function(r,m){return n.svgml(r,m)+`
`+e.svg(r)},this.tikzml=function(r){return n.tikzml(r)+`
`+e.tikz()}}}function L(a,t,o="black",i="x"){return new z(a,t,o,i)}export{L as c};
//# sourceMappingURL=CodageMediatrice-C_nQWNal.js.map
