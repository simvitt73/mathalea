import{M as E,a as P,R as U,U as A,S as R}from"./three-q_6hD11P.js";const b=/\bvoid\s+main\s*\(\s*\)\s*{/g;function h(e){const i=/^[ \t]*#include +<([\w\d./]+)>/gm;function n(o,r){let u=R[r];return u?h(u):o}return e.replace(i,n)}const s=[];for(let e=0;e<256;e++)s[e]=(e<16?"0":"")+e.toString(16);function K(){const e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(s[e&255]+s[e>>8&255]+s[e>>16&255]+s[e>>24&255]+"-"+s[i&255]+s[i>>8&255]+"-"+s[i>>16&15|64]+s[i>>24&255]+"-"+s[n&63|128]+s[n>>8&255]+"-"+s[n>>16&255]+s[n>>24&255]+s[o&255]+s[o>>8&255]+s[o>>16&255]+s[o>>24&255]).toUpperCase()}const m=Object.assign||function(){let e=arguments[0];for(let i=1,n=arguments.length;i<n;i++){let o=arguments[i];if(o)for(let r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},N=Date.now(),D=new WeakMap,x=new Map;let B=1e10;function M(e,i){const n=k(i);let o=D.get(e);if(o||D.set(e,o=Object.create(null)),o[n])return new o[n];const r=`_onBeforeCompile${n}`,u=function(t,f){e.onBeforeCompile.call(this,t,f);const l=this.customProgramCacheKey()+"|"+t.vertexShader+"|"+t.fragmentShader;let p=x[l];if(!p){const _=H(this,t,i,n);p=x[l]=_}t.vertexShader=p.vertexShader,t.fragmentShader=p.fragmentShader,m(t.uniforms,this.uniforms),i.timeUniform&&(t.uniforms[i.timeUniform]={get value(){return Date.now()-N}}),this[r]&&this[r](t)},c=function(){return d(i.chained?e:e.clone())},d=function(t){const f=Object.create(t,g);return Object.defineProperty(f,"baseMaterial",{value:e}),Object.defineProperty(f,"id",{value:B++}),f.uuid=K(),f.uniforms=m({},t.uniforms,i.uniforms),f.defines=m({},t.defines,i.defines),f.defines[`TROIKA_DERIVED_MATERIAL_${n}`]="",f.extensions=m({},t.extensions,i.extensions),f._listeners=void 0,f},g={constructor:{value:c},isDerivedMaterial:{value:!0},type:{get:()=>e.type,set:t=>{e.type=t}},isDerivedFrom:{writable:!0,configurable:!0,value:function(t){const f=this.baseMaterial;return t===f||f.isDerivedMaterial&&f.isDerivedFrom(t)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return e.customProgramCacheKey()+"|"+n}},onBeforeCompile:{get(){return u},set(t){this[r]=t}},copy:{writable:!0,configurable:!0,value:function(t){return e.copy.call(this,t),!e.isShaderMaterial&&!e.isDerivedMaterial&&(m(this.extensions,t.extensions),m(this.defines,t.defines),m(this.uniforms,A.clone(t.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const t=new e.constructor;return d(t).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let t=this._depthMaterial;return t||(t=this._depthMaterial=M(e.isDerivedMaterial?e.getDepthMaterial():new P({depthPacking:U}),i),t.defines.IS_DEPTH_MATERIAL="",t.uniforms=this.uniforms),t}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let t=this._distanceMaterial;return t||(t=this._distanceMaterial=M(e.isDerivedMaterial?e.getDistanceMaterial():new E,i),t.defines.IS_DISTANCE_MATERIAL="",t.uniforms=this.uniforms),t}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:t,_distanceMaterial:f}=this;t&&t.dispose(),f&&f.dispose(),e.dispose.call(this)}}};return o[n]=c,new c}function H(e,{vertexShader:i,fragmentShader:n},o,r){let{vertexDefs:u,vertexMainIntro:c,vertexMainOutro:d,vertexTransform:g,fragmentDefs:t,fragmentMainIntro:f,fragmentMainOutro:l,fragmentColorTransform:p,customRewriter:_,timeUniform:$}=o;if(u=u||"",c=c||"",d=d||"",t=t||"",f=f||"",l=l||"",(g||_)&&(i=h(i)),(p||_)&&(n=n.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),n=h(n)),_){let a=_({vertexShader:i,fragmentShader:n});i=a.vertexShader,n=a.fragmentShader}if(p){let a=[];n=n.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,v=>(a.push(v),"")),l=`${p}
${a.join(`
`)}
${l}`}if($){const a=`
uniform float ${$};
`;u=a+u,t=a+t}return g&&(i=`vec3 troika_position_${r};
vec3 troika_normal_${r};
vec2 troika_uv_${r};
${i}
`,u=`${u}
void troikaVertexTransform${r}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${g}
}
`,c=`
troika_position_${r} = vec3(position);
troika_normal_${r} = vec3(normal);
troika_uv_${r} = vec2(uv);
troikaVertexTransform${r}(troika_position_${r}, troika_normal_${r}, troika_uv_${r});
${c}
`,i=i.replace(/\b(position|normal|uv)\b/g,(a,v,O,T)=>/\battribute\s+vec[23]\s+$/.test(T.substr(0,O))?v:`troika_${v}_${r}`),e.map&&e.map.channel>0||(i=i.replace(/\bMAP_UV\b/g,`troika_uv_${r}`))),i=C(i,r,u,c,d),n=C(n,r,t,f,l),{vertexShader:i,fragmentShader:n}}function C(e,i,n,o,r){return(o||r||n)&&(e=e.replace(b,`
${n}
void troikaOrigMain${i}() {`),e+=`
void main() {
  ${o}
  troikaOrigMain${i}();
  ${r}
}`),e}function I(e,i){return e==="uniforms"?void 0:typeof i=="function"?i.toString():i}let j=0;const w=new Map;function k(e){const i=JSON.stringify(e,I);let n=w.get(i);return n==null&&w.set(i,n=++j),n}export{M as c,b as v};
//# sourceMappingURL=troika-three-utils-DzUc9kqZ.js.map
