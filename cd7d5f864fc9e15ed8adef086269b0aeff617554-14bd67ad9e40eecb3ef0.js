/*! For license information please see cd7d5f864fc9e15ed8adef086269b0aeff617554-14bd67ad9e40eecb3ef0.js.LICENSE.txt */
(self.webpackChunkbuilding_portfolio_template=self.webpackChunkbuilding_portfolio_template||[]).push([[84],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},8048:function(e){e.exports={CASE_SENSITIVE_TAG_NAMES:["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussainBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"]}},5389:function(e,t,n){var r="html",i="head",o="body",a=/<([a-zA-Z]+[0-9]?)/,s=/<head.*>/i,l=/<body.*>/i,c=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},u=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")};if("function"==typeof window.DOMParser){var p=new window.DOMParser;c=u=function(e,t){return t&&(e="<"+t+">"+e+"</"+t+">"),p.parseFromString(e,"text/html")}}if(document.implementation){var f=n(5953).isIE,d=document.implementation.createHTMLDocument(f()?"html-dom-parser":void 0);c=function(e,t){return t?(d.documentElement.getElementsByTagName(t)[0].innerHTML=e,d):(d.documentElement.innerHTML=e,d)}}var m,h=document.createElement("template");h.content&&(m=function(e){return h.innerHTML=e,h.content.childNodes}),e.exports=function(e){var t,n,p,f,d=e.match(a);switch(d&&d[1]&&(t=d[1].toLowerCase()),t){case r:return n=u(e),s.test(e)||(p=n.getElementsByTagName(i)[0])&&p.parentNode.removeChild(p),l.test(e)||(p=n.getElementsByTagName(o)[0])&&p.parentNode.removeChild(p),n.getElementsByTagName(r);case i:case o:return f=c(e).getElementsByTagName(t),l.test(e)&&s.test(e)?f[0].parentNode.childNodes:f;default:return m?m(e):c(e,o).getElementsByTagName(o)[0].childNodes}}},3268:function(e,t,n){var r=n(5389),i=n(5953).formatDOM,o=/<(![a-zA-Z\s]+)>/;e.exports=function(e){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(""===e)return[];var t,n=e.match(o);return n&&n[1]&&(t=n[1]),i(r(e),null,t)}},5953:function(e,t,n){for(var r,i=n(8048),o=n(8486),a=i.CASE_SENSITIVE_TAG_NAMES,s=o.Comment,l=o.Element,c=o.ProcessingInstruction,u=o.Text,p={},f=0,d=a.length;f<d;f++)r=a[f],p[r.toLowerCase()]=r;function m(e){for(var t,n={},r=0,i=e.length;r<i;r++)n[(t=e[r]).name]=t.value;return n}function h(e){var t=function(e){return p[e]}(e=e.toLowerCase());return t||e}e.exports={formatAttributes:m,formatDOM:function e(t,n,r){n=n||null;for(var i=[],o=0,a=t.length;o<a;o++){var p,f=t[o];switch(f.nodeType){case 1:(p=new l(h(f.nodeName),m(f.attributes))).children=e(f.childNodes,p);break;case 3:p=new u(f.nodeValue);break;case 8:p=new s(f.nodeValue);break;default:continue}var d=i[o-1]||null;d&&(d.next=p),p.parent=n,p.prev=d,p.next=null,i.push(p)}return r&&((p=new c(r.substring(0,r.indexOf(" ")).toLowerCase(),r)).next=i[0]||null,p.parent=n,i.unshift(p),i[1]&&(i[1].prev=i[0])),i},isIE:function(){return/(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)}}},8486:function(e,t){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.Element=t.Document=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0;var o=new Map([["tag",1],["script",1],["style",1],["directive",1],["text",3],["cdata",4],["comment",8],["root",9]]),a=function(){function e(e){this.type=e,this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"nodeType",{get:function(){var e;return null!==(e=o.get(this.type))&&void 0!==e?e:1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),m(this,e)},e}();t.Node=a;var s=function(e){function t(t,n){var r=e.call(this,t)||this;return r.data=n,r}return r(t,e),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),t}(a);t.DataNode=s;var l=function(e){function t(t){return e.call(this,"text",t)||this}return r(t,e),t}(s);t.Text=l;var c=function(e){function t(t){return e.call(this,"comment",t)||this}return r(t,e),t}(s);t.Comment=c;var u=function(e){function t(t,n){var r=e.call(this,"directive",n)||this;return r.name=t,r}return r(t,e),t}(s);t.ProcessingInstruction=u;var p=function(e){function t(t,n){var r=e.call(this,t)||this;return r.children=n,r}return r(t,e),Object.defineProperty(t.prototype,"firstChild",{get:function(){var e;return null!==(e=this.children[0])&&void 0!==e?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),t}(a);t.NodeWithChildren=p;var f=function(e){function t(t){return e.call(this,"root",t)||this}return r(t,e),t}(p);t.Document=f;var d=function(e){function t(t,n,r){void 0===r&&(r=[]);var i=e.call(this,"script"===t?"script":"style"===t?"style":"tag",r)||this;return i.name=t,i.attribs=n,i.attribs=n,i}return r(t,e),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e=this;return Object.keys(this.attribs).map((function(t){var n,r;return{name:t,value:e.attribs[t],namespace:null===(n=e["x-attribsNamespace"])||void 0===n?void 0:n[t],prefix:null===(r=e["x-attribsPrefix"])||void 0===r?void 0:r[t]}}))},enumerable:!1,configurable:!0}),t}(p);function m(e,t){var n;switch(void 0===t&&(t=!1),e.type){case"text":n=new l(e.data);break;case"directive":var r=e;n=new u(r.name,r.data),null!=r["x-name"]&&(n["x-name"]=r["x-name"],n["x-publicId"]=r["x-publicId"],n["x-systemId"]=r["x-systemId"]);break;case"comment":n=new c(e.data);break;case"tag":case"script":case"style":var o=e,a=t?h(o.children):[],s=new d(o.name,i({},o.attribs),a);a.forEach((function(e){return e.parent=s})),o["x-attribsNamespace"]&&(s["x-attribsNamespace"]=i({},o["x-attribsNamespace"])),o["x-attribsPrefix"]&&(s["x-attribsPrefix"]=i({},o["x-attribsPrefix"])),n=s;break;case"cdata":a=t?h(e.children):[];var m=new p(e.type,a);a.forEach((function(e){return e.parent=m})),n=m;break;case"root":var g=e,v=(a=t?h(g.children):[],new f(a));a.forEach((function(e){return e.parent=v})),g["x-mode"]&&(v["x-mode"]=g["x-mode"]),n=v;break;case"doctype":throw new Error("Not implemented yet: ElementType.Doctype case")}return n.startIndex=e.startIndex,n.endIndex=e.endIndex,n}function h(e){for(var t=e.map((function(e){return m(e,!0)})),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}t.Element=d,t.cloneNode=m},392:function(e,t,n){var r=n(9178),i=n(9062),o=n(3268),a={lowerCaseAttributeNames:!1};function s(e,t){if("string"!=typeof e)throw new TypeError("First argument must be a string");return""===e?[]:r(o(e,(t=t||{}).htmlparser2||a),t)}s.domToReact=r,s.htmlToDOM=o,s.attributesToProps=i,e.exports=s,e.exports.default=s},3310:function(e,t,n){"use strict";var r=n(392),i=n.n(r);i().domToReact,i().htmlToDOM,i().attributesToProps;t.ZP=i()},9062:function(e,t,n){var r=n(8962),i=n(8065),o=i.setStyleProp,a=r.html,s=r.svg,l=r.isCustomAttribute,c=Object.prototype.hasOwnProperty;e.exports=function(e){var t,n,r,u;e=e||{};var p={};for(t in e)r=e[t],l(t)?p[t]=r:(n=t.toLowerCase(),c.call(a,n)?p[(u=a[n]).propertyName]=!!(u.hasBooleanValue||u.hasOverloadedBooleanValue&&!r)||r:c.call(s,t)?p[(u=s[t]).propertyName]=r:i.PRESERVE_CUSTOM_ATTRIBUTES&&(p[t]=r));return o(e.style,p),p}},9178:function(e,t,n){var r=n(7294),i=n(9062),o=n(8065),a=o.setStyleProp;function s(e){return o.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===e.type&&o.isCustomComponent(e.name,e.attribs)}e.exports=function e(t,n){for(var o,l,c,u,p=(n=n||{}).library||r,f=p.cloneElement,d=p.createElement,m=p.isValidElement,h=[],g="function"==typeof n.replace,v=n.trim,y=0,b=t.length;y<b;y++)if(o=t[y],g&&m(l=n.replace(o)))b>1&&(l=f(l,{key:l.key||y})),h.push(l);else if("text"!==o.type){switch(c=o.attribs,s(o)?a(c.style,c):c&&(c=i(c)),u=null,o.type){case"script":case"style":o.children[0]&&(c.dangerouslySetInnerHTML={__html:o.children[0].data});break;case"tag":"textarea"===o.name&&o.children[0]?c.defaultValue=o.children[0].data:o.children&&o.children.length&&(u=e(o.children,n));break;default:continue}b>1&&(c.key=y),h.push(d(o.name,c,u))}else v?o.data.trim()&&h.push(o.data):h.push(o.data);return 1===h.length?h[0]:h}},8065:function(e,t,n){var r=n(7294),i=n(7929).default;var o={reactCompat:!0};var a=r.version.split(".")[0]>=16;e.exports={PRESERVE_CUSTOM_ATTRIBUTES:a,invertObject:function(e,t){if(!e||"object"!=typeof e)throw new TypeError("First argument must be an object");var n,r,i="function"==typeof t,o={},a={};for(n in e)r=e[n],i&&(o=t(n,r))&&2===o.length?a[o[0]]=o[1]:"string"==typeof r&&(a[r]=n);return a},isCustomComponent:function(e,t){if(-1===e.indexOf("-"))return t&&"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}},setStyleProp:function(e,t){null!=e&&(t.style=i(e,o))}}},6650:function(e){var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,l=/^\s+|\s+$/g,c="";function u(e){return e?e.replace(l,c):c}e.exports=function(e,l){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];l=l||{};var p=1,f=1;function d(e){var t=e.match(n);t&&(p+=t.length);var r=e.lastIndexOf("\n");f=~r?e.length-r:f+e.length}function m(){var e={line:p,column:f};return function(t){return t.position=new h(e),b(),t}}function h(e){this.start=e,this.end={line:p,column:f},this.source=l.source}h.prototype.content=e;var g=[];function v(t){var n=new Error(l.source+":"+p+":"+f+": "+t);if(n.reason=t,n.filename=l.source,n.line=p,n.column=f,n.source=e,!l.silent)throw n;g.push(n)}function y(t){var n=t.exec(e);if(n){var r=n[0];return d(r),e=e.slice(r.length),n}}function b(){y(r)}function x(e){var t;for(e=e||[];t=k();)!1!==t&&e.push(t);return e}function k(){var t=m();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;c!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,c===e.charAt(n-1))return v("End of comment missing");var r=e.slice(2,n-2);return f+=2,d(r),e=e.slice(n),f+=2,t({type:"comment",comment:r})}}function E(){var e=m(),n=y(i);if(n){if(k(),!y(o))return v("property missing ':'");var r=y(a),l=e({type:"declaration",property:u(n[0].replace(t,c)),value:r?u(r[0].replace(t,c)):c});return y(s),l}}return b(),function(){var e,t=[];for(x(t);e=E();)!1!==e&&(t.push(e),x(t));return t}()}},8962:function(e,t,n){var r=n(2914),i=n(5414),o=n(961),a=o.MUST_USE_PROPERTY,s=o.HAS_BOOLEAN_VALUE,l=o.HAS_NUMERIC_VALUE,c=o.HAS_POSITIVE_NUMERIC_VALUE,u=o.HAS_OVERLOADED_BOOLEAN_VALUE;function p(e,t){return(e&t)===t}function f(e,t,n){var r,i,o,f=e.Properties,d=e.DOMAttributeNames;for(i in f)r=d[i]||(n?i:i.toLowerCase()),o=f[i],t[r]={attributeName:r,propertyName:i,mustUseProperty:p(o,a),hasBooleanValue:p(o,s),hasNumericValue:p(o,l),hasPositiveNumericValue:p(o,c),hasOverloadedBooleanValue:p(o,u)}}var d={};f(r,d);var m={};f(i,m,!0);var h={};f(r,h),f(i,h,!0);e.exports={html:d,svg:m,properties:h,isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"))}},2914:function(e){e.exports={Properties:{autoFocus:4,accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:4,allowTransparency:0,alt:0,as:0,async:4,autoComplete:0,autoPlay:4,capture:4,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:5,cite:0,classID:0,className:0,cols:24,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:4,controlsList:0,coords:0,crossOrigin:0,data:0,dateTime:0,default:4,defer:4,dir:0,disabled:4,download:32,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:4,formTarget:0,frameBorder:0,headers:0,height:0,hidden:4,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:4,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:5,muted:5,name:0,nonce:0,noValidate:4,open:4,optimum:0,pattern:0,placeholder:0,playsInline:4,poster:0,preload:0,profile:0,radioGroup:0,readOnly:4,referrerPolicy:0,rel:0,required:4,reversed:4,role:0,rows:24,rowSpan:8,sandbox:0,scope:0,scoped:4,scrolling:0,seamless:4,selected:5,shape:0,size:24,sizes:0,span:24,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:8,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,typeof:0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:4,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"}}},5414:function(e){e.exports={Properties:{accentHeight:0,accumulate:0,additive:0,alignmentBaseline:0,allowReorder:0,alphabetic:0,amplitude:0,arabicForm:0,ascent:0,attributeName:0,attributeType:0,autoReverse:0,azimuth:0,baseFrequency:0,baseProfile:0,baselineShift:0,bbox:0,begin:0,bias:0,by:0,calcMode:0,capHeight:0,clip:0,clipPath:0,clipRule:0,clipPathUnits:0,colorInterpolation:0,colorInterpolationFilters:0,colorProfile:0,colorRendering:0,contentScriptType:0,contentStyleType:0,cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:0,direction:0,display:0,divisor:0,dominantBaseline:0,dur:0,dx:0,dy:0,edgeMode:0,elevation:0,enableBackground:0,end:0,exponent:0,externalResourcesRequired:0,fill:0,fillOpacity:0,fillRule:0,filter:0,filterRes:0,filterUnits:0,floodColor:0,floodOpacity:0,focusable:0,fontFamily:0,fontSize:0,fontSizeAdjust:0,fontStretch:0,fontStyle:0,fontVariant:0,fontWeight:0,format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:0,glyphOrientationHorizontal:0,glyphOrientationVertical:0,glyphRef:0,gradientTransform:0,gradientUnits:0,hanging:0,horizAdvX:0,horizOriginX:0,ideographic:0,imageRendering:0,in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:0,kernelUnitLength:0,kerning:0,keyPoints:0,keySplines:0,keyTimes:0,lengthAdjust:0,letterSpacing:0,lightingColor:0,limitingConeAngle:0,local:0,markerEnd:0,markerMid:0,markerStart:0,markerHeight:0,markerUnits:0,markerWidth:0,mask:0,maskContentUnits:0,maskUnits:0,mathematical:0,mode:0,numOctaves:0,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:0,overlineThickness:0,paintOrder:0,panose1:0,pathLength:0,patternContentUnits:0,patternTransform:0,patternUnits:0,pointerEvents:0,points:0,pointsAtX:0,pointsAtY:0,pointsAtZ:0,preserveAlpha:0,preserveAspectRatio:0,primitiveUnits:0,r:0,radius:0,refX:0,refY:0,renderingIntent:0,repeatCount:0,repeatDur:0,requiredExtensions:0,requiredFeatures:0,restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:0,slope:0,spacing:0,specularConstant:0,specularExponent:0,speed:0,spreadMethod:0,startOffset:0,stdDeviation:0,stemh:0,stemv:0,stitchTiles:0,stopColor:0,stopOpacity:0,strikethroughPosition:0,strikethroughThickness:0,string:0,stroke:0,strokeDasharray:0,strokeDashoffset:0,strokeLinecap:0,strokeLinejoin:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0,surfaceScale:0,systemLanguage:0,tableValues:0,targetX:0,targetY:0,textAnchor:0,textDecoration:0,textRendering:0,textLength:0,to:0,transform:0,u1:0,u2:0,underlinePosition:0,underlineThickness:0,unicode:0,unicodeBidi:0,unicodeRange:0,unitsPerEm:0,vAlphabetic:0,vHanging:0,vIdeographic:0,vMathematical:0,values:0,vectorEffect:0,version:0,vertAdvY:0,vertOriginX:0,vertOriginY:0,viewBox:0,viewTarget:0,visibility:0,widths:0,wordSpacing:0,writingMode:0,x:0,xHeight:0,x1:0,x2:0,xChannelSelector:0,xlinkActuate:0,xlinkArcrole:0,xlinkHref:0,xlinkRole:0,xlinkShow:0,xlinkTitle:0,xlinkType:0,xmlBase:0,xmlns:0,xmlnsXlink:0,xmlLang:0,xmlSpace:0,y:0,y1:0,y2:0,yChannelSelector:0,z:0,zoomAndPan:0},DOMAttributeNames:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space"}}},961:function(e){e.exports={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32}},7929:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=r(n(2303)),o=n(6024);t.default=function(e,t){var n={};return e&&"string"==typeof e?(i.default(e,(function(e,r){e&&r&&(n[o.camelCase(e,t)]=r)})),n):n}},6024:function(e,t){"use strict";t.__esModule=!0,t.camelCase=void 0;var n=/^--[a-zA-Z0-9-]+$/,r=/-([a-z])/g,i=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,a=function(e,t){return t.toUpperCase()},s=function(e,t){return t+"-"};t.camelCase=function(e,t){return void 0===t&&(t={}),function(e){return!e||i.test(e)||n.test(e)}(e)?e:(e=e.toLowerCase(),t.reactCompat||(e=e.replace(o,s)),e.replace(r,a))}},2303:function(e,t,n){var r=n(6650);e.exports=function(e,t){var n,i=null;if(!e||"string"!=typeof e)return i;for(var o,a,s=r(e),l="function"==typeof t,c=0,u=s.length;c<u;c++)o=(n=s[c]).property,a=n.value,l?t(o,a,n):a&&(i||(i={}),i[o]=a);return i}},6785:function(e,t){"use strict";t.Z=void 0;var n=function(e,t){void 0===t&&(t="start");var n=document.querySelector(e);return!!n&&(n.scrollIntoView({behavior:"smooth",block:t}),!0)};t.Z=n},5881:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),i=n(6785),o=n(5444),a=function(e){var t=e.pageClass,n=function(e){if("main-container"===t){var n=function(e,t){if(t=t.toUpperCase(),e.tagName===t)return e;for(;e=e.parentNode;)if(e.tagName===t)return e;return null}(e.target,"a");n&&n.hash&&(e.preventDefault(),(0,i.Z)(n.hash))}};return r.createElement("div",{className:"container"},r.createElement("div",{className:"navbar-wrapper"},r.createElement(o.Link,{to:"/#home",onClick:n},r.createElement("div",{id:"logo"},r.createElement("div",{className:"line-1"},r.createElement("span",{className:"part-1"},"п"),r.createElement("span",{className:"part-2"},"р"),r.createElement("span",{className:"part-3"},"естиж")),r.createElement("div",{className:"line-2"},"емонт",r.createElement("span",{className:"part-1"},"43")))),r.createElement("div",{className:"links-wrapper"},r.createElement(o.Link,{to:"/#work",onClick:n},"Работы"),r.createElement(o.Link,{to:"/#about",onClick:n},"О нас"),r.createElement(o.Link,{to:"/#contact",onClick:n},"Контакты"))))},s=function(e){var t=e.children,n=e.className,i=(0,r.useState)("nav-transparent"),o=i[0],s=i[1];return(0,r.useEffect)((function(){window.onscroll=function(e){window.innerWidth<576?(window.pageYOffset>50&&"nav-transparent"===o&&s(""),window.pageYOffset<=50&&"nav-transparent"!==o&&s("nav-transparent")):"nav-transparent"===o&&s("")}})),r.createElement("div",{className:n},r.createElement("nav",{id:"navbar",className:o},r.createElement(a,{pageClass:n})),r.createElement("main",{id:"content"},t))}}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-14bd67ad9e40eecb3ef0.js.map