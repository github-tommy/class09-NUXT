(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(t,e,n){var content=n(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("02309eca",content,!0,{sourceMap:!1})},178:function(t,e,n){"use strict";var o=n(148);n.n(o).a},179:function(t,e,n){(t.exports=n(33)(!1)).push([t.i,".container[data-v-5c067a86]{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title[data-v-5c067a86]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-5c067a86]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-5c067a86]{padding-top:15px}",""])},194:function(t,e,n){"use strict";n.r(e);n(18);var o=n(147),c=n.n(o),r={data:function(){return{posts:{},day:(new Date).getDate(),month:(new Date).getMonth()+1}},created:function(){var t=this;c.a.get("https://newsapi.org/v2/everything?q=mortgage&from=2019-0".concat(this.month,"-").concat(this.day-7,"&to=2019-0").concat(this.month,"-").concat(this.day,"&sortBy=relevancy&pageSize=100&apiKey=2b11e9d152424d8e8c4c3f0310e953a5")).then(function(e){t.posts=e.data.articles}).catch(function(e){t.errors.push(e)}).finally(function(){return t.loading=!0})}},l=(n(178),n(13)),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("h1",[t._v("Latest News Update:")]),n("br"),t._v(" "),t._l(t.posts,function(article){return n("section",[n("h2",[t._v(t._s(article.title))]),t._v(" "),n("h3",[t._v("by "+t._s(article.author))]),t._v(" "),n("p",[t._v(t._s(article.description))]),t._v(" "),n("br")])})],2)},[],!1,null,"5c067a86",null);e.default=component.exports}}]);