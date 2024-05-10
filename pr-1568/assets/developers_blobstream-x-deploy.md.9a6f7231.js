import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.87fe2992.js";const y=JSON.parse('{"title":"New Blobstream X deployments","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"New Blobstream X deployments | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/blobstream-x-deploy.md","filePath":"developers/blobstream-x-deploy.md","lastUpdated":1715369247000}'),c={name:"developers/blobstream-x-deploy.md"},r=o('<h1 id="new-blobstream-x-deployments" tabindex="-1">New Blobstream X deployments <a class="header-anchor" href="#new-blobstream-x-deployments" aria-label="Permalink to &quot;New Blobstream X deployments&quot;">​</a></h1><p>If you want to deploy Blobstream X to a new chain, where a Gateway contract does not exist, you need to do the following.</p><p>If Succinct Gateway already exists on this chain, you can skip this step. You can check the list of deployed <code>SuccinctGateway</code> contracts in this <a href="https://docs.succinct.xyz/platform/onchain-integration#succinctgateway" target="_blank" rel="noreferrer">list</a>.</p><h2 id="deploy-a-new-succinctgateway-contract" tabindex="-1">Deploy a new <code>SuccinctGateway</code> contract <a class="header-anchor" href="#deploy-a-new-succinctgateway-contract" aria-label="Permalink to &quot;Deploy a new `SuccinctGateway` contract&quot;">​</a></h2><p>To Deploy a new <code>SuccinctGateway</code> contract to the new chain, follow the <a href="https://docs.succinct.xyz/platform/onchain-integration#gateway-deployment" target="_blank" rel="noreferrer">succinct documentation</a>.</p><h2 id="deploy-a-blobstreamx-contract-to-the-new-chain" tabindex="-1">Deploy a <code>BlobstreamX</code> contract to the new chain <a class="header-anchor" href="#deploy-a-blobstreamx-contract-to-the-new-chain" aria-label="Permalink to &quot;Deploy a `BlobstreamX` contract to the new chain&quot;">​</a></h2><p>To deploy a <code>BlobstreamX</code> contract to the new chain, follow this <a href="https://github.com/succinctlabs/blobstreamx/blob/main/README.md#blobstreamx-contract-overview" target="_blank" rel="noreferrer">guide</a>.</p><h2 id="run-a-local-prover" tabindex="-1">Run a local prover <a class="header-anchor" href="#run-a-local-prover" aria-label="Permalink to &quot;Run a local prover&quot;">​</a></h2><p>Now that you have the contracts deployed, you can run a local prover which will generate proofs and relay them to your target <code>Blobstream X</code> contract. Follow this <a href="https://hackmd.io/@succinctlabs/HJE7XRrup" target="_blank" rel="noreferrer">guide</a> on how to run a relayer.</p>',9),n=[r];function l(s,i,d,h,p,m){return t(),a("div",null,n)}const u=e(c,[["render",l]]);export{y as __pageData,u as default};
