(this.webpackJsonpswiss_client=this.webpackJsonpswiss_client||[]).push([[0],{14:function(e,t,n){e.exports={blurred_active:"Navbar_blurred_active__3SZGT",navigation_active:"Navbar_navigation_active__2LuLz",navigation:"Navbar_navigation__1RmLG",blurred:"Navbar_blurred__1gmjp",menu_item_active:"Navbar_menu_item_active__2u_yb",close_cross:"Navbar_close_cross__2gwFA",logo:"Navbar_logo__3KVy9"}},17:function(e,t,n){e.exports={wrapper:"Home_wrapper__2PCOr",blurred_active:"Home_blurred_active__2SUNF",navigation_active:"Home_navigation_active__1O0G5",navigation:"Home_navigation__2NreL",blurred:"Home_blurred__1wtMO",menu_item_active:"Home_menu_item_active__10ErB",close_cross:"Home_close_cross__3732b",logo:"Home_logo__2oBeg",landing_main:"Home_landing_main__2n7Vo",landing_main_text:"Home_landing_main_text__6QPzh",landing_main_buttons:"Home_landing_main_buttons__FMWTC",landing_main_buttons__learn_more:"Home_landing_main_buttons__learn_more__3eXaQ",landing_main_buttons__join_us:"Home_landing_main_buttons__join_us__2WTmD"}},31:function(e,t,n){e.exports={wrapper:"Apartments_wrapper__1RJYi",blurred_active:"Apartments_blurred_active__eMCxz",navigation_active:"Apartments_navigation_active__25ZFu",navigation:"Apartments_navigation__wTW9B",blurred:"Apartments_blurred__SziOE",menu_item_active:"Apartments_menu_item_active__31N9P",close_cross:"Apartments_close_cross__11rlT",logo:"Apartments_logo__3rWPy"}},37:function(e,t,n){e.exports={container:"WIP_container__3oe3i"}},43:function(e,t,n){},44:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(21),o=n.n(i),s=(n(43),n(7)),_=n(8),u=n(10),l=n(9),j=(n(44),n(3)),b=n(5),m=n(33),O=Object(m.a)(),p=n(16),d=n(27),v=n(19),h={menu_active:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENU_OPEN":return Object(v.a)(Object(v.a)({},e),{},{menu_active:!0});case"MENU_CLOSED":return Object(v.a)(Object(v.a)({},e),{},{menu_active:!1});default:return e}},f=function(e){return Object(p.c)({controller:g,router:Object(d.a)(e)})},x=n(32),N=n(35),M=n(36),C=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d)(Object(p.a)(M.a,N.logger,Object(x.a)(O))),E=Object(p.e)(f(O),{},C),A=n(15),y=n(17),k=n.n(y),S=n.p+"static/media/flower.6e855e09.svg",H=n.p+"static/media/zoki.a438a617.svg",w=function(e){return function(e){e({type:"MENU_OPEN"})}},T=function(e){return function(e){e({type:"MENU_CLOSED"})}},U=n(14),F=n.n(U),L=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this)).openMenu=function(){c.props.openMenu()},c.closeMenu=function(){c.props.closeMenu()},c.state={initial_state:""},c}return Object(_.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.props.state.controller.menu_active),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:this.props.state.controller.menu_active?F.a.blurred_active:F.a.blurred}),Object(c.jsxs)("div",{className:this.props.state.controller.menu_active?F.a.navigation_active:F.a.navigation,children:[Object(c.jsx)("h1",{children:this.state.current_page}),Object(c.jsx)(b.b,{to:"/",children:Object(c.jsxs)("li",{onClick:function(){return e.closeMenu()},className:"".concat("Home"==this.props.current_page?F.a.menu_item_active:""),children:[Object(c.jsx)("img",{src:S}),"HOME"]})}),Object(c.jsx)(b.b,{to:"/apartments",children:Object(c.jsxs)("li",{onClick:function(){return e.closeMenu()},className:"".concat("Apartments"==this.props.current_page?F.a.menu_item_active:""),children:[Object(c.jsx)("img",{src:S}),"CONCIERGE"]})}),Object(c.jsx)(b.b,{to:"/cars",children:Object(c.jsxs)("li",{onClick:function(){return e.closeMenu()},className:"".concat("Cars"==this.props.current_page?F.a.menu_item_active:""),children:[Object(c.jsx)("img",{src:S}),"CARS"]})}),Object(c.jsx)(b.b,{to:"/contact",children:Object(c.jsxs)("li",{onClick:function(){return e.closeMenu()},className:"".concat("Contact"==this.props.current_page?F.a.menu_item_active:""),children:[Object(c.jsx)("img",{src:S}),"CONTACT"]})}),Object(c.jsx)(b.b,{to:"/about",children:Object(c.jsxs)("li",{onClick:function(){return e.closeMenu()},className:"".concat("About us"==this.props.current_page?F.a.menu_item_active:""),children:[Object(c.jsx)("img",{src:S}),"ABOUT US"]})}),Object(c.jsx)(b.b,{to:"/FAQ",children:Object(c.jsxs)("li",{onClick:function(){return e.closeMenu()},className:"".concat("FAQ"==this.props.current_page?F.a.menu_item_active:""),children:[Object(c.jsx)("img",{src:S}),"FAQ"]})}),Object(c.jsx)("li",{onClick:function(){return e.closeMenu()},className:F.a.close_cross,children:Object(c.jsx)("img",{src:H})})]}),Object(c.jsx)(b.b,{to:"/",children:Object(c.jsx)("div",{className:F.a.logo})})]})}}]),n}(a.Component),P=Object(j.e)(Object(A.c)((function(e){return{state:e}}),{openMenu:w,closeMenu:T})(L)),D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this)).openMenu=function(){c.props.openMenu()},c.state={current_page:"Home"},c}return Object(_.a)(n,[{key:"render",value:function(){var e=this;this.props.state.controller.menu_open;return Object(c.jsxs)("div",{className:"".concat(k.a.wrapper),children:[Object(c.jsx)(P,{current_page:"Home"}),Object(c.jsxs)("div",{className:k.a.landing_main,children:[Object(c.jsx)("div",{className:k.a.landing_main_text,children:Object(c.jsx)("p",{children:"SAVE YOUR TIME AND GET ACCESS TO THE MOST EXCLUSIVE AND UNIQUE PLACES"})}),Object(c.jsxs)("div",{className:k.a.landing_main_buttons,children:[Object(c.jsx)("a",{className:k.a.landing_main_buttons__join_us,children:"JOIN US"}),Object(c.jsx)("a",{onClick:function(){return e.openMenu()},className:k.a.landing_main_buttons__learn_more,children:"LEARN MORE"})]})]})]})}}]),n}(a.Component),I=Object(j.e)(Object(A.c)((function(e){return{state:e}}),{openMenu:w,closeMenu:T})(D)),R=n(31),Q=n.n(R),B=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this)).openMenu=function(){c.setState({menu_open:!0})},c.closeMenu=function(){c.setState({menu_open:!1})},c.state={menu_open:!1,current_page:"Home"},c}return Object(_.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:Q.a.wrapper,children:[Object(c.jsx)(P,{}),Object(c.jsx)("div",{className:Q.a.content})]})}}]),n}(a.Component),W=Object(j.e)(Object(A.c)((function(e){return{state:e}}),{openMenu:w,closeMenu:T})(B)),z=(n(50),n(37)),G=n.n(z),V=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:G.a.container,children:"Work in progress..."})}}]),n}(a.Component),J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(V,{})})}}]),n}(a.Component),X=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(V,{})})}}]),n}(a.Component),Y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(V,{})})}}]),n}(a.Component),Z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"componentDidMount",value:function(){console.log("Update going full")}},{key:"render",value:function(){return Object(c.jsx)(A.a,{store:E,children:Object(c.jsxs)(b.a,{history:O,children:[Object(c.jsx)(j.a,{exact:!0,path:"/",component:I}),Object(c.jsx)(j.a,{path:"/apartments",component:W}),Object(c.jsx)(j.a,{path:"/cars",component:J}),Object(c.jsx)(j.a,{path:"/FAQ",component:X}),Object(c.jsx)(j.a,{path:"/contact",component:Y})]})})}}]),n}(a.Component),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Z,{})}),document.getElementById("root")),K()}},[[51,1,2]]]);
//# sourceMappingURL=main.3cdfd9ec.chunk.js.map