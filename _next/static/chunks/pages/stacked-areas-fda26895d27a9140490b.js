_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[123],{"1ZAE":function(e,t,n){"use strict";n.r(t);var r=n("jg1C"),a=(n("ERkP"),n("6wy5")),o=n("Vqip"),i=n("f6XN");t.default=function(){return Object(r.jsx)(a.a,{component:o.b,title:"Stacked Areas",codeSandboxDirectoryName:"visx-stacked-areas",margin:{top:0,left:0,right:0,bottom:10},packageJson:i,children:"import React from 'react';\nimport { AreaStack } from '@visx/shape';\nimport { SeriesPoint } from '@visx/shape/lib/types';\nimport { GradientOrangeRed } from '@visx/gradient';\nimport browserUsage, { BrowserUsage } from '@visx/mock-data/lib/mocks/browserUsage';\nimport { scaleTime, scaleLinear } from '@visx/scale';\nimport { timeParse } from 'd3-time-format';\n\ntype BrowserNames = keyof BrowserUsage;\n\nconst data = browserUsage;\nconst keys = Object.keys(data[0]).filter((k) => k !== 'date') as BrowserNames[];\nconst parseDate = timeParse('%Y %b %d');\nexport const background = '#f38181';\n\nconst getDate = (d: BrowserUsage) => (parseDate(d.date) as Date).valueOf();\nconst getY0 = (d: SeriesPoint<BrowserUsage>) => d[0] / 100;\nconst getY1 = (d: SeriesPoint<BrowserUsage>) => d[1] / 100;\n\nexport type StackedAreasProps = {\n  width: number;\n  height: number;\n  events?: boolean;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default function Example({\n  width,\n  height,\n  margin = { top: 0, right: 0, bottom: 0, left: 0 },\n  events = false,\n}: StackedAreasProps) {\n  // bounds\n  const yMax = height - margin.top - margin.bottom;\n  const xMax = width - margin.left - margin.right;\n\n  // scales\n  const xScale = scaleTime<number>({\n    range: [0, xMax],\n    domain: [Math.min(...data.map(getDate)), Math.max(...data.map(getDate))],\n  });\n  const yScale = scaleLinear<number>({\n    range: [yMax, 0],\n  });\n\n  return width < 10 ? null : (\n    <svg width={width} height={height}>\n      <GradientOrangeRed id=\"stacked-area-orangered\" />\n      <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />\n      <AreaStack\n        top={margin.top}\n        left={margin.left}\n        keys={keys}\n        data={data}\n        x={(d) => xScale(getDate(d.data)) ?? 0}\n        y0={(d) => yScale(getY0(d)) ?? 0}\n        y1={(d) => yScale(getY1(d)) ?? 0}\n      >\n        {({ stacks, path }) =>\n          stacks.map((stack) => (\n            <path\n              key={`stack-${stack.key}`}\n              d={path(stack) || ''}\n              stroke=\"transparent\"\n              fill=\"url(#stacked-area-orangered)\"\n              onClick={() => {\n                if (events) alert(`${stack.key}`);\n              }}\n            />\n          ))\n        }\n      </AreaStack>\n    </svg>\n  );\n}\n"})}},"7kLB":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stacked-areas",function(){return n("1ZAE")}])},"Cf/J":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("aWzz"),a=n.n(r),o=n("ERkP"),i=n.n(o),s=["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"];function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){var t=e.children,n=e.id,r=e.from,a=e.to,o=e.x1,f=e.y1,u=e.x2,l=e.y2,d=e.fromOffset,p=void 0===d?"0%":d,m=e.fromOpacity,y=void 0===m?1:m,g=e.toOffset,v=void 0===g?"100%":g,h=e.toOpacity,b=void 0===h?1:h,x=e.rotate,O=e.transform,k=e.vertical,j=void 0===k||k,w=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,s),E=o,S=u,P=f,N=l;return!j||E||S||P||N||(E="0",S="0",P="0",N="1"),i.a.createElement("defs",null,i.a.createElement("linearGradient",c({id:n,x1:E,y1:P,x2:S,y2:N,gradientTransform:x?"rotate("+x+")":O},w),!!t&&t,!t&&i.a.createElement("stop",{offset:p,stopColor:r,stopOpacity:y}),!t&&i.a.createElement("stop",{offset:v,stopColor:a,stopOpacity:b})))}f.propTypes={id:a.a.string.isRequired,from:a.a.string,to:a.a.string,x1:a.a.oneOfType([a.a.string,a.a.number]),x2:a.a.oneOfType([a.a.string,a.a.number]),y1:a.a.oneOfType([a.a.string,a.a.number]),y2:a.a.oneOfType([a.a.string,a.a.number]),fromOffset:a.a.oneOfType([a.a.string,a.a.number]),fromOpacity:a.a.oneOfType([a.a.string,a.a.number]),toOffset:a.a.oneOfType([a.a.string,a.a.number]),toOpacity:a.a.oneOfType([a.a.string,a.a.number]),rotate:a.a.oneOfType([a.a.string,a.a.number]),transform:a.a.string,children:a.a.node,vertical:a.a.bool}},"E+ue":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("ERkP"),a=n.n(r),o=n("O94r"),i=n.n(o),s=n("JmwF"),c=n("dGDr"),f=["className","top","left","keys","data","curve","defined","x","x0","x1","y0","y1","value","order","offset","color","children"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){var t=e.className,n=e.top,r=e.left,o=e.keys,l=e.data,d=e.curve,p=e.defined,m=e.x,y=e.x0,g=e.x1,v=e.y0,h=e.y1,b=e.value,x=e.order,O=e.offset,k=e.color,j=e.children,w=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,f),E=Object(c.f)({keys:o,value:b,order:x,offset:O}),S=Object(c.b)({x:m,x0:y,x1:g,y0:v,y1:h,curve:d,defined:p}),P=E(l);return j?a.a.createElement(a.a.Fragment,null,j({stacks:P,path:S,stack:E})):a.a.createElement(s.a,{top:n,left:r},P.map((function(e,n){return a.a.createElement("path",u({className:i()("visx-stack",t),key:"stack-"+n+"-"+(e.key||""),d:S(e)||"",fill:null==k?void 0:k(e.key,n)},w))})))}},HO86:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("lEbO");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},JmwF:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("aWzz"),a=n.n(r),o=n("ERkP"),i=n.n(o),s=n("O94r"),c=n.n(s),f=["top","left","transform","className","children","innerRef"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){var t=e.top,n=void 0===t?0:t,r=e.left,a=void 0===r?0:r,o=e.transform,s=e.className,l=e.children,d=e.innerRef,p=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,f);return i.a.createElement("g",u({ref:d,className:c()("visx-group",s),transform:o||"translate("+a+", "+n+")"},p),l)}l.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},QrqA:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("ERkP"),a=n.n(r),o=n("O94r"),i=n.n(o),s=n("E+ue"),c=["className","top","left","keys","data","curve","defined","x","x0","x1","y0","y1","value","order","offset","color","children"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){var t=e.className,n=e.top,r=e.left,o=e.keys,u=e.data,l=e.curve,d=e.defined,p=e.x,m=e.x0,y=e.x1,g=e.y0,v=e.y1,h=e.value,b=e.order,x=e.offset,O=e.color,k=e.children,j=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,c);return a.a.createElement(s.a,f({className:t,top:n,left:r,keys:o,data:u,curve:l,defined:d,x:p,x0:m,x1:y,y0:g,y1:v,value:h,order:b,offset:x,color:O},j),k||function(e){var n=e.stacks,r=e.path;return n.map((function(e,n){return a.a.createElement("path",f({className:i()("visx-area-stack",t),key:"area-stack-"+n+"-"+(e.key||""),d:r(e)||"",fill:null==O?void 0:O(e.key,n)},j))}))})}},Vqip:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return v}));var r=n("fGyu"),a=n("jg1C"),o=(n("ERkP"),n("QrqA")),i=n("wPPg"),s=n("eEjM"),c=n.n(s),f=n("cjvV"),u=n("67po"),l=n("mHfT"),d=c.a,p=Object.keys(d[0]).filter((function(e){return"date"!==e})),m=Object(l.b)("%Y %b %d"),y="#f38181",g=function(e){return m(e.date).valueOf()};function v(e){var t=e.width,n=e.height,s=e.margin,c=void 0===s?{top:0,right:0,bottom:0,left:0}:s,l=e.events,m=void 0!==l&&l,v=n-c.top-c.bottom,h=t-c.left-c.right,b=Object(f.a)({range:[0,h],domain:[Math.min.apply(Math,Object(r.a)(d.map(g))),Math.max.apply(Math,Object(r.a)(d.map(g)))]}),x=Object(u.a)({range:[v,0]});return t<10?null:Object(a.jsxs)("svg",{width:t,height:n,children:[Object(a.jsx)(i.a,{id:"stacked-area-orangered"}),Object(a.jsx)("rect",{x:0,y:0,width:t,height:n,fill:y,rx:14}),Object(a.jsx)(o.a,{top:c.top,left:c.left,keys:p,data:d,x:function(e){var t;return null!==(t=b(g(e.data)))&&void 0!==t?t:0},y0:function(e){var t;return null!==(t=x(function(e){return e[0]/100}(e)))&&void 0!==t?t:0},y1:function(e){var t;return null!==(t=x(function(e){return e[1]/100}(e)))&&void 0!==t?t:0},children:function(e){var t=e.stacks,n=e.path;return t.map((function(e){return Object(a.jsx)("path",{d:n(e)||"",stroke:"transparent",fill:"url(#stacked-area-orangered)",onClick:function(){m&&alert("".concat(e.key))}},"stack-".concat(e.key))}))}})]})}try{v.displayName="Example",v.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}},margin:{defaultValue:{value:"{ top: 0, right: 0, bottom: 0, left: 0 }"},description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-stacked-areas/Example.tsx#Example"]={docgenInfo:v.__docgenInfo,name:"Example",path:"src/sandboxes/visx-stacked-areas/Example.tsx#Example"})}catch(h){}},f6XN:function(e){e.exports=JSON.parse('{"name":"@visx/demo-stacked-areas","description":"Standalone visx stacked area demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/gradient":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-time-format":"2.2.3","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","stackedarea"]}')},fGyu:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("lEbO");var a=n("HO86");function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},lEbO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},wPPg:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),a=n.n(r),o=n("Cf/J"),i=["from","to"];function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.from,n=void 0===t?"#FCE38A":t,r=e.to,c=void 0===r?"#F38181":r,f=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);return a.a.createElement(o.a,s({from:n,to:c},f))}}},[["7kLB",0,2,1,3,4,5,6,7,11,17,25]]]);