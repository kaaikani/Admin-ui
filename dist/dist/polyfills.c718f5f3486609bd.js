"use strict";(self.webpackChunkvendure_admin=self.webpackChunkvendure_admin||[]).push([[461],{7096:(ee,J,ve)=>{ve(6862)},6862:()=>{const ee=globalThis;function J(e){return(ee.__Zone_symbol_prefix||"__zone_symbol__")+e}const Ee=Object.getOwnPropertyDescriptor,Le=Object.defineProperty,Ie=Object.getPrototypeOf,_t=Object.create,Et=Array.prototype.slice,Me="addEventListener",Ze="removeEventListener",Ae=J(Me),je=J(Ze),ae="true",le="false",Pe=J("");function He(e,n){return Zone.current.wrap(e,n)}function xe(e,n,a,t,c){return Zone.current.scheduleMacroTask(e,n,a,t,c)}const A=J,Ce=typeof window<"u",Te=Ce?window:void 0,Y=Ce&&Te||globalThis,Tt="removeAttribute";function Ve(e,n){for(let a=e.length-1;a>=0;a--)"function"==typeof e[a]&&(e[a]=He(e[a],n+"_"+a));return e}function We(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const qe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,De=!("nw"in Y)&&typeof Y.process<"u"&&"[object process]"===Y.process.toString(),Ge=!De&&!qe&&!(!Ce||!Te.HTMLElement),Xe=typeof Y.process<"u"&&"[object process]"===Y.process.toString()&&!qe&&!(!Ce||!Te.HTMLElement),Se={},mt=A("enable_beforeunload"),Ye=function(e){if(!(e=e||Y.event))return;let n=Se[e.type];n||(n=Se[e.type]=A("ON_PROPERTY"+e.type));const a=this||e.target||Y,t=a[n];let c;if(Ge&&a===Te&&"error"===e.type){const f=e;c=t&&t.call(this,f.message,f.filename,f.lineno,f.colno,f.error),!0===c&&e.preventDefault()}else c=t&&t.apply(this,arguments),"beforeunload"===e.type&&Y[mt]&&"string"==typeof c?e.returnValue=c:null!=c&&!c&&e.preventDefault();return c};function $e(e,n,a){let t=Ee(e,n);if(!t&&a&&Ee(a,n)&&(t={enumerable:!0,configurable:!0}),!t||!t.configurable)return;const c=A("on"+n+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete t.writable,delete t.value;const f=t.get,E=t.set,T=n.slice(2);let p=Se[T];p||(p=Se[T]=A("ON_PROPERTY"+T)),t.set=function(C){let _=this;!_&&e===Y&&(_=Y),_&&("function"==typeof _[p]&&_.removeEventListener(T,Ye),E&&E.call(_,null),_[p]=C,"function"==typeof C&&_.addEventListener(T,Ye,!1))},t.get=function(){let C=this;if(!C&&e===Y&&(C=Y),!C)return null;const _=C[p];if(_)return _;if(f){let P=f.call(this);if(P)return t.set.call(this,P),"function"==typeof C[Tt]&&C.removeAttribute(n),P}return null},Le(e,n,t),e[c]=!0}function Ke(e,n,a){if(n)for(let t=0;t<n.length;t++)$e(e,"on"+n[t],a);else{const t=[];for(const c in e)"on"==c.slice(0,2)&&t.push(c);for(let c=0;c<t.length;c++)$e(e,t[c],a)}}const oe=A("originalInstance");function we(e){const n=Y[e];if(!n)return;Y[A(e)]=n,Y[e]=function(){const c=Ve(arguments,e);switch(c.length){case 0:this[oe]=new n;break;case 1:this[oe]=new n(c[0]);break;case 2:this[oe]=new n(c[0],c[1]);break;case 3:this[oe]=new n(c[0],c[1],c[2]);break;case 4:this[oe]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},fe(Y[e],n);const a=new n(function(){});let t;for(t in a)"XMLHttpRequest"===e&&"responseBlob"===t||function(c){"function"==typeof a[c]?Y[e].prototype[c]=function(){return this[oe][c].apply(this[oe],arguments)}:Le(Y[e].prototype,c,{set:function(f){"function"==typeof f?(this[oe][c]=He(f,e+"."+c),fe(this[oe][c],f)):this[oe][c]=f},get:function(){return this[oe][c]}})}(t);for(t in n)"prototype"!==t&&n.hasOwnProperty(t)&&(Y[e][t]=n[t])}function ue(e,n,a){let t=e;for(;t&&!t.hasOwnProperty(n);)t=Ie(t);!t&&e[n]&&(t=e);const c=A(n);let f=null;if(t&&(!(f=t[c])||!t.hasOwnProperty(c))){f=t[c]=t[n];if(We(t&&Ee(t,n))){const T=a(f,c,n);t[n]=function(){return T(this,arguments)},fe(t[n],f)}}return f}function yt(e,n,a){let t=null;function c(f){const E=f.data;return E.args[E.cbIdx]=function(){f.invoke.apply(this,arguments)},t.apply(E.target,E.args),f}t=ue(e,n,f=>function(E,T){const p=a(E,T);return p.cbIdx>=0&&"function"==typeof T[p.cbIdx]?xe(p.name,T[p.cbIdx],p,c):f.apply(E,T)})}function fe(e,n){e[A("OriginalDelegate")]=n}let Je=!1,Be=!1;function kt(){if(Je)return Be;Je=!0;try{const e=Te.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Be=!0)}catch{}return Be}function Qe(e){return"function"==typeof e}function et(e){return"number"==typeof e}let ge=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ge=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ge=!1}const vt={useG:!0},re={},tt={},nt=new RegExp("^"+Pe+"(\\w+)(true|false)$"),rt=A("propagationStopped");function ot(e,n){const a=(n?n(e):e)+le,t=(n?n(e):e)+ae,c=Pe+a,f=Pe+t;re[e]={},re[e][le]=c,re[e][ae]=f}function bt(e,n,a,t){const c=t&&t.add||Me,f=t&&t.rm||Ze,E=t&&t.listeners||"eventListeners",T=t&&t.rmAll||"removeAllListeners",p=A(c),C="."+c+":",_="prependListener",P="."+_+":",I=function(k,d,j){if(k.isRemoved)return;const x=k.callback;let X;"object"==typeof x&&x.handleEvent&&(k.callback=m=>x.handleEvent(m),k.originalDelegate=x);try{k.invoke(k,d,[j])}catch(m){X=m}const G=k.options;if(G&&"object"==typeof G&&G.once){const m=k.originalDelegate?k.originalDelegate:k.callback;d[f].call(d,j.type,m,G)}return X};function H(k,d,j){if(!(d=d||e.event))return;const x=k||d.target||e,X=x[re[d.type][j?ae:le]];if(X){const G=[];if(1===X.length){const m=I(X[0],x,d);m&&G.push(m)}else{const m=X.slice();for(let z=0;z<m.length&&(!d||!0!==d[rt]);z++){const S=I(m[z],x,d);S&&G.push(S)}}if(1===G.length)throw G[0];for(let m=0;m<G.length;m++){const z=G[m];n.nativeScheduleMicroTask(()=>{throw z})}}}const U=function(k){return H(this,k,!1)},$=function(k){return H(this,k,!0)};function K(k,d){if(!k)return!1;let j=!0;d&&void 0!==d.useG&&(j=d.useG);const x=d&&d.vh;let X=!0;d&&void 0!==d.chkDup&&(X=d.chkDup);let G=!1;d&&void 0!==d.rt&&(G=d.rt);let m=k;for(;m&&!m.hasOwnProperty(c);)m=Ie(m);if(!m&&k[c]&&(m=k),!m||m[p])return!1;const z=d&&d.eventNameToString,S={},w=m[p]=m[c],b=m[A(f)]=m[f],D=m[A(E)]=m[E],Q=m[A(T)]=m[T];let W;d&&d.prepend&&(W=m[A(d.prepend)]=m[d.prepend]);const ne=j?function(r){if(!S.isExisting)return w.call(S.target,S.eventName,S.capture?$:U,S.options)}:function(r){return w.call(S.target,S.eventName,r.invoke,S.options)},Z=j?function(r){if(!r.isRemoved){const u=re[r.eventName];let v;u&&(v=u[r.capture?ae:le]);const R=v&&r.target[v];if(R)for(let y=0;y<R.length;y++)if(R[y]===r){R.splice(y,1),r.isRemoved=!0,r.removeAbortListener&&(r.removeAbortListener(),r.removeAbortListener=null),0===R.length&&(r.allRemoved=!0,r.target[v]=null);break}}if(r.allRemoved)return b.call(r.target,r.eventName,r.capture?$:U,r.options)}:function(r){return b.call(r.target,r.eventName,r.invoke,r.options)},_e=d&&d.diff?d.diff:function(r,u){const v=typeof u;return"function"===v&&r.callback===u||"object"===v&&r.originalDelegate===u},te=Zone[A("UNPATCHED_EVENTS")],ye=e[A("PASSIVE_EVENTS")];const l=function(r,u,v,R,y=!1,O=!1){return function(){const N=this||e;let L=arguments[0];d&&d.transferEventName&&(L=d.transferEventName(L));let B=arguments[1];if(!B)return r.apply(this,arguments);if(De&&"uncaughtException"===L)return r.apply(this,arguments);let F=!1;if("function"!=typeof B){if(!B.handleEvent)return r.apply(this,arguments);F=!0}if(x&&!x(r,B,N,arguments))return;const de=ge&&!!ye&&-1!==ye.indexOf(L),ie=function h(r){if("object"==typeof r&&null!==r){const u={...r};return r.signal&&(u.signal=r.signal),u}return r}(function M(r,u){return!ge&&"object"==typeof r&&r?!!r.capture:ge&&u?"boolean"==typeof r?{capture:r,passive:!0}:r?"object"==typeof r&&!1!==r.passive?{...r,passive:!0}:r:{passive:!0}:r}(arguments[2],de)),pe=ie?.signal;if(pe?.aborted)return;if(te)for(let ce=0;ce<te.length;ce++)if(L===te[ce])return de?r.call(N,L,B,ie):r.apply(this,arguments);const Ue=!!ie&&("boolean"==typeof ie||ie.capture),lt=!(!ie||"object"!=typeof ie)&&ie.once,At=Zone.current;let ze=re[L];ze||(ot(L,z),ze=re[L]);const ut=ze[Ue?ae:le];let Ne,ke=N[ut],ft=!1;if(ke){if(ft=!0,X)for(let ce=0;ce<ke.length;ce++)if(_e(ke[ce],B))return}else ke=N[ut]=[];const ht=N.constructor.name,dt=tt[ht];dt&&(Ne=dt[L]),Ne||(Ne=ht+u+(z?z(L):L)),S.options=ie,lt&&(S.options.once=!1),S.target=N,S.capture=Ue,S.eventName=L,S.isExisting=ft;const Re=j?vt:void 0;Re&&(Re.taskData=S),pe&&(S.options.signal=void 0);const se=At.scheduleEventTask(Ne,B,Re,v,R);if(pe){S.options.signal=pe;const ce=()=>se.zone.cancelTask(se);r.call(pe,"abort",ce,{once:!0}),se.removeAbortListener=()=>pe.removeEventListener("abort",ce)}return S.target=null,Re&&(Re.taskData=null),lt&&(S.options.once=!0),!ge&&"boolean"==typeof se.options||(se.options=ie),se.target=N,se.capture=Ue,se.eventName=L,F&&(se.originalDelegate=B),O?ke.unshift(se):ke.push(se),y?N:void 0}};return m[c]=l(w,C,ne,Z,G),W&&(m[_]=l(W,P,function(r){return W.call(S.target,S.eventName,r.invoke,S.options)},Z,G,!0)),m[f]=function(){const r=this||e;let u=arguments[0];d&&d.transferEventName&&(u=d.transferEventName(u));const v=arguments[2],R=!!v&&("boolean"==typeof v||v.capture),y=arguments[1];if(!y)return b.apply(this,arguments);if(x&&!x(b,y,r,arguments))return;const O=re[u];let N;O&&(N=O[R?ae:le]);const L=N&&r[N];if(L)for(let B=0;B<L.length;B++){const F=L[B];if(_e(F,y)){if(L.splice(B,1),F.isRemoved=!0,0===L.length&&(F.allRemoved=!0,r[N]=null,!R&&"string"==typeof u)){r[Pe+"ON_PROPERTY"+u]=null}return F.zone.cancelTask(F),G?r:void 0}}return b.apply(this,arguments)},m[E]=function(){const r=this||e;let u=arguments[0];d&&d.transferEventName&&(u=d.transferEventName(u));const v=[],R=st(r,z?z(u):u);for(let y=0;y<R.length;y++){const O=R[y];let N=O.originalDelegate?O.originalDelegate:O.callback;v.push(N)}return v},m[T]=function(){const r=this||e;let u=arguments[0];if(u){d&&d.transferEventName&&(u=d.transferEventName(u));const v=re[u];if(v){const R=v[le],y=v[ae],O=r[R],N=r[y];if(O){const L=O.slice();for(let B=0;B<L.length;B++){const F=L[B];let de=F.originalDelegate?F.originalDelegate:F.callback;this[f].call(this,u,de,F.options)}}if(N){const L=N.slice();for(let B=0;B<L.length;B++){const F=L[B];let de=F.originalDelegate?F.originalDelegate:F.callback;this[f].call(this,u,de,F.options)}}}}else{const v=Object.keys(r);for(let R=0;R<v.length;R++){const y=v[R],O=nt.exec(y);let N=O&&O[1];N&&"removeListener"!==N&&this[T].call(this,N)}this[T].call(this,"removeListener")}if(G)return this},fe(m[c],w),fe(m[f],b),Q&&fe(m[T],Q),D&&fe(m[E],D),!0}let q=[];for(let k=0;k<a.length;k++)q[k]=K(a[k],t);return q}function st(e,n){if(!n){const f=[];for(let E in e){const T=nt.exec(E);let p=T&&T[1];if(p&&(!n||p===n)){const C=e[E];if(C)for(let _=0;_<C.length;_++)f.push(C[_])}}return f}let a=re[n];a||(ot(n),a=re[n]);const t=e[a[le]],c=e[a[ae]];return t?c?t.concat(c):t.slice():c?c.slice():[]}function Pt(e,n){const a=e.Event;a&&a.prototype&&n.patchMethod(a.prototype,"stopImmediatePropagation",t=>function(c,f){c[rt]=!0,t&&t.apply(c,f)})}const Oe=A("zoneTask");function me(e,n,a,t){let c=null,f=null;a+=t;const E={};function T(C){const _=C.data;_.args[0]=function(){return C.invoke.apply(this,arguments)};const P=c.apply(e,_.args);return et(P)?_.handleId=P:(_.handle=P,_.isRefreshable=Qe(P.refresh)),C}function p(C){const{handle:_,handleId:P}=C.data;return f.call(e,_??P)}c=ue(e,n+=t,C=>function(_,P){if(Qe(P[0])){const I={isRefreshable:!1,isPeriodic:"Interval"===t,delay:"Timeout"===t||"Interval"===t?P[1]||0:void 0,args:P},H=P[0];P[0]=function(){try{return H.apply(this,arguments)}finally{const{handle:j,handleId:x,isPeriodic:X,isRefreshable:G}=I;!X&&!G&&(x?delete E[x]:j&&(j[Oe]=null))}};const U=xe(n,P[0],I,T,p);if(!U)return U;const{handleId:$,handle:K,isRefreshable:q,isPeriodic:k}=U.data;if($)E[$]=U;else if(K&&(K[Oe]=U,q&&!k)){const d=K.refresh;K.refresh=function(){const{zone:j,state:x}=U;return"notScheduled"===x?(U._state="scheduled",j._updateTaskCount(U,1)):"running"===x&&(U._state="scheduling"),d.call(this)}}return K??$??U}return C.apply(e,P)}),f=ue(e,a,C=>function(_,P){const I=P[0];let H;et(I)?(H=E[I],delete E[I]):(H=I?.[Oe],H?I[Oe]=null:H=I),H?.type?H.cancelFn&&H.zone.cancelTask(H):C.apply(e,P)})}function it(e,n,a){if(!a||0===a.length)return n;const t=a.filter(f=>f.target===e);if(!t||0===t.length)return n;const c=t[0].ignoreProperties;return n.filter(f=>-1===c.indexOf(f))}function ct(e,n,a,t){if(!e)return;Ke(e,it(e,n,a),t)}function Fe(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}function St(e,n){if(De&&!Xe||Zone[e.symbol("patchEvents")])return;const a=n.__Zone_ignore_on_properties;let t=[];if(Ge){const c=window;t=t.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const f=function pt(){try{const e=Te.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:c,ignoreProperties:["error"]}]:[];ct(c,Fe(c),a&&a.concat(f),Ie(c))}t=t.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<t.length;c++){const f=n[t[c]];f&&f.prototype&&ct(f.prototype,Fe(f.prototype),a)}}function Nt(e){e.__load_patch("ZoneAwarePromise",(n,a,t)=>{const c=Object.getOwnPropertyDescriptor,f=Object.defineProperty;const T=t.symbol,p=[],C=!1!==n[T("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],_=T("Promise"),P=T("then"),I="__creationTrace__";t.onUnhandledError=h=>{if(t.showUncaughtError()){const l=h&&h.rejection;l?console.error("Unhandled Promise rejection:",l instanceof Error?l.message:l,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",l,l instanceof Error?l.stack:void 0):console.error(h)}},t.microtaskDrainDone=()=>{for(;p.length;){const h=p.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h})}catch(l){U(l)}}};const H=T("unhandledPromiseRejectionHandler");function U(h){t.onUnhandledError(h);try{const l=a[H];"function"==typeof l&&l.call(this,h)}catch{}}function $(h){return h&&h.then}function K(h){return h}function q(h){return Z.reject(h)}const k=T("state"),d=T("value"),j=T("finally"),x=T("parentPromiseValue"),X=T("parentPromiseState"),G="Promise.then",m=null,z=!0,S=!1,w=0;function b(h,l){return r=>{try{M(h,l,r)}catch(u){M(h,!1,u)}}}const D=function(){let h=!1;return function(r){return function(){h||(h=!0,r.apply(null,arguments))}}},Q="Promise resolved with itself",W=T("currentTaskTrace");function M(h,l,r){const u=D();if(h===r)throw new TypeError(Q);if(h[k]===m){let v=null;try{("object"==typeof r||"function"==typeof r)&&(v=r&&r.then)}catch(R){return u(()=>{M(h,!1,R)})(),h}if(l!==S&&r instanceof Z&&r.hasOwnProperty(k)&&r.hasOwnProperty(d)&&r[k]!==m)i(r),M(h,r[k],r[d]);else if(l!==S&&"function"==typeof v)try{v.call(r,u(b(h,l)),u(b(h,!1)))}catch(R){u(()=>{M(h,!1,R)})()}else{h[k]=l;const R=h[d];if(h[d]=r,h[j]===j&&l===z&&(h[k]=h[X],h[d]=h[x]),l===S&&r instanceof Error){const y=a.currentTask&&a.currentTask.data&&a.currentTask.data[I];y&&f(r,W,{configurable:!0,enumerable:!1,writable:!0,value:y})}for(let y=0;y<R.length;)o(h,R[y++],R[y++],R[y++],R[y++]);if(0==R.length&&l==S){h[k]=w;let y=r;try{throw new Error("Uncaught (in promise): "+function E(h){if(h&&h.toString===Object.prototype.toString)return(h.constructor&&h.constructor.name||"")+": "+JSON.stringify(h);return h?h.toString():Object.prototype.toString.call(h)}(r)+(r&&r.stack?"\n"+r.stack:""))}catch(O){y=O}C&&(y.throwOriginal=!0),y.rejection=r,y.promise=h,y.zone=a.current,y.task=a.currentTask,p.push(y),t.scheduleMicroTask()}}}return h}const s=T("rejectionHandledHandler");function i(h){if(h[k]===w){try{const l=a[s];l&&"function"==typeof l&&l.call(this,{rejection:h[d],promise:h})}catch{}h[k]=S;for(let l=0;l<p.length;l++)h===p[l].promise&&p.splice(l,1)}}function o(h,l,r,u,v){i(h);const R=h[k],y=R?"function"==typeof u?u:K:"function"==typeof v?v:q;l.scheduleMicroTask(G,()=>{try{const O=h[d],N=!!r&&j===r[j];N&&(r[x]=O,r[X]=R);const L=l.run(y,void 0,N&&y!==q&&y!==K?[]:[O]);M(r,!0,L)}catch(O){M(r,!1,O)}},r)}const V=function(){},ne=n.AggregateError;class Z{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(l){return l instanceof Z?l:M(new this(null),z,l)}static reject(l){return M(new this(null),S,l)}static withResolvers(){const l={};return l.promise=new Z((r,u)=>{l.resolve=r,l.reject=u}),l}static any(l){if(!l||"function"!=typeof l[Symbol.iterator])return Promise.reject(new ne([],"All promises were rejected"));const r=[];let u=0;try{for(let y of l)u++,r.push(Z.resolve(y))}catch{return Promise.reject(new ne([],"All promises were rejected"))}if(0===u)return Promise.reject(new ne([],"All promises were rejected"));let v=!1;const R=[];return new Z((y,O)=>{for(let N=0;N<r.length;N++)r[N].then(L=>{v||(v=!0,y(L))},L=>{R.push(L),u--,0===u&&(v=!0,O(new ne(R,"All promises were rejected")))})})}static race(l){let r,u,v=new this((O,N)=>{r=O,u=N});function R(O){r(O)}function y(O){u(O)}for(let O of l)$(O)||(O=this.resolve(O)),O.then(R,y);return v}static all(l){return Z.allWithCallback(l)}static allSettled(l){return(this&&this.prototype instanceof Z?this:Z).allWithCallback(l,{thenCallback:u=>({status:"fulfilled",value:u}),errorCallback:u=>({status:"rejected",reason:u})})}static allWithCallback(l,r){let u,v,R=new this((L,B)=>{u=L,v=B}),y=2,O=0;const N=[];for(let L of l){$(L)||(L=this.resolve(L));const B=O;try{L.then(F=>{N[B]=r?r.thenCallback(F):F,y--,0===y&&u(N)},F=>{r?(N[B]=r.errorCallback(F),y--,0===y&&u(N)):v(F)})}catch(F){v(F)}y++,O++}return y-=2,0===y&&u(N),R}constructor(l){const r=this;if(!(r instanceof Z))throw new Error("Must be an instanceof Promise.");r[k]=m,r[d]=[];try{const u=D();l&&l(u(b(r,z)),u(b(r,S)))}catch(u){M(r,!1,u)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return Z}then(l,r){let u=this.constructor?.[Symbol.species];(!u||"function"!=typeof u)&&(u=this.constructor||Z);const v=new u(V),R=a.current;return this[k]==m?this[d].push(R,v,l,r):o(this,R,v,l,r),v}catch(l){return this.then(null,l)}finally(l){let r=this.constructor?.[Symbol.species];(!r||"function"!=typeof r)&&(r=Z);const u=new r(V);u[j]=j;const v=a.current;return this[k]==m?this[d].push(v,u,l,l):o(this,v,u,l,l),u}}Z.resolve=Z.resolve,Z.reject=Z.reject,Z.race=Z.race,Z.all=Z.all;const he=n[_]=n.Promise;n.Promise=Z;const _e=T("thenPatched");function te(h){const l=h.prototype,r=c(l,"then");if(r&&(!1===r.writable||!r.configurable))return;const u=l.then;l[P]=u,h.prototype.then=function(v,R){return new Z((O,N)=>{u.call(this,O,N)}).then(v,R)},h[_e]=!0}return t.patchThen=te,he&&(te(he),ue(n,"fetch",h=>function ye(h){return function(l,r){let u=h.apply(l,r);if(u instanceof Z)return u;let v=u.constructor;return v[_e]||te(v),u}}(h))),Promise[a.__symbol__("uncaughtPromiseErrors")]=p,Z})}function It(e,n,a,t,c){const f=Zone.__symbol__(t);if(n[f])return;const E=n[f]=n[t];n[t]=function(T,p,C){return p&&p.prototype&&c.forEach(function(_){const P=`${a}.${t}::`+_,I=p.prototype;try{if(I.hasOwnProperty(_)){const H=e.ObjectGetOwnPropertyDescriptor(I,_);H&&H.value?(H.value=e.wrapWithCurrentZone(H.value,P),e._redefineProperty(p.prototype,_,H)):I[_]&&(I[_]=e.wrapWithCurrentZone(I[_],P))}else I[_]&&(I[_]=e.wrapWithCurrentZone(I[_],P))}catch{}}),E.call(n,T,p,C)},e.attachOriginToPatched(n[t],E)}const at=function be(){const e=globalThis,n=!0===e[J("forceDuplicateZoneCheck")];if(e.Zone&&(n||"function"!=typeof e.Zone.__symbol__))throw new Error("Zone already loaded.");return e.Zone??=function ve(){const e=ee.performance;function n(M){e&&e.mark&&e.mark(M)}function a(M,s){e&&e.measure&&e.measure(M,s)}n("Zone");class t{static{this.__symbol__=J}static assertZonePatched(){if(ee.Promise!==S.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let s=t.current;for(;s.parent;)s=s.parent;return s}static get current(){return b.zone}static get currentTask(){return D}static __load_patch(s,i,o=!1){if(S.hasOwnProperty(s)){const g=!0===ee[J("forceDuplicateZoneCheck")];if(!o&&g)throw Error("Already loaded patch: "+s)}else if(!ee["__Zone_disable_"+s]){const g="Zone:"+s;n(g),S[s]=i(ee,t,w),a(g,g)}}get parent(){return this._parent}get name(){return this._name}constructor(s,i){this._parent=s,this._name=i?i.name||"unnamed":"<root>",this._properties=i&&i.properties||{},this._zoneDelegate=new f(this,this._parent&&this._parent._zoneDelegate,i)}get(s){const i=this.getZoneWith(s);if(i)return i._properties[s]}getZoneWith(s){let i=this;for(;i;){if(i._properties.hasOwnProperty(s))return i;i=i._parent}return null}fork(s){if(!s)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,s)}wrap(s,i){if("function"!=typeof s)throw new Error("Expecting function got: "+s);const o=this._zoneDelegate.intercept(this,s,i),g=this;return function(){return g.runGuarded(o,this,arguments,i)}}run(s,i,o,g){b={parent:b,zone:this};try{return this._zoneDelegate.invoke(this,s,i,o,g)}finally{b=b.parent}}runGuarded(s,i=null,o,g){b={parent:b,zone:this};try{try{return this._zoneDelegate.invoke(this,s,i,o,g)}catch(V){if(this._zoneDelegate.handleError(this,V))throw V}}finally{b=b.parent}}runTask(s,i,o){if(s.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(s.zone||K).name+"; Execution: "+this.name+")");const g=s,{type:V,data:{isPeriodic:ne=!1,isRefreshable:Z=!1}={}}=s;if(s.state===q&&(V===z||V===m))return;const he=s.state!=j;he&&g._transitionTo(j,d);const _e=D;D=g,b={parent:b,zone:this};try{V==m&&s.data&&!ne&&!Z&&(s.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,g,i,o)}catch(te){if(this._zoneDelegate.handleError(this,te))throw te}}finally{const te=s.state;if(te!==q&&te!==X)if(V==z||ne||Z&&te===k)he&&g._transitionTo(d,j,k);else{const ye=g._zoneDelegates;this._updateTaskCount(g,-1),he&&g._transitionTo(q,j,q),Z&&(g._zoneDelegates=ye)}b=b.parent,D=_e}}scheduleTask(s){if(s.zone&&s.zone!==this){let o=this;for(;o;){if(o===s.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${s.zone.name}`);o=o.parent}}s._transitionTo(k,q);const i=[];s._zoneDelegates=i,s._zone=this;try{s=this._zoneDelegate.scheduleTask(this,s)}catch(o){throw s._transitionTo(X,k,q),this._zoneDelegate.handleError(this,o),o}return s._zoneDelegates===i&&this._updateTaskCount(s,1),s.state==k&&s._transitionTo(d,k),s}scheduleMicroTask(s,i,o,g){return this.scheduleTask(new E(G,s,i,o,g,void 0))}scheduleMacroTask(s,i,o,g,V){return this.scheduleTask(new E(m,s,i,o,g,V))}scheduleEventTask(s,i,o,g,V){return this.scheduleTask(new E(z,s,i,o,g,V))}cancelTask(s){if(s.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(s.zone||K).name+"; Execution: "+this.name+")");if(s.state===d||s.state===j){s._transitionTo(x,d,j);try{this._zoneDelegate.cancelTask(this,s)}catch(i){throw s._transitionTo(X,x),this._zoneDelegate.handleError(this,i),i}return this._updateTaskCount(s,-1),s._transitionTo(q,x),s.runCount=-1,s}}_updateTaskCount(s,i){const o=s._zoneDelegates;-1==i&&(s._zoneDelegates=null);for(let g=0;g<o.length;g++)o[g]._updateTaskCount(s.type,i)}}const c={name:"",onHasTask:(M,s,i,o)=>M.hasTask(i,o),onScheduleTask:(M,s,i,o)=>M.scheduleTask(i,o),onInvokeTask:(M,s,i,o,g,V)=>M.invokeTask(i,o,g,V),onCancelTask:(M,s,i,o)=>M.cancelTask(i,o)};class f{get zone(){return this._zone}constructor(s,i,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=s,this._parentDelegate=i,this._forkZS=o&&(o&&o.onFork?o:i._forkZS),this._forkDlgt=o&&(o.onFork?i:i._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:i._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:i._interceptZS),this._interceptDlgt=o&&(o.onIntercept?i:i._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:i._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:i._invokeZS),this._invokeDlgt=o&&(o.onInvoke?i:i._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:i._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:i._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?i:i._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:i._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:i._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?i:i._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:i._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:i._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?i:i._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:i._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:i._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?i:i._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:i._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const g=o&&o.onHasTask,V=i&&i._hasTaskZS;(g||V)&&(this._hasTaskZS=g?o:c,this._hasTaskDlgt=i,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=c,this._scheduleTaskDlgt=i,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=c,this._invokeTaskDlgt=i,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=c,this._cancelTaskDlgt=i,this._cancelTaskCurrZone=this._zone))}fork(s,i){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,s,i):new t(s,i)}intercept(s,i,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,s,i,o):i}invoke(s,i,o,g,V){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,s,i,o,g,V):i.apply(o,g)}handleError(s,i){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,s,i)}scheduleTask(s,i){let o=i;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,s,i),o||(o=i);else if(i.scheduleFn)i.scheduleFn(i);else{if(i.type!=G)throw new Error("Task is missing scheduleFn.");U(i)}return o}invokeTask(s,i,o,g){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,s,i,o,g):i.callback.apply(o,g)}cancelTask(s,i){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,s,i);else{if(!i.cancelFn)throw Error("Task is not cancelable");o=i.cancelFn(i)}return o}hasTask(s,i){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,s,i)}catch(o){this.handleError(s,o)}}_updateTaskCount(s,i){const o=this._taskCounts,g=o[s],V=o[s]=g+i;if(V<0)throw new Error("More tasks executed then were scheduled.");if(0==g||0==V){const ne={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:s};this.hasTask(this._zone,ne)}}}class E{constructor(s,i,o,g,V,ne){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=s,this.source=i,this.data=g,this.scheduleFn=V,this.cancelFn=ne,!o)throw new Error("callback is not defined");this.callback=o;const Z=this;s===z&&g&&g.useG?this.invoke=E.invokeTask:this.invoke=function(){return E.invokeTask.call(ee,Z,this,arguments)}}static invokeTask(s,i,o){s||(s=this),Q++;try{return s.runCount++,s.zone.runTask(s,i,o)}finally{1==Q&&$(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(q,k)}_transitionTo(s,i,o){if(this._state!==i&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${s}', expecting state '${i}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=s,s==q&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const T=J("setTimeout"),p=J("Promise"),C=J("then");let I,_=[],P=!1;function H(M){if(I||ee[p]&&(I=ee[p].resolve(0)),I){let s=I[C];s||(s=I.then),s.call(I,M)}else ee[T](M,0)}function U(M){0===Q&&0===_.length&&H($),M&&_.push(M)}function $(){if(!P){for(P=!0;_.length;){const M=_;_=[];for(let s=0;s<M.length;s++){const i=M[s];try{i.zone.runTask(i,null,null)}catch(o){w.onUnhandledError(o)}}}w.microtaskDrainDone(),P=!1}}const K={name:"NO ZONE"},q="notScheduled",k="scheduling",d="scheduled",j="running",x="canceling",X="unknown",G="microTask",m="macroTask",z="eventTask",S={},w={symbol:J,currentZoneFrame:()=>b,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:U,showUncaughtError:()=>!t[J("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:H};let b={parent:null,zone:new t(null,null)},D=null,Q=0;function W(){}return a("Zone","Zone"),t}(),e.Zone}();(function Zt(e){Nt(e),function Lt(e){e.__load_patch("toString",n=>{const a=Function.prototype.toString,t=A("OriginalDelegate"),c=A("Promise"),f=A("Error"),E=function(){if("function"==typeof this){const _=this[t];if(_)return"function"==typeof _?a.call(_):Object.prototype.toString.call(_);if(this===Promise){const P=n[c];if(P)return a.call(P)}if(this===Error){const P=n[f];if(P)return a.call(P)}}return a.call(this)};E[t]=a,Function.prototype.toString=E;const T=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":T.call(this)}})}(e),function Mt(e){e.__load_patch("util",(n,a,t)=>{const c=Fe(n);t.patchOnProperties=Ke,t.patchMethod=ue,t.bindArguments=Ve,t.patchMacroTask=yt;const f=a.__symbol__("BLACK_LISTED_EVENTS"),E=a.__symbol__("UNPATCHED_EVENTS");n[E]&&(n[f]=n[E]),n[f]&&(a[f]=a[E]=n[f]),t.patchEventPrototype=Pt,t.patchEventTarget=bt,t.isIEOrEdge=kt,t.ObjectDefineProperty=Le,t.ObjectGetOwnPropertyDescriptor=Ee,t.ObjectCreate=_t,t.ArraySlice=Et,t.patchClass=we,t.wrapWithCurrentZone=He,t.filterProperties=it,t.attachOriginToPatched=fe,t._redefineProperty=Object.defineProperty,t.patchCallbacks=It,t.getGlobalObjects=()=>({globalSources:tt,zoneSymbolEventNames:re,eventNames:c,isBrowser:Ge,isMix:Xe,isNode:De,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:Pe,ADD_EVENT_LISTENER_STR:Me,REMOVE_EVENT_LISTENER_STR:Ze})})}(e)})(at),function Ot(e){e.__load_patch("legacy",n=>{const a=n[e.__symbol__("legacyPatch")];a&&a()}),e.__load_patch("timers",n=>{const a="set",t="clear";me(n,a,t,"Timeout"),me(n,a,t,"Interval"),me(n,a,t,"Immediate")}),e.__load_patch("requestAnimationFrame",n=>{me(n,"request","cancel","AnimationFrame"),me(n,"mozRequest","mozCancel","AnimationFrame"),me(n,"webkitRequest","webkitCancel","AnimationFrame")}),e.__load_patch("blocking",(n,a)=>{const t=["alert","prompt","confirm"];for(let c=0;c<t.length;c++){const f=t[c];ue(n,f,(E,T,p)=>function(C,_){return a.current.run(E,n,_,p)})}}),e.__load_patch("EventTarget",(n,a,t)=>{(function Dt(e,n){n.patchEventPrototype(e,n)})(n,t),function Ct(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:a,zoneSymbolEventNames:t,TRUE_STR:c,FALSE_STR:f,ZONE_SYMBOL_PREFIX:E}=n.getGlobalObjects();for(let p=0;p<a.length;p++){const C=a[p],I=E+(C+f),H=E+(C+c);t[C]={},t[C][f]=I,t[C][c]=H}const T=e.EventTarget;return T&&T.prototype?(n.patchEventTarget(e,n,[T&&T.prototype]),!0):void 0}(n,t);const c=n.XMLHttpRequestEventTarget;c&&c.prototype&&t.patchEventTarget(n,t,[c.prototype])}),e.__load_patch("MutationObserver",(n,a,t)=>{we("MutationObserver"),we("WebKitMutationObserver")}),e.__load_patch("IntersectionObserver",(n,a,t)=>{we("IntersectionObserver")}),e.__load_patch("FileReader",(n,a,t)=>{we("FileReader")}),e.__load_patch("on_property",(n,a,t)=>{St(t,n)}),e.__load_patch("customElements",(n,a,t)=>{!function Rt(e,n){const{isBrowser:a,isMix:t}=n.getGlobalObjects();if(!a&&!t||!e.customElements||!("customElements"in e))return;n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(n,t)}),e.__load_patch("XHR",(n,a)=>{!function C(_){const P=_.XMLHttpRequest;if(!P)return;const I=P.prototype;let U=I[Ae],$=I[je];if(!U){const w=_.XMLHttpRequestEventTarget;if(w){const b=w.prototype;U=b[Ae],$=b[je]}}const K="readystatechange",q="scheduled";function k(w){const b=w.data,D=b.target;D[E]=!1,D[p]=!1;const Q=D[f];U||(U=D[Ae],$=D[je]),Q&&$.call(D,K,Q);const W=D[f]=()=>{if(D.readyState===D.DONE)if(!b.aborted&&D[E]&&w.state===q){const s=D[a.__symbol__("loadfalse")];if(0!==D.status&&s&&s.length>0){const i=w.invoke;w.invoke=function(){const o=D[a.__symbol__("loadfalse")];for(let g=0;g<o.length;g++)o[g]===w&&o.splice(g,1);!b.aborted&&w.state===q&&i.call(w)},s.push(w)}else w.invoke()}else!b.aborted&&!1===D[E]&&(D[p]=!0)};return U.call(D,K,W),D[t]||(D[t]=w),z.apply(D,b.args),D[E]=!0,w}function d(){}function j(w){const b=w.data;return b.aborted=!0,S.apply(b.target,b.args)}const x=ue(I,"open",()=>function(w,b){return w[c]=0==b[2],w[T]=b[1],x.apply(w,b)}),G=A("fetchTaskAborting"),m=A("fetchTaskScheduling"),z=ue(I,"send",()=>function(w,b){if(!0===a.current[m]||w[c])return z.apply(w,b);{const D={target:w,url:w[T],isPeriodic:!1,args:b,aborted:!1},Q=xe("XMLHttpRequest.send",d,D,k,j);w&&!0===w[p]&&!D.aborted&&Q.state===q&&Q.invoke()}}),S=ue(I,"abort",()=>function(w,b){const D=function H(w){return w[t]}(w);if(D&&"string"==typeof D.type){if(null==D.cancelFn||D.data&&D.data.aborted)return;D.zone.cancelTask(D)}else if(!0===a.current[G])return S.apply(w,b)})}(n);const t=A("xhrTask"),c=A("xhrSync"),f=A("xhrListener"),E=A("xhrScheduled"),T=A("xhrURL"),p=A("xhrErrorBeforeScheduled")}),e.__load_patch("geolocation",n=>{n.navigator&&n.navigator.geolocation&&function gt(e,n){const a=e.constructor.name;for(let t=0;t<n.length;t++){const c=n[t],f=e[c];if(f){if(!We(Ee(e,c)))continue;e[c]=(T=>{const p=function(){return T.apply(this,Ve(arguments,a+"."+c))};return fe(p,T),p})(f)}}}(n.navigator.geolocation,["getCurrentPosition","watchPosition"])}),e.__load_patch("PromiseRejectionEvent",(n,a)=>{function t(c){return function(f){st(n,c).forEach(T=>{const p=n.PromiseRejectionEvent;if(p){const C=new p(c,{promise:f.promise,reason:f.rejection});T.invoke(C)}})}}n.PromiseRejectionEvent&&(a[A("unhandledPromiseRejectionHandler")]=t("unhandledrejection"),a[A("rejectionHandledHandler")]=t("rejectionhandled"))}),e.__load_patch("queueMicrotask",(n,a,t)=>{!function wt(e,n){n.patchMethod(e,"queueMicrotask",a=>function(t,c){Zone.current.scheduleMicroTask("queueMicrotask",c[0])})}(n,t)})}(at)}},ee=>{var be;be=7096,ee(ee.s=be)}]);
//# sourceMappingURL=polyfills.c718f5f3486609bd.js.map