(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(7),r=a.n(n),l=a(0),o=a.n(l),i=a(149),s=a(158),c=a(152),m=a(153),p=a(150),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(m.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),o.a.createElement(s.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug,n=t.frontmatter.tags||[],r=t.frontmatter.image||"";return"Resume"!==a&&o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},o.a.createElement(i.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("section",null,o.a.createElement("figure",null,o.a.createElement("img",{src:r}))),o.a.createElement("div",null,n.map(function(e,t){return o.a.createElement("span",{key:e+t,style:{fontSize:"12px",border:"solid 1px rgb(107, 177, 228)",padding:"3px 5px",borderRadius:"6px",color:"rgb(107, 177, 228)",marginRight:"7px"}},e)})),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(o.a.Component);t.default=u;var d="1002668166"}}]);
//# sourceMappingURL=component---src-pages-index-js-636c58e8a1cac6bbed7b.js.map