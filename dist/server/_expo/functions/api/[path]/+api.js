var __BUNDLE_START_TIME__=this.nativePerformanceNow?nativePerformanceNow():Date.now(),__DEV__=false,__METRO_GLOBAL_PREFIX__='';
!(function(e){"use strict";e.__r=i,e[`${__METRO_GLOBAL_PREFIX__}__d`]=function(e,n,o){if(null!=t[n])return;const i={dependencyMap:o,factory:e,hasError:!1,importedAll:r,importedDefault:r,isInitialized:!1,publicModule:{exports:{}}};t[n]=i},e.__c=o,e.__registerSegment=function(e,r,n){p[e]=r,n&&n.forEach((r=>{t[r]||h.has(r)||h.set(r,e)}))};var t=o();const r={},{hasOwnProperty:n}={};function o(){return t=Object.create(null)}function i(e){const r=e,n=t[r];return n&&n.isInitialized?n.publicModule.exports:d(r,n)}function l(e){const n=e;if(t[n]&&t[n].importedDefault!==r)return t[n].importedDefault;const o=i(n),l=o&&o.__esModule?o.default:o;return t[n].importedDefault=l}function u(e){const o=e;if(t[o]&&t[o].importedAll!==r)return t[o].importedAll;const l=i(o);let u;if(l&&l.__esModule)u=l;else{if(u={},l)for(const e in l)n.call(l,e)&&(u[e]=l[e]);u.default=l}return t[o].importedAll=u}i.importDefault=l,i.importAll=u,i.context=function(){throw new Error("The experimental Metro feature `require.context` is not enabled in your project.")},i.resolveWeak=function(){throw new Error("require.resolveWeak cannot be called dynamically.")};let c=!1;function d(t,r){if(!c&&e.ErrorUtils){let n;c=!0;try{n=_(t,r)}catch(t){e.ErrorUtils.reportFatalError(t)}return c=!1,n}return _(t,r)}const a=16,s=65535;function f(e){return{segmentId:e>>>a,localId:e&s}}i.unpackModuleId=f,i.packModuleId=function(e){return(e.segmentId<<a)+e.localId};const p=[],h=new Map;function _(r,n){if(!n&&p.length>0){const e=h.get(r)??0,o=p[e];null!=o&&(o(r),n=t[r],h.delete(r))}const o=e.nativeRequire;if(!n&&o){const{segmentId:e,localId:i}=f(r);o(i,e),n=t[r]}if(!n)throw m(r);if(n.hasError)throw n.error;n.isInitialized=!0;const{factory:c,dependencyMap:d}=n;try{const t=n.publicModule;return t.id=r,c(e,i,l,u,t,t.exports,d),n.factory=void 0,n.dependencyMap=void 0,t.exports}catch(e){throw n.hasError=!0,n.error=e,n.isInitialized=!1,n.publicModule.exports=void 0,e}}function m(e){return Error('Requiring unknown module "'+e+'".')}})('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
!(function(e){e.$$require_external=require})('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
'undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window&&window;
!(function(r){let n=0,t=function(r,n){throw r};const l={setGlobalHandler(r){t=r},getGlobalHandler:()=>t,reportError(r){t&&t(r,!1)},reportFatalError(r){t&&t(r,!0)},applyWithGuard(r,t,e,o,a){try{return n++,r.apply(t,e)}catch(r){l.reportError(r)}finally{n--}return null},applyWithGuardIfNeeded:(r,n,t)=>l.inGuard()?r.apply(n,t):(l.applyWithGuard(r,n,t),null),inGuard:()=>!!n,guard(r,n,t){if('function'!=typeof r)return console.warn('A function must be passed to ErrorUtils.guard, got ',r),null;const e=n??r.name??'<generated guard>';return function(...n){return l.applyWithGuard(r,t??this,n,null,e)}}};r.ErrorUtils=l})('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
__d((function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.GET=async function(n,{path:o}){return new Response(`Hello ${o}`)}}),5492,[]);
module.exports = __r(5492);