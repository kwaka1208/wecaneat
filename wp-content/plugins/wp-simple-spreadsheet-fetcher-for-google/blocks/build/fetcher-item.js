!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=25)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.blockEditor}()},18:function(e,t){!function(){e.exports=this.wp.blocks}()},25:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(3),l=n(18),i=n(4),a=n(1);Object(l.registerBlockType)("wp2s2fg/fetcher-item",{title:Object(o.__)("Fetcher Item","wp-simple-spreadsheet-fetcher-for-google"),parent:[["wp2s2fg/fetcher"],["wp2s2fg/fetcher-advanced"]],icon:"smiley",category:"wp2s2fg-blocks-cat",supports:{className:!0,html:!1,inserter:!1},attributes:{className:{type:"string",default:""},sheetId:{type:"string",default:""},sheetName:{type:"string",default:""},sheetRange:{type:"string",default:""},range:{type:"string",default:""}},edit:function(e){var t=e.attributes,n=e.setAttributes,l=t.range,c=t.sheetId,s=t.sheetName,u=t.sheetRange;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.InspectorControls,null,Object(r.createElement)(i.PanelBody,{title:Object(o.__)("Fetch Data Setting","wp-simple-spreadsheet-fetcher-for-google"),initialOpen:!0},l?Object(r.createElement)(i.TextControl,{label:Object(o.__)("Please set the cell to fetch data in A1 notation. Example : Sheets1!A1","wp-simple-spreadsheet-fetcher-for-google"),value:l,onChange:function(e){return n({range:void 0===e?"none":e})},initialOpen:!0}):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.TextControl,{label:Object(o.__)("Sheet URL","wp-simple-spreadsheet-fetcher-for-google"),value:c,onChange:function(e){return n({sheetId:void 0===e?"none":e})},initialOpen:!0}),Object(r.createElement)(i.TextControl,{label:Object(o.__)("Sheet Name","wp-simple-spreadsheet-fetcher-for-google"),value:s,onChange:function(e){return n({sheetName:void 0===e?"none":e})},initialOpen:!0}),Object(r.createElement)(i.TextControl,{label:Object(o.__)("Cell","wp-simple-spreadsheet-fetcher-for-google"),value:u,onChange:function(e){return n({sheetRange:void 0===e?"none":e})},initialOpen:!0})))),Object(r.createElement)(i.ServerSideRender,{block:"wp2s2fg/fetcher-item",attributes:t}))},save:function(){return null}})},3:function(e,t){!function(){e.exports=this.wp.i18n}()},4:function(e,t){!function(){e.exports=this.wp.components}()}});