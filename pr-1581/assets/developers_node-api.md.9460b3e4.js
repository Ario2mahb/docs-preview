import{_ as e,o as a,c as t,Q as r}from"./chunks/framework.2ce2c716.js";const w=JSON.parse('{"title":"Node API","description":"An overview of the celestia-node API.","frontmatter":{"description":"An overview of the celestia-node API.","head":[["meta",{"name":"og:title","content":"Node API | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/node-api.md","filePath":"developers/node-api.md","lastUpdated":1716471709000}'),o={name:"developers/node-api.md"},i=r('<h1 id="node-api" tabindex="-1">Node API <a class="header-anchor" href="#node-api" aria-label="Permalink to &quot;Node API&quot;">​</a></h1><p>The celestia-node API is made for interacting with celestia-node. There are two ways in which a user and developer can interact with the API, the RPC API and the Gateway API. View <a href="https://node-rpc-docs.celestia.org/" target="_blank" rel="noreferrer">the API&#39;s documentation</a>.</p><h2 id="rpc-api" tabindex="-1">RPC API <a class="header-anchor" href="#rpc-api" aria-label="Permalink to &quot;RPC API&quot;">​</a></h2><p>The RPC API primarily focuses on developers and projects building on top of Celestia, who are willing to run their own DA nodes. The RPC API provides a richer set of features and a superior user experience. Unlike the Gateway API, the RPC API allows access to the internal wallet and keyring of the DA node, as well as other sensitive and administrative capabilities.</p><h3 id="library" tabindex="-1">Library <a class="header-anchor" href="#library" aria-label="Permalink to &quot;Library&quot;">​</a></h3><p>The node can be used as a Golang library and designed for programmatic API access.</p><h3 id="rpc" tabindex="-1">RPC <a class="header-anchor" href="#rpc" aria-label="Permalink to &quot;RPC&quot;">​</a></h3><p>The RPC API is also exposed to OpenRPC(JSON-RPC 2.0) for users wanting to run their DA node as a separate DA service. It provides the same set of features as the library with an additional authentication system with different permissions levels to protect the wallet and signing + providing RPC-level DOS protection.</p><h3 id="rpc-api-tutorial" tabindex="-1">RPC API tutorial <a class="header-anchor" href="#rpc-api-tutorial" aria-label="Permalink to &quot;RPC API tutorial&quot;">​</a></h3><p>The <a href="./node-tutorial">node tutorial</a>, which uses the RPC CLI, is the recommended way to get started interacting with your Celestia node.</p><h2 id="gateway-api" tabindex="-1">Gateway API <a class="header-anchor" href="#gateway-api" aria-label="Permalink to &quot;Gateway API&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The gateway endpoints have been deprecated and will be removed in the future. If you would like to use them anyway, you can <a href="https://github.com/celestiaorg/celestia-node/pull/2360" target="_blank" rel="noreferrer">find more details on GitHub</a>.</p></div><p>The gateway API is a REST API which is meant to be deployed by infra providers to enable the public read-only gateway to the DA network for external users who don&#39;t want or can&#39;t run light nodes (like browsers currently) over HTTP. It has no wallet or signing functionality.</p><h3 id="gateway-api-tutorial" tabindex="-1">Gateway API tutorial <a class="header-anchor" href="#gateway-api-tutorial" aria-label="Permalink to &quot;Gateway API tutorial&quot;">​</a></h3><p>Check out the <a href="./prompt-scavenger">Prompt scavenger gateway API tutorial</a> for more details.</p>',15),n=[i];function s(l,d,h,c,p,u){return a(),t("div",null,n)}const f=e(o,[["render",s]]);export{w as __pageData,f as default};
