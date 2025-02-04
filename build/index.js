(()=>{"use strict";var e,t={378:(e,t,o)=>{const r=window.wp.blocks,i=(window.wp.blockLibrary,window.wp.i18n,window.wp.blockEditor),n=window.wp.hooks,s=(window.wp.compose,o.p+"images/profile.8b9afe06.jpg"),a=window.ReactJSXRuntime;(0,n.addFilter)("blocks.registerBlockType","imagewize/image-border-support",((e,t)=>"core/image"!==t?e:{...e,supports:{...e.supports,border:!0}}));const l=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"imagewize/about-block","version":"0.1.0","title":"About Block","category":"text","icon":"columns","description":"About section with image and text","example":{},"supports":{"html":false,"color":{"background":true,"text":true},"spacing":{"margin":true,"padding":true},"typography":{"fontSize":true,"lineHeight":true},"align":["wide","full"],"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true}},"attributes":{"backgroundColor":{"type":"string","default":"#ebeced"},"textColor":{"type":"string","default":"#98999a"},"style":{"type":"object"}},"textdomain":"about-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');(0,r.registerBlockType)(l.name,{...l,edit:function({attributes:e,setAttributes:t}){const{backgroundColor:o,textColor:r}=e,n=[["core/group",{style:{color:{background:"#ebeced"}},layout:{type:"constrained"}},[["core/spacer",{height:"60px"}],["core/columns",{layout:{type:"constrained"}},[["core/column",{width:"20%",style:{spacing:{padding:{top:"1rem"}}}},[["core/image",{className:"is-style-rounded aligncenter",url:s,alt:"Profile Image",style:{border:{width:"8px",color:"rgba(203,203,203,1)",radius:"9999px"}}}]]],["core/column",{width:"80%"},[["core/heading",{fontSize:"3xl",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',fontStyle:"normal",fontWeight:"400"},color:{text:"#000000"}},content:"Custom Crafted Websites & E-Commerce."}],["core/paragraph",{fontSize:"lg",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',lineHeight:1.6},color:{text:"#98999a"}},content:"At Imagewize, we empower SMEs and startups by delivering custom web and e-commerce solutions. With expertise in web design, development, and SEO, every project is tailored to meet your unique needs and drive success. This site is dedicated to helping businesses grow online with customized, high-performance solutions."}],["core/paragraph",{fontSize:"base",style:{typography:{fontFamily:'var(--wp--preset--font-family--open-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif)',lineHeight:2},color:{text:"#98999a"}},content:"Imagewize began as a passion project in 2016 and has grown into a full-service web solutions provider. Our mission is to craft stunning websites, build powerful e-commerce platforms with WooCommerce, and implement cutting-edge SEO strategies, including technical SEO. Whether you need a custom WordPress site or a tailored WooCommerce solution, we deliver exceptional results designed to help your business thrive online."}]]]]],["core/spacer",{height:"60px"}]]]],l=(0,i.useBlockProps)();return(0,a.jsx)("div",{...l,children:(0,a.jsx)(i.InnerBlocks,{template:n})})},save:function({attributes:e}){const{backgroundColor:t,textColor:o}=e,r=i.useBlockProps.save({className:"has-background wp-block-group",style:{backgroundColor:t,color:o}});return(0,a.jsx)("div",{...r,children:(0,a.jsx)("div",{className:"wp-block-group__inner-container",children:(0,a.jsx)(i.InnerBlocks.Content,{})})})}})}},o={};function r(e){var i=o[e];if(void 0!==i)return i.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,o,i,n)=>{if(!o){var s=1/0;for(p=0;p<e.length;p++){for(var[o,i,n]=e[p],a=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(a=!1,n<s&&(s=n));if(a){e.splice(p--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[o,i,n]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var i,n,[s,a,l]=o,c=0;if(s.some((t=>0!==e[t]))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(l)var p=l(r)}for(t&&t(o);c<s.length;c++)n=s[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(p)},o=globalThis.webpackChunkabout_block=globalThis.webpackChunkabout_block||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=r.O(void 0,[350],(()=>r(378)));i=r.O(i)})();