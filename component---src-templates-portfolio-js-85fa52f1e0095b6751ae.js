(self.webpackChunkbuilding_portfolio=self.webpackChunkbuilding_portfolio||[]).push([[60],{4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},3913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},8585:function(e,t,n){var r=n(8).default,o=n(1506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},5314:function(e,t,n){"use strict";var r=n(4575),o=n(3913),i=n(2205),a=n(8585),s=n(9754);function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var l=n(5318),c=n(862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=c(n(7294)),f=l(n(5697)),h=function(e){i(n,e);var t=u(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"hasNext",value:function(){var e=this.props,t=e.direction,n=e.infinite,r=e.numSlides,o=e.selectedIndex;return n||("left"===t?o>0:o<r-1)}},{key:"render",value:function(){var e=this.props,t=e.prevSlide,n=e.nextSlide,r=e.direction,o=e.arrows,i=null,a="carousel-arrow-default";return o.left&&(a=o.className?o.className:"",i="left"===r?o.left:o.right),d.default.createElement("button",{type:"button",disabled:!this.hasNext(),onClick:"left"===r?t:n,className:"carousel-arrow carousel-".concat(r,"-arrow ").concat(a)},i)}}],[{key:"propTypes",get:function(){return{numSlides:f.default.number.isRequired,selectedIndex:f.default.number.isRequired,infinite:f.default.bool.isRequired,prevSlide:f.default.func.isRequired,nextSlide:f.default.func.isRequired,direction:f.default.oneOf(["left","right"]).isRequired,arrows:f.default.oneOfType([f.default.bool,f.default.shape({left:f.default.node.isRequired,right:f.default.node.isRequired,className:f.default.string})])}}}]),n}(d.Component);t.default=h},3946:function(e,t,n){"use strict";var r=n(4575),o=n(3913),i=n(2205),a=n(8585),s=n(9754);function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var l=n(5318),c=n(862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=c(n(7294)),f=l(n(5697)),h=l(n(5900)),p=function(e){i(n,e);var t=u(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"render",value:function(){for(var e=this.props,t=e.numSlides,n=e.selectedIndex,r=e.goToSlide,o=[],i=0;i<t;i++){var a=(0,h.default)("carousel-dot",{selected:i===n});o.push(d.default.createElement("li",{key:"dot-".concat(i)},d.default.createElement("button",{className:a,onClick:r.bind(null,i)},"•")))}return d.default.createElement("ul",{className:"carousel-dots"},o)}}],[{key:"propTypes",get:function(){return{numSlides:f.default.number.isRequired,selectedIndex:f.default.number.isRequired,goToSlide:f.default.func.isRequired}}}]),n}(d.Component);t.default=p},6859:function(e,t,n){"use strict";var r=n(5318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Dots",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Arrow",{enumerable:!0,get:function(){return i.default}});var o=r(n(3946)),i=r(n(5314))},3747:function(e,t,n){"use strict";var r=n(9713),o=n(4575),i=n(3913),a=n(1506),s=n(2205),u=n(8585),l=n(9754);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var h=n(862),p=n(5318);t.Z=void 0;var v=p(n(7154)),m=p(n(9713)),g=h(n(7294)),y=p(n(5697)),w=p(n(8876)),b=p(n(5900)),S=n(6859),x=p(n(4601)),O=p(n(587)),T="carousel-slide-selected",_="carousel-slide-loading",k=500,M=function(e){s(n,e);var t=f(n);function n(e){var r;return o(this,n),r=t.apply(this,arguments),(0,m.default)(a(r),"handleInitialLoad",(function(){var e=r.state.currentSlide,t=r._track.childNodes,n=r.props,o=n.slideWidth,i=n.slideHeight;if(!o||!i)for(var a=0;a<t.length;a++){var s=t[a];if(parseInt(s.getAttribute("data-index"),10)===e){if(!s.offsetWidth||!s.offsetHeight)return void(r._initialLoadTimer=setTimeout(r.handleInitialLoad,10));r.setState({slideDimensions:{width:s.offsetWidth,height:s.offsetHeight}});break}}})),(0,m.default)(a(r),"goToSlide",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=r.props,i=o.beforeChange,a=o.transitionDuration,s=o.transition,u=o.onSlideTransitioned;u&&u({autoPlay:n,index:e,direction:t});var l=r.state.currentSlide;l!==e&&(r._animating||(r._animating=!0,i&&i(e,l,t),r.setState({transitionDuration:a},(function(){r.setState({currentSlide:e,direction:t,transitioningFrom:l},(function(){a&&"fade"!==s||r.slideTransitionEnd()}))}))))})),(0,m.default)(a(r),"nextSlide",(function(e){var t=r.props.children,n=r.state.currentSlide,o=n<g.Children.count(t)-1?n+1:0;r.goToSlide(o,"right","object"!=typeof e)})),(0,m.default)(a(r),"prevSlide",(function(){var e=r.props.children,t=r.state.currentSlide,n=t>0?t-1:g.Children.count(e)-1;r.goToSlide(n,"left")})),(0,m.default)(a(r),"slideTransitionEnd",(function(e){var t=r.state.currentSlide,n=r.props.afterChange;e&&"transform"!==e.propertyName||(r._animating=!1,r.setState({direction:null,transitioningFrom:null,transitionDuration:0},(function(){r._allImagesLoaded||r.fetchImages()})),r.props.autoplay&&r.startAutoplay(),n&&n(t))})),(0,m.default)(a(r),"calcLeftOffset",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=r.state,n=t.direction,o=t.loading,i=r._viewport&&r._viewport.offsetWidth;if(clearTimeout(r._retryTimer),r._track&&i){var s=r.props,u=s.infinite,l=s.children,c=s.cellPadding,d=r.state.currentSlide,f=r._track.childNodes,h=g.Children.count(l);u&&(0===d&&"right"===n?d=h:d===h-1&&"left"===n&&(d=-1));for(var p,v,m=0,y=!1,w=!1,b=0;b<f.length&&(m-=c,w=-1!==(p=f[b]).className.indexOf(_),v=p.offsetWidth,y=y||!v&&!w,parseInt(p.getAttribute("data-index"),10)!==d);b++)m-=v;var S=y&&e<k;(m+=(i-v)/2)!==r.state.leftOffset&&r.setState({leftOffset:m}),S?r._retryTimer=setTimeout(r.calcLeftOffset.bind(a(r),++e),10):o&&r.setState({loading:!1})}else r._retryTimer=setTimeout(r.calcLeftOffset,10)})),(0,m.default)(a(r),"handleSlideClick",(function(e){var t=r.props.clickToNavigate,n=r.state.currentSlide,o=parseInt(e.currentTarget.getAttribute("data-index"),10);!t||o===n||Math.abs(r._startPos.x-e.clientX)>.01||(o===n-1?r.prevSlide():o===n+1?r.nextSlide():r.goToSlide(o))})),(0,m.default)(a(r),"onMouseDown",(function(e){var t=r.props,n=t.draggable,o=t.transition;"IMG"===e.target.nodeName&&e.preventDefault(),n&&"fade"!==o&&!r._animating&&(r._autoplayTimer&&clearTimeout(r._autoplayTimer),r._startPos={x:e.clientX,y:e.clientY,startTime:Date.now()},r.setState({transitionDuration:0}),document.addEventListener("mousemove",r.onMouseMove,{passive:!1}),document.addEventListener("mouseup",r.stopDragging,!1))})),(0,m.default)(a(r),"onMouseMove",(function(e){e.preventDefault(),r.setState({dragOffset:e.clientX-r._startPos.x})})),(0,m.default)(a(r),"onMouseEnter",(function(){document.addEventListener("mousemove",r.handleMovement,!1)})),(0,m.default)(a(r),"handleMovement",(function(){r.setHoverState(!0)})),(0,m.default)(a(r),"onMouseOver",(function(){r.setHoverState(!0)})),(0,m.default)(a(r),"onMouseLeave",(function(){document.removeEventListener("mousemove",r.handleMovement,!1),r.setHoverState(!1),!r._animating&&r._startPos&&r.stopDragging()})),(0,m.default)(a(r),"onTouchStart",(function(e){var t=r.props,n=t.draggable,o=t.transition;n&&"fade"!==o&&!r._animating&&(r._autoplayTimer&&clearTimeout(r._autoplayTimer),1===e.touches.length&&(r._startPos={x:e.touches[0].screenX,y:e.touches[0].screenY,startTime:Date.now()},document.addEventListener("touchmove",r.onTouchMove,{passive:!1}),document.addEventListener("touchend",r.stopDragging,!1)))})),(0,m.default)(a(r),"onTouchMove",(function(e){var t=r._prevPos||r._startPos,n=t.x,o=t.y,i=e.touches[0],a=i.screenX,s=i.screenY,u=180*Math.abs(Math.atan2(s-o,a-n))/Math.PI;r._prevPos={x:a,y:s},(u<20||u>160)&&(e.preventDefault(),r.setState({dragOffset:a-r._startPos.x}))})),(0,m.default)(a(r),"stopDragging",(function(){var e,t=r.props,n=t.dragThreshold,o=t.transitionDuration,i=r.state.dragOffset,a=r._viewport&&r._viewport.offsetWidth||1,s=Math.abs(i/a),u=Date.now()-r._startPos.startTime||1,l=u/(s*a),c=s>.05&&u<250;e=c||s>n?Math.min(l*(1-s)*a,(0,w.default)(""+o)*(1-s)):(0,w.default)(""+o)*s,r.removeDragListeners(),r.setState({transitionDuration:e},(function(){var e=r.props,t=e.children,o=e.infinite,a=r.state.currentSlide,u=g.Children.count(t),l=a,d="";(s>n||c)&&(i>0?--l<0&&(l=o?u-1:a):++l===u&&(l=o?0:a),d=i>0?"left":"right"),r.setState({dragOffset:0,currentSlide:l,direction:d})})),r.props.autoplay&&r.startAutoplay()})),r.state={currentSlide:e.initialSlide,loading:e.lazyLoad,loadedImages:{},slideDimensions:{},dragOffset:0,transitionDuration:0,transitioningFrom:null},r}return i(n,[{key:"componentDidUpdate",value:function(e,t){var n=this.props,r=n.children,o=n.autoplay,i=n.slideWidth,a=this.state,s=a.currentSlide,u=a.loadedImages,l=a.direction,c=a.loading,d=a.slideDimensions,f=e.children;l===t.direction&&s===t.currentSlide&&u===t.loadedImages&&i===e.slideWidth&&d.width===t.slideDimensions.width&&d.height===t.slideDimensions.height||this.calcLeftOffset(),(0,x.default)(g.Children.toArray(r),g.Children.toArray(f))||(this._animating=!1,this.fetchImages()),o&&(!c&&t.loading||!e.autoplay)&&this.startAutoplay()}},{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.lazyLoad,r=t.autoplay;this._isMounted=!0,n?this.fetchImages():(r&&this.startAutoplay(),this.calcLeftOffset()),window.addEventListener("resize",this.calcLeftOffset,!1),window.IntersectionObserver&&(this._observer=new window.IntersectionObserver((function(t){e.props.autoplay&&(t&&t[0]&&t[0].isIntersecting?e.startAutoplay():clearTimeout(e._autoplayTimer))})),this._observer.observe(this._containerRef))}},{key:"componentWillUnmount",value:function(){this.removeDragListeners(),window.removeEventListener("resize",this.calcLeftOffset,!1),document.removeEventListener("mousemove",this.handleMovement,!1),clearTimeout(this._autoplayTimer),clearTimeout(this._retryTimer),clearTimeout(this._initialLoadTimer),this._observer&&this._observer.unobserve(this._containerRef),this._isMounted=!1}},{key:"startAutoplay",value:function(){var e=this;clearTimeout(this._autoplayTimer),this._autoplayTimer=setTimeout((function(){e.props.autoplay&&e.nextSlide()}),(0,w.default)(""+this.props.autoplaySpeed))}},{key:"fetchImages",value:function(){for(var e=this,t=this.props.children,n=this.state,o=n.loadedImages,i=n.currentSlide,a=g.Children.toArray(t),s=Math.min(this.props.imagesToPrefetch,a.length),u=i-Math.floor(s/2),l=u+s,c=[],f=a[i].props.src,h=u;h<l;h++){var p=(0,O.default)(a,h%a.length).props.src;p&&!o[p]&&c.push(p)}c.length?c.forEach((function(t){var n=new Image;n.onload=n.onerror=function(){e._isMounted&&e.setState({loadedImages:d(d({},e.state.loadedImages),{},r({},t,{width:n.width||"auto",height:n.height||"auto"}))},(function(){t===f&&e.handleInitialLoad()}))},n.src=t})):this.calcLeftOffset()}},{key:"getControls",value:function(){var e=this.props,t=e.arrows,n=e.dots,r=e.controls.slice(0);return n&&r.push({component:S.Dots}),t&&(r=r.concat([{component:S.Arrow,props:{direction:"left"}},{component:S.Arrow,props:{direction:"right"}}])),r}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.viewportWidth,o=t.viewportHeight,i=t.width,a=t.height,s=t.dots,u=t.infinite,l=t.children,c=t.slideHeight,f=t.transition,h=t.style,p=t.draggable,m=t.easing,y=t.arrows,S=this.state,x=S.loading,O=S.transitionDuration,T=S.dragOffset,_=S.currentSlide,k=S.leftOffset,M=g.Children.count(l),E=(0,b.default)("carousel",n,{loaded:!x}),L=d(d({},h.container||{}),{},{width:i,height:a}),P=d(d({},h.containerInner||{}),{},{width:i,height:a,marginBottom:s?"20px":0}),D=d(d({},h.viewport||{}),{},{width:r,height:o||c||"auto"}),R=d({},h.track);if("fade"!==f){var I=k+T;R=d(d({},R),{},{transform:"translateX(".concat(I,"px)"),transition:O?"transform ".concat((0,w.default)(""+O),"ms ").concat(m):"none"})}p||(R.touchAction="auto");var C=this.getControls();return g.default.createElement("div",{className:E,style:L,ref:function(t){e._containerRef=t}},g.default.createElement("div",{className:"carousel-container-inner",style:P},C.filter((function(e){return"top"===e.position})).map((function(t,n){return g.default.createElement(t.component,(0,v.default)({},t.props,{key:"control-".concat(n),selectedIndex:_,numSlides:M,nextSlide:e.nextSlide,prevSlide:e.prevSlide,goToSlide:e.goToSlide,infinite:u}))})),g.default.createElement("div",{className:"carousel-viewport",ref:function(t){e._viewport=t},style:D},g.default.createElement("ul",{className:"carousel-track",style:R,ref:function(t){e._track=t},onTransitionEnd:this.slideTransitionEnd,onMouseDown:this.onMouseDown,onMouseLeave:this.onMouseLeave,onMouseOver:this.onMouseOver,onMouseEnter:this.onMouseEnter,onTouchStart:this.onTouchStart},this.renderSlides())),C.filter((function(e){return"top"!==e.position})).map((function(t,n){return g.default.createElement(t.component,(0,v.default)({},t.props,{key:"control-".concat(n),selectedIndex:_,numSlides:M,nextSlide:e.nextSlide,prevSlide:e.prevSlide,goToSlide:e.goToSlide,arrows:y,infinite:u}))}))))}},{key:"renderSlides",value:function(){var e=this,t=this.props,n=t.children,o=t.infinite,i=t.cellPadding,a=t.slideWidth,s=t.slideHeight,u=t.transition,l=t.transitionDuration,c=t.style,f=t.easing,h=t.lazyLoad,p=this.state,v=p.slideDimensions,m=p.currentSlide,y=p.loadedImages;this._allImagesLoaded=!0;var S=g.Children.map(n,(function(t,n){var o,p="slide-".concat(n),S=t.props.src,x=(0,b.default)("carousel-slide",(r(o={},T,n===m),r(o,"carousel-slide-fade","fade"===u),o)),O={marginLeft:"".concat(i,"px"),height:s,width:a};"fade"===u&&(O.transition="opacity ".concat((0,w.default)(""+l),"ms ").concat(f)),s&&(O.overflowY="hidden",O.minHeight=s),a&&(O.overflowX="hidden",O.minWidth=a),O=d(d(d({},O),c.slide||{}),n===m&&c.selectedSlide||{});var k=d(d({},O||{}),{},{marginLeft:O.marginLeft,width:a||v.width,height:s||v.height}),M=e.getIndicesToRender();if(!h||(S?y[S]:M.indexOf(n)>-1)){if(S&&y[S]){var E=y[S],L=E.width,P=E.height;O.height=O.height||P,O.width=O.width||L}return g.default.createElement("li",{key:p,style:O,"data-index":n,className:x,onClick:e.handleSlideClick},t)}return S&&(e._allImagesLoaded=!1),g.default.createElement("li",{key:p,style:k,"data-index":n,className:(0,b.default)(x,_)})}));return o&&"fade"!==u&&(S=this.addClones(S)),S}},{key:"getIndicesToRender",value:function(){var e=this.state,t=e.currentSlide,n=e.transitioningFrom,r=this.props,o=r.children,i=r.infinite,a=r.maxRenderedSlides,s=g.Children.count(o);function u(e,t){for(var n=[],r=e;r<=t;r++)i&&r<0?n.push(s+r):i&&r>=s?n.push(r-s):n.push(r);return n}var l=Math.max(1,a),c=Math.floor((l-1)/2),d=Math.floor(l/2),f=u(t-c,t+d);return null!==n&&(f=f.concat(u(n-c,n+d))),f}},{key:"addClones",value:function(e){var t=e.length,n=[(0,O.default)(e,t-2),(0,O.default)(e,t-1),(0,O.default)(e,0),(0,O.default)(e,Math.min(1,t-1))],r=[(0,g.cloneElement)(n[0],{key:"clone-1","data-index":-2,className:n[0].props.className.replace(T,"")}),(0,g.cloneElement)(n[1],{key:"clone-0","data-index":-1,className:n[1].props.className.replace(T,"")})],o=[(0,g.cloneElement)(n[2],{key:"clone-2","data-index":t,className:n[2].props.className.replace(T,"")}),(0,g.cloneElement)(n[3],{key:"clone-3","data-index":t+1,className:n[3].props.className.replace(T,"")})];return r.concat(e).concat(o)}},{key:"setHoverState",value:function(e){var t=this,n=this.props,r=n.pauseOnHover,o=n.autoplay;r&&o&&(clearTimeout(this._hoverTimer),e?(clearTimeout(this._autoplayTimer),this._hoverTimer=setTimeout((function(){t.setHoverState(!1)}),2e3)):this.startAutoplay())}},{key:"removeDragListeners",value:function(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.stopDragging,!1),document.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),document.removeEventListener("touchend",this.stopDragging,!1)}}],[{key:"propTypes",get:function(){return{initialSlide:y.default.number,className:y.default.string,transition:y.default.oneOf(["slide","fade"]),dots:y.default.bool,arrows:y.default.oneOfType([y.default.bool,y.default.shape({left:y.default.node.isRequired,right:y.default.node.isRequired,className:y.default.string})]),infinite:y.default.bool,children:y.default.any,viewportWidth:y.default.string,viewportHeight:y.default.string,width:y.default.string,height:y.default.string,imagesToPrefetch:y.default.number,maxRenderedSlides:y.default.number,cellPadding:y.default.number,slideWidth:y.default.string,slideHeight:y.default.string,beforeChange:y.default.func,afterChange:y.default.func,transitionDuration:y.default.oneOfType([y.default.number,y.default.string]),autoplay:y.default.bool,autoplaySpeed:y.default.oneOfType([y.default.number,y.default.string]),lazyLoad:y.default.bool,controls:y.default.arrayOf(y.default.shape({component:y.default.func.isRequired,props:y.default.object,position:y.default.oneOf(["top","bottom"])})),draggable:y.default.bool,pauseOnHover:y.default.bool,clickToNavigate:y.default.bool,dragThreshold:y.default.number,onSlideTransitioned:y.default.func,easing:y.default.oneOf(["ease","linear","ease-in","ease-out","ease-in-out"]),style:y.default.shape({container:y.default.object,containerInner:y.default.object,viewport:y.default.object,track:y.default.object,slide:y.default.object,selectedSlide:y.default.object})}}},{key:"defaultProps",get:function(){return{initialSlide:0,dots:!0,arrows:!0,infinite:!0,viewportWidth:"100%",width:"100%",height:"auto",imagesToPrefetch:5,maxRenderedSlides:5,cellPadding:0,transitionDuration:500,autoplay:!1,autoplaySpeed:4e3,lazyLoad:!0,controls:[],draggable:!0,pauseOnHover:!0,transition:"slide",dragThreshold:.2,clickToNavigate:!0,easing:"ease-in-out",style:{}}}},{key:"getDerivedStateFromProps",value:function(e,t){var n=t.currentSlide,r=g.Children.count(e.children);return n>=r?{currentSlide:r?r-1:0}:null}}]),n}(g.Component);t.Z=M},4601:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++){if(e[n].props.src!==t[n].props.src)return!1}return!0};t.default=n},587:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e||!e.length)return;var n=e.length;return(t+=t<0?n:0)>=0&&t<n?e[t]:void 0}},8876:function(e){var t=1e3,n=60*t,r=60*n,o=24*r,i=365.25*o;function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,s){s=s||{};var u,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>1e4)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!a)return;var s=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*i;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===l&&!1===isNaN(e))return s.long?a(u=e,o,"day")||a(u,r,"hour")||a(u,n,"minute")||a(u,t,"second")||u+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},6587:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(7294),o=n(3310),i=n(3747),a=n(5881),s=n(2122);function u(e){return"/"===e.charAt(0)}function l(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}var c=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],o=t&&t.split("/")||[],i=e&&u(e),a=t&&u(t),s=i||a;if(e&&u(e)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var c=o[o.length-1];n="."===c||".."===c||""===c}else n=!1;for(var d=0,f=o.length;f>=0;f--){var h=o[f];"."===h?l(o,f):".."===h?(l(o,f),d++):d&&(l(o,f),d--)}if(!s)for(;d--;d)o.unshift("..");!s||""===o[0]||o[0]&&u(o[0])||o.unshift("");var p=o.join("/");return n&&"/"!==p.substr(-1)&&(p+="/"),p},d="Invariant failed";var f=function(e,t){if(!e)throw new Error(d)};function h(e){return"/"===e.charAt(0)?e:"/"+e}function p(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function v(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function m(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function g(e,t,n,r){var o;"string"==typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(o=(0,s.Z)({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=c(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function y(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var i="function"==typeof e?e(t,n):e;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var w=!("undefined"==typeof window||!window.document||!window.document.createElement);function b(e,t){t(window.confirm(e))}var S="popstate",x="hashchange";function O(){try{return window.history.state||{}}catch(e){return{}}}var T="undefined"!=typeof window?function(e){void 0===e&&(e={}),w||f(!1);var t,n=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=e,a=i.forceRefresh,u=void 0!==a&&a,l=i.getUserConfirmation,c=void 0===l?b:l,d=i.keyLength,T=void 0===d?6:d,_=e.basename?v(h(e.basename)):"";function k(e){var t=e||{},n=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return _&&(i=p(i,_)),g(i,r,n)}function M(){return Math.random().toString(36).substr(2,T)}var E=y();function L(e){(0,s.Z)(z,e),z.length=n.length,E.notifyListeners(z.location,z.action)}function P(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||I(k(e.state))}function D(){I(k(O()))}var R=!1;function I(e){if(R)R=!1,L();else{E.confirmTransitionTo(e,"POP",c,(function(t){t?L({action:"POP",location:e}):function(e){var t=z.location,n=N.indexOf(t.key);-1===n&&(n=0);var r=N.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(R=!0,A(o))}(e)}))}}var C=k(O()),N=[C.key];function j(e){return _+m(e)}function A(e){n.go(e)}var H=0;function W(e){1===(H+=e)&&1===e?(window.addEventListener(S,P),o&&window.addEventListener(x,D)):0===H&&(window.removeEventListener(S,P),o&&window.removeEventListener(x,D))}var q=!1,z={length:n.length,action:"POP",location:C,createHref:j,push:function(e,t){var o="PUSH",i=g(e,t,M(),z.location);E.confirmTransitionTo(i,o,c,(function(e){if(e){var t=j(i),a=i.key,s=i.state;if(r)if(n.pushState({key:a,state:s},null,t),u)window.location.href=t;else{var l=N.indexOf(z.location.key),c=N.slice(0,l+1);c.push(i.key),N=c,L({action:o,location:i})}else window.location.href=t}}))},replace:function(e,t){var o="REPLACE",i=g(e,t,M(),z.location);E.confirmTransitionTo(i,o,c,(function(e){if(e){var t=j(i),a=i.key,s=i.state;if(r)if(n.replaceState({key:a,state:s},null,t),u)window.location.replace(t);else{var l=N.indexOf(z.location.key);-1!==l&&(N[l]=i.key),L({action:o,location:i})}else window.location.replace(t)}}))},go:A,goBack:function(){A(-1)},goForward:function(){A(1)},block:function(e){void 0===e&&(e=!1);var t=E.setPrompt(e);return q||(W(1),q=!0),function(){return q&&(q=!1,W(-1)),t()}},listen:function(e){var t=E.appendListener(e);return W(1),function(){W(-1),t()}}};return z}():null,_=function(e){var t=e.data.post,n=[],s={replace:function(e){"img"===e.name&&n.push(e.attribs)}};return(0,o.ZP)(t.content,s),r.createElement(a.Z,{className:"portfolio-container"},r.createElement("button",{className:"btn btn-back btn-default",onClick:function(){T?T.goBack():window.location.href="/"}},"Назад"),r.createElement(i.Z,{height:"100%",slideWidth:"100%",viewportHeight:"100%",lazyLoad:!0},n.map((function(e,t){return r.createElement("img",{key:t,src:e.src,srcSet:e.srcset,width:e.width,height:e.height,sizes:e.sizes,loading:e.loading,title:e.alt,alt:e.alt})}))))}}}]);
//# sourceMappingURL=component---src-templates-portfolio-js-85fa52f1e0095b6751ae.js.map