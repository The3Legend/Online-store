(function(t){function e(e){for(var a,s,c=e[0],o=e[1],l=e[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,c=1;c<i.length;c++){var o=i[c];0!==r[o]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},r={app:0},n=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Online-store/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},1100:function(t,e,i){"use strict";i("989d")},"198a":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Navbar"),i("Frame")],1)},n=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"navbar"}},[i("div",{staticClass:"logo"},[t._v("LOGO TYPE")]),i("div",{staticClass:"logo-text"},[t._v("Интернет-магазин бытовых и пищевых товаров")])])}],o={data:function(){return{}}},l=o,u=(i("904c"),i("2877")),p=Object(u["a"])(l,s,c,!1,null,"4c75184a",null),d=p.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"frame"}},[i("div",{staticClass:"respons"},[i("div",{attrs:{id:"Chekbox"}},[i("div",{ref:"priceControl",staticClass:"price"},[i("div",{staticClass:"price-container"},[i("div",{staticClass:"text-price"},[t._v(" Цена(грн) ")]),i("div",[i("svg",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5",modifiers:{"collapse-5":!0}}],attrs:{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.changPrice}},[i("path",{attrs:{d:"M13.8897 8.15024L13.6678 8.38388C13.5207 8.53871 13.2823 8.53871 13.1352 8.38388L6.99999 1.92453L0.864777 8.38388C0.717716 8.53871 0.479267 8.53871 0.332175 8.38388L0.110296 8.15024C-0.0367652 7.99541 -0.0367652 7.74436 0.110296 7.58953L6.7337 0.616124C6.88076 0.461292 7.11921 0.461292 7.2663 0.616124L13.8897 7.58953C14.0368 7.74436 14.0368 7.99541 13.8897 8.15024Z",fill:"#262329"}})])])]),i("div",{staticClass:"range-slider"},[i("b-collapse",{attrs:{visible:"",id:"collapse-5"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.minPrice,expression:"minPrice"}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.minPrice},on:{input:function(e){e.target.composing||(t.minPrice=e.target.value)}}}),t._v(" - "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPrice,expression:"maxPrice"}],staticClass:"input",attrs:{type:"number"},domProps:{value:t.maxPrice},on:{input:function(e){e.target.composing||(t.maxPrice=e.target.value)}}})])],1)]),i("div",{ref:"materialControl",staticClass:"materials"},[i("div",{staticClass:"material"},[i("div",{staticClass:"text-material"},[t._v("Материал")]),i("div",{staticClass:"material-vector"},[i("svg",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],staticClass:"m-1",attrs:{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.changMaterial}},[i("path",{attrs:{d:"M13.8897 8.15024L13.6678 8.38388C13.5207 8.53871 13.2823 8.53871 13.1352 8.38388L6.99999 1.92453L0.864777 8.38388C0.717716 8.53871 0.479267 8.53871 0.332175 8.38388L0.110296 8.15024C-0.0367652 7.99541 -0.0367652 7.74436 0.110296 7.58953L6.7337 0.616124C6.88076 0.461292 7.11921 0.461292 7.2663 0.616124L13.8897 7.58953C14.0368 7.74436 14.0368 7.99541 13.8897 8.15024Z",fill:"#262329"}})])])]),i("b-collapse",{staticClass:"checkbox-filt",attrs:{visible:"",id:"collapse-3"}},t._l(t.materials,(function(e){return i("b-form-checkbox",{key:e.id,staticClass:"check-style",attrs:{value:e.title},on:{click:t.filterCheckProducts},model:{value:t.checkboxMaterial,callback:function(e){t.checkboxMaterial=e},expression:"checkboxMaterial"}},[t._v(" "+t._s(e.title)+" ")])})),1)],1),i("div",{ref:"coutryControl",staticClass:"country"},[i("div",{staticClass:"country-selection"},[i("div",{staticClass:"country-text"},[t._v("Страна производитель")]),i("div",[i("svg",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4",modifiers:{"collapse-4":!0}}],attrs:{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.changCountry}},[i("path",{attrs:{d:"M13.8897 0.349759L13.6678 0.116123C13.5207 -0.0387085 13.2823 -0.0387085 13.1352 0.116123L6.99999 6.57547L0.864777 0.116123C0.717716 -0.0387087 0.479267 -0.0387087 0.332175 0.116123L0.110296 0.349759C-0.0367652 0.50459 -0.0367652 0.755638 0.110296 0.91047L6.7337 7.88388C6.88076 8.03871 7.11921 8.03871 7.2663 7.88388L13.8897 0.91047C14.0368 0.755638 14.0368 0.50459 13.8897 0.349759Z",fill:"#262329"}})])])]),i("b-collapse",{staticClass:"checkbox-filt",attrs:{visible:"",id:"collapse-4"}},t._l(t.countries,(function(e){return i("b-form-checkbox",{key:e.id,staticClass:"check-style",attrs:{value:e.title},on:{click:t.filterCheckProducts},model:{value:t.checkboxCountry,callback:function(e){t.checkboxCountry=e},expression:"checkboxCountry"}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)]),i("CardGrop",{attrs:{filterCheckProducts:t.filterCheckProducts}})],1),i("ValidateForm"),i("Footer")],1)},h=[],v=(i("4de4"),i("caad"),i("a9e3"),i("2532"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"content"}},[i("div",{staticClass:"card-content"},[i("div",{staticClass:"card-container"},t._l(t.paginatedUsers,(function(e){return i("div",{key:e.id,staticClass:"cards"},[i("div",{staticClass:"oneCard"},[i("div",{staticClass:"imgCard"},[i("img",{attrs:{src:"http://95.217.16.207:1337"+e.image[0].url,alt:"cat :)"}})]),i("div",{staticClass:"descriptionCard"},[i("div",{staticClass:"ProductDescriptionCard"},[i("p",{staticClass:"title-card"},[t._v(t._s(e.title))])]),i("div",{staticClass:"descriptionProduct"},[null!==e.material?i("p",{staticClass:"material"},[t._v(" Материал: "+t._s(e.material.title)+" ")]):i("p",{staticClass:"material"},[t._v("Материал: Не задано")]),i("p",{staticClass:"manufacturer"},[t._v(" Производитель: "+t._s(e.manufacturer.seo_url)+" ")]),i("p",{staticClass:"country"},[t._v(" Страна производитель: "+t._s(e.manufacturer.title)+" ")])]),i("div",{staticClass:"price"},[i("span",{staticClass:"start-price"},[t._v(t._s(e.price)+"p.")]),null!==e.special_price?i("span",{staticClass:"best-price"},[t._v(t._s(e.special_price)+"p.")]):t._e()])])])])})),0)]),i("div",{staticClass:"v-table_pagination"},[i("svg",{attrs:{width:"9",height:"15",viewBox:"0 0 9 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.pageClick(1)}}},[i("path",{attrs:{d:"M0.213735 7.99795L7.33096 14.7935C7.61492 15.0688 8.0741 15.0688 8.35806 14.7935L8.78703 14.3776C9.07099 14.1022 9.07099 13.657 8.78703 13.3817L2.60628 7.5L8.78099 1.61834C9.06495 1.343 9.06495 0.897774 8.78099 0.622437L8.35202 0.206503C8.06805 -0.0688342 7.60888 -0.0688342 7.32492 0.206503L0.207693 7.00205C-0.0702295 7.27739 -0.0702286 7.72261 0.213735 7.99795Z",fill:"#222222"}})]),t._l(t.pages,(function(e){return i("div",{key:e,staticClass:"page",class:{"page-selected":e===t.pageNumber},on:{click:function(i){return t.pageClick(e)}}},[t._v(" "+t._s(e)+" ")])})),i("svg",{attrs:{width:"9",height:"15",viewBox:"0 0 9 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.pageClick(2)}}},[i("path",{attrs:{d:"M8.78627 7.99795L1.66904 14.7935C1.38508 15.0688 0.925903 15.0688 0.64194 14.7935L0.212973 14.3776C-0.070991 14.1022 -0.070991 13.657 0.212973 13.3817L6.39372 7.5L0.219015 1.61834C-0.0649492 1.343 -0.0649492 0.897774 0.219015 0.622437L0.647981 0.206503C0.931945 -0.0688342 1.39112 -0.0688342 1.67508 0.206503L8.79231 7.00205C9.07023 7.27739 9.07023 7.72261 8.78627 7.99795Z",fill:"#222222"}})])],2)])}),m=[],C=(i("fb6a"),i("bc3a")),g=i.n(C),b=g.a.create({baseURL:"http://95.217.16.207:1337/products"}),_={name:"CardGrop",props:{filterCheckProducts:{type:Array,default:function(){return[]}}},data:function(){return{products:[],usersPerPage:6,pageNumber:1,something:"",massage:"",newArrayProducts:[]}},created:function(){var t=this;b.get().then((function(e){return t.products=e.data})).catch((function(t){console.log(t)}))},computed:{pages:function(){return Math.ceil(this.filterCheckProducts.length/6)},paginatedUsers:function(){var t=(this.pageNumber-1)*this.usersPerPage,e=t+this.usersPerPage;return this.filterCheckProducts.slice(t,e)}},methods:{pageClick:function(t){this.pageNumber=t}}},x=_,y=(i("d589"),Object(u["a"])(x,v,m,!1,null,"0883a956",null)),k=y.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"res"},[i("div",{attrs:{id:"call"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{type:"text",name:"number",id:"number",placeholder:"Введите ваш email"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),i("button",{attrs:{type:"submit"},on:{click:t.validation}},[t._v("Заказать звонок")])]),t.inputValidate?i("div",{staticClass:"error"},[i("p",[t._v("Некорректные данные")])]):t._e()])},P=[],L=(i("ac1f"),i("466d"),{name:"ValidateForm",data:function(){return{inputValue:"",inputValidate:!1}},methods:{validation:function(){var t=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;this.inputValue.match(t)?(b.post("http://95.217.16.207:1337/forms",{email:this.inputValue}).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)})),this.inputValidate=!1):this.inputValidate=!0,this.inputValue=""}}}),M=L,O=(i("9086"),Object(u["a"])(M,w,P,!1,null,"7cec271e",null)),$=O.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"footer"}},[i("div",{staticClass:"contact"},[i("p",{staticClass:"contact-info"},[t._v("Контакты")]),i("p",[t._v("+7 (495) - 641 - 61 - 55")]),i("p",[t._v("Пн-Пт с 09:00 до 17:00 Сб-Вс: выходной")])]),i("div",{staticClass:"footer-info"},[i("p",[t._v("Интернет магазин | Все права защищены © 2020")])])])}],N={name:"Footer"},T=N,E=(i("6afd"),Object(u["a"])(T,j,V,!1,null,"5021c2e4",null)),F=E.exports,B={name:"Frame",components:{CardGrop:k,ValidateForm:$,Footer:F},data:function(){return{allProducts:[],minPrice:0,maxPrice:999999,materials:[],countries:[],checkboxMaterial:[],checkboxCountry:[]}},created:function(){var t=this;b.get("http://95.217.16.207:1337/materials").then((function(e){t.materials=e.data})).catch((function(t){console.log(t)})),b.get("http://95.217.16.207:1337/manufacturers").then((function(e){t.countries=e.data})).catch((function(t){console.log(t)})),b.get().then((function(e){t.allProducts=e.data})).catch((function(t){console.log(t)}))},methods:{changMaterial:function(){var t=this;this.responsMaterial=!this.responsMaterial,this.responsMaterial?setTimeout((function(){t.$refs.materialControl.style.height="80px"}),200):setTimeout((function(){t.$refs.materialControl.style.height="322px"}),100)},changCountry:function(){var t=this;this.responsCountry=!this.responsCountry,this.responsCountry?setTimeout((function(){t.$refs.coutryControl.style.height="45px"}),100):setTimeout((function(){t.$refs.coutryControl.style.height="129px"}),100)},changPrice:function(){var t=this;this.responsPrice=!this.responsPrice,this.responsPrice?setTimeout((function(){t.$refs.priceControl.style.height="60px"}),100):setTimeout((function(){t.$refs.priceControl.style.height="129px"}),100)}},computed:{filterCheckProducts:function(){var t=this,e=this.allProducts;return this.checkboxMaterial.length>0&&(e=e.filter((function(e){if(null!==e.material)return t.checkboxMaterial.includes(e.material.title)}))),this.checkboxCountry.length>0&&(e=e.filter((function(e){return t.checkboxCountry.includes(e.manufacturer.title)}))),e.filter((function(e){return Number(e.price)>=t.minPrice&&Number(e.price)<=t.maxPrice}))}}},S=B,Z=(i("1100"),Object(u["a"])(S,f,h,!1,null,"43501242",null)),G=Z.exports,U={name:"app",components:{Navbar:d,Frame:G},data:function(){return{}}},A=U,J=(i("034f"),Object(u["a"])(A,r,n,!1,null,null,null)),z=J.exports,D=i("5f5b");i("f9e3"),i("2dd8");a["default"].use(D["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(z)}}).$mount("#app")},"6afd":function(t,e,i){"use strict";i("198a")},"812c":function(t,e,i){},"85ec":function(t,e,i){},"898c":function(t,e,i){},"904c":function(t,e,i){"use strict";i("898c")},9086:function(t,e,i){"use strict";i("bff3")},"989d":function(t,e,i){},bff3:function(t,e,i){},d589:function(t,e,i){"use strict";i("812c")}});
//# sourceMappingURL=app.6ad7d57f.js.map