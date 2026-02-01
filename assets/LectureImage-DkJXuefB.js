var d=Object.defineProperty;var u=(y,h,t)=>h in y?d(y,h,{enumerable:!0,configurable:!0,writable:!0,value:t}):y[h]=t;var c=(y,h,t)=>u(y,typeof h!="symbol"?h+"":h,t);import{P as C}from"./index-CMKaCP9B.js";import{O as v}from"./ObjetMathalea2D-CXcNXRpD.js";import{p as l}from"./PointAbstrait-Cz1GEocE.js";import{s as g}from"./segmentsVecteurs-DhSnlc3S.js";import{t as a}from"./textes-BId1S-Qs.js";import{v as m}from"./Vide2d-lYMmc9eB.js";class k extends v{constructor(t,r,n=1,s=1,i="red",o="",e=""){super();c(this,"x");c(this,"y");c(this,"xscale");c(this,"yscale");c(this,"textAbs");c(this,"textOrd");c(this,"stringColor");this.x=t,this.y=r,this.xscale=n,this.yscale=s,this.textAbs=o,this.textOrd=e,this.stringColor=i,this.bordures=[0,0,0,0]}svg(t){const r=this.x/this.xscale,n=this.y/this.yscale,s=l(r,n),i=l(r,0),o=l(0,n),e=s.x===i.x&&s.y===i.y?m():g(i,s,this.stringColor),x=s.x===o.x&&s.y===o.y?m():g(s,o,this.stringColor);return e.styleExtremites="->",x.styleExtremites="->",e.pointilles=5,x.pointilles=5,`	
`+e.svg(t)+`	
`+x.svg(t)+`	
`+(this.textAbs!=null?a(this.textAbs,r,-20/t,0,this.stringColor).svg(t):"")+`	
`+(this.textOrd!=null?a(this.textOrd,-20/t,n,0,this.stringColor).svg(t):"")}tikz(){const t=this.x/this.xscale,r=this.y/this.yscale,n=l(t,r),s=l(t,0),i=l(0,r),o=n.x===s.x&&n.y===s.y?m():g(s,n,this.stringColor),e=n.x===i.x&&n.y===i.y?m():g(n,i,this.stringColor);return o.styleExtremites="->",e.styleExtremites="->",o.pointilles=5,e.pointilles=5,`	
`+o.tikz()+`	
`+e.tikz()+`	
`+a(this.textAbs,t,-1/C.scale,0,this.stringColor).tikz()+`	
`+a(this.textOrd,-1/C.scale,r,0,this.stringColor).tikz()}svgml(t,r){const n=this.x/this.xscale,s=this.y/this.yscale,i=l(this.x,this.y),o=l(n,0),e=l(0,s),x=i.x===o.x&&i.y===o.y?m():g(o,i,this.stringColor),p=i.x===e.x&&i.y===e.y?m():g(i,e,this.stringColor);return x.styleExtremites="->",p.styleExtremites="->",x.pointilles=5,p.pointilles=5,`	
`+x.svgml(t,r)+`	
`+p.svgml(t,r)+`	
`+a(this.textAbs,n,-20/t,0,this.stringColor).svg(t)+`	
`+a(this.textOrd,-20/t,s,0,this.stringColor).svg(t)}tikzml(t){const r=this.x/this.xscale,n=this.y/this.yscale,s=l(this.x,this.y),i=l(r,0),o=l(0,n),e=s.x===i.x&&s.y===i.y?m():g(i,s,this.stringColor),x=s.x===o.x&&s.y===o.y?m():g(s,o,this.stringColor);return e.styleExtremites="->",x.styleExtremites="->",e.pointilles=5,x.pointilles=5,`	
`+e.tikzml(t)+`	
`+x.tikzml(t)+`	
`+a(this.textAbs,r,-1/C.scale,0,this.stringColor).tikz()+`	
`+a(this.textOrd,-1/C.scale,n,0,this.stringColor).tikz()}}function X(y,h,t=1,r=1,n="red",s="",i=""){return new k(y,h,t,r,n,s,i)}export{X as l};
//# sourceMappingURL=LectureImage-DkJXuefB.js.map
