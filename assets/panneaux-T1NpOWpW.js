import{F as n}from"./Figures2D-C8-KKsFd.js";import{p as S}from"./PointAbstrait-Cz1GEocE.js";import{s as m}from"./segmentsVecteurs-BYbXXoZp.js";import{p as g}from"./index-BvuGzI-o.js";function W(e){const c=(e==null?void 0:e.fillStyle)||"lime",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.rayonExterieur)||1,l=(e==null?void 0:e.rayonInterieur)||.5,$=(e==null?void 0:e.opacite)||1,d=`
      <polygon points="${Array.from({length:10},(i,h)=>{const u=Math.PI/5*h-Math.PI/2,M=h%2===0?t*20:l*20;return`${M*Math.cos(u)},${M*Math.sin(u)}`}).join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
    `.trim(),k=Array.from({length:10},(i,h)=>{const u=Math.PI/5*h-Math.PI/2,M=h%2===0?t:l;return`(${M*Math.cos(u)},-${M*Math.sin(u)})`}).join(" -- "),y=`
    % Étoile à 5 branches
      \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${k} -- cycle;
    `.trim(),f=[0,72,144,216,288].map(i=>i+90).map(i=>m(-Math.cos(i*Math.PI/180)*t,-Math.sin(i*Math.PI/180)*t,Math.cos(i*Math.PI/180)*t,Math.sin(i*Math.PI/180)*t));return new n({codeSvg:d,codeTikz:y,width:t*2,height:t*2,axes:f,opacite:$})}function s(e){const c=(e==null?void 0:e.fillStyle)||"blue",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.rayon)||3,l=(e==null?void 0:e.opacite)||1,w=`
            <polygon points="${Array.from({length:5},(f,i)=>{const h=2*Math.PI/5*i-Math.PI/2;return`${t*20*Math.cos(h)},${t*20*Math.sin(h)}`}).join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
        `.trim(),d=Array.from({length:5},(f,i)=>{const h=2*Math.PI/5*i-Math.PI/2;return`(${t*Math.cos(h)},${-t*Math.sin(h)})`}).join(" -- "),k=`
            % Pentagone régulier
            \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${d} -- cycle;
        `.trim(),y=[0,72,144,216,288].map(f=>f+90).map(f=>m(-Math.cos(f*Math.PI/180)*t*1.1,-Math.sin(f*Math.PI/180)*t*1.1,Math.cos(f*Math.PI/180)*t*1.1,Math.sin(f*Math.PI/180)*t*1.1));return new n({codeSvg:w,codeTikz:k,width:t*2,height:t*2,axes:y,opacite:l})}function j(e){const c=(e==null?void 0:e.fillStyle)||"green",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.largeur)||2,l=(e==null?void 0:e.hauteur)||3,$=(e==null?void 0:e.opacite)||1,d=`
            <polygon points="${[`0,${-l*10}`,`${t*10},${-l*7}`,`0,${l*10}`,`${-t*10},${-l*7}`].join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
        `.trim(),k=[`(0,${l/2})`,`(${t},${l*.35})`,`(0,${-l/2})`,`(${-t},${l*.35})`].join(" -- "),y=`
            % Cerf-volant
            \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${k} -- cycle;
        `.trim(),f=[m(0,-l*.6,0,l*.6)];return new n({codeSvg:d,codeTikz:y,width:t,height:l,axes:f,opacite:$})}function v(e){const c=(e==null?void 0:e.fillStyle)||"yellow",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.base)||3,l=(e==null?void 0:e.hauteur)||4,$=(e==null?void 0:e.opacite)||1,d=`
                        <polygon points="${[`0,${-l*10}`,`${t*10},${l*10}`,`0,${l*5}`,`${-t*10},${l*10}`].join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
                `.trim(),k=[`(0,${l/2})`,`(${t/2},${-l/2})`,`(0,${-l/4})`,`(${-t/2},${-l/2})`].join(" -- "),y=`
    % Aile delta
                        \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${k} -- cycle;
                `.trim(),f=[m(0,-l*.6,0,l*.7)];return new n({codeSvg:d,codeTikz:y,width:t,height:l,axes:f,opacite:$})}function L(e){const c=(e==null?void 0:e.fillStyle)||"pink",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.baseSuperieure)||2,l=(e==null?void 0:e.baseInferieure)||4,$=(e==null?void 0:e.hauteur)||2.5,w=(e==null?void 0:e.opacite)||1,k=`
        <polygon points="${[`${-l*10},${$*10}`,`${l*10},${$*10}`,`${t*10},${-$*10}`,`${-t*10},${-$*10}`].join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
    `.trim(),y=[`(${-l/2},${-$/2})`,`(${l/2},${-$/2})`,`(${t/2},${$/2})`,`(${-t/2},${$/2})`].join(" -- "),f=`
    % Trapèze isocèle
        \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${y} -- cycle;
    `.trim(),i=[m(0,-$*.6,0,$*.6)];return new n({codeSvg:k,codeTikz:f,width:l,height:$,axes:i,opacite:w})}function C(e){const c=(e==null?void 0:e.fillStyle)||"orange",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.rayonHorizontal)||1.5,l=(e==null?void 0:e.rayonVertical)||1,$=(e==null?void 0:e.opacite)||1,d=`
                <polygon points="${[`${-t*10},${-l*20}`,`${t*10},${-l*20}`,`${t*20},0`,`${t*10},${l*20}`,`${-t*10},${l*20}`,`${-t*20},0`].join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
        `.trim(),k=[`(${-t/2},${l})`,`(${t/2},${l})`,`(${t},0)`,`(${t/2},${-l})`,`(${-t/2},${-l})`,`(${-t},0)`].join(" -- "),y=`
        % Hexagone non régulier
                \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${k} -- cycle;
        `.trim(),f=[m(0,-l*1.2,0,l*1.2),m(-t*1.2,0,t*1.2,0)];return new n({codeSvg:d,codeTikz:y,width:t*2,height:l*2,axes:f,centre:S(0,0),opacite:$})}function T(e){const c=(e==null?void 0:e.fillStyle)||"teal",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.base)||4,l=(e==null?void 0:e.hauteur)||4,$=(e==null?void 0:e.opacite)||1,d=`
            <polygon points="${[`${-t*10-5},${-l*8}`,`${t*10+5},${l*10}`,`${-t*10},${l*10}`].join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
        `.trim(),k=[`(${-t/2-.25},${l*.4})`,`(${t/2+.25},${-l/2})`,`(${-t/2},${-l/2})`].join(" -- "),y=`
  % Triangle
            \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${k} -- cycle;
        `.trim();return new n({codeSvg:d,codeTikz:y,width:(t*20+10)/20,height:l,opacite:$,nonAxe:m(-t*1.1,-l*1.1,t*.55,l*.55)})}function A(e){const c=(e==null?void 0:e.fillStyle)||"gray",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.rayonExterieur)||2,l=(e==null?void 0:e.rayonInterieur)||3,$=(e==null?void 0:e.angle)||0,w=Math.min(t,l),d=Math.max(t,l),k=(e==null?void 0:e.opacite)||1,y=t<l?`
     <path d="
      M 0,${-w*10}
      A ${w*10},${w*10} 0 0 1 0,${w*10}
      A ${d*10},${d*10} 0 0 0 0,${-w*10}
      Z
    " fill="${c}" stroke="${r}" stroke-width="${a}" />
  `.trim():`
    <path d="
      M 0,${-w*10}
      A ${w*10},${w*10} 0 1 1 0,${w*10}
      A ${d*10},${d*10} 0 1 0 0,${-w*10}
      Z
    " fill="${c}" stroke="${r}" stroke-width="${a}" />
  `.trim(),f=Math.asin(w/d)*180/Math.PI,i=`
    % Croissant de lune
    \\draw[fill=${c}, draw=${r}, line width=${a}pt] 
      (0,${-w/2}) 
      arc[start angle=${-f}, end angle=${f}, radius=${d/2}] 
      -- (0,${w/2})
      arc[start angle=90, end angle=-90, radius=${w/2}] 
      -- cycle;
  `.trim(),h=[m(-.5,0,w,0)];return new n({codeSvg:y,codeTikz:i,width:t>l?d:w,height:t>l?d:w,axes:h,angle:$,opacite:k})}function D(e){const c=(e==null?void 0:e.fillStyle)||"yellow",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.opacite)||1,$=`<path d="${`
        M 0,0
        L 40,0
        A 40,40 0 1,1 0,-40
        Z
    `.trim()}" fill="${c}" stroke="${r}" stroke-width="${a}" />`,w=(e==null?void 0:e.fillStyle)||"yellow",d=(e==null?void 0:e.strokeStyle)||"black",k=(e==null?void 0:e.lineWidth)||"1pt",y=`
    % Pacman
        \\draw[fill=${w}, draw=${d}, line width=${k}] 
        (0,0) -- (0,1) 
        arc[start angle=90, end angle=360, radius=2cm] -- cycle;
    `.trim(),f=[m(-2.2,-2.2,1,1)];return new n({codeSvg:$,codeTikz:y,width:4,height:4,axes:f,opacite:t})}function E(e){const c=(e==null?void 0:e.fillStyle)||"gray",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.rayonExterieur)||2,l=(e==null?void 0:e.rayonInterieur)||1.5,$=(e==null?void 0:e.opacite)||1,w=`
    <path d="
      M ${-t*20},${-t*20} 
      L 0,${-t*20}
      A ${t*20} ,${t*20}  0 0 1 0,${t*20}  
      L ${-t*20},${t*20}
      L ${-t*20},${l*20}
      L 0,${l*20}
      A ${l*20},${l*20} 0 0 0 0,${-l*20}
      L ${-t*20},${-l*20}
      L ${-t*20},${-t*20}

      Z
    " fill="${c}" stroke="${r}" stroke-width="${a}" />
  `.trim(),d=`
    % Fer à cheval
    \\draw[fill=${c}, draw=${r}, line width=${a}pt]
      (${-t},${t}) 
      -- (0,${t}) 
      arc[start angle=90, end angle=-90, radius=${t}]
      -- (${-t},${-t})
      -- (${-t},${-l})
      -- (0,${-l})
      arc[start angle=-90, end angle=90, radius=${l}]
      -- (${-t},${l})
      -- cycle;
  `.trim(),k=[m(-t,0,t+.5,0)];return new n({codeSvg:w,codeTikz:d,width:t*2,height:t*2,axes:k,opacite:$})}function R(e){const c=(e==null?void 0:e.fillStyle)||"cyan",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.base)||4,l=(e==null?void 0:e.hauteur)||3,$=(e==null?void 0:e.angle)||60,w=(e==null?void 0:e.opacite)||1,d=l*20/Math.tan($*Math.PI/180),y=`
    <polygon points="${[`${-t*10-d/2},${l*10}`,`${t*10-d/2},${l*10}`,`${t*10+d/2},${-l*10}`,`${-t*10+d/2},${-l*10}`].join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
  `.trim(),f=[`(${-t/2-d/20},${l/2})`,`(${t/2-d/20},${l/2})`,`(${t/2+d/20},${-l/2})`,`(${-t/2+d/20},${-l/2})`].join(" -- "),i=`
  % Parallélogramme
    \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${f} -- cycle;
  `.trim();return new n({codeSvg:y,codeTikz:i,width:t+Math.abs(d/10),height:l,centre:S(0,0),nonAxe:m((-t/2+d/40)*2.5,l*1.25,(t/2-d/40)*2.5,-l*1.25),opacite:w})}function Z(e){const c=(e==null?void 0:e.fillStyle)||"pink",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.base)||2,l=(e==null?void 0:e.opacite)||1,$=`
    <path d="
      M 0,${-t*10}
      C ${-t*10},${-t*20} ${-t*20},${-t*5} 0,${t*10}
      C ${t*20},${-t*5} ${t*10},${-t*20} 0,${-t*10}
      Z
    " fill="${c}" stroke="${r}" stroke-width="${a}" />
  `.trim(),w=`
    % Coeur
    \\draw[fill=${c}, draw=${r}, line width=${a}pt]
      (0,${t/2})
      .. controls (${t/2},${t}) and (${t},${t/4}) .. (0,${-t/2})
      .. controls (${-t},${t/4}) and (${-t/2},${t}) .. (0,${t/2})
      -- cycle;
  `.trim(),d=[m(0,t*.7,0,-t*.7)];return new n({codeSvg:$,codeTikz:w,width:t*2,height:t*2,axes:d,opacite:l})}function _(e){const c=(e==null?void 0:e.fillStyle)||"purple",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.hauteur)||3;let l=(e==null?void 0:e.rayon)||2;const $=(e==null?void 0:e.base)||3,w=(e==null?void 0:e.opacite)||1;l<t/2&&(l=t/2+1);const d=$/2,k=[`${-d*20},0`,`${d*20},0`],y=`
    <path d="
      M ${k[0]}
      A ${l*20},${l*20} 0 0 1 ${k[1]}
      A ${l*20},${l*20} 0 0 1 ${k[0]}
      Z
    " fill="${c}" stroke="${r}" stroke-width="${a}" />
  `.trim(),f=`
    % Ogive
    \\begin{scope}
      \\clip (0,${l/$}) circle(${l});
      \\fill[fill=${c}] (0,${-l/$}) circle(${l});
      \\draw[draw=${r}, line width=${a}pt] (0,${-l/$}) circle(${l});
    \\end{scope}
    \\begin{scope}
      \\clip (0,${-l/$}) circle(${l});
      \\draw[draw=${r}, line width=${a}pt] (0,${l/$}) circle(${l});
      \\end{scope}
  `.trim(),i=[m(-d-1,0,d+1,0),m(0,-t,0,t)];return new n({codeSvg:y,codeTikz:f,width:$,height:t,axes:i,centre:S(0,0),opacite:w})}function B(e){const c=(e==null?void 0:e.fillStyle)||"gray",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.rayonExterieur)||1,l=(e==null?void 0:e.rayonInterieur)||.3,$=(e==null?void 0:e.opacite)||1,d=`
    <polygon points="${Array.from({length:8},(i,h)=>{const u=Math.PI/4*h,M=h%2===0?t*20:l*20;return`${M*Math.cos(u)},${M*Math.sin(u)}`}).join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
  `.trim(),k=Array.from({length:8},(i,h)=>{const u=Math.PI/4*h,M=h%2===0?t:l;return`(${M*Math.cos(u)},-${M*Math.sin(u)})`}).join(" -- "),y=`
% Etoile à 4 branches
    \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${k} -- cycle;
  `.trim(),f=[0,45,90,135].map(i=>m(-Math.cos(i*Math.PI/180)*Math.max(t,l)*1.1,-Math.sin(i*Math.PI/180)*Math.max(t,l)*1.1,Math.cos(i*Math.PI/180)*Math.max(t,l)*1.1,Math.sin(i*Math.PI/180)*Math.max(t,l)*1.1));return new n({codeSvg:d,codeTikz:y,width:t*2,height:t*2,axes:f,centre:S(0,0),opacite:$})}function O(e){const c=(e==null?void 0:e.fillStyle)||"red",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.largeurBras)||.6,l=(e==null?void 0:e.longueurBras)||2.5,$=(e==null?void 0:e.opacite)||1,d=`
    <polygon points="${[`${-t*10},${-l*10}`,`${t*10},${-l*10}`,`${t*10},${-t*10}`,`${l*10},${-t*10}`,`${l*10},${t*10}`,`${t*10},${t*10}`,`${t*10},${l*10}`,`${-t*10},${l*10}`,`${-t*10},${t*10}`,`${-l*10},${t*10}`,`${-l*10},${-t*10}`,`${-t*10},${-t*10}`].join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" opacity="0.6"/>
  `.trim(),k=[`(${-t/2},${-l/2})`,`(${t/2},${-l/2})`,`(${t/2},${-t/2})`,`(${l/2},${-t/2})`,`(${l/2},${t/2})`,`(${t/2},${t/2})`,`(${t/2},${l/2})`,`(${-t/2},${l/2})`,`(${-t/2},${t/2})`,`(${-l/2},${t/2})`,`(${-l/2},${-t/2})`,`(${-t/2},${-t/2})`].join(" -- "),y=`
  % Croix rouge
    \\draw[fill=${c}, draw=${r}, line width=${a}pt, opacity=0.6] ${k} -- cycle;
  `.trim(),f=[0,45,90,135].map(i=>m(-Math.cos(i*Math.PI/180)*l*.7,-Math.sin(i*Math.PI/180)*l*.7,Math.cos(i*Math.PI/180)*l*.7,Math.sin(i*Math.PI/180)*l*.7));return new n({codeSvg:d,codeTikz:y,width:l*2,height:l*2,axes:f,centre:S(0,0),opacite:$})}function q(e){const c=(e==null?void 0:e.fillStyle)||"gray",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.largeur)||4,l=(e==null?void 0:e.hauteur)||2,$=(e==null?void 0:e.coinsArrondis)||!1,w=(e==null?void 0:e.angle)||0,d=(e==null?void 0:e.opacite)||1,k=[`${-t*10},${-l*10}`,`${t*10},${-l*10}`,`${t*10},${l*10}`,`${-t*10},${l*10}`].join(" "),y=$?`
      <rect x="${-t*10}" y="${-l*10}" width="${t*20}" height="${l*20}" rx="${Math.min(t,l)*5}" ry="${Math.min(t,l)*5}" fill="${c}" stroke="${r}" stroke-width="${a}" />
    `.trim():`
      <polygon points="${k}" fill="${c}" stroke="${r}" stroke-width="${a}" />
    `.trim(),f=($?`\\draw[fill=${c}, draw=${r}, line width=${a}pt, rounded corners=${Math.min(t,l)/5}cm] 
        (${-t/2},${-l/2}) rectangle (${t/2},${l/2});`:`\\draw[fill=${c}, draw=${r}, line width=${a}pt] 
        (${-t/2},${-l/2}) rectangle (${t/2},${l/2});`).trim(),i=[m(-t*5/8,0,t*5/8,0),m(0,-l*5/8,0,l*5/8)];return new n({codeSvg:y,codeTikz:f,width:t,height:l,axes:i,centre:S(0,0),angle:w,opacite:d})}function V(e){const c=(e==null?void 0:e.fillStyle)||"orange",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.base)||4,l=(e==null?void 0:e.hauteur)||2,$=(e==null?void 0:e.angle)||0,w=(e==null?void 0:e.opacite)||1,d=t*10,k=l*10,f=`
      <polygon points="${[`0,${-k}`,`${d},0`,`0,${k}`,`${-d},0`].join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
    `.trim(),i=[`(0,${-l/2})`,`(${t/2},0)`,`(0,${l/2})`,`(${-t/2},0)`].join(" -- "),h=`
  % losange
    \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${i} -- cycle;
  `.trim(),u=[m(-t*5/8,0,t*5/8,0),m(0,-l*5/8,0,l*5/8)];return new n({codeSvg:f,codeTikz:h,width:t,height:l,axes:u,centre:S(0,0),angle:$,opacite:w})}function H(e){const c=(e==null?void 0:e.fillStyle)||"blue",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.base)||4,l=(e==null?void 0:e.hauteur)||2,$=(e==null?void 0:e.opacite)||1,d=`
    <polygon points="${[`0,${-l*10}`,`${t*10},${l*10}`,`${-t*10},${l*10}`].join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
  `.trim(),k=[`(0,${-l/2})`,`(${t/2},${l/2})`,`(${-t/2},${l/2})`].join(" -- "),y=`
  % triangle isocèle
    \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${k} -- cycle;
  `.trim(),f=[m(0,-l*5/8,0,l*5/8)];return new n({codeSvg:d,codeTikz:y,width:t,height:l,axes:f,opacite:$})}function N(e){const c=(e==null?void 0:e.fillStyle)||"blue",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.base)||4,l=(e==null?void 0:e.opacite)||1,$=Math.round(Math.sqrt(3)/2*t*100)/100,d=`
    <polygon points="${[`0,${(-$*40/3).toFixed(2)}`,`${t*10},${($*20/3).toFixed(2)}`,`${-t*10},${($*20/3).toFixed(2)}`].join(" ")}" fill="${c}" stroke="${r}" stroke-width="${a}" />
  `.trim(),k=[`(0,${(-$/3).toFixed(2)})`,`(${t/2},${(2*$/3).toFixed(2)})`,`(${-t/2},${(2*$/3).toFixed(2)})`].join(" -- "),y=`
  % triangle équilatéral
    \\draw[fill=${c}, draw=${r}, line width=${a}pt] ${k} -- cycle;
  `.trim(),f=[90,210,-30].map(i=>m(-Math.cos(i*Math.PI/180)*t*.7,-Math.sin(i*Math.PI/180)*t*.7,Math.cos(i*Math.PI/180)*t*.7,Math.sin(i*Math.PI/180)*t*.7));return new n({codeSvg:d,codeTikz:y,width:t,height:$,axes:f,opacite:l})}function X(e){const c=(e==null?void 0:e.fillStyle)||"maroon",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.opacite)||.7,l=`
    <ellipse cx="0" cy="0" rx="40" ry="20" fill="${c}" stroke="${r}" stroke-width="${a}" />
  `.trim(),$=`fill=${c}`,w=`draw=${r}`,d=`line width=${a}pt`,k=`
    \\draw[${$}, ${w}, ${d}] (0,0) ellipse (2cm and 1cm);
  `.trim();return new n({codeSvg:l,codeTikz:k,width:4,height:2,opacite:t,axes:[m(-2.2,0,2.2,0),m(0,-1.2,0,1.2)],centre:S(0,0)})}function Y(e){let c=(e==null?void 0:e.nx)||2,r=(e==null?void 0:e.ny)||2;(c<1||r<1)&&(c=1,r=1);const a=g(["blue","brown","green","cyan","darkgray","pink","orange","red","magenta","purple","violet","white","yellow"]),t=(e==null?void 0:e.fillStyle)||a,l=(e==null?void 0:e.strokeStyle)||"black",$=(e==null?void 0:e.lineWidth)||1,w=(e==null?void 0:e.studFillStyle)||a,d=(e==null?void 0:e.studStrokeStyle)||"black",k=c/2,y=r/2,f=`
<rect x="${-k*10}" y="${-y*10}" width="${k*20}" height="${y*20}" fill="${t}" stroke="${l}" stroke-width="${$}" />
${Array.from({length:c},(u,M)=>Array.from({length:r},(b,x)=>`<circle cx="${-k*10+5+M*10}" cy="${-y*10+5+x*10}" r="3" fill="${w}" stroke="${d}" stroke-width="${$}" />`).join("")).join("")}
`.trim(),i=`
\\draw[fill=${t}, draw=${l}, line width=${$}pt] (${(-k/2).toFixed(1)},${(-y/2).toFixed(1)}) rectangle (${(k/2).toFixed(1)},${(y/2).toFixed(1)});
\\foreach \\x in {0,...,${c-1}} {
  \\foreach \\y in {0,...,${r-1}} {
    \\fill[${w}] (${(-k/2+.25).toFixed(2)}+\\x/2,${(-y/2+.25).toFixed(2)}+\\y/2) circle (0.15);
    \\draw[draw=${d}, line width=${$}pt] (${(-k/2+.25).toFixed(2)}+\\x/2,${(-y/2+.25).toFixed(2)}+\\y/2) circle (0.15);
  }
}
`.trim(),h=[];return c===r&&(h.push(m(-k*.6-.2,-y*.6-.2,k*.6+.2,y*.6+.2)),h.push(m(-k*.6-.2,y*.6+.2,k*.6+.2,-y*.6-.2))),h.push(m(-k*.6-.2,0,k*.6+.2,0)),h.push(m(0,-y*.6-.2,0,y*.6+.2)),new n({codeSvg:f,codeTikz:i,width:c/2,height:r/2,axes:h,centre:S(0,0)})}function G(e){const c=(e==null?void 0:e.fillStyle)||"yellow",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.borderFillSyle)||"white",l=`
  <g transform="scale(0.707) rotate(45)"><rect x="-20" y="-20" width="40" height="40" fill="${t}" stroke="${r}" stroke-width="${a}" rx="2" ry="2"/>
    <rect x="-15" y="-15" width="30" height="30" fill="${c}" stroke="${r}" stroke-width="${a}" rx="2" ry="2"/></g>
  `.trim(),$=`fill=${c}`,w=`draw=${r}`,d=`line width=${a}pt`,k=`
    \\draw[fill=${t}, ${w}, ${d}] (0,-1) -- (1,0) -- (0,1) -- (-1,0) -- cycle;
    \\draw[${$}, ${w}, ${d}] (0,-0.75) -- (0.75,0) -- (0,0.75) -- (-0.75,0) -- cycle;
  `.trim(),y=[m(-1,-1,1,1),m(-1,1,1,-1),m(-1.2,0,1.2,0),m(0,-1.2,0,1.2)];return new n({codeSvg:l,codeTikz:k,width:2,height:2,axes:y,centre:S(0,0)})}function J(e){const c=(e==null?void 0:e.fillStyle)||"yellow",r=(e==null?void 0:e.strokeStyle)||"gray",a=(e==null?void 0:e.cancelStroke)||"black",t=(e==null?void 0:e.lineWidth)||1,l=(e==null?void 0:e.borderFillSyle)||"white",$=`
   <g transform="scale(0.707) rotate(45)"><rect x="-20" y="-20" width="40" height="40" fill="${l}" stroke="${r}" stroke-width="${t}" rx="2" ry="2"/>
    <rect x="-15" y="-15" width="30" height="30" fill="${c}" stroke="${r}" stroke-width="${t}" rx="2" ry="2"/></g>
    <line x1="-10" y1="10" x2="10" y2="-10" stroke="${a}" stroke-width="3" />
  `.trim(),w=`fill=${c}`,d=`draw=${r}`,k=`line width=${t}pt`,y=`draw=${a}`,f=`
    \\draw[fill=${l}, ${d}, ${k}] (0,-1) -- (1,0) -- (0,1) -- (-1,0) -- cycle;
    \\draw[${w}, ${d}, ${k}] (0,-0.75) -- (0.75,0) -- (0,0.75) -- (-0.75,0) -- cycle;
    \\draw[${y}, line width=3pt] (-0.5,-0.5) -- (0.5,0.5);
  `.trim(),i=[m(-1,-1,1,1),m(-1,1,1,-1)];return new n({codeSvg:$,codeTikz:f,width:2,height:2,axes:i,centre:S(0,0)})}function K(e){const c=(e==null?void 0:e.fillStyle)||"blue",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||5,l=`
  <circle cx="0" cy="0" r="20" stroke="black" stroke-width="1" />
    <circle cx="0" cy="0" r="17" fill="${c}" stroke="${r}" stroke-width="${a}" />
    <line x1="-13" y1="-13" x2="13" y2="13" stroke="red" stroke-width="3" />
  `.trim(),$=`fill=${c}`,w=`draw=${r}`,d=`line width=${a*1.1}pt`,y=`
   \\draw[draw=black, line width=1pt] (0,0) circle (1cm);
    \\draw[${$}, ${w}, ${d}] (0,0) circle (0.9cm);
      \\draw[red, line width=5pt] (-0.7,0.7) -- (0.7,-0.7);
  `.trim(),f=[m(-1,-1,1,1),m(-1,1,1,-1)];return new n({codeSvg:l,codeTikz:y,width:2,height:2,axes:f,centre:S(0,0)})}function Q(e){const c=(e==null?void 0:e.fillStyle)||"red",r=(e==null?void 0:e.strokeStyle)||"white",a=(e==null?void 0:e.lineWidth)||2,t=(e==null?void 0:e.textColor)||"white",l=`
   <polygon points="-8.8,-20 8.8,-20 20,-8.8 20,8.8 8.8,20 -8.8,20 -20,8.8 -20,-8.8" fill="white" stroke="black" stroke-width="1"/>
  <polygon points="-8.8,-20 8.8,-20 20,-8.8 20,8.8 8.8,20 -8.8,20 -20,8.8 -20,-8.8" fill="${c}" stroke="${r}" stroke-width="${a}" transform="scale(0.9)"/>
    <text x="0" y="5" fill="${t}" font-size="12" font-family="Arial" font-weight="bold" text-anchor="middle">STOP</text>
  `.trim(),$=`
                    \\draw[fill=white, draw=black, line width=1pt] (-0.5,-1) -- (0.5,-1) -- (1,-0.5) -- (1,0.5) -- (0.5,1) -- (-0.5,1) -- (-1,0.5) -- (-1,-0.5) -- cycle;
             \\begin{scope}[scale=0.95]\\draw[fill=${c}, draw=${r}, line width=${a}pt] (-0.5,-1) -- (0.5,-1) -- (1,-0.5) -- (1,0.5) -- (0.5,1) -- (-0.5,1) -- (-1,0.5) -- (-1,-0.5) -- cycle;\\end{scope}
                    \\node at (0,0) {\\textcolor{${t}}{\\textbf{\\small STOP}}};
    `.trim();return new n({codeSvg:l,codeTikz:$,width:2,height:2,nonAxe:m(0,-2.5,0,2.5)})}function U(e){const c=(e==null?void 0:e.fillStyle)||"blue",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.tFillStyle)||"white",l=(e==null?void 0:e.barFillStyle)||"red",$=`
    <rect x="-20" y="-20" width="40" height="40" rx="5" fill="white" stroke="${r}" stroke-width="${a}" />
    <rect x="-17" y="-17" width="34" height="34" fill="${c}" />
    <rect x="-2.5" y="-10" width="5" height="24" fill="${t}" />
    <rect x="-7" y="-14" width="14" height="9" fill="${t}" />
    <rect x="-6" y="-13" width="12" height="7" fill="${l}" />
  `.trim(),w=`
    \\draw[fill=white, draw=${r}, line width=${a}pt, rounded corners=2pt] (-1,-1) rectangle (1,1);
    \\fill[${c}] (-0.85,-0.85) rectangle (0.85,0.85);
    \\fill[${t}] (-0.125,-0.5) rectangle (0.125,0.7);
    \\fill[${t}] (-0.35,0.35) rectangle (0.35,0.7);
    \\fill[${l}] (-0.3,0.4) rectangle (0.3,0.6);
  `.trim(),d=[m(0,-1.2,0,1.2)];return new n({codeSvg:$,codeTikz:w,width:2,height:2,axes:d})}function o(e){const c=(e==null?void 0:e.fillStyle)||"blue",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||1,t=(e==null?void 0:e.pFillStyle)||"white",l=`
    <rect x="-20" y="-20" width="40" height="40" rx="5" fill="white" stroke="${r}" stroke-width="${a}" />
    <rect x="-17" y="-17" width="34" height="34" fill="${c}" />
    <text x="0" y="12" font-size="30" font-family="Arial" font-weight="bold" text-anchor="middle" fill="${t}">P</text>
  `.trim(),$=`
    \\draw[fill=white, draw=${r}, line width=${a}pt, rounded corners=2pt] (-1,-1) rectangle (1,1);
    \\fill[${c}] (-0.85,-0.85) rectangle (0.85,0.85);
    \\node[text=${t}, font=\\bfseries, scale=1.5] at (0,0) {P};
  `.trim();return new n({codeSvg:l,codeTikz:$,width:2,height:2,nonAxe:m(0,-2.5,0,2.5)})}function p(e){const c=(e==null?void 0:e.fillStyle)||"white",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||3,t=(e==null?void 0:e.borderStyle)||"black",l=(e==null?void 0:e.borderWidth)||1,$=[-90,30,150].map(h=>`${(22*Math.cos(h*Math.PI/180)).toFixed(2)},${(-22*Math.sin(h*Math.PI/180)).toFixed(2)}`).join(" "),w=[-90,30,150].map(h=>`${(19*Math.cos(h*Math.PI/180)).toFixed(2)},${(-19*Math.sin(h*Math.PI/180)).toFixed(2)}`).join(" "),d=`
    <polygon points="${$}" fill="${c}" stroke="${t}" stroke-width="${l}" />
    <polygon points="${w}" fill="none" stroke="${r}" stroke-width="${a}" />
  `.trim(),k=[-90,30,150].map(h=>`(${(22*Math.cos(h*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(h*Math.PI/180)/20).toFixed(3)})`).join(" -- "),y=[-90,30,150].map(h=>`(${(19*Math.cos(h*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(h*Math.PI/180)/20).toFixed(3)})`).join(" -- "),f=`
    \\draw[fill=${c}, draw=${t}, line width=${l}pt] 
      ${k} -- cycle;
    \\draw[draw=${r}, line width=${a}pt] 
      ${y} -- cycle;
  `.trim(),i=[-90,30,150].map(h=>m(1.2*Math.cos(h*Math.PI/180),-1.2*Math.sin(h*Math.PI/180),-1.2*Math.cos(h*Math.PI/180),1.2*Math.sin(h*Math.PI/180)));return new n({codeSvg:d,codeTikz:f,width:2,height:2,axes:i})}function ee(e){const c=(e==null?void 0:e.fillStyle)||"white",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||3,t=(e==null?void 0:e.borderStyle)||"black",l=(e==null?void 0:e.borderWidth)||1,$=[90,-30,-150].map(i=>`${(22*Math.cos(i*Math.PI/180)).toFixed(2)},${(-22*Math.sin(i*Math.PI/180)).toFixed(2)}`).join(" "),w=[90,-30,-150].map(i=>`${(19*Math.cos(i*Math.PI/180)).toFixed(2)},${(-19*Math.sin(i*Math.PI/180)).toFixed(2)}`).join(" "),d=`
    <polygon points="${$}" fill="${c}" stroke="${t}" stroke-width="${l}" />
    <polygon points="${w}" fill="none" stroke="${r}" stroke-width="${a}" />
    <path d="M -2,-7 L -2,2 L -0.5,2 L -3,7 L -5.5,2 L -4,2 L -4,-7 Z" fill="black" />
    <path d="M 4,7 L 4,-2 L 5.5,-2 L 3,-7 L 0.5,-2 L 2,-2 L 2,7 Z" fill="black" />
  `.trim(),k=[90,-30,-150].map(i=>`(${(22*Math.cos(i*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(i*Math.PI/180)/20).toFixed(3)})`).join(" -- "),y=[90,-30,-150].map(i=>`(${(19*Math.cos(i*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(i*Math.PI/180)/20).toFixed(3)})`).join(" -- "),f=`
    \\draw[fill=${c}, draw=${t}, line width=${l}pt] 
      ${k} -- cycle;
    \\draw[draw=${r}, line width=${a}pt] 
      ${y} -- cycle;
      \\path[fill=black] 
        (-0.1,0.35) -- (-0.1,-0.1) -- (-0.025,-0.1) -- (-0.15,-0.35) -- (-0.275,-0.1) -- (-0.2,-0.1) -- (-0.2,0.35) -- cycle;
      \\path[fill=black] 
        (0.2,-0.35) -- (0.2,0.1) -- (0.275,0.1) -- (0.15,0.35) -- (0.025,0.1) -- (0.1,0.1) -- (0.1,-0.35) -- cycle;
  `.trim();return new n({codeSvg:d,codeTikz:f,width:2,height:2,nonAxe:m(0,-2.5,0,2.5)})}function te(e){const c=(e==null?void 0:e.fillStyle)||"white",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||3,t=(e==null?void 0:e.borderStyle)||"black",l=(e==null?void 0:e.borderWidth)||1,$=[90,-30,-150].map(i=>`${(22*Math.cos(i*Math.PI/180)).toFixed(2)},${(-22*Math.sin(i*Math.PI/180)).toFixed(2)}`).join(" "),w=[90,-30,-150].map(i=>`${(19*Math.cos(i*Math.PI/180)).toFixed(2)},${(-19*Math.sin(i*Math.PI/180)).toFixed(2)}`).join(" "),d=`
    <polygon points="${$}" fill="${c}" stroke="${t}" stroke-width="${l}" />
    <polygon points="${w}" fill="none" stroke="${r}" stroke-width="${a}" />
    <line x1="-2" y1="6" x2="-2" y2="-6" stroke="black" stroke-width="2" />
    <path d="M 3.5,6 L 3.5,2 L 2,-2 L 2,-6" stroke="black" stroke-width="2" fill="none" />
  `.trim(),k=[90,-30,-150].map(i=>`(${(22*Math.cos(i*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(i*Math.PI/180)/20).toFixed(3)})`).join(" -- "),y=[90,-30,-150].map(i=>`(${(19*Math.cos(i*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(i*Math.PI/180)/20).toFixed(3)})`).join(" -- "),f=`
    \\draw[fill=${c}, draw=${t}, line width=${l}pt] 
      ${k} -- cycle;
    \\draw[draw=${r}, line width=${a}pt] 
      ${y} -- cycle;
     \\draw[draw=black, line width=2pt] (-0.1,-0.3) -- (-0.1,0.3);
    \\draw[draw=black, line width=2pt] (0.175,-0.3) -- (0.175,-0.1) -- (0.1,0.1) -- (0.1,0.3);
  `.trim();return new n({codeSvg:d,codeTikz:f,width:2,height:2,nonAxe:m(0,-2.5,0,2.5)})}function le(e){const c=(e==null?void 0:e.fillStyle)||"white",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||3,t=(e==null?void 0:e.borderStyle)||"black",l=(e==null?void 0:e.borderWidth)||1,$=[90,-30,-150].map(h=>`${(22*Math.cos(h*Math.PI/180)).toFixed(2)},${(-22*Math.sin(h*Math.PI/180)).toFixed(2)}`).join(" "),w=[90,-30,-150].map(h=>`${(19*Math.cos(h*Math.PI/180)).toFixed(2)},${(-19*Math.sin(h*Math.PI/180)).toFixed(2)}`).join(" "),d=`
    <polygon points="${$}" fill="${c}" stroke="${t}" stroke-width="${l}" />
    <polygon points="${w}" fill="none" stroke="${r}" stroke-width="${a}" />
   <path d="M -3.9,6 L -3.9,2 L -1.9,-2 L -1.9,-6" stroke="black" stroke-width="2" fill="none" />
    <path d="M 3.9,6 L 3.9,2 L 1.9,-2 L 1.9,-6" stroke="black" stroke-width="2" fill="none" />
  `.trim(),k=[90,-30,-150].map(h=>`(${(22*Math.cos(h*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(h*Math.PI/180)/20).toFixed(3)})`).join(" -- "),y=[90,-30,-150].map(h=>`(${(19*Math.cos(h*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(h*Math.PI/180)/20).toFixed(3)})`).join(" -- "),f=`
  % panneauRetrecissementChaussee2
    \\draw[fill=${c}, draw=${t}, line width=${l}pt] 
      ${k} -- cycle;
    \\draw[draw=${r}, line width=${a}pt] 
      ${y} -- cycle;
     \\draw[draw=black, line width=2pt] (-0.195,-0.3) -- (-0.195,-0.1) -- (-0.1,0.1) -- (-0.1,0.3);
    \\draw[draw=black, line width=2pt] (0.195,-0.3) -- (0.195,-0.1) -- (0.1,0.1) -- (0.1,0.3);
  `.trim(),i=[m(0,-1.2,0,1.2)];return new n({codeSvg:d,codeTikz:f,width:2,height:2,axes:i})}function re(e){const c=(e==null?void 0:e.fillStyle)||"white",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||3,t=(e==null?void 0:e.borderStyle)||"black",l=(e==null?void 0:e.borderWidth)||1,$=[90,-30,-150].map(i=>`${(22*Math.cos(i*Math.PI/180)).toFixed(2)},${(-22*Math.sin(i*Math.PI/180)).toFixed(2)}`).join(" "),w=[90,-30,-150].map(i=>`${(19*Math.cos(i*Math.PI/180)).toFixed(2)},${(-19*Math.sin(i*Math.PI/180)).toFixed(2)}`).join(" "),d=`
    <polygon points="${$}" fill="${c}" stroke="${t}" stroke-width="${l}" />
    <polygon points="${w}" fill="none" stroke="${r}" stroke-width="${a}" />
   <line x1="2" y1="6" x2="2" y2="-6" stroke="black" stroke-width="2" />
    <path d="M -3.5,6 L -3.5,2 L -2,-2 L -2,-6" stroke="black" stroke-width="2" fill="none" />
  `.trim(),k=[90,-30,-150].map(i=>`(${(22*Math.cos(i*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(i*Math.PI/180)/20).toFixed(3)})`).join(" -- "),y=[90,-30,-150].map(i=>`(${(19*Math.cos(i*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(i*Math.PI/180)/20).toFixed(3)})`).join(" -- "),f=`
    \\draw[fill=${c}, draw=${t}, line width=${l}pt] 
      ${k} -- cycle;
    \\draw[draw=${r}, line width=${a}pt] 
      ${y} -- cycle;
     \\draw[draw=black, line width=2pt] (0.1,-0.3) -- (0.1,0.3);
    \\draw[draw=black, line width=2pt] (-0.175,-0.3) -- (-0.175,-0.1) -- (-0.1,0.1) -- (-0.1,0.3);
  `.trim();return new n({codeSvg:d,codeTikz:f,width:2,height:2,nonAxe:m(0,-2.5,0,2.5)})}function ce(e){const c=(e==null?void 0:e.fillStyle)||"white",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||3,t=(e==null?void 0:e.borderStyle)||"black",l=(e==null?void 0:e.borderWidth)||1,$=[90,-30,-150].map(h=>`${(22*Math.cos(h*Math.PI/180)).toFixed(2)},${(-22*Math.sin(h*Math.PI/180)).toFixed(2)}`).join(" "),w=[90,-30,-150].map(h=>`${(19*Math.cos(h*Math.PI/180)).toFixed(2)},${(-19*Math.sin(h*Math.PI/180)).toFixed(2)}`).join(" "),d=`
    <polygon points="${$}" fill="${c}" stroke="${t}" stroke-width="${l}" />
    <polygon points="${w}" fill="none" stroke="${r}" stroke-width="${a}" />
     <line x1="-4.5" y1="4.5" x2="4.5" y2="-4.5" stroke="black" stroke-width="2"/>
    <line x1="-4.5" y1="-4.5" x2="4.5" y2="4.5" stroke="black" stroke-width="2"/>
  `.trim(),k=[90,-30,-150].map(h=>`(${(22*Math.cos(h*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(h*Math.PI/180)/20).toFixed(3)})`).join(" -- "),y=[90,-30,-150].map(h=>`(${(19*Math.cos(h*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(h*Math.PI/180)/20).toFixed(3)})`).join(" -- "),f=`
  % panneau de croisement
    \\draw[fill=${c}, draw=${t}, line width=${l}pt] 
      ${k} -- cycle;
    \\draw[draw=${r}, line width=${a}pt] 
      ${y} -- cycle;
     \\draw[draw=black, line width=3pt] (-0.25,0.25) -- (0.25,-0.25);
    \\draw[draw=black, line width=3pt] (-0.25,-0.25) -- (0.25,0.25);
  `.trim(),i=[m(0,-1.2,0,1.2)];return new n({codeSvg:d,codeTikz:f,width:2,height:2,axes:i})}function ae(e){const c=(e==null?void 0:e.fillStyle)||"white",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||3,t=(e==null?void 0:e.borderStyle)||"black",l=(e==null?void 0:e.borderWidth)||1,$=[90,-30,-150].map(h=>`${(22*Math.cos(h*Math.PI/180)).toFixed(2)},${(-22*Math.sin(h*Math.PI/180)).toFixed(2)}`).join(" "),w=[90,-30,-150].map(h=>`${(19*Math.cos(h*Math.PI/180)).toFixed(2)},${(-19*Math.sin(h*Math.PI/180)).toFixed(2)}`).join(" "),d=`
    <polygon points="${$}" fill="${c}" stroke="${t}" stroke-width="${l}" />
    <polygon points="${w}" fill="none" stroke="${r}" stroke-width="${a}" />
      <rect x="-3" y="-8" width="6" height="14" rx="3" fill="black" />
    <circle cx="0" cy="-5" r="1.5" fill="red" />
    <circle cx="0" cy="-1" r="1.5" fill="orange" />
    <circle cx="0" cy="3" r="1.5" fill="green" />`.trim(),k=[90,-30,-150].map(h=>`(${(22*Math.cos(h*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(h*Math.PI/180)/20).toFixed(3)})`).join(" -- "),y=[90,-30,-150].map(h=>`(${(19*Math.cos(h*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(h*Math.PI/180)/20).toFixed(3)})`).join(" -- "),f=`
  % Panneau feu tricolore
    \\draw[fill=${c}, draw=${t}, line width=${l}pt] 
      ${k} -- cycle;
    \\draw[draw=${r}, line width=${a}pt] 
      ${y} -- cycle;
       \\fill[black, rounded corners=0.15cm] (-0.15,0.4) rectangle (0.15,-0.3);
    \\fill[red] (0,0.25) circle (0.075);
    \\fill[orange] (0,0.05) circle (0.075);
    \\fill[green] (0,-0.15) circle (0.075);
  `.trim(),i=[m(0,-1.2,0,1.2)];return new n({codeSvg:d,codeTikz:f,width:2,height:2,axes:i})}function $e(e){const c=(e==null?void 0:e.fillStyle)||"white",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||3,t=(e==null?void 0:e.borderStyle)||"black",l=(e==null?void 0:e.borderWidth)||1,$=[90,-30,-150].map(h=>`${(22*Math.cos(h*Math.PI/180)).toFixed(2)},${(-22*Math.sin(h*Math.PI/180)).toFixed(2)}`).join(" "),w=[90,-30,-150].map(h=>`${(19*Math.cos(h*Math.PI/180)).toFixed(2)},${(-19*Math.sin(h*Math.PI/180)).toFixed(2)}`).join(" "),d=`
    <polygon points="${$}" fill="${c}" stroke="${t}" stroke-width="${l}" />
    <polygon points="${w}" fill="none" stroke="${r}" stroke-width="${a}" />
    <path d="M -3,-7 L 0,-11 L 3,-7 L 3,6 L 0,4 L -3,6 Z" fill="black" />
    <line x1="-6" y1="-1" x2="6" y2="-1" stroke="black" stroke-width="2" />
  `.trim(),k=[90,-30,-150].map(h=>`(${(22*Math.cos(h*Math.PI/180)/20).toFixed(3)},${(22*Math.sin(h*Math.PI/180)/20).toFixed(3)})`).join(" -- "),y=[90,-30,-150].map(h=>`(${(19*Math.cos(h*Math.PI/180)/20).toFixed(3)},${(19*Math.sin(h*Math.PI/180)/20).toFixed(3)})`).join(" -- "),f=`
  % Panneau de croisement avec une route secondaire
    \\draw[fill=${c}, draw=${t}, line width=${l}pt] 
      ${k} -- cycle;
    \\draw[draw=${r}, line width=${a}pt] 
      ${y} -- cycle;
    \\fill[black] (-0.15,0.35) -- (0,0.55) -- (0.15,0.35) -- (0.15,-0.3) -- (0,-0.2) -- (-0.15,-0.3) -- cycle;
    \\draw[draw=black, line width=2pt] (-0.3,0.05) -- (0.3,0.05);
  `.trim(),i=[m(0,-1.2,0,1.2)];return new n({codeSvg:d,codeTikz:f,width:2,height:2,axes:i})}function de(e){const c=(e==null?void 0:e.fillStyle)||"red",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||2,l=`${`
        <circle cx="0" cy="0" r="20" fill="${c}" stroke="black" stroke-width="1" />
        <circle cx="0" cy="0" r="18" fill="${c}" stroke="${r}" stroke-width="0" />
        <rect x="-13" y="-3.5" width="26" height="7" fill="white" />
    `.trim()}`,$=`fill=${c}`,w=`draw=${r}`,d=`line width=${a}pt`,k=`
     \\draw[ draw=black, line width=1pt] (0,0) circle (1cm);
   \\draw[${$}, ${w}, ${d}] (0,0) circle (0.95cm);
    \\fill[white] (-0.75, -0.125) rectangle (0.75, 0.125);
  `.trim(),y=[m(-1.2,0,1.2,0),m(0,-1.2,0,1.2)];return new n({codeSvg:l,codeTikz:k,width:2,height:2,axes:y,centre:S(0,0)})}function he(e){const c=(e==null?void 0:e.fillStyle)||"red",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||2,t=`
     <circle cx="0" cy="0" r="20" fill="${c}" stroke="black" stroke-width="1" />
        <circle cx="0" cy="0" r="18" fill="${c}" stroke="${r}" stroke-width="0" />
        <circle cx="0" cy="0" r="14" fill="white" stroke="${r}" stroke-width="0" />
    `.trim(),l=`fill=${c}`,$=`draw=${r}`,w=`line width=${a}pt`,d=`
     \\draw[ draw=black, line width=1pt] (0,0) circle (1cm);
   \\draw[${l}, ${$}, ${w}] (0,0) circle (0.95cm);
    \\fill[white] (-0,0) circle (0.7cm);
  `.trim(),k=[];for(let y=0;y<10;y++){const f=m(-1.2*Math.cos(Math.PI*(y*180/10)/180),-1.2*Math.sin(Math.PI*(y*180/10)/180),1.2*Math.cos(Math.PI*(y*180/10)/180),1.2*Math.sin(Math.PI*(y*180/10)/180));k.push(f)}return new n({codeSvg:t,codeTikz:d,width:2,height:2,nbAxes:Number.POSITIVE_INFINITY,axes:k,centre:S(0,0)})}function ie(e){const c=(e==null?void 0:e.fillStyle)||"white",r=(e==null?void 0:e.strokeStyle)||"black",a=(e==null?void 0:e.lineWidth)||2,t=(e==null?void 0:e.diagonalColor)||"gray",l=`
    <circle cx="0" cy="0" r="20" fill="${c}" stroke="${r}" stroke-width="${a}" />
    <line x1="-15" y1="15" x2="15" y2="-15" stroke="${t}" stroke-width="2" />
  `.trim(),$=`fill=${c}`,w=`draw=${r}`,d=`line width=${a}pt`,y=`
    \\draw[${$}, ${w}, ${d}] (0,0) circle (1cm);
    \\draw[${t}, line width=1pt] (-0.75,-0.75) -- (0.75,0.75);
  `.trim(),f=[m(-1,-1,1,1),m(-1,1,1,-1)];return new n({codeSvg:l,codeTikz:y,width:2,height:2,axes:f,centre:S(0,0)})}function ke(e){const c=(e==null?void 0:e.fillStyle)||"blue",r=(e==null?void 0:e.strokeStyle)||"red",a=(e==null?void 0:e.lineWidth)||5,t="red",l=`
    <circle cx="0" cy="0" r="20" stroke="black" stroke-width="1" />
    <circle cx="0" cy="0" r="17" fill="${c}" stroke="${r}" stroke-width="${a}" />
    <line x1="-13" y1="-13" x2="13" y2="13" stroke="${t}" stroke-width="3" />
    <line x1="-13" y1="13" x2="13" y2="-13" stroke="${t}" stroke-width="3" />
  `.trim(),$=`fill=${c}`,w=`draw=${r}`,d=`line width=${a*1.1}pt`,k="red",y=`
      \\draw[draw=black, line width=1pt] (0,0) circle (1cm);
    \\draw[${$}, ${w}, ${d}] (0,0) circle (0.9cm);
    \\draw[${k}, line width=5pt] (-0.7,-0.7) -- (0.7,0.7);
    \\draw[${k}, line width=5pt] (-0.7,0.7) -- (0.7,-0.7);
  `.trim(),f=[m(-1.2,0,1.2,0),m(0,-1.2,0,1.2),m(-1,-1,1,1),m(-1,1,1,-1)];return new n({codeSvg:l,codeTikz:y,width:2,height:2,axes:f,centre:S(0,0)})}export{A,E as B,R as C,Z as D,_ as E,B as F,O as G,q as H,V as I,H as J,N as K,$e as L,re as M,de as a,ke as b,G as c,J as d,K as e,Q as f,ce as g,te as h,le as i,ae as j,U as k,Y as l,he as m,o as n,X as o,D as p,C as q,v as r,j as s,L as t,s as u,W as v,T as w,p as x,ee as y,ie as z};
//# sourceMappingURL=panneaux-T1NpOWpW.js.map
