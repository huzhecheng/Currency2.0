(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){e.exports=a(345)},196:function(e,t,a){},337:function(e,t,a){},342:function(e,t,a){},345:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(9),c=a.n(l),o=a(40),u=a(47),i=a(141),d=a(49),s=function(e){e({type:"FETCH_CURRENCY_BEGIN"}),fetch("https://fred-express-api.herokuapp.com/api/currency").then(m).then(function(e){return e.json()}).then(function(t){e({type:"FETCH_CURRENCY_SUCCESS",payload:{currencys:t}})}).catch(function(t){return e(function(e){return{type:"FETCH_CURRENCY_FAILURE",payload:{error:e}}}(t))})},m=function(e){if(!e.ok)throw Error(e.statusText);return e},f={twd:100,forex:100,status:!0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBMIT_VALUE":return Object(d.a)({},e,{twd:t.payload.twd,forex:t.payload.forex,status:t.payload.status});default:return e}},p={items:[],loading:!0,error:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CURRENCY_BEGIN":return Object(d.a)({},e,{loading:!0,error:null});case"FETCH_CURRENCY_SUCCESS":return Object(d.a)({},e,{loading:!1,items:t.payload.currencys});case"FETCH_CURRENCY_FAILURE":return Object(d.a)({},e,{loading:!1,error:t.payload.error,items:[]});default:return e}},h=Object(o.c)({submitValue:y,currencyFetch:E}),g=(a(79),a(48)),v=(a(168),a(106)),b=(a(171),a(152)),x=(a(107),a(10)),w=a(67),C=a(68),k=a(74),_=a(69),S=a(75),j=(a(108),a(33)),O=(a(180),a(105)),F=a(142),U=a.n(F),N=(a(346),a(77)),T=a(102),R=a.n(T),I=(a(196),N.a.Column),B=N.a.ColumnGroup,$=function(e){var t=e.value,a=e.differ;return r.a.createElement("div",null,t,r.a.createElement("span",{style:{color:"red",fontSize:"12px",paddingLeft:"8px"}},r.a.createElement(x.a,{type:"rise"})),r.a.createElement("span",{style:{color:"red",fontSize:"6px"}}," ",a))},A=function(e){var t=e.value,a=e.differ;return r.a.createElement("div",null,t,r.a.createElement("span",{style:{color:"green",fontSize:"12px",paddingLeft:"8px"}},r.a.createElement(x.a,{type:"fall"})),r.a.createElement("span",{style:{color:"green",fontSize:"6px"}}," ",a))},Y=function(e,t,a,n){if(!e.length||0===t)return r.a.createElement("span",null,t);var l=(t-e.find(function(e){return e.key===a.country})[n]["\u8cb7\u5165"]).toFixed(4);return l>0?r.a.createElement($,{value:t,differ:Math.abs(l)}):r.a.createElement(A,{value:t,differ:Math.abs(l)})},H=function(e,t,a,n){if(!e.length||0===t)return r.a.createElement("span",null,t);var l=(t-e.find(function(e){return e.key===a.country})[n]["\u8ce3\u51fa"]).toFixed(4);return l>0?r.a.createElement(A,{value:t,differ:Math.abs(l)}):r.a.createElement($,{value:t,differ:Math.abs(l)})},M=function(e){function t(){return Object(w.a)(this,t),Object(k.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.loading,n=t.dataSource,l=t.forex,c=t.twd,o=t.status,u=t.defaultday,i=n.map(function(e){return{key:e.country,day_10:e.recent[0],day_30:e.recent[1],day_60:e.recent[2],day_90:e.recent[3],day_120:e.recent[4],day_150:e.recent[5],day_180:e.recent[6]}});return console.log(i),r.a.createElement(N.a,{scroll:{x:1100,y:570},dataSource:n,loading:a,rowKey:function(e){return e.country},pagination:!1},r.a.createElement(I,{title:"\u5e63\u5225",dataIndex:"icon",key:"icon",fixed:"left",align:"center",width:100,render:function(e,t){return r.a.createElement("img",{src:e,alt:t.country})}}),r.a.createElement(B,{title:"\u73fe\u91d1\u532f\u7387"},r.a.createElement(I,{title:"\u9280\u884c\u8cb7\u5165",dataIndex:"cashbuy",key:"cashbuy",width:150,align:"center",render:function(e,t){return Y(i,e,t,u)}}),r.a.createElement(I,{title:"\u9280\u884c\u8ce3\u51fa",dataIndex:"cashsell",key:"cashsell",width:150,align:"center",render:function(e,t){return H(i,e,t,u)}})),r.a.createElement(B,{title:"\u5373\u671f\u532f\u7387"},r.a.createElement(I,{title:"\u9280\u884c\u8cb7\u5165",dataIndex:"datebuy",key:"datebuy",width:150,align:"center",render:function(e,t){return Y(i,e,t,u)}}),r.a.createElement(I,{title:"\u9280\u884c\u8ce3\u51fa",dataIndex:"datesell",key:"datesell",width:150,align:"center",render:function(e,t){return H(i,e,t,u)}})),r.a.createElement(B,{title:"\u532f\u7387\u8a66\u7b97"},r.a.createElement(I,{title:"\u53f0\u5e63\u63db\u5916\u5e63",dataIndex:"country",key:"countrybuy",width:150,align:"center",render:function(t,a){var n=(c/parseFloat(o?a.datesell:a.cashsell)).toFixed(2);return r.a.createElement("span",null,a.mark," ",isFinite(n)?r.a.createElement(R.a,{start:n/10,end:Number(n),duration:1.5,separator:",",decimals:2,ref:function(t){e.myCountUp=t}}):(0).toFixed(2))}}),r.a.createElement(I,{title:"\u5916\u5e63\u63db\u53f0\u5e63",dataIndex:"country",key:"countrysell",width:150,align:"center",render:function(e,t){var a=(l*parseFloat(o?t.datebuy:t.cashbuy)).toFixed(2);return r.a.createElement("span",null,"NT$ ",isFinite(a)?r.a.createElement(R.a,{start:a/10,end:Number(a),duration:1.5,separator:",",decimals:2}):(0).toFixed(2))}})))}}]),t}(n.Component),V=Object(u.b)(function(e){var t=e.submitValue;return{forex:t.forex,twd:t.twd,status:t.status}})(M),L=(a(337),O.a.TabPane),z=j.a.Option,D={USD:{"\u8cb7\u9032":29,"\u8ce3\u51fa":31},AUD:{"\u8cb7\u9032":21,"\u8ce3\u51fa":23},JPY:{"\u8cb7\u9032":.25,"\u8ce3\u51fa":.28},ZAR:{"\u8cb7\u9032":2,"\u8ce3\u51fa":2.3},CNY:{"\u8cb7\u9032":4.3,"\u8ce3\u51fa":4.7}},G=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(k.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={twd:100,forex:100,status:!0,defaultday:"day_10"},a}return Object(S.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(s)}},{key:"render",value:function(){var e=this,t=this.props,a=t.loading,n=t.currencys;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"block"},r.a.createElement("h4",null,r.a.createElement(x.a,{type:"dollar",theme:"twoTone",twoToneColor:"#d48806"}),"\xa0\xa0\u8a2d\u5b9a\u91d1\u984d"),r.a.createElement(b.a,{checkedChildren:"\u5373\u671f",unCheckedChildren:"\u73fe\u91d1",defaultChecked:!0,style:{marginBottom:"20px"},onChange:function(t){e.setState({status:t})}}),r.a.createElement("br",null),r.a.createElement(v.a,{style:{marginBottom:"20px",width:"100%"},min:1,max:1e6,step:100,defaultValue:this.state.twd,formatter:function(e){return"\u53f0\u5e63 $ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"").replace(/\u53f0\u5e63\s?|(,*)/g,"")},onChange:function(t){e.setState({twd:t})}}),r.a.createElement("p",null,r.a.createElement("small",null,"Ex : \u53f0\u5e63 $ 100 \u53ef\u63db US$ 3.3 \u7f8e\u5143")),r.a.createElement(v.a,{style:{marginBottom:"20px",width:"100%"},min:1,max:1e6,step:100,defaultValue:this.state.forex,formatter:function(e){return"\u5916\u5e63 $ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"").replace(/\u5916\u5e63\s?|(,*)/g,"")},onChange:function(t){e.setState({forex:t})}}),r.a.createElement("p",null,r.a.createElement("small",null,"Ex : \u7f8e\u5143 US$ 100 \u53ef\u63db $ 3000 \u53f0\u5e63")),r.a.createElement(g.a,{type:"dashed",onClick:function(){var t;e.props.dispatch({type:"SUBMIT_VALUE",payload:{twd:(t=e.state).twd,forex:t.forex,status:t.status}})}},"\u8a08\u7b97")),r.a.createElement("div",{className:"block"},r.a.createElement("h4",null,r.a.createElement(x.a,{type:"pound",style:{color:"#d48806"}}),"\xa0\xa0\u8a2d\u5b9a\u9060\u671f\u5929\u6578\u5dee"),r.a.createElement(j.a,{defaultValue:this.state.defaultday,style:{width:"100%"},onChange:function(t){e.setState({defaultday:t})}},r.a.createElement(z,{value:"day_10"},"10\u5929"),r.a.createElement(z,{value:"day_30"},"30\u5929"),r.a.createElement(z,{value:"day_60"},"60\u5929"),r.a.createElement(z,{value:"day_90"},"90\u5929"),r.a.createElement(z,{value:"day_120"},"120\u5929"),r.a.createElement(z,{value:"day_150"},"150\u5929"),r.a.createElement(z,{value:"day_180"},"180\u5929"))),r.a.createElement("div",{className:"block",style:{maxHeight:"250px"}},r.a.createElement("h4",null,r.a.createElement(x.a,{type:"euro",theme:"twoTone",twoToneColor:"#d48806"}),"\xa0\xa0\u8a2d\u5b9a\u671f\u671b\u503c"),r.a.createElement("p",null,r.a.createElement("small",null,"Ex : \u671f\u671b\u9280\u884c\u7f8e\u5143\u514c\u53f0\u5e63 1\uff1a29 \u8cb7\u9032"),r.a.createElement("br",null),r.a.createElement("small",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u671f\u671b\u9280\u884c\u7f8e\u5143\u514c\u53f0\u5e63 1\uff1a31 \u8ce3\u51fa")),r.a.createElement(U.a,{src:D,name:!1,displayDataTypes:!1,displayObjectSize:!1,onEdit:!0,collapsed:1}))),r.a.createElement("section",{className:"section"},r.a.createElement(O.a,{defaultActiveKey:"0"},r.a.createElement(L,{tab:r.a.createElement("span",null,r.a.createElement(x.a,{type:"pay-circle-o"}),"\u5373\u6642\u532f\u7387"),key:"0"},r.a.createElement(V,{loading:a,dataSource:n,defaultday:this.state.defaultday})),r.a.createElement(L,{tab:r.a.createElement("span",null,r.a.createElement(x.a,{type:"line-chart"}),"\u8d70\u52e2\u5206\u6790"),key:"1"}))))}}]),t}(n.Component),J=Object(u.b)(function(e){var t=e.currencyFetch;return{currencys:t.items,loading:t.loading,error:t.error}})(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(342);var K=Object(o.d)(h,Object(o.a)(i.a));c.a.render(r.a.createElement(u.a,{store:K},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[156,2,1]]]);
//# sourceMappingURL=main.6e81ebcd.chunk.js.map