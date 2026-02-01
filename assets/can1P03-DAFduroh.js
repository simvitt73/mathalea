import{D as t}from"./vendors/decimal.js-BceHFVC1.js";import{E as _,r as y,p as T,a as v,K as A,B as e,z as B,x as E,o as R}from"./index-BB3ZcMz7.js";import{A as r}from"./arbres-CMVZbMyD.js";import{m as P}from"./mathalea2d-CCccAZwe.js";/* empty css                         */import"./vendors/svelte-BrkG1v2Q.js";import"./vendors/clsx-B-dksMZM.js";import"./vendors/esm-env-rsSWfq8L.js";import"./vendors/ua-parser-js-D4W63oil.js";import"./vendors/three-DbtVOfJ6.js";import"./vendors/katex-BSW5_u9c.js";import"./vendors/seedrandom-Cz-2rAdY.js";import"./vendors/apigeom-DuS4UMKQ.js";import"./vendors/mathjs-DKCMnljp.js";import"./vendors/babel_runtime-BFeZ_VDU.js";import"./vendors/javascript-natural-sort-QZS4Fyws.js";import"./vendors/escape-latex-BegatI0j.js";import"./vendors/complex.js-C1JbXRlX.js";import"./vendors/typed-function-CVM02vEe.js";import"./vendors/fraction.js-CYLvagDM.js";import"./vendors/tiny-emitter-DbO2P2s3.js";import"./vendors/xstate-BSXD3zxA.js";import"./vendors/crypto-js-DElKCTCw.js";import"./json/referentielStaticCH-DrWiqhRe.js";import"./json/referentielStaticFR-DTeSOhOd.js";import"./json/uuidsToUrlFR-Cc7zu7XX.js";import"./vendors/cortex-js_compute-engine-Bo_2zfG3.js";import"./vendors/jspreadsheet-ce-kKqtlqR-.js";import"./vendors/jsuites-D-TmSgJs.js";import"./vendors/jspreadsheet_formula-CXu1m5Ak.js";import"./vendors/mathlive-2YgxEGya.js";import"./vendors/bugsnag_js-B7oJ4uO9.js";import"./vendors/bugsnag_browser-CBi0d3dm.js";import"./vendors/big-integer-RrBdqg8C.js";import"./vendors/mixer_postmessage-rpc-JyZjM7pP.js";import"./vendors/eventemitter3-COjgItKg.js";import"./vendors/scratchblocks-BVPCj2Ee.js";import"./json/scratchFr-BNITwCy2.js";import"./json/refToUuidFR-fVupTN-r.js";import"./json/refToUuidCH-BX1ZhSY0.js";import"./json/codeToLevelList-BfkorBF2.js";import"./json/codeToThemeList-B4uzTsqe.js";import"./vendors/loadjs-Dy50zFDn.js";import"./json/referentielProfs-BdpwqI3j.js";import"./json/uuidsRessources-jdCgFfXb.js";import"./json/referentielBibliotheque-sQm1j5fm.js";import"./vendors/file-saver-Cqu1O8xU.js";import"./vendors/jszip-BuNf6wCF.js";import"./vendors/jszip-utils-DhFX1KUq.js";import"./vendors/copy-image-clipboard-Cf9y-QAU.js";import"./vendors/qrcode-BsrOgw3n.js";import"./vendors/dijkstrajs-COg3n3zL.js";import"./vendors/brace-DEOAbY2S.js";import"./json/referentielAppsTierce-SxU58PZT.js";import"./vendors/sortablejs-DdTU3J9A.js";import"./json/carouselContent-Bjt6Yxr-.js";import"./json/levelsThemesList-CXNnIZKX.js";import"./json/levelsThemesListCH-BErSids0.js";import"./json/referentiel2022CH-eCsKGSUT.js";import"./json/referentiel2022FR-noHHLeEt.js";import"./json/referentielGeometrieDynamique-BJ2PHXsv.js";import"./json/referentielRessources-BU2QQoSD.js";import"./json/referentielsActivation-CpD_hoec.js";import"./PointAbstrait-Cz1GEocE.js";import"./ObjetMathalea2D-CXcNXRpD.js";import"./segmentsVecteurs-Bz-aNFOx.js";import"./utilitairesGeometriques-rO8Jz15i.js";import"./vendors/roughjs-CycZv-lV.js";import"./textes-3SpigYLc.js";import"./transformations-CvkJBE7u.js";import"./droites-CG5i26jo.js";import"./Vide2d-lYMmc9eB.js";import"./polygones-BR_6nVP4.js";import"./vendors/earcut-jJVragJp.js";import"./pattern-C89A9uFw.js";const Ze="Calculer la probabilité d’une intersection à partir d’un arbre",er="04/07/2022",rr=!0,ir="mathLive",nr=!0,or="AMCNum",tr="7c8b7",ar={"fr-fr":["can1P03"],"fr-ch":[]};class lr extends _{constructor(){super(),this.sup=!0,this.nbQuestions=1}nouvelleVersion(){for(let a=0,C=0,w,h,d,N,o,n,c,f,s,m,l,i="",p="",b;a<this.nbQuestions&&C<50;){switch(b=[],o=new t(y(1,9,5)).div(10),s=new t(o).mul(-1).add(1),n=new t(y(1,9,5)).div(10),f=new t(n).mul(-1).add(1),m=new t(y(1,9,5)).div(10),c=new t(m).mul(-1).add(1),w=new t(o).mul(n),h=new t(o).mul(f),d=new t(s).mul(m),N=new t(s).mul(c),T([1,2,3,4])){case 1:l=new r({racine:!0,rationnel:!1,nom:"",proba:1,visible:!1,alter:"",enfants:[new r({rationnel:!1,nom:"A",proba:o.toNumber(),visible:!1,alter:"",enfants:[new r({rationnel:!1,nom:"B",proba:n.toNumber(),visible:!1,alter:""}),new r({rationnel:!1,nom:"\\overline{B}",proba:new t(1-n.toNumber()).toNumber()})]}),new r({rationnel:!1,nom:"\\overline{A}",proba:s.toNumber(),enfants:[new r({rationnel:!1,nom:"B",proba:new t(m).toNumber()}),new r({rationnel:!1,nom:"\\overline{B}",proba:new t(1-m.toNumber()).toNumber()})]})]}),l.setTailles(),b=l.represente(0,7,0,1.5,!0,1,10),i=`On donne l'arbre de probabilités ci-dessous :<br>
          
          `,i+=P({xmin:-.1,xmax:14,ymin:0,ymax:7,style:"inline",scale:.5},...b),this.interactif?(i+="<br> $P(A\\cap B)=$ ",i+=v(this,a,A.clavierNumbers)):i+=`<br>
          
          Calculer $P(A\\cap B)$. `,p=` $P(A\\cap B)=P(A)\\times P_{A}(B)$.<br>
      $P(A)=1-${e(s,1)}= ${e(o,1)}$.<br>
      $P_{A}(B)=1-${e(1-n.toNumber(),1)}= ${e(n,1)}$.<br>
      Ainsi, $P(A\\cap B)=P(A)\\times P_{A}(B)=${e(o,1)}\\times ${e(n,1)}=${e(w,2)}$.
      `,B(this,a,w),this.canEnonce=i,this.canReponseACompleter="";break;case 2:l=new r({racine:!0,rationnel:!1,nom:"",proba:1,visible:!1,alter:"",enfants:[new r({rationnel:!1,nom:"A",proba:1,visible:!1,alter:"",enfants:[new r({rationnel:!1,nom:"B",proba:n.toNumber(),alter:""}),new r({rationnel:!1,nom:"\\overline{B}",proba:1,visible:!1})]}),new r({rationnel:!1,nom:"\\overline{A}",proba:s.toNumber(),enfants:[new r({rationnel:!1,nom:"B",proba:new t(m).toNumber()}),new r({rationnel:!1,nom:"\\overline{B}",proba:c.toNumber()})]})]}),l.setTailles(),b=l.represente(0,7,0,1.5,!0,1,10),i=`On donne l'arbre de probabilités ci-dessous :<br>
          
          `,i+=P({xmin:-.1,xmax:14,ymin:0,ymax:7,style:"inline",scale:.5},...b),this.interactif?(i+="<br> $P(A\\cap \\overline{B})=$ ",i+=v(this,a,A.clavierNumbers)):i+=`<br>
          
          Calculer $P(A\\cap \\overline{B})$. `,p=` $P(A\\cap \\overline{B})=P(A)\\times P_{A}(\\overline{B})$.<br>
        $P(A)=1-${e(s,1)}= ${e(o,1)}$.<br>
        $P_{A}(\\overline{B})=1-${e(n,1)}= ${e(1-n.toNumber(),1)}$.<br>
        Ainsi, $P(A\\cap \\overline{B})=P(A)\\times P_{A}(\\overline{B})=${e(o,1)}\\times ${e(1-n.toNumber(),1)}=${e(h,2)}$.
        `,B(this,a,h),this.canEnonce=i,this.canReponseACompleter="";break;case 3:l=new r({racine:!0,rationnel:!1,nom:"",proba:1,visible:!1,alter:"",enfants:[new r({rationnel:!1,nom:"A",proba:o.toNumber(),alter:"",enfants:[new r({rationnel:!1,nom:"B",proba:n.toNumber(),alter:""}),new r({rationnel:!1,nom:"\\overline{B}",proba:f.toNumber()})]}),new r({rationnel:!1,nom:"\\overline{A}",proba:1,visible:!1,enfants:[new r({rationnel:!1,nom:"B",proba:1,visible:!1}),new r({rationnel:!1,nom:"\\overline{B}",proba:c.toNumber()})]})]}),l.setTailles(),b=l.represente(0,7,0,1.5,!0,1,10),i=`On donne l'arbre de probabilités ci-dessous :<br>
          
          `,i+=P({xmin:-.1,xmax:14,ymin:0,ymax:7,style:"inline",scale:.5},...b),this.interactif?(i+="<br> $P(\\overline{A}\\cap B)=$ ",i+=v(this,a,A.clavierNumbers)):i+=`<br>
          
          Calculer $P(\\overline{A}\\cap B)$. `,p=`
        





        $P(\\overline{A}\\cap B)=P(\\overline{A})\\times P_{\\overline{A}}(B)$.<br>
        $P(\\overline{A})=1-${e(o,1)}=${e(s,1)}$.<br>
        $P_{\\overline{A}}(B)=1-${e(c,1)}= ${e(1-c.toNumber(),1)}$.<br>
        Ainsi, $P(\\overline{A}\\cap B)=P(\\overline{A})\\times P_{\\overline{A}}(B)=${e(s,1)}\\times ${e(m,1)}=${e(d,2)}$.
        `,B(this,a,d),this.canEnonce=i,this.canReponseACompleter="";break;case 4:l=new r({racine:!0,rationnel:!1,nom:"",proba:1,visible:!1,alter:"",enfants:[new r({rationnel:!1,nom:"A",proba:o.toNumber(),alter:"",enfants:[new r({rationnel:!1,nom:"B",proba:n.toNumber(),alter:""}),new r({rationnel:!1,nom:"\\overline{B}",proba:f.toNumber()})]}),new r({rationnel:!1,nom:"\\overline{A}",proba:1,visible:!1,enfants:[new r({rationnel:!1,nom:"B",proba:m.toNumber()}),new r({rationnel:!1,nom:"\\overline{B}",proba:1,visible:!1})]})]}),l.setTailles(),b=l.represente(0,7,0,1.5,!0,1,10),i=`On donne l'arbre de probabilités ci-dessous :<br>
          
          `,i+=P({xmin:-.1,xmax:14,ymin:0,ymax:7,style:"inline",scale:.5},...b),this.interactif?(i+="<br> $P(\\overline{A}\\cap \\overline{B})=$ ",i+=v(this,a,A.clavierNumbers)):i+=`<br>
          
          Calculer $P(\\overline{A}\\cap \\overline{B})$. `,p=`
        





        $P(\\overline{A}\\cap \\overline{B})=P(\\overline{A})\\times P_{\\overline{A}}(\\overline{B})$.<br>
        $P(\\overline{A})=1-${e(o,1)}=${e(s,1)}$.<br>
        $P_{\\overline{A}}(\\overline{B})=1-${e(m,1)}= ${e(c,1)}$.<br>
        Ainsi, $P(\\overline{A}\\cap \\overline{B})=P(\\overline{A})\\times P_{\\overline{A}}(\\overline{B})=${e(s,1)}\\times ${e(c,1)}=${e(N,2)}$.
        `,B(this,a,N),this.canEnonce=i,this.canReponseACompleter="";break}if(this.questionJamaisPosee(a,o,n)){this.listeQuestions[a]=i;const u=p.split("=");let $=u[u.length-1];$=$.replace("$",""),$=$.replace(".",""),p="";for(let x=0;x<u.length-1;x++)p+=u[x]+"=";p+=`$ $${E($)}$.`,this.listeCorrections[a]=p,a++}C++}R(this)}}export{nr as amcReady,or as amcType,er as dateDePublication,lr as default,rr as interactifReady,ir as interactifType,ar as refs,Ze as titre,tr as uuid};
//# sourceMappingURL=can1P03-DAFduroh.js.map
