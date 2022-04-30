_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[115],{"/HE2":function(n,e){var t=/\s/;n.exports=function(n){for(var e=n.length;e--&&t.test(n.charAt(e)););return e}},"0DlK":function(n,e,t){var r=t("/HE2"),o=/^\s+/;n.exports=function(n){return n?n.slice(0,r(n)+1).replace(o,""):n}},"30Md":function(n){n.exports=JSON.parse('{"name":"@visx/demo-network","description":"Standalone visx network demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/responsive":"latest","@visx/network":"latest","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","network"]}')},"5GZr":function(n,e,t){var r=t("qPqG");n.exports=function(){return r.Date.now()}},Be24:function(n,e,t){var r=t("0DlK"),o=t("We3G"),i=t("bnhR"),a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(i(n))return NaN;if(o(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=o(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=r(n);var t=c.test(n);return t||s.test(n)?u(n.slice(2),t?2:8):a.test(n)?NaN:+n}},FGHv:function(n,e,t){var r=t("We3G"),o=t("5GZr"),i=t("Be24"),a=Math.max,c=Math.min;n.exports=function(n,e,t){var s,u,l,f,d,p,m=0,v=!1,h=!1,x=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function y(e){var t=s,r=u;return s=u=void 0,m=e,f=n.apply(r,t)}function g(n){return m=n,d=setTimeout(k,e),v?y(n):f}function b(n){var t=n-p;return void 0===p||t>=e||t<0||h&&n-m>=l}function k(){var n=o();if(b(n))return w(n);d=setTimeout(k,function(n){var t=e-(n-p);return h?c(t,l-(n-m)):t}(n))}function w(n){return d=void 0,x&&s?y(n):(s=u=void 0,f)}function O(){var n=o(),t=b(n);if(s=arguments,u=this,p=n,t){if(void 0===d)return g(p);if(h)return clearTimeout(d),d=setTimeout(k,e),y(p)}return void 0===d&&(d=setTimeout(k,e)),f}return e=i(e)||0,r(t)&&(v=!!t.leading,l=(h="maxWait"in t)?a(i(t.maxWait)||0,e):l,x="trailing"in t?!!t.trailing:x),O.cancel=function(){void 0!==d&&clearTimeout(d),m=0,s=p=u=d=void 0},O.flush=function(){return void 0===d?f:w(o())},O}},JK97:function(n,e,t){"use strict";t.r(e);var r=t("jg1C"),o=(t("ERkP"),t("6wy5")),i=t("gtjO"),a=t("30Md");e.default=function(){return Object(r.jsx)(o.a,{component:i.b,title:"Network",codeSandboxDirectoryName:"visx-network",packageJson:a,children:"import React from 'react';\nimport { DefaultNode, Graph } from '@visx/network';\n\nexport type NetworkProps = {\n  width: number;\n  height: number;\n};\n\ninterface CustomNode {\n  x: number;\n  y: number;\n  color?: string;\n}\n\ninterface CustomLink {\n  source: CustomNode;\n  target: CustomNode;\n  dashed?: boolean;\n}\n\nconst nodes: CustomNode[] = [\n  { x: 50, y: 20 },\n  { x: 200, y: 250 },\n  { x: 300, y: 40, color: '#26deb0' },\n];\n\nconst links: CustomLink[] = [\n  { source: nodes[0], target: nodes[1] },\n  { source: nodes[1], target: nodes[2] },\n  { source: nodes[2], target: nodes[0], dashed: true },\n];\n\nconst graph = {\n  nodes,\n  links,\n};\n\nexport const background = '#272b4d';\n\nexport default function Example({ width, height }: NetworkProps) {\n  return width < 10 ? null : (\n    <svg width={width} height={height}>\n      <rect width={width} height={height} rx={14} fill={background} />\n      <Graph<CustomLink, CustomNode>\n        graph={graph}\n        top={20}\n        left={100}\n        nodeComponent={({ node: { color } }) =>\n          color ? <DefaultNode fill={color} /> : <DefaultNode />\n        }\n        linkComponent={({ link: { source, target, dashed } }) => (\n          <line\n            x1={source.x}\n            y1={source.y}\n            x2={target.x}\n            y2={target.y}\n            strokeWidth={2}\n            stroke=\"#999\"\n            strokeOpacity={0.6}\n            strokeDasharray={dashed ? '8,4' : undefined}\n          />\n        )}\n      />\n    </svg>\n  );\n}\n"})}},Jk0A:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/network",function(){return t("JK97")}])},JmwF:function(n,e,t){"use strict";t.d(e,"a",(function(){return f}));var r=t("aWzz"),o=t.n(r),i=t("ERkP"),a=t.n(i),c=t("O94r"),s=t.n(c),u=["top","left","transform","className","children","innerRef"];function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function f(n){var e=n.top,t=void 0===e?0:e,r=n.left,o=void 0===r?0:r,i=n.transform,c=n.className,f=n.children,d=n.innerRef,p=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,u);return a.a.createElement("g",l({ref:d,className:s()("visx-group",c),transform:i||"translate("+o+", "+t+")"},p),f)}f.propTypes={top:o.a.number,left:o.a.number,transform:o.a.string,className:o.a.string,children:o.a.node,innerRef:o.a.oneOfType([o.a.string,o.a.func,o.a.object])}},LDMG:function(n,e,t){var r=t("LZoh"),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=r?r.toStringTag:void 0;n.exports=function(n){var e=i.call(n,c),t=n[c];try{n[c]=void 0;var r=!0}catch(s){}var o=a.call(n);return r&&(e?n[c]=t:delete n[c]),o}},LZoh:function(n,e,t){var r=t("qPqG").Symbol;n.exports=r},Lrg7:function(n,e){n.exports=function(n){return null!=n&&"object"==typeof n}},M7oL:function(n,e,t){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;n.exports=t}).call(this,t("fRV1"))},We3G:function(n,e){n.exports=function(n){var e=typeof n;return null!=n&&("object"==e||"function"==e)}},bnhR:function(n,e,t){var r=t("luLf"),o=t("Lrg7");n.exports=function(n){return"symbol"==typeof n||o(n)&&"[object Symbol]"==r(n)}},cZPn:function(n,e){var t=Object.prototype.toString;n.exports=function(n){return t.call(n)}},fRV1:function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"===typeof window&&(t=window)}n.exports=t},gtjO:function(n,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"b",(function(){return k}));var r=t("jg1C"),o=t("ERkP"),i=t.n(o),a=t("aWzz"),c=t.n(a),s=t("JmwF"),u=t("O94r"),l=t.n(u);function f(n){var e=n.links,t=void 0===e?[]:e,r=n.linkComponent,o=n.className;return i.a.createElement(i.a.Fragment,null,t.map((function(n,e){return i.a.createElement(s.a,{key:"network-link-"+e,className:l()("visx-network-link",o)},i.a.createElement(r,{link:n}))})))}f.propTypes={links:c.a.array,className:c.a.string};var d=["r","fill"];function p(){return(p=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function m(n){var e=n.r,t=void 0===e?15:e,r=n.fill,o=void 0===r?"#21D4FD":r,a=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,d);return i.a.createElement("circle",p({r:t,fill:o},a))}function v(n){var e=n.nodes,t=void 0===e?[]:e,r=n.nodeComponent,o=void 0===r?m:r,a=n.className,c=n.x,u=void 0===c?function(n){return(null==n?void 0:n.x)||0}:c,f=n.y,d=void 0===f?function(n){return(null==n?void 0:n.y)||0}:f;return i.a.createElement(i.a.Fragment,null,t.map((function(n,e){return i.a.createElement(s.a,{key:"network-node-"+e,className:l()("visx-network-node",a),left:u(n),top:d(n)},i.a.createElement(o,{node:n}))})))}function h(n){var e=n.link;return null!=e&&e.source&&e.target?i.a.createElement("line",{x1:e.source.x,y1:e.source.y,x2:e.target.x,y2:e.target.y,strokeWidth:2,stroke:"#999",strokeOpacity:.6}):null}function x(n){var e=n.graph,t=n.linkComponent,r=void 0===t?h:t,o=n.nodeComponent,a=void 0===o?m:o,c=n.top,u=n.left;return e?i.a.createElement(s.a,{top:c,left:u},i.a.createElement(f,{links:e.links,linkComponent:r}),i.a.createElement(v,{nodes:e.nodes,nodeComponent:a})):null}m.propTypes={cx:c.a.number,cy:c.a.number},v.propTypes={nodes:c.a.array,className:c.a.string,x:c.a.func,y:c.a.func},x.propTypes={top:c.a.number,left:c.a.number};var y=[{x:50,y:20},{x:200,y:250},{x:300,y:40,color:"#26deb0"}],g={nodes:y,links:[{source:y[0],target:y[1]},{source:y[1],target:y[2]},{source:y[2],target:y[0],dashed:!0}]},b="#272b4d";function k(n){var e=n.width,t=n.height;return e<10?null:Object(r.jsxs)("svg",{width:e,height:t,children:[Object(r.jsx)("rect",{width:e,height:t,rx:14,fill:b}),Object(r.jsx)(x,{graph:g,top:20,left:100,nodeComponent:function(n){var e=n.node.color;return e?Object(r.jsx)(m,{fill:e}):Object(r.jsx)(m,{})},linkComponent:function(n){var e=n.link,t=e.source,o=e.target,i=e.dashed;return Object(r.jsx)("line",{x1:t.x,y1:t.y,x2:o.x,y2:o.y,strokeWidth:2,stroke:"#999",strokeOpacity:.6,strokeDasharray:i?"8,4":void 0})}})]})}try{k.displayName="Example",k.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-network/Example.tsx#Example"]={docgenInfo:k.__docgenInfo,name:"Example",path:"src/sandboxes/visx-network/Example.tsx#Example"})}catch(w){}},luLf:function(n,e,t){var r=t("LZoh"),o=t("LDMG"),i=t("cZPn"),a=r?r.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":a&&a in Object(n)?o(n):i(n)}},qPqG:function(n,e,t){var r=t("M7oL"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();n.exports=i}},[["Jk0A",0,2,1,3,6]]]);