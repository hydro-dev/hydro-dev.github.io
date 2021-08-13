# 常见问题

## 使用安装脚本的用户如何重启 Hydro？

```bash
pm2 restart hydrooj
```

## 使用安装脚本的用户如何更新 Hydro？

```bash
yarn global upgrade-interactive --latest
```

然后选中需要更新的组件更新即可。

## 由安装脚本安装的 Hydro 的文件存放在何处？

数据库存储于 `/data/db`。  
测试数据等文件存储于 `/data/file`。  
配置文件位于 `~/.config/hydro` 和 `~/.hydro`。

## 如何关闭用户注册？

用户注册由 Guest 用户（uid 为 0）的 PRIV_REGISTER_USER 权限控制，使用 `hydrooj cli user setPriv 0 0` 关闭即可。

## 如何修改网站图标？

使用 `hydrooj addon create` 创建一个插件，这会自动创建 `~/addon` 目录。  
进入 `~/addon/public` 目录，将您的站点图标放置于该文件夹下。  
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
- `nav_logo_dark_2x.png`

以上图片将在页面左上角 logo 显示。
之后前往系统设置，找到 `nav_logo_dark` 和 `nav_logo_dark_2x` 设置项，分别改为 `/nav_logo_dark.png` 和 `/nav_logo_dark_2x.png` ，重启 Hydro 即可应用更改。

## 使用安装脚本的用户如何重置数据？

:::warning
此操作会删除所有用户/题目/比赛等数据。请谨慎操作！
:::

运行 [此脚本](https://github.com/hydro-dev/Hydro/blob/master/install/reset.sh) 即可。

## 如何像 SYZOJ 一样在首页显示用户排名？

在系统设置中找到 `hydrooj` 分类中的首页设置，其格式如下：

```yaml
contest: 5 # 显示最近五场比赛
homework: 10 # 显示最近十个作业
training: 10 # 显示最新的十个训练
discussion: 20 # 显示最新的二十个讨论
ranking: 50 # 显示排名前五十的用户
```

您可按需更改，显示顺序与配置中的排列顺序相同。

## 评测显示“总时限超过60s，评测取消”

在系统设置中修改 total_time_limit 为允许的单题最大评测时长即可。

## 如何在背景中添加线条特效？

在系统设置中找到 `footer_extra_html` 项，加上如下内容：（写在一行内，不要多加换行）

> 基于 https://github.com/hustcc/canvas-nest.js ，MIT

```html
<script>(()=>{function e(e,n,t){return e.getAttribute(n)||t}function n(){l=i.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,u=i.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function c(){var t,o,i,a,m;r.clearRect(0,0,l,u),s.forEach(function(e,n){for(e.x+=e.xa,e.y+=e.ya,e.xa*=e.x>l||e.x<0?-1:1,e.ya*=e.y>u||e.y<0?-1:1,r.fillRect(e.x-.5,e.y-.5,1,1),o=n+1;o<d.length;o++)null!==(t=d[o]).x&&null!==t.y&&(i=e.x-t.x,a=e.y-t.y,(m=i*i+a*a)<t.max&&(t===y&&m>=t.max/2&&(e.x-=.03*i,e.y-=.03*a),m=(t.max-m)/t.max,r.beginPath(),r.lineWidth=m/2,r.strokeStyle="rgba("+x.c+","+(.2+m)+")",r.moveTo(e.x,e.y),r.lineTo(t.x,t.y),r.stroke()))}),w(c)}var l,u,d,t,o,i=document.createElement("canvas"),x=(t=(o=document.getElementsByTagName("script")).length,o=o[t-1],{l:t,z:e(o,"zIndex",-1),o:e(o,"opacity",.5),c:e(o,"color","0,0,0"),n:e(o,"count",99)}),a="c_n"+x.l,r=i.getContext("2d"),w=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/45)},m=Math.random,y={x:null,y:null,max:2e4};i.id=a,i.style.cssText="position:fixed;top:0;left:0;z-index:"+x.z+";opacity:"+x.o,document.getElementsByClassName("main")[0].appendChild(i),n(),window.onresize=n,window.onmousemove=function(e){e=e||window.event,y.x=e.clientX,y.y=e.clientY},window.onmouseout=function(){y.x=null,y.y=null};for(var s=[],h=0;x.n>h;h++){var f=m()*l,g=m()*u,p=2*m()-1,v=2*m()-1;s.push({x:f,y:g,xa:p,ya:v,max:6e3})}d=s.concat([y]),setTimeout(function(){c()},100)})();</script>
```
