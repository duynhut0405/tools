(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{TgFc:function(n,t,e){"use strict";e.r(t);var s=e("o0o1"),a=e.n(s),i=e("q1tI"),c=e.n(i),r=e("okHz"),u=e("LvDl"),l=e("nOHt"),o=c.a.createElement;var m=function(n){var t=n.data,e=Object(l.useRouter)();return o("div",{className:"item mb-3",onClick:function(){return e.push("/news/[slug]","/news/".concat(t.url))}},o("div",{className:"item-img"},o("img",{src:null===t.base_image?"https://th2dev.mangoads.com.vn/themes/storefront/public/images/image.svg?v=5e12e47624638":t.base_image,alt:t.title,onClick:function(){return e.push("/news/[slug]","/news/".concat(t.url))}})),o("div",{className:"item-content ml-3"},o("p",{onClick:function(){return e.push("/news/[slug]","/news/".concat(t.url))}},t.title),o("p",null,t.shortDescription)))},w=e("vgnt"),d=c.a.createElement;function p(n){var t=n.list;return d(r.a,{title:"News"},d("div",{className:"container main_content"},d("h1",{className:"text-center"},"Tin t\u1ee9c"),d("div",{className:"mb-4"},d("h4",null,"Tin n\u1ed5i b\u1eadt"),Object(u.map)(t,(function(n){return 1===n.is_sticky?d(m,{data:n,key:n.newsId}):null}))),d("div",null,d("h4",null,"Tin g\u1ea7n \u0111\xe2y"),Object(u.map)(t,(function(n){return 0===n.is_sticky?d(m,{data:n,key:n.newsId}):null})))))}p.getInitialProps=function(){var n,t;return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,a.a.awrap(Object(w.e)());case 3:return void 0!==(t=e.sent)&&200===t.status&&(n=t.data),e.abrupt("return",{list:n});case 6:case"end":return e.stop()}}))};t.default=p},vDAS:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return e("TgFc")}])}},[["vDAS",1,2,3,0,4,6,5]]]);