!function(e){var t=wx.__installedModules=wx.__installedModules||{};function n(i){if(t[i])return t[i].exports;var l=wx.__installedModules[i]=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(i,l,function(t){return e[t]}.bind(null,l));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=97)}({97:function(e,t,n){"use strict";var i;Component({properties:{titleWidth:{type:Number,value:null}},relations:(i={},i["../cell/index"]={type:"child",linked:function(){this._updateIsLastElement("../cell/index")},linkChanged:function(){this._updateIsLastElement("../cell/index")},unlinked:function(){this._updateIsLastElement("../cell/index")}},i["../field/index"]={type:"child",linked:function(){this._updateIsLastElement("../field/index")},linkChanged:function(){this._updateIsLastElement("../field/index")},unlinked:function(){this._updateIsLastElement("../field/index")}},i),data:{elementUpdateTimeout:0},methods:{_updateIsLastElement:function(e){var t=this;if(!(this.data.elementUpdateTimeout>0)){var n=setTimeout(function(){t.setData({elementUpdateTimeout:0});var n=t.getRelationNodes(e),i=t.properties.titleWidth;if(n.length>0){var l=n.length-1;n.forEach(function(e,t){i&&e.setTitleWidth(i),e.updateIsLastElement(t===l)})}});this.setData({elementUpdateTimeout:n})}}}})}});