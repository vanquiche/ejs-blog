(self.webpackChunkejs_blog_v2=self.webpackChunkejs_blog_v2||[]).push([[835],{2156:function(t,e,r){t.exports=r(8482)},5261:function(t,e,r){"use strict";var n=r(6494),i=r(9515),o=r(6579),s=r(546),a=r(3991),l=["projectId","dataset","imageOptions","ignoreUnknownTypes"],u={imageOptions:{},ignoreUnknownTypes:!0};function c(t){return"block"===t._type&&t.listItem}t.exports=function(t,e,r,h){var f=n({},u,e),p=Array.isArray(f.blocks)?f.blocks:[f.blocks],d=s(p),m=o(d,f.listNestMode),g=a(r,f.serializers||{}),y=l.reduce((function(t,e){var r=f[e];return void 0!==r&&(t[e]=r),t}),{});function v(e,r,n,o){return"list"===(p=e)._type&&p.listItem?(a=(s=e).listItem,l=s.level,u=s._key,f=s.children.map(v),t(g.list,{key:u,level:l,type:a,options:y},f)):c(e)?function(e,r){var n=e._key,o=i(e).map(v);return t(g.listItem,{node:e,serializers:g,index:r,key:n,options:y},o)}(e,function(t,e){for(var r=0,n=0;n<e.length;n++){if(e[n]===t)return r;c(e[n])&&r++}return r}(e,n)):function(t){return"string"==typeof t||t.marks||"span"===t._type}(e)?h(e,g,r,{serializeNode:v}):function(e,r,n){var o=i(e).map((function(t,e,r){return v(t,e,r,!0)})),s={key:e._key||"block-".concat(r),node:e,isInline:n,serializers:g,options:y};return t(g.block,s,o)}(e,r,o);var s,a,l,u,f,p}var w=Boolean(f.renderContainerOnSingleChild),k=m.map(v);if(w||k.length>1){var b=f.className?{className:f.className}:{};return t(g.container,b,k)}return k[0]?k[0]:"function"==typeof g.empty?t(g.empty):g.empty}},9515:function(t){"use strict";var e=["strong","em","code","underline","strike-through"];function r(t,e,r){if(!t.marks||0===t.marks.length)return t.marks||[];var i=t.marks.reduce((function(t,n){t[n]=t[n]?t[n]+1:1;for(var i=e+1;i<r.length;i++){var o=r[i];if(!o.marks||!Array.isArray(o.marks)||-1===o.marks.indexOf(n))break;t[n]++}return t}),{}),o=n.bind(null,i);return t.marks.slice().sort(o)}function n(t,r,n){var i=t[r]||0,o=t[n]||0;if(i!==o)return o-i;var s=e.indexOf(r),a=e.indexOf(n);return s!==a?s-a:r<n?-1:r>n?1:0}t.exports=function(t){var e=t.children,n=t.markDefs;if(!e||!e.length)return[];var i=e.map(r),o={_type:"span",children:[]},s=[o];return e.forEach((function(t,e){var r=i[e];if(r){var o=1;if(s.length>1)for(;o<s.length;o++){var a=s[o].markKey,l=r.indexOf(a);if(-1===l)break;r.splice(l,1)}var u,c=function(t){for(var e=t.length-1;e>=0;e--){var r=t[e];if("span"===r._type&&r.children)return r}return}(s=s.slice(0,o));if(r.forEach((function(e){var r={_type:"span",_key:t._key,children:[],mark:n.find((function(t){return t._key===e}))||e,markKey:e};c.children.push(r),s.push(r),c=r})),"span"!==(u=t)._type||"string"!=typeof u.text||!Array.isArray(u.marks)&&void 0!==u.marks)c.children=c.children.concat(t);else{for(var h=t.text.split("\n"),f=h.length;f-- >1;)h.splice(f,0,"\n");c.children=c.children.concat(h)}}else{s[s.length-1].children.push(t)}})),o.children}},546:function(t,e,r){"use strict";var n=r(6494);function i(t){var e=0,r=t.length;if(0===r)return e;for(var n=0;n<r;n++)e=(e<<5)-e+t.charCodeAt(n),e&=e;return e}t.exports=function(t){return t.map((function(t){return t._key?t:n({_key:(e=t,i(JSON.stringify(e)).toString(36).replace(/[^A-Za-z0-9]/g,""))},t);var e}))}},3904:function(t,e,r){"use strict";var n=r(8430),i=r(2885),o=r(6494),s=encodeURIComponent,a="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(n("block-content-image-materializing"));t.exports=function(t){var e=t.node,r=t.options,n=r.projectId,l=r.dataset,u=e.asset;if(!u)throw new Error("Image does not have required `asset` property");if(u.url)return u.url+function(t){var e=t.imageOptions,r=Object.keys(e);if(!r.length)return"";var n=r.map((function(t){return"".concat(s(t),"=").concat(s(e[t]))}));return"?".concat(n.join("&"))}(r);if(!n||!l)throw new Error(a);if(!u._ref)throw new Error("Invalid image reference in block, no `_ref` found on `asset`");return i(o({projectId:n,dataset:l},r.imageOptions||{})).image(e).toString()}},8482:function(t,e,r){"use strict";var n=r(2898),i=r(5261),o=r(3904),s=r(3991);t.exports={blocksToNodes:function(t,e,r,o){if(r)return i(t,e,r,o);var s=n(t);return i(t,e,s.defaultSerializers,s.serializeSpan)},getSerializers:n,getImageUrl:o,mergeSerializers:s}},3991:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var i=r(6494);t.exports=function(t,e){return Object.keys(t).reduce((function(r,o){var s=n(t[o]);return r[o]="function"===s?void 0!==e[o]?e[o]:t[o]:"object"===s?i({},t[o],e[o]):void 0===e[o]?t[o]:e[o],r}),{})}},6579:function(t,e,r){"use strict";var n=r(6494);function i(t){return Boolean(t.listItem)}function o(t,e){return t.level===e.level&&t.listItem===e.listItem}function s(t){return{_type:"list",_key:"".concat(t._key,"-parent"),level:t.level,listItem:t.listItem,children:[t]}}function a(t){return t.children&&t.children[t.children.length-1]}function l(t,e){var r="string"==typeof e.listItem;if("list"===t._type&&t.level===e.level&&r&&t.listItem===e.listItem)return t;var n=a(t);return!!n&&l(n,e)}t.exports=function(t){for(var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",u=[],c=0;c<t.length;c++){var h=t[c];if(i(h))if(e)if(o(h,e))e.children.push(h);else if(h.level>e.level){var f=s(h);if("html"===r){var p=a(e),d=n({},p,{children:p.children.concat(f)});e.children[e.children.length-1]=d}else e.children.push(f);e=f}else if(h.level<e.level){var m=l(u[u.length-1],h);if(m){(e=m).children.push(h);continue}e=s(h),u.push(e)}else if(h.listItem===e.listItem)console.warn("Unknown state encountered for block",h),u.push(h);else{var g=l(u[u.length-1],{level:h.level});if(g&&g.listItem===h.listItem){(e=g).children.push(h);continue}e=s(h),u.push(e)}else e=s(h),u.push(e);else u.push(h),e=null}return u}},2898:function(t,e,r){"use strict";var n=r(6494),i=r(3904);t.exports=function(t,e){var r=e||{useDashedStyles:!1};function o(e,r){return t(e,null,r.children)}return{defaultSerializers:{types:{block:function(e){var r=e.node.style||"normal";return/^h\d/.test(r)?t(r,null,e.children):t("blockquote"===r?"blockquote":"p",null,e.children)},image:function(e){if(!e.node.asset)return null;var r=t("img",{src:i(e)});return e.isInline?r:t("figure",null,r)}},marks:{strong:o.bind(null,"strong"),em:o.bind(null,"em"),code:o.bind(null,"code"),underline:function(e){var n=r.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"};return t("span",{style:n},e.children)},"strike-through":function(e){return t("del",null,e.children)},link:function(e){return t("a",{href:e.mark.href},e.children)}},list:function(e){var r="bullet"===e.type?"ul":"ol";return t(r,null,e.children)},listItem:function(e){var r=e.node.style&&"normal"!==e.node.style?t(e.serializers.types.block,e,e.children):e.children;return t("li",null,r)},block:function(e){var r=e.node,n=e.serializers,i=e.options,o=e.isInline,s=e.children,a=r._type,l=n.types[a];if(!l){if(i.ignoreUnknownTypes)return console.warn('Unknown block type "'.concat(a,'", please specify a serializer for it in the `serializers.types` prop')),t(n.unknownType,{node:r,options:i,isInline:o},s);throw new Error('Unknown block type "'.concat(a,'", please specify a serializer for it in the `serializers.types` prop'))}return t(l,{node:r,options:i,isInline:o},s)},span:function(e){var r=e.node,n=r.mark,i=r.children,o="string"==typeof n?n:n._type,s=e.serializers.marks[o];return s?t(s,e.node,i):(console.warn('Unknown mark type "'.concat(o,'", please specify a serializer for it in the `serializers.marks` prop')),t(e.serializers.unknownMark,null,i))},hardBreak:function(){return t("br")},unknownType:function(e){return t("div",{style:{display:"none"}},'Unknown block type "'.concat(e.node._type,'", please specify a serializer for it in the `serializers.types` prop'))},unknownMark:"span",container:"div",text:void 0,empty:""},serializeSpan:function(e,r,i,o){if("\n"===e&&r.hardBreak)return t(r.hardBreak,{key:"hb-".concat(i)});if("string"==typeof e)return r.text?t(r.text,{key:"text-".concat(i)},e):e;var s;e.children&&(s={children:e.children.map((function(t,r){return o.serializeNode(t,r,e.children,!0)}))});var a=n({},e,s);return t(r.span,{key:e._key||"span-".concat(i),node:a,serializers:r})}}}},8430:function(t){t.exports=function(t){return"https://docs.sanity.io/help/"+t}},1072:function(t,e,r){"use strict";var n=r(7294),i=r(5697),o=r(2156),s=r(8804),a=s.serializers,l=s.serializeSpan,u=s.renderProps,c=o.getImageUrl,h=o.blocksToNodes,f=o.mergeSerializers,p=n.createElement,d=function t(e){var r=f(t.defaultSerializers,e.serializers),n=Object.assign({},u,e,{serializers:r,blocks:e.blocks||[]});return h(p,n,a,l)};d.defaultSerializers=a,d.getImageUrl=c,d.propTypes={className:i.string,renderContainerOnSingleChild:i.bool,ignoreUnknownTypes:i.bool,projectId:i.string,dataset:i.string,imageOptions:i.object,serializers:i.shape({types:i.object,marks:i.object,list:i.func,listItem:i.func,block:i.func,span:i.func}),blocks:i.oneOfType([i.arrayOf(i.shape({_type:i.string.isRequired})),i.shape({_type:i.string.isRequired})]).isRequired},d.defaultProps={ignoreUnknownTypes:!0,renderContainerOnSingleChild:!1,serializers:{},imageOptions:{}},t.exports=d},8804:function(t,e,r){"use strict";var n=r(7294),i=(0,r(2156).getSerializers)(n.createElement),o=i.defaultSerializers,s=i.serializeSpan;t.exports={serializeSpan:s,serializers:o,renderProps:{nestMarks:!0}}},2885:function(t){t.exports=function(){function t(){return t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},t.apply(this,arguments)}function e(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(t){var r=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=e(t)))return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}var i="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function o(t){var e=t.split("-"),r=e[1],n=e[2],o=e[3];if(!r||!n||!o)throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+i+'".');var s=n.split("x"),a=+s[0],l=+s[1];if(!isFinite(a)||!isFinite(l))throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+i+'".');return{id:r,width:a,height:l,format:o}}var s=function(t){return!!t&&"string"==typeof t._ref},a=function(t){return!!t&&"string"==typeof t._id},l=function(t){var e=t;return!(!e||!e.asset)&&"string"==typeof e.asset.url};function u(t){if(!t)return null;var e;if("string"==typeof t&&c(t))e={asset:{_ref:h(t)}};else if("string"==typeof t)e={asset:{_ref:t}};else if(s(t))e={asset:t};else if(a(t))e={asset:{_ref:t._id||""}};else if(l(t))e={asset:{_ref:h(t.asset.url)}};else{if("object"!=typeof t.asset)return null;e=t}var r=t;return r.crop&&(e.crop=r.crop),r.hotspot&&(e.hotspot=r.hotspot),f(e)}function c(t){return/^https?:\/\//.test(""+t)}function h(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function f(e){if(e.crop&&e.hotspot)return e;var r=t({},e);return r.crop||(r.crop={left:0,top:0,bottom:0,right:0}),r.hotspot||(r.hotspot={x:.5,y:.5,height:1,width:1}),r}var p=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function d(e){var r=t({},e||{}),n=r.source;delete r.source;var i=u(n);if(!i)return null;var s=o(i.asset._ref||i.asset._id||""),a=Math.round(i.crop.left*s.width),l=Math.round(i.crop.top*s.height),c={left:a,top:l,width:Math.round(s.width-i.crop.right*s.width-a),height:Math.round(s.height-i.crop.bottom*s.height-l)},h=i.hotspot.height*s.height/2,f=i.hotspot.width*s.width/2,p=i.hotspot.x*s.width,d=i.hotspot.y*s.height,y={left:p-f,top:d-h,right:p+f,bottom:d+h};return r.rect||r.focalPoint||r.ignoreImageParams||r.crop||(r=t(t({},r),g({crop:c,hotspot:y},r))),m(t(t({},r),{},{asset:s}))}function m(t){var e=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,n=e+"/images/"+t.projectId+"/"+t.dataset+"/"+r,i=[];if(t.rect){var o=t.rect,s=o.left,a=o.top,l=o.width,u=o.height;(0!==s||0!==a||u!==t.asset.height||l!==t.asset.width)&&i.push("rect="+s+","+a+","+l+","+u)}t.bg&&i.push("bg="+t.bg),t.focalPoint&&(i.push("fp-x="+t.focalPoint.x),i.push("fp-y="+t.focalPoint.y));var c=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return c&&i.push("flip="+c),p.forEach((function(e){var r=e[0],n=e[1];void 0!==t[r]?i.push(n+"="+encodeURIComponent(t[r])):void 0!==t[n]&&i.push(n+"="+encodeURIComponent(t[n]))})),0===i.length?n:n+"?"+i.join("&")}function g(t,e){var r,n=e.width,i=e.height;if(!n||!i)return{width:n,height:i,rect:t.crop};var o=t.crop,s=t.hotspot,a=n/i;if(o.width/o.height>a){var l=o.height,u=l*a,c=o.top,h=(s.right-s.left)/2+s.left-u/2;h<o.left?h=o.left:h+u>o.left+o.width&&(h=o.left+o.width-u),r={left:Math.round(h),top:Math.round(c),width:Math.round(u),height:Math.round(l)}}else{var f=o.width,p=f/a,d=o.left,m=(s.bottom-s.top)/2+s.top-p/2;m<o.top?m=o.top:m+p>o.top+o.height&&(m=o.top+o.height-p),r={left:Math.max(0,Math.floor(d)),top:Math.max(0,Math.floor(m)),width:Math.round(f),height:Math.round(p)}}return{width:n,height:i,rect:r}}var y=["clip","crop","fill","fillmax","max","scale","min"],v=["top","bottom","left","right","center","focalpoint","entropy"],w=["format"];function k(t){return!!t&&"object"==typeof t.clientConfig}function b(t){for(var e,r=n(p);!(e=r()).done;){var i=e.value,o=i[0],s=i[1];if(t===o||t===s)return o}return t}function O(t){var e=t;if(k(e)){var r=e.clientConfig,n=r.apiHost,i=r.projectId,o=r.dataset;return new x(null,{baseUrl:(n||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:i,dataset:o})}return new x(null,t)}var x=function(){function e(e,r){this.options=t(e?t({},e.options||{}):{},r||{})}var r=e.prototype;return r.withOptions=function(r){var n=r.baseUrl||this.options.baseUrl,i={baseUrl:n};for(var o in r)r.hasOwnProperty(o)&&(i[b(o)]=r[o]);return new e(this,t({baseUrl:n},i))},r.image=function(t){return this.withOptions({source:t})},r.dataset=function(t){return this.withOptions({dataset:t})},r.projectId=function(t){return this.withOptions({projectId:t})},r.bg=function(t){return this.withOptions({bg:t})},r.dpr=function(t){return this.withOptions({dpr:t})},r.width=function(t){return this.withOptions({width:t})},r.height=function(t){return this.withOptions({height:t})},r.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},r.maxWidth=function(t){return this.withOptions({maxWidth:t})},r.minWidth=function(t){return this.withOptions({minWidth:t})},r.maxHeight=function(t){return this.withOptions({maxHeight:t})},r.minHeight=function(t){return this.withOptions({minHeight:t})},r.size=function(t,e){return this.withOptions({width:t,height:e})},r.blur=function(t){return this.withOptions({blur:t})},r.sharpen=function(t){return this.withOptions({sharpen:t})},r.rect=function(t,e,r,n){return this.withOptions({rect:{left:t,top:e,width:r,height:n}})},r.format=function(t){return this.withOptions({format:t})},r.invert=function(t){return this.withOptions({invert:t})},r.orientation=function(t){return this.withOptions({orientation:t})},r.quality=function(t){return this.withOptions({quality:t})},r.forceDownload=function(t){return this.withOptions({download:t})},r.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},r.flipVertical=function(){return this.withOptions({flipVertical:!0})},r.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},r.fit=function(t){if(-1===y.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},r.crop=function(t){if(-1===v.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},r.saturation=function(t){return this.withOptions({saturation:t})},r.auto=function(t){if(-1===w.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},r.pad=function(t){return this.withOptions({pad:t})},r.url=function(){return d(this.options)},r.toString=function(){return this.url()},e}();return O}()}}]);
//# sourceMappingURL=22b27364a37aea564a06b202c3c1e93b567b9ace-dcbe28d6b727d006c9e5.js.map