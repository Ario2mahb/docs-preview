import{_ as e,o as t,c as a,Q as s}from"./chunks/framework.87fe2992.js";const o="/docs-preview/pr-1568/img/Celestia_Bubs_Testnet.jpg",f=JSON.parse('{"title":"Bubs testnet","description":"The first testnet built with OP Stack and Celestia.","frontmatter":{"description":"The first testnet built with OP Stack and Celestia.","head":[["meta",{"name":"og:title","content":"Bubs testnet | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/bubs-testnet.md","filePath":"developers/bubs-testnet.md","lastUpdated":1715369247000}'),r={name:"developers/bubs-testnet.md"},i=s('<h1 id="bubs-testnet" tabindex="-1">Bubs testnet <a class="header-anchor" href="#bubs-testnet" aria-label="Permalink to &quot;Bubs testnet&quot;">​</a></h1><p><img src="'+o+'" alt="Bubs testnet"></p><p><a href="https://bubs-sepolia.hub.caldera.xyz/" target="_blank" rel="noreferrer">Bubs Testnet</a> is a fresh offering from <a href="https://caldera.xyz" target="_blank" rel="noreferrer">Caldera</a> with support from Celestia Labs, built with OP Stack and Celestia, and is dedicated to providing developers with an EVM-compatible execution layer to deploy their EVM applications on.</p><h2 id="built-with-the-op-stack-and-celestia" tabindex="-1">Built with the OP Stack and Celestia <a class="header-anchor" href="#built-with-the-op-stack-and-celestia" aria-label="Permalink to &quot;Built with the OP Stack and Celestia&quot;">​</a></h2><p>The Bubs Testnet is a testnet rollup, a modified version of <code>optimism-bedrock</code> that uses Celestia as a data availability (DA) layer. This integration can be found in the <a href="https://github.com/celestiaorg/optimism" target="_blank" rel="noreferrer">@celestiaorg/optimism repository</a>. The testnet is hosted by <a href="https://caldera.xyz" target="_blank" rel="noreferrer">Caldera</a>, who makes it easy to launch rollups with no code required.</p><p>In this setup, data handling is accomplished in two ways. Firstly, data is written to the DA layer, in this case, Celestia (on the <a href="./../nodes/mocha-testnet">Mocha testnet</a>). Then, the data commitment is written to the <code>op-batcher</code>. When reading, the <code>op-node</code> retrieves the data back from the DA layer by first reading the data commitment from the <code>op-batcher</code>, then reading the data from the DA layer using the data commitment. Hence, while previously <code>op-node</code> was reading from <code>calldata</code> on Ethereum, it now reads data from Celestia. <a href="https://mocha-4.celenium.io/namespace/000000000000000000000000000000000000ca1de12ad45362e77e87" target="_blank" rel="noreferrer">View the namespace for Bubs on Celestia&#39;s Mocha testnet</a>.</p><p>The tools involved in the data handling process include <code>op-batcher</code>, which batches up rollup blocks and posts them to Ethereum, <code>op-geth</code> that handles execution, and <code>op-proposer</code> responsible for state commitment submission.</p><p>By using Celestia as a DA layer, existing L2s can switch from posting their data as <code>calldata</code> on Ethereum to posting to Celestia. The commitment to the block is posted on Celestia, which is purpose-built for data availability. This is more scalable than the traditional method of posting this data as <code>calldata</code> on monolithic chains.</p><h2 id="building-on-bubs" tabindex="-1">Building on Bubs <a class="header-anchor" href="#building-on-bubs" aria-label="Permalink to &quot;Building on Bubs&quot;">​</a></h2><p>Bubs Testnet provides a robust environment for developers to test their Ethereum Virtual Machine (EVM) applications. It offers an EVM-compatible execution layer, making it an ideal platform for developers looking to build and test applications in a setting that closely mirrors an OP Stack rollup on Celestia.</p><p>Learn more at <a href="https://bubs-sepolia.hub.caldera.xyz/" target="_blank" rel="noreferrer">https://bubs-sepolia.hub.caldera.xyz/</a>.</p><h3 id="rpc-urls" tabindex="-1">RPC URLs <a class="header-anchor" href="#rpc-urls" aria-label="Permalink to &quot;RPC URLs&quot;">​</a></h3><p>Remote Procedure Call (RPC) URLs are endpoints that allow developers to interact with the blockchain. They are essential for sending transactions, querying blockchain data, and performing other interactions with the blockchain.</p><p>For the Bubs Testnet, you can connect to the following RPC URLs:</p><h4 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-label="Permalink to &quot;HTTPS&quot;">​</a></h4><ul><li><code>https://bubs-sepolia.rpc.caldera.xyz/http</code></li></ul><h4 id="wss" tabindex="-1">WSS <a class="header-anchor" href="#wss" aria-label="Permalink to &quot;WSS&quot;">​</a></h4><ul><li><code>wss://bubs-sepolia.rpc.caldera.xyz/ws</code></li></ul><p>This URL serves as the entry point to the Bubs Testnet. You can use it in your applications to connect to the testnet and interact with the smart contracts you deploy there.</p><p>Remember, Bubs Testnet is a testing environment!</p><h3 id="bridge" tabindex="-1">Bridge <a class="header-anchor" href="#bridge" aria-label="Permalink to &quot;Bridge&quot;">​</a></h3><p>Bridging is a process that enables the transfer of assets between different blockchains.</p><p>To bridge between Ethereum Sepolia and Bubs Testnet, visit the <a href="https://bubs-sepolia.bridge.caldera.xyz/" target="_blank" rel="noreferrer">Bubs Testnet bridge</a>.</p><h3 id="faucet" tabindex="-1">Faucet <a class="header-anchor" href="#faucet" aria-label="Permalink to &quot;Faucet&quot;">​</a></h3><p>To visit the Bubs testnet faucet, go to <a href="https://bubs-sepolia.hub.caldera.xyz/" target="_blank" rel="noreferrer"><code>https://bubs-sepolia.hub.caldera.xyz/</code></a> and click the &quot;Faucet&quot; tab.</p><h3 id="explorer" tabindex="-1">Explorer <a class="header-anchor" href="#explorer" aria-label="Permalink to &quot;Explorer&quot;">​</a></h3><p>To visit the explorer, go to <a href="https://bubs-sepolia.explorer.caldera.xyz/" target="_blank" rel="noreferrer"><code>https://bubs-sepolia.explorer.caldera.xyz/</code></a>.</p><h3 id="status" tabindex="-1">Status <a class="header-anchor" href="#status" aria-label="Permalink to &quot;Status&quot;">​</a></h3><p>To see the status and uptime information for Bubs, <a href="https://bubs-sepolia.betteruptime.com/" target="_blank" rel="noreferrer">visit the status page</a>.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>Now that you have a better understanding of the Bubs Testnet and its integration of OP Stack and Celestia, you can start exploring its capabilities:</p><ul><li><a href="./deploy-on-bubs">Deploy a smart contract on Bubs testnet</a></li><li><a href="./gm-portal-bubs">Deploy a GM Portal dapp on Bubs testnet</a></li></ul>',32),n=[i];function l(h,c,d,p,u,b){return t(),a("div",null,n)}const g=e(r,[["render",l]]);export{f as __pageData,g as default};
