import{a3 as i,s,a4 as c,a5 as l,a6 as d,a7 as f,a8 as m,a9 as h,aa as A,ab as g,ac as y,ad as P,X as v,d as w,u as C,j as R,y as _,ae as b,af as D,ag as E}from"./chunks/framework.39ef0803.js";import{t as p}from"./chunks/theme.24fefb2f.js";const L={extends:p,Layout:()=>i(p.Layout,null,{}),enhanceApp({app:e,router:a,siteData:t}){}};function u(e){if(e.extends){const a=u(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=u(L),T=w({name:"VitePressApp",setup(){const{site:e}=C();return R(()=>{_(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),b(),D(),E(),o.setup&&o.setup(),()=>i(o.Layout)}});async function j(){const e=O(),a=x();a.provide(l,e);const t=d(e.route);return a.provide(f,t),a.component("Content",m),a.component("ClientOnly",h),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:A}),{app:a,router:e,data:t}}function x(){return g(T)}function O(){let e=s,a;return y(t=>{let n=P(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{c(a.route,t.site),e.mount("#app")})});export{j as createApp};
