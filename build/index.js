(()=>{"use strict";var e,t={189:(e,t,o)=>{const r=window.wp.blocks,n=(window.wp.blockLibrary,window.wp.i18n,window.wp.blockEditor),i=(window.wp.hooks,o.p+"images/profile.8b9afe06.jpg"),s=window.ReactJSXRuntime;wp.domReady((()=>{const{updateCategory:e}=wp.blocks;wp.blocks.unregisterBlockStyle("core/image","rounded"),wp.blocks.registerBlockStyle("core/image",{name:"rounded",label:"Rounded"});const t=wp.blocks.getBlockType("core/image");t&&(wp.blocks.unregisterBlockType("core/image"),wp.blocks.registerBlockType("core/image",{...t,supports:{...t.supports,border:{color:!0,radius:!0,style:!0,width:!0,__experimentalDefaultControls:{color:!0,radius:!0,style:!0,width:!0}}}}))}));const a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"imagewize/about-block","version":"0.1.0","title":"About Block","category":"text","icon":"columns","description":"About section with image and text","example":{},"supports":{"html":false,"color":{"background":true,"text":true},"spacing":{"margin":true,"padding":true},"typography":{"fontSize":true,"lineHeight":true},"align":["wide","full"]},"attributes":{"backgroundColor":{"type":"string","default":"#ebeced"},"textColor":{"type":"string","default":"#98999a"},"style":{"type":"object"},"innerBlocks":{"core/image":{"supports":{"border":true,"color":{"text":true,"background":true,"border":true}}}}},"textdomain":"about-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');(0,r.registerBlockType)(a.name,{...a,edit:function({attributes:e,setAttributes:t}){const{backgroundColor:o,textColor:r}=e,a=[["core/group",{style:{color:{background:"#ebeced"}},layout:{type:"constrained"}},[["core/spacer",{height:"60px"}],["core/columns",{layout:{type:"constrained"}},[["core/column",{width:"20%",style:{spacing:{padding:{top:"1rem"}}}},[["core/image",{className:"aligncenter",url:i,alt:"Profile Image"}]]],["core/column",{width:"80%"},[["core/heading",{fontSize:"3xl",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',fontStyle:"normal",fontWeight:"400"},color:{text:"#000000"}},content:"Custom Crafted Websites & E-Commerce."}],["core/paragraph",{fontSize:"lg",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',lineHeight:1.6},color:{text:"#98999a"}},content:"At Imagewize, we empower SMEs and startups by delivering custom web and e-commerce solutions. With expertise in web design, development, and SEO, every project is tailored to meet your unique needs and drive success. This site is dedicated to helping businesses grow online with customized, high-performance solutions."}],["core/paragraph",{fontSize:"base",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',lineHeight:2},color:{text:"#98999a"}},content:"Imagewize began as a passion project in 2016 and has grown into a full-service web solutions provider. Our mission is to craft stunning websites, build powerful e-commerce platforms with WooCommerce, and implement cutting-edge SEO strategies, including technical SEO. Whether you need a custom WordPress site or a tailored WooCommerce solution, we deliver exceptional results designed to help your business thrive online."}]]]]],["core/spacer",{height:"60px"}]]]],l=(0,n.useBlockProps)();return(0,s.jsx)("div",{...l,children:(0,s.jsx)(n.InnerBlocks,{template:a})})},save:function({attributes:e}){const{backgroundColor:t,textColor:o}=e,r=n.useBlockProps.save({className:"has-background wp-block-group",style:{backgroundColor:t,color:o}});return(0,s.jsx)("div",{...r,children:(0,s.jsx)("div",{className:"wp-block-group__inner-container",children:(0,s.jsx)(n.InnerBlocks.Content,{})})})}})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,o,n,i)=>{if(!o){var s=1/0;for(p=0;p<e.length;p++){for(var[o,n,i]=e[p],a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(p--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[o,n,i]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[s,a,l]=o,c=0;if(s.some((t=>0!==e[t]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var p=l(r)}for(t&&t(o);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(p)},o=globalThis.webpackChunkabout_block=globalThis.webpackChunkabout_block||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[350],(()=>r(189)));n=r.O(n)})();