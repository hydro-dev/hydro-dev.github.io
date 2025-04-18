"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{853:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(7401).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},1160:(e,t,n)=>{n.r(t),n.d(t,{BaseLinkItem:()=>s});var r=n(5155),a=n(162),o=n(6046),i=n(2115),l=n(2);let s=(0,i.forwardRef)((e,t)=>{var n;let{item:i,...s}=e,d=(0,o.usePathname)(),c=null!==(n=i.active)&&void 0!==n?n:"url",u="none"!==c&&(0,l.$)(i.url,d,"nested-url"===c);return(0,r.jsx)(a.A,{ref:t,href:i.url,external:i.external,...s,"data-active":u,children:s.children})});s.displayName="BaseLinkItem"},1802:(e,t,n)=>{n.d(t,{ThemeToggle:()=>v});var r=n(5155),a=n(6421),o=n(7401);let i=(0,o.A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),l=(0,o.A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),s=(0,o.A)("Airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]]);var d=n(7113),c=n(2115),u=n(9795);let f=(0,a.F)("size-6.5 rounded-full p-1.5 text-fd-muted-foreground",{variants:{active:{true:"bg-fd-accent text-fd-accent-foreground",false:"text-fd-muted-foreground"}}}),m=[["light",i],["dark",l],["system",s]];function v(e){let{className:t,mode:n="light-dark",...a}=e,{setTheme:o,theme:i,resolvedTheme:l}=(0,d.D)(),[s,v]=(0,c.useState)(!1);(0,c.useLayoutEffect)(()=>{v(!0)},[]);let h=(0,u.QP)("inline-flex items-center rounded-full border p-1",t);if("light-dark"===n){let e=s?l:null;return(0,r.jsx)("button",{className:h,"aria-label":"Toggle Theme",onClick:()=>o("light"===e?"dark":"light"),"data-theme-toggle":"",...a,children:m.map(t=>{let[n,a]=t;if("system"!==n)return(0,r.jsx)(a,{fill:"currentColor",className:(0,u.QP)(f({active:e===n}))},n)})})}let p=s?i:null;return(0,r.jsx)("div",{className:h,"data-theme-toggle":"",...a,children:m.map(e=>{let[t,n]=e;return(0,r.jsx)("button",{"aria-label":t,className:(0,u.QP)(f({active:p===t})),onClick:()=>o(t),children:(0,r.jsx)(n,{className:"size-full",fill:"currentColor"})},t)})})}},4542:(e,t,n)=>{n.d(t,{LargeSearchToggle:()=>c,SearchToggle:()=>d});var r=n(5155),a=n(853),o=n(7044),i=n(9180),l=n(9795),s=n(3171);function d(e){let{hideIfDisabled:t,...n}=e,{setOpenSearch:i,enabled:d}=(0,o.$A)();return t&&!d?null:(0,r.jsx)("button",{type:"button",className:(0,l.QP)((0,s.r)({size:"icon",color:"ghost"}),n.className),"data-search":"","aria-label":"Open Search",onClick:()=>{i(!0)},children:(0,r.jsx)(a.A,{})})}function c(e){let{hideIfDisabled:t,...n}=e,{enabled:s,hotKey:d,setOpenSearch:c}=(0,o.$A)(),{text:u}=(0,i.s9)();return t&&!s?null:(0,r.jsxs)("button",{type:"button","data-search-full":"",...n,className:(0,l.QP)("inline-flex items-center gap-2 rounded-full border bg-fd-secondary/50 p-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground",n.className),onClick:()=>{c(!0)},children:[(0,r.jsx)(a.A,{className:"ms-1 size-4"}),u.search,(0,r.jsx)("div",{className:"ms-auto inline-flex gap-0.5",children:d.map((e,t)=>(0,r.jsx)("kbd",{className:"rounded-md border bg-fd-background px-1.5",children:e.display},t))})]})}},4727:(e,t,n)=>{n.d(t,{KS:()=>em,hA:()=>eg,JD:()=>eh,Ws:()=>ex,SK:()=>ev,wd:()=>ep,QW:()=>ew});var r=n(5155),a=n(2115),o=n(7650),i=n(8166),l=n(3610),s=n(3360),d=n(1488),c=n(8068),u=n(4256),f=n(7028),m=n(7668),v=n(2317);function h(e){let t=e+"CollectionProvider",[n,o]=(0,i.A)(t),[l,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:n}=e,o=a.useRef(null),i=a.useRef(new Map).current;return(0,r.jsx)(l,{scope:t,itemMap:i,collectionRef:o,children:n})};d.displayName=t;let u=e+"CollectionSlot",f=a.forwardRef((e,t)=>{let{scope:n,children:a}=e,o=s(u,n),i=(0,c.s)(t,o.collectionRef);return(0,r.jsx)(v.DX,{ref:i,children:a})});f.displayName=u;let m=e+"CollectionItemSlot",h="data-radix-collection-item",p=a.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,l=a.useRef(null),d=(0,c.s)(t,l),u=s(m,n);return a.useEffect(()=>(u.itemMap.set(l,{ref:l,...i}),()=>void u.itemMap.delete(l))),(0,r.jsx)(v.DX,{[h]:"",ref:d,children:o})});return p.displayName=m,[{Provider:d,Slot:f,ItemSlot:p},function(t){let n=s(e+"CollectionConsumer",t);return a.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(h,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},o]}var p=n(9674),g=n(6611),x=n(1524),w=a.forwardRef((e,t)=>(0,r.jsx)(s.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));w.displayName="VisuallyHidden";var y="NavigationMenu",[b,N,C]=h(y),[j,k,R]=h(y),[E,M]=(0,i.A)(y,[C,R]),[T,P]=E(y),[S,L]=E(y),A=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,onValueChange:i,defaultValue:l,delayDuration:f=200,skipDelayDuration:m=300,orientation:v="horizontal",dir:h,...p}=e,[g,x]=a.useState(null),w=(0,c.s)(t,e=>x(e)),y=(0,u.jH)(h),b=a.useRef(0),N=a.useRef(0),C=a.useRef(0),[j,k]=a.useState(!0),[R="",E]=(0,d.i)({prop:o,onChange:e=>{let t=m>0;""!==e?(window.clearTimeout(C.current),t&&k(!1)):(window.clearTimeout(C.current),C.current=window.setTimeout(()=>k(!0),m)),null==i||i(e)},defaultProp:l}),M=a.useCallback(()=>{window.clearTimeout(N.current),N.current=window.setTimeout(()=>E(""),150)},[E]),T=a.useCallback(e=>{window.clearTimeout(N.current),E(e)},[E]),P=a.useCallback(e=>{R===e?window.clearTimeout(N.current):b.current=window.setTimeout(()=>{window.clearTimeout(N.current),E(e)},f)},[R,E,f]);return a.useEffect(()=>()=>{window.clearTimeout(b.current),window.clearTimeout(N.current),window.clearTimeout(C.current)},[]),(0,r.jsx)(D,{scope:n,isRootMenu:!0,value:R,dir:y,orientation:v,rootNavigationMenu:g,onTriggerEnter:e=>{window.clearTimeout(b.current),j?P(e):T(e)},onTriggerLeave:()=>{window.clearTimeout(b.current),M()},onContentEnter:()=>window.clearTimeout(N.current),onContentLeave:M,onItemSelect:e=>{E(t=>t===e?"":e)},onItemDismiss:()=>E(""),children:(0,r.jsx)(s.sG.nav,{"aria-label":"Main","data-orientation":v,dir:y,...p,ref:w})})});A.displayName=y;var I="NavigationMenuSub";a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:a,onValueChange:o,defaultValue:i,orientation:l="horizontal",...c}=e,u=P(I,n),[f="",m]=(0,d.i)({prop:a,onChange:o,defaultProp:i});return(0,r.jsx)(D,{scope:n,isRootMenu:!1,value:f,dir:u.dir,orientation:l,rootNavigationMenu:u.rootNavigationMenu,onTriggerEnter:e=>m(e),onItemSelect:e=>m(e),onItemDismiss:()=>m(""),children:(0,r.jsx)(s.sG.div,{"data-orientation":l,...c,ref:t})})}).displayName=I;var D=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:o,dir:i,orientation:l,children:s,value:d,onItemSelect:c,onItemDismiss:u,onTriggerEnter:f,onTriggerLeave:v,onContentEnter:h,onContentLeave:p}=e,[g,w]=a.useState(null),[y,N]=a.useState(new Map),[C,j]=a.useState(null);return(0,r.jsx)(T,{scope:t,isRootMenu:n,rootNavigationMenu:o,value:d,previousValue:function(e){let t=a.useRef({value:e,previous:e});return a.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(d),baseId:(0,m.B)(),dir:i,orientation:l,viewport:g,onViewportChange:w,indicatorTrack:C,onIndicatorTrackChange:j,onTriggerEnter:(0,x.c)(f),onTriggerLeave:(0,x.c)(v),onContentEnter:(0,x.c)(h),onContentLeave:(0,x.c)(p),onItemSelect:(0,x.c)(c),onItemDismiss:(0,x.c)(u),onViewportContentChange:a.useCallback((e,t)=>{N(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:a.useCallback(e=>{N(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,r.jsx)(b.Provider,{scope:t,children:(0,r.jsx)(S,{scope:t,items:y,children:s})})})},_="NavigationMenuList",F=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,o=P(_,n),i=(0,r.jsx)(s.sG.ul,{"data-orientation":o.orientation,...a,ref:t});return(0,r.jsx)(s.sG.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,r.jsx)(b.Slot,{scope:n,children:o.isRootMenu?(0,r.jsx)(en,{asChild:!0,children:i}):i})})});F.displayName=_;var K="NavigationMenuItem",[O,z]=E(K),Q=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,...i}=e,l=(0,m.B)(),d=a.useRef(null),c=a.useRef(null),u=a.useRef(null),f=a.useRef(()=>{}),v=a.useRef(!1),h=a.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(d.current){f.current();let t=eo(d.current);t.length&&ei("start"===e?t:t.reverse())}},[]),p=a.useCallback(()=>{if(d.current){let e=eo(d.current);e.length&&(f.current=function(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}}(e))}},[]);return(0,r.jsx)(O,{scope:n,value:o||l||"LEGACY_REACT_AUTO_VALUE",triggerRef:c,contentRef:d,focusProxyRef:u,wasEscapeCloseRef:v,onEntryKeyDown:h,onFocusProxyEnter:h,onRootContentClose:p,onContentFocusOutside:p,children:(0,r.jsx)(s.sG.li,{...i,ref:t})})});Q.displayName=K;var W="NavigationMenuTrigger",V=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:o,...i}=e,d=P(W,e.__scopeNavigationMenu),u=z(W,e.__scopeNavigationMenu),f=a.useRef(null),m=(0,c.s)(f,u.triggerRef,t),v=ed(d.baseId,u.value),h=ec(d.baseId,u.value),p=a.useRef(!1),g=a.useRef(!1),x=u.value===d.value;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.ItemSlot,{scope:n,value:u.value,children:(0,r.jsx)(ea,{asChild:!0,children:(0,r.jsx)(s.sG.button,{id:v,disabled:o,"data-disabled":o?"":void 0,"data-state":es(x),"aria-expanded":x,"aria-controls":h,...i,ref:m,onPointerEnter:(0,l.m)(e.onPointerEnter,()=>{g.current=!1,u.wasEscapeCloseRef.current=!1}),onPointerMove:(0,l.m)(e.onPointerMove,eu(()=>{o||g.current||u.wasEscapeCloseRef.current||p.current||(d.onTriggerEnter(u.value),p.current=!0)})),onPointerLeave:(0,l.m)(e.onPointerLeave,eu(()=>{o||(d.onTriggerLeave(),p.current=!1)})),onClick:(0,l.m)(e.onClick,()=>{d.onItemSelect(u.value),g.current=x}),onKeyDown:(0,l.m)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===d.dir?"ArrowLeft":"ArrowRight"}[d.orientation];x&&e.key===t&&(u.onEntryKeyDown(),e.preventDefault())})})})}),x&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{"aria-hidden":!0,tabIndex:0,ref:u.focusProxyRef,onFocus:e=>{let t=u.contentRef.current,n=e.relatedTarget,r=n===f.current,a=null==t?void 0:t.contains(n);(r||!a)&&u.onFocusProxyEnter(r?"start":"end")}}),d.viewport&&(0,r.jsx)("span",{"aria-owns":h})]})]})});V.displayName=W;var G="navigationMenu.linkSelect",H=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:a,onSelect:o,...i}=e;return(0,r.jsx)(ea,{asChild:!0,children:(0,r.jsx)(s.sG.a,{"data-active":a?"":void 0,"aria-current":a?"page":void 0,...i,ref:t,onClick:(0,l.m)(e.onClick,e=>{let t=e.target,n=new CustomEvent(G,{bubbles:!0,cancelable:!0});if(t.addEventListener(G,e=>null==o?void 0:o(e),{once:!0}),(0,s.hO)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(X,{bubbles:!0,cancelable:!0});(0,s.hO)(t,e)}},{checkForDefaultPrevented:!1})})})});H.displayName="NavigationMenuLink";var q="NavigationMenuIndicator";a.forwardRef((e,t)=>{let{forceMount:n,...a}=e,i=P(q,e.__scopeNavigationMenu),l=!!i.value;return i.indicatorTrack?o.createPortal((0,r.jsx)(f.C,{present:n||l,children:(0,r.jsx)(U,{...a,ref:t})}),i.indicatorTrack):null}).displayName=q;var U=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,i=P(q,n),l=N(n),[d,c]=a.useState(null),[u,f]=a.useState(null),m="horizontal"===i.orientation,v=!!i.value;a.useEffect(()=>{var e;let t=null===(e=l().find(e=>e.value===i.value))||void 0===e?void 0:e.ref.current;t&&c(t)},[l,i.value]);let h=()=>{d&&f({size:m?d.offsetWidth:d.offsetHeight,offset:m?d.offsetLeft:d.offsetTop})};return el(d,h),el(i.indicatorTrack,h),u?(0,r.jsx)(s.sG.div,{"aria-hidden":!0,"data-state":v?"visible":"hidden","data-orientation":i.orientation,...o,ref:t,style:{position:"absolute",...m?{left:0,width:u.size+"px",transform:"translateX(".concat(u.offset,"px)")}:{top:0,height:u.size+"px",transform:"translateY(".concat(u.offset,"px)")},...o.style}}):null}),B="NavigationMenuContent",J=a.forwardRef((e,t)=>{let{forceMount:n,...a}=e,o=P(B,e.__scopeNavigationMenu),i=z(B,e.__scopeNavigationMenu),s=(0,c.s)(i.contentRef,t),d=i.value===o.value,u={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...a};return o.viewport?(0,r.jsx)($,{forceMount:n,...u,ref:s}):(0,r.jsx)(f.C,{present:n||d,children:(0,r.jsx)(Y,{"data-state":es(d),...u,ref:s,onPointerEnter:(0,l.m)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,l.m)(e.onPointerLeave,eu(o.onContentLeave)),style:{pointerEvents:!d&&o.isRootMenu?"none":void 0,...u.style}})})});J.displayName=B;var $=a.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=P(B,e.__scopeNavigationMenu);return(0,g.N)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,g.N)(()=>()=>r(e.value),[e.value,r]),null}),X="navigationMenu.rootContentDismiss",Y=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,triggerRef:i,focusProxyRef:s,wasEscapeCloseRef:d,onRootContentClose:u,onContentFocusOutside:f,...m}=e,v=P(B,n),h=a.useRef(null),g=(0,c.s)(h,t),x=ed(v.baseId,o),w=ec(v.baseId,o),y=N(n),b=a.useRef(null),{onItemDismiss:C}=v;a.useEffect(()=>{let e=h.current;if(v.isRootMenu&&e){let t=()=>{var t;C(),u(),e.contains(document.activeElement)&&(null===(t=i.current)||void 0===t||t.focus())};return e.addEventListener(X,t),()=>e.removeEventListener(X,t)}},[v.isRootMenu,e.value,i,C,u]);let j=a.useMemo(()=>{let e=y().map(e=>e.value);"rtl"===v.dir&&e.reverse();let t=e.indexOf(v.value),n=e.indexOf(v.previousValue),r=o===v.value,a=n===e.indexOf(o);if(!r&&!a)return b.current;let i=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(a&&-1!==t)return t>n?"to-start":"to-end"}return null})();return b.current=i,i},[v.previousValue,v.value,v.dir,y,o]);return(0,r.jsx)(en,{asChild:!0,children:(0,r.jsx)(p.qW,{id:w,"aria-labelledby":x,"data-motion":j,"data-orientation":v.orientation,...m,ref:g,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(X,{bubbles:!0,cancelable:!0});null===(e=h.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,l.m)(e.onFocusOutside,e=>{var t;f();let n=e.target;(null===(t=v.rootNavigationMenu)||void 0===t?void 0:t.contains(n))&&e.preventDefault()}),onPointerDownOutside:(0,l.m)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=y().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),a=v.isRootMenu&&(null===(t=v.viewport)||void 0===t?void 0:t.contains(n));(r||a||!v.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,l.m)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=eo(e.currentTarget),r=document.activeElement,a=t.findIndex(e=>e===r);if(ei(e.shiftKey?t.slice(0,a).reverse():t.slice(a+1,t.length)))e.preventDefault();else{var n;null===(n=s.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,l.m)(e.onEscapeKeyDown,e=>{d.current=!0})})})}),Z="NavigationMenuViewport",ee=a.forwardRef((e,t)=>{let{forceMount:n,...a}=e,o=!!P(Z,e.__scopeNavigationMenu).value;return(0,r.jsx)(f.C,{present:n||o,children:(0,r.jsx)(et,{...a,ref:t})})});ee.displayName=Z;var et=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:o,...i}=e,d=P(Z,n),u=(0,c.s)(t,d.onViewportChange),m=L(B,e.__scopeNavigationMenu),[v,h]=a.useState(null),[p,g]=a.useState(null),x=v?(null==v?void 0:v.width)+"px":void 0,w=v?(null==v?void 0:v.height)+"px":void 0,y=!!d.value,b=y?d.value:d.previousValue;return el(p,()=>{p&&h({width:p.offsetWidth,height:p.offsetHeight})}),(0,r.jsx)(s.sG.div,{"data-state":es(y),"data-orientation":d.orientation,...i,ref:u,style:{pointerEvents:!y&&d.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":x,"--radix-navigation-menu-viewport-height":w,...i.style},onPointerEnter:(0,l.m)(e.onPointerEnter,d.onContentEnter),onPointerLeave:(0,l.m)(e.onPointerLeave,eu(d.onContentLeave)),children:Array.from(m.items).map(e=>{let[t,{ref:n,forceMount:a,...o}]=e,i=b===t;return(0,r.jsx)(f.C,{present:a||i,children:(0,r.jsx)(Y,{...o,ref:(0,c.t)(n,e=>{i&&e&&g(e)})})},t)})})}),en=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,o=P("FocusGroup",n);return(0,r.jsx)(j.Provider,{scope:n,children:(0,r.jsx)(j.Slot,{scope:n,children:(0,r.jsx)(s.sG.div,{dir:o.dir,...a,ref:t})})})}),er=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],ea=a.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...a}=e,o=k(n),i=P("FocusGroupItem",n);return(0,r.jsx)(j.ItemSlot,{scope:n,children:(0,r.jsx)(s.sG.button,{...a,ref:t,onKeyDown:(0,l.m)(e.onKeyDown,e=>{if(["Home","End",...er].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===i.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),er.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>ei(t)),e.preventDefault()}})})})});function eo(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ei(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function el(e,t){let n=(0,x.c)(t);(0,g.N)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function es(e){return e?"open":"closed"}function ed(e,t){return"".concat(e,"-trigger-").concat(t)}function ec(e,t){return"".concat(e,"-content-").concat(t)}function eu(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ef=n(9795);let em=A,ev=F,eh=a.forwardRef((e,t)=>{let{className:n,children:a,...o}=e;return(0,r.jsx)(Q,{ref:t,className:(0,ef.QP)("list-none",n),...o,children:a})});eh.displayName=Q.displayName;let ep=a.forwardRef((e,t)=>{let{className:n,children:a,...o}=e;return(0,r.jsx)(V,{ref:t,className:(0,ef.QP)("data-[state=open]:bg-fd-accent/50",n),...o,children:a})});ep.displayName=V.displayName;let eg=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(J,{ref:t,className:(0,ef.QP)("absolute inset-x-0 top-0 data-[motion=from-end]:animate-fd-enterFromRight data-[motion=from-start]:animate-fd-enterFromLeft data-[motion=to-end]:animate-fd-exitToRight data-[motion=to-start]:animate-fd-exitToLeft",n),...a})});eg.displayName=J.displayName;let ex=H,ew=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:"flex w-full justify-center",children:(0,r.jsx)(ee,{...a,className:(0,ef.QP)("relative h-(--radix-navigation-menu-viewport-height) w-full origin-[top_center] overflow-hidden text-fd-popover-foreground transition-[width,height] duration-300 data-[state=closed]:animate-fd-nav-menu-out data-[state=open]:animate-fd-nav-menu-in",n)})})});ew.displayName=ee.displayName},4810:(e,t,n)=>{n.d(t,{Menu:()=>f,MenuContent:()=>v,MenuLinkItem:()=>u,MenuTrigger:()=>m});var r=n(5155),a=n(1160),o=n(9795),i=n(4727),l=n(162),s=n(6421),d=n(3171);let c=(0,s.F)("",{variants:{variant:{main:"inline-flex items-center gap-2 py-1.5 transition-colors hover:text-fd-popover-foreground/50 data-[active=true]:font-medium data-[active=true]:text-fd-primary [&_svg]:size-4",icon:(0,d.r)({size:"icon",color:"ghost"}),button:(0,d.r)({color:"secondary",className:"gap-1.5 [&_svg]:size-4"})}},defaultVariants:{variant:"main"}});function u(e){let{item:t,...n}=e;if("custom"===t.type)return(0,r.jsx)("div",{className:(0,o.QP)("grid",n.className),children:t.children});if("menu"===t.type){let e=(0,r.jsxs)(r.Fragment,{children:[t.icon,t.text]});return(0,r.jsxs)("div",{className:(0,o.QP)("mb-4 flex flex-col",n.className),children:[(0,r.jsx)("p",{className:"mb-1 text-sm text-fd-muted-foreground",children:t.url?(0,r.jsx)(i.Ws,{asChild:!0,children:(0,r.jsx)(l.A,{href:t.url,children:e})}):e}),t.items.map((e,t)=>(0,r.jsx)(u,{item:e},t))]})}return(0,r.jsx)(i.Ws,{asChild:!0,children:(0,r.jsxs)(a.BaseLinkItem,{item:t,className:(0,o.QP)(c({variant:t.type}),n.className),"aria-label":"icon"===t.type?t.label:void 0,children:[t.icon,"icon"===t.type?void 0:t.text]})})}let f=i.JD;function m(e){let{enableHover:t=!1,...n}=e;return(0,r.jsx)(i.wd,{...n,onPointerMove:t?void 0:e=>e.preventDefault(),className:(0,o.QP)((0,d.r)({size:"icon",color:"ghost"}),n.className),children:n.children})}function v(e){return(0,r.jsx)(i.hA,{...e,className:(0,o.QP)("flex flex-col p-4",e.className),children:e.children})}},6148:(e,t,n)=>{n.d(t,{LanguageToggle:()=>s,LanguageToggleText:()=>d});var r=n(5155),a=n(9180),o=n(9588),i=n(9795),l=n(3171);function s(e){let t=(0,a.s9)();if(!t.locales)throw Error("Missing `<I18nProvider />`");return(0,r.jsxs)(o.AM,{children:[(0,r.jsx)(o.Wv,{"aria-label":t.text.chooseLanguage,...e,className:(0,i.QP)((0,l.r)({color:"ghost",className:"gap-1.5 p-1.5"}),e.className),children:e.children}),(0,r.jsxs)(o.hl,{className:"flex flex-col overflow-hidden p-0",children:[(0,r.jsx)("p",{className:"mb-1 p-2 text-xs font-medium text-fd-muted-foreground",children:t.text.chooseLanguage}),t.locales.map(e=>(0,r.jsx)("button",{type:"button",className:(0,i.QP)("p-2 text-start text-sm",e.locale===t.locale?"bg-fd-primary/10 font-medium text-fd-primary":"hover:bg-fd-accent hover:text-fd-accent-foreground"),onClick:()=>{var n;null===(n=t.onChange)||void 0===n||n.call(t,e.locale)},children:e.name},e.locale))]})]})}function d(e){var t,n;let o=(0,a.s9)(),i=null===(n=o.locales)||void 0===n?void 0:null===(t=n.find(e=>e.locale===o.locale))||void 0===t?void 0:t.name;return(0,r.jsx)("span",{...e,children:i})}},7044:(e,t,n)=>{n.d(t,{$A:()=>i,YL:()=>s});var r=n(5155),a=n(2115);let o=(0,a.createContext)({enabled:!1,hotKey:[],setOpenSearch:()=>void 0});function i(){return(0,a.useContext)(o)}function l(){let[e,t]=(0,a.useState)("⌘");return(0,a.useEffect)(()=>{window.navigator.userAgent.includes("Windows")&&t("Ctrl")},[]),e}function s(e){let{SearchDialog:t,children:n,preload:i=!0,options:s,hotKey:d=[{key:e=>e.metaKey||e.ctrlKey,display:(0,r.jsx)(l,{})},{key:"k",display:"K"}],links:c}=e,[u,f]=(0,a.useState)(!i&&void 0);return(0,a.useEffect)(()=>{let e=e=>{d.every(t=>"string"==typeof t.key?e.key===t.key:t.key(e))&&(f(!0),e.preventDefault())};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[d]),(0,r.jsxs)(o.Provider,{value:(0,a.useMemo)(()=>({enabled:!0,hotKey:d,setOpenSearch:f}),[d]),children:[void 0!==u&&(0,r.jsx)(t,{open:u,onOpenChange:f,links:c,...s}),n]})}},7113:(e,t,n)=>{n.d(t,{D:()=>c,N:()=>u});var r=n(2115),a=(e,t,n,r,a,o,i,l)=>{let s=document.documentElement,d=["light","dark"];function c(t){var n;(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&o?a.map(e=>o[e]||e):a;n?(s.classList.remove(...r),s.classList.add(t)):s.setAttribute(e,t)}),n=t,l&&d.includes(n)&&(s.style.colorScheme=n)}if(r)c(r);else try{let e=localStorage.getItem(t)||n,r=i&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(r)}catch(e){}},o=["light","dark"],i="(prefers-color-scheme: dark)",l="undefined"==typeof window,s=r.createContext(void 0),d={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(s))?e:d},u=e=>r.useContext(s)?r.createElement(r.Fragment,null,e.children):r.createElement(m,{...e}),f=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:l=!0,storageKey:d="theme",themes:c=f,defaultTheme:u=a?"system":"light",attribute:m="data-theme",value:x,children:w,nonce:y,scriptProps:b}=e,[N,C]=r.useState(()=>h(d,u)),[j,k]=r.useState(()=>h(d)),R=x?Object.values(x):c,E=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=g());let r=x?x[t]:t,i=n?p(y):null,s=document.documentElement,d=e=>{"class"===e?(s.classList.remove(...R),r&&s.classList.add(r)):e.startsWith("data-")&&(r?s.setAttribute(e,r):s.removeAttribute(e))};if(Array.isArray(m)?m.forEach(d):d(m),l){let e=o.includes(u)?u:null,n=o.includes(t)?t:e;s.style.colorScheme=n}null==i||i()},[y]),M=r.useCallback(e=>{let t="function"==typeof e?e(N):e;C(t);try{localStorage.setItem(d,t)}catch(e){}},[N]),T=r.useCallback(e=>{k(g(e)),"system"===N&&a&&!t&&E("system")},[N,t]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),r.useEffect(()=>{let e=e=>{e.key===d&&(e.newValue?C(e.newValue):M(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),r.useEffect(()=>{E(null!=t?t:N)},[t,N]);let P=r.useMemo(()=>({theme:N,setTheme:M,forcedTheme:t,resolvedTheme:"system"===N?j:N,themes:a?[...c,"system"]:c,systemTheme:a?j:void 0}),[N,M,t,j,a,c]);return r.createElement(s.Provider,{value:P},r.createElement(v,{forcedTheme:t,storageKey:d,attribute:m,enableSystem:a,enableColorScheme:l,defaultTheme:u,value:x,themes:c,nonce:y,scriptProps:b}),w)},v=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:o,enableSystem:i,enableColorScheme:l,defaultTheme:s,value:d,themes:c,nonce:u,scriptProps:f}=e,m=JSON.stringify([o,n,s,t,c,d,i,l]).slice(1,-1);return r.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:"(".concat(a.toString(),")(").concat(m,")")}})}),h=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},g=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")},7459:(e,t,n)=>{n.d(t,{Navbar:()=>m,NavbarLink:()=>w,NavbarMenu:()=>v,NavbarMenuContent:()=>h,NavbarMenuLink:()=>g,NavbarMenuTrigger:()=>p});var r=n(5155),a=n(2115),o=n(6421),i=n(162),l=n(9795),s=n(1160),d=n(4727),c=n(7772),u=n(3171);let f=(0,o.F)("inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary [&_svg]:size-4");function m(e){let[t,n]=(0,a.useState)(""),{isTransparent:o}=(0,c.h)();return(0,r.jsx)(d.KS,{value:t,onValueChange:n,asChild:!0,children:(0,r.jsxs)("header",{id:"nd-nav",...e,className:(0,l.QP)("fixed left-1/2 top-(--fd-banner-height) z-40 box-content w-full max-w-fd-container -translate-x-1/2 border-b border-fd-foreground/10 transition-colors lg:mt-2 lg:w-[calc(100%-1rem)] lg:rounded-2xl lg:border",t.length>0?"shadow-lg":"shadow-sm",(!o||t.length>0)&&"bg-fd-background/80 backdrop-blur-lg",e.className),children:[(0,r.jsx)(d.SK,{className:"flex h-14 w-full flex-row items-center px-4 lg:h-12",asChild:!0,children:(0,r.jsx)("nav",{children:e.children})}),(0,r.jsx)(d.QW,{})]})})}let v=d.JD;function h(e){return(0,r.jsx)(d.hA,{...e,className:(0,l.QP)("grid grid-cols-1 gap-3 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3",e.className),children:e.children})}function p(e){return(0,r.jsx)(d.wd,{...e,className:(0,l.QP)(f(),"rounded-md",e.className),children:e.children})}function g(e){return(0,r.jsx)(d.Ws,{asChild:!0,children:(0,r.jsx)(i.A,{...e,className:(0,l.QP)("flex flex-col gap-2 rounded-lg border bg-fd-card p-3 transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground",e.className),children:e.children})})}let x=(0,o.F)("",{variants:{variant:{main:f(),button:(0,u.r)({color:"secondary",className:"gap-1.5 [&_svg]:size-4"}),icon:(0,u.r)({color:"ghost",size:"icon"})}},defaultVariants:{variant:"main"}});function w(e){let{item:t,variant:n,...a}=e;return(0,r.jsx)(d.JD,{children:(0,r.jsx)(d.Ws,{asChild:!0,children:(0,r.jsx)(s.BaseLinkItem,{...a,item:t,className:(0,l.QP)(x({variant:n}),a.className),children:a.children})})})}},9588:(e,t,n)=>{n.d(t,{AM:()=>l,Wv:()=>s,hl:()=>d});var r=n(5155),a=n(8342),o=n(2115),i=n(9795);let l=a.bL,s=a.l9,d=o.forwardRef((e,t)=>{let{className:n,align:o="center",sideOffset:l=4,...s}=e;return(0,r.jsx)(a.ZL,{children:(0,r.jsx)(a.UC,{ref:t,align:o,sideOffset:l,side:"bottom",className:(0,i.QP)("z-50 min-w-[220px] max-w-[98vw] rounded-lg border bg-fd-popover p-2 text-sm text-fd-popover-foreground shadow-lg focus-visible:outline-none data-[state=closed]:animate-fd-popover-out data-[state=open]:animate-fd-popover-in",n),...s})})});d.displayName=a.UC.displayName,a.iN}}]);