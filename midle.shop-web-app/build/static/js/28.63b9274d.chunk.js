webpackJsonp([28],{555:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(7)),l=(a(n(124)),a(n(8))),i=(a(n(2)),a(n(1))),o=n(5),c=a(n(557));function u(e){var t=e.attached,n=e.basic,a=e.children,c=e.circular,s=e.className,d=e.clearing,y=e.color,f=e.compact,p=e.content,m=e.disabled,g=e.floated,h=e.inverted,b=e.loading,v=e.padded,O=e.piled,K=e.raised,x=e.secondary,E=e.size,j=e.stacked,P=e.tertiary,_=e.textAlign,N=e.vertical,k=(0,l.default)("ui",y,E,(0,o.useKeyOnly)(n,"basic"),(0,o.useKeyOnly)(c,"circular"),(0,o.useKeyOnly)(d,"clearing"),(0,o.useKeyOnly)(f,"compact"),(0,o.useKeyOnly)(m,"disabled"),(0,o.useKeyOnly)(h,"inverted"),(0,o.useKeyOnly)(b,"loading"),(0,o.useKeyOnly)(O,"piled"),(0,o.useKeyOnly)(K,"raised"),(0,o.useKeyOnly)(x,"secondary"),(0,o.useKeyOnly)(j,"stacked"),(0,o.useKeyOnly)(P,"tertiary"),(0,o.useKeyOnly)(N,"vertical"),(0,o.useKeyOrValueAndKey)(t,"attached"),(0,o.useKeyOrValueAndKey)(v,"padded"),(0,o.useTextAlignProp)(_),(0,o.useValueAndKey)(g,"floated"),"segment",s),w=(0,o.getUnhandledProps)(u,e),z=(0,o.getElementType)(u,e);return i.default.createElement(z,(0,r.default)({},w,{className:k}),o.childrenUtils.isNil(a)?p:a)}u.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","raised","secondary","size","stacked","tertiary","textAlign","vertical"],u.Group=c.default,u.propTypes={};var s=u;t.default=s},556:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(7)),l=a(n(8)),i=(a(n(2)),a(n(1))),o=n(5);function c(e){var t=e.children,n=e.className,a=e.content,u=e.fluid,s=e.text,d=e.textAlign,y=(0,l.default)("ui",(0,o.useKeyOnly)(s,"text"),(0,o.useKeyOnly)(u,"fluid"),(0,o.useTextAlignProp)(d),"container",n),f=(0,o.getUnhandledProps)(c,e),p=(0,o.getElementType)(c,e);return i.default.createElement(p,(0,r.default)({},f,{className:y}),o.childrenUtils.isNil(t)?a:t)}c.handledProps=["as","children","className","content","fluid","text","textAlign"],c.propTypes={};var u=c;t.default=u},557:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(7)),l=(a(n(124)),a(n(8))),i=(a(n(2)),a(n(1))),o=n(5);function c(e){var t=e.children,n=e.className,a=e.compact,u=e.content,s=e.horizontal,d=e.piled,y=e.raised,f=e.size,p=e.stacked,m=(0,l.default)("ui",f,(0,o.useKeyOnly)(a,"compact"),(0,o.useKeyOnly)(s,"horizontal"),(0,o.useKeyOnly)(d,"piled"),(0,o.useKeyOnly)(y,"raised"),(0,o.useKeyOnly)(p,"stacked"),"segments",n),g=(0,o.getUnhandledProps)(c,e),h=(0,o.getElementType)(c,e);return i.default.createElement(h,(0,r.default)({},g,{className:m}),o.childrenUtils.isNil(t)?u:t)}c.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],c.propTypes={};var u=c;t.default=u},561:function(e,t,n){"use strict";(function(e){var a=n(555),r=n.n(a),l=n(556),i=n.n(l),o=n(1),c=n.n(o),u=n(212),s=n(210),d=(n.n(s),{mobile:{width:"100%",margin:"0px",padding:"0px"},tablet:{width:"100%",margin:"0px",padding:"0px",paddingLeft:"2em",paddingRight:"2em"}}),y={margin:"0px",padding:"0px",minHeight:"100vh"},f={mobile:"mini",tablet:"tiny",computer:"small"};t.a=Object(s.hot)(e)(Object(u.b)(function(e){return{deviceScreenSizeType:e.device.screen_size_type}})(function(e){var t=e.deviceScreenSizeType;return c.a.createElement(r.a,{basic:!0,style:y},e.heading?c.a.createElement(e.heading,null):null,c.a.createElement(i.a,{id:"main",textAlign:"justified",style:d[t]},e.breadcrumb?c.a.createElement(e.breadcrumb,{size:f[t]}):null,e.children),e.footer?c.a.createElement(e.footer,null):null)}))}).call(t,n(211)(e))},703:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var a=n(127),r=n.n(a),l=n(219),i=n.n(l),o=n(1),c=n.n(o),u=n(212),s=n(125),d=n(210),y=(n.n(d),n(570)),f=(n.n(y),n(213)),p=n.n(f),m=n(561);function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var K=p()({loader:function(){return n.e(1).then(n.bind(null,600))},loading:function(){return null}}),x=p()({loader:function(){return n.e(20).then(n.bind(null,704))},loading:function(){return null}}),E=p()({loader:function(){return n.e(2).then(n.bind(null,576))},loading:function(){return null}}),j=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=b(t).call(this,e))||"object"!==g(r)&&"function"!==typeof r?O(a):r).state={document:"legal/privacy",text:null},n.getMDContent=n.getMDContent.bind(O(O(n))),n}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){this.getMDContent()}},{key:"componentDidUpdate",value:function(e,t){this.props.language!==e.language&&this.getMDContent()}},{key:"getMDContent",value:function(){var e=this;fetch("/static/documents/".concat(this.props.language,"/").concat(this.state.document,"/README.md")).then(function(e){return e.text()}).then(function(t){e.setState({text:t})})}},{key:"render",value:function(){var e=this.props.t;return c.a.createElement(m.a,{breadcrumb:x,footer:E},c.a.createElement(y.Helmet,null,c.a.createElement("title",null,e("footer.privacyPolicy")," - ",e("footer.legal")," | ",e("projectName"))),null===this.state.text?c.a.createElement(r.a,{active:!0,inverted:!0},c.a.createElement(i.a,{size:"large"},e("loading"))):c.a.createElement(K,{md:this.state.text}))}}])&&h(n.prototype,a),l&&h(n,l),t}();t.default=Object(d.hot)(e)(Object(u.b)(function(e){return{language:e.i18next.language,languages:e.i18next.whitelist,pathname:e.router.location.pathname}})(Object(s.c)("main")(j)))}.call(t,n(211)(e))}});
//# sourceMappingURL=28.63b9274d.chunk.js.map