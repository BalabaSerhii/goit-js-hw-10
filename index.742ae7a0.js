!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=i),i.register("bOlkj",(function(n,t){e(n.exports,"fetchBreeds",(function(){return i})),e(n.exports,"fetchCatByBreed",(function(){return o}));var r="live_A0BddCBCvw3bx0QQ33fvXeI93mVx6l59VBUsyj7uHjfZvkQnUvjiGTaolms8FVAg";function i(){return fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":r}}).then((function(e){return e.json()}))}function o(e){var n="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(e,"&api_key=").concat(r);return fetch(n,{headers:{"x-api-key":r}}).then((function(e){return e.json()})).then((function(e){return e[0]}))}})),i("bOlkj")}();
//# sourceMappingURL=index.742ae7a0.js.map
