import{P as o}from"./index-Dkwu26bg.js";function i(t,a={}){if(o.isHtml){let e="";return e=`<div class="aide group inline
    text-coopmaths-warn-dark dark:text-coopmathsdark-warn-light"
    >
      ${a.texteAvant??""}
      ${a.iconeBxIcon?`<i class="bx ${a.iconeBxIcon}"></i>`:'<div class="h-[1em] w-[1em] inline-flex justify-center items-center rounded-full font-bold text-coopmaths-canvas dark:text-coopmathsdark-canvas bg-coopmaths-warn-dark dark:bg-coopmathsdark-warn-light">?</div>'}
      <div class="fixed w-5/6 md:w-2/3 lg:w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex flex-col items-start justify-start z-10 bg-coopmaths-canvas-dark dark:bg-coopmathsdark-canvas-dark p-2 md:p-4 rounded-xl shadow-lg">
      ${a.titreAide?`<div class="text-coopmaths-struct dark:text-coopmathsdark-struct font-semibold text-base md:text-lg">${a.titreAide}</div>
           <div class="text-coopmaths-corpus dark:text-coopmathsdark-corpus font-light pt-2 pl-0 md:pl-2">${t}</div>`:t}
      </div>
    </div>`,e}else return`\\textbf{${a.texteAvant??""}} \\anote{\\textbf{${a.titreAide??""}} ${t}}`}function d(t,a){return o.isHtml?`<a href="${t}" target="_blank" class="text-coopmaths-action">${a??t}</a>`:`\\href{${t}}{{${a??t}}}`}function c(t,a,e="Aide",r="info circle"){return`<button class="inline-block px-6 py-2.5 mr-10 my-5 ml-6 bg-coopmaths text-white font-medium text-xs leading-tight uppercase rounded shadow-md transform hover:scale-110 hover:bg-coopmaths-dark hover:shadow-lg focus:bg-coopmaths-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-coopmaths-dark active:shadow-lg transition duration-150 ease-in-out" id = "btnMathALEA2d_${t}" onclick="${a}"><i class="large ${r} icon"></i>${e}</button>`}function n(t){return o.isHtml?`<img class="inline" src="images/${t}">`:`\\begin{figure}
    \\includegraphics[width=0.4\\textwidth]{images/${t}}
    \\end{figure}`}export{d as a,i as b,c,n as d};
//# sourceMappingURL=enrichissements-DeMGqIYp.js.map
