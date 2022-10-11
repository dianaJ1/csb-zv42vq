(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{32:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(20),r=(a(32),a(33),a(9)),s=a(1);function i(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.date.getDay()],a=e.date.getHours();a<10&&(a="0".concat(a));var c=e.date.getMinutes();return c<10&&(c="0".concat(c)),Object(s.jsxs)("div",{children:[t," ",a,":",c]})}var d=a(21),o=a.n(d);function l(e){return Object(s.jsx)(o.a,{icon:{"01d":"CLEAR_DAY","01n":"CLEAR_NIGHT","02d":"PARTLY_CLOUDY_DAY","02n":"PARTLY_CLOUDY_NIGHT","03d":"PARTLY_CLOUDY_DAY","03n":"PARTLY_CLOUDY_NIGHT","04d":"CLOUDY","04n":"CLOUDY","09d":"RAIN","09n":"RAIN","10d":"RAIN","10n":"RAIN","11d":"RAIN","11n":"RAIN","13d":"SNOW","13n":"SNOW","50d":"FOG","50n":"FOG"}[e.code],color:"#1e1e1e",size:e.size,animate:!0})}function j(e){return Object(s.jsxs)("div",{className:"WeatherTemperature",children:[Object(s.jsx)("span",{className:"temperature",children:Math.round(e.celsius)}),Object(s.jsx)("span",{className:"unit",children:"\xb0C"})]})}function u(e){return Object(s.jsxs)("div",{className:"WeatherInfo",children:[Object(s.jsx)("h1",{children:e.data.city}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(i,{date:e.data.date})}),Object(s.jsx)("li",{className:"text-capitalize",children:e.data.description})]}),Object(s.jsxs)("div",{className:"row mt-3",children:[Object(s.jsx)("div",{className:"col-6",children:Object(s.jsxs)("div",{className:"clearfix",children:[Object(s.jsx)("div",{className:"float-left",children:Object(s.jsx)(l,{code:e.data.icon,size:52})}),Object(s.jsx)("div",{className:"float-left",children:Object(s.jsx)(j,{celsius:e.data.temperature})})]})}),Object(s.jsx)("div",{className:"col-6",children:Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Humidity: ",e.data.humidity,"%"]}),Object(s.jsxs)("li",{children:["Wind: ",e.data.wind," km/h"]})]})})]})]})}a(40);var h=a(16);function b(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"WeatherForecast-day",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(1e3*e.data.dt).getDay()]}),Object(s.jsx)(l,{code:e.data.weather[0].icon,size:36}),Object(s.jsxs)("div",{className:"WeatherForecast-temperatures",children:[Object(s.jsx)("span",{className:"WeatherForecast-temperature-max",children:function(){var t=Math.round(e.data.temp.max);return"".concat(t,"\xb0")}()}),Object(s.jsx)("span",{className:"WeatherForecast-temperature-min",children:function(){var t=Math.round(e.data.temp.min);return"".concat(t,"\xb0")}()})]})]})}function O(e){var t=Object(c.useState)(!1),a=Object(r.a)(t,2),n=a[0],i=a[1],d=Object(c.useState)(null),o=Object(r.a)(d,2),l=o[0],j=o[1];function u(e){j(e.data.daily),i(!0)}return Object(c.useEffect)((function(){i(!1)}),[e.coordinates]),n?Object(s.jsx)("div",{className:"WeatherForecast",children:Object(s.jsx)("div",{className:"row",children:l.map((function(e,t){return t<5?Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(b,{data:e})},t):null}))})}):(function(){var t=e.coordinates.lon,a=e.coordinates.lat,c="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(t,"&appid=").concat("145c5d45ac0a0eddce2e037abca32a35","&units=metric");h.a.get(c).then(u)}(),null)}a(45);function m(e){var t=Object(c.useState)({ready:!1}),a=Object(r.a)(t,2),n=a[0],i=a[1],d=Object(c.useState)(e.defaultCity),o=Object(r.a)(d,2),l=o[0],j=o[1];function b(e){i({ready:!0,coordinates:e.data.coord,temperature:e.data.main.temp,humidity:e.data.main.humidity,date:new Date(1e3*e.data.dt),description:e.data.weather[0].description,icon:e.data.weather[0].icon,wind:e.data.wind.speed,city:e.data.name})}function m(){var e="https://api.openweathermap.org/data/2.5/weather?q=".concat(l,"&appid=").concat("145c5d45ac0a0eddce2e037abca32a35","&units=metric");h.a.get(e).then(b)}return n.ready?Object(s.jsxs)("div",{className:"Weather",children:[Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),m()},children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-9",children:Object(s.jsx)("input",{type:"search",placeholder:"Enter a city..",className:"form-control",autoFocus:"on",onChange:function(e){j(e.target.value)}})}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("input",{type:"submit",value:"Search",className:"btn btn-primary w-100"})})]})}),Object(s.jsx)(u,{data:n}),Object(s.jsx)(O,{coordinates:n.coordinates})]}):(m(),"Loading...")}a(46);function p(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(m,{defaultCity:"New York"}),Object(s.jsxs)("footer",{children:["This project was coded by Diana Jethwa",Object(s.jsx)("a",{href:"https://github.com/dianaJ1/react-weather-app1.git",target:"_blank",rel:"noopener noreferrer",children:"open-sourced on GitHub"})," ","and"," ",Object(s.jsx)("a",{href:"https://csb-zv42vq.netlify.app/",target:"_blank",rel:"noopener noreferrer",children:"hosted on Netlify"})]})]})})}var x=document.getElementById("root");Object(n.createRoot)(x).render(Object(s.jsx)(c.StrictMode,{children:Object(s.jsx)(p,{})}))}},[[47,1,2]]]);
//# sourceMappingURL=main.f46aaa3d.chunk.js.map