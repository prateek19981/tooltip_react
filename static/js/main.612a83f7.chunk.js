(this.webpackJsonptooltip=this.webpackJsonptooltip||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),l=o(5),i=o.n(l),s=(o(14),o(1)),u=o(2),c=o(4),r=o(3),p=(o(15),function(t){Object(c.a)(o,t);var e=Object(r.a)(o);function o(){return Object(s.a)(this,o),e.apply(this,arguments)}return Object(u.a)(o,[{key:"render",value:function(){var t,e=this.props.position;return"left"===e?(console.log("position",e),t=a.a.createElement("div",{id:"tooltip",className:"left"},a.a.createElement("p",null,"button"))):"right"===e?t=a.a.createElement("div",{id:"tooltip",className:"right"},a.a.createElement("p",null,"button")):"top"===e?t=a.a.createElement("div",{id:"tooltip",className:"top"},a.a.createElement("p",null,"button")):"bottom"===e&&(t=a.a.createElement("div",{id:"tooltip",className:"bottom"},a.a.createElement("p",null,"button"))),a.a.createElement("div",null,t)}}]),o}(n.Component)),m=o(6),h=o.n(m),v=(o(8),function(t){Object(c.a)(o,t);var e=Object(r.a)(o);function o(){return Object(s.a)(this,o),e.apply(this,arguments)}return Object(u.a)(o,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"btn-contain"},a.a.createElement("input",{type:"button",value:"click me",className:"mbtn",onMouseOver:function(){console.log("mouse"),t.props.mouseover()},onMouseOut:function(){t.props.mouseout()}}))}}]),o}(n.Component)),d=function(t){Object(c.a)(o,t);var e=Object(r.a)(o);function o(t){var n;return Object(s.a)(this,o),(n=e.call(this,t)).handleChangePosition=function(t){n.setState({position:t})},n.handleMouseOver=function(){console.log("mouseover"),n.setState({showTooltip:!n.state.showTooltip})},n.handleMouseOut=function(){console.log("mouseout"),n.setState({showTooltip:!n.state.showTooltip})},n.state={showTooltip:!1,position:""},n}return Object(u.a)(o,[{key:"render",value:function(){var t=this,e=["top","bottom","left","right"];return a.a.createElement("div",null,a.a.createElement(h.a,{options:e,value:this.state.position,placeholder:"Select an option",onChange:function(e){console.log("value",e.value),t.handleChangePosition(e.value)}}),a.a.createElement(v,{mouseover:this.handleMouseOver,mouseout:this.handleMouseOut}),this.state.showTooltip?a.a.createElement(p,{position:this.state.position}):null)}}]),o}(n.Component);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root"))},9:function(t,e,o){t.exports=o(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.612a83f7.chunk.js.map