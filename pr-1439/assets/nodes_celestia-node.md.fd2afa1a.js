import{a as n}from"./chunks/arabica_versions.9b63109e.js";import{m as l}from"./chunks/mocha_versions.d59b78bc.js";import{m as i}from"./chunks/mainnet_versions.a17f37d5.js";import{o as c,c as p,k as s,t as e,l as a,a as t,Q as o}from"./chunks/framework.5cdbaf35.js";const d=s("h1",{id:"install-celestia-node",tabindex:"-1"},[t("Install celestia-node "),s("a",{class:"header-anchor",href:"#install-celestia-node","aria-label":'Permalink to "Install celestia-node"'},"​")],-1),r=s("p",null,[t("This tutorial goes over building and installing celestia-node. This tutorial assumes you completed the steps in "),s("a",{href:"./environment"},"setting up your development environment"),t(".")],-1),h=s("p",null,"Install the celestia-node binary by running the following commands:",-1),_=o(`<li><p>Remove any existing copy of celestia-node, clone the repository, and change into the directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-node</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/celestiaorg/celestia-node.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-node/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-node</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/celestiaorg/celestia-node.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-node/</span></span></code></pre></div></li>`,1),y=s("p",null,"Check out to the desired version, based on the network you will use:",-1),u={class:"vp-code-group vp-adaptive-theme"},g=o('<div class="tabs"><input type="radio" name="group-J7WFs" id="tab-s5nGoFE" checked="checked"><label for="tab-s5nGoFE">Mainnet Beta</label><input type="radio" name="group-J7WFs" id="tab-Txxdm0T"><label for="tab-Txxdm0T">Mocha</label><input type="radio" name="group-J7WFs" id="tab-Ii_JAfZ"><label for="tab-Ii_JAfZ">Arabica</label></div>',1),b={class:"blocks"},v={class:"language-bash vp-adaptive-theme active"},E=s("button",{title:"Copy Code",class:"copy"},null,-1),m=s("span",{class:"lang"},"bash",-1),F={class:"shiki github-dark vp-code-dark"},k={class:"line"},C=s("span",{style:{color:"#B392F0"}},"git",-1),f=s("span",{style:{color:"#E1E4E8"}}," ",-1),B=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),T=s("span",{style:{color:"#E1E4E8"}}," ",-1),I={style:{color:"#9ECBFF"}},x={class:"shiki github-light vp-code-light"},A={class:"line"},w=s("span",{style:{color:"#6F42C1"}},"git",-1),S=s("span",{style:{color:"#24292E"}}," ",-1),P=s("span",{style:{color:"#032F62"}},"checkout",-1),V=s("span",{style:{color:"#24292E"}}," ",-1),N={style:{color:"#032F62"}},R={class:"language-bash vp-adaptive-theme"},O=s("button",{title:"Copy Code",class:"copy"},null,-1),J=s("span",{class:"lang"},"bash",-1),D={class:"shiki github-dark vp-code-dark"},M={class:"line"},Z=s("span",{style:{color:"#B392F0"}},"git",-1),j=s("span",{style:{color:"#E1E4E8"}}," ",-1),L=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),q=s("span",{style:{color:"#E1E4E8"}}," ",-1),G={style:{color:"#9ECBFF"}},U={class:"shiki github-light vp-code-light"},W={class:"line"},H=s("span",{style:{color:"#6F42C1"}},"git",-1),X=s("span",{style:{color:"#24292E"}}," ",-1),$=s("span",{style:{color:"#032F62"}},"checkout",-1),Q=s("span",{style:{color:"#24292E"}}," ",-1),z={style:{color:"#032F62"}},K={class:"language-bash vp-adaptive-theme"},Y=s("button",{title:"Copy Code",class:"copy"},null,-1),ss=s("span",{class:"lang"},"bash",-1),es={class:"shiki github-dark vp-code-dark"},as={class:"line"},os=s("span",{style:{color:"#B392F0"}},"git",-1),ts=s("span",{style:{color:"#E1E4E8"}}," ",-1),ns=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),ls=s("span",{style:{color:"#E1E4E8"}}," ",-1),is={style:{color:"#9ECBFF"}},cs={class:"shiki github-light vp-code-light"},ps={class:"line"},ds=s("span",{style:{color:"#6F42C1"}},"git",-1),rs=s("span",{style:{color:"#24292E"}}," ",-1),hs=s("span",{style:{color:"#032F62"}},"checkout",-1),_s=s("span",{style:{color:"#24292E"}}," ",-1),ys={style:{color:"#032F62"}},us=o('<li><p>Build the <code>celestia</code> binary:</p><p>a. Standard build</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre></div><p>b. Experimental build</p><div class="tip custom-block"><p class="custom-block-title">OPTIONAL</p><p>If you&#39;re a node operator comfortable with experimental features and seeking optimal performance with minimal RAM usage, this option is recommended for you.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build-jemalloc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build-jemalloc</span></span></code></pre></div><p>This build option enables CGO, and downloads and installs <a href="https://jemalloc.net/" target="_blank" rel="noreferrer">jemalloc</a>. <a href="https://github.com/celestiaorg/celestia-node/releases/tag/v0.12.1#:~:text=%F0%9F%8F%97%EF%B8%8F-,New%20build%20option,-%3A%20Makefile%20now%20has" target="_blank" rel="noreferrer">Learn more about the build command</a>.</p></div></li><li><p>Install the binary:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-R8npO" id="tab-6ZJ379_" checked="checked"><label for="tab-6ZJ379_">Ubuntu</label><input type="radio" name="group-R8npO" id="tab-i10kZXl"><label for="tab-i10kZXl">Mac</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">go-install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">go-install</span></span></code></pre></div></div></div></li><li><p>Build the <code>cel-key</code> utility:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cel-key</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cel-key</span></span></code></pre></div></li><li><p>Verify that the binary is working and check the version:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span></span></code></pre></div></li>',4),gs=o('<p>The output will show the semantic version of celestia-node, commit hash, build date, system version, and Golang version.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>First, we recommend <a href="./overview">reading the overview</a> of our node types, if you haven&#39;t yet.</p><p>Now that you&#39;ve installed Celestia Node, it&#39;s time to <a href="./decide-node">pick your node type</a> and run your node!</p><p>If you&#39;re planning to run a light node, we recommend the <a href="./../developers/node-tutorial">node RPC CLI tutorial</a>.</p><h2 id="upgrading-your-binary" tabindex="-1">Upgrading your binary <a class="header-anchor" href="#upgrading-your-binary" aria-label="Permalink to &quot;Upgrading your binary&quot;">​</a></h2><p>To upgrade your binary, you can install the latest version from the instructions above and restart your node. If you run into any issues, Refer to the <a href="./celestia-node-troubleshooting">troubleshooting section</a>.</p>',7),Bs=JSON.parse('{"title":"Install celestia-node","description":"Learn to build and install celestia-node.","frontmatter":{"description":"Learn to build and install celestia-node.","head":[["meta",{"name":"og:title","content":"Install celestia-node | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-node.md","filePath":"nodes/celestia-node.md","lastUpdated":1708958378000}'),bs={name:"nodes/celestia-node.md"},Ts=Object.assign(bs,{setup(vs){return(Es,ms)=>(c(),p("div",null,[d,r,h,s("ol",null,[_,s("li",null,[y,s("div",u,[g,s("div",b,[s("div",v,[E,m,s("pre",F,[s("code",null,[s("span",k,[C,f,B,T,s("span",I,"tags/"+e(a(i)["node-latest-tag"]),1)])])]),s("pre",x,[s("code",null,[s("span",A,[w,S,P,V,s("span",N,"tags/"+e(a(i)["node-latest-tag"]),1)])])])]),s("div",R,[O,J,s("pre",D,[s("code",null,[s("span",M,[Z,j,L,q,s("span",G,"tags/"+e(a(l)["node-latest-tag"]),1)])])]),s("pre",U,[s("code",null,[s("span",W,[H,X,$,Q,s("span",z,"tags/"+e(a(l)["node-latest-tag"]),1)])])])]),s("div",K,[Y,ss,s("pre",es,[s("code",null,[s("span",as,[os,ts,ns,ls,s("span",is,"tags/"+e(a(n)["node-latest-tag"]),1)])])]),s("pre",cs,[s("code",null,[s("span",ps,[ds,rs,hs,_s,s("span",ys,"tags/"+e(a(n)["node-latest-tag"]),1)])])])])])])]),us]),gs]))}});export{Bs as __pageData,Ts as default};
