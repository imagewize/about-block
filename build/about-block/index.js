(()=>{"use strict";var e,r={585:()=>{const e=window.wp.blocks,r=(window.wp.i18n,window.wp.blockEditor),o=window.ReactJSXRuntime,n=JSON.parse('{"UU":"create-block/about-block"}');(0,e.registerBlockType)(n.UU,{edit:function(){return(0,o.jsx)("div",{...(0,r.useBlockProps)(),children:(0,o.jsx)(r.InnerBlocks,{template:[["core/group",{},[["core/columns",{},[["core/column",{},[["core/image",{}]]],["core/column",{},[["core/heading",{placeholder:"Enter heading..."}],["core/paragraph",{placeholder:"Enter content..."}]]]]]]]],templateLock:"all"})})},save:function(){return(0,o.jsx)("div",{...r.useBlockProps.save(),children:(0,o.jsx)(r.InnerBlocks.Content,{})})}})}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={exports:{}};return r[e](c,c.exports,n),c.exports}n.m=r,e=[],n.O=(r,o,t,c)=>{if(!o){var l=1/0;for(p=0;p<e.length;p++){for(var[o,t,c]=e[p],a=!0,i=0;i<o.length;i++)(!1&c||l>=c)&&Object.keys(n.O).every((e=>n.O[e](o[i])))?o.splice(i--,1):(a=!1,c<l&&(l=c));if(a){e.splice(p--,1);var s=t();void 0!==s&&(r=s)}}return r}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[o,t,c]},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={667:0,731:0};n.O.j=r=>0===e[r];var r=(r,o)=>{var t,c,[l,a,i]=o,s=0;if(l.some((r=>0!==e[r]))){for(t in a)n.o(a,t)&&(n.m[t]=a[t]);if(i)var p=i(n)}for(r&&r(o);s<l.length;s++)c=l[s],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(p)},o=globalThis.webpackChunkabout_block=globalThis.webpackChunkabout_block||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var t=n.O(void 0,[731],(()=>n(585)));t=n.O(t)})();