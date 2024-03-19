import{a}from"./chunks/arabica_versions.a5c55a04.js";import{m as l}from"./chunks/mocha_versions.f6019cde.js";import{m as n}from"./chunks/mainnet_versions.a17f37d5.js";import{o as c,c as p,k as s,t,l as e,Q as o}from"./chunks/framework.b124edd5.js";const i=o('<h1 id="install-celestia-app" tabindex="-1">Install celestia-app <a class="header-anchor" href="#install-celestia-app" aria-label="Permalink to &quot;Install celestia-app&quot;">​</a></h1><p>This tutorial will guide you through installing celestia-app, both <a href="#building-binary-from-source">from source</a> and with <a href="#installing-a-pre-built-binary">a pre-built binary</a></p><h2 id="building-binary-from-source" tabindex="-1">Building binary from source <a class="header-anchor" href="#building-binary-from-source" aria-label="Permalink to &quot;Building binary from source&quot;">​</a></h2><p>This section of the tutorial presumes you completed the steps in <a href="./environment">setting up your own environment</a>.</p><p>The steps below will create a binary file named <code>celestia-appd</code> inside <code>$HOME/go/bin</code> folder which will be used later to run the node. Be sure to select the correct network to install the binary for.</p>',5),r=o(`<li><p>Remove any existing copy of celestia-app, clone the repository, and change into the directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-app</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/celestiaorg/celestia-app.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">celestia-app</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-app</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/celestiaorg/celestia-app.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">celestia-app</span></span></code></pre></div></li>`,1),d=s("p",null,"Check out to the desired version, based on the network you will use:",-1),h={class:"vp-code-group vp-adaptive-theme"},_=o('<div class="tabs"><input type="radio" name="group-zKblJ" id="tab-9DrzzRH" checked="checked"><label for="tab-9DrzzRH">Mainnet Beta</label><input type="radio" name="group-zKblJ" id="tab-VoJfOMN"><label for="tab-VoJfOMN">Mocha</label><input type="radio" name="group-zKblJ" id="tab-UaqwZcM"><label for="tab-UaqwZcM">Arabica</label></div>',1),y={class:"blocks"},u={class:"language-bash vp-adaptive-theme active"},b=s("button",{title:"Copy Code",class:"copy"},null,-1),g=s("span",{class:"lang"},"bash",-1),E={class:"shiki github-dark vp-code-dark"},F={class:"line"},m=s("span",{style:{color:"#B392F0"}},"git",-1),C=s("span",{style:{color:"#E1E4E8"}}," ",-1),f=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),v=s("span",{style:{color:"#E1E4E8"}}," ",-1),k={style:{color:"#9ECBFF"}},B=s("span",{style:{color:"#E1E4E8"}}," ",-1),T=s("span",{style:{color:"#79B8FF"}},"-b",-1),w=s("span",{style:{color:"#E1E4E8"}}," ",-1),P={style:{color:"#9ECBFF"}},I={class:"shiki github-light vp-code-light"},A={class:"line"},S=s("span",{style:{color:"#6F42C1"}},"git",-1),V=s("span",{style:{color:"#24292E"}}," ",-1),q=s("span",{style:{color:"#032F62"}},"checkout",-1),D=s("span",{style:{color:"#24292E"}}," ",-1),M={style:{color:"#032F62"}},N=s("span",{style:{color:"#24292E"}}," ",-1),R=s("span",{style:{color:"#005CC5"}},"-b",-1),x=s("span",{style:{color:"#24292E"}}," ",-1),L={style:{color:"#032F62"}},O={class:"language-bash vp-adaptive-theme"},z=s("button",{title:"Copy Code",class:"copy"},null,-1),H=s("span",{class:"lang"},"bash",-1),J={class:"shiki github-dark vp-code-dark"},$={class:"line"},U=s("span",{style:{color:"#B392F0"}},"git",-1),K=s("span",{style:{color:"#E1E4E8"}}," ",-1),Y=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),Z=s("span",{style:{color:"#E1E4E8"}}," ",-1),j={style:{color:"#9ECBFF"}},Q=s("span",{style:{color:"#E1E4E8"}}," ",-1),W=s("span",{style:{color:"#79B8FF"}},"-b",-1),G=s("span",{style:{color:"#E1E4E8"}}," ",-1),X={style:{color:"#9ECBFF"}},ss={class:"shiki github-light vp-code-light"},ts={class:"line"},es=s("span",{style:{color:"#6F42C1"}},"git",-1),os=s("span",{style:{color:"#24292E"}}," ",-1),as=s("span",{style:{color:"#032F62"}},"checkout",-1),ls=s("span",{style:{color:"#24292E"}}," ",-1),ns={style:{color:"#032F62"}},cs=s("span",{style:{color:"#24292E"}}," ",-1),ps=s("span",{style:{color:"#005CC5"}},"-b",-1),is=s("span",{style:{color:"#24292E"}}," ",-1),rs={style:{color:"#032F62"}},ds={class:"language-bash vp-adaptive-theme"},hs=s("button",{title:"Copy Code",class:"copy"},null,-1),_s=s("span",{class:"lang"},"bash",-1),ys={class:"shiki github-dark vp-code-dark"},us={class:"line"},bs=s("span",{style:{color:"#B392F0"}},"git",-1),gs=s("span",{style:{color:"#E1E4E8"}}," ",-1),Es=s("span",{style:{color:"#9ECBFF"}},"checkout",-1),Fs=s("span",{style:{color:"#E1E4E8"}}," ",-1),ms={style:{color:"#9ECBFF"}},Cs=s("span",{style:{color:"#E1E4E8"}}," ",-1),fs=s("span",{style:{color:"#79B8FF"}},"-b",-1),vs=s("span",{style:{color:"#E1E4E8"}}," ",-1),ks={style:{color:"#9ECBFF"}},Bs={class:"shiki github-light vp-code-light"},Ts={class:"line"},ws=s("span",{style:{color:"#6F42C1"}},"git",-1),Ps=s("span",{style:{color:"#24292E"}}," ",-1),Is=s("span",{style:{color:"#032F62"}},"checkout",-1),As=s("span",{style:{color:"#24292E"}}," ",-1),Ss={style:{color:"#032F62"}},Vs=s("span",{style:{color:"#24292E"}}," ",-1),qs=s("span",{style:{color:"#005CC5"}},"-b",-1),Ds=s("span",{style:{color:"#24292E"}}," ",-1),Ms={style:{color:"#032F62"}},Ns=o('<li><p>Build and install the <code>celestia-appd</code> binary:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div></li><li><p>To check if the binary was successfully installed you can run the binary using the <code>--help</code> flag:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia-appd</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia-appd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--help</span></span></code></pre></div></li>',2),Rs=o('<p>You will see an output with the menu for <code>celestia-appd</code>. Learn more on the <a href="./celestia-app-commands">helpful CLI commands page</a></p><h2 id="installing-a-pre-built-binary" tabindex="-1">Installing a pre-built binary <a class="header-anchor" href="#installing-a-pre-built-binary" aria-label="Permalink to &quot;Installing a pre-built binary&quot;">​</a></h2><p>Installing a pre-built binary is the fastest way to get started with your Celestia consensus node. Releases after celestia-app v1.3.0 should have these binaries available.</p><p>The steps below will download a binary file named <code>celestia-appd</code>. Depending on the setup that you choose during installation, the <code>celestia-appd</code> binary will be available at either:</p><ul><li><code>$HOME/celestia-temp/celestia-appd</code></li><li><code>/usr/local/bin/celestia-appd</code></li></ul><p>Pre-built binaries are available for:</p><ul><li>Operating systems: Darwin (Apple), Linux</li><li>Architectures: x86_64 (amd64), arm64</li></ul><p>To install the latest pre-built binary you can run this command in your terminal:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-c</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;$(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-sL</span><span style="color:#9ECBFF;"> https://docs.celestia.org/celestia-app.sh)&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-c</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;$(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-sL</span><span style="color:#032F62;"> https://docs.celestia.org/celestia-app.sh)&quot;</span></span></code></pre></div><p>Follow the instructions in the terminal output to choose your installation preferences.</p><p>You will see an output with the menu for <code>celestia-appd</code>. Learn more on the <a href="./celestia-app-commands">helpful CLI commands page</a></p><p>View <a href="https://github.com/celestiaorg/docs/tree/main/public/celestia-app.sh" target="_blank" rel="noreferrer">the script</a> to learn more about what it is doing.</p><h2 id="ports" tabindex="-1">Ports <a class="header-anchor" href="#ports" aria-label="Permalink to &quot;Ports&quot;">​</a></h2><p>When interacting with a consensus node, you may need to open ports on your machine to allow communication between nodes, such as bridge nodes. It is essential that specific ports are accessible. Make sure that your firewall allows connections to the correct ports.</p><p>If you run a node on a cloud server, make sure that the ports are open on the server&#39;s firewall. If you run a node at home, make sure that your router allows connections to the correct ports.</p><p>For example, validator ports 9090 and 26657 need to be accessible by the bridge, and port 2121 is required for P2P connections for all node types.</p><p>The following ports are used by Celestia app nodes:</p><table><thead><tr><th>Port</th><th>Protocol</th><th>Address</th><th>Description</th><th>Enabled by default on node</th><th>Flag</th></tr></thead><tbody><tr><td>2121</td><td>TCP/UDP</td><td>localhost</td><td>P2P</td><td>true</td><td>N/A</td></tr><tr><td>9090</td><td>HTTP</td><td>0.0.0.0</td><td>gRPC</td><td>true</td><td><code>--grpc.address string</code></td></tr><tr><td>26657</td><td>TCP</td><td>localhost</td><td>RPC</td><td>false (only open to localhost)</td><td><code>--rpc.laddr string</code></td></tr></tbody></table>',18),Ks=JSON.parse('{"title":"Install celestia-app","description":"Learn how you can build celestia-app.","frontmatter":{"description":"Learn how you can build celestia-app.","head":[["meta",{"name":"og:title","content":"Install celestia-app | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/celestia-app.md","filePath":"nodes/celestia-app.md","lastUpdated":1710859870000}'),xs={name:"nodes/celestia-app.md"},Ys=Object.assign(xs,{setup(Ls){return(Os,zs)=>(c(),p("div",null,[i,s("ol",null,[r,s("li",null,[d,s("div",h,[_,s("div",y,[s("div",u,[b,g,s("pre",E,[s("code",null,[s("span",F,[m,C,f,v,s("span",k,"tags/"+t(e(n)["app-latest-tag"]),1),B,T,w,s("span",P,t(e(n)["app-latest-tag"]),1)])])]),s("pre",I,[s("code",null,[s("span",A,[S,V,q,D,s("span",M,"tags/"+t(e(n)["app-latest-tag"]),1),N,R,x,s("span",L,t(e(n)["app-latest-tag"]),1)])])])]),s("div",O,[z,H,s("pre",J,[s("code",null,[s("span",$,[U,K,Y,Z,s("span",j,"tags/"+t(e(l)["app-latest-tag"]),1),Q,W,G,s("span",X,t(e(l)["app-latest-tag"]),1)])])]),s("pre",ss,[s("code",null,[s("span",ts,[es,os,as,ls,s("span",ns,"tags/"+t(e(l)["app-latest-tag"]),1),cs,ps,is,s("span",rs,t(e(l)["app-latest-tag"]),1)])])])]),s("div",ds,[hs,_s,s("pre",ys,[s("code",null,[s("span",us,[bs,gs,Es,Fs,s("span",ms,"tags/"+t(e(a)["app-latest-tag"]),1),Cs,fs,vs,s("span",ks,t(e(a)["app-latest-tag"]),1)])])]),s("pre",Bs,[s("code",null,[s("span",Ts,[ws,Ps,Is,As,s("span",Ss,"tags/"+t(e(a)["app-latest-tag"]),1),Vs,qs,Ds,s("span",Ms,t(e(a)["app-latest-tag"]),1)])])])])])])]),Ns]),Rs]))}});export{Ks as __pageData,Ys as default};
