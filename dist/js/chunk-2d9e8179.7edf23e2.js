(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d9e8179"],{"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),c=r("17c2"),i=r("9112");for(var o in a){var s=n[o],u=s&&s.prototype;if(u&&u.forEach!==c)try{i(u,"forEach",c)}catch(l){u.forEach=c}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),c=a("forEach");t.exports=c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1ef4":function(t,e,r){},"2adf":function(t,e,r){"use strict";r("da2b")},"2bfa":function(t,e,r){"use strict";r("6bf2")},"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,c=r("1dde"),i=c("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var n=r("ade3");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"6bf2":function(t,e,r){},"7a97":function(t,e,r){"use strict";r("bccb")},"96bb":function(t,e,r){"use strict";r("1ef4")},"9bd0":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{key:n,staticClass:"tab-control-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[r("span",[t._v(t._s(e))])])})),0)},a=[],c={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},i=c,o=(r("2adf"),r("2877")),s=Object(o["a"])(i,n,a,!1,null,"dd7fe6da",null);e["a"]=s.exports},"9edf":function(t,e,r){"use strict";r("aee5")},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},aee5:function(t,e,r){},b64b:function(t,e,r){var n=r("23e7"),a=r("7b0b"),c=r("df75"),i=r("d039"),o=i((function(){c(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return c(a(t))}})},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"category"}},[r("nav-bar",[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),r("div",{staticClass:"content"},[r("tab-menu",{attrs:{categories:t.categories},on:{selectItem:t.selectItem}}),r("scroll",{ref:"scroll",attrs:{id:"tab-content"}},[r("div",[r("tab-content-category",{attrs:{subcategories:t.showSubcategory}}),r("tab-control",{attrs:{titles:["综合","新品","销量"]},on:{tabClick:t.tabClick}}),r("goods-list",{attrs:{goods:t.showCategoryDetail}})],1)])],1)],1)},a=[],c=r("5530"),i=r("a7ac"),o=r("5d17"),s=r("9bd0"),u=r("6d71"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll",{attrs:{id:"tab-menu"}},[r("div",{staticClass:"menu-list"},t._l(t.categories,(function(e,n){return r("div",{key:n,staticClass:"menu-list-item",class:{isActive:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[t._v(" "+t._s(e.title)+" ")])})),0)])},f=[],b={name:"TabMenu",components:{Scroll:o["a"]},props:{categories:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}}},d=b,g=(r("2bfa"),r("2877")),y=Object(g["a"])(d,l,f,!1,null,"3fbee24c",null),h=y.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-category"},t._l(t.subcategories.list,(function(e,n){return r("div",{key:n,staticClass:"item"},[r("a",{attrs:{href:e.link}},[r("img",{staticClass:"item-img",attrs:{src:e.image,alt:""}}),r("div",{staticClass:"item-text"},[t._v(t._s(e.title))])])])})),0)},m=[],v={name:"TabContentCategory",props:{subcategories:{type:Object,default:function(){return{}}}}},C=v,O=(r("7a97"),Object(g["a"])(C,p,m,!1,null,"396c5bcd",null)),D=O.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-detail"},t._l(t.categoryDetail,(function(t,e){return r("goods-list-item",{key:e,attrs:{"goods-item":t}})})),1)},x=[],w=r("9977"),k={name:"TabContentDetail",components:{GoodsListItem:w["a"]},props:{categoryDetail:{type:Array,default:function(){return[]}}}},I=k,_=(r("9edf"),Object(g["a"])(I,j,x,!1,null,"c7cd4256",null)),E=_.exports,P=r("1bab");function S(){return Object(P["a"])({url:"/category"})}function T(t){return Object(P["a"])({url:"/subcategory",params:{maitKey:t}})}function $(t,e){return Object(P["a"])({url:"subcategory/detail",params:{miniWallkey:t,type:e}})}var A=r("eecb"),L={name:"Category",components:{NavBar:i["a"],TabMenu:h,Scroll:o["a"],TabContentCategory:D,TabControl:s["a"],TabContenDetail:E,GoodsList:u["a"]},mixins:[A["c"],A["b"]],data:function(){return{categories:[],currentIndex:-1,categoryData:{}}},computed:{showSubcategory:function(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail:function(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}},created:function(){this.getCategory()},methods:{getCategory:function(){var t=this;S().then((function(e){t.categories=e.data.category.list;for(var r=0;r<t.categories.length;r++)t.categoryData[r]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};t.getSubcategories(0)}))},getSubcategories:function(t){var e=this;this.currentIndex=t;var r=this.categories[t].maitKey;T(r).then((function(r){e.categoryData[t].subcategories=r.data,e.categoryData=Object(c["a"])({},e.categoryData)})),this.getCategoryDetail("pop"),this.getCategoryDetail("new"),this.getCategoryDetail("sell")},getCategoryDetail:function(t){var e=this,r=this.categories[this.currentIndex].miniWallkey;$(r,t).then((function(r){e.categoryData[e.currentIndex].categoryDetail[t]=r,e.categoryData=Object(c["a"])({},e.categoryData)}))},selectItem:function(t){this.getSubcategories(t)}},deactivated:function(){this.$bus.$off("itemImageLoad",this.itemImgListener)}},G=L,J=(r("96bb"),Object(g["a"])(G,n,a,!1,null,"7c68670f",null));e["default"]=J.exports},bccb:function(t,e,r){},da2b:function(t,e,r){},dbb4:function(t,e,r){var n=r("23e7"),a=r("83ab"),c=r("56ef"),i=r("fc6a"),o=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),a=o.f,u=c(n),l={},f=0;while(u.length>f)r=a(n,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),a=r("d039"),c=r("fc6a"),i=r("06cf").f,o=r("83ab"),s=a((function(){i(1)})),u=!o||s;n({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})}}]);
//# sourceMappingURL=chunk-2d9e8179.7edf23e2.js.map