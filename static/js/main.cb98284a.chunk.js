(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{65:function(e,t,a){e.exports=a(78)},75:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),c=a.n(o),s=a(39),i=a(35),l=(a(75),a(13)),d=a.n(l),u=a(28),m=a(49),p=a(50),h=a(58),g=a(57),f=a(110),w=a(113),b=a(119),E=a(116),x=a(54),y=a.n(x),D=a(55),S=a.n(D),v=a(56),L=a.n(v),k=Object(f.a)((function(e){return{margin:{marginTop:e.spacing(3),borderRadius:"10px",background:"#ecf0f3",boxShadow:"inset 3px 3px 5px #8e9092,inset -3px -3px 5px #ffffff",padding:".5rem"},dropDown:{borderRadius:"20px",opactiy:"0.25"}}})),j=function(e){var t=e.searchWeather,a=e.onHandleSearchChange,r=e.getLocation,o=k();return n.a.createElement(w.a,{item:!0,xs:7,style:{position:"relative"}},n.a.createElement("form",{onSubmit:t},n.a.createElement("div",{className:o.margin},n.a.createElement(w.a,{container:!0,spacing:1,alignItems:"flex-end",alignContent:"space-between"},n.a.createElement(w.a,{item:!0,xs:2},n.a.createElement(y.a,null)),n.a.createElement(w.a,{item:!0,xs:7},n.a.createElement(b.a,{style:{marginTop:"-.5rem",paddingRight:".5rem"},onChange:a,id:"search",placeholder:"Search"})),n.a.createElement(w.a,{item:!0,xs:2},n.a.createElement(E.a,{type:"submit"},n.a.createElement(S.a,null))),n.a.createElement(w.a,{item:!0,xs:1},n.a.createElement(E.a,{onClick:function(){r()}},n.a.createElement(L.a,null)))))))},O=a(115),C=a(4),T=a(16),A=a(120),N=a(79),W=a(117),H=a(118),F=Object(f.a)((function(e){return{margin:{marginTop:e.spacing(2)},root:{width:60,height:20,padding:0,margin:e.spacing(1)},switchBase:{padding:0,"&$checked":{transform:"translateX(40px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:20,height:20},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:"#666666",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{}}})),I=function(){var e=F(),t=Object(r.useState)(!0),a=Object(T.a)(t,2),o=a[0],c=a[1];return n.a.createElement(w.a,{item:!0,xs:3},n.a.createElement("div",{className:e.margin},n.a.createElement(w.a,{container:!0,alignItems:"flex-end"},n.a.createElement(w.a,{item:!0,xs:12},n.a.createElement(W.a,{"aria-label":"position",row:!0},n.a.createElement(H.a,{value:"top",control:n.a.createElement(A.a,{classes:{root:e.root,switchBase:e.switchBase,thumb:e.thumb,track:e.track,checked:e.checked},size:"medium",checked:o,onChange:function(e){c(!o),console.log(o)},name:"checkedA",inputProps:{"aria-label":"secondary checkbox"}}),label:n.a.createElement(N.a,{variant:"button"},o?"Light":"Dark"),labelPlacement:"top"}))))))},P=function(e){return{root:{flexGrow:1},paper:{marginTop:"2rem",padding:e.spacing(1),textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.text.secondary,textTransform:"uppercase",height:"8vh",borderRadius:"20px",background:"linear-gradient(145deg, #d4d8db, #fdffff)",boxShadow:"5px 5px 10px #8e9092, -5px -5px 10px #ffffff"},paperSelected:{marginTop:"2rem",padding:e.spacing(1),textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",color:"white",textTransform:"uppercase",height:"8vh",borderRadius:"20px",background:"#81859C",boxShadow:"inset 5px 5px 10px #272932, inset -5px -5px 10px #A4A7B7"},paperLocationDetails:{display:"flex",alignItems:"space-around",marginTop:"2rem",padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:"30vh",borderRadius:"20px",background:"linear-gradient(145deg, #d4d8db, #fdffff)",boxShadow:"5px 5px 10px #8e9092, -5px -5px 10px #ffffff"}}},R=Object(f.a)(P),M=function(e){var t=e.weatherData,a=e.weatherDataLoaded,r=R();return n.a.createElement(w.a,{item:!0,xs:6,className:r.root},n.a.createElement(O.a,{className:r.paper},n.a.createElement(N.a,{variant:"button"},n.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(a?t.weather[0].icon:"50n","@2x.png"),alt:"weatherIcon"}))))},G=a(41),B=a.n(G),_=Object(f.a)(P),J=function(e){var t=e.weatherData,a=e.weatherDataLoaded,r=_();return n.a.createElement(w.a,{item:!0,xs:6,className:r.root},n.a.createElement(O.a,{className:r.paper},n.a.createElement(w.a,{container:!0},n.a.createElement(w.a,{item:!0,xs:12},a?n.a.createElement(B.a,{style:{fontSize:"3rem",transform:"rotate(".concat(t.wind_deg,"deg)")}}):n.a.createElement(B.a,{style:{fontSize:"4rem"}})),n.a.createElement(w.a,{item:!0,xs:12},n.a.createElement(N.a,{variant:"button"},a?"".concat(t.wind_speed," mph"):"")))))},$=Object(f.a)(P),U=function(e){var t=e.setDate,a=e.weatherData,r=e.location,o=e.weatherDataLoaded,c=$();return n.a.createElement(w.a,{item:!0,xs:12,style:{textTransform:"uppercase"}},n.a.createElement(O.a,{elevation:3,className:c.paperLocationDetails},n.a.createElement(w.a,{container:!0,spacing:1},n.a.createElement(w.a,{item:!0,xs:12},n.a.createElement(N.a,{variant:"button"},t)),n.a.createElement(w.a,{item:!0,xs:12},o?n.a.createElement(N.a,{variant:"h2"}," ",Math.round(a.temp.day),"\xb0C"):n.a.createElement(N.a,{variant:"h4"},"Loading")),n.a.createElement(w.a,{item:!0,xs:12},n.a.createElement(N.a,{variant:"button"},o?r:"Loading")),n.a.createElement(w.a,{item:!0,xs:12},n.a.createElement(N.a,{variant:"h6"},o?a.weather[0].description:"Loading")),n.a.createElement(w.a,{container:!0,style:{marginTop:".5rem"}},n.a.createElement(w.a,{item:!0,xs:6},n.a.createElement(N.a,{variant:"button"},"Sunrise: ",o?"".concat(new Date(1e3*a.sunrise).getHours(),":").concat(new Date(1e3*a.sunrise).getMinutes()):"Loading")),n.a.createElement(w.a,{item:!0,xs:6},n.a.createElement(N.a,{variant:"button"},"Sunset: ",o?"".concat(new Date(1e3*a.sunset).getHours(),":").concat(new Date(1e3*a.sunset).getMinutes()):"Loading"))))))},q=Object(f.a)(P),z=function(e){var t=e.currentSelected,a=e.onHandleSelected,o=q(),c=Object(r.useState)(!0),s=Object(T.a)(c,2),i=s[0],l=s[1];return Object(r.useEffect)((function(){l("today"===t)}),[t]),n.a.createElement(w.a,{item:!0,xs:4,className:o.root},n.a.createElement(O.a,{onClick:a,id:"today",className:i?o.paperSelected:o.paper},"Today ",n.a.createElement("br",null)," ",n.a.createElement("br",null)," ",(new Date).getDate()))},Y=Object(f.a)(P),V=function(e){var t=e.currentSelected,a=e.onHandleSelected,o=Y(),c=Object(r.useState)(!1),s=Object(T.a)(c,2),i=s[0],l=s[1];return Object(r.useEffect)((function(){l("tomorrow"===t)}),[t]),n.a.createElement(w.a,{item:!0,xs:4,className:o.root},n.a.createElement(O.a,{onClick:a,id:"tomorrow",className:i?o.paperSelected:o.paper},"Tomorrow ",n.a.createElement("br",null)," ",n.a.createElement("br",null)," ",(new Date).getDate()+1))},K=Object(f.a)(P),X=function(e){var t=e.currentSelected,a=e.onHandleSelected,o=K(),c=Object(r.useState)(!1),s=Object(T.a)(c,2),i=s[0],l=s[1];Object(r.useEffect)((function(){l("dayAfterTomorrow"===t)}),[t]);return n.a.createElement(w.a,{item:!0,xs:4,className:o.root},n.a.createElement(O.a,{onClick:a,id:"dayAfterTomorrow",className:i?o.paperSelected:o.paper},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()+2],n.a.createElement("br",null),n.a.createElement("br",null),(new Date).getDate()+2))},Q=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).onHandleSelected=function(t){e.setState({currentSelected:t.target.id}),e.calculateDate(t.target.id)},e.searchWeather=function(t){t.preventDefault(),e.setState({searchLocation:e.props.searchField}),console.log("Get This",e.props.searchField),e.getCoords(e.props.searchField)},e.componentDidMount=Object(u.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.calculateDate(e.state.currentSelected);case 2:return t.next=4,e.getLocation();case 4:case"end":return t.stop()}}),t)}))),e.getLocation=Object(u.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!navigator.geolocation){t.next=3;break}return t.next=3,navigator.geolocation.getCurrentPosition(e.showPosition,e.showPositionError);case 3:case"end":return t.stop()}}),t)}))),e.showPositionError=function(e){switch(e.code){case e.PERMISSION_DENIED:alert("Please Enable Location For Accurate Weather Reports");break;case e.POSITION_UNAVAILABLE:alert("Location information is unavailable.");break;case e.TIMEOUT:alert("The request to get user location timed out.");break;case e.UNKNOWN_ERROR:alert("An unknown error occurred.");break;default:alert("Unavailable")}},e.showPosition=function(t){e.setState({currentLatPosition:t.coords.latitude,currentLondPosition:t.coords.longitude}),console.log("Got the Coords"),e.getWeatherGeo(t.coords.latitude,t.coords.longitude),e.getLoctionFromCoords(t.coords.latitude,t.coords.longitude)},e.getLoctionFromCoords=function(){var t=Object(u.a)(d.a.mark((function t(a,r){var n,o,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.opencagedata.com/geocode/v1/json?q=".concat(a,"+").concat(r,"&key=6190521cf6754408a69404ac72161310"),t.next=3,fetch(n);case 3:return o=t.sent,t.next=6,o.json();case 6:c=t.sent,e.setState({location:c.results[0].components.suburb});case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.getCoords=function(){var t=Object(u.a)(d.a.mark((function t(a){var r,n,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.opencagedata.com/geocode/v1/json?q=".concat(a,"&key=6190521cf6754408a69404ac72161310"),t.next=3,fetch(r);case 3:return n=t.sent,t.next=6,n.json();case 6:return o=t.sent,e.setState({currentLatPosition:o.results[0].geometry.lat,currentLondPosition:o.results[0].geometry.lng,location:a}),t.next=10,e.getWeatherGeo(o.results[0].geometry.lat,o.results[0].geometry.lng);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getWeatherGeo=function(){var t=Object(u.a)(d.a.mark((function t(a,r){var n,o,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({weatherDataLoaded:!1}),n="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(r,"&exclude=hourly&units=metric&appid=").concat("6f59aafd13d9cd8666b8c2261057b8fa"),t.next=4,fetch(n);case 4:return o=t.sent,t.next=7,o.json();case 7:c=t.sent,console.log(c.daily[0]),e.setState({todayWeather:c.daily[0],tomorrowWeather:c.daily[1],dayAfterTomWeather:c.daily[2]}),"today"===e.state.currentSelected?e.setState({weatherData:c.daily[0],weatherDataLoaded:!0}):"tomorrow"===e.state.currentSelected&&e.setState({weatherData:c.daily[1],weatherDataLoaded:!0}),"dayAfterTomorrow"===e.state.currentSelected&&e.setState({weatherData:c.daily[2],weatherDataLoaded:!0});case 12:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.calculateDate=function(t){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=["January","February","March","April","May","June","July","August","September","October","November","December"],n=new Date,o=function(){var e=new Date;return e.setDate((new Date).getDate()+1),e},c=function(){var e=new Date;return e.setDate((new Date).getDate()+2),e};"today"===t?e.setState({setDate:a[n.getDay()]+" "+n.getDate()+" "+r[n.getMonth()]+" "+n.getFullYear()}):"tomorrow"===t?e.setState({setDate:a[o().getDay()]+" "+o().getDate()+" "+r[o().getMonth()]+" "+o().getFullYear()}):"dayAfterTomorrow"===t&&e.setState({setDate:a[c().getDay()]+" "+c().getDate()+" "+r[c().getMonth()]+" "+c().getFullYear()}),e.state.weatherDataLoaded&&("today"===e.state.currentSelected?e.setState({weatherData:e.state.todayWeather,weatherDataLoaded:!0}):"tomorrow"===e.state.currentSelected&&e.setState({weatherData:e.state.tomorrowWeather,weatherDataLoaded:!0}),"dayAfterTomorrow"===e.state.currentSelected&&e.setState({weatherData:e.state.dayAfterTomWeather,weatherDataLoaded:!0}))},e.state={searchLocation:"",currentSelected:"today",weatherDataLoaded:!1,setDate:"",currentLatPosition:"",currentLondPosition:"",weatherData:"",todayWeather:"",tomorrowWeather:"",dayAfterTomWeather:"",location:""},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.onHandleSearchChange,r=this.state,o=r.weatherData,c=r.weatherDataLoaded,s=r.setDate,i=r.currentSelected;return n.a.createElement(w.a,{container:!0,spacing:1,style:{margin:"0 auto",backgroundColor:"#ecf0f3"}},n.a.createElement(w.a,{item:!0,xs:12,className:t.root},n.a.createElement(O.a,{elevation:0,className:t.paper,style:{backgroundColor:"#ecf0f3"}},n.a.createElement(w.a,{container:!0,style:{height:"100%"},justify:"center"},n.a.createElement(w.a,{item:!0,xs:12},n.a.createElement(w.a,{container:!0,spacing:2,justify:"space-between"},n.a.createElement(j,{searchWeather:this.searchWeather,onHandleSearchChange:a,getLocation:this.getLocation}),n.a.createElement(I,null))),n.a.createElement(w.a,{container:!0,spacing:10},n.a.createElement(M,{weatherData:o,weatherDataLoaded:c}),n.a.createElement(J,{weatherData:o,weatherDataLoaded:c})),n.a.createElement(w.a,{item:!0,xs:9},n.a.createElement(U,{setDate:s,location:this.state.location,weatherData:o,currentSelected:i,weatherDataLoaded:c})),n.a.createElement(w.a,{container:!0,spacing:3},n.a.createElement(z,{onHandleSelected:this.onHandleSelected,currentSelected:this.state.currentSelected}),n.a.createElement(V,{onHandleSelected:this.onHandleSelected,currentSelected:this.state.currentSelected}),n.a.createElement(X,{onHandleSelected:this.onHandleSelected,currentSelected:this.state.currentSelected}))))))}}]),a}(r.Component),Z=Object(s.b)((function(e){return{searchField:e.searchField}}),(function(e){return{onHandleSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})}}}))(Object(C.a)((function(e){return{root:{flexGrow:1,marginTop:"1rem",display:"flex",flexDirection:"column",alignItems:"space-around"},paper:{margin:"0 auto",textAlign:"center",height:"90vh",width:"90vw"}}}))(Q));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(42),te={searchField:""},ae=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object(ee.a)(Object(ee.a)({},e),{},{searchField:t.payload});default:return e}}));c.a.render(n.a.createElement(s.a,{store:ae},n.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.cb98284a.chunk.js.map