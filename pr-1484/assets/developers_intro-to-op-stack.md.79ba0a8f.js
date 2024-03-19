import{_ as t,o as e,c as a,Q as o}from"./chunks/framework.b8b7156f.js";const b=JSON.parse('{"title":"Introduction to OP Stack integration","description":"Learn about the integration of OP Stack with Celestia.","frontmatter":{"description":"Learn about the integration of OP Stack with Celestia.","head":[["meta",{"name":"og:title","content":"Introduction to OP Stack integration | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/intro-to-op-stack.md","filePath":"developers/intro-to-op-stack.md","lastUpdated":1710859674000}'),i={name:"developers/intro-to-op-stack.md"},s=o('<h1 id="introduction-to-op-stack-integration" tabindex="-1">Introduction to OP Stack integration <a class="header-anchor" href="#introduction-to-op-stack-integration" aria-label="Permalink to &quot;Introduction to OP Stack integration&quot;">​</a></h1><p><a href="https://optimism.io" target="_blank" rel="noreferrer">Optimism</a> is a low-cost and lightning-fast Ethereum L2 blockchain, built with <a href="https://stack.optimism.io/" target="_blank" rel="noreferrer">the OP Stack</a>.</p><p><a href="https://celestia.org" target="_blank" rel="noreferrer">Celestia</a> is a modular consensus and data network, built to enable anyone to easily deploy their own blockchain with minimal overhead.</p><h2 id="about-the-integration" tabindex="-1">About the integration <a class="header-anchor" href="#about-the-integration" aria-label="Permalink to &quot;About the integration&quot;">​</a></h2><p><em>Discover how to integrate existing blockchain frameworks like the OP Stack with Celestia in this category.</em></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Tested on a machine with 8GB RAM, 160 GB SSD, Ubuntu 22.10, and a 4 core AMD CPU.</p></div><p>This is a <strong>beta integration</strong> and we are working on resolving <a href="https://github.com/celestiaorg/optimism/issues" target="_blank" rel="noreferrer">open issues</a>.</p><p><a href="https://www.optimism.io/" target="_blank" rel="noreferrer">Optimism</a> uses Ethereum as a data availability (DA) layer. Currently, settlement and DA for Optimism are on Ethereum, both onchain. <code>op-batcher</code> batches up rollup blocks and posts to Ethereum.</p><h3 id="table-of-contents-of-the-category" tabindex="-1">Table of contents of the category <a class="header-anchor" href="#table-of-contents-of-the-category" aria-label="Permalink to &quot;Table of contents of the category&quot;">​</a></h3><ul><li><a href="./bubs-testnet">Bubs testnet</a></li><li><a href="./deploy-on-bubs">Deploy a smart contract on Bubs testnet</a></li><li><a href="./gm-portal-bubs">Deploy a GM Portal dapp on Bubs testnet</a></li><li><a href="./optimism-devnet">Deploy an OP Stack devnet</a></li><li><a href="./optimism">Deploy an OP Stack devnet on Celestia</a></li></ul><h2 id="celestia-and-op-stack-repository" tabindex="-1">Celestia and OP Stack repository <a class="header-anchor" href="#celestia-and-op-stack-repository" aria-label="Permalink to &quot;Celestia and OP Stack repository&quot;">​</a></h2><p>Find the <a href="https://github.com/celestiaorg/optimism/" target="_blank" rel="noreferrer">repository for this integration</a> at <code>https://github.com/celestiaorg/optimism</code>.</p><h3 id="what-are-optimism-and-the-op-stack" tabindex="-1">What are Optimism and the OP Stack? <a class="header-anchor" href="#what-are-optimism-and-the-op-stack" aria-label="Permalink to &quot;What are Optimism and the OP Stack?&quot;">​</a></h3><p>Optimism, an Ethereum L2 blockchain, is powered by the OP Stack, which is also the foundation for the <a href="https://app.optimism.io/announcement" target="_blank" rel="noreferrer">Optimism Collective</a> committed to the <strong>impact=profit</strong> principle. This rewards individuals for their positive contributions to the collective.</p><p>Optimism addresses crypto ecosystem coordination failures, like funding public goods and infrastructure. The OP Stack fosters collaboration and prevents redundancy by creating a shared, open-source system for developing new L2 blockchains within the proposed Superchain ecosystem.</p><p>As Optimism evolves, the OP Stack will adapt to include components from blockchain infrastructure to governance systems. This software suite aims to simplify L2 blockchain creation and support the Optimism ecosystem&#39;s growth and development.</p><p>Learn <a href="https://www.optimism.io/" target="_blank" rel="noreferrer">more about Optimism</a>.</p><h3 id="what-is-celestia" tabindex="-1">What is Celestia? <a class="header-anchor" href="#what-is-celestia" aria-label="Permalink to &quot;What is Celestia?&quot;">​</a></h3><p>Celestia is a modular consensus and data network, built to enable anyone to easily deploy their own blockchain with minimal overhead.</p><p>Celestia is a minimal blockchain that only orders and publishes transactions and does not execute them. By decoupling the consensus and application execution layers, Celestia modularizes the blockchain technology stack and unlocks new possibilities for decentralized application builders. Learn more at <a href="https://celestia.org" target="_blank" rel="noreferrer">Celestia.org</a>.</p><h2 id="op-stack-and-celestia" tabindex="-1">OP Stack and Celestia <a class="header-anchor" href="#op-stack-and-celestia" aria-label="Permalink to &quot;OP Stack and Celestia&quot;">​</a></h2><p>This category will guide you through how to start your own devnet with a modified version of <code>optimism-bedrock</code> that uses Celestia as a DA layer.</p><p>The handling of data is accomplished in two ways. First, data is written to the data availability (DA) layer i.e. in this case Celestia, then the data commitment is written to the <code>op-batcher</code>. When reading <code>op-node</code> simply reads the data back from the DA layer by reading the data commitment from the <code>op-batcher</code> first, then reading the data from the DA layer using the data commitment. Hence, while previously <code>op-node</code> was reading from calldata on Ethereum, but now it reads data from Celestia.</p><p>There are a few tools involved in the data handling process. <code>op-batcher</code> batches up rollup blocks and posts them to Ethereum. <code>op-geth</code> handles execution, while <code>op-proposer</code> is responsible for state commitment submission.</p><p>By using Celestia as a DA layer, existing L2s can switch from posting their data as <code>calldata</code> on Ethereum, to posting to Celestia. The commitment to the block is posted on Celestia, which is purpose-built for data availability. This is a more scalable than the traditional method of posting this data as <code>calldata</code> on monolithic chains.</p><p>If you&#39;d like to go modular, bedrock has made it easy to swap this out!</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>Now that you understand the integration, you can start learning about the <a href="./bubs-testnet">Bubs testnet</a>, built with OP Stack and Celestia! This testnet is a great way to explore the possibilities of this integration and test your applications in a live environment.</p>',28),n=[s];function r(l,c,h,d,p,m){return e(),a("div",null,n)}const f=t(i,[["render",r]]);export{b as __pageData,f as default};
