(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){e.exports=n(322)},320:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),c=n.n(o),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=n(119),u=n(59),m=n(28),p=n(40),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_COLUMN_COUNT":return t.payload.columnCount;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:13,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FONT_SIZE":return t.payload.fontSize;default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRANSPOSE":return t.payload.transposeAmount;default:return e}},f=Object(p.b)({transposeAmount:v,columnCount:d,fontSize:h}),y=Object(p.c)(f),E=n(23),b=n.n(E),g=n(32),k=n(18),C=n(19),w=n(21),O=n(20),j=n(22),S=n(27),T=n.n(S),x=n(122),N=n.n(x),I=n(123),L=n.n(I),M=n(124),A=n.n(M),F=n(16),P=n(125),_=n(126),q=function(e){var t=e.youTubeId;return r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:t,className:"embed-responsive-item",src:"https://www.youtube.com/embed/".concat(t),allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},z=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(w.a)(this,Object(O.a)(t).call(this,e))).state={visible:!1},n.handleToggle=n.handleToggle.bind(Object(F.a)(Object(F.a)(n))),n}return Object(j.a)(t,e),Object(C.a)(t,[{key:"handleToggle",value:function(){this.setState(function(e){return{visible:!e.visible}})}},{key:"render",value:function(){return this.props.youTubeId?r.a.createElement("div",null,r.a.createElement(P.a,{icon:_.a,size:"2x",onClick:this.handleToggle}),this.state.visible?r.a.createElement(q,{youTubeId:this.props.youTubeId}):""):r.a.createElement("div",null)}}]),t}(r.a.Component),U=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(w.a)(this,Object(O.a)(t).call(this,e))).md=(new L.a).use(A.a),n}return Object(j.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){this.md.setTranspose(this.props.transposeAmount),this.md.setColumnCount(this.props.columnCount),this.md.setFontSize(this.props.fontSize),this.md.setMaxWidth(this.props.width);var e=this.md.render(this.props.source);return r.a.createElement("div",null,r.a.createElement(z,{youTubeId:this.md.meta.youTubeId}),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}}))}}]),t}(r.a.Component);var D=Object(m.b)(function(e){return{transposeAmount:e.transposeAmount,columnCount:e.columnCount,fontSize:e.fontSize}})(U),R=function(e){var t=e.source;return r.a.createElement(N.a,null,r.a.createElement(D,{source:t}))},W=n(127),G=n.n(W),H=n(65),J=n.n(H),B=n(29),Z=n.n(B),Q=0,$=1,K=13,V=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(w.a)(this,Object(O.a)(t).call(this,e))).handleTransposeClick=n.handleTransposeClick.bind(Object(F.a)(Object(F.a)(n))),n.handleColumnClick=n.handleColumnClick.bind(Object(F.a)(Object(F.a)(n))),n.handleFontClick=n.handleFontClick.bind(Object(F.a)(Object(F.a)(n))),n.increase="+1",n.decrease="-1",n}return Object(j.a)(t,e),Object(C.a)(t,[{key:"handleTransposeClick",value:function(e){this.props.transpose(e.target.textContent===this.increase)}},{key:"handleColumnClick",value:function(e){this.props.updateColumnCount(e.target.textContent===this.increase)}},{key:"handleFontClick",value:function(e){this.props.updateFontSize(e.target.textContent===this.increase)}},{key:"render",value:function(){return r.a.createElement(G.a,{className:"border justify-content-center bg-dark"},r.a.createElement("span",{className:"padding bg-dark text-light my-auto"},"Transpose"),r.a.createElement(J.a,null,r.a.createElement(Z.a,{variant:"dark",onClick:this.handleTransposeClick},this.decrease),r.a.createElement(Z.a,{variant:"dark",onClick:this.handleTransposeClick},this.increase)),r.a.createElement("span",{className:"padding bg-dark text-light my-auto"},"Columns"),r.a.createElement(J.a,null,r.a.createElement(Z.a,{variant:"dark",onClick:this.handleColumnClick},this.decrease),r.a.createElement(Z.a,{variant:"dark",onClick:this.handleColumnClick},this.increase)),r.a.createElement("span",{className:"padding bg-dark text-light my-auto"},"Font Size"),r.a.createElement(J.a,null,r.a.createElement(Z.a,{variant:"dark",onClick:this.handleFontClick},this.decrease),r.a.createElement(Z.a,{variant:"dark",onClick:this.handleFontClick},this.increase)))}}]),t}(r.a.Component),X=Object(m.b)(void 0,{transpose:function(e){return{type:"TRANSPOSE",payload:{transposeAmount:e?++Q:--Q}}},updateColumnCount:function(e){return{type:"UPDATE_COLUMN_COUNT",payload:{columnCount:e?++$:--$}}},updateFontSize:function(e){return{type:"UPDATE_FONT_SIZE",payload:{fontSize:e?++K:--K}}}})(V),Y="".concat("music-markdown",":repositories"),ee="".concat("music-markdown",":github_token"),te="https://api.github.com",ne="/repo";function ae(e,t,n){return re.apply(this,arguments)}function re(){return(re=Object(g.a)(b.a.mark(function e(t,n,a){var r,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return void 0!==a&&0!==a.length||(a=""),r=ce("/repos/".concat(t,"/").concat(n,"/contents").concat(a)),e.next=4,fetch(r);case 4:return o=e.sent,e.abrupt("return",o.json());case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function oe(){var e=localStorage.getItem(Y);return e?JSON.parse(e):[]}function ce(e){e=new URL(e,te);var t=localStorage.getItem(ee);return t&&e.searchParams.set("access_token",t),e}var ie=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(w.a)(this,Object(O.a)(t).call(this,e))).queryParams=T.a.parse(n.props.location.search),n.props.setTranspose(parseInt(n.queryParams.transpose,10)||0),n.props.setColumnCount(parseInt(n.queryParams.columnCount,10)||1),n.props.setFontSize(parseInt(n.queryParams.fontSize,10)||13),n.state={isLoaded:!1,markdown:null,repos:n.queryParams.repos,path:n.queryParams.path},n}return Object(j.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark(function e(){var t,n,a,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.queryParams.owner,n=this.queryParams.repo,a=this.queryParams.path,e.next=5,ae(t,n,a);case 5:r=e.sent,this.setState({isLoaded:!0,markdown:atob(r.content)});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.markdown;return t?r.a.createElement("div",{className:"Markdown"},r.a.createElement(X,null),r.a.createElement(R,{source:n})):r.a.createElement("div",{className:"Markdown"},"Loading...")}}]),t}(r.a.Component),se=Object(m.b)(void 0,{setTranspose:function(e){return{type:"TRANSPOSE",payload:{transposeAmount:Q=e}}},setColumnCount:function(e){return{type:"UPDATE_COLUMN_COUNT",payload:{columnCount:$=e}}},setFontSize:function(e){return{type:"UPDATE_FONT_SIZE",payload:{fontSize:K=e}}}})(ie),le=n(51),ue=n.n(le),me=n(66),pe=n.n(me),de=n(128),he=n.n(de),ve=n(115),fe=function(){var e=[],t=oe();return t.length>0&&t.forEach(function(t){var n="".concat(t.owner,"/").concat(t.repo).concat(t.path),a={owner:t.owner,repo:t.repo,path:t.path},o="/repo?".concat(T.a.stringify(a));e.push(r.a.createElement(ve.a,{to:o,key:"dropdown-item-".concat(n),className:"dropdown-item"},n))}),r.a.createElement(pe.a,{title:"Music Repositories"},r.a.createElement(pe.a.Item,null,r.a.createElement("b",null,"Edit Repositories")),r.a.createElement(pe.a.Divider,null),e)},ye=function(){return localStorage.getItem(Y)||function(e,t,n){var a={owner:e,repo:t,path:n},r=oe(),o=r.length>0?r:[];o.push(a),localStorage.setItem(Y,JSON.stringify(o))}("music-markdown","almost-in-time","/"),r.a.createElement(ue.a,{bg:"dark",expand:"lg",variant:"dark",key:"top-navbar"},r.a.createElement(ue.a.Brand,{href:"/"},"Music Markdown"),r.a.createElement(ue.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(ue.a.Collapse,null,r.a.createElement(he.a,{className:"mr-auto"},r.a.createElement(fe,null),r.a.createElement(ve.a,{to:"/sandbox",className:"nav-link",activeClassName:"active"},"Sandbox"))))},Ee=n(130),be=n.n(Ee),ge="app-container";var ke=function(e){return r.a.createElement(be.a,{key:ge},e.children)},Ce=n(84),we=n(52),Oe=n.n(we),je=n(132),Se=n.n(je),Te=n(64),xe=n.n(Te),Ne=n(43);var Ie=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(w.a)(this,Object(O.a)(t).call(this,e))).state={repository:{isLoaded:!1,contents:[]}},n}return Object(j.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark(function e(){var t,n,a,r,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=T.a.parse(this.props.location.search),n=t.owner,a=t.repo,r=t.path,e.next=6,ae(n,a,r);case 6:o=e.sent,this.setState({repository:{isLoaded:!0,queryStringMap:t,contents:o}});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(){var e=Object(g.a)(b.a.mark(function e(t){var n,a,r,o,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=T.a.parse(t.location.search),a=this.state.repository.queryStringMap.owner,r=this.state.repository.queryStringMap.repo,o=n.path,n===this.state.repository.queryStringMap){e.next=9;break}return e.next=7,ae(a,r,o);case 7:c=e.sent,this.setState({repository:{isLoaded:!0,queryStringMap:n,contents:c}});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.repository.isLoaded){var e=[],t=this.state.repository.contents,n=this.state.repository.queryStringMap;t.forEach(function(t){var a=Object(Ce.a)({},n),o="list-group-item-".concat(t.name);a.path="/".concat(t.path);var c=T.a.stringify(a);e.push("dir"===t.type?r.a.createElement(Ne.LinkContainer,{to:"".concat(ne,"?").concat(c),key:o},r.a.createElement(xe.a,{action:!0},r.a.createElement("i",null,"/".concat(t.name)))):"file"===t.type?r.a.createElement(Ne.LinkContainer,{to:"".concat("/render","?").concat(c),key:o},r.a.createElement(xe.a,{action:!0},t.name)):r.a.createElement("div",null,"File type ",t.type," not supported"))});var a=function(e){var t=[],n="".concat(ne),a="breadcrumb-item-",o=e.path.split("/");""===o[1]&&o.shift();for(var c=0;c<o.length;c++){var i=o[c],s=Object(Ce.a)({},e);s.path="".concat("/",i);var l="".concat(n,"?").concat(T.a.stringify(s));switch(c){case 0:t.push(r.a.createElement(Ne.LinkContainer,{to:l,key:"".concat(a).concat(c)},r.a.createElement(Oe.a.Item,null,"home")));break;case o.length-1:t.push(r.a.createElement(Ne.LinkContainer,{to:l,key:"".concat(a).concat(c)},r.a.createElement(Oe.a.Item,{active:!0},i)));break;default:t.push(r.a.createElement(Ne.LinkContainer,{to:l,key:"".concat(a).concat(c)},r.a.createElement(Oe.a.Item,null,i)))}}return r.a.createElement(Oe.a,null,t)}(this.state.repository.queryStringMap);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Repository Contents"),a,r.a.createElement(Se.a,null,e))}return r.a.createElement("div",{className:"Markdown"},"Loading...")}}]),t}(r.a.Component),Le=n(60),Me=n(61),Ae=function(e){function t(e){var n;Object(k.a)(this,t);return(n=Object(w.a)(this,Object(O.a)(t).call(this,e))).state={value:"```chords\nc1:                    Am     G  F          G      Esus4  E\nv1: All the leaves are brown        and the sky is gray\n\nc1: F               C     E  Am       F        Esus4  E\nv1: I've been for a walk         on a winter's day\n\nc1:                 Am    G  F       G      Esus4  E\nv1: I'd be safe and warm        if I was in L.A.\n\nc1:            Am        G  F     G               Esus4  E\nv1: California dreamin'        on such a winter's day\n```"},n.handleChange=n.handleChange.bind(Object(F.a)(Object(F.a)(n))),n}return Object(j.a)(t,e),Object(C.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e={minHeight:"500px",width:"50%",marginRight:"20px",fontFamily:"monospace",whiteSpace:"pre"};return r.a.createElement("div",{style:{display:"flex",width:"100%"}},r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,style:e}),r.a.createElement("div",{style:e},r.a.createElement(R,{source:this.state.value})))}}]),t}(r.a.Component),Fe=function(){return Array.from(Me.guitarChordLibrary.keys()).map(function(e,t){return r.a.createElement("div",{key:t,align:"center",style:{display:"inline-block"}},Me.guitarChordLibrary.get(e).map(function(e,t){return r.a.createElement("span",{key:t,dangerouslySetInnerHTML:{__html:Object(Le.renderChordDiagram)(e)}})}),r.a.createElement("h5",null,e))})},Pe=function(){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement("h1",null,"Music Markdown Sandbox"),r.a.createElement("p",null,"This page exercises various subcomponents of music-markdown and markdown-it-music."),r.a.createElement("h2",null,"Markdown Editor"),r.a.createElement(Ae,null),r.a.createElement("h2",null,"Chord Diagram Renderer"),r.a.createElement("p",null,"This section exercises the Chord Diagram Renderer."),r.a.createElement("h3",null,"Esus4 (200x200)"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:Object(Le.renderChordDiagram)("o2 m1 m2 n3,2 n4,4 b5,6,5",200,200)}}),r.a.createElement("h2",null,"Entire Chord Library"),r.a.createElement(Fe,null))},_e=(n(320),n(321),function(){return r.a.createElement(m.a,{key:"home-provider",store:y},r.a.createElement(l.a,{key:"home-router"},r.a.createElement("div",null,r.a.createElement(u.a,{component:ye}),r.a.createElement(u.a,{exact:!0,path:"/",component:qe}),r.a.createElement(u.a,{exact:!0,path:ne,component:Ie}),r.a.createElement(u.a,{path:"/sandbox",component:Pe}),r.a.createElement(u.a,{path:"/render",component:se}))))}),qe=function(){return r.a.createElement("h1",null,"Welcome to Music Markdown!")},ze=function(){return r.a.createElement(ke,{children:[_e()]})};c.a.render(r.a.createElement(ze,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");i?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):s(e)})}}()}},[[133,1,2]]]);
//# sourceMappingURL=main.ac30cb9d.chunk.js.map