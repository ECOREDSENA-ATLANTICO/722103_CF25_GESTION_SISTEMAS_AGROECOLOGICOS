(function(e){function n(n){for(var o,t,r=n[0],s=n[1],u=n[2],d=0,l=[];d<r.length;d++)t=r[d],Object.prototype.hasOwnProperty.call(c,t)&&c[t]&&l.push(c[t][0]),c[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(n);while(l.length)l.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],o=!0,t=1;t<a.length;t++){var r=a[t];0!==c[r]&&(o=!1)}o&&(i.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},t={app:0},c={app:0},i=[];function r(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"ada6d3d5","chunk-0206bfa0":"db848401","chunk-110f1f0b":"61a4ed11","chunk-13a6037e":"0dbe5c65","chunk-179248a2":"d6cf2861","chunk-18f95272":"9d8cf629","chunk-2a9fce91":"0ecc359b","chunk-2c06842c":"6cae5bfb","chunk-2d0c5615":"75151c9d","chunk-2d0e96ec":"a0992f3a","chunk-2d208d90":"7ca99724","chunk-2d21d0e2":"662065e2","chunk-2d22c123":"3ab92924","chunk-2e80bb9a":"84e37d65","chunk-319206de":"0748c1e6","chunk-36769079":"db07006a","chunk-4cdd78c0":"0277c010","chunk-515a8379":"5df7d778","chunk-53ccb27e":"cc458c56","chunk-55d286b8":"f370762b","chunk-59974754":"12fa6331","chunk-5d1ce150":"6ee84259","chunk-60cbc06b":"c331d9c0","chunk-623f2040":"dfc3159f","chunk-659152b8":"592218b5","chunk-6a43ec24":"c4a1c2ef","chunk-6e1e538a":"0a30a368","chunk-6e613899":"042dd297","chunk-766a929b":"cee86727","chunk-7794bb60":"280b6865","chunk-c796899c":"d7fc5ff3","chunk-e8a7823a":"8074120d","chunk-fde47172":"53c5fbd8",comple:"2f8fd120",creditos:"2d37fb69",glosario:"bf573195",intro:"6d5ae0d2",referencias:"3b55fd3c",sintesis:"4ed59572",tema1:"e7c0a51f",tema2:"75774c78",tema3:"3966039a"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};t[e]?n.push(t[e]):0!==t[e]&&a[e]&&n.push(t[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"8b3db2e4","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"473b497b","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"8024496b","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"52cca4c9",creditos:"da97a97d",glosario:"6e3ec874",intro:"31d6cfe0",referencias:"646c38a2",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",c=s.p+o,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var u=i[r],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===c))return n()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){u=l[r],d=u.getAttribute("data-href");if(d===o||d===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete t[e],f.parentNode.removeChild(f),a(i)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){t[e]=0})));var o=c[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,a){o=c[e]=[n,a]}));n.push(o[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=r(e);var l=new Error;u=function(n){d.onerror=d.onload=null,clearTimeout(f);var a=c[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",l.name="ChunkLoadError",l.type=o,l.request=t,a[1](l)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var f=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"417a":function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.4db4b479.svg"},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},c=[],i={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},r=i,s=a("2877"),u=Object(s["a"])(r,t,c,!1,null,null,null),d=u.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),f=a("8c4f"),m=a("ae58"),p=a("7e58");l["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,v=a("1c2c"),g=(a("a3a0"),{global:{componenteFormativo:"Evaluación financiera y análisis de riesgos para proyectos agroecológicos.",descripcionCurso:"La evaluación de los proyectos está en la construcción y desarrollo de todos los proyectos, esta evaluación es la que muestra que todos los elementos planeados están funcionando tal como se predijo, esa es la realidad que muestra el impacto del programa, esta evaluación se hace en varios elementos como se muestra en el presente componente formativo.",imagenBannerPrincipal:a("d756"),fondoBannerPrincipal:a("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("71f8")},{clases:["banner-principal-decorativo-2"],imagen:a("8f04")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Evaluación de proyectos",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Evaluación de la coherencia y pertinencia del proyecto",hash:"t_1_1"},{numero:"1.2",titulo:"Análisis de riesgos de proyectos",hash:"t_1_2"},{numero:"1.3",titulo:"Evaluación técnica",hash:"t_1_3"},{numero:"1.4",titulo:"Evaluación financiera",hash:"t_1_4"},{numero:"1.5",titulo:" Evaluación económica y social",hash:"t_1_5"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/prueba.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"",referencia:"",tipo:"",link:"https://www.google.com/"},{tema:"",referencia:"",tipo:"",descarga:"/downloads/prueba.pdf"}],glosario:[{termino:"Término",significado:"Texto de la definición"},{termino:"<em>Término con extranjerismo</em>",significado:"Definición"}],referencias:[{referencia:"",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Olga Constanza Bermúdez Jaimes",cargo:"Responsable de Línea de Producción",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Nombre responsable",cargo:"Nombre del rol",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Nombre responsable",cargo:"Diseñador de Contenidos Digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Nombre responsable",cargo:"Desarrollador Fullstack",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Nombre",cargo:"Animador y Producción audiovisual",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Nombre",cargo:"Actividad Didáctica",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Jaime Hernan Tejada",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Margarita Marcela Medrano",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro de Servicios de Salud - Regional Antioquia"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=g;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:v["a"],render:function(e){return e(d)}}).$mount("#app")},"71f8":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.335b0c53.svg"},"8f04":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.2830a3d0.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,n,a){e.exports=a.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,n,a){},d756:function(e,n,a){e.exports=a.p+"img/banner-principal.bd09729a.svg"}});
//# sourceMappingURL=app.e60c91c7.js.map