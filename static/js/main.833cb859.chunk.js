(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(t,e,n){t.exports=n(265)},127:function(t,e){},263:function(t,e,n){},265:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),i=n(27),o=n.n(i),c=n(267),s=n(268),u=n(269),l=n(38),p=n(16),d=n(20),h=n(21),v=n(39),f=n(36),m=n(40),b=n(9),y=n(105),g=n(95),O=n.n(g),k=n(266),j=n(10);function E(){var t=Object(b.a)(["\n  display: inline-block;\n  border-radius: 5px;\n  padding: 0.7rem 0;\n  margin: 0.5rem 1rem;\n  width: 11rem;\n  background: #151515;\n  color: white;\n  text-decoration: none;\n  text-align: center;\n  font-weight: 500;\n"]);return E=function(){return t},t}var w=Object(j.a)(k.a)(E());function x(){var t=Object(b.a)(["\n  right: 0;\n  bottom: 5px;\n  position: absolute;\n"]);return x=function(){return t},t}var _=j.a.div(x()),U=function(t){var e=t.prevUrl,n=t.nextUrl;return a.a.createElement(_,null,a.a.createElement(w,{to:e},"PREV VIDEO"),a.a.createElement(w,{to:n},"NEXT VIDEO"))},I=n(98),D=n.n(I),C=n(99),N=n.n(C);n(173);function T(){var t=Object(b.a)(["\n  position: absolute;\n  width: 100%;\n  height: 99%;\n  z-index: 4;\n"]);return T=function(){return t},t}function z(){var t=Object(b.a)(["\n  font-size: 1em;\n"]);return z=function(){return t},t}function P(){var t=Object(b.a)(["\n  font-size: 1.3em;\n  color: #545454;\n  text-align: left;\n  max-width: 60%;\n  margin-top: 10px;\n"]);return P=function(){return t},t}function S(){var t=Object(b.a)(["\n  color: #151515;\n  font-size: 2.5em;\n  text-align: left;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);return S=function(){return t},t}function R(){var t=Object(b.a)(['\n  font-size: 1.5em;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  background-color:#e4e4e4;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 15px;\n  height: auto;\n  width: 100%;\n  border: 1px blue #e4e4e4;\n  z-index: 5;\n']);return R=function(){return t},t}var M=j.a.div(R()),A=j.a.h1(S()),V=j.a.p(P()),B=Object(j.a)(V)(z()),Y=j.a.div(T()),F=function(t){function e(){var t,n;Object(d.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=Object(v.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(i)))).state={showOverlay:!0,initialized:!1},n.playContent=function(){n.player.play()},n.renderPoster=function(t){return!1===n.state.showOverlay?null:a.a.createElement(Y,{onClick:n.playContent},a.a.createElement("div",{className:"play-button",onClick:n.playContent}),!n.state.initialized&&a.a.createElement("img",{src:t.backgroundImage,alt:"cover",width:"100%",height:"100%"}))},n}return Object(m.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.player=Object(y.a)(this.videoNode,this.props,function(){console.log("onPlayerReady",t)}),this.player.on("play",function(){return t.setState({showOverlay:!1,initialized:!0})}),this.player.on("pause",function(){return t.setState({showOverlay:!0})})}},{key:"componentWillUnmount",value:function(){this.player&&this.player.dispose()}},{key:"renderOverlay",value:function(t){return a.a.createElement(O.a,{transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:300},this.state.showOverlay&&a.a.createElement(M,{key:t.id},a.a.createElement(A,null,t.title," (",D()(0,t.playbackDuration),")"),a.a.createElement(B,null,N()(t.createdAt,"MMMM DD, YYYY")),a.a.createElement(V,null,t.description),a.a.createElement(U,{prevUrl:this.props.prevUrl,nextUrl:this.props.nextUrl})))}},{key:"render",value:function(){var t=this,e=this.props.content;return a.a.createElement("div",{"data-vjs-player":!0},a.a.createElement("video",{ref:function(e){return t.videoNode=e},className:"video-js"}),this.renderOverlay(e),this.renderPoster(e))}}]),e}(a.a.Component),J=n(23),W=n.n(J),q=n(37),H=n.n(q);function L(){var t=Object(b.a)(["\n  width: 99vw;\n  height: 99vh;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1vh;\n"]);return L=function(){return t},t}var X=j.a.div(L()),G=function(t){function e(){return Object(d.a)(this,e),Object(v.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(h.a)(e,[{key:"getContentToRender",value:function(){var t=this.props.match.params,e=this.props.contents;return 0===e.length?null:t.contentId?W()(e,function(e){return e.id===parseInt(t.contentId,10)}):e[0]}},{key:"genNextUrl",value:function(t){var e=this.props.contents,n=H()(e,function(e){return e.id===t.id});if(e[n+1]){var r=e[n+1];return"/content/".concat(r.slug,"/").concat(r.id)}var a=e[0];return"/content/".concat(a.slug,"/").concat(a.id)}},{key:"genPrevUrl",value:function(t){var e=this.props.contents,n=H()(e,function(e){return e.id===t.id});if(e[n-1]){var r=e[n-1];return"/content/".concat(r.slug,"/").concat(r.id)}var a=e[e.length-1];return"/content/".concat(a.slug,"/").concat(a.id)}},{key:"render",value:function(){var t=this.getContentToRender();if(!t)return null;var e=this.genNextUrl(t),n=this.genPrevUrl(t),r={autoplay:!1,controls:!0,fill:!0,responsive:!0,poster:t.backgroundImage,sources:[{src:t.playbackUrl,type:"video/mp4"}]};return a.a.createElement(X,{key:t.id},a.a.createElement(F,Object.assign({},r,{content:t,prevUrl:n,nextUrl:e})))}}]),e}(a.a.PureComponent),K=Object(p.c)(function(t){return{contents:t.contents.list}})(G),Q=n(22),Z=Object(Q.a)(),$=n(15),tt=n(100),et=n(101),nt=n(90),rt=n(107),at=n(59),it=n.n(at),ot=n(102),ct=n(104);function st(t){return W()(t.video_asset.mp4_renditions,function(t){return 1280===t.width&&720===t.height})}function ut(t,e){return W()(t,function(t){return t.is_primary&&t.slot_type===e})}var lt=function(){function t(e){Object(d.a)(this,t),this.id=0,this.title="",this.description="",this.createdAt="",this.slug="",this.backgroundImage="",this.playbackUrl="",this.playbackDuration=0,this.id=e.id,this.title=e.title,this.description=this.parseDescription(e.description),this.createdAt=new Date(e.created_date),this.slug=e.slug,this.backgroundImage=this.parseBackgroundImage(e.associated_assets);var n=this.parsePlaybackData(e.associated_video_assets),r=Object(ct.a)(n,2),a=r[0],i=r[1];this.playbackUrl=a,this.playbackDuration=i}return Object(h.a)(t,[{key:"parseDescription",value:function(t){return t&&""!==t.trim()?t:"No description."}},{key:"parseBackgroundImage",value:function(t){var e=W()(t,function(t){return t.is_primary&&"landscape_thumbnail_asset"===t.slot_type});return e?e.asset.url:""}},{key:"parsePlaybackData",value:function(t){var e=ut(t,"landscape_asset_video_asset");if(e){var n=st(e);if(n)return[n.url,e.video_asset.duration]}var r=ut(t,"square_asset_video_asset");if(r){var a=st(r);if(a)return[a.url,r.video_asset.duration]}return["",0]}}]),t}(),pt={list:[]};var dt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"RECEIVE_CONTENTS":return function(t,e){var n=e.map(function(t){return new lt(t)});return Object(rt.a)({},t,{list:n})}(t,e.payload);default:return t}};n(263);var ht,vt=(ht=Z,Object($.createStore)(function(t){return Object($.combineReducers)({router:Object(l.b)(t),contents:dt})}(ht),Object(tt.composeWithDevTools)(Object($.applyMiddleware)(Object(nt.a)(ht),et.a))));vt.dispatch(function(){var t=Object(ot.a)(it.a.mark(function t(e){var n,r;return it.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://tm-kitchen-api-alpha.herokuapp.com/videos?api_key=homework&auth_token=1&limit=10&workflow_status=ready");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e({type:"RECEIVE_CONTENTS",payload:r});case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());var ft=a.a.createElement(p.a,{store:vt},a.a.createElement(l.a,{history:Z},a.a.createElement(c.a,null,a.a.createElement(s.a,null,a.a.createElement(u.a,{exact:!0,path:"/",component:K}),a.a.createElement(u.a,{exact:!0,path:"/content/:contentTitle/:contentId",component:K})))));o.a.render(ft,document.getElementById("root"))}},[[110,2,1]]]);
//# sourceMappingURL=main.833cb859.chunk.js.map