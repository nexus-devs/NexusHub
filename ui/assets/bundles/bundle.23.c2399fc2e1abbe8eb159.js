(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{136:function(e,n,t){"use strict";t.r(n);var a=t(793),s=t(270);for(var o in s)"default"!==o&&function(e){t.d(n,e,function(){return s[e]})}(o);t(725);var i=t(3),r=Object(i.a)(s.default,a.a,a.b,!1,null,"60d7b528",null);r.options.__file="ws.vue",n.default=r.exports},270:function(e,n,t){"use strict";t.r(n);var a=t(271),s=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n.default=s.a},271:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,s=t(65),o=(a=s)&&a.__esModule?a:{default:a};n.default={components:{docs:o.default}}},272:function(e,n,t){},725:function(e,n,t){"use strict";var a=t(272);t.n(a).a},793:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("docs",[t("h1",[e._v("WebSockets")]),e._v(" "),t("p",[e._v("\n      If you want to use real-time features, WebSockets are the way to go. We\n      generally recommend using this instead of HTTP connections if you plan to\n      make frequent requests or want to use our pub/sub endpoints.\n      "),t("br"),e._v(" "),t("br"),e._v("\n      Please keep in mind that every payload from the server and client is\n      expected to be JSON encoded.\n    ")]),e._v(" "),t("br"),e._v(" "),t("h4",[e._v("Authenticated connection (Node.js)")]),e._v(" "),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),t("code",{staticClass:"javascript"},[e._v("const WebSocket = require('ws')\nconst ws = new WebSocket('wss://api.nexushub.co/ws', {\n  headers: {\n    authorization: `bearer ${access_token}`\n  }\n})\n")]),e._v("\n    ")]),e._v(" "),t("p",[e._v("\n      For more information on how to get an access token, check out the\n      "),t("router-link",{attrs:{to:"/developers/api/authentication"}},[e._v("authentication guide")]),e._v(".\n    ")],1),e._v(" "),t("h2",[e._v("Ping/Pong")]),e._v(" "),t("p",[e._v("\n      In order to keep your client alive, it has to respond to pings from the\n      server. If no pong has been sent as a response within 45 seconds, the\n      connection is terminated.\n    ")]),e._v(" "),t("h4",[e._v("Ping handler")]),e._v(" "),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),t("code",{staticClass:"javascript"},[e._v("ws.on('message', payload => {\n  payload = JSON.parse(payload)\n\n  if (typeof payload === 'string' && payload.startsWith('primus::ping::')) {\n    ws.send(JSON.stringify(payload.replace('ping', 'pong')))\n  }\n})\n")]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("RESTful requests")]),e._v(" "),t("p",[e._v("\n      Making RESTful requests is fairly straightforward. Set a request id counter\n      and send it alongside the request object. The response will then have the\n      same id.\n      "),t("br"),e._v(" "),t("br"),e._v("\n      Depending on your WebSocket implementation, we recommend tracking\n      all requests in an array that is checked in a "),t("b",[e._v("single message event listener")]),e._v(".\n      The examples below create a listener for every request, which is not how\n      you'd want to do things. We merely demonstrate things this way for the sake\n      of clarity.\n    ")]),e._v(" "),t("h4",[e._v("GET")]),e._v(" "),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),t("code",{staticClass:"javascript"},[e._v("let requestIds = 1\n\n// Request\nconst id = requestIds++\nws.send(JSON.stringify({\n  action: 'GET',\n  url: '/foo',\n  id\n}))\n\n// Response\nws.on('message', payload => {\n  payload = JSON.parse(payload)\n  if (payload.id === id) {\n    console.log(payload.body) // 'foo'\n  }\n})\n")]),e._v("\n    ")]),e._v(" "),t("h4",[e._v("POST")]),e._v(" "),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),t("code",{staticClass:"javascript"},[e._v("let requestIds = 1\n\n// Request\nconst id = requestIds++\nws.send(JSON.stringify({\n  action: 'POST',\n  url: '/post',\n  body: { foo: 'bar' },\n  id\n}))\n\n// Response\nws.on('message', payload => {\n  payload = JSON.parse(payload)\n  if (payload.id === id) {\n    console.log(payload.body) // { foo: 'bar' }\n  }\n})\n")]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("Pub/Sub")]),e._v(" "),t("p",[e._v("\n      For real-time data, you'll want to subscribe to Pub/Sub endpoints. Their\n      response format is usually the same as on a normal GET request.\n    ")]),e._v(" "),t("h4",[e._v("Subscribe")]),e._v(" "),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),t("code",{staticClass:"javascript"},[e._v("ws.send(JSON.stringify({\n  action: 'SUBSCRIBE',\n  room: '/warframe/v1/orders/opm'\n}))\n\nws.on('message', payload => {\n  payload = JSON.parse(payload)\n  if (payload.room === '/warframe/v1/orders/opm') {\n    console.log(payload.data) // Logs orders per minute every time a new order comes in.\n  }\n})\n")]),e._v("\n    ")]),e._v(" "),t("h4",[e._v("Unsubscribe")]),e._v(" "),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("      "),t("code",{staticClass:"javascript"},[e._v("ws.send(JSON.stringify({\n  action: 'UNSUBSCRIBE',\n  room: '/warframe/v1/orders/opm'\n}))\n")]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("Full setup")]),e._v(" "),t("p",[e._v("\n      If you need an overview for a full setup with automated authentication and\n      error handling, check out our implementation for\n      "),t("a",{attrs:{href:"https://github.com/cubic-js/cubic/tree/development/packages/client"}},[e._v("cubic-client")]),e._v(".\n    ")])])},s=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return s})}}]);