import{_ as e,o as t,c as a,Q as i}from"./chunks/framework.d4ebcf82.js";const g=JSON.parse('{"title":"Integrate Celestia for service providers","description":"Learn how service providers can integrate with the Celestia network.","frontmatter":{"description":"Learn how service providers can integrate with the Celestia network.","prev":{"text":"Integrating Cosmostation for developers","link":"/developers/cosmostation"},"head":[["meta",{"name":"og:title","content":"Integrate Celestia for service providers | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/integrate-celestia.md","filePath":"developers/integrate-celestia.md","lastUpdated":1712165340000}'),s={name:"developers/integrate-celestia.md"},n=i('<h1 id="integrate-celestia-for-service-providers" tabindex="-1">Integrate Celestia for service providers <a class="header-anchor" href="#integrate-celestia-for-service-providers" aria-label="Permalink to &quot;Integrate Celestia for service providers&quot;">​</a></h1><p>This document is for third-party service providers, such as custodians and explorers, integrating the Celestia network.</p><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><p>When getting started Celestia, we recommend checking out these resources first:</p><ul><li><a href="./../learn/how-celestia-works/introduction">Introduction to Celestia</a></li><li><a href="./../learn/how-celestia-works/monolithic-vs-modular">Monolithic v. Modular</a></li><li><a href="./../learn/how-celestia-works/data-availability-layer">Celestia&#39;s DA Layer</a></li><li><a href="https://celestia.org/learn.md" target="_blank" rel="noreferrer">Learn modular</a></li><li><a href="./../nodes/overview">Overview to running nodes on Celestia</a></li><li><a href="./build-modular">Build Moduar</a></li></ul><h2 id="celestia-service-provider-notes" tabindex="-1">Celestia service provider notes <a class="header-anchor" href="#celestia-service-provider-notes" aria-label="Permalink to &quot;Celestia service provider notes&quot;">​</a></h2><p>Celestia is a fairly standard Cosmos-SDK based chain. We use the latest version of Tendermint and the Cosmos-SDK, with only minor modifications to each. This means that we are:</p><ul><li>Using the default Cosmos-SDK modules: auth, bank, distribution, staking, slashing, mint, crisis, ibchost, genutil, evidence, ibctransfer, params, gov (limited in some TBD capacities), upgrade, vesting, feegrant, capability, and payment.</li><li>Use the standard digital keys schemes provided by the Cosmos-SDK and Tendermint, those being secp256k1 for user transactions, and tm-ed25519 for signing and verifying consensus messages.</li></ul><p>While exactly which modules used is subject to change, Celestia aims to be as minimal as possible.</p><h3 id="custody-and-key-management" tabindex="-1">Custody and key management <a class="header-anchor" href="#custody-and-key-management" aria-label="Permalink to &quot;Custody and key management&quot;">​</a></h3><p>Celestia supports many already existing key management systems, as we rely on the Cosmos-SDK and Tendermint libraries for signing and verifying transactions. Learn more in the <a href="https://docs.cosmos.network/main/basics/accounts.html#keys-accounts-addresses-and-signatures" target="_blank" rel="noreferrer">Cosmos-SDK documentation</a></p><h3 id="rpc-and-querying" tabindex="-1">RPC and querying <a class="header-anchor" href="#rpc-and-querying" aria-label="Permalink to &quot;RPC and querying&quot;">​</a></h3><p>In celestia-app, only the standard RPC endpoints for Tendermint and the Cosmos-SDK are exposed. We do not currently add or subtract any core functionality, but this could change in the future. The same goes for querying data from the chain.</p><p>In celestia-node, the Data Availability node client, there is a JSON-RPC API that allows you to interact directly with Celestia&#39;s Data Availability layer. Learn <a href="./node-tutorial">how to use the API in this tutorial</a>.</p><h3 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h3><p>Linux, particularly Ubuntu 20.04 LTS, is the most well tested. Potentially compatible with other OSs, but they are currently untested. Some of the cryptography libraries used for erasure data are not guaranteed to work on other platforms.</p><h3 id="syncing" tabindex="-1">Syncing <a class="header-anchor" href="#syncing" aria-label="Permalink to &quot;Syncing&quot;">​</a></h3><p>Since we utilize Tendermint and the Cosmos-SDK, syncing the chain can be performed by any method that is supported by those libraries. This includes fast-sync, state sync, and quick sync.</p><h3 id="notable-exceptions-relative-to-other-blockchains" tabindex="-1">Notable exceptions relative to other blockchains <a class="header-anchor" href="#notable-exceptions-relative-to-other-blockchains" aria-label="Permalink to &quot;Notable exceptions relative to other blockchains&quot;">​</a></h3><p>Relative to other Tendermint based chains, Celestia will have significantly longer blocktimes of roughly 12* seconds. The reason behind this block time is to optimize the bandwidth used by light clients that are sampling the chain, and is not because we have modified Tendermint consensus in any meaningful way. Validators will likely download/upload relatively large blocks. It should be noted that while these blocks are large, very little typical blockchain state execution is actually occurring on Celestia. Meaning that the bandwidth requirements will likely be larger than that of a typical Cosmos-SDK based blockchain full node, the computing requirements should be similar in magnitude.</p><p>*Subject to Change</p>',21),r=[n];function o(l,d,c,h,u,m){return t(),a("div",null,r)}const b=e(s,[["render",o]]);export{g as __pageData,b as default};
