import{g as m,v as i,i as v,a as c,b,h,d as f,f as $}from"../chunks/disclose-version.B6bfPW4H.js";import{v as a,u as x,g as I,U as l,s as p,d as y,m as E,o as N,p as U,a as k}from"../chunks/runtime.CKBWl8gs.js";import{i as w}from"../chunks/lifecycle.IRmfTt7O.js";import{s as A}from"../chunks/entry.C-Oyk4u9.js";function D(s,r,t){if(s==null)return r(void 0),t&&t(void 0),a;const e=s.subscribe(r,t);return e.unsubscribe?()=>e.unsubscribe():e}function L(s,r,t){let e=t[r];const n=e===void 0;n&&(e={store:null,last_value:null,value:E(l),unsubscribe:a},t[r]=e),(n||e.store!==s)&&(e.unsubscribe(),e.store=s??null,e.unsubscribe=S(s,e.value));const u=I(e.value);return u===l?e.last_value:u}function S(s,r){return s==null?(p(r,void 0),a):D(s,t=>p(r,t))}function T(s){Z(()=>{let r;for(r in s)s[r].unsubscribe()})}function Z(s){x(()=>()=>y(s))}const j=()=>{const s=A;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},q={subscribe(s){return j().page.subscribe(s)}};var z=$("<h1> </h1> <p> </p>",!0);function H(s,r){k(r,!1);const t={};T(t);const e=()=>L(q,"$page",t);w();var n=v(s,!0,z),u=h(n),g=c(b(u)),_=f(f(u,!0)),d=c(b(_));N(()=>{var o;i(g,e().status),i(d,(o=e().error)==null?void 0:o.message)}),m(s,n),U()}export{H as component};
