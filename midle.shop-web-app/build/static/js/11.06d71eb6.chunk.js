webpackJsonp([11],{554:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u.default}});var u=a(n(126))},556:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(7)),r=a(n(8)),l=(a(n(2)),a(n(1))),i=n(5);function d(e){var t=e.children,n=e.className,a=e.content,o=e.fluid,f=e.text,c=e.textAlign,s=(0,r.default)("ui",(0,i.useKeyOnly)(f,"text"),(0,i.useKeyOnly)(o,"fluid"),(0,i.useTextAlignProp)(c),"container",n),p=(0,i.getUnhandledProps)(d,e),m=(0,i.getElementType)(d,e);return l.default.createElement(m,(0,u.default)({},p,{className:s}),i.childrenUtils.isNil(t)?a:t)}d.handledProps=["as","children","className","content","fluid","text","textAlign"],d.propTypes={};var o=d;t.default=o},568:function(e,t){e.exports=function(e,t,n,a){var u=-1,r=null==e?0:e.length;for(a&&r&&(n=e[++u]);++u<r;)n=t(n,e[u],u,e);return n}},569:function(e,t,n){var a=n(572),u=n(51),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(r,a).replace(l,"")}},572:function(e,t,n){var a=n(573)({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"});e.exports=a},573:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},601:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(7)),r=a(n(11)),l=a(n(13)),i=a(n(21)),d=a(n(20)),o=a(n(22)),f=a(n(28)),c=a(n(12)),s=a(n(75)),p=a(n(32)),m=(a(n(124)),a(n(8))),h=(a(n(2)),a(n(1))),v=n(5),x=a(n(612)),y=a(n(613)),b=a(n(622)),g=function(e){function t(){var e,n,a;(0,r.default)(this,t);for(var u=arguments.length,l=new Array(u),o=0;o<u;o++)l[o]=arguments[o];return(0,i.default)(a,(n=a=(0,i.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(l))),(0,c.default)((0,f.default)((0,f.default)(a)),"handleItemOverrides",function(e){return{onClick:function(t,n){var u=n.index;a.trySetState({activeIndex:u}),(0,p.default)(e,"onClick",t,n),(0,p.default)(a.props,"onItemClick",t,n)}}}),n))}return(0,o.default)(t,e),(0,l.default)(t,[{key:"renderItems",value:function(){var e=this,t=this.props.items,n=this.state.activeIndex;return(0,s.default)(t,function(t,a){return y.default.create(t,{defaultProps:{active:parseInt(n,10)===a,index:a},overrideProps:e.handleItemOverrides})})}},{key:"render",value:function(){var e=this.props,n=e.attached,a=e.borderless,r=e.children,l=e.className,i=e.color,d=e.compact,o=e.fixed,f=e.floated,c=e.fluid,s=e.icon,p=e.inverted,x=e.pagination,y=e.pointing,b=e.secondary,g=e.size,O=e.stackable,E=e.tabular,A=e.text,K=e.vertical,N=e.widths,I=(0,m.default)("ui",i,g,(0,v.useKeyOnly)(a,"borderless"),(0,v.useKeyOnly)(d,"compact"),(0,v.useKeyOnly)(c,"fluid"),(0,v.useKeyOnly)(p,"inverted"),(0,v.useKeyOnly)(x,"pagination"),(0,v.useKeyOnly)(y,"pointing"),(0,v.useKeyOnly)(b,"secondary"),(0,v.useKeyOnly)(O,"stackable"),(0,v.useKeyOnly)(A,"text"),(0,v.useKeyOnly)(K,"vertical"),(0,v.useKeyOrValueAndKey)(n,"attached"),(0,v.useKeyOrValueAndKey)(f,"floated"),(0,v.useKeyOrValueAndKey)(s,"icon"),(0,v.useKeyOrValueAndKey)(E,"tabular"),(0,v.useValueAndKey)(o,"fixed"),(0,v.useWidthProp)(N,"item"),l,"menu"),k=(0,v.getUnhandledProps)(t,this.props),P=(0,v.getElementType)(t,this.props);return h.default.createElement(P,(0,u.default)({},k,{className:I}),v.childrenUtils.isNil(r)?this.renderItems():r)}}]),t}(v.AutoControlledComponent);(0,c.default)(g,"autoControlledProps",["activeIndex"]),(0,c.default)(g,"Header",x.default),(0,c.default)(g,"Item",y.default),(0,c.default)(g,"Menu",b.default),(0,c.default)(g,"handledProps",["activeIndex","as","attached","borderless","children","className","color","compact","defaultActiveIndex","fixed","floated","fluid","icon","inverted","items","onItemClick","pagination","pointing","secondary","size","stackable","tabular","text","vertical","widths"]),g.propTypes={},g.create=(0,v.createShorthandFactory)(g,function(e){return{items:e}});var O=g;t.default=O},606:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r});var a=n(52),u=function(){return{type:a.f}},r=function(){return{type:a.h}}},612:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(7)),r=a(n(8)),l=(a(n(2)),a(n(1))),i=n(5);function d(e){var t=e.children,n=e.className,a=e.content,o=(0,r.default)("header",n),f=(0,i.getUnhandledProps)(d,e),c=(0,i.getElementType)(d,e);return l.default.createElement(c,(0,u.default)({},f,{className:o}),i.childrenUtils.isNil(t)?a:t)}d.handledProps=["as","children","className","content"],d.propTypes={};var o=d;t.default=o},613:function(e,t,n){"use strict";var a=n(23),u=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(7)),l=u(n(11)),i=u(n(13)),d=u(n(21)),o=u(n(20)),f=u(n(22)),c=u(n(28)),s=u(n(12)),p=u(n(614)),m=u(n(32)),h=u(n(8)),v=(u(n(2)),a(n(1))),x=n(5),y=u(n(554)),b=function(e){function t(){var e,n,a;(0,l.default)(this,t);for(var u=arguments.length,r=new Array(u),i=0;i<u;i++)r[i]=arguments[i];return(0,d.default)(a,(n=a=(0,d.default)(this,(e=(0,o.default)(t)).call.apply(e,[this].concat(r))),(0,s.default)((0,c.default)((0,c.default)(a)),"handleClick",function(e){a.props.disabled||(0,m.default)(a.props,"onClick",e,a.props)}),n))}return(0,f.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,n=e.active,a=e.children,u=e.className,l=e.color,i=e.content,d=e.disabled,o=e.fitted,f=e.header,c=e.icon,s=e.link,m=e.name,b=e.onClick,g=e.position,O=(0,h.default)(l,g,(0,x.useKeyOnly)(n,"active"),(0,x.useKeyOnly)(d,"disabled"),(0,x.useKeyOnly)(!0===c||c&&!(m||i),"icon"),(0,x.useKeyOnly)(f,"header"),(0,x.useKeyOnly)(s,"link"),(0,x.useKeyOrValueAndKey)(o,"fitted"),"item",u),E=(0,x.getElementType)(t,this.props,function(){if(b)return"a"}),A=(0,x.getUnhandledProps)(t,this.props);return x.childrenUtils.isNil(a)?v.default.createElement(E,(0,r.default)({},A,{className:O,onClick:this.handleClick}),y.default.create(c,{autoGenerateKey:!1}),x.childrenUtils.isNil(i)?(0,p.default)(m):i):v.default.createElement(E,(0,r.default)({},A,{className:O,onClick:this.handleClick}),a)}}]),t}(v.Component);t.default=b,(0,s.default)(b,"handledProps",["active","as","children","className","color","content","disabled","fitted","header","icon","index","link","name","onClick","position"]),b.propTypes={},b.create=(0,x.createShorthandFactory)(b,function(e){return{content:e,name:e}})},614:function(e,t,n){var a=n(615),u=n(620),r=a(function(e,t,n){return e+(n?" ":"")+u(t)});e.exports=r},615:function(e,t,n){var a=n(568),u=n(569),r=n(616),l=RegExp("['\u2019]","g");e.exports=function(e){return function(t){return a(r(u(t).replace(l,"")),e,"")}}},616:function(e,t,n){var a=n(617),u=n(618),r=n(51),l=n(619);e.exports=function(e,t,n){return e=r(e),void 0===(t=n?void 0:t)?u(e)?l(e):a(e):e.match(t)||[]}},617:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},618:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},619:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+n+"]",u="\\d+",r="[\\u2700-\\u27bf]",l="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+n+u+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",f="[A-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:"+l+"|"+i+")",s="(?:"+f+"|"+i+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,o].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),h="(?:"+[r,d,o].join("|")+")"+m,v=RegExp([f+"?"+l+"+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?="+[a,f,"$"].join("|")+")",s+"+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?="+[a,f+c,"$"].join("|")+")",f+"?"+c+"+(?:['\u2019](?:d|ll|m|re|s|t|ve))?",f+"+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",u,h].join("|"),"g");e.exports=function(e){return e.match(v)||[]}},620:function(e,t,n){var a=n(621)("toUpperCase");e.exports=a},621:function(e,t,n){var a=n(229),u=n(217),r=n(224),l=n(51);e.exports=function(e){return function(t){t=l(t);var n=u(t)?r(t):void 0,i=n?n[0]:t.charAt(0),d=n?a(n,1).join(""):t.slice(1);return i[e]()+d}}},622:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(7)),r=a(n(8)),l=(a(n(2)),a(n(1))),i=n(5);function d(e){var t=e.children,n=e.className,a=e.content,o=e.position,f=(0,r.default)(o,"menu",n),c=(0,i.getUnhandledProps)(d,e),s=(0,i.getElementType)(d,e);return l.default.createElement(s,(0,u.default)({},c,{className:f}),i.childrenUtils.isNil(t)?a:t)}d.handledProps=["as","children","className","content","position"],d.propTypes={};var o=d;t.default=o},633:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var a=n(601),u=n.n(a),r=n(126),l=n.n(r),i=n(556),d=n.n(i),o=n(1),f=n.n(o),c=n(125),s=n(212),p=n(210),m=(n.n(p),n(560)),h=n(558),v=n.n(h),x=n(606);t.default=Object(p.hot)(e)(Object(s.b)(function(e){return{languages:e.i18next.whitelist,pathname:e.router.location.pathname,theme:e.config.theme}},function(e){return{handleSidebarToggle:function(){e(Object(x.b)())}}})(Object(c.c)("main")(function(e){var t=e.t,n=e.languages,a=e.pathname,r=new v.a({languages:n,pathname:a});return f.a.createElement(u.a,{as:"nav",id:"menu",size:"large",fixed:e.fixed?"top":null,inverted:"night"===e.theme,style:{margin:e.fixed?void 0:"1em 0em 0em 0em"}},f.a.createElement(d.a,null,f.a.createElement(u.a.Item,{as:m.b,to:r.url("/whitepaper")},f.a.createElement(l.a,{name:"file alternate"}),t("main:menu.whitepaper")),f.a.createElement(u.a.Item,{as:m.b,to:r.url("/roadmap")},f.a.createElement(l.a,{name:"map"}),t("main:menu.roadmap")),f.a.createElement(u.a.Item,{as:m.b,to:r.url("/faq")},f.a.createElement(l.a,{name:"question"}),t("main:menu.faq"))))})))}.call(t,n(211)(e))}});
//# sourceMappingURL=11.06d71eb6.chunk.js.map