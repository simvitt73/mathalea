import{D as H}from"./vendors/decimal.js-BceHFVC1.js";import{a as v}from"./afficheLongueurSegment-CABP-JEY.js";import{a as V}from"./AfficheMesureAngle-duypsvlV.js";import{c as J}from"./CodageAngleDroit-DbjUDtr4.js";import{a as Q}from"./CodageSegment-CxyIX_Oo.js";import{p as I}from"./PointAbstrait-Cz1GEocE.js";import{p as F}from"./polygones-BR_6nVP4.js";import{p as u,m as T,s as P}from"./segmentsVecteurs-Bz-aNFOx.js";import{c as k}from"./textes-3SpigYLc.js";import{A as K,p as w,r as y,B,F as U}from"./index-BB3ZcMz7.js";import{m as g}from"./mathalea2d-CCccAZwe.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./transformations-CvkJBE7u.js";import"./droites-CG5i26jo.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./Vide2d-lYMmc9eB.js";import"./Arc-DrcGevud.js";import"./pattern-C89A9uFw.js";import"./fixeBordures-BSnKuTIe.js";import"./Polyline-_SF4nvVR.js";import"./vendors/earcut-jJVragJp.js";import"./vendors/roughjs-CycZv-lV.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-fVupTN-r.js";import"./json/refToUuidCH-BX1ZhSY0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-eCsKGSUT.js";import"./json/referentiel2022FR-noHHLeEt.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";const De="Déterminer un produit scalaire sur des figures géométriques classiques ",xe=!0,fe="mathLive",ye="27/06/2022",qe="a394f",Oe={"fr-fr":["can1G06"],"fr-ch":[]};class Ee extends K{constructor(){super(),this.typeExercice="simple",this.nbQuestions=1}nouvelleVersion(){let t,o,a,i,q,p,d,S,r,s,z,f,M,L,j,b,A,$,O,C,D,x,E,R,G,N,c,e,n,l,h,m;switch(w([1,2,3,4])){case 1:c=w(["a","b"]),t=I(0,0,"A","below"),r=y(4,8),s=y(4,8),f=new H(r*s).div(2),O=new U(r*s,2),o=u(t,s,0,"B","below"),A=w([30,45,60]),a=u(o,r,A,"C","above"),i=u(t,r,A,"D","above"),C=F(t,o,a,i),D=v(o,t,"black",.5,""),x=v(a,o,"black",.5,""),E=V(o,t,i,"black",1.5,`${A}^\\circ`),$=[],n=Math.min(t.x,o.x,a.x,i.x)-1,l=Math.min(t.y,o.y,a.y,i.y)-1,m=Math.max(t.x,o.x,a.x,i.x)+1,h=Math.max(t.y,o.y,a.y,i.y)+1,$.push(k(t,o,a,i),D,x,E,C),this.question="$ABCD$ est un parallélogramme.<br>",c==="a"&&(this.question+=`Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{AD}$.<br>
          
          `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),A===30&&(this.correction=`
      $\\begin{aligned}
     \\overrightarrow{AB}\\cdot \\overrightarrow{AD}&=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
      &=${r}\\times ${s}\\times \\cos\\left(${A}°\\right)\\\\
               &=${r*s}\\times\\dfrac{\\sqrt{3}}{2}\\\\
               &=${B(f,1)}\\sqrt{3}
               \\end{aligned}$`,this.reponse=[`${f}\\sqrt{3}`,`${O.texFraction}\\times\\sqrt{3}`]),A===45&&(this.correction=`
      $\\begin{aligned}
     \\overrightarrow{AB}\\cdot \\overrightarrow{AD}&=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
      &=${r}\\times ${s}\\times \\cos\\left(${A}°\\right)\\\\
               &=${r*s}\\times \\dfrac{\\sqrt{2}}{2}\\\\
               &=${B(f,1)}\\sqrt{2}
               \\end{aligned}$`,this.reponse=[`${f}\\sqrt{2}`,`${O.texFraction}\\times\\sqrt{2}`]),A===60&&(this.correction=`
      $\\begin{aligned}
     \\overrightarrow{AB}\\cdot \\overrightarrow{AD}&=AB\\times AD\\times \\cos(\\widehat{BAD})\\\\
      &=${r}\\times ${s}\\times \\cos\\left(${A}°\\right)\\\\
               &=${r*s}\\times \\dfrac{1}{2}\\\\
               &=${B(f,1)}
               \\end{aligned}$`,this.reponse=[`${f}`,`${O.texFraction}`])),c==="b"&&(w([!0,!1])?(this.question+=`Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{DC}$.<br>
            
            `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=`
    Les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{DC}$ sont colinéaires et de même sens.<br>
    On en déduit : $\\overrightarrow{AB}\\cdot \\overrightarrow{DC}=AB\\times DC=${s}\\times ${s}=${s*s}$.`,this.reponse=s*s):(this.question=`Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{CD}$.<br>
            
            `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=`
      Les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ sont colinéaires et de sens contraires.<br>
      On en déduit : $\\overrightarrow{AB}\\cdot \\overrightarrow{CD}=-AB\\times DC=-${s}\\times ${s}=${-s*s}$.`,this.reponse=-s*s));break;case 2:e=w([!0,!1]),c=w(["a","b","c","d","e"]),t=I(0,0,"A","below"),r=w([4,6,8,10]),b=new H(r*r).div(4),o=u(t,r,0,"B","below"),a=u(o,r,90,"C","above"),i=u(t,r,90,"D","above"),C=F(t,o,a,i),q=T(t,o,"I","below"),D=v(i,a,"black",.5,""),x=v(a,o,"black",.5,""),$=[],n=Math.min(t.x,o.x,a.x,i.x)-1,l=Math.min(t.y,o.y,a.y,i.y)-1.5,m=Math.max(t.x,o.x,a.x,i.x)+1,h=Math.max(t.y,o.y,a.y,i.y)+1.5,$.push(k(t,o,a,i,q),D,x,C,P(q,i),Q(t,q,"||"),Q(q,o,"||")),c==="a"&&(this.question=`$ABCD$ est un carré. $I$ est le milieu de $[AB]$.<br>

          Calculer $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{AD}":"\\overrightarrow{CB}"}$.<br>

          `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.4,style:"margin: auto"},$),this.correction=`Les vecteurs $\\overrightarrow{AB}$ et $${e?"\\overrightarrow{AD}":"\\overrightarrow{CB}"}$ sont orthogonaux, on en déduit : $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{AD}":"\\overrightarrow{CB}"}=0$.
     `,this.reponse=0),c==="b"&&(this.question=`$ABCD$ est un carré. $I$ est le milieu de $[AB]$.<br>

          Calculer $\\overrightarrow{DA}\\cdot \\overrightarrow{DI}$.<br>

          `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.4,style:"margin: auto"},$),this.correction=`Le projeté orthogonal de $I$ sur $(DA)$ est $A$. Ainsi : <br>
          $\\overrightarrow{DA}\\cdot \\overrightarrow{DI}=\\overrightarrow{DA}\\cdot \\overrightarrow{DA}=${r}^2=${r**2}$.
     `,this.reponse=r*r),c==="c"&&(this.question=`$ABCD$ est un carré. $I$ est le milieu de $[AB]$.<br>

          Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{ID}$.<br>
          
          `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.4,style:"margin: auto"},$),this.correction=`Le projeté orthogonal de $D$ sur $(AB)$ est $A$. Ainsi : <br>
          $\\overrightarrow{AB}\\cdot \\overrightarrow{ID}=\\overrightarrow{AB}\\cdot \\overrightarrow{IA}$.<br>
          Les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{IA}$ sont colinéaires de sens contraire. On a donc
          $\\overrightarrow{AB}\\cdot \\overrightarrow{ID}=-${r}\\times ${B(r/2,0)}=${B(-r*r/2,0)}$.
     `,this.reponse=-r*r/2),c==="d"&&(this.question=`$ABCD$ est un carré. $I$ est le milieu de $[AB]$.<br>

          Calculer $\\overrightarrow{BI}\\cdot \\overrightarrow{ID}$.<br>
          
          `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.4,style:"margin: auto"},$),this.correction=`Le projeté orthogonal de $D$ sur $(AB)$ est $A$. Ainsi : <br>
          $\\overrightarrow{BI}\\cdot \\overrightarrow{ID}=\\overrightarrow{BI}\\cdot \\overrightarrow{IA}$.<br>
          Les vecteurs $\\overrightarrow{BI}$ et $\\overrightarrow{IA}$ sont colinéaires de même sens. On a donc
          $\\overrightarrow{BI}\\cdot \\overrightarrow{ID}=${B(r/2,0)}\\times ${B(r/2,0)}=${B(b,0)}$.
     `,this.reponse=b),c==="e"&&(this.question=`$ABCD$ est un carré. $I$ est le milieu de $[AB]$.<br>

          Calculer $\\overrightarrow{BC}\\cdot  ${e?"\\overrightarrow{ID}":"\\overrightarrow{DI}"}$.<br>
          
          `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.4,style:"margin: auto"},$),this.correction=`Le projeté orthogonal de $I$ sur $(BC)$ est $B$. Celui de $D$ sur $(BC)$ est $C$.  Ainsi : <br>
          $\\overrightarrow{BC}\\cdot ${e?"\\overrightarrow{ID}":"\\overrightarrow{DI}"}=\\overrightarrow{BC}\\cdot ${e?"\\overrightarrow{BC}":"\\overrightarrow{CB}"}$.<br>
           On a donc
          $\\overrightarrow{BC}\\cdot ${e?"\\overrightarrow{ID}":"\\overrightarrow{DI}"}=${r}\\times ${e?`${r}`:`(-${r})`}=${e?`${r*r}`:`${-r*r}`}$.
     `,this.reponse=e?r*r:-r*r);break;case 3:e=w([!0,!1]),c=w(["a","b","c"]),t=I(0,0,"A","below"),r=y(5,10),o=u(t,r,0,"B","below"),s=y(2,4),z=y(3,6),i=u(t,z,90,"D","above"),a=u(i,s,0,"C","above"),C=F(t,o,a,i),D=v(o,t,"black",.5,""),x=v(i,a,"black",.5,""),$=[],n=Math.min(t.x,o.x,a.x,i.x)-1,l=Math.min(t.y,o.y,a.y,i.y)-1,m=Math.max(t.x,o.x,a.x,i.x)+1,h=Math.max(t.y,o.y,a.y,i.y)+1,$.push(k(t,o,a,i),D,x,C,J(o,t,i)),c==="a"&&(this.question=`$ABCD$ est un trapèze rectangle.<br>

          Calculer $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{AD}":"\\overrightarrow{DA}"}$.<br>
          
          `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=`Les vecteurs $\\overrightarrow{AB}$ et $${e?"\\overrightarrow{AD}":"\\overrightarrow{DA}"}$ sont orthogonaux. <br>
          Donc $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{AD}":"\\overrightarrow{DA}"}=0$.
     `,this.reponse=0),c==="b"&&(this.question=`$ABCD$ est un trapèze rectangle.<br>

          Calculer $\\overrightarrow{AB}\\cdot \\overrightarrow{BC}$.<br>
          
          `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=`Le projeté orthogonal du point $C$ sur $(AB)$ est le point $H$ tel que $BH=${r-s}$.<br>
         On a :  $\\overrightarrow{AB}\\cdot \\overrightarrow{BC}=\\overrightarrow{AB}\\cdot \\overrightarrow{BH}$ avec $\\overrightarrow{AB}$ et  $\\overrightarrow{BH}$ colinéaires de sens contraire.<br>
         On en déduit  $\\overrightarrow{AB}\\cdot \\overrightarrow{BC}=-AB\\times BH=-${r}\\times ${r-s}=${-r*(r-s)}$.
     `,this.reponse=-r*(r-s)),c==="c"&&(this.question=`$ABCD$ est un trapèze rectangle.<br>

          Calculer $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{DC}":"\\overrightarrow{CD}"}$.<br>
          
          `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=`Les vecteurs $\\overrightarrow{AB}$ et  $${e?"\\overrightarrow{DC}":"\\overrightarrow{CD}"}$ sont colinéaires ${e?"même sens":"sens contraire"}.<br>
         On a :  $\\overrightarrow{AB}\\cdot ${e?"\\overrightarrow{DC}":"\\overrightarrow{CD}"}=${r}\\times ${e?`${s}`:`(-${s})`}=${e?`${r*s}`:`${-r*s}`}$
       
         
         
       
     `,this.reponse=e?r*s:-r*s);break;case 4:e=w([!0,!1]),c=w(["a","b","c","d","e","f"]),t=I(0,0,"A","below"),r=y(3,6),o=u(t,r,0,"B","below"),a=u(o,r,60,"C","right"),i=u(a,r,120,"D","above"),p=u(i,r,180,"E","above"),d=u(p,r,-120,"F","left"),S=T(d,a,"O","below"),C=F(t,o,a,i,p,d),D=v(o,t,"black",.5,""),x=v(i,a,"black",.5,""),E=v(p,i,"black",.5,""),R=v(d,p,"black",.5,""),G=v(t,d,"black",.5,""),N=v(a,o,"black",.5,""),M=P(p,o),L=P(d,a),j=P(t,i),M.pointilles=2,L.pointilles=2,j.pointilles=2,$=[],n=Math.min(t.x,o.x,a.x,i.x,p.x,d.x)-1,l=Math.min(t.y,o.y,a.y,i.y,p.y,d.y)-1,m=Math.max(t.x,o.x,a.x,i.x,p.x,d.x)+1,h=Math.max(t.y,o.y,a.y,i.y,p.y,d.y)+1,b=new H(r*r).div(2),$.push(k(t,o,a,i,p,d,S),D,x,E,R,G,N,C,M,L,j),c==="a"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

          Calculer $\\overrightarrow{OA}\\cdot ${e?"\\overrightarrow{OB}":"\\overrightarrow{OF}"}$.<br>
          
          `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
          $\\begin{aligned}
          \\overrightarrow{OA}\\cdot ${e?"\\overrightarrow{OB}":"\\overrightarrow{OF}"}&=OA\\times  ${e?"OB":"OF"}\\times \\cos(\\widehat{ ${e?"AOB":"AOF"}})\\\\
           &=${r}\\times ${r}\\times \\cos\\left(60°\\right)\\\\
                    &=${r*r}\\times\\dfrac{1}{2}\\\\
                    &=${B(b,1)}
                    \\end{aligned}$`,this.reponse=b),c==="b"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

          Calculer $\\overrightarrow{ED}\\cdot ${e?"\\overrightarrow{OC}":"\\overrightarrow{OF}"}$.<br>
          
          `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
          Les vecteurs $\\overrightarrow{ED}$ et $${e?"\\overrightarrow{OC}":"\\overrightarrow{OF}"}$ sont colinéaires ${e?"de même sens":"de sens contraire"}.<br>
Ainsi, $\\overrightarrow{ED}\\cdot ${e?"\\overrightarrow{OC}":"\\overrightarrow{OF}"}=${r}\\times ${e?`${r}`:`(-${r})`}=${e?`${r*r}`:`${-r*r}`}$.
         `,this.reponse=e?r*r:-r*r),c==="c"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

            Calculer $\\overrightarrow{OC}\\cdot ${e?"\\overrightarrow{OA}":"\\overrightarrow{OE}"}$.<br>
            
            `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
            $\\begin{aligned}
            \\overrightarrow{OC}\\cdot ${e?"\\overrightarrow{OA}":"\\overrightarrow{OE}"}&=OC\\times  ${e?"OA":"OE"}\\times \\cos(\\widehat{ ${e?"AOE":"COE"}})\\\\
             &=${r}\\times ${r}\\times \\cos\\left(120°\\right)\\\\
                      &=${r*r}\\times\\left(-\\dfrac{1}{2}\\right)\\\\
                      &=${B(-b,1)}
                      \\end{aligned}$`,this.reponse=-b),c==="d"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

            Calculer $\\overrightarrow{OC}\\cdot ${e?"\\overrightarrow{BD}":"\\overrightarrow{DB}"}$.<br>
            
            `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
           $OBCD$ est un losange (4 côtés de même longueur). Ses diagonales sont donc perpendiculaires. On en déduit : <br>
           $\\overrightarrow{OC}\\cdot ${e?"\\overrightarrow{BD}":"\\overrightarrow{DB}"}=0$.
  `,this.reponse=0),c==="e"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

            Calculer $\\overrightarrow{DE}\\cdot \\overrightarrow{DA}$.<br>
            
            `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
            $\\begin{aligned}
            \\overrightarrow{DE}\\cdot \\overrightarrow{DA}&=DE\\times DA\\times \\cos(\\widehat{ ADE})\\\\
             &=${r}\\times 2\\times ${r}\\times \\cos\\left(60°\\right)\\\\
                      &=${2*r*r}\\times\\dfrac{1}{2}\\\\
                      &=${r*r}
                      \\end{aligned}$`,this.reponse=r*r),c==="f"&&(this.question=`$ABCDEF$ est un hexagone régulier de centre $O$.<br>

            Calculer $\\overrightarrow{OB}\\cdot ${e?"\\overrightarrow{EB}":"\\overrightarrow{BE}"}$.<br>
            
            `,this.question+=g({xmin:n,ymin:l,xmax:m,ymax:h,pixelsParCm:15,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},$),this.correction=` $ABCDEF$ est un hexagone régulier, donc les six triangles sont équilatéraux.<br>
            Les vecteurs $\\overrightarrow{OB}$ et $${e?"\\overrightarrow{EB}":"\\overrightarrow{BE}"}$ sont colinéaires ${e?"de même sens":"de sens contraire"}.<br>
  Ainsi, $\\overrightarrow{OB}\\cdot ${e?"\\overrightarrow{EB}":"\\overrightarrow{BE}"}=${r}\\times ${e?`2\\times${r}`:`(-2\\times${r})`}=${e?`${2*r*r}`:`${-2*r*r}`}$.
           `,this.reponse=e?2*r*r:-2*r*r);break}this.canEnonce=this.question,this.canReponseACompleter=""}}export{ye as dateDePublication,Ee as default,xe as interactifReady,fe as interactifType,Oe as refs,De as titre,qe as uuid};
//# sourceMappingURL=can1G06-BTgMOoY7.js.map
