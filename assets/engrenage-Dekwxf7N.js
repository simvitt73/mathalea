var A=Object.defineProperty;var w=(c,i,e)=>i in c?A(c,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[i]=e;var h=(c,i,e)=>w(c,typeof i!="symbol"?i+"":i,e);import{R as l}from"./index-BB3ZcMz7.js";import{c as b}from"./utilitairesGeometriques-rO8Jz15i.js";import{O as M}from"./ObjetMathalea2D-CXcNXRpD.js";function x(c){return Math.cos(c*Math.PI/180)}function D(c){return Math.sin(c*Math.PI/180)}class B extends M{constructor({rayon:e=1,rayonExt:t,rayonInt:s,nbDents:r=12,xCenter:$=0,yCenter:g=0,color:a="black",couleurDeRemplissage:p="black",couleurDuTrou:m="white",dureeTour:f=10,angleStart:y=90,marqueurG:o=null,marqueurD:n=null,marqueurColorG:u="Sienna",marqueurColorD:d="Sienna"}){super();h(this,"rayon");h(this,"rayonExt");h(this,"rayonInt");h(this,"nbDents");h(this,"xCenter");h(this,"yCenter");h(this,"couleurDeRemplissage");h(this,"couleurDuTrou");h(this,"dureeTour");h(this,"angleStart");h(this,"marqueurG");h(this,"marqueurD");h(this,"marqueurColorG");h(this,"marqueurColorD");this.rayon=e,this.rayonExt=t>e?t:l(e*4/3),this.rayonInt=s<e?s:l(e*3/4),this.nbDents=r,this.xCenter=$,this.yCenter=g,this.dureeTour=f,this.marqueurG=o,this.marqueurD=n,this.marqueurColorG=u,this.marqueurColorD=d,this.color=b(a),this.couleurDeRemplissage=b(p),this.couleurDuTrou=b(m),this.angleStart=y,this.bordures=[$-t-.2,g-t-.2,$+t+.2,g+t+.2]}svg(e){const t=this.xCenter*e,s=-this.yCenter*e,r=l(this.rayon*e),$=l(this.rayonExt*e),g=l(this.rayonInt*e),a=360/this.nbDents,p=l($-r),m=l(r*D(.25*a)),f=l(t+r*x(a*.25+this.angleStart)),y=l(s+r*D(a*.25+this.angleStart));let o=`<g class="roueEngrenage" id=roue${this.id}>
      <path stroke="${this.color[0]}" fill="${this.couleurDeRemplissage[0]}"
        d="M ${f},${y} `;for(let n=0;n<this.nbDents;n++){const u=t+r*x(a*(-n-.25)+this.angleStart),d=s+r*D(a*(-n-.25)+this.angleStart),S=t+$*x(a*(-n+.125)+this.angleStart),q=s+$*D(a*(-n+.125)+this.angleStart),T=t+$*x(a*(-n-.125)+this.angleStart),k=s+$*D(a*(-n-.125)+this.angleStart),R=t+r*x(a*(-n-.75)+this.angleStart),G=s+r*D(a*(-n-.75)+this.angleStart);o+=`A${p},${m} ${180+this.angleStart-n*a},0 0 ${S},${q} L${T},${k} A${p},${m} ${l(180+this.angleStart-(n-.125)*a)}, 0, 0 ${u},${d} A${r},${r} 0, 0, 0 ${R},${G} `}return o+='Z"/>',typeof this.marqueurG=="number"&&(o+=`<circle cx="${l(t+(r-5)*x(this.marqueurG))}" cy="${l(s+(r-5)*D(this.marqueurG))}" r="3" stroke="HotPink" fill="${this.marqueurColorG}" />`),typeof this.marqueurD=="number"&&(o+=`<circle cx="${l(t+(r-5)*x(this.marqueurD))}" cy="${l(s+(r-5)*D(this.marqueurD))}" r="3" stroke="HotPink" fill="${this.marqueurColorD}" />`),this.dureeTour!==0?o+=`<animateTransform
        id="animRoue${this.id}"
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 ${t} ${s}"
        to="${this.dureeTour<0?-360:360} ${t} ${s}"
        dur="${Math.abs(this.dureeTour)}"
        repeatCount="indefinite"
        />
        </g>
        <circle cx="${t}" cy="${s}" r="${g}" stroke="${this.color[0]}" fill="${this.couleurDuTrou[0]}" />
        <text class="compteurDeTours" id="compteur${this.id}" fill="red" align="middle" dominant-baseline="middle" text-anchor="middle" x="${t}" y="${s}">0</text>`:o+=`</g>
        <circle cx="${t}" cy="${s}" r="${g}" stroke="${this.color[0]}" fill="${this.couleurDuTrou[0]}" />`,o}tikz(){const e=this.rayon,t=this.rayonExt,s=this.rayonInt;let r=`% engrenage de rayon ${this.rayon}, avec ${this.nbDents} dents centré en (${this.xCenter};${this.yCenter})
      \\foreach \\i in {1,2,...,${this.nbDents}}{
                    \\pgfmathparse{360*(\\i-1)/${this.nbDents}}\\let\\angle\\pgfmathresult
                    \\begin{scope}[shift={(${this.xCenter},${this.yCenter})}]
                        \\pgfmathparse{${this.rayon}*cos(${this.angleStart}+90/${this.nbDents})}\\let\\Ax\\pgfmathresult
                    \\pgfmathparse{${e}*sin(${this.angleStart}+90/${this.nbDents})}\\let\\Ay\\pgfmathresult
                    \\pgfmathparse{${e}*cos(${this.angleStart}-90/${this.nbDents})}\\let\\Bx\\pgfmathresult
                    \\pgfmathparse{${e}*sin(${this.angleStart}-90/${this.nbDents})}\\let\\By\\pgfmathresult
                    \\pgfmathparse{${t}*cos(${this.angleStart}+45/${this.nbDents})}\\let\\Cx\\pgfmathresult
                    \\pgfmathparse{${t}*sin(${this.angleStart}+45/${this.nbDents})}\\let\\Cy\\pgfmathresult
                    \\pgfmathparse{${t}*cos(${this.angleStart}-45/${this.nbDents})}\\let\\Dx\\pgfmathresult
                    \\pgfmathparse{${t}*sin(${this.angleStart}-45/${this.nbDents})}\\let\\Dy\\pgfmathresult
                    \\pgfmathparse{${this.angleStart}-90/${this.nbDents}}\\let\\a\\pgfmathresult
                    \\pgfmathparse{${this.angleStart}-270/${this.nbDents}}\\let\\b\\pgfmathresult
                    \\fill[${this.couleurDeRemplissage[1]},draw,rotate=\\angle] (0,0) -- (\\Ax,\\Ay) to[bend left=15] (\\Cx,\\Cy) -- (\\Dx,\\Dy) to[bend left=15] (\\Bx,\\By) arc (\\a:\\b:${e}cm) -- cycle;
                    \\draw[${this.color[1]},rotate=\\angle] (\\Ax,\\Ay) to[bend left=15] (\\Cx,\\Cy) -- (\\Dx,\\Dy) to[bend left=15] (\\Bx,\\By) arc (\\a:\\b:${e}cm);
                    \\end{scope}}
                \\fill[${this.couleurDuTrou[1]},draw=${this.color[1]}] (${this.xCenter},${this.yCenter}) circle (${s});
    `;return typeof this.marqueurD=="number"&&(r+=`\\fill[HotPink,draw=black] (${l(this.xCenter+(e-.2)*x(this.marqueurD),2)},${l(this.yCenter+(e-.2)*D(this.marqueurD),2)}) circle (0.1degS);
  `),r}}function C({rayon:c=1,rayonExt:i,rayonInt:e,nbDents:t=12,xCenter:s=0,yCenter:r=0,color:$="black",couleurDeRemplissage:g="black",couleurDuTrou:a="white",dureeTour:p=10,angleStart:m=90,marqueurG:f=null,marqueurD:y=null,marqueurColorG:o="Sienna",marqueurColorD:n="Sienna"}){return new B({rayon:c,rayonExt:i,rayonInt:e,nbDents:t,xCenter:s,yCenter:r,color:$,couleurDeRemplissage:g,couleurDuTrou:a,dureeTour:p,angleStart:m,marqueurG:f,marqueurD:y,marqueurColorG:o,marqueurColorD:n})}function L({dureeTourBase:c=0,module:i=.5,marqueurs:e=!1}={},...t){const s=[];let r=0;const $=0;let g=0,a=0,p=c,m=0,f,y,o,n;for(let u=0;u<t.length-1;u++){g=i*t[u],a=i*t[u+1];const d=(g+a)/2;e&&(u===0?(f=null,y=0,n="Sienna"):u%2===1?(f=180,y=0,o="Sienna",n="blue"):(f=180,y=0,o="blue",n="Sienna")),s.push(C({marqueurG:f,marqueurD:y,marqueurColorD:n,marqueurColorG:o,dureeTour:p,angleStart:m,rayonInt:i*2,rayon:g*.5-.625*i,rayonExt:g*.5+i/2,nbDents:t[u],xCenter:r,yCenter:$,couleurDeRemplissage:"green",color:"black",couleurDuTrou:"white"})),r+=d,m===0?t[u+1]%2===0?m=180/t[u+1]:m=0:t[u+1]%2===0?m=0:m=180/t[u+1],p=-p*a/g}return s.push(C({marqueurG:180,marqueurD:null,marqueurColorG:n,dureeTour:p,angleStart:m,rayonInt:i*2,rayon:a*.5-.625*i,rayonExt:a*.5+i/2,nbDents:t[t.length-1],xCenter:r,yCenter:$,couleurDeRemplissage:"green",color:"black",couleurDuTrou:"white"})),s}export{L as e};
//# sourceMappingURL=engrenage-Dekwxf7N.js.map
