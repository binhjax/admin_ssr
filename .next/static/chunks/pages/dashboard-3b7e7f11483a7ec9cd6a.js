_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"+QRC":function(e,t,n){"use strict";var r=n("E9nw"),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,l,o,c,s,u=!1;t||(t={}),n=t.debug||!1;try{if(l=r(),o=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=a[t.format]||a.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),o.selectNodeContents(s),c.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(o):c.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},"/thR":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("q1tI")),l=r(n("YCuv")),o=r(n("KQxl")),c=function(e,t){return i.createElement(o.default,Object.assign({},e,{ref:t,icon:l.default}))};c.displayName="EnterOutlined";var s=i.forwardRef(c);t.default=s},"0OKo":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n("TdNH"))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},"3PeW":function(e,t,n){"use strict";var r=n("284h"),a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("pVnL")),l=a(n("cDf5")),o=r(n("q1tI")),c=a(n("+04X")),s=a(n("m4nH")),u=a(n("g5iu")),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},f=function(e){var t=e.ellipsis,n=d(e,["ellipsis"]),r=o.useMemo((function(){return t&&"object"===(0,l.default)(t)?(0,c.default)(t,["expandable","rows"]):t}),[t]);return(0,s.default)("object"!==(0,l.default)(t)||!t||!("expandable"in t)&&!("rows"in t),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),o.createElement(u.default,(0,i.default)({},n,{ellipsis:r,component:"span"}))};t.default=f},"47MB":function(e,t,n){"use strict";n.r(t);var r=n("vJKn"),a=n.n(r),i=n("rg98"),l=(n("mN36"),n("N9UN")),o=n.n(l),c=n("H+61"),s=n("UlJF"),u=n("+Css"),d=n("7LId"),f=n("VIvw"),p=n("iHvq"),v=n("cpVT"),y=(n("NcKm"),n("lbd2"),n("q1tI")),h=n.n(y),E=n("2m8j"),m=n("wd/R"),g=n.n(m),b=n("XZXw"),O=(n("y/q7"),h.a.createElement);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var N=function(e){Object(d.a)(n,e);var t=C(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),Object(v.a)(Object(u.a)(e),"state",{currentTime:g()().format("HH:mm:ss")}),Object(v.a)(Object(u.a)(e),"getHeaderContent",(function(){var t=e.props.global.user.role_names,n=[];return t&&t.length>0&&n.push(O("span",{key:"role",style:{marginRight:20}},"\u6240\u5c5e\u89d2\u8272\uff1a".concat(t.join("/")))),n.length>0?n:null})),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState({currentTime:g()().format("HH:mm:ss")})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props.global.user,t=this.state.currentTime;return O(b.a,{title:"Hello\uff0c".concat(e.real_name,"\uff0cI wish you happy everyday\uff01"),breadcrumbList:[{title:"Homepage"}],content:this.getHeaderContent(),action:O("span",null,"Current Time\uff1a",t)},O(o.a,null))}}],[{key:"getInitialProps",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pathname,r=t.query,i=t.isServer,l=t.store,e.next=3,t.store.dispatch({type:"global/init"});case 3:return e.abrupt("return",{pathname:n,query:r,isServer:i,dvaStore:l});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(y.PureComponent);t.default=Object(E.a)((function(e){return{global:e.global}}))(N)},B1zD:function(e,t,n){"use strict";var r=n("284h"),a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("lSNA")),l=a(n("J4zp")),o=r(n("q1tI")),c=a(n("TSYQ")),s=a(n("Fcj4")),u=a(n("FMes")),d=a(n("27j4")),f=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,a=e.style,f=e.direction,p=e.maxLength,v=e.autoSize,y=void 0===v||v,h=e.value,E=e.onSave,m=e.onCancel,g=o.useRef(),b=o.useRef(!1),O=o.useRef(),C=o.useState(h),N=(0,l.default)(C,2),x=N[0],S=N[1];o.useEffect((function(){S(h)}),[h]),o.useEffect((function(){if(g.current&&g.current.resizableTextArea){var e=g.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var _=function(){E(x.trim())},T=(0,c.default)(t,"".concat(t,"-edit-content"),(0,i.default)({},"".concat(t,"-rtl"),"rtl"===f),r);return o.createElement("div",{className:T,style:a},o.createElement(d.default,{ref:g,maxLength:p,value:x,onChange:function(e){var t=e.target;S(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;b.current||(O.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,a=e.metaKey,i=e.shiftKey;O.current!==t||b.current||n||r||a||i||(t===s.default.ENTER?_():t===s.default.ESC&&m())},onCompositionStart:function(){b.current=!0},onCompositionEnd:function(){b.current=!1},onBlur:function(){_()},"aria-label":n,autoSize:y}),o.createElement(u.default,{className:"".concat(t,"-edit-content-confirm")}))};t.default=f},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},EXKy:function(e,t,n){"use strict";var r=n("284h"),a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("pVnL")),l=r(n("q1tI")),o=a(n("m4nH")),c=a(n("g5iu")),s=n("KEtS"),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},d=(0,s.tupleNum)(1,2,3,4,5),f=function(e){var t,n=e.level,r=void 0===n?1:n,a=u(e,["level"]);return-1!==d.indexOf(r)?t="h".concat(r):((0,o.default)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),t="h1"),l.createElement(c.default,(0,i.default)({},a,{component:t}))};t.default=f},FMes:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n("/thR"))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},Fcj4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},a=r;t.default=a},"J+05":function(e,t,n){"use strict";var r=n("284h"),a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("pVnL")),l=r(n("q1tI")),o=a(n("g5iu")),c=function(e){return l.createElement(o.default,(0,i.default)({},e,{component:"div"}))};t.default=c},MUZu:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("q1tI")),l=r(n("ZxNd")),o=r(n("KQxl")),c=function(e,t){return i.createElement(o.default,Object.assign({},e,{ref:t,icon:l.default}))};c.displayName="EditOutlined";var s=i.forwardRef(c);t.default=s},NcKm:function(e,t,n){"use strict";n("VEUW"),n("8nl2"),n("93XW"),n("cUip")},"Oox/":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l=n("i8i4"),o=a(n("q1tI")),c=r(n("0r0h")),s={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function u(e){if(!e)return 0;var t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0}t.default=function(e,t,n,r,a){i||((i=document.createElement("div")).setAttribute("aria-hidden","true"),document.body.appendChild(i));var d,f=t.rows,p=t.suffix,v=void 0===p?"":p,y=window.getComputedStyle(e),h=(d=y,Array.prototype.slice.apply(d).map((function(e){return"".concat(e,": ").concat(d.getPropertyValue(e),";")})).join("")),E=u(y.lineHeight),m=Math.round(E*(f+1)+u(y.paddingTop)+u(y.paddingBottom));i.setAttribute("style",h),i.style.position="fixed",i.style.left="0",i.style.height="auto",i.style.minHeight="auto",i.style.maxHeight="auto",i.style.top="-999999px",i.style.zIndex="-1000",i.style.textOverflow="clip",i.style.whiteSpace="normal",i.style.webkitLineClamp="none";var g=function(e){var t=[];return e.forEach((function(e){var n=t[t.length-1];"string"===typeof e&&"string"===typeof n?t[t.length-1]+=e:t.push(e)})),t}((0,c.default)(n));function b(){return i.offsetHeight<m}if((0,l.render)(o.createElement("div",{style:s},o.createElement("span",{style:s},g,v),o.createElement("span",{style:s},r)),i),b())return(0,l.unmountComponentAtNode)(i),{content:n,text:i.innerHTML,ellipsis:!1};var O=Array.prototype.slice.apply(i.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((function(e){return 8!==e.nodeType})),C=Array.prototype.slice.apply(i.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,l.unmountComponentAtNode)(i);var N=[];i.innerHTML="";var x=document.createElement("span");i.appendChild(x);var S=document.createTextNode(a+v);function _(e){x.insertBefore(e,S)}function T(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=Math.floor((n+r)/2),l=t.slice(0,i);if(e.textContent=l,n>=r-1)for(var o=r;o>=n;o-=1){var c=t.slice(0,o);if(e.textContent=c,b()||!c)return o===t.length?{finished:!1,reactNode:t}:{finished:!0,reactNode:c}}return b()?T(e,t,i,r,i):T(e,t,n,i,a)}function R(e,t){var n=e.nodeType;if(1===n)return _(e),b()?{finished:!1,reactNode:g[t]}:(x.removeChild(e),{finished:!0,reactNode:null});if(3===n){var r=e.textContent||"",a=document.createTextNode(r);return _(a),T(a,r)}return{finished:!1,reactNode:null}}return x.appendChild(S),C.forEach((function(e){i.appendChild(e)})),O.some((function(e,t){var n=R(e,t),r=n.finished,a=n.reactNode;return a&&N.push(a),r})),{content:N,text:i.innerHTML,ellipsis:!0}}},TUfB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n("47MB")}])},TdNH:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("q1tI")),l=r(n("m546")),o=r(n("KQxl")),c=function(e,t){return i.createElement(o.default,Object.assign({},e,{ref:t,icon:l.default}))};c.displayName="CopyOutlined";var s=i.forwardRef(c);t.default=s},YCuv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"}},ZxNd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"}},g5iu:function(e,t,n){"use strict";var r=n("284h"),a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("lSNA")),l=a(n("RIqP")),o=a(n("cDf5")),c=a(n("pVnL")),s=a(n("lwsE")),u=a(n("W8MJ")),d=a(n("7W2i")),f=a(n("LQ03")),p=r(n("q1tI")),v=a(n("TSYQ")),y=a(n("0r0h")),h=a(n("+QRC")),E=a(n("+04X")),m=a(n("s/wZ")),g=a(n("NAnI")),b=a(n("0OKo")),O=a(n("t23M")),C=n("vgIT"),N=a(n("GG9M")),x=a(n("m4nH")),S=a(n("gr4H")),_=a(n("i6dq")),T=n("cBho"),R=a(n("d1El")),M=a(n("zcfU")),w=a(n("B1zD")),P=a(n("Oox/")),I=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},U=(0,T.isStyleSupport)("webkitLineClamp"),j=(0,T.isStyleSupport)("textOverflow");var A=function(e){(0,d.default)(n,e);var t=(0,f.default)(n);function n(){var e;return(0,s.default)(this,n),(e=t.apply(this,arguments)).contentRef=p.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls;return(0,e.context.getPrefixCls)("typography",t)},e.onExpandClick=function(t){var n,r=e.getEllipsis().onExpand;e.setState({expanded:!0}),null===(n=r)||void 0===n||n(t)},e.onEditClick=function(){e.triggerEdit(!0)},e.onEditChange=function(t){var n=e.getEditable().onChange;null===n||void 0===n||n(t),e.triggerEdit(!1)},e.onEditCancel=function(){e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var n=e.props,r=n.children,a=n.copyable,i=(0,c.default)({},"object"===(0,o.default)(a)?a:null);void 0===i.text&&(i.text=String(r)),(0,h.default)(i.text||""),e.setState({copied:!0},(function(){i.onCopy&&i.onCopy(),e.copyId=window.setTimeout((function(){e.setState({copied:!1})}),3e3)}))},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var n=e.getEditable().onStart;t&&n&&n(),e.setState({edit:t},(function(){!t&&e.editIcon&&e.editIcon.focus()}))},e.resizeOnNextFrame=function(){_.default.cancel(e.rafId),e.rafId=(0,_.default)((function(){e.syncEllipsis()}))},e}return(0,u.default)(n,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(e){var t=this.props.children,n=this.getEllipsis(),r=this.getEllipsis(e);t===e.children&&n.rows===r.rows||this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),_.default.cancel(this.rafId)}},{key:"getEditable",value:function(e){var t=this.state.edit,n=(e||this.props).editable;return n?(0,c.default)({editing:t},"object"===(0,o.default)(n)?n:null):{editing:t}}},{key:"getEllipsis",value:function(e){var t=(e||this.props).ellipsis;return t?(0,c.default)({rows:1,expandable:!1},"object"===(0,o.default)(t)?t:null):{}}},{key:"canUseCSSEllipsis",value:function(){var e=this.state.clientRendered,t=this.props,n=t.editable,r=t.copyable,a=this.getEllipsis(),i=a.rows,l=a.expandable,o=a.suffix,c=a.onEllipsis,s=a.tooltip;return!o&&!s&&(!(n||r||l||!e||c)&&(1===i?j:U))}},{key:"syncEllipsis",value:function(){var e=this.state,t=e.ellipsisText,n=e.isEllipsis,r=e.expanded,a=this.getEllipsis(),i=a.rows,l=a.suffix,o=a.onEllipsis,c=this.props.children;if(i&&!(i<0)&&this.contentRef.current&&!r&&!this.canUseCSSEllipsis()){(0,x.default)((0,y.default)(c).every((function(e){return"string"===typeof e})),"Typography","`ellipsis` should use string as children only.");var s=(0,P.default)(this.contentRef.current,{rows:i,suffix:l},c,this.renderOperations(!0),"..."),u=s.content,d=s.text,f=s.ellipsis;t===d&&n===f||(this.setState({ellipsisText:d,ellipsisContent:u,isEllipsis:f}),n!==f&&o&&o(f))}}},{key:"renderExpand",value:function(e){var t,n=this.getEllipsis(),r=n.expandable,a=n.symbol,i=this.state,l=i.expanded,o=i.isEllipsis;return r&&(e||!l&&o)?(t=a||this.expandStr,p.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},t)):null}},{key:"renderEdit",value:function(){var e=this.props.editable;if(e){var t=e.icon,n=e.tooltip,r=(0,y.default)(n)[0]||this.editStr,a="string"===typeof r?r:"";return p.createElement(R.default,{key:"edit",title:!1===n?"":r},p.createElement(S.default,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":a},t||p.createElement(m.default,{role:"button"})))}}},{key:"renderCopy",value:function(){var e=this.state.copied,t=this.props.copyable;if(t){var n=this.getPrefixCls(),r=t.tooltips,a=(0,y.default)(r);0===a.length&&(a=[this.copyStr,this.copiedStr]);var i=e?a[1]:a[0],l="string"===typeof i?i:"",o=(0,y.default)(t.icon);return p.createElement(R.default,{key:"copy",title:!1===r?"":i},p.createElement(S.default,{className:(0,v.default)("".concat(n,"-copy"),e&&"".concat(n,"-copy-success")),onClick:this.onCopyClick,"aria-label":l},e?o[1]||p.createElement(g.default,null):o[0]||p.createElement(b.default,null)))}}},{key:"renderEditInput",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.context.direction,i=this.getEditable(),l=i.maxLength,o=i.autoSize;return p.createElement(w.default,{value:"string"===typeof t?t:"",onSave:this.onEditChange,onCancel:this.onEditCancel,prefixCls:this.getPrefixCls(),className:n,style:r,direction:a,maxLength:l,autoSize:o})}},{key:"renderOperations",value:function(e){return[this.renderExpand(e),this.renderEdit(),this.renderCopy()].filter((function(e){return e}))}},{key:"renderContent",value:function(){var e=this,t=this.state,n=t.ellipsisContent,r=t.isEllipsis,a=t.expanded,o=this.props,s=o.component,u=o.children,d=o.className,f=o.type,y=o.disabled,h=o.style,m=I(o,["component","children","className","type","disabled","style"]),g=this.context.direction,b=this.getEllipsis(),x=b.rows,S=b.suffix,_=b.tooltip,T=this.getPrefixCls(),w=(0,E.default)(m,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat((0,l.default)(C.configConsumerProps))),P=this.canUseCSSEllipsis(),U=1===x&&P,j=x&&x>1&&P,A=u;if(x&&r&&!a&&!P){var k=m.title,H=k||"";k||"string"!==typeof u&&"number"!==typeof u||(H=String(u)),H=null===H||void 0===H?void 0:H.slice(String(n||"").length),A=p.createElement(p.Fragment,null,n,p.createElement("span",{title:H,"aria-hidden":"true"},"..."),S),_&&(A=p.createElement(R.default,{title:!0===_?u:_},p.createElement("span",null,A)))}else A=p.createElement(p.Fragment,null,u,S);return A=function(e,t){var n=e.mark,r=e.code,a=e.underline,i=e.delete,l=e.strong,o=e.keyboard,c=t;function s(e,t){e&&(c=p.createElement(t,{},c))}return s(l,"strong"),s(a,"u"),s(i,"del"),s(r,"code"),s(n,"mark"),s(o,"kbd"),c}(this.props,A),p.createElement(N.default,{componentName:"Text"},(function(t){var n,r=t.edit,a=t.copy,l=t.copied,o=t.expand;return e.editStr=r,e.copyStr=a,e.copiedStr=l,e.expandStr=o,p.createElement(O.default,{onResize:e.resizeOnNextFrame,disabled:!x},p.createElement(M.default,(0,c.default)({className:(0,v.default)((n={},(0,i.default)(n,"".concat(T,"-").concat(f),f),(0,i.default)(n,"".concat(T,"-disabled"),y),(0,i.default)(n,"".concat(T,"-ellipsis"),x),(0,i.default)(n,"".concat(T,"-ellipsis-single-line"),U),(0,i.default)(n,"".concat(T,"-ellipsis-multiple-line"),j),n),d),style:(0,c.default)((0,c.default)({},h),{WebkitLineClamp:j?x:void 0}),component:s,ref:e.contentRef,direction:g},w),A,e.renderOperations()))}))}},{key:"render",value:function(){return this.getEditable().editing?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.children,n=e.editable;return(0,x.default)(!n||"string"===typeof t,"Typography","When `editable` is enabled, the `children` should use string."),{}}}]),n}(p.Component);A.contextType=C.ConfigContext,A.defaultProps={children:""};var k=A;t.default=k},gr4H:function(e,t,n){"use strict";var r=n("284h"),a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("pVnL")),l=r(n("q1tI")),o=a(n("Fcj4")),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},s={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},u=l.forwardRef((function(e,t){var n=e.style,r=e.noStyle,a=e.disabled,u=c(e,["style","noStyle","disabled"]),d={};return r||(d=(0,i.default)({},s)),a&&(d.pointerEvents="none"),d=(0,i.default)((0,i.default)({},d),n),l.createElement("div",(0,i.default)({role:"button",tabIndex:0,ref:t},u,{onKeyDown:function(e){e.keyCode===o.default.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===o.default.ENTER&&r&&r()},style:d}))}));t.default=u},lbd2:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("zcfU")),i=r(n("3PeW")),l=r(n("zqv2")),o=r(n("EXKy")),c=r(n("J+05")),s=a.default;s.Text=i.default,s.Link=l.default,s.Title=o.default,s.Paragraph=c.default;var u=s;t.default=u},m546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"}},"s/wZ":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n("MUZu"))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},zcfU:function(e,t,n){"use strict";var r=n("284h"),a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("pVnL")),l=a(n("lSNA")),o=r(n("q1tI")),c=a(n("TSYQ")),s=n("saJ+"),u=n("vgIT"),d=a(n("m4nH")),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},p=function(e,t){var n=e.prefixCls,r=e.component,a=void 0===r?"article":r,p=e.className,v=e["aria-label"],y=e.setContentRef,h=e.children,E=f(e,["prefixCls","component","className","aria-label","setContentRef","children"]),m=t;return y&&((0,d.default)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),m=(0,s.composeRef)(t,y)),o.createElement(u.ConfigConsumer,null,(function(e){var t=e.getPrefixCls,r=e.direction,s=a,u=t("typography",n),d=(0,c.default)(u,(0,l.default)({},"".concat(u,"-rtl"),"rtl"===r),p);return o.createElement(s,(0,i.default)({className:d,"aria-label":v,ref:m},E),h)}))},v=o.forwardRef(p);v.displayName="Typography";var y=v;t.default=y},zqv2:function(e,t,n){"use strict";var r=n("284h"),a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("pVnL")),l=a(n("cDf5")),o=r(n("q1tI")),c=a(n("m4nH")),s=a(n("g5iu")),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},d=function(e,t){var n=e.ellipsis,r=e.rel,a=u(e,["ellipsis","rel"]);(0,c.default)("object"!==(0,l.default)(n),"Typography.Link","`ellipsis` only supports boolean value.");var d=o.useRef(null);o.useImperativeHandle(t,(function(){var e;return null===(e=d.current)||void 0===e?void 0:e.contentRef.current}));var f=(0,i.default)((0,i.default)({},a),{rel:void 0===r&&"_blank"===a.target?"noopener noreferrer":r});return delete f.navigate,o.createElement(s.default,(0,i.default)({},f,{ref:d,ellipsis:!!n,component:"a"}))},f=o.forwardRef(d);t.default=f}},[["TUfB",0,2,6,1,3,4,5,8,7,10,11,14,13,15,16,17,9]]]);