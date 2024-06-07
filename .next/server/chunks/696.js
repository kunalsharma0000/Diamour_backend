exports.id=696,exports.ids=[696],exports.modules={12119:()=>{},23141:()=>{},16255:(e,a,t)=>{"use strict";t.d(a,{Rv:()=>d,W_:()=>n,tl:()=>o,o3:()=>p});var s=t(16632),i=t(54877);function l(e,a,t,s){return e.params.createElements&&Object.keys(s).forEach(l=>{if(!t[l]&&!0===t.auto){let n=(0,i.e)(e.el,`.${s[l]}`)[0];n||((n=(0,i.c)("div",s[l])).className=s[l],e.el.append(n)),t[l]=n,a[l]=n}}),t}function n(e){let{swiper:a,extendParams:t,on:s,emit:n}=e;function r(e){let t;return e&&"string"==typeof e&&a.isElement&&(t=a.el.querySelector(e))?t:(e&&("string"==typeof e&&(t=[...document.querySelectorAll(e)]),a.params.uniqueNavElements&&"string"==typeof e&&t.length>1&&1===a.el.querySelectorAll(e).length&&(t=a.el.querySelector(e))),e&&!t)?e:t}function o(e,t){let s=a.params.navigation;(e=(0,i.m)(e)).forEach(e=>{e&&(e.classList[t?"add":"remove"](...s.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=t),a.params.watchOverflow&&a.enabled&&e.classList[a.isLocked?"add":"remove"](s.lockClass))})}function p(){let{nextEl:e,prevEl:t}=a.navigation;if(a.params.loop){o(t,!1),o(e,!1);return}o(t,a.isBeginning&&!a.params.rewind),o(e,a.isEnd&&!a.params.rewind)}function d(e){e.preventDefault(),(!a.isBeginning||a.params.loop||a.params.rewind)&&(a.slidePrev(),n("navigationPrev"))}function c(e){e.preventDefault(),(!a.isEnd||a.params.loop||a.params.rewind)&&(a.slideNext(),n("navigationNext"))}function m(){let e=a.params.navigation;if(a.params.navigation=l(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(e.nextEl||e.prevEl))return;let t=r(e.nextEl),s=r(e.prevEl);Object.assign(a.navigation,{nextEl:t,prevEl:s}),t=(0,i.m)(t),s=(0,i.m)(s);let n=(t,s)=>{t&&t.addEventListener("click","next"===s?c:d),!a.enabled&&t&&t.classList.add(...e.lockClass.split(" "))};t.forEach(e=>n(e,"next")),s.forEach(e=>n(e,"prev"))}function u(){let{nextEl:e,prevEl:t}=a.navigation;e=(0,i.m)(e),t=(0,i.m)(t);let s=(e,t)=>{e.removeEventListener("click","next"===t?c:d),e.classList.remove(...a.params.navigation.disabledClass.split(" "))};e.forEach(e=>s(e,"next")),t.forEach(e=>s(e,"prev"))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null},s("init",()=>{!1===a.params.navigation.enabled?g():(m(),p())}),s("toEdge fromEdge lock unlock",()=>{p()}),s("destroy",()=>{u()}),s("enable disable",()=>{let{nextEl:e,prevEl:t}=a.navigation;if(e=(0,i.m)(e),t=(0,i.m)(t),a.enabled){p();return}[...e,...t].filter(e=>!!e).forEach(e=>e.classList.add(a.params.navigation.lockClass))}),s("click",(e,t)=>{let{nextEl:s,prevEl:l}=a.navigation;s=(0,i.m)(s),l=(0,i.m)(l);let r=t.target;if(a.params.navigation.hideOnClick&&!l.includes(r)&&!s.includes(r)){let e;if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===r||a.pagination.el.contains(r)))return;s.length?e=s[0].classList.contains(a.params.navigation.hiddenClass):l.length&&(e=l[0].classList.contains(a.params.navigation.hiddenClass)),!0===e?n("navigationShow"):n("navigationHide"),[...s,...l].filter(e=>!!e).forEach(e=>e.classList.toggle(a.params.navigation.hiddenClass))}});let g=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(a.navigation,{enable:()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),m(),p()},disable:g,update:p,init:m,destroy:u})}function r(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function o(e){let a,{swiper:t,extendParams:s,on:n,emit:o}=e,p="swiper-pagination";s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${p}-bullet`,bulletActiveClass:`${p}-bullet-active`,modifierClass:`${p}-`,currentClass:`${p}-current`,totalClass:`${p}-total`,hiddenClass:`${p}-hidden`,progressbarFillClass:`${p}-progressbar-fill`,progressbarOppositeClass:`${p}-progressbar-opposite`,clickableClass:`${p}-clickable`,lockClass:`${p}-lock`,horizontalClass:`${p}-horizontal`,verticalClass:`${p}-vertical`,paginationDisabledClass:`${p}-disabled`}}),t.pagination={el:null,bullets:[]};let d=0;function c(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function m(e,a){let{bulletActiveClass:s}=t.params.pagination;e&&(e=e[`${"prev"===a?"previous":"next"}ElementSibling`])&&(e.classList.add(`${s}-${a}`),(e=e[`${"prev"===a?"previous":"next"}ElementSibling`])&&e.classList.add(`${s}-${a}-${a}`))}function u(e){let a=e.target.closest(r(t.params.pagination.bulletClass));if(!a)return;e.preventDefault();let s=(0,i.h)(a)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===s)return;t.slideToLoop(s)}else t.slideTo(s)}function g(){let e,s;let l=t.rtl,n=t.params.pagination;if(c())return;let p=t.pagination.el;p=(0,i.m)(p);let u=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,g=t.params.loop?Math.ceil(u/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(s=t.previousRealIndex||0,e=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):void 0!==t.snapIndex?(e=t.snapIndex,s=t.previousSnapIndex):(s=t.previousIndex||0,e=t.activeIndex||0),"bullets"===n.type&&t.pagination.bullets&&t.pagination.bullets.length>0){let r,o,c;let u=t.pagination.bullets;if(n.dynamicBullets&&(a=(0,i.f)(u[0],t.isHorizontal()?"width":"height",!0),p.forEach(e=>{e.style[t.isHorizontal()?"width":"height"]=`${a*(n.dynamicMainBullets+4)}px`}),n.dynamicMainBullets>1&&void 0!==s&&((d+=e-(s||0))>n.dynamicMainBullets-1?d=n.dynamicMainBullets-1:d<0&&(d=0)),c=((o=(r=Math.max(e-d,0))+(Math.min(u.length,n.dynamicMainBullets)-1))+r)/2),u.forEach(e=>{let a=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(e=>`${n.bulletActiveClass}${e}`)].map(e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e).flat();e.classList.remove(...a)}),p.length>1)u.forEach(a=>{let s=(0,i.h)(a);s===e?a.classList.add(...n.bulletActiveClass.split(" ")):t.isElement&&a.setAttribute("part","bullet"),n.dynamicBullets&&(s>=r&&s<=o&&a.classList.add(...`${n.bulletActiveClass}-main`.split(" ")),s===r&&m(a,"prev"),s===o&&m(a,"next"))});else{let a=u[e];if(a&&a.classList.add(...n.bulletActiveClass.split(" ")),t.isElement&&u.forEach((a,t)=>{a.setAttribute("part",t===e?"bullet-active":"bullet")}),n.dynamicBullets){let e=u[r],a=u[o];for(let e=r;e<=o;e+=1)u[e]&&u[e].classList.add(...`${n.bulletActiveClass}-main`.split(" "));m(e,"prev"),m(a,"next")}}if(n.dynamicBullets){let e=Math.min(u.length,n.dynamicMainBullets+4),s=(a*e-a)/2-c*a,i=l?"right":"left";u.forEach(e=>{e.style[t.isHorizontal()?i:"top"]=`${s}px`})}}p.forEach((a,s)=>{if("fraction"===n.type&&(a.querySelectorAll(r(n.currentClass)).forEach(a=>{a.textContent=n.formatFractionCurrent(e+1)}),a.querySelectorAll(r(n.totalClass)).forEach(e=>{e.textContent=n.formatFractionTotal(g)})),"progressbar"===n.type){let s;s=n.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";let i=(e+1)/g,l=1,o=1;"horizontal"===s?l=i:o=i,a.querySelectorAll(r(n.progressbarFillClass)).forEach(e=>{e.style.transform=`translate3d(0,0,0) scaleX(${l}) scaleY(${o})`,e.style.transitionDuration=`${t.params.speed}ms`})}"custom"===n.type&&n.renderCustom?(a.innerHTML=n.renderCustom(t,e+1,g),0===s&&o("paginationRender",a)):(0===s&&o("paginationRender",a),o("paginationUpdate",a)),t.params.watchOverflow&&t.enabled&&a.classList[t.isLocked?"add":"remove"](n.lockClass)})}function f(){let e=t.params.pagination;if(c())return;let a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length,s=t.pagination.el;s=(0,i.m)(s);let l="";if("bullets"===e.type){let s=t.params.loop?Math.ceil(a/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&s>a&&(s=a);for(let a=0;a<s;a+=1)e.renderBullet?l+=e.renderBullet.call(t,a,e.bulletClass):l+=`<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(l=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(l=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],s.forEach(a=>{"custom"!==e.type&&(a.innerHTML=l||""),"bullets"===e.type&&t.pagination.bullets.push(...a.querySelectorAll(r(e.bulletClass)))}),"custom"!==e.type&&o("paginationRender",s[0])}function v(){let e;t.params.pagination=l(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});let a=t.params.pagination;a.el&&("string"==typeof a.el&&t.isElement&&(e=t.el.querySelector(a.el)),e||"string"!=typeof a.el||(e=[...document.querySelectorAll(a.el)]),e||(e=a.el),e&&0!==e.length&&(t.params.uniqueNavElements&&"string"==typeof a.el&&Array.isArray(e)&&e.length>1&&(e=[...t.el.querySelectorAll(a.el)]).length>1&&(e=e.filter(e=>(0,i.a)(e,".swiper")[0]===t.el)[0]),Array.isArray(e)&&1===e.length&&(e=e[0]),Object.assign(t.pagination,{el:e}),(e=(0,i.m)(e)).forEach(e=>{"bullets"===a.type&&a.clickable&&e.classList.add(...(a.clickableClass||"").split(" ")),e.classList.add(a.modifierClass+a.type),e.classList.add(t.isHorizontal()?a.horizontalClass:a.verticalClass),"bullets"===a.type&&a.dynamicBullets&&(e.classList.add(`${a.modifierClass}${a.type}-dynamic`),d=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),"progressbar"===a.type&&a.progressbarOpposite&&e.classList.add(a.progressbarOppositeClass),a.clickable&&e.addEventListener("click",u),t.enabled||e.classList.add(a.lockClass)})))}function h(){let e=t.params.pagination;if(c())return;let a=t.pagination.el;a&&(a=(0,i.m)(a)).forEach(a=>{a.classList.remove(e.hiddenClass),a.classList.remove(e.modifierClass+e.type),a.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(a.classList.remove(...(e.clickableClass||"").split(" ")),a.removeEventListener("click",u))}),t.pagination.bullets&&t.pagination.bullets.forEach(a=>a.classList.remove(...e.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;let e=t.params.pagination,{el:a}=t.pagination;(a=(0,i.m)(a)).forEach(a=>{a.classList.remove(e.horizontalClass,e.verticalClass),a.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)})}),n("init",()=>{!1===t.params.pagination.enabled?b():(v(),f(),g())}),n("activeIndexChange",()=>{void 0===t.snapIndex&&g()}),n("snapIndexChange",()=>{g()}),n("snapGridLengthChange",()=>{f(),g()}),n("destroy",()=>{h()}),n("enable disable",()=>{let{el:e}=t.pagination;e&&(e=(0,i.m)(e)).forEach(e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))}),n("lock unlock",()=>{g()}),n("click",(e,a)=>{let s=a.target,l=(0,i.m)(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&l&&l.length>0&&!s.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&s===t.navigation.nextEl||t.navigation.prevEl&&s===t.navigation.prevEl))return;!0===l[0].classList.contains(t.params.pagination.hiddenClass)?o("paginationShow"):o("paginationHide"),l.forEach(e=>e.classList.toggle(t.params.pagination.hiddenClass))}});let b=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=(0,i.m)(e)).forEach(e=>e.classList.add(t.params.pagination.paginationDisabledClass)),h()};Object.assign(t.pagination,{enable:()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=(0,i.m)(e)).forEach(e=>e.classList.remove(t.params.pagination.paginationDisabledClass)),v(),f(),g()},disable:b,render:f,update:g,init:v,destroy:h})}function p(e){let{swiper:a,extendParams:t,on:l}=e;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let n=!1,r=!1;function o(){let e;let t=a.thumbs.swiper;if(!t||t.destroyed)return;let s=t.clickedIndex,i=t.clickedSlide;i&&i.classList.contains(a.params.thumbs.slideThumbActiveClass)||null==s||(e=t.params.loop?parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10):s,a.params.loop?a.slideToLoop(e):a.slideTo(e))}function p(){let{thumbs:e}=a.params;if(n)return!1;n=!0;let t=a.constructor;if(e.swiper instanceof t)a.thumbs.swiper=e.swiper,Object.assign(a.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(a.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),a.thumbs.swiper.update();else if((0,i.l)(e.swiper)){let s=Object.assign({},e.swiper);Object.assign(s,{watchSlidesProgress:!0,slideToClickedSlide:!1}),a.thumbs.swiper=new t(s),r=!0}return a.thumbs.swiper.el.classList.add(a.params.thumbs.thumbsContainerClass),a.thumbs.swiper.on("tap",o),!0}function d(e){let t=a.thumbs.swiper;if(!t||t.destroyed)return;let s="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView,l=1,n=a.params.thumbs.slideThumbActiveClass;if(a.params.slidesPerView>1&&!a.params.centeredSlides&&(l=a.params.slidesPerView),a.params.thumbs.multipleActiveThumbs||(l=1),l=Math.floor(l),t.slides.forEach(e=>e.classList.remove(n)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let e=0;e<l;e+=1)(0,i.e)(t.slidesEl,`[data-swiper-slide-index="${a.realIndex+e}"]`).forEach(e=>{e.classList.add(n)});else for(let e=0;e<l;e+=1)t.slides[a.realIndex+e]&&t.slides[a.realIndex+e].classList.add(n);let r=a.params.thumbs.autoScrollOffset,o=r&&!t.params.loop;if(a.realIndex!==t.realIndex||o){let i,l;let n=t.activeIndex;if(t.params.loop){let e=t.slides.filter(e=>e.getAttribute("data-swiper-slide-index")===`${a.realIndex}`)[0];i=t.slides.indexOf(e),l=a.activeIndex>a.previousIndex?"next":"prev"}else l=(i=a.realIndex)>a.previousIndex?"next":"prev";o&&(i+="next"===l?r:-1*r),t.visibleSlidesIndexes&&0>t.visibleSlidesIndexes.indexOf(i)&&(t.params.centeredSlides?i=i>n?i-Math.floor(s/2)+1:i+Math.floor(s/2)-1:i>n&&t.params.slidesPerGroup,t.slideTo(i,e?0:void 0))}}a.thumbs={swiper:null},l("beforeInit",()=>{let{thumbs:e}=a.params;if(e&&e.swiper){if("string"==typeof e.swiper||e.swiper instanceof HTMLElement){let t=(0,s.g)(),i=()=>{let s="string"==typeof e.swiper?t.querySelector(e.swiper):e.swiper;if(s&&s.swiper)e.swiper=s.swiper,p(),d(!0);else if(s){let t=i=>{e.swiper=i.detail[0],s.removeEventListener("init",t),p(),d(!0),e.swiper.update(),a.update()};s.addEventListener("init",t)}return s},l=()=>{!a.destroyed&&(i()||requestAnimationFrame(l))};requestAnimationFrame(l)}else p(),d(!0)}}),l("slideChange update resize observerUpdate",()=>{d()}),l("setTransition",(e,t)=>{let s=a.thumbs.swiper;s&&!s.destroyed&&s.setTransition(t)}),l("beforeDestroy",()=>{let e=a.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()}),Object.assign(a.thumbs,{init:p,update:d})}function d(e){let{swiper:a,extendParams:t,emit:s,once:l}=e;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(a,{freeMode:{onTouchStart:function(){if(a.params.cssMode)return;let e=a.getTranslate();a.setTranslate(e),a.setTransition(0),a.touchEventsData.velocities.length=0,a.freeMode.onTouchEnd({currentPos:a.rtl?a.translate:-a.translate})},onTouchMove:function(){if(a.params.cssMode)return;let{touchEventsData:e,touches:t}=a;0===e.velocities.length&&e.velocities.push({position:t[a.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:t[a.isHorizontal()?"currentX":"currentY"],time:(0,i.d)()})},onTouchEnd:function(e){let{currentPos:t}=e;if(a.params.cssMode)return;let{params:n,wrapperEl:r,rtlTranslate:o,snapGrid:p,touchEventsData:d}=a,c=(0,i.d)()-d.touchStartTime;if(t<-a.minTranslate()){a.slideTo(a.activeIndex);return}if(t>-a.maxTranslate()){a.slides.length<p.length?a.slideTo(p.length-1):a.slideTo(a.slides.length-1);return}if(n.freeMode.momentum){let e,t;if(d.velocities.length>1){let e=d.velocities.pop(),t=d.velocities.pop(),s=e.position-t.position,l=e.time-t.time;a.velocity=s/l,a.velocity/=2,Math.abs(a.velocity)<n.freeMode.minimumVelocity&&(a.velocity=0),(l>150||(0,i.d)()-e.time>300)&&(a.velocity=0)}else a.velocity=0;a.velocity*=n.freeMode.momentumVelocityRatio,d.velocities.length=0;let c=1e3*n.freeMode.momentumRatio,m=a.velocity*c,u=a.translate+m;o&&(u=-u);let g=!1,f=20*Math.abs(a.velocity)*n.freeMode.momentumBounceRatio;if(u<a.maxTranslate())n.freeMode.momentumBounce?(u+a.maxTranslate()<-f&&(u=a.maxTranslate()-f),e=a.maxTranslate(),g=!0,d.allowMomentumBounce=!0):u=a.maxTranslate(),n.loop&&n.centeredSlides&&(t=!0);else if(u>a.minTranslate())n.freeMode.momentumBounce?(u-a.minTranslate()>f&&(u=a.minTranslate()+f),e=a.minTranslate(),g=!0,d.allowMomentumBounce=!0):u=a.minTranslate(),n.loop&&n.centeredSlides&&(t=!0);else if(n.freeMode.sticky){let e;for(let a=0;a<p.length;a+=1)if(p[a]>-u){e=a;break}u=-(u=Math.abs(p[e]-u)<Math.abs(p[e-1]-u)||"next"===a.swipeDirection?p[e]:p[e-1])}if(t&&l("transitionEnd",()=>{a.loopFix()}),0!==a.velocity){if(c=o?Math.abs((-u-a.translate)/a.velocity):Math.abs((u-a.translate)/a.velocity),n.freeMode.sticky){let e=Math.abs((o?-u:u)-a.translate),t=a.slidesSizesGrid[a.activeIndex];c=e<t?n.speed:e<2*t?1.5*n.speed:2.5*n.speed}}else if(n.freeMode.sticky){a.slideToClosest();return}n.freeMode.momentumBounce&&g?(a.updateProgress(e),a.setTransition(c),a.setTranslate(u),a.transitionStart(!0,a.swipeDirection),a.animating=!0,(0,i.k)(r,()=>{a&&!a.destroyed&&d.allowMomentumBounce&&(s("momentumBounce"),a.setTransition(n.speed),setTimeout(()=>{a.setTranslate(e),(0,i.k)(r,()=>{a&&!a.destroyed&&a.transitionEnd()})},0))})):a.velocity?(s("_freeModeNoMomentumRelease"),a.updateProgress(u),a.setTransition(c),a.setTranslate(u),a.transitionStart(!0,a.swipeDirection),a.animating||(a.animating=!0,(0,i.k)(r,()=>{a&&!a.destroyed&&a.transitionEnd()}))):a.updateProgress(u),a.updateActiveIndex(),a.updateSlidesClasses()}else if(n.freeMode.sticky){a.slideToClosest();return}else n.freeMode&&s("_freeModeNoMomentumRelease");(!n.freeMode.momentum||c>=n.longSwipesMs)&&(s("_freeModeStaticRelease"),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses())}}})}}};