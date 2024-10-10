import{r as s,j as o,R as X,a as w,N as ee,c as te}from"./Navbar-DdytOgyf.js";function re(e){const[t,r]=s.useState("");let n=e.searchFilter;const i=g=>{r(g.target.value)},a=g=>{g.key==="Enter"&&(g.preventDefault(),n(t))};return o.jsxs("div",{className:"flex justify-center",children:[o.jsx("form",{children:o.jsx("input",{type:"text",placeholder:"Enter text here",value:t,onChange:i,onKeyDown:a})}),o.jsx("button",{type:"button",className:"tag-button",onClick:()=>n(t),children:"Search"}),o.jsx("button",{type:"button",className:"tag-button",onClick:()=>{r(""),n("")},children:"Clear"})]})}/**
  * react-collapsed v4.1.2
  *
  * Copyright (c) 2019-2023, Rogin Farrer
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */var ne=class extends Error{constructor(e){super(`react-collapsed: ${e}`)}},I=(...e)=>(e[0],`${e[1]}`,void 0);function W(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useCallback((...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}function oe(e,t,r){const[n,i]=s.useState(t),a=s.useRef(typeof e<"u"),g=a.current?e:n,y=W(r),u=s.useCallback(h=>{const E=typeof h=="function"?h(g):h;a.current||i(E),y==null||y(E)},[y,g]);return s.useEffect(()=>{I(!(a.current&&e==null),"`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),I(!(!a.current&&e!=null),"`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")},[e]),[g,u]}var se="(prefers-reduced-motion: reduce)";function ie(){const[e,t]=s.useState(!1);return s.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const r=window.matchMedia(se);t(r.matches);const n=i=>{t(i.matches)};if(r.addEventListener)return r.addEventListener("change",n),()=>{r.removeEventListener("change",n)};if(r.addListener)return r.addListener(n),()=>{r.removeListener(n)}},[]),e}var ae=X.useId||(()=>{});function ce(){return ae()??""}var le=typeof window<"u"?s.useLayoutEffect:s.useEffect,F=!1,de=0,z=()=>++de;function ue(e){const t=e||(F?z():null),[r,n]=s.useState(t);return le(()=>{r===null&&n(z())},[]),s.useEffect(()=>{F===!1&&(F=!0)},[]),r!=null?String(r):void 0}function fe(e){const t=ce(),r=ue(e);return typeof e=="string"?e:typeof t=="string"?t:r}function pe(e,t){const r=performance.now(),n={};function i(){n.id=requestAnimationFrame(a=>{a-r>t?e():i()})}return i(),n}function _(e){e.id&&cancelAnimationFrame(e.id)}function B(e){return e!=null&&e.current?e.current.scrollHeight:(I(!0,"Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"),0)}function ge(e){if(!e||typeof e=="string")return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function he(e,t){if(e!=null)if(typeof e=="function")e(t);else try{e.current=t}catch{throw new ne(`Cannot assign value "${t}" to ref "${e}"`)}}function H(...e){return e.every(t=>t==null)?null:t=>{e.forEach(r=>{he(r,t)})}}function me(e){let t=r=>{};t=r=>{if(!(r!=null&&r.current))return;const{paddingTop:n,paddingBottom:i}=window.getComputedStyle(r.current);I(!(n&&n!=="0px"||i&&i!=="0px"),`Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`)},s.useEffect(()=>{t(e)},[e])}var xe=typeof window>"u"?s.useEffect:s.useLayoutEffect;function ye({duration:e,easing:t="cubic-bezier(0.4, 0, 0.2, 1)",onTransitionStateChange:r=()=>{},isExpanded:n,defaultExpanded:i=!1,hasDisabledAnimation:a,id:g,...y}={}){const u=W(r),h=fe(g?`${g}`:void 0),[c,E]=oe(n,i),R=s.useRef(c),[k,C]=s.useState(!1),O=ie(),d=a??O,l=s.useRef(),f=s.useRef(),m=s.useRef(null),[S,V]=s.useState(null);me(m);const N=`${y.collapsedHeight||0}px`;function P(x){if(!m.current)return;const v=m.current;for(const b in x){const j=x[b];j?v.style[b]=j:v.style.removeProperty(b)}}return xe(()=>{if(!m.current||c===R.current)return;R.current=c;function v(p){return d?0:e??ge(p)}const b=p=>`height ${v(p)}ms ${t}`,j=p=>{function L(){c?(P({height:"",overflow:"",transition:"",display:""}),u("expandEnd")):(P({transition:""}),u("collapseEnd")),C(!1)}f.current&&_(f.current),f.current=pe(L,p)};return C(!0),c?l.current=requestAnimationFrame(()=>{u("expandStart"),P({display:"block",overflow:"hidden",height:N}),l.current=requestAnimationFrame(()=>{u("expanding");const p=B(m);j(v(p)),m.current&&(m.current.style.transition=b(p),m.current.style.height=`${p}px`)})}):l.current=requestAnimationFrame(()=>{u("collapseStart");const p=B(m);j(v(p)),P({transition:b(p),height:`${p}px`}),l.current=requestAnimationFrame(()=>{u("collapsing"),P({height:N,overflow:"hidden"})})}),()=>{l.current&&cancelAnimationFrame(l.current),f.current&&_(f.current)}},[c,N,d,e,t,u]),{isExpanded:c,setExpanded:E,getToggleProps(x){const{disabled:v,onClick:b,refKey:j,...p}={refKey:"ref",onClick(){},disabled:!1,...x},L=S?S.tagName==="BUTTON":void 0,Z=x==null?void 0:x[j||"ref"],D={id:`react-collapsed-toggle-${h}`,"aria-controls":`react-collapsed-panel-${h}`,"aria-expanded":c,onClick(G){v||(b==null||b(G),E(Y=>!Y))},[j||"ref"]:H(Z,V)},$={type:"button",disabled:v?!0:void 0},M={"aria-disabled":v?!0:void 0,role:"button",tabIndex:v?-1:0};return L===!1?{...D,...M,...p}:L===!0?{...D,...$,...p}:{...D,...$,...M,...p}},getCollapseProps(x){const{style:v,refKey:b}={refKey:"ref",style:{},...x},j=x==null?void 0:x[b||"ref"];return{id:`react-collapsed-panel-${h}`,"aria-hidden":!c,"aria-labelledby":`react-collapsed-toggle-${h}`,role:"region",...x,[b||"ref"]:H(m,j),style:{boxSizing:"border-box",...!k&&!c?{display:N==="0px"?"none":"block",height:N,overflow:"hidden"}:{},...v}}}}}var U={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},K=w.createContext&&w.createContext(U),ve=["attr","size","title"];function be(e,t){if(e==null)return{};var r=je(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function je(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?q(Object(r),!0).forEach(function(n){we(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function we(e,t,r){return t=Ee(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ee(e){var t=Ce(e,"string");return typeof t=="symbol"?t:t+""}function Ce(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function J(e){return e&&e.map((t,r)=>w.createElement(t.tag,A({key:r},t.attr),J(t.child)))}function Q(e){return t=>w.createElement(Se,T({attr:A({},e.attr)},t),J(e.child))}function Se(e){var t=r=>{var{attr:n,size:i,title:a}=e,g=be(e,ve),y=i||r.size||"1em",u;return r.className&&(u=r.className),e.className&&(u=(u?u+" ":"")+e.className),w.createElement("svg",T({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,g,{className:u,style:A(A({color:e.color||r.color},r.style),e.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),a&&w.createElement("title",null,a),e.children)};return K!==void 0?w.createElement(K.Consumer,null,r=>t(r)):t(U)}function Ne(e){return Q({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z"},child:[]}]})(e)}function Pe(e){return Q({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M8.2 751.4c0 8.6 3.4 17.401 10 24.001 13.2 13.2 34.8 13.2 48 0l451.8-451.8 445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"},child:[]}]})(e)}function Re(e){let t=e.item,r=e.searchFilter;const{getToggleProps:n,getCollapseProps:i,isExpanded:a}=ye(),g=h=>h.map(c=>o.jsx("button",{type:"button",onClick:()=>r(c),className:"tag-button",children:c})),y=h=>h.map(c=>o.jsx("button",{type:"button",onClick:()=>r(c),className:"tag-button",children:c})),u=h=>h.map(c=>o.jsx("a",{href:c.url,children:o.jsx("button",{type:"button",className:"tag-button",children:c.name})}));return o.jsxs("div",{...n(),className:"bg-green-800 border-2 border-slate-200 my-2",children:[o.jsxs("div",{className:"bg-gray-200 border-b-2 border-persist-black text-persist-black px-2 py-2",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsxs("div",{className:"flex text-align text-2xl font-bold",children:[o.jsx("div",{className:"pr-2",children:a?o.jsx(Ne,{size:"20"}):o.jsx(Pe,{size:"20"})}),t.Name]}),o.jsx("div",{className:"",children:g(t.Category)})]}),o.jsx("div",{className:"flex text-align left-1",children:t.Headline})]}),o.jsx("section",{...i(),children:o.jsxs("div",{className:"px-2 py-2 bg-gray-300 border-b-2 border-persist-black",children:[o.jsx("div",{className:"text-persist-black",children:t.Description}),o.jsxs("div",{className:"flex justify-between py-2",children:[o.jsx("div",{className:"flex",children:y(t.Tags)}),o.jsx("div",{className:"flex",children:u(t.Links)})]})]})})]})}function Oe(e){let t=e.records,r=e.searchFilter,n=t.length;return o.jsxs("div",{children:[t.map(i=>o.jsx(Re,{item:i,searchFilter:r})),o.jsxs("div",{className:"text-center text-persist-black",children:[n," ",n===1?"record":"records"," displayed."]})]})}const Le="./artifacts.json";function Ie(){const[e,t]=s.useState(!1),[r,n]=s.useState([]),[i,a]=s.useState([]),[g,y]=s.useState({}),[u,h]=s.useState({}),[c,E]=s.useState("nameAZ");s.useEffect(()=>{console.log("useEffect called"),fetch(Le).then(d=>d.json()).then(d=>{console.log(d);let l=C(R(d));n(l),t(!0)}).catch(d=>console.log(d))},[]),s.useEffect(()=>{console.log("Secondary useEffect called"),a(r)},[e]),s.useEffect(()=>{k(i)},[i]);const R=d=>JSON.parse(JSON.stringify(d)).records,k=d=>{console.log("Counting categories and tags in records...");let l={},f={};for(let m of d){l[m.Category]=l[m.Category]!==void 0?l[m.Category]+1:1;for(let S of m.Tags)f[S]=f[S]!==void 0?f[S]+1:1}console.log(l),console.log(f),y(l),h(f)},C=d=>(console.log("Sorting records..."),c==="nameAZ"&&(console.log("Sorting by name in alphabetical order..."),d.sort((l,f)=>(l.Name.toLowerCase()>f.Name.toLowerCase())-(l.Name.toLowerCase()<f.Name.toLowerCase()))),d),O=d=>{if(d.length===0)n(C(r)),a(r);else{let l=[];console.log(d);for(let f of r)console.log(f),JSON.stringify(f).toLowerCase().includes(d.toLowerCase())&&(console.log("Hit!"),l.push(f));a(C(l))}};return o.jsxs("div",{className:"bg-gray-100 m-16",children:[o.jsxs("div",{className:"text-persist-black",children:[o.jsx("div",{className:"text-center text-4xl font-bold",children:"Artifact Directory"}),o.jsx("div",{children:"Click a record below to expand for more information. Enter search criteria into the text box below or click a category or tag to search."})]}),o.jsx(re,{searchFilter:O}),o.jsx(Oe,{records:i,searchFilter:O})]})}function Te(){return o.jsxs("div",{className:"min-h-screen bg-gray-100",children:[o.jsx("div",{class:"sticky top-0 left-0 right-0",children:o.jsx(ee,{})}),o.jsx(Ie,{})]})}te(document.getElementById("root")).render(o.jsx(s.StrictMode,{children:o.jsx("div",{children:o.jsx(Te,{})})}));