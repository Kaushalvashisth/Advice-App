(this.webpackJsonpadvice_app=this.webpackJsonpadvice_app||[]).push([[0],{129:function(e,t,a){e.exports=a(426)},425:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a.n(n),i=a(15),o=a.n(i),r=a(120),s=a(121),l=a(128),u=a(127),d=(a(133),a(126)),p=a.n(d),v=(a(425),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={advice:""},e.fetchAdvice=function(){p.a.get("\thttps://api.adviceslip.com/advice").then((function(t){var a=t.data.slip.advice;e.setState({advice:a}),console.log(a)})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){var e=this.state.advice;return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"card"},c.a.createElement("h1",{className:"heading"},e),c.a.createElement("button",{className:"button",onClick:this.fetchAdvice},c.a.createElement("span",null,"GIVE ME ADVICE!"))))}}]),a}(c.a.Component));o.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.14d00ca8.chunk.js.map