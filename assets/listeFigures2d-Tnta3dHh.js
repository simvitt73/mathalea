import{r as W}from"./index-CMKaCP9B.js";import{F as h}from"./Figures2D-UQjXUyiv.js";import{a as y,p as w}from"./PointAbstrait-Cz1GEocE.js";import{s as g}from"./segmentsVecteurs-DhSnlc3S.js";import{z as Z,a as B,b as G,m as H,x as K,y as J,h as N,i as O,g as Q,d as X,j as Y,k as U,n as _,f as p,e as ee,c as re,l as f,w as te,u as ne,v as ae,s as ce,r as ue,t as le,q as de,A as z,o as $e,p as ie,B as ge,C as q,D as he,E as me,F as A,G as fe,H as L,I as T,J as ye,K as M,L as ke,M as we}from"./panneaux-yO2uJW-Q.js";function I(e){const n={0:2,1:1,2:0,3:1,4:0,5:0,6:0,7:0,8:2,9:0};if(e<0||e>9||e!==(e|0))throw new Error("Le paramètre doit être un entier de 0 à 9");return n[e]}function se(e){const n={0:y(0,0),1:y(2,0),2:y(0,0),3:null,4:null,5:y(0,0),6:null,7:null,8:y(0,0),9:null};if(e<0||e>9||e!==(e|0))throw new Error("Le paramètre doit être un entier de 0 à 9");return n[e]}function xe(e,n={x:0,y:0,fillStyle:"red",strokeStyle:"black",lineWidth:2}){if(e<0||e>9||e!==(e|0))throw new Error("Le paramètre doit être un entier de 0 à 9");const{x:a=0,y:t=0,fillStyle:r,strokeStyle:d,lineWidth:u}=n,c=[[1,1,1,1,1,1,0],[0,1,1,0,0,0,0],[1,1,0,1,1,0,1],[1,1,1,1,0,0,1],[0,1,1,0,0,1,1],[1,0,1,1,0,1,1],[1,0,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,1,1,1,1],[1,1,1,1,0,1,1]][e],l=[{tx:0,ty:-35,rot:0},{tx:17.5,ty:-17.5,rot:90},{tx:17.5,ty:17.5,rot:90},{tx:0,ty:35,rot:0},{tx:-17.5,ty:17.5,rot:90},{tx:-17.5,ty:-17.5,rot:90},{tx:0,ty:0,rot:0}],$=[],i=[];return l.forEach(({tx:k,ty:s,rot:x},j)=>{const v=!!c[j];if(v&&$.push(`<polygon points="-15,-2.5 15,-2.5 17.5,0 15,2.5 -15,2.5 -17.5,0" transform="translate(${k},${s})${x?` rotate(${x})`:""}"/>`),v){const E=[{x:-15,y:-2.5},{x:15,y:-2.5},{x:17.5,y:0},{x:15,y:2.5},{x:-15,y:2.5},{x:-17.5,y:0}],b=x*Math.PI/180,o=Math.cos(b),P=Math.sin(b),C=E.map(S=>{const D=S.x*o-S.y*P,F=S.x*P+S.y*o,R=(a+k+D)/20,V=(-t-s-F)/20;return`(${R.toFixed(2)},${V.toFixed(2)})`}).join(" -- ");i.push(`\\draw[fill=${r}, draw=${d}, line width=${u}pt] ${C} -- cycle;`)}}),{svg:`<g transform="translate(${a},${t})">${$.join("")}</g>`,tikz:i.join(`
`)}}function m(e){const n=(e==null?void 0:e.fillStyle)||"green",a=(e==null?void 0:e.strokeStyle)||"black",t=(e==null?void 0:e.lineWidth)||2,r=(e==null?void 0:e.opacite)??1,d=(e==null?void 0:e.chiffre)??0,{svg:u,tikz:c}=xe(d,{x:0,y:0,fillStyle:n,strokeStyle:a,lineWidth:t}),l=u.replaceAll(/<polygon /g,`<polygon fill="${n}" stroke="${a}" stroke-width="${t}" opacity="${r}" `),$=c.replaceAll(/\\draw\[fill=red\]/g,`\\draw[fill=${n}, draw=${a}, line width=${t}pt]`);return new h({codeSvg:l,codeTikz:$,width:2,height:6,opacite:r,centre:se(d),axes:I(d)===0?[]:I(d)===1?[g(y(-2.5,0),y(2.5,0))]:[g(y(-2.5,0),y(2.5,0)),g(y(0,-2.5),y(0,2.5))],nonAxe:d===4||d===7||d===2||d===5?g(-2,0,2,0):d===6||d===9?g(y(0,-4*(d===6?-1:1)),y(0,4*(d===6?-1:1))):void 0})}function Se(e){const n=m({chiffre:8}),a=n.copy(Date.now().toString());a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${n.svg(20)}
${a.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,centre:y(0,0),axes:[g(-2,0,2,0),g(0,-2,0,2)]})}function Le(e){const n=m({chiffre:8}),a=m({chiffre:3});a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${n.svg(20)}
${a.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,axes:[g(-2,0,2,0)]})}function ze(e){const n=m({chiffre:0}),a=m({chiffre:3});a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${a.svg(20)}
${n.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,axes:[g(-2,0,2,0)]})}function ve(e){const n=m({chiffre:5}),a=m({chiffre:2});a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${n.svg(20)}
${a.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,axes:[g(0,-2,0,2)]})}function be(e){const n=m({chiffre:5}),a=m({chiffre:7});a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${n.svg(20)}
${a.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,nonAxe:g(0,-4,0,4)})}function oe(e){const n=m({chiffre:3}),a=m({chiffre:1});a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${n.svg(20)}
${a.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,axes:[g(-2,0,2,0)]})}function Pe(e){const n=m({chiffre:2}),a=m({chiffre:5});a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${n.svg(20)}
${a.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,axes:[g(0,-2,0,2)]})}function We(e){const n=m({chiffre:3}),a=m({chiffre:7});a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${n.svg(20)}
${a.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,nonAxe:g(0,-4,0,4)})}function qe(e){const n=m({chiffre:6}),a=m({chiffre:2});a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${n.svg(20)}
${a.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,nonAxe:g(0,-4,0,4)})}function Ae(e){const n=m({chiffre:2}),a=m({chiffre:4});a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${n.svg(20)}
${a.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,nonAxe:g(0,-4,0,4)})}function Te(e){const n=m({chiffre:6}),a=m({chiffre:9});a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${n.svg(20)}
${a.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,centre:y(0,0),nonAxe:g(0,-4,0,4)})}function Me(e){const n=m({chiffre:0}),a=m({chiffre:8});a.translate(-1.2,0),n.translate(1.2,0);const t=`\\begin{scope}
  ${n.tikz()}
${a.tikz()}\\end{scope}`,r=`<g>${n.svg(20)}
${a.svg(20)}</g>`;return new h({codeSvg:r,codeTikz:t,width:6,height:6,opacite:(e==null?void 0:e.opacite)??1,axes:[g(-2,0,2,0)]})}function Ie(e){const n=(e==null?void 0:e.fillStyle)||"black",a=(e==null?void 0:e.strokeStyle)||"black",t=(e==null?void 0:e.lineWidth)||6,r=(e==null?void 0:e.largeur)||3,d=(e==null?void 0:e.hauteur)||4,u=(e==null?void 0:e.opacite)||1,c=r*20,l=d*20,i=`
    <polygon points="${[`${-c/2},${l/2}`,`0,${-l/2}`,`${c/2},${l/2}`,`${c*7/16},${l/2}`,`0,${-l/3}`,`${-c*7/16},${l/2}`].join(" ")}" fill="${n}" stroke="${a}" stroke-width="${t}"  stroke-linejoin="round" />
    <line x1="${-c/3}" y1="${l/5}" x2="${c/3}" y2="${l/5}" stroke="${a}" stroke-width="${t*1.5}" />
  `.trim(),k=[`(${-r/2},${-d/2})`,`(0,${d/2})`,`(${r/2},${-d/2})`,`(${r*7/16},${-d/2})`,`(0,${d/3})`,`(${-r*7/16},${-d/2})`].join(" -- "),s=`
    % Lettre A
   \\draw[fill=${n}, draw=${a}, line width=${t}pt, , rounded corners, line cap=round]
        ${k} -- cycle;
    \\draw[draw=${a}, line width=${t*1.5}pt,, rounded corners, line cap=round]
        (${-r/4},${-d/5}) -- (${r/4},${-d/5});
  `.trim(),x=[g(0,-d/2,0,d/2)];return new h({codeSvg:i,codeTikz:s,width:r,height:d,axes:x,opacite:u})}function je(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=c/4,$=`
        <path d="
            M ${-u/2},${c/2}
            L ${-u/2},${-c/2}
            L 0,${-c/2}
            A ${l},${l} 0 1,1 0,0
            L ${-u/2},0
            L 0,0
            A ${l},${l} 0 1,1 0,${c/2}
            Z
        " fill="none" stroke="${n}" stroke-width="${a}" stroke-linejoin="round" />
    `.trim(),i=`
            % Lettre B
            \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
                    (${-t/2},${-r/2}) -- (${-t/2},${r/2})
                    -- (0,${r/2})
                    arc[start angle=90, end angle=-90, radius=${l/20}cm]
                    -- (0,0)
                    -- (${-t/2},0)
                    -- (0,0)
                    arc[start angle=90, end angle=-90, radius=${l/20}cm]
                    -- cycle;
    `.trim(),k=[g(-t/1.5,0,t/1.5,0)];return new h({codeSvg:$,codeTikz:i,width:t,height:r,axes:k,opacite:d})}function Ee(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||2.8,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=c/2,$=`
                <path d="
                        M ${u/2},${-c/2}
                        L ${u/4},${-c/2}
                        A ${l*3/4},${l} 0 1,0 ${u/4},${c/2}
                        L ${u/2},${c/2}
                " fill="none" stroke="${n}" stroke-width="${a}"  stroke-linecap="round"/>
        `.trim(),i=`
                            % Lettre C
                            \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
                                            (${t/3},${r/2})
                                            -- (0,${r/2})
                                            arc[start angle=90, end angle=270, x radius=${l*3/80}cm, y radius=${l/20}cm]
                                            -- (0,${-r/2})
                                            -- (${t/3},${-r/2});
            `.trim(),k=[g(-t/2,0,t/2,0)];return new h({codeSvg:$,codeTikz:i,width:t,height:r,axes:k,opacite:d})}function Ce(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||2.5,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=c/2,$=`
        <path d="
            M ${-u/2},${c/2}
            L ${-u/2},${-c/2}
            L 0,${-c/2}
            A ${u/2},${l} 0 1,1 0,${c/2}
            Z
        " fill="none" stroke="${n}" stroke-width="${a}" stroke-linejoin="round"/>
    `.trim(),i=`
                % Lettre D
                \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
                        (${-t/2},${-r/2}) -- (${-t/2},${r/2})
                        -- (0,${r/2})
                        arc[start angle=90, end angle=-90, x radius=${t/2}cm, y radius=${l/20}cm]
                        -- cycle;
        `.trim(),k=[g(-t/2,0,t/2,0)];return new h({codeSvg:$,codeTikz:i,width:t,height:r,axes:k,opacite:d})}function De(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||2.5,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
                <path d="
                        M ${u/2},${-c/2}
                        L ${-u/2},${-c/2}
                        L ${-u/2},${c/2}
                        L ${u/2},${c/2}
                        M ${-u/2},0
                        L ${u/4},0
                " fill="none" stroke="${n}" stroke-width="${a}"  stroke-linejoin="round" stroke-linecap="round" />
        `.trim(),$=`
                % Lettre E
                \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
                        (${t/2},${r/2}) -- (${-t/2},${r/2})
                        -- (${-t/2},${-r/2}) -- (${t/2},${-r/2});
                \\draw[draw=${n}, line width=${a}pt, rounded corners, line cap=round]
                        (${-t/2},0) -- (${t/4},0);
        `.trim(),i=[g(-t/2,0,t/2,0)];return new h({codeSvg:l,codeTikz:$,width:t,height:r,axes:i,opacite:d})}function Fe(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||2.5,r=(e==null?void 0:e.hauteur)||3.8,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
        <path d="
            M ${-u/2},${c/2}
            L ${-u/2},${-c/2}
            L ${u/2},${-c/2}
            M ${-u/2},0
            L ${u/4},0
        " fill="none" stroke="${n}" stroke-width="${a}"  stroke-linejoin="round" stroke-linecap="round"/>
    `.trim(),$=`
                    % Lettre F
                    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
                                    (${-t/2},${-r/2}) -- (${-t/2},${r/2})
                                    -- (${t/2},${r/2});
                    \\draw[draw=${n}, line width=${a}pt, rounded corners, line cap=round]
                                    (${-t/2},0) -- (${t/4},0);
    `.trim();return new h({codeSvg:l,codeTikz:$,width:t,height:r,opacite:d,nonAxe:g(3,0,-3,0)})}function Re(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||2.5,r=(e==null?void 0:e.hauteur)||4,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=u/1.6,$=u/4,i=c/8,k=`
                <path d="
                        M ${$+u/3},${-c/3+i}
                        A ${l},${l} 0 1,0 ${$+u/2},${i}
                        L ${u/4},${i}
                " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round"/>
        `.trim(),s=`
          % Lettre G
          \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${t/2},${r/3-i/10})
            arc[start angle=60, end angle=360, x radius=${l/20}cm, y radius=${l/20}cm]
            -- (${t/4},${-i/10});
        `.trim();return new h({codeSvg:k,codeTikz:s,width:t+$/10,height:r+i/20,opacite:d,nonAxe:null}).dilate({x:1,y:1.1}).translate(0,.7)}function Ve(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||4,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
        <path d="
            M ${-u*.4},${c/2}
            L ${-u*.4},${-c/2}
            M ${u*.4},${c/2}
            L ${u*.4},${-c/2}
            M ${-u*.4},0
            L ${u*.4},0
        " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round"/>
    `.trim(),$=`
        % Lettre H
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${-t/2},${-r/2}) -- (${-t/2},${r/2});
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${t/2},${-r/2}) -- (${t/2},${r/2});
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${-t/2},0) -- (${t/2},0);
    `.trim(),i=[g(-t/2,0,t/2,0),g(0,-r/2,0,r/2)];return new h({codeSvg:l,codeTikz:$,width:t,height:r,axes:i,opacite:d,centre:w(0,0)})}function Ze(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||1,r=(e==null?void 0:e.hauteur)||3.4,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
        <path d="
            M ${-u/2},${c/2}
            L ${u/2},${c/2}
            M 0,${c/2}
            L 0,${-c/2}
            M ${-u/2},${-c/2}
            L ${u/2},${-c/2}
        " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round"/>
    `.trim(),$=`
        % Lettre I
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${-t/2},${r/2}) -- (${t/2},${r/2});
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (0,${r/2}) -- (0,${-r/2});
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${-t/2},${-r/2}) -- (${t/2},${-r/2});
    `.trim(),i=[g(0,-r/2,0,r/2),g(-t/2,0,t/2,0)];return new h({codeSvg:l,codeTikz:$,width:t,height:r,axes:i,opacite:d,centre:w(0,0)})}function Be(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||2,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=u/2,$=`
        <path d="
            M ${-u/2},${c/2-u/2}
            A ${l},${l} 1 0,0 ${u/2},${c/2-u/2}
            L ${u/2},${-c/2}
        " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round"/>
    `.trim(),i=`
        % Lettre J
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${-t/2},${-r/2+t/2})
            arc[start angle=-180, end angle=0, radius=${l/20}cm]
            -- (${t/2},${r/2});
    `.trim();return new h({codeSvg:$,codeTikz:i,width:t,height:r,opacite:d,nonAxe:g(-3,0,3,0)})}function Ge(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||2.5,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
        <path d="
            M ${-u/2},${c/2}
            L ${-u/2},${-c/2}
            M ${-u/2},0
            L ${u*.4},${c/2}
            M ${-u/2},0
            L ${u*.4},${-c/2}
        " fill="none" stroke="${n}" stroke-width="${a}"  stroke-linecap="round" />
    `.trim(),$=`
        % Lettre K
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${-t/2},${-r/2}) -- (${-t/2},${r/2});
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${-t*.4},0) -- (${t*.4},${r*.5});
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${-t*.4},0) -- (${t*.4},${-r*.5});
    `.trim(),i=[g(-t/2,0,t/2,0)];return new h({codeSvg:l,codeTikz:$,width:t,height:r,axes:i,opacite:d})}function He(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||2.5,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
        <path d="
            M ${-u/2},${-c/2}
            L ${-u/2},${c/2}
            L ${u/2},${c/2}
        " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round"/>
    `.trim(),$=`
        % Lettre L
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${-t/2},${r/2}) -- (${-t/2},${-r/2})
            -- (${t/2},${-r/2});
    `.trim();return new h({codeSvg:l,codeTikz:$,width:t,height:r,opacite:d,nonAxe:g(-3,0,3,0)})}function Ke(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||4,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
        <path d="
            M ${-u/2},${c/2}
            L ${-u/2},${-c/2}
            L 0,${c/4}
            L ${u/2},${-c/2}
            L ${u/2},${c/2}
        " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round"/>
    `.trim(),$=`
        % Lettre M
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${-t/2},${-r/2}) -- (${-t/2},${r/2})
            -- (0,${r/4}) -- (${t/2},${r/2})
            -- (${t/2},${-r/2});
    `.trim(),i=[g(0,-r/2,0,r/2)];return new h({codeSvg:l,codeTikz:$,width:t,height:r,axes:i,opacite:d})}function Je(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||4,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
           
            <path d="
                M ${-u/2},${c/2}
                L ${-u/2},${-c/2}
                L ${u/2},${c/2}
                L ${u/2},${-c/2}
            " fill="none" stroke="${n}" stroke-width="${a}"  stroke-linecap="round" stroke-linejoin="round"/>
    `.trim(),$=`
        % Lettre N
        \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
            (${-t/2},${-r/2}) -- (${-t/2},${r/2})
            -- (${t/2},${-r/2}) -- (${t/2},${r/2});
    `.trim();return new h({codeSvg:l,codeTikz:$,width:t,height:r,opacite:d,centre:w(0,0),nonAxe:g(0,-4,0,4)})}function Ne(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||4,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
    <ellipse
      cx="0"
      cy="0"
      rx="${u/2}"
      ry="${c/2}"
      fill="none"
      stroke="${n}"
      stroke-width="${a}"
    />
  `.trim(),$=`
    % Lettre O
    \\draw[fill=none, draw=${n}, line width=${a}pt]
      (0,0) ellipse [x radius=${t/2}cm, y radius=${r/2}cm];
  `.trim(),i=[g(-t/2,0,t/2,0),g(0,-r/2,0,r/2)];return new h({codeSvg:l,codeTikz:$,width:t,height:r,axes:i,opacite:d,centre:w(0,0)})}function Oe(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||3.8,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=c/4,$=`
    <path d="
      M ${-u/2},${c/2}
      L ${-u/2},${-c/2}
      L 0,${-c/2}
      A ${l},${l} 0 1,1 0,0
      L ${-u/2},0
      Z
    " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round"/>
  `.trim(),i=`
    % Lettre P
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (${-t/2},${-r/2}) -- (${-t/2},${r/2})
      -- (0,${r/2})
      arc[start angle=90, end angle=-90, radius=${l/20}cm]
      -- (${-t/2},0) -- cycle;
  `.trim();return new h({codeSvg:$,codeTikz:i,width:t,height:r,opacite:d,nonAxe:g(2.5,0,-2.5,0)})}function Qe(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
    <ellipse
      cx="0"
      cy="0"
      rx="${u/2}"
      ry="${c/2}"
      fill="none"
      stroke="${n}"
      stroke-width="${a}"
    />
    <line
      x1="${u/4}"
      y1="${c/4}"
      x2="${u/2}"
      y2="${c/2}"
      stroke="${n}"
      stroke-width="${a}"
      stroke-linecap="round"
    />
  `.trim(),$=`
    % Lettre Q
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (0,0) ellipse [x radius=${t/2}cm, y radius=${r/2}cm];
    \\draw[draw=${n}, line width=${a}pt, line cap=round]
      (${t/4},${-r/4}) -- (${t/2},${-r/2});
  `.trim();return new h({codeSvg:l,codeTikz:$,width:t,height:r,opacite:d,nonAxe:g(-3,3.6,3,-3.6)})}function Xe(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||4,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=c/4,$=`
    <path d="
      M ${-u/2},${c/2}
      L ${-u/2},${-c/2}
      L 0,${-c/2}
      A ${l},${l} 0 1,1 0,0
      L ${-u/2},0
      M ${-u/5},0
      L ${u/3},${c/2-a/4}
    " fill="none" stroke="${n}" stroke-width="${a}" />
  `.trim(),i=`
    % Lettre R
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (${-t/2},${-r/2}) -- (${-t/2},${r/2})
      -- (0,${r/2})
      arc[start angle=90, end angle=-90, radius=${l/20}cm]
      -- (${-t/2},0);
    \\draw[draw=${n}, line width=${a}pt]
      (0,0) -- (${t/2},${-r/2});
  `.trim();return new h({codeSvg:$,codeTikz:i,width:t,height:r,opacite:d,nonAxe:g(-3,0,3,0)})}function Ye(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
    <path d="
      M ${-u/2},${-c/2}
      L ${u/2},${-c/2}
      M 0,${-c/2}
      L 0,${c/2}
    " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round"/>
  `.trim(),$=`
    % Lettre T
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (${-t/2},${r/2}) -- (${t/2},${r/2});
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (0,${r/2}) -- (0,${-r/2});
  `.trim(),i=[g(0,-r/2,0,r/2)];return new h({codeSvg:l,codeTikz:$,width:t,height:r,axes:i,opacite:d})}function Ue(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=u/2,$=`
    <path d="
      M ${-u/2},${-c/2}
      L ${-u/2},${c/2-l}
      A ${l},${l} 0 0,0 ${u/2},${c/2-l}
      L ${u/2},${-c/2}
    " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round"/>
  `.trim(),i=`
    % Lettre U
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (${-t/2},${r/2}) -- (${-t/2},${-r/2+t/2})
      arc[start angle=-180, end angle=0, radius=${l/20}cm]
      -- (${t/2},${r/2});
  `.trim(),k=[g(0,-r/2,0,r/2)];return new h({codeSvg:$,codeTikz:i,width:t,height:r,axes:k,opacite:d})}function _e(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
    <path d="
      M ${-u/2},${-c/2}
      L 0,${c/2}
      L ${u/2},${-c/2}
    " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round"/>
  `.trim(),$=`
    % Lettre V
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (${-t/2},${r/2}) -- (0,${-r/2}) -- (${t/2},${r/2});
  `.trim(),i=[g(0,-r/2,0,r/2)];return new h({codeSvg:l,codeTikz:$,width:t,height:r,axes:i,opacite:d})}function pe(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||4,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
    <path d="
      M ${-u/2},${-c/2}
      L ${-u/4},${c/2}
      L 0,${-c/4}
      L ${u/4},${c/2}
      L ${u/2},${-c/2}
    " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round"/>
  `.trim(),$=`
    % Lettre W
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (${-t/2},${r/2}) -- (${-t/4},${-r/2})
      -- (0,${r/4}) -- (${t/4},${-r/2})
      -- (${t/2},${r/2});
  `.trim(),i=[g(0,-r/2,0,r/2)];return new h({codeSvg:l,codeTikz:$,width:t,height:r,axes:i,opacite:d})}function er(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||4,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
    <path d="
      M ${-u/2},${c/2}
      L ${u/2},${-c/2}
      M ${-u/2},${-c/2}
      L ${u/2},${c/2}
    " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round"/>
  `.trim(),$=`
    % Lettre X
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (${-t/2},${r/2}) -- (${t/2},${-r/2});
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (${-t/2},${-r/2}) -- (${t/2},${r/2});
  `.trim(),i=[g(0,-r/2,0,r/2),g(-t/2,0,t/2,0)];return new h({codeSvg:l,codeTikz:$,width:t,height:r,axes:i,opacite:d,centre:w(0,0)})}function rr(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||3.8,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
    <path d="
      M ${-u/2},${-c/2}
      L 0,0
      L ${u/2},${-c/2}
      M 0,0
      L 0,${c/2}
    " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round"/>
  `.trim(),$=`
    % Lettre Y
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (${-t/2},${r/2}) -- (0,0) -- (${t/2},${r/2});
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (0,0) -- (0,${-r/2});
  `.trim(),i=[g(0,-r/2,0,r/2)];return new h({codeSvg:l,codeTikz:$,width:t,height:r,axes:i,opacite:d})}function tr(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||3.6,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=`
    <path d="
      M ${-u*.4},${-c/2}
      L ${u*.4},${-c/2}
      L ${-u*.4},${c/2}
      L ${u*.4},${c/2}
    " fill="none" stroke="${n}" stroke-width="${a}" stroke-linejoin="round" />
  `.trim(),$=`
    % Lettre Z
    \\draw[fill=none, draw=${n}, line width=${a}pt, rounded corners, line cap=round]
      (${-t*.4},${r*.5}) -- (${t*.4},${r*.5})
      -- (${-t*.4},${-r*.5}) -- (${t*.4},${-r*.5});
  `.trim();return new h({codeSvg:l,codeTikz:$,width:t,height:r,opacite:d,centre:w(0,0),nonAxe:g(1.2,1.8,-1.2,-1.8)})}function nr(e){const n=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||8,t=(e==null?void 0:e.largeur)||3,r=(e==null?void 0:e.hauteur)||4,d=(e==null?void 0:e.opacite)||1,u=t*20,c=r*20,l=u/2,$=`
    <path d="
      M ${u/2},${-c/4}
      A ${l},${l*.8} 0 0,0 0,${-c/2}
      A ${l},${l} 0 0,0 ${-u/2},${-c/4}
      A ${l},${l*.8} 0 0,0 0,0
      A ${l},${l*.8} 0 0,1 ${u/2},${c/4}
      A ${l},${l} 0 0,1 0,${c/2}
      A ${l},${l*.8} 0 0,1 ${-u/2},${c/4}
    " fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round" stroke-linejoin="round" />
  `.trim(),i=`
    % Lettre S
    \\draw[fill=none, draw=${n}, line width=${a}pt, line cap=round]
      (${t/2},${r/4}) arc[start angle=0, end angle=90, x radius=${l/20}cm, y radius=${r/4}cm]
       arc[start angle=90, end angle=180, x radius=${l/20}cm, y radius=${r/4}cm]
       arc[start angle=180, end angle=270, x radius=${l/20}cm, y radius=${r/4}cm]
       arc[start angle=90, end angle=0, x radius=${l/20}cm, y radius=${r/4}cm]
       arc[start angle=0, end angle=-90, x radius=${l/20}cm, y radius=${r/4}cm]
       arc[start angle=-90, end angle=-180, x radius=${l/20}cm, y radius=${r/4}cm];
  `.trim();return new h({codeSvg:$,codeTikz:i,width:t,height:r,opacite:d,centre:w(0,0),nonAxe:g(-t,0,t,0)})}const $r=[{numero:1,name:"fin de limitation",type:"panneau",style:"disque",figure2d:Z},{numero:2,name:"sens interdit",type:"panneau",style:"disque",figure2d:B},{numero:3,name:"interdiction de s'arrêter",type:"panneau",style:"disque",figure2d:G},{numero:4,name:"interdiction de circuler à tout véhicule",type:"panneau",style:"disque",figure2d:H},{numero:5,name:"danger : céder le passage",type:"panneau",style:"triangle",figure2d:K},{numero:6,name:"danger : circulation à double sens",type:"panneau",style:"triangle",figure2d:J},{numero:7,name:"danger : retrécissement de chaussée",type:"panneau",style:"triangle",figure2d:N},{numero:8,name:"danger : retrécissement de chaussée",type:"panneau",style:"triangle",figure2d:O},{numero:9,name:"danger : croisement à priorité à droite",type:"panneau",style:"triangle",figure2d:Q},{numero:10,name:"fin de route prioritaire",type:"panneau",style:"losange",figure2d:X},{numero:11,name:"danger : feu tricolore",type:"panneau",style:"triangle",figure2d:Y},{numero:12,name:"voie sans issue",type:"panneau",style:"carre",figure2d:U},{numero:13,name:"parking",type:"panneau",style:"carre",figure2d:_},{numero:14,name:"stop",type:"panneau",style:"octogone",figure2d:p},{numero:15,name:"stationnement interdit",type:"panneau",style:"disque",figure2d:ee},{numero:16,name:"route prioritaire",type:"panneau",style:"losange",figure2d:re},{numero:17,name:"lego2x2",type:"lego",figure2d:f,options:{nx:2,ny:2}},{numero:18,name:"lego3x2",type:"lego",figure2d:f,options:{nx:3,ny:2}},{numero:19,name:"lego4x2",type:"lego",figure2d:f,options:{nx:4,ny:2}},{numero:20,name:"lego5x2",type:"lego",figure2d:f,options:{nx:5,ny:2}},{numero:21,name:"lego6x2",type:"lego",figure2d:f,options:{nx:6,ny:2}},{numero:22,name:"lego8x2",type:"lego",figure2d:f,options:{nx:8,ny:2}},{numero:23,name:"lego5x4",type:"lego",figure2d:f,options:{nx:5,ny:4}},{numero:24,name:"lego6x4",type:"lego",figure2d:f,options:{nx:6,ny:4}},{numero:25,name:"lego8x4",type:"lego",figure2d:f,options:{nx:8,ny:4}},{numero:26,name:"lego3x3",type:"lego",figure2d:f,options:{nx:3,ny:3}},{numero:27,name:"lego4x4",type:"lego",figure2d:f,options:{nx:4,ny:4}},{numero:28,name:"lego4x3",type:"lego",figure2d:f,options:{nx:4,ny:3}},{numero:29,name:"lego5x3",type:"lego",figure2d:f,options:{nx:5,ny:3}},{numero:30,name:"lego6x3",type:"lego",figure2d:f,options:{nx:6,ny:3}},{numero:31,name:"lego8x3",type:"lego",figure2d:f,options:{nx:8,ny:3}},{numero:32,name:"lego8x6",type:"lego",figure2d:f,options:{nx:8,ny:6}},{numero:33,name:"lego2x1",type:"lego",figure2d:f,options:{nx:2,ny:1}},{numero:34,name:"lego3x1",type:"lego",figure2d:f,options:{nx:3,ny:1}},{numero:35,name:"lego4x1",type:"lego",figure2d:f,options:{nx:4,ny:1}},{numero:36,name:"lego5x1",type:"lego",figure2d:f,options:{nx:5,ny:1}},{numero:37,name:"lego6x1",type:"lego",figure2d:f,options:{nx:6,ny:1}},{numero:38,name:"lego8x1",type:"lego",figure2d:f,options:{nx:8,ny:1}},{numero:39,name:"lego8x8",type:"lego",figure2d:f,options:{nx:8,ny:8}},{numero:40,name:"triangle quelconque",type:"geometrique",figure2d:te,options:{opacite:.8}},{numero:41,name:"pentagone régulier",type:"geometrique",figure2d:ne,options:{rayon:2,opacite:.7}},{numero:42,name:"etoile à 5 branches",type:"geometrique",figure2d:ae,options:{rayonInterieur:.7,rayonExterieur:1.5}},{numero:43,name:"cerf-volant",type:"geometrique",figure2d:ce,options:{largeur:W(2,5)/2,hauteur:W(32,40)/10,opacite:.8}},{numero:44,name:"aile delta",type:"geometrique",figure2d:ue,options:{base:4,hauteur:2}},{numero:45,name:"trapèze isocèle",type:"geometrique",figure2d:le,options:{baseInferieure:4,baseSuperieure:2,hauteur:2.5}},{numero:46,name:"hexagone non régulier",type:"geometrique",figure2d:de,options:{rayonHorizontal:2,rayonVertical:1}},{numero:47,name:"croissant de lune 1",type:"geometrique",figure2d:z,options:{rayonExterieur:3,rayonInterieur:4}},{numero:48,name:"croissant de lune 2",type:"geometrique",figure2d:z,options:{rayonExterieur:3,rayonInterieur:5.5,angle:90}},{numero:49,name:"ovale",type:"geometrique",figure2d:$e},{numero:50,name:"pacman",type:"geometrique",figure2d:ie},{numero:51,name:"fer à cheval",type:"geometrique",figure2d:ge,options:{rayonInterieur:1.5,rayonExterieur:2}},{numero:52,name:"parallélogramme 1",type:"geometrique",figure2d:q,options:{base:4,hauteur:2,angle:60}},{numero:53,name:"parallélogramme 2",type:"geometrique",figure2d:q,options:{base:4,hauteur:3,angle:80}},{numero:54,name:"croissant de lune 4",type:"geometrique",figure2d:z,options:{rayonExterieur:3.5,rayonInterieur:3,angle:45}},{numero:55,name:"coeur",type:"geometrique",figure2d:he,options:{base:3}},{numero:56,name:"ogive",type:"geometrique",figure2d:me,options:{hauteur:2,opacite:.5}},{numero:57,name:"etoile à 4 branches 1",type:"geometrique",figure2d:A,options:{rayonExterieur:2,rayonInterieur:.5}},{numero:58,name:"etoile à 4 branches 2",type:"geometrique",figure2d:A,options:{rayonExterieur:2,rayonInterieur:1}},{numero:59,name:"croix rouge",type:"geometrique",figure2d:fe,options:{}},{numero:60,name:"rectangle 1",type:"geometrique",figure2d:L,options:{angle:45,coinsArrondis:!0,fillStyle:"green",opacite:.7}},{numero:61,name:"rectangle 2",type:"geometrique",figure2d:L,options:{angle:-20,coinsArrondis:!0,largeur:3,hauteur:2,fillStyle:"blue",opacite:.5}},{numero:62,name:"rectangle 3",type:"geometrique",figure2d:L},{numero:63,name:"rectangle 4",type:"geometrique",figure2d:L,options:{angle:20,hauteur:1,largeur:4,fillStyle:"yellow",opacite:.9}},{numero:64,name:"losange 1",type:"geometrique",figure2d:T,options:{fillStyle:"cyan"}},{numero:65,name:"losange 2",type:"geometrique",figure2d:T,options:{fillStyle:"magenta",coinsArrondis:!0,hauteur:3,largeur:5,angle:45,opacite:.5}},{numero:66,name:"triangle isocèle",type:"geometrique",figure2d:ye,options:{fillStyle:"purple",opacite:.6}},{numero:67,name:"triangle équilatéral 1",type:"geometrique",figure2d:M,options:{fillStyle:"orange",base:4,opacite:.6}},{numero:68,name:"danger : croisement avec une route secondaire",type:"panneau",figure2d:ke},{numero:69,name:"triangle équilatéral 2",type:"geometrique",figure2d:M,options:{fillStyle:"red",base:4,opacite:.6,angle:-30}},{numero:70,name:"rétrécissement e chaussée 3",type:"panneau",figure2d:we},{numero:71,name:"lettre A",type:"lettre",figure2d:Ie},{numero:72,name:"lettre B",type:"lettre",figure2d:je},{numero:73,name:"lettre C",type:"lettre",figure2d:Ee},{numero:74,name:"lettre D",type:"lettre",figure2d:Ce},{numero:75,name:"lettre E",type:"lettre",figure2d:De},{numero:76,name:"lettre F",type:"lettre",figure2d:Fe},{numero:77,name:"lettre G",type:"lettre",figure2d:Re},{numero:78,name:"lettre H",type:"lettre",figure2d:Ve},{numero:79,name:"lettre I",type:"lettre",figure2d:Ze},{numero:80,name:"lettre J",type:"lettre",figure2d:Be,options:{base:4,fillStyle:"red"}},{numero:81,name:"lettre K",type:"lettre",figure2d:Ge},{numero:82,name:"lettre L",type:"lettre",figure2d:He},{numero:83,name:"lettre M",type:"lettre",figure2d:Ke},{numero:84,name:"lettre N",type:"lettre",figure2d:Je},{numero:85,name:"lettre O",type:"lettre",figure2d:Ne},{numero:86,name:"lettre P",type:"lettre",figure2d:Oe},{numero:88,name:"lettre Q",type:"lettre",figure2d:Qe},{numero:88,name:"lettre R",type:"lettre",figure2d:Xe},{numero:89,name:"lettre S",type:"lettre",figure2d:nr,options:{base:4,fillStyle:"red"}},{numero:90,name:"lettre T",type:"lettre",figure2d:Ye},{numero:91,name:"lettre U",type:"lettre",figure2d:Ue},{numero:92,name:"lettre V",type:"lettre",figure2d:_e},{numero:93,name:"lettre W",type:"lettre",figure2d:pe},{numero:94,name:"lettre X",type:"lettre",figure2d:er},{numero:95,name:"lettre Y",type:"lettre",figure2d:rr},{numero:96,name:"lettre Z",type:"lettre",figure2d:tr},{numero:97,name:"chiffre 0",type:"chiffre",figure2d:m,options:{chiffre:0}},{numero:98,name:"chiffre 1",type:"chiffre",figure2d:m,options:{chiffre:1}},{numero:99,name:"chiffre 2",type:"chiffre",figure2d:m,options:{chiffre:2}},{numero:100,name:"chiffre 3",type:"chiffre",figure2d:m,options:{chiffre:3}},{numero:101,name:"chiffre 4",type:"chiffre",figure2d:m,options:{chiffre:4}},{numero:102,name:"chiffre 5",type:"chiffre",figure2d:m,options:{chiffre:5}},{numero:103,name:"chiffre 6",type:"chiffre",figure2d:m,options:{chiffre:6}},{numero:104,name:"chiffre 7",type:"chiffre",figure2d:m,options:{chiffre:7}},{numero:105,name:"chiffre 8",type:"chiffre",figure2d:m,options:{chiffre:8}},{numero:106,name:"chiffre 9",type:"chiffre",figure2d:m,options:{chiffre:9}},{numero:107,name:"quatre-vingt-huit",type:"chiffre",figure2d:Se},{numero:108,name:"trente-huit",type:"chiffre",figure2d:Le},{numero:109,name:"trente",type:"chiffre",figure2d:ze},{numero:110,name:"vingt-cinq",type:"chiffre",figure2d:ve},{numero:111,name:"soixante-quinze",type:"chiffre",figure2d:be},{numero:112,name:"treize",type:"chiffre",figure2d:oe},{numero:113,name:"cinquante-deux",type:"chiffre",figure2d:Pe},{numero:114,name:"soixante-treize",type:"chiffre",figure2d:We},{numero:115,name:"vingt-six",type:"chiffre",figure2d:qe},{numero:116,name:"quarante-deux",type:"chiffre",figure2d:Ae},{numero:117,name:"quatre-vingt-seize",type:"chiffre",figure2d:Te},{numero:118,name:"quatre-vingt",type:"chiffre",figure2d:Me}];export{$r as l};
//# sourceMappingURL=listeFigures2d-Tnta3dHh.js.map
