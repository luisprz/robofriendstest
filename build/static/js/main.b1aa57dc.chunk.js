(this.webpackJsonprobofriendsv2=this.webpackJsonprobofriendsv2||[]).push([[0],[,,,,,function(e,a,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,a,n){e.exports=n(16)},,,,,function(e,a,n){},,function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);var l=n(3),s=n(4),m=n(7),c=n(6),u=n(5),d=n.n(u),h=(n(15),[{id:1,name:"Luis Perez",username:"Luisprz",email:"luisperez@klk.com"},{id:2,name:"isaazz",username:"isaazz",email:"isaazz@isaazz.isaazz"},{id:3,name:"El engel",username:"Engel",email:"Engel@yesenia.net"},{id:4,name:"Roman el celdo",username:"Roman",email:"Roman@klk.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Robenmy",username:"Robenmy",email:"klk@klk.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),g=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"bg-light-green dib br3 pa3 ma2 shadow-3",type:"search",placeholder:"Search for robots",onChange:a}))},p=function(e){var a=e.username,n=e.email,t=e.id,i=e.name;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow shadow-3"},r.a.createElement("div",null,r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"}")}),r.a.createElement("div",null,r.a.createElement("p",null,t),r.a.createElement("p",null,i),r.a.createElement("p",null,n),r.a.createElement("h2",null,a))))},b=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(p,{key:a[n].id,id:a[n].id,username:a[n].username,email:a[n].email,name:a[n].name})})))},f=function(e){Object(m.a)(n,e);var a=Object(c.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:h,searchfield:""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return console.log(a),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robofriends"),r.a.createElement(g,{searchChange:this.onSearchChange})," ",r.a.createElement(b,{robots:a})," "),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Luis Perez")))}}]),n}(t.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b1aa57dc.chunk.js.map