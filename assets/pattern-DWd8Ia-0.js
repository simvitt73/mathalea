import{P as y}from"./index-Dkwu26bg.js";function k(i){switch(i){case 0:return"north east lines";case 1:return"horizontal lines";case 2:return"vertical lines";case 3:return"dots";case 4:return"crosshatch dots";case 5:return"fivepointed stars";case 6:return"sixpointed stars";case 7:return"bricks";case 8:return"checkerboard";case 9:return"grid";case 10:return"crosshatch";default:return"north east lines"}}function f({motif:i="north east lines",id:p="0",distanceDesHachures:r=10,epaisseurDesHachures:l=1,couleurDesHachures:t="black",couleurDeRemplissage:a="none",opaciteDeRemplissage:$=.5}){let n="";if(y.isHtml){switch(a.length<1&&(a="none"),i){case"north east lines":n+=`<pattern id="pattern${p}" width="${r}" height="${r}"  patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="${r}" height="${r}" fill="${a}" fill-opacity="${$}"/>
            <line x1="0" y1="0" x2="0" y2="${r}" style="stroke:${t}; stroke-width:${l}" />
            </pattern>`;break;case"horizontal lines":n+=`<pattern id="pattern${p}" width="${r}" height="${r}"  patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="${r}" height="${r}" fill="${a}" fill-opacity="${$}"/>
            <line x1="0" y1="${r/2}" x2="${r}" y2="${r/2}" style="stroke:${t}; stroke-width:${l}" />
            </pattern>`;break;case"vertical lines":n+=`<pattern id="pattern${p}" width="${r}" height="${r}"  patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="${r}" height="${r}" fill="${a}" fill-opacity="${$}"/>
            <line x1="0" y1="0" x2="0" y2="${r}" style="stroke:${t}; stroke-width:${l}" />
            </pattern>`;break;case"dots":n+=`<pattern id="pattern${p}" width="${r}" height="${r}"  patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="${l}" fill="${t}" fill-opacity="${$}"/>
            <circle cx="8" cy="3" r="${l}" fill="${t}" fill-opacity="${$}"/>
            <circle cx="3" cy="8" r="${l}" fill="${t}" fill-opacity="${$}"/>
            <circle cx="8" cy="8" r="${l}" fill="${t}" fill-opacity="${$}"/>
            </pattern>`;break;case"crosshatch dots":n+=`<pattern id="pattern${p}" width="12" height="12" x="12" y="12" patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="${l}" fill="${t}" fill-opacity="${$}"/>
          <circle cx="8" cy="2" r="${l}" fill="${t}" fill-opacity="${$}"/>
          <circle cx="5" cy="5" r="${l}" fill="${t}" fill-opacity="${$}"/>
          <circle cx="2" cy="8" r="${l}" fill="${t}" fill-opacity="${$}"/>
          <circle cx="8" cy="8" r="${l}" fill="${t}" fill-opacity="${$}"/>
          <circle cx="5" cy="11" r="${l}" fill="${t}" fill-opacity="${$}"/>
          <circle cx="11" cy="5" r="${l}" fill="${t}" fill-opacity="${$}"/>
          <circle cx="11" cy="11" r="${l}" fill="${t}" fill-opacity="${$}"/>
          </pattern>`;break;case"fivepointed stars":n+=`<pattern id="pattern${p}" width="12" height="12" x="10" y="10" patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
          <polygon points="10,5 6.2,4.2 6.6,0.2 4.6,3.6 1,2 3.6,5 1,8 4.6,6.4 6.6,9.8 6.2,5.8 " stroke="${t}"  fill="${a}" fill-opacity="${$}" />
          </pattern>`;break;case"sixpointed stars":n+=`<pattern id="pattern${p}"  width="12" height="12" x="10" y="10" patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
        <polygon points="10,5 7.6,3.4 7.6,0.6 5,2 2.6,0.6 2.4,3.4 0,5 2.4,6.4 2.6,9.4 5,8 7.6,9.4 7.6,6.4 " stroke="${t}" fill="${a}" fill-opacity="${$}" />
        </pattern>`;break;case"crosshatch":n+=`<pattern id="pattern${p}" width="12" height="12" x="10" y="10" patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
          <polygon points="2,2 7.6,7.6 7,8.4 9.8,8.4 9.8,5.6 9,6.2 3.4,0.6 " stroke="${t}"  fill="${a}" fill-opacity="${$}" />
          </pattern>`;break;case"bricks":n+=`<pattern id="pattern${p}" width="18" height="16" x="18" y="16" patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
          <line x1="4" y1="2" x2="4" y2="4" stroke="${t}" fill="${a}" fill-opacity="${$}"  />
          <line x1="0" y1="4" x2="16" y2="4" stroke="${t}" fill="${a}" fill-opacity="${$}"   />
          <line x1="14" y1="4" x2="14" y2="12" stroke="${t}" fill="${a}" fill-opacity="${$}"   />
          <line x1="16" y1="12" x2="0" y2="12" stroke="${t}" fill="${a}" fill-opacity="${$}"   />
          <line x1="4" y1="12" x2="4" y2="16" stroke="${t}" fill="${a}" fill-opacity="${$}"   />
          </pattern>`;break;case"grid":n+=`<pattern id="pattern${p}" width="10" height="10" x="10" y="10" patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
          <polyline points="8,8 0,8 0,0 " fill="none" stroke="${t}" />
          </pattern>`;break;case"checkerboard":n+=`<pattern id="pattern${p}" width="8" height="8" x="8" y="8" patternTransform="rotate(0 0 0)" patternUnits="userSpaceOnUse">
          <polygon points="4,4 8,4 8,0 4,0 "  fill="${t}" fill-opacity="${$}" />
          <polygon points="0,4 4,4 4,8 0,8 "  fill="${t}" fill-opacity="${$}" />
        
          </pattern>`;break;default:n+=`<pattern id="pattern${p}" width="${r}" height="${r}"  patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="${r}" height="${r}" fill="${a}" fill-opacity="${$}"/>
        <line x1="0" y1="0" x2="0" y2="${r}" style="stroke:${t}; stroke-width:${l}" />
        </pattern>`;break}return n}else if(y.issortieNB){switch(i){case"north east lines":n=`pattern = {Lines[angle=45, distance=${r}pt, line width=0.3pt]}`;break;case"horizontal lines":n=`pattern = {Lines[angle=0, distance=${r}pt, line width=0.3pt]}`;break;case"vertical lines":n=`pattern = {Lines[angle=90, distance=${r}pt, line width=0.3pt]}`;break;case"dots":n=`pattern = ${i}`;break;case"crosshatch dots":n=`pattern = ${i}`;break;case"fivepointed stars":n=`pattern = ${i}`;break;case"sixpointed stars":n=`pattern = ${i}`;break;case"crosshatch":n=`pattern = ${i}`;break;case"bricks":n=`pattern = ${i}`;break;case"grid":n=`pattern = ${i}`;break;case"checkerboard":n=`pattern = ${i}`;break;default:n=`pattern = {Lines[angle=45, distance=${r}pt, line width=0.3pt]}`;break}return n}else{switch(i){case"north east lines":n=`pattern color = ${t} , pattern = {Lines[angle=45, distance=${r}pt, line width=0.3pt]}`;break;case"horizontal lines":n=`pattern color = ${t} , pattern = {Lines[angle=0, distance=${r}pt, line width=0.3pt]}`;break;case"vertical lines":n=`pattern color = ${t} , pattern = {Lines[angle=90, distance=${r}pt, line width=0.3pt]}`;break;case"dots":n=`pattern color = ${t} , pattern = ${i}`;break;case"crosshatch dots":n=`pattern color = ${t} , pattern = ${i}`;break;case"fivepointed stars":n=`pattern color = ${t} , pattern = ${i}`;break;case"sixpointed stars":n=`pattern color = ${t} , pattern = ${i}`;break;case"crosshatch":n=`pattern color = ${t} , pattern = ${i}`;break;case"bricks":n=`pattern color = ${t} , pattern = ${i}`;break;case"grid":n=`pattern color = ${t} , pattern = ${i}`;break;case"checkerboard":n=`pattern color = ${t} , pattern = ${i}`;break;default:n=`pattern color = ${t} , pattern = {Lines[angle=45, distance=${r}pt, line width=0.3pt]}`;break}return`${n}`}}export{k as m,f as p};
//# sourceMappingURL=pattern-DWd8Ia-0.js.map
