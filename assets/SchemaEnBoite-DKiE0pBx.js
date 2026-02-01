var G=Object.defineProperty;var J=(E,t,o)=>t in E?G(E,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):E[t]=o;var M=(E,t,o)=>J(E,typeof t!="symbol"?t+"":t,o);import{P as K,B as f,a9 as Q}from"./index-vfG7N0N9.js";class A{constructor({lignes:t,bottomBraces:o,topBraces:s,rightBraces:l}={lignes:[]}){M(this,"topBraces");M(this,"bottomBraces");M(this,"lignes",[]);M(this,"rightBraces");M(this,"maxEnteteLength");this.lignes=t,this.rightBraces=[],o&&(this.bottomBraces=o),s&&(this.topBraces=s),l&&(this.rightBraces=l)}display(t=.8){var o,s,l,b,L,k,O,P,D;if(K.isHtml){let y=0,R=!1;for(const c of this.lignes)c.entete!==void 0&&(R=!0,(c.entete.longueur??0)>y&&(y=c.entete.longueur??0));this.maxEnteteLength=y;let B="";if(this.topBraces)for(let c=0;c<this.topBraces.length;c++){const i=this.topBraces[c],p=i.start,a=i.end,n=i.text,h=i.type??"accolade",r=i.options??{},d=r.justify??"center",e=r.color??"black",g=r.fontSize??"1em",v=r.fontWeight??"normal",w=r.lineHeight??"1.2em";p!=null&&a!=null&&n!=null&&(B+=h==="flèche"?`<div class="SchemaTop" style="grid-row: 1; grid-column-start: ${p+y}; grid-column-end: ${a+y}; text-align:center; border: none; --arrow-color: ${e}">
                    <div class="latexAccoladeTop" style="text-align: ${d}; color: ${e}; font-size: ${g}; font-weight: ${v}; line-height: ${w}">${n}</div>
                  <div class="horizontalArrow">
                    <div class="horizontalArrowHead" style="transform: rotate(180deg);"></div>
                    <div class="horizontalArrowLine"></div>
                    <div class="horizontalArrowHead"></div>
                  </div>
                </div>
`:`<div class="SchemaTop" style="grid-row: 1; grid-column-start: ${p+y}; grid-column-end: ${a+y}; text-align:center; border: none"; --brace-color: ${e}">
                    <div class="latexAccoladeTop" style="text-align: ${d}; color: ${e}; font-size: ${g}; font-weight: ${v}; line-height: ${w}">${n}</div>
                    <div class="braceTop">
                      <div class="braceTopLeft">
                        <div class="curlTopLeftLeft"></div>
                        <div class="lineTopLeftMiddle"></div>
                        <div class="curlTopLeftRight"></div>
                      </div>
                      <div class="braceTopRight">
                        <div class="curlTopRightLeft"></div>
                        <div class="lineTopRightMiddle"></div>
                        <div class="curlTopRightRight"></div>
                      </div>
                    </div>
                </div>
`)}const x=[];let m=0;for(let c=0;c<this.lignes.length;c++){const i=this.lignes[c],p=((o=i.entete)==null?void 0:o.content)??"",a=((s=i.entete)==null?void 0:s.couleur)??"black",n=((l=i.entete)==null?void 0:l.fontSize)??"1em",h=((b=i.entete)==null?void 0:b.fontWeight)??"normal",r=i.spacing??0,d=i.height??"1.2em";let e="",g=1;const v=i.barres??[];for(let w=0;w<v.length;w++){const u=v[w];if(u.length<=0)continue;u.content==null&&(u.content=""),u.color==null&&(u.color="lightgray"),u.options==null&&(u.options={});const T=u.options??{},I=T.justify??"center",F=T.color??"black",W=T.fontSize??"1em",j=T.fontWeight??"normal",H=T.style??"",N=u.type??"boite",C=T.borderless??!1;e+=N==="boite"?`<div class="SchemaItem" style="grid-row: ${c+2+m};
                  grid-column-start: ${g+y};
                  grid-column-end: ${g+u.length+y};
                  background-color:${u.color};
                  justify-content:${I};
                  color:${F};
                  font-size:${W};
                  font-weight:${j};
                  line-height:${d};
                  ${C?"border: none;":w>0?"border-left: none;":"border: solid 1px black;"}
                   ${H}">
                ${u.content.includes("<br>")?`<div style="text-align: center;">${u.content}</div>
`:u.content}
              </div>
`:`<div class="SchemaItem" style="grid-row: ${c+2+m};
                  grid-column-start: ${g+y};
                  grid-column-end: ${g+u.length+y};
                  background-color:${u.color};
                  font-size:${W};
                  font-weight:${j};
                  line-height:${d};
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  border: ${C?"none":"solid 1px black"};
                  ${H}">
                <div class="horizontalArrow" style="width: 100%;margin-top: 0.5em; --arrow-color: ${F}">
                  <div class="horizontalArrowHead" style="border-left: 12px solid ${F}; transform: rotate(180deg);"></div>
                  <div class="horizontalArrowLine" style="--arrow-color: ${F}"></div>
                  <div class="horizontalArrowHead" style="border-left: 12px solid ${F};"></div>
                </div>
                <div style="width: 100%; text-align: center; color: ${F};">${u.content}</div>
              </div>
`,g+=u.length}R?x.push(`<div class="SchemaItem" style="grid-row: ${c+2+m}; grid-column-start: 1; grid-column-end: ${y+1}; border: none; color: ${a}; font-size: ${n}; font-weight: ${h}">${p}</div>
`+e):x.push(e),r>0&&(x.push(`<div class="SchemaItem" style="grid-row: ${c+3+m}; grid-column-start: 1; grid-column-end: 2; border: none; height: ${r}em"></div>
`),m++)}let $="";if(this.bottomBraces)for(let c=0;c<this.bottomBraces.length;c++){const i=this.bottomBraces[c],p=i.start,a=i.end,n=i.text,h=i.type??"accolade",r=i.options??{},d=r.justify??"center",e=r.color??"black",g=r.fontSize??"1em",v=r.fontWeight??"normal",w=r.lineHeight??"1.2em";p!=null&&a!=null&&n!=null&&($+=h==="flèche"?`<div class="SchemaBottom" style="grid-row: ${this.lignes.length+2+m}; grid-column-start: ${p}; grid-column-end: ${a}; text-align:center; border: none; --brace-color: ${e}">
                  <div class="horizontalArrow">
                    <div class="horizontalArrowHead" style="transform: rotate(180deg);"></div>
                    <div class="horizontalArrowLine"></div>
                    <div class="horizontalArrowHead"></div>
                  </div>
                    <div class="latexAccoladeBottom" style="text-align: ${d}; color: ${e}; font-size: ${g}; font-weight: ${v}; line-height: ${w}">${n}</div>
                </div>
`:`<div class="SchemaBottom" style="grid-row: ${this.lignes.length+2+m}; grid-column-start: ${p+y}; grid-column-end: ${a+y}; text-align:center; border: none; --brace-color: ${e}">
                    <div class="braceBottom">
                      <div class="braceBottomLeft">
                        <div class="curlBottomLeftLeft"></div>
                        <div class="lineBottomLeftMiddle"></div>
                        <div class="curlBottomLeftRight"></div>
                      </div>
                    <div class="braceBottomRight">
                      <div class="curlBottomRightLeft"></div>
                      <div class="lineBottomRightMiddle"></div>
                      <div class="curlBottomRightRight"></div>
                    </div>
                  </div>
                <div class="latexAccoladeBottom" style="text-align: ${d}; color: ${e}; font-size: ${g}; font-weight: ${v}; line-height: ${w}">
                  ${n.includes("<br>")?`<div style="text-align: center;">${n}</div>
`:`${n}`}</div>

                  </div>
`)}let z="";if(this.rightBraces)for(let c=0;c<this.rightBraces.length;c++){const i=Math.max(...this.lignes.map(w=>w.barres.reduce((u,T)=>u+(T.length??0),0)+(y??0)+1)),p=this.rightBraces[c],a=p.start,n=p.end,h=p.text,r=p.options??{},d=r.justify??"center",e=r.color??"black",g=r.fontSize??"1em",v=r.fontWeight??"normal";a!=null&&n!=null&&h!=null&&(z+=`<div class="SchemaRight" style="grid-row: ${a}/${n}; grid-column-start: ${i+1}; grid-column-end: ${i+2}; text-align:center; border: none; --brace-color: ${e}">
    <div class="braceRight">
      <div class="braceRightTop">
        <div class="curlRightTopTop"></div>
        <div class="lineRightTopMiddle"></div>
        <div class="curlRightTopBottom"></div>
      </div>
      <div class="braceRightBottom">
        <div class="curlRightBottomTop"></div>
        <div class="lineRightBottomMiddle"></div>
        <div class="curlRightBottomBottom"></div>
      </div>
    </div>
  </div>
    <div class="latexAccoladeRight" style="grid-row: ${Math.round((a+n)/2)-1}; grid-column-start: ${i+2}; grid-column-end: ${i+10};text-align: ${d}; color: ${e}; font-size: ${g}; font-weight: ${v}">
     <div style="display: inline-block; text-align: center;">${h}</div>

    </div>
`)}return`<div class="SchemaContainer">${B}
${x.join(`
`)}
${$}${z}</div>
`}else{let y=0,R=!1;for(const m of this.lignes)m.entete!==void 0&&(R=!0,(m.entete.longueur??0)>y&&(y=m.entete.longueur??0));let B=`\\begin{tikzpicture}[scale=${t}]
`;if(this.topBraces)for(let m=0;m<this.topBraces.length;m++){const $=this.topBraces[m],z=($.start+(R?y:0)-1)*t,c=($.end+(R?y:0)-1)*t,i=$.text,p=$.type??"accolade",a=$.options??{},n=a.color??"black",h=a.fontSize??"1em",r=a.fontWeight??"normal";if(z!=null&&c!=null&&i!=null){let d="";n&&!i.includes("tikzpicture")&&(d+=`\\textcolor{${n}}{`);let e="";h&&(h==="small"?e="\\small ":h==="large"?e="\\large ":h==="Large"?e="\\Large ":h==="footnotesize"&&(e="\\footnotesize "));let g="";r==="bold"&&(g="\\textbf{");const v=`${d}${e}${g}${i}${r==="bold"?"}":""}${n&&!i.includes("tikzpicture")?"}":""}`;p==="flèche"?B+=`\\draw[<->,thick, draw=${n}] (${z.toFixed(1)},3.2) -- (${c.toFixed(1)},3.2) node[above, pos=0.5] {${v}};
`:B+=`\\draw[decorate,decoration={brace,amplitude=10pt},xshift=0pt,yshift=0pt,draw=${n}] (${z.toFixed(1)},3) -- node[above=10pt, pos=0.5] {${v}} (${c.toFixed(1)},3);
`}}let x=3;for(let m=0;m<this.lignes.length;m++){const $=this.lignes[m],z=((L=$.entete)==null?void 0:L.content)??"",c=((k=$.entete)==null?void 0:k.couleur)??"black",i=((O=$.entete)==null?void 0:O.fontSize)??"1em",p=((P=$.entete)==null?void 0:P.fontWeight)??"normal",a=$.barres??[];R&&a.unshift({color:"white",length:y,content:z,type:"boite",options:{color:c,justify:"center",style:"borderless",fontSize:i,fontWeight:p}});let n=0;const h=$.height??"1.2em";let r=1;if(h&&typeof h=="string"){const d=h.match(/^([\d.]+)(em|pt|cm|mm)?$/);if(d){const e=parseFloat(d[1]);d[2]==="em"||!d[2]?r=e/1.2:d[2]==="pt"?r=e/12:d[2]==="cm"&&(r=e/.508)}}x-=r*t;for(let d=0;d<a.length;d++){const e=a[d];if(e.length<=0)continue;e.content==null&&(e.content=""),e.color==null&&(e.color="lightgray"),e.options==null&&(e.options={});const g=e.options??{},v=g.justify??"center",w=g.color??"black",u=g.fontSize??"1em",T=g.fontWeight??"normal";let I="";w&&!e.content.includes("tikzpicture")&&(I+=`\\textcolor{${w}}{`);let F="";u&&(u==="small"?F="\\small ":u==="large"?F="\\large ":u==="Large"?F="\\Large ":u==="footnotesize"&&(F="\\footnotesize "));let W="";T==="bold"&&(W="\\textbf{");const j=e.content.includes("<br>")?`${I}${F}${W}\\shortstack{${e.content.replaceAll("<br>","\\\\")}}${T==="bold"?"}":""}${w&&!e.content.includes("tikzpicture")?"}":""}`:`${I}${F}${W}${e.content}${T==="bold"?"}":""}${w?"}":""}`;if(e.type==="boite"){((D=e.options)==null?void 0:D.style)==="borderless"?B+=`\\draw[fill=${e.color}, draw=none] (${(n*t).toFixed(1)},${x.toFixed(1)}) rectangle (${((n+e.length)*t).toFixed(1)},${(r*t+x).toFixed(1)});
`:B+=`\\draw[fill=${e.color}] (${(n*t).toFixed(1)},${x.toFixed(1)}) rectangle (${((n+e.length)*t).toFixed(1)},${(r*t+x).toFixed(1)});
`;let H="center",N="center",C=((n+e.length/2)*t).toFixed(1);v==="start"?(H="west",N="left",C=(n*t).toFixed(1)):v==="end"&&(H="east",N="right",C=((n+e.length)*t).toFixed(1)),B+=`\\node[anchor=${H}, align=${N}] at (${C},${(x+r/2).toFixed(1)}) {${j}};
`}else e.type==="flèche"?(B+=`\\draw[<->,thick, draw=${w}] (${(n*t).toFixed(1)},${(x+.56).toFixed(1)}) -- (${((n+e.length)*t).toFixed(1)},${(x+.56).toFixed(1)}) node[pos=0.5, below] {${j}};
`,B+=`\\draw[dashed, thick, draw=${w}] (${((n+e.length)*t).toFixed(1)},${x}) -- (${((n+e.length)*t).toFixed(1)},${(x+r*t).toFixed(1)});
`):B+=`\\draw[fill=${e.color}] (${(n*t).toFixed(1)},${x.toFixed(1)}) rectangle (${((n+e.length)*t).toFixed(1)},${(r*t+x).toFixed(1)}) node[pos=0.5] {${j}};
`;n+=e.length}x-=($==null?void 0:$.spacing)??0}if(this.bottomBraces)for(let m=0;m<this.bottomBraces.length;m++){const $=this.bottomBraces[m],z=($.start+(R?y:0)-1)*t,c=($.end+(R?y:0)-1)*t,i=$.text,p=$.type??"accolade",a=$.options??{},n=a.color??"black",h=a.fontSize??"1em",r=a.fontWeight??"normal";if(z!=null&&c!=null&&i!=null){let d="";n&&!i.includes("tikzpicture")&&(d+=`\\textcolor{${n}}{`);let e="";h&&(h==="small"?e="\\small ":h==="large"?e="\\large ":h==="Large"?e="\\Large ":h==="footnotesize"&&(e="\\footnotesize "));let g="";r==="bold"&&(g="\\textbf{");const v=i.includes("<br>")?`${d}${e}${g}\\shortstack{${i.replaceAll("<br>","\\\\")}}${r==="bold"?"}":""}${n&&!i.includes("tikzpicture")?"}":""}`:`${d}${e}${g}${i}${r==="bold"?"}":""}${n?"}":""}`;p==="flèche"?B+=`\\draw[<->,thick, draw=${n}] (${z.toFixed(1)},${x-.2}) -- (${c.toFixed(1)},${x-.2}) node[below, pos=0.5] {${v}};
`:B+=`\\draw[decorate,decoration={brace,amplitude=10pt},xshift=0pt,yshift=0pt, draw=${n}] (${c.toFixed(1)},${x}) -- node[below=10pt, pos=0.5] {${v}} (${z.toFixed(1)},${x});
`}}if(this.rightBraces){const m=this.lignes.map(z=>z.barres.reduce((c,i)=>c+(i.length??0),0)+(y??0)),$=Math.max(...m);for(let z=0;z<this.rightBraces.length;z++){const c=this.rightBraces[z],i=3+(this.topBraces&&this.topBraces.length>0?2:1)*t-c.start*t,p=3+(this.topBraces&&this.topBraces.length>0?2:1)*t-c.end*t,a=c.text,n=c.options??{},h=n.color??"black",r=n.fontSize??"1em",d=n.fontWeight??"normal";if(i!=null&&p!=null&&a!=null){let e="";h&&!a.includes("tikzpicture")&&(e+=`\\textcolor{${h}}{`);let g="";r&&(r==="small"?g="\\small ":r==="large"?g="\\large ":r==="Large"?g="\\Large ":r==="footnotesize"&&(g="\\footnotesize "));let v="";d==="bold"&&(v="\\textbf{");const w=a.includes("<br>")?`${e}${g}${v}\\shortstack{${a.replaceAll("<br>","\\\\")}}${d==="bold"?"}":""}${h&&!a.includes("tikzpicture")?"}":""}`:`${e}${g}${v}${a}${d==="bold"?"}":""}${h?"}":""}`;B+=`\\draw[decorate,decoration={brace,amplitude=10pt},xshift=0pt,yshift=0pt, draw=${h}]  (${(($+.3)*t).toFixed(1)},${i.toFixed(1)}) -- (${(($+.3)*t).toFixed(1)},${p.toFixed(1)});
`,B+=`\\node[anchor=west, align=left] at (${($*t+.8).toFixed(1)},${((i+p)/2).toFixed(1)}) {${w}};
`}}}return B+="\\end{tikzpicture}",B}}static multiplication(t,o,s,l){return new A({topBraces:[{start:1,end:8+s*2,text:o!=null?`$${f(o,s)}\\text{ fois}$`:"? fois"}],lignes:[{barres:[{color:"lightgray",length:2+s,content:t!=null?`$${f(t,s)}$`:"?",type:"boite"},{color:"lightgray",length:3,content:"\\ldots",type:"boite"},{color:"lightgray",length:2+s,content:t!=null?`$${f(t,s)}$`:"?",type:"boite"}]},{barres:[{color:"white",length:7+s*2,content:l??"?"}]}]})}static division(t,o,s,l){return new A({topBraces:[{start:1,end:8+2*l,text:s==null?"? fois":`${f(s,0)} fois`}],lignes:[{barres:[{color:"lightgray",length:2+l,content:o==null?"?":`$${f(o,l)}$`,type:"boite"},{color:"lightgray",length:3,content:"\\ldots",type:"boite"},{color:"lightgray",length:2+l,content:o==null?"?":`$${f(o,l)}$`,type:"boite"}]},{barres:[{color:"white",length:7+2*l,content:t==null?"?":`$${f(t,l)}$`}]}]})}static multiplicationPuisDivisionAvecReste(t,o,s,l,b,L){const k=typeof t=="number"?t*3:10;return new A({topBraces:t!=null?typeof t=="string"?[{start:1,end:k+1,text:`${t}`,type:"accolade"}]:[{start:1,end:k+1,text:`${f(t,0)}`,type:"accolade"}]:[{start:1,end:k+1,text:"? fois",type:"accolade"}],lignes:[{spacing:.5,barres:typeof t=="number"?Q(t-1).map(P=>({color:"white",length:3,content:o!=null?typeof o=="number"?`$${f(o,L)}$`:`${o}`:"?",type:"boite"})):[{color:"lightgray",length:3,content:o!=null?typeof o=="number"?`$${f(o,L)}$`:`${o}`:"?",type:"boite"},{color:"lightgray",length:k-3,content:"\\ldots",type:"boite",options:{justify:"start"}}]},{barres:[{color:"lightgray",length:3,content:s!=null?typeof s=="number"?`$${f(s,L)}$`:`${s}`:"?",type:"boite"},{color:"lightgray",length:k-6,content:"\\ldots",type:"boite",options:{justify:"start"}},{color:"lightgray",length:3,content:b!=null?typeof b=="number"?`$${f(b,L)}$`:`${b}`:"?",type:"boite",options:{justify:"center"}}]}],bottomBraces:[{start:1,end:k-2,text:l!=null?typeof l=="string"?l:`$${f(Number(l),L)}$`:"?",type:"accolade"}]})}static divisionAvecReste(t,o,s,l,b){return new A({topBraces:[{start:1,end:8+2*l,text:s==null?"? fois":`$${s}$ fois`}],lignes:[{barres:[{color:"lightgray",length:2+l,content:o==null?"?":`$${f(o,l)}$`},{color:"lightgray",length:3,content:"\\ldots"},{color:"lightgray",length:2+l,content:o==null?"?":`$${f(o,l)}$`},{color:"lightgray",length:2,content:b??"?"}]},{barres:[{color:"white",length:9+2*l,content:t==null?"?":`$${f(t,l)}$`}]}]})}static addition(t,o,s){return new A({lignes:[{barres:[{color:"lightgray",length:2+s,content:t!=null?`$${f(t,s)}$`:"?"},{color:"lightgray",length:2+s,content:o!=null?`$${f(o,s)}$`:"?"}]},{barres:[{color:"white",length:4+s*2,content:"?"}]}]})}static additionPartiesTout(t,o,s){const l=s.length,b=l<3?4:3;return new A({topBraces:[{start:1,end:l*b+1,text:t!=null?typeof t=="string"?t:`$${f(t,o)}$`:"?",type:"accolade"}],lignes:[{barres:s.map((k,O)=>Object.assign({color:"lightgray",length:b,content:k!=null?typeof k=="string"?k:`$${f(Number(k),o)}$`:"?"},{}))}]})}static additionPartiesToutComparaison(t,o,s,l,b){return new A({rightBraces:[{start:1,end:5,text:l!=null?`${f(l,b)}$`:"?",type:"accolade"}],lignes:[{barres:[{color:"lightgray",length:8+b,content:t==null?"?":`$${f(t,b)}$`}]},{barres:[{color:"lightgray",length:4+b,content:o==null?"?":`$${f(o,b)}$`},{color:"white",type:"flèche",length:4+b,content:s!=null?`$${f(s,b)}$`:"différence",options:{style:"border-left: none;border-top: none; border-bottom: none;border-right: dashed;"}}]}]})}static additionPartiesToutComparaison2(t,o,s,l,b,L){return new A(L?Object.assign({},{lignes:[{spacing:.5,barres:[{color:"lightgray",length:3,content:t},{color:"lightgray",length:7,content:o}]},{barres:[{color:"lightgray",length:6,content:s},{color:"white",type:"flèche",length:4,content:l,options:{style:"border-left: none;border-top: none; border-bottom: none;border-right: dashed;"}}]}],topBraces:[{start:1,end:11,text:b,type:"accolade"}]}):Object.assign({},{lignes:[{spacing:.5,barres:[{color:"lightgray",length:3,content:t},{color:"lightgray",length:7,content:o}]},{barres:[{color:"lightgray",length:6,content:s},{color:"white",type:"flèche",length:4,content:l,options:{style:"border-left: none;border-top: none; border-bottom: none;border-right: dashed;"}}]}]}))}static soustraction(t,o,s,l){return new A({lignes:[{barres:[{color:"lightgray",length:2+l,content:t==null?"?":`$${f(t,l)}$`},{color:"lightgray",length:2+l,content:s==null?"?":`$${f(s,l)}$`}]},{barres:[{color:"white",length:4+l*2,content:o==null?"?":`$${f(o,l)}$`}]}]})}}export{A as S};
//# sourceMappingURL=SchemaEnBoite-DKiE0pBx.js.map
