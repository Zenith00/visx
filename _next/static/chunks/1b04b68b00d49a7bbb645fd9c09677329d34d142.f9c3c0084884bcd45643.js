(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{Hoty:function(e,r,t){"use strict";t.r(r);var n=t("m+Ft");t.d(r,"curveBasis",(function(){return n.b}));var i=t("Q97m");t.d(r,"curveBasisClosed",(function(){return i.a}));var a=t("t4/P");t.d(r,"curveBasisOpen",(function(){return a.a}));var s=t("vHTF");t.d(r,"curveStep",(function(){return s.a})),t.d(r,"curveStepAfter",(function(){return s.b})),t.d(r,"curveStepBefore",(function(){return s.c}));var l=t("KDFE");t.d(r,"curveBundle",(function(){return l.a}));var o=t("mGPF");t.d(r,"curveLinear",(function(){return o.a}));var c=t("8iLE");t.d(r,"curveLinearClosed",(function(){return c.a}));var u=t("JkM6");t.d(r,"curveCardinal",(function(){return u.b}));var d=t("/kCm");t.d(r,"curveCardinalClosed",(function(){return d.b}));var f=t("BEsX");t.d(r,"curveCardinalOpen",(function(){return f.b}));var p=t("/Vk/");t.d(r,"curveCatmullRom",(function(){return p.a}));var m=t("S4k1");t.d(r,"curveCatmullRomClosed",(function(){return m.a}));var h=t("KrvH");t.d(r,"curveCatmullRomOpen",(function(){return h.a}));var v=t("EbDF");t.d(r,"curveMonotoneX",(function(){return v.a})),t.d(r,"curveMonotoneY",(function(){return v.b}));var x=t("w5BF");t.d(r,"curveNatural",(function(){return x.a}))},U8e0:function(e,r,t){"use strict";r.__esModule=!0,r.default=function(e){return(0,n.randomLcg)(e)};var n=t("G/4L")},eiPp:function(e,r,t){"use strict";t.d(r,"a",(function(){return L}));var n=t("jg1C"),i=t("yFcC"),a=t.n(i),s=t("ERkP"),l=t.n(s),o=t("ue4z"),c=t("Hoty"),u=t("JmwF"),d=t("geX1"),f=t("cjvV"),p=t("67po"),m=t("aWzz"),h=t.n(m),v=["id","markerWidth","markerHeight","markerUnits","children"];function x(){return(x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function j(e){var r=e.id,t=e.markerWidth,n=void 0===t?3:t,i=e.markerHeight,a=void 0===i?3:i,s=e.markerUnits,o=void 0===s?"userSpaceOnUse":s,c=e.children,u=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,v);return l.a.createElement("defs",null,l.a.createElement("marker",x({id:r,markerWidth:n,markerHeight:a,markerUnits:o},u),c))}j.propTypes={id:h.a.string.isRequired,size:h.a.number,markerWidth:h.a.oneOfType([h.a.string,h.a.number]),markerHeight:h.a.oneOfType([h.a.string,h.a.number]),markerUnits:h.a.string,refX:h.a.oneOfType([h.a.string,h.a.number]),refY:h.a.oneOfType([h.a.string,h.a.number]),strokeWidth:h.a.number,children:h.a.node.isRequired};var b=["id","size","strokeWidth"];function y(){return(y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function O(e){var r=e.id,t=e.size,n=void 0===t?9:t,i=e.strokeWidth,a=void 0===i?1:i,s=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,b),o=n+a,c=n/2,u="0 "+c+", "+c+" "+c+", "+c+" 0, "+c+" "+n+", "+c+" "+c+", "+n+" "+c;return l.a.createElement(j,y({id:r,markerWidth:o,markerHeight:o,refX:c,refY:c,orient:"auto",markerUnits:"strokeWidth",fill:"none",strokeWidth:a},s),l.a.createElement("polyline",{points:u}))}function g(){return(g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function k(e){return l.a.createElement(O,g({orient:45},e))}var w=["id","size","strokeWidth"];function E(){return(E=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function S(e){var r=e.id,t=e.size,n=void 0===t?9:t,i=e.strokeWidth,a=void 0===i?1:i,s=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,w),o=2*n+a,c=o/2;return l.a.createElement(j,E({id:r,markerWidth:o,markerHeight:o,refX:0,refY:c,orient:"auto-start-reverse",markerUnits:"strokeWidth",strokeWidth:a},s),l.a.createElement("circle",{r:n,cx:c,cy:c}))}var C=["id","size","strokeWidth"];function P(){return(P=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function W(e){var r=e.id,t=e.size,n=void 0===t?9:t,i=e.strokeWidth,a=void 0===i?1:i,s=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,C),o=n+2*a,c=n,u=o/2,d="0 0, "+n+" "+n/2+", 0 "+n;return l.a.createElement(j,P({id:r,markerWidth:o,markerHeight:o,refX:c,refY:u,orient:"auto",markerUnits:"strokeWidth",fill:"none",strokeWidth:a},s),l.a.createElement("g",{transform:"translate("+a+", "+a+")"},l.a.createElement("polyline",{points:d})))}var _=["id","size","fill","stroke","strokeWidth"];function T(){return(T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function N(e){var r=e.id,t=e.size,n=void 0===t?9:t,i=e.fill,a=e.stroke,s=e.strokeWidth,o=void 0===s?1:s,c=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,_),u=Math.max(n,2*o),d=u/2,f=n/2;return l.a.createElement(j,T({id:r,markerWidth:u,markerHeight:n,refX:d,refY:f,orient:"auto",markerUnits:"strokeWidth",fill:i||a,stroke:"none"},c),l.a.createElement("rect",{width:o,height:n,x:d}))}var z=t("jCJf"),R=t.n(z),U=Object.keys(c),D=new Array(5).fill(null).map((function(e,r){return R()(25,r/72).sort((function(e,r){return e.date.getTime()-r.date.getTime()}))})),F=D.reduce((function(e,r){return e.concat(r)}),[]),H=function(e){return e.date},M=function(e){return e.value},q=Object(f.a)({domain:Object(o.b)(F,H)}),A=Object(p.a)({domain:[0,Object(o.c)(F,M)]});function L(e){var r=e.width,t=e.height,i=e.showControls,l=void 0===i||i,o=Object(s.useState)("curveNatural"),f=o[0],p=o[1],m=Object(s.useState)(!0),h=m[0],v=m[1],x=l?t-40:t,j=x/5;return q.range([0,r-50]),A.range([j-2,0]),Object(n.jsxs)("div",{className:"jsx-1571817224 visx-curves-demo",children:[l&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("label",{className:"jsx-1571817224",children:["Curve type \xa0",Object(n.jsx)("select",{onChange:function(e){return p(e.target.value)},value:f,className:"jsx-1571817224",children:U.map((function(e){return Object(n.jsx)("option",{value:e,className:"jsx-1571817224",children:e},e)}))})]}),"\xa0",Object(n.jsxs)("label",{className:"jsx-1571817224",children:["Show points\xa0",Object(n.jsx)("input",{type:"checkbox",checked:h,onChange:function(){return v(!h)},className:"jsx-1571817224"})]}),Object(n.jsx)("br",{className:"jsx-1571817224"})]}),Object(n.jsxs)("svg",{width:r,height:x,className:"jsx-1571817224",children:[Object(n.jsx)(k,{id:"marker-x",stroke:"#333",size:22,strokeWidth:4,markerUnits:"userSpaceOnUse"}),Object(n.jsx)(O,{id:"marker-cross",stroke:"#333",size:22,strokeWidth:4,strokeOpacity:.6,markerUnits:"userSpaceOnUse"}),Object(n.jsx)(S,{id:"marker-circle",fill:"#333",size:2,refX:2}),Object(n.jsx)(W,{id:"marker-arrow-odd",stroke:"#333",size:8,strokeWidth:1}),Object(n.jsx)(N,{id:"marker-line",fill:"#333",size:16,strokeWidth:1}),Object(n.jsx)(W,{id:"marker-arrow",fill:"#333",refX:2,size:6}),Object(n.jsx)("rect",{width:r,height:x,fill:"#efefef",rx:14,ry:14,className:"jsx-1571817224"}),r>8&&D.map((function(e,r){var t=r%2===0,i=t?"url(#marker-cross)":"url(#marker-x)";1===r&&(i="url(#marker-line)");var a=t?"url(#marker-arrow)":"url(#marker-arrow-odd)";return Object(n.jsxs)(u.a,{top:r*j,left:13,children:[h&&e.map((function(e,t){return Object(n.jsx)("circle",{r:3,cx:q(H(e)),cy:A(M(e)),stroke:"rgba(33,33,33,0.5)",fill:"transparent",className:"jsx-1571817224"},r+t)})),Object(n.jsx)(d.a,{curve:c[f],data:e,x:function(e){var r;return null!==(r=q(H(e)))&&void 0!==r?r:0},y:function(e){var r;return null!==(r=A(M(e)))&&void 0!==r?r:0},stroke:"#333",strokeWidth:t?2:1,strokeOpacity:t?.6:1,shapeRendering:"geometricPrecision",markerMid:"url(#marker-circle)",markerStart:i,markerEnd:a})]},"lines-".concat(r))}))]}),Object(n.jsx)(a.a,{id:"1571817224",children:[".visx-curves-demo.jsx-1571817224 label.jsx-1571817224{font-size:12px;}"]})]})}try{L.displayName="Example",L.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},showControls:{defaultValue:{value:!0},description:"",name:"showControls",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-curve/Example.tsx#Example"]={docgenInfo:L.__docgenInfo,name:"Example",path:"src/sandboxes/visx-curve/Example.tsx#Example"})}catch(V){}},i6Tx:function(e,r,t){"use strict";r.__esModule=!0,r.default=f;var n=c(t("aWzz")),i=c(t("FGHv")),a=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o(r);if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(t("ERkP")),s=t("Br7l"),l=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"];function o(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(o=function(e){return e?t:r})(e)}function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var d=[];function f(e){var r=e.className,t=e.children,n=e.debounceTime,o=void 0===n?300:n,c=e.ignoreDimensions,f=void 0===c?d:c,p=e.parentSizeStyles,m=void 0===p?{width:"100%",height:"100%"}:p,h=e.enableDebounceLeadingCall,v=void 0===h||h,x=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,l),j=(0,a.useRef)(null),b=(0,a.useRef)(0),y=(0,a.useState)({width:0,height:0,top:0,left:0}),O=y[0],g=y[1],k=(0,a.useMemo)((function(){var e=Array.isArray(f)?f:[f];return(0,i.default)((function(r){g((function(t){return Object.keys(t).filter((function(e){return t[e]!==r[e]})).every((function(r){return e.includes(r)}))?t:r}))}),o,{leading:v})}),[o,v,f]);return(0,a.useEffect)((function(){var e=new s.ResizeObserver((function(e){void 0===e&&(e=[]),e.forEach((function(e){var r=e.contentRect,t=r.left,n=r.top,i=r.width,a=r.height;b.current=window.requestAnimationFrame((function(){k({width:i,height:a,top:n,left:t})}))}))}));return j.current&&e.observe(j.current),function(){window.cancelAnimationFrame(b.current),e.disconnect(),null!=k&&k.cancel&&k.cancel()}}),[k]),a.default.createElement("div",u({style:m,ref:j,className:r},x),t(u({},O,{ref:j.current,resize:k})))}f.propTypes={className:n.default.string,debounceTime:n.default.number,enableDebounceLeadingCall:n.default.bool,ignoreDimensions:n.default.oneOfType([n.default.any,n.default.arrayOf(n.default.any)]),children:n.default.func.isRequired}},i9k6:function(e,r,t){"use strict";t.d(r,"a",(function(){return m}));var n=t("zjfJ"),i=t("jg1C"),a=t("yFcC"),s=t.n(a),l=t("ERkP"),o=t.n(l),c=t("jvFD"),u=t.n(c),d=t("i6Tx"),f=t.n(d);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){var r,t,a=e.description,l=e.detailsHeight,c=void 0===l?76:l,d=e.detailsStyles,m=e.exampleProps,h=e.exampleRenderer,v=e.exampleUrl,x=e.tileStyles,j=e.title;return Object(i.jsxs)(i.Fragment,{children:[(r=v,t=Object(i.jsxs)("div",{style:x,className:"jsx-713312509 gallery-tile",children:[Object(i.jsx)("div",{className:"jsx-713312509 image",children:Object(i.jsx)(f.a,{children:function(e){var r=e.width,t=e.height;return o.a.createElement(h,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){Object(n.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({width:r,height:t+(j||a?c:0)},m))}})}),(j||a)&&Object(i.jsxs)("div",{style:d,className:"jsx-713312509 details",children:[j&&Object(i.jsx)("div",{className:"jsx-713312509 title",children:j}),a&&Object(i.jsx)("div",{className:"jsx-713312509 description",children:Object(i.jsx)("pre",{className:"jsx-713312509",children:a})})]})]}),r?Object(i.jsx)(u.a,{href:r,children:t}):t),Object(i.jsx)(s.a,{id:"713312509",children:["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]})]})}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(h){}},jCJf:function(e,r,t){"use strict";r.__esModule=!0,r.default=function(e,r,t){var n=null==r?Math.random:(0,i.default)(r),a=null==t?Date.now():new Date(t).valueOf();return new Array(e).fill(1).map((function(e,r){return{date:new Date(a-36e5*r),value:3e3*n()|0}}))};var n,i=(n=t("U8e0"))&&n.__esModule?n:{default:n}},xiZr:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return u}));var n=t("jg1C"),i=(t("ERkP"),t("eiPp")),a=t("i9k6"),s=t("yeGK");t.d(r,"packageJson",(function(){return s}));var l={border:"1px solid lightgray"},o={color:"#222"},c={showControls:!1};function u(){return Object(n.jsx)(a.a,{title:"Curves",description:"<Curve.* /> <Shape.Line />",exampleProps:c,exampleRenderer:i.a,exampleUrl:"/curves",tileStyles:l,detailsStyles:o})}},yeGK:function(e){e.exports=JSON.parse('{"name":"@visx/demo-curve","description":"Standalone visx curve demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/curve":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/marker":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.4.0","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","curve","interpolate"]}')}}]);