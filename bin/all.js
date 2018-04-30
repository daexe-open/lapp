var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(n){return function(t){return(void 0===t?"undefined":e(t))===n}},t=function(e){return function(n){return n.type===e}},r=function(e){return n("undefined")(e)&&void 0==e},o=n("string"),i=n("boolean"),u=n("number"),a=function(e){return e.toString().match("function")},c=function(e){return e.toString().match("class ")},l=function(e){return null===e},f=t("native"),d=t("thunk"),s=t("text"),p=Array.isArray,h=function(e){return"Object"==Object.prototype.toString.call(e).slice(8,-1)},v=function(e,n){return e.fn===n.fn},y=function(e){return["svg","path","animate"].indexOf(e)>=0},b=function(e){return/^on/.test(e)},m=function(e){return e.slice(2).toLowerCase()},g=function n(t,r){var o={};return Object.keys(t).forEach(function(i){o[r+"."+i]=t[i],"object"==e(t[i])&&(o=Object.assign(o,n(t[i],r+"."+i)))}),o},O=function(e,n){var t=-1,r=e.reverse().find(function(e,r){if(e.fn&&e.fn.toString().match(n))return t=r,!0});return{index:t,children:r}},w=function e(n){var t;if(h(n))t={};else{if(!p(n))return n;t=[]}for(var r in n){var o=n[r];h(o)?t[r]=e(o):p(o)?t[r]=e(o):t[r]=n[r]}return t};function j(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function _(e){for(var n=arguments,t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=n[o];var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e)return r=Array.prototype.reduce.call(r,N,[]),a(e)?E(e,i,r,e):{type:"native",tagName:e,attributes:i,children:r}}function E(e,n,t,r){return{type:"thunk",fn:e,props:n,children:t,options:r}}function k(e){return{type:e?"text":"empty",nodeValue:e}}function N(e,n){return o(n)||u(n)?e.push(k(n)):l(n)||r(n)?e.push(k()):p(n)?e=[].concat(j(e),j(n.reduce(N,[]))):e.push(n),e}var A=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function x(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var P=function(){function e(){x(this,e)}return A(e,[{key:"$update",value:function(e){e&&e()}},{key:"render",value:function(){}}]),e}();function C(e,n,t,r){t?(e[r](n,t),e[n]=!0):(e[r](n),e[n]=!1)}function S(e,n,t,r){b(n)||("className"===n?e[r]("class",t):i(t)?C(e,n,t,r):void 0!=t&&(""+t).length?e[r](n,t):e.removeAttribute(n))}function V(e,n,t,r){t?r&&t===r||S(e,n,t,"setAttribute"):S(e,n,i(t)?t:r,"removeAttribute")}function $(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object.assign({},t,n);Object.keys(r).forEach(function(r){!b(r)&&V(e,r,n[r],t[r])})}function T(e,n){n&&Object.keys(n).forEach(function(t){b(t)&&e.addEventListener(m(t),n[t])})}function R(e){var n=o(e)||u(e)?e:"";return document.createTextNode(n)}function L(e,n){var t=e.props,r=e.children,o=e.options.onCreate,i={children:r,props:t},u=void 0,a=void 0;if(c(e.fn))u=(a=new e.fn).render(i),a.$update=a.$update.bind(this,function(){n&&n("updateAll")});else try{u=e.fn(i)}catch(t){u=(a=new e.fn).render(i),a.$update=a.$update.bind(this,function(){n&&n("updateAll")})}if(!u)return"";var l=I(u);return T(l,u.attributes),o&&o(i),e.state={vnode:u,$ins:a,model:i},l}function F(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function q(e,n){var t=y(e.tagName)?F(e.tagName):document.createElement(e.tagName);return e.attributes&&$(t,e.attributes),e.attributes&&T(t,e.attributes),e.children.map(function(e){return I(e,n)}).forEach(t.appendChild.bind(t)),t}function H(){return document.createElement("noscript")}function I(e,n){if(!l(e)&&!r(e))switch(e.type){case"text":return R(e.nodeValue);case"thunk":return L(e,n);case"empty":return H();case"native":return q(e,n)}}function M(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(e)return n===t&&"thunk"!=n.type?e:!r(n)&&r(t)?B(e,n,t,o):r(n)&&!r(t)?(e.appendChild(I(t)),e):!l(n)&&l(t)||l(n)&&!l(t)?D(e,n,t,o):n.type!==t.type?D(e,n,t,o):f(t)?n.tagName!==t.tagName?D(e,n,t,o):($(e.childNodes[o],t.attributes,n.attributes),J(e,n,t,o)):s(t)?(n.nodeValue!==t.nodeValue&&(e.childNodes[o].nodeValue=t.nodeValue),e):d(t)?v(n,t)?K(e,n,t,o):Q(e,n,t,o):void 0}function z(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return!r(n)&&r(t)?B(e,n,t,o):r(n)&&!r(t)?(e.appendChild(I(t)),e):!l(n)&&l(t)||l(n)&&!l(t)||n.type!==t.type?D(e,n,t,o):f(t)?n.tagName!==t.tagName?D(e,n,t,o):($(e.childNodes[o],t.attributes,n.attributes),J(e,n,t,o)):s(t)?(n.nodeValue!==t.nodeValue&&(e.childNodes[o].nodeValue=t.nodeValue),e):d(t)?v(n,t)?K(e,n,t,o):Q(e,n,t,o):void 0}function B(e,n,t,r){G(n),e.removeChild(e.childNodes[r])}function D(e,n,t,r){var o=I(t);return G(n),e.replaceChild(o,e.childNodes[r]),o}function G(e){for(;d(e);){var n=e.options.onRemove,t=e.state.model;n&&n(t),e=e.state.vnode}e.children&&e.children.forEach(G)}function J(e,n,t,r){var o=n.children||[],i=t.children||[],u=void 0,a=Array.prototype.slice.call(e.childNodes);for(u=0;u<o.length||u<i.length;u++)M(a[r],o[u],i[u],u);return e}function K(e,n,t,r){var o=t.props,i={children:t.children,props:o},u=void 0;if(c(t.fn))u=n.state.$ins.render(i);else try{u=t.fn(i)}catch(e){u=n.state.$ins.render(i)}return M(e,n.state.vnode,u,r),t.state={vnode:u,$ins:n.state.$ins,model:i},e}function Q(){return K.apply(null,arguments)}function U(e,n){var t=this,r=n||{node:null,oldNode:null,ins:null},o=r.node,i=r.oldNode,u=r.ins;e="string"==typeof e?document.querySelector(e):e;var a=function(n){return"updateAll"==n&&function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;try{n=u&&u.render()}catch(e){}z(t,i,n),i=n}()};return n||(e.innerHTML=""),function(n){var r=n;if(r.children&&!r.children.length){var c=r,l=c.props,f={children:c.children,props:l};r=r.fn(f)}return"render"in n&&(r=n.render(),u=n,n.$update=n.$update.bind(t,function(){a("updateAll")})),o?function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return M(arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i,n),{node:o,oldNode:i=n,ins:u}}(r):function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return o=I(n,a),t.appendChild(o),{node:o,oldNode:i=n,ins:u}}(r)}}var W=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function X(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Y(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function Z(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var ee=function(e){function n(){return X(this,n),Y(this,(n.__proto__||Object.getPrototypeOf(n)).call(this))}return Z(n,P),W(n,[{key:"render",value:function(e){var n=e.props,t=e.children,r=w(t),o=O(t,"else");o.index>=0&&r.splice(o.index,1);var i=w(n);return delete i.cond,n.cond?_("div",i,r):_("div",i,o.children)}}]),n}(),ne=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function te(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function re(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function oe(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var ie=function(e){function n(){return te(this,n),re(this,(n.__proto__||Object.getPrototypeOf(n)).call(this))}return oe(n,P),ne(n,[{key:"handlePath",value:function(e,n){var t=e.match(/__(.*?)__/g),r="";return t&&t.forEach(function(t){r=n[t.substring(2,t.length-2)],e=e.replace(t,void 0===r?"":r)}),e}},{key:"handleAttribute",value:function(e,n){var t=this;Object.keys(e).forEach(function(r){e[r]=t.handlePath(e[r],n)})}},{key:"handleChildren",value:function(e,n){var t=this;return e.forEach(function(e){e.nodeValue&&(e.nodeValue=t.handlePath(e.nodeValue,n)),e.attributes&&t.handleAttribute(e.attributes,n),e.children&&t.handleChildren(e.children,n)}),e}},{key:"render",value:function(e){var n=this,t=e.props,r=e.children;if(t.data){var o="",i=[];t.data.forEach(function(e,u){e.index=u,o=g(e,t.key||"item"),i=i.concat(n.handleChildren(w(r),o))});var u=w(t);return delete u.data,delete u.key,_("div",u,i)}return""}}]),n}(),ue=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function ae(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function ce(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function le(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var fe=function(e){function n(){return ae(this,n),ce(this,(n.__proto__||Object.getPrototypeOf(n)).call(this))}return le(n,P),ue(n,[{key:"render",value:function(e){var n=e.props,t=e.children;if(n&&Object.keys(n).indexOf("cond")>=0){var r=O(t,"else"),o=t;if(r.index>=0)w(t).splice(r.index,1);var i=w(n);return delete i.cond,n.cond?_("div",i,o):_("div",i,r.children)}return _("div",n,t)}}]),n}(),de=_,se=P,pe=ee,he=ie,ve=fe,ye=function(e){for(var n=arguments,t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=n[o];return function(){if("render"in r[0])U(e)(r[0]);else{var n=U(e)(_(r[0],null));r.map(function(t){t.$update=function(){n=U(e,n)(_(r[0],null))}})}}()};export{de as l,se as component,pe as IF,he as FOR,ve as ELSE,ye as app};