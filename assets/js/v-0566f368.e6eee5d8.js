"use strict";(self.webpackChunkhydro_dev_github_io=self.webpackChunkhydro_dev_github_io||[]).push([[7433],{4179:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-0566f368","path":"/docs/user/domain.html","title":"域","lang":"en-US","frontmatter":{"description":"简介 域功能类似团队，允许在一套系统中创建多个环境（如不同班级，或是不同功能，等等） 用户可以创建多个域。（需要用户有 PRIVCREATEDOMAIN 权限，默认仅开放给管理员账户）。 域间数据完全独立，仅用户信息相通（注册账户后，在该实例的所有域中均有效）。 创建域 登录账号后，在“我的”选项卡中找到“我的域”，并点击“创建域”，填入以下信息： I...","head":[["meta",{"property":"og:url","content":"https://hydro.js.org/docs/user/domain.html"}],["meta",{"property":"og:site_name","content":"Hydro"}],["meta",{"property":"og:title","content":"域"}],["meta",{"property":"og:description","content":"简介 域功能类似团队，允许在一套系统中创建多个环境（如不同班级，或是不同功能，等等） 用户可以创建多个域。（需要用户有 PRIVCREATEDOMAIN 权限，默认仅开放给管理员账户）。 域间数据完全独立，仅用户信息相通（注册账户后，在该实例的所有域中均有效）。 创建域 登录账号后，在“我的”选项卡中找到“我的域”，并点击“创建域”，填入以下信息： I..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-20T01:53:27.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-20T01:53:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"域\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-20T01:53:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"创建域","slug":"创建域","link":"#创建域","children":[]},{"level":2,"title":"初始化讨论节点","slug":"初始化讨论节点","link":"#初始化讨论节点","children":[]},{"level":2,"title":"访问控制","slug":"访问控制","link":"#访问控制","children":[]},{"level":2,"title":"创建比赛/作业","slug":"创建比赛-作业","link":"#创建比赛-作业","children":[]},{"level":2,"title":"创建训练","slug":"创建训练","link":"#创建训练","children":[]}],"git":{"createdTime":1628829220000,"updatedTime":1679277207000,"contributors":[{"name":"(Macesuted)","email":"1912192337@qq.com","commits":2},{"name":"undefined","email":"i@undefined.moe","commits":2},{"name":"Macesuted","email":"macesuted@qq.com","commits":1},{"name":"juruo888","email":"95965215+juruo888@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.13,"words":940},"filePathRelative":"docs/user/domain.md","localizedDate":"August 13, 2021","autoDesc":true,"excerpt":""}')},5577:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});var l=a(6252);const e=[(0,l.uE)('<h1 id="域" tabindex="-1"><a class="header-anchor" href="#域"><span>域</span></a></h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>域功能类似团队，允许在一套系统中创建多个环境（如不同班级，或是不同功能，等等）<br> 用户可以创建多个域。（需要用户有 PRIV_CREATE_DOMAIN 权限，默认仅开放给管理员账户）。 域间数据完全独立，仅用户信息相通（注册账户后，在该实例的所有域中均有效）。</p><h2 id="创建域" tabindex="-1"><a class="header-anchor" href="#创建域"><span>创建域</span></a></h2><p>登录账号后，在“我的”选项卡中找到“我的域”，并点击“创建域”，填入以下信息：</p><ul><li>ID： 每个域有一个唯一的 ID，将会在域 URL 中体现。<strong>创建后无法修改。</strong></li><li>名称： 域的名字，创建后可以更改。</li><li>公告： 域主页上显示的公告，创建后可以更改。</li><li>avatar： 域头像，与用户头像同理，可以使用 <code>gravatar:email</code> 或 <code>qq:id</code> 或 <code>github:name</code> 或 <code>url:link</code> 的格式添加。将会在“我的域”界面内显示。</li></ul><p>创建域后，您将在此域中拥有管理员权限，可以在域内进行添加题目/创建比赛等操作。</p><h2 id="初始化讨论节点" tabindex="-1"><a class="header-anchor" href="#初始化讨论节点"><span>初始化讨论节点</span></a></h2><p>您可以在“管理域”选项卡中点击“初始化讨论节点”按钮初始化讨论节点。</p><h2 id="访问控制" tabindex="-1"><a class="header-anchor" href="#访问控制"><span>访问控制</span></a></h2><p><strong>未登录用户将默认使用 <code>guest</code> 权限，登录用户将默认使用 <code>default</code> 权限。</strong>（所以将登陆用户设为 <code>default</code> 权限后并不会显示在“管理用户”页内，这也表示所有用户默认不会出现在管理列表中）<br> 所以将一个用户的权限设为 <code>default</code> 和将用户移出该域是等价的。</p><p>对于不在列表中的用户，点击右上角“添加用户”，在左侧选中用户，右侧选择权限组，再点击“确定”即可。</p><h2 id="创建比赛-作业" tabindex="-1"><a class="header-anchor" href="#创建比赛-作业"><span>创建比赛/作业</span></a></h2><p>若您想要创建比赛/作业，您可以在“比赛”或“作业”选项卡中，在页面右侧找到“创建”按钮， 题目一栏支持根据题目ID或是题目名自动筛选。设置完后可点击“创建”按钮创建比赛（描述这类的框不知道写啥就随便填，不能留空）。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>若因为删除作业/比赛内题目导致无法打开，可以通过 <code>/contest/&lt;id&gt;/edit</code> 或 <code>/homework/&lt;id&gt;/edit</code>（即在无法打开的页面页面后加上 <code>/edit</code>）直接访问编辑页并修正。</p></div><h2 id="创建训练" tabindex="-1"><a class="header-anchor" href="#创建训练"><span>创建训练</span></a></h2><p>若您想要创建训练，您可以在“训练” 项卡中点击“新建训练计划”，填写以下信息：</p><ul><li>标题：该训练的标题；</li><li>简介：该训练的简介，会与标题同时显示在列表页面中；</li><li>说明：该训练的详细信息；</li><li>计划：该训练的具体题目及计划信息，其格式如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#d8dee9ff;">[</span></span>\n<span class="line"><span style="color:#d8dee9ff;">  {章节详细信息},</span></span>\n<span class="line"><span style="color:#d8dee9ff;">  {章节详细信息},</span></span>\n<span class="line"><span style="color:#d8dee9ff;">  ...</span></span>\n<span class="line"><span style="color:#d8dee9ff;">  {章节详细信息}</span></span>\n<span class="line"><span style="color:#d8dee9ff;">]</span></span>\n<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，“章节详细信息”的包含以下部分：</p><ul><li><code>_id</code>：章节数字编号；</li><li><code>title</code>：章节标题；</li><li><code>requireNids</code>：训练此章节之前需要完成的章节数字编号，若无要求则留空，若有多个则使用逗号分隔；</li><li><code>pids</code>：此章节中包含的题目的 <strong>ID</strong>，若有多个则使用逗号分隔。</li></ul><p><strong>举例</strong>：若要在训练中创建三个章节，章节中分别有 <strong>ID</strong> 为 1，2，3 的题目。其中章节一、二无前置条件，章节三需要同时完成章节一、二后才能进行，则格式如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki nord" style="background-color:#2e3440ff;" tabindex="0"><code><span class="line"><span style="color:#ECEFF4;">[</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">{</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">_id</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">title</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">入门</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">requireNids</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[],</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">pids</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">]</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">},</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">{</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">_id</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">title</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">精通</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">requireNids</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[],</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">pids</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">]</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">},</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">{</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">_id</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">title</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">大师</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">requireNids</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">],</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#8FBCBB;">pids</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">[</span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">]</span></span>\n<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>\n<span class="line"><span style="color:#ECEFF4;">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>若因为删除训练计划内题目导致训练计划无法打开，可以通过 <code>/training/&lt;id&gt;/edit</code>（即训练计划页面后加上 <code>/edit</code>）直接访问训练计划编辑页并修正配置文件。</p></div>',24)],o={},p=(0,a(3744).Z)(o,[["render",function(s,n){return(0,l.wg)(),(0,l.iD)("div",null,e)}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,l]of n)a[s]=l;return a}}}]);