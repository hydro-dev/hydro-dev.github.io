"use strict";(self.webpackChunkhydro_dev_github_io=self.webpackChunkhydro_dev_github_io||[]).push([[9142],{5649:(s,a,n)=>{n.r(a),n.d(a,{data:()=>l});const l=JSON.parse('{"key":"v-cceda784","path":"/docs/system/cli.html","title":"Hydro Cli","lang":"en-US","frontmatter":{"description":"在使用 cli 之前，请完成数据库配置。 指令中使用 括起来的参数必须给出，用 [] 括起来的参数可以给出，若不给出则按照默认设置。 用户请根据自己的情况替换掉用 或是 [] 包括起来的部分（括号也应替换） cli 可以帮助用户在控制台下快捷地进行一些操作。 这些命令需要以在终端以 root 用户执行（安装时执行命令的位置）。 下面给出了一些常用的例子...","head":[["meta",{"property":"og:url","content":"https://hydro.js.org/docs/system/cli.html"}],["meta",{"property":"og:site_name","content":"Hydro"}],["meta",{"property":"og:title","content":"Hydro Cli"}],["meta",{"property":"og:description","content":"在使用 cli 之前，请完成数据库配置。 指令中使用 括起来的参数必须给出，用 [] 括起来的参数可以给出，若不给出则按照默认设置。 用户请根据自己的情况替换掉用 或是 [] 包括起来的部分（括号也应替换） cli 可以帮助用户在控制台下快捷地进行一些操作。 这些命令需要以在终端以 root 用户执行（安装时执行命令的位置）。 下面给出了一些常用的例子..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-12T03:18:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-12T03:18:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hydro Cli\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-12T03:18:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":2,"title":"设置全站管理员","slug":"设置全站管理员","link":"#设置全站管理员","children":[]},{"level":2,"title":"设置用户权限","slug":"设置用户权限","link":"#设置用户权限","children":[]},{"level":2,"title":"更改用户密码","slug":"更改用户密码","link":"#更改用户密码","children":[]},{"level":2,"title":"创建评测账号","slug":"创建评测账号","link":"#创建评测账号","children":[]},{"level":2,"title":"黑名单相关","slug":"黑名单相关","link":"#黑名单相关","children":[]},{"level":2,"title":"命令列表","slug":"命令列表","link":"#命令列表","children":[]}],"git":{"createdTime":1632364924000,"updatedTime":1683861510000,"contributors":[{"name":"Macesuted","email":"macesuted@qq.com","commits":1},{"name":"panda","email":"panda_dtdyy@outlook.com","commits":1},{"name":"undefined","email":"i@undefined.moe","commits":1}]},"readingTime":{"minutes":2.75,"words":824},"filePathRelative":"docs/system/cli.md","localizedDate":"September 23, 2021","autoDesc":true,"excerpt":""}')},7020:(s,a,n)=>{n.r(a),n.d(a,{default:()=>y});var l=n(6252);const o=(0,l.uE)('<h1 id="hydro-cli" tabindex="-1"><a class="header-anchor" href="#hydro-cli"><span>Hydro Cli</span></a></h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>在使用 cli 之前，请完成数据库配置。<br> 指令中使用 <code>&lt;&gt;</code> 括起来的参数必须给出，用 <code>[]</code> 括起来的参数可以给出，若不给出则按照默认设置。<br><strong>用户请根据自己的情况替换掉用 <code>&lt;&gt;</code> 或是 <code>[]</code> 包括起来的部分（括号也应替换）</strong></p></div><p>cli 可以帮助用户在控制台下快捷地进行一些操作。<br> 这些命令需要以在终端以 root 用户执行（安装时执行命令的位置）。<br> 下面给出了一些常用的例子。</p><h2 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>很少使用。建议通过 控制面板&gt;导入用户 功能代替</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">create</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">mai</span><span style="color:#D8DEE9FF;">l</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">usernam</span><span style="color:#D8DEE9FF;">e</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">passwor</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ui</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span></span>\n<span class="line"><span style="color:#616E88;"># 该用户的邮箱、用户名和密码</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#616E88;"># 如创建邮箱为 hydro@hydro.local，用户名为 Hydro，密码为 hydrohydro ，UID 为 2 的用户：</span></span>\n<span class="line"><span style="color:#616E88;"># 请确保 UID 为不小于 2 的正整数且未被占用，邮箱和用户名均不重复。</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">create</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">hydro@hydro.local</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">Hydro</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">hydrohydro</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若一切正常，运行该指令后您会从命令行窗口中看到该用户 uid。</p><h2 id="设置全站管理员" tabindex="-1"><a class="header-anchor" href="#设置全站管理员"><span>设置全站管理员</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setSuperAdmin</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ui</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#616E88;"># 如设置 uid 为 2 的用户为管理员：</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setSuperAdmin</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置用户权限" tabindex="-1"><a class="header-anchor" href="#设置用户权限"><span>设置用户权限</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setPriv</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ui</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">pri</span><span style="color:#D8DEE9FF;">v</span><span style="color:#81A1C1;">&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',11),p=(0,l._)("code",null,"[priv]",-1),e=(0,l.uE)('<h2 id="更改用户密码" tabindex="-1"><a class="header-anchor" href="#更改用户密码"><span>更改用户密码</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setPassword</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ui</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">passwor</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#616E88;"># 如将 uid 为 1 的用户的密码改为 hydrohydro：</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setPassword</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">hydrohydro</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建评测账号" tabindex="-1"><a class="header-anchor" href="#创建评测账号"><span>创建评测账号</span></a></h2><p>先 <a href="#%E5%88%9B%E5%BB%BA%E7%94%A8%E6%88%B7">创建一个账号</a>。</p><p>您需要留意运行此指令返回的数字，表示该用户的 <code>uid</code>，需要填入下面的指令中，然后给予该账号评测权限。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setJudge</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ui</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>完成后将配置的用户名及密码写入评测机配置文件，评测机即可连接到网页端。</p><h2 id="黑名单相关" tabindex="-1"><a class="header-anchor" href="#黑名单相关"><span>黑名单相关</span></a></h2><p>用户封禁：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setPriv</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ui</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IP/邮箱域名封禁：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#616E88;"># key 格式为 ip::xxx.xxx.xxx.xxx （封禁 IP 访问） 或是 mail::xxx.com （禁止 xxx.com 的邮箱注册）</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">blacklist</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">add</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ke</span><span style="color:#D8DEE9FF;">y</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> [duration] </span><span style="color:#616E88;"># 将 &lt;key&gt; 拉入黑名单，时长为 [duration] （以月为单位的整数，默认为 12，若 duration=0 则永久封禁）</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">blacklist</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">get</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ke</span><span style="color:#D8DEE9FF;">y</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;"># 获取黑名单中有关 &lt;key&gt; 的信息</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">blacklist</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">del</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ke</span><span style="color:#D8DEE9FF;">y</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;"># 将 &lt;key&gt; 移出黑名单</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令列表" tabindex="-1"><a class="header-anchor" href="#命令列表"><span>命令列表</span></a></h2>',13),t={href:"https://github.com/hydro-dev/Hydro/tree/master/packages/hydrooj/src/model",target:"_blank",rel:"noopener noreferrer"},r=(0,l.uE)('<p>这里并没有列出所有可以运行的指令，因为其中很多功能我们更推荐通过 Web 访问。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">create</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">mai</span><span style="color:#D8DEE9FF;">l</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">unam</span><span style="color:#D8DEE9FF;">e</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">passwor</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> [uid] </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">regip</span><span style="color:#ECEFF4;">]</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#D8DEE9FF;">priv</span><span style="color:#ECEFF4;">]</span></span>\n<span class="line"><span style="color:#616E88;"># 创建邮箱为 &lt;mail&gt;，用户名为 &lt;uname&gt;，密码为 &lt;password&gt;，ID 为 [uid]，注册 ip 为 [regip]，权限为 [priv] 的用户</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setUname</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ui</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">unma</span><span style="color:#D8DEE9FF;">e</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;"># 将 ID 为 &lt;uid&gt; 的用户的用户名设置为 &lt;uname&gt;</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setPriv</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ui</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">pri</span><span style="color:#D8DEE9FF;">v</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;"># 将 ID 为 &lt;uid&gt; 的用户的权限设为 &lt;priv&gt;</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setPassword</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ui</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">passwor</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;"># 将 ID 为 &lt;uid&gt; 的用户的密码设置为 &lt;password&gt;</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setEmail</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ui</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">mai</span><span style="color:#D8DEE9FF;">l</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;"># 将 ID 为 &lt;uid&gt; 的用户的邮箱设置为 &lt;mail&gt;</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">user</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">setSuperAdmin</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ui</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;"># 将 ID 为 &lt;uid&gt; 的用户设为全站管理员</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">problem</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">import</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">domainI</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">file/pat</span><span style="color:#D8DEE9FF;">h</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;"># 将 &lt;file/path&gt; 的Hydro格式题目包导入至 &lt;domainId&gt; 域中</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">problem</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">export</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">domainI</span><span style="color:#D8DEE9FF;">d</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;"># 将 &lt;domainId&gt; 域中的所有题目包导出</span></span>\n<span class="line"><span style="color:#88C0D0;">hydrooj</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">cli</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">system</span><span style="color:#D8DEE9FF;"> </span><span style="color:#A3BE8C;">set</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">ke</span><span style="color:#D8DEE9FF;">y</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#A3BE8C;">valu</span><span style="color:#D8DEE9FF;">e</span><span style="color:#81A1C1;">&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;"># 修改系统设置 &lt;key&gt; 值为 &lt;value&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),c={},y=(0,n(3744).Z)(c,[["render",function(s,a){const n=(0,l.up)("RouterLink"),c=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[o,(0,l._)("p",null,[(0,l.Uk)("关于参数 "),p,(0,l.Uk)(" ，可阅读 "),(0,l.Wm)(n,{to:"/dev/PERM_PRIV/"},{default:(0,l.w5)((()=>[(0,l.Uk)("此处")])),_:1}),(0,l.Uk)("。")]),e,(0,l._)("p",null,[(0,l.Uk)("所有于 "),(0,l._)("a",t,[(0,l.Uk)("此文件夹"),(0,l.Wm)(c)]),(0,l.Uk)(" 下的函数均可用 cli 调用。")]),r])}]])},3744:(s,a)=>{a.Z=(s,a)=>{const n=s.__vccOpts||s;for(const[s,l]of a)n[s]=l;return n}}}]);