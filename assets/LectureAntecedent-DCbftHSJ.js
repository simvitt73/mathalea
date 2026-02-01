var d=Object.defineProperty;var u=(c,h,t)=>h in c?d(c,h,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[h]=t;var y=(c,h,t)=>u(c,typeof h!="symbol"?h+"":h,t);import{P as C}from"./index-BB3ZcMz7.js";import{O as k}from"./ObjetMathalea2D-CXcNXRpD.js";import{p as l}from"./PointAbstrait-Cz1GEocE.js";import{s as g}from"./segmentsVecteurs-Bz-aNFOx.js";import{t as a}from"./textes-3SpigYLc.js";import{v as m}from"./Vide2d-lYMmc9eB.js";class v extends k{constructor(t,o,i,s,n="black",r,e){super();y(this,"x");y(this,"y");y(this,"xscale");y(this,"yscale");y(this,"textAbs");y(this,"textOrd");y(this,"stringColor");this.x=t,this.y=o,this.xscale=i,this.yscale=s,this.textAbs=e,this.textOrd=r,this.stringColor=n,this.bordures=[0,0,0,0]}svg(t){const o=this.x/this.xscale,i=this.y/this.yscale,s=l(o,i),n=l(o,0),r=l(0,i),e=s.x===n.x&&s.y===n.y?m():g(s,n,this.stringColor),x=s.x===r.x&&s.y===r.y?m():g(r,s,this.stringColor);return e.styleExtremites="->",x.styleExtremites="->",e.pointilles=5,x.pointilles=5,`	
`+e.svg(t)+`	
`+x.svg(t)+`	
`+(this.textAbs!=null?a(this.textAbs,o,-20/t,0,this.stringColor).svg(t):"")+`	
`+(this.textOrd!=null?a(this.textOrd,-20/t,i,0,this.stringColor).svg(t):"")}tikz(){const t=this.x/this.xscale,o=this.y/this.yscale,i=l(t,o),s=l(t,0),n=l(0,o),r=i.x===s.x&&i.y===s.y?m():g(i,s,this.stringColor),e=i.x===n.x&&i.y===n.y?m():g(n,i,this.stringColor);return r.styleExtremites="->",e.styleExtremites="->",r.pointilles=5,e.pointilles=5,`	
`+r.tikz()+`	
`+e.tikz()+`	
`+a(this.textAbs,t,-1/C.scale,0,this.stringColor).tikz()+`	
`+a(this.textOrd,-1/C.scale,o,0,this.stringColor).tikz()}svgml(t,o){const i=this.x/this.xscale,s=this.y/this.yscale,n=l(i,s),r=l(i,0),e=l(0,s),x=n.x===r.x&&n.y===r.y?m():g(n,r,this.stringColor),p=n.x===e.x&&n.y===e.y?m():g(e,n,this.stringColor);return x.styleExtremites="->",p.styleExtremites="->",x.pointilles=5,p.pointilles=5,`	
`+x.svgml(t,o)+`	
`+p.svgml(t,o)+`	
`+a(this.textAbs,i,-20/t,0,this.stringColor).svg(t)+`	
`+a(this.textOrd,-20/t,s,0,this.stringColor).svg(t)}tikzml(t){const o=this.x/this.xscale,i=this.y/this.yscale,s=l(o,i),n=l(o,0),r=l(0,i),e=s.x===n.x&&s.y===n.y?m():g(s,n,this.stringColor),x=s.x===r.x&&s.y===r.y?m():g(r,s,this.stringColor);return e.styleExtremites="->",x.styleExtremites="->",e.pointilles=5,x.pointilles=5,`	
`+e.tikzml(t)+`	
`+x.tikzml(t)+`	
`+a(this.textAbs,o,-1/C.scale,0,this.stringColor).tikz()+`	
`+a(this.textOrd,-1/C.scale,i,0,this.stringColor).tikz()}}function X(c,h,t,o,i="black",s,n){return new v(c,h,t,o,i,s,n)}export{X as l};
//# sourceMappingURL=LectureAntecedent-DCbftHSJ.js.map
