module.exports=function(o,e,t){void 0===e&&(e="top"),void 0===t&&(t=0);var i=window.innerHeight,n=o.getBoundingClientRect().top,r=o.offsetHeight,d=n+r/2,s=n+r;return!!(("top"===e.toLowerCase()?n:"middle"===e.toLowerCase()?d:"bottom"===e.toLowerCase()?s:n)+i*(t/100)<=i&&s>=0)};
//# sourceMappingURL=element-in-view.js.map
