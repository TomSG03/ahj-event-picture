(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.host=t,this.init()}var n,r,i;return n=e,(r=[{key:"init",value:function(){this.host.addEventListener("click",(function(t){"delete"===t.target.className&&t.target.parentElement.remove()}))}},{key:"addFlow",value:function(t){var e=document.createElement("div");e.classList="picture",e.innerHTML='<div class="delete"></div>',e.append(t),this.host.append(e),this.host.scrollLeft=this.host.scrollWidth}}])&&t(n.prototype,r),i&&t(n,i),e}();function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}new(function(){function t(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.host=n,this.flow=new e(n.querySelector("[data-flow=picture]")),this.link=this.host.querySelectorAll("input"),this.addButton=this.host.querySelector("[data-button=add]"),this.error=this.host.querySelector("[data-error=URL]")}var r,o,a;return r=t,(o=[{key:"createBox",value:function(t,e){var n=this;this.error.style.visibility="hidden";var r=document.createElement("img");r.src=t,r.alt=e,r.title=e,r.addEventListener("error",(function(){n.showError()})),r.addEventListener("load",(function(){n.clearInput(),n.flow.addFlow(r)}))}},{key:"showError",value:function(){this.error.style.visibility="visible"}},{key:"start",value:function(){var t=this;this.link[1].addEventListener("keydown",(function(e){"Enter"===e.key&&t.evenAdd()})),this.addButton.addEventListener("click",(function(){t.evenAdd()}))}},{key:"evenAdd",value:function(){this.createBox(this.link[1].value,this.link[0].value)}},{key:"clearInput",value:function(){n(this.link).forEach((function(t){t.value=""}))}}])&&i(r.prototype,o),a&&i(r,a),t}())(document.getElementById("galery")).start()})();