import{r as H,E as pe,B as Ee,C as ne,D as ge,i as ke,F as Y,j as re,G as je,k as Q,l as W,H as Le,I as be,J as ae,s as V,t as Z,c as N,o as O,a as d,b as m,d as R,e as se,p as qe,q as ce,K as Ie,y as Se}from"../chunks/disclose-version.DphJqcqB.js";import{j as U,n as K,A as Ae,t as Be,s as A,o as Ge,q as xe,L as Te,M as ze,v as De,S as He,z as G,m as Me,a as ie,p as oe,g as L,H as Ne,N as de}from"../chunks/runtime.BniN5TkB.js";import{a as D,o as we,b as X,p as S}from"../chunks/main-client.C4vWIEm9.js";import{m as Oe,D as Ve,b as Ke,r as Re,a as Pe}from"../chunks/Dag.B1gUUzDU.js";import{t as ye,i as ue}from"../chunks/if.DGWTtXDS.js";function Fe(e,t){return{a:t,d:null,f:e,v:[],e:null,p:xe,r:null,s:[],t:Te}}function Je(e,t,s){return{a:null,d:null,e:null,i:t,k:s,v:e,p:xe,r:null,s:null,t:ze}}function Ye(e,t,s,a,l,p,g){const b=(s&Y)!==0,i=Fe(s,e);let x=null;ke(e,b);let w,E=null,o=null,j=!1;i.r=r=>{const c=x,_=c.s;_.add(r),r.f(()=>{_.delete(r),_.size===0&&c.e!==null&&(c.d!==null&&(H(c.d),c.d=null),U(c.e),c.e=null)})};const u=()=>{const r={d:null,e:null,s:new Set,p:x},c=K(()=>{const _=i.d;_!==null&&(H(_),i.d=null);let f=i.a;(i.f&Y)!==0&&(re?f=f.firstChild:(f=je(),i.a.appendChild(f))),p(f),r.d=i.d,i.d=null},i,!0);r.e=c,x=r},y=r=>{const c=r.f,_=(c&Y)!==0,f=r.a;g(w,r,f,_,l,c,!0,E)},I=K(()=>{var _,f;const r=t();w=Ae(r)?r:r==null?[]:Array.from(r),a!==null?E=w.map(a):s&pe||w.map(Be);const c=w.length;if(re){const v=((f=(_=Q)==null?void 0:_[0])==null?void 0:f.data)==="ssr:each_else";v&&c||!v&&!c?(H(Q),W(null),j=!0):v&&Q.shift()}if(p!==null){if(c===0){if(i.v.length!==0||o===null){y(i),u();return}}else if(i.v.length===0&&x!==null){const v=x,q=v.s;q.size===0?v.d!==null&&(H(v.d),v.d=null):ye(q,"out")}}o!==null&&Ge(o)},i,!1);o=K(y,i,!0),j&&W([]),I.ondestroy=()=>{const r=i.f,c=i.a,_=(r&Y)!==0;let f=x;for(;f!==null;){const v=f.d;v!==null&&H(v);const q=f.e;q!==null&&U(q),f=f.p}g([],i,c,_,l,r,!1,E),U(o)},i.e=I}function Qe(e,t,s,a,l){Ye(e,t,s,null,a,l,Ue)}function Ue(e,t,s,a,l,p,g){p&ae&&!De(e)&&!(He in e)&&(p^=ae);var b=t.v,i=t.s,x=b.length,w=e.length,E=Math.max(x,w),o=0,j,u;if(i.length!==0&&Ze(i),w===0)for(j=[],a&&x!==0&&Ee(s);o<E;)u=b[o++],le(u,i,g,a);else{var y;let _=!1;if(j=Array(w),re){for(var I=Q,r=I[0];o<E;o++){var c=Le(r);if(W(c),!c){_=!0;break}y=e[o],u=fe(y,null,o,l,p),j[o]=u,r=c[c.length-1].nextSibling.nextSibling}Xe(I,r)}for(;o<E;o++)o>=x?(y=e[o],u=fe(y,null,o,l,p),j[o]=u,We(u,s,a,null)):o>=w?(u=b[o],le(u,i,g)):(y=e[o],u=b[o],j[o]=u,$e(u,y,o,p));_&&W([])}t.v=j}function Xe(e,t){if(t!==null){var s=e.indexOf(t);s!==-1&&e.length>s+1&&H(e.slice(s))}}function We(e,t,s,a){var l=e.d;return a===null?s?ne(l,t,null):ne(l,t.parentNode,t):ne(l,null,a)}function Ze(e){var t=e.length;if(t>0){for(var s=0,a,l;s<t;s++)a=e[s],l=a.r,l!==null&&(a.r=null,le(a,null,!1));e.length=0}}function $e(e,t,s,a){const l=e.v;a&ge&&A(l,t);const p=e.s,g=(a&be)!==0,b=e.a;p!==null&&a&pe&&b!==null&&b(e,p),g?A(e.i,s):e.i=s}function le(e,t,s,a=!1){const l=e.s;if(s&&l!==null){for(let g of l)g.r==="key"&&l.delete(g);if(l.size===0)e.s=null;else{ye(l,"out"),t!==null&&t.push(e);return}}const p=e.d;!a&&p!==null&&H(p),U(e.e)}function fe(e,t,s,a,l){const g=(l&ge)===0?e:l&ae?G(e):Me(e),b=l&be?G(s):s,i=Je(g,b,t),x=K(w=>{a(null,w.v,w.i)},i,!0);return i.e=x,i}function et(e,t,s){e.addEventListener("input",()=>{s(ve(e)?_e(e.value):e.value)}),K(()=>{var a=t();e.__value=a,!(ve(e)&&a===_e(e.value))&&(e.type==="date"&&!a&&!e.value||(e.value=V(a)))})}function ve(e){var t=e.type;return t==="number"||t==="range"}function _e(e){return e===""?null:+e}function he(e){return function(...t){var s=t[0];return s.preventDefault(),e.apply(this,t)}}var tt=R('<div class="flex space-x-5 items-center justify-center"><div class="flex-col text-center justify-center justify-center w-1/3 z-0"><h1 class="text-2xl font-bold"> </h1> <div class="w-full grow"></div></div> <div class="w-1/4 border border-black z-1"><!></div></div>');function nt(e,t){ie(t,!0);const s=D(t,"dag_options",11,()=>({})),a=Oe(s(),{title:{text:"Clique Graph"}});let l;function p(u){const y=document.createElement("h2");y.classList.add("text-xl"),y.classList.add("font-bold"),y.classList.add("text-left"),y.textContent=u.title,l.appendChild(y);const I=document.createElement("h3");I.classList.add("text-sm"),I.classList.add("text-left"),I.textContent=u.description,l.appendChild(I);const r=document.createElement("table");r.classList.add("table"),r.classList.add("table-sm"),r.classList.add("table-zebra"),r.classList.add("w-full"),r.classList.add("grow"),r.classList.add("mt-1"),r.classList.add("overflow-x-auto"),r.classList.add("overflow-y-auto"),r.classList.add("max-h-96");const c=document.createElement("thead"),_=document.createElement("tbody"),f=document.createElement("tr");for(let v=0;v<u.headers.length;v++){const q=document.createElement("th");q.textContent=u.headers[v],f.appendChild(q)}c.appendChild(f),r.appendChild(c);for(let v=0;v<u.rows.length;v++){const q=document.createElement("tr");for(let B=0;B<u.rows[v].length;B++){const T=document.createElement("td");T.textContent=u.rows[v][B],q.appendChild(T)}_.appendChild(q)}r.appendChild(_),l.appendChild(r)}const g={title:"Example Table",description:"This is an example of a table description that is relatively long that should hopefully wrap around the table and not be too long.",headers:["Gene","Degree"],rows:[["Gene1","5"],["Gene2","3"],["Gene3","2"],["Gene4","1"],["Gene5","1"],["Gene6","1"],["Gene7","1"]]};we(()=>{p(g)});var b=O(e,!0,tt),i=d(b),x=d(i),w=d(x),E=m(m(x,!0));X(E,u=>l=u,()=>l);var o=m(m(i,!0)),j=d(o);Z(w,()=>`Clique ${V(t.clique_id)}`),Ve(j,{get dag_data(){return t.dag_data},init_dag_options:a,dag_width:"100%"}),N(e,b),oe()}var st=R("<li><a> </a></li>"),rt=R('<li><a class="text-base-300">No Items Found</a></li>'),at=R('<div class="label"><span class="label-text-alt text-error"> </span></div>'),lt=R('<form><div class="p-1 bg-base-100 w-full rounded-lg"><div class="flex"><div class="join"><div class="dropdown join-item"><label class="!focus:outline-none bg-white !focus:outline-0 !focus:border-0 input input-bordered join-item flex items-center gap-2"> <input class="grow !focus:outline-none !focus:outline-0 !focus:border-0"></label> <ul tabindex="0" class="dropdown-content bg-white z-[1] menu p-2 shadow bg- rounded-box w-full max-h-80 flex-nowrap overflow-auto"><!> <!></ul></div> <button class="btn btn-outline bg-white z-10 join-item">Search</button></div> <button style="display: none;" type="submit">Submit</button></div> <!></div></form>');function me(e,t){ie(t,!0);let s,a,l,p=D(t,"prefix",3,"Node"),g=D(t,"init_items",11,()=>[]),b=D(t,"selectedItem",7,""),i=D(t,"placeholder_text",3,"Choose a node"),x=D(t,"on_search",3,n=>console.log(`Selected ${n}`)),w=D(t,"custom_error_msg",3,"Node not found"),E=G(""),o=G(""),j=G(S(g()));function u(n){A(j,S(n))}const y=()=>{l.classList.remove("input-error"),L(j).includes(L(E))?(x()(L(E)),A(o,"")):(l.classList.add("input-error"),A(o,S(w())))};function I(n,h=!1,k=!1){(a.checkVisibility({visibilityProperty:!0})&&a.style.visibility!=="hidden"||h)&&(s.blur(),a.blur()),b(n),A(E,S(n))}const r=Ne(()=>L(j).filter(n=>n.toLowerCase().includes(L(E).toLowerCase())));var c=O(e,!0,lt),_=d(c),f=d(_),v=d(f),q=d(v),B=d(q);X(B,n=>l=n,()=>l);var T=d(B),M=m(T);X(M,n=>s=n,()=>s),Re(M);var F=m(m(B,!0));X(F,n=>a=n,()=>a);var J=d(F),$=m(m(J,!0)),ee=m(m(q,!0)),te=m(m(f,!0)),P;return K(()=>{qe(T,`${V(p())}: `),P!==(P=i())&&Pe(M,"placeholder",P)}),se("submit",c,he(()=>{L(r).length!=0&&(I(L(r)[0]),y())}),!1),et(M,()=>L(E),n=>A(E,n)),Qe(J,()=>L(r),65,(n,h,k)=>{var C=O(n,!0,st),z=d(C),Ce=ce(d(z));Z(Ce,()=>de(h)),se("click",z,he(()=>I(de(h),!0)),!1),N(n,C)},null),ue($,()=>L(r).length===0,n=>{var h=O(n,!0,rt);N(n,h)},null),se("click",ee,()=>y(),!1),ue(te,()=>L(o).length!==0,n=>{var h=O(n,!0,at),k=d(h),C=ce(d(k));Z(C,()=>L(o)),N(n,h)},null),N(e,c),Ke(t,"update_items",u),oe({update_items:u})}function it(e){return Promise.all(e.map(t=>fetch(t).then(s=>s.text())))}var ot={name:"biography",version:"0.0.1",private:!0,scripts:{dev:"vite dev",build:"vite build",preview:"vite preview",test:"npm run test:integration && npm run test:unit",check:"svelte-kit sync && svelte-check --tsconfig ./tsconfig.json","check:watch":"svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",lint:"prettier --check . && eslint .",format:"prettier --write .","test:integration":"playwright test","test:unit":"vitest",fix:"eslint --fix ."},devDependencies:{"@biomejs/biome":"1.6.1","@playwright/test":"^1.28.1","@sveltejs/adapter-auto":"^3.0.0","@sveltejs/adapter-static":"^3.0.1","@sveltejs/kit":"^2.0.0","@sveltejs/vite-plugin-svelte":"^3.0.0","@tailwindcss/typography":"^0.5.10","@types/eslint":"^8.56.0","@typescript-eslint/eslint-plugin":"^7.0.0","@typescript-eslint/parser":"^7.0.0",autoprefixer:"^10.4.19",daisyui:"^4.7.3",eslint:"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-plugin-import":"^2.29.1","eslint-plugin-svelte":"^2.36.0-next.4",postcss:"^8.4.38",prettier:"^3.1.1","prettier-plugin-svelte":"^3.1.2",svelte:"^5.0.0-next.1","svelte-check":"^3.6.0",tailwindcss:"^3.4.1",tslib:"^2.4.1",typescript:"^5.0.0",vite:"^5.0.3",vitest:"^1.2.0"},type:"module",dependencies:{"@fontsource-variable/dm-sans":"^5.0.4",echarts:"^5.5.0"}},ct=()=>{document.getElementById("search_error_container").classList.add("hidden")},dt=R('<div class="flex flex-col h-screen"><main class="justify-items-center mb-auto flex-col overflow-visible"><div class="mt-10 flex mx-auto justify-center justify-items-center"><article class="prose"><h1 class="text-center"> </h1> <p> </p></article></div> <div class="flex text-center justify-center justify-center mt-3 mb-auto mx-auto space-x-4 justify-items-center"><div class="p-1 bg-base-100 rounded-lg w-1/4"><!></div> <div class="p-1 bg-base-100 rounded-lg w-1/4"><!></div></div> <div class="mt-10 hidden flex mx-auto justify-center justify-items-center text-base-100" id="search_error_container"><div role="alert" class="w-1/4 alert alert-error text-center flex items-center text-neutral-950"><a href="#" class="close ml-2 hover:bg-base-100/10 hover:bg- rounded-lg p-1" aria-label="close"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></a> <span id="search_error"></span></div></div> <div id="clique_container" class="w-full mt-2"></div></main> <footer class="footer footer-center p-4 bg-base-100 text-base-content"><aside><p>Built with <a class="link" href="https://github.com/bzhanglab/biography/" target="_blank"> </a></p></aside></footer></div>');function mt(e,t){ie(t,!0);function s(n){const h=document.getElementById("search_error");h.textContent=n,document.getElementById("search_error_container").classList.remove("hidden")}function a(){const n=document.getElementById("search_error");n.textContent="",document.getElementById("search_error_container").classList.add("hidden")}function l(n,h="clique_container"){return fetch(`/data/clique/${n}.json`).then(k=>{if(!k.ok)throw s(`Error fetching data for clique ${n}`),new Error(`Error fetching data for clique ${n}`);return a(),k.json()}).then(k=>{const C=document.getElementById(h);C.innerHTML="",Se(nt,{target:C,props:{clique_id:n,dag_data:k,dag_options:null,table_data:null}})})}function p(n){const h=L(i)[n];if(h===void 0){s(`No cliques found for ${n}`);return}a();const k=document.getElementById("clique_container");k.innerHTML="";for(let C=0;C<h.length;C+=1){const z=document.createElement("div");z.id=`clique_container_${C}`,z.classList.add("w-full","mt-2"),k.appendChild(z),l(h[C],z.id)}}const g=S([]),b=S([]);let i=G(S({})),x=G(n=>{}),w=G(n=>{});we(()=>{it(["/data/info/node_info.json","/data/info/clique_info.json","/data/info/node_to_clique.json"]).then(n=>n.map(k=>JSON.parse(k))).then(n=>{const h=n[0];if(h.is_range)for(let C=h.range.start;C<=h.range.end;C++)b.push(`${C}`);else b.push(...h.items);L(w)(b);const k=n[1];if(k.is_range)for(let C=k.range.start;C<=k.range.end;C++)g.push(`${C}`);else g.push(...k.items);L(x)(g),A(i,S(n[2]))})});var E=O(e,!0,dt),o=d(E),j=d(o),u=d(j),y=d(u),I=d(y);I.nodeValue=`${V("{{ title }}")} Clique Search`;var r=m(m(y,!0)),c=d(r);c.nodeValue=`Search by Clique ID or ${V("{{ node_name }}")} to view information about Cliques and their associated
					features.`;var _=m(m(j,!0)),f=d(_),v=d(f),q=m(m(f,!0)),B=d(q),T=m(m(_,!0)),M=d(T),F=d(M),J=m(m(o,!0)),$=d(J),ee=d($),te=m(d(ee)),P=d(te);Z(P,()=>`BioGraphy v${V(ot.version)}`),me(v,{get update_items(){return L(x)},set update_items(n){A(x,S(n))},get init_items(){return g},prefix:"Clique",on_search:n=>{l(n)}}),me(B,{get update_items(){return L(w)},set update_items(n){A(w,S(n))},get init_items(){return b},prefix:"Gene Symbol",on_search:n=>{p(n)}}),F.__click=[ct],N(e,E),oe()}Ie(["click"]);export{mt as component};
