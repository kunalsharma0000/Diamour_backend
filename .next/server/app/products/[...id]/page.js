(()=>{var e={};e.id=571,e.ids=[571],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},90925:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>n,routeModule:()=>m,tree:()=>o}),s(56354),s(37764),s(35866);var i=s(23191),t=s(88716),d=s(37922),l=s.n(d),c=s(95231),a={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>c[e]);s.d(r,a);let o=["",{children:["products",{children:["[...id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,56354)),"C:\\Users\\kunal\\OneDrive\\Desktop\\diamour_frontend\\app\\products\\[...id]\\page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,37764)),"C:\\Users\\kunal\\OneDrive\\Desktop\\diamour_frontend\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],n=["C:\\Users\\kunal\\OneDrive\\Desktop\\diamour_frontend\\app\\products\\[...id]\\page.js"],p="/products/[...id]/page",u={require:s,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/products/[...id]/page",pathname:"/products/[...id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},52887:(e,r,s)=>{Promise.resolve().then(s.bind(s,62953))},17153:(e,r,s)=>{"use strict";s.d(r,{Z:()=>i});let i={ALL_PRODUCT:"https://diamour-backend-7mz7m.ondigitalocean.app/core/products"}},62953:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>B});var i=s(10326),t=s(17577),d=s(67387),l=s.n(d),c=s(57471),a=s.n(c),o=s(71846);s(63754),s(70036),s(12119),s(4919);var n=s(75868);function p(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z"}}]})(e)}function u(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"}}]})(e)}var m=s(70687),x=s(55637),_=s(16255);let g=({images:e,video:r,detail:s})=>{console.log(e);let[d,l]=(0,t.useState)(!1),[c,n]=(0,t.useState)(e),[g,h]=(0,t.useState)(r),v=(0,t.useRef)(null),{addToWishlist:j}=(0,x.Y)(),[S,N]=(0,t.useState)(null);return(0,t.useEffect)(()=>{console.log(r),n(e),l(!1),h(r)},[e,r]),(0,i.jsxs)("div",{className:a().spsSlider,children:[i.jsx("button",{onClick:()=>{j(s),alert("Item Added to Wishlist!")},className:a().productBag,children:i.jsx(m.kTx,{})}),(0,i.jsxs)(o.tq,{loop:!0,spaceBetween:10,thumbs:{swiper:S},modules:[_.Rv,_.W_,_.o3],className:a().spsSliderTop,navigation:!0,children:[c?.map((e,r)=>i.jsx(i.Fragment,{children:i.jsx(o.o5,{children:i.jsx("div",{className:a().thumbImage,children:i.jsx("img",{src:e,alt:""})})},r)})),g&&i.jsx(o.o5,{children:(0,i.jsxs)("div",{className:a().thumbImage,children:[i.jsx("div",{className:a().videoOverlay}),i.jsx("video",{ref:v,children:i.jsx("source",{src:g,type:"video/mp4"})}),i.jsx("div",{className:a().playButton,onClick:()=>{v.current&&(d?v.current.pause():v.current.play(),l(!d))},children:d?i.jsx(p,{}):i.jsx(u,{})})]})},g)]}),(0,i.jsxs)(o.tq,{onSwiper:N,loop:!0,spaceBetween:2,slidesPerView:3,freeMode:!0,watchSlidesProgress:!0,modules:[_.Rv,_.W_,_.o3],className:a().spsSliderBottom,children:[c?.map((e,r)=>i.jsx(i.Fragment,{children:i.jsx(o.o5,{children:i.jsx("div",{className:a().restImage,children:i.jsx("img",{src:e,alt:""})})},r)})),g&&i.jsx(o.o5,{children:i.jsx("div",{className:a().restImage,children:i.jsx("video",{children:i.jsx("source",{src:g,type:"video/mp4"})})})},g)]})]})};s(82316);var h=s(93616),v=s.n(h);s(56955),s(23141);var j=s(90434),S=s(64446);s(17153);var N=s(24490);let C=({prodCat:e})=>{let[r,s]=(0,t.useState)(null),[d,l]=(0,t.useState)(!1),[c,a]=(0,t.useState)([]);return(0,t.useEffect)(()=>{l(!0),(async()=>{try{let{data:r,status:s}=await N.Z.get("https://diamour-backend-7mz7m.ondigitalocean.app/core/productsUnOp");if(console.log(r),200===s){let s=r.filter(r=>r.category.category_name===e);console.log(s),a(s.slice(0,8)),l(!1)}}catch(e){console.log(e),a(!1)}})()},[]),i.jsx("div",{children:(0,i.jsxs)(o.tq,{breakpoints:{0:{slidesPerView:1.5},550:{slidesPerView:1.5},768:{slidesPerView:2},1024:{slidesPerView:3},1440:{slidesPerView:4}},modules:[_.tl],pagination:{clickable:!0},onSwiper:e=>s(e),style:{"--swiper-pagination-color":"#000","--swiper-pagination-bullet-inactive-color":"#808080","--swiper-pagination-bullet-inactive-opacity":"1","--swiper-pagination-bullet-size":"14px","--swiper-pagination-bullet-horizontal-gap":"6px"},className:v().productSlider,children:[i.jsx("div",{className:v().productSliderWrapper,children:c?.map(e=>i.jsx(o.o5,{children:i.jsx(j.default,{href:`/products/${e?.slug}`,className:v().productLink,children:i.jsxs("div",{className:v().productSliderCard,children:[i.jsx("div",{className:v().productBag,children:i.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"})})}),i.jsx("div",{className:v().pscImg,children:i.jsx("img",{src:e?.main_image,alt:""})}),i.jsxs("div",{className:v().pscText,children:[i.jsx("div",{className:v().psctName,children:e?.title}),i.jsxs("div",{className:v().psctPrice,children:["₹ ",e?.price,"/-"]})]})]})})},e?.id))}),i.jsx("div",{className:v().sliderExtras,children:(0,i.jsxs)("div",{className:v().sliderNavButton,children:[i.jsx("button",{onClick:()=>{r.slidePrev()},children:i.jsx(S.Ao2,{})}),i.jsx("button",{onClick:()=>{r.slideNext()},children:i.jsx(S.Rgz,{})})]})})]})})};var P=s(6855),k=s(91076),w=s(35047),f=s(73177),b=s(25842),y=s(2114);let B=e=>{let{addToCart:r}=(0,k.i)();(0,w.useRouter)();let[s,d]=(0,t.useState)(!0),[c,a]=(0,t.useState)(),[o,n]=(0,t.useState)(!1),[p,u]=(0,t.useState)("silver"),[_,h]=(0,t.useState)("15"),[v,j]=(0,t.useState)([]),[S,B]=(0,t.useState)(null),[M,D]=(0,t.useState)(!1),{addToWishlist:I}=(0,x.Y)(),{currency:q}=(0,f.V)(),H=(0,b.v9)(e=>e.currencyRate.rate);return((0,t.useEffect)(()=>{if("silver"===p){j(c?.variants[2].images);let e=c?.videos?.find(e=>"silver"===e.color||"Silver"===e.color);console.log("matchingVideo",e),e?B(e.video):B(null)}}),(0,t.useEffect)(()=>{if("silver"===p){j(c?.variants[2].images);let e=c?.videos?.find(e=>"silver"===e.color||"Silver"===e.color);console.log("matchingVideo",e),e?B(e.video):B(null)}if("gold"===p){j(c?.variants[0].images),console.log("gold selected  ",S);let e=c?.videos?.find(e=>"Gold"===e.color||"gold"===e.color);e?B(e.video):B(null)}if("rose"===p){j(c?.variants[1].images);let e=c?.videos?.find(e=>"Rose"===e.color||"Copper"===e.color||"rose"===e.color||"copper"===e.color);e?B(e.video):B(null)}},[p]),(0,t.useEffect)(()=>{let r=e.params.id;(async()=>{try{d(!0);let{data:e,status:s}=await N.Z.get(`https://diamour-backend-7mz7m.ondigitalocean.app/core/product/${r}`);if(200===s){a(e),j(e?.variants[2]?.images);let r=e?.videos?.find(e=>"silver"===e.color);r?B(r.video):B(null),d(!1)}}catch(e){console.log(e)}})()},[]),s)?(console.log("video >>>> 1234",S),i.jsx(P.Z,{})):(0,i.jsxs)("div",{className:l().productDetail,children:[(0,i.jsxs)("div",{className:l().productDetailTop,children:[i.jsx("div",{className:l().pdtLeft,children:i.jsx(g,{images:v,video:S,detail:c})}),(0,i.jsxs)("div",{className:l().pdtRight,children:[(0,i.jsxs)("div",{className:l().pdtrHeading,children:[i.jsx("div",{className:l().pdtrhHead,children:c?.title}),i.jsx("div",{onClick:()=>{I(c),alert("Item Added to Wishlist!")},className:`${l().pdtrbSec2} rounded`}),i.jsx("div",{className:l().pdtrhSubHead,children:c?.category?.category_name})]}),(0,i.jsxs)("div",{className:l().pdtrColorMobile,children:[i.jsx("div",{className:l().pdtrcHeading,children:"Silver Finish "}),(0,i.jsxs)("div",{className:l().pdtrcSelect,children:[i.jsx("div",{className:`${l().pdtrcssilver} ${"silver"===p?l().pdtrcsSelected:""}`,onClick:()=>{u("silver")}}),i.jsx("div",{className:`${l().pdtrcsgold} ${"gold"===p?l().pdtrcsSelected:""}`,onClick:()=>u("gold")}),i.jsx("div",{className:`${l().pdtrcsrose} ${"rose"===p?l().pdtrcsSelected:""}`,onClick:()=>u("rose")})]})]}),(0,i.jsxs)("div",{className:l().pdtrPara,children:[M?i.jsx(i.Fragment,{children:c?.description}):(0,i.jsxs)(i.Fragment,{children:[c?.description.slice(0,200),"..."]}),i.jsx("div",{className:l().readButton,onClick:()=>D(!M),children:M?"Read Less":"Read More"})]}),(0,i.jsxs)("div",{className:l().pdtrMoreDetails,children:[(0,i.jsxs)("div",{className:l().pdtrPrice,children:["USD"===q?i.jsx(y.RcD,{}):"GBP"===q?i.jsx(y.t6Z,{}):"EUR"===q?i.jsx(y.Jzf,{}):"INR"===q?i.jsx(y.t9y,{}):"",(c?.price*H).toFixed(2)," ","(Excl. taxes)"]}),(0,i.jsxs)("div",{className:l().pdtrMore,children:[(0,i.jsxs)("div",{className:l().pdtrmDiv,children:[i.jsx("div",{className:l().pdtrmdHead,children:"Diamond weight"}),i.jsx("div",{className:l().pdtrmdText,children:c?.diamond_color_stone_weight})]}),(0,i.jsxs)("div",{className:l().pdtrmDiv,children:[i.jsx("div",{className:l().pdtrmdHead,children:"Total Weight"}),i.jsx("div",{className:l().pdtrmdText,children:c?.total_weight})]}),(0,i.jsxs)("div",{className:l().pdtrmDiv,children:[i.jsx("div",{className:l().pdtrmdHead,children:"Silver Purity"}),i.jsx("div",{className:l().pdtrmdText,children:c?.gold_purity})]}),(0,i.jsxs)("div",{className:l().pdtrmDiv,children:[i.jsx("div",{className:l().pdtrmdHead,children:"Diamond Clarity"}),i.jsx("div",{className:l().pdtrmdText,children:c?.diamond_clarity})]})]})]}),(0,i.jsxs)("div",{className:l().pdtrColor,children:[i.jsx("div",{className:l().pdtrcHeading,children:"Silver Finish"}),(0,i.jsxs)("div",{className:l().pdtrcSelect,children:[i.jsx("div",{className:`${l().pdtrcssilver} ${"silver"===p?l().pdtrcsSelected:""}`,onClick:()=>{u("silver")}}),i.jsx("div",{className:`${l().pdtrcsgold} ${"gold"===p?l().pdtrcsSelected:""}`,onClick:()=>u("gold")}),i.jsx("div",{className:`${l().pdtrcsrose} ${"rose"===p?l().pdtrcsSelected:""}`,onClick:()=>u("rose")})]})]}),c?.category?.category_name==="Rings"&&(0,i.jsxs)("div",{className:l().pdtrSize,children:[i.jsx("div",{className:l().pdtrsChart,children:"Ring Size"}),(0,i.jsxs)("div",{className:l().pdtrsDrop,onClick:()=>n(!o),children:[_," ",i.jsx(m.OrA,{}),o&&(0,i.jsxs)("div",{className:l().pdtrsdropdown,children:[i.jsx("div",{onClick:()=>h("1"),children:"1"}),i.jsx("div",{onClick:()=>h("2"),children:"2"}),i.jsx("div",{onClick:()=>h("3"),children:"3"}),i.jsx("div",{onClick:()=>h("4"),children:"4"}),i.jsx("div",{onClick:()=>h("5"),children:"5"}),i.jsx("div",{onClick:()=>h("6"),children:"6"}),i.jsx("div",{onClick:()=>h("7"),children:"7"}),i.jsx("div",{onClick:()=>h("8"),children:"8"}),i.jsx("div",{onClick:()=>h("9"),children:"9"}),i.jsx("div",{onClick:()=>h("10"),children:"10"}),i.jsx("div",{onClick:()=>h("11"),children:"11"}),i.jsx("div",{onClick:()=>h("12"),children:"12"}),i.jsx("div",{onClick:()=>h("13"),children:"13"}),i.jsx("div",{onClick:()=>h("14"),children:"14"}),i.jsx("div",{onClick:()=>h("15"),children:"15"}),i.jsx("div",{onClick:()=>h("16"),children:"16"}),i.jsx("div",{onClick:()=>h("17"),children:"17"}),i.jsx("div",{onClick:()=>h("18"),children:"18"}),i.jsx("div",{onClick:()=>h("19"),children:"19"}),i.jsx("div",{onClick:()=>h("20"),children:"20"}),i.jsx("div",{onClick:()=>h("21"),children:"21"}),i.jsx("div",{onClick:()=>h("22"),children:"22"}),i.jsx("div",{onClick:()=>h("23"),children:"23"}),i.jsx("div",{onClick:()=>h("24"),children:"24"}),i.jsx("div",{onClick:()=>h("25"),children:"25"}),i.jsx("div",{onClick:()=>h("26"),children:"26"}),i.jsx("div",{onClick:()=>h("27"),children:"27"}),i.jsx("div",{onClick:()=>h("28"),children:"28"}),i.jsx("div",{onClick:()=>h("29"),children:"29"}),i.jsx("div",{onClick:()=>h("30"),children:"30"})]})]})]}),(0,i.jsxs)("div",{className:l().pdtrBtn,children:[i.jsx("div",{className:`${l().pdtrbPri} rounded`,onClick:()=>{r(c,1,p,_),alert("Item added to cart!")},children:"add to cart"}),i.jsx("div",{className:`${l().pdtrbSec} rounded`,onClick:()=>{window.open("https://wa.me/919082803080?text=Hey I'm interested to buy jewellery from Diamour","_blank")},children:"Enquire Gold Price"})]}),i.jsx("div",{children:(0,i.jsxs)("div",{className:l().iconGrid,children:[i.jsx("img",{className:l().iconItem,src:"/assets/icons/01.png",alt:""}),i.jsx("img",{className:l().iconItem,src:"/assets/icons/02.png",alt:""}),i.jsx("img",{className:l().iconItem,src:"/assets/icons/03.png",alt:""}),i.jsx("img",{className:l().iconItem,src:"/assets/icons/04.png",alt:""}),i.jsx("img",{className:l().iconItem,src:"/assets/icons/05.png",alt:""})]})})]})]}),(0,i.jsxs)("div",{className:`${l().productDetailBottom}`,children:[(0,i.jsxs)("div",{className:l().pdbMoreHeading,children:[(0,i.jsxs)("div",{className:l().pdbHeadingMore,children:["You may also lik",i.jsx("span",{className:l().thiscolor,children:"e this"})]}),i.jsx("div",{className:l().pdbCircle})]}),i.jsx("div",{className:l().productMore,children:i.jsx(C,{prodCat:c?.category?.category_name})})]})]})}},6855:(e,r,s)=>{"use strict";s.d(r,{Z:()=>l});var i=s(10326);s(17577);var t=s(86041),d=s.n(t);let l=()=>(console.log("Loader"),i.jsx("div",{className:d().loaderWrap,children:i.jsx("img",{src:"/assets/img/loader.gif",alt:""})}))},82316:(e,r,s)=>{"use strict";s.d(r,{Z:()=>m});var i=s(10326),t=s(17577),d=s(16255),l=s(71846),c=s(72992),a=s.n(c),o=s(56955);s(12119),s(23141);var n=s(90434);s(63754);var p=s(64446),u=s(25842);let m=({productData:e,category:r})=>{let[s,c]=(0,t.useState)(null),m=()=>{s.slidePrev()},x=(0,u.v9)(e=>e.currencyRate.rate),_=(0,u.v9)(e=>e.currencyRate.currency);return i.jsx("div",{style:{zIndex:0},children:(0,i.jsxs)(l.tq,{breakpoints:{0:{slidesPerView:2},550:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:4},1440:{slidesPerView:4}},modules:[d.tl],pagination:{clickable:!0},onSwiper:e=>c(e),style:{zIndex:0},className:a().productSlider,children:[e?e.map(e=>i.jsx(l.o5,{children:i.jsx(n.default,{href:`/products/${e.prodSlug?e.prodSlug:e.slug}`,className:a().productText,children:(0,i.jsxs)("div",{className:a().productSliderCard,children:[i.jsx("div",{className:a().productBag,children:i.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"})})}),i.jsx("div",{className:a().pscImg,children:i.jsx("img",{src:e.prodImg?`/assets/product_images/${e.prodImage}`:e.main_image,alt:""})}),(0,i.jsxs)("div",{className:"pscText",children:[i.jsx("div",{className:a().psctName,children:e.prodName?e.prodName:e.title}),(0,i.jsxs)("div",{className:a().psctPrice,children:[_,e.prodPrice?e.prodPrice*x:e.price*x,"/-"]})]})]})})},e.id)):o.Z.slice(0,10).map(e=>i.jsx(l.o5,{children:i.jsx(n.default,{href:`/products/${e.prodSlug}`,className:a().productText,children:(0,i.jsxs)("div",{className:a().productSliderCard,children:[i.jsx("div",{className:a().productBag,children:i.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"})})}),i.jsx("div",{className:a().pscImg,children:i.jsx("img",{src:`/assets/product_images/${e.prodImage}`,alt:""})}),(0,i.jsxs)("div",{className:"pscText",children:[i.jsx("div",{className:a().psctName,children:e.prodName}),(0,i.jsxs)("div",{className:a().psctPrice,children:[_," ",(e.prodPrice*x).toFixed(2),"/-"]})]})]})})},e.id)),(0,i.jsxs)("div",{className:a().sliderExtras,children:[i.jsx("button",{onClick:m,children:i.jsx(n.default,{href:`/category/${r}`,className:a().sliderShowBtn,children:"Show More"})}),(0,i.jsxs)("div",{className:a().sliderNavButton,children:[i.jsx("button",{onClick:m,children:i.jsx(p.Ao2,{})}),i.jsx("button",{onClick:()=>{s.slideNext()},children:i.jsx(p.Rgz,{})})]})]})]})})}},35047:(e,r,s)=>{"use strict";var i=s(77389);s.o(i,"useParams")&&s.d(r,{useParams:function(){return i.useParams}}),s.o(i,"useRouter")&&s.d(r,{useRouter:function(){return i.useRouter}})},67387:e=>{e.exports={productDetailTop:"page_productDetailTop__XIye1",pdtLeft:"page_pdtLeft__MwDnN",pdtRight:"page_pdtRight__zOGlz",pdtrHeading:"page_pdtrHeading__fdr3R",pdtrhHead:"page_pdtrhHead__g05gN",pdtrhSubHead:"page_pdtrhSubHead__uoFu5",pdtrPara:"page_pdtrPara__6FI_q",readButton:"page_readButton__Qf6Nb",pdtrMoreDetails:"page_pdtrMoreDetails__6ouNi",pdtrPrice:"page_pdtrPrice__bXvUu",pdtrMore:"page_pdtrMore__b9HOI",pdtrmDiv:"page_pdtrmDiv__6SEwG",pdtrmdHead:"page_pdtrmdHead__7m1bj",pdtrmdText:"page_pdtrmdText__Y_ccd",pdtrColor:"page_pdtrColor__OeWmI",pdtrColorMobile:"page_pdtrColorMobile__hOVdq",pdtrcHeading:"page_pdtrcHeading__CQewB",pdtrcSelect:"page_pdtrcSelect__GUIz0",pdtrcssilver:"page_pdtrcssilver__n7iR2",pdtrcsgold:"page_pdtrcsgold__HnqlO",pdtrcsrose:"page_pdtrcsrose__iHBeD",pdtrcsSelected:"page_pdtrcsSelected__szBrj",pdtrSize:"page_pdtrSize__L0aHt",pdtrsChart:"page_pdtrsChart__fShpw",pdtrsDrop:"page_pdtrsDrop__aD_2M",pdtrsdropdown:"page_pdtrsdropdown__px_5K",pdtrBtn:"page_pdtrBtn__DEXb7",pdtrbPri:"page_pdtrbPri__xKWfE",pdtrbSec:"page_pdtrbSec__6t7Nx",pdtrbSec2:"page_pdtrbSec2__hnSS1",productDetailBottom:"page_productDetailBottom__wQSwu",productBanner:"page_productBanner__go_jg",pdbMoreHeading:"page_pdbMoreHeading__41wZ1",pdbHeadingMore:"page_pdbHeadingMore__S52Bq",pdbCircle:"page_pdbCircle__P6X_2",pdtrMoreCont:"page_pdtrMoreCont__gFygo",iconItem:"page_iconItem__A5dtG",iconGrid:"page_iconGrid__rKXuB"}},86041:e=>{e.exports={loaderWrap:"Loader_loaderWrap__1WpGS"}},93616:e=>{e.exports={productSlider:"MoreProductSlider_productSlider__s0bqW",productLink:"MoreProductSlider_productLink__ZD46A",productSliderCard:"MoreProductSlider_productSliderCard__Oqm8O",productBag:"MoreProductSlider_productBag__YNRh2",pscImg:"MoreProductSlider_pscImg__Phxzx",pscText:"MoreProductSlider_pscText__b6ooy",psctName:"MoreProductSlider_psctName__8Hpo9",psctPrice:"MoreProductSlider_psctPrice__gSErS",sliderExtras:"MoreProductSlider_sliderExtras__dfoMl",sliderNavButton:"MoreProductSlider_sliderNavButton__9nnfY"}},72992:e=>{e.exports={productSlider:"ProductSlider_productSlider__gh4N1",productSliderCard:"ProductSlider_productSliderCard__AVucn",productText:"ProductSlider_productText__4hgx3",productBag:"ProductSlider_productBag__FrsHD",pscImg:"ProductSlider_pscImg__m__qF",psctName:"ProductSlider_psctName__urMqO",psctPrice:"ProductSlider_psctPrice__UnOsD",sliderExtras:"ProductSlider_sliderExtras__I2GMf",sliderShowBtn:"ProductSlider_sliderShowBtn__ZVOGL",sliderNavButton:"ProductSlider_sliderNavButton___hdw6"}},57471:e=>{e.exports={spsSlider:"SingleProductSlider_spsSlider__jYX1i",spsSliderTop:"SingleProductSlider_spsSliderTop__Cpf4w",thumbImage:"SingleProductSlider_thumbImage__IQH3W",playButton:"SingleProductSlider_playButton__gq6vZ",videoOverlay:"SingleProductSlider_videoOverlay__MBXQZ",productBag:"SingleProductSlider_productBag__b2a_z",spsSliderBottom:"SingleProductSlider_spsSliderBottom___Mtce",restImage:"SingleProductSlider_restImage__gkDN3"}},56354:(e,r,s)=>{"use strict";s.r(r),s.d(r,{$$typeof:()=>l,__esModule:()=>d,default:()=>c});var i=s(68570);let t=(0,i.createProxy)(String.raw`C:\Users\kunal\OneDrive\Desktop\diamour_frontend\app\products\[...id]\page.js`),{__esModule:d,$$typeof:l}=t;t.default;let c=(0,i.createProxy)(String.raw`C:\Users\kunal\OneDrive\Desktop\diamour_frontend\app\products\[...id]\page.js#default`)},70036:()=>{},4919:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),i=r.X(0,[948,982,621,446,249,696,466,969],()=>s(90925));module.exports=i})();