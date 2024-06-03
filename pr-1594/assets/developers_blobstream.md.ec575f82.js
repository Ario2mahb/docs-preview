import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.ccd58aee.js";const r="/docs-preview/pr-1594/img/blobstream/blobstream_logo.png",s="/docs-preview/pr-1594/img/blobstream/Celestia_Blobstream_X1b.png",i="/docs-preview/pr-1594/img/blobstream/Celestia_Blobstream_X2b.png",y=JSON.parse('{"title":"Blobstream: Streaming modular DA to Ethereum","description":"Learn how to integrate your L2 with Blobstream","frontmatter":{"description":"Learn how to integrate your L2 with Blobstream","head":[["meta",{"name":"og:title","content":"Blobstream: Streaming modular DA to Ethereum | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/blobstream.md","filePath":"developers/blobstream.md","lastUpdated":1717430123000}'),l={name:"developers/blobstream.md"},n=o('<h1 id="blobstream-streaming-modular-da-to-ethereum" tabindex="-1">Blobstream: Streaming modular DA to Ethereum <a class="header-anchor" href="#blobstream-streaming-modular-da-to-ethereum" aria-label="Permalink to &quot;Blobstream: Streaming modular DA to Ethereum&quot;">​</a></h1><p><img src="'+r+'" alt="Blobstream logo"></p><h2 id="what-is-blobstream" tabindex="-1">What is Blobstream? <a class="header-anchor" href="#what-is-blobstream" aria-label="Permalink to &quot;What is Blobstream?&quot;">​</a></h2><p><a href="https://blog.celestia.org/introducing-blobstream/" target="_blank" rel="noreferrer">Blobstream</a> is the first data availability solution for Ethereum that securely scales with the number of users. Formerly known as the <a href="https://blog.celestia.org/celestiums/" target="_blank" rel="noreferrer">Quantum Gravity Bridge (QGB)</a>, Blobstream relays commitments to Celestia&#39;s data root to an onchain light client on Ethereum, for integration by developers into L2 contracts. This enables Ethereum developers to build high-throughput L2s using Celestia&#39;s optimised DA layer, the first with Data Availability Sampling (DAS). Any ecosystem can deploy a Blobstream light client onchain to allow L2s and L3s to access DA from Celestia.</p><p>An implementation of Blobstream, by <a href="https://docs.succinct.xyz/" target="_blank" rel="noreferrer">Succinct</a>, called <a href="https://github.com/succinctlabs/blobstreamx" target="_blank" rel="noreferrer">Blobstream X</a>, is out and will be used in the upcoming deployments. This implementation proves the validity of Celestia block headers on a target EVM chain using zero-knowledge (ZK) proofs, which allow inheriting all the security guarantees of Celestia.</p><p>Please note: Blobstream remains early-stage, experimental software and users should use Blobstream at their own risk.</p><h2 id="blobstream-vs-data-availability-committees-dacs" tabindex="-1">Blobstream vs. data availability committees (DACs) <a class="header-anchor" href="#blobstream-vs-data-availability-committees-dacs" aria-label="Permalink to &quot;Blobstream vs. data availability committees (DACs)&quot;">​</a></h2><h3 id="decentralization-and-security" tabindex="-1">Decentralization and security <a class="header-anchor" href="#decentralization-and-security" aria-label="Permalink to &quot;Decentralization and security&quot;">​</a></h3><p>Blobstream is built on Celestia, which uses a CometBFT-based proof-of-stake system. Blobstream shares the same security assumptions as Celestia. In contrast, data availability committees (DACs), are typically centralized or semi-centralized, relying on a specific set of entities or individuals to vouch for data availability.</p><h3 id="mechanism-of-verification" tabindex="-1">Mechanism of verification <a class="header-anchor" href="#mechanism-of-verification" aria-label="Permalink to &quot;Mechanism of verification&quot;">​</a></h3><p>Blobstream uses data availability attestations, which are Merkle roots of the batched L2 data, to confirm that the necessary data is present on Celestia. The L2 contract on Ethereum can check directly with Blobstream if the data is published on Celestia. Similarly, a DAC would rely on attestations or confirmations from its permissioned members.</p><h3 id="flexibility-and-scalability" tabindex="-1">Flexibility and scalability <a class="header-anchor" href="#flexibility-and-scalability" aria-label="Permalink to &quot;Flexibility and scalability&quot;">​</a></h3><p>Blobstream is designed to offer high-throughput data availability for Ethereum L2s, aiming to strike a balance between scalability and security. It operates independently of Ethereum&#39;s gas costs, as Celestia&#39;s resource pricing is more byte-focused rather than computation-centric. On the other hand, the scalability and flexibility of a DAC would depend on its specific design and implementation.</p><p>In summary, both Blobstream and DACs aim to ensure offchain data availability, but Blobstream offers a more decentralized, secure, and scalable solution compared to the potential centralized nature of DACs.</p><h2 id="what-is-blobstream-x" tabindex="-1">What is Blobstream X? <a class="header-anchor" href="#what-is-blobstream-x" aria-label="Permalink to &quot;What is Blobstream X?&quot;">​</a></h2><p>Blobstream X is an implementation of Blobstream with a ZK light client that bridges Celestia’s modular DA layer to Ethereum to allow high-throughput rollups to use Celestia’s DA while settling on Ethereum.</p><p>Optimistic or ZK rollups that settle on Ethereum, but wish to use Celestia for DA, require a mechanism for <em>bridging</em> Celestia’s data root to Ethereum as part of the settlement process. This data root is used during inclusion proofs to prove that particular rollup transactions were included and made available in the Celestia network.</p><p>Bridging Celestia’s data root to Ethereum requires running a Celestia <em>light client</em> as a smart contract on Ethereum, to make the latest state of the Celestia chain known on Ethereum and available to rollups. Blobstream X utilizes the latest advances in ZK proofs to generate a <em>succinct proof</em> that enough Celestia validators have come to consensus (according to the CometBFT consensus protocol) on a block header, and verifies this proof in the Blobstream X Ethereum smart contract to update it with the latest Celestia header.</p><p>The Blobstream X ZK proof not only verifies the consensus of Celestia validators, but it also merkelizes and hashes all the data roots in the block range from the previous update to the current update, making accessible all Celestia data roots (verifiable with a Merkle inclusion proof against the stored Merkle root) to rollups.</p><p>Blobstream X is built and deployed with <a href="https://docs.succinct.xyz" target="_blank" rel="noreferrer">Succinct&#39;s protocol</a>.</p><p><img src="'+s+'" alt="blobstream x draft diagram"></p><h2 id="integrate-with-blobstream-x" tabindex="-1">Integrate with Blobstream X <a class="header-anchor" href="#integrate-with-blobstream-x" aria-label="Permalink to &quot;Integrate with Blobstream X&quot;">​</a></h2><p>The following docs go over how developers can integrate Blobstream X.</p><p>You can <a href="https://github.com/succinctlabs/blobstreamx" target="_blank" rel="noreferrer">find the repository for Blobstream X</a> along with code for:</p><ul><li><a href="https://github.com/succinctlabs/blobstreamx/blob/main/contracts/src/BlobstreamX.sol" target="_blank" rel="noreferrer">The Blobstream X smart contract - <code>BlobstreamX.sol</code></a></li><li><a href="https://alpha.succinct.xyz/celestia/blobstreamx" target="_blank" rel="noreferrer">The Blobstream X circuits</a></li><li><a href="https://github.com/succinctlabs/blobstreamx/blob/main/bindings/BlobstreamX.go" target="_blank" rel="noreferrer">The Blobstream X contract Golang bindings</a></li></ul><p>The first deployments of Blobstream X will be maintained on the following chains: Arbitrum One, Base and Ethereum Mainnet. Every 1 hour, the prover/relayer will post an update to the Blobstream X contract that will include a new data commitment range that covers a 1-hour block range from the <code>latestBlock</code> in the Blobstream X contract. On Ethereum Mainnet, the Blobstream X contract will be updated every 4 hours.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Custom ranges can be requested using the <code>BlobstreamX</code> contract to create proofs for specific Celestia block batches. These ranges can be constructed as <code>[latestBlock, customTargetBlock)</code>, with <code>latestBlock</code> as the latest block height that was committed to by the <code>BlobstreamX</code> contract, and <code>latestBlock &gt; customTargetBlock</code>, and <code>customTargetBlock - latestBlock &lt;= DATA_COMMITMENT_MAX</code>.</p><p>Block ranges that are before the contract&#39;s <code>latestBlock</code> can&#39;t be proven a second time in different batches.</p><p>More information can be found in the <a href="https://github.com/succinctlabs/blobstreamx/blob/364d3dc8c8dc9fd44b6f9f049cfb18479e56cec4/contracts/src/BlobstreamX.sol#L78-L101" target="_blank" rel="noreferrer"><code>requestHeaderRange(...)</code></a> method.</p></div><h3 id="how-blobstream-x-works" tabindex="-1">How Blobstream X works <a class="header-anchor" href="#how-blobstream-x-works" aria-label="Permalink to &quot;How Blobstream X works&quot;">​</a></h3><p>As shown in the diagram below, the entrypoint for updates to the Blobstream X contract is through the <code>SuccinctGateway</code> smart contract, which is a simple entrypoint contract that verifies proofs (against a deployed onchain verifier for the Blobstream X circuit) and then calls the <code>BlobstreamX.sol</code> contract to update it. <a href="https://docs.succinct.xyz/platform/onchain-integration#succinct-gateway" target="_blank" rel="noreferrer">Find more information about the <code>SuccinctGateway</code></a>.</p><p><img src="'+i+'" alt="blobstream x overview diagram draft"></p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If the Blobstream X contract is not deployed on a desired chain, it needs to be deployed before it can be used by your rollup. See the <a href="https://docs.succinct.xyz/platform/onchain-integration#gateway-deployment" target="_blank" rel="noreferrer">deployment documentation</a> for more details.</p></div><h3 id="how-to-integrate-with-blobstream-x" tabindex="-1">How to integrate with Blobstream X <a class="header-anchor" href="#how-to-integrate-with-blobstream-x" aria-label="Permalink to &quot;How to integrate with Blobstream X&quot;">​</a></h3><p>Integrating your L2 with Blobstream X requires two components: your <a href="./blobstream-contracts">onchain smart contract logic</a>, and your <a href="./blobstream-offchain">offchain client logic for your rollup</a>. The next three sections cover these topics:</p><ul><li><a href="./blobstream-contracts">Integrate with Blobstream contracts</a></li><li><a href="./blobstream-offchain">Integrate with Blobstream client</a></li><li><a href="./blobstream-proof-queries">Querying the Blobstream proofs</a></li></ul><h3 id="blobstream-rollups" tabindex="-1">Blobstream rollups <a class="header-anchor" href="#blobstream-rollups" aria-label="Permalink to &quot;Blobstream rollups&quot;">​</a></h3><p>More on the different ways to build a blobstream rollup can be found in the <a href="./blobstream-rollups">blobstream rollups</a> documentation.</p><h3 id="deployed-contracts" tabindex="-1">Deployed contracts <a class="header-anchor" href="#deployed-contracts" aria-label="Permalink to &quot;Deployed contracts&quot;">​</a></h3><p>You can interact with the Blobstream X contracts today. The Blobstream X Solidity smart contracts are currently deployed on the following chains:</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Blobstream X is in beta and slashing is not enabled yet.</p></div><table><thead><tr><th>Contract</th><th>EVM network</th><th>Contract address</th><th>Attested data on Celestia</th><th>Link to Celenium</th></tr></thead><tbody><tr><td>Blobstream X</td><td>Ethereum Mainnet</td><td><a href="https://etherscan.io/address/0xTODO" target="_blank" rel="noreferrer"><code>Not yet deployed</code></a></td><td><a href="./../nodes/mainnet">Mainnet Beta</a></td><td>Coming soon</td></tr><tr><td>Blobstream X</td><td>Arbitrum One</td><td><a href="https://arbiscan.io/address/0xA83ca7775Bc2889825BcDeDfFa5b758cf69e8794#events" target="_blank" rel="noreferrer"><code>0xA83ca7775Bc2889825BcDeDfFa5b758cf69e8794</code></a></td><td><a href="./../nodes/mainnet">Mainnet Beta</a></td><td><a href="https://celenium.io/blobstream?network=arbitrum&amp;page=1" target="_blank" rel="noreferrer">Deployment on Celenium</a></td></tr><tr><td>Blobstream X</td><td>Base</td><td><a href="https://basescan.org/address/0xA83ca7775Bc2889825BcDeDfFa5b758cf69e8794#events" target="_blank" rel="noreferrer"><code>0xA83ca7775Bc2889825BcDeDfFa5b758cf69e8794</code></a></td><td><a href="./../nodes/mainnet">Mainnet Beta</a></td><td><a href="https://celenium.io/blobstream?network=base&amp;page=1" target="_blank" rel="noreferrer">Deployment on Celenium</a></td></tr><tr><td>Blobstream X</td><td>Sepolia</td><td><a href="https://sepolia.etherscan.io/address/0xf0c6429ebab2e7dc6e05dafb61128be21f13cb1e#events" target="_blank" rel="noreferrer"><code>0xf0c6429ebab2e7dc6e05dafb61128be21f13cb1e</code></a></td><td><a href="./../nodes/mocha-testnet">Mocha testnet</a></td><td><a href="https://mocha-4.celenium.io/blobstream?network=ethereum&amp;page=1" target="_blank" rel="noreferrer">Deployment on Celenium</a></td></tr><tr><td>Blobstream X</td><td>Arbitrum Sepolia</td><td><a href="https://sepolia.arbiscan.io/address/0xc3e209eb245Fd59c8586777b499d6A665DF3ABD2#events" target="_blank" rel="noreferrer"><code>0xc3e209eb245Fd59c8586777b499d6A665DF3ABD2</code></a></td><td><a href="./../nodes/mocha-testnet">Mocha testnet</a></td><td><a href="https://mocha-4.celenium.io/blobstream?network=arbitrum&amp;page=1" target="_blank" rel="noreferrer">Deployment on Celenium</a></td></tr><tr><td>Blobstream X</td><td>Base Sepolia</td><td><a href="https://sepolia.basescan.org/address/0xc3e209eb245Fd59c8586777b499d6A665DF3ABD2#events" target="_blank" rel="noreferrer"><code>0xc3e209eb245Fd59c8586777b499d6A665DF3ABD2</code></a></td><td><a href="./../nodes/mocha-testnet">Mocha testnet</a></td><td><a href="https://mocha-4.celenium.io/blobstream?network=base&amp;page=1" target="_blank" rel="noreferrer">Deployment on Celenium</a></td></tr></tbody></table><h2 id="deploy-blobstream-x" tabindex="-1">Deploy Blobstream X <a class="header-anchor" href="#deploy-blobstream-x" aria-label="Permalink to &quot;Deploy Blobstream X&quot;">​</a></h2><p>If your target chain is <a href="#deployed-contracts">still not supported</a>, it is possible to deploy and maintain a Blobstream x instance and have the same security guarantees.</p><p>First, you will need to create a multisig that governs the Blobstream X contract and also the function identifiers. The function identifiers can be registered in the <a href="https://docs.succinct.xyz/platform/onchain-integration#gateway-deployment" target="_blank" rel="noreferrer">succinct gateway</a>.</p><p>Then, check the <a href="https://github.com/succinctlabs/blobstreamx/blob/main/README.md#blobstreamx-contract-overview" target="_blank" rel="noreferrer">deployment</a> documentation for how to deploy the contract.</p><p>Then, you will need to run a relayer, which will generate the proofs and relay them to your deployed Blobstream X contract. Check the <a href="./blobstream-x-requesting-data-commitment-ranges#local-proving">local proving documentation</a> for more information.</p>',45),c=[n];function d(h,b,m,p,u,f){return t(),a("div",null,c)}const B=e(l,[["render",d]]);export{y as __pageData,B as default};
