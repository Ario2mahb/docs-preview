import{_ as a,o as n,c as o,Q as l,k as s}from"./chunks/framework.3a6818aa.js";const g=JSON.parse('{"title":"Deploy an Arbitrum rollup devnet","description":"A guide on how to install Arbitrum Nitro and deploy an instance on an Ubuntu AMD machine, including the installation of necessary dependencies, cloning the repository, and installing Nitro from source.","frontmatter":{"description":"A guide on how to install Arbitrum Nitro and deploy an instance on an Ubuntu AMD machine, including the installation of necessary dependencies, cloning the repository, and installing Nitro from source.","head":[["meta",{"name":"og:title","content":"Deploy an Arbitrum rollup devnet | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/arbitrum-deploy.md","filePath":"developers/arbitrum-deploy.md","lastUpdated":1710858532000}'),p={name:"developers/arbitrum-deploy.md"},e=l(`<h1 id="deploy-an-arbitrum-rollup-devnet" tabindex="-1">Deploy an Arbitrum rollup devnet <a class="header-anchor" href="#deploy-an-arbitrum-rollup-devnet" aria-label="Permalink to &quot;Deploy an Arbitrum rollup devnet&quot;">​</a></h1><p>We will go over installation of Arbitrum Nitro and deploying an instance on an Ubuntu AMD machine. This section covers all necessary dependencies needed to be installed.</p><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h2><ul><li><a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank" rel="noreferrer">Docker</a> running on your machine</li><li><a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04" target="_blank" rel="noreferrer">Docker Compose</a></li><li>At least 8 GB RAM</li></ul><h3 id="general" tabindex="-1">General <a class="header-anchor" href="#general" aria-label="Permalink to &quot;General&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upgrade</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clang</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pkg-config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libssl-dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cmake</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jq</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-essential</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ncdu</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upgrade</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">curl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clang</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pkg-config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libssl-dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cmake</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jq</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build-essential</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ncdu</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><h3 id="rust" tabindex="-1">Rust <a class="header-anchor" href="#rust" aria-label="Permalink to &quot;Rust&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--proto</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;=https&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--tlsv1.2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sSf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://sh.rustup.rs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sh</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/.cargo/env&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--proto</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;=https&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--tlsv1.2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-sSf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://sh.rustup.rs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sh</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/.cargo/env&quot;</span></span></code></pre></div><h3 id="golang" tabindex="-1">Golang <a class="header-anchor" href="#golang" aria-label="Permalink to &quot;Golang&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ver</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;1.20&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://golang.org/dl/go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.linux-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/go</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-xzf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.linux-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;go</span><span style="color:#E1E4E8;">$ver</span><span style="color:#9ECBFF;">.linux-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;export PATH=</span><span style="color:#E1E4E8;">$PATH</span><span style="color:#9ECBFF;">:/usr/local/go/bin:</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/go/bin&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.bash_profile</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.bash_profile</span></span>
<span class="line"><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ver</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;1.20&quot;</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://golang.org/dl/go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.linux-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/go</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-xzf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.linux-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;go</span><span style="color:#24292E;">$ver</span><span style="color:#032F62;">.linux-amd64.tar.gz&quot;</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;export PATH=</span><span style="color:#24292E;">$PATH</span><span style="color:#032F62;">:/usr/local/go/bin:</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/go/bin&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.bash_profile</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.bash_profile</span></span>
<span class="line"><span style="color:#6F42C1;">go</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span></span></code></pre></div><h3 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;Node&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bash</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> NVM_DIR</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;$([ </span><span style="color:#F97583;">-z</span><span style="color:#9ECBFF;"> &quot;\${</span><span style="color:#E1E4E8;">XDG_CONFIG_HOME-</span><span style="color:#9ECBFF;">}&quot; ] &amp;&amp; </span><span style="color:#79B8FF;">printf</span><span style="color:#9ECBFF;"> %s &quot;\${</span><span style="color:#E1E4E8;">HOME</span><span style="color:#9ECBFF;">}/.nvm&quot; </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">printf</span><span style="color:#9ECBFF;"> %s &quot;\${</span><span style="color:#E1E4E8;">XDG_CONFIG_HOME</span><span style="color:#9ECBFF;">}/nvm&quot;)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">[ </span><span style="color:#F97583;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$NVM_DIR</span><span style="color:#9ECBFF;">/nvm.sh&quot;</span><span style="color:#E1E4E8;"> ] &amp;&amp; </span><span style="color:#B392F0;">\\.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$NVM_DIR</span><span style="color:#9ECBFF;">/nvm.sh&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># This loads nvm</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">16.20</span><span style="color:#9ECBFF;">.0</span></span>
<span class="line"><span style="color:#B392F0;">nvm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">16.20</span><span style="color:#9ECBFF;">.0</span></span>
<span class="line"><span style="color:#B392F0;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--global</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bash</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> NVM_DIR</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;$([ </span><span style="color:#D73A49;">-z</span><span style="color:#032F62;"> &quot;\${</span><span style="color:#24292E;">XDG_CONFIG_HOME-</span><span style="color:#032F62;">}&quot; ] &amp;&amp; </span><span style="color:#005CC5;">printf</span><span style="color:#032F62;"> %s &quot;\${</span><span style="color:#24292E;">HOME</span><span style="color:#032F62;">}/.nvm&quot; </span><span style="color:#D73A49;">||</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">printf</span><span style="color:#032F62;"> %s &quot;\${</span><span style="color:#24292E;">XDG_CONFIG_HOME</span><span style="color:#032F62;">}/nvm&quot;)&quot;</span></span>
<span class="line"><span style="color:#24292E;">[ </span><span style="color:#D73A49;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$NVM_DIR</span><span style="color:#032F62;">/nvm.sh&quot;</span><span style="color:#24292E;"> ] &amp;&amp; </span><span style="color:#6F42C1;">\\.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$NVM_DIR</span><span style="color:#032F62;">/nvm.sh&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># This loads nvm</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16.20</span><span style="color:#032F62;">.0</span></span>
<span class="line"><span style="color:#6F42C1;">nvm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">16.20</span><span style="color:#032F62;">.0</span></span>
<span class="line"><span style="color:#6F42C1;">node</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--global</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span></span></code></pre></div><h3 id="other-dependencies" tabindex="-1">Other Dependencies <a class="header-anchor" href="#other-dependencies" aria-label="Permalink to &quot;Other Dependencies&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--force</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cbindgen</span></span>
<span class="line"><span style="color:#B392F0;">rustup</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wasm32-unknown-unknown</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--force</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cbindgen</span></span>
<span class="line"><span style="color:#6F42C1;">rustup</span><span style="color:#24292E;"> </span><span style="color:#032F62;">target</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wasm32-unknown-unknown</span></span></code></pre></div><h2 id="clone-the-repository" tabindex="-1">Clone the repository <a class="header-anchor" href="#clone-the-repository" aria-label="Permalink to &quot;Clone the repository&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/celestiaorg/nitro.git</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nitro/</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fetch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--all</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tags/v2.2.2-no-blobstream</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">submodule</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--init</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">submodule</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--recursive</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/celestiaorg/nitro.git</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nitro/</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fetch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--all</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tags/v2.2.2-no-blobstream</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">submodule</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--init</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">submodule</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--recursive</span></span></code></pre></div><h2 id="installing-nitro-from-source" tabindex="-1">Installing Nitro from Source <a class="header-anchor" href="#installing-nitro-from-source" aria-label="Permalink to &quot;Installing Nitro from Source&quot;">​</a></h2><p>Now you can install Nitro from source. After the <code>make</code> command completes, you can run the bash script that installs and runs the containers via docker-compose.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-node-deps</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nitro-testnode</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">./test-node.bash</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build-node-deps</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nitro-testnode</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">./test-node.bash</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dev</span></span></code></pre></div><p>Congratulations! You have an Arbitrum Orbit rollup running with Nitro on your machine.</p><h3 id="validating-with-wasm" tabindex="-1">Validating with WASM <a class="header-anchor" href="#validating-with-wasm" aria-label="Permalink to &quot;Validating with WASM&quot;">​</a></h3><p>If you want to run a validator that will validate all blocks in WASM, add the flag <code>--validate</code> to nitro-testnode when starting with:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./test-node.bash</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dev</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--validate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./test-node.bash</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dev</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--validate</span></span></code></pre></div>`,23),t=s("div",{class:"youtube-wrapper"},[s("iframe",{class:"youtube-video",title:"Arbitrum Nitro Rollup with Celestia as DA, validating blocks with WASM",src:"https://youtube.com/embed/xihXA3wkuLI",allowfullscreen:""})],-1),r=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"You may need significantly more RAM and CPU to validate all blocks with WASM. You'll also need to send transactions to generate new batches to be posted to Celestia!")],-1),c=[e,t,r];function y(E,i,F,d,u,h){return n(),o("div",null,c)}const m=a(p,[["render",y]]);export{g as __pageData,m as default};
