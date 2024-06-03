import{c as o}from"./chunks/constants.dc70dfe7.js";import{o as l,c as p,k as s,a,t as e,l as t,Q as n}from"./chunks/framework.ccd58aee.js";const c="/docs-preview/pr-1594/img/nodes/validator.png",r=n('<h1 id="setting-up-a-celestia-validator-node" tabindex="-1">Setting up a Celestia validator node <a class="header-anchor" href="#setting-up-a-celestia-validator-node" aria-label="Permalink to &quot;Setting up a Celestia validator node&quot;">​</a></h1><p>This tutorial will guide you through setting up a validator node on Celestia. Validator nodes allow you to participate in consensus in the Celestia network.</p><p><img src="'+c+`" alt="validator node"></p><h2 id="hardware-requirements" tabindex="-1">Hardware requirements <a class="header-anchor" href="#hardware-requirements" aria-label="Permalink to &quot;Hardware requirements&quot;">​</a></h2><p>The following hardware minimum requirements are recommended for running a validator node:</p><ul><li>Memory: <strong>8 GB RAM</strong></li><li>CPU: <strong>6 cores</strong></li><li>Disk: <strong>500 GB SSD Storage</strong></li><li>Bandwidth: <strong>1 Gbps for Download/1 Gbps for Upload</strong></li></ul><h2 id="setting-up-a-validator-node" tabindex="-1">Setting up a validator node <a class="header-anchor" href="#setting-up-a-validator-node" aria-label="Permalink to &quot;Setting up a validator node&quot;">​</a></h2><p>The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine.</p><p>First, follow the instructions on <a href="/docs-preview/pr-1594/nodes/full-consensus-node#setting-up-a-full-consensus-node">setting up a full consensus node</a>.</p><h3 id="wallet" tabindex="-1">Wallet <a class="header-anchor" href="#wallet" aria-label="Permalink to &quot;Wallet&quot;">​</a></h3><p>Follow <a href="./../nodes/celestia-app-wallet">the tutorial on creating a wallet</a>.</p><h3 id="delegate-stake-to-a-validator" tabindex="-1">Delegate stake to a validator <a class="header-anchor" href="#delegate-stake-to-a-validator" aria-label="Permalink to &quot;Delegate stake to a validator&quot;">​</a></h3><p>Create an environment variable for the address:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">VALIDATOR_WALLET</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">validator-wallet-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">VALIDATOR_WALLET</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">validator-wallet-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>If you want to delegate more stake to any validator, including your own you will need the <code>celesvaloper</code> address of the validator in question. You can run the command below to get the <code>celesvaloper</code> of your local validator wallet in case you want to delegate more to it:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> $VALIDATOR_WALLET </span><span style="color:#79B8FF;">--bech</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">val</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> $VALIDATOR_WALLET </span><span style="color:#005CC5;">--bech</span><span style="color:#24292E;"> </span><span style="color:#032F62;">val</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span></span></code></pre></div><p>After entering the wallet passphrase you should see a similar output:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Enter</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keyring</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">passphrase:</span></span>
<span class="line"><span style="color:#B392F0;">celesvaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u43cv6hd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Enter</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keyring</span><span style="color:#24292E;"> </span><span style="color:#032F62;">passphrase:</span></span>
<span class="line"><span style="color:#6F42C1;">celesvaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u43cv6hd</span></span></code></pre></div><p>To delegate tokens to the <code>celestiavaloper</code> validator, as an example you can run:</p>`,19),i={class:"language-bash vp-adaptive-theme"},d=s("button",{title:"Copy Code",class:"copy"},null,-1),_=s("span",{class:"lang"},"bash",-1),h={class:"shiki github-dark vp-code-dark"},u=n('<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">staking</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delegate</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),y=n('<span class="line"><span style="color:#E1E4E8;">celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p </span><span style="color:#79B8FF;">1000000</span><span style="color:#9ECBFF;">utia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),g={class:"line"},E=s("span",{style:{color:"#E1E4E8"}},"--from=$VALIDATOR_WALLET ",-1),m={style:{color:"#79B8FF"}},C=s("span",{style:{color:"#E1E4E8"}}," ",-1),F=s("span",{style:{color:"#79B8FF"}},"\\",-1),b=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"--fees=21000utia")],-1),T={class:"shiki github-light vp-code-light"},v=n('<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">staking</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delegate</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),k=n('<span class="line"><span style="color:#24292E;">celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p </span><span style="color:#005CC5;">1000000</span><span style="color:#032F62;">utia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),f={class:"line"},A=s("span",{style:{color:"#24292E"}},"--from=$VALIDATOR_WALLET ",-1),S={style:{color:"#005CC5"}},x=s("span",{style:{color:"#24292E"}}," ",-1),q=s("span",{style:{color:"#005CC5"}},"\\",-1),B=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"--fees=21000utia")],-1),I=n(`<p>If successful, you should see a similar output as:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">code: 0</span></span>
<span class="line"><span style="color:#79B8FF;">codespace: &quot;&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">data: &quot;&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">gas_used: &quot;0&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">gas_wanted: &quot;0&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">height: &quot;0&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">info: &quot;&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">logs: []</span></span>
<span class="line"><span style="color:#79B8FF;">raw_log: &#39;[]&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">timestamp: &quot;&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">tx: null</span></span>
<span class="line"><span style="color:#79B8FF;">txhash: &lt;tx-hash&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">code: 0</span></span>
<span class="line"><span style="color:#005CC5;">codespace: &quot;&quot;</span></span>
<span class="line"><span style="color:#005CC5;">data: &quot;&quot;</span></span>
<span class="line"><span style="color:#005CC5;">gas_used: &quot;0&quot;</span></span>
<span class="line"><span style="color:#005CC5;">gas_wanted: &quot;0&quot;</span></span>
<span class="line"><span style="color:#005CC5;">height: &quot;0&quot;</span></span>
<span class="line"><span style="color:#005CC5;">info: &quot;&quot;</span></span>
<span class="line"><span style="color:#005CC5;">logs: []</span></span>
<span class="line"><span style="color:#005CC5;">raw_log: &#39;[]&#39;</span></span>
<span class="line"><span style="color:#005CC5;">timestamp: &quot;&quot;</span></span>
<span class="line"><span style="color:#005CC5;">tx: null</span></span>
<span class="line"><span style="color:#005CC5;">txhash: &lt;tx-hash&gt;</span></span></code></pre></div><p>You can check if the TX hash went through using the block explorer by inputting the <code>txhash</code> ID that was returned.</p><h2 id="optional-deploy-the-celestia-node" tabindex="-1">Optional: Deploy the celestia-node <a class="header-anchor" href="#optional-deploy-the-celestia-node" aria-label="Permalink to &quot;Optional: Deploy the celestia-node&quot;">​</a></h2><p>Running a bridge node is critical to the Celestia network as it enables the data availability and consensus nodes to communicate with one another. It is recommended to support the data availability network, but is not required for <code>celestia-app</code>.</p><p>If you are not running a bridge node, you can skip to <a href="#run-the-validator-node">run a validator node</a>.</p><p>This section describes part 2 of Celestia validator node setup: running a Celestia bridge node daemon.</p><h3 id="install-celestia-node" tabindex="-1">Install celestia-node <a class="header-anchor" href="#install-celestia-node" aria-label="Permalink to &quot;Install celestia-node&quot;">​</a></h3><p>You can <a href="./celestia-node">follow the tutorial for installing <code>celestia-node</code></a></p><h3 id="initialize-the-bridge-node" tabindex="-1">Initialize the bridge node <a class="header-anchor" href="#initialize-the-bridge-node" aria-label="Permalink to &quot;Initialize the bridge node&quot;">​</a></h3><p>Run the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">UR</span><span style="color:#E1E4E8;">I</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">UR</span><span style="color:#24292E;">I</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Refer to <a href="./../../nodes/celestia-node-troubleshooting/#ports">the ports section of the celestia-node troubleshooting page</a> for information on which ports are required to be open on your machine.</p></div><p>If you need a list of RPC endpoints to connect to, you can find the <a href="./mocha-testnet#rpc-endpoints">list on the Mocha testnet page</a> or <a href="./arabica-devnet#rpc-endpoints">list on the Arabica devnet page</a>.</p><h3 id="run-the-bridge-node" tabindex="-1">Run the bridge node <a class="header-anchor" href="#run-the-bridge-node" aria-label="Permalink to &quot;Run the bridge node&quot;">​</a></h3><p>Run the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span></code></pre></div><h4 id="optional-start-the-bridge-node-with-systemd" tabindex="-1">Optional: start the bridge node with SystemD <a class="header-anchor" href="#optional-start-the-bridge-node-with-systemd" aria-label="Permalink to &quot;Optional: start the bridge node with SystemD&quot;">​</a></h4><p>Follow <a href="./../systemd">the tutorial on setting up the bridge node as a background process with SystemD</a>.</p><p>You have successfully set up a bridge node that is syncing with the network.</p><h2 id="run-the-validator-node" tabindex="-1">Run the validator node <a class="header-anchor" href="#run-the-validator-node" aria-label="Permalink to &quot;Run the validator node&quot;">​</a></h2><p>In order to start your validator node, run the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span></code></pre></div><p>After completing all the necessary steps, you are now ready to run a validator! In order to create your validator onchain, follow the instructions below. Keep in mind that these steps are necessary ONLY if you want to participate in the consensus.</p><p>Pick a <code>moniker</code> name of your choice! This is the validator name that will show up on public dashboards and explorers. <code>VALIDATOR_WALLET</code> must be the same you defined previously. Parameter <code>--min-self-delegation=1000000</code> defines the amount of tokens that are self delegated from your validator wallet.</p><p>Now, connect to the network of your choice.</p><p>You have the following option of connecting to list of networks shown below:</p><p>Continuing the validator tutorial, here are the steps to connect your validator to Mocha:</p>`,28),w={class:"language-bash vp-adaptive-theme"},P=s("button",{title:"Copy Code",class:"copy"},null,-1),V=s("span",{class:"lang"},"bash",-1),R={class:"shiki github-dark vp-code-dark"},D=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"MONIKER"),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#9ECBFF"}},'"your_moniker"')],-1),N=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"VALIDATOR_WALLET"),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#9ECBFF"}},'"validator"')],-1),L=s("span",{class:"line"},null,-1),O=n('<span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">staking</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create-validator</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),W=n('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--amount=1000000utia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),z=n('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--pubkey=</span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">celestia-appd</span><span style="color:#9ECBFF;"> tendermint show-validator)</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),M=n('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--moniker=</span><span style="color:#E1E4E8;">$MONIKER</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),U={class:"line"},$=s("span",{style:{color:"#E1E4E8"}},"    ",-1),Y={style:{color:"#79B8FF"}},H=s("span",{style:{color:"#E1E4E8"}}," ",-1),K=s("span",{style:{color:"#79B8FF"}},"\\",-1),G=n('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--commission-rate=0.1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),Q=n('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--commission-max-rate=0.2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),j=n('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--commission-max-change-rate=0.01</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),J=n('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--min-self-delegation=1000000</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),X=n('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--from=</span><span style="color:#E1E4E8;">$VALIDATOR_WALLET</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),Z=n('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--keyring-backend=test</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),ss=n('<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--fees=21000utia</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>',1),as=s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"--gas=220000")],-1),ns={class:"shiki github-light vp-code-light"},os=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"MONIKER"),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#032F62"}},'"your_moniker"')],-1),es=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"VALIDATOR_WALLET"),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#032F62"}},'"validator"')],-1),ts=s("span",{class:"line"},null,-1),ls=n('<span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">staking</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create-validator</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),ps=n('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--amount=1000000utia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),cs=n('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--pubkey=</span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">celestia-appd</span><span style="color:#032F62;"> tendermint show-validator)</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),rs=n('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--moniker=</span><span style="color:#24292E;">$MONIKER</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),is={class:"line"},ds=s("span",{style:{color:"#24292E"}},"    ",-1),_s={style:{color:"#005CC5"}},hs=s("span",{style:{color:"#24292E"}}," ",-1),us=s("span",{style:{color:"#005CC5"}},"\\",-1),ys=n('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--commission-rate=0.1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),gs=n('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--commission-max-rate=0.2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),Es=n('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--commission-max-change-rate=0.01</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),ms=n('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--min-self-delegation=1000000</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),Cs=n('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--from=</span><span style="color:#24292E;">$VALIDATOR_WALLET</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),Fs=n('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--keyring-backend=test</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),bs=n('<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--fees=21000utia</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>',1),Ts=s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"--gas=220000")],-1),vs=n(`<p>You will be prompted to confirm the transaction:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">confirm transaction before signing and broadcasting [y/N]: y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">confirm transaction before signing and broadcasting [y/N]: y</span></span></code></pre></div><p>Inputting <code>y</code> should provide an output similar to:</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">code: 0</span></span>
<span class="line"><span style="color:#79B8FF;">codespace: &quot;&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">data: &quot;&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">gas_used: &quot;0&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">gas_wanted: &quot;0&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">height: &quot;0&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">info: &quot;&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">logs: []</span></span>
<span class="line"><span style="color:#79B8FF;">raw_log: &#39;[]&#39;</span></span>
<span class="line"><span style="color:#79B8FF;">timestamp: &quot;&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">tx: null</span></span>
<span class="line"><span style="color:#79B8FF;">txhash: &lt;tx-hash&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">code: 0</span></span>
<span class="line"><span style="color:#005CC5;">codespace: &quot;&quot;</span></span>
<span class="line"><span style="color:#005CC5;">data: &quot;&quot;</span></span>
<span class="line"><span style="color:#005CC5;">gas_used: &quot;0&quot;</span></span>
<span class="line"><span style="color:#005CC5;">gas_wanted: &quot;0&quot;</span></span>
<span class="line"><span style="color:#005CC5;">height: &quot;0&quot;</span></span>
<span class="line"><span style="color:#005CC5;">info: &quot;&quot;</span></span>
<span class="line"><span style="color:#005CC5;">logs: []</span></span>
<span class="line"><span style="color:#005CC5;">raw_log: &#39;[]&#39;</span></span>
<span class="line"><span style="color:#005CC5;">timestamp: &quot;&quot;</span></span>
<span class="line"><span style="color:#005CC5;">tx: null</span></span>
<span class="line"><span style="color:#005CC5;">txhash: &lt;tx-hash&gt;</span></span></code></pre></div><p>You should now be able to see your validator from <a href="./mocha-testnet#explorers">a block explorer</a></p><h2 id="submit-your-validator-information" tabindex="-1">Submit your validator information <a class="header-anchor" href="#submit-your-validator-information" aria-label="Permalink to &quot;Submit your validator information&quot;">​</a></h2><p>After starting your node, please submit your node as a seed and peer to the <a href="https://github.com/celestiaorg/networks" target="_blank" rel="noreferrer">networks repository</a>.</p><h2 id="optional-transaction-indexer-configuration-options" tabindex="-1">Optional: Transaction indexer configuration options <a class="header-anchor" href="#optional-transaction-indexer-configuration-options" aria-label="Permalink to &quot;Optional: Transaction indexer configuration options&quot;">​</a></h2><p>Follow the instructions under <a href="/docs-preview/pr-1594/nodes/full-consensus-node#optional-transaction-indexer-configuration-options">transaction indexer configuration options</a> to configure your <code>config.toml</code> file to select which transactions to index.</p><h2 id="additional-resources" tabindex="-1">Additional resources <a class="header-anchor" href="#additional-resources" aria-label="Permalink to &quot;Additional resources&quot;">​</a></h2><p>For additional resources, refer to <a href="./full-consensus-node#extra-resources-for-consensus-nodes">the extra resources for consensus nodessection of the full consensus node page</a>.</p><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="_2-3-committed-an-invalid-block-wrong-block-header-version" tabindex="-1"><code>+2/3 committed an invalid block: wrong Block.Header.Version</code> <a class="header-anchor" href="#_2-3-committed-an-invalid-block-wrong-block-header-version" aria-label="Permalink to &quot;\`+2/3 committed an invalid block: wrong Block.Header.Version\`&quot;">​</a></h3><p>If you encounter an error like:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">2024-04-25</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">14</span><span style="color:#9ECBFF;">:48:24</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#9ECBFF;">:48PM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ERR</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">CONSENSUS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">FAILURE!!!</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">err=&quot;+2/3 committed an invalid block: wrong Block.Header.Version. Expected {11 1}, got {11 2}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">module=consensus</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stack=&quot;goroutine 214 [running]:\\nruntime/debug.Stack()\\n\\t/usr/local/go/src/runtime/debug/stack.go:24 +0x64\\ngithub.com/tendermint/tendermint/consensus.(*State).receiveRoutine.func2()\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:746 +0x44\\npanic({0x1b91180?, 0x400153b240?})\\n\\t/usr/local/go/src/runtime/panic.go:770 +0x124\\ngithub.com/tendermint/tendermint/consensus.(*State).finalizeCommit(0x400065ea88, 0x3)\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:1637 +0xd30\\ngithub.com/tendermint/tendermint/consensus.(*State).tryFinalizeCommit(0x400065ea88, 0x3)\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:1606 +0x26c\\ngithub.com/tendermint/tendermint/consensus.(*State).handleCompleteProposal(0x400065ea88, 0x3)\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:2001 +0x2d8\\ngithub.com/tendermint/tendermint/consensus.(*State).handleMsg(0x400065ea88, {{0x2b30a00, 0x400143e048}, {0x40002a61b0, 0x28}})\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:856 +0x1c8\\ngithub.com/tendermint/tendermint/consensus.(*State).receiveRoutine(0x400065ea88, 0x0)\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:782 +0x2c4\\ncreated by github.com/tendermint/tendermint/consensus.(*State).OnStart in goroutine 169\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:391 +0x110\\n&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">2024-04-25</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">14</span><span style="color:#032F62;">:48:24</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#032F62;">:48PM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ERR</span><span style="color:#24292E;"> </span><span style="color:#032F62;">CONSENSUS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">FAILURE!!!</span><span style="color:#24292E;"> </span><span style="color:#032F62;">err=&quot;+2/3 committed an invalid block: wrong Block.Header.Version. Expected {11 1}, got {11 2}&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">module=consensus</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stack=&quot;goroutine 214 [running]:\\nruntime/debug.Stack()\\n\\t/usr/local/go/src/runtime/debug/stack.go:24 +0x64\\ngithub.com/tendermint/tendermint/consensus.(*State).receiveRoutine.func2()\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:746 +0x44\\npanic({0x1b91180?, 0x400153b240?})\\n\\t/usr/local/go/src/runtime/panic.go:770 +0x124\\ngithub.com/tendermint/tendermint/consensus.(*State).finalizeCommit(0x400065ea88, 0x3)\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:1637 +0xd30\\ngithub.com/tendermint/tendermint/consensus.(*State).tryFinalizeCommit(0x400065ea88, 0x3)\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:1606 +0x26c\\ngithub.com/tendermint/tendermint/consensus.(*State).handleCompleteProposal(0x400065ea88, 0x3)\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:2001 +0x2d8\\ngithub.com/tendermint/tendermint/consensus.(*State).handleMsg(0x400065ea88, {{0x2b30a00, 0x400143e048}, {0x40002a61b0, 0x28}})\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:856 +0x1c8\\ngithub.com/tendermint/tendermint/consensus.(*State).receiveRoutine(0x400065ea88, 0x0)\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:782 +0x2c4\\ncreated by github.com/tendermint/tendermint/consensus.(*State).OnStart in goroutine 169\\n\\t/go/pkg/mod/github.com/celestiaorg/celestia-core@v1.35.0-tm-v0.34.29/consensus/state.go:391 +0x110\\n&quot;</span></span></code></pre></div><p>then it is likely that the network has upgraded to a new app version but your consensus node was not prepared for the upgrade. To fix this, you&#39;ll need to update your binary to the latest version and restart your node with the relevant <code>--v2-upgrade-height</code> for the network you&#39;re running on. If your node still can&#39;t sync to the tip of the chain after the above steps, consider a <code>celestia-appd tendermint unsafe-reset-all</code> to reset your node and start syncing from the genesis block.</p>`,16),Bs=JSON.parse('{"title":"Setting up a Celestia validator node","description":"Learn how to set up a Celestia validator node.","frontmatter":{"description":"Learn how to set up a Celestia validator node.","outline":"deep","head":[["meta",{"name":"og:title","content":"Setting up a Celestia validator node | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/validator-node.md","filePath":"nodes/validator-node.md","lastUpdated":1717430123000}'),ks={name:"nodes/validator-node.md"},Is=Object.assign(ks,{setup(fs){return(As,Ss)=>(l(),p("div",null,[r,s("div",i,[d,_,s("pre",h,[s("code",null,[u,a(`
`),y,a(`
`),s("span",g,[E,s("span",m,"--chain-id="+e(t(o).mochaChainId),1),C,F]),a(`
`),b])]),s("pre",T,[s("code",null,[v,a(`
`),k,a(`
`),s("span",f,[A,s("span",S,"--chain-id="+e(t(o).mochaChainId),1),x,q]),a(`
`),B])])]),I,s("div",w,[P,V,s("pre",R,[s("code",null,[D,a(`
`),N,a(`
`),L,a(`
`),O,a(`
`),W,a(`
`),z,a(`
`),M,a(`
`),s("span",U,[$,s("span",Y,"--chain-id="+e(t(o).mochaChainId),1),H,K]),a(`
`),G,a(`
`),Q,a(`
`),j,a(`
`),J,a(`
`),X,a(`
`),Z,a(`
`),ss,a(`
`),as])]),s("pre",ns,[s("code",null,[os,a(`
`),es,a(`
`),ts,a(`
`),ls,a(`
`),ps,a(`
`),cs,a(`
`),rs,a(`
`),s("span",is,[ds,s("span",_s,"--chain-id="+e(t(o).mochaChainId),1),hs,us]),a(`
`),ys,a(`
`),gs,a(`
`),Es,a(`
`),ms,a(`
`),Cs,a(`
`),Fs,a(`
`),bs,a(`
`),Ts])])]),vs]))}});export{Bs as __pageData,Is as default};
