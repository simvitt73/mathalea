import{c as g}from"./utilitairesGeometriques-rO8Jz15i.js";import{O as a}from"./ObjetMathalea2D-CXcNXRpD.js";import{s as j}from"./segmentsVecteurs-Bz-aNFOx.js";class d extends a{constructor(e=-30,t=-30,s=30,o=30,r="gray",l=.4,i=1,h=0){super(),this.color=g(r),this.opacite=l,this.objets=[];let n=e,c=Math.round((s-e)/i);for(let b=0;b<=c;b++){const f=j(n,t,n,o,r);n+=i,f.opacite=this.opacite,h&&(f.pointilles=5),this.objets.push(f)}let p=t;c=Math.round((o-t)/i);for(let b=0;b<=c;b++){const f=j(e,p,s,p,r);p+=i,f.opacite=this.opacite,h&&(f.pointilles=5),this.objets.push(f)}this.bordures=[e,t,s,o]}svg(e){let t="";if(this.objets==null)return t;for(const s of this.objets)t+=`
	`+s.svg(e);return t}tikz(){let e="";if(this.objets==null)return e;for(const t of this.objets)e+=`
	`+t.tikz();return e}svgml(e,t){let s="";if(this.objets==null)return s;for(const o of this.objets)o.svgml?s+=`
	`+o.svgml(e,t):s+=`
	`+o.svg(e);return s}tikzml(e){let t="";if(this.objets==null)return t;for(const s of this.objets)typeof s.tikzml>"u"?t+=`
	`+s.tikz():t+=`
	`+s.tikzml(e);return t}}function z(u=-30,e=-30,t=30,s=30,o="gray",r=.4,l=1,i=0){return new d(u,e,t,s,o,r,l,i)}class k extends a{constructor(e=-30,t=-30,s=30,o=30,r="gray",l=.4,i=1,h=""){super(),this.color=g(r),this.opacite=l,this.objets=[];for(let n=t;n<=o;n+=i){const c=j(e,n,s,n,r);c.opacite=this.opacite,h&&(c.pointilles=5),this.objets.push(c)}}svg(e){let t="";if(this.objets==null)return t;for(const s of this.objets)t+=`
	`+s.svg(e);return t}tikz(){let e="";if(this.objets==null)return e;for(const t of this.objets)e+=`
	`+t.tikz();return e}}function H(u=-30,e=-30,t=30,s=30,o="gray",r=.4,l=1,i=""){return new k(u,e,t,s,o,r,l,i)}class v extends a{constructor(e=-30,t=-30,s=30,o=30,r="gray",l=.4,i=1,h=""){super(),this.color=g(r),this.opacite=l,this.objets=[];for(let n=e;n<=s;n=n+i){const c=j(n,t,n,o,r);c.opacite=this.opacite,h&&(c.pointilles=5),this.objets.push(c)}}svg(e){let t="";if(this.objets==null)return t;for(const s of this.objets)t+=`
	`+s.svg(e);return t}tikz(){let e="";if(this.objets==null)return e;for(const t of this.objets)e+=`
	`+t.tikz();return e}}function O(u=-30,e=-30,t=30,s=30,o="gray",r=.4,l=1,i=""){return new v(u,e,t,s,o,r,l,i)}class w extends a{constructor(e=0,t=0,s=15,o=15,r=.5,l=.2){super(),this.objets=[];for(let i=t;i<=o;i=i+.25)if(i%1!==0){const h=j(e,i,s,i,"red");h.opacite=l,this.objets.push(h)}this.objets.push(z(e,t,s,o,"blue",r,1))}svg(e){let t="";if(this.objets==null)return t;for(const s of this.objets)t+=`
	`+s.svg(e);return t}tikz(){let e="";if(this.objets==null)return e;for(const t of this.objets)e+=`
	`+t.tikz();return e}}function S(u,e,t,s,o=.5,r=.2){return new w(u,e,t,s,o,r)}export{O as a,z as g,H as l,S as s};
//# sourceMappingURL=Grille-Bdia0Xrb.js.map
