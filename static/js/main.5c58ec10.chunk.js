(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],[,,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a,r=t(0),c=t.n(r),o=t(3),i=t.n(o),l=(t(10),t(1)),s=t(4),u=t.n(s);function p(e){var n=Object(r.useState)(""),t=Object(l.a)(n,2),o=t[0],i=t[1],s=Object(r.useRef)(),p=function(){var n={requests:[{indexName:"ikea",params:"query=".concat(o,"&hitsPerPage=16")}]};fetch("https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(n){o.length>0?e.handleResponse(n.results[0].hits):e.handleResponse(null)})).catch((function(e){console.error("Error:",e)}))},f=s.current;Object(r.useEffect)((function(){s.current=o,f!==o&&u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:clearTimeout(a),a=setTimeout((function(){p()}),200);case 2:case"end":return e.stop()}}))}));return c.a.createElement("div",null,c.a.createElement("span",null,"Search: "),c.a.createElement("input",{type:"text",value:o,onChange:function(e){return function(e){var n=e.target.value;i(n)}(e)}}))}function f(e){var n=/http/gi;return c.a.createElement("div",null,e.response&&e.response.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("div",{key:e.objectID},e.name),c.a.createElement("img",{src:e.image.replace(n,"https"),alt:e.description,key:t}))})))}function h(){var e=Object(r.useState)(null),n=Object(l.a)(e,2),t=n[0],a=n[1];return c.a.createElement("div",null,c.a.createElement(p,{handleResponse:function(e){return a(e)}}),c.a.createElement(f,{response:t}))}t(12);var m=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.5c58ec10.chunk.js.map