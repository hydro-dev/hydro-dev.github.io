# 常见问题集合

## 好消息！本页和各大浏览器均达成了合作，使用 Ctrl-F 即可快速搜索关键词！

## 更多教程请点击右上角的常用教程查看。

<!-- 本页面遵循能用就行的原则。 -->

## 用户QQ群 1085853538

## 如何快速上手了解系统功能？

参照本文 [https://hydro.ac/discuss/6172ceeed850d38c79ae18f9](https://hydro.ac/discuss/6172ceeed850d38c79ae18f9) 无服务器快速体验系统功能。  
如果你没有二开很多功能的需求，推荐直接使用在线服务。超过两万题的题库可以直接复制使用，无需购置云服务器，无需手动维护，更省心。  
如果你有需要绑定自己的域名或是改 Logo 等等自定义需求，也可在管理面板中开通高级功能自助操作。  

系统中的用户只有编辑、禁用功能，没有删除功能，这是为了从根源上防止出现“教学事故”，请不要要求增加相关功能，如果认为自己绝不会误操作，请自行开发相关功能。

## 什么是 OJ？

现在你所使用的评测系统也仅仅是一个程序，并没有人工智能。因此很多地方需要你来迁就它，如果不这样做，你的答案即使本质上是正确的，由于形式的错误造成系统不能理解，也会导致错误。  
系统运行过程如下：

- 教师在系统中添加题目，并严格定义题目提供输入数据的格式和要求的输出数据格式。
- 教师根据题目定义的格式向系统中添加若干组测试数据，每组数据都包含输入数据和对应的输出。
- 学生阅读题目，并根据自己的理解提交程序。
- 系统编译并运行学生的程序，再将老师事先提供的输入数据“喂”给学生的程序，看它会输出什么。
- 如果学生程序的输出与老师之前提供的输出完全一致，一字不差，则认为学生的程序是正确的，否则则认为该程序错误。
- 如果运行过程中出现内存、时间上超出题目限制的情况，则中断程序的运行，并认为答案不正确。

在了解了上面的情况以后，同学们应该理解，如果题目没有要求程序输出“Please Input Two Number”之类的提示信息，那么自行输出这些文字将导致你的程序输出与老师事先告诉系统的输出不能做到“一字不差”，因而将导致系统报答案错误。  
如果题目要求每两行输出之间要空一行，结果你没有空，会是格式错误，反之亦然。  
也许你会觉得，哦，这系统太烂了，这点东西都不能自动识别；实际上正是这样才能有效训练大家编程的精确性、养成良好的代码习惯。很多程序高手都跟你一样，是从对这个系统吐槽开始学习如何认真仔细的、一丝不苟的进行编程的。  
系统为了能用统一的方式运行所有同学的答案，不得不对所有人提交的答案的形式进行限定。  
对于学习C、C++语言的同学来说，所有提交给系统的答案必须包含并且只有一个main函数，这个main函数必须返回int类型，并且最好返回0，因为操作系统对非零的返回值认为是运行出错。  
编译错误发生时，点击“编译错误”的文字链接可以得到详细解释。

## Arch Linux 开发模式安装时出现 [ERR_STREAM_PREMATURE_CLOSE]: Premature close 错误

删除 `.yarnrc.yml` 和 `.yarn` 后再试。

## 为什么我安装完成之后仍然无法访问？

如果您使用的是 阿里云/腾讯云 等服务商，请确保安全组放行了 80 和 443 端口。

## 为什么我配置完反向代理(caddy/nginx)之后无法登录(出现CsrfTokenError)？

反向代理时请确保设置了正确的 Host Header。[详细说明](/docs/install/proxy.md)

## 怎么备份/还原备份/迁移数据？

`hydrooj backup` `hydrooj restore backup-xxx.zip`

百度学习 crontab 的用法后，可以使用 `sudo crontab -e` 定制自动备份计划。

## 恢复备份时出现 '/data/file/hydro': Directory not empty

关闭 `minio` (`pm2 stop minio`) 后手动删除 `/data/file/hydro` 文件夹再重试。

## 更新升级

`yarn global upgrade-interactive --latest` 然后按空格选中除 pm2 之外的所有包更新，回车确认。
然后 `pm2 restart hydrooj` 重启服务。
重启后 `pm2 logs hydrooj --lines 100` 没有看到报错并看到了 `Server started` 则一切正常。

Hydro 的所有历史版本，都可以无损升级到最新版本。如果老系统更新有疑问，随时加官方群咨询群主。

## 怎么导入题目/创建题目？

题目列表右侧有相应入口。

切记：不要导入过多你暂时用不上的题目，正确的方式是每次训练、作业，导入所需的5-10个题目，比赛作业结束后让题目成为训练题库的一部分。这样能保证题库中题号靠前的题目难度依次上升，适合后来的同学自行训练。不要贪图题目数量而忽视其质量。自己看不懂解法的题目，少用、慎用。

## 如何限制未登录用户访问？

管理域 -> 管理权限 将 Guest 权限组的 查看此域 权限禁用。

## 怎么添加页脚备案号？

在系统设置 `footer_extra_html` 内添加一行 `<a href="https://beian.miit.gov.cn/">XX 备 XX 号</a>`

## 比赛作业里面的时间是什么含义，OI排名跟普通排名有何区别？
时间是指参与人员做出对应题目“花费”的时间：  
即：做出题目的时刻 – 比赛开始的时刻 + 惩罚时间  
惩罚时间 = 做对之前错误的提交数 * 20分钟。  
普通排名按做对的题目数和“花费”的时间进行排名。  
OI排名，按得分排名，题目可以按通过的比例进行记分，每题100分。如果希望数据的分值不平均分配，可以使用 config 配置。

## 脚本把 OJ 装在哪里了？

Hydro 的默认位置可以运行 `yarn global dir` 得到。（不要直接改代码，更新会覆盖此处的所有修改，请使用插件API）  
默认的数据库文件放置在 `/data/db`，但是不要直接复制文件，而是推荐用 `hydrooj backup` 进行备份。  
测试数据等文件存储于 `/data/file`。  
配置文件位于 `/root/.config/hydro` 和 `/root/.hydro`。
对于正在运行中的生产服务器，任何操作前请做好离线备份。  
备份文件一定要解压查看内部是否包含全部数据，关注备份的大小（大系统备份应该有上百兆），有条件找虚拟机实测还原是否成功  

## 题目的限时和内存限制的精度是怎样的？

题目限时允许设定的字面精度是 1ms,但是由于操作系统内核参数的限定，实测的精度通常为4ms。
内存限制的精度是1MB，对于本地native的编译型语言c/c++/pascal/freebasic/clang等是考察程序本身的内存申请空间; 对于虚拟机和脚本语言，则包含了虚拟机本身或解释器本身的内存消耗。

## 我想让 Python 支持 numpy 等等库，怎么办？

如果你是 2022/8/12 日前安装，使用 `pip3 install numpy` 后 `pm2 restart hydro-sandbox`  
否则参照请参照 [编译器](/docs/install/compiler) 章节。

## 使用安装脚本后忘记 MongoDB 的账号密码怎么办？

看 `/root/.hydro/config.json` 。

## 如何关闭、打开用户注册？

用户注册由 Guest 用户（uid 为 0）的 PRIV_REGISTER_USER 权限控制，默认允许注册。
使用 `hydrooj cli user setPriv 0 0` 即可关闭注册。
若要重新打开，可使用 `hydrooj cli user setPriv 0 8`。

变更后，请重启 hydrooj 服务：`pm2 restart hydrooj`

## 用户名为 Hydro 的用户是干什么的？密码是什么？可以登录么？

用户名为 Hydro 的用户（uid 为 1）仅用于发送系统消息（与 QQ 中的 10000 类似），无法登录。

## 如何修改网站图标？

使用 `hydrooj addon create` 创建一个插件，这会自动创建 `/root/addon` 目录。  
进入 `/root/addon/public` 目录，将您的站点图标放置于该文件夹下。  
您需要将以下文件放在该目录中（适配不同浏览器）：

- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon-96x96.png`
- `favicon.ico` (32x32)
- `android-chrome-192x192.png`
- `apple-touch-icon-180x180.png`

分辨率应尽可能对应，但不强制要求。以上图片将在浏览器标签页图片上显示。  
您还需要将以下文件放在该目录：

- `nav_logo_dark.png`

以上图片将在页面左上角 logo 显示。
之后前往系统设置，找到 `nav_logo_dark` 设置项，改为 `/nav_logo_dark.png` ，重启 Hydro 即可应用更改。

记得清理浏览器缓存。

## 如何重置数据？

:::warning
此操作会删除所有用户/题目/比赛等数据。请谨慎操作！
:::

将 [此脚本](https://github.com/hydro-dev/Hydro/blob/master/install/reset.sh) 下载到服务器运行。

您可按需更改，显示顺序与配置中的排列顺序相同。

## 评测显示“总时限超过 60s，评测取消”

在系统设置中修改 total_time_limit 为允许的单题最大评测时长即可。

## 如何在背景中添加线条特效？

在系统设置中找到 `footer_extra_html` 项，加上如下内容：（写在一行内，不要多加换行）

> 基于 https://github.com/hustcc/canvas-nest.js ，MIT

```html
<script>(()=>{function e(e,n,t){return e.getAttribute(n)||t}function n(){l=i.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,u=i.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function c(){var t,o,i,a,m;r.clearRect(0,0,l,u),s.forEach(function(e,n){for(e.x+=e.xa,e.y+=e.ya,e.xa*=e.x>l||e.x<0?-1:1,e.ya*=e.y>u||e.y<0?-1:1,r.fillRect(e.x-.5,e.y-.5,1,1),o=n+1;o<d.length;o++)null!==(t=d[o]).x&&null!==t.y&&(i=e.x-t.x,a=e.y-t.y,(m=i*i+a*a)<t.max&&(t===y&&m>=t.max/2&&(e.x-=.03*i,e.y-=.03*a),m=(t.max-m)/t.max,r.beginPath(),r.lineWidth=m/2,r.strokeStyle="rgba("+x.c+","+(.2+m)+")",r.moveTo(e.x,e.y),r.lineTo(t.x,t.y),r.stroke()))}),w(c)}var l,u,d,t,o,i=document.createElement("canvas"),x=(t=(o=document.getElementsByTagName("script")).length,o=o[t-1],{l:t,z:e(o,"zIndex",-1),o:e(o,"opacity",.5),c:e(o,"color","0,0,0"),n:e(o,"count",99)}),a="c_n"+x.l,r=i.getContext("2d"),w=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/45)},m=Math.random,y={x:null,y:null,max:2e4};i.id=a,i.style.cssText="position:fixed;top:0;left:0;z-index:"+x.z+";opacity:"+x.o,document.getElementsByClassName("main")[0].appendChild(i),n(),window.onresize=n,window.onmousemove=function(e){e=e||window.event,y.x=e.clientX,y.y=e.clientY},window.onmouseout=function(){y.x=null,y.y=null};for(var s=[],h=0;x.n>h;h++){var f=m()*l,g=m()*u,p=2*m()-1,v=2*m()-1;s.push({x:f,y:g,xa:p,ya:v,max:6e3})}d=s.concat([y]),setTimeout(function(){c()},100)})();</script>
```

## 使用 Hydro 要花多少钱？

不要钱，我们是 AGPL 的。如果你钱多，可以 [给我发个红包](https://pay.undefined.moe)。

## execve: no such file or directory
脚本安装默认只装了一小部分编译器。请参照 [编译器](/docs/install/compiler) 章节安装配置其他编译器。

## 怎么自定义用户标签？

进入 MongoDB，执行下面的操作即可（根据具体情况替换尖括号中的部分）：

```sh
use hydro
db.user.update({"_id": <用户 UID>}, {$set: {"badge": "<标签内容>#<背景颜色（HEX）>#<文字颜色（HEX）>"}})
```

## 为什么我无法批量下载多个文件？

请使用现代浏览器进行操作，并尝试给网站设置 https。
否则请选择逐个下载文件（Ctrl+点击文件名）。

## 为什么我的提交页面没有语言可选？

题目 -> 评测设置 -> 允许的语言  
域设置 -> 编辑域资料 -> 允许的语言  
这两个地方，应该填英文逗号分隔的语言ID，不会填请留空。

## The 'yarn global' commands have been remove in 2.x - consider using 'yarn dlx' or a third-party plugin instead

如果你搞不明白这个问题，请老实用安装脚本，不要折腾开发模式。

## 我是机房用户，大量用户同 IP 操作触发了频率限制，怎么解决？

方案一： 通过在内网架设代理服务器，将内网 ip 发送至服务端。（推荐）  
方案二： 使用形如 `hydrooj cli system set limit.user_login 999` 的命令设置新的频率限制（可在错误页面查看具体是触发了哪条限制）  
方案三： 使用 `pm2 start hydrooj -- --benchmark` 启动，关闭所有频率限制（不推荐）
