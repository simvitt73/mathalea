import{P as n}from"./index-Dkwu26bg.js";function s(o,i,e){const r=Date.now();return typeof e>"u"&&(e=""),n.isHtml?`
      <div id="warnMessage-${r}">
        <div id="title-warnMessage-${r}">
        ${e}
        </div>
        ${o}
      </div>
      `:`
    \\begin{bclogo}[couleurBarre=`+i+",couleurBord="+i+",epBord=2,couleur=gray!10,logo=\\bclampe,arrondi=0.1]{\\bf "+e+`}
      `+o+`
    \\end{bclogo}
    `}function d({titre:o,texte:i,couleur:e}){const r=Date.now();return n.isHtml?`
      <div id="infoMessage-${r}">
        <div id="title-infoMessage-${r}">
        ${o}
        </div>
        ${i}
      </div>
      `:`
    \\begin{bclogo}[couleurBarre=`+e+",couleurBord="+e+",epBord=2,couleur=gray!10,logo=\\bcinfo,arrondi=0.1]{\\bf "+o+`}
      `+i+`
    \\end{bclogo}
    `}function l({titre:o,texte:i,couleur:e}){const r=Date.now();return n.isHtml?`
      <div id="lampeMessage-${r}">
        <div id="title-lampeMessage-${r}">
        ${o}
        </div>
        ${i}
      </div>
      `:n.isAmc?`
    {\\bf ${o}} : ${i}
    `:`
    \\begin{bclogo}[couleurBarre=`+e+",couleurBord="+e+",epBord=2,couleur=gray!10,logo=\\bclampe,arrondi=0.1]{\\bf "+o+`}
      `+i+`
    \\end{bclogo}
    `}export{d as i,l,s as w};
//# sourceMappingURL=message-Z3VLzHox.js.map
