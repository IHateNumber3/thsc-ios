"use strict";(()=>{var Ko=Object.create;var Zt=Object.defineProperty;var Qo=Object.getOwnPropertyDescriptor;var Zo=Object.getOwnPropertyNames;var Yo=Object.getPrototypeOf,Xo=Object.prototype.hasOwnProperty;var Yt=(o,e,n)=>()=>{if(n)throw n[0];try{return o&&(e=o(o=0)),e}catch(t){throw n=[t],t}};var ne=(o,e)=>()=>{try{return e||o((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}},Xt=(o,e)=>{for(var n in e)Zt(o,n,{get:e[n],enumerable:!0})},ei=(o,e,n,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Zo(e))!Xo.call(o,r)&&r!==n&&Zt(o,r,{get:()=>e[r],enumerable:!(t=Qo(e,r))||t.enumerable});return o};var te=(o,e,n)=>(n=o!=null?Ko(Yo(o)):{},ei(e||!o||!o.__esModule?Zt(n,"default",{value:o,enumerable:!0}):n,o));var aa=ne(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0})});var ia=ne(oa=>{"use strict";Object.defineProperty(oa,"__esModule",{value:!0})});var ua=ne(sa=>{"use strict";Object.defineProperty(sa,"__esModule",{value:!0})});var la=ne(ca=>{"use strict";Object.defineProperty(ca,"__esModule",{value:!0})});var fa=ne(_a=>{"use strict";Object.defineProperty(_a,"__esModule",{value:!0})});var ma=ne(er=>{"use strict";Object.defineProperty(er,"__esModule",{value:!0});er.classnames=oi;var ti=o=>Object.entries(o).map(([e,n])=>n&&e),da=o=>!!o,ri=(o,e,n)=>n.indexOf(o)===e,ai=[];function ba(o){return o?typeof o=="string"?[o]:Array.isArray(o)?o.flatMap(ba).filter(da):ti(o).filter(da):ai}function oi(o){let e=ba(o).filter(ri);return e.length>0?e.join(" "):void 0}});var ga=ne(oe=>{"use strict";var ii=oe&&oe.__createBinding||(Object.create?(function(o,e,n,t){t===void 0&&(t=n);var r=Object.getOwnPropertyDescriptor(e,n);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(o,t,r)}):(function(o,e,n,t){t===void 0&&(t=n),o[t]=e[n]})),Xe=oe&&oe.__exportStar||function(o,e){for(var n in o)n!=="default"&&!Object.prototype.hasOwnProperty.call(e,n)&&ii(e,o,n)};Object.defineProperty(oe,"__esModule",{value:!0});Xe(aa(),oe);Xe(ia(),oe);Xe(ua(),oe);Xe(la(),oe);Xe(fa(),oe);Xe(ma(),oe)});var tr=ne(nr=>{"use strict";Object.defineProperty(nr,"__esModule",{value:!0});nr.setAttributes=li;var si=ga();function ui(o,e){for(let n of Object.keys(o))n in e&&(e[n]=o[n])}var ci=/^on\p{Lu}/u;function li(o,e){for(let n of Object.keys(e)){if(n==="__source"||n==="__self"||n==="tsxTag")continue;let t=e[n];if(n==="class"){let r=(0,si.classnames)(t);r&&o.setAttribute(n,r)}else if(n==="ref")t.current=o;else if(ci.test(n)){let r=n.replace(/Capture$/,""),i=n!==r,s=r.toLowerCase().substring(2);o.addEventListener(s,t,i)}else n==="style"&&typeof t!="string"?ui(t,o.style):n==="dangerouslySetInnerHTML"?o.innerHTML=t:t===!0?o.setAttribute(n,n):(t||t===0||t==="")&&o.setAttribute(n,t.toString())}}});var rr=ne(hn=>{"use strict";Object.defineProperty(hn,"__esModule",{value:!0});hn.applyChildren=pa;hn.createDomElement=fi;hn.applyTsxTag=di;function _i(o,e){e instanceof Element?o.appendChild(e):typeof e=="string"||typeof e=="number"?o.appendChild(document.createTextNode(e.toString())):console.warn("Unknown type to append: ",e)}function pa(o,e){for(let n of e)!n&&n!==0||(Array.isArray(n)?pa(o,n):_i(o,n))}function fi(o,e){let n=e?.is?{is:e.is}:void 0;return e?.xmlns?document.createElementNS(e.xmlns,o,n):document.createElement(o,n)}function di(o,e){let n=o,t=e;return t&&"tsxTag"in t&&(n=t.tsxTag,!t.is&&o.includes("-")&&(t={...t,is:o})),{finalTag:n,finalAttrs:t}}});var Y=ne(vn=>{"use strict";Object.defineProperty(vn,"__esModule",{value:!0});vn.jsx=or;vn.jsxs=or;vn.jsxDEV=or;var bi=tr(),ar=rr();function or(o,e){if(typeof o=="function")return o(e);let{children:n,...t}=e,{finalTag:r,finalAttrs:i}=(0,ar.applyTsxTag)(o,t),s=(0,ar.createDomElement)(r,i);return(0,bi.setAttributes)(s,i),(0,ar.applyChildren)(s,[n]),s}});var Qa=ne($e=>{"use strict";Object.defineProperty($e,"__esModule",{value:!0});$e.createRef=$e.h=void 0;$e.createElement=Ka;var es=tr(),hr=rr();function Ka(o,e,...n){if(typeof o=="function")return o({...e,children:n});let{finalTag:t,finalAttrs:r}=(0,hr.applyTsxTag)(o,e),i=(0,hr.createDomElement)(t,r);return r&&(0,es.setAttributes)(i,r),(0,hr.applyChildren)(i,n),i}$e.h=Ka;var ns=()=>({current:null});$e.createRef=ns});var Za=ne(vr=>{"use strict";Object.defineProperty(vr,"__esModule",{value:!0});vr.defineCustomElement=rs;var ts=Y();function rs(o,e,n){return customElements.define(o,e,n),t=>(0,ts.jsx)(o,t)}});var Xa=ne(Ya=>{"use strict";Object.defineProperty(Ya,"__esModule",{value:!0})});var eo=ne(we=>{"use strict";var as=we&&we.__createBinding||(Object.create?(function(o,e,n,t){t===void 0&&(t=n);var r=Object.getOwnPropertyDescriptor(e,n);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(o,t,r)}):(function(o,e,n,t){t===void 0&&(t=n),o[t]=e[n]})),It=we&&we.__exportStar||function(o,e){for(var n in o)n!=="default"&&!Object.prototype.hasOwnProperty.call(e,n)&&as(e,o,n)};Object.defineProperty(we,"__esModule",{value:!0});It(Qa(),we);It(Za(),we);It(Y(),we);It(Xa(),we)});function Pt(o,e){let n=o.length,t=o.getChannelData(0),r=o.getChannelData(1),i=0,s=0;for(;s<n;)t[s]=e[i],r[s]=e[i+1],s++,i+=2}function Dt(o,e){return new Function(`return (${o})(...arguments);`)(...e)}var xr=Yt(()=>{"use strict"});var ho={};Xt(ho,{IntoUnderlyingByteSource:()=>Tn,IntoUnderlyingSink:()=>Mn,IntoUnderlyingSource:()=>On,RuffleHandle:()=>_n,RuffleInstanceBuilder:()=>Bn,ZipWriter:()=>Ln,default:()=>vu,global_init:()=>ss,initSync:()=>hu});function ss(){_.global_init()}function po(){return{__proto__:null,"./ruffle_web_bg.js":{__proto__:null,__wbg_Error_408e67f47ca7b58b:function(e,n){return Error(p(e,n))},__wbg_Window_a2a6c4d665047b14:function(e){return e.Window},__wbg_WorkerGlobalScope_2664448a7c667d67:function(e){return e.WorkerGlobalScope},__wbg___wbindgen_add_d4e2ca36d51d4d09:function(e,n){return e+n},__wbg___wbindgen_boolean_get_c9c83ebd41b34df3:function(e){let n=e,t=typeof n=="boolean"?n:void 0;return k(t)?16777215:t?1:0},__wbg___wbindgen_debug_string_a57024b9c6e4a48b:function(e,n){let t=Cr(n),r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg___wbindgen_in_ac983077f137f2e6:function(e,n){return e in n},__wbg___wbindgen_is_function_5e4570eb24ffa122:function(e){return typeof e=="function"},__wbg___wbindgen_is_null_7d13f41e1a2d5140:function(e){return e===null},__wbg___wbindgen_is_string_e6f02f0ea5f20a32:function(e){return typeof e=="string"},__wbg___wbindgen_is_undefined_6cff064c44e0d823:function(e){return e===void 0},__wbg___wbindgen_number_get_136b9679cab35cfb:function(e,n){let t=n,r=typeof t=="number"?t:void 0;S().setFloat64(e+8,k(r)?0:r,!0),S().setInt32(e+0,!k(r),!0)},__wbg___wbindgen_string_get_d154f1e671052120:function(e,n){let t=n,r=typeof t=="string"?t:void 0;var i=k(r)?0:E(r,_.__wbindgen_malloc,_.__wbindgen_realloc),s=j;S().setInt32(e+4,s,!0),S().setInt32(e+0,i,!0)},__wbg___wbindgen_throw_bb96b2010945f0bc:function(e,n){throw new Error(p(e,n))},__wbg__wbg_cb_unref_be22cc64ae6946a0:function(e){e._wbg_cb_unref()},__wbg_a_50b8aa2c55aab913:function(e){return e.a},__wbg_activeTexture_8e65ac2e8d488478:function(e,n){e.activeTexture(n>>>0)},__wbg_activeTexture_fd6262686afdbe2f:function(e,n){e.activeTexture(n>>>0)},__wbg_actualBoundingBoxAscent_4dcab656e4a31f96:function(e){return e.actualBoundingBoxAscent},__wbg_actualBoundingBoxDescent_77c46a72f390cca8:function(e){return e.actualBoundingBoxDescent},__wbg_actualBoundingBoxLeft_862e432cc4b67b21:function(e){return e.actualBoundingBoxLeft},__wbg_actualBoundingBoxRight_7dc82a3b2c564418:function(e){return e.actualBoundingBoxRight},__wbg_addColorStop_35d831fa917ffcd4:function(){return m(function(e,n,t,r){e.addColorStop(n,p(t,r))},arguments)},__wbg_addEventListener_3b8edc02c33d9f77:function(){return m(function(e,n,t,r){e.addEventListener(p(n,t),r)},arguments)},__wbg_addEventListener_d6fb728fba6ad35c:function(){return m(function(e,n,t,r,i){e.addEventListener(p(n,t),r,i)},arguments)},__wbg_addPath_2b5ccbd0d0049498:function(e,n,t){e.addPath(n,t)},__wbg_appendChild_d5cbce3d5fa81471:function(){return m(function(e,n){return e.appendChild(n)},arguments)},__wbg_arrayBuffer_16433f17fbd74397:function(){return m(function(e){return e.arrayBuffer()},arguments)},__wbg_assign_b4bc9b9355dde46c:function(){return m(function(e,n,t){e.assign(p(n,t))},arguments)},__wbg_attachShader_26751604f00d1f1b:function(e,n,t){e.attachShader(n,t)},__wbg_attachShader_61baa58641ea664a:function(e,n,t){e.attachShader(n,t)},__wbg_b_e13835841694635f:function(e){return e.b},__wbg_baseURI_2009585b672a389a:function(){return m(function(e,n){let t=n.baseURI;var r=k(t)?0:E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},arguments)},__wbg_beginQuery_444a51812fdbf958:function(e,n,t){e.beginQuery(n>>>0,t)},__wbg_beginRenderPass_3c53642423af50dc:function(){return m(function(e,n){return e.beginRenderPass(n)},arguments)},__wbg_bezierCurveTo_6c962e111be3f1d0:function(e,n,t,r,i,s,u){e.bezierCurveTo(n,t,r,i,s,u)},__wbg_bindAttribLocation_1e182a50e1556784:function(e,n,t,r,i){e.bindAttribLocation(n,t>>>0,p(r,i))},__wbg_bindAttribLocation_9cc5ab15df1d042d:function(e,n,t,r,i){e.bindAttribLocation(n,t>>>0,p(r,i))},__wbg_bindBufferRange_5a8d28ef662d8746:function(e,n,t,r,i,s){e.bindBufferRange(n>>>0,t>>>0,r,i,s)},__wbg_bindBuffer_1fb12d083d2a22af:function(e,n,t){e.bindBuffer(n>>>0,t)},__wbg_bindBuffer_31cb159ab5dc5ba7:function(e,n,t){e.bindBuffer(n>>>0,t)},__wbg_bindFramebuffer_32ce672324ce8a16:function(e,n,t){e.bindFramebuffer(n>>>0,t)},__wbg_bindFramebuffer_e620067056f9316f:function(e,n,t){e.bindFramebuffer(n>>>0,t)},__wbg_bindRenderbuffer_765cffe23b9c36f7:function(e,n,t){e.bindRenderbuffer(n>>>0,t)},__wbg_bindRenderbuffer_9b313332bd7aa049:function(e,n,t){e.bindRenderbuffer(n>>>0,t)},__wbg_bindSampler_28b0a4c34c6f96d4:function(e,n,t){e.bindSampler(n>>>0,t)},__wbg_bindTexture_4c54ffb64c33564f:function(e,n,t){e.bindTexture(n>>>0,t)},__wbg_bindTexture_6fe86367f6be8f59:function(e,n,t){e.bindTexture(n>>>0,t)},__wbg_bindVertexArrayOES_96a4898652eac0d8:function(e,n){e.bindVertexArrayOES(n)},__wbg_bindVertexArray_0185d931d681d806:function(e,n){e.bindVertexArray(n)},__wbg_blendColor_402572bc445d3ac3:function(e,n,t,r,i){e.blendColor(n,t,r,i)},__wbg_blendColor_af92968fedc595b1:function(e,n,t,r,i){e.blendColor(n,t,r,i)},__wbg_blendEquationSeparate_5ab35e46e7f48717:function(e,n,t){e.blendEquationSeparate(n>>>0,t>>>0)},__wbg_blendEquationSeparate_9ad084e8266b8e3c:function(e,n,t){e.blendEquationSeparate(n>>>0,t>>>0)},__wbg_blendEquation_4bab539169e7e865:function(e,n){e.blendEquation(n>>>0)},__wbg_blendEquation_502ed4c6af5bf8ee:function(e,n){e.blendEquation(n>>>0)},__wbg_blendFuncSeparate_2e4d259caaba517e:function(e,n,t,r,i){e.blendFuncSeparate(n>>>0,t>>>0,r>>>0,i>>>0)},__wbg_blendFuncSeparate_66688b15ecc6529c:function(e,n,t,r,i){e.blendFuncSeparate(n>>>0,t>>>0,r>>>0,i>>>0)},__wbg_blendFunc_b7f382e97db2fd5b:function(e,n,t){e.blendFunc(n>>>0,t>>>0)},__wbg_blendFunc_d908118bbb181928:function(e,n,t){e.blendFunc(n>>>0,t>>>0)},__wbg_blitFramebuffer_20b32de88a3097b1:function(e,n,t,r,i,s,u,c,d,b,h){e.blitFramebuffer(n,t,r,i,s,u,c,d,b>>>0,h>>>0)},__wbg_body_d6eca0586d628e3c:function(e){let n=e.body;return k(n)?0:A(n)},__wbg_body_eb2e7e7701fa47ae:function(e){let n=e.body;return k(n)?0:A(n)},__wbg_bufferData_1dd2939db2d88d82:function(e,n,t,r){e.bufferData(n>>>0,t,r>>>0)},__wbg_bufferData_69a44ade0864ba2b:function(e,n,t,r){e.bufferData(n>>>0,t,r>>>0)},__wbg_bufferData_6c10d3e07ec9a2a9:function(e,n,t,r){e.bufferData(n>>>0,t,r>>>0)},__wbg_bufferData_bd2b8bde42f33479:function(e,n,t,r,i){e.bufferData(n>>>0,fe(t,r),i>>>0)},__wbg_bufferData_d359d1c797b8e8b7:function(e,n,t,r){e.bufferData(n>>>0,t,r>>>0)},__wbg_bufferSubData_4f6063d50303b61d:function(e,n,t,r){e.bufferSubData(n>>>0,t,r)},__wbg_bufferSubData_64b69f468a0d3048:function(e,n,t,r){e.bufferSubData(n>>>0,t,r)},__wbg_buffer_78291c0e094ccf99:function(e){return e.buffer},__wbg_button_3963e81aec2b2f60:function(e){return e.button},__wbg_buttons_4a8c6d3d822b6038:function(e){return e.buttons},__wbg_byobRequest_f8b1c89429b77545:function(e){let n=e.byobRequest;return k(n)?0:A(n)},__wbg_byteLength_336bc7d303511ba0:function(e){return e.byteLength},__wbg_byteOffset_2b1d5b10453ce198:function(e){return e.byteOffset},__wbg_c_c811405a34442426:function(e){return e.c},__wbg_callExternalInterface_9a524963faa85123:function(){return m(function(e,n,t,r){var i=ru(t,r);return _.__wbindgen_free(t,r*4,4),Dt(p(e,n),i)},arguments)},__wbg_callFSCommand_b7b7e088eb8c23cf:function(){return m(function(e,n,t,r,i){return e.callFSCommand(p(n,t),p(r,i))},arguments)},__wbg_call_1c5886ab9c57d1c7:function(){return m(function(e,n){return e.call(n)},arguments)},__wbg_call_35dba3c747ad7521:function(){return m(function(e,n,t){return e.call(n,t)},arguments)},__wbg_cancelAnimationFrame_58acec8573d45a99:function(){return m(function(e,n){e.cancelAnimationFrame(n)},arguments)},__wbg_clearBufferfv_ccbb43fb098f1912:function(e,n,t,r,i){e.clearBufferfv(n>>>0,t,V(r,i))},__wbg_clearBufferiv_8b1c68299632478f:function(e,n,t,r,i){e.clearBufferiv(n>>>0,t,Fe(r,i))},__wbg_clearBufferuiv_cd72147d09d432e8:function(e,n,t,r,i){e.clearBufferuiv(n>>>0,t,cn(r,i))},__wbg_clearColor_c4271a8227ced504:function(e,n,t,r,i){e.clearColor(n,t,r,i)},__wbg_clearDepth_887000180cc9eb2e:function(e,n){e.clearDepth(n)},__wbg_clearDepth_c4897278afd894a9:function(e,n){e.clearDepth(n)},__wbg_clearRect_66721231b69373f5:function(e,n,t,r,i){e.clearRect(n,t,r,i)},__wbg_clearRect_81c3c80fbe793b63:function(e,n,t,r,i){e.clearRect(n,t,r,i)},__wbg_clearStencil_3d39149452a2f872:function(e,n){e.clearStencil(n)},__wbg_clearStencil_96978923f9c6fb1f:function(e,n){e.clearStencil(n)},__wbg_clear_20f7614cd20df101:function(e,n){e.clear(n>>>0)},__wbg_clear_332f205d7e52df87:function(e,n){e.clear(n>>>0)},__wbg_click_cdf5981a6746a4b8:function(e){e.click()},__wbg_clientHeight_834c029be3d903a7:function(e){return e.clientHeight},__wbg_clientWaitSync_8800b42d1c534e00:function(e,n,t,r){return e.clientWaitSync(n,t>>>0,r>>>0)},__wbg_clientWidth_ad03e8eb6c2b0c56:function(e){return e.clientWidth},__wbg_clip_186ecc3c70af5766:function(e,n,t){e.clip(n,uo[t])},__wbg_clipboardData_05651f46357b67bc:function(e){let n=e.clipboardData;return k(n)?0:A(n)},__wbg_clipboard_4fea7f044e5b8637:function(e){return e.clipboard},__wbg_closePath_4580feb19a1218cc:function(e){e.closePath()},__wbg_closeVirtualKeyboard_d9973173f570afc2:function(e){e.closeVirtualKeyboard()},__wbg_close_0a7ad9b918faec6d:function(){return m(function(e,n){e.close(n)},arguments)},__wbg_close_4d8c26ce7459660f:function(){return m(function(e){return e.close()},arguments)},__wbg_close_7292def578949963:function(){return m(function(e,n,t,r){e.close(n,p(t,r))},arguments)},__wbg_close_72f69f5f2de2bc73:function(){return m(function(e){e.close()},arguments)},__wbg_close_923aebe6bdeee300:function(e){e.close()},__wbg_close_97cdb44c3a7878f6:function(){return m(function(e){e.close()},arguments)},__wbg_close_b857478a8d4c1a16:function(){return m(function(e){e.close()},arguments)},__wbg_code_1bac1fd03147d97e:function(e,n){let t=n.code,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_code_e2719108dd8e1fec:function(e){return e.code},__wbg_colorMask_5646450fe1f1b723:function(e,n,t,r,i){e.colorMask(n!==0,t!==0,r!==0,i!==0)},__wbg_colorMask_8fca508f44773327:function(e,n,t,r,i){e.colorMask(n!==0,t!==0,r!==0,i!==0)},__wbg_compileShader_4ede19e4fc1bebce:function(e,n){e.compileShader(n)},__wbg_compileShader_ac457ada9042f08e:function(e,n){e.compileShader(n)},__wbg_compressedTexSubImage2D_0968a85385b7c463:function(e,n,t,r,i,s,u,c,d,b){e.compressedTexSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d,b)},__wbg_compressedTexSubImage2D_45987d7f0210d36f:function(e,n,t,r,i,s,u,c,d){e.compressedTexSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d)},__wbg_compressedTexSubImage2D_a39446fce0a68ad9:function(e,n,t,r,i,s,u,c,d){e.compressedTexSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d)},__wbg_compressedTexSubImage3D_3da84908295b8ec3:function(e,n,t,r,i,s,u,c,d,b,h,R){e.compressedTexSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h,R)},__wbg_compressedTexSubImage3D_c0bc017057e3942a:function(e,n,t,r,i,s,u,c,d,b,h){e.compressedTexSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h)},__wbg_configure_1e2c1c9edad07d26:function(){return m(function(e,n){e.configure(n)},arguments)},__wbg_configure_3edaaed280bc6de8:function(){return m(function(e,n){e.configure(n)},arguments)},__wbg_confirm_f1128d5b70df2707:function(){return m(function(e,n,t){return e.confirm(p(n,t))},arguments)},__wbg_connect_d2a36cf1f5a1ec54:function(){return m(function(e,n){return e.connect(n)},arguments)},__wbg_contains_3ba0161eb6906b95:function(e,n){return e.contains(n)},__wbg_copyBufferSubData_e5dc2aab90456f99:function(e,n,t,r,i,s){e.copyBufferSubData(n>>>0,t>>>0,r,i,s)},__wbg_copyBufferToBuffer_01766818654a9868:function(){return m(function(e,n,t,r,i){e.copyBufferToBuffer(n,t,r,i)},arguments)},__wbg_copyBufferToBuffer_9c174b96fb08d551:function(){return m(function(e,n,t,r,i,s){e.copyBufferToBuffer(n,t,r,i,s)},arguments)},__wbg_copyBufferToTexture_ff632a21ab3fe3a7:function(){return m(function(e,n,t,r){e.copyBufferToTexture(n,t,r)},arguments)},__wbg_copyTexSubImage2D_188da734d1c8aa07:function(e,n,t,r,i,s,u,c,d){e.copyTexSubImage2D(n>>>0,t,r,i,s,u,c,d)},__wbg_copyTexSubImage2D_84d99fa40fabace0:function(e,n,t,r,i,s,u,c,d){e.copyTexSubImage2D(n>>>0,t,r,i,s,u,c,d)},__wbg_copyTexSubImage3D_89064e67340a38b3:function(e,n,t,r,i,s,u,c,d,b){e.copyTexSubImage3D(n>>>0,t,r,i,s,u,c,d,b)},__wbg_copyTextureToBuffer_1234b3210431ad05:function(){return m(function(e,n,t,r){e.copyTextureToBuffer(n,t,r)},arguments)},__wbg_copyTextureToTexture_d2e6a1eb3254b828:function(){return m(function(e,n,t,r){e.copyTextureToTexture(n,t,r)},arguments)},__wbg_copyToAudioBufferInterleaved_ebaf4f5e12f8d393:function(e,n,t){Pt(e,V(n,t))},__wbg_copyTo_394d7e9635015a1f:function(e,n,t){return e.copyTo(fe(n,t))},__wbg_createBindGroupLayout_b1bd63b4e88459d8:function(){return m(function(e,n){return e.createBindGroupLayout(n)},arguments)},__wbg_createBindGroup_f539b26ca341308f:function(e,n){return e.createBindGroup(n)},__wbg_createBufferSource_3679674c3bfc1e4e:function(){return m(function(e){return e.createBufferSource()},arguments)},__wbg_createBuffer_44b37c222efbd326:function(e){let n=e.createBuffer();return k(n)?0:A(n)},__wbg_createBuffer_9b192707f1e81570:function(){return m(function(e,n,t,r){return e.createBuffer(n>>>0,t>>>0,r)},arguments)},__wbg_createBuffer_af6c411fe2b091f8:function(e){let n=e.createBuffer();return k(n)?0:A(n)},__wbg_createBuffer_d800e9b1d41b2ee5:function(){return m(function(e,n){return e.createBuffer(n)},arguments)},__wbg_createCommandEncoder_3352d1ffc36c6fc0:function(e,n){return e.createCommandEncoder(n)},__wbg_createElementNS_f18ede2d74f15ea1:function(){return m(function(e,n,t,r,i){return e.createElementNS(n===0?void 0:p(n,t),p(r,i))},arguments)},__wbg_createElement_7f42344eee7bb810:function(){return m(function(e,n,t){return e.createElement(p(n,t))},arguments)},__wbg_createFramebuffer_4dc2fb6bd93463a5:function(e){let n=e.createFramebuffer();return k(n)?0:A(n)},__wbg_createFramebuffer_e6d8917bf9291c65:function(e){let n=e.createFramebuffer();return k(n)?0:A(n)},__wbg_createLinearGradient_d16f7c26c44e0b0a:function(e,n,t,r,i){return e.createLinearGradient(n,t,r,i)},__wbg_createObjectURL_da379bd6bf9a91c6:function(){return m(function(e,n){let t=URL.createObjectURL(n),r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},arguments)},__wbg_createPattern_f95263b497f37f3c:function(){return m(function(e,n,t,r){let i=e.createPattern(n,p(t,r));return k(i)?0:A(i)},arguments)},__wbg_createPipelineLayout_6eab52c327118937:function(e,n){return e.createPipelineLayout(n)},__wbg_createProgram_2ebbd17565e0ede7:function(e){let n=e.createProgram();return k(n)?0:A(n)},__wbg_createProgram_81b37242eadef893:function(e){let n=e.createProgram();return k(n)?0:A(n)},__wbg_createQuerySet_2dc8cde53df9849d:function(){return m(function(e,n){return e.createQuerySet(n)},arguments)},__wbg_createQuery_5ef5edffbd3a678d:function(e){let n=e.createQuery();return k(n)?0:A(n)},__wbg_createRadialGradient_c816f53e6e0afb32:function(){return m(function(e,n,t,r,i,s,u){return e.createRadialGradient(n,t,r,i,s,u)},arguments)},__wbg_createRenderPipeline_0ebb7ebc653e9207:function(){return m(function(e,n){return e.createRenderPipeline(n)},arguments)},__wbg_createRenderbuffer_be624f81e06a0cfd:function(e){let n=e.createRenderbuffer();return k(n)?0:A(n)},__wbg_createRenderbuffer_cd2638d5dda9c277:function(e){let n=e.createRenderbuffer();return k(n)?0:A(n)},__wbg_createSampler_9bd91d7e928c0060:function(e,n){return e.createSampler(n)},__wbg_createSampler_f1aedbf47c21745a:function(e){let n=e.createSampler();return k(n)?0:A(n)},__wbg_createShaderModule_cefa51336cb288ae:function(e,n){return e.createShaderModule(n)},__wbg_createShader_9a8e5f335caac850:function(e,n){let t=e.createShader(n>>>0);return k(t)?0:A(t)},__wbg_createShader_f8638cf4c19a1d2d:function(e,n){let t=e.createShader(n>>>0);return k(t)?0:A(t)},__wbg_createTexture_42c791197006c64a:function(e){let n=e.createTexture();return k(n)?0:A(n)},__wbg_createTexture_c74740f68b5c2a93:function(e){let n=e.createTexture();return k(n)?0:A(n)},__wbg_createTexture_ed7e9fc04dd54d84:function(){return m(function(e,n){return e.createTexture(n)},arguments)},__wbg_createVertexArrayOES_f7e8c94194c4e075:function(e){let n=e.createVertexArrayOES();return k(n)?0:A(n)},__wbg_createVertexArray_abd18ded26b75653:function(e){let n=e.createVertexArray();return k(n)?0:A(n)},__wbg_createView_da41c2d2cb212715:function(){return m(function(e,n){return e.createView(n)},arguments)},__wbg_ctrlKey_8f6cb44d63052c81:function(e){return e.ctrlKey},__wbg_cullFace_053fc24c214cae86:function(e,n){e.cullFace(n>>>0)},__wbg_cullFace_94e1cd382e8b654f:function(e,n){e.cullFace(n>>>0)},__wbg_currentTarget_81d519ad9e5a92ec:function(e){let n=e.currentTarget;return k(n)?0:A(n)},__wbg_currentTime_5594ee0e8ef1889a:function(e){return e.currentTime},__wbg_d_fda8f6ed85d1e057:function(e){return e.d},__wbg_data_51774c2dcd0a0e9f:function(e,n){let t=n.data,r=Dr(t,_.__wbindgen_malloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_data_57d8ce4eb5f0a433:function(e){return e.data},__wbg_decodeQueueSize_cc0c71f3c63c501b:function(e){return e.decodeQueueSize},__wbg_decode_cba6160770a46397:function(){return m(function(e,n){e.decode(n)},arguments)},__wbg_deleteBuffer_42bd497a20b76d88:function(e,n){e.deleteBuffer(n)},__wbg_deleteBuffer_50f20219abee4d05:function(e,n){e.deleteBuffer(n)},__wbg_deleteFramebuffer_073235a01c2a0a28:function(e,n){e.deleteFramebuffer(n)},__wbg_deleteFramebuffer_07fcc16563d17920:function(e,n){e.deleteFramebuffer(n)},__wbg_deleteProgram_0191056307686073:function(e,n){e.deleteProgram(n)},__wbg_deleteProgram_ee7f1925cb856dc2:function(e,n){e.deleteProgram(n)},__wbg_deleteQuery_4624acbf9cbfc6e2:function(e,n){e.deleteQuery(n)},__wbg_deleteRenderbuffer_570117534d9608a1:function(e,n){e.deleteRenderbuffer(n)},__wbg_deleteRenderbuffer_ba4a805dfac20358:function(e,n){e.deleteRenderbuffer(n)},__wbg_deleteSampler_527e8d31f81669d9:function(e,n){e.deleteSampler(n)},__wbg_deleteShader_2558228a4ef7373e:function(e,n){e.deleteShader(n)},__wbg_deleteShader_413961eb94f5c67c:function(e,n){e.deleteShader(n)},__wbg_deleteSync_11f80510355180d6:function(e,n){e.deleteSync(n)},__wbg_deleteTexture_0ccd278d6db819ff:function(e,n){e.deleteTexture(n)},__wbg_deleteTexture_aadf9716c394d7be:function(e,n){e.deleteTexture(n)},__wbg_deleteVertexArrayOES_e43a9a425587d52b:function(e,n){e.deleteVertexArrayOES(n)},__wbg_deleteVertexArray_106030034355d246:function(e,n){e.deleteVertexArray(n)},__wbg_delete_daeb0136382e63b0:function(){return m(function(e,n,t){delete e[p(n,t)]},arguments)},__wbg_deltaMode_1eedd4132dd540ba:function(e){return e.deltaMode},__wbg_deltaY_13780a1f1e6d6f8c:function(e){return e.deltaY},__wbg_depthFunc_6c6f948417f5bde4:function(e,n){e.depthFunc(n>>>0)},__wbg_depthFunc_bb3152f635a60ff2:function(e,n){e.depthFunc(n>>>0)},__wbg_depthMask_4e0075e07739355b:function(e,n){e.depthMask(n!==0)},__wbg_depthMask_bdc57b9e64c6b4d8:function(e,n){e.depthMask(n!==0)},__wbg_depthRange_0acaf3031a92d51d:function(e,n,t){e.depthRange(n,t)},__wbg_depthRange_e2d0a59942d33efd:function(e,n,t){e.depthRange(n,t)},__wbg_description_83b8a393160021b9:function(e,n){let t=n.description,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_destination_f6ba56e7f07829d0:function(e){return e.destination},__wbg_destroy_637537007d9eaa44:function(e){e.destroy()},__wbg_devicePixelRatio_e60a2d12bfd01f78:function(e){return e.devicePixelRatio},__wbg_disableVertexAttribArray_98752beca840c3da:function(e,n){e.disableVertexAttribArray(n>>>0)},__wbg_disableVertexAttribArray_aee51b7f1a8ef4cc:function(e,n){e.disableVertexAttribArray(n>>>0)},__wbg_disable_2ad210ba5315372a:function(e,n){e.disable(n>>>0)},__wbg_disable_bb1df5a6c75eaecd:function(e,n){e.disable(n>>>0)},__wbg_dispatchEvent_d63878ba8477faa4:function(){return m(function(e,n){return e.dispatchEvent(n)},arguments)},__wbg_displayClipboardModal_fd06ed44d66c8931:function(e,n){e.displayClipboardModal(n!==0)},__wbg_displayMessage_ea945f752a76f3b0:function(e,n,t){e.displayMessage(p(n,t))},__wbg_displayRestoredFromBfcacheMessage_169d3d95cdf483c8:function(e){e.displayRestoredFromBfcacheMessage()},__wbg_displayRootMovieDownloadFailedMessage_9d9770e89a2c5f72:function(e,n,t,r){let i,s;try{i=t,s=r,e.displayRootMovieDownloadFailedMessage(n!==0,p(t,r))}finally{_.__wbindgen_free(i,s,1)}},__wbg_displayUnsupportedVideo_239d3c76f55e5fbd:function(e,n,t){e.displayUnsupportedVideo(p(n,t))},__wbg_document_ac38448dbfd31a57:function(e){let n=e.document;return k(n)?0:A(n)},__wbg_done_669171204c3dcae2:function(e){return e.done},__wbg_drawArraysInstancedANGLE_cb3b87925641d5b9:function(e,n,t,r,i){e.drawArraysInstancedANGLE(n>>>0,t,r,i)},__wbg_drawArraysInstanced_45317b22bbf7ffe8:function(e,n,t,r,i){e.drawArraysInstanced(n>>>0,t,r,i)},__wbg_drawArrays_02c354e377984441:function(e,n,t,r){e.drawArrays(n>>>0,t,r)},__wbg_drawArrays_b2004a40c212065c:function(e,n,t,r){e.drawArrays(n>>>0,t,r)},__wbg_drawBuffersWEBGL_0b4935290cba977e:function(e,n){e.drawBuffersWEBGL(n)},__wbg_drawBuffers_f07f796e50bb0077:function(e,n){e.drawBuffers(n)},__wbg_drawElementsInstancedANGLE_8179cb41f5862831:function(e,n,t,r,i,s){e.drawElementsInstancedANGLE(n>>>0,t,r>>>0,i,s)},__wbg_drawElementsInstanced_07717eeb890435e9:function(e,n,t,r,i,s){e.drawElementsInstanced(n>>>0,t,r>>>0,i,s)},__wbg_drawElements_39fd9be525b4845b:function(e,n,t,r,i){e.drawElements(n>>>0,t,r>>>0,i)},__wbg_drawImage_87a05b54f458ec06:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.drawImage(n,t,r,i,s,u,c,d,b)},arguments)},__wbg_drawIndexed_638959aae942557c:function(e,n,t,r,i,s){e.drawIndexed(n>>>0,t>>>0,r>>>0,i,s>>>0)},__wbg_drawingBufferHeight_9574a81ca1940829:function(e){return e.drawingBufferHeight},__wbg_drawingBufferWidth_95a3d167a67d18dc:function(e){return e.drawingBufferWidth},__wbg_e_59a2a263244aebfc:function(e){return e.e},__wbg_enableVertexAttribArray_90f1a9f570379c36:function(e,n){e.enableVertexAttribArray(n>>>0)},__wbg_enableVertexAttribArray_b072ffcbe4f26e2b:function(e,n){e.enableVertexAttribArray(n>>>0)},__wbg_enable_17346ff3b2257cae:function(e,n){e.enable(n>>>0)},__wbg_enable_db1e433ea267f29b:function(e,n){e.enable(n>>>0)},__wbg_endQuery_0434371d408e59b7:function(e,n){e.endQuery(n>>>0)},__wbg_end_b57473834b877409:function(e){e.end()},__wbg_enqueue_7d68a21eda78e72f:function(){return m(function(e,n){e.enqueue(n)},arguments)},__wbg_entries_7774d489e1da5f4f:function(e){return Object.entries(e)},__wbg_error_757e9472f8410341:function(e,n){let t,r;try{t=e,r=n,console.error(p(e,n))}finally{_.__wbindgen_free(t,r,1)}},__wbg_execCommand_cd03aa5ebc21f204:function(){return m(function(e,n,t){return e.execCommand(p(n,t))},arguments)},__wbg_f_ea46ea3f61f48c32:function(e){return e.f},__wbg_features_5cac120c28ba0475:function(e){return e.features},__wbg_features_dec7bd2fd3d91bd6:function(e){return e.features},__wbg_fenceSync_57ab30f550e5a5a2:function(e,n,t){let r=e.fenceSync(n>>>0,t>>>0);return k(r)?0:A(r)},__wbg_fetch_729fad2e5272298f:function(e,n){return e.fetch(n)},__wbg_files_56a897754f75826b:function(e){let n=e.files;return k(n)?0:A(n)},__wbg_fillRect_3077c0e38eb34cd1:function(e,n,t,r,i){e.fillRect(n,t,r,i)},__wbg_fillText_1b1e3dfee622d89d:function(){return m(function(e,n,t,r,i){e.fillText(p(n,t),r,i)},arguments)},__wbg_fill_99bc71dde47c30ec:function(e,n,t){e.fill(n,uo[t])},__wbg_finish_09ec094c10f41e7b:function(e){return e.finish()},__wbg_finish_81c066eb195fc8a9:function(e){e.finish()},__wbg_finish_94865fee5c90da6b:function(e){e.finish()},__wbg_finish_ec1c191f66a895b1:function(e,n){return e.finish(n)},__wbg_flush_2a8fa6766a4f3ada:function(e){e.flush()},__wbg_flush_918ffb9cfebcbaab:function(e){e.flush()},__wbg_focus_77d7483c7b2b9f30:function(){return m(function(e){e.focus()},arguments)},__wbg_focus_c7d4fe3aba923a18:function(){return m(function(e,n){e.focus(n)},arguments)},__wbg_fontBoundingBoxAscent_c77b10412fdb331d:function(e){return e.fontBoundingBoxAscent},__wbg_fontBoundingBoxDescent_63ee2689f66ed207:function(e){return e.fontBoundingBoxDescent},__wbg_format_41beb9ccd4250e97:function(e){let n=e.format;return k(n)?24:(Qs.indexOf(n)+1||24)-1},__wbg_framebufferRenderbuffer_5736a8553be94035:function(e,n,t,r,i){e.framebufferRenderbuffer(n>>>0,t>>>0,r>>>0,i)},__wbg_framebufferRenderbuffer_e0c873b9f296443d:function(e,n,t,r,i){e.framebufferRenderbuffer(n>>>0,t>>>0,r>>>0,i)},__wbg_framebufferTexture2D_8584b49a205ffe5b:function(e,n,t,r,i,s){e.framebufferTexture2D(n>>>0,t>>>0,r>>>0,i,s)},__wbg_framebufferTexture2D_9abab99d6209666a:function(e,n,t,r,i,s){e.framebufferTexture2D(n>>>0,t>>>0,r>>>0,i,s)},__wbg_framebufferTextureLayer_e236352620170c5a:function(e,n,t,r,i,s){e.framebufferTextureLayer(n>>>0,t>>>0,r,i,s)},__wbg_framebufferTextureMultiviewOVR_9b89dd83134856d3:function(e,n,t,r,i,s,u){e.framebufferTextureMultiviewOVR(n>>>0,t>>>0,r,i,s,u)},__wbg_fromEntries_464704b0ede47aaf:function(){return m(function(e){return Object.fromEntries(e)},arguments)},__wbg_frontFace_188579d7bba462b1:function(e,n){e.frontFace(n>>>0)},__wbg_frontFace_19294c82ae89fa71:function(e,n){e.frontFace(n>>>0)},__wbg_getAttribLocation_bddb3abf7c5c5fc0:function(e,n,t,r){return e.getAttribLocation(n,p(t,r))},__wbg_getBufferSubData_d1d7ad69c40ea085:function(e,n,t,r){e.getBufferSubData(n>>>0,t,r)},__wbg_getContext_123ddade3a0fb2f5:function(){return m(function(e,n,t,r){let i=e.getContext(p(n,t),r);return k(i)?0:A(i)},arguments)},__wbg_getContext_53c8c42beb820370:function(){return m(function(e,n,t,r){let i=e.getContext(p(n,t),r);return k(i)?0:A(i)},arguments)},__wbg_getContext_71c33f14b63da593:function(){return m(function(e,n,t){let r=e.getContext(p(n,t));return k(r)?0:A(r)},arguments)},__wbg_getContext_c5236e0057b35024:function(){return m(function(e,n,t){let r=e.getContext(p(n,t));return k(r)?0:A(r)},arguments)},__wbg_getCurrentTexture_9f3b84d0eaa6cd95:function(){return m(function(e){return e.getCurrentTexture()},arguments)},__wbg_getData_7b73a3e658ca866b:function(){return m(function(e,n,t,r){let i=n.getData(p(t,r)),s=E(i,_.__wbindgen_malloc,_.__wbindgen_realloc),u=j;S().setInt32(e+4,u,!0),S().setInt32(e+0,s,!0)},arguments)},__wbg_getError_417e3c195ccd57de:function(e){return e.getError()},__wbg_getExtension_69f46e4b97514707:function(){return m(function(e,n,t){let r=e.getExtension(p(n,t));return k(r)?0:A(r)},arguments)},__wbg_getExtension_8e8c3be603d4f5ce:function(){return m(function(e,n,t){let r=e.getExtension(p(n,t));return k(r)?0:A(r)},arguments)},__wbg_getGamepads_2493dee1cac4f38b:function(){return m(function(e){return e.getGamepads()},arguments)},__wbg_getImageData_251c6e7a33a280e5:function(){return m(function(e,n,t,r,i){return e.getImageData(n,t,r,i)},arguments)},__wbg_getIndexedParameter_fa6cca29d50de787:function(){return m(function(e,n,t){return e.getIndexedParameter(n>>>0,t>>>0)},arguments)},__wbg_getMappedRange_fb54c6327b2d8d20:function(){return m(function(e,n,t){return e.getMappedRange(n,t)},arguments)},__wbg_getObjectId_0985e89441bbf45b:function(e,n){let t=n.getObjectId();var r=k(t)?0:E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_getParameter_19325d4aa1b66856:function(){return m(function(e,n){return e.getParameter(n>>>0)},arguments)},__wbg_getParameter_7ddbe9f9606f6a80:function(){return m(function(e,n){return e.getParameter(n>>>0)},arguments)},__wbg_getPreferredCanvasFormat_0ef5034c8902201b:function(e){let n=e.getPreferredCanvasFormat();return(Ue.indexOf(n)+1||102)-1},__wbg_getProgramInfoLog_50a07d12dddd0da6:function(e,n,t){let r=n.getProgramInfoLog(t);var i=k(r)?0:E(r,_.__wbindgen_malloc,_.__wbindgen_realloc),s=j;S().setInt32(e+4,s,!0),S().setInt32(e+0,i,!0)},__wbg_getProgramInfoLog_72665662cf78b5a2:function(e,n,t){let r=n.getProgramInfoLog(t);var i=k(r)?0:E(r,_.__wbindgen_malloc,_.__wbindgen_realloc),s=j;S().setInt32(e+4,s,!0),S().setInt32(e+0,i,!0)},__wbg_getProgramParameter_1f5cceb73030e823:function(e,n,t){return e.getProgramParameter(n,t>>>0)},__wbg_getProgramParameter_41e1ea6f52a71ba5:function(e,n,t){return e.getProgramParameter(n,t>>>0)},__wbg_getQueryParameter_fa2ce36cfdedc862:function(e,n,t){return e.getQueryParameter(n,t>>>0)},__wbg_getRandomValues_436a51d0629d84e1:function(){return m(function(e,n){globalThis.crypto.getRandomValues(fe(e,n))},arguments)},__wbg_getReader_9facd4f899beac89:function(){return m(function(e){return e.getReader()},arguments)},__wbg_getRootNode_f79810b049364fd5:function(e){return e.getRootNode()},__wbg_getShaderInfoLog_337a0567e83283d1:function(e,n,t){let r=n.getShaderInfoLog(t);var i=k(r)?0:E(r,_.__wbindgen_malloc,_.__wbindgen_realloc),s=j;S().setInt32(e+4,s,!0),S().setInt32(e+0,i,!0)},__wbg_getShaderInfoLog_663a9b136ab42b32:function(e,n,t){let r=n.getShaderInfoLog(t);var i=k(r)?0:E(r,_.__wbindgen_malloc,_.__wbindgen_realloc),s=j;S().setInt32(e+4,s,!0),S().setInt32(e+0,i,!0)},__wbg_getShaderParameter_95d4ad40668ee798:function(e,n,t){return e.getShaderParameter(n,t>>>0)},__wbg_getShaderParameter_9e9aa18598294f3b:function(e,n,t){return e.getShaderParameter(n,t>>>0)},__wbg_getSupportedExtensions_63e3eaba880055c5:function(e){let n=e.getSupportedExtensions();return k(n)?0:A(n)},__wbg_getSupportedProfiles_7cd826b4eff5e8fc:function(e){let n=e.getSupportedProfiles();return k(n)?0:A(n)},__wbg_getSyncParameter_3eb3ecefa061c5ee:function(e,n,t){return e.getSyncParameter(n,t>>>0)},__wbg_getTime_63fb0332e6c4ec17:function(e){return e.getTime()},__wbg_getTimezoneOffset_4baa793e0d3962a8:function(e){return e.getTimezoneOffset()},__wbg_getUniformBlockIndex_78264d4d94f8252d:function(e,n,t,r){return e.getUniformBlockIndex(n,p(t,r))},__wbg_getUniformLocation_11fd99fee70965dc:function(e,n,t,r){let i=e.getUniformLocation(n,p(t,r));return k(i)?0:A(i)},__wbg_getUniformLocation_c493d2f5f1a6213d:function(e,n,t,r){let i=e.getUniformLocation(n,p(t,r));return k(i)?0:A(i)},__wbg_get_36debceb6d43d7a1:function(e,n){let t=e[n>>>0];return k(t)?0:A(t)},__wbg_get_7473564f5d9fdd2a:function(){return m(function(e,n,t,r){let i=n.get(p(t,r));var s=k(i)?0:E(i,_.__wbindgen_malloc,_.__wbindgen_realloc),u=j;S().setInt32(e+4,u,!0),S().setInt32(e+0,s,!0)},arguments)},__wbg_get_836a517ee3483cda:function(e,n){let t=e[n>>>0];return k(t)?0:A(t)},__wbg_get_971a0c45d172643f:function(){return m(function(e,n){return Reflect.get(e,n)},arguments)},__wbg_get_c0c8f8d7da0c03dd:function(e,n){return e[n>>>0]},__wbg_get_done_ce5b5691b59c07f2:function(e){let n=e.done;return k(n)?16777215:n?1:0},__wbg_get_ed35166764b1a44e:function(){return m(function(e,n,t,r){let i=n[p(t,r)];var s=k(i)?0:E(i,_.__wbindgen_malloc,_.__wbindgen_realloc),u=j;S().setInt32(e+4,u,!0),S().setInt32(e+0,s,!0)},arguments)},__wbg_get_unchecked_e20b893aeafc3fca:function(e,n){return e[n>>>0]},__wbg_get_value_58309ba057b715e1:function(e){return e.value},__wbg_gpu_afdd4387c7afe5f9:function(e){return e.gpu},__wbg_has_b3a6e6d0d28295fa:function(){return m(function(e,n){return Reflect.has(e,n)},arguments)},__wbg_has_eafa12e457ea88fb:function(e,n,t){return e.has(p(n,t))},__wbg_headers_6dedf39f001ae99d:function(e){return e.headers},__wbg_headers_92567b07014384b9:function(e){return e.headers},__wbg_height_b0594a7850e20673:function(e){return e.height},__wbg_height_c25c887c11a170f2:function(e){return e.height},__wbg_height_e56f6fb197710e09:function(e){return e.height},__wbg_height_e6a5d9a72f05fc93:function(e){return e.height},__wbg_host_f512e97ce1222138:function(e){return e.host},__wbg_href_ab966bccc773240e:function(){return m(function(e,n){let t=n.href,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},arguments)},__wbg_includes_a4b83ade703cb80b:function(e,n,t){return e.includes(n,t)},__wbg_info_971d8b9db3dae69f:function(e){return e.info},__wbg_instanceof_ArrayBuffer_993d02d2d254cad1:function(e){let n;try{n=e instanceof ArrayBuffer}catch{n=!1}return n},__wbg_instanceof_CanvasRenderingContext2d_d23139c3ef7651a3:function(e){let n;try{n=e instanceof CanvasRenderingContext2D}catch{n=!1}return n},__wbg_instanceof_Error_61d8a02a0f3383a1:function(e){let n;try{n=e instanceof Error}catch{n=!1}return n},__wbg_instanceof_GamepadButton_9c609e47a6145e8f:function(e){let n;try{n=e instanceof GamepadButton}catch{n=!1}return n},__wbg_instanceof_Gamepad_31b15eaf4b6abc5a:function(e){let n;try{n=e instanceof Gamepad}catch{n=!1}return n},__wbg_instanceof_HtmlAnchorElement_d90f42ba7073afb6:function(e){let n;try{n=e instanceof HTMLAnchorElement}catch{n=!1}return n},__wbg_instanceof_HtmlButtonElement_806e934e95055a80:function(e){let n;try{n=e instanceof HTMLButtonElement}catch{n=!1}return n},__wbg_instanceof_HtmlCanvasElement_327e7f7530c72bbd:function(e){let n;try{n=e instanceof HTMLCanvasElement}catch{n=!1}return n},__wbg_instanceof_HtmlDocument_a1109ab62f86ff41:function(e){let n;try{n=e instanceof HTMLDocument}catch{n=!1}return n},__wbg_instanceof_HtmlElement_6b02a3740edba922:function(e){let n;try{n=e instanceof HTMLElement}catch{n=!1}return n},__wbg_instanceof_HtmlFormElement_ab33e8c914cfe17d:function(e){let n;try{n=e instanceof HTMLFormElement}catch{n=!1}return n},__wbg_instanceof_HtmlInputElement_6077656bcaf1eb33:function(e){let n;try{n=e instanceof HTMLInputElement}catch{n=!1}return n},__wbg_instanceof_HtmlTextAreaElement_6d5fbbcef108f57a:function(e){let n;try{n=e instanceof HTMLTextAreaElement}catch{n=!1}return n},__wbg_instanceof_Node_ad9597995317f467:function(e){let n;try{n=e instanceof Node}catch{n=!1}return n},__wbg_instanceof_OffscreenCanvasRenderingContext2d_bf5c11dbcfe648e6:function(e){let n;try{n=e instanceof OffscreenCanvasRenderingContext2D}catch{n=!1}return n},__wbg_instanceof_Response_8f49efbd4bfd76d6:function(e){let n;try{n=e instanceof Response}catch{n=!1}return n},__wbg_instanceof_ShadowRoot_55844b1b54688323:function(e){let n;try{n=e instanceof ShadowRoot}catch{n=!1}return n},__wbg_instanceof_WebGl2RenderingContext_e27143c72f888655:function(e){let n;try{n=e instanceof WebGL2RenderingContext}catch{n=!1}return n},__wbg_instanceof_WebGlRenderingContext_7a2f73729caa1761:function(e){let n;try{n=e instanceof WebGLRenderingContext}catch{n=!1}return n},__wbg_instanceof_Window_5625ff9937037a38:function(e){let n;try{n=e instanceof Window}catch{n=!1}return n},__wbg_invalidateFramebuffer_9a711eeb3940aba0:function(){return m(function(e,n,t){e.invalidateFramebuffer(n>>>0,t)},arguments)},__wbg_inverse_979493bf592e8237:function(e){return e.inverse()},__wbg_isActive_030dfade2dac2b18:function(e){return e.isActive},__wbg_isArray_6339f732981044bf:function(e){return Array.isArray(e)},__wbg_isFallbackAdapter_4c8cc3b18677460a:function(e){return e.isFallbackAdapter},__wbg_isVirtualKeyboardFocused_8d4544b5f4283a8d:function(e){return e.isVirtualKeyboardFocused()},__wbg_is_86be747e88e872fb:function(e,n){return Object.is(e,n)},__wbg_key_d1b2fd5ee42567c0:function(e,n){let t=n.key,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_label_7add8cb37a6ef98f:function(e,n){let t=n.label,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_language_8bf4dda293978baf:function(e,n){let t=n.language;var r=k(t)?0:E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_lastModified_a866385c6ec928bb:function(e){return e.lastModified},__wbg_length_2dd58ff350b5afcd:function(e){return e.length},__wbg_length_36bd29c6848c2144:function(e){return e.length},__wbg_length_ecfa2c63d3d0d82c:function(e){return e.length},__wbg_length_fe334960471188ea:function(e){return e.length},__wbg_limits_06bcb36c8409843b:function(e){return e.limits},__wbg_limits_601ad2e086ef8141:function(e){return e.limits},__wbg_lineTo_55f2d19e97fe770d:function(e,n,t){e.lineTo(n,t)},__wbg_linkProgram_124252d16ea0ef40:function(e,n){e.linkProgram(n)},__wbg_linkProgram_dd3cfc19950a354c:function(e,n){e.linkProgram(n)},__wbg_localStorage_19bddab1e4cb2413:function(){return m(function(e){let n=e.localStorage;return k(n)?0:A(n)},arguments)},__wbg_location_00f2951912aef6cc:function(e){return e.location},__wbg_location_5d269cf0aa99107a:function(e){return e.location},__wbg_log_1f8cbb01c83d06c2:function(e,n,t,r,i,s,u,c){let d,b;try{d=e,b=n,console.log(p(e,n),p(t,r),p(i,s),p(u,c))}finally{_.__wbindgen_free(d,b,1)}},__wbg_log_a54ca6b45e09078a:function(e,n){let t,r;try{t=e,r=n,console.log(p(e,n))}finally{_.__wbindgen_free(t,r,1)}},__wbg_mapAsync_b0597127f5037286:function(e,n,t,r){return e.mapAsync(n>>>0,t,r)},__wbg_mark_6b7f03786f5e4d61:function(e,n){performance.mark(p(e,n))},__wbg_matchMedia_0e2963d34f3ddd40:function(){return m(function(e,n,t){let r=e.matchMedia(p(n,t));return k(r)?0:A(r)},arguments)},__wbg_matches_72427e51457a4411:function(e){return e.matches},__wbg_maxBindGroupsPlusVertexBuffers_52369f089736ef9d:function(e){return e.maxBindGroupsPlusVertexBuffers},__wbg_maxBindGroups_4e424afe6ce86ca2:function(e){return e.maxBindGroups},__wbg_maxBindingsPerBindGroup_7d035da36821c44f:function(e){return e.maxBindingsPerBindGroup},__wbg_maxBufferSize_423f4a084e32a195:function(e){return e.maxBufferSize},__wbg_maxColorAttachmentBytesPerSample_c4cd9126f6d287c6:function(e){return e.maxColorAttachmentBytesPerSample},__wbg_maxColorAttachments_d924670762b9e250:function(e){return e.maxColorAttachments},__wbg_maxComputeInvocationsPerWorkgroup_707a3868f7cebb59:function(e){return e.maxComputeInvocationsPerWorkgroup},__wbg_maxComputeWorkgroupSizeX_0a4d99463cbd6e5e:function(e){return e.maxComputeWorkgroupSizeX},__wbg_maxComputeWorkgroupSizeY_85123ea0587f7558:function(e){return e.maxComputeWorkgroupSizeY},__wbg_maxComputeWorkgroupSizeZ_a3186b4c5267d44f:function(e){return e.maxComputeWorkgroupSizeZ},__wbg_maxComputeWorkgroupStorageSize_57b297355cfb6204:function(e){return e.maxComputeWorkgroupStorageSize},__wbg_maxComputeWorkgroupsPerDimension_4158f95e673d54c4:function(e){return e.maxComputeWorkgroupsPerDimension},__wbg_maxDynamicStorageBuffersPerPipelineLayout_226b0b70910aa16c:function(e){return e.maxDynamicStorageBuffersPerPipelineLayout},__wbg_maxDynamicUniformBuffersPerPipelineLayout_0e835fda711fc7e6:function(e){return e.maxDynamicUniformBuffersPerPipelineLayout},__wbg_maxInterStageShaderVariables_8c4a1d727e2aa35a:function(e){return e.maxInterStageShaderVariables},__wbg_maxSampledTexturesPerShaderStage_6675f5e91d9a728a:function(e){return e.maxSampledTexturesPerShaderStage},__wbg_maxSamplersPerShaderStage_1910fa38a6ed1e1f:function(e){return e.maxSamplersPerShaderStage},__wbg_maxStorageBufferBindingSize_2e244bded070b18d:function(e){return e.maxStorageBufferBindingSize},__wbg_maxStorageBuffersPerShaderStage_a285f3ebca51ca0d:function(e){return e.maxStorageBuffersPerShaderStage},__wbg_maxStorageTexturesPerShaderStage_7aa946f0fc322a2b:function(e){return e.maxStorageTexturesPerShaderStage},__wbg_maxTextureArrayLayers_0e699147ad00502d:function(e){return e.maxTextureArrayLayers},__wbg_maxTextureDimension1D_aabf6add54decfe2:function(e){return e.maxTextureDimension1D},__wbg_maxTextureDimension2D_dd598b27e9c0c1c4:function(e){return e.maxTextureDimension2D},__wbg_maxTextureDimension3D_f944266c65dfd1a9:function(e){return e.maxTextureDimension3D},__wbg_maxUniformBufferBindingSize_59fa6be7cfbeeb53:function(e){return e.maxUniformBufferBindingSize},__wbg_maxUniformBuffersPerShaderStage_bee5f00a4d706c7f:function(e){return e.maxUniformBuffersPerShaderStage},__wbg_maxVertexAttributes_5cf6392c4e9033fe:function(e){return e.maxVertexAttributes},__wbg_maxVertexBufferArrayStride_548baa887375d865:function(e){return e.maxVertexBufferArrayStride},__wbg_maxVertexBuffers_75d881156591f5da:function(e){return e.maxVertexBuffers},__wbg_measureText_138b46c6b2239fe9:function(){return m(function(e,n,t){return e.measureText(p(n,t))},arguments)},__wbg_measure_0e21b33a1c6e3a29:function(){return m(function(e,n,t,r){let i,s,u,c;try{i=e,s=n,u=t,c=r,performance.measure(p(e,n),p(t,r))}finally{_.__wbindgen_free(i,s,1),_.__wbindgen_free(u,c,1)}},arguments)},__wbg_message_88eda073e68b1d26:function(e,n){let t=n.message,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_message_c141d5e68716b595:function(e){return e.message},__wbg_metaKey_917f037461143e51:function(e){return e.metaKey},__wbg_minStorageBufferOffsetAlignment_5ba9b77792bdadb3:function(e){return e.minStorageBufferOffsetAlignment},__wbg_minUniformBufferOffsetAlignment_ab7d52a5293b22bd:function(e){return e.minUniformBufferOffsetAlignment},__wbg_moveTo_b163e74b8926c626:function(e,n,t){e.moveTo(n,t)},__wbg_name_41b795553ec88cd8:function(e,n){let t=n.name,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_name_7adfb7f7f1539878:function(e){return e.name},__wbg_navigator_6cfdd5fa246d910f:function(e){return e.navigator},__wbg_navigator_e5c345298a9609cd:function(e){return e.navigator},__wbg_new_033da64d293f5a26:function(){return m(function(e){return new VideoDecoder(e)},arguments)},__wbg_new_0_f117d868b403dc07:function(){return new Date},__wbg_new_116be93542d39019:function(){return new Array},__wbg_new_1f27644530c822b2:function(){return m(function(){return new FileReader},arguments)},__wbg_new_20a7c62e9b30cbf7:function(){return m(function(e,n){return new WebSocket(p(e,n))},arguments)},__wbg_new_227d7c05414eb861:function(){return new Error},__wbg_new_358857d90afd5a2d:function(e,n){return new Error(p(e,n))},__wbg_new_3ce973d9e04baf94:function(){return m(function(e){return new EncodedVideoChunk(e)},arguments)},__wbg_new_418fb92a013d5930:function(e,n){try{var t={a:e,b:n},r=(s,u)=>{let c=t.a;t.a=0;try{return so(c,t.b,s,u)}finally{t.a=c}};return new Promise(r)}finally{t.a=0}},__wbg_new_652118cdee90118f:function(){return m(function(e,n){return new OffscreenCanvas(e>>>0,n>>>0)},arguments)},__wbg_new_6fa4b00b7fe13e4b:function(){return m(function(){return new Path2D},arguments)},__wbg_new_77cc4f4f472aeb81:function(e){return new Uint8Array(e)},__wbg_new_ebe3e0f6837f0879:function(){return new Object},__wbg_new_ec007c098ac92ebf:function(){return m(function(){return new DOMMatrix},arguments)},__wbg_new_f9d6489212f3b2b3:function(e){return new Date(e)},__wbg_new_from_slice_3eea173078478cfe:function(e,n){return new Uint8Array(fe(e,n))},__wbg_new_typed_ad9b105a7be50737:function(){return new Object},__wbg_new_typed_cceaf62d8d95e9f2:function(e,n){try{var t={a:e,b:n},r=(s,u)=>{let c=t.a;t.a=0;try{return so(c,t.b,s,u)}finally{t.a=c}};return new Promise(r)}finally{t.a=0}},__wbg_new_with_array64_77901f8040d2e3f6:function(){return m(function(e,n){return new DOMMatrix(eu(e,n))},arguments)},__wbg_new_with_buffer_source_sequence_and_options_a0124a2dac7638be:function(){return m(function(e,n){return new Blob(e,n)},arguments)},__wbg_new_with_byte_offset_and_length_ff6e927f8d72f0c3:function(e,n,t){return new Uint8Array(e,n>>>0,t>>>0)},__wbg_new_with_context_options_06b7c8f962e9da06:function(){return m(function(e){return new us(e)},arguments)},__wbg_new_with_event_init_dict_77122dca3c723f0c:function(){return m(function(e,n,t){return new CloseEvent(p(e,n),t)},arguments)},__wbg_new_with_str_and_init_5a37d576dec75a86:function(){return m(function(e,n,t){return new Request(p(e,n),t)},arguments)},__wbg_new_with_sw_cced22be0cbff0d3:function(){return m(function(e,n){return new ImageData(e>>>0,n>>>0)},arguments)},__wbg_new_with_u8_array_sequence_6f96909d5e4901f9:function(){return m(function(e){return new Blob(e)},arguments)},__wbg_new_with_u8_array_sequence_and_options_a7cc7b64ed3eb153:function(){return m(function(e,n){return new Blob(e,n)},arguments)},__wbg_new_with_u8_clamped_array_2fcfd0f372cd4225:function(){return m(function(e,n,t){return new ImageData(ou(e,n),t>>>0)},arguments)},__wbg_next_42cf16ee0dafc9e2:function(){return m(function(e){return e.next()},arguments)},__wbg_now_e7c6795a7f81e10f:function(e){return e.now()},__wbg_of_0c6464fa8d2aa86d:function(e){return Array.of(e)},__wbg_of_598c0ff0cd48a890:function(e,n){return Array.of(e,n)},__wbg_offsetX_878997328bd9eaa4:function(e){return e.offsetX},__wbg_offsetY_228d7dd70336f05d:function(e){return e.offsetY},__wbg_ok_917dc17857b16c56:function(e){return e.ok},__wbg_onCallbackAvailable_65b4977d95b65b44:function(e,n,t){e.onCallbackAvailable(p(n,t))},__wbg_onSubmittedWorkDone_1190213cee1ecf7e:function(e){return e.onSubmittedWorkDone()},__wbg_openVirtualKeyboard_f75467073ad97533:function(e){e.openVirtualKeyboard()},__wbg_open_67cee4f3ea60a981:function(){return m(function(e,n,t,r,i){let s=e.open(p(n,t),p(r,i));return k(s)?0:A(s)},arguments)},__wbg_ownKeys_49880e0197268893:function(){return m(function(e){return Reflect.ownKeys(e)},arguments)},__wbg_panic_5211f24783f67890:function(e,n){e.panic(n)},__wbg_parentElement_ef76606593484767:function(e){let n=e.parentElement;return k(n)?0:A(n)},__wbg_performance_3fcf6e32a7e1ed0a:function(e){return e.performance},__wbg_persisted_03e56c5f9080ac54:function(e){return e.persisted},__wbg_pixelStorei_11bdfb5bc6a39d28:function(e,n,t){e.pixelStorei(n>>>0,t)},__wbg_pixelStorei_86481a168d6e225e:function(e,n,t){e.pixelStorei(n>>>0,t)},__wbg_platform_723fb7833ed963df:function(){return m(function(e,n){let t=n.platform,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},arguments)},__wbg_pointerId_c1e1cd6b32d6d017:function(e){return e.pointerId},__wbg_polygonOffset_2b8b141e8cc17c10:function(e,n,t){e.polygonOffset(n,t)},__wbg_polygonOffset_94b427c5130ab6c2:function(e,n,t){e.polygonOffset(n,t)},__wbg_popDebugGroup_87cc10f02f9baa29:function(e){e.popDebugGroup()},__wbg_popDebugGroup_fc6cf5f2069b07ea:function(e){e.popDebugGroup()},__wbg_pressed_0ef66768049be92d:function(e){return e.pressed},__wbg_preventDefault_19878c58b8010668:function(e){e.preventDefault()},__wbg_protocol_537788ea57915c6c:function(){return m(function(e,n){let t=n.protocol,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},arguments)},__wbg_prototypesetcall_de8e0d9553586985:function(e,n,t){Uint8Array.prototype.set.call(fe(e,n),t)},__wbg_pushDebugGroup_20949a2b29d3bd19:function(e,n,t){e.pushDebugGroup(p(n,t))},__wbg_pushDebugGroup_356e96c0f79bab32:function(e,n,t){e.pushDebugGroup(p(n,t))},__wbg_push_adb0107829f02d75:function(e,n){return e.push(n)},__wbg_putImageData_78f2f075ef560bf6:function(){return m(function(e,n,t,r){e.putImageData(n,t,r)},arguments)},__wbg_quadraticCurveTo_f60aa9069b458c65:function(e,n,t,r,i){e.quadraticCurveTo(n,t,r,i)},__wbg_queryCounterEXT_b0cddcdfb28830df:function(e,n,t){e.queryCounterEXT(n,t>>>0)},__wbg_querySelectorAll_9b6a612499ecb916:function(){return m(function(e,n,t){return e.querySelectorAll(p(n,t))},arguments)},__wbg_querySelector_2c472eddb417c6b3:function(){return m(function(e,n,t){let r=e.querySelector(p(n,t));return k(r)?0:A(r)},arguments)},__wbg_querySelector_839d6534e69c0f64:function(){return m(function(e,n,t){let r=e.querySelector(p(n,t));return k(r)?0:A(r)},arguments)},__wbg_queueMicrotask_ac694eae12e92dfb:function(e){queueMicrotask(e)},__wbg_queueMicrotask_be5fe34a8f4cad4d:function(e){return e.queueMicrotask},__wbg_queue_7b62c28143d44293:function(e){return e.queue},__wbg_readAsArrayBuffer_1e0bf6cd0613d7fd:function(){return m(function(e,n){e.readAsArrayBuffer(n)},arguments)},__wbg_readBuffer_2de0b72ac08915c8:function(e,n){e.readBuffer(n>>>0)},__wbg_readPixels_0033d2834b498dda:function(){return m(function(e,n,t,r,i,s,u,c){e.readPixels(n,t,r,i,s>>>0,u>>>0,c)},arguments)},__wbg_readPixels_0e3230bf7a891882:function(){return m(function(e,n,t,r,i,s,u,c){e.readPixels(n,t,r,i,s>>>0,u>>>0,c)},arguments)},__wbg_readPixels_8f8bde9ee420ba35:function(){return m(function(e,n,t,r,i,s,u,c){e.readPixels(n,t,r,i,s>>>0,u>>>0,c)},arguments)},__wbg_readText_57255f9c7482c995:function(e){return e.readText()},__wbg_read_ae34ffedeb11f034:function(e){return e.read()},__wbg_readyState_fe79161592fd15ce:function(e){return e.readyState},__wbg_reason_1460f6c833ca7671:function(e,n){let t=n.reason,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_rect_db1056f1138dff21:function(e,n,t,r,i){e.rect(n,t,r,i)},__wbg_redirected_38edd6189354296c:function(e){return e.redirected},__wbg_relatedTarget_0707f779c6356847:function(e){let n=e.relatedTarget;return k(n)?0:A(n)},__wbg_releaseLock_f38d2d1c08212a8a:function(e){e.releaseLock()},__wbg_releasePointerCapture_625918adece6fc4b:function(){return m(function(e,n){e.releasePointerCapture(n)},arguments)},__wbg_reloadWithCanvasRenderer_aa23abd32e535d49:function(e){e.reloadWithCanvasRenderer()},__wbg_removeChild_58f3071cb194ee29:function(){return m(function(e,n){return e.removeChild(n)},arguments)},__wbg_removeEventListener_aa653c6b402cc27e:function(){return m(function(e,n,t,r){e.removeEventListener(p(n,t),r)},arguments)},__wbg_removeEventListener_f0778286eef3aecc:function(){return m(function(e,n,t,r,i){e.removeEventListener(p(n,t),r,i!==0)},arguments)},__wbg_remove_07453fe173d20eee:function(e){e.remove()},__wbg_renderbufferStorageMultisample_a9f65ef0cc53fb37:function(e,n,t,r,i,s){e.renderbufferStorageMultisample(n>>>0,t,r>>>0,i,s)},__wbg_renderbufferStorage_33c57e600b175bd6:function(e,n,t,r,i){e.renderbufferStorage(n>>>0,t>>>0,r,i)},__wbg_renderbufferStorage_3fb6d5a0f3e07d46:function(e,n,t,r,i){e.renderbufferStorage(n>>>0,t>>>0,r,i)},__wbg_replace_b9d88072d7c356a3:function(e,n,t,r){return e.replace(n,p(t,r))},__wbg_requestAdapter_a539af006419f2e9:function(e,n){return e.requestAdapter(n)},__wbg_requestAnimationFrame_bcb3ce6247e27dd4:function(){return m(function(e,n){return e.requestAnimationFrame(n)},arguments)},__wbg_requestDevice_5cb8a582e55d08cb:function(e,n){return e.requestDevice(n)},__wbg_resetTransform_98a89c9c0f94fe2b:function(){return m(function(e){e.resetTransform()},arguments)},__wbg_resolveQuerySet_770f23fabac49845:function(e,n,t,r,i,s){e.resolveQuerySet(n,t>>>0,r>>>0,i,s>>>0)},__wbg_resolve_020f95d838c6ef25:function(e){return Promise.resolve(e)},__wbg_respond_f88cbcebace42068:function(){return m(function(e,n){e.respond(n>>>0)},arguments)},__wbg_restore_43a0248041b088b5:function(e){e.restore()},__wbg_result_89c2bfc79be07ad2:function(){return m(function(e){return e.result},arguments)},__wbg_resume_d3c27715f0790def:function(){return m(function(e){return e.resume()},arguments)},__wbg_revokeObjectURL_709bc205d98c34ba:function(){return m(function(e,n){URL.revokeObjectURL(p(e,n))},arguments)},__wbg_rufflehandle_new:function(e){return _n.__wrap(e)},__wbg_sampleRate_7751976089d109e1:function(e){return e.sampleRate},__wbg_samplerParameterf_d7f38ba3194c43ba:function(e,n,t,r){e.samplerParameterf(n,t>>>0,r)},__wbg_samplerParameteri_3d8994d9967c6803:function(e,n,t,r){e.samplerParameteri(n,t>>>0,r)},__wbg_save_0c65dc2190a45c2a:function(e){e.save()},__wbg_scissor_2f02706fbca6e98a:function(e,n,t,r,i){e.scissor(n,t,r,i)},__wbg_scissor_cdfb84de20f004b6:function(e,n,t,r,i){e.scissor(n,t,r,i)},__wbg_search_e4668fa7ed0474da:function(e,n){return e.search(n)},__wbg_select_d82465f2823758c6:function(e){e.select()},__wbg_send_5f7b516053d59f8d:function(){return m(function(e,n,t){e.send(p(n,t))},arguments)},__wbg_send_e76231c2136733db:function(){return m(function(e,n){e.send(n)},arguments)},__wbg_setAttributeNS_7c12a81b4d738959:function(){return m(function(e,n,t,r,i,s,u){e.setAttributeNS(n===0?void 0:p(n,t),p(r,i),p(s,u))},arguments)},__wbg_setAttribute_507f8367905a9c03:function(){return m(function(e,n,t,r,i){e.setAttribute(p(n,t),p(r,i))},arguments)},__wbg_setBindGroup_11bdbb60cc8b54b9:function(){return m(function(e,n,t,r,i,s,u){e.setBindGroup(n>>>0,t,cn(r,i),s,u>>>0)},arguments)},__wbg_setBindGroup_418c3e0eb6943ce0:function(e,n,t){e.setBindGroup(n>>>0,t)},__wbg_setFullscreen_b32b38221ccc591a:function(){return m(function(e,n){e.setFullscreen(n!==0)},arguments)},__wbg_setIndexBuffer_01327df91742b73e:function(e,n,t,r){e.setIndexBuffer(n,jr[t],r)},__wbg_setIndexBuffer_241097e303986c14:function(e,n,t,r,i){e.setIndexBuffer(n,jr[t],r,i)},__wbg_setMetadata_ee7f17a8469797e1:function(e,n){e.setMetadata(n)},__wbg_setPipeline_b6f981027e02cd16:function(e,n){e.setPipeline(n)},__wbg_setPointerCapture_761aa655f9aebc1a:function(){return m(function(e,n){e.setPointerCapture(n)},arguments)},__wbg_setProperty_684ce273e28a7037:function(){return m(function(e,n,t,r,i){e.setProperty(p(n,t),p(r,i))},arguments)},__wbg_setScissorRect_889235eeb784732b:function(e,n,t,r,i){e.setScissorRect(n>>>0,t>>>0,r>>>0,i>>>0)},__wbg_setStencilReference_48705a9a2cceae02:function(e,n){e.setStencilReference(n>>>0)},__wbg_setTimeout_9d0a5393fa9dc61c:function(){return m(function(e,n){return e.setTimeout(n)},arguments)},__wbg_setTransform_790a24b61d963dff:function(e,n){e.setTransform(n)},__wbg_setTransform_af9c1fdc090e1259:function(){return m(function(e,n,t,r,i,s,u){e.setTransform(n,t,r,i,s,u)},arguments)},__wbg_setVertexBuffer_6db3b60e99280744:function(e,n,t,r){e.setVertexBuffer(n>>>0,t,r)},__wbg_setVertexBuffer_cbf4ca1627c02f4c:function(e,n,t,r,i){e.setVertexBuffer(n>>>0,t,r,i)},__wbg_set_6be42768c690e380:function(e,n,t){e[n]=t},__wbg_set_8155bb79a948541b:function(){return m(function(e,n,t){return Reflect.set(e,n,t)},arguments)},__wbg_set_862c439a342a8818:function(e,n,t){e.set(n,t>>>0)},__wbg_set_a80955eb93b145c6:function(e,n,t){e[n>>>0]=t},__wbg_set_a_82818effc94f6256:function(e,n){e.a=n},__wbg_set_a_e37f5dc6b60caf30:function(e,n){e.a=n},__wbg_set_accept_8be58cd585a9f2ae:function(e,n,t){e.accept=p(n,t)},__wbg_set_access_a099cfbbeec9b96f:function(e,n){e.access=Us[n]},__wbg_set_action_80fce850115c6e52:function(e,n,t){e.action=p(n,t)},__wbg_set_address_mode_u_a68737cf5d288f95:function(e,n){e.addressModeU=Rr[n]},__wbg_set_address_mode_v_b1c3c45933f540d1:function(e,n){e.addressModeV=Rr[n]},__wbg_set_address_mode_w_889c31cf7022c764:function(e,n){e.addressModeW=Rr[n]},__wbg_set_alpha_106f21a936a85eba:function(e,n){e.alpha=n},__wbg_set_alpha_mode_5544568dbac50280:function(e,n){e.alphaMode=Ds[n]},__wbg_set_alpha_to_coverage_enabled_3372ce329447b8f1:function(e,n){e.alphaToCoverageEnabled=n!==0},__wbg_set_array_layer_count_22afa0a979e4ad55:function(e,n){e.arrayLayerCount=n>>>0},__wbg_set_array_stride_f64_6816040e5e7598c3:function(e,n){e.arrayStride=n},__wbg_set_aspect_a48d046965270281:function(e,n){e.aspect=_o[n]},__wbg_set_aspect_b1a9909bf315433f:function(e,n){e.aspect=_o[n]},__wbg_set_attributes_9e38cb1dde387a5b:function(e,n,t){e.attributes=_e(n,t)},__wbg_set_b9b5b5cb7b495037:function(e,n,t){e.set(fe(n,t))},__wbg_set_b_a3297ee7e7cac3a8:function(e,n){e.b=n},__wbg_set_base_array_layer_2435ba92c80346ae:function(e,n){e.baseArrayLayer=n>>>0},__wbg_set_base_mip_level_8b6093e875e7c65d:function(e,n){e.baseMipLevel=n>>>0},__wbg_set_bc2d20c77f0cca90:function(){return m(function(e,n,t,r,i){e[p(n,t)]=p(r,i)},arguments)},__wbg_set_beginning_of_pass_write_index_e552c5e8b8bbf52f:function(e,n){e.beginningOfPassWriteIndex=n>>>0},__wbg_set_binaryType_b701908a03166a9f:function(e,n){e.binaryType=As[n]},__wbg_set_bind_group_layouts_458c44ba55100b82:function(e,n,t){e.bindGroupLayouts=_e(n,t)},__wbg_set_binding_81b3fac7f7acaf8d:function(e,n){e.binding=n>>>0},__wbg_set_binding_b6cee57f35ac5190:function(e,n){e.binding=n>>>0},__wbg_set_blend_1a801617945f7945:function(e,n){e.blend=n},__wbg_set_body_f301b68bff45f419:function(e,n){e.body=n},__wbg_set_buffer_1548ae88a9188037:function(e,n){e.buffer=n},__wbg_set_buffer_8d0ac64ad20dfc84:function(e,n){e.buffer=n},__wbg_set_buffer_910a40a90f97cfca:function(e,n){e.buffer=n},__wbg_set_buffer_ef94b43a403b11b5:function(e,n){e.buffer=n},__wbg_set_buffers_5d0e0c50791f710e:function(e,n,t){e.buffers=_e(n,t)},__wbg_set_bytes_per_row_1e824a5502b54b3d:function(e,n){e.bytesPerRow=n>>>0},__wbg_set_bytes_per_row_c28583f0063160f1:function(e,n){e.bytesPerRow=n>>>0},__wbg_set_capture_0fda5cbdb4353cff:function(e,n){e.capture=n!==0},__wbg_set_className_bc6ed54ffff19a12:function(e,n,t){e.className=p(n,t)},__wbg_set_clear_value_gpu_color_dict_a9f763e8372ac1de:function(e,n){e.clearValue=n},__wbg_set_code_5d5b0b9e2fd0dca7:function(e,n,t){e.code=p(n,t)},__wbg_set_code_e5db843dcd11dd81:function(e,n){e.code=n},__wbg_set_codec_de80f2ee1daf3868:function(e,n,t){e.codec=p(n,t)},__wbg_set_color_8ecace4011f47d2e:function(e,n){e.color=n},__wbg_set_color_attachments_622fe2d5997fda7a:function(e,n,t){e.colorAttachments=_e(n,t)},__wbg_set_compare_080c9e492ff36990:function(e,n){e.compare=Sr[n]},__wbg_set_compare_817cf3695599eaa6:function(e,n){e.compare=Sr[n]},__wbg_set_count_8ff0c9474e39a849:function(e,n){e.count=n>>>0},__wbg_set_count_d9dc88156fd05bc7:function(e,n){e.count=n>>>0},__wbg_set_credentials_d7f3b810cbf191e1:function(e,n){e.credentials=Ks[n]},__wbg_set_cull_mode_85d2b4ab0ce3a564:function(e,n){e.cullMode=Ms[n]},__wbg_set_d_9f19046da6420c83:function(e,n){e.d=n},__wbg_set_data_96c7b174a9034667:function(e,n){e.data=n},__wbg_set_depth_bias_95abf479cae3f3cd:function(e,n){e.depthBias=n},__wbg_set_depth_bias_clamp_ba3d0b8348151350:function(e,n){e.depthBiasClamp=n},__wbg_set_depth_bias_slope_scale_6b2584d93f5b9cd2:function(e,n){e.depthBiasSlopeScale=n},__wbg_set_depth_clear_value_e30a4c754c6b3b26:function(e,n){e.depthClearValue=n},__wbg_set_depth_compare_a90de4e3714397ab:function(e,n){e.depthCompare=Sr[n]},__wbg_set_depth_fail_op_b5c64541d1b6b482:function(e,n){e.depthFailOp=Ar[n]},__wbg_set_depth_load_op_932888016d762d3e:function(e,n){e.depthLoadOp=zr[n]},__wbg_set_depth_or_array_layers_e2f074a0284e4806:function(e,n){e.depthOrArrayLayers=n>>>0},__wbg_set_depth_read_only_be790175a1c2db9a:function(e,n){e.depthReadOnly=n!==0},__wbg_set_depth_stencil_attachment_54a8922f5fbe08bf:function(e,n){e.depthStencilAttachment=n},__wbg_set_depth_stencil_b7cffc59ad4da529:function(e,n){e.depthStencil=n},__wbg_set_depth_store_op_9054814f164ab55d:function(e,n){e.depthStoreOp=Fr[n]},__wbg_set_depth_write_enabled_31a821ee1fb3b0b3:function(e,n){e.depthWriteEnabled=n!==0},__wbg_set_description_2c77102c025cc80b:function(e,n){e.description=n},__wbg_set_device_210484a77b675c9c:function(e,n){e.device=n},__wbg_set_dimension_3da9d03131a9f446:function(e,n){e.dimension=Ns[n]},__wbg_set_dimension_56332450afa3e0c0:function(e,n){e.dimension=Er[n]},__wbg_set_download_602973d1dd39bdc8:function(e,n,t){e.download=p(n,t)},__wbg_set_dst_factor_865ba9aaf187890c:function(e,n){e.dstFactor=co[n]},__wbg_set_e92392c4b44c5de1:function(){return m(function(e,n,t,r,i){e.set(p(n,t),p(r,i))},arguments)},__wbg_set_end_of_pass_write_index_8f164f9e60d4ad16:function(e,n){e.endOfPassWriteIndex=n>>>0},__wbg_set_entries_6f866302103b81e9:function(e,n,t){e.entries=_e(n,t)},__wbg_set_entries_f26b77ab9548e906:function(e,n,t){e.entries=_e(n,t)},__wbg_set_entry_point_71cef95c137b5774:function(e,n,t){e.entryPoint=p(n,t)},__wbg_set_entry_point_b70f98f5025a114d:function(e,n,t){e.entryPoint=p(n,t)},__wbg_set_error_413401f8612abd97:function(e,n){e.error=n},__wbg_set_external_texture_7f966c604c4f8098:function(e,n){e.externalTexture=n},__wbg_set_fail_op_d59d0187e4111dfe:function(e,n){e.failOp=Ar[n]},__wbg_set_fillStyle_0613e54d2aa04a75:function(e,n,t){e.fillStyle=p(n,t)},__wbg_set_fillStyle_392607276a67e12a:function(e,n){e.fillStyle=n},__wbg_set_fillStyle_52e75a25be60a3ff:function(e,n,t){e.fillStyle=p(n,t)},__wbg_set_fillStyle_9215db6210dfdee2:function(e,n){e.fillStyle=n},__wbg_set_filter_c05b047d621641d5:function(e,n,t){e.filter=p(n,t)},__wbg_set_font_cb31872ffc00c18f:function(e,n,t){e.font=p(n,t)},__wbg_set_format_23f7f32549751d43:function(e,n){e.format=Ue[n]},__wbg_set_format_283dca56552f07a3:function(e,n){e.format=Ue[n]},__wbg_set_format_5080a858117ad2c1:function(e,n){e.format=Gs[n]},__wbg_set_format_66735b94bd868ba2:function(e,n){e.format=Ue[n]},__wbg_set_format_7f2bdbfb101b1ae1:function(e,n){e.format=Ue[n]},__wbg_set_format_92732ea75d3b79f5:function(e,n){e.format=Ue[n]},__wbg_set_format_f009e603f7d4c28e:function(e,n){e.format=Ue[n]},__wbg_set_fragment_d2b0ec97d7cf8d47:function(e,n){e.fragment=n},__wbg_set_front_face_d3f8a2e07e7b25dd:function(e,n){e.frontFace=Os[n]},__wbg_set_g_b527ee8a9bed553d:function(e,n){e.g=n},__wbg_set_globalAlpha_7990fab00eb6c8f2:function(e,n){e.globalAlpha=n},__wbg_set_globalCompositeOperation_1336df410cebd928:function(){return m(function(e,n,t){e.globalCompositeOperation=p(n,t)},arguments)},__wbg_set_has_dynamic_offset_0c72ffa900c5a269:function(e,n){e.hasDynamicOffset=n!==0},__wbg_set_height_ca39bd9597314f83:function(e,n){e.height=n>>>0},__wbg_set_height_d72f2b76484a44de:function(e,n){e.height=n>>>0},__wbg_set_height_f6619158e5735877:function(e,n){e.height=n>>>0},__wbg_set_href_4fab988857d37334:function(e,n,t){e.href=p(n,t)},__wbg_set_id_ce80620265c5de8d:function(e,n,t){e.id=p(n,t)},__wbg_set_imageSmoothingEnabled_cd98f777ac3af24f:function(e,n){e.imageSmoothingEnabled=n!==0},__wbg_set_innerHTML_7d84b81d6f2a9fdf:function(e,n,t){e.innerHTML=p(n,t)},__wbg_set_innerText_147c496ec424c079:function(e,n,t){e.innerText=p(n,t)},__wbg_set_label_17202740051e9722:function(e,n,t){e.label=p(n,t)},__wbg_set_label_2fefb39c0e0dbbe8:function(e,n,t){e.label=p(n,t)},__wbg_set_label_3cb2322e6f6db14c:function(e,n,t){e.label=p(n,t)},__wbg_set_label_3f2ccaafef5ff7c9:function(e,n,t){e.label=p(n,t)},__wbg_set_label_612add98a4398f92:function(e,n,t){e.label=p(n,t)},__wbg_set_label_6f69e25822616a1b:function(e,n,t){e.label=p(n,t)},__wbg_set_label_70a09ee68d6b1b26:function(e,n,t){e.label=p(n,t)},__wbg_set_label_92cd3811e96b487c:function(e,n,t){e.label=p(n,t)},__wbg_set_label_9c2a186152427ee0:function(e,n,t){e.label=p(n,t)},__wbg_set_label_c3eaf136aa464cba:function(e,n,t){e.label=p(n,t)},__wbg_set_label_c7987704d29f284b:function(e,n,t){e.label=p(n,t)},__wbg_set_label_cfe64bca8945ee30:function(e,n,t){e.label=p(n,t)},__wbg_set_label_e02179cf97e95763:function(e,n,t){e.label=p(n,t)},__wbg_set_label_ee172cd5f6a96961:function(e,n,t){e.label=p(n,t)},__wbg_set_layout_454e3a091b390cd4:function(e,n){e.layout=n},__wbg_set_layout_75dc1ca3f2421cff:function(e,n){e.layout=n},__wbg_set_layout_gpu_auto_layout_mode_06a2b95af1043098:function(e,n){e.layout=Is[n]},__wbg_set_lineCap_ec484c1489fa48bc:function(e,n,t){e.lineCap=p(n,t)},__wbg_set_lineJoin_645744ec04386dd0:function(e,n,t){e.lineJoin=p(n,t)},__wbg_set_lineWidth_5f9aefcc32e60287:function(e,n){e.lineWidth=n},__wbg_set_load_op_c56b1269acc2d51f:function(e,n){e.loadOp=zr[n]},__wbg_set_lod_max_clamp_db24179f67f3aa31:function(e,n){e.lodMaxClamp=n},__wbg_set_lod_min_clamp_2bbce566e9fefa04:function(e,n){e.lodMinClamp=n},__wbg_set_mag_filter_db8e6b42d4f8846d:function(e,n){e.magFilter=lo[n]},__wbg_set_mapped_at_creation_3f320fef6761b02c:function(e,n){e.mappedAtCreation=n!==0},__wbg_set_mask_c1079e551ec360dc:function(e,n){e.mask=n>>>0},__wbg_set_max_anisotropy_84749fdcec362dc4:function(e,n){e.maxAnisotropy=n},__wbg_set_method_cf2b992b9a610bc3:function(e,n,t){e.method=p(n,t)},__wbg_set_method_fd3992cb9c0b7760:function(e,n,t){e.method=p(n,t)},__wbg_set_min_binding_size_f64_897e3cd4496ddec9:function(e,n){e.minBindingSize=n},__wbg_set_min_filter_d435bbfc5a637757:function(e,n){e.minFilter=lo[n]},__wbg_set_mip_level_count_047936c630acee7b:function(e,n){e.mipLevelCount=n>>>0},__wbg_set_mip_level_count_44bc46a1ae6f6daa:function(e,n){e.mipLevelCount=n>>>0},__wbg_set_mip_level_f3745730372683d5:function(e,n){e.mipLevel=n>>>0},__wbg_set_mipmap_filter_62fb49a84b0747ff:function(e,n){e.mipmapFilter=Bs[n]},__wbg_set_miterLimit_db0797fa63d61672:function(e,n){e.miterLimit=n},__wbg_set_mode_7edfbc344ef9c650:function(e,n){e.mode=Ts[n]},__wbg_set_module_392eeaa269f203b0:function(e,n){e.module=n},__wbg_set_module_715d37652c4998ec:function(e,n){e.module=n},__wbg_set_multiple_4a70bfda8eac6061:function(e,n){e.multiple=n!==0},__wbg_set_multisample_ff72a7a5456cbeb7:function(e,n){e.multisample=n},__wbg_set_multisampled_039f032dc4b67367:function(e,n){e.multisampled=n!==0},__wbg_set_name_ff6fb351f718f185:function(e,n,t){e.name=p(n,t)},__wbg_set_offset_f64_127e8a0aa5c5485a:function(e,n){e.offset=n},__wbg_set_offset_f64_457756429ede426d:function(e,n){e.offset=n},__wbg_set_offset_f64_a903425d5a8e5815:function(e,n){e.offset=n},__wbg_set_offset_f64_d1d115dd438165b5:function(e,n){e.offset=n},__wbg_set_once_7f65050c57557ff9:function(e,n){e.once=n!==0},__wbg_set_onclick_4d2a7dbf3f734065:function(e,n){e.onclick=n},__wbg_set_onended_c0d6e300da8b36ba:function(e,n){e.onended=n},__wbg_set_onload_a82519c1b28925a3:function(e,n){e.onload=n},__wbg_set_operation_00a77386523b88f9:function(e,n){e.operation=Cs[n]},__wbg_set_optimize_for_latency_cbbb5776d26c5dca:function(e,n){e.optimizeForLatency=n!==0},__wbg_set_origin_gpu_origin_3d_dict_0619d4860adb4eb6:function(e,n){e.origin=n},__wbg_set_output_b3c608483e2b4d8e:function(e,n){e.output=n},__wbg_set_pass_op_3cf10feb3d76ab97:function(e,n){e.passOp=Ar[n]},__wbg_set_passive_acb4a6d8f5b98357:function(e,n){e.passive=n!==0},__wbg_set_power_preference_b42d00a8facfbade:function(e,n){e.powerPreference=Ls[n]},__wbg_set_prevent_scroll_012725f8a1602bdd:function(e,n){e.preventScroll=n!==0},__wbg_set_primitive_e796cf76f0ff89f3:function(e,n){e.primitive=n},__wbg_set_query_set_f030702f1b69199f:function(e,n){e.querySet=n},__wbg_set_r_6ece4d74af63364f:function(e,n){e.r=n},__wbg_set_reason_b72ca321818718aa:function(e,n,t){e.reason=p(n,t)},__wbg_set_required_features_bbab71414c45e621:function(e,n,t){e.requiredFeatures=_e(n,t)},__wbg_set_required_limits_837f62d865e7cfac:function(e,n){e.requiredLimits=n},__wbg_set_resolve_target_gpu_texture_view_e4c1e3bbb8c27d87:function(e,n){e.resolveTarget=n},__wbg_set_resource_8fd8658b30d86ecf:function(e,n){e.resource=n},__wbg_set_resource_gpu_buffer_binding_33099b25da65b610:function(e,n){e.resource=n},__wbg_set_resource_gpu_texture_view_4cffe7bc7c8e5cbe:function(e,n){e.resource=n},__wbg_set_rows_per_image_c6d50d227e634379:function(e,n){e.rowsPerImage=n>>>0},__wbg_set_rows_per_image_deb456502f23c260:function(e,n){e.rowsPerImage=n>>>0},__wbg_set_sample_count_481c255a12054e1d:function(e,n){e.sampleCount=n>>>0},__wbg_set_sample_rate_cf2746001d47fae8:function(e,n){e.sampleRate=n},__wbg_set_sample_type_ebc5fcd029513bda:function(e,n){e.sampleType=Vs[n]},__wbg_set_sampler_89cb4a7efcfc6005:function(e,n){e.sampler=n},__wbg_set_shader_location_3fb9f6a012eba494:function(e,n){e.shaderLocation=n>>>0},__wbg_set_size_f64_2f591b0654540477:function(e,n){e.size=n},__wbg_set_size_f64_e844c985b8f95261:function(e,n){e.size=n},__wbg_set_size_gpu_extent_3d_dict_adf57388ab1d4f18:function(e,n){e.size=n},__wbg_set_src_factor_6f2c9ec8e4d3d979:function(e,n){e.srcFactor=co[n]},__wbg_set_stencil_back_c54d0443b8b6a957:function(e,n){e.stencilBack=n},__wbg_set_stencil_clear_value_a321b0e045bfd8c2:function(e,n){e.stencilClearValue=n>>>0},__wbg_set_stencil_front_3ff3f8385852efff:function(e,n){e.stencilFront=n},__wbg_set_stencil_load_op_37d20deccb26a0f1:function(e,n){e.stencilLoadOp=zr[n]},__wbg_set_stencil_read_mask_021ef4271b24352c:function(e,n){e.stencilReadMask=n>>>0},__wbg_set_stencil_read_only_75fe66a2356d6e92:function(e,n){e.stencilReadOnly=n!==0},__wbg_set_stencil_store_op_501f91638dd386e6:function(e,n){e.stencilStoreOp=Fr[n]},__wbg_set_stencil_write_mask_ec1c12237e094bdd:function(e,n){e.stencilWriteMask=n>>>0},__wbg_set_step_mode_3cbbdeba1e5dfd62:function(e,n){e.stepMode=Hs[n]},__wbg_set_storage_texture_786aea7c5773b6c1:function(e,n){e.storageTexture=n},__wbg_set_store_op_678f33376d741711:function(e,n){e.storeOp=Fr[n]},__wbg_set_strip_index_format_70313df755145d5e:function(e,n){e.stripIndexFormat=jr[n]},__wbg_set_strokeStyle_3b18520af1f47602:function(e,n){e.strokeStyle=n},__wbg_set_strokeStyle_cce50c69cecc2df7:function(e,n,t){e.strokeStyle=p(n,t)},__wbg_set_strokeStyle_cf68ead23facd1c2:function(e,n){e.strokeStyle=n},__wbg_set_tabIndex_a9b7f8d964a179f0:function(e,n){e.tabIndex=n},__wbg_set_target_e5c049109d0e2ff3:function(e,n,t){e.target=p(n,t)},__wbg_set_targets_674b33931e512fb1:function(e,n,t){e.targets=_e(n,t)},__wbg_set_texture_95f2bfdf7767e76f:function(e,n){e.texture=n},__wbg_set_texture_a33be3fe02ac6264:function(e,n){e.texture=n},__wbg_set_timestamp_b78581d700a08071:function(e,n){e.timestamp=n},__wbg_set_timestamp_writes_de6a09f299b71b76:function(e,n){e.timestampWrites=n},__wbg_set_tone_mapping_320c1aad31db2e7f:function(e,n){e.toneMapping=n},__wbg_set_topology_b92cfe523bd9653b:function(e,n){e.topology=Ws[n]},__wbg_set_type_062a978c6946048f:function(e,n,t){e.type=p(n,t)},__wbg_set_type_43e0092f16775979:function(e,n){e.type=$s[n]},__wbg_set_type_79cec55caf4cdb6d:function(e,n){e.type=Ps[n]},__wbg_set_type_7f7e54057b801caa:function(e,n){e.type=qs[n]},__wbg_set_type_a170a1d376afa381:function(e,n,t){e.type=p(n,t)},__wbg_set_type_d27f05f3d41556ff:function(e,n){e.type=Es[n]},__wbg_set_unclipped_depth_32b7caf29fa5633d:function(e,n){e.unclippedDepth=n!==0},__wbg_set_usage_1ee33d98267e787d:function(e,n){e.usage=n>>>0},__wbg_set_usage_2365e2704b1fdb10:function(e,n){e.usage=n>>>0},__wbg_set_usage_d53ee6f0c7aedbfa:function(e,n){e.usage=n>>>0},__wbg_set_usage_f3e34822998d2147:function(e,n){e.usage=n>>>0},__wbg_set_value_22d56bead9380ee8:function(e,n,t){e.value=p(n,t)},__wbg_set_value_676e9d6f43f3c9e4:function(e,n,t){e.value=p(n,t)},__wbg_set_vertex_77ed7a1229239b5a:function(e,n){e.vertex=n},__wbg_set_view_dimension_893e2d16561e56e8:function(e,n){e.viewDimension=Er[n]},__wbg_set_view_dimension_f2c5fe4bf927c3fe:function(e,n){e.viewDimension=Er[n]},__wbg_set_view_formats_427069064d8b7139:function(e,n,t){e.viewFormats=_e(n,t)},__wbg_set_view_formats_9c2f01a6f3b365c7:function(e,n,t){e.viewFormats=_e(n,t)},__wbg_set_view_gpu_texture_view_35f4655788535c4d:function(e,n){e.view=n},__wbg_set_view_gpu_texture_view_a532c825c52042c0:function(e,n){e.view=n},__wbg_set_visibility_d8a6821789538c25:function(e,n){e.visibility=n>>>0},__wbg_set_width_36ef6630b22fc519:function(e,n){e.width=n>>>0},__wbg_set_width_661c95ea46b71eba:function(e,n){e.width=n>>>0},__wbg_set_width_b20525f5f4df4eb8:function(e,n){e.width=n>>>0},__wbg_set_write_mask_42d89f182ade6b2d:function(e,n){e.writeMask=n>>>0},__wbg_set_x_f470b03dd54724cd:function(e,n){e.x=n>>>0},__wbg_set_y_4c44eb40ebca5bfc:function(e,n){e.y=n>>>0},__wbg_set_z_2e6820ef0f5821ed:function(e,n){e.z=n>>>0},__wbg_shaderSource_7d3f360b4b626db7:function(e,n,t,r){e.shaderSource(n,p(t,r))},__wbg_shaderSource_dcba4cd3379b35bd:function(e,n,t,r){e.shaderSource(n,p(t,r))},__wbg_shiftKey_8eca009f693152b4:function(e){return e.shiftKey},__wbg_stack_3b0d974bbf31e44f:function(e,n){let t=n.stack,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_start_f2a1f4ed432f9992:function(){return m(function(e,n){e.start(n)},arguments)},__wbg_state_caf0b46b69f50923:function(e){let n=e.state;return(Fs.indexOf(n)+1||4)-1},__wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76:function(){let e=typeof globalThis>"u"?null:globalThis;return k(e)?0:A(e)},__wbg_static_accessor_GLOBAL_c7aea38d4de089bc:function(){let e=typeof global>"u"?null:global;return k(e)?0:A(e)},__wbg_static_accessor_SELF_42d4fae05e59267a:function(){let e=typeof self>"u"?null:self;return k(e)?0:A(e)},__wbg_static_accessor_WINDOW_e0db14a0eba6a812:function(){let e=typeof window>"u"?null:window;return k(e)?0:A(e)},__wbg_statusText_fd389f44ebb1fc97:function(e,n){let t=n.statusText,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_status_b0de02a07fd7d927:function(e){return e.status},__wbg_stencilFuncSeparate_1455ac65895207da:function(e,n,t,r,i){e.stencilFuncSeparate(n>>>0,t>>>0,r,i>>>0)},__wbg_stencilFuncSeparate_55627e589746e09f:function(e,n,t,r,i){e.stencilFuncSeparate(n>>>0,t>>>0,r,i>>>0)},__wbg_stencilFunc_b5073faed00da15b:function(e,n,t,r){e.stencilFunc(n>>>0,t,r>>>0)},__wbg_stencilMaskSeparate_85d929ff95496631:function(e,n,t){e.stencilMaskSeparate(n>>>0,t>>>0)},__wbg_stencilMaskSeparate_8e37bf59a93afc15:function(e,n,t){e.stencilMaskSeparate(n>>>0,t>>>0)},__wbg_stencilMask_020d2d7ea8e4f640:function(e,n){e.stencilMask(n>>>0)},__wbg_stencilMask_967f16a89bfd056a:function(e,n){e.stencilMask(n>>>0)},__wbg_stencilOpSeparate_1f45c75c83dad8d5:function(e,n,t,r,i){e.stencilOpSeparate(n>>>0,t>>>0,r>>>0,i>>>0)},__wbg_stencilOpSeparate_33a6764dd0ce6e24:function(e,n,t,r,i){e.stencilOpSeparate(n>>>0,t>>>0,r>>>0,i>>>0)},__wbg_stencilOp_39d229912d4e6149:function(e,n,t,r){e.stencilOp(n>>>0,t>>>0,r>>>0)},__wbg_stringify_f93a4ebae9231922:function(){return m(function(e){return JSON.stringify(e)},arguments)},__wbg_stroke_7355965b9ad92428:function(e,n){e.stroke(n)},__wbg_style_f09d6445af3dd2c6:function(e){return e.style},__wbg_subgroupMaxSize_b43be0aa16182403:function(e){return e.subgroupMaxSize},__wbg_subgroupMinSize_03feb6ee0cda6775:function(e){return e.subgroupMinSize},__wbg_submit_077c85cc28e36892:function(e,n,t){e.submit(_e(n,t))},__wbg_submit_88800a9055f9a144:function(){return m(function(e){e.submit()},arguments)},__wbg_suppressContextMenu_e69a6b0e64c07eaa:function(e){e.suppressContextMenu()},__wbg_suspend_1a76515b500c012f:function(){return m(function(e){return e.suspend()},arguments)},__wbg_texImage2D_053488112c3d702f:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texImage2D_2854247ff7d047a1:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texImage2D_29d66757a5e1f95c:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h){e.texImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b===0?void 0:fe(b,h))},arguments)},__wbg_texImage2D_2d1f12e7c67a36d0:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h){e.texImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b===0?void 0:fe(b,h))},arguments)},__wbg_texImage2D_44740302c934daf1:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texImage3D_d23f7d2f9e66b916:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h){e.texImage3D(n>>>0,t,r,i,s,u,c,d>>>0,b>>>0,h)},arguments)},__wbg_texImage3D_faae3ea3f2969ecc:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h){e.texImage3D(n>>>0,t,r,i,s,u,c,d>>>0,b>>>0,h)},arguments)},__wbg_texParameteri_2bc38aa8e9964d77:function(e,n,t,r){e.texParameteri(n>>>0,t>>>0,r)},__wbg_texParameteri_dd4f56c2acbbe859:function(e,n,t,r){e.texParameteri(n>>>0,t>>>0,r)},__wbg_texStorage2D_d473a12d49d7deee:function(e,n,t,r,i,s){e.texStorage2D(n>>>0,t,r>>>0,i,s)},__wbg_texStorage3D_3ceb25ba9ad4b7ac:function(e,n,t,r,i,s,u){e.texStorage3D(n>>>0,t,r>>>0,i,s,u)},__wbg_texSubImage2D_1b383b66dfe35010:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texSubImage2D_205cfbaea80e77e6:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texSubImage2D_606540d3e650e0bb:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texSubImage2D_62ae3d4b2700f7cd:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texSubImage2D_6eb05d8f455f99ba:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texSubImage2D_a035d2307e014a73:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texSubImage2D_ad5a64d8f68a2d0d:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texSubImage2D_cb9ad676165c5da5:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texSubImage2D_db54df8f6445f113:function(){return m(function(e,n,t,r,i,s,u,c,d,b){e.texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texSubImage3D_09e44c66b4ac6bc6:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h,R){e.texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,R)},arguments)},__wbg_texSubImage3D_16678785ac62fd6b:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h,R){e.texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,R)},arguments)},__wbg_texSubImage3D_3ee8764dfdcb6746:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h,R){e.texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,R)},arguments)},__wbg_texSubImage3D_53489be691cee78d:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h,R){e.texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,R)},arguments)},__wbg_texSubImage3D_73d365baf8dad003:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h,R){e.texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,R)},arguments)},__wbg_texSubImage3D_8a2331639ee1ee0e:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h,R){e.texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,R)},arguments)},__wbg_texSubImage3D_9b0bd9fd73d7bb1c:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h,R){e.texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,R)},arguments)},__wbg_texSubImage3D_fcc8b10e5c1a3b28:function(){return m(function(e,n,t,r,i,s,u,c,d,b,h,R){e.texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,R)},arguments)},__wbg_then_7026b513a94278a8:function(e,n){return e.then(n)},__wbg_then_72819b8d4e081fb5:function(e,n,t){return e.then(n,t)},__wbg_toString_033acf19ce89359c:function(e){return e.toString()},__wbg_transform_62123174d9cd3977:function(){return m(function(e,n,t,r,i,s,u){e.transform(n,t,r,i,s,u)},arguments)},__wbg_unconfigure_835307f58dc68d80:function(e){e.unconfigure()},__wbg_uniform1f_e92095ce29c38424:function(e,n,t){e.uniform1f(n,t)},__wbg_uniform1f_e93503bc589b432d:function(e,n,t){e.uniform1f(n,t)},__wbg_uniform1fv_b3953ed7fd6bb740:function(e,n,t,r){e.uniform1fv(n,V(t,r))},__wbg_uniform1i_235dff1d94e0df95:function(e,n,t){e.uniform1i(n,t)},__wbg_uniform1i_d5db9c3184abbd04:function(e,n,t){e.uniform1i(n,t)},__wbg_uniform1ui_8bbaaa1161bfd433:function(e,n,t){e.uniform1ui(n,t>>>0)},__wbg_uniform2fv_1443080aaf9c1077:function(e,n,t,r){e.uniform2fv(n,V(t,r))},__wbg_uniform2fv_b039f28911c30526:function(e,n,t,r){e.uniform2fv(n,V(t,r))},__wbg_uniform2iv_9648a06d054a25aa:function(e,n,t,r){e.uniform2iv(n,Fe(t,r))},__wbg_uniform2iv_e0496dc424dc25ec:function(e,n,t,r){e.uniform2iv(n,Fe(t,r))},__wbg_uniform2uiv_935dfb31f50dfbe3:function(e,n,t,r){e.uniform2uiv(n,cn(t,r))},__wbg_uniform3fv_025760367cc4eed3:function(e,n,t,r){e.uniform3fv(n,V(t,r))},__wbg_uniform3fv_b985d45f54156d3b:function(e,n,t,r){e.uniform3fv(n,V(t,r))},__wbg_uniform3iv_193b7a0e1ae9ac9a:function(e,n,t,r){e.uniform3iv(n,Fe(t,r))},__wbg_uniform3iv_63e82687b07e66fc:function(e,n,t,r){e.uniform3iv(n,Fe(t,r))},__wbg_uniform3uiv_ccd86b78a5fb3077:function(e,n,t,r){e.uniform3uiv(n,cn(t,r))},__wbg_uniform4f_61192d516e9bede4:function(e,n,t,r,i,s){e.uniform4f(n,t,r,i,s)},__wbg_uniform4f_d9bb623add5d2541:function(e,n,t,r,i,s){e.uniform4f(n,t,r,i,s)},__wbg_uniform4fv_c39527800fc76c8e:function(e,n,t,r){e.uniform4fv(n,V(t,r))},__wbg_uniform4fv_fcff56a650906708:function(e,n,t,r){e.uniform4fv(n,V(t,r))},__wbg_uniform4iv_197c2f54a8dfb5c2:function(e,n,t,r){e.uniform4iv(n,Fe(t,r))},__wbg_uniform4iv_9e6e36f0e1d1f84d:function(e,n,t,r){e.uniform4iv(n,Fe(t,r))},__wbg_uniform4uiv_73fc9e298d02c948:function(e,n,t,r){e.uniform4uiv(n,cn(t,r))},__wbg_uniformBlockBinding_057177606c8b522f:function(e,n,t,r){e.uniformBlockBinding(n,t>>>0,r>>>0)},__wbg_uniformMatrix2fv_013723900a9cb65c:function(e,n,t,r,i){e.uniformMatrix2fv(n,t!==0,V(r,i))},__wbg_uniformMatrix2fv_fb61eccac67a8218:function(e,n,t,r,i){e.uniformMatrix2fv(n,t!==0,V(r,i))},__wbg_uniformMatrix2x3fv_de8b00219f47ffb4:function(e,n,t,r,i){e.uniformMatrix2x3fv(n,t!==0,V(r,i))},__wbg_uniformMatrix2x4fv_e659cc34e95fee5e:function(e,n,t,r,i){e.uniformMatrix2x4fv(n,t!==0,V(r,i))},__wbg_uniformMatrix3fv_3e548032fc28c3e2:function(e,n,t,r,i){e.uniformMatrix3fv(n,t!==0,V(r,i))},__wbg_uniformMatrix3fv_72ca83d3393e0364:function(e,n,t,r,i){e.uniformMatrix3fv(n,t!==0,V(r,i))},__wbg_uniformMatrix3x2fv_8598636e806d318d:function(e,n,t,r,i){e.uniformMatrix3x2fv(n,t!==0,V(r,i))},__wbg_uniformMatrix3x4fv_277fbf38db85e612:function(e,n,t,r,i){e.uniformMatrix3x4fv(n,t!==0,V(r,i))},__wbg_uniformMatrix4fv_20161efad644f822:function(e,n,t,r,i){e.uniformMatrix4fv(n,t!==0,V(r,i))},__wbg_uniformMatrix4fv_8689fd0481ac5ab4:function(e,n,t,r,i){e.uniformMatrix4fv(n,t!==0,V(r,i))},__wbg_uniformMatrix4x2fv_e91bd4e774f6266d:function(e,n,t,r,i){e.uniformMatrix4x2fv(n,t!==0,V(r,i))},__wbg_uniformMatrix4x3fv_a829c88dfd0c29d3:function(e,n,t,r,i){e.uniformMatrix4x3fv(n,t!==0,V(r,i))},__wbg_unmap_6a96b14c9ef5f7f5:function(e){e.unmap()},__wbg_url_82c95d5d2e2ba977:function(e,n){let t=n.url,r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j;S().setInt32(e+4,i,!0),S().setInt32(e+0,r,!0)},__wbg_useProgram_1c047de878f20b72:function(e,n){e.useProgram(n)},__wbg_useProgram_9edff145e073d3b1:function(e,n){e.useProgram(n)},__wbg_userActivation_7f2f2f2659ad0d1a:function(e){return e.userActivation},__wbg_value_1e2369fab29b420e:function(e){return e.value},__wbg_values_2a12fb5a6064a244:function(e){return e.values()},__wbg_vertexAttribDivisorANGLE_581f060f68a0c850:function(e,n,t){e.vertexAttribDivisorANGLE(n>>>0,t>>>0)},__wbg_vertexAttribDivisor_f910af52b19ce382:function(e,n,t){e.vertexAttribDivisor(n>>>0,t>>>0)},__wbg_vertexAttribIPointer_54e6be6fa5e39567:function(e,n,t,r,i,s){e.vertexAttribIPointer(n>>>0,t,r>>>0,i,s)},__wbg_vertexAttribPointer_7bc186aca7721b90:function(e,n,t,r,i,s,u){e.vertexAttribPointer(n>>>0,t,r>>>0,i!==0,s,u)},__wbg_vertexAttribPointer_b0838f8618a8c446:function(e,n,t,r,i,s,u){e.vertexAttribPointer(n>>>0,t,r>>>0,i!==0,s,u)},__wbg_view_7685fe4b2845c5b6:function(e){let n=e.view;return k(n)?0:A(n)},__wbg_viewport_07bb1829f0fe2245:function(e,n,t,r,i){e.viewport(n,t,r,i)},__wbg_viewport_dfe81d333ce7be86:function(e,n,t,r,i){e.viewport(n,t,r,i)},__wbg_visibleRect_0d5e95bfe9d464ca:function(e){let n=e.visibleRect;return k(n)?0:A(n)},__wbg_wasClean_76925d0fb8cf2795:function(e){return e.wasClean},__wbg_width_1952934caca67137:function(e){return e.width},__wbg_width_25247161d477c7d5:function(e){return e.width},__wbg_width_4bb073b449891b57:function(e){return e.width},__wbg_width_64eb09b40bf1526e:function(e){return e.width},__wbg_width_aeade399d283e83a:function(e){return e.width},__wbg_writeTexture_30e592e8c061c3d9:function(){return m(function(e,n,t,r,i,s){e.writeTexture(n,fe(t,r),i,s)},arguments)},__wbindgen_cast_0000000000000001:function(e,n){return Q(e,n,xs)},__wbindgen_cast_0000000000000002:function(e,n){return Q(e,n,zs)},__wbindgen_cast_0000000000000003:function(e,n){return Q(e,n,_s)},__wbindgen_cast_0000000000000004:function(e,n){return Q(e,n,fs)},__wbindgen_cast_0000000000000005:function(e,n){return go(e,n,ds)},__wbindgen_cast_0000000000000006:function(e,n){return Q(e,n,bs)},__wbindgen_cast_0000000000000007:function(e,n){return Q(e,n,ms)},__wbindgen_cast_0000000000000008:function(e,n){return Q(e,n,Rs)},__wbindgen_cast_0000000000000009:function(e,n){return Q(e,n,gs)},__wbindgen_cast_000000000000000a:function(e,n){return Q(e,n,ps)},__wbindgen_cast_000000000000000b:function(e,n){return Q(e,n,ws)},__wbindgen_cast_000000000000000c:function(e,n){return Q(e,n,hs)},__wbindgen_cast_000000000000000d:function(e,n){return go(e,n,vs)},__wbindgen_cast_000000000000000e:function(e,n){return Q(e,n,ys)},__wbindgen_cast_000000000000000f:function(e,n){return Q(e,n,ks)},__wbindgen_cast_0000000000000010:function(e,n){return Q(e,n,Ss)},__wbindgen_cast_0000000000000011:function(e,n){return Q(e,n,js)},__wbindgen_cast_0000000000000012:function(e,n){return Q(e,n,cs)},__wbindgen_cast_0000000000000013:function(e,n){return Q(e,n,ls)},__wbindgen_cast_0000000000000014:function(e){return e},__wbindgen_cast_0000000000000015:function(e,n){return V(e,n)},__wbindgen_cast_0000000000000016:function(e,n){return nu(e,n)},__wbindgen_cast_0000000000000017:function(e,n){return Fe(e,n)},__wbindgen_cast_0000000000000018:function(e,n){return tu(e,n)},__wbindgen_cast_0000000000000019:function(e,n){return au(e,n)},__wbindgen_cast_000000000000001a:function(e,n){return cn(e,n)},__wbindgen_cast_000000000000001b:function(e,n){return fe(e,n)},__wbindgen_cast_000000000000001c:function(e,n){return p(e,n)},__wbindgen_init_externref_table:function(){let e=_.__wbindgen_externrefs,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)}}}}function cs(o,e){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke_______true_(o,e)}function ls(o,e){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke_______true__1_(o,e)}function _s(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_FocusEvent__FocusEvent______true_(o,e,n)}function fs(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_CloseEvent__CloseEvent______true_(o,e,n)}function ds(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_VideoFrame__VideoFrame______true_(o,e,n)}function bs(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_CloseEvent__CloseEvent______true__5(o,e,n)}function ms(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_FocusEvent__FocusEvent______true__6(o,e,n)}function gs(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_FocusEvent__FocusEvent______true__8(o,e,n)}function ps(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_CloseEvent__CloseEvent______true__9(o,e,n)}function ws(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_FocusEvent__FocusEvent______true__10(o,e,n)}function hs(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_FocusEvent__FocusEvent______true__11(o,e,n)}function vs(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_VideoFrame__VideoFrame______true__12(o,e,n)}function ys(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_FocusEvent__FocusEvent______true__13(o,e,n)}function ks(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___web_sys_8495a181998f20eb___features__gen_FocusEvent__FocusEvent______true__14(o,e,n)}function xs(o,e,n){let t=_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___wasm_bindgen_3a53db6176949878___JsValue__core_608f92abc48d28da___result__Result_____wasm_bindgen_3a53db6176949878___JsError___true_(o,e,n);if(t[1])throw Ve(t[0])}function Rs(o,e,n){let t=_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___wasm_bindgen_3a53db6176949878___sys__JsNullable_wgpu_2b9473f8e88c515a___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_608f92abc48d28da___result__Result_____wasm_bindgen_3a53db6176949878___JsError___true_(o,e,n);if(t[1])throw Ve(t[0])}function Ss(o,e,n){let t=_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___wasm_bindgen_3a53db6176949878___sys__JsNullable_wgpu_2b9473f8e88c515a___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_608f92abc48d28da___result__Result_____wasm_bindgen_3a53db6176949878___JsError___true__15(o,e,n);if(t[1])throw Ve(t[0])}function js(o,e,n){let t=_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___wasm_bindgen_3a53db6176949878___sys__JsNullable_wgpu_2b9473f8e88c515a___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_608f92abc48d28da___result__Result_____wasm_bindgen_3a53db6176949878___JsError___true__16(o,e,n);if(t[1])throw Ve(t[0])}function so(o,e,n,t){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___js_sys_e19bf91ee3c5a64e___Function_fn_wasm_bindgen_3a53db6176949878___JsValue_____wasm_bindgen_3a53db6176949878___sys__Undefined___js_sys_e19bf91ee3c5a64e___Function_fn_wasm_bindgen_3a53db6176949878___JsValue_____wasm_bindgen_3a53db6176949878___sys__Undefined_______true_(o,e,n,t)}function zs(o,e,n){_.wasm_bindgen_3a53db6176949878___convert__closures_____invoke___f64______true_(o,e,n)}function A(o){let e=_.__externref_table_alloc();return _.__wbindgen_externrefs.set(e,o),e}function Cr(o){let e=typeof o;if(e=="number"||e=="boolean"||o==null)return`${o}`;if(e=="string")return`"${o}"`;if(e=="symbol"){let r=o.description;return r==null?"Symbol":`Symbol(${r})`}if(e=="function"){let r=o.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(o)){let r=o.length,i="[";r>0&&(i+=Cr(o[0]));for(let s=1;s<r;s++)i+=", "+Cr(o[s]);return i+="]",i}let n=/\[object ([^\]]+)\]/.exec(toString.call(o)),t;if(n&&n.length>1)t=n[1];else return toString.call(o);if(t=="Object")try{return"Object("+JSON.stringify(o)+")"}catch{return"Object"}return o instanceof Error?`${o.name}: ${o.message}
${o.stack}`:t}function V(o,e){return o=o>>>0,iu().subarray(o/4,o/4+e)}function eu(o,e){return o=o>>>0,su().subarray(o/8,o/8+e)}function nu(o,e){return o=o>>>0,uu().subarray(o/2,o/2+e)}function Fe(o,e){return o=o>>>0,cu().subarray(o/4,o/4+e)}function tu(o,e){return o=o>>>0,lu().subarray(o/1,o/1+e)}function ru(o,e){o=o>>>0;let n=S(),t=[];for(let r=o;r<o+4*e;r+=4)t.push(_.__wbindgen_externrefs.get(n.getUint32(r,!0)));return _.__externref_drop_slice(o,e),t}function _e(o,e){o=o>>>0;let n=S(),t=[];for(let r=o;r<o+4*e;r+=4)t.push(_.__wbindgen_externrefs.get(n.getUint32(r,!0)));return t}function au(o,e){return o=o>>>0,_u().subarray(o/2,o/2+e)}function cn(o,e){return o=o>>>0,fu().subarray(o/4,o/4+e)}function fe(o,e){return o=o>>>0,ln().subarray(o/1,o/1+e)}function ou(o,e){return o=o>>>0,du().subarray(o/1,o/1+e)}function S(){return(Ne===null||Ne.buffer.detached===!0||Ne.buffer.detached===void 0&&Ne.buffer!==_.memory.buffer)&&(Ne=new DataView(_.memory.buffer)),Ne}function iu(){return(Sn===null||Sn.byteLength===0)&&(Sn=new Float32Array(_.memory.buffer)),Sn}function su(){return(jn===null||jn.byteLength===0)&&(jn=new Float64Array(_.memory.buffer)),jn}function uu(){return(zn===null||zn.byteLength===0)&&(zn=new Int16Array(_.memory.buffer)),zn}function cu(){return(An===null||An.byteLength===0)&&(An=new Int32Array(_.memory.buffer)),An}function lu(){return(Fn===null||Fn.byteLength===0)&&(Fn=new Int8Array(_.memory.buffer)),Fn}function p(o,e){return mu(o>>>0,e)}function _u(){return(En===null||En.byteLength===0)&&(En=new Uint16Array(_.memory.buffer)),En}function fu(){return(In===null||In.byteLength===0)&&(In=new Uint32Array(_.memory.buffer)),In}function ln(){return(Cn===null||Cn.byteLength===0)&&(Cn=new Uint8Array(_.memory.buffer)),Cn}function du(){return(Pn===null||Pn.byteLength===0)&&(Pn=new Uint8ClampedArray(_.memory.buffer)),Pn}function m(o,e){try{return o.apply(this,e)}catch(n){let t=A(n);_.__wbindgen_exn_store(t)}}function k(o){return o==null}function go(o,e,n){let t={a:o,b:e,cnt:1},r=(...i)=>{t.cnt++;try{return n(t.a,t.b,...i)}finally{r._wbg_cb_unref()}};return r._wbg_cb_unref=()=>{--t.cnt===0&&(_.__wbindgen_destroy_closure(t.a,t.b),t.a=0,Mt.unregister(t))},Mt.register(r,t,t),r}function Q(o,e,n){let t={a:o,b:e,cnt:1},r=(...i)=>{t.cnt++;let s=t.a;t.a=0;try{return n(s,t.b,...i)}finally{t.a=s,r._wbg_cb_unref()}};return r._wbg_cb_unref=()=>{--t.cnt===0&&(_.__wbindgen_destroy_closure(t.a,t.b),t.a=0,Mt.unregister(t))},Mt.register(r,t,t),r}function Dr(o,e){let n=e(o.length*1,1)>>>0;return ln().set(o,n/1),j=o.length,n}function Pr(o,e){let n=e(o.length*4,4)>>>0;for(let t=0;t<o.length;t++){let r=A(o[t]);S().setUint32(n+4*t,r,!0)}return j=o.length,n}function E(o,e,n){if(n===void 0){let u=Dn.encode(o),c=e(u.length,1)>>>0;return ln().subarray(c,c+u.length).set(u),j=u.length,c}let t=o.length,r=e(t,1)>>>0,i=ln(),s=0;for(;s<t;s++){let u=o.charCodeAt(s);if(u>127)break;i[r+s]=u}if(s!==t){s!==0&&(o=o.slice(s)),r=n(r,t,t=s+o.length*3,1)>>>0;let u=ln().subarray(r+s,r+t),c=Dn.encodeInto(o,u);s+=c.written,r=n(r,t,s,1)>>>0}return j=s,r}function Ve(o){let e=_.__wbindgen_externrefs.get(o);return _.__externref_table_dealloc(o),e}function mu(o,e){return Ir+=e,Ir>=bu&&(Tt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Tt.decode(),Ir=e),Tt.decode(ln().subarray(o,o+e))}function wo(o,e){return pu=o,_=o.exports,gu=e,Ne=null,Sn=null,jn=null,zn=null,An=null,Fn=null,En=null,In=null,Cn=null,Pn=null,_.__wbindgen_start(),_}async function wu(o,e){if(typeof Response=="function"&&o instanceof Response){if(!o.ok)throw new Error(`failed to fetch Wasm: ${o.status} ${o.statusText} fetching '${o.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(o,e)}catch(r){if(n(o.type)&&o.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}let t=await o.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{let t=await WebAssembly.instantiate(o,e);return t instanceof WebAssembly.Instance?{instance:t,module:o}:t}function n(t){switch(t){case"basic":case"cors":case"default":return!0}return!1}}function hu(o){if(_!==void 0)return _;o!==void 0&&(Object.getPrototypeOf(o)===Object.prototype?{module:o}=o:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));let e=po();o instanceof WebAssembly.Module||(o=new WebAssembly.Module(o));let n=new WebAssembly.Instance(o,e);return wo(n,o)}async function vu(o){if(_!==void 0)return _;o!==void 0&&(Object.getPrototypeOf(o)===Object.prototype?{module_or_path:o}=o:console.warn("using deprecated parameters for the initialization function; pass a single object instead"));let e=po();(typeof o=="string"||typeof Request=="function"&&o instanceof Request||typeof URL=="function"&&o instanceof URL)&&(o=fetch(o));let{instance:n,module:t}=await wu(await o,e);return wo(n,t)}var Tn,Mn,On,_n,Bn,Ln,us,As,uo,Fs,Es,Rr,Is,co,Cs,Ps,Ds,Ts,Sr,Ms,lo,Os,jr,zr,Bs,Ls,Ws,qs,$s,Ar,Us,Fr,_o,Ns,Ue,Vs,Er,Gs,Hs,Js,Ks,Qs,Zs,Ys,Xs,fo,bo,mo,Mt,Ne,Sn,jn,zn,An,Fn,En,In,Cn,Pn,Tt,bu,Ir,Dn,j,gu,pu,_,vo=Yt(()=>{"use strict";xr();Tn=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Zs.unregister(this),e}free(){let e=this.__destroy_into_raw();_.__wbg_intounderlyingbytesource_free(e,0)}get autoAllocateChunkSize(){return _.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr)>>>0}cancel(){let e=this.__destroy_into_raw();_.intounderlyingbytesource_cancel(e)}pull(e){return _.intounderlyingbytesource_pull(this.__wbg_ptr,e)}start(e){_.intounderlyingbytesource_start(this.__wbg_ptr,e)}get type(){let e=_.intounderlyingbytesource_type(this.__wbg_ptr);return Js[e]}};Symbol.dispose&&(Tn.prototype[Symbol.dispose]=Tn.prototype.free);Mn=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Ys.unregister(this),e}free(){let e=this.__destroy_into_raw();_.__wbg_intounderlyingsink_free(e,0)}abort(e){let n=this.__destroy_into_raw();return _.intounderlyingsink_abort(n,e)}close(){let e=this.__destroy_into_raw();return _.intounderlyingsink_close(e)}write(e){return _.intounderlyingsink_write(this.__wbg_ptr,e)}};Symbol.dispose&&(Mn.prototype[Symbol.dispose]=Mn.prototype.free);On=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Xs.unregister(this),e}free(){let e=this.__destroy_into_raw();_.__wbg_intounderlyingsource_free(e,0)}cancel(){let e=this.__destroy_into_raw();_.intounderlyingsource_cancel(e)}pull(e){return _.intounderlyingsource_pull(this.__wbg_ptr,e)}};Symbol.dispose&&(On.prototype[Symbol.dispose]=On.prototype.free);_n=class o{static __wrap(e){let n=Object.create(o.prototype);return n.__wbg_ptr=e,fo.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,fo.unregister(this),e}free(){let e=this.__destroy_into_raw();_.__wbg_rufflehandle_free(e,0)}audio_context(){return _.rufflehandle_audio_context(this.__wbg_ptr)}call_exposed_callback(e,n){let t=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),r=j,i=Pr(n,_.__wbindgen_malloc),s=j;return _.rufflehandle_call_exposed_callback(this.__wbg_ptr,t,r,i,s)}clear_custom_menu_items(){_.rufflehandle_clear_custom_menu_items(this.__wbg_ptr)}destroy(){_.rufflehandle_destroy(this.__wbg_ptr)}enable_background_tick_mode(){_.rufflehandle_enable_background_tick_mode(this.__wbg_ptr)}has_focus(){return _.rufflehandle_has_focus(this.__wbg_ptr)!==0}is_playing(){return _.rufflehandle_is_playing(this.__wbg_ptr)!==0}static is_wasm_simd_used(){return _.rufflehandle_is_wasm_simd_used()!==0}load_data(e,n,t){let r=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j,s=_.rufflehandle_load_data(this.__wbg_ptr,e,n,r,i);if(s[1])throw Ve(s[0])}pause(){_.rufflehandle_pause(this.__wbg_ptr)}play(){_.rufflehandle_play(this.__wbg_ptr)}prepare_context_menu(){return _.rufflehandle_prepare_context_menu(this.__wbg_ptr)}renderer_debug_info(){return _.rufflehandle_renderer_debug_info(this.__wbg_ptr)}renderer_name(){return _.rufflehandle_renderer_name(this.__wbg_ptr)}restart_animation_loop(){_.rufflehandle_restart_animation_loop(this.__wbg_ptr)}run_context_menu_callback(e){return _.rufflehandle_run_context_menu_callback(this.__wbg_ptr,e)}set_fullscreen(e){_.rufflehandle_set_fullscreen(this.__wbg_ptr,e)}set_trace_observer(e){_.rufflehandle_set_trace_observer(this.__wbg_ptr,e)}set_volume(e){_.rufflehandle_set_volume(this.__wbg_ptr,e)}stream_from(e,n){let t=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),r=j,i=_.rufflehandle_stream_from(this.__wbg_ptr,t,r,n);if(i[1])throw Ve(i[0])}tick_for_background(e){_.rufflehandle_tick_for_background(this.__wbg_ptr,e)}volume(){return _.rufflehandle_volume(this.__wbg_ptr)}};Symbol.dispose&&(_n.prototype[Symbol.dispose]=_n.prototype.free);Bn=class{toJSON(){return{}}toString(){return JSON.stringify(this)}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,bo.unregister(this),e}free(){let e=this.__destroy_into_raw();_.__wbg_ruffleinstancebuilder_free(e,0)}addFont(e,n){let t=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),r=j,i=Dr(n,_.__wbindgen_malloc),s=j;_.ruffleinstancebuilder_addFont(this.__wbg_ptr,t,r,i,s)}addGamepadButtonMapping(e,n){let t=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),r=j;_.ruffleinstancebuilder_addGamepadButtonMapping(this.__wbg_ptr,t,r,n)}addSocketProxy(e,n,t){let r=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),i=j,s=E(t,_.__wbindgen_malloc,_.__wbindgen_realloc),u=j;_.ruffleinstancebuilder_addSocketProxy(this.__wbg_ptr,r,i,n,s,u)}addUrlRewriteRule(e,n){let t=E(n,_.__wbindgen_malloc,_.__wbindgen_realloc),r=j;_.ruffleinstancebuilder_addUrlRewriteRule(this.__wbg_ptr,e,t,r)}build(e,n){return _.ruffleinstancebuilder_build(this.__wbg_ptr,e,n)}constructor(){let e=_.ruffleinstancebuilder_new();return this.__wbg_ptr=e,bo.register(this,this.__wbg_ptr,this),this}setAllowFullscreen(e){_.ruffleinstancebuilder_setAllowFullscreen(this.__wbg_ptr,e)}setAllowNetworking(e){let n=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setAllowNetworking(this.__wbg_ptr,n,t)}setAllowScriptAccess(e){_.ruffleinstancebuilder_setAllowScriptAccess(this.__wbg_ptr,e)}setBackgroundColor(e){_.ruffleinstancebuilder_setBackgroundColor(this.__wbg_ptr,k(e)?Number.MAX_SAFE_INTEGER:e>>>0)}setBaseUrl(e){var n=k(e)?0:E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setBaseUrl(this.__wbg_ptr,n,t)}setCompatibilityRules(e){_.ruffleinstancebuilder_setCompatibilityRules(this.__wbg_ptr,e)}setCredentialAllowList(e){let n=Pr(e,_.__wbindgen_malloc),t=j;_.ruffleinstancebuilder_setCredentialAllowList(this.__wbg_ptr,n,t)}setDefaultFont(e,n){let t=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),r=j,i=Pr(n,_.__wbindgen_malloc),s=j;_.ruffleinstancebuilder_setDefaultFont(this.__wbg_ptr,t,r,i,s)}setDeviceFontRenderer(e){let n=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setDeviceFontRenderer(this.__wbg_ptr,n,t)}setForceAlign(e){_.ruffleinstancebuilder_setForceAlign(this.__wbg_ptr,e)}setForceScale(e){_.ruffleinstancebuilder_setForceScale(this.__wbg_ptr,e)}setFrameRate(e){_.ruffleinstancebuilder_setFrameRate(this.__wbg_ptr,!k(e),k(e)?0:e)}setLetterbox(e){let n=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setLetterbox(this.__wbg_ptr,n,t)}setLogLevel(e){let n=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setLogLevel(this.__wbg_ptr,n,t)}setMaxExecutionDuration(e){_.ruffleinstancebuilder_setMaxExecutionDuration(this.__wbg_ptr,e)}setOpenUrlMode(e){let n=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setOpenUrlMode(this.__wbg_ptr,n,t)}setPlayerRuntime(e){let n=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setPlayerRuntime(this.__wbg_ptr,n,t)}setPlayerVersion(e){_.ruffleinstancebuilder_setPlayerVersion(this.__wbg_ptr,k(e)?16777215:e)}setPreferredRenderer(e){var n=k(e)?0:E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setPreferredRenderer(this.__wbg_ptr,n,t)}setQuality(e){let n=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setQuality(this.__wbg_ptr,n,t)}setScale(e){let n=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setScale(this.__wbg_ptr,n,t)}setScrollingBehavior(e){let n=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setScrollingBehavior(this.__wbg_ptr,n,t)}setShowMenu(e){_.ruffleinstancebuilder_setShowMenu(this.__wbg_ptr,e)}setStageAlign(e){let n=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setStageAlign(this.__wbg_ptr,n,t)}setUpgradeToHttps(e){_.ruffleinstancebuilder_setUpgradeToHttps(this.__wbg_ptr,e)}setVolume(e){_.ruffleinstancebuilder_setVolume(this.__wbg_ptr,e)}setWmode(e){var n=k(e)?0:E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),t=j;_.ruffleinstancebuilder_setWmode(this.__wbg_ptr,n,t)}};Symbol.dispose&&(Bn.prototype[Symbol.dispose]=Bn.prototype.free);Ln=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,mo.unregister(this),e}free(){let e=this.__destroy_into_raw();_.__wbg_zipwriter_free(e,0)}addFile(e,n){let t=E(e,_.__wbindgen_malloc,_.__wbindgen_realloc),r=j,i=Dr(n,_.__wbindgen_malloc),s=j;_.zipwriter_addFile(this.__wbg_ptr,t,r,i,s)}constructor(){let e=_.zipwriter_new();return this.__wbg_ptr=e,mo.register(this,this.__wbg_ptr,this),this}save(){let e=_.zipwriter_save(this.__wbg_ptr);if(e[3])throw Ve(e[2]);var n=fe(e[0],e[1]).slice();return _.__wbindgen_free(e[0],e[1]*1,1),n}};Symbol.dispose&&(Ln.prototype[Symbol.dispose]=Ln.prototype.free);us=typeof AudioContext<"u"?AudioContext:typeof webkitAudioContext<"u"?webkitAudioContext:void 0;As=["blob","arraybuffer"],uo=["nonzero","evenodd"],Fs=["unconfigured","configured","closed"],Es=["key","delta"],Rr=["clamp-to-edge","repeat","mirror-repeat"],Is=["auto"],co=["zero","one","src","one-minus-src","src-alpha","one-minus-src-alpha","dst","one-minus-dst","dst-alpha","one-minus-dst-alpha","src-alpha-saturated","constant","one-minus-constant","src1","one-minus-src1","src1-alpha","one-minus-src1-alpha"],Cs=["add","subtract","reverse-subtract","min","max"],Ps=["uniform","storage","read-only-storage"],Ds=["opaque","premultiplied"],Ts=["standard","extended"],Sr=["never","less","equal","less-equal","greater","not-equal","greater-equal","always"],Ms=["none","front","back"],lo=["nearest","linear"],Os=["ccw","cw"],jr=["uint16","uint32"],zr=["load","clear"],Bs=["nearest","linear"],Ls=["low-power","high-performance"],Ws=["point-list","line-list","line-strip","triangle-list","triangle-strip"],qs=["occlusion","timestamp"],$s=["filtering","non-filtering","comparison"],Ar=["keep","zero","replace","invert","increment-clamp","decrement-clamp","increment-wrap","decrement-wrap"],Us=["write-only","read-only","read-write"],Fr=["store","discard"],_o=["all","stencil-only","depth-only"],Ns=["1d","2d","3d"],Ue=["r8unorm","r8snorm","r8uint","r8sint","r16unorm","r16snorm","r16uint","r16sint","r16float","rg8unorm","rg8snorm","rg8uint","rg8sint","r32uint","r32sint","r32float","rg16unorm","rg16snorm","rg16uint","rg16sint","rg16float","rgba8unorm","rgba8unorm-srgb","rgba8snorm","rgba8uint","rgba8sint","bgra8unorm","bgra8unorm-srgb","rgb9e5ufloat","rgb10a2uint","rgb10a2unorm","rg11b10ufloat","rg32uint","rg32sint","rg32float","rgba16unorm","rgba16snorm","rgba16uint","rgba16sint","rgba16float","rgba32uint","rgba32sint","rgba32float","stencil8","depth16unorm","depth24plus","depth24plus-stencil8","depth32float","depth32float-stencil8","bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb","bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm","bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb","etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm","astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"],Vs=["float","unfilterable-float","depth","sint","uint"],Er=["1d","2d","2d-array","cube","cube-array","3d"],Gs=["uint8","uint8x2","uint8x4","sint8","sint8x2","sint8x4","unorm8","unorm8x2","unorm8x4","snorm8","snorm8x2","snorm8x4","uint16","uint16x2","uint16x4","sint16","sint16x2","sint16x4","unorm16","unorm16x2","unorm16x4","snorm16","snorm16x2","snorm16x4","float16","float16x2","float16x4","float32","float32x2","float32x3","float32x4","uint32","uint32x2","uint32x3","uint32x4","sint32","sint32x2","sint32x3","sint32x4","unorm10-10-10-2","unorm8x4-bgra"],Hs=["vertex","instance"],Js=["bytes"],Ks=["omit","same-origin","include"],Qs=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],Zs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>_.__wbg_intounderlyingbytesource_free(o,1)),Ys=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>_.__wbg_intounderlyingsink_free(o,1)),Xs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>_.__wbg_intounderlyingsource_free(o,1)),fo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>_.__wbg_rufflehandle_free(o,1)),bo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>_.__wbg_ruffleinstancebuilder_free(o,1)),mo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>_.__wbg_zipwriter_free(o,1));Mt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>_.__wbindgen_destroy_closure(o.a,o.b));Ne=null;Sn=null;jn=null;zn=null;An=null;Fn=null;En=null;In=null;Cn=null;Pn=null;Tt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Tt.decode();bu=2146435072,Ir=0;Dn=new TextEncoder;"encodeInto"in Dn||(Dn.encodeInto=function(o,e){let n=Dn.encode(o);return e.set(n),{read:o.length,written:n.length}});j=0});var Co={};Xt(Co,{IntoUnderlyingByteSource:()=>Zn,IntoUnderlyingSink:()=>Yn,IntoUnderlyingSource:()=>Xn,RuffleHandle:()=>bn,RuffleInstanceBuilder:()=>et,ZipWriter:()=>nt,default:()=>Tc,global_init:()=>yu,initSync:()=>Dc});function yu(){l.global_init()}function Eo(){return{__proto__:null,"./ruffle_web-wasm_mvp_bg.js":{__proto__:null,__wbg_Error_408e67f47ca7b58b:function(e,n){let t=Error(w(e,n));return f(t)},__wbg_Window_a2a6c4d665047b14:function(e){let n=a(e).Window;return f(n)},__wbg_WorkerGlobalScope_2664448a7c667d67:function(e){let n=a(e).WorkerGlobalScope;return f(n)},__wbg___wbindgen_add_d4e2ca36d51d4d09:function(e,n){let t=a(e)+a(n);return f(t)},__wbg___wbindgen_boolean_get_c9c83ebd41b34df3:function(e){let n=a(e),t=typeof n=="boolean"?n:void 0;return x(t)?16777215:t?1:0},__wbg___wbindgen_debug_string_a57024b9c6e4a48b:function(e,n){let t=Ur(a(n)),r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg___wbindgen_in_ac983077f137f2e6:function(e,n){return a(e)in a(n)},__wbg___wbindgen_is_function_5e4570eb24ffa122:function(e){return typeof a(e)=="function"},__wbg___wbindgen_is_null_7d13f41e1a2d5140:function(e){return a(e)===null},__wbg___wbindgen_is_string_e6f02f0ea5f20a32:function(e){return typeof a(e)=="string"},__wbg___wbindgen_is_undefined_6cff064c44e0d823:function(e){return a(e)===void 0},__wbg___wbindgen_number_get_136b9679cab35cfb:function(e,n){let t=a(n),r=typeof t=="number"?t:void 0;y().setFloat64(e+8,x(r)?0:r,!0),y().setInt32(e+0,!x(r),!0)},__wbg___wbindgen_string_get_d154f1e671052120:function(e,n){let t=a(n),r=typeof t=="string"?t:void 0;var i=x(r)?0:I(r,l.__wbindgen_malloc,l.__wbindgen_realloc),s=z;y().setInt32(e+4,s,!0),y().setInt32(e+0,i,!0)},__wbg___wbindgen_throw_bb96b2010945f0bc:function(e,n){throw new Error(w(e,n))},__wbg__wbg_cb_unref_be22cc64ae6946a0:function(e){a(e)._wbg_cb_unref()},__wbg_a_50b8aa2c55aab913:function(e){return a(e).a},__wbg_activeTexture_8e65ac2e8d488478:function(e,n){a(e).activeTexture(n>>>0)},__wbg_activeTexture_fd6262686afdbe2f:function(e,n){a(e).activeTexture(n>>>0)},__wbg_actualBoundingBoxAscent_4dcab656e4a31f96:function(e){return a(e).actualBoundingBoxAscent},__wbg_actualBoundingBoxDescent_77c46a72f390cca8:function(e){return a(e).actualBoundingBoxDescent},__wbg_actualBoundingBoxLeft_862e432cc4b67b21:function(e){return a(e).actualBoundingBoxLeft},__wbg_actualBoundingBoxRight_7dc82a3b2c564418:function(e){return a(e).actualBoundingBoxRight},__wbg_addColorStop_35d831fa917ffcd4:function(){return g(function(e,n,t,r){a(e).addColorStop(n,w(t,r))},arguments)},__wbg_addEventListener_3b8edc02c33d9f77:function(){return g(function(e,n,t,r){a(e).addEventListener(w(n,t),a(r))},arguments)},__wbg_addEventListener_d6fb728fba6ad35c:function(){return g(function(e,n,t,r,i){a(e).addEventListener(w(n,t),a(r),a(i))},arguments)},__wbg_addPath_2b5ccbd0d0049498:function(e,n,t){a(e).addPath(a(n),a(t))},__wbg_appendChild_d5cbce3d5fa81471:function(){return g(function(e,n){let t=a(e).appendChild(a(n));return f(t)},arguments)},__wbg_arrayBuffer_16433f17fbd74397:function(){return g(function(e){let n=a(e).arrayBuffer();return f(n)},arguments)},__wbg_assign_b4bc9b9355dde46c:function(){return g(function(e,n,t){a(e).assign(w(n,t))},arguments)},__wbg_attachShader_26751604f00d1f1b:function(e,n,t){a(e).attachShader(a(n),a(t))},__wbg_attachShader_61baa58641ea664a:function(e,n,t){a(e).attachShader(a(n),a(t))},__wbg_b_e13835841694635f:function(e){return a(e).b},__wbg_baseURI_2009585b672a389a:function(){return g(function(e,n){let t=a(n).baseURI;var r=x(t)?0:I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},arguments)},__wbg_beginQuery_444a51812fdbf958:function(e,n,t){a(e).beginQuery(n>>>0,a(t))},__wbg_beginRenderPass_3c53642423af50dc:function(){return g(function(e,n){let t=a(e).beginRenderPass(a(n));return f(t)},arguments)},__wbg_bezierCurveTo_6c962e111be3f1d0:function(e,n,t,r,i,s,u){a(e).bezierCurveTo(n,t,r,i,s,u)},__wbg_bindAttribLocation_1e182a50e1556784:function(e,n,t,r,i){a(e).bindAttribLocation(a(n),t>>>0,w(r,i))},__wbg_bindAttribLocation_9cc5ab15df1d042d:function(e,n,t,r,i){a(e).bindAttribLocation(a(n),t>>>0,w(r,i))},__wbg_bindBufferRange_5a8d28ef662d8746:function(e,n,t,r,i,s){a(e).bindBufferRange(n>>>0,t>>>0,a(r),i,s)},__wbg_bindBuffer_1fb12d083d2a22af:function(e,n,t){a(e).bindBuffer(n>>>0,a(t))},__wbg_bindBuffer_31cb159ab5dc5ba7:function(e,n,t){a(e).bindBuffer(n>>>0,a(t))},__wbg_bindFramebuffer_32ce672324ce8a16:function(e,n,t){a(e).bindFramebuffer(n>>>0,a(t))},__wbg_bindFramebuffer_e620067056f9316f:function(e,n,t){a(e).bindFramebuffer(n>>>0,a(t))},__wbg_bindRenderbuffer_765cffe23b9c36f7:function(e,n,t){a(e).bindRenderbuffer(n>>>0,a(t))},__wbg_bindRenderbuffer_9b313332bd7aa049:function(e,n,t){a(e).bindRenderbuffer(n>>>0,a(t))},__wbg_bindSampler_28b0a4c34c6f96d4:function(e,n,t){a(e).bindSampler(n>>>0,a(t))},__wbg_bindTexture_4c54ffb64c33564f:function(e,n,t){a(e).bindTexture(n>>>0,a(t))},__wbg_bindTexture_6fe86367f6be8f59:function(e,n,t){a(e).bindTexture(n>>>0,a(t))},__wbg_bindVertexArrayOES_96a4898652eac0d8:function(e,n){a(e).bindVertexArrayOES(a(n))},__wbg_bindVertexArray_0185d931d681d806:function(e,n){a(e).bindVertexArray(a(n))},__wbg_blendColor_402572bc445d3ac3:function(e,n,t,r,i){a(e).blendColor(n,t,r,i)},__wbg_blendColor_af92968fedc595b1:function(e,n,t,r,i){a(e).blendColor(n,t,r,i)},__wbg_blendEquationSeparate_5ab35e46e7f48717:function(e,n,t){a(e).blendEquationSeparate(n>>>0,t>>>0)},__wbg_blendEquationSeparate_9ad084e8266b8e3c:function(e,n,t){a(e).blendEquationSeparate(n>>>0,t>>>0)},__wbg_blendEquation_4bab539169e7e865:function(e,n){a(e).blendEquation(n>>>0)},__wbg_blendEquation_502ed4c6af5bf8ee:function(e,n){a(e).blendEquation(n>>>0)},__wbg_blendFuncSeparate_2e4d259caaba517e:function(e,n,t,r,i){a(e).blendFuncSeparate(n>>>0,t>>>0,r>>>0,i>>>0)},__wbg_blendFuncSeparate_66688b15ecc6529c:function(e,n,t,r,i){a(e).blendFuncSeparate(n>>>0,t>>>0,r>>>0,i>>>0)},__wbg_blendFunc_b7f382e97db2fd5b:function(e,n,t){a(e).blendFunc(n>>>0,t>>>0)},__wbg_blendFunc_d908118bbb181928:function(e,n,t){a(e).blendFunc(n>>>0,t>>>0)},__wbg_blitFramebuffer_20b32de88a3097b1:function(e,n,t,r,i,s,u,c,d,b,h){a(e).blitFramebuffer(n,t,r,i,s,u,c,d,b>>>0,h>>>0)},__wbg_body_d6eca0586d628e3c:function(e){let n=a(e).body;return x(n)?0:f(n)},__wbg_body_eb2e7e7701fa47ae:function(e){let n=a(e).body;return x(n)?0:f(n)},__wbg_bufferData_1dd2939db2d88d82:function(e,n,t,r){a(e).bufferData(n>>>0,t,r>>>0)},__wbg_bufferData_69a44ade0864ba2b:function(e,n,t,r){a(e).bufferData(n>>>0,a(t),r>>>0)},__wbg_bufferData_6c10d3e07ec9a2a9:function(e,n,t,r){a(e).bufferData(n>>>0,t,r>>>0)},__wbg_bufferData_bd2b8bde42f33479:function(e,n,t,r,i){a(e).bufferData(n>>>0,be(t,r),i>>>0)},__wbg_bufferData_d359d1c797b8e8b7:function(e,n,t,r){a(e).bufferData(n>>>0,a(t),r>>>0)},__wbg_bufferSubData_4f6063d50303b61d:function(e,n,t,r){a(e).bufferSubData(n>>>0,t,a(r))},__wbg_bufferSubData_64b69f468a0d3048:function(e,n,t,r){a(e).bufferSubData(n>>>0,t,a(r))},__wbg_buffer_78291c0e094ccf99:function(e){let n=a(e).buffer;return f(n)},__wbg_button_3963e81aec2b2f60:function(e){return a(e).button},__wbg_buttons_4a8c6d3d822b6038:function(e){let n=a(e).buttons;return f(n)},__wbg_byobRequest_f8b1c89429b77545:function(e){let n=a(e).byobRequest;return x(n)?0:f(n)},__wbg_byteLength_336bc7d303511ba0:function(e){return a(e).byteLength},__wbg_byteOffset_2b1d5b10453ce198:function(e){return a(e).byteOffset},__wbg_c_c811405a34442426:function(e){return a(e).c},__wbg_callExternalInterface_9a524963faa85123:function(){return g(function(e,n,t,r){var i=wc(t,r);l.__wbindgen_free(t,r*4,4);let s=Dt(w(e,n),i);return f(s)},arguments)},__wbg_callFSCommand_b7b7e088eb8c23cf:function(){return g(function(e,n,t,r,i){return a(e).callFSCommand(w(n,t),w(r,i))},arguments)},__wbg_call_1c5886ab9c57d1c7:function(){return g(function(e,n){let t=a(e).call(a(n));return f(t)},arguments)},__wbg_call_35dba3c747ad7521:function(){return g(function(e,n,t){let r=a(e).call(a(n),a(t));return f(r)},arguments)},__wbg_cancelAnimationFrame_58acec8573d45a99:function(){return g(function(e,n){a(e).cancelAnimationFrame(n)},arguments)},__wbg_clearBufferfv_ccbb43fb098f1912:function(e,n,t,r,i){a(e).clearBufferfv(n>>>0,t,G(r,i))},__wbg_clearBufferiv_8b1c68299632478f:function(e,n,t,r,i){a(e).clearBufferiv(n>>>0,t,Ee(r,i))},__wbg_clearBufferuiv_cd72147d09d432e8:function(e,n,t,r,i){a(e).clearBufferuiv(n>>>0,t,fn(r,i))},__wbg_clearColor_c4271a8227ced504:function(e,n,t,r,i){a(e).clearColor(n,t,r,i)},__wbg_clearDepth_887000180cc9eb2e:function(e,n){a(e).clearDepth(n)},__wbg_clearDepth_c4897278afd894a9:function(e,n){a(e).clearDepth(n)},__wbg_clearRect_66721231b69373f5:function(e,n,t,r,i){a(e).clearRect(n,t,r,i)},__wbg_clearRect_81c3c80fbe793b63:function(e,n,t,r,i){a(e).clearRect(n,t,r,i)},__wbg_clearStencil_3d39149452a2f872:function(e,n){a(e).clearStencil(n)},__wbg_clearStencil_96978923f9c6fb1f:function(e,n){a(e).clearStencil(n)},__wbg_clear_20f7614cd20df101:function(e,n){a(e).clear(n>>>0)},__wbg_clear_332f205d7e52df87:function(e,n){a(e).clear(n>>>0)},__wbg_click_cdf5981a6746a4b8:function(e){a(e).click()},__wbg_clientHeight_834c029be3d903a7:function(e){return a(e).clientHeight},__wbg_clientWaitSync_8800b42d1c534e00:function(e,n,t,r){return a(e).clientWaitSync(a(n),t>>>0,r>>>0)},__wbg_clientWidth_ad03e8eb6c2b0c56:function(e){return a(e).clientWidth},__wbg_clip_186ecc3c70af5766:function(e,n,t){a(e).clip(a(n),ko[t])},__wbg_clipboardData_05651f46357b67bc:function(e){let n=a(e).clipboardData;return x(n)?0:f(n)},__wbg_clipboard_4fea7f044e5b8637:function(e){let n=a(e).clipboard;return f(n)},__wbg_closePath_4580feb19a1218cc:function(e){a(e).closePath()},__wbg_closeVirtualKeyboard_d9973173f570afc2:function(e){a(e).closeVirtualKeyboard()},__wbg_close_0a7ad9b918faec6d:function(){return g(function(e,n){a(e).close(n)},arguments)},__wbg_close_4d8c26ce7459660f:function(){return g(function(e){let n=a(e).close();return f(n)},arguments)},__wbg_close_7292def578949963:function(){return g(function(e,n,t,r){a(e).close(n,w(t,r))},arguments)},__wbg_close_72f69f5f2de2bc73:function(){return g(function(e){a(e).close()},arguments)},__wbg_close_923aebe6bdeee300:function(e){a(e).close()},__wbg_close_97cdb44c3a7878f6:function(){return g(function(e){a(e).close()},arguments)},__wbg_close_b857478a8d4c1a16:function(){return g(function(e){a(e).close()},arguments)},__wbg_code_1bac1fd03147d97e:function(e,n){let t=a(n).code,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_code_e2719108dd8e1fec:function(e){return a(e).code},__wbg_colorMask_5646450fe1f1b723:function(e,n,t,r,i){a(e).colorMask(n!==0,t!==0,r!==0,i!==0)},__wbg_colorMask_8fca508f44773327:function(e,n,t,r,i){a(e).colorMask(n!==0,t!==0,r!==0,i!==0)},__wbg_compileShader_4ede19e4fc1bebce:function(e,n){a(e).compileShader(a(n))},__wbg_compileShader_ac457ada9042f08e:function(e,n){a(e).compileShader(a(n))},__wbg_compressedTexSubImage2D_0968a85385b7c463:function(e,n,t,r,i,s,u,c,d,b){a(e).compressedTexSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d,b)},__wbg_compressedTexSubImage2D_45987d7f0210d36f:function(e,n,t,r,i,s,u,c,d){a(e).compressedTexSubImage2D(n>>>0,t,r,i,s,u,c>>>0,a(d))},__wbg_compressedTexSubImage2D_a39446fce0a68ad9:function(e,n,t,r,i,s,u,c,d){a(e).compressedTexSubImage2D(n>>>0,t,r,i,s,u,c>>>0,a(d))},__wbg_compressedTexSubImage3D_3da84908295b8ec3:function(e,n,t,r,i,s,u,c,d,b,h,R){a(e).compressedTexSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h,R)},__wbg_compressedTexSubImage3D_c0bc017057e3942a:function(e,n,t,r,i,s,u,c,d,b,h){a(e).compressedTexSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,a(h))},__wbg_configure_1e2c1c9edad07d26:function(){return g(function(e,n){a(e).configure(a(n))},arguments)},__wbg_configure_3edaaed280bc6de8:function(){return g(function(e,n){a(e).configure(a(n))},arguments)},__wbg_confirm_f1128d5b70df2707:function(){return g(function(e,n,t){return a(e).confirm(w(n,t))},arguments)},__wbg_connect_d2a36cf1f5a1ec54:function(){return g(function(e,n){let t=a(e).connect(a(n));return f(t)},arguments)},__wbg_contains_3ba0161eb6906b95:function(e,n){return a(e).contains(a(n))},__wbg_copyBufferSubData_e5dc2aab90456f99:function(e,n,t,r,i,s){a(e).copyBufferSubData(n>>>0,t>>>0,r,i,s)},__wbg_copyBufferToBuffer_01766818654a9868:function(){return g(function(e,n,t,r,i){a(e).copyBufferToBuffer(a(n),t,a(r),i)},arguments)},__wbg_copyBufferToBuffer_9c174b96fb08d551:function(){return g(function(e,n,t,r,i,s){a(e).copyBufferToBuffer(a(n),t,a(r),i,s)},arguments)},__wbg_copyBufferToTexture_ff632a21ab3fe3a7:function(){return g(function(e,n,t,r){a(e).copyBufferToTexture(a(n),a(t),a(r))},arguments)},__wbg_copyTexSubImage2D_188da734d1c8aa07:function(e,n,t,r,i,s,u,c,d){a(e).copyTexSubImage2D(n>>>0,t,r,i,s,u,c,d)},__wbg_copyTexSubImage2D_84d99fa40fabace0:function(e,n,t,r,i,s,u,c,d){a(e).copyTexSubImage2D(n>>>0,t,r,i,s,u,c,d)},__wbg_copyTexSubImage3D_89064e67340a38b3:function(e,n,t,r,i,s,u,c,d,b){a(e).copyTexSubImage3D(n>>>0,t,r,i,s,u,c,d,b)},__wbg_copyTextureToBuffer_1234b3210431ad05:function(){return g(function(e,n,t,r){a(e).copyTextureToBuffer(a(n),a(t),a(r))},arguments)},__wbg_copyTextureToTexture_d2e6a1eb3254b828:function(){return g(function(e,n,t,r){a(e).copyTextureToTexture(a(n),a(t),a(r))},arguments)},__wbg_copyToAudioBufferInterleaved_ebaf4f5e12f8d393:function(e,n,t){Pt(a(e),G(n,t))},__wbg_copyTo_394d7e9635015a1f:function(e,n,t){let r=a(e).copyTo(be(n,t));return f(r)},__wbg_createBindGroupLayout_b1bd63b4e88459d8:function(){return g(function(e,n){let t=a(e).createBindGroupLayout(a(n));return f(t)},arguments)},__wbg_createBindGroup_f539b26ca341308f:function(e,n){let t=a(e).createBindGroup(a(n));return f(t)},__wbg_createBufferSource_3679674c3bfc1e4e:function(){return g(function(e){let n=a(e).createBufferSource();return f(n)},arguments)},__wbg_createBuffer_44b37c222efbd326:function(e){let n=a(e).createBuffer();return x(n)?0:f(n)},__wbg_createBuffer_9b192707f1e81570:function(){return g(function(e,n,t,r){let i=a(e).createBuffer(n>>>0,t>>>0,r);return f(i)},arguments)},__wbg_createBuffer_af6c411fe2b091f8:function(e){let n=a(e).createBuffer();return x(n)?0:f(n)},__wbg_createBuffer_d800e9b1d41b2ee5:function(){return g(function(e,n){let t=a(e).createBuffer(a(n));return f(t)},arguments)},__wbg_createCommandEncoder_3352d1ffc36c6fc0:function(e,n){let t=a(e).createCommandEncoder(a(n));return f(t)},__wbg_createElementNS_f18ede2d74f15ea1:function(){return g(function(e,n,t,r,i){let s=a(e).createElementNS(n===0?void 0:w(n,t),w(r,i));return f(s)},arguments)},__wbg_createElement_7f42344eee7bb810:function(){return g(function(e,n,t){let r=a(e).createElement(w(n,t));return f(r)},arguments)},__wbg_createFramebuffer_4dc2fb6bd93463a5:function(e){let n=a(e).createFramebuffer();return x(n)?0:f(n)},__wbg_createFramebuffer_e6d8917bf9291c65:function(e){let n=a(e).createFramebuffer();return x(n)?0:f(n)},__wbg_createLinearGradient_d16f7c26c44e0b0a:function(e,n,t,r,i){let s=a(e).createLinearGradient(n,t,r,i);return f(s)},__wbg_createObjectURL_da379bd6bf9a91c6:function(){return g(function(e,n){let t=URL.createObjectURL(a(n)),r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},arguments)},__wbg_createPattern_f95263b497f37f3c:function(){return g(function(e,n,t,r){let i=a(e).createPattern(a(n),w(t,r));return x(i)?0:f(i)},arguments)},__wbg_createPipelineLayout_6eab52c327118937:function(e,n){let t=a(e).createPipelineLayout(a(n));return f(t)},__wbg_createProgram_2ebbd17565e0ede7:function(e){let n=a(e).createProgram();return x(n)?0:f(n)},__wbg_createProgram_81b37242eadef893:function(e){let n=a(e).createProgram();return x(n)?0:f(n)},__wbg_createQuerySet_2dc8cde53df9849d:function(){return g(function(e,n){let t=a(e).createQuerySet(a(n));return f(t)},arguments)},__wbg_createQuery_5ef5edffbd3a678d:function(e){let n=a(e).createQuery();return x(n)?0:f(n)},__wbg_createRadialGradient_c816f53e6e0afb32:function(){return g(function(e,n,t,r,i,s,u){let c=a(e).createRadialGradient(n,t,r,i,s,u);return f(c)},arguments)},__wbg_createRenderPipeline_0ebb7ebc653e9207:function(){return g(function(e,n){let t=a(e).createRenderPipeline(a(n));return f(t)},arguments)},__wbg_createRenderbuffer_be624f81e06a0cfd:function(e){let n=a(e).createRenderbuffer();return x(n)?0:f(n)},__wbg_createRenderbuffer_cd2638d5dda9c277:function(e){let n=a(e).createRenderbuffer();return x(n)?0:f(n)},__wbg_createSampler_9bd91d7e928c0060:function(e,n){let t=a(e).createSampler(a(n));return f(t)},__wbg_createSampler_f1aedbf47c21745a:function(e){let n=a(e).createSampler();return x(n)?0:f(n)},__wbg_createShaderModule_cefa51336cb288ae:function(e,n){let t=a(e).createShaderModule(a(n));return f(t)},__wbg_createShader_9a8e5f335caac850:function(e,n){let t=a(e).createShader(n>>>0);return x(t)?0:f(t)},__wbg_createShader_f8638cf4c19a1d2d:function(e,n){let t=a(e).createShader(n>>>0);return x(t)?0:f(t)},__wbg_createTexture_42c791197006c64a:function(e){let n=a(e).createTexture();return x(n)?0:f(n)},__wbg_createTexture_c74740f68b5c2a93:function(e){let n=a(e).createTexture();return x(n)?0:f(n)},__wbg_createTexture_ed7e9fc04dd54d84:function(){return g(function(e,n){let t=a(e).createTexture(a(n));return f(t)},arguments)},__wbg_createVertexArrayOES_f7e8c94194c4e075:function(e){let n=a(e).createVertexArrayOES();return x(n)?0:f(n)},__wbg_createVertexArray_abd18ded26b75653:function(e){let n=a(e).createVertexArray();return x(n)?0:f(n)},__wbg_createView_da41c2d2cb212715:function(){return g(function(e,n){let t=a(e).createView(a(n));return f(t)},arguments)},__wbg_ctrlKey_8f6cb44d63052c81:function(e){return a(e).ctrlKey},__wbg_cullFace_053fc24c214cae86:function(e,n){a(e).cullFace(n>>>0)},__wbg_cullFace_94e1cd382e8b654f:function(e,n){a(e).cullFace(n>>>0)},__wbg_currentTarget_81d519ad9e5a92ec:function(e){let n=a(e).currentTarget;return x(n)?0:f(n)},__wbg_currentTime_5594ee0e8ef1889a:function(e){return a(e).currentTime},__wbg_d_fda8f6ed85d1e057:function(e){return a(e).d},__wbg_data_51774c2dcd0a0e9f:function(e,n){let t=a(n).data,r=Vr(t,l.__wbindgen_malloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_data_57d8ce4eb5f0a433:function(e){let n=a(e).data;return f(n)},__wbg_decodeQueueSize_cc0c71f3c63c501b:function(e){return a(e).decodeQueueSize},__wbg_decode_cba6160770a46397:function(){return g(function(e,n){a(e).decode(a(n))},arguments)},__wbg_deleteBuffer_42bd497a20b76d88:function(e,n){a(e).deleteBuffer(a(n))},__wbg_deleteBuffer_50f20219abee4d05:function(e,n){a(e).deleteBuffer(a(n))},__wbg_deleteFramebuffer_073235a01c2a0a28:function(e,n){a(e).deleteFramebuffer(a(n))},__wbg_deleteFramebuffer_07fcc16563d17920:function(e,n){a(e).deleteFramebuffer(a(n))},__wbg_deleteProgram_0191056307686073:function(e,n){a(e).deleteProgram(a(n))},__wbg_deleteProgram_ee7f1925cb856dc2:function(e,n){a(e).deleteProgram(a(n))},__wbg_deleteQuery_4624acbf9cbfc6e2:function(e,n){a(e).deleteQuery(a(n))},__wbg_deleteRenderbuffer_570117534d9608a1:function(e,n){a(e).deleteRenderbuffer(a(n))},__wbg_deleteRenderbuffer_ba4a805dfac20358:function(e,n){a(e).deleteRenderbuffer(a(n))},__wbg_deleteSampler_527e8d31f81669d9:function(e,n){a(e).deleteSampler(a(n))},__wbg_deleteShader_2558228a4ef7373e:function(e,n){a(e).deleteShader(a(n))},__wbg_deleteShader_413961eb94f5c67c:function(e,n){a(e).deleteShader(a(n))},__wbg_deleteSync_11f80510355180d6:function(e,n){a(e).deleteSync(a(n))},__wbg_deleteTexture_0ccd278d6db819ff:function(e,n){a(e).deleteTexture(a(n))},__wbg_deleteTexture_aadf9716c394d7be:function(e,n){a(e).deleteTexture(a(n))},__wbg_deleteVertexArrayOES_e43a9a425587d52b:function(e,n){a(e).deleteVertexArrayOES(a(n))},__wbg_deleteVertexArray_106030034355d246:function(e,n){a(e).deleteVertexArray(a(n))},__wbg_delete_daeb0136382e63b0:function(){return g(function(e,n,t){delete a(e)[w(n,t)]},arguments)},__wbg_deltaMode_1eedd4132dd540ba:function(e){return a(e).deltaMode},__wbg_deltaY_13780a1f1e6d6f8c:function(e){return a(e).deltaY},__wbg_depthFunc_6c6f948417f5bde4:function(e,n){a(e).depthFunc(n>>>0)},__wbg_depthFunc_bb3152f635a60ff2:function(e,n){a(e).depthFunc(n>>>0)},__wbg_depthMask_4e0075e07739355b:function(e,n){a(e).depthMask(n!==0)},__wbg_depthMask_bdc57b9e64c6b4d8:function(e,n){a(e).depthMask(n!==0)},__wbg_depthRange_0acaf3031a92d51d:function(e,n,t){a(e).depthRange(n,t)},__wbg_depthRange_e2d0a59942d33efd:function(e,n,t){a(e).depthRange(n,t)},__wbg_description_83b8a393160021b9:function(e,n){let t=a(n).description,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_destination_f6ba56e7f07829d0:function(e){let n=a(e).destination;return f(n)},__wbg_destroy_637537007d9eaa44:function(e){a(e).destroy()},__wbg_devicePixelRatio_e60a2d12bfd01f78:function(e){return a(e).devicePixelRatio},__wbg_disableVertexAttribArray_98752beca840c3da:function(e,n){a(e).disableVertexAttribArray(n>>>0)},__wbg_disableVertexAttribArray_aee51b7f1a8ef4cc:function(e,n){a(e).disableVertexAttribArray(n>>>0)},__wbg_disable_2ad210ba5315372a:function(e,n){a(e).disable(n>>>0)},__wbg_disable_bb1df5a6c75eaecd:function(e,n){a(e).disable(n>>>0)},__wbg_dispatchEvent_d63878ba8477faa4:function(){return g(function(e,n){return a(e).dispatchEvent(a(n))},arguments)},__wbg_displayClipboardModal_fd06ed44d66c8931:function(e,n){a(e).displayClipboardModal(n!==0)},__wbg_displayMessage_ea945f752a76f3b0:function(e,n,t){a(e).displayMessage(w(n,t))},__wbg_displayRestoredFromBfcacheMessage_169d3d95cdf483c8:function(e){a(e).displayRestoredFromBfcacheMessage()},__wbg_displayRootMovieDownloadFailedMessage_9d9770e89a2c5f72:function(e,n,t,r){let i,s;try{i=t,s=r,a(e).displayRootMovieDownloadFailedMessage(n!==0,w(t,r))}finally{l.__wbindgen_free(i,s,1)}},__wbg_displayUnsupportedVideo_239d3c76f55e5fbd:function(e,n,t){a(e).displayUnsupportedVideo(w(n,t))},__wbg_document_ac38448dbfd31a57:function(e){let n=a(e).document;return x(n)?0:f(n)},__wbg_done_669171204c3dcae2:function(e){return a(e).done},__wbg_drawArraysInstancedANGLE_cb3b87925641d5b9:function(e,n,t,r,i){a(e).drawArraysInstancedANGLE(n>>>0,t,r,i)},__wbg_drawArraysInstanced_45317b22bbf7ffe8:function(e,n,t,r,i){a(e).drawArraysInstanced(n>>>0,t,r,i)},__wbg_drawArrays_02c354e377984441:function(e,n,t,r){a(e).drawArrays(n>>>0,t,r)},__wbg_drawArrays_b2004a40c212065c:function(e,n,t,r){a(e).drawArrays(n>>>0,t,r)},__wbg_drawBuffersWEBGL_0b4935290cba977e:function(e,n){a(e).drawBuffersWEBGL(a(n))},__wbg_drawBuffers_f07f796e50bb0077:function(e,n){a(e).drawBuffers(a(n))},__wbg_drawElementsInstancedANGLE_8179cb41f5862831:function(e,n,t,r,i,s){a(e).drawElementsInstancedANGLE(n>>>0,t,r>>>0,i,s)},__wbg_drawElementsInstanced_07717eeb890435e9:function(e,n,t,r,i,s){a(e).drawElementsInstanced(n>>>0,t,r>>>0,i,s)},__wbg_drawElements_39fd9be525b4845b:function(e,n,t,r,i){a(e).drawElements(n>>>0,t,r>>>0,i)},__wbg_drawImage_87a05b54f458ec06:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).drawImage(a(n),t,r,i,s,u,c,d,b)},arguments)},__wbg_drawIndexed_638959aae942557c:function(e,n,t,r,i,s){a(e).drawIndexed(n>>>0,t>>>0,r>>>0,i,s>>>0)},__wbg_drawingBufferHeight_9574a81ca1940829:function(e){return a(e).drawingBufferHeight},__wbg_drawingBufferWidth_95a3d167a67d18dc:function(e){return a(e).drawingBufferWidth},__wbg_e_59a2a263244aebfc:function(e){return a(e).e},__wbg_enableVertexAttribArray_90f1a9f570379c36:function(e,n){a(e).enableVertexAttribArray(n>>>0)},__wbg_enableVertexAttribArray_b072ffcbe4f26e2b:function(e,n){a(e).enableVertexAttribArray(n>>>0)},__wbg_enable_17346ff3b2257cae:function(e,n){a(e).enable(n>>>0)},__wbg_enable_db1e433ea267f29b:function(e,n){a(e).enable(n>>>0)},__wbg_endQuery_0434371d408e59b7:function(e,n){a(e).endQuery(n>>>0)},__wbg_end_b57473834b877409:function(e){a(e).end()},__wbg_enqueue_7d68a21eda78e72f:function(){return g(function(e,n){a(e).enqueue(a(n))},arguments)},__wbg_entries_7774d489e1da5f4f:function(e){let n=Object.entries(a(e));return f(n)},__wbg_error_757e9472f8410341:function(e,n){let t,r;try{t=e,r=n,console.error(w(e,n))}finally{l.__wbindgen_free(t,r,1)}},__wbg_execCommand_cd03aa5ebc21f204:function(){return g(function(e,n,t){return a(e).execCommand(w(n,t))},arguments)},__wbg_f_ea46ea3f61f48c32:function(e){return a(e).f},__wbg_features_5cac120c28ba0475:function(e){let n=a(e).features;return f(n)},__wbg_features_dec7bd2fd3d91bd6:function(e){let n=a(e).features;return f(n)},__wbg_fenceSync_57ab30f550e5a5a2:function(e,n,t){let r=a(e).fenceSync(n>>>0,t>>>0);return x(r)?0:f(r)},__wbg_fetch_729fad2e5272298f:function(e,n){let t=a(e).fetch(a(n));return f(t)},__wbg_files_56a897754f75826b:function(e){let n=a(e).files;return x(n)?0:f(n)},__wbg_fillRect_3077c0e38eb34cd1:function(e,n,t,r,i){a(e).fillRect(n,t,r,i)},__wbg_fillText_1b1e3dfee622d89d:function(){return g(function(e,n,t,r,i){a(e).fillText(w(n,t),r,i)},arguments)},__wbg_fill_99bc71dde47c30ec:function(e,n,t){a(e).fill(a(n),ko[t])},__wbg_finish_09ec094c10f41e7b:function(e){let n=a(e).finish();return f(n)},__wbg_finish_81c066eb195fc8a9:function(e){a(e).finish()},__wbg_finish_94865fee5c90da6b:function(e){a(e).finish()},__wbg_finish_ec1c191f66a895b1:function(e,n){let t=a(e).finish(a(n));return f(t)},__wbg_flush_2a8fa6766a4f3ada:function(e){a(e).flush()},__wbg_flush_918ffb9cfebcbaab:function(e){a(e).flush()},__wbg_focus_77d7483c7b2b9f30:function(){return g(function(e){a(e).focus()},arguments)},__wbg_focus_c7d4fe3aba923a18:function(){return g(function(e,n){a(e).focus(a(n))},arguments)},__wbg_fontBoundingBoxAscent_c77b10412fdb331d:function(e){return a(e).fontBoundingBoxAscent},__wbg_fontBoundingBoxDescent_63ee2689f66ed207:function(e){return a(e).fontBoundingBoxDescent},__wbg_format_41beb9ccd4250e97:function(e){let n=a(e).format;return x(n)?24:(lc.indexOf(n)+1||24)-1},__wbg_framebufferRenderbuffer_5736a8553be94035:function(e,n,t,r,i){a(e).framebufferRenderbuffer(n>>>0,t>>>0,r>>>0,a(i))},__wbg_framebufferRenderbuffer_e0c873b9f296443d:function(e,n,t,r,i){a(e).framebufferRenderbuffer(n>>>0,t>>>0,r>>>0,a(i))},__wbg_framebufferTexture2D_8584b49a205ffe5b:function(e,n,t,r,i,s){a(e).framebufferTexture2D(n>>>0,t>>>0,r>>>0,a(i),s)},__wbg_framebufferTexture2D_9abab99d6209666a:function(e,n,t,r,i,s){a(e).framebufferTexture2D(n>>>0,t>>>0,r>>>0,a(i),s)},__wbg_framebufferTextureLayer_e236352620170c5a:function(e,n,t,r,i,s){a(e).framebufferTextureLayer(n>>>0,t>>>0,a(r),i,s)},__wbg_framebufferTextureMultiviewOVR_9b89dd83134856d3:function(e,n,t,r,i,s,u){a(e).framebufferTextureMultiviewOVR(n>>>0,t>>>0,a(r),i,s,u)},__wbg_fromEntries_464704b0ede47aaf:function(){return g(function(e){let n=Object.fromEntries(a(e));return f(n)},arguments)},__wbg_frontFace_188579d7bba462b1:function(e,n){a(e).frontFace(n>>>0)},__wbg_frontFace_19294c82ae89fa71:function(e,n){a(e).frontFace(n>>>0)},__wbg_getAttribLocation_bddb3abf7c5c5fc0:function(e,n,t,r){return a(e).getAttribLocation(a(n),w(t,r))},__wbg_getBufferSubData_d1d7ad69c40ea085:function(e,n,t,r){a(e).getBufferSubData(n>>>0,t,a(r))},__wbg_getContext_123ddade3a0fb2f5:function(){return g(function(e,n,t,r){let i=a(e).getContext(w(n,t),a(r));return x(i)?0:f(i)},arguments)},__wbg_getContext_53c8c42beb820370:function(){return g(function(e,n,t,r){let i=a(e).getContext(w(n,t),a(r));return x(i)?0:f(i)},arguments)},__wbg_getContext_71c33f14b63da593:function(){return g(function(e,n,t){let r=a(e).getContext(w(n,t));return x(r)?0:f(r)},arguments)},__wbg_getContext_c5236e0057b35024:function(){return g(function(e,n,t){let r=a(e).getContext(w(n,t));return x(r)?0:f(r)},arguments)},__wbg_getCurrentTexture_9f3b84d0eaa6cd95:function(){return g(function(e){let n=a(e).getCurrentTexture();return f(n)},arguments)},__wbg_getData_7b73a3e658ca866b:function(){return g(function(e,n,t,r){let i=a(n).getData(w(t,r)),s=I(i,l.__wbindgen_malloc,l.__wbindgen_realloc),u=z;y().setInt32(e+4,u,!0),y().setInt32(e+0,s,!0)},arguments)},__wbg_getError_417e3c195ccd57de:function(e){return a(e).getError()},__wbg_getExtension_69f46e4b97514707:function(){return g(function(e,n,t){let r=a(e).getExtension(w(n,t));return x(r)?0:f(r)},arguments)},__wbg_getExtension_8e8c3be603d4f5ce:function(){return g(function(e,n,t){let r=a(e).getExtension(w(n,t));return x(r)?0:f(r)},arguments)},__wbg_getGamepads_2493dee1cac4f38b:function(){return g(function(e){let n=a(e).getGamepads();return f(n)},arguments)},__wbg_getImageData_251c6e7a33a280e5:function(){return g(function(e,n,t,r,i){let s=a(e).getImageData(n,t,r,i);return f(s)},arguments)},__wbg_getIndexedParameter_fa6cca29d50de787:function(){return g(function(e,n,t){let r=a(e).getIndexedParameter(n>>>0,t>>>0);return f(r)},arguments)},__wbg_getMappedRange_fb54c6327b2d8d20:function(){return g(function(e,n,t){let r=a(e).getMappedRange(n,t);return f(r)},arguments)},__wbg_getObjectId_0985e89441bbf45b:function(e,n){let t=a(n).getObjectId();var r=x(t)?0:I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_getParameter_19325d4aa1b66856:function(){return g(function(e,n){let t=a(e).getParameter(n>>>0);return f(t)},arguments)},__wbg_getParameter_7ddbe9f9606f6a80:function(){return g(function(e,n){let t=a(e).getParameter(n>>>0);return f(t)},arguments)},__wbg_getPreferredCanvasFormat_0ef5034c8902201b:function(e){let n=a(e).getPreferredCanvasFormat();return(Ge.indexOf(n)+1||102)-1},__wbg_getProgramInfoLog_50a07d12dddd0da6:function(e,n,t){let r=a(n).getProgramInfoLog(a(t));var i=x(r)?0:I(r,l.__wbindgen_malloc,l.__wbindgen_realloc),s=z;y().setInt32(e+4,s,!0),y().setInt32(e+0,i,!0)},__wbg_getProgramInfoLog_72665662cf78b5a2:function(e,n,t){let r=a(n).getProgramInfoLog(a(t));var i=x(r)?0:I(r,l.__wbindgen_malloc,l.__wbindgen_realloc),s=z;y().setInt32(e+4,s,!0),y().setInt32(e+0,i,!0)},__wbg_getProgramParameter_1f5cceb73030e823:function(e,n,t){let r=a(e).getProgramParameter(a(n),t>>>0);return f(r)},__wbg_getProgramParameter_41e1ea6f52a71ba5:function(e,n,t){let r=a(e).getProgramParameter(a(n),t>>>0);return f(r)},__wbg_getQueryParameter_fa2ce36cfdedc862:function(e,n,t){let r=a(e).getQueryParameter(a(n),t>>>0);return f(r)},__wbg_getRandomValues_436a51d0629d84e1:function(){return g(function(e,n){globalThis.crypto.getRandomValues(be(e,n))},arguments)},__wbg_getReader_9facd4f899beac89:function(){return g(function(e){let n=a(e).getReader();return f(n)},arguments)},__wbg_getRootNode_f79810b049364fd5:function(e){let n=a(e).getRootNode();return f(n)},__wbg_getShaderInfoLog_337a0567e83283d1:function(e,n,t){let r=a(n).getShaderInfoLog(a(t));var i=x(r)?0:I(r,l.__wbindgen_malloc,l.__wbindgen_realloc),s=z;y().setInt32(e+4,s,!0),y().setInt32(e+0,i,!0)},__wbg_getShaderInfoLog_663a9b136ab42b32:function(e,n,t){let r=a(n).getShaderInfoLog(a(t));var i=x(r)?0:I(r,l.__wbindgen_malloc,l.__wbindgen_realloc),s=z;y().setInt32(e+4,s,!0),y().setInt32(e+0,i,!0)},__wbg_getShaderParameter_95d4ad40668ee798:function(e,n,t){let r=a(e).getShaderParameter(a(n),t>>>0);return f(r)},__wbg_getShaderParameter_9e9aa18598294f3b:function(e,n,t){let r=a(e).getShaderParameter(a(n),t>>>0);return f(r)},__wbg_getSupportedExtensions_63e3eaba880055c5:function(e){let n=a(e).getSupportedExtensions();return x(n)?0:f(n)},__wbg_getSupportedProfiles_7cd826b4eff5e8fc:function(e){let n=a(e).getSupportedProfiles();return x(n)?0:f(n)},__wbg_getSyncParameter_3eb3ecefa061c5ee:function(e,n,t){let r=a(e).getSyncParameter(a(n),t>>>0);return f(r)},__wbg_getTime_63fb0332e6c4ec17:function(e){return a(e).getTime()},__wbg_getTimezoneOffset_4baa793e0d3962a8:function(e){return a(e).getTimezoneOffset()},__wbg_getUniformBlockIndex_78264d4d94f8252d:function(e,n,t,r){return a(e).getUniformBlockIndex(a(n),w(t,r))},__wbg_getUniformLocation_11fd99fee70965dc:function(e,n,t,r){let i=a(e).getUniformLocation(a(n),w(t,r));return x(i)?0:f(i)},__wbg_getUniformLocation_c493d2f5f1a6213d:function(e,n,t,r){let i=a(e).getUniformLocation(a(n),w(t,r));return x(i)?0:f(i)},__wbg_get_36debceb6d43d7a1:function(e,n){let t=a(e)[n>>>0];return x(t)?0:f(t)},__wbg_get_7473564f5d9fdd2a:function(){return g(function(e,n,t,r){let i=a(n).get(w(t,r));var s=x(i)?0:I(i,l.__wbindgen_malloc,l.__wbindgen_realloc),u=z;y().setInt32(e+4,u,!0),y().setInt32(e+0,s,!0)},arguments)},__wbg_get_836a517ee3483cda:function(e,n){let t=a(e)[n>>>0];return x(t)?0:f(t)},__wbg_get_971a0c45d172643f:function(){return g(function(e,n){let t=Reflect.get(a(e),a(n));return f(t)},arguments)},__wbg_get_c0c8f8d7da0c03dd:function(e,n){let t=a(e)[n>>>0];return f(t)},__wbg_get_done_ce5b5691b59c07f2:function(e){let n=a(e).done;return x(n)?16777215:n?1:0},__wbg_get_ed35166764b1a44e:function(){return g(function(e,n,t,r){let i=a(n)[w(t,r)];var s=x(i)?0:I(i,l.__wbindgen_malloc,l.__wbindgen_realloc),u=z;y().setInt32(e+4,u,!0),y().setInt32(e+0,s,!0)},arguments)},__wbg_get_unchecked_e20b893aeafc3fca:function(e,n){let t=a(e)[n>>>0];return f(t)},__wbg_get_value_58309ba057b715e1:function(e){let n=a(e).value;return f(n)},__wbg_gpu_afdd4387c7afe5f9:function(e){let n=a(e).gpu;return f(n)},__wbg_has_b3a6e6d0d28295fa:function(){return g(function(e,n){return Reflect.has(a(e),a(n))},arguments)},__wbg_has_eafa12e457ea88fb:function(e,n,t){return a(e).has(w(n,t))},__wbg_headers_6dedf39f001ae99d:function(e){let n=a(e).headers;return f(n)},__wbg_headers_92567b07014384b9:function(e){let n=a(e).headers;return f(n)},__wbg_height_b0594a7850e20673:function(e){return a(e).height},__wbg_height_c25c887c11a170f2:function(e){return a(e).height},__wbg_height_e56f6fb197710e09:function(e){return a(e).height},__wbg_height_e6a5d9a72f05fc93:function(e){return a(e).height},__wbg_host_f512e97ce1222138:function(e){let n=a(e).host;return f(n)},__wbg_href_ab966bccc773240e:function(){return g(function(e,n){let t=a(n).href,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},arguments)},__wbg_includes_a4b83ade703cb80b:function(e,n,t){return a(e).includes(a(n),t)},__wbg_info_971d8b9db3dae69f:function(e){let n=a(e).info;return f(n)},__wbg_instanceof_ArrayBuffer_993d02d2d254cad1:function(e){let n;try{n=a(e)instanceof ArrayBuffer}catch{n=!1}return n},__wbg_instanceof_CanvasRenderingContext2d_d23139c3ef7651a3:function(e){let n;try{n=a(e)instanceof CanvasRenderingContext2D}catch{n=!1}return n},__wbg_instanceof_Error_61d8a02a0f3383a1:function(e){let n;try{n=a(e)instanceof Error}catch{n=!1}return n},__wbg_instanceof_GamepadButton_9c609e47a6145e8f:function(e){let n;try{n=a(e)instanceof GamepadButton}catch{n=!1}return n},__wbg_instanceof_Gamepad_31b15eaf4b6abc5a:function(e){let n;try{n=a(e)instanceof Gamepad}catch{n=!1}return n},__wbg_instanceof_HtmlAnchorElement_d90f42ba7073afb6:function(e){let n;try{n=a(e)instanceof HTMLAnchorElement}catch{n=!1}return n},__wbg_instanceof_HtmlButtonElement_806e934e95055a80:function(e){let n;try{n=a(e)instanceof HTMLButtonElement}catch{n=!1}return n},__wbg_instanceof_HtmlCanvasElement_327e7f7530c72bbd:function(e){let n;try{n=a(e)instanceof HTMLCanvasElement}catch{n=!1}return n},__wbg_instanceof_HtmlDocument_a1109ab62f86ff41:function(e){let n;try{n=a(e)instanceof HTMLDocument}catch{n=!1}return n},__wbg_instanceof_HtmlElement_6b02a3740edba922:function(e){let n;try{n=a(e)instanceof HTMLElement}catch{n=!1}return n},__wbg_instanceof_HtmlFormElement_ab33e8c914cfe17d:function(e){let n;try{n=a(e)instanceof HTMLFormElement}catch{n=!1}return n},__wbg_instanceof_HtmlInputElement_6077656bcaf1eb33:function(e){let n;try{n=a(e)instanceof HTMLInputElement}catch{n=!1}return n},__wbg_instanceof_HtmlTextAreaElement_6d5fbbcef108f57a:function(e){let n;try{n=a(e)instanceof HTMLTextAreaElement}catch{n=!1}return n},__wbg_instanceof_Node_ad9597995317f467:function(e){let n;try{n=a(e)instanceof Node}catch{n=!1}return n},__wbg_instanceof_OffscreenCanvasRenderingContext2d_bf5c11dbcfe648e6:function(e){let n;try{n=a(e)instanceof OffscreenCanvasRenderingContext2D}catch{n=!1}return n},__wbg_instanceof_Response_8f49efbd4bfd76d6:function(e){let n;try{n=a(e)instanceof Response}catch{n=!1}return n},__wbg_instanceof_ShadowRoot_55844b1b54688323:function(e){let n;try{n=a(e)instanceof ShadowRoot}catch{n=!1}return n},__wbg_instanceof_WebGl2RenderingContext_e27143c72f888655:function(e){let n;try{n=a(e)instanceof WebGL2RenderingContext}catch{n=!1}return n},__wbg_instanceof_WebGlRenderingContext_7a2f73729caa1761:function(e){let n;try{n=a(e)instanceof WebGLRenderingContext}catch{n=!1}return n},__wbg_instanceof_Window_5625ff9937037a38:function(e){let n;try{n=a(e)instanceof Window}catch{n=!1}return n},__wbg_invalidateFramebuffer_9a711eeb3940aba0:function(){return g(function(e,n,t){a(e).invalidateFramebuffer(n>>>0,a(t))},arguments)},__wbg_inverse_979493bf592e8237:function(e){let n=a(e).inverse();return f(n)},__wbg_isActive_030dfade2dac2b18:function(e){return a(e).isActive},__wbg_isArray_6339f732981044bf:function(e){return Array.isArray(a(e))},__wbg_isFallbackAdapter_4c8cc3b18677460a:function(e){return a(e).isFallbackAdapter},__wbg_isVirtualKeyboardFocused_8d4544b5f4283a8d:function(e){return a(e).isVirtualKeyboardFocused()},__wbg_is_86be747e88e872fb:function(e,n){return Object.is(a(e),a(n))},__wbg_key_d1b2fd5ee42567c0:function(e,n){let t=a(n).key,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_label_7add8cb37a6ef98f:function(e,n){let t=a(n).label,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_language_8bf4dda293978baf:function(e,n){let t=a(n).language;var r=x(t)?0:I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_lastModified_a866385c6ec928bb:function(e){return a(e).lastModified},__wbg_length_2dd58ff350b5afcd:function(e){return a(e).length},__wbg_length_36bd29c6848c2144:function(e){return a(e).length},__wbg_length_ecfa2c63d3d0d82c:function(e){return a(e).length},__wbg_length_fe334960471188ea:function(e){return a(e).length},__wbg_limits_06bcb36c8409843b:function(e){let n=a(e).limits;return f(n)},__wbg_limits_601ad2e086ef8141:function(e){let n=a(e).limits;return f(n)},__wbg_lineTo_55f2d19e97fe770d:function(e,n,t){a(e).lineTo(n,t)},__wbg_linkProgram_124252d16ea0ef40:function(e,n){a(e).linkProgram(a(n))},__wbg_linkProgram_dd3cfc19950a354c:function(e,n){a(e).linkProgram(a(n))},__wbg_localStorage_19bddab1e4cb2413:function(){return g(function(e){let n=a(e).localStorage;return x(n)?0:f(n)},arguments)},__wbg_location_00f2951912aef6cc:function(e){return a(e).location},__wbg_location_5d269cf0aa99107a:function(e){let n=a(e).location;return f(n)},__wbg_log_1f8cbb01c83d06c2:function(e,n,t,r,i,s,u,c){let d,b;try{d=e,b=n,console.log(w(e,n),w(t,r),w(i,s),w(u,c))}finally{l.__wbindgen_free(d,b,1)}},__wbg_log_a54ca6b45e09078a:function(e,n){let t,r;try{t=e,r=n,console.log(w(e,n))}finally{l.__wbindgen_free(t,r,1)}},__wbg_mapAsync_b0597127f5037286:function(e,n,t,r){let i=a(e).mapAsync(n>>>0,t,r);return f(i)},__wbg_mark_6b7f03786f5e4d61:function(e,n){performance.mark(w(e,n))},__wbg_matchMedia_0e2963d34f3ddd40:function(){return g(function(e,n,t){let r=a(e).matchMedia(w(n,t));return x(r)?0:f(r)},arguments)},__wbg_matches_72427e51457a4411:function(e){return a(e).matches},__wbg_maxBindGroupsPlusVertexBuffers_52369f089736ef9d:function(e){return a(e).maxBindGroupsPlusVertexBuffers},__wbg_maxBindGroups_4e424afe6ce86ca2:function(e){return a(e).maxBindGroups},__wbg_maxBindingsPerBindGroup_7d035da36821c44f:function(e){return a(e).maxBindingsPerBindGroup},__wbg_maxBufferSize_423f4a084e32a195:function(e){return a(e).maxBufferSize},__wbg_maxColorAttachmentBytesPerSample_c4cd9126f6d287c6:function(e){return a(e).maxColorAttachmentBytesPerSample},__wbg_maxColorAttachments_d924670762b9e250:function(e){return a(e).maxColorAttachments},__wbg_maxComputeInvocationsPerWorkgroup_707a3868f7cebb59:function(e){return a(e).maxComputeInvocationsPerWorkgroup},__wbg_maxComputeWorkgroupSizeX_0a4d99463cbd6e5e:function(e){return a(e).maxComputeWorkgroupSizeX},__wbg_maxComputeWorkgroupSizeY_85123ea0587f7558:function(e){return a(e).maxComputeWorkgroupSizeY},__wbg_maxComputeWorkgroupSizeZ_a3186b4c5267d44f:function(e){return a(e).maxComputeWorkgroupSizeZ},__wbg_maxComputeWorkgroupStorageSize_57b297355cfb6204:function(e){return a(e).maxComputeWorkgroupStorageSize},__wbg_maxComputeWorkgroupsPerDimension_4158f95e673d54c4:function(e){return a(e).maxComputeWorkgroupsPerDimension},__wbg_maxDynamicStorageBuffersPerPipelineLayout_226b0b70910aa16c:function(e){return a(e).maxDynamicStorageBuffersPerPipelineLayout},__wbg_maxDynamicUniformBuffersPerPipelineLayout_0e835fda711fc7e6:function(e){return a(e).maxDynamicUniformBuffersPerPipelineLayout},__wbg_maxInterStageShaderVariables_8c4a1d727e2aa35a:function(e){return a(e).maxInterStageShaderVariables},__wbg_maxSampledTexturesPerShaderStage_6675f5e91d9a728a:function(e){return a(e).maxSampledTexturesPerShaderStage},__wbg_maxSamplersPerShaderStage_1910fa38a6ed1e1f:function(e){return a(e).maxSamplersPerShaderStage},__wbg_maxStorageBufferBindingSize_2e244bded070b18d:function(e){return a(e).maxStorageBufferBindingSize},__wbg_maxStorageBuffersPerShaderStage_a285f3ebca51ca0d:function(e){return a(e).maxStorageBuffersPerShaderStage},__wbg_maxStorageTexturesPerShaderStage_7aa946f0fc322a2b:function(e){return a(e).maxStorageTexturesPerShaderStage},__wbg_maxTextureArrayLayers_0e699147ad00502d:function(e){return a(e).maxTextureArrayLayers},__wbg_maxTextureDimension1D_aabf6add54decfe2:function(e){return a(e).maxTextureDimension1D},__wbg_maxTextureDimension2D_dd598b27e9c0c1c4:function(e){return a(e).maxTextureDimension2D},__wbg_maxTextureDimension3D_f944266c65dfd1a9:function(e){return a(e).maxTextureDimension3D},__wbg_maxUniformBufferBindingSize_59fa6be7cfbeeb53:function(e){return a(e).maxUniformBufferBindingSize},__wbg_maxUniformBuffersPerShaderStage_bee5f00a4d706c7f:function(e){return a(e).maxUniformBuffersPerShaderStage},__wbg_maxVertexAttributes_5cf6392c4e9033fe:function(e){return a(e).maxVertexAttributes},__wbg_maxVertexBufferArrayStride_548baa887375d865:function(e){return a(e).maxVertexBufferArrayStride},__wbg_maxVertexBuffers_75d881156591f5da:function(e){return a(e).maxVertexBuffers},__wbg_measureText_138b46c6b2239fe9:function(){return g(function(e,n,t){let r=a(e).measureText(w(n,t));return f(r)},arguments)},__wbg_measure_0e21b33a1c6e3a29:function(){return g(function(e,n,t,r){let i,s,u,c;try{i=e,s=n,u=t,c=r,performance.measure(w(e,n),w(t,r))}finally{l.__wbindgen_free(i,s,1),l.__wbindgen_free(u,c,1)}},arguments)},__wbg_message_88eda073e68b1d26:function(e,n){let t=a(n).message,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_message_c141d5e68716b595:function(e){let n=a(e).message;return f(n)},__wbg_metaKey_917f037461143e51:function(e){return a(e).metaKey},__wbg_minStorageBufferOffsetAlignment_5ba9b77792bdadb3:function(e){return a(e).minStorageBufferOffsetAlignment},__wbg_minUniformBufferOffsetAlignment_ab7d52a5293b22bd:function(e){return a(e).minUniformBufferOffsetAlignment},__wbg_moveTo_b163e74b8926c626:function(e,n,t){a(e).moveTo(n,t)},__wbg_name_41b795553ec88cd8:function(e,n){let t=a(n).name,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_name_7adfb7f7f1539878:function(e){let n=a(e).name;return f(n)},__wbg_navigator_6cfdd5fa246d910f:function(e){let n=a(e).navigator;return f(n)},__wbg_navigator_e5c345298a9609cd:function(e){let n=a(e).navigator;return f(n)},__wbg_new_033da64d293f5a26:function(){return g(function(e){let n=new VideoDecoder(a(e));return f(n)},arguments)},__wbg_new_0_f117d868b403dc07:function(){return f(new Date)},__wbg_new_116be93542d39019:function(){let e=new Array;return f(e)},__wbg_new_1f27644530c822b2:function(){return g(function(){let e=new FileReader;return f(e)},arguments)},__wbg_new_20a7c62e9b30cbf7:function(){return g(function(e,n){let t=new WebSocket(w(e,n));return f(t)},arguments)},__wbg_new_227d7c05414eb861:function(){let e=new Error;return f(e)},__wbg_new_358857d90afd5a2d:function(e,n){let t=new Error(w(e,n));return f(t)},__wbg_new_3ce973d9e04baf94:function(){return g(function(e){let n=new EncodedVideoChunk(a(e));return f(n)},arguments)},__wbg_new_418fb92a013d5930:function(e,n){try{var t={a:e,b:n},r=(s,u)=>{let c=t.a;t.a=0;try{return yo(c,t.b,s,u)}finally{t.a=c}};let i=new Promise(r);return f(i)}finally{t.a=0}},__wbg_new_652118cdee90118f:function(){return g(function(e,n){let t=new OffscreenCanvas(e>>>0,n>>>0);return f(t)},arguments)},__wbg_new_6fa4b00b7fe13e4b:function(){return g(function(){let e=new Path2D;return f(e)},arguments)},__wbg_new_77cc4f4f472aeb81:function(e){let n=new Uint8Array(a(e));return f(n)},__wbg_new_ebe3e0f6837f0879:function(){let e=new Object;return f(e)},__wbg_new_ec007c098ac92ebf:function(){return g(function(){let e=new DOMMatrix;return f(e)},arguments)},__wbg_new_f9d6489212f3b2b3:function(e){let n=new Date(a(e));return f(n)},__wbg_new_from_slice_3eea173078478cfe:function(e,n){let t=new Uint8Array(be(e,n));return f(t)},__wbg_new_typed_ad9b105a7be50737:function(){let e=new Object;return f(e)},__wbg_new_typed_cceaf62d8d95e9f2:function(e,n){try{var t={a:e,b:n},r=(s,u)=>{let c=t.a;t.a=0;try{return yo(c,t.b,s,u)}finally{t.a=c}};let i=new Promise(r);return f(i)}finally{t.a=0}},__wbg_new_with_array64_77901f8040d2e3f6:function(){return g(function(e,n){let t=new DOMMatrix(mc(e,n));return f(t)},arguments)},__wbg_new_with_buffer_source_sequence_and_options_a0124a2dac7638be:function(){return g(function(e,n){let t=new Blob(a(e),a(n));return f(t)},arguments)},__wbg_new_with_byte_offset_and_length_ff6e927f8d72f0c3:function(e,n,t){let r=new Uint8Array(a(e),n>>>0,t>>>0);return f(r)},__wbg_new_with_context_options_06b7c8f962e9da06:function(){return g(function(e){let n=new ku(a(e));return f(n)},arguments)},__wbg_new_with_event_init_dict_77122dca3c723f0c:function(){return g(function(e,n,t){let r=new CloseEvent(w(e,n),a(t));return f(r)},arguments)},__wbg_new_with_str_and_init_5a37d576dec75a86:function(){return g(function(e,n,t){let r=new Request(w(e,n),a(t));return f(r)},arguments)},__wbg_new_with_sw_cced22be0cbff0d3:function(){return g(function(e,n){let t=new ImageData(e>>>0,n>>>0);return f(t)},arguments)},__wbg_new_with_u8_array_sequence_6f96909d5e4901f9:function(){return g(function(e){let n=new Blob(a(e));return f(n)},arguments)},__wbg_new_with_u8_array_sequence_and_options_a7cc7b64ed3eb153:function(){return g(function(e,n){let t=new Blob(a(e),a(n));return f(t)},arguments)},__wbg_new_with_u8_clamped_array_2fcfd0f372cd4225:function(){return g(function(e,n,t){let r=new ImageData(vc(e,n),t>>>0);return f(r)},arguments)},__wbg_next_42cf16ee0dafc9e2:function(){return g(function(e){let n=a(e).next();return f(n)},arguments)},__wbg_now_e7c6795a7f81e10f:function(e){return a(e).now()},__wbg_of_0c6464fa8d2aa86d:function(e){let n=Array.of(a(e));return f(n)},__wbg_of_598c0ff0cd48a890:function(e,n){let t=Array.of(a(e),a(n));return f(t)},__wbg_offsetX_878997328bd9eaa4:function(e){return a(e).offsetX},__wbg_offsetY_228d7dd70336f05d:function(e){return a(e).offsetY},__wbg_ok_917dc17857b16c56:function(e){return a(e).ok},__wbg_onCallbackAvailable_65b4977d95b65b44:function(e,n,t){a(e).onCallbackAvailable(w(n,t))},__wbg_onSubmittedWorkDone_1190213cee1ecf7e:function(e){let n=a(e).onSubmittedWorkDone();return f(n)},__wbg_openVirtualKeyboard_f75467073ad97533:function(e){a(e).openVirtualKeyboard()},__wbg_open_67cee4f3ea60a981:function(){return g(function(e,n,t,r,i){let s=a(e).open(w(n,t),w(r,i));return x(s)?0:f(s)},arguments)},__wbg_ownKeys_49880e0197268893:function(){return g(function(e){let n=Reflect.ownKeys(a(e));return f(n)},arguments)},__wbg_panic_5211f24783f67890:function(e,n){a(e).panic(a(n))},__wbg_parentElement_ef76606593484767:function(e){let n=a(e).parentElement;return x(n)?0:f(n)},__wbg_performance_3fcf6e32a7e1ed0a:function(e){let n=a(e).performance;return f(n)},__wbg_persisted_03e56c5f9080ac54:function(e){return a(e).persisted},__wbg_pixelStorei_11bdfb5bc6a39d28:function(e,n,t){a(e).pixelStorei(n>>>0,t)},__wbg_pixelStorei_86481a168d6e225e:function(e,n,t){a(e).pixelStorei(n>>>0,t)},__wbg_platform_723fb7833ed963df:function(){return g(function(e,n){let t=a(n).platform,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},arguments)},__wbg_pointerId_c1e1cd6b32d6d017:function(e){return a(e).pointerId},__wbg_polygonOffset_2b8b141e8cc17c10:function(e,n,t){a(e).polygonOffset(n,t)},__wbg_polygonOffset_94b427c5130ab6c2:function(e,n,t){a(e).polygonOffset(n,t)},__wbg_popDebugGroup_87cc10f02f9baa29:function(e){a(e).popDebugGroup()},__wbg_popDebugGroup_fc6cf5f2069b07ea:function(e){a(e).popDebugGroup()},__wbg_pressed_0ef66768049be92d:function(e){return a(e).pressed},__wbg_preventDefault_19878c58b8010668:function(e){a(e).preventDefault()},__wbg_protocol_537788ea57915c6c:function(){return g(function(e,n){let t=a(n).protocol,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},arguments)},__wbg_prototypesetcall_de8e0d9553586985:function(e,n,t){Uint8Array.prototype.set.call(be(e,n),a(t))},__wbg_pushDebugGroup_20949a2b29d3bd19:function(e,n,t){a(e).pushDebugGroup(w(n,t))},__wbg_pushDebugGroup_356e96c0f79bab32:function(e,n,t){a(e).pushDebugGroup(w(n,t))},__wbg_push_adb0107829f02d75:function(e,n){return a(e).push(a(n))},__wbg_putImageData_78f2f075ef560bf6:function(){return g(function(e,n,t,r){a(e).putImageData(a(n),t,r)},arguments)},__wbg_quadraticCurveTo_f60aa9069b458c65:function(e,n,t,r,i){a(e).quadraticCurveTo(n,t,r,i)},__wbg_queryCounterEXT_b0cddcdfb28830df:function(e,n,t){a(e).queryCounterEXT(a(n),t>>>0)},__wbg_querySelectorAll_9b6a612499ecb916:function(){return g(function(e,n,t){let r=a(e).querySelectorAll(w(n,t));return f(r)},arguments)},__wbg_querySelector_2c472eddb417c6b3:function(){return g(function(e,n,t){let r=a(e).querySelector(w(n,t));return x(r)?0:f(r)},arguments)},__wbg_querySelector_839d6534e69c0f64:function(){return g(function(e,n,t){let r=a(e).querySelector(w(n,t));return x(r)?0:f(r)},arguments)},__wbg_queueMicrotask_ac694eae12e92dfb:function(e){queueMicrotask(a(e))},__wbg_queueMicrotask_be5fe34a8f4cad4d:function(e){let n=a(e).queueMicrotask;return f(n)},__wbg_queue_7b62c28143d44293:function(e){let n=a(e).queue;return f(n)},__wbg_readAsArrayBuffer_1e0bf6cd0613d7fd:function(){return g(function(e,n){a(e).readAsArrayBuffer(a(n))},arguments)},__wbg_readBuffer_2de0b72ac08915c8:function(e,n){a(e).readBuffer(n>>>0)},__wbg_readPixels_0033d2834b498dda:function(){return g(function(e,n,t,r,i,s,u,c){a(e).readPixels(n,t,r,i,s>>>0,u>>>0,a(c))},arguments)},__wbg_readPixels_0e3230bf7a891882:function(){return g(function(e,n,t,r,i,s,u,c){a(e).readPixels(n,t,r,i,s>>>0,u>>>0,a(c))},arguments)},__wbg_readPixels_8f8bde9ee420ba35:function(){return g(function(e,n,t,r,i,s,u,c){a(e).readPixels(n,t,r,i,s>>>0,u>>>0,c)},arguments)},__wbg_readText_57255f9c7482c995:function(e){let n=a(e).readText();return f(n)},__wbg_read_ae34ffedeb11f034:function(e){let n=a(e).read();return f(n)},__wbg_readyState_fe79161592fd15ce:function(e){return a(e).readyState},__wbg_reason_1460f6c833ca7671:function(e,n){let t=a(n).reason,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_rect_db1056f1138dff21:function(e,n,t,r,i){a(e).rect(n,t,r,i)},__wbg_redirected_38edd6189354296c:function(e){return a(e).redirected},__wbg_relatedTarget_0707f779c6356847:function(e){let n=a(e).relatedTarget;return x(n)?0:f(n)},__wbg_releaseLock_f38d2d1c08212a8a:function(e){a(e).releaseLock()},__wbg_releasePointerCapture_625918adece6fc4b:function(){return g(function(e,n){a(e).releasePointerCapture(n)},arguments)},__wbg_reloadWithCanvasRenderer_aa23abd32e535d49:function(e){a(e).reloadWithCanvasRenderer()},__wbg_removeChild_58f3071cb194ee29:function(){return g(function(e,n){let t=a(e).removeChild(a(n));return f(t)},arguments)},__wbg_removeEventListener_aa653c6b402cc27e:function(){return g(function(e,n,t,r){a(e).removeEventListener(w(n,t),a(r))},arguments)},__wbg_removeEventListener_f0778286eef3aecc:function(){return g(function(e,n,t,r,i){a(e).removeEventListener(w(n,t),a(r),i!==0)},arguments)},__wbg_remove_07453fe173d20eee:function(e){a(e).remove()},__wbg_renderbufferStorageMultisample_a9f65ef0cc53fb37:function(e,n,t,r,i,s){a(e).renderbufferStorageMultisample(n>>>0,t,r>>>0,i,s)},__wbg_renderbufferStorage_33c57e600b175bd6:function(e,n,t,r,i){a(e).renderbufferStorage(n>>>0,t>>>0,r,i)},__wbg_renderbufferStorage_3fb6d5a0f3e07d46:function(e,n,t,r,i){a(e).renderbufferStorage(n>>>0,t>>>0,r,i)},__wbg_replace_b9d88072d7c356a3:function(e,n,t,r){let i=a(e).replace(a(n),w(t,r));return f(i)},__wbg_requestAdapter_a539af006419f2e9:function(e,n){let t=a(e).requestAdapter(a(n));return f(t)},__wbg_requestAnimationFrame_bcb3ce6247e27dd4:function(){return g(function(e,n){return a(e).requestAnimationFrame(a(n))},arguments)},__wbg_requestDevice_5cb8a582e55d08cb:function(e,n){let t=a(e).requestDevice(a(n));return f(t)},__wbg_resetTransform_98a89c9c0f94fe2b:function(){return g(function(e){a(e).resetTransform()},arguments)},__wbg_resolveQuerySet_770f23fabac49845:function(e,n,t,r,i,s){a(e).resolveQuerySet(a(n),t>>>0,r>>>0,a(i),s>>>0)},__wbg_resolve_020f95d838c6ef25:function(e){let n=Promise.resolve(a(e));return f(n)},__wbg_respond_f88cbcebace42068:function(){return g(function(e,n){a(e).respond(n>>>0)},arguments)},__wbg_restore_43a0248041b088b5:function(e){a(e).restore()},__wbg_result_89c2bfc79be07ad2:function(){return g(function(e){let n=a(e).result;return f(n)},arguments)},__wbg_resume_d3c27715f0790def:function(){return g(function(e){let n=a(e).resume();return f(n)},arguments)},__wbg_revokeObjectURL_709bc205d98c34ba:function(){return g(function(e,n){URL.revokeObjectURL(w(e,n))},arguments)},__wbg_rufflehandle_new:function(e){let n=bn.__wrap(e);return f(n)},__wbg_sampleRate_7751976089d109e1:function(e){return a(e).sampleRate},__wbg_samplerParameterf_d7f38ba3194c43ba:function(e,n,t,r){a(e).samplerParameterf(a(n),t>>>0,r)},__wbg_samplerParameteri_3d8994d9967c6803:function(e,n,t,r){a(e).samplerParameteri(a(n),t>>>0,r)},__wbg_save_0c65dc2190a45c2a:function(e){a(e).save()},__wbg_scissor_2f02706fbca6e98a:function(e,n,t,r,i){a(e).scissor(n,t,r,i)},__wbg_scissor_cdfb84de20f004b6:function(e,n,t,r,i){a(e).scissor(n,t,r,i)},__wbg_search_e4668fa7ed0474da:function(e,n){return a(e).search(a(n))},__wbg_select_d82465f2823758c6:function(e){a(e).select()},__wbg_send_5f7b516053d59f8d:function(){return g(function(e,n,t){a(e).send(w(n,t))},arguments)},__wbg_send_e76231c2136733db:function(){return g(function(e,n){a(e).send(a(n))},arguments)},__wbg_setAttributeNS_7c12a81b4d738959:function(){return g(function(e,n,t,r,i,s,u){a(e).setAttributeNS(n===0?void 0:w(n,t),w(r,i),w(s,u))},arguments)},__wbg_setAttribute_507f8367905a9c03:function(){return g(function(e,n,t,r,i){a(e).setAttribute(w(n,t),w(r,i))},arguments)},__wbg_setBindGroup_11bdbb60cc8b54b9:function(){return g(function(e,n,t,r,i,s,u){a(e).setBindGroup(n>>>0,a(t),fn(r,i),s,u>>>0)},arguments)},__wbg_setBindGroup_418c3e0eb6943ce0:function(e,n,t){a(e).setBindGroup(n>>>0,a(t))},__wbg_setFullscreen_b32b38221ccc591a:function(){return g(function(e,n){a(e).setFullscreen(n!==0)},arguments)},__wbg_setIndexBuffer_01327df91742b73e:function(e,n,t,r){a(e).setIndexBuffer(a(n),Or[t],r)},__wbg_setIndexBuffer_241097e303986c14:function(e,n,t,r,i){a(e).setIndexBuffer(a(n),Or[t],r,i)},__wbg_setMetadata_ee7f17a8469797e1:function(e,n){a(e).setMetadata(L(n))},__wbg_setPipeline_b6f981027e02cd16:function(e,n){a(e).setPipeline(a(n))},__wbg_setPointerCapture_761aa655f9aebc1a:function(){return g(function(e,n){a(e).setPointerCapture(n)},arguments)},__wbg_setProperty_684ce273e28a7037:function(){return g(function(e,n,t,r,i){a(e).setProperty(w(n,t),w(r,i))},arguments)},__wbg_setScissorRect_889235eeb784732b:function(e,n,t,r,i){a(e).setScissorRect(n>>>0,t>>>0,r>>>0,i>>>0)},__wbg_setStencilReference_48705a9a2cceae02:function(e,n){a(e).setStencilReference(n>>>0)},__wbg_setTimeout_9d0a5393fa9dc61c:function(){return g(function(e,n){return a(e).setTimeout(a(n))},arguments)},__wbg_setTransform_790a24b61d963dff:function(e,n){a(e).setTransform(a(n))},__wbg_setTransform_af9c1fdc090e1259:function(){return g(function(e,n,t,r,i,s,u){a(e).setTransform(n,t,r,i,s,u)},arguments)},__wbg_setVertexBuffer_6db3b60e99280744:function(e,n,t,r){a(e).setVertexBuffer(n>>>0,a(t),r)},__wbg_setVertexBuffer_cbf4ca1627c02f4c:function(e,n,t,r,i){a(e).setVertexBuffer(n>>>0,a(t),r,i)},__wbg_set_6be42768c690e380:function(e,n,t){a(e)[L(n)]=L(t)},__wbg_set_8155bb79a948541b:function(){return g(function(e,n,t){return Reflect.set(a(e),a(n),a(t))},arguments)},__wbg_set_862c439a342a8818:function(e,n,t){a(e).set(a(n),t>>>0)},__wbg_set_a80955eb93b145c6:function(e,n,t){a(e)[n>>>0]=L(t)},__wbg_set_a_82818effc94f6256:function(e,n){a(e).a=n},__wbg_set_a_e37f5dc6b60caf30:function(e,n){a(e).a=n},__wbg_set_accept_8be58cd585a9f2ae:function(e,n,t){a(e).accept=w(n,t)},__wbg_set_access_a099cfbbeec9b96f:function(e,n){a(e).access=rc[n]},__wbg_set_action_80fce850115c6e52:function(e,n,t){a(e).action=w(n,t)},__wbg_set_address_mode_u_a68737cf5d288f95:function(e,n){a(e).addressModeU=Tr[n]},__wbg_set_address_mode_v_b1c3c45933f540d1:function(e,n){a(e).addressModeV=Tr[n]},__wbg_set_address_mode_w_889c31cf7022c764:function(e,n){a(e).addressModeW=Tr[n]},__wbg_set_alpha_106f21a936a85eba:function(e,n){a(e).alpha=a(n)},__wbg_set_alpha_mode_5544568dbac50280:function(e,n){a(e).alphaMode=Ju[n]},__wbg_set_alpha_to_coverage_enabled_3372ce329447b8f1:function(e,n){a(e).alphaToCoverageEnabled=n!==0},__wbg_set_array_layer_count_22afa0a979e4ad55:function(e,n){a(e).arrayLayerCount=n>>>0},__wbg_set_array_stride_f64_6816040e5e7598c3:function(e,n){a(e).arrayStride=n},__wbg_set_aspect_a48d046965270281:function(e,n){a(e).aspect=So[n]},__wbg_set_aspect_b1a9909bf315433f:function(e,n){a(e).aspect=So[n]},__wbg_set_attributes_9e38cb1dde387a5b:function(e,n,t){a(e).attributes=de(n,t)},__wbg_set_b9b5b5cb7b495037:function(e,n,t){a(e).set(be(n,t))},__wbg_set_b_a3297ee7e7cac3a8:function(e,n){a(e).b=n},__wbg_set_base_array_layer_2435ba92c80346ae:function(e,n){a(e).baseArrayLayer=n>>>0},__wbg_set_base_mip_level_8b6093e875e7c65d:function(e,n){a(e).baseMipLevel=n>>>0},__wbg_set_bc2d20c77f0cca90:function(){return g(function(e,n,t,r,i){a(e)[w(n,t)]=w(r,i)},arguments)},__wbg_set_beginning_of_pass_write_index_e552c5e8b8bbf52f:function(e,n){a(e).beginningOfPassWriteIndex=n>>>0},__wbg_set_binaryType_b701908a03166a9f:function(e,n){a(e).binaryType=$u[n]},__wbg_set_bind_group_layouts_458c44ba55100b82:function(e,n,t){a(e).bindGroupLayouts=de(n,t)},__wbg_set_binding_81b3fac7f7acaf8d:function(e,n){a(e).binding=n>>>0},__wbg_set_binding_b6cee57f35ac5190:function(e,n){a(e).binding=n>>>0},__wbg_set_blend_1a801617945f7945:function(e,n){a(e).blend=a(n)},__wbg_set_body_f301b68bff45f419:function(e,n){a(e).body=a(n)},__wbg_set_buffer_1548ae88a9188037:function(e,n){a(e).buffer=a(n)},__wbg_set_buffer_8d0ac64ad20dfc84:function(e,n){a(e).buffer=a(n)},__wbg_set_buffer_910a40a90f97cfca:function(e,n){a(e).buffer=a(n)},__wbg_set_buffer_ef94b43a403b11b5:function(e,n){a(e).buffer=a(n)},__wbg_set_buffers_5d0e0c50791f710e:function(e,n,t){a(e).buffers=de(n,t)},__wbg_set_bytes_per_row_1e824a5502b54b3d:function(e,n){a(e).bytesPerRow=n>>>0},__wbg_set_bytes_per_row_c28583f0063160f1:function(e,n){a(e).bytesPerRow=n>>>0},__wbg_set_capture_0fda5cbdb4353cff:function(e,n){a(e).capture=n!==0},__wbg_set_className_bc6ed54ffff19a12:function(e,n,t){a(e).className=w(n,t)},__wbg_set_clear_value_gpu_color_dict_a9f763e8372ac1de:function(e,n){a(e).clearValue=a(n)},__wbg_set_code_5d5b0b9e2fd0dca7:function(e,n,t){a(e).code=w(n,t)},__wbg_set_code_e5db843dcd11dd81:function(e,n){a(e).code=n},__wbg_set_codec_de80f2ee1daf3868:function(e,n,t){a(e).codec=w(n,t)},__wbg_set_color_8ecace4011f47d2e:function(e,n){a(e).color=a(n)},__wbg_set_color_attachments_622fe2d5997fda7a:function(e,n,t){a(e).colorAttachments=de(n,t)},__wbg_set_compare_080c9e492ff36990:function(e,n){a(e).compare=Mr[n]},__wbg_set_compare_817cf3695599eaa6:function(e,n){a(e).compare=Mr[n]},__wbg_set_count_8ff0c9474e39a849:function(e,n){a(e).count=n>>>0},__wbg_set_count_d9dc88156fd05bc7:function(e,n){a(e).count=n>>>0},__wbg_set_credentials_d7f3b810cbf191e1:function(e,n){a(e).credentials=cc[n]},__wbg_set_cull_mode_85d2b4ab0ce3a564:function(e,n){a(e).cullMode=Qu[n]},__wbg_set_d_9f19046da6420c83:function(e,n){a(e).d=n},__wbg_set_data_96c7b174a9034667:function(e,n){a(e).data=a(n)},__wbg_set_depth_bias_95abf479cae3f3cd:function(e,n){a(e).depthBias=n},__wbg_set_depth_bias_clamp_ba3d0b8348151350:function(e,n){a(e).depthBiasClamp=n},__wbg_set_depth_bias_slope_scale_6b2584d93f5b9cd2:function(e,n){a(e).depthBiasSlopeScale=n},__wbg_set_depth_clear_value_e30a4c754c6b3b26:function(e,n){a(e).depthClearValue=n},__wbg_set_depth_compare_a90de4e3714397ab:function(e,n){a(e).depthCompare=Mr[n]},__wbg_set_depth_fail_op_b5c64541d1b6b482:function(e,n){a(e).depthFailOp=Lr[n]},__wbg_set_depth_load_op_932888016d762d3e:function(e,n){a(e).depthLoadOp=Br[n]},__wbg_set_depth_or_array_layers_e2f074a0284e4806:function(e,n){a(e).depthOrArrayLayers=n>>>0},__wbg_set_depth_read_only_be790175a1c2db9a:function(e,n){a(e).depthReadOnly=n!==0},__wbg_set_depth_stencil_attachment_54a8922f5fbe08bf:function(e,n){a(e).depthStencilAttachment=a(n)},__wbg_set_depth_stencil_b7cffc59ad4da529:function(e,n){a(e).depthStencil=a(n)},__wbg_set_depth_store_op_9054814f164ab55d:function(e,n){a(e).depthStoreOp=Wr[n]},__wbg_set_depth_write_enabled_31a821ee1fb3b0b3:function(e,n){a(e).depthWriteEnabled=n!==0},__wbg_set_description_2c77102c025cc80b:function(e,n){a(e).description=a(n)},__wbg_set_device_210484a77b675c9c:function(e,n){a(e).device=a(n)},__wbg_set_dimension_3da9d03131a9f446:function(e,n){a(e).dimension=ac[n]},__wbg_set_dimension_56332450afa3e0c0:function(e,n){a(e).dimension=qr[n]},__wbg_set_download_602973d1dd39bdc8:function(e,n,t){a(e).download=w(n,t)},__wbg_set_dst_factor_865ba9aaf187890c:function(e,n){a(e).dstFactor=xo[n]},__wbg_set_e92392c4b44c5de1:function(){return g(function(e,n,t,r,i){a(e).set(w(n,t),w(r,i))},arguments)},__wbg_set_end_of_pass_write_index_8f164f9e60d4ad16:function(e,n){a(e).endOfPassWriteIndex=n>>>0},__wbg_set_entries_6f866302103b81e9:function(e,n,t){a(e).entries=de(n,t)},__wbg_set_entries_f26b77ab9548e906:function(e,n,t){a(e).entries=de(n,t)},__wbg_set_entry_point_71cef95c137b5774:function(e,n,t){a(e).entryPoint=w(n,t)},__wbg_set_entry_point_b70f98f5025a114d:function(e,n,t){a(e).entryPoint=w(n,t)},__wbg_set_error_413401f8612abd97:function(e,n){a(e).error=a(n)},__wbg_set_external_texture_7f966c604c4f8098:function(e,n){a(e).externalTexture=a(n)},__wbg_set_fail_op_d59d0187e4111dfe:function(e,n){a(e).failOp=Lr[n]},__wbg_set_fillStyle_0613e54d2aa04a75:function(e,n,t){a(e).fillStyle=w(n,t)},__wbg_set_fillStyle_392607276a67e12a:function(e,n){a(e).fillStyle=a(n)},__wbg_set_fillStyle_52e75a25be60a3ff:function(e,n,t){a(e).fillStyle=w(n,t)},__wbg_set_fillStyle_9215db6210dfdee2:function(e,n){a(e).fillStyle=a(n)},__wbg_set_filter_c05b047d621641d5:function(e,n,t){a(e).filter=w(n,t)},__wbg_set_font_cb31872ffc00c18f:function(e,n,t){a(e).font=w(n,t)},__wbg_set_format_23f7f32549751d43:function(e,n){a(e).format=Ge[n]},__wbg_set_format_283dca56552f07a3:function(e,n){a(e).format=Ge[n]},__wbg_set_format_5080a858117ad2c1:function(e,n){a(e).format=ic[n]},__wbg_set_format_66735b94bd868ba2:function(e,n){a(e).format=Ge[n]},__wbg_set_format_7f2bdbfb101b1ae1:function(e,n){a(e).format=Ge[n]},__wbg_set_format_92732ea75d3b79f5:function(e,n){a(e).format=Ge[n]},__wbg_set_format_f009e603f7d4c28e:function(e,n){a(e).format=Ge[n]},__wbg_set_fragment_d2b0ec97d7cf8d47:function(e,n){a(e).fragment=a(n)},__wbg_set_front_face_d3f8a2e07e7b25dd:function(e,n){a(e).frontFace=Zu[n]},__wbg_set_g_b527ee8a9bed553d:function(e,n){a(e).g=n},__wbg_set_globalAlpha_7990fab00eb6c8f2:function(e,n){a(e).globalAlpha=n},__wbg_set_globalCompositeOperation_1336df410cebd928:function(){return g(function(e,n,t){a(e).globalCompositeOperation=w(n,t)},arguments)},__wbg_set_has_dynamic_offset_0c72ffa900c5a269:function(e,n){a(e).hasDynamicOffset=n!==0},__wbg_set_height_ca39bd9597314f83:function(e,n){a(e).height=n>>>0},__wbg_set_height_d72f2b76484a44de:function(e,n){a(e).height=n>>>0},__wbg_set_height_f6619158e5735877:function(e,n){a(e).height=n>>>0},__wbg_set_href_4fab988857d37334:function(e,n,t){a(e).href=w(n,t)},__wbg_set_id_ce80620265c5de8d:function(e,n,t){a(e).id=w(n,t)},__wbg_set_imageSmoothingEnabled_cd98f777ac3af24f:function(e,n){a(e).imageSmoothingEnabled=n!==0},__wbg_set_innerHTML_7d84b81d6f2a9fdf:function(e,n,t){a(e).innerHTML=w(n,t)},__wbg_set_innerText_147c496ec424c079:function(e,n,t){a(e).innerText=w(n,t)},__wbg_set_label_17202740051e9722:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_2fefb39c0e0dbbe8:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_3cb2322e6f6db14c:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_3f2ccaafef5ff7c9:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_612add98a4398f92:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_6f69e25822616a1b:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_70a09ee68d6b1b26:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_92cd3811e96b487c:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_9c2a186152427ee0:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_c3eaf136aa464cba:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_c7987704d29f284b:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_cfe64bca8945ee30:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_e02179cf97e95763:function(e,n,t){a(e).label=w(n,t)},__wbg_set_label_ee172cd5f6a96961:function(e,n,t){a(e).label=w(n,t)},__wbg_set_layout_454e3a091b390cd4:function(e,n){a(e).layout=a(n)},__wbg_set_layout_75dc1ca3f2421cff:function(e,n){a(e).layout=a(n)},__wbg_set_layout_gpu_auto_layout_mode_06a2b95af1043098:function(e,n){a(e).layout=Vu[n]},__wbg_set_lineCap_ec484c1489fa48bc:function(e,n,t){a(e).lineCap=w(n,t)},__wbg_set_lineJoin_645744ec04386dd0:function(e,n,t){a(e).lineJoin=w(n,t)},__wbg_set_lineWidth_5f9aefcc32e60287:function(e,n){a(e).lineWidth=n},__wbg_set_load_op_c56b1269acc2d51f:function(e,n){a(e).loadOp=Br[n]},__wbg_set_lod_max_clamp_db24179f67f3aa31:function(e,n){a(e).lodMaxClamp=n},__wbg_set_lod_min_clamp_2bbce566e9fefa04:function(e,n){a(e).lodMinClamp=n},__wbg_set_mag_filter_db8e6b42d4f8846d:function(e,n){a(e).magFilter=Ro[n]},__wbg_set_mapped_at_creation_3f320fef6761b02c:function(e,n){a(e).mappedAtCreation=n!==0},__wbg_set_mask_c1079e551ec360dc:function(e,n){a(e).mask=n>>>0},__wbg_set_max_anisotropy_84749fdcec362dc4:function(e,n){a(e).maxAnisotropy=n},__wbg_set_method_cf2b992b9a610bc3:function(e,n,t){a(e).method=w(n,t)},__wbg_set_method_fd3992cb9c0b7760:function(e,n,t){a(e).method=w(n,t)},__wbg_set_min_binding_size_f64_897e3cd4496ddec9:function(e,n){a(e).minBindingSize=n},__wbg_set_min_filter_d435bbfc5a637757:function(e,n){a(e).minFilter=Ro[n]},__wbg_set_mip_level_count_047936c630acee7b:function(e,n){a(e).mipLevelCount=n>>>0},__wbg_set_mip_level_count_44bc46a1ae6f6daa:function(e,n){a(e).mipLevelCount=n>>>0},__wbg_set_mip_level_f3745730372683d5:function(e,n){a(e).mipLevel=n>>>0},__wbg_set_mipmap_filter_62fb49a84b0747ff:function(e,n){a(e).mipmapFilter=Yu[n]},__wbg_set_miterLimit_db0797fa63d61672:function(e,n){a(e).miterLimit=n},__wbg_set_mode_7edfbc344ef9c650:function(e,n){a(e).mode=Ku[n]},__wbg_set_module_392eeaa269f203b0:function(e,n){a(e).module=a(n)},__wbg_set_module_715d37652c4998ec:function(e,n){a(e).module=a(n)},__wbg_set_multiple_4a70bfda8eac6061:function(e,n){a(e).multiple=n!==0},__wbg_set_multisample_ff72a7a5456cbeb7:function(e,n){a(e).multisample=a(n)},__wbg_set_multisampled_039f032dc4b67367:function(e,n){a(e).multisampled=n!==0},__wbg_set_name_ff6fb351f718f185:function(e,n,t){a(e).name=w(n,t)},__wbg_set_offset_f64_127e8a0aa5c5485a:function(e,n){a(e).offset=n},__wbg_set_offset_f64_457756429ede426d:function(e,n){a(e).offset=n},__wbg_set_offset_f64_a903425d5a8e5815:function(e,n){a(e).offset=n},__wbg_set_offset_f64_d1d115dd438165b5:function(e,n){a(e).offset=n},__wbg_set_once_7f65050c57557ff9:function(e,n){a(e).once=n!==0},__wbg_set_onclick_4d2a7dbf3f734065:function(e,n){a(e).onclick=a(n)},__wbg_set_onended_c0d6e300da8b36ba:function(e,n){a(e).onended=a(n)},__wbg_set_onload_a82519c1b28925a3:function(e,n){a(e).onload=a(n)},__wbg_set_operation_00a77386523b88f9:function(e,n){a(e).operation=Gu[n]},__wbg_set_optimize_for_latency_cbbb5776d26c5dca:function(e,n){a(e).optimizeForLatency=n!==0},__wbg_set_origin_gpu_origin_3d_dict_0619d4860adb4eb6:function(e,n){a(e).origin=a(n)},__wbg_set_output_b3c608483e2b4d8e:function(e,n){a(e).output=a(n)},__wbg_set_pass_op_3cf10feb3d76ab97:function(e,n){a(e).passOp=Lr[n]},__wbg_set_passive_acb4a6d8f5b98357:function(e,n){a(e).passive=n!==0},__wbg_set_power_preference_b42d00a8facfbade:function(e,n){a(e).powerPreference=Xu[n]},__wbg_set_prevent_scroll_012725f8a1602bdd:function(e,n){a(e).preventScroll=n!==0},__wbg_set_primitive_e796cf76f0ff89f3:function(e,n){a(e).primitive=a(n)},__wbg_set_query_set_f030702f1b69199f:function(e,n){a(e).querySet=a(n)},__wbg_set_r_6ece4d74af63364f:function(e,n){a(e).r=n},__wbg_set_reason_b72ca321818718aa:function(e,n,t){a(e).reason=w(n,t)},__wbg_set_required_features_bbab71414c45e621:function(e,n,t){a(e).requiredFeatures=de(n,t)},__wbg_set_required_limits_837f62d865e7cfac:function(e,n){a(e).requiredLimits=a(n)},__wbg_set_resolve_target_gpu_texture_view_e4c1e3bbb8c27d87:function(e,n){a(e).resolveTarget=a(n)},__wbg_set_resource_8fd8658b30d86ecf:function(e,n){a(e).resource=a(n)},__wbg_set_resource_gpu_buffer_binding_33099b25da65b610:function(e,n){a(e).resource=a(n)},__wbg_set_resource_gpu_texture_view_4cffe7bc7c8e5cbe:function(e,n){a(e).resource=a(n)},__wbg_set_rows_per_image_c6d50d227e634379:function(e,n){a(e).rowsPerImage=n>>>0},__wbg_set_rows_per_image_deb456502f23c260:function(e,n){a(e).rowsPerImage=n>>>0},__wbg_set_sample_count_481c255a12054e1d:function(e,n){a(e).sampleCount=n>>>0},__wbg_set_sample_rate_cf2746001d47fae8:function(e,n){a(e).sampleRate=n},__wbg_set_sample_type_ebc5fcd029513bda:function(e,n){a(e).sampleType=oc[n]},__wbg_set_sampler_89cb4a7efcfc6005:function(e,n){a(e).sampler=a(n)},__wbg_set_shader_location_3fb9f6a012eba494:function(e,n){a(e).shaderLocation=n>>>0},__wbg_set_size_f64_2f591b0654540477:function(e,n){a(e).size=n},__wbg_set_size_f64_e844c985b8f95261:function(e,n){a(e).size=n},__wbg_set_size_gpu_extent_3d_dict_adf57388ab1d4f18:function(e,n){a(e).size=a(n)},__wbg_set_src_factor_6f2c9ec8e4d3d979:function(e,n){a(e).srcFactor=xo[n]},__wbg_set_stencil_back_c54d0443b8b6a957:function(e,n){a(e).stencilBack=a(n)},__wbg_set_stencil_clear_value_a321b0e045bfd8c2:function(e,n){a(e).stencilClearValue=n>>>0},__wbg_set_stencil_front_3ff3f8385852efff:function(e,n){a(e).stencilFront=a(n)},__wbg_set_stencil_load_op_37d20deccb26a0f1:function(e,n){a(e).stencilLoadOp=Br[n]},__wbg_set_stencil_read_mask_021ef4271b24352c:function(e,n){a(e).stencilReadMask=n>>>0},__wbg_set_stencil_read_only_75fe66a2356d6e92:function(e,n){a(e).stencilReadOnly=n!==0},__wbg_set_stencil_store_op_501f91638dd386e6:function(e,n){a(e).stencilStoreOp=Wr[n]},__wbg_set_stencil_write_mask_ec1c12237e094bdd:function(e,n){a(e).stencilWriteMask=n>>>0},__wbg_set_step_mode_3cbbdeba1e5dfd62:function(e,n){a(e).stepMode=sc[n]},__wbg_set_storage_texture_786aea7c5773b6c1:function(e,n){a(e).storageTexture=a(n)},__wbg_set_store_op_678f33376d741711:function(e,n){a(e).storeOp=Wr[n]},__wbg_set_strip_index_format_70313df755145d5e:function(e,n){a(e).stripIndexFormat=Or[n]},__wbg_set_strokeStyle_3b18520af1f47602:function(e,n){a(e).strokeStyle=a(n)},__wbg_set_strokeStyle_cce50c69cecc2df7:function(e,n,t){a(e).strokeStyle=w(n,t)},__wbg_set_strokeStyle_cf68ead23facd1c2:function(e,n){a(e).strokeStyle=a(n)},__wbg_set_tabIndex_a9b7f8d964a179f0:function(e,n){a(e).tabIndex=n},__wbg_set_target_e5c049109d0e2ff3:function(e,n,t){a(e).target=w(n,t)},__wbg_set_targets_674b33931e512fb1:function(e,n,t){a(e).targets=de(n,t)},__wbg_set_texture_95f2bfdf7767e76f:function(e,n){a(e).texture=a(n)},__wbg_set_texture_a33be3fe02ac6264:function(e,n){a(e).texture=a(n)},__wbg_set_timestamp_b78581d700a08071:function(e,n){a(e).timestamp=n},__wbg_set_timestamp_writes_de6a09f299b71b76:function(e,n){a(e).timestampWrites=a(n)},__wbg_set_tone_mapping_320c1aad31db2e7f:function(e,n){a(e).toneMapping=a(n)},__wbg_set_topology_b92cfe523bd9653b:function(e,n){a(e).topology=ec[n]},__wbg_set_type_062a978c6946048f:function(e,n,t){a(e).type=w(n,t)},__wbg_set_type_43e0092f16775979:function(e,n){a(e).type=tc[n]},__wbg_set_type_79cec55caf4cdb6d:function(e,n){a(e).type=Hu[n]},__wbg_set_type_7f7e54057b801caa:function(e,n){a(e).type=nc[n]},__wbg_set_type_a170a1d376afa381:function(e,n,t){a(e).type=w(n,t)},__wbg_set_type_d27f05f3d41556ff:function(e,n){a(e).type=Nu[n]},__wbg_set_unclipped_depth_32b7caf29fa5633d:function(e,n){a(e).unclippedDepth=n!==0},__wbg_set_usage_1ee33d98267e787d:function(e,n){a(e).usage=n>>>0},__wbg_set_usage_2365e2704b1fdb10:function(e,n){a(e).usage=n>>>0},__wbg_set_usage_d53ee6f0c7aedbfa:function(e,n){a(e).usage=n>>>0},__wbg_set_usage_f3e34822998d2147:function(e,n){a(e).usage=n>>>0},__wbg_set_value_22d56bead9380ee8:function(e,n,t){a(e).value=w(n,t)},__wbg_set_value_676e9d6f43f3c9e4:function(e,n,t){a(e).value=w(n,t)},__wbg_set_vertex_77ed7a1229239b5a:function(e,n){a(e).vertex=a(n)},__wbg_set_view_dimension_893e2d16561e56e8:function(e,n){a(e).viewDimension=qr[n]},__wbg_set_view_dimension_f2c5fe4bf927c3fe:function(e,n){a(e).viewDimension=qr[n]},__wbg_set_view_formats_427069064d8b7139:function(e,n,t){a(e).viewFormats=de(n,t)},__wbg_set_view_formats_9c2f01a6f3b365c7:function(e,n,t){a(e).viewFormats=de(n,t)},__wbg_set_view_gpu_texture_view_35f4655788535c4d:function(e,n){a(e).view=a(n)},__wbg_set_view_gpu_texture_view_a532c825c52042c0:function(e,n){a(e).view=a(n)},__wbg_set_visibility_d8a6821789538c25:function(e,n){a(e).visibility=n>>>0},__wbg_set_width_36ef6630b22fc519:function(e,n){a(e).width=n>>>0},__wbg_set_width_661c95ea46b71eba:function(e,n){a(e).width=n>>>0},__wbg_set_width_b20525f5f4df4eb8:function(e,n){a(e).width=n>>>0},__wbg_set_write_mask_42d89f182ade6b2d:function(e,n){a(e).writeMask=n>>>0},__wbg_set_x_f470b03dd54724cd:function(e,n){a(e).x=n>>>0},__wbg_set_y_4c44eb40ebca5bfc:function(e,n){a(e).y=n>>>0},__wbg_set_z_2e6820ef0f5821ed:function(e,n){a(e).z=n>>>0},__wbg_shaderSource_7d3f360b4b626db7:function(e,n,t,r){a(e).shaderSource(a(n),w(t,r))},__wbg_shaderSource_dcba4cd3379b35bd:function(e,n,t,r){a(e).shaderSource(a(n),w(t,r))},__wbg_shiftKey_8eca009f693152b4:function(e){return a(e).shiftKey},__wbg_stack_3b0d974bbf31e44f:function(e,n){let t=a(n).stack,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_start_f2a1f4ed432f9992:function(){return g(function(e,n){a(e).start(n)},arguments)},__wbg_state_caf0b46b69f50923:function(e){let n=a(e).state;return(Uu.indexOf(n)+1||4)-1},__wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76:function(){let e=typeof globalThis>"u"?null:globalThis;return x(e)?0:f(e)},__wbg_static_accessor_GLOBAL_c7aea38d4de089bc:function(){let e=typeof global>"u"?null:global;return x(e)?0:f(e)},__wbg_static_accessor_SELF_42d4fae05e59267a:function(){let e=typeof self>"u"?null:self;return x(e)?0:f(e)},__wbg_static_accessor_WINDOW_e0db14a0eba6a812:function(){let e=typeof window>"u"?null:window;return x(e)?0:f(e)},__wbg_statusText_fd389f44ebb1fc97:function(e,n){let t=a(n).statusText,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_status_b0de02a07fd7d927:function(e){return a(e).status},__wbg_stencilFuncSeparate_1455ac65895207da:function(e,n,t,r,i){a(e).stencilFuncSeparate(n>>>0,t>>>0,r,i>>>0)},__wbg_stencilFuncSeparate_55627e589746e09f:function(e,n,t,r,i){a(e).stencilFuncSeparate(n>>>0,t>>>0,r,i>>>0)},__wbg_stencilFunc_b5073faed00da15b:function(e,n,t,r){a(e).stencilFunc(n>>>0,t,r>>>0)},__wbg_stencilMaskSeparate_85d929ff95496631:function(e,n,t){a(e).stencilMaskSeparate(n>>>0,t>>>0)},__wbg_stencilMaskSeparate_8e37bf59a93afc15:function(e,n,t){a(e).stencilMaskSeparate(n>>>0,t>>>0)},__wbg_stencilMask_020d2d7ea8e4f640:function(e,n){a(e).stencilMask(n>>>0)},__wbg_stencilMask_967f16a89bfd056a:function(e,n){a(e).stencilMask(n>>>0)},__wbg_stencilOpSeparate_1f45c75c83dad8d5:function(e,n,t,r,i){a(e).stencilOpSeparate(n>>>0,t>>>0,r>>>0,i>>>0)},__wbg_stencilOpSeparate_33a6764dd0ce6e24:function(e,n,t,r,i){a(e).stencilOpSeparate(n>>>0,t>>>0,r>>>0,i>>>0)},__wbg_stencilOp_39d229912d4e6149:function(e,n,t,r){a(e).stencilOp(n>>>0,t>>>0,r>>>0)},__wbg_stringify_f93a4ebae9231922:function(){return g(function(e){let n=JSON.stringify(a(e));return f(n)},arguments)},__wbg_stroke_7355965b9ad92428:function(e,n){a(e).stroke(a(n))},__wbg_style_f09d6445af3dd2c6:function(e){let n=a(e).style;return f(n)},__wbg_subgroupMaxSize_b43be0aa16182403:function(e){return a(e).subgroupMaxSize},__wbg_subgroupMinSize_03feb6ee0cda6775:function(e){return a(e).subgroupMinSize},__wbg_submit_077c85cc28e36892:function(e,n,t){a(e).submit(de(n,t))},__wbg_submit_88800a9055f9a144:function(){return g(function(e){a(e).submit()},arguments)},__wbg_suppressContextMenu_e69a6b0e64c07eaa:function(e){a(e).suppressContextMenu()},__wbg_suspend_1a76515b500c012f:function(){return g(function(e){let n=a(e).suspend();return f(n)},arguments)},__wbg_texImage2D_053488112c3d702f:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,a(b))},arguments)},__wbg_texImage2D_2854247ff7d047a1:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texImage2D_29d66757a5e1f95c:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h){a(e).texImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b===0?void 0:be(b,h))},arguments)},__wbg_texImage2D_2d1f12e7c67a36d0:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h){a(e).texImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b===0?void 0:be(b,h))},arguments)},__wbg_texImage2D_44740302c934daf1:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,a(b))},arguments)},__wbg_texImage3D_d23f7d2f9e66b916:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h){a(e).texImage3D(n>>>0,t,r,i,s,u,c,d>>>0,b>>>0,h)},arguments)},__wbg_texImage3D_faae3ea3f2969ecc:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h){a(e).texImage3D(n>>>0,t,r,i,s,u,c,d>>>0,b>>>0,a(h))},arguments)},__wbg_texParameteri_2bc38aa8e9964d77:function(e,n,t,r){a(e).texParameteri(n>>>0,t>>>0,r)},__wbg_texParameteri_dd4f56c2acbbe859:function(e,n,t,r){a(e).texParameteri(n>>>0,t>>>0,r)},__wbg_texStorage2D_d473a12d49d7deee:function(e,n,t,r,i,s){a(e).texStorage2D(n>>>0,t,r>>>0,i,s)},__wbg_texStorage3D_3ceb25ba9ad4b7ac:function(e,n,t,r,i,s,u){a(e).texStorage3D(n>>>0,t,r>>>0,i,s,u)},__wbg_texSubImage2D_1b383b66dfe35010:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,b)},arguments)},__wbg_texSubImage2D_205cfbaea80e77e6:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,a(b))},arguments)},__wbg_texSubImage2D_606540d3e650e0bb:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,a(b))},arguments)},__wbg_texSubImage2D_62ae3d4b2700f7cd:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,a(b))},arguments)},__wbg_texSubImage2D_6eb05d8f455f99ba:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,a(b))},arguments)},__wbg_texSubImage2D_a035d2307e014a73:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,a(b))},arguments)},__wbg_texSubImage2D_ad5a64d8f68a2d0d:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,a(b))},arguments)},__wbg_texSubImage2D_cb9ad676165c5da5:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,a(b))},arguments)},__wbg_texSubImage2D_db54df8f6445f113:function(){return g(function(e,n,t,r,i,s,u,c,d,b){a(e).texSubImage2D(n>>>0,t,r,i,s,u,c>>>0,d>>>0,a(b))},arguments)},__wbg_texSubImage3D_09e44c66b4ac6bc6:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h,R){a(e).texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,a(R))},arguments)},__wbg_texSubImage3D_16678785ac62fd6b:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h,R){a(e).texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,a(R))},arguments)},__wbg_texSubImage3D_3ee8764dfdcb6746:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h,R){a(e).texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,R)},arguments)},__wbg_texSubImage3D_53489be691cee78d:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h,R){a(e).texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,a(R))},arguments)},__wbg_texSubImage3D_73d365baf8dad003:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h,R){a(e).texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,a(R))},arguments)},__wbg_texSubImage3D_8a2331639ee1ee0e:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h,R){a(e).texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,a(R))},arguments)},__wbg_texSubImage3D_9b0bd9fd73d7bb1c:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h,R){a(e).texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,a(R))},arguments)},__wbg_texSubImage3D_fcc8b10e5c1a3b28:function(){return g(function(e,n,t,r,i,s,u,c,d,b,h,R){a(e).texSubImage3D(n>>>0,t,r,i,s,u,c,d,b>>>0,h>>>0,a(R))},arguments)},__wbg_then_7026b513a94278a8:function(e,n){let t=a(e).then(a(n));return f(t)},__wbg_then_72819b8d4e081fb5:function(e,n,t){let r=a(e).then(a(n),a(t));return f(r)},__wbg_toString_033acf19ce89359c:function(e){let n=a(e).toString();return f(n)},__wbg_transform_62123174d9cd3977:function(){return g(function(e,n,t,r,i,s,u){a(e).transform(n,t,r,i,s,u)},arguments)},__wbg_unconfigure_835307f58dc68d80:function(e){a(e).unconfigure()},__wbg_uniform1f_e92095ce29c38424:function(e,n,t){a(e).uniform1f(a(n),t)},__wbg_uniform1f_e93503bc589b432d:function(e,n,t){a(e).uniform1f(a(n),t)},__wbg_uniform1fv_b3953ed7fd6bb740:function(e,n,t,r){a(e).uniform1fv(a(n),G(t,r))},__wbg_uniform1i_235dff1d94e0df95:function(e,n,t){a(e).uniform1i(a(n),t)},__wbg_uniform1i_d5db9c3184abbd04:function(e,n,t){a(e).uniform1i(a(n),t)},__wbg_uniform1ui_8bbaaa1161bfd433:function(e,n,t){a(e).uniform1ui(a(n),t>>>0)},__wbg_uniform2fv_1443080aaf9c1077:function(e,n,t,r){a(e).uniform2fv(a(n),G(t,r))},__wbg_uniform2fv_b039f28911c30526:function(e,n,t,r){a(e).uniform2fv(a(n),G(t,r))},__wbg_uniform2iv_9648a06d054a25aa:function(e,n,t,r){a(e).uniform2iv(a(n),Ee(t,r))},__wbg_uniform2iv_e0496dc424dc25ec:function(e,n,t,r){a(e).uniform2iv(a(n),Ee(t,r))},__wbg_uniform2uiv_935dfb31f50dfbe3:function(e,n,t,r){a(e).uniform2uiv(a(n),fn(t,r))},__wbg_uniform3fv_025760367cc4eed3:function(e,n,t,r){a(e).uniform3fv(a(n),G(t,r))},__wbg_uniform3fv_b985d45f54156d3b:function(e,n,t,r){a(e).uniform3fv(a(n),G(t,r))},__wbg_uniform3iv_193b7a0e1ae9ac9a:function(e,n,t,r){a(e).uniform3iv(a(n),Ee(t,r))},__wbg_uniform3iv_63e82687b07e66fc:function(e,n,t,r){a(e).uniform3iv(a(n),Ee(t,r))},__wbg_uniform3uiv_ccd86b78a5fb3077:function(e,n,t,r){a(e).uniform3uiv(a(n),fn(t,r))},__wbg_uniform4f_61192d516e9bede4:function(e,n,t,r,i,s){a(e).uniform4f(a(n),t,r,i,s)},__wbg_uniform4f_d9bb623add5d2541:function(e,n,t,r,i,s){a(e).uniform4f(a(n),t,r,i,s)},__wbg_uniform4fv_c39527800fc76c8e:function(e,n,t,r){a(e).uniform4fv(a(n),G(t,r))},__wbg_uniform4fv_fcff56a650906708:function(e,n,t,r){a(e).uniform4fv(a(n),G(t,r))},__wbg_uniform4iv_197c2f54a8dfb5c2:function(e,n,t,r){a(e).uniform4iv(a(n),Ee(t,r))},__wbg_uniform4iv_9e6e36f0e1d1f84d:function(e,n,t,r){a(e).uniform4iv(a(n),Ee(t,r))},__wbg_uniform4uiv_73fc9e298d02c948:function(e,n,t,r){a(e).uniform4uiv(a(n),fn(t,r))},__wbg_uniformBlockBinding_057177606c8b522f:function(e,n,t,r){a(e).uniformBlockBinding(a(n),t>>>0,r>>>0)},__wbg_uniformMatrix2fv_013723900a9cb65c:function(e,n,t,r,i){a(e).uniformMatrix2fv(a(n),t!==0,G(r,i))},__wbg_uniformMatrix2fv_fb61eccac67a8218:function(e,n,t,r,i){a(e).uniformMatrix2fv(a(n),t!==0,G(r,i))},__wbg_uniformMatrix2x3fv_de8b00219f47ffb4:function(e,n,t,r,i){a(e).uniformMatrix2x3fv(a(n),t!==0,G(r,i))},__wbg_uniformMatrix2x4fv_e659cc34e95fee5e:function(e,n,t,r,i){a(e).uniformMatrix2x4fv(a(n),t!==0,G(r,i))},__wbg_uniformMatrix3fv_3e548032fc28c3e2:function(e,n,t,r,i){a(e).uniformMatrix3fv(a(n),t!==0,G(r,i))},__wbg_uniformMatrix3fv_72ca83d3393e0364:function(e,n,t,r,i){a(e).uniformMatrix3fv(a(n),t!==0,G(r,i))},__wbg_uniformMatrix3x2fv_8598636e806d318d:function(e,n,t,r,i){a(e).uniformMatrix3x2fv(a(n),t!==0,G(r,i))},__wbg_uniformMatrix3x4fv_277fbf38db85e612:function(e,n,t,r,i){a(e).uniformMatrix3x4fv(a(n),t!==0,G(r,i))},__wbg_uniformMatrix4fv_20161efad644f822:function(e,n,t,r,i){a(e).uniformMatrix4fv(a(n),t!==0,G(r,i))},__wbg_uniformMatrix4fv_8689fd0481ac5ab4:function(e,n,t,r,i){a(e).uniformMatrix4fv(a(n),t!==0,G(r,i))},__wbg_uniformMatrix4x2fv_e91bd4e774f6266d:function(e,n,t,r,i){a(e).uniformMatrix4x2fv(a(n),t!==0,G(r,i))},__wbg_uniformMatrix4x3fv_a829c88dfd0c29d3:function(e,n,t,r,i){a(e).uniformMatrix4x3fv(a(n),t!==0,G(r,i))},__wbg_unmap_6a96b14c9ef5f7f5:function(e){a(e).unmap()},__wbg_url_82c95d5d2e2ba977:function(e,n){let t=a(n).url,r=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z;y().setInt32(e+4,i,!0),y().setInt32(e+0,r,!0)},__wbg_useProgram_1c047de878f20b72:function(e,n){a(e).useProgram(a(n))},__wbg_useProgram_9edff145e073d3b1:function(e,n){a(e).useProgram(a(n))},__wbg_userActivation_7f2f2f2659ad0d1a:function(e){let n=a(e).userActivation;return f(n)},__wbg_value_1e2369fab29b420e:function(e){let n=a(e).value;return f(n)},__wbg_values_2a12fb5a6064a244:function(e){let n=a(e).values();return f(n)},__wbg_vertexAttribDivisorANGLE_581f060f68a0c850:function(e,n,t){a(e).vertexAttribDivisorANGLE(n>>>0,t>>>0)},__wbg_vertexAttribDivisor_f910af52b19ce382:function(e,n,t){a(e).vertexAttribDivisor(n>>>0,t>>>0)},__wbg_vertexAttribIPointer_54e6be6fa5e39567:function(e,n,t,r,i,s){a(e).vertexAttribIPointer(n>>>0,t,r>>>0,i,s)},__wbg_vertexAttribPointer_7bc186aca7721b90:function(e,n,t,r,i,s,u){a(e).vertexAttribPointer(n>>>0,t,r>>>0,i!==0,s,u)},__wbg_vertexAttribPointer_b0838f8618a8c446:function(e,n,t,r,i,s,u){a(e).vertexAttribPointer(n>>>0,t,r>>>0,i!==0,s,u)},__wbg_view_7685fe4b2845c5b6:function(e){let n=a(e).view;return x(n)?0:f(n)},__wbg_viewport_07bb1829f0fe2245:function(e,n,t,r,i){a(e).viewport(n,t,r,i)},__wbg_viewport_dfe81d333ce7be86:function(e,n,t,r,i){a(e).viewport(n,t,r,i)},__wbg_visibleRect_0d5e95bfe9d464ca:function(e){let n=a(e).visibleRect;return x(n)?0:f(n)},__wbg_wasClean_76925d0fb8cf2795:function(e){return a(e).wasClean},__wbg_width_1952934caca67137:function(e){return a(e).width},__wbg_width_25247161d477c7d5:function(e){return a(e).width},__wbg_width_4bb073b449891b57:function(e){return a(e).width},__wbg_width_64eb09b40bf1526e:function(e){return a(e).width},__wbg_width_aeade399d283e83a:function(e){return a(e).width},__wbg_writeTexture_30e592e8c061c3d9:function(){return g(function(e,n,t,r,i,s){a(e).writeTexture(a(n),be(t,r),a(i),a(s))},arguments)},__wbindgen_cast_0000000000000001:function(e,n){let t=Z(e,n,Ou);return f(t)},__wbindgen_cast_0000000000000002:function(e,n){let t=Z(e,n,qu);return f(t)},__wbindgen_cast_0000000000000003:function(e,n){let t=Z(e,n,Su);return f(t)},__wbindgen_cast_0000000000000004:function(e,n){let t=Z(e,n,ju);return f(t)},__wbindgen_cast_0000000000000005:function(e,n){let t=Fo(e,n,zu);return f(t)},__wbindgen_cast_0000000000000006:function(e,n){let t=Z(e,n,Au);return f(t)},__wbindgen_cast_0000000000000007:function(e,n){let t=Z(e,n,Fu);return f(t)},__wbindgen_cast_0000000000000008:function(e,n){let t=Z(e,n,Bu);return f(t)},__wbindgen_cast_0000000000000009:function(e,n){let t=Z(e,n,Eu);return f(t)},__wbindgen_cast_000000000000000a:function(e,n){let t=Z(e,n,Iu);return f(t)},__wbindgen_cast_000000000000000b:function(e,n){let t=Z(e,n,Cu);return f(t)},__wbindgen_cast_000000000000000c:function(e,n){let t=Z(e,n,Pu);return f(t)},__wbindgen_cast_000000000000000d:function(e,n){let t=Fo(e,n,Du);return f(t)},__wbindgen_cast_000000000000000e:function(e,n){let t=Z(e,n,Tu);return f(t)},__wbindgen_cast_000000000000000f:function(e,n){let t=Z(e,n,Mu);return f(t)},__wbindgen_cast_0000000000000010:function(e,n){let t=Z(e,n,Lu);return f(t)},__wbindgen_cast_0000000000000011:function(e,n){let t=Z(e,n,Wu);return f(t)},__wbindgen_cast_0000000000000012:function(e,n){let t=Z(e,n,xu);return f(t)},__wbindgen_cast_0000000000000013:function(e,n){let t=Z(e,n,Ru);return f(t)},__wbindgen_cast_0000000000000014:function(e){return f(e)},__wbindgen_cast_0000000000000015:function(e,n){let t=G(e,n);return f(t)},__wbindgen_cast_0000000000000016:function(e,n){let t=gc(e,n);return f(t)},__wbindgen_cast_0000000000000017:function(e,n){let t=Ee(e,n);return f(t)},__wbindgen_cast_0000000000000018:function(e,n){let t=pc(e,n);return f(t)},__wbindgen_cast_0000000000000019:function(e,n){let t=hc(e,n);return f(t)},__wbindgen_cast_000000000000001a:function(e,n){let t=fn(e,n);return f(t)},__wbindgen_cast_000000000000001b:function(e,n){let t=be(e,n);return f(t)},__wbindgen_cast_000000000000001c:function(e,n){let t=w(e,n);return f(t)},__wbindgen_object_clone_ref:function(e){let n=a(e);return f(n)},__wbindgen_object_drop_ref:function(e){L(e)}}}}function xu(o,e){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke_______true_(o,e)}function Ru(o,e){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke_______true__1_(o,e)}function Su(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_FocusEvent__FocusEvent______true_(o,e,f(n))}function ju(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_CloseEvent__CloseEvent______true_(o,e,f(n))}function zu(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_VideoFrame__VideoFrame______true_(o,e,f(n))}function Au(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_CloseEvent__CloseEvent______true__5(o,e,f(n))}function Fu(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_FocusEvent__FocusEvent______true__6(o,e,f(n))}function Eu(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_FocusEvent__FocusEvent______true__8(o,e,f(n))}function Iu(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_CloseEvent__CloseEvent______true__9(o,e,f(n))}function Cu(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_FocusEvent__FocusEvent______true__10(o,e,f(n))}function Pu(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_FocusEvent__FocusEvent______true__11(o,e,f(n))}function Du(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_VideoFrame__VideoFrame______true__12(o,e,f(n))}function Tu(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_FocusEvent__FocusEvent______true__13(o,e,f(n))}function Mu(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___web_sys_d7fcea851be185d4___features__gen_FocusEvent__FocusEvent______true__14(o,e,f(n))}function Ou(o,e,n){try{let i=l.__wbindgen_add_to_stack_pointer(-16);l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___wasm_bindgen_d673d1ceac0f46d2___JsValue__core_66c9576d38506fe5___result__Result_____wasm_bindgen_d673d1ceac0f46d2___JsError___true_(i,o,e,f(n));var t=y().getInt32(i+0,!0),r=y().getInt32(i+4,!0);if(r)throw L(t)}finally{l.__wbindgen_add_to_stack_pointer(16)}}function Bu(o,e,n){try{let i=l.__wbindgen_add_to_stack_pointer(-16);l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___wasm_bindgen_d673d1ceac0f46d2___sys__JsNullable_wgpu_90054982f1decdd9___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_66c9576d38506fe5___result__Result_____wasm_bindgen_d673d1ceac0f46d2___JsError___true_(i,o,e,f(n));var t=y().getInt32(i+0,!0),r=y().getInt32(i+4,!0);if(r)throw L(t)}finally{l.__wbindgen_add_to_stack_pointer(16)}}function Lu(o,e,n){try{let i=l.__wbindgen_add_to_stack_pointer(-16);l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___wasm_bindgen_d673d1ceac0f46d2___sys__JsNullable_wgpu_90054982f1decdd9___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_66c9576d38506fe5___result__Result_____wasm_bindgen_d673d1ceac0f46d2___JsError___true__15(i,o,e,f(n));var t=y().getInt32(i+0,!0),r=y().getInt32(i+4,!0);if(r)throw L(t)}finally{l.__wbindgen_add_to_stack_pointer(16)}}function Wu(o,e,n){try{let i=l.__wbindgen_add_to_stack_pointer(-16);l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___wasm_bindgen_d673d1ceac0f46d2___sys__JsNullable_wgpu_90054982f1decdd9___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_66c9576d38506fe5___result__Result_____wasm_bindgen_d673d1ceac0f46d2___JsError___true__16(i,o,e,f(n));var t=y().getInt32(i+0,!0),r=y().getInt32(i+4,!0);if(r)throw L(t)}finally{l.__wbindgen_add_to_stack_pointer(16)}}function yo(o,e,n,t){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___js_sys_6c955e732cbb38d1___Function_fn_wasm_bindgen_d673d1ceac0f46d2___JsValue_____wasm_bindgen_d673d1ceac0f46d2___sys__Undefined___js_sys_6c955e732cbb38d1___Function_fn_wasm_bindgen_d673d1ceac0f46d2___JsValue_____wasm_bindgen_d673d1ceac0f46d2___sys__Undefined_______true_(o,e,f(n),f(t))}function qu(o,e,n){l.wasm_bindgen_d673d1ceac0f46d2___convert__closures_____invoke___f64______true_(o,e,n)}function f(o){Kn===ye.length&&ye.push(ye.length+1);let e=Kn;return Kn=ye[e],ye[e]=o,e}function Ur(o){let e=typeof o;if(e=="number"||e=="boolean"||o==null)return`${o}`;if(e=="string")return`"${o}"`;if(e=="symbol"){let r=o.description;return r==null?"Symbol":`Symbol(${r})`}if(e=="function"){let r=o.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(o)){let r=o.length,i="[";r>0&&(i+=Ur(o[0]));for(let s=1;s<r;s++)i+=", "+Ur(o[s]);return i+="]",i}let n=/\[object ([^\]]+)\]/.exec(toString.call(o)),t;if(n&&n.length>1)t=n[1];else return toString.call(o);if(t=="Object")try{return"Object("+JSON.stringify(o)+")"}catch{return"Object"}return o instanceof Error?`${o.name}: ${o.message}
${o.stack}`:t}function bc(o){o<1028||(ye[o]=Kn,Kn=o)}function G(o,e){return o=o>>>0,yc().subarray(o/4,o/4+e)}function mc(o,e){return o=o>>>0,kc().subarray(o/8,o/8+e)}function gc(o,e){return o=o>>>0,xc().subarray(o/2,o/2+e)}function Ee(o,e){return o=o>>>0,Rc().subarray(o/4,o/4+e)}function pc(o,e){return o=o>>>0,Sc().subarray(o/1,o/1+e)}function wc(o,e){o=o>>>0;let n=y(),t=[];for(let r=o;r<o+4*e;r+=4)t.push(L(n.getUint32(r,!0)));return t}function de(o,e){o=o>>>0;let n=y(),t=[];for(let r=o;r<o+4*e;r+=4)t.push(a(n.getUint32(r,!0)));return t}function hc(o,e){return o=o>>>0,jc().subarray(o/2,o/2+e)}function fn(o,e){return o=o>>>0,zc().subarray(o/4,o/4+e)}function be(o,e){return o=o>>>0,dn().subarray(o/1,o/1+e)}function vc(o,e){return o=o>>>0,Ac().subarray(o/1,o/1+e)}function y(){return(He===null||He.buffer.detached===!0||He.buffer.detached===void 0&&He.buffer!==l.memory.buffer)&&(He=new DataView(l.memory.buffer)),He}function yc(){return(Wn===null||Wn.byteLength===0)&&(Wn=new Float32Array(l.memory.buffer)),Wn}function kc(){return(qn===null||qn.byteLength===0)&&(qn=new Float64Array(l.memory.buffer)),qn}function xc(){return($n===null||$n.byteLength===0)&&($n=new Int16Array(l.memory.buffer)),$n}function Rc(){return(Un===null||Un.byteLength===0)&&(Un=new Int32Array(l.memory.buffer)),Un}function Sc(){return(Nn===null||Nn.byteLength===0)&&(Nn=new Int8Array(l.memory.buffer)),Nn}function w(o,e){return Ec(o>>>0,e)}function jc(){return(Vn===null||Vn.byteLength===0)&&(Vn=new Uint16Array(l.memory.buffer)),Vn}function zc(){return(Gn===null||Gn.byteLength===0)&&(Gn=new Uint32Array(l.memory.buffer)),Gn}function dn(){return(Hn===null||Hn.byteLength===0)&&(Hn=new Uint8Array(l.memory.buffer)),Hn}function Ac(){return(Jn===null||Jn.byteLength===0)&&(Jn=new Uint8ClampedArray(l.memory.buffer)),Jn}function a(o){return ye[o]}function g(o,e){try{return o.apply(this,e)}catch(n){l.__wbindgen_exn_store(f(n))}}function x(o){return o==null}function Fo(o,e,n){let t={a:o,b:e,cnt:1},r=(...i)=>{t.cnt++;try{return n(t.a,t.b,...i)}finally{r._wbg_cb_unref()}};return r._wbg_cb_unref=()=>{--t.cnt===0&&(l.__wbindgen_destroy_closure(t.a,t.b),t.a=0,Bt.unregister(t))},Bt.register(r,t,t),r}function Z(o,e,n){let t={a:o,b:e,cnt:1},r=(...i)=>{t.cnt++;let s=t.a;t.a=0;try{return n(s,t.b,...i)}finally{t.a=s,r._wbg_cb_unref()}};return r._wbg_cb_unref=()=>{--t.cnt===0&&(l.__wbindgen_destroy_closure(t.a,t.b),t.a=0,Bt.unregister(t))},Bt.register(r,t,t),r}function Vr(o,e){let n=e(o.length*1,1)>>>0;return dn().set(o,n/1),z=o.length,n}function Nr(o,e){let n=e(o.length*4,4)>>>0,t=y();for(let r=0;r<o.length;r++)t.setUint32(n+4*r,f(o[r]),!0);return z=o.length,n}function I(o,e,n){if(n===void 0){let u=Qn.encode(o),c=e(u.length,1)>>>0;return dn().subarray(c,c+u.length).set(u),z=u.length,c}let t=o.length,r=e(t,1)>>>0,i=dn(),s=0;for(;s<t;s++){let u=o.charCodeAt(s);if(u>127)break;i[r+s]=u}if(s!==t){s!==0&&(o=o.slice(s)),r=n(r,t,t=s+o.length*3,1)>>>0;let u=dn().subarray(r+s,r+t),c=Qn.encodeInto(o,u);s+=c.written,r=n(r,t,s,1)>>>0}return z=s,r}function L(o){let e=a(o);return bc(o),e}function Ec(o,e){return $r+=e,$r>=Fc&&(Ot=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Ot.decode(),$r=e),Ot.decode(dn().subarray(o,o+e))}function Io(o,e){return Cc=o,l=o.exports,Ic=e,He=null,Wn=null,qn=null,$n=null,Un=null,Nn=null,Vn=null,Gn=null,Hn=null,Jn=null,l.__wbindgen_start(),l}async function Pc(o,e){if(typeof Response=="function"&&o instanceof Response){if(!o.ok)throw new Error(`failed to fetch Wasm: ${o.status} ${o.statusText} fetching '${o.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(o,e)}catch(r){if(n(o.type)&&o.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}let t=await o.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{let t=await WebAssembly.instantiate(o,e);return t instanceof WebAssembly.Instance?{instance:t,module:o}:t}function n(t){switch(t){case"basic":case"cors":case"default":return!0}return!1}}function Dc(o){if(l!==void 0)return l;o!==void 0&&(Object.getPrototypeOf(o)===Object.prototype?{module:o}=o:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));let e=Eo();o instanceof WebAssembly.Module||(o=new WebAssembly.Module(o));let n=new WebAssembly.Instance(o,e);return Io(n,o)}async function Tc(o){if(l!==void 0)return l;o!==void 0&&(Object.getPrototypeOf(o)===Object.prototype?{module_or_path:o}=o:console.warn("using deprecated parameters for the initialization function; pass a single object instead"));let e=Eo();(typeof o=="string"||typeof Request=="function"&&o instanceof Request||typeof URL=="function"&&o instanceof URL)&&(o=fetch(o));let{instance:n,module:t}=await Pc(await o,e);return Io(n,t)}var Zn,Yn,Xn,bn,et,nt,ku,$u,ko,Uu,Nu,Tr,Vu,xo,Gu,Hu,Ju,Ku,Mr,Qu,Ro,Zu,Or,Br,Yu,Xu,ec,nc,tc,Lr,rc,Wr,So,ac,Ge,oc,qr,ic,sc,uc,cc,lc,_c,fc,dc,jo,zo,Ao,Bt,He,Wn,qn,$n,Un,Nn,Vn,Gn,Hn,Jn,ye,Kn,Ot,Fc,$r,Qn,z,Ic,Cc,l,Po=Yt(()=>{"use strict";xr();Zn=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,_c.unregister(this),e}free(){let e=this.__destroy_into_raw();l.__wbg_intounderlyingbytesource_free(e,0)}get autoAllocateChunkSize(){return l.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr)>>>0}cancel(){let e=this.__destroy_into_raw();l.intounderlyingbytesource_cancel(e)}pull(e){let n=l.intounderlyingbytesource_pull(this.__wbg_ptr,f(e));return L(n)}start(e){l.intounderlyingbytesource_start(this.__wbg_ptr,f(e))}get type(){let e=l.intounderlyingbytesource_type(this.__wbg_ptr);return uc[e]}};Symbol.dispose&&(Zn.prototype[Symbol.dispose]=Zn.prototype.free);Yn=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,fc.unregister(this),e}free(){let e=this.__destroy_into_raw();l.__wbg_intounderlyingsink_free(e,0)}abort(e){let n=this.__destroy_into_raw(),t=l.intounderlyingsink_abort(n,f(e));return L(t)}close(){let e=this.__destroy_into_raw(),n=l.intounderlyingsink_close(e);return L(n)}write(e){let n=l.intounderlyingsink_write(this.__wbg_ptr,f(e));return L(n)}};Symbol.dispose&&(Yn.prototype[Symbol.dispose]=Yn.prototype.free);Xn=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,dc.unregister(this),e}free(){let e=this.__destroy_into_raw();l.__wbg_intounderlyingsource_free(e,0)}cancel(){let e=this.__destroy_into_raw();l.intounderlyingsource_cancel(e)}pull(e){let n=l.intounderlyingsource_pull(this.__wbg_ptr,f(e));return L(n)}};Symbol.dispose&&(Xn.prototype[Symbol.dispose]=Xn.prototype.free);bn=class o{static __wrap(e){let n=Object.create(o.prototype);return n.__wbg_ptr=e,jo.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,jo.unregister(this),e}free(){let e=this.__destroy_into_raw();l.__wbg_rufflehandle_free(e,0)}audio_context(){let e=l.rufflehandle_audio_context(this.__wbg_ptr);return L(e)}call_exposed_callback(e,n){let t=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),r=z,i=Nr(n,l.__wbindgen_malloc),s=z,u=l.rufflehandle_call_exposed_callback(this.__wbg_ptr,t,r,i,s);return L(u)}clear_custom_menu_items(){l.rufflehandle_clear_custom_menu_items(this.__wbg_ptr)}destroy(){l.rufflehandle_destroy(this.__wbg_ptr)}enable_background_tick_mode(){l.rufflehandle_enable_background_tick_mode(this.__wbg_ptr)}has_focus(){return l.rufflehandle_has_focus(this.__wbg_ptr)!==0}is_playing(){return l.rufflehandle_is_playing(this.__wbg_ptr)!==0}static is_wasm_simd_used(){return l.rufflehandle_is_wasm_simd_used()!==0}load_data(e,n,t){try{let s=l.__wbindgen_add_to_stack_pointer(-16),u=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),c=z;l.rufflehandle_load_data(s,this.__wbg_ptr,f(e),f(n),u,c);var r=y().getInt32(s+0,!0),i=y().getInt32(s+4,!0);if(i)throw L(r)}finally{l.__wbindgen_add_to_stack_pointer(16)}}pause(){l.rufflehandle_pause(this.__wbg_ptr)}play(){l.rufflehandle_play(this.__wbg_ptr)}prepare_context_menu(){let e=l.rufflehandle_prepare_context_menu(this.__wbg_ptr);return L(e)}renderer_debug_info(){let e=l.rufflehandle_renderer_debug_info(this.__wbg_ptr);return L(e)}renderer_name(){let e=l.rufflehandle_renderer_name(this.__wbg_ptr);return L(e)}restart_animation_loop(){l.rufflehandle_restart_animation_loop(this.__wbg_ptr)}run_context_menu_callback(e){let n=l.rufflehandle_run_context_menu_callback(this.__wbg_ptr,e);return L(n)}set_fullscreen(e){l.rufflehandle_set_fullscreen(this.__wbg_ptr,e)}set_trace_observer(e){l.rufflehandle_set_trace_observer(this.__wbg_ptr,f(e))}set_volume(e){l.rufflehandle_set_volume(this.__wbg_ptr,e)}stream_from(e,n){try{let i=l.__wbindgen_add_to_stack_pointer(-16),s=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),u=z;l.rufflehandle_stream_from(i,this.__wbg_ptr,s,u,f(n));var t=y().getInt32(i+0,!0),r=y().getInt32(i+4,!0);if(r)throw L(t)}finally{l.__wbindgen_add_to_stack_pointer(16)}}tick_for_background(e){l.rufflehandle_tick_for_background(this.__wbg_ptr,e)}volume(){return l.rufflehandle_volume(this.__wbg_ptr)}};Symbol.dispose&&(bn.prototype[Symbol.dispose]=bn.prototype.free);et=class{toJSON(){return{}}toString(){return JSON.stringify(this)}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,zo.unregister(this),e}free(){let e=this.__destroy_into_raw();l.__wbg_ruffleinstancebuilder_free(e,0)}addFont(e,n){let t=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),r=z,i=Vr(n,l.__wbindgen_malloc),s=z;l.ruffleinstancebuilder_addFont(this.__wbg_ptr,t,r,i,s)}addGamepadButtonMapping(e,n){let t=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),r=z;l.ruffleinstancebuilder_addGamepadButtonMapping(this.__wbg_ptr,t,r,n)}addSocketProxy(e,n,t){let r=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),i=z,s=I(t,l.__wbindgen_malloc,l.__wbindgen_realloc),u=z;l.ruffleinstancebuilder_addSocketProxy(this.__wbg_ptr,r,i,n,s,u)}addUrlRewriteRule(e,n){let t=I(n,l.__wbindgen_malloc,l.__wbindgen_realloc),r=z;l.ruffleinstancebuilder_addUrlRewriteRule(this.__wbg_ptr,f(e),t,r)}build(e,n){let t=l.ruffleinstancebuilder_build(this.__wbg_ptr,f(e),f(n));return L(t)}constructor(){let e=l.ruffleinstancebuilder_new();return this.__wbg_ptr=e,zo.register(this,this.__wbg_ptr,this),this}setAllowFullscreen(e){l.ruffleinstancebuilder_setAllowFullscreen(this.__wbg_ptr,e)}setAllowNetworking(e){let n=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setAllowNetworking(this.__wbg_ptr,n,t)}setAllowScriptAccess(e){l.ruffleinstancebuilder_setAllowScriptAccess(this.__wbg_ptr,e)}setBackgroundColor(e){l.ruffleinstancebuilder_setBackgroundColor(this.__wbg_ptr,x(e)?Number.MAX_SAFE_INTEGER:e>>>0)}setBaseUrl(e){var n=x(e)?0:I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setBaseUrl(this.__wbg_ptr,n,t)}setCompatibilityRules(e){l.ruffleinstancebuilder_setCompatibilityRules(this.__wbg_ptr,e)}setCredentialAllowList(e){let n=Nr(e,l.__wbindgen_malloc),t=z;l.ruffleinstancebuilder_setCredentialAllowList(this.__wbg_ptr,n,t)}setDefaultFont(e,n){let t=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),r=z,i=Nr(n,l.__wbindgen_malloc),s=z;l.ruffleinstancebuilder_setDefaultFont(this.__wbg_ptr,t,r,i,s)}setDeviceFontRenderer(e){let n=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setDeviceFontRenderer(this.__wbg_ptr,n,t)}setForceAlign(e){l.ruffleinstancebuilder_setForceAlign(this.__wbg_ptr,e)}setForceScale(e){l.ruffleinstancebuilder_setForceScale(this.__wbg_ptr,e)}setFrameRate(e){l.ruffleinstancebuilder_setFrameRate(this.__wbg_ptr,!x(e),x(e)?0:e)}setLetterbox(e){let n=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setLetterbox(this.__wbg_ptr,n,t)}setLogLevel(e){let n=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setLogLevel(this.__wbg_ptr,n,t)}setMaxExecutionDuration(e){l.ruffleinstancebuilder_setMaxExecutionDuration(this.__wbg_ptr,e)}setOpenUrlMode(e){let n=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setOpenUrlMode(this.__wbg_ptr,n,t)}setPlayerRuntime(e){let n=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setPlayerRuntime(this.__wbg_ptr,n,t)}setPlayerVersion(e){l.ruffleinstancebuilder_setPlayerVersion(this.__wbg_ptr,x(e)?16777215:e)}setPreferredRenderer(e){var n=x(e)?0:I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setPreferredRenderer(this.__wbg_ptr,n,t)}setQuality(e){let n=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setQuality(this.__wbg_ptr,n,t)}setScale(e){let n=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setScale(this.__wbg_ptr,n,t)}setScrollingBehavior(e){let n=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setScrollingBehavior(this.__wbg_ptr,n,t)}setShowMenu(e){l.ruffleinstancebuilder_setShowMenu(this.__wbg_ptr,e)}setStageAlign(e){let n=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setStageAlign(this.__wbg_ptr,n,t)}setUpgradeToHttps(e){l.ruffleinstancebuilder_setUpgradeToHttps(this.__wbg_ptr,e)}setVolume(e){l.ruffleinstancebuilder_setVolume(this.__wbg_ptr,e)}setWmode(e){var n=x(e)?0:I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),t=z;l.ruffleinstancebuilder_setWmode(this.__wbg_ptr,n,t)}};Symbol.dispose&&(et.prototype[Symbol.dispose]=et.prototype.free);nt=class{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,Ao.unregister(this),e}free(){let e=this.__destroy_into_raw();l.__wbg_zipwriter_free(e,0)}addFile(e,n){let t=I(e,l.__wbindgen_malloc,l.__wbindgen_realloc),r=z,i=Vr(n,l.__wbindgen_malloc),s=z;l.zipwriter_addFile(this.__wbg_ptr,t,r,i,s)}constructor(){let e=l.zipwriter_new();return this.__wbg_ptr=e,Ao.register(this,this.__wbg_ptr,this),this}save(){try{let s=l.__wbindgen_add_to_stack_pointer(-16);l.zipwriter_save(s,this.__wbg_ptr);var e=y().getInt32(s+0,!0),n=y().getInt32(s+4,!0),t=y().getInt32(s+8,!0),r=y().getInt32(s+12,!0);if(r)throw L(t);var i=be(e,n).slice();return l.__wbindgen_free(e,n*1,1),i}finally{l.__wbindgen_add_to_stack_pointer(16)}}};Symbol.dispose&&(nt.prototype[Symbol.dispose]=nt.prototype.free);ku=typeof AudioContext<"u"?AudioContext:typeof webkitAudioContext<"u"?webkitAudioContext:void 0;$u=["blob","arraybuffer"],ko=["nonzero","evenodd"],Uu=["unconfigured","configured","closed"],Nu=["key","delta"],Tr=["clamp-to-edge","repeat","mirror-repeat"],Vu=["auto"],xo=["zero","one","src","one-minus-src","src-alpha","one-minus-src-alpha","dst","one-minus-dst","dst-alpha","one-minus-dst-alpha","src-alpha-saturated","constant","one-minus-constant","src1","one-minus-src1","src1-alpha","one-minus-src1-alpha"],Gu=["add","subtract","reverse-subtract","min","max"],Hu=["uniform","storage","read-only-storage"],Ju=["opaque","premultiplied"],Ku=["standard","extended"],Mr=["never","less","equal","less-equal","greater","not-equal","greater-equal","always"],Qu=["none","front","back"],Ro=["nearest","linear"],Zu=["ccw","cw"],Or=["uint16","uint32"],Br=["load","clear"],Yu=["nearest","linear"],Xu=["low-power","high-performance"],ec=["point-list","line-list","line-strip","triangle-list","triangle-strip"],nc=["occlusion","timestamp"],tc=["filtering","non-filtering","comparison"],Lr=["keep","zero","replace","invert","increment-clamp","decrement-clamp","increment-wrap","decrement-wrap"],rc=["write-only","read-only","read-write"],Wr=["store","discard"],So=["all","stencil-only","depth-only"],ac=["1d","2d","3d"],Ge=["r8unorm","r8snorm","r8uint","r8sint","r16unorm","r16snorm","r16uint","r16sint","r16float","rg8unorm","rg8snorm","rg8uint","rg8sint","r32uint","r32sint","r32float","rg16unorm","rg16snorm","rg16uint","rg16sint","rg16float","rgba8unorm","rgba8unorm-srgb","rgba8snorm","rgba8uint","rgba8sint","bgra8unorm","bgra8unorm-srgb","rgb9e5ufloat","rgb10a2uint","rgb10a2unorm","rg11b10ufloat","rg32uint","rg32sint","rg32float","rgba16unorm","rgba16snorm","rgba16uint","rgba16sint","rgba16float","rgba32uint","rgba32sint","rgba32float","stencil8","depth16unorm","depth24plus","depth24plus-stencil8","depth32float","depth32float-stencil8","bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb","bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm","bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb","etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm","astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"],oc=["float","unfilterable-float","depth","sint","uint"],qr=["1d","2d","2d-array","cube","cube-array","3d"],ic=["uint8","uint8x2","uint8x4","sint8","sint8x2","sint8x4","unorm8","unorm8x2","unorm8x4","snorm8","snorm8x2","snorm8x4","uint16","uint16x2","uint16x4","sint16","sint16x2","sint16x4","unorm16","unorm16x2","unorm16x4","snorm16","snorm16x2","snorm16x4","float16","float16x2","float16x4","float32","float32x2","float32x3","float32x4","uint32","uint32x2","uint32x3","uint32x4","sint32","sint32x2","sint32x3","sint32x4","unorm10-10-10-2","unorm8x4-bgra"],sc=["vertex","instance"],uc=["bytes"],cc=["omit","same-origin","include"],lc=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],_c=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>l.__wbg_intounderlyingbytesource_free(o,1)),fc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>l.__wbg_intounderlyingsink_free(o,1)),dc=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>l.__wbg_intounderlyingsource_free(o,1)),jo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>l.__wbg_rufflehandle_free(o,1)),zo=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>l.__wbg_ruffleinstancebuilder_free(o,1)),Ao=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>l.__wbg_zipwriter_free(o,1));Bt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>l.__wbindgen_destroy_closure(o.a,o.b));He=null;Wn=null;qn=null;$n=null;Un=null;Nn=null;Vn=null;Gn=null;Hn=null;Jn=null;ye=new Array(1024).fill(void 0);ye.push(void 0,null,!0,!1);Kn=ye.length;Ot=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ot.decode();Fc=2146435072,$r=0;Qn=new TextEncoder;"encodeInto"in Qn||(Qn.encodeInto=function(o,e){let n=Qn.encode(o);return e.set(n),{read:o.length,written:n.length}});z=0});var Kt={};Xt(Kt,{PublicAPI:()=>Ye,installRuffle:()=>Xc});var xe=class o{constructor(e,n,t,r,i){this.major=e,this.minor=n,this.patch=t,this.prIdent=r,this.buildIdent=i}static fromSemver(e){let n=e.split("+"),t=n[0].split("-"),r=t[0].split("."),i=parseInt(r[0],10),s=0,u=0,c=null,d=null;return r[1]!==void 0&&(s=parseInt(r[1],10)),r[2]!==void 0&&(u=parseInt(r[2],10)),t[1]!==void 0&&(c=t[1].split(".")),n[1]!==void 0&&(d=n[1].split(".")),new o(i,s,u,c,d)}isCompatibleWith(e){return this.major!==0&&this.major===e.major||this.major===0&&e.major===0&&this.minor!==0&&this.minor===e.minor||this.major===0&&e.major===0&&this.minor===0&&e.minor===0&&this.patch!==0&&this.patch===e.patch}hasPrecedenceOver(e){if(this.major>e.major)return!0;if(this.major<e.major)return!1;if(this.minor>e.minor)return!0;if(this.minor<e.minor)return!1;if(this.patch>e.patch)return!0;if(this.patch<e.patch)return!1;if(this.prIdent===null&&e.prIdent!==null)return!0;if(this.prIdent!==null&&e.prIdent===null)return!1;if(this.prIdent!==null&&e.prIdent!==null){let n=/^[0-9]*$/;for(let t=0;t<this.prIdent.length&&t<e.prIdent.length;t+=1){let r=n.test(e.prIdent[t]),i=n.test(this.prIdent[t]);if(!i&&r)return!0;if(i&&r){let s=parseInt(this.prIdent[t],10),u=parseInt(e.prIdent[t],10);if(s>u)return!0;if(s<u)return!1}else{if(i&&!r)return!1;if(!i&&!r){if(this.prIdent[t]>e.prIdent[t])return!0;if(this.prIdent[t]<e.prIdent[t])return!1}}}if(this.prIdent.length>e.prIdent.length)return!0;if(this.prIdent.length<e.prIdent.length)return!1}if(this.buildIdent!==null&&e.buildIdent===null)return!0;if(this.buildIdent===null&&e.buildIdent!==null)return!1;if(this.buildIdent!==null&&e.buildIdent!==null){let n=/^[0-9]*$/;for(let t=0;t<this.buildIdent.length&&t<e.buildIdent.length;t+=1){let r=n.test(this.buildIdent[t]),i=n.test(e.buildIdent[t]);if(!r&&i)return!0;if(r&&i){let s=parseInt(this.buildIdent[t],10),u=parseInt(e.buildIdent[t],10);if(s>u)return!0;if(s<u)return!1}else{if(r&&!i)return!1;if(!r&&!i){if(this.buildIdent[t]>e.buildIdent[t])return!0;if(this.buildIdent[t]<e.buildIdent[t])return!1}}}return this.buildIdent.length>e.buildIdent.length}return!1}isEqual(e){return this.major===e.major&&this.minor===e.minor&&this.patch===e.patch}isStableOrCompatiblePrerelease(e){return e.prIdent===null?!0:this.major===e.major&&this.minor===e.minor&&this.patch===e.patch}};var bt=class o{constructor(e){this.requirements=e}satisfiedBy(e){for(let n of this.requirements){let t=!0;for(let{comparator:r,version:i}of n)t=t&&i.isStableOrCompatiblePrerelease(e),r===""||r==="="?t=t&&i.isEqual(e):r===">"?t=t&&e.hasPrecedenceOver(i):r===">="?t=t&&(e.hasPrecedenceOver(i)||i.isEqual(e)):r==="<"?t=t&&i.hasPrecedenceOver(e):r==="<="?t=t&&(i.hasPrecedenceOver(e)||i.isEqual(e)):r==="^"&&(t=t&&i.isCompatibleWith(e));if(t)return!0}return!1}static fromRequirementString(e){let n=e.split(" "),t=[],r=[];for(let i of n)if(i==="||")t.length>0&&(r.push(t),t=[]);else if(i.length>0){let s=/[0-9]/.exec(i);if(s){let u=i.slice(0,s.index).trim(),c=xe.fromSemver(i.slice(s.index).trim());t.push({comparator:u,version:c})}}return t.length>0&&r.push(t),new o(r)}};var Ye=class{constructor(e){this.sources=e?.sources||{},this.config=e?.config||{},this.invoked=e?.invoked||!1,this.newestName=e?.newestName||null,e?.superseded?.(),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}newestSourceName(){let e=null,n=xe.fromSemver("0.0.0");for(let t in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,t)){let r=xe.fromSemver(this.sources[t].version);r.hasPrecedenceOver(n)&&(e=t,n=r)}return e}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");("polyfills"in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){let e=this.newestSourceName();return e!==null?this.sources[e]:null}satisfying(e){let n=bt.fromRequirementString(e),t=null;for(let r in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,r)){let i=xe.fromSemver(this.sources[r].version);n.satisfiedBy(i)&&(t=this.sources[r])}return t}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}};var ee={versionNumber:"0.8.0-nightly.2026.10.8",versionName:"0.8.0-nightly.2026.10.8",versionChannel:"nightly",buildDate:"2026-10-08T00:17:52.272Z",commitHash:"906d2471093b1dd8ecd5bccf5ef9d63145c32be3"};var Re;(function(o){o[o.HaveNothing=0]="HaveNothing",o[o.Loading=1]="Loading",o[o.Loaded=2]="Loaded"})(Re||(Re={}));var q=te(Y(),1);var Be;(function(o){o.On="on",o.Off="off",o.Auto="auto"})(Be||(Be={}));var mt;(function(o){o.Off="off",o.Fullscreen="fullscreen",o.On="on"})(mt||(mt={}));var en;(function(o){o.Visible="visible",o.Hidden="hidden"})(en||(en={}));var gt;(function(o){o.Error="error",o.Warn="warn",o.Info="info",o.Debug="debug",o.Trace="trace"})(gt||(gt={}));var nn;(function(o){o.Window="window",o.Opaque="opaque",o.Transparent="transparent",o.Direct="direct",o.Gpu="gpu"})(nn||(nn={}));var yn;(function(o){o.WebGpu="webgpu",o.WgpuWebgl="wgpu-webgl",o.Webgl="webgl",o.Canvas="canvas"})(yn||(yn={}));var Se;(function(o){o.On="on",o.RightClickOnly="rightClickOnly",o.Off="off"})(Se||(Se={}));var pt;(function(o){o.AIR="air",o.FlashPlayer="flashPlayer"})(pt||(pt={}));var wt;(function(o){o.Allow="allow",o.Confirm="confirm",o.Deny="deny"})(wt||(wt={}));var ht;(function(o){o.All="all",o.Internal="internal",o.None="none"})(ht||(ht={}));var vt;(function(o){o.Always="always",o.Never="never",o.Smart="smart"})(vt||(vt={}));var yt;(function(o){o.Embedded="embedded",o.Canvas="canvas"})(yt||(yt={}));var je;(function(o){o.None="none",o.MainThread="mainThread"})(je||(je={}));var wa;(function(o){o.South="south",o.East="east",o.North="north",o.West="west",o.LeftTrigger="left-trigger",o.LeftTrigger2="left-trigger-2",o.RightTrigger="right-trigger",o.RightTrigger2="right-trigger-2",o.Select="select",o.Start="start",o.DPadUp="dpad-up",o.DPadDown="dpad-down",o.DPadLeft="dpad-left",o.DPadRight="dpad-right"})(wa||(wa={}));var ha={allowScriptAccess:!1,parameters:{},autoplay:Be.Auto,backgroundColor:null,letterbox:mt.Fullscreen,unmuteOverlay:en.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:gt.Error,showSwfDownload:!1,contextMenu:Se.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",fullScreenAspectRatio:"",forceAlign:!1,quality:null,scale:"showAll",forceScale:!1,frameRate:null,wmode:nn.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:wt.Allow,allowNetworking:ht.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:pt.FlashPlayer,gamepadButtonMapping:{},urlRewriteRules:[],scrollingBehavior:vt.Smart,deviceFontRenderer:yt.Embedded,backgroundExecutionMode:je.MainThread};var ce=te(Y(),1);var va=te(Y(),1),mi=`:host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-blue-dark:#253559;--ruffle-orange:#ffad33;--modal-background:#fafafa;--modal-foreground-rgb:0, 0, 0;--modal-foreground-filter:none;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host  (:-webkit-full-screen) {display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{outline:none;overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{align-items:center;background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:15px;gap:8px;justify-content:center;overflow:auto;padding:16px;text-align:center}#panic a{color:#fff;text-underline-offset:2px}#panic-title{font-size:30px;font-weight:700;letter-spacing:-.5px}#panic-body{max-width:480px;opacity:.85;width:100%}#panic-details-modal{align-items:center;background:#0008;box-sizing:border-box;display:flex;inset:0;justify-content:center;padding:8px;position:absolute;z-index:1}#panic-details-content{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;box-sizing:border-box;color:rgb(var(--modal-foreground-rgb));height:80%;max-width:720px;overflow:hidden;padding:44px 12px 12px;position:relative;width:100%}#panic-details-content .panic-copy-button{background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240zm0-80h360v-480H360zM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80zm160-240v-480z"/></svg>');border-radius:4px;cursor:pointer;filter:var(--modal-foreground-filter);height:16px;opacity:.6;position:absolute;right:40px;top:14px;transition:opacity .15s,background-image;width:16px}:is(#panic-details-content .panic-copy-button):hover{opacity:1}.copied:is(#panic-details-content .panic-copy-button){background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%2322c55e" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57z"/></svg>');cursor:default;filter:none;opacity:1;pointer-events:none}#panic-details-content textarea{background:rgb(var(--modal-foreground-rgb),.07);border:none;border-radius:8px;box-sizing:border-box;color:rgb(var(--modal-foreground-rgb));font-family:monospace;font-size:12px;height:100%;outline:none;padding:10px;resize:none;width:100%}#panic-details-content textarea::-webkit-scrollbar{width:6px}#panic-details-content textarea::-webkit-scrollbar-thumb{background:rgb(var(--modal-foreground-rgb),.25);border-radius:3px}#panic-details-content textarea::-webkit-scrollbar-track{background:transparent}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:8px;color:var(--ruffle-orange);cursor:pointer;font-family:inherit;font-size:16px;font-weight:700;margin:8px 0;padding:10px 16px;text-decoration:none;transition:background .15s}#panic ul{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;list-style-type:none;margin:0;padding:0}:is(#panic ul) li a{background:transparent;border:1px solid hsla(0,0%,100%,.7);border-radius:8px;color:#fff;display:inline-block;font-family:inherit;font-size:13px;font-weight:700;padding:8px 16px;text-decoration:none;transition:background .15s}:is(:is(#panic ul) li a):hover{background:hsla(0,0%,100%,.2)}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border-radius:8px;box-shadow:0 0 16px #0006;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;overflow:hidden;padding:5px 0;position:absolute;text-align:start;white-space:nowrap}#context-menu .menu-item{padding:7px 12px}#context-menu.has-checkmarks .menu-item{padding-inline-start:32px;position:relative}#context-menu.has-checkmarks .menu-item.checked:before{background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57z"/></svg>');background-repeat:no-repeat;background-size:contain;content:"";filter:var(--modal-foreground-filter);height:16px;inset-inline-start:8px;position:absolute;top:50%;transform:translateY(-50%);width:16px}#context-menu .menu-item.disabled{color:rgb(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgb(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgb(var(--modal-foreground-rgb),.2);margin:4px 0}#splash-screen{align-items:center;background:var(--splash-screen-background,var(--preloader-background,var(--ruffle-blue)));display:flex;flex-direction:column;justify-content:center}.loadbar{background:var(--ruffle-blue-dark);height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{animation:a 1.5s linear infinite;stroke:var(--ruffle-orange);stroke-dasharray:180;stroke-dashoffset:135;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%20-960%20960%20960%22%3E%3Cpath%20d%3D%22M480-392%20300-212q-18%2018-44%2018t-44-18-18-44%2018-44l180-180-180-180q-18-18-18-44t18-44%2044-18%2044%2018l180%20180%20180-180q18-18%2044-18t44%2018%2018%2044-18%2044L568-480l180%20180q18%2018%2018%2044t-18%2044-44%2018-44-18z%22%2F%3E%3C%2Fsvg%3E");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgb(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%20-960%20960%20960%22%3E%3Cpath%20d%3D%22M480-337q-8%200-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12%2028.5-12.5T365-549l75%2075v-286q0-17%2011.5-28.5T480-800t28.5%2011.5T520-760v286l75-75q12-12%2028.5-11.5T652-548q11%2012%2011.5%2028T652-492L508-348q-6%206-13%208.5t-15%202.5M240-160q-33%200-56.5-23.5T160-240v-80q0-17%2011.5-28.5T200-360t28.5%2011.5T240-320v80h480v-80q0-17%2011.5-28.5T760-360t28.5%2011.5T800-320v80q0%2033-23.5%2056.5T720-160z%22%2F%3E%3C%2Fsvg%3E")}#replace-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%20-1080%20960%201200%22%3E%3Cpath%20d%3D%22M440-367v127q0%2017%2011.5%2028.5T480-200t28.5-11.5T520-240v-127l36%2036q6%206%2013.5%209t15%202.5T599-323t13-9q11-12%2011.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15%202.5-13%208.5L348-388q-12%2012-11.5%2028t12.5%2028q12%2011%2028%2011.5t28-11.5zM240-80q-33%200-56.5-23.5T160-160v-640q0-33%2023.5-56.5T240-880h287q16%200%2030.5%206t25.5%2017l194%20194q11%2011%2017%2025.5t6%2030.5v447q0%2033-23.5%2056.5T720-80zm280-560q0%2017%2011.5%2028.5T560-600h160L520-800z%22%2F%3E%3C%2Fsvg%3E")}#delete-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%20-1020%20960%201080%22%3E%3Cpath%20d%3D%22M280-120q-33%200-56.5-23.5T200-200v-520q-17%200-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17%2011.5-28.5T400-840h160q17%200%2028.5%2011.5T600-800h160q17%200%2028.5%2011.5T800-760t-11.5%2028.5T760-720v520q0%2033-23.5%2056.5T680-120zm120-160q17%200%2028.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5%2011.5T360-600v280q0%2017%2011.5%2028.5T400-280m160%200q17%200%2028.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5%2011.5T520-600v280q0%2017%2011.5%2028.5T560-280%22%2F%3E%3C%2Fsvg%3E")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%20-960%20960%20960%22%3E%3Cpath%20d%3D%22m719.13-419.35-71.67%2071.68Q634.78-335%20617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625%20617.13-625t30.33%2012.67l71.67%2071.68%2071.67-71.68Q803.48-625%20821.13-625t30.33%2012.67q12.67%2012.68%2012.67%2030.33t-12.67%2030.33L779.78-480l71.68%2071.67q12.67%2012.68%2012.67%2030.33t-12.67%2030.33Q838.78-335%20821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66%200-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65%2012.67-30.33%2012.67-12.67%2030.33-12.67H278l130.15-129.91q20.63-20.63%2046.98-9.45%2026.35%2011.19%2026.35%2039.77v443.44q0%2028.58-26.35%2039.77-26.35%2011.18-46.98-9.45z%22%2F%3E%3C%2Fsvg%3E")}#volume-min{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%22161%20-960%20960%20960%22%3E%3Cpath%20d%3D%22M438.65-357.87H321.87q-17.65%200-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65%2012.67-30.33%2012.68-12.67%2030.33-12.67h116.78L568.8-732.04q20.63-20.63%2046.98-9.45%2026.35%2011.19%2026.35%2039.77v443.44q0%2028.58-26.35%2039.77-26.35%2011.18-46.98-9.45z%22%2F%3E%3C%2Fsvg%3E")}#volume-mid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%2280%20-960%20960%20960%22%3E%3Cpath%20d%3D%22M357.98-357.87H241.2q-17.66%200-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65%2012.67-30.33%2012.67-12.67%2030.33-12.67h116.78L487.65-731.8q20.63-20.64%2047.1-9.57t26.47%2039.65v443.44q0%2028.58-26.47%2039.65t-47.1-9.57zM741.8-480q0%2042.48-20.47%2080.09-20.48%2037.61-54.94%2060.82-10.22%205.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71%209.98-17.32%209.97-5.61%2020.19.37%2034.46%2023.71%2054.94%2061.45Q741.8-522.48%20741.8-480%22%2F%3E%3C%2Fsvg%3E")}#volume-max{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%229%20-960%20960%20960%22%3E%3Cpath%20d%3D%22M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72%2020.34-22.46t29.58%200q92.48%2042.46%20147.97%20127.05%2055.48%2084.6%2055.48%20187.82t-55.48%20187.82q-55.49%2084.59-147.97%20127.05-14.98%206.74-29.58%200t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24%20111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66%200-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65%2012.67-30.33%2012.67-12.67%2030.33-12.67h116.78L416.65-731.8q20.63-20.64%2047.1-9.57t26.47%2039.65v443.44q0%2028.58-26.47%2039.65t-47.1-9.57zM670.8-480q0%2042.48-20.47%2080.09-20.48%2037.61-54.94%2060.82-10.22%205.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71%209.98-17.32%209.97-5.61%2020.19.37%2034.46%2023.71%2054.94%2061.45Q670.8-522.48%20670.8-480%22%2F%3E%3C%2Fsvg%3E")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media(prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0, 0, 0;--modal-foreground-filter:none}}@media(prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221, 221, 221;--modal-foreground-filter:invert(90%)}}`;function ya(){return(0,va.jsx)("style",{children:mi})}var ka=te(Y(),1);function xa(){return(0,ka.jsx)("style",{id:"dynamic-styles"})}var $=te(Y(),1);function Ra(){return(0,$.jsxs)("div",{id:"container",children:[(0,$.jsx)("div",{id:"play-button",children:(0,$.jsx)("div",{class:"icon",children:(0,$.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%",children:[(0,$.jsxs)("defs",{xmlns:"http://www.w3.org/2000/svg",children:[(0,$.jsxs)("linearGradient",{xmlns:"http://www.w3.org/2000/svg",id:"a",gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad",children:[(0,$.jsx)("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"0%","stop-color":"#FDA138"}),(0,$.jsx)("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"100%","stop-color":"#FD3A40"})]}),(0,$.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",id:"b",children:[(0,$.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"}),(0,$.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",d:"M87 55v140l100-70L87 55z"})]})]}),(0,$.jsx)("use",{xmlns:"http://www.w3.org/2000/svg",href:"#b"})]})})}),(0,$.jsxs)("div",{id:"unmute-overlay",children:[(0,$.jsx)("div",{class:"background"}),(0,$.jsx)("div",{class:"icon",children:(0,$.jsxs)("svg",{id:"unmute-overlay-svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",children:[(0,$.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"}),(0,$.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"}),(0,$.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"}),(0,$.jsx)("text",{xmlns:"http://www.w3.org/2000/svg",id:"unmute-text",x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF",children:"Click to unmute"})]})})]}),(0,$.jsx)("input",{"aria-hidden":"true",id:"virtual-keyboard",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"none"})]})}var ue=te(Y(),1);function Sa(){return(0,ue.jsxs)("div",{id:"splash-screen",class:"hidden",children:[(0,ue.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"logo",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150",children:(0,ue.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",children:[(0,ue.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"}),(0,ue.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"})]})}),(0,ue.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"loading-animation",viewBox:"0 0 66 66",children:(0,ue.jsx)("circle",{xmlns:"http://www.w3.org/2000/svg",class:"spinner",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"})}),(0,ue.jsx)("div",{class:"loadbar",children:(0,ue.jsx)("div",{class:"loadbar-inner"})})]})}var ze=te(Y(),1);function ja(){return(0,ze.jsx)("div",{id:"save-manager",class:"modal hidden",children:(0,ze.jsxs)("div",{id:"modal-area",class:"modal-area",children:[(0,ze.jsx)("span",{class:"close-modal"}),(0,ze.jsx)("div",{class:"general-save-options",children:(0,ze.jsx)("span",{class:"modal-button"})}),(0,ze.jsx)("table",{id:"local-saves"})]})})}var ae=te(Y(),1);var ge=class{constructor(e){this.value=e}valueOf(){return this.value}},O=class extends ge{constructor(e="???"){super(e)}toString(e){return`{${this.value}}`}},re=class extends ge{constructor(e,n={}){super(e),this.opts=n}toString(e){if(e)try{return e.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(n){e.reportError(n)}return this.value.toString(10)}},pe=class o extends ge{static supportsValue(e){if(typeof e=="number"||e instanceof Date)return!0;if(e instanceof ge)return o.supportsValue(e.valueOf());if("Temporal"in globalThis){let n=globalThis.Temporal;if(e instanceof n.Instant||e instanceof n.PlainDateTime||e instanceof n.PlainDate||e instanceof n.PlainMonthDay||e instanceof n.PlainTime||e instanceof n.PlainYearMonth)return!0}return!1}constructor(e,n={}){e instanceof o?(n={...e.opts,...n},e=e.value):e instanceof ge&&(e=e.valueOf()),typeof e=="object"&&"calendarId"in e&&n.calendar===void 0&&(n={...n,calendar:e.calendarId}),super(e),this.opts=n}[Symbol.toPrimitive](e){return e==="string"?this.toString():this.toNumber()}toNumber(){let e=this.value;if(typeof e=="number")return e;if(e instanceof Date)return e.getTime();if("epochMilliseconds"in e)return e.epochMilliseconds;if("toZonedDateTime"in e)return e.toZonedDateTime("UTC").epochMilliseconds;throw new TypeError("Unwrapping a non-number value as a number")}toString(e){if(e)try{return e.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(n){e.reportError(n)}return typeof this.value=="number"||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}};var za=100,gi="\u2068",pi="\u2069";function wi(o,e,n){if(n===e||n instanceof re&&e instanceof re&&n.value===e.value)return!0;if(e instanceof re&&typeof n=="string"){let t=o.memoizeIntlObject(Intl.PluralRules,e.opts).select(e.value);if(n===t)return!0}return!1}function Aa(o,e,n){return e[n]?tn(o,e[n].value):(o.reportError(new RangeError("No default")),new O)}function ir(o,e){let n=[],t=Object.create(null);for(let r of e)r.type==="narg"?t[r.name]=kn(o,r.value):n.push(kn(o,r));return{positional:n,named:t}}function kn(o,e){switch(e.type){case"str":return e.value;case"num":return new re(e.value,{minimumFractionDigits:e.precision});case"var":return hi(o,e);case"mesg":return vi(o,e);case"term":return yi(o,e);case"func":return ki(o,e);case"select":return xi(o,e);default:return new O}}function hi(o,{name:e}){let n;if(o.params)if(Object.prototype.hasOwnProperty.call(o.params,e))n=o.params[e];else return new O(`$${e}`);else if(o.args&&Object.prototype.hasOwnProperty.call(o.args,e))n=o.args[e];else return o.reportError(new ReferenceError(`Unknown variable: $${e}`)),new O(`$${e}`);if(n instanceof ge)return n;switch(typeof n){case"string":return n;case"number":return new re(n);case"object":if(pe.supportsValue(n))return new pe(n);default:return o.reportError(new TypeError(`Variable type not supported: $${e}, ${typeof n}`)),new O(`$${e}`)}}function vi(o,{name:e,attr:n}){let t=o.bundle._messages.get(e);if(!t)return o.reportError(new ReferenceError(`Unknown message: ${e}`)),new O(e);if(n){let r=t.attributes[n];return r?tn(o,r):(o.reportError(new ReferenceError(`Unknown attribute: ${n}`)),new O(`${e}.${n}`))}return t.value?tn(o,t.value):(o.reportError(new ReferenceError(`No value: ${e}`)),new O(e))}function yi(o,{name:e,attr:n,args:t}){let r=`-${e}`,i=o.bundle._terms.get(r);if(!i)return o.reportError(new ReferenceError(`Unknown term: ${r}`)),new O(r);if(n){let u=i.attributes[n];if(u){o.params=ir(o,t).named;let c=tn(o,u);return o.params=null,c}return o.reportError(new ReferenceError(`Unknown attribute: ${n}`)),new O(`${r}.${n}`)}o.params=ir(o,t).named;let s=tn(o,i.value);return o.params=null,s}function ki(o,{name:e,args:n}){let t=o.bundle._functions[e];if(!t)return o.reportError(new ReferenceError(`Unknown function: ${e}()`)),new O(`${e}()`);if(typeof t!="function")return o.reportError(new TypeError(`Function ${e}() is not callable`)),new O(`${e}()`);try{let r=ir(o,n);return t(r.positional,r.named)}catch(r){return o.reportError(r),new O(`${e}()`)}}function xi(o,{selector:e,variants:n,star:t}){let r=kn(o,e);if(r instanceof O)return Aa(o,n,t);for(let i of n){let s=kn(o,i.key);if(wi(o,r,s))return tn(o,i.value)}return Aa(o,n,t)}function sr(o,e){if(o.dirty.has(e))return o.reportError(new RangeError("Cyclic reference")),new O;o.dirty.add(e);let n=[],t=o.bundle._useIsolating&&e.length>1;for(let r of e){if(typeof r=="string"){n.push(o.bundle._transform(r));continue}if(o.placeables++,o.placeables>za)throw o.dirty.delete(e),new RangeError(`Too many placeables expanded: ${o.placeables}, max allowed is ${za}`);t&&n.push(gi),n.push(kn(o,r).toString(o)),t&&n.push(pi)}return o.dirty.delete(e),n.join("")}function tn(o,e){return typeof e=="string"?o.bundle._transform(e):sr(o,e)}var kt=class{constructor(e,n,t){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=e,this.errors=n,this.args=t}reportError(e){if(!this.errors||!(e instanceof Error))throw e;this.errors.push(e)}memoizeIntlObject(e,n){let t=this.bundle._intls.get(e);t||(t={},this.bundle._intls.set(e,t));let r=JSON.stringify(n);return t[r]||(t[r]=new e(this.bundle.locales,n)),t[r]}};function ur(o,e){let n=Object.create(null);for(let[t,r]of Object.entries(o))e.includes(t)&&(n[t]=r.valueOf());return n}var Fa=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function Ea(o,e){let n=o[0];if(n instanceof O)return new O(`NUMBER(${n.valueOf()})`);if(n instanceof re)return new re(n.valueOf(),{...n.opts,...ur(e,Fa)});if(n instanceof pe)return new re(n.toNumber(),{...ur(e,Fa)});throw new TypeError("Invalid argument to NUMBER")}var Ri=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function Ia(o,e){let n=o[0];if(n instanceof O)return new O(`DATETIME(${n.valueOf()})`);if(n instanceof pe||n instanceof re)return new pe(n,ur(e,Ri));throw new TypeError("Invalid argument to DATETIME")}var Ca=new Map;function Pa(o){let e=Array.isArray(o)?o.join(" "):o,n=Ca.get(e);return n===void 0&&(n=new Map,Ca.set(e,n)),n}var xn=class{constructor(e,{functions:n,useIsolating:t=!0,transform:r=i=>i}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(e)?e:[e],this._functions={NUMBER:Ea,DATETIME:Ia,...n},this._useIsolating=t,this._transform=r,this._intls=Pa(e)}hasMessage(e){return this._messages.has(e)}getMessage(e){return this._messages.get(e)}addResource(e,{allowOverrides:n=!1}={}){let t=[];for(let r=0;r<e.body.length;r++){let i=e.body[r];if(i.id.startsWith("-")){if(n===!1&&this._terms.has(i.id)){t.push(new Error(`Attempt to override an existing term: "${i.id}"`));continue}this._terms.set(i.id,i)}else{if(n===!1&&this._messages.has(i.id)){t.push(new Error(`Attempt to override an existing message: "${i.id}"`));continue}this._messages.set(i.id,i)}}return t}formatPattern(e,n=null,t=null){if(typeof e=="string")return this._transform(e);let r=new kt(this,t,n);try{return sr(r,e).toString(r)}catch(i){if(r.errors&&i instanceof Error)return r.errors.push(i),new O().toString(r);throw i}}};var cr=/^(-?[a-zA-Z][\w-]*) *= */gm,Da=/\.([a-zA-Z][\w-]*) *= */y,Si=/\*?\[/y,lr=/(-?[0-9]+(?:\.([0-9]+))?)/y,ji=/([a-zA-Z][\w-]*)/y,Ta=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,zi=/^[A-Z][A-Z0-9_-]*$/,xt=/([^{}\n\r]+)/y,Ai=/([^\\"\n\r]*)/y,Ma=/\\([\\"])/y,Oa=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,Fi=/^\n+/,Ba=/ +$/,Ei=/ *\r?\n/g,Ii=/( *)$/,Ci=/{\s*/y,La=/\s*}/y,Pi=/\[\s*/y,Di=/\s*] */y,Ti=/\s*\(\s*/y,Mi=/\s*->\s*/y,Oi=/\s*:\s*/y,Bi=/\s*,?\s*/y,Li=/\s+/y,Rn=class{constructor(e){this.body=[],cr.lastIndex=0;let n=0;for(;;){let v=cr.exec(e);if(v===null)break;n=cr.lastIndex;try{this.body.push(c(v[1]))}catch(F){if(F instanceof SyntaxError)continue;throw F}}function t(v){return v.lastIndex=n,v.test(e)}function r(v,F){if(e[n]===v)return n++,!0;if(F)throw new F(`Expected ${v}`);return!1}function i(v,F){if(t(v))return n=v.lastIndex,!0;if(F)throw new F(`Expected ${v.toString()}`);return!1}function s(v){v.lastIndex=n;let F=v.exec(e);if(F===null)throw new SyntaxError(`Expected ${v.toString()}`);return n=v.lastIndex,F}function u(v){return s(v)[1]}function c(v){let F=b(),W=d();if(F===null&&Object.keys(W).length===0)throw new SyntaxError("Expected message value or attributes");return{id:v,value:F,attributes:W}}function d(){let v=Object.create(null);for(;t(Da);){let F=u(Da),W=b();if(W===null)throw new SyntaxError("Expected attribute value");v[F]=W}return v}function b(){let v;if(t(xt)&&(v=u(xt)),e[n]==="{"||e[n]==="}")return h(v?[v]:[],1/0);let F=Ze();return F?v?h([v,F],F.length):(F.value=Me(F.value,Fi),h([F],F.length)):v?Me(v,Ba):null}function h(v=[],F){for(;;){if(t(xt)){v.push(u(xt));continue}if(e[n]==="{"){v.push(R());continue}if(e[n]==="}")throw new SyntaxError("Unbalanced closing brace");let me=Ze();if(me){v.push(me),F=Math.min(F,me.length);continue}break}let W=v.length-1,Oe=v[W];typeof Oe=="string"&&(v[W]=Me(Oe,Ba));let wn=[];for(let me of v)me instanceof Rt&&(me=me.value.slice(0,me.value.length-F)),me&&wn.push(me);return wn}function R(){i(Ci,SyntaxError);let v=J();if(i(La))return v;if(i(Mi)){let F=Te();return i(La,SyntaxError),{type:"select",selector:v,...F}}throw new SyntaxError("Unclosed placeable")}function J(){if(e[n]==="{")return R();if(t(Ta)){let[,v,F,W=null]=s(Ta);if(v==="$")return{type:"var",name:F};if(i(Ti)){let Oe=se();if(v==="-")return{type:"term",name:F,attr:W,args:Oe};if(zi.test(F))return{type:"func",name:F,args:Oe};throw new SyntaxError("Function names must be all upper-case")}return v==="-"?{type:"term",name:F,attr:W,args:[]}:{type:"mesg",name:F,attr:W}}return dt()}function se(){let v=[];for(;;){switch(e[n]){case")":return n++,v;case void 0:throw new SyntaxError("Unclosed argument list")}v.push(ve()),i(Bi)}}function ve(){let v=J();return v.type!=="mesg"?v:i(Oi)?{type:"narg",name:v.name,value:dt()}:v}function Te(){let v=[],F=0,W;for(;t(Si);){r("*")&&(W=F);let Oe=ft(),wn=b();if(wn===null)throw new SyntaxError("Expected variant value");v[F++]={key:Oe,value:wn}}if(F===0)return null;if(W===void 0)throw new SyntaxError("Expected default variant");return{variants:v,star:W}}function ft(){i(Pi,SyntaxError);let v;return t(lr)?v=pn():v={type:"str",value:u(ji)},i(Di,SyntaxError),v}function dt(){if(t(lr))return pn();if(e[n]==='"')return Qt();throw new SyntaxError("Invalid expression")}function pn(){let[,v,F=""]=s(lr),W=F.length;return{type:"num",value:parseFloat(v),precision:W}}function Qt(){r('"',SyntaxError);let v="";for(;;){if(v+=u(Ai),e[n]==="\\"){v+=Qe();continue}if(r('"'))return{type:"str",value:v};throw new SyntaxError("Unclosed string literal")}}function Qe(){if(t(Ma))return u(Ma);if(t(Oa)){let[,v,F]=s(Oa),W=parseInt(v||F,16);return W<=55295||57344<=W?String.fromCodePoint(W):"\uFFFD"}throw new SyntaxError("Unknown escape sequence")}function Ze(){let v=n;switch(i(Li),e[n]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return ta(e.slice(v,n))}return e[n-1]===" "?ta(e.slice(v,n)):!1}function Me(v,F){return v.replace(F,"")}function ta(v){let F=v.replace(Ei,`
`),W=Ii.exec(v)[1].length;return new Rt(F,W)}}},Rt=class{constructor(e,n){this.value=e,this.length=n}};var Wi="([a-z]{2,3}|\\*)",qi="(?:-([a-z]{4}|\\*))",$i="(?:-([a-z]{2}|\\*))",Ui="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",Ni=new RegExp(`^${Wi}${qi}?${$i}?${Ui}?$`,"i"),Ae=class{constructor(e){let n=Ni.exec(e.replace(/_/g,"-"));if(!n){this.isWellFormed=!1;return}let[,t,r,i,s]=n;t&&(this.language=t.toLowerCase()),r&&(this.script=r[0].toUpperCase()+r.slice(1)),i&&(this.region=i.toUpperCase()),this.variant=s,this.isWellFormed=!0}isEqual(e){return this.language===e.language&&this.script===e.script&&this.region===e.region&&this.variant===e.variant}matches(e,n=!1,t=!1){return(this.language===e.language||n&&this.language===void 0||t&&e.language===void 0)&&(this.script===e.script||n&&this.script===void 0||t&&e.script===void 0)&&(this.region===e.region||n&&this.region===void 0||t&&e.region===void 0)&&(this.variant===e.variant||n&&this.variant===void 0||t&&e.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(e=>e!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){let e=Gi(this.toString().toLowerCase());return e?(this.language=e.language,this.script=e.script,this.region=e.region,this.variant=e.variant,!0):!1}},Wa={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},Vi=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function Gi(o){if(Object.prototype.hasOwnProperty.call(Wa,o))return new Ae(Wa[o]);let e=new Ae(o);return e.language&&Vi.includes(e.language)?(e.region=e.language.toUpperCase(),e):null}function _r(o,e,n){let t=new Set,r=new Map;for(let i of e)new Ae(i).isWellFormed&&r.set(i,new Ae(i));e:for(let i of o){let s=i.toLowerCase(),u=new Ae(s);if(u.language!==void 0){for(let c of r.keys())if(s===c.toLowerCase()){if(t.add(c),r.delete(c),n==="lookup")return Array.from(t);if(n==="filtering")continue;continue e}for(let[c,d]of r.entries())if(d.matches(u,!0,!1)){if(t.add(c),r.delete(c),n==="lookup")return Array.from(t);if(n==="filtering")continue;continue e}if(u.addLikelySubtags()){for(let[c,d]of r.entries())if(d.matches(u,!0,!1)){if(t.add(c),r.delete(c),n==="lookup")return Array.from(t);if(n==="filtering")continue;continue e}}u.clearVariants();for(let[c,d]of r.entries())if(d.matches(u,!0,!0)){if(t.add(c),r.delete(c),n==="lookup")return Array.from(t);if(n==="filtering")continue;continue e}if(u.clearRegion(),u.addLikelySubtags()){for(let[c,d]of r.entries())if(d.matches(u,!0,!1)){if(t.add(c),r.delete(c),n==="lookup")return Array.from(t);if(n==="filtering")continue;continue e}}u.clearRegion();for(let[c,d]of r.entries())if(d.matches(u,!0,!0)){if(t.add(c),r.delete(c),n==="lookup")return Array.from(t);if(n==="filtering")continue;continue e}}}return Array.from(t)}function fr(o,e,{strategy:n="filtering",defaultLocale:t}={}){let r=_r(Array.from(o??[]).map(String),Array.from(e??[]).map(String),n);if(n==="lookup"){if(t===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");r.length===0&&r.push(t)}else t&&!r.includes(t)&&r.push(t);return r}function Hi(){Object.defineProperty(Array.prototype,"reduce",{value(...o){if(o.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];let e=o[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof e!="function")throw new TypeError(`${e} is not a function`);let n=Object(this),t=n.length>>>0,r=0,i;if(o.length>=2)i=o[1];else{for(;r<t&&!(r in n);)r++;if(r>=t)throw new TypeError("Reduce of empty array with no initial value");i=n[r++]}for(;r<t;)r in n&&(i=e(i,n[r],r,n)),r++;return i}})}function Ji(){typeof window.constructor!="function"||!dr(window.constructor)||(window.Window=window.constructor)}function Ki(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value(o,e){return o[e]}}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(o,e,n){o[e]=n}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value(o,e){return e in o}}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value(o){return[...Object.getOwnPropertyNames(o),...Object.getOwnPropertySymbols(o)]}})}function br(){if(typeof Map.prototype.set!="function"){let o=Map,e=document.createElement("iframe");return e.style.display="none",document.documentElement.append(e),Map=e.contentWindow.Map,e.remove(),o}}function mr(o){o&&(Map=o)}function dr(o){let e=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof e=="string"&&e.indexOf("[native code]")>=0?Function.prototype.toString.call(o).indexOf("[native code]")>=0:!1}function qa(){(typeof Array.prototype.reduce!="function"||!dr(Array.prototype.reduce))&&Hi(),(typeof Window!="function"||!dr(Window))&&Ji(),Ki()}var Qi={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = \u062D\u0645\u0651\u0650\u0644 .swf
context-menu-copy-debug-info = \u0627\u0646\u0633\u062E \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u0646\u0642\u064A\u062D
context-menu-open-save-manager = \u0627\u0641\u062A\u062D \u0645\u062F\u064A\u0631 \u0627\u0644\u062D\u0641\u0638
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u0639\u0646 \u0645\u0644\u062D\u0642 \u0631\u064E\u0641\u0644 ({ $version })
       *[other] \u0639\u0646 \u0631\u064E\u0641\u0644 ({ $version })
    }
context-menu-hide = \u0623\u062E\u0641\u0650 \u0647\u0630\u0647 \u0627\u0644\u0642\u0627\u0626\u0645\u0629
context-menu-exit-fullscreen = \u0627\u062E\u0631\u062C \u0645\u0646 \u0648\u0636\u0639\u064A\u0629 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629
context-menu-enter-fullscreen = \u0627\u062F\u062E\u0644 \u0648\u0636\u0639\u064A\u0629 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629
context-menu-volume-controls = \u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u0627\u0644\u0635\u0648\u062A
`,"messages.ftl":`message-cant-embed =
    \u0644\u0645 \u064A\u0643\u0646 \u0631\u0641\u0644 \u0642\u0627\u062F\u0631\u064B\u0627 \u0639\u0644\u0649 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0641\u0644\u0627\u0634 \u0627\u0644\u0645\u0636\u0645\u0646\u0629 \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629.
    \u064A\u0645\u0643\u0646\u0643 \u0645\u062D\u0627\u0648\u0644\u0629 \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641 \u0641\u064A \u0639\u0644\u0627\u0645\u0629 \u062A\u0628\u0648\u064A\u0628 \u0645\u0646\u0641\u0635\u0644\u0629 \u0644\u062A\u062C\u0627\u0648\u0632 \u0647\u0630\u0647 \u0627\u0644\u0645\u0634\u0643\u0644\u0629.
message-restored-from-bfcache =
    \u0627\u0633\u062A\u0639\u0627\u062F \u0645\u062A\u0635\u0641\u062D\u0643 \u0645\u062D\u062A\u0648\u0649 \u0641\u0644\u0627\u0634 \u0647\u0630\u0627 \u0645\u0646 \u062C\u0644\u0633\u0629 \u0633\u0627\u0628\u0642\u0629.
    \u0644\u0644\u0628\u062F\u0621 \u0645\u0646 \u062C\u062F\u064A\u062F\u060C \u0623\u0639\u062F \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0641\u062D\u0629.
panic-title = \u0644\u0642\u062F \u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627 :(
more-info = \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0623\u0643\u062B\u0631
run-anyway = \u0634\u063A\u0651\u0650\u0644 \u0639\u0644\u0649 \u0623\u064A \u062D\u0627\u0644
continue = \u0627\u0633\u062A\u0645\u0631
report-bug = \u0628\u0644\u0651\u0650\u063A \u0639\u0646 \u0639\u0644\u0629
update-ruffle = \u062A\u062D\u062F\u064A\u062B \u0631\u0641\u0644
ruffle-demo = \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u062C\u0631\u064A\u0628\u064A
ruffle-desktop = \u0628\u0631\u0646\u0627\u0645\u062C \u0633\u0637\u062D \u0627\u0644\u0645\u0643\u062A\u0628
ruffle-wiki = \u0627\u0639\u0631\u0636 \u0648\u064A\u0643\u064A \u0631\u0641\u0644
enable-hardware-acceleration = \u064A\u0628\u062F\u0648 \u0623\u0646 \u062A\u0633\u0631\u064A\u0639 \u0627\u0644\u062C\u0647\u0627\u0632 \u0645\u0639\u0637\u0644. \u0639\u0644\u0649 \u0627\u0644\u0631\u063A\u0645 \u0645\u0646 \u0623\u0646 \u0631\u0641\u0644 \u0642\u062F \u064A\u0639\u0645\u0644\u060C \u0625\u0644\u0627 \u0623\u0646\u0647 \u0642\u062F \u064A\u0643\u0648\u0646 \u0628\u0637\u064A\u0626\u064B\u0627 \u062C\u062F\u064B\u0627. \u064A\u0645\u0643\u0646\u0643 \u0645\u0639\u0631\u0641\u0629 \u0643\u064A\u0641\u064A\u0629 \u062A\u0645\u0643\u064A\u0646 \u062A\u0633\u0631\u064A\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0628\u0627\u0644\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u0628\u0637 \u0623\u062F\u0646\u0627\u0647:
enable-hardware-acceleration-link = \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 - \u062A\u0633\u0631\u064A\u0639 \u0623\u062C\u0647\u0632\u0629 \u0643\u0631\u0648\u0645
view-error-details = \u0625\u0639\u0631\u0636 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062E\u0637\u0623
open-in-new-tab = \u0625\u0641\u062A\u062D \u0641\u064A \u0639\u0644\u0627\u0645\u0629 \u062A\u0628\u0648\u064A\u0628 \u062C\u062F\u064A\u062F\u0629
click-to-unmute = \u0625\u0646\u0642\u0631 \u0644\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0643\u062A\u0645
clipboard-message-title = \u0627\u0644\u0646\u0633\u062E \u0648\u0627\u0644\u0644\u0635\u0642 \u0641\u064A \u0631\u0641\u0644
clipboard-message-description =
    {$variant ->
       *[unsupported] \u0645\u062A\u0635\u0641\u062D\u0643 \u0644\u0627 \u064A\u062F\u0639\u0645 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u062D\u0627\u0641\u0638\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629\u060C
        [access-denied] \u062A\u0645 \u0631\u0641\u0636 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u062D\u0627\u0641\u0638\u0629\u060C
    } \u0644\u0643\u0646 \u064A\u0645\u0643\u0646\u0643 \u0625\u0633\u062A\u062E\u062F\u0627\u0645 \u0647\u0630\u0647 \u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A \u062F\u0627\u0626\u0645\u064B\u0627:
clipboard-message-copy = { " " } \u0644\u0644\u0646\u0633\u062E
clipboard-message-cut = { " " } \u0644\u0644\u0642\u0635
clipboard-message-paste = { " " } \u0644\u0644\u0635\u0642
error-canvas-reload = \u062A\u0639\u0630\u0631 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0645\u0639 \u0645\u064F\u0635\u064E\u064A\u0631 \u0627\u0644\u0644\u0648\u062D\u0629 \u0639\u0646\u062F\u0645\u0627 \u0627\u0633\u062A\u064F\u062E\u062F\u0650\u0645 \u0645\u064F\u0635\u064E\u064A\u0631 \u0627\u0644\u0644\u0648\u062D\u0629 \u0645\u0633\u0628\u0642\u064B\u0627.
error-file-protocol =
    \u064A\u0628\u062F\u0648 \u0623\u0646\u0643 \u062A\u0634\u063A\u0651\u0650\u0644 \u0631\u0641\u0644 \u0639\u0644\u0649 \u0627\u0644\u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 "file:".
    \u0644\u0627 \u064A\u0639\u0645\u0644 \u0647\u0630\u0627 \u0625\u0630 \u062A\u0645\u0646\u0639 \u0627\u0644\u0645\u062A\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0645\u0646 \u0627\u0644\u0639\u0645\u0644 \u0644\u0623\u0633\u0628\u0627\u0628 \u0623\u0645\u0646\u064A\u0629.
    \u0628\u062F\u0644\u064B\u0627 \u0645\u0646 \u0630\u0644\u0643\u060C \u0646\u062F\u0639\u0648\u0643 \u0625\u0644\u0649 \u0625\u0639\u062F\u0627\u062F \u062E\u0627\u062F\u0648\u0645 \u0645\u062D\u0644\u064A \u0623\u0648 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0639\u0627\u0631\u0636 \u0627\u0644\u0648\u064A\u0628 \u0623\u0648 \u062A\u0637\u0628\u064A\u0642 \u0633\u0637\u062D \u0627\u0644\u0645\u0643\u062A\u0628.
error-javascript-config =
    \u062A\u0639\u0631\u0636 \u0631\u0641\u0644 \u0625\u0644\u0649 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0628\u0633\u0628\u0628 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062E\u0627\u0637\u0626\u0629 \u0644\u062C\u0627\u0641\u0627 \u0633\u0643\u0631\u0650\u0628\u062A.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0648\u0645\u060C \u0646\u062D\u0646 \u0646\u062F\u0639\u0648\u0643 \u0625\u0644\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062E\u0637\u0623 \u0644\u0645\u0639\u0631\u0641\u0629 \u0633\u0628\u0628 \u0627\u0644\u0645\u0634\u0643\u0644\u0629.
    \u064A\u0645\u0643\u0646\u0643 \u0623\u064A\u0636\u064B\u0627 \u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0648\u064A\u0643\u064A \u0631\u0641\u0644 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-wasm-not-found =
    \u0641\u0634\u0644 \u0631\u0641\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0643\u0648\u0646 \u0627\u0644\u0645\u0644\u0641 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0648\u0645\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646 \u0627\u0644\u0645\u0644\u0641 \u0642\u062F \u0631\u064F\u0641\u0650\u0639 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D.
    \u0625\u0630\u0627 \u0627\u0633\u062A\u0645\u0631\u062A \u0627\u0644\u0645\u0634\u0643\u0644\u0629\u060C \u0642\u062F \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0625\u0639\u062F\u0627\u062F "publicPath": \u0631\u062C\u0627\u0621\u064B \u0631\u0627\u062C\u0639 \u0648\u064A\u0643\u064A \u0631\u0641\u0644 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-wasm-mime-type =
    \u0648\u0627\u062C\u0647 \u0631\u0641\u0644 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u062A\u0647\u064A\u0626\u0629.
    \u062E\u0627\u062F\u0648\u0645 \u0627\u0644\u0648\u064A\u0628 \u0647\u0630\u0627 \u0644\u0627 \u064A\u062E\u062F\u0645 \u0645\u0644\u0641\u0627\u062A ". wasm" \u0645\u0639 \u0646\u0648\u0639 MIME \u0627\u0644\u0635\u062D\u064A\u062D.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0648\u064A\u0643\u064A \u0631\u0641\u0644 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-invalid-swf =
    \u0644\u0627 \u064A\u0645\u0643\u0646 \u0644\u0631\u0641\u0644 \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0637\u0644\u0648\u0628.
    \u0627\u0644\u0633\u0628\u0628 \u0627\u0644\u0623\u0643\u062B\u0631 \u0625\u062D\u062A\u0645\u0627\u0644\u0627\u064B \u0647\u0648 \u0623\u0646 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u0644\u064A\u0633 \u0635\u0627\u0644\u062D\u064B\u0627.
error-swf-fetch =
    \u0641\u0634\u0644 \u0631\u0641\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641 \u0641\u0644\u0627\u0634 SWF.
    \u0627\u0644\u0633\u0628\u0628 \u0627\u0644\u0623\u0643\u062B\u0631 \u0627\u062D\u062A\u0645\u0627\u0644\u064B\u0627 \u0647\u0648 \u0623\u0646 \u0627\u0644\u0645\u0644\u0641 \u0644\u0645 \u064A\u0639\u062F \u0645\u0648\u062C\u0648\u062F\u064B\u0627\u060C \u0644\u0630\u0644\u0643 \u0644\u0627 \u064A\u0648\u062C\u062F \u0634\u064A\u0621 \u0644\u064A\u062D\u0645\u0644\u0647 \u0631\u0641\u0644.
    \u062D\u0627\u0648\u0644 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-swf-cors =
    \u0641\u0634\u0644 \u0631\u0641\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641 \u0641\u0644\u0627\u0634 SWF.
    \u0645\u0646 \u0627\u0644\u0645\u062D\u062A\u0645\u0644 \u0623\u0646 \u0625\u062D\u0636\u0627\u0631 \u0627\u0644\u0645\u0644\u0641 \u0642\u062F \u062D\u064F\u0638\u0650\u0631 \u0628\u0648\u0627\u0633\u0637\u0629 \u0633\u064A\u0627\u0633\u0629 CORS.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0631\u0641\u0644 \u0648\u064A\u0643\u064A \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-wasm-cors =
    \u0641\u0634\u0644 \u0631\u0641\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0643\u0648\u0646 \u0645\u0644\u0641 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.
    \u0645\u0646 \u0627\u0644\u0645\u062D\u062A\u0645\u0644 \u0623\u0646 \u0625\u062D\u0636\u0627\u0631 \u0627\u0644\u0645\u0644\u0641 \u0642\u062F \u062D\u064F\u0638\u0650\u0631 \u0628\u0648\u0627\u0633\u0637\u0629 \u0633\u064A\u0627\u0633\u0629 CORS.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0631\u0641\u0644 \u0648\u064A\u0643\u064A \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-wasm-invalid =
    \u0648\u0627\u062C\u0647 \u0631\u0641\u0644 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u062A\u0647\u064A\u0626\u0629.
    \u064A\u0628\u062F\u0648 \u0623\u0646 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0644\u0641\u0627\u062A \u0645\u0641\u0642\u0648\u062F\u0629 \u0623\u0648 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629 \u0644\u062A\u0634\u063A\u064A\u0644 \u0631\u0641\u0644.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0648\u064A\u0643\u064A \u0631\u0641\u0644 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-wasm-download =
    \u0648\u0627\u062C\u0647 \u0631\u0641\u0644 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u062A\u0647\u0627 \u0627\u0644\u062A\u0647\u064A\u0626\u0629.
    \u0647\u0630\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u062D\u0644 \u0646\u0641\u0633\u0647 \u0641\u064A \u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0623\u062D\u064A\u0627\u0646\u060C \u0644\u0630\u0644\u0643 \u064A\u0645\u0643\u0646\u0643 \u0645\u062D\u0627\u0648\u0644\u0629 \u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0641\u062D\u0629.
    \u0648\u0625\u0644\u0627 \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0645\u062F\u064A\u0631 \u0627\u0644\u0645\u0648\u0642\u0639.
error-wasm-disabled-on-edge =
    \u0641\u0634\u0644 Ruffle \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0643\u0648\u0646 \u0627\u0644\u0645\u0644\u0641 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.
    \u0644\u0625\u0635\u0644\u0627\u062D \u0647\u0630\u0647 \u0627\u0644\u0645\u0634\u0643\u0644\u0629\u060C \u062D\u0627\u0648\u0644 \u0641\u062A\u062D \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0645\u062A\u0635\u0641\u062D\u0643\u060C \u062B\u0645 \u0625\u0646\u0642\u0631 \u0641\u0648\u0642 "\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629\u060C \u0627\u0644\u0628\u062D\u062B\u060C \u0627\u0644\u062E\u062F\u0645\u0627\u062A"\u060C \u0648\u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0644\u0623\u0633\u0641\u0644\u060C \u0648\u0625\u064A\u0642\u0627\u0641 "\u062A\u0639\u0632\u064A\u0632 \u0623\u0645\u0627\u0646\u0643 \u0639\u0644\u0649 \u0627\u0644\u0648\u064A\u0628".
    \u0647\u0630\u0627 \u0633\u064A\u0633\u0645\u062D \u0644\u0645\u062A\u0635\u0641\u062D\u0643 \u0628\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641\u0627\u062A ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629.
    \u0625\u0630\u0627 \u0625\u0633\u062A\u0645\u0631\u062A \u0627\u0644\u0645\u0634\u0643\u0644\u0629\u060C \u0642\u062F \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0625\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u062A\u0635\u0641\u062D \u0623\u062E\u0631.
error-wasm-unsupported-browser =
    \u0644\u0627 \u064A\u062F\u0639\u0645 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0630\u064A \u062A\u0633\u062A\u062E\u062F\u0645\u0647 \u0627\u0645\u062A\u062F\u0627\u062F\u0627\u062A WebAssembly \u0627\u0644\u0630\u064A \u064A\u062A\u0637\u0644\u0628\u0647 \u0631\u0641\u0644 \u0644\u062A\u0634\u063A\u064A\u0644\u0647.
    \u0631\u062C\u0627\u0621\u064B \u0627\u0646\u062A\u0642\u0644 \u0644\u0645\u062A\u0635\u0641\u062D \u062F\u0627\u0639\u0645.
    \u064A\u0645\u0643\u0646\u0643 \u0625\u064A\u062C\u0627\u062F \u0644\u0627\u0626\u062D\u0629 \u0644\u0644\u0645\u062A\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u062F\u0627\u0639\u0645\u0629 \u0641\u064A \u0627\u0644\u0648\u064A\u0643\u064A.
error-javascript-conflict =
    \u0648\u0627\u062C\u0647 \u0631\u0641\u0644 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u062A\u0647\u064A\u0626\u0629.
    \u064A\u0628\u062F\u0648 \u0623\u0646 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u062A\u0633\u062A\u062E\u062F\u0645 \u0643\u0648\u062F \u062C\u0627\u0641\u0627 \u0633\u0643\u0631\u064A\u0628\u062A \u0627\u0644\u0630\u064A \u064A\u062A\u0639\u0627\u0631\u0636 \u0645\u0639 \u0631\u0641\u0644.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u0641\u0625\u0646\u0646\u0627 \u0646\u062F\u0639\u0648\u0643 \u0625\u0644\u0649 \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0639\u0644\u0649 \u0635\u0641\u062D\u0629 \u0641\u0627\u0631\u063A\u0629.
error-javascript-conflict-outdated = \u064A\u0645\u0643\u0646\u0643 \u0623\u064A\u0636\u064B\u0627 \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u062D\u0645\u064A\u0644 \u0646\u0633\u062E\u0629 \u0623\u062D\u062F\u062B \u0645\u0646 \u0631\u0641\u0644 \u0627\u0644\u062A\u064A \u0642\u062F \u062A\u062D\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 (\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0642\u062F\u064A\u0645\u0629: { $buildDate }).
error-csp-conflict =
    \u0648\u0627\u062C\u0647 Ruffle \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u062A\u0647\u064A\u0626\u0629.
    \u0644\u0627 \u062A\u0633\u0645\u062D \u0633\u064A\u0627\u0633\u0629 \u0623\u0645\u0627\u0646 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0644\u062E\u0627\u062F\u0645 \u0627\u0644\u0648\u064A\u0628 \u0647\u0630\u0627 \u0628\u062A\u0634\u063A\u064A\u0644 \u0645\u0643\u0648\u0646 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0648\u064A\u0643\u064A Ruffle \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-unknown =
    \u0648\u0627\u062C\u0647 \u0631\u0641\u0644 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0639\u0631\u0636 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0641\u0644\u0627\u0634 \u0647\u0630\u0627.
    { $outdated ->
        [true] \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u062D\u0645\u064A\u0644 \u0625\u0635\u062F\u0627\u0631 \u0623\u062D\u062F\u062B \u0645\u0646 \u0631\u0641\u0644 (\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0642\u062F\u064A\u0645\u0629: { $buildDate }).
       *[false] \u0644\u064A\u0633 \u0645\u0646 \u0627\u0644\u0645\u0641\u062A\u0631\u0636 \u0623\u0646 \u064A\u062D\u062F\u062B \u0647\u0630\u0627\u060C \u0644\u0630\u0644\u0643 \u0646\u062D\u0646 \u0646\u0642\u062F\u0631 \u062D\u0642\u064B\u0627 \u0625\u0630\u0627 \u0628\u0644\u063A\u062A \u0639\u0646 \u0627\u0644\u062E\u0637\u0623!
    }
`,"save-manager.ftl":`save-delete-prompt = \u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \u0645\u0644\u0641 \u0627\u0644\u062D\u0641\u0638 \u0647\u0630\u0627\u061F
save-reload-prompt =
    \u0627\u0644\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0648\u062D\u064A\u062F\u0629 \u0644\u0640 { $action ->
        [delete] \u062D\u0630\u0641
       *[replace] \u0625\u0633\u062A\u0628\u062F\u0627\u0644
    } \u0645\u0644\u0641 \u0627\u0644\u062D\u0641\u0638 \u0647\u0630\u0627 \u062F\u0648\u0646 \u062A\u0639\u0627\u0631\u0636 \u0645\u062D\u062A\u0645\u0644 \u0647\u064A \u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629. \u0647\u0644 \u062A\u0631\u063A\u0628 \u0641\u064A \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0639\u0644\u0649 \u0623\u064A \u062D\u0627\u0644\u061F
save-download = \u062D\u0645\u0651\u0644
save-replace = \u0625\u0633\u062A\u0628\u062F\u0644
save-delete = \u0625\u062D\u0630\u0641
save-backup-all = \u062D\u0645\u0651\u0644 \u062C\u0645\u064A\u0639 \u0645\u0644\u0641\u0627\u062A \u0627\u0644\u062D\u0641\u0638
`,"volume-controls.ftl":`volume-controls-mute = \u0625\u0643\u062A\u0645
volume-controls-unmute = \u0623\u0644\u063A\u0650 \u0627\u0644\u0643\u062A\u0645
`},"bs-BA":{"context_menu.ftl":`context-menu-download-swf = Preuzmite SWF datoteku
context-menu-copy-debug-info = Kopiraj informacije o otklanjanju gre\u0161aka
context-menu-open-save-manager = Otvori upravitelj spremanja
context-menu-about-ruffle =
    { $flavor ->
    [extension] O ekstenziji Ruffle-a ({ $version })
    *[other] O Ruffle-u ({ $version })
    }
context-menu-hide = Sakrij ovaj meni
context-menu-exit-fullscreen = Izlaz iz re\u017Eima punog ekrana
context-menu-enter-fullscreen = Pre\u0111i na cijeli ekran
context-menu-volume-controls = Kontrole ja\u010Dine zvuka
`,"messages.ftl":`message-cant-embed =
    Ruffle nije mogao pokrenuti Flash ugra\u0111en na ovoj stranici.
    Mo\u017Eete poku\u0161ati otvoriti datoteku u zasebnoj kartici kako biste izbjegli ovaj problem.
message-restored-from-bfcache =
    Va\u0161 preglednik je vratio ovaj Flash sadr\u017Eaj iz prethodne sesije.
    Molimo vas da ponovo u\u010Ditate stranicu za novi po\u010Detak.
panic-title = Ne\u0161to je po\u0161lo po zlu :(
more-info = Dodatne informacije
run-anyway = Ipak pokreni
continue = Nastavi
report-bug = Prijavi gre\u0161ku
update-ruffle = A\u017Euriraj Ruffle
ruffle-demo = Web probna verzija
ruffle-desktop = Desktop aplikacija
ruffle-wiki = Pogledaj Ruffle Wiki
enable-hardware-acceleration = Izgleda da je hardversko ubrzanje onemogu\u0107eno. Iako Ruffle mo\u017Eda radi, mogu\u0107e je da je vrlo spor. Mo\u017Eete saznati kako omogu\u0107iti hardversko ubrzanje slijede\u0107i link ispod:
enable-hardware-acceleration-link = \u010Cesto postavljana pitanja - Hardversko ubrzanje u Chromeu
view-error-details = Prika\u017Ei detalje gre\u0161ke
open-in-new-tab = Otvori u novoj kartici
click-to-unmute = Kliknite da biste uklju\u010Dili zvuk
clipboard-message-title = Kopiranje i naljepljivanje u Ruffle-u
clipboard-message-description =
    { $variant ->
    *[unsupported] Va\u0161 preglednik ne podr\u017Eava potpuni pristup me\u0111uspremniku,
    [access-denied] Pristup me\u0111uspremniku je odbijen,
    } ali uvijek mo\u017Eete koristiti ove pre\u010Dice:
clipboard-message-copy = { " " } za kopiranje
clipboard-message-cut = { " " } za isijecanje
clipboard-message-paste = { " " } za lijepljenje
error-canvas-reload = Nije mogu\u0107e ponovo u\u010Ditati renderer kada je renderer ve\u0107 u upotrebi.
error-file-protocol =
    Izgleda da koristite Ruffle na protokolu "file:".
    Ovo ne funkcioni\u0161e jer preglednici blokiraju mnoge funkcije iz sigurnosnih razloga.
    Umjesto toga, preporu\u010Dujemo vam da postavite lokalni server ili koristite web probnu verziju ili aplikaciju.
error-javascript-config =
    Ruffle je nai\u0161ao na ozbiljan problem zbog pogre\u0161ne konfiguracije JavaScript-a.
    Ako ste administrator servera, preporu\u010Dujemo vam da provjerite detalje gre\u0161ke kako biste saznali koji parametar uzrokuje problem. Tako\u0111er mo\u017Eete konsultovati Ruffle wiki za pomo\u0107.
error-wasm-not-found =
    Ruffle nije uspio u\u010Ditati potrebnu komponentu datoteke ".wasm".
    Ako ste administrator servera, provjerite je li datoteka ispravno otpremljena.
    Ako problem i dalje postoji, mo\u017Eda \u0107ete morati koristiti postavku "publicPath": obratite se Ruffle wiki stranici za pomo\u0107.
error-wasm-mime-type =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Ovaj web server ne poslu\u017Euje ".wasm" datoteke s ispravnim MIME tipom.
    Ako ste administrator servera, molimo vas da se obratite Ruffle wiki stranici za pomo\u0107.
error-invalid-swf =
    Ruffle ne mo\u017Ee analizirati tra\u017Eenu datoteku.
    Najvjerovatniji razlog je taj \u0161to tra\u017Eena datoteka nije va\u017Ee\u0107i SWF.
error-swf-fetch =
    Ruffle nije uspio u\u010Ditati Flash SWF datoteku.
    Najvjerovatniji razlog je taj \u0161to datoteka vi\u0161e ne postoji, tako da Ruffle nema \u0161ta u\u010Ditati.
    Poku\u0161ajte kontaktirati administratora web stranice za pomo\u0107.
error-swf-cors =
    Ruffle nije uspio u\u010Ditati Flash SWF datoteku.
    Pristup za preuzimanje je vjerovatno blokiran CORS politikom.
    Ako ste administrator servera, obratite se Ruffle wiki stranici za pomo\u0107.
error-wasm-cors =
    Ruffle nije uspio u\u010Ditati potrebnu komponentu datoteke ".wasm".
    Pristup dohvatu je vjerovatno blokiran CORS politikom.
    Ako ste administrator servera, obratite se Ruffle wiki stranici za pomo\u0107.
error-wasm-invalid =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Izgleda da ovoj stranici nedostaju ili su datoteke neva\u017Ee\u0107e za pokretanje Rufflea.
    Ako ste administrator servera, pogledajte Ruffle wiki za pomo\u0107.
error-wasm-download =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Ovo se \u010Desto mo\u017Ee rije\u0161iti jednostavnim ponovnim u\u010Ditavanjem stranice.
    U suprotnom, kontaktirajte administratora stranice.
error-wasm-disabled-on-edge =
    Ruffle nije uspio u\u010Ditati potrebnu komponentu datoteke ".wasm".
    Da biste rije\u0161ili ovaj problem, poku\u0161ajte otvoriti postavke preglednika, kliknuti na "Privatnost, pretraga i usluge", pomaknuti se prema dolje i isklju\u010Diti "Pobolj\u0161anje web sigurnosti".
    Ovo \u0107e omogu\u0107iti va\u0161em pregledniku da u\u010Dita potrebne datoteke ".wasm".
    Ako problem i dalje postoji, mo\u017Eda \u0107ete morati koristiti drugi preglednik.
error-wasm-unsupported-browser =
    Preglednik koji koristite ne podr\u017Eava WebAssembly ekstenzije potrebne za rad Ruffle-a.
    Molimo vas da pre\u0111ete na podr\u017Eani preglednik.
    Popis podr\u017Eanih preglednika mo\u017Eete prona\u0107i na Wiki stranici.
error-javascript-conflict =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Izgleda da ova stranica koristi JavaScript kod koji je u sukobu sa Ruffleom.
    Ako ste administrator servera, pozivamo vas da poku\u0161ate otpremiti datoteku na praznu stranicu.
error-javascript-conflict-outdated = Tako\u0111er mo\u017Eete poku\u0161ati prenijeti noviju verziju Rufflea koja bi mogla rije\u0161iti problem (trenutna verzija je zastarjela: { $buildDate }).
error-csp-conflict =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Politike sigurnosti sadr\u017Eaja ovog web servera ne dozvoljavaju pokretanje potrebne komponente ".wasm".
    Ako ste administrator servera, obratite se Ruffle wiki stranici za pomo\u0107.
error-unknown =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja prikazivanja ovog Flash sadr\u017Eaja.
    { $outdated ->
    [true] Ako ste administrator servera, poku\u0161ajte prenijeti noviju verziju Rufflea (trenutna verzija je zastarjela: { $buildDate }).
    *[false] Ovo se ne bi trebalo dogoditi, pa bismo vam bili jako zahvalni ako biste prijavili gre\u0161ku!
    }
`,"save-manager.ftl":`save-delete-prompt = Jeste li sigurni da \u017Eelite izbrisati ovu sa\u010Duvanu datoteku?
save-reload-prompt =
    Jedini na\u010Din da { $action ->
    [delete] izbri\u0161ete
    *[replace] zamijenite
    } ovu sa\u010Duvanu datoteku bez potencijalnog konflikta je da ponovo u\u010Ditate ovaj sadr\u017Eaj. \u017Delite li ipak nastaviti?
save-download = Preuzmite
save-replace = Zamijeni
save-delete = Izbri\u0161i
save-backup-all = Preuzmi sve sa\u010Duvane datoteke
`,"volume-controls.ftl":`volume-controls-mute = Isklju\u010Di zvuk
volume-controls-unmute = Uklju\u010Di zvuk
`},"ca-ES":{"context_menu.ftl":`context-menu-download-swf = Baixa el fitxer SWF
context-menu-copy-debug-info = Copia la informaci\xF3 de depuraci\xF3
context-menu-open-save-manager = Obre el gestor d'emmagatzematge
context-menu-about-ruffle =
    { $flavor ->
        [extension] Quant a l'extensi\xF3 de Ruffle ({ $version })
       *[other] Quant a Ruffle ({ $version })
    }
context-menu-hide = Amaga aquest men\xFA
context-menu-exit-fullscreen = Surt de la pantalla completa
context-menu-enter-fullscreen = Pantalla completa
context-menu-volume-controls = Controls de volum
`,"messages.ftl":`message-cant-embed =
    Ruffle no ha pogut executar el contingut Flash incrustat en aquesta p\xE0gina.
    Podeu provar d'obrir el fitxer en una pestanya a part per evitar aquest problema.
panic-title = Alguna cosa ha fallat :(
more-info = M\xE9s informaci\xF3
run-anyway = Reprodueix igualment
continue = Continua
report-bug = Informa d'un error
update-ruffle = Actualitza Ruffle
ruffle-demo = Demostraci\xF3 web
ruffle-desktop = Aplicaci\xF3 d'escriptori
ruffle-wiki = Obre la wiki de Ruffle
enable-hardware-acceleration-link = FAQ - Acceleraci\xF3 per Hardware a Chrome
view-error-details = Mostra detalls de l'error
open-in-new-tab = Obre en una pestanya nova
click-to-unmute = Feu clic per activar el so
clipboard-message-title = Copiar i enganxar en Ruffle
error-file-protocol =
    Sembla que esteu executant Ruffle al protocol "file:".
    Aix\xF2 no funcionar\xE0 perqu\xE8 els navegadors bloquegen moltes caracter\xEDstiques per raons de seguretat. En comptes d'aix\xF2, us suggerim que configureu un servidor local o b\xE9 utilitzeu la demostraci\xF3 web o l'aplicaci\xF3 d'escriptori.
error-javascript-config =
    Ruffle ha topat amb un problema greu a causa d'una configuraci\xF3 JavaScript err\xF2nia.
    Si sou l'administrador del servidor, us suggerim que comproveu els detalls de l'error per determinar el par\xE0metre culpable.
    Tamb\xE9 podeu consultar la wiki del Ruffle per obtenir ajuda.
error-wasm-not-found =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Si sou l'administrador del servidor, si us plau, comproveu que el fitxer ha estat carregat correctament.
    Si el problema continua, \xE9s possible que h\xE0giu d'utilitzar el par\xE1metre "publicPath": us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-mime-type =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Aquest servidor no est\xE0 servint els fitxers ".wasm" amb el tipus MIME adequat.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-invalid-swf =
    Ruffle no ha pogut llegir el fitxer sol\xB7licitat.
    La ra\xF3 m\xE9s probable \xE9s que no sigui un fitxer SWF v\xE0lid.
error-swf-fetch =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    La ra\xF3 m\xE9s probable \xE9s que el fitxer ja no existeixi, aix\xED que no hi ha res que el Ruffle pugui carregar.
    Proveu de contactar a l'administrador del lloc per obtenir ajuda.
error-swf-cors =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    \xC9s probable que l'acc\xE9s a la c\xE0rrega hagi estat denegat per una pol\xEDtica CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-cors =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    \xC9s probable que l'acc\xE9s a la c\xE0rrega hagi estat denegat per una pol\xEDtica CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-invalid =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que a aquest lloc li manquen fitxers o aquests no s\xF3n v\xE0lids per a l'execuci\xF3 de Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-download =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Aix\xF2 sovint aix\xF2 pot resoldre's sol, aix\xED que podeu provar de recarregar la p\xE0gina.
    En cas contrari, us preguem que contacteu l'administrador del lloc.
error-wasm-disabled-on-edge =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Per a arreglar-ho, proveu d'obrir els par\xE0metres del navegador, feu clic sobre "Privadesa, cerca i serveis", i desactiveu "Prevenci\xF3 de seguiment".
    Aix\xF2 permetr\xE0 que el vostre navegador carregui els fitxers ".wasm" necessaris.
    Si el problema continua, possiblement haureu d'utilitzar un altre navegador.
error-javascript-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que aquest lloc fa servir codi JavaScript que entra en conflicte amb Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-javascript-conflict-outdated = Tamb\xE9 podeu provar de carregar una versi\xF3 m\xE9s recent de Ruffle que podria resoldre el problema (la compilaci\xF3 actual est\xE0 desactualitzada: { $buildDate }).
error-csp-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    La pol\xEDtica de seguretat del contingut (CSP) no permet l'execuci\xF3 del component ".wasm" necessari.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-unknown =
    Ruffle ha topat amb un problema greu mentre provava de mostrar aquest contingut Flash.
    { $outdated ->
        [true] Si sou l'administrador del servidor, us preguem que proveu de carregar una versi\xF3 m\xE9s recent de Ruffle (la compilaci\xF3 actual est\xE0 desactualitzada: { $buildDate }).
       *[false] Aix\xF2 no hauria d'haver passat, aix\xED que us agrair\xEDem molt que n'inform\xE9ssiu l'error!
    }
`,"save-manager.ftl":`save-delete-prompt = Segur que vols esborrar aquest fitxer desat?
save-reload-prompt =
    L'\xFAnica forma d{ $action ->
        [delete] 'eliminar
       *[replace] e substituir
    } aquest fitxer desat sense crear un potencial conflicte \xE9s recarregant el contingut. Voleu continuar igualment?
save-download = Baixa
save-replace = Substitueix
save-delete = Elimina
save-backup-all = Baixa tots els fitxers desats
`,"volume-controls.ftl":`volume-controls-mute = Silenci
`},"cs-CZ":{"context_menu.ftl":`context-menu-download-swf = St\xE1hnout SWF
context-menu-copy-debug-info = Zkop\xEDrovat debug info
context-menu-open-save-manager = Otev\u0159\xEDt spr\xE1vce ulo\u017Een\xED
context-menu-about-ruffle =
    { $flavor ->
         [extension] O Ruffle roz\u0161\xED\u0159en\xED ({ $version })
        *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skr\xFDt menu
context-menu-exit-fullscreen = Ukon\u010Dit re\u017Eim cel\xE9 obrazovky
context-menu-enter-fullscreen = P\u0159ej\xEDt do re\u017Eimu cel\xE9 obrazovky
context-menu-volume-controls = Ovl\xE1d\xE1n\xED hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohl spustit Flash vlo\u017Een\xFD na t\xE9to str\xE1nce.
    M\u016F\u017Eete se pokusit otev\u0159\xEDt soubor na samostatn\xE9 kart\u011B, abyste se vyhnuli tomuto probl\xE9mu.
message-restored-from-bfcache =
    V\xE1\u0161 prohl\xED\u017Ee\u010D obnovil tento Flash obsah z p\u0159edchoz\xED relace.
    Chcete-li za\u010D\xEDt znovu, znovu na\u010Dt\u011Bte str\xE1nku.
panic-title = N\u011Bco se pokazilo :(
more-info = Dal\u0161\xED informace
run-anyway = P\u0159esto spustit
continue = Pokra\u010Dovat
report-bug = Nahl\xE1sit chybu
update-ruffle = Aktualizovat Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopov\xE1 aplikace
ruffle-wiki = Zobrazit Ruffle Wiki
enable-hardware-acceleration = Zd\xE1 se, \u017Ee hardwarov\xE1 akcelerace je vypnut\xE1. I kdy\u017E Ruffle funguje spr\xE1vn\u011B, m\u016F\u017Ee b\xFDt nep\u0159im\u011B\u0159en\u011B pomal\xFD. Jak povolit hardwarovou akceleraci zjist\xEDte na tomto odkazu:
enable-hardware-acceleration-link = \u010Cast\xE9 dotazy - Hardwarov\xE1 akcelerace Chrome
view-error-details = Zobrazit podrobnosti o chyb\u011B
open-in-new-tab = Otev\u0159\xEDt na nov\xE9 kart\u011B
click-to-unmute = Kliknut\xEDm zru\u0161\xEDte ztlumen\xED
clipboard-message-title = Kop\xEDrov\xE1n\xED a vkl\xE1d\xE1n\xED v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] V\xE1\u0161 prohl\xED\u017Ee\u010D nepodporuje pln\xFD p\u0159\xEDstup ke schr\xE1nce,
        [access-denied] P\u0159\xEDstup ke schr\xE1nce byl odep\u0159en,
    } ale m\xEDsto toho m\u016F\u017Eete v\u017Edy pou\u017E\xEDt tyto zkratky:
clipboard-message-copy = { " " } pro kop\xEDrov\xE1n\xED
clipboard-message-cut = { " " } pro vyst\u0159ihov\xE1n\xED
clipboard-message-paste = { " " } pro vkl\xE1d\xE1n\xED
error-canvas-reload = Nelze znovu na\u010D\xEDst pomoc\xED vykreslova\u010De pl\xE1tna, pokud je vykreslova\u010D pl\xE1tna ji\u017E pou\u017E\xEDv\xE1n.
error-file-protocol =
    Zd\xE1 se, \u017Ee pou\u017E\xEDv\xE1te Ruffle na protokolu "file:".
    To nen\xED mo\u017En\xE9, proto\u017Ee prohl\xED\u017Ee\u010De blokuj\xED fungov\xE1n\xED mnoha funkc\xED z bezpe\u010Dnostn\xEDch d\u016Fvod\u016F.
    Nam\xEDsto toho v\xE1m doporu\u010Dujeme nastavit lok\xE1ln\xED server nebo pou\u017E\xEDt web demo \u010Di desktopovou aplikaci.
error-javascript-config =
    Ruffle narazil na probl\xE9m v d\u016Fsledku nespr\xE1vn\xE9 konfigurace JavaScriptu.
    Pokud jste spr\xE1vcem serveru, doporu\u010Dujeme v\xE1m zkontrolovat podrobnosti o chyb\u011B, abyste zjistili, kter\xFD parametr je vadn\xFD.
    Pomoc m\u016F\u017Eete z\xEDskat tak\xE9 na wiki Ruffle.
error-wasm-not-found =
    Ruffle se nepoda\u0159ilo na\u010D\xEDst po\u017Eadovanou komponentu souboru \u201E.wasm\u201C.
    Pokud jste spr\xE1vcem serveru, zkontrolujte, zda byl soubor spr\xE1vn\u011B nahr\xE1n.
    Pokud probl\xE9m p\u0159etrv\xE1v\xE1, mo\u017En\xE1 budete muset pou\u017E\xEDt nastaven\xED \u201EpublicPath\u201C: pomoc naleznete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na probl\xE9m p\u0159i pokusu o inicializaci.
    Tento webov\xFD server neposkytuje soubory \u201E.wasm\u201C se spr\xE1vn\xFDm typem MIME.
    Pokud jste spr\xE1vcem serveru, n\xE1pov\u011Bdu najdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nem\u016F\u017Ee zpracovat po\u017Eadovan\xFD soubor.
    Nejpravd\u011Bpodobn\u011Bj\u0161\xEDm d\u016Fvodem je, \u017Ee po\u017Eadovan\xFD soubor nen\xED platn\xFDm souborem SWF.
error-swf-fetch =
    Ruffle se nepoda\u0159ilo na\u010D\xEDst SWF soubor Flash.
    Nejpravd\u011Bpodobn\u011Bj\u0161\xEDm d\u016Fvodem je, \u017Ee soubor ji\u017E neexistuje, tak\u017Ee Ruffle nem\xE1 co na\u010D\xEDst.
    Zkuste po\u017E\xE1dat o pomoc spr\xE1vce webu.
error-swf-cors =
    Ruffle se nepoda\u0159ilo na\u010D\xEDst SWF soubor Flash.
    P\u0159\xEDstup k na\u010D\xEDt\xE1n\xED byl pravd\u011Bpodobn\u011B zablokov\xE1n politikou CORS.
    Pokud jste spr\xE1vcem serveru, n\xE1pov\u011Bdu najdete na Ruffle wiki.
error-wasm-cors =
    Ruffle se nepoda\u0159ilo na\u010D\xEDst po\u017Eadovanou komponentu souboru \u201E.wasm\u201C.
    P\u0159\xEDstup k na\u010D\xEDt\xE1n\xED byl pravd\u011Bpodobn\u011B zablokov\xE1n politikou CORS.
    Pokud jste spr\xE1vcem serveru, n\xE1pov\u011Bdu najdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na probl\xE9m p\u0159i pokusu o inicializaci.
    Zd\xE1 se, \u017Ee na t\xE9to str\xE1nce chyb\xED nebo jsou neplatn\xE9 soubory ke spu\u0161t\u011Bn\xED Ruffle.
    Pokud jste spr\xE1vcem serveru, n\xE1pov\u011Bdu najdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na probl\xE9m p\u0159i pokusu o inicializaci.
    Probl\xE9m se m\u016F\u017Ee vy\u0159e\u0161it i s\xE1m, tak\u017Ee m\u016F\u017Eete zkusit str\xE1nku na\u010D\xEDst znovu.
    V opa\u010Dn\xE9m p\u0159\xEDpad\u011B kontaktujte administr\xE1tora str\xE1nky.
error-wasm-disabled-on-edge =
    Ruffle se nepoda\u0159ilo na\u010D\xEDst po\u017Eadovanou komponentu souboru \u201E.wasm\u201C.
    Chcete-li tento probl\xE9m vy\u0159e\u0161it, zkuste otev\u0159\xEDt nastaven\xED prohl\xED\u017Ee\u010De, klikn\u011Bte na polo\u017Eku \u201EOchrana osobn\xEDch \xFAdaj\u016F, vyhled\xE1v\xE1n\xED a slu\u017Eby\u201C, p\u0159ejd\u011Bte dol\u016F a vypn\u011Bte mo\u017Enost \u201EZvy\u0161te svou bezpe\u010Dnost na webu\u201C.
    Va\u0161emu prohl\xED\u017Ee\u010Di to umo\u017En\xED na\u010D\xEDst po\u017Eadovan\xE9 soubory \u201E.wasm\u201C.
    Pokud probl\xE9m p\u0159etrv\xE1v\xE1, budete mo\u017En\xE1 muset pou\u017E\xEDt jin\xFD prohl\xED\u017Ee\u010D.
error-wasm-unsupported-browser =
    Prohl\xED\u017Ee\u010D, kter\xFD pou\u017E\xEDv\xE1te, nepodporuje roz\u0161\xED\u0159en\xED WebAssembly, kter\xE9 Ruffle vy\u017Eaduje ke spu\u0161t\u011Bn\xED.
    P\u0159ejd\u011Bte na podporovan\xFD prohl\xED\u017Ee\u010D.
    Seznam podporovan\xFDch prohl\xED\u017Ee\u010D\u016F naleznete na Wiki.
error-javascript-conflict =
    Ruffle narazil na probl\xE9m p\u0159i pokusu o inicializaci.
    Zd\xE1 se, \u017Ee tato str\xE1nka pou\u017E\xEDv\xE1 k\xF3d JavaScript, kter\xFD je v konfliktu s Ruffle.
    Pokud jste spr\xE1vcem serveru, doporu\u010Dujeme v\xE1m zkusit na\u010D\xEDst soubor na pr\xE1zdnou str\xE1nku.
error-javascript-conflict-outdated = M\u016F\u017Eete se tak\xE9 pokusit nahr\xE1t nov\u011Bj\u0161\xED verzi Ruffle, kter\xE1 m\u016F\u017Ee dan\xFD probl\xE9m vy\u0159e\u0161it (aktu\xE1ln\xED build je zastaral\xFD: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na probl\xE9m p\u0159i pokusu o inicializaci.
    Z\xE1sady zabezpe\u010Den\xED obsahu tohoto webov\xE9ho serveru nepovoluj\xED spu\u0161t\u011Bn\xED po\u017Eadovan\xE9 komponenty \u201E.wasm\u201C.
    Pokud jste spr\xE1vcem serveru, n\xE1pov\u011Bdu najdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na probl\xE9m p\u0159i pokusu zobrazit tento Flash obsah.
    { $outdated ->
          [true] Pokud jste spr\xE1vcem serveru, zkuste nahr\xE1t nov\u011Bj\u0161\xED verzi Ruffle (aktu\xE1ln\xED build je zastaral\xFD: { $buildDate }).
         *[false] Toto by se nem\u011Blo st\xE1t, tak\u017Ee bychom opravdu ocenili, kdybyste mohli nahl\xE1sit chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Opravdu chcete odstranit tento soubor s ulo\u017Een\xFDmi pozicemi?
save-reload-prompt =
    Jedin\xFD zp\u016Fsob, jak { $action ->
          [delete] vymazat
         *[replace] nahradit
    } tento soubor s ulo\u017Een\xFDmi pozicemi bez potenci\xE1ln\xEDho konfliktu je op\u011Btovn\xE9 na\u010Dten\xED tohoto obsahu. Chcete p\u0159esto pokra\u010Dovat?
save-download = St\xE1hnout
save-replace = Nahradit
save-delete = Vymazat
save-backup-all = St\xE1hnout v\u0161echny soubory s ulo\u017Een\xFDmi pozicemi
`,"volume-controls.ftl":`volume-controls-mute = Ztlumit
volume-controls-unmute = Zru\u0161it ztlumen\xED
`},"de-DE":{"context_menu.ftl":`context-menu-download-swf = SWF herunterladen
context-menu-copy-debug-info = Debug-Info kopieren
context-menu-open-save-manager = Dateimanager \xF6ffnen
context-menu-about-ruffle =
    { $flavor ->
        [extension] \xDCber Ruffle Erweiterung ({ $version })
       *[other] \xDCber Ruffle ({ $version })
    }
context-menu-hide = Men\xFC ausblenden
context-menu-exit-fullscreen = Vollbild verlassen
context-menu-enter-fullscreen = Vollbildmodus aktivieren
context-menu-volume-controls = Lautst\xE4rke einstellen
`,"messages.ftl":`message-cant-embed =
    Ruffle konnte das in diese Seite eingebettete Flash-Element nicht ausf\xFChren.
    Sie k\xF6nnen versuchen, die Datei in einem separaten Tab zu \xF6ffnen, um dieses Problem zu umgehen.
message-restored-from-bfcache =
    Ihr Browser hat diesen Flash-Inhalt aus einer vorherigen Sitzung wiederhergestellt.
    Laden Sie die Seite neu, um neu zu starten.
panic-title = Etwas ist schiefgelaufen :(
more-info = Weitere Informationen
run-anyway = Trotzdem ausf\xFChren
continue = Fortfahren
report-bug = Fehler melden
update-ruffle = Ruffle aktualisieren
ruffle-demo = Web-Demo
ruffle-desktop = Desktop-Anwendung
ruffle-wiki = Ruffle-Wiki anzeigen
enable-hardware-acceleration = Es sieht so aus, als sei die Hardwarebeschleunigung deaktiviert. Ruffle funktioniert zwar m\xF6glicherweise, k\xF6nnte aber sehr langsam sein. Unter dem folgenden Link erfahren Sie, wie Sie die Hardwarebeschleunigung aktivieren k\xF6nnen:
enable-hardware-acceleration-link = FAQ - Chrome Hardwarebeschleunigung
view-error-details = Fehlerdetails anzeigen
open-in-new-tab = In einem neuen Tab \xF6ffnen
click-to-unmute = Zum Aktivieren des Tons klicken
clipboard-message-title = Kopieren und Einf\xFCgen in Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Ihr Browser unterst\xFCtzt keinen vollst\xE4ndigen Zugriff auf die Zwischenablage,
        [access-denied] Der Zugriff auf die Zwischenablage wurde verweigert,
    } Sie k\xF6nnen jedoch stattdessen jederzeit diese Tastenkombinationen verwenden:
clipboard-message-copy = { " " } zum Kopieren
clipboard-message-cut = { " " } zum Ausschneiden
clipboard-message-paste = { " " } zum Einf\xFCgen
error-canvas-reload = Das Neuladen mit dem Canvas-Renderer ist nicht m\xF6glich, wenn dieser bereits verwendet wird.
error-file-protocol =
    Es scheint, als w\xFCrden Sie Ruffle \xFCber das "file:"-Protokoll ausf\xFChren.
    Dies funktioniert nicht, da Browser aus Sicherheitsgr\xFCnden viele Funktionen blockieren.
    Wir empfehlen Ihnen stattdessen, einen lokalen Server einzurichten oder entweder die Web-Demo oder die Desktop-Anwendung zu nutzen.
error-javascript-config =
    Bei Ruffle ist aufgrund einer fehlerhaften JavaScript-Konfiguration ein schwerwiegendes Problem aufgetreten.
    Wenn Sie der Serveradministrator sind, bitten wir Sie, die Fehlerdetails zu \xFCberpr\xFCfen, um festzustellen, welcher Parameter die Ursache ist.
    Sie k\xF6nnen auch im Ruffle-Wiki nach Hilfe suchen.
error-wasm-not-found =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.
    Wenn das Problem weiterhin besteht, m\xFCssen Sie unter Umst\xE4nden die "publicPath"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki f\xFCr Hilfe.
error-wasm-mime-type =
    Bei der Initialisierung von Ruffle ist ein schwerwiegendes Problem aufgetreten.
    Dieser Webserver stellt ".wasm"-Dateien nicht mit dem richtigen MIME-Typ bereit.
    Wenn Sie der Serveradministrator sind, finden Sie Hilfe im Ruffle-Wiki.
error-invalid-swf =
    Ruffle kann die angeforderte Datei nicht verarbeiten.
    Der wahrscheinlichste Grund daf\xFCr ist, dass die angeforderte Datei keine g\xFCltige SWF-Datei ist.
error-swf-fetch =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr vorhanden ist und Ruffle daher nichts laden kann.
    Wenden Sie sich bitte an den Administrator der Website, um Hilfe zu erhalten.
error-swf-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf die Datei wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Serveradministrator sind, finden Sie Hilfe im Ruffle-Wiki.
error-wasm-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Serveradministrator sind, finden Sie Hilfe im Ruffle-Wiki.
error-wasm-invalid =
    Bei der Initialisierung von Ruffle ist ein schwerwiegendes Problem aufgetreten.
    Es scheint, als fehlten auf dieser Seite Dateien, die f\xFCr die Ausf\xFChrung von Ruffle erforderlich sind, oder als seien diese ung\xFCltig.
    Wenn Sie der Serveradministrator sind, finden Sie Hilfe im Ruffle-Wiki.
error-wasm-download =
    Bei der Initialisierung von Ruffle ist ein schwerwiegendes Problem aufgetreten.
    Oftmals behebt sich dieses Problem von selbst, sodass Sie versuchen k\xF6nnen, die Seite neu zu laden.
    Andernfalls wenden Sie sich an den Website-Administrator.
error-wasm-disabled-on-edge =
    Ruffle konnte die erforderliche ".wasm"-Datei nicht laden.
    Um das Problem zu beheben, \xF6ffnen Sie die Einstellungen Ihres Browsers, klicken Sie auf "Datenschutz, Suche und Dienste", scrollen Sie nach unten und deaktivieren Sie die Option "Sicherheit im Internet verbessern".
    Dadurch kann Ihr Browser die erforderlichen ".wasm"-Dateien laden.
    Sollte das Problem weiterhin bestehen, m\xFCssen Sie m\xF6glicherweise einen anderen Browser verwenden.
error-wasm-unsupported-browser =
    Der von Ihnen verwendete Browser unterst\xFCtzt die WebAssembly-Erweiterungen nicht, die Ruffle zum Ausf\xFChren ben\xF6tigt.
    Bitte wechseln Sie zu einem unterst\xFCtzten Browser.
    Eine Liste der unterst\xFCtzten Browser finden Sie im Wiki.
error-javascript-conflict =
    Bei der Initialisierung von Ruffle ist ein schwerwiegendes Problem aufgetreten.
    Es scheint, als w\xFCrde diese Seite JavaScript-Code verwenden, der mit Ruffle in Konflikt steht.
    Falls Sie der Serveradministrator sind, bitten wir Sie, die Datei auf einer leeren Seite zu laden.
error-javascript-conflict-outdated = Sie k\xF6nnen auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem m\xF6glicherweise behebt (der aktuelle Build ist veraltet: { $buildDate }).
error-csp-conflict =
    Bei der Initialisierung von Ruffle ist ein schwerwiegendes Problem aufgetreten.
    Die Content Security Policy dieses Webservers l\xE4sst die Ausf\xFChrung der erforderlichen ".wasm"-Komponente nicht zu.
    Wenn Sie der Serveradministrator sind, finden Sie Hilfe im Ruffle-Wiki.
error-url-invalid =
    Ruffle konnte die SWF-Datei nicht laden.
    Der wahrscheinlichste Grund ist eine fehlerhafte URL.
error-unknown =
    Bei der Anzeige dieses Flash-Inhalts ist bei Ruffle ein schwerwiegendes Problem aufgetreten.
    { $outdated ->
        [true] Wenn Sie der Serveradministrator sind, versuchen Sie bitte, eine aktuellere Version von Ruffle hochzuladen (der aktuelle Build ist veraltet: { $buildDate }).
       *[false] Das sollte eigentlich nicht passieren, daher w\xE4ren wir Ihnen sehr dankbar, wenn Sie den Fehler melden k\xF6nnten!
    }
`,"save-manager.ftl":`save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei l\xF6schen m\xF6chten?
save-reload-prompt =
    Diese Speicherdatei kann nur ohne Konflikte { $action ->
        [delete] gel\xF6scht
       *[replace] ersetzt
    } werden, wenn der Inhalt neu geladen wird. Trotzdem fortfahren?
save-download = Herunterladen
save-replace = Ersetzen
save-delete = L\xF6schen
save-backup-all = Alle Speicherdateien herunterladen
`,"volume-controls.ftl":`volume-controls-mute = Stummschalten
volume-controls-unmute = Stummschaltung aufheben
`},"en-US":{"context_menu.ftl":`context-menu-download-swf = Download SWF
context-menu-copy-debug-info = Copy Debug Info
context-menu-open-save-manager = Open Save Manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] About Ruffle Extension ({$version})
        *[other] About Ruffle ({$version})
    }
context-menu-hide = Hide This Menu
context-menu-exit-fullscreen = Exit Full Screen
context-menu-enter-fullscreen = Enter Full Screen
context-menu-volume-controls = Volume Controls
`,"messages.ftl":`message-cant-embed =
    Ruffle wasn't able to run the Flash embedded in this page.
    You can try to open the file in a separate tab, to sidestep this issue.
message-restored-from-bfcache =
    Your browser restored this Flash content from a previous session.
    To start fresh, reload the page.
panic-title = Something went wrong :(
more-info = More info
run-anyway = Run anyway
continue = Continue
report-bug = Report Bug
update-ruffle = Update Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktop Application
ruffle-wiki = View Ruffle Wiki
enable-hardware-acceleration = It looks like hardware acceleration is disabled. While Ruffle may work, it could be very slow. You can find out how to enable hardware acceleration by following the link below:
enable-hardware-acceleration-link = FAQ - Chrome Hardware Acceleration
view-error-details = View Error Details
open-in-new-tab = Open in a new tab
click-to-unmute = Click to unmute
clipboard-message-title = Copying and pasting in Ruffle
clipboard-message-description =
    { $variant ->
        *[unsupported] Your browser does not support full clipboard access,
        [access-denied] Access to the clipboard has been denied,
    } but you can always use these shortcuts instead:
clipboard-message-copy = { " " } for copy
clipboard-message-cut = { " " } for cut
clipboard-message-paste = { " " } for paste
error-canvas-reload = Cannot reload with the canvas renderer when the canvas renderer is already in use.
error-file-protocol =
    It appears you are running Ruffle on the "file:" protocol.
    This doesn't work as browsers block many features from working for security reasons.
    Instead, we invite you to setup a local server or either use the web demo or the desktop application.
error-javascript-config =
    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.
    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.
    You can also consult the Ruffle wiki for help.
error-wasm-not-found =
    Ruffle failed to load the required ".wasm" file component.
    If you are the server administrator, please ensure the file has correctly been uploaded.
    If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.
error-wasm-mime-type =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server is not serving ".wasm" files with the correct MIME type.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-invalid-swf =
    Ruffle cannot parse the requested file.
    The most likely reason is that the requested file is not a valid SWF.
error-swf-fetch =
    Ruffle failed to load the Flash SWF file.
    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.
    Try contacting the website administrator for help.
error-swf-cors =
    Ruffle failed to load the Flash SWF file.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-cors =
    Ruffle failed to load the required ".wasm" file component.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-invalid =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page has missing or invalid files for running Ruffle.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-download =
    Ruffle has encountered a major issue whilst trying to initialize.
    This can often resolve itself, so you can try reloading the page.
    Otherwise, please contact the website administrator.
error-wasm-disabled-on-edge =
    Ruffle failed to load the required ".wasm" file component.
    To fix this, try opening your browser's settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".
    This will allow your browser to load the required ".wasm" files.
    If the issue persists, you might have to use a different browser.
error-wasm-unsupported-browser =
    The browser you are using does not support the WebAssembly extensions Ruffle requires to run.
    Please switch to a supported browser.
    You can find a list of supported browsers on the Wiki.
error-javascript-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page uses JavaScript code that conflicts with Ruffle.
    If you are the server administrator, we invite you to try loading the file on a blank page.
error-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).
error-csp-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server's Content Security Policy does not allow the required ".wasm" component to run.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-url-invalid =
    Ruffle failed to load the Flash SWF file.
    The most likely reason is that an invalid URL for the SWF file was passed to Ruffle.
error-unknown =
    Ruffle has encountered a major issue whilst trying to display this Flash content.
    {$outdated ->
        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).
        *[false] This isn't supposed to happen, so we'd really appreciate if you could file a bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Are you sure you want to delete this save file?
save-reload-prompt =
    The only way to {$action ->
    [delete] delete
    *[replace] replace
    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?
save-download = Download
save-replace = Replace
save-delete = Delete
save-backup-all = Download all save files
`,"volume-controls.ftl":`volume-controls-mute = Mute
volume-controls-unmute = Unmute
`},"eo-UY":{"context_menu.ftl":"","messages.ftl":"","save-manager.ftl":"","volume-controls.ftl":""},"es-ES":{"context_menu.ftl":`context-menu-download-swf = Descargar SWF
context-menu-copy-debug-info = Copiar informaci\xF3n de depuraci\xF3n
context-menu-open-save-manager = Abrir gestor de guardado
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre la extensi\xF3n de Ruffle ({ $version })
       *[other] Sobre Ruffle ({ $version })
    }
context-menu-hide = Ocultar este men\xFA
context-menu-exit-fullscreen = Salir de pantalla completa
context-menu-enter-fullscreen = Entrar a pantalla completa
context-menu-volume-controls = Controles de volumen
`,"messages.ftl":`message-cant-embed =
    Ruffle no pudo ejecutar el Flash incrustado en esta p\xE1gina.
    Puedes intentar abrir el archivo en una pesta\xF1a aparte, para evitar este problema.
message-restored-from-bfcache =
    Su navegador ha recuperado este contenido Flash de una sesi\xF3n anterior.
    Para empezar de cero, refresque la p\xE1gina.
panic-title = Algo sali\xF3 mal :(
more-info = M\xE1s info
run-anyway = Ejecutar de todos modos
continue = Continuar
report-bug = Reportar un error
update-ruffle = Actualizar Ruffle
ruffle-demo = Demostraci\xF3n de web
ruffle-desktop = Aplicaci\xF3n de escritorio
ruffle-wiki = Ver la p\xE1gina wiki
enable-hardware-acceleration = Al parecer, la aceleraci\xF3n de hardware est\xE1 deshabilitada. Puede que Ruffle funcione, pero este podr\xEDa funcionar muy lentamente. Puedes averiguar como habilitar aceleraci\xF3n de hardware presionando el enlace:
enable-hardware-acceleration-link = Preguntas frecuentes sobre la aceleraci\xF3n de hardware en Chrome
view-error-details = Ver los detalles del error
open-in-new-tab = Abrir en una pesta\xF1a nueva
click-to-unmute = Haz clic para dejar de silenciar
clipboard-message-title = Para copiar y pegar en Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Este navegador no apoya acceso completo al portapapeles,
        [access-denied] Se ha denegado el acceso al portapapeles,
    } pero siempre se puede utilizar estos atajos:
clipboard-message-copy = Para copiar
clipboard-message-cut = Para cortar
clipboard-message-paste = Para pegar
error-canvas-reload = No se puede recargar con el renderizado de lienzo cuando este ya est\xE1 en uso.
error-file-protocol =
    Parece que est\xE1 ejecutando Ruffle en el protocolo "archivo:".
    Esto no funciona porque los navegadores bloquean que muchas caracter\xEDsticas funcionen por razones de seguridad.
    En su lugar, le invitamos a configurar un servidor local o bien usar la demostraci\xF3n web o la aplicaci\xF3n de desktop.
error-javascript-config =
    Ruffle ha encontrado un problema cr\xEDtico debido a una configuraci\xF3n JavaScript incorrecta.
    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar qu\xE9 par\xE1metro est\xE1 en falta.
    Tambi\xE9n puedes consultar la wiki de Ruffle para obtener ayuda.
error-wasm-not-found =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Si usted es el administrador del servidor, aseg\xFArese de que el archivo ha sido subido correctamente.
    Si el problema persiste, puede que necesite usar la configuraci\xF3n "publicPath": por favor consulte la wiki de Ruffle para obtener ayuda.
error-wasm-mime-type =
    Ruffle ha encontrado un problema cr\xEDtico al intentar inicializar.
    Este servidor web no est\xE1 sirviendo archivos wasm" con el tipo MIME correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-invalid-swf = Ruffle no puede analizar el archivo solicitado. La raz\xF3n m\xE1s probable es que no es un archivo v\xE1lido SWF.
error-swf-fetch =
    Ruffle no pudo cargar el archivo Flash SWF.
    La raz\xF3n m\xE1s probable es que el archivo ya no existe, as\xED que no hay nada para cargar Ruffle.
    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.
error-swf-cors =
    Ruffle no pudo cargar el archivo Flash SWF.
    Es probable que el acceso a la b\xFAsqueda haya sido bloqueado por la pol\xEDtica CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-cors =
    Ruffle no pudo cargar el archivo ".wasm."
    Es probable que el acceso a la b\xFAsqueda o la llamada a la funci\xF3n fetch haya sido bloqueado por la pol\xEDtica CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-invalid =
    Ruffle ha encontrado un problema cr\xEDtico al intentar inicializar.
    Este servidor web no est\xE1 sirviendo archivos wasm" con el tipo Mime correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-download =
    Ruffle ha encontrado un problema cr\xEDtico mientras intentaba inicializarse.
    Esto a menudo puede resolverse por s\xED mismo, as\xED que puede intentar recargar la p\xE1gina.
    De lo contrario, p\xF3ngase en contacto con el administrador del sitio web.
error-wasm-disabled-on-edge =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Para solucionar esto, intenta abrir la configuraci\xF3n de tu navegador, haciendo clic en "Privacidad, b\xFAsqueda y servicios", desplaz\xE1ndote y apagando "Mejore su seguridad en la web".
    Esto permitir\xE1 a su navegador cargar los archivos ".wasm" necesarios.
    Si el problema persiste, puede que tenga que utilizar un navegador diferente.
error-wasm-unsupported-browser =
    Este navegador no apoya las extensiones de WebAssembly que Ruffle requiere para ejecutar.
    Por favor, cambia a un navegador apoyado.
    Se puede ver una lista de navegadores apoyados en el Wiki.
error-javascript-conflict =
    Ruffle ha encontrado un problema cr\xEDtico mientras intentaba inicializarse.
    Parece que esta p\xE1gina utiliza c\xF3digo JavaScript que entra en conflicto con Ruffle.
    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una p\xE1gina en blanco.
error-javascript-conflict-outdated = Tambi\xE9n puedes intentar subir una versi\xF3n m\xE1s reciente de Ruffle que puede eludir el problema (la versi\xF3n actual est\xE1 desactualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontr\xF3 un problema al intentar inicializarse.
    La Pol\xEDtica de Seguridad de Contenido de este servidor web no permite el componente requerido ".wasm".
    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.
error-unknown =
    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.
    { $outdated ->
        [true] Si usted es el administrador del servidor, intenta cargar una version m\xE1s reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).
       *[false] Esto no deberia suceder! apreciariamos que reportes el error!
    }
`,"save-manager.ftl":`save-delete-prompt = \xBFEst\xE1 seguro de querer eliminar este archivo de guardado?
save-reload-prompt =
    La \xFAnica forma de { $action ->
        [delete] eliminar
       *[replace] sobreescribir
    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. \xBFDesea continuar de todos modos?
save-download = Descargar
save-replace = Sobreescribir
save-delete = Borrar
save-backup-all = Borrar todos los archivos de guardado
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Desmutear
`},"fi-FI":{"context_menu.ftl":`context-menu-download-swf = Lataa SWF
context-menu-copy-debug-info = Kopioi vianj\xE4ljitystiedot
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tietoja \u2013 Ruffle-laajennus ({ $version })
       *[other] Tietoja \u2013 Ruffle ({ $version })
    }
context-menu-hide = Piilota t\xE4m\xE4 valikko
context-menu-exit-fullscreen = Poistu koko n\xE4yt\xF6n tilasta
context-menu-enter-fullscreen = Siirry koko n\xE4yt\xF6n tilaan
context-menu-volume-controls = \xC4\xE4nenvoimakkuuden s\xE4\xE4t\xF6
`,"messages.ftl":`message-restored-from-bfcache =
    Selaimesi palautti t\xE4m\xE4n Flash-sis\xE4ll\xF6n aiemmasta istunnosta.
    Aloita alusta lataamalla sivu uudelleen.
panic-title = Jokin meni pieleen :(
more-info = Lis\xE4tietoja
run-anyway = Suorita silti
continue = Jatka
report-bug = Ilmoita ongelmasta
update-ruffle = P\xE4ivit\xE4 Ruffle
ruffle-desktop = Ty\xF6p\xF6yt\xE4sovellus
ruffle-wiki = N\xE4yt\xE4 Rufflen wiki
enable-hardware-acceleration = Vaikuttaa silt\xE4, ett\xE4 laitteistokiihdytys on pois k\xE4yt\xF6st\xE4. Ruffle saattaa silti toimia, mutta hitaasti. Lis\xE4tietoja laitteistokiihdytyksen ottamisesta k\xE4ytt\xF6\xF6n on saatavilla alla olevan linkin kautta:
enable-hardware-acceleration-link = UKK - Chromen laitteistokiihdytys
view-error-details = N\xE4yt\xE4 virheen tiedot
open-in-new-tab = Avaa uudessa v\xE4lilehdess\xE4
click-to-unmute = Napsauta palauttaaksesi \xE4\xE4net
clipboard-message-title = Kopiointi ja liitt\xE4minen Rufflessa
clipboard-message-copy = { " " } kopioi
clipboard-message-cut = { " " } leikkaa
clipboard-message-paste = { " " } liitt\xE4\xE4
error-wasm-unsupported-browser =
    K\xE4ytt\xE4m\xE4si selain ei tue Rufflen vaatimia WebAssembly-laajennuksia.
    Vaihda tuettuun selaimeen.
    Lista tuetuista selaimista on koottu wikiin.
`,"save-manager.ftl":`save-delete-prompt = Haluatko varmasti poistaa t\xE4m\xE4n tallennuksen?
save-reload-prompt =
    Ainoa tapa { $action ->
        [delete] poistaa
       *[replace] korvata
    } t\xE4m\xE4 tiedosto ilman mahdollista ristiriitaa on ladata sis\xE4lt\xF6 uudelleen. Haluatko jatkaa silti?
save-download = Lataa
save-replace = Korvaa
save-delete = Poista
`,"volume-controls.ftl":`volume-controls-mute = Mykist\xE4
volume-controls-unmute = Poista mykistys
`},"fr-FR":{"context_menu.ftl":`context-menu-download-swf = T\xE9l\xE9charger en tant que SWF
context-menu-copy-debug-info = Copier les infos de d\xE9bogage
context-menu-open-save-manager = Ouvrir le gestionnaire de stockage
context-menu-about-ruffle =
    { $flavor ->
        [extension] \xC0 propos de l'Extension Ruffle ({ $version })
       *[other] \xC0 propos de Ruffle ({ $version })
    }
context-menu-hide = Masquer ce menu
context-menu-exit-fullscreen = Sortir du mode plein \xE9cran
context-menu-enter-fullscreen = Afficher en plein \xE9cran
context-menu-volume-controls = Contr\xF4les du volume
`,"messages.ftl":`message-cant-embed =
    Ruffle n'a pas \xE9t\xE9 en mesure de lire le fichier Flash int\xE9gr\xE9 dans cette page.
    Vous pouvez essayer d'ouvrir le fichier dans un onglet isol\xE9, pour contourner le probl\xE8me.
message-restored-from-bfcache =
    Votre navigateur a restaur\xE9 ce contenu Flash d'une session ant\xE9rieure.
    Rechargez la page pour repartir de z\xE9ro.
panic-title = Une erreur est survenue :(
more-info = Plus d'infos
run-anyway = Ex\xE9cuter quand m\xEAme
continue = Continuer
report-bug = Signaler le bug
update-ruffle = Mettre \xE0 jour Ruffle
ruffle-demo = D\xE9mo en ligne
ruffle-desktop = Application de bureau
ruffle-wiki = Wiki de Ruffle
enable-hardware-acceleration = Il semblerait que l'acc\xE9l\xE9ration mat\xE9rielle soit d\xE9sactiv\xE9e. Cela n'emp\xEAche g\xE9n\xE9ralement pas Ruffle de fonctionner, mais il peut \xEAtre beaucoup plus lent. Vous pouvez trouver comment activer l'acc\xE9l\xE9ration mat\xE9rielle en suivant le lien ci-dessous :
enable-hardware-acceleration-link = FAQ - Acc\xE9l\xE9ration mat\xE9rielle dans Chrome
view-error-details = D\xE9tails de l'erreur
open-in-new-tab = Ouvrir dans un nouvel onglet
click-to-unmute = Cliquez pour activer le son
clipboard-message-title = Copier et coller dans Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Votre navigateur ne prend pas en charge l'acc\xE8s au presse-papiers,
        [access-denied] L'acc\xE8s au presse-papiers a \xE9t\xE9 refus\xE9,
    } mais vous pouvez toujours utiliser ces raccourcis clavier \xE0 la place :
clipboard-message-copy = { " " } pour copier
clipboard-message-cut = { " " } pour couper
clipboard-message-paste = { " " } pour coller
error-canvas-reload = Impossible de recharger avec le moteur de rendu canvas lorsque celui-ci est d\xE9j\xE0 en cours d'utilisation.
error-file-protocol =
    Il semblerait que vous ex\xE9cutiez Ruffle sur le protocole "file:".
    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalit\xE9s pour des raisons de s\xE9curit\xE9.
    Nous vous invitons soit \xE0 configurer un serveur local, soit \xE0 utiliser la d\xE9mo en ligne ou l'application de bureau.
error-javascript-config =
    Ruffle a rencontr\xE9 un probl\xE8me majeur en raison d'une configuration JavaScript incorrecte.
    Si vous \xEAtes l'administrateur du serveur, nous vous invitons \xE0 v\xE9rifier les d\xE9tails de l'erreur pour savoir quel est le param\xE8tre en cause.
    Vous pouvez \xE9galement consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-not-found =
    Ruffle n'a pas r\xE9ussi \xE0 charger son fichier ".wasm".
    Si vous \xEAtes l'administrateur du serveur, veuillez vous assurer que ce fichier a bien \xE9t\xE9 mis en ligne.
    Si le probl\xE8me persiste, il vous faudra peut-\xEAtre utiliser le param\xE8tre "publicPath" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-mime-type =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant sa phase d'initialisation.
    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers ".wasm".
    Si vous \xEAtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-invalid-swf =
    Ruffle n'a pas \xE9t\xE9 en mesure de lire le fichier demand\xE9.
    La raison la plus probable est que ce fichier n'est pas un SWF valide.
error-swf-fetch =
    Ruffle n'a pas r\xE9ussi \xE0 charger le fichier Flash.
    La raison la plus probable est que le fichier n'existe pas ou plus.
    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.
error-swf-cors =
    Ruffle n'a pas r\xE9ussi \xE0 charger le fichier Flash.
    La requ\xEAte a probablement \xE9t\xE9 rejet\xE9e en raison de la configuration du CORS.
    Si vous \xEAtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-cors =
    Ruffle n'a pas r\xE9ussi \xE0 charger son fichier ".wasm".
    La requ\xEAte a probablement \xE9t\xE9 rejet\xE9e en raison de la configuration du CORS.
    Si vous \xEAtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-invalid =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant sa phase d'initialisation.
    Il semblerait que cette page comporte des fichiers manquants ou invalides pour ex\xE9cuter Ruffle.
    Si vous \xEAtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-download =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant sa phase d'initialisation.
    Le probl\xE8me d\xE9tect\xE9 peut souvent se r\xE9soudre de lui-m\xEAme, donc vous pouvez essayer de recharger la page.
    Si le probl\xE8me persiste, veuillez prendre contact avec l'administrateur du site.
error-wasm-disabled-on-edge =
    Ruffle n'a pas r\xE9ussi \xE0 charger son fichier ".wasm".
    Pour r\xE9soudre ce probl\xE8me, essayez d'ouvrir les param\xE8tres de votre navigateur et de cliquer sur "Confidentialit\xE9, recherche et services". Puis, vers le bas de la page, d\xE9sactivez l'option "Am\xE9liorez votre s\xE9curit\xE9 sur le web".
    Cela permettra \xE0 votre navigateur de charger les fichiers ".wasm".
    Si le probl\xE8me persiste, vous devrez peut-\xEAtre utiliser un autre navigateur.
error-wasm-unsupported-browser =
    Votre navigateur ne prend pas en charge les extensions WebAssembly n\xE9cessaires au fonctionnement de Ruffle.
    Veuillez utiliser un navigateur les prenant en charge.
    Vous pouvez trouver une liste de navigateurs fonctionnant avec Ruffle sur le wiki.
error-javascript-conflict =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant sa phase d'initialisation.
    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.
    Si vous \xEAtes l'administrateur du serveur, nous vous invitons \xE0 essayer de charger le fichier dans une page vide.
error-javascript-conflict-outdated = Vous pouvez \xE9galement essayer de mettre en ligne une version plus r\xE9cente de Ruffle qui pourrait avoir corrig\xE9 le probl\xE8me (la version que vous utilisez est obsol\xE8te : { $buildDate }).
error-csp-conflict =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant sa phase d'initialisation.
    La strat\xE9gie de s\xE9curit\xE9 du contenu (CSP) de ce serveur web n'autorise pas l'ex\xE9cution de fichiers ".wasm".
    Si vous \xEAtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-unknown =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant l'ex\xE9cution de ce contenu Flash.
    { $outdated ->
        [true] Si vous \xEAtes l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus r\xE9cente de Ruffle (la version que vous utilisez est obsol\xE8te : { $buildDate }).
       *[false] Cela n'est pas cens\xE9 se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !
    }
`,"save-manager.ftl":`save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?
save-reload-prompt =
    La seule fa\xE7on de { $action ->
        [delete] supprimer
       *[replace] remplacer
    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand m\xEAme continuer ?
save-download = T\xE9l\xE9charger
save-replace = Remplacer
save-delete = Supprimer
save-backup-all = T\xE9l\xE9charger tous les fichiers de sauvegarde
`,"volume-controls.ftl":`volume-controls-mute = Rendre muet
volume-controls-unmute = Rendre audible
`},"gl-ES":{"context_menu.ftl":"","messages.ftl":"","save-manager.ftl":"","volume-controls.ftl":""},"he-IL":{"context_menu.ftl":`context-menu-download-swf = \u05D4\u05D5\u05E8\u05D3\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4SWF
context-menu-copy-debug-info = \u05D4\u05E2\u05EA\u05E7\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9 \u05E0\u05D9\u05E4\u05D5\u05D9 \u05E9\u05D2\u05D9\u05D0\u05D5\u05EA
context-menu-open-save-manager = \u05E4\u05EA\u05D7 \u05D0\u05EA \u05DE\u05E0\u05D4\u05DC \u05D4\u05E9\u05DE\u05D9\u05E8\u05D5\u05EA
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05EA\u05D5\u05E1\u05E3 Ruffle ({ $version })
       *[other] \u05D0\u05D5\u05D3\u05D5\u05EA Ruffle ({ $version })
    }
context-menu-hide = \u05D4\u05E1\u05EA\u05E8 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05D6\u05D4
context-menu-exit-fullscreen = \u05D9\u05E6\u05D9\u05D0\u05D4 \u05DE\u05DE\u05E1\u05DA \u05DE\u05DC\u05D0
context-menu-enter-fullscreen = \u05DE\u05E1\u05DA \u05DE\u05DC\u05D0
context-menu-volume-controls = \u05D1\u05E7\u05E8\u05EA \u05E2\u05D5\u05E6\u05DE\u05EA \u05E7\u05D5\u05DC
`,"messages.ftl":`message-cant-embed =
    Ruffle \u05DC\u05D0 \u05D4\u05E6\u05DC\u05D9\u05D7 \u05DC\u05D4\u05E8\u05D9\u05E5 \u05D0\u05EA \u05EA\u05D5\u05DB\u05DF \u05D4\u05E4\u05DC\u05D0\u05E9 \u05D4\u05DE\u05D5\u05D8\u05DE\u05E2 \u05D1\u05D3\u05E3 \u05D6\u05D4.
    \u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5 \u05D1\u05DC\u05E9\u05D5\u05E0\u05D9\u05EA \u05E0\u05E4\u05E8\u05D3\u05EA, \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E2\u05E7\u05D5\u05E3 \u05D1\u05E2\u05D9\u05D4 \u05D6\u05D5.
panic-title = \u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9 :(
more-info = \u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3
run-anyway = \u05D4\u05E4\u05E2\u05DC \u05D1\u05DB\u05DC \u05D6\u05D0\u05EA
continue = \u05D4\u05DE\u05E9\u05DA
report-bug = \u05D3\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D4
update-ruffle = \u05E2\u05D3\u05DB\u05DF \u05D0\u05EA Ruffle
ruffle-demo = \u05D4\u05D3\u05D2\u05DE\u05D4
ruffle-desktop = \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05E9\u05D5\u05DC\u05D7\u05DF \u05E2\u05D1\u05D5\u05D3\u05D4
ruffle-wiki = \u05E8\u05D0\u05D4 \u05D0\u05EA \u05D5\u05D9\u05E7\u05D9 \u05E9\u05DC Ruffle
enable-hardware-acceleration = \u05E0\u05E8\u05D0\u05D4 \u05E9\u05D4\u05D0\u05E6\u05EA \u05D4\u05D7\u05D5\u05DE\u05E8\u05D4 \u05E9\u05DC\u05DA \u05DC\u05D0 \u05DE\u05D5\u05E4\u05E2\u05DC\u05EA. \u05D1\u05E2\u05D5\u05D3 \u05E9Ruffle \u05E2\u05E9\u05D5\u05D9 \u05DC\u05E2\u05D1\u05D5\u05D3, \u05D4\u05D5\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D0\u05D9\u05D8\u05D9. \u05EA\u05D5\u05DB\u05DC \u05DC\u05E8\u05D0\u05D5\u05EA \u05DB\u05D9\u05E6\u05D3 \u05DC\u05D4\u05E4\u05E2\u05D9\u05DC \u05EA\u05DB\u05D5\u05E0\u05D4 \u05D6\u05D5 \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05D4\u05DC\u05D9\u05E0\u05E7 \u05D4\u05D6\u05D4:
enable-hardware-acceleration-link = \u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA - \u05D4\u05D0\u05E6\u05EA \u05D4\u05D7\u05D5\u05DE\u05E8\u05D4 \u05E9\u05DC Chrome
view-error-details = \u05E8\u05D0\u05D4 \u05E4\u05E8\u05D8\u05D9 \u05E9\u05D2\u05D9\u05D0\u05D4
open-in-new-tab = \u05E4\u05EA\u05D7 \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05D9\u05D4 \u05D7\u05D3\u05E9\u05D4
click-to-unmute = \u05DC\u05D7\u05E5 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D1\u05D8\u05DC \u05D4\u05E9\u05EA\u05E7\u05D4
clipboard-message-title = \u05D4\u05E2\u05EA\u05E7\u05D4 \u05D5\u05D4\u05D3\u05D1\u05E7\u05D4 \u05D1Ruffle
clipboard-message-copy = { " " } \u05E2\u05D1\u05D5\u05E8 \u05D4\u05E2\u05EA\u05E7\u05D4
clipboard-message-cut = { " " } \u05E2\u05D1\u05D5\u05E8 \u05D2\u05D6\u05D9\u05E8\u05D4
clipboard-message-paste = { " " } \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D3\u05D1\u05E7\u05D4
error-canvas-reload = \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D8\u05E2\u05D5\u05DF \u05DE\u05D7\u05D3\u05E9 \u05E2\u05DD \u05DE\u05E2\u05D1\u05D3 \u05D4\u05E7\u05E0\u05D1\u05E1 \u05DB\u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D3 \u05D4\u05E7\u05E0\u05D1\u05E1 \u05DB\u05D1\u05E8 \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9.
error-file-protocol =
    \u05E0\u05D3\u05DE\u05D4 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05E8\u05D9\u05E5 \u05D0\u05EA Ruffle \u05EA\u05D7\u05EA \u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC "file:".
    \u05D6\u05D4 \u05DC\u05D0 \u05D9\u05E2\u05D1\u05D5\u05D3 \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05D3\u05E4\u05D3\u05E4\u05E0\u05D9\u05DD \u05D7\u05D5\u05E1\u05DE\u05D9\u05DD \u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05E8\u05D1\u05D5\u05EA \u05DE\u05DC\u05E2\u05D1\u05D5\u05D3 \u05E2\u05E7\u05D1 \u05E1\u05D9\u05D1\u05D5\u05EA \u05D0\u05D1\u05D8\u05D7\u05D4.
    \u05D1\u05DE\u05E7\u05D5\u05DD \u05D6\u05D4, \u05D0\u05E0\u05D5 \u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05D0\u05D5\u05EA\u05DA \u05DC\u05D0\u05D7\u05E1\u05DF \u05D0\u05EA\u05E8 \u05D6\u05D4 \u05EA\u05D7\u05EA \u05E9\u05E8\u05EA \u05DE\u05E7\u05D5\u05DE\u05D9 \u05D0\u05D5 \u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05E8\u05E9\u05EA \u05D0\u05D5 \u05D3\u05E8\u05DA \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05E9\u05D5\u05DC\u05D7\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4.
error-javascript-config =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05EA\u05E7\u05DC\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05E2\u05E7\u05D1 \u05D4\u05D2\u05D3\u05E8\u05EA JavaScript \u05E9\u05D2\u05D5\u05D9\u05D4.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D5 \u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05D0\u05D5\u05EA\u05DA \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9 \u05D4\u05E9\u05D2\u05D9\u05D0\u05D4 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05D9\u05D6\u05D4 \u05E4\u05E8\u05DE\u05D8\u05E8 \u05D4\u05D5\u05D0 \u05E9\u05D2\u05D5\u05D9.
    \u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E2\u05D9\u05D9\u05DF \u05D5\u05DC\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-wasm-not-found =
    Ruffle \u05E0\u05DB\u05E9\u05DC \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4"wasm." \u05D4\u05D3\u05E8\u05D5\u05E9.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05D5\u05D5\u05D3\u05D0 \u05DB\u05D9 \u05D4\u05E7\u05D5\u05D1\u05E5 \u05D4\u05D5\u05E2\u05DC\u05D4 \u05DB\u05E9\u05D5\u05E8\u05D4.
    \u05D0\u05DD \u05D4\u05D1\u05E2\u05D9\u05D4 \u05DE\u05DE\u05E9\u05D9\u05DB\u05D4, \u05D9\u05D9\u05EA\u05DB\u05DF \u05D5\u05EA\u05E6\u05D8\u05E8\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D4\u05D2\u05D3\u05E8\u05EA "publicPath": \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-wasm-mime-type =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D0\u05EA\u05D7\u05DC.
    \u05E9\u05E8\u05EA\u05D5 \u05E9\u05DC \u05D0\u05EA\u05E8 \u05D6\u05D4 \u05DC\u05D0 \u05DE\u05E9\u05D9\u05D9\u05DA \u05E7\u05D1\u05E6\u05D9 ".wasm" \u05E2\u05DD \u05E1\u05D5\u05D2 \u05D4MIME \u05D4\u05E0\u05DB\u05D5\u05DF.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-invalid-swf =
    Ruffle \u05DC\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E0\u05EA\u05D7 \u05D0\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5 \u05D4\u05DE\u05D1\u05D5\u05E7\u05E9.
    \u05D4\u05E1\u05D9\u05D1\u05D4 \u05D4\u05E1\u05D1\u05D9\u05E8\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DC\u05D1\u05E2\u05D9\u05D4 \u05D6\u05D5 \u05D4\u05D9\u05D0 \u05D1\u05D2\u05DC\u05DC \u05E9\u05D4\u05E7\u05D5\u05D1\u05E5 \u05D4\u05DE\u05D1\u05D5\u05E7\u05E9 \u05D0\u05D9\u05E0\u05D5 SWF \u05D7\u05D5\u05E7\u05D9.
error-swf-fetch =
    Ruffle \u05E0\u05DB\u05E9\u05DC \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4\u05E4\u05DC\u05D0\u05E9/swf. .
    \u05D6\u05D4 \u05E0\u05D5\u05D1\u05E2 \u05DB\u05DB\u05DC \u05D4\u05E0\u05E8\u05D0\u05D4 \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05D5\u05D4\u05E7\u05D5\u05D1\u05E5 \u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD \u05D9\u05D5\u05EA\u05E8, \u05D0\u05D6 \u05D0\u05D9\u05DF \u05DCRuffle \u05DE\u05D4 \u05DC\u05D8\u05E2\u05D5\u05DF.
    \u05E0\u05E1\u05D4 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-swf-cors =
    Ruffle \u05E0\u05DB\u05E9\u05DC \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4\u05E4\u05DC\u05D0\u05E9/swf. .
    \u05D2\u05D9\u05E9\u05D4 \u05DCfetch \u05DB\u05DB\u05DC \u05D4\u05E0\u05E8\u05D0\u05D4 \u05E0\u05D7\u05E1\u05DE\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA CORS.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-wasm-cors =
    Ruffle \u05E0\u05DB\u05E9\u05DC \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4".wasm" \u05D4\u05D3\u05E8\u05D5\u05E9.
    \u05D2\u05D9\u05E9\u05D4 \u05DCfetch \u05DB\u05DB\u05DC \u05D4\u05E0\u05E8\u05D0\u05D4 \u05E0\u05D7\u05E1\u05DE\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA CORS.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-wasm-invalid =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D0\u05EA\u05D7\u05DC.
    \u05E0\u05D3\u05DE\u05D4 \u05DB\u05D9 \u05D1\u05D3\u05E3 \u05D6\u05D4 \u05D7\u05E1\u05E8\u05D9\u05DD \u05D0\u05D5 \u05DC\u05D0 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05DB\u05E8\u05D0\u05D5\u05D9 \u05E7\u05D1\u05E6\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05E9\u05DE\u05E9\u05D9\u05DD \u05D0\u05EA Ruffle \u05DB\u05D3\u05D9 \u05DC\u05E4\u05E2\u05D5\u05DC
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-wasm-download =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D0\u05EA\u05D7\u05DC.
    \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D1\u05E2\u05D9\u05D4 \u05D6\u05D5 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05E4\u05EA\u05D5\u05E8 \u05D0\u05EA \u05E2\u05E6\u05DE\u05D4, \u05D0\u05D6 \u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E0\u05E1\u05D5\u05EA \u05DC\u05D8\u05E2\u05D5\u05DF \u05DE\u05D7\u05D3\u05E9 \u05D0\u05EA \u05D4\u05D3\u05E3 \u05D6\u05D4.
    \u05D0\u05DD \u05DC\u05D0, \u05D0\u05E0\u05D0 \u05E4\u05E0\u05D4 \u05DC\u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8.
error-wasm-disabled-on-edge =
    Ruffle \u05E0\u05DB\u05E9\u05DC \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4".wasm" \u05D4\u05D3\u05E8\u05D5\u05E9.
    \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05EA\u05E7\u05DF \u05D1\u05E2\u05D9\u05D4 \u05D6\u05D5, \u05E0\u05E1\u05D4 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05DC\u05DA, \u05DC\u05D7\u05E5 \u05E2\u05DC "\u05D0\u05D1\u05D8\u05D7\u05D4, \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D5\u05E9\u05D9\u05E8\u05D5\u05EA",
    \u05D2\u05DC\u05D5\u05DC \u05DE\u05D8\u05D4, \u05D5\u05DB\u05D1\u05D4 \u05D0\u05EA "\u05D4\u05D2\u05D1\u05E8 \u05D0\u05EA \u05D4\u05D0\u05D1\u05D8\u05D7\u05D4 \u05E9\u05DC\u05DA \u05D1\u05E8\u05E9\u05EA".
    \u05D6\u05D4 \u05D9\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05DC\u05DA \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4".wasm" \u05D4\u05D3\u05E8\u05D5\u05E9.
    \u05D0\u05DD \u05D4\u05D1\u05E2\u05D9\u05D4 \u05DE\u05DE\u05E9\u05D9\u05DB\u05D4, \u05D9\u05D9\u05EA\u05DB\u05DF \u05D5\u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05D7\u05E8.
error-wasm-unsupported-browser =
    \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05D1\u05D5 \u05D0\u05EA\u05D4 \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D0\u05D9\u05E0\u05D5 \u05EA\u05D5\u05DE\u05DA \u05D1\u05EA\u05D5\u05E1\u05E4\u05D9 WebAssembly \u05E9-Ruffle \u05D3\u05D5\u05E8\u05E9 \u05DB\u05D3\u05D9 \u05DC\u05E4\u05E2\u05D5\u05DC.
    \u05D0\u05E0\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05DC\u05D3\u05E4\u05D3\u05E4\u05DF \u05E0\u05EA\u05DE\u05DA.
    \u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05DE\u05E6\u05D5\u05D0 \u05E8\u05E9\u05D9\u05DE\u05D4 \u05E9\u05DC \u05D3\u05E4\u05D3\u05E4\u05E0\u05D9\u05DD \u05E0\u05EA\u05DE\u05DB\u05D9\u05DD \u05D1-Wiki \u05E9\u05DC\u05E0\u05D5.
error-javascript-conflict =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D0\u05EA\u05D7\u05DC.
    \u05E0\u05D3\u05DE\u05D4 \u05DB\u05D9 \u05D3\u05E3 \u05D6\u05D4 \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05E7\u05D5\u05D3 JavaScript \u05D0\u05E9\u05E8 \u05DE\u05EA\u05E0\u05D2\u05E9 \u05E2\u05DD Ruffle.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D5 \u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05D0\u05D5\u05EA\u05DA \u05DC\u05E0\u05E1\u05D5\u05EA \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05D4\u05D3\u05E3 \u05EA\u05D7\u05EA \u05E2\u05DE\u05D5\u05D3 \u05E8\u05D9\u05E7.
error-javascript-conflict-outdated = \u05D1\u05E0\u05D5\u05E1\u05E3, \u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E0\u05E1\u05D5\u05EA \u05D5\u05DC\u05D4\u05E2\u05DC\u05D5\u05EA \u05D2\u05E8\u05E1\u05D0\u05D5\u05EA \u05E2\u05D3\u05DB\u05E0\u05D9\u05D5\u05EA \u05E9\u05DC Ruffle \u05D0\u05E9\u05E8 \u05E2\u05DC\u05D5\u05DC\u05D9\u05DD \u05DC\u05E2\u05E7\u05D5\u05E3 \u05D1\u05E2\u05D9\u05D4 \u05D6\u05D5 (\u05D2\u05E8\u05E1\u05D4 \u05D6\u05D5 \u05D4\u05D9\u05E0\u05D4 \u05DE\u05D9\u05D5\u05E9\u05E0\u05EA : { $buildDate }).
error-csp-conflict =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D0\u05EA\u05D7\u05DC.
    \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D0\u05D1\u05D8\u05D7\u05EA \u05D4\u05EA\u05D5\u05DB\u05DF \u05E9\u05DC \u05E9\u05E8\u05EA\u05D5 \u05E9\u05DC \u05D0\u05EA\u05E8 \u05D6\u05D4 \u05D0\u05D9\u05E0\u05D4 \u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05E7\u05D5\u05D1\u05E5 \u05D4"wasm." \u05D4\u05D3\u05E8\u05D5\u05E9 \u05DC\u05E4\u05E2\u05D5\u05DC.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-unknown =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05D1\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D4\u05E6\u05D9\u05D2 \u05D0\u05EA \u05EA\u05D5\u05DB\u05DF \u05E4\u05DC\u05D0\u05E9 \u05D6\u05D4.
    { $outdated ->
        [true] \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E0\u05E1\u05D4 \u05DC\u05D4\u05E2\u05DC\u05D5\u05EA \u05D2\u05E8\u05E1\u05D4 \u05E2\u05D3\u05DB\u05E0\u05D9\u05EA \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC Ruffle (\u05D2\u05E8\u05E1\u05D4 \u05D6\u05D5 \u05D4\u05D9\u05E0\u05D4 \u05DE\u05D9\u05D5\u05E9\u05E0\u05EA:  { $buildDate }).
       *[false] \u05D6\u05D4 \u05DC\u05D0 \u05D0\u05DE\u05D5\u05E8 \u05DC\u05E7\u05E8\u05D5\u05EA, \u05E0\u05E9\u05DE\u05D7 \u05D0\u05DD \u05EA\u05D5\u05DB\u05DC \u05DC\u05E9\u05EA\u05E3 \u05EA\u05E7\u05DC\u05D4 \u05D6\u05D5!
    }
`,"save-manager.ftl":`save-delete-prompt = \u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05E9\u05DE\u05D9\u05E8\u05D4 \u05D6\u05D4?
save-reload-prompt =
    \u05D4\u05D3\u05E8\u05DA \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 { $action ->
        [delete] \u05DC\u05DE\u05D7\u05D5\u05E7
       *[replace] \u05DC\u05D4\u05D7\u05DC\u05D9\u05E3
    } \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4\u05E9\u05DE\u05D9\u05E8\u05D4 \u05D4\u05D6\u05D4 \u05DE\u05D1\u05DC\u05D9 \u05DC\u05D2\u05E8\u05D5\u05DD \u05DC\u05D5 \u05DC\u05D4\u05EA\u05E0\u05D2\u05E9 \u05D4\u05D9\u05D0 \u05DC\u05D8\u05E2\u05D5\u05DF \u05DE\u05D7\u05D3\u05E9 \u05D0\u05EA \u05EA\u05D5\u05DB\u05DF \u05D6\u05D4. \u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA \u05D1\u05DB\u05DC \u05D6\u05D0\u05EA?
save-download = \u05D4\u05D5\u05E8\u05D3\u05D4
save-replace = \u05D4\u05D7\u05DC\u05E4\u05D4
save-delete = \u05DE\u05D7\u05D9\u05E7\u05D4
save-backup-all = \u05D4\u05D5\u05E8\u05D3\u05EA \u05DB\u05DC \u05E7\u05D1\u05E6\u05D9 \u05D4\u05E9\u05DE\u05D9\u05E8\u05D4
`,"volume-controls.ftl":`volume-controls-mute = \u05D4\u05E9\u05EA\u05E7
volume-controls-unmute = \u05D1\u05D9\u05D8\u05D5\u05DC \u05D4\u05E9\u05EA\u05E7\u05D4
`},"hr-HR":{"context_menu.ftl":`context-menu-download-swf = Preuzmi SWF datoteku
context-menu-copy-debug-info = Kopiraj informacije o otklanjanju pogre\u0161aka
context-menu-open-save-manager = Otvori Upravitelj spremanja
context-menu-about-ruffle =
    { $flavor ->
    [extension] O pro\u0161irenju Ruffle ({ $version })
    *[other] O Ruffle ({ $version })
    }
context-menu-hide = Sakrij ovaj izbornik
context-menu-exit-fullscreen = Iza\u0111i iz cijelog zaslona
context-menu-enter-fullscreen = U\u0111i u cijeli zaslon
context-menu-volume-controls = Kontrole glasno\u0107e
`,"messages.ftl":`message-cant-embed =
    Ruffle nije uspio pokrenuti Flash ugra\u0111en na ovoj stranici.
    Mo\u017Eete poku\u0161ati otvoriti datoteku u zasebnoj kartici kako biste izbjegli ovaj problem.
message-restored-from-bfcache =
    Va\u0161 je preglednik vratio ovaj Flash sadr\u017Eaj iz prethodne sesije.
    Za novi po\u010Detak ponovno u\u010Ditajte stranicu.
panic-title = Ne\u0161to je po\u0161lo po zlu :(
more-info = Dodatne informacije
run-anyway = Svejedno pokreni
continue = Nastavi
report-bug = Prijavi gre\u0161ku
update-ruffle = A\u017Eurirajte Ruffle
ruffle-demo = Web demo
ruffle-desktop = Aplikacija za stolna ra\u010Dunala
ruffle-wiki = Pogledajte Ruffle Wiki
enable-hardware-acceleration = Izgleda da je hardversko ubrzanje onemogu\u0107eno. Iako Ruffle mo\u017Eda radi, mogao bi biti vrlo spor. Kako omogu\u0107iti hardversko ubrzanje mo\u017Eete saznati slijede\u0107i donju poveznicu:
enable-hardware-acceleration-link = \u010Cesto postavljana pitanja - Ubrzanje hardvera u Chromeu
view-error-details = Prika\u017Ei detalje o pogre\u0161ci
open-in-new-tab = Otvori u novoj kartici
click-to-unmute = Kliknite za uklju\u010Divanje zvuka
clipboard-message-title = Kopiranje i lijepljenje u Ruffleu
clipboard-message-description =
    { $variant ->
       *[unsupported] Va\u0161 preglednik ne podr\u017Eava puni pristup me\u0111uspremniku,
        [access-denied] Pristup me\u0111uspremniku je uskra\u0107en,
    } ali uvijek mo\u017Eete umjesto toga koristiti ove pre\u010Dace:
clipboard-message-copy = { " " } za kopiranje
clipboard-message-cut = { " " } za izrezivanje
clipboard-message-paste = { " " } za lijepljenje
error-canvas-reload = Nije mogu\u0107e ponovno u\u010Ditavanje s rendererom platna kada je renderer platna ve\u0107 u upotrebi.
error-file-protocol =
    \u010Cini se da koristite Ruffle na protokolu "file:".
    Ovo ne radi jer preglednici blokiraju mnoge zna\u010Dajke iz sigurnosnih razloga.
    Umjesto toga, pozivamo vas da postavite lokalni poslu\u017Eitelj ili koristite web demo ili desktop aplikaciju.
error-javascript-config =
    Ruffle je nai\u0161ao na veliki problem zbog neto\u010Dne konfiguracije JavaScripta.
    Ako ste administrator poslu\u017Eitelja, pozivamo vas da provjerite detalje pogre\u0161ke kako biste saznali koji je parametar uzrok problema. Tako\u0111er mo\u017Eete konzultirati Ruffle wiki za pomo\u0107.
error-wasm-not-found =
    Ruffle nije uspio u\u010Ditati potrebnu komponentu datoteke ".wasm".
    Ako ste administrator poslu\u017Eitelja, provjerite je li datoteka ispravno prenesena.
    Ako se problem nastavi, mo\u017Eda \u0107ete morati upotrijebiti postavku "publicPath": za pomo\u0107 se obratite Ruffle wikiju.
error-wasm-mime-type =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Ovaj web poslu\u017Eitelj ne poslu\u017Euje ".wasm" datoteke s ispravnom MIME vrstom.
    Ako ste administrator poslu\u017Eitelja, obratite se Ruffle wiki stranici za pomo\u0107.
error-invalid-swf =
    Ruffle ne mo\u017Ee analizirati tra\u017Eenu datoteku.
    Najvjerojatniji razlog je taj \u0161to tra\u017Eena datoteka nije valjani SWF.
error-swf-fetch =
    Ruffle nije uspio u\u010Ditati Flash SWF datoteku.
    Najvjerojatniji razlog je taj \u0161to datoteka vi\u0161e ne postoji, pa Ruffle nema \u0161to u\u010Ditati.
    Poku\u0161ajte se obratiti administratoru web-mjesta za pomo\u0107.
error-swf-cors =
    Ruffle nije uspio u\u010Ditati Flash SWF datoteku.
    Pristup dohva\u0107anju vjerojatno je blokiran pravilom CORS.
    Ako ste administrator poslu\u017Eitelja, za pomo\u0107 se obratite Ruffle wikiju.
error-wasm-cors =
    Ruffle nije uspio u\u010Ditati potrebnu komponentu datoteke ".wasm".
    Pristup dohva\u0107anju vjerojatno je blokiran CORS pravilom.
    Ako ste administrator poslu\u017Eitelja, za pomo\u0107 se obratite Ruffle wikiju.
error-wasm-invalid =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    \u010Cini se da ovoj stranici nedostaju ili su datoteke neva\u017Ee\u0107e za pokretanje Rufflea.
    Ako ste administrator poslu\u017Eitelja, za pomo\u0107 se obratite Ruffle wikiju.
error-wasm-download =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    To se \u010Desto mo\u017Ee samo rije\u0161iti, pa mo\u017Eete poku\u0161ati ponovno u\u010Ditati stranicu.
    U suprotnom, obratite se administratoru web-mjesta.
error-wasm-disabled-on-edge =
    Ruffle nije uspio u\u010Ditati potrebnu komponentu datoteke ".wasm".
    Da biste to rije\u0161ili, poku\u0161ajte otvoriti postavke preglednika, kliknuti "Privatnost, pretra\u017Eivanje i usluge", pomaknuti se prema dolje i isklju\u010Diti "Pobolj\u0161ajte sigurnost na webu".
    To \u0107e omogu\u0107iti va\u0161em pregledniku da u\u010Dita potrebne datoteke ".wasm".
    Ako se problem nastavi, mo\u017Eda \u0107ete morati koristiti drugi preglednik.
error-wasm-unsupported-browser =
    Preglednik koji koristite ne podr\u017Eava WebAssembly ekstenzije koje su potrebne za rad Rufflea.
    Molimo prebacite se na podr\u017Eani preglednik.
    Popis podr\u017Eanih preglednika mo\u017Eete prona\u0107i na Wiki stranici.
error-javascript-conflict =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    \u010Cini se da ova stranica koristi JavaScript kod koji je u sukobu s Ruffleom.
    Ako ste administrator poslu\u017Eitelja, pozivamo vas da poku\u0161ate u\u010Ditati datoteku na praznoj stranici.
error-javascript-conflict-outdated = Tako\u0111er mo\u017Eete poku\u0161ati prenijeti noviju verziju Rufflea koja bi mogla zaobi\u0107i problem (trenutna verzija je zastarjela: { $buildDate }).
error-csp-conflict =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Pravila sigurnosti sadr\u017Eaja ovog web poslu\u017Eitelja ne dopu\u0161taju pokretanje potrebne komponente ".wasm".
    Ako ste administrator poslu\u017Eitelja, za pomo\u0107 se obratite Ruffle wikiju.
error-url-invalid =
    Ruffle nije uspio u\u010Ditati Flash SWF datoteku.
    Najvjerojatniji razlog je taj \u0161to je Ruffleu proslije\u0111en neva\u017Ee\u0107i URL za SWF datoteku.
error-unknown =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja prikaza ovog Flash sadr\u017Eaja.
    { $outdated ->
    [true] Ako ste administrator poslu\u017Eitelja, poku\u0161ajte prenijeti noviju verziju Rufflea (trenutna verzija je zastarjela: { $buildDate }).
    *[false] Ovo se ne bi trebalo doga\u0111ati, pa bismo vam bili jako zahvalni ako biste prijavili gre\u0161ku!
    }
`,"save-manager.ftl":`save-delete-prompt = Jeste li sigurni da \u017Eelite izbrisati ovu spremljenu datoteku?
save-reload-prompt =
    Jedini na\u010Din da { $action ->
    [delete] izbri\u0161ete
    *[replace] zamijenite
    } ovu datoteku za spremanje bez potencijalnog sukoba jest ponovno u\u010Ditavanje ovog sadr\u017Eaja. \u017Delite li ipak nastaviti?
save-download = Preuzmite
save-replace = Zamijeni
save-delete = Izbri\u0161i
save-backup-all = Preuzmi sve spremljene datoteke
`,"volume-controls.ftl":`volume-controls-mute = Isklju\u010Di zvuk
volume-controls-unmute = Uklju\u010Di zvuk
`},"hu-HU":{"context_menu.ftl":`context-menu-download-swf = SWF f\xE1jl let\xF6lt\xE9se
context-menu-copy-debug-info = Hibakeres\xE9si inform\xE1ci\xF3k m\xE1sol\xE1sa
context-menu-open-save-manager = Ment\xE9skezel\u0151 megnyit\xE1sa
context-menu-about-ruffle =
    { $flavor ->
        [extension] A Ruffle kieg\xE9sz\xEDt\u0151 ({ $version }) n\xE9vjegye
       *[other] A Ruffle ({ $version }) n\xE9vjegye
    }
context-menu-hide = Ezen men\xFC elrejt\xE9se
context-menu-exit-fullscreen = Kil\xE9p\xE9s a teljes k\xE9perny\u0151b\u0151l
context-menu-enter-fullscreen = V\xE1lt\xE1s teljes k\xE9perny\u0151re
context-menu-volume-controls = Hanger\u0151szab\xE1lyz\xF3
`,"messages.ftl":`message-cant-embed =
    A Ruffle nem tudta futtatni az oldalba \xE1gyazott Flash tartalmat.
    A probl\xE9ma kiker\xFCl\xE9s\xE9hez megpr\xF3b\xE1lhatod megnyitni a f\xE1jlt egy k\xFCl\xF6n lapon.
message-restored-from-bfcache =
    A b\xF6ng\xE9sz\u0151 ezt a Flash tartalmat egy kor\xE1bbi munkamenetb\u0151l \xE1ll\xEDtotta vissza.
    A tiszta indul\xE1shoz friss\xEDtse az oldalt.
panic-title = Valami baj t\xF6rt\xE9nt :(
more-info = Tov\xE1bbi inform\xE1ci\xF3
run-anyway = Futtat\xE1s m\xE9gis
continue = Folytat\xE1s
report-bug = Hiba jelent\xE9se
update-ruffle = Ruffle friss\xEDt\xE9se
ruffle-demo = Webes dem\xF3
ruffle-desktop = Asztali alkalmaz\xE1s
ruffle-wiki = Ruffle Wiki megnyit\xE1sa
enable-hardware-acceleration = \xDAgy t\u0171nik, a hardveres gyors\xEDt\xE1s ki van kapcsolva. B\xE1r a Ruffle m\u0171k\xF6dhet, nagyon lass\xFA lehet. Az al\xE1bbi hivatkoz\xE1st k\xF6vetve megtudhatod, hogyan enged\xE9lyezd a hardveres gyors\xEDt\xE1st:
enable-hardware-acceleration-link = GYIK - Chrome hardveres gyors\xEDt\xE1s
view-error-details = Hiba r\xE9szletei
open-in-new-tab = Megnyit\xE1s \xFAj lapon
click-to-unmute = Kattints a n\xE9m\xEDt\xE1s felold\xE1s\xE1hoz
clipboard-message-title = M\xE1sol\xE1s \xE9s be\xEDlleszt\xE9s a Ruffle-ben
clipboard-message-description =
    { $variant ->
       *[unsupported] A b\xF6ng\xE9sz\u0151d nem t\xE1mogatja a v\xE1g\xF3laphoz val\xF3 teljes hozz\xE1f\xE9r\xE9st,
        [access-denied] A v\xE1g\xF3laphoz val\xF3 hozz\xE1f\xE9r\xE9s el lett utas\xEDtva,
    } de mindig haszn\xE1lhatod ezeket a gyorsbillenty\u0171ket helyette:
clipboard-message-copy = { " " } m\xE1sol\xE1shoz
clipboard-message-cut = { " " } kiv\xE1g\xE1shoz
clipboard-message-paste = { " " } beilleszt\xE9shez
error-canvas-reload = \xDAjrat\xF6lt\xE9s a canvas megjelen\xEDt\u0151vel nem lehets\xE9ges, ha m\xE1r az van haszn\xE1latban.
error-file-protocol =
    \xDAgy t\u0171nik, a Ruffle-t a "file:" protokollon futtatod.
    Ez nem m\u0171k\xF6dik, mivel \xEDgy a b\xF6ng\xE9sz\u0151k biztons\xE1gi okokb\xF3l sz\xE1mos funkci\xF3 m\u0171k\xF6d\xE9s\xE9t letiltj\xE1k.
    Ehelyett azt aj\xE1nljuk hogy ind\xEDts egy helyi kiszolg\xE1l\xF3t, vagy haszn\xE1ld a webes dem\xF3t vagy az asztali alkalmaz\xE1st.
error-javascript-config =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt egy helytelen JavaScript-konfigur\xE1ci\xF3 miatt.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk, ellen\u0151rizd a hiba r\xE9szleteit, hogy megtudd, melyik param\xE9ter a hib\xE1s.
    A Ruffle wikiben is tal\xE1lhatsz ehhez seg\xEDts\xE9get.
error-wasm-not-found =
    A Ruffle nem tudta bet\xF6lteni a sz\xFCks\xE9ges ".wasm" \xF6sszetev\u0151t.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk ellen\u0151rizd, hogy a f\xE1jl megfelel\u0151en lett-e felt\xF6ltve.
    Ha a probl\xE9ma tov\xE1bbra is fenn\xE1ll, el\u0151fordulhat, hogy a "publicPath" be\xE1ll\xEDt\xE1st kell haszn\xE1lnod: seg\xEDts\xE9g\xE9rt keresd fel a Ruffle wikit.
error-wasm-mime-type =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt az inicializ\xE1l\xE1s sor\xE1n.
    Ez a webszerver a ".wasm" f\xE1jlokat nem a megfelel\u0151 MIME-t\xEDpussal szolg\xE1lja ki.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk, keresd fel a Ruffle wikit seg\xEDts\xE9g\xE9rt.
error-invalid-swf =
    A Ruffle nem tudta \xE9rtelmezni a k\xE9rt f\xE1jlt.
    Ennek a legval\xF3sz\xEDn\u0171bb oka az, hogy a k\xE9rt f\xE1jl nem \xE9rv\xE9nyes SWF.
error-swf-fetch =
    A Ruffle nem tudta bet\xF6lteni a Flash SWF f\xE1jlt.
    A legval\xF3sz\xEDn\u0171bb ok az, hogy a f\xE1jl m\xE1r nem l\xE9tezik, \xEDgy a Ruffle sz\xE1m\xE1ra nincs mit bet\xF6lteni.
    Pr\xF3b\xE1ld meg felvenni a kapcsolatot a webhely rendszergazd\xE1j\xE1val seg\xEDts\xE9g\xE9rt.
error-swf-cors =
    A Ruffle nem tudta bet\xF6lteni a Flash SWF f\xE1jlt.
    A lek\xE9r\xE9shez val\xF3 hozz\xE1f\xE9r\xE9st val\xF3sz\xEDn\u0171leg letiltotta a CORS-h\xE1zirend.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk, keresd fel a Ruffle wikit seg\xEDts\xE9g\xE9rt.
error-wasm-cors =
    A Ruffle nem tudta bet\xF6lteni a sz\xFCks\xE9ges ".wasm" \xF6sszetev\u0151t.
    A lek\xE9r\xE9shez val\xF3 hozz\xE1f\xE9r\xE9st val\xF3sz\xEDn\u0171leg letiltotta a CORS-h\xE1zirend.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk keresd fel a Ruffle wikit seg\xEDts\xE9g\xE9rt.
error-wasm-invalid =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt az inicializ\xE1l\xE1s sor\xE1n.
    \xDAgy t\u0171nik, hogy ezen az oldalon hi\xE1nyoznak vagy hib\xE1sak a Ruffle futtat\xE1s\xE1hoz sz\xFCks\xE9ges f\xE1jlok.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk keresd fel a Ruffle wikit seg\xEDts\xE9g\xE9rt.
error-wasm-download =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt az inicializ\xE1l\xE1s sor\xE1n.
    Ez gyakran mag\xE1t\xF3l megold\xF3dik, ez\xE9rt megpr\xF3b\xE1lhatod \xFAjrat\xF6lteni az oldalt.
    Ellenkez\u0151 esetben fordulj a webhely rendszergazd\xE1j\xE1hoz.
error-wasm-disabled-on-edge =
    A Ruffle nem tudta bet\xF6lteni a sz\xFCks\xE9ges ".wasm" \xF6sszetev\u0151t.
    A probl\xE9ma megold\xE1s\xE1hoz nyisd meg a b\xF6ng\xE9sz\u0151 be\xE1ll\xEDt\xE1sait, kattints az \u201EAdatv\xE9delem, keres\xE9s \xE9s szolg\xE1ltat\xE1sok\u201D elemre, g\xF6rgess le, \xE9s kapcsold ki a \u201EFokozott biztons\xE1g a weben\u201D opci\xF3t.
    Ez lehet\u0151v\xE9 teszi a b\xF6ng\xE9sz\u0151 sz\xE1m\xE1ra, hogy bet\xF6ltse a sz\xFCks\xE9ges ".wasm" f\xE1jlokat.
    Ha a probl\xE9ma tov\xE1bbra is fenn\xE1ll, lehet, hogy m\xE1sik b\xF6ng\xE9sz\u0151t kell haszn\xE1lnod.
error-wasm-unsupported-browser =
    Az \xE1ltalad haszn\xE1lt b\xF6ng\xE9sz\u0151 nem t\xE1mogatja a Ruffle futtat\xE1s\xE1hoz sz\xFCks\xE9ges WebAssembly kieg\xE9sz\xEDt\xE9seket.
    K\xE9rlek, v\xE1lts egy t\xE1mogatott b\xF6ng\xE9sz\u0151re.
    A t\xE1mogatott b\xF6ng\xE9sz\u0151k list\xE1j\xE1t a Wikin tal\xE1lod.
error-javascript-conflict =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt az inicializ\xE1l\xE1s sor\xE1n.
    \xDAgy t\u0171nik, ez az oldal olyan JavaScript-k\xF3dot haszn\xE1l, amely \xFCtk\xF6zik a Ruffle-lel.
    Ha a kiszolg\xE1l\xF3 rendszergazd\xE1ja vagy, k\xE9rj\xFCk, pr\xF3b\xE1ld meg a f\xE1jlt egy \xFCres oldalon bet\xF6lteni.
error-javascript-conflict-outdated = Megpr\xF3b\xE1lhatod tov\xE1bb\xE1 felt\xF6lteni a Ruffle egy \xFAjabb verzi\xF3j\xE1t is, amely megker\xFClheti a probl\xE9m\xE1t (a jelenlegi elavult: { $buildDate }).
error-csp-conflict =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt az inicializ\xE1l\xE1s sor\xE1n.
    A kiszolg\xE1l\xF3 tartalombiztons\xE1gi h\xE1zirendje nem teszi lehet\u0151v\xE9 a sz\xFCks\xE9ges \u201E.wasm\u201D \xF6sszetev\u0151k futtat\xE1s\xE1t.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk, keresd fel a Ruffle wikit seg\xEDts\xE9g\xE9rt.
error-unknown =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt, mik\xF6zben megpr\xF3b\xE1lta megjelen\xEDteni ezt a Flash-tartalmat.
    { $outdated ->
        [true] Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk, pr\xF3b\xE1ld meg felt\xF6lteni a Ruffle egy \xFAjabb verzi\xF3j\xE1t (a jelenlegi elavult: { $buildDate }).
       *[false] Ennek nem lett volna szabad megt\xF6rt\xE9nnie, ez\xE9rt nagyon h\xE1l\xE1sak lenn\xE9nk, ha jelezn\xE9d a hib\xE1t!
    }
`,"save-manager.ftl":`save-delete-prompt = Biztosan t\xF6r\xF6lni akarod ezt a ment\xE9st?
save-reload-prompt =
    Ennek a ment\xE9snek az esetleges konfliktus n\xE9lk\xFCli { $action ->
        [delete] t\xF6rl\xE9s\xE9hez
       *[replace] cser\xE9j\xE9hez
    } \xFAjra kell t\xF6lteni a tartalmat. M\xE9gis szeretn\xE9d folytatni?
save-download = Let\xF6lt\xE9s
save-replace = Csere
save-delete = T\xF6rl\xE9s
save-backup-all = Az \xF6sszes f\xE1jl let\xF6lt\xE9se
`,"volume-controls.ftl":`volume-controls-mute = N\xE9m\xEDt\xE1s
volume-controls-unmute = N\xE9m\xEDt\xE1s felold\xE1sa
`},"id-ID":{"context_menu.ftl":`context-menu-download-swf = Unduh SWF
context-menu-copy-debug-info = Salin info debug
context-menu-open-save-manager = Buka Manager Save
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tentang Ekstensi Ruffle ({ $version })
       *[other] Tentang Ruffle ({ $version })
    }
context-menu-hide = Sembunyikan Menu ini
context-menu-exit-fullscreen = Keluar dari layar penuh
context-menu-enter-fullscreen = Masuk mode layar penuh
context-menu-volume-controls = Pengaturan Volume
`,"messages.ftl":`message-cant-embed =
    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.
    Anda dapat mencoba membuka berkas di tab terpisah, untuk menghindari masalah ini.
panic-title = Terjadi kesalahan :(
more-info = Info lebih lanjut
run-anyway = Jalankan
continue = Lanjutkan
report-bug = Laporkan Bug
update-ruffle = Perbarui Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplikasi Desktop
ruffle-wiki = Kunjungi Wiki Ruffle
view-error-details = Tunjukan Detail Error
open-in-new-tab = Buka di Tab Baru
click-to-unmute = Tekan untuk menyalakan suara
clipboard-message-title = Menyalin dan Menempel di Ruffle
clipboard-message-copy = { " " } untuk menyalin
clipboard-message-cut = { " " } untuk memotong
clipboard-message-paste = { " " } untuk menempel
error-file-protocol =
    Sepertinya anda menjalankan Ruffle di protokol "file:".
    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.
    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.
error-javascript-config =
    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.
    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-not-found =
    Ruffle gagal memuat komponen berkas ".wasm" yang diperlukan.
    Jika Anda adalah administrator server ini, pastikan berkas telah diunggah dengan benar.
    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan "publicPath": silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-mime-type =
    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.
    Server web ini tidak melayani berkas ".wasm" dengan tipe MIME yang benar.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-invalid-swf =
    Ruffle tidak dapat membaca berkas yang diminta.
    Kemungkinan terbesar berkas yang diminta bukan berkas SWF valid.
error-swf-fetch =
    Ruffle gagal memuat berkas SWF Flash.
    Kemungkinan berkas tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.
    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.
error-swf-cors =
    Ruffle gagal memuat berkas SWF Flash.
    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-cors =
    Ruffle gagal memuat komponen berkas ".wasm" yang diperlukan.
    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-invalid =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya halaman ini memiliki berkas yang hilang atau tidak valid untuk menjalankan Ruffle.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-download =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.
    Jika tidak, silakan hubungi administrator situs web ini.
error-wasm-disabled-on-edge =
    Ruffle gagal memuat komponen berkas ".wasm" yang diperlukan.
    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik "Privasi, pencarian, dan layanan", turun ke bawah, dan matikan "Tingkatkan keamanan Anda di web".
    Ini akan memungkinkan browser Anda memuat berkas ".wasm" yang diperlukan.
    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.
error-javascript-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat berkas pada halaman kosong.
error-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).
error-csp-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen ".wasm" yang diperlukan untuk dijalankan.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-unknown =
    Ruffle mengalami masalah besar saat menampilkan konten Flash ini.
    { $outdated ->
        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).
       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!
    }
`,"save-manager.ftl":`save-delete-prompt = Anda yakin ingin menghapus berkas ini?
save-reload-prompt =
    Satu-satunya cara untuk { $action ->
        [delete] menghapus
       *[replace] mengganti
    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?
save-download = Unduh
save-replace = Ganti
save-delete = Hapus
save-backup-all = Unduh semua berkas penyimpanan
`,"volume-controls.ftl":`volume-controls-mute = Bisukan
volume-controls-unmute = Bunyikan
`},"it-IT":{"context_menu.ftl":`context-menu-download-swf = Scarica SWF
context-menu-copy-debug-info = Copia informazioni di debug
context-menu-open-save-manager = Apri gestione salvataggi
context-menu-about-ruffle =
    { $flavor ->
        [extension] Informazioni su Ruffle Extension ({ $version })
       *[other] Informazioni su Ruffle ({ $version })
    }
context-menu-hide = Nascondi questo menu
context-menu-exit-fullscreen = Esci dallo schermo intero
context-menu-enter-fullscreen = Entra a schermo intero
context-menu-volume-controls = Controlli volume
`,"messages.ftl":`message-cant-embed =
    Ruffle non \xE8 stato in grado di eseguire il Flash incorporato in questa pagina.
    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.
message-restored-from-bfcache =
    Il tuo browser ha ripristinato il contenuto del Flash da una sessione precedente.
    Per iniziare da capo, ricarica la pagina.
panic-title = Qualcosa \xE8 andato storto :(
more-info = Maggiori informazioni
run-anyway = Esegui comunque
continue = Continua
report-bug = Segnala un bug
update-ruffle = Aggiorna Ruffle
ruffle-demo = Demo web
ruffle-desktop = Applicazione desktop
ruffle-wiki = Visualizza la wiki di Ruffle
enable-hardware-acceleration = Sembra che l'accelerazione hardware sia disabilitata. Sebbene Ruffle possa funzionare, potrebbe essere molto lento. Puoi scoprire come abilitare l'accelerazione hardware seguendo il link seguente:
enable-hardware-acceleration-link = FAQ - Accelerazione hardware di Chrome
view-error-details = Visualizza dettagli errore
open-in-new-tab = Apri in una nuova scheda
click-to-unmute = Clicca per riattivare l'audio
clipboard-message-title = Copiando e incollando su Ruffle
clipboard-message-description =
    { $variant ->
      *[unsupported] Il tuo browser non ha supporto per accesso completo degli appunti,
       [access-denied] Accesso agli appunti e stato negato,
    } ma puoi sempre usare le scorciatoie al loro posto:
clipboard-message-copy = { " " } per copiare
clipboard-message-cut = { " " } per tagliare
clipboard-message-paste = { " " } per incollare
error-canvas-reload = Impossibile ricaricare con il canvas renderer quando \xE8 in uso.
error-file-protocol =
    Sembra che tu stia eseguendo Ruffle sul protocollo "file:".
    Questo non funziona come browser blocca molte funzionalit\xE0 di lavoro per motivi di sicurezza.
    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.
error-javascript-config =
    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.
    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro \xE8 in errore.
    Puoi anche consultare la wiki di Ruffle per aiuto.
error-wasm-not-found =
    Ruffle non \xE8 riuscito a caricare il componente di file ".wasm".
    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.
    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione "publicPath": si prega di consultare la wiki di Ruffle per aiuto.
error-wasm-mime-type =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo server web non serve ".wasm" file con il tipo MIME corretto.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per aiuto.
error-invalid-swf =
    Ruffle non pu\xF2 leggere il file richiesto.
    La ragione pi\xF9 probabile \xE8 che il file non \xE8 un SWF valido.
error-swf-fetch =
    Ruffle non \xE8 riuscito a caricare il file Flash SWF.
    La ragione pi\xF9 probabile \xE8 che il file non esiste pi\xF9, quindi non c'\xE8 nulla che Ruffle possa caricare.
    Prova a contattare l'amministratore del sito web per aiuto.
error-swf-cors =
    Ruffle non \xE8 riuscito a caricare il file SWF Flash.
    L'accesso al recupero probabilmente \xE8 stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per ricevere aiuto.
error-wasm-cors =
    Ruffle non \xE8 riuscito a caricare il componente di file ".wasm".
    L'accesso al recupero probabilmente \xE8 stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per ricevere aiuto.
error-wasm-invalid =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.
    Se sei l'amministratore del server, consulta la wiki di Ruffle per ricevere aiuto.
error-wasm-download =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo pu\xF2 spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.
    Altrimenti, contatta l'amministratore del sito.
error-wasm-disabled-on-edge =
    Ruffle non ha caricato il componente di file ".wasm" richiesto.
    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su "Privacy, ricerca e servizi", scorrendo verso il basso e disattivando "Migliora la tua sicurezza sul web".
    Questo permetter\xE0 al tuo browser di caricare i file ".wasm" richiesti.
    Se il problema persiste, potresti dover usare un browser diverso.
error-wasm-unsupported-browser =
    Il browser che stai usando non ha supporto per l'estensione WebAssembly che Ruffle richiede per funzionare.
    Per favore cambi con un browser supportato.
    Puoi trovare una lista di browser supportati nella Wiki.
error-javascript-conflict =
    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina utilizzi il codice JavaScript che \xE8 in conflitto con Ruffle.
    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.
error-javascript-conflict-outdated = Puoi anche provare a caricare una versione pi\xF9 recente di Ruffle che potrebbe aggirare il problema (l'attuale build \xE8 obsoleta: { $buildDate }).
error-csp-conflict =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.
    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta". asm" componente da eseguire.
    Se sei l'amministratore del server, consulta la Ruffle di wiki per aiuto.
error-url-invalid =
    Ruffle non \xE8 riuscito a caricare il file Flash SWF.
    La ragione pi\xF9 probabile \xE8 che un URL non valido per il file SWF \xE8 stato passato a Ruffle.
error-unknown =
    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.
    { $outdated ->
        [true] Se sei l'amministratore del server, prova a caricare una versione pi\xF9 recente di Ruffle (la versione attuale \xE8 obsoleta: { $buildDate }).
       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?
save-reload-prompt =
    L'unico modo per { $action ->
        [delete] delete
       *[replace] replace
    } questo salvataggio file senza potenziali conflitti \xE8 quello di ricaricare questo contenuto. Volete continuare comunque?
save-download = Scarica
save-replace = Sostituisci
save-delete = Elimina
save-backup-all = Scarica tutti i file di salvataggio
`,"volume-controls.ftl":`volume-controls-mute = Silenzia
volume-controls-unmute = Riattiva l'audio
`},"ja-JP":{"context_menu.ftl":`context-menu-download-swf = .swf\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9
context-menu-copy-debug-info = \u30C7\u30D0\u30C3\u30B0\u60C5\u5831\u3092\u30B3\u30D4\u30FC
context-menu-open-save-manager = \u30BB\u30FC\u30D6\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u3092\u958B\u304F
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle\u62E1\u5F35\u6A5F\u80FD\u306B\u3064\u3044\u3066 ({ $version })
       *[other] Ruffle\u306B\u3064\u3044\u3066 ({ $version })
    }
context-menu-hide = \u30E1\u30CB\u30E5\u30FC\u3092\u96A0\u3059
context-menu-exit-fullscreen = \u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u7D42\u4E86
context-menu-enter-fullscreen = \u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u3059\u308B
context-menu-volume-controls = \u97F3\u91CF\u8ABF\u7BC0
`,"messages.ftl":`message-cant-embed =
    Ruffle\u306F\u3053\u306E\u30DA\u30FC\u30B8\u306B\u57CB\u3081\u8FBC\u307E\u308C\u305F Flash \u3092\u5B9F\u884C\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002
    \u5225\u306E\u30BF\u30D6\u3067\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u3053\u3068\u3067\u3001\u3053\u306E\u554F\u984C\u3092\u89E3\u6C7A\u3067\u304D\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
message-restored-from-bfcache =
    \u30D6\u30E9\u30A6\u30B6\u306F\u3001\u524D\u56DE\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u304B\u3089Flash\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u5FA9\u5143\u3057\u307E\u3057\u305F\u3002
    \u6700\u521D\u304B\u3089\u958B\u59CB\u3059\u308B\u306B\u306F\u3001\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002
panic-title = \u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F :(
more-info = \u8A73\u7D30\u60C5\u5831
run-anyway = \u3068\u306B\u304B\u304F\u5B9F\u884C\u3059\u308B
continue = \u7D9A\u884C
report-bug = \u30D0\u30B0\u3092\u5831\u544A
update-ruffle = Ruffle\u3092\u66F4\u65B0
ruffle-demo = Web\u30C7\u30E2
ruffle-desktop = \u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA
ruffle-wiki = Ruffle Wiki\u3092\u95B2\u89A7
enable-hardware-acceleration = \u30CF\u30FC\u30C9\u30A6\u30A7\u30A2 \u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u3088\u3046\u3067\u3059\u3002Ruffle \u306F\u52D5\u4F5C\u3059\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u304C\u3001\u975E\u5E38\u306B\u9045\u304F\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2 \u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u6709\u52B9\u306B\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001\u4EE5\u4E0B\u306E\u30EA\u30F3\u30AF\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
enable-hardware-acceleration-link = \u3088\u304F\u3042\u308B\u8CEA\u554F - Chrome\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2 \u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3
view-error-details = \u30A8\u30E9\u30FC\u306E\u8A73\u7D30\u3092\u8868\u793A
open-in-new-tab = \u65B0\u3057\u3044\u30BF\u30D6\u3067\u958B\u304F
click-to-unmute = \u30AF\u30EA\u30C3\u30AF\u3067\u30DF\u30E5\u30FC\u30C8\u3092\u89E3\u9664
clipboard-message-title = Ruffle\u3067\u306E\u30B3\u30D4\u30FC\u3068\u8CBC\u308A\u4ED8\u3051
clipboard-message-description =
    { $variant ->
       *[unsupported] \u304A\u4F7F\u3044\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u3078\u306E\u30D5\u30EB\u30A2\u30AF\u30BB\u30B9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\u3002
        [access-denied] \u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u62D2\u5426\u3055\u308C\u307E\u3057\u305F\u3002
    } \u4EE3\u308F\u308A\u306B\u3001\u4EE5\u4E0B\u306E\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u3092\u5229\u7528\u3067\u304D\u307E\u3059:
clipboard-message-copy = { " " } : \u30B3\u30D4\u30FC
clipboard-message-cut = { " " } : \u5207\u308A\u53D6\u308A
clipboard-message-paste = { " " } : \u8CBC\u308A\u4ED8\u3051
error-canvas-reload = canvas\u30EC\u30F3\u30C0\u30E9\u4F7F\u7528\u4E2D\u306E\u305F\u3081\u3001canvas\u30EC\u30F3\u30C0\u30E9\u306B\u3088\u308B\u518D\u8AAD\u307F\u8FBC\u307F\u306F\u3067\u304D\u307E\u305B\u3093\u3002
error-file-protocol =
    Ruffle\u3092"file:"\u30D7\u30ED\u30C8\u30B3\u30EB\u3067\u4F7F\u7528\u3057\u3066\u3044\u308B\u3088\u3046\u3067\u3059\u3002
    \u30D6\u30E9\u30A6\u30B6\u306F\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4E0A\u306E\u7406\u7531\u304B\u3089\u591A\u304F\u306E\u6A5F\u80FD\u3092\u5236\u9650\u3057\u3066\u3044\u308B\u305F\u3081\u3001\u6B63\u3057\u304F\u52D5\u4F5C\u3057\u307E\u305B\u3093\u3002
    \u30ED\u30FC\u30AB\u30EB\u30B5\u30FC\u30D0\u30FC\u3092\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3059\u308B\u304B\u3001\u30A6\u30A7\u30D6\u30C7\u30E2\u307E\u305F\u306F\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002
error-javascript-config =
    JavaScript\u306E\u8A2D\u5B9A\u304C\u6B63\u3057\u304F\u306A\u3044\u305F\u3081\u3001Ruffle\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u8005\u306E\u65B9\u306F\u3001\u30A8\u30E9\u30FC\u306E\u8A73\u7D30\u304B\u3089\u3001\u3069\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u554F\u984C\u304C\u3042\u308B\u306E\u304B\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002
    Ruffle\u306Ewiki\u3092\u53C2\u7167\u3059\u308B\u3053\u3068\u3067\u3001\u89E3\u6C7A\u65B9\u6CD5\u304C\u898B\u3064\u304B\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
error-wasm-not-found =
    Ruffle\u306F\u3001\u5FC5\u8981\u306A\u300C.wasm\u300D\u30D5\u30A1\u30A4\u30EB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u6B63\u3057\u304F\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3055\u308C\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3092\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u554F\u984C\u304C\u89E3\u6C7A\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u300CpublicPath\u300D\u306E\u8A2D\u5B9A\u304C\u5FC5\u8981\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002Ruffle\u306Ewiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-wasm-mime-type =
    Ruffle\u306E\u521D\u671F\u5316\u4E2D\u306B\u5927\u304D\u306A\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u3053\u306EWeb\u30B5\u30FC\u30D0\u30FC\u306F\u300C.wasm\u300D\u30D5\u30A1\u30A4\u30EB\u3092\u6B63\u3057\u3044MIME\u30BF\u30A4\u30D7\u3067\u63D0\u4F9B\u3057\u3066\u3044\u307E\u305B\u3093\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001Ruffle\u306Ewiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-invalid-swf =
    Ruffle \u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30FC\u30B9\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    \u6700\u3082\u8003\u3048\u3089\u308C\u308B\u539F\u56E0\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u6709\u52B9\u306A SWF \u3067\u306A\u3044\u3053\u3068\u3067\u3059\u3002
error-swf-fetch =
    Ruffle\u304CFlash SWF\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    \u8AAD\u307F\u8FBC\u3080\u3079\u304D\u30D5\u30A1\u30A4\u30EB\u304C\u65E2\u306B\u5B58\u5728\u3057\u3066\u3044\u306A\u3044\u3053\u3068\u304C\u539F\u56E0\u3067\u3042\u308B\u53EF\u80FD\u6027\u304C\u9AD8\u3044\u3067\u3059\u3002
    Web\u30B5\u30A4\u30C8\u306E\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002
error-swf-cors =
    Ruffle\u306FSWF\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    CORS\u30DD\u30EA\u30B7\u30FC\u306E\u8A2D\u5B9A\u306B\u3088\u308A\u3001fetch\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002
    \u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u8005\u306E\u65B9\u306F\u3001Ruffle\u306Ewiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-wasm-cors =
    Ruffle\u306B\u5FC5\u8981\u3068\u306A\u308B\u300C.wasm\u300D\u30D5\u30A1\u30A4\u30EB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    CORS\u30DD\u30EA\u30B7\u30FC\u306B\u3088\u3063\u3066fetch\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001Ruffle wiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-wasm-invalid =
    Ruffle\u306E\u521D\u671F\u5316\u6642\u306B\u91CD\u5927\u306A\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u3053\u306E\u30DA\u30FC\u30B8\u306B\u306FRuffle\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u7121\u52B9\u306A\u30D5\u30A1\u30A4\u30EB\u304C\u3042\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001Ruffle\u306Ewiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-wasm-download =
    Ruffle\u306E\u521D\u671F\u5316\u6642\u306B\u91CD\u5927\u306A\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u3053\u306E\u554F\u984C\u306F\u81EA\u7136\u306B\u89E3\u6C7A\u3059\u308B\u5834\u5408\u304C\u3042\u308B\u305F\u3081\u3001\u30DA\u30FC\u30B8\u306E\u518D\u8AAD\u307F\u8FBC\u307F\u3092\u8A66\u3057\u3066\u304F\u3060\u3055\u3044\u3002
    \u305D\u308C\u3067\u3082\u89E3\u6C7A\u3057\u306A\u3044\u5834\u5408\u306F\u3001Web\u30B5\u30A4\u30C8\u306E\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002
error-wasm-disabled-on-edge =
    Ruffle\u306B\u5FC5\u8981\u3068\u306A\u308B\u300C.wasm\u300D\u30D5\u30A1\u30A4\u30EB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    \u554F\u984C\u89E3\u6C7A\u306E\u305F\u3081\u3001\u30D6\u30E9\u30A6\u30B6\u30FC\u306E\u8A2D\u5B9A\u753B\u9762\u304B\u3089\u3001\u300C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u3001\u691C\u7D22\u3001\u30B5\u30FC\u30D3\u30B9\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u4E0B\u306B\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3066\u300CWeb\u4E0A\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u3092\u5F37\u5316\u3059\u308B\u300D\u3092\u30AA\u30D5\u306B\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002
    \u5FC5\u8981\u3068\u306A\u308B\u300C.wasm\u300D\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u307F\u8FBC\u307F\u304C\u8A31\u53EF\u3055\u308C\u307E\u3059\u3002
    \u305D\u308C\u3067\u3082\u554F\u984C\u304C\u89E3\u6C7A\u3057\u306A\u3044\u5834\u5408\u3001\u5225\u306E\u30D6\u30E9\u30A6\u30B6\u30FC\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
error-wasm-unsupported-browser =
    \u73FE\u5728\u4F7F\u7528\u4E2D\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u3001Ruffle\u306E\u52D5\u4F5C\u306B\u5FC5\u8981\u306AWebAssembly\u62E1\u5F35\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\u3002
    \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30D6\u30E9\u30A6\u30B6\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002
    \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30D6\u30E9\u30A6\u30B6\u4E00\u89A7\u306F\u3001Wiki\u306B\u8A18\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002
error-javascript-conflict =
    Ruffle\u306E\u521D\u671F\u5316\u6642\u306B\u91CD\u5927\u306A\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u3053\u306E\u30DA\u30FC\u30B8\u3067\u306FRuffle\u3068\u7AF6\u5408\u3059\u308BJavaScript\u30B3\u30FC\u30C9\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001\u7A7A\u767D\u306E\u30DA\u30FC\u30B8\u3067\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u307F\u3057\u76F4\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002
error-javascript-conflict-outdated = \u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u306ERuffle\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u3053\u3068\u3067\u3001\u3053\u306E\u554F\u984C\u3092\u56DE\u907F\u3067\u304D\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002(\u73FE\u5728\u306E\u30D3\u30EB\u30C9\u306F\u53E4\u3044\u7269\u3067\u3059:{ $buildDate })
error-csp-conflict =
    Ruffle\u306E\u521D\u671F\u5316\u6642\u306B\u91CD\u5927\u306A\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u3053\u306EWeb\u30B5\u30FC\u30D0\u30FC\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30DD\u30EA\u30B7\u30FC\u304C\u5B9F\u884C\u306B\u5FC5\u8981\u3068\u306A\u308B\u300C.wasm\u300D\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9F\u884C\u3092\u8A31\u53EF\u3057\u3066\u3044\u307E\u305B\u3093\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001Ruffle\u306Ewiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-url-invalid =
    Ruffle\u306FSWF\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    Ruffle\u306B\u6E21\u3055\u308C\u305FURL\u304C\u7121\u52B9\u3067\u3042\u308B\u3053\u3068\u304C\u539F\u56E0\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
error-unknown =
    Flash\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u793A\u3059\u308B\u969B\u306BRuffle\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    { $outdated ->
        [true] \u73FE\u5728\u4F7F\u7528\u3057\u3066\u3044\u308B\u30D3\u30EB\u30C9\u306F\u6700\u65B0\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u8005\u306E\u65B9\u306F\u3001\u6700\u65B0\u7248\u306ERuffle\u306B\u66F4\u65B0\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044(\u73FE\u5728\u5229\u7528\u4E2D\u306E\u30D3\u30EB\u30C9: { $buildDate })\u3002
       *[false] \u60F3\u5B9A\u5916\u306E\u554F\u984C\u306A\u306E\u3067\u3001\u30D0\u30B0\u3068\u3057\u3066\u5831\u544A\u3057\u3066\u3044\u305F\u3060\u3051\u308B\u3068\u5B09\u3057\u3044\u3067\u3059!
    }
`,"save-manager.ftl":`save-delete-prompt = \u3053\u306E\u30BB\u30FC\u30D6\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B?
save-reload-prompt =
    \u30BB\u30FC\u30D6\u30D5\u30A1\u30A4\u30EB\u3092\u7AF6\u5408\u306E\u53EF\u80FD\u6027\u306A\u304F { $action ->
        [delete] \u524A\u9664\u3059\u308B
       *[replace] \u7F6E\u304D\u63DB\u3048\u308B
    } \u305F\u3081\u306B\u3001\u3053\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002\u7D9A\u884C\u3057\u307E\u3059\u304B\uFF1F
save-download = \u30C0\u30A6\u30F3\u30ED\u30FC\u30C9
save-replace = \u7F6E\u304D\u63DB\u3048
save-delete = \u524A\u9664
save-backup-all = \u3059\u3079\u3066\u306E\u30BB\u30FC\u30D6\u30D5\u30A1\u30A4\u30EB\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9
`,"volume-controls.ftl":`volume-controls-mute = \u30DF\u30E5\u30FC\u30C8
volume-controls-unmute = \u30DF\u30E5\u30FC\u30C8\u89E3\u9664
`},"ko-KR":{"context_menu.ftl":`context-menu-download-swf = SWF \uB2E4\uC6B4\uB85C\uB4DC
context-menu-copy-debug-info = \uB514\uBC84\uADF8 \uC815\uBCF4 \uBCF5\uC0AC
context-menu-open-save-manager = \uC800\uC7A5 \uAD00\uB9AC\uC790 \uC5F4\uAE30
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle \uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8 \uC815\uBCF4 ({ $version })
       *[other] Ruffle \uC815\uBCF4 ({ $version })
    }
context-menu-hide = \uC774 \uBA54\uB274 \uC228\uAE30\uAE30
context-menu-exit-fullscreen = \uC804\uCCB4\uD654\uBA74 \uB098\uAC00\uAE30
context-menu-enter-fullscreen = \uC804\uCCB4\uD654\uBA74\uC73C\uB85C \uC5F4\uAE30
context-menu-volume-controls = \uC74C\uB7C9 \uC870\uC808
`,"messages.ftl":`message-cant-embed = Ruffle\uC774 \uC774 \uD398\uC774\uC9C0\uC5D0 \uD3EC\uD568\uB41C \uD50C\uB798\uC2DC\uB97C \uC2E4\uD589\uD560 \uC218 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4. \uBCC4\uB3C4\uC758 \uD0ED\uC5D0\uC11C \uD30C\uC77C\uC744 \uC5F4\uC5B4\uBD04\uC73C\uB85C\uC11C \uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
message-restored-from-bfcache =
    \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC774\uC804 \uC138\uC158\uC5D0\uC11C \uD50C\uB798\uC2DC \uCF58\uD150\uCE20\uB97C \uBCF5\uC6D0\uD588\uC2B5\uB2C8\uB2E4.
    \uC0C8\uB85C \uC2DC\uC791\uD558\uB824\uBA74 \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C \uACE0\uCE68\uD558\uC138\uC694.
panic-title = \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4 :(
more-info = \uCD94\uAC00 \uC815\uBCF4
run-anyway = \uADF8\uB798\uB3C4 \uC2E4\uD589\uD558\uAE30
continue = \uACC4\uC18D\uD558\uAE30
report-bug = \uBC84\uADF8 \uC81C\uBCF4
update-ruffle = Ruffle \uC5C5\uB370\uC774\uD2B8
ruffle-demo = \uC6F9 \uB370\uBAA8
ruffle-desktop = \uB370\uC2A4\uD06C\uD1B1 \uC560\uD50C\uB9AC\uCF00\uC774\uC158
ruffle-wiki = Ruffle \uC704\uD0A4 \uBCF4\uAE30
enable-hardware-acceleration = \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uB294 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4. Ruffle\uC740 \uACC4\uC18D \uC791\uB3D9\uD558\uC9C0\uB9CC \uB9E4\uC6B0 \uB290\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uB9C1\uD06C\uB97C \uCC38\uACE0\uD558\uC5EC \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC744 \uD65C\uC131\uD654\uD558\uB294 \uBC29\uBC95\uC744 \uCC3E\uC544\uBCF4\uC138\uC694:
enable-hardware-acceleration-link = FAQ - \uD06C\uB86C \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D
view-error-details = \uC624\uB958 \uC138\uBD80 \uC815\uBCF4 \uBCF4\uAE30
open-in-new-tab = \uC0C8 \uD0ED\uC5D0\uC11C \uC5F4\uAE30
click-to-unmute = \uD074\uB9AD\uD558\uC5EC \uC74C\uC18C\uAC70 \uD574\uC81C
clipboard-message-title = Ruffle\uC5D0\uC11C \uBCF5\uC0AC\uD558\uACE0 \uBD99\uC5EC\uB123\uAE30
clipboard-message-description =
    { $variant ->
       *[unsupported] \uC774 \uBE0C\uB77C\uC6B0\uC800\uB294 \uD074\uB9BD\uBCF4\uB4DC \uC561\uC138\uC2A4\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4,
        [access-denied] \uD074\uB9BD\uBCF4\uB4DC \uC561\uC138\uC2A4\uAC00 \uAC70\uC808\uB418\uC5C8\uC2B5\uB2C8\uB2E4,
    } \uD558\uC9C0\uB9CC \uB2E4\uC74C \uB2E8\uCD95\uD0A4\uB97C \uB300\uC2E0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:
clipboard-message-copy = { " " } \uBCF5\uC0AC
clipboard-message-cut = { " " } \uC798\uB77C\uB0B4\uAE30
clipboard-message-paste = { " " } \uBD99\uC5EC\uB123\uAE30
error-canvas-reload = \uCE94\uBC84\uC2A4 \uB80C\uB354\uB7EC\uAC00 \uC774\uBBF8 \uC0AC\uC6A9 \uC911\uC778 \uACBD\uC6B0 \uCE94\uBC84\uC2A4 \uB80C\uB354\uB7EC\uB85C \uB2E4\uC2DC \uB85C\uB4DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
error-file-protocol =
    Ruffle\uC744 "file:" \uD504\uB85C\uD1A0\uCF5C\uC5D0\uC11C \uC2E4\uD589\uD558\uACE0 \uC788\uB294 \uAC83\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4.
    \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC774 \uD504\uB85C\uD1A0\uCF5C\uC744 \uBCF4\uC548\uC0C1\uC758 \uC774\uC720\uB85C \uB9CE\uC740 \uAE30\uB2A5\uC744 \uC791\uB3D9\uD558\uC9C0 \uC54A\uAC8C \uCC28\uB2E8\uD558\uBBC0\uB85C \uC774 \uBC29\uBC95\uC740 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
    \uB300\uC2E0, \uB85C\uCEEC \uC11C\uBC84\uB97C \uC9C1\uC811 \uC5F4\uC5B4\uC11C \uC124\uC815\uD558\uAC70\uB098 \uC6F9 \uB370\uBAA8 \uB610\uB294 \uB370\uC2A4\uD06C\uD1B1 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0AC\uC6A9\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.
error-javascript-config =
    \uC798\uBABB\uB41C \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC124\uC815\uC73C\uB85C \uC778\uD574 Ruffle\uC5D0\uC11C \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uC778 \uACBD\uC6B0, \uC624\uB958 \uC138\uBD80\uC0AC\uD56D\uC744 \uD655\uC778\uD558\uC5EC \uC5B4\uB5A4 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC798\uBABB\uB418\uC5C8\uB294\uC9C0 \uC54C\uC544\uBCF4\uC138\uC694.
    \uB610\uB294 Ruffle \uC704\uD0A4\uB97C \uD1B5\uD574 \uB3C4\uC6C0\uC744 \uBC1B\uC544 \uBCFC \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.
error-wasm-not-found =
    Ruffle\uC774 ".wasm" \uD544\uC218 \uD30C\uC77C \uAD6C\uC131\uC694\uC18C\uB97C \uB85C\uB4DC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 \uD30C\uC77C\uC774 \uC62C\uBC14\uB974\uAC8C \uC5C5\uB85C\uB4DC\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694.
    \uBB38\uC81C\uAC00 \uC9C0\uC18D\uB41C\uB2E4\uBA74 "publicPath" \uC635\uC158\uC744 \uC0AC\uC6A9\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4: Ruffle \uC704\uD0A4\uB97C \uCC38\uC870\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC73C\uC138\uC694.
error-wasm-mime-type =
    Ruffle\uC774 \uCD08\uAE30\uD654\uB97C \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uC774 \uC6F9 \uC11C\uBC84\uB294 \uC62C\uBC14\uB978 MIME \uC720\uD615\uC758 ".wasm" \uD30C\uC77C\uC744 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 Ruffle \uC704\uD0A4\uB97C \uD1B5\uD574 \uB3C4\uC6C0\uC744 \uBC1B\uC73C\uC138\uC694.
error-invalid-swf =
    Ruffle\uC774 \uC694\uCCAD\uD55C \uD30C\uC77C\uC744 \uBD84\uC11D\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.
    \uC694\uCCAD\uD55C \uD30C\uC77C\uC774 \uC720\uD6A8\uD55C SWF \uD30C\uC77C\uC774 \uC544\uB2D0 \uAC00\uB2A5\uC131\uC774 \uB192\uC2B5\uB2C8\uB2E4.
error-swf-fetch =
    Ruffle\uC774 \uD50C\uB798\uC2DC SWF \uD30C\uC77C\uC744 \uB85C\uB4DC\uD558\uB294 \uB370 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.
    \uC774\uB294 \uC8FC\uB85C \uD30C\uC77C\uC774 \uB354 \uC774\uC0C1 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC544 Ruffle\uC774 \uB85C\uB4DC\uD560 \uC218 \uC788\uB294 \uAC83\uC774 \uC5C6\uC744 \uAC00\uB2A5\uC131\uC774 \uB192\uC2B5\uB2C8\uB2E4.
    \uC6F9\uC0AC\uC774\uD2B8 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC544\uBCF4\uC138\uC694.
error-swf-cors =
    Ruffle\uC774 \uD50C\uB798\uC2DC SWF \uD30C\uC77C\uC744 \uB85C\uB4DC\uD558\uB294 \uB370 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.
    CORS \uC815\uCC45\uC5D0 \uC758\uD574 \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uAC00 \uCC28\uB2E8\uB418\uC5C8\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 Ruffle \uC704\uD0A4\uB97C \uCC38\uC870\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-wasm-cors =
    Ruffle\uC774 ".wasm" \uD544\uC218 \uD30C\uC77C \uAD6C\uC131\uC694\uC18C\uB97C \uB85C\uB4DC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.
    CORS \uC815\uCC45\uC5D0 \uC758\uD574 \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uAC00 \uCC28\uB2E8\uB418\uC5C8\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 Ruffle \uC704\uD0A4\uB97C \uCC38\uC870\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-wasm-invalid =
    Ruffle\uC774 \uCD08\uAE30\uD654\uB97C \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uC774 \uD398\uC774\uC9C0\uC5D0 Ruffle\uC744 \uC2E4\uD589\uD558\uAE30 \uC704\uD55C \uD30C\uC77C\uC774 \uB204\uB77D\uB418\uC5C8\uAC70\uB098 \uC798\uBABB\uB41C \uAC83 \uAC19\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 Ruffle \uC704\uD0A4\uB97C \uCC38\uC870\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-wasm-download =
    Ruffle\uC774 \uCD08\uAE30\uD654\uB97C \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uC774 \uBB38\uC81C\uB294 \uB54C\uB54C\uB85C \uBC14\uB85C \uD574\uACB0\uB420 \uC218 \uC788\uC73C\uBBC0\uB85C \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C\uACE0\uCE68\uD558\uC5EC \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uBCF4\uC138\uC694.
    \uADF8\uB798\uB3C4 \uBB38\uC81C\uAC00 \uC9C0\uC18D\uB41C\uB2E4\uBA74, \uC6F9\uC0AC\uC774\uD2B8 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD574\uC8FC\uC138\uC694.
error-wasm-disabled-on-edge =
    Ruffle\uC774 ".wasm" \uD544\uC218 \uD30C\uC77C \uAD6C\uC131\uC694\uC18C\uB97C \uB85C\uB4DC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.
    \uC774\uB97C \uD574\uACB0\uD558\uB824\uBA74 \uBE0C\uB77C\uC6B0\uC800 \uC124\uC815\uC5D0\uC11C "\uAC1C\uC778 \uC815\uBCF4, \uAC80\uC0C9 \uBC0F \uC11C\uBE44\uC2A4"\uB97C \uD074\uB9AD\uD55C \uD6C4, \uD558\uB2E8\uC73C\uB85C \uC2A4\uD06C\uB864\uD558\uC5EC "\uC6F9\uC5D0\uC11C \uBCF4\uC548 \uAC15\uD654" \uAE30\uB2A5\uC744 \uAEBC\uC57C \uD569\uB2C8\uB2E4.
    \uC774\uB294 \uD544\uC694\uD55C ".wasm" \uD30C\uC77C\uC744 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uB85C\uB4DC\uD560 \uC218 \uC788\uB3C4\uB85D \uD5C8\uC6A9\uD569\uB2C8\uB2E4.
    \uC774 \uBB38\uC81C\uAC00 \uC9C0\uC18D\uB420 \uACBD\uC6B0 \uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC0AC\uC6A9\uD574\uC57C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-wasm-unsupported-browser =
    \uC0AC\uC6A9 \uC911\uC778 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C Ruffle\uC774 \uD544\uC694\uD55C \uC6F9 \uC5B4\uC148\uBE14\uB9AC \uD655\uC7A5\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
    \uC9C0\uC6D0\uB418\uB294 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC804\uD658\uD558\uC138\uC694. \uC9C0\uC6D0\uB418\uB294 \uBE0C\uB77C\uC6B0\uC800 \uBAA9\uB85D\uC740 \uC704\uD0A4\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-javascript-conflict =
    Ruffle\uC774 \uCD08\uAE30\uD654\uB97C \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uC774 \uD398\uC774\uC9C0\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uCF54\uB4DC\uAC00 Ruffle\uACFC \uCDA9\uB3CC\uD558\uB294 \uAC83\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 \uBE48 \uD398\uC774\uC9C0\uC5D0\uC11C \uD30C\uC77C\uC744 \uB85C\uB4DC\uD574\uBCF4\uC138\uC694.
error-javascript-conflict-outdated = \uB610\uD55C Ruffle\uC758 \uCD5C\uC2E0 \uBC84\uC804\uC744 \uC5C5\uB85C\uB4DC\uD558\uB294 \uAC83\uC744 \uC2DC\uB3C4\uD558\uC5EC \uBB38\uC81C\uB97C \uC6B0\uD68C\uD574\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. (\uD604\uC7AC \uBE4C\uB4DC\uAC00 \uC624\uB798\uB418\uC5C8\uC2B5\uB2C8\uB2E4: { $buildDate }).
error-csp-conflict =
    Ruffle\uC774 \uCD08\uAE30\uD654\uB97C \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uC774 \uC6F9 \uC11C\uBC84\uC758 CSP(Content Security Policy) \uC815\uCC45\uC774 ".wasm" \uD544\uC218 \uAD6C\uC131\uC694\uC18C\uB97C \uC2E4\uD589\uD558\uB294 \uAC83\uC744 \uD5C8\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 Ruffle \uC704\uD0A4\uB97C \uCC38\uC870\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-unknown =
    Ruffle\uC774 \uD50C\uB798\uC2DC \uCF58\uD150\uCE20\uB97C \uD45C\uC2DC\uD558\uB824\uACE0 \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    { $outdated ->
        [true] \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74, Ruffle\uC758 \uCD5C\uC2E0 \uBC84\uC804\uC744 \uC5C5\uB85C\uB4DC\uD558\uC5EC \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uBCF4\uC138\uC694. (\uD604\uC7AC \uBE4C\uB4DC\uAC00 \uC624\uB798\uB418\uC5C8\uC2B5\uB2C8\uB2E4: { $buildDate }).
       *[false] \uC774\uB7F0 \uD604\uC0C1\uC774 \uBC1C\uC0DD\uD574\uC11C\uB294 \uC548\uB418\uBBC0\uB85C, \uBC84\uADF8\uB97C \uC81C\uBCF4\uD574\uC8FC\uC2E0\uB2E4\uBA74 \uAC10\uC0AC\uD558\uACA0\uC2B5\uB2C8\uB2E4!
    }
`,"save-manager.ftl":`save-delete-prompt = \uC815\uB9D0\uB85C \uC774 \uC138\uC774\uBE0C \uD30C\uC77C\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
save-reload-prompt =
    \b\uC774 \uD30C\uC77C\uC744 \uC7A0\uC7AC\uC801\uC778 \uCDA9\uB3CC \uC5C6\uC774 { $action ->
        [delete] \uC0AD\uC81C
       *[replace] \uAD50\uCCB4
    }\uD558\uB824\uBA74 \uCF58\uD150\uCE20\uB97C \uB2E4\uC2DC \uB85C\uB4DC\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB798\uB3C4 \uACC4\uC18D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
save-download = \uB2E4\uC6B4\uB85C\uB4DC
save-replace = \uAD50\uCCB4
save-delete = \uC0AD\uC81C
save-backup-all = \uBAA8\uB4E0 \uC800\uC7A5 \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC
`,"volume-controls.ftl":`volume-controls-mute = \uC74C\uC18C\uAC70
volume-controls-unmute = \uC74C\uC18C\uAC70 \uD574\uC81C
`},"nb-NO":{"context_menu.ftl":`context-menu-download-swf = Last ned SWF
context-menu-copy-debug-info = Kopier feils\xF8kningsinfo
context-menu-open-save-manager = \xC5pne lagringsadministrasjon
context-menu-about-ruffle =
    { $flavor ->
        [extension] Om Ruffle-tillegget ({ $version })
       *[other] Om Ruffle ({ $version })
    }
context-menu-hide = Skjul denne menyen
context-menu-exit-fullscreen = Avslutt fullskjermmodus
context-menu-enter-fullscreen = Fullskjermmodus
context-menu-volume-controls = Justering av lydniv\xE5
`,"messages.ftl":"","save-manager.ftl":`save-delete-prompt = Er du sikker p\xE5 at du vil slette filen?
save-download = Last ned
save-replace = Erstatt
save-delete = Slett
`,"volume-controls.ftl":`volume-controls-mute = Demp
volume-controls-unmute = Skru p\xE5 lyd
`},"nl-NL":{"context_menu.ftl":`context-menu-download-swf = SWF downloaden
context-menu-copy-debug-info = Kopieer debuginformatie
context-menu-open-save-manager = Open opgeslagen-data-manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] Over Ruffle Uitbreiding ({ $version })
       *[other] Over Ruffle ({ $version })
    }
context-menu-hide = Verberg dit menu
context-menu-exit-fullscreen = Verlaat volledig scherm
context-menu-enter-fullscreen = Naar volledig scherm
context-menu-volume-controls = Volumeregelaars
`,"messages.ftl":`message-cant-embed =
    Ruffle kon de Flash-inhoud op de pagina niet draaien.
    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.
message-restored-from-bfcache =
    Je browser heeft deze Flash-inhoud uit een eerdere sessie hersteld.
    Herlaad de pagina voor een frisse start.
panic-title = Er ging iets mis :(
more-info = Meer informatie
run-anyway = Toch starten
continue = Doorgaan
report-bug = Bug rapporteren
update-ruffle = Ruffle updaten
ruffle-demo = Web Demo
ruffle-desktop = Desktopapplicatie
ruffle-wiki = Bekijk de Ruffle Wiki
enable-hardware-acceleration = Het lijkt erop dat hardwareversnelling is uitgeschakeld. Ruffle zou hierdoor erg traag kunnen zijn. In de link hieronder wordt uitgelegd hoe je hardwareversnelling kunt inschakelen:
enable-hardware-acceleration-link = FAQ - Chrome Hardwareversnelling
view-error-details = Foutdetails tonen
open-in-new-tab = Openen in een nieuw tabblad
click-to-unmute = Klik om te ontdempen
clipboard-message-title = Kopi\xEBren en plakken in Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Je browser heeft geen ondersteuning voor volledige toegang tot het klembord,
        [access-denied] Toegang tot het klembord werd geweigerd,
    } maar je kunt altijd nog de volgende sneltoetsen gebruiken:
clipboard-message-copy = { " " } om te kopi\xEBren
clipboard-message-cut = { " " } om te knippen
clipboard-message-paste = { " " } om te plakken
error-canvas-reload = De canvas renderer kan niet herladen worden wanneer deze al in gebruik is.
error-file-protocol =
    Het lijkt erop dat je Ruffle gebruikt met het "file" protocol.
    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.
    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.
error-javascript-config =
    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.
    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.
    Je kan ook in de Ruffle wiki kijken voor hulp.
error-wasm-not-found =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Als je de serverbeheerder bent, controleer dan of het bestaand juist is ge\xFCpload.
    Mocht het probleem blijven voordoen, moet je misschien de "publicPath" instelling gebruiken: zie ook de Ruffle wiki voor hulp.
error-wasm-mime-type =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Deze webserver serveert ".wasm" bestanden niet met het juiste MIME type.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-invalid-swf =
    Ruffle kon het gevraagde bestand niet verwerken.
    Waarschijnlijk is het geen geldig SWF bestand.
error-swf-fetch =
    Ruffle kon het Flash SWF bestand niet inladen.
    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.
    Probeer contact op te nemen met de websitebeheerder voor hulp.
error-swf-cors =
    Ruffle kon het Flash SWD bestand niet inladen.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-cors =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-invalid =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-download =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.
    Zo niet, neem dan contact op met de websitebeheerder.
error-wasm-disabled-on-edge =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Om dit op te lossen, ga naar je browserinstellingen, klik op "Privacy, zoeken en diensten", scroll omlaag, en schakel "Verbeter je veiligheid op he web" uit.
    Dan kan je browser wel de vereiste ".wasm" bestanden inladen.
    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.
error-wasm-unsupported-browser =
    De browser die je gebruikt ondersteunt de WebAssembly extensies die Ruffle nodig heeft niet.
    Gebruik alsjeblieft een ondersteunde browser.
    Je kunt een lijst aan ondersteunde browsers vinden op de Wiki.
error-javascript-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.
    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.
error-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).
error-csp-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het CSP-beleid staat niet toe dat het vereiste ".wasm" component kan draaien.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-unknown =
    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.
    { $outdated ->
        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).
       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!
    }
`,"save-manager.ftl":`save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?
save-reload-prompt =
    De enige manier om deze opgeslagen data te { $action ->
        [delete] verwijderen
       *[replace] vervangen
    } zonder potenti\xEBle problemen is door de inhoud opnieuw te laden. Toch doorgaan?
save-download = Downloaden
save-replace = Vervangen
save-delete = Verwijderen
save-backup-all = Download alle opgeslagen data
`,"volume-controls.ftl":`volume-controls-mute = Dempen
volume-controls-unmute = Dempen opheffen
`},"pl-PL":{"context_menu.ftl":`context-menu-download-swf = Pobierz SWF
context-menu-copy-debug-info = Kopiuj informacje debugowania
context-menu-open-save-manager = Otw\xF3rz menad\u017Cer zapis\xF3w
context-menu-about-ruffle =
    { $flavor ->
        [extension] O rozszerzeniu Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Ukryj to menu
context-menu-exit-fullscreen = Opu\u015B\u0107 tryb pe\u0142noekranowy
context-menu-enter-fullscreen = W\u0142\u0105cz tryb pe\u0142noekranowy
context-menu-volume-controls = Sterowanie g\u0142o\u015Bno\u015Bci\u0105
`,"messages.ftl":`message-cant-embed =
    Ruffle nie by\u0142o w stanie uruchomi\u0107 zawarto\u015Bci Flash w tej stronie.
    Mo\u017Cesz spr\xF3bowa\u0107 otworzy\u0107 plik w nowej karcie, aby unikn\u0105\u0107 tego problemu.
message-restored-from-bfcache =
    Twoja przegl\u0105darka przywr\xF3ci\u0142a t\u0119 zawarto\u015B\u0107 Flash z poprzedniej sesji.
    Aby zacz\u0105\u0107 od nowa, od\u015Bwie\u017C stron\u0119.
panic-title = Co\u015B posz\u0142o nie tak :(
more-info = Wi\u0119cej informacji
run-anyway = Uruchom mimo tego
continue = Kontynuuj
report-bug = Zg\u0142o\u015B b\u0142\u0105d
update-ruffle = Zaktualizuj Ruffle
ruffle-demo = Webowe demo
ruffle-desktop = Aplikacja na komputer
ruffle-wiki = Zobacz Wiki Ruffle
enable-hardware-acceleration = Wygl\u0105da na to, \u017Ce akceleracja grafiki jest wy\u0142\u0105czona. Chocia\u017C Ruffle mo\u017Ce dzia\u0142a\u0107, mo\u017Ce by\u0107 bardzo powolny. Mo\u017Cesz dowiedzie\u0107 si\u0119, jak w\u0142\u0105czy\u0107 akceleracj\u0119 grafiki, klikaj\u0105c poni\u017Cszy link:
enable-hardware-acceleration-link = FAQ \u2014 Akceleracja Grafiki Chrome
view-error-details = Zobacz szczeg\xF3\u0142y b\u0142\u0119du
open-in-new-tab = Otw\xF3rz w nowej karcie
click-to-unmute = Kliknij aby wy\u0142\u0105czy\u0107 wyciszenie
clipboard-message-title = Kopiowanie i wklejanie w Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Twoja przegl\u0105darka nie obs\u0142uguje pe\u0142nego dost\u0119pu do schowka,
        [access-denied] Odm\xF3wiono dost\u0119pu do schowka,
    } ale zawsze mo\u017Cesz stosowa\u0107 te skr\xF3ty klawiszowe:
clipboard-message-copy = { " " } w celu skopiowania
clipboard-message-cut = { " " } w celu wyci\u0119cia
clipboard-message-paste = { " " } w celu wklejenia
error-canvas-reload = Nie mo\u017Cna ponownie za\u0142adowa\u0107 renderera canvas, gdy jest ju\u017C on u\u017Cywany.
error-file-protocol =
    Wygl\u0105da na to, \u017Ce u\u017Cywasz Ruffle z protoko\u0142em "file:".
    To nie dzia\u0142a, poniewa\u017C przegl\u0105darka blokuje wiele funkcji przed dzia\u0142aniem ze wzgl\u0119d\xF3w bezpiecze\u0144stwa.
    Zamiast tego zach\u0119camy do konfiguracji lokalnego serwera lub u\u017Cycia webowego demo lub aplikacji desktopowej.
error-javascript-config =
    Ruffle napotka\u0142 powa\u017Cny problem z powodu nieprawid\u0142owej konfiguracji JavaScript.
    Je\u015Bli jeste\u015B administratorem serwera, prosimy o sprawdzenie szczeg\xF3\u0142\xF3w b\u0142\u0119du, aby dowiedzie\u0107 si\u0119, kt\xF3ry parametr jest b\u0142\u0119dny.
    Mo\u017Cesz r\xF3wnie\u017C zapozna\u0107 si\u0119 z wiki Ruffle, aby uzyska\u0107 pomoc.
error-wasm-not-found =
    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 wymaganego komponentu pliku ".wasm".
    Je\u015Bli jeste\u015B administratorem serwera, upewnij si\u0119, \u017Ce plik zosta\u0142 poprawnie przes\u0142any.
    Je\u015Bli problem b\u0119dzie si\u0119 powtarza\u0142, by\u0107 mo\u017Ce b\u0119dziesz musia\u0142 u\u017Cy\u0107 ustawienia "publicPath": zapoznaj si\u0119 z wiki Ruffle, aby uzyska\u0107 pomoc.
error-wasm-mime-type =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by zainicjowania.
    Ten serwer nie serwuje plik\xF3w ".wasm" z poprawnym typem MIME.
    Je\u015Bli jeste\u015B administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.
error-invalid-swf =
    Ruffle nie mo\u017Ce przetworzy\u0107 \u017C\u0105danego pliku.
    Prawdopodobnie to nie jest poprawny plik SWF.
error-swf-fetch =
    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 pliku Flash SWF.
    Najbardziej prawdopodobnym powodem jest to, \u017Ce plik ju\u017C nie istnieje, wi\u0119c Ruffle nie ma co za\u0142adowa\u0107.
    Spr\xF3buj skontaktowa\u0107 si\u0119 z administratorem witryny, aby uzyska\u0107 pomoc.
error-swf-cors =
    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 pliku Flash SWF.
    Pobieranie zosta\u0142o prawdopodobnie zablokowane przez polityk\u0119 CORS.
    Je\u015Bli jeste\u015B administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.
error-wasm-cors =
    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 wymaganego komponentu pliku ".wasm".
    Pobieranie zosta\u0142o prawdopodobnie zablokowane przez polityk\u0119 CORS.
    Je\u015Bli jeste\u015B administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.
error-wasm-invalid =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by zainicjowania.
    Wygl\u0105da na to, \u017Ce ta strona ma brakuj\u0105ce lub nieprawid\u0142owe pliki niezb\u0119dne do uruchomienia Ruffle.
    Je\u015Bli jeste\u015B administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.
error-wasm-download =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by zainicjowania.
    Ten problem cz\u0119sto sam si\u0119 rozwi\u0105zuje, wi\u0119c mo\u017Cesz spr\xF3bowa\u0107 od\u015Bwie\u017Cy\u0107 stron\u0119.
    W przeciwnym razie skontaktuj si\u0119 z administratorem witryny.
error-wasm-disabled-on-edge =
    Ruffle nie uda\u0142o si\u0119 za\u0142adowa\u0107 wymaganego komponentu pliku ".wasm".
    Aby to naprawi\u0107, spr\xF3buj otworzy\u0107 ustawienia przegl\u0105darki, klikaj\u0105c "Prywatno\u015B\u0107, wyszukiwanie i us\u0142ugi", przewijaj\u0105c w d\xF3\u0142 i wy\u0142\u0105czaj\u0105c "Zwi\u0119ksz bezpiecze\u0144stwo w sieci".
    Pozwoli to przegl\u0105darce za\u0142adowa\u0107 wymagane pliki ".wasm".
    Je\u015Bli problem b\u0119dzie si\u0119 powtarza\u0142, by\u0107 mo\u017Ce b\u0119dziesz musia\u0142 u\u017Cy\u0107 innej przegl\u0105darki.
error-wasm-unsupported-browser =
    Przegl\u0105darka, kt\xF3rej u\u017Cywasz, nie obs\u0142uguje rozszerze\u0144 WebAssembly wymaganych do dzia\u0142ania Ruffle.
    Prosz\u0119 u\u017Cy\u0107 obs\u0142ugiwanej przegl\u0105darki.
    List\u0119 obs\u0142ugiwanych przegl\u0105darek znajdziesz na Wiki.
error-javascript-conflict =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by zainicjowania.
    Wygl\u0105da na to, \u017Ce ta strona u\u017Cywa kodu JavaScript, kt\xF3ry koliduje z Ruffle.
    Je\u015Bli jeste\u015B administratorem serwera, zapraszamy Ci\u0119 do \u0142adowania pliku na pustej stronie.
error-javascript-conflict-outdated = Mo\u017Cesz r\xF3wnie\u017C spr\xF3bowa\u0107 przes\u0142a\u0107 nowsz\u0105 wersj\u0119 Ruffle, kt\xF3ra mo\u017Ce omin\u0105\u0107 problem (obecna wersja jest przestarza\u0142a: { $buildDate }).
error-csp-conflict =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by zainicjowania.
    Polityka bezpiecze\u0144stwa zawarto\u015Bci tego serwera (CSP) nie zezwala na komponent ".wasm" wymagany do uruchomienia.
    Je\u015Bli jeste\u015B administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.
error-url-invalid =
    Ruffle nie za\u0142adowa\u0142 pliku SWF Flash.
    Najprawdopodobniejsz\u0105 przyczyn\u0105 jest przekazanie do Ruffle nieprawid\u0142owego adresu URL pliku SWF.
error-unknown =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by wy\u015Bwietlenia tej zawarto\u015Bci Flash.
    { $outdated ->
        [true] Je\u015Bli jeste\u015B administratorem serwera, spr\xF3buj zaktualizowa\u0107 Ruffle (obecna wersja jest przestarza\u0142a: { $buildDate }).
       *[false] To nie powinno si\u0119 wydarzy\u0107, wi\u0119c byliby\u015Bmy wdzi\u0119czni, gdyby\u015B zg\u0142osi\u0142 b\u0142\u0105d!
    }
`,"save-manager.ftl":`save-delete-prompt = Czy na pewno chcesz skasowa\u0107 ten plik zapisu?
save-reload-prompt =
    Jedyn\u0105 opcj\u0105, aby { $action ->
        [delete] usun\u0105\u0107
       *[replace] zamieni\u0107
    } ten plik zapisu bez potencjalnych konflikt\xF3w jest prze\u0142adowanie zawarto\u015Bci. Czy chcesz kontynuowa\u0107?
save-download = Pobierz
save-replace = Zamie\u0144
save-delete = Usu\u0144
save-backup-all = Pobierz wszystkie pliki zapisu
`,"volume-controls.ftl":`volume-controls-mute = Wycisz
volume-controls-unmute = Wy\u0142\u0105cz wyciszenie
`},"pt-BR":{"context_menu.ftl":`context-menu-download-swf = Baixar SWF
context-menu-copy-debug-info = Copiar informa\xE7\xE3o de depura\xE7\xE3o
context-menu-open-save-manager = Abrir o gerenciador de salvamento
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extens\xE3o do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Sair da tela cheia
context-menu-enter-fullscreen = Entrar em tela cheia
context-menu-volume-controls = Controles de volume
`,"messages.ftl":`message-cant-embed =
    Ruffle n\xE3o conseguiu executar o Flash incorporado nesta p\xE1gina.
    Voc\xEA pode tentar abrir o arquivo em uma guia separada para evitar esse problema.
message-restored-from-bfcache =
    Seu navegador restaurou este conte\xFAdo Flash de uma sess\xE3o anterior.
    Para come\xE7ar do zero, recarregue a p\xE1gina.
panic-title = Algo deu errado :(
more-info = Mais informa\xE7\xE3o
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar erro
update-ruffle = Atualizar Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplicativo de desktop
ruffle-wiki = Ver guia oficial do Ruffle
enable-hardware-acceleration = Parece que a acelera\xE7\xE3o de hardware est\xE1 desabilitada. Embora o Ruffle possa funcionar, ele pode ser muito lento. Voc\xEA pode descobrir como habilitar a acelera\xE7\xE3o de hardware seguindo o link abaixo:
enable-hardware-acceleration-link = FAQ \u2014 Acelera\xE7\xE3o de hardware no Chrome
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir em uma nova guia
click-to-unmute = Clique para ativar o som
clipboard-message-title = Copiando e colando no Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Seu navegador n\xE3o suporta acesso total \xE0 \xE1rea de transfer\xEAncia,
        [access-denied] O acesso \xE0 \xE1rea de transfer\xEAncia foi negado,
    } mas voc\xEA sempre pode usar estes atalhos:
clipboard-message-copy = { " " } para copiar
clipboard-message-cut = { " " } para recortar
clipboard-message-paste = { " " } para colar
error-canvas-reload = N\xE3o \xE9 poss\xEDvel recarregar com o renderizador canvas enquanto ele j\xE1 est\xE1 em uso.
error-file-protocol =
    Parece que voc\xEA est\xE1 executando o Ruffle no protocolo "file:".
    Isto n\xE3o funciona como navegadores bloqueiam muitos recursos de funcionar por raz\xF5es de seguran\xE7a.
    Ao inv\xE9s disso, convidamos voc\xEA a configurar um servidor local ou a usar a demonstra\xE7\xE3o da web, ou o aplicativo de desktop.
error-javascript-config =
    O Ruffle encontrou um grande problema devido a uma configura\xE7\xE3o incorreta do JavaScript.
    Se voc\xEA for o administrador do servidor, convidamos voc\xEA a verificar os detalhes do erro para descobrir qual par\xE2metro est\xE1 com falha.
    Voc\xEA tamb\xE9m pode consultar o guia oficial do Ruffle para obter ajuda.
error-wasm-not-found =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necess\xE1rio.
    Se voc\xEA \xE9 o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.
    Se o problema persistir, voc\xEA pode precisar usar a configura\xE7\xE3o "publicPath": por favor consulte o guia oficial do Ruffle para obter ajuda.
error-wasm-mime-type =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Este servidor de web n\xE3o est\xE1 servindo ".wasm" arquivos com o tipo MIME correto.
    Se voc\xEA \xE9 o administrador do servidor, por favor consulte o guia oficial do Ruffle para obter ajuda.
error-invalid-swf =
    Ruffle n\xE3o pode analisar o arquivo solicitado.
    O motivo prov\xE1vel \xE9 que o arquivo solicitado n\xE3o seja um SWF v\xE1lido.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    A raz\xE3o prov\xE1vel \xE9 que o arquivo n\xE3o existe mais, ent\xE3o n\xE3o h\xE1 nada para o Ruffle carregar.
    Tente contatar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle n\xE3o conseguiu carregar o arquivo SWF do Flash.
    O acesso \xE0 requisi\xE7\xE3o provavelmente foi bloqueado pela pol\xEDtica de CORS.
    Se voc\xEA for o administrador do servidor, consulte o guia oficial do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle n\xE3o conseguiu carregar o componente obrigat\xF3rio do arquivo \u201C.wasm\u201D.
    O acesso \xE0 busca provavelmente foi bloqueado pela pol\xEDtica de CORS.
    Se voc\xEA \xE9 o administrador do servidor, consulte o guia oficial do Ruffle para obter ajuda.
error-wasm-invalid =
    O Ruffle encontrou um erro grave ao tentar iniciar.
    Parece que esta p\xE1gina possui arquivos ausentes ou inv\xE1lidos para executar o Ruffle.
    Se voc\xEA \xE9 o administrador do servidor, consulte o guia oficial do Ruffle para obter assist\xEAncia.
error-wasm-download =
    O Ruffle encontrou um grande problema ao tentar inicializar.
    Muitas vezes isso pode se resolver sozinho, ent\xE3o voc\xEA pode tentar recarregar a p\xE1gina.
    Caso contr\xE1rio, contate o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de arquivo ".wasm" necess\xE1rio.
    Para corrigir isso, tente abrir configura\xE7\xF5es do seu navegador, clicando em "Privacidade, pesquisa e servi\xE7os", rolando para baixo e desativando "Melhore sua seguran\xE7a na web".
    Isso permitir\xE1 que seu navegador carregue os arquivos ".wasm" necess\xE1rios.
    Se o problema persistir, talvez seja necess\xE1rio usar um navegador diferente.
error-wasm-unsupported-browser =
    O navegador que voc\xEA est\xE1 usando n\xE3o oferece suporte \xE0s extens\xF5es WebAssembly necess\xE1rias para o Ruffle funcionar.
    Por favor, mude para um navegador compat\xEDvel.
    Voc\xEA pode encontrar uma lista de navegadores compat\xEDveis no guia oficial.
error-javascript-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta p\xE1gina usa c\xF3digo JavaScript que entra em conflito com o Ruffle.
    Se voc\xEA for o administrador do servidor, convidamos voc\xEA a tentar carregar o arquivo em uma p\xE1gina em branco.
error-javascript-conflict-outdated = Voc\xEA tamb\xE9m pode tentar fazer o upload de uma vers\xE3o mais recente do Ruffle que pode contornar o problema (a compila\xE7\xE3o atual est\xE1 desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema grave ao tentar iniciar.
    A Pol\xEDtica de Seguran\xE7a de Conte\xFAdo deste servidor n\xE3o permite a execu\xE7\xE3o do componente \u201C.wasm\u201D necess\xE1rio.
    Se voc\xEA for o administrador do servidor, consulte o guia oficial do Ruffle para obter ajuda.
error-url-invalid =
    O Ruffle n\xE3o conseguiu carregar o arquivo SWF do Flash.
    O motivo mais prov\xE1vel \xE9 que uma URL inv\xE1lida para o arquivo SWF foi fornecida ao Ruffle.
error-unknown =
    O Ruffle encontrou um grande problema enquanto tentava exibir este conte\xFAdo em Flash.
    { $outdated ->
        [true] Se voc\xEA \xE9 o administrador do servidor, por favor tente fazer o upload de uma vers\xE3o mais recente do Ruffle (a compila\xE7\xE3o atual est\xE1 desatualizada: { $buildDate }).
       *[false] Isso n\xE3o deveria acontecer, ent\xE3o apreciar\xEDamos muito se voc\xEA pudesse arquivar um bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?
save-reload-prompt =
    A \xFAnica maneira de { $action ->
        [delete] excluir
       *[replace] substituir
    } este arquivo sem potencial conflito \xE9 recarregar este conte\xFAdo. Deseja continuar mesmo assim?
save-download = Baixar
save-replace = Substituir
save-delete = Excluir
save-backup-all = Baixar todos os arquivos de salvamento
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Ativar som
`},"pt-PT":{"context_menu.ftl":`context-menu-download-swf = Descarga.swf
context-menu-copy-debug-info = Copiar informa\xE7\xF5es de depura\xE7\xE3o
context-menu-open-save-manager = Abrir gestor de grava\xE7\xF5es
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extens\xE3o do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Fechar ecr\xE3 inteiro
context-menu-enter-fullscreen = Abrir ecr\xE3 inteiro
context-menu-volume-controls = Controlos de volume
`,"messages.ftl":`message-cant-embed =
    O Ruffle n\xE3o conseguiu abrir o Flash integrado nesta p\xE1gina.
    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.
message-restored-from-bfcache =
    O seu navegador restaurou este conte\xFAdo Flash de uma sess\xE3o anterior.
    Para come\xE7ar do zero, recarregue a p\xE1gina.
panic-title = Algo correu mal :(
more-info = Mais informa\xE7\xF5es
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar falha
update-ruffle = Atualizar o Ruffle
ruffle-demo = Demonstra\xE7\xE3o web
ruffle-desktop = Aplica\xE7\xE3o para computador
ruffle-wiki = Ver a wiki do Ruffle
enable-hardware-acceleration = Parece que a acelera\xE7\xE3o de hardware est\xE1 desativada. Mesmo que o Ruffle funcione, pode estar demasiado lento. Descubra como ativar a acelera\xE7\xE3o de hardware seguindo este link:
enable-hardware-acceleration-link = Perguntas Frequentes - Acelera\xE7\xE3o de Hardware no Chrome
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir num novo separador
click-to-unmute = Clique para ativar o som
clipboard-message-title = Copiar e colar no Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] O seu navegador n\xE3o suporta acesso total \xE0 \xE1rea de transfer\xEAncia,
        [access-denied] O acesso \xE0 \xE1rea de transfer\xEAncia foi negado,
    } mas pode sempre usar estes atalhos em alternativa:
clipboard-message-copy = { " " } para copiar
clipboard-message-cut = { " " } para cortar
clipboard-message-paste = { " " } para colar
error-canvas-reload = N\xE3o \xE9 poss\xEDvel recarregar com o renderizador canvas quando este j\xE1 est\xE1 em uso.
error-file-protocol =
    Parece que executou o Ruffle no protocolo "file:".
    Isto n\xE3o funciona porque os navegadores bloqueiam muitas funcionalidades por seguran\xE7a.
    Em vez disto, experimente configurar um servidor local, ou ent\xE3o a usar a demonstra\xE7\xE3o web ou a aplica\xE7\xE3o para computador.
error-javascript-config =
    O Ruffle encontrou um problema grave devido a uma configura\xE7\xE3o de JavaScript incorreta.
    Se \xE9 o administrador do servidor, experimente verificar os detalhes do erro para identificar o par\xE2metro em falha.
    Pode ainda consultar a wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necess\xE1rio.
    Se \xE9 o administrador do servidor, certifique-se de que o ficheiro foi devidamente carregado.
    Se o problema persistir, talvez queira usar a configura\xE7\xE3o "publicPath": consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Este servidor web n\xE3o est\xE1 a servir ficheiros \u201C.wasm\u201D com o tipo MIME correto.
    Se \xE9 o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-invalid-swf =
    O Ruffle n\xE3o consegue analisar o ficheiro solicitado.
    O mais prov\xE1vel \xE9 que o ficheiro solicitado n\xE3o seja um SWF v\xE1lido.
error-swf-fetch =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    O mais prov\xE1vel \xE9 que o ficheiro j\xE1 n\xE3o exista, da\xED n\xE3o haver nada para o Ruffle carregar.
    Tente contactar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    Obter o ficheiro (fetch) foi provavelmente bloqueado pela pol\xEDtica CORS.
    Se \xE9 o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necess\xE1rio.
    Obter o ficheiro (fetch) foi provavelmente bloqueado pela pol\xEDtica CORS.
    Se \xE9 o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Parece que esta p\xE1gina tem ficheiros inv\xE1lidos ou em falta para executar o Ruffle.
    Se \xE9 o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Isto costuma resolver-se sozinho, por isso experimente recarregar a p\xE1gina.
    Se n\xE3o acontecer, contacte o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necess\xE1rio.
    Tente corrigir isto nas defini\xE7\xF5es do navegador; clique em "Privacidade, pesquisa e servi\xE7os", deslize para baixo e desative "Melhore a sua seguran\xE7a na Web".
    Isto permitir\xE1 ao navegador carregar os ficheiros ".wasm" necess\xE1rios.
    Se o problema persistir, talvez precise de um navegador diferente.
error-wasm-unsupported-browser =
    O navegador que usa n\xE3o suporta as extens\xF5es WebAssembly de que o Ruffle necessita para executar.
    Deve mudar para um navegador suportado.
    Pode encontrar uma lista de navegadores suportados na Wiki.
error-javascript-conflict =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Parece que esta p\xE1gina usa c\xF3digo JavaScript que entra em conflito com o Ruffle.
    Se \xE9 o administrador do servidor, experimente carregar o ficheiro numa p\xE1gina em branco.
error-javascript-conflict-outdated = Pode ainda tentar carregar uma vers\xE3o mais recente do Ruffle que talvez contorne o problema (a compila\xE7\xE3o atual est\xE1 desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    A Pol\xEDtica de Seguran\xE7a de Conte\xFAdos deste servidor web n\xE3o permite executar o componente ".wasm" necess\xE1rio.
    Se \xE9 o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um problema grave ao tentar apresentar este conte\xFAdo Flash.
    { $outdated ->
        [true] Se \xE9 o administrador do servidor, tente carregar uma vers\xE3o mais recente do Ruffle (a vers\xE3o atual est\xE1 desatualizada: { $buildDate }).
       *[false] N\xE3o era suposto ter acontecido, por isso agradec\xEDamos imenso se reportasse a falha!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem a certeza de que quer eliminar esta grava\xE7\xE3o?
save-reload-prompt =
    A \xFAnica forma de { $action ->
        [delete] eliminar
       *[replace] substituir
    } esta grava\xE7\xE3o sem risco de conflito \xE9 recarregando este conte\xFAdo. Deseja continuar na mesma?
save-download = Descarregar
save-replace = Substituir
save-delete = Eliminar
save-backup-all = Descarregar todas as grava\xE7\xF5es
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Ativar o som
`},"ro-RO":{"context_menu.ftl":`context-menu-download-swf = Descarc\u0103 .swf
context-menu-copy-debug-info = Copiaz\u0103 informa\u021Biile de depanare
context-menu-open-save-manager = Deschide managerul de salv\u0103ri
context-menu-about-ruffle =
    { $flavor ->
        [extension] Despre extensia Ruffle ({ $version })
       *[other] Despre Ruffle ({ $version })
    }
context-menu-hide = Ascunde acest meniu
context-menu-exit-fullscreen = Ie\u0219i din ecranul complet
context-menu-enter-fullscreen = Intr\u0103 \xEEn ecran complet
context-menu-volume-controls = Comenzi pentru volum
`,"messages.ftl":`message-cant-embed =
    Ruffle nu a putut s\u0103 ruleze Flash \xEEncorporat \xEEn aceast\u0103 pagin\u0103.
    Po\u021Bi \xEEncerca s\u0103 deschizi fi\u0219ierul \xEEntr-o fil\u0103 separat\u0103, pentru a evita aceast\u0103 problem\u0103.
message-restored-from-bfcache =
    Browserul dvs. a restaurat acest con\u021Binut Flash dintr-o sesiune anterioar\u0103.
    Pentru a \xEEncepe de la zero, re\xEEnc\u0103rca\u021Bi pagina.
panic-title = Ceva a mers prost :(
more-info = Mai multe informa\u021Bii
run-anyway = Ruleaz\u0103 oricum
continue = Continu\u0103
report-bug = Raporteaz\u0103 un bug
update-ruffle = Actualizeaz\u0103 Ruffle
ruffle-demo = Demo web
ruffle-desktop = Aplica\u021Bie desktop
ruffle-wiki = Vezi wikiul Ruffle
enable-hardware-acceleration = Se pare c\u0103 accelerarea hardware este dezactivat\u0103. De\u0219i Ruffle ar putea func\u021Biona, va fi foarte lent. Pute\u021Bi afla cum s\u0103 activa\u021Bi accelerarea hardware acces\xE2nd linkul de mai jos:
enable-hardware-acceleration-link = \xCEntreb\u0103ri frecvente - Accelerarea hardware Chrome
view-error-details = Vezi detaliile erorii
open-in-new-tab = Deschide \xEEntr-o fil\u0103 nou\u0103
click-to-unmute = D\u0103 click pentru a dezmu\u021Bi
clipboard-message-title = Copierea \u0219i lipirea \xEEn Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Browserul dvs. nu accept\u0103 accesul complet c\u0103tre clipboard,
        [access-denied] Accesul la clipboard a fost refuzat,
    } dar pute\u021Bi oric\xE2nd s\u0103 utiliza\u021Bi aceste scurt\u0103turi:
clipboard-message-copy = { " " } pentru copiere
clipboard-message-cut = { " " } pentru decupare
clipboard-message-paste = { " " } pentru lipire
error-canvas-reload = Nu se poate re\xEEnc\u0103rca utiliz\xE2nd rendererul canvas atunci c\xE2nd acesta este deja folosit.
error-file-protocol =
    Se pare c\u0103 rulezi Ruffle pe protocolul \u201Efile:\u201D.
    Acesta nu func\u021Bioneaz\u0103, deoarece browserele blocheaz\u0103 func\u021Bionarea multor func\u021Bii din motive de securitate.
    \xCEn schimb, te invit\u0103m s\u0103 configurezi un server local sau s\u0103 folose\u0219ti fie demoul web, fie aplica\u021Bia desktop.
error-javascript-config =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 din cauza unei configur\u0103ri incorecte a JavaScript.
    Dac\u0103 e\u0219ti administratorul serverului, te invit\u0103m s\u0103 verifici detaliile erorii pentru a afla care parametru este defect.
    De asemenea, po\u021Bi consulta wikiul Ruffle pentru ajutor.
error-wasm-not-found =
    Ruffle a e\u0219uat la \xEEnc\u0103rcarea componentei de fi\u0219ier \u201E.wasm\u201D.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 te asiguri c\u0103 fi\u0219ierul a fost \xEEnc\u0103rcat corect.
    Dac\u0103 problema persist\u0103, poate fi necesar s\u0103 folose\u0219ti setarea \u201EpublicPath\u201D: te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-wasm-mime-type =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 se ini\u021Bializeze.
    Acest server web nu serve\u0219te fi\u0219iere \u201E.wasm\u201D cu tipul MIME corect.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-invalid-swf =
    Ruffle nu poate analiza fi\u0219ierul solicitat.
    Cel mai probabil motiv este c\u0103 fi\u0219ierul solicitat nu este un SWF valid.
error-swf-fetch =
    Ruffle a e\u0219uat la \xEEnc\u0103rcarea fi\u0219ierului SWF.
    Motivul cel mai probabil este c\u0103 fi\u0219ierul nu mai exist\u0103, deci Ruffle nu mai are ce s\u0103 \xEEncarce.
    \xCEncearc\u0103 s\u0103 contactezi administratorul site-ului web pentru ajutor.
error-swf-cors =
    Ruffle a e\u0219uat la \xEEnc\u0103rcarea fi\u0219ierului SWF.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-wasm-cors =
    Ruffle a e\u0219uat la \xEEnc\u0103rcarea componentei de fi\u0219ier \u201E.wasm\u201D.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-wasm-invalid =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 se ini\u021Bializeze.
    Se pare c\u0103 aceast\u0103 pagin\u0103 are fi\u0219iere lips\u0103 sau nevalide pentru a rula Ruffle.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-wasm-download =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 ini\u021Bializeze.
    Acest lucru se poate rezolva adesea de la sine, a\u0219a c\u0103 po\u021Bi \xEEncerca s\u0103 re\xEEncarci pagina.
    \xCEn caz contrar, te rug\u0103m s\u0103 contactezi administratorul site-ului web.
error-wasm-disabled-on-edge =
    Ruffle a e\u0219uat la \xEEnc\u0103rcarea componentei de fi\u0219ier \u201E.wasm\u201D.
    Pentru a remedia acest lucru, \xEEncearc\u0103 s\u0103 deschizi set\u0103rile browserului, s\u0103 faci clic pe \u201EConfiden\u021Bialitate, c\u0103utare \u0219i servicii\u201D, s\u0103 derulezi \xEEn jos \u0219i s\u0103 dezactivezi \u201E\xCEmbun\u0103t\u0103\u021Bi\u021Bi-v\u0103 securitatea pe web\u201D.
    Acest lucru va permite browserului s\u0103 \xEEncarce fi\u0219ierele \u201E.wasm\u201D necesare.
    Dac\u0103 problema persist\u0103, este posibil s\u0103 trebuiasc\u0103 s\u0103 folose\u0219ti un alt browser.
error-wasm-unsupported-browser =
    Browserul pe care \xEEl utiliza\u021Bi nu suport\u0103 extensiile WebAssembly pe care Ruffle le solicit\u0103 pentru a rula.
    V\u0103 rug\u0103m s\u0103 folosi\u021Bi un browser compatibil.
    Pute\u021Bi g\u0103si o list\u0103 de browsere compatibile pe Wiki.
error-javascript-conflict =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 se ini\u021Bializeze.
    Se pare c\u0103 aceast\u0103 pagin\u0103 folose\u0219te cod JavaScript care intr\u0103 \xEEn conflict cu Ruffle.
    Dac\u0103 e\u0219ti administratorul serverului, te invit\u0103m s\u0103 \xEEncerci \xEEnc\u0103rcarea fi\u0219ierului pe o pagin\u0103 goal\u0103.
error-javascript-conflict-outdated = De asemenea, po\u021Bi \xEEncerca s\u0103 \xEEncarci o versiune mai recent\u0103 de Ruffle care ar putea ocoli problema (versiunea actual\u0103 este \xEEnvechit\u0103: { $buildDate }).
error-csp-conflict =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 se ini\u021Bializeze.
    Politica de securitate a con\u021Binutului a acestui server web nu permite rularea componentei \u201E.wasm\u201D necesare.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-url-invalid =
    Ruffle a e\u0219uat s\u0103 \xEEncarce fi\u0219ierul Flash SWF.
    Cel mai probabil motiv este c\u0103 un URL invalid pentru fi\u0219ierul SWF a fost transmis la Ruffle.
error-unknown =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 afi\u0219eze acest con\u021Binut Flash.
    { $outdated ->
        [true] Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 \xEEncerci s\u0103 \xEEncarci o versiune mai recent\u0103 de Ruffle (versiunea actual\u0103 este \xEEnvechit\u0103: { $buildDate }).
       *[false] Acest lucru nu ar trebui s\u0103 se \xEEnt\xE2mple, a\u0219a c\u0103 am aprecia foarte mult dac\u0103 ai putea trimite un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sigur vrei s\u0103 \u0219tergi acest fi\u0219ier de salvare?
save-reload-prompt =
    Singura cale de a { $action ->
        [delete] \u0219terge
       *[replace] \xEEnlocui
    } acest fi\u0219ier de salvare f\u0103r\u0103 un conflict poten\u021Bial este de a re\xEEnc\u0103rca acest con\u021Binut. Dore\u0219ti s\u0103 continui oricum?
save-download = Descarc\u0103
save-replace = \xCEnlocuie\u0219te
save-delete = \u0218terge
save-backup-all = Descarc\u0103 toate fi\u0219ierele de salvare
`,"volume-controls.ftl":`volume-controls-mute = Mut
volume-controls-unmute = Activare sunet
`},"ru-RU":{"context_menu.ftl":`context-menu-download-swf = \u0421\u043A\u0430\u0447\u0430\u0442\u044C .swf
context-menu-copy-debug-info = \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u043B\u0430\u0434\u043E\u0447\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E
context-menu-open-save-manager = \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0439
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u041E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0438 Ruffle ({ $version })
       *[other] \u041E Ruffle ({ $version })
    }
context-menu-hide = \u0421\u043A\u0440\u044B\u0442\u044C \u044D\u0442\u043E \u043C\u0435\u043D\u044E
context-menu-exit-fullscreen = \u041E\u043A\u043E\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C
context-menu-enter-fullscreen = \u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C
context-menu-volume-controls = \u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C
`,"messages.ftl":`message-cant-embed =
    Ruffle \u043D\u0435 \u0441\u043C\u043E\u0433 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C Flash, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u043D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.
    \u0427\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0439\u0442\u0438 \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u0430\u0439\u043B \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435.
message-restored-from-bfcache =
    \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B \u044D\u0442\u043E\u0442 Flash-\u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438.
    \u0427\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E, \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.
panic-title = \u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A :(
more-info = \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435
run-anyway = \u0412\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C
continue = \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C
report-bug = \u0421\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435
update-ruffle = \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C Ruffle
ruffle-demo = \u0412\u0435\u0431-\u0434\u0435\u043C\u043E
ruffle-desktop = \u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435
ruffle-wiki = \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0438\u043A\u0438 Ruffle
enable-hardware-acceleration = \u041F\u043E\u0445\u043E\u0436\u0435, \u0447\u0442\u043E \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E. \u0425\u043E\u0442\u044F Ruffle \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C, \u043D\u043E \u043E\u043D \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0447\u0435\u043D\u044C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u043C. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0437\u043D\u0430\u0442\u044C, \u043A\u0430\u043A \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435, \u043F\u0435\u0440\u0435\u0439\u0434\u044F \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0438\u0436\u0435:
enable-hardware-acceleration-link = FAQ - \u0410\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 Chrome
view-error-details = \u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435
open-in-new-tab = \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435
click-to-unmute = \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A
clipboard-message-title = \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0432\u0441\u0442\u0430\u0432\u043A\u0430 \u0432 Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u0443\u0444\u0435\u0440\u0443 \u043E\u0431\u043C\u0435\u043D\u0430.
        [access-denied]  \u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u0443\u0444\u0435\u0440\u0443 \u043E\u0431\u043C\u0435\u043D\u0430 \u0431\u044B\u043B \u043E\u0442\u043A\u043B\u043E\u043D\u0451\u043D.
    } \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u043A\u043B\u0430\u0432\u0438\u0448 \u0434\u043B\u044F \u0432\u044B\u0440\u0435\u0437\u0430\u043D\u0438\u044F, \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0432\u0441\u0442\u0430\u0432\u043A\u0438:
clipboard-message-copy = { " " } \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C
clipboard-message-cut = { " " } \u0432\u044B\u0440\u0435\u0437\u0430\u0442\u044C
clipboard-message-paste = { " " } \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C
error-canvas-reload = \u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441 \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440\u043E\u043C canvas, \u043A\u043E\u0433\u0434\u0430 \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440 canvas \u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F.
error-file-protocol =
    \u041F\u043E\u0445\u043E\u0436\u0435, \u0447\u0442\u043E \u0432\u044B \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0435 Ruffle \u043F\u043E \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0443 "file:".
    \u042D\u0442\u043E \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044B \u0431\u043B\u043E\u043A\u0438\u0440\u0443\u044E\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u043C\u043D\u043E\u0433\u0438\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u043F\u043E \u0441\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438.
    \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0432\u0430\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0432\u0435\u0431-\u0434\u0435\u043C\u043E \u0438\u043B\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440.
error-javascript-config =
    \u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437-\u0437\u0430 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 JavaScript.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0432\u0430\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u044F\u0441\u043D\u0438\u0442\u044C, \u043A\u0430\u043A\u043E\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0434\u0430\u043B \u0441\u0431\u043E\u0439.
    \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-wasm-not-found =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0444\u0430\u0439\u043B\u0430 ".wasm".
    \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0444\u0430\u0439\u043B \u0431\u044B\u043B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.
    \u0415\u0441\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u043D\u0435 \u0443\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F, \u0432\u0430\u043C \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 "publicPath": \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-wasm-mime-type =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.
    \u042D\u0442\u043E\u0442 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0444\u0430\u0439\u043B\u044B ".wasm" \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u043C \u0442\u0438\u043F\u043E\u043C MIME.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-invalid-swf =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u0444\u0430\u0439\u043B.
    \u0412\u0435\u0440\u043E\u044F\u0442\u043D\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0434\u0430\u043D\u043D\u044B\u0439 SWF \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D \u0438\u043B\u0438 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u0430\u043A\u043E\u0432\u044B\u043C.
error-swf-fetch =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C SWF-\u0444\u0430\u0439\u043B Flash.
    \u0412\u0435\u0440\u043E\u044F\u0442\u043D\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0444\u0430\u0439\u043B \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 Ruffle \u043D\u0435\u0447\u0435\u0433\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C.
    \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0430\u0439\u0442\u0430 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043C\u043E\u0449\u0438.
error-swf-cors =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C SWF-\u0444\u0430\u0439\u043B Flash.
    \u0421\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0444\u0430\u0439\u043B\u0443 \u0431\u044B\u043B \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 CORS.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-wasm-cors =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0444\u0430\u0439\u043B\u0430 ".wasm".
    \u0421\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0444\u0430\u0439\u043B\u0443 \u0431\u044B\u043B \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 CORS.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-wasm-invalid =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.
    \u041F\u043E\u0445\u043E\u0436\u0435, \u0447\u0442\u043E \u043D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0444\u0430\u0439\u043B\u044B \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 Ruffle \u0438\u043B\u0438 \u043E\u043D\u0438 \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-wasm-download =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.
    \u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E \u044D\u0442\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0443\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0430 \u0441\u043E\u0431\u043E\u044E, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.
    \u0415\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442 \u043F\u043E\u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0430\u0439\u0442\u0430.
error-wasm-disabled-on-edge =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0444\u0430\u0439\u043B\u0430 ".wasm".
    \u0427\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u0443 \u043E\u0448\u0438\u0431\u043A\u0443, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 WASM-\u0444\u0430\u0439\u043B\u044B.
    \u0415\u0441\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u043E\u0441\u0442\u0430\u043B\u0430\u0441\u044C, \u0432\u0430\u043C \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u0440\u0443\u0433\u043E\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440.
error-wasm-unsupported-browser =
    \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F WebAssembly, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 Ruffle.
    \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440.
    \u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043E\u0432 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0432 \u0412\u0438\u043A\u0438.
error-javascript-conflict =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.
    \u041F\u043E\u0445\u043E\u0436\u0435, \u0447\u0442\u043E \u044D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0443\u044E\u0449\u0438\u0439 \u0441 Ruffle \u043A\u043E\u0434 JavaScript.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0432\u0430\u043C \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0444\u0430\u0439\u043B \u043D\u0430 \u043F\u0443\u0441\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.
error-javascript-conflict-outdated = \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0432\u0435\u0440\u0441\u0438\u044E Ruffle, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u043E\u0439\u0442\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 (\u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430: { $buildDate }).
error-csp-conflict =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.
    \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0433\u043E \u044D\u0442\u043E\u0433\u043E \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 ".wasm".
    \u0415\u0441\u043B\u0438 \u0432\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-unknown =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u044D\u0442\u043E\u0442 Flash-\u043A\u043E\u043D\u0442\u0435\u043D\u0442.
    { $outdated ->
        [true] \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E Ruffle (\u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430: { $buildDate }).
       *[false] \u042D\u0442\u043E\u0433\u043E \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442\u044C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u044B \u0431\u0443\u0434\u0435\u043C \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u0438\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u044B, \u0435\u0441\u043B\u0438 \u0432\u044B \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u0435 \u043D\u0430\u043C \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435!
    }
`,"save-manager.ftl":`save-delete-prompt = \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F?
save-reload-prompt =
    \u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 { $action ->
        [delete] \u0443\u0434\u0430\u043B\u0438\u0442\u044C
       *[replace] \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C
    } \u044D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0430 \u2013 \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442. \u0412\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?
save-download = \u0421\u043A\u0430\u0447\u0430\u0442\u044C
save-replace = \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C
save-delete = \u0423\u0434\u0430\u043B\u0438\u0442\u044C
save-backup-all = \u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F
`,"volume-controls.ftl":`volume-controls-mute = \u0411\u0435\u0437 \u0437\u0432\u0443\u043A\u0430
volume-controls-unmute = \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A
`},"sk-SK":{"context_menu.ftl":`context-menu-download-swf = Stiahnu\u0165 SWF
context-menu-copy-debug-info = Skop\xEDrova\u0165 debug info
context-menu-open-save-manager = Otvori\u0165 spr\xE1vcu ulo\u017Een\xED
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Ruffle roz\u0161\xEDren\xED ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skry\u0165 menu
context-menu-exit-fullscreen = Ukon\u010Di\u0165 re\u017Eim celej obrazovky
context-menu-enter-fullscreen = Prejs\u0165 do re\u017Eimu celej obrazovky
context-menu-volume-controls = Ovl\xE1danie hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohol spusti\u0165 Flash vlo\u017Een\xFD na tejto str\xE1nke.
    M\xF4\u017Eete sa pok\xFAsi\u0165 otvori\u0165 s\xFAbor na samostatnej karte, aby ste sa vyhli tomuto probl\xE9mu.
message-restored-from-bfcache =
    V\xE1\u0161 prehliada\u010D obnovil tento Flash obsah z predch\xE1dzaj\xFAcej rel\xE1cie.
    Ak chcete za\u010Da\u0165 znovu, op\xE4tovne na\u010D\xEDtajte str\xE1nku.
panic-title = Nie\u010Do sa pokazilo :(
more-info = Viac inform\xE1ci\xED
run-anyway = Spusti\u0165 aj tak
continue = Pokra\u010Dova\u0165
report-bug = Nahl\xE1si\u0165 chybu
update-ruffle = Aktualizova\u0165 Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopov\xE1 aplik\xE1cia
ruffle-wiki = Zobrazi\u0165 Ruffle Wiki
enable-hardware-acceleration = Zd\xE1 sa, \u017Ee hardv\xE9rov\xE1 akceler\xE1cia je vypnut\xE1. Aj ke\u010F Ruffle funguje spr\xE1vne, m\xF4\u017Ee by\u0165 neprimerane pomal\xFD. Ako povoli\u0165 hardv\xE9rov\xFA akceler\xE1ciu zist\xEDte na tomto odkaze:
enable-hardware-acceleration-link = \u010Cast\xE9 ot\xE1zky - Hardv\xE9rov\xE1 akceler\xE1cia Chrome
view-error-details = Zobrazi\u0165 podrobnosti o chybe
open-in-new-tab = Otvori\u0165 na novej karte
click-to-unmute = Kliknut\xEDm zapnete zvuk
clipboard-message-title = Kop\xEDrovanie a vkladanie v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] V\xE1\u0161 prehliada\u010D nepodporuje pln\xFD pr\xEDstup k schr\xE1nke,
        [access-denied] Pr\xEDstup k schr\xE1nke bol odmietnut\xFD,
    } ale namiesto toho m\xF4\u017Eete v\u017Edy pou\u017Ei\u0165 tieto skratky:
clipboard-message-copy = { " " } pre kop\xEDrovanie
clipboard-message-cut = { " " } pre vystrihovanie
clipboard-message-paste = { " " } pre vlo\u017Eenie
error-canvas-reload = Nie je mo\u017En\xE9 znova na\u010D\xEDta\u0165 pomocou vykres\u013Eova\u010Da pl\xE1tna, ke\u010F sa vykres\u013Eovanie pl\xE1tna u\u017E pou\u017E\xEDva.
error-file-protocol =
    Zd\xE1 sa, \u017Ee pou\u017E\xEDvate Ruffle na protokole "file:".
    To nie je mo\u017En\xE9, preto\u017Ee prehliada\u010De blokuj\xFA fungovanie mnoh\xFDch funkci\xED z bezpe\u010Dnostn\xFDch d\xF4vodov.
    Namiesto toho v\xE1m odpor\xFA\u010Dame nastavi\u0165 lok\xE1lny server alebo pou\u017Ei\u0165 web demo \u010Di desktopov\xFA aplik\xE1ciu.
error-javascript-config =
    Ruffle narazil na probl\xE9m v d\xF4sledku nespr\xE1vnej konfigur\xE1cie JavaScriptu.
    Ak ste spr\xE1vcom servera, odpor\xFA\u010Dame v\xE1m skontrolova\u0165 podrobnosti o chybe, aby ste zistili, ktor\xFD parameter je chybn\xFD.
    Pomoc m\xF4\u017Eete z\xEDska\u0165 aj na wiki Ruffle.
error-wasm-not-found =
    Ruffle sa nepodarilo na\u010D\xEDta\u0165 po\u017Eadovan\xFD komponent s\xFAboru \u201E.wasm\u201C.
    Ak ste spr\xE1vcom servera, skontrolujte, \u010Di bol s\xFAbor spr\xE1vne nahran\xFD.
    Ak probl\xE9m pretrv\xE1va, mo\u017Eno budete musie\u0165 pou\u017Ei\u0165 nastavenie \u201EpublicPath\u201C: pomoc n\xE1jdete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na probl\xE9m pri pokuse o inicializ\xE1ciu.
    Tento webov\xFD server neposkytuje s\xFAbory \u201E.wasm\u201C so spr\xE1vnym typom MIME.
    Ak ste spr\xE1vcom servera, pomoc n\xE1jdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nem\xF4\u017Ee spracova\u0165 po\u017Eadovan\xFD s\xFAbor.
    Najpravdepodobnej\u0161\xEDm d\xF4vodom je, \u017Ee po\u017Eadovan\xFD s\xFAbor nie je platn\xFDm s\xFAborom SWF.
error-swf-fetch =
    Ruffle sa nepodarilo na\u010D\xEDta\u0165 SWF s\xFAbor Flash.
    Najpravdepodobnej\u0161\xEDm d\xF4vodom je, \u017Ee s\xFAbor u\u017E neexistuje, tak\u017Ee Ruffle nem\xE1 \u010Do na\u010D\xEDta\u0165.
    Sk\xFAste po\u017Eiada\u0165 o pomoc spr\xE1vcu webovej lokality.
error-swf-cors =
    Ruffle sa nepodarilo na\u010D\xEDta\u0165 SWF s\xFAbor Flash.
    Pr\xEDstup k na\u010D\xEDtaniu bol pravdepodobne zablokovan\xFD politikou CORS.
    Ak ste spr\xE1vcom servera, pomoc n\xE1jdete na Ruffle wiki.
error-wasm-cors =
    Ruffle sa nepodarilo na\u010D\xEDta\u0165 po\u017Eadovan\xFD komponent s\xFAboru \u201E.wasm\u201C.
    Pr\xEDstup k na\u010D\xEDtaniu bol pravdepodobne zablokovan\xFD politikou CORS.
    Ak ste spr\xE1vcom servera, pomoc n\xE1jdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na probl\xE9m pri pokuse o inicializ\xE1ciu.
    Zd\xE1 sa, \u017Ee na tejto str\xE1nke ch\xFDbaj\xFA alebo s\xFA neplatn\xE9 s\xFAbory na spustenie Ruffle.
    Ak ste spr\xE1vcom servera, pomoc n\xE1jdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na probl\xE9m pri pokuse o inicializ\xE1ciu.
    Probl\xE9m sa m\xF4\u017Ee vyrie\u0161i\u0165 aj s\xE1m, tak\u017Ee m\xF4\u017Eete sk\xFAsi\u0165 str\xE1nku na\u010D\xEDta\u0165 znova.
    V opa\u010Dnom pr\xEDpade kontaktujte administr\xE1tora str\xE1nky.
error-wasm-disabled-on-edge =
    Ruffle sa nepodarilo na\u010D\xEDta\u0165 po\u017Eadovan\xFD komponent s\xFAboru \u201E.wasm\u201C.
    Ak chcete tento probl\xE9m vyrie\u0161i\u0165, sk\xFAste otvori\u0165 nastavenia prehliada\u010Da, kliknite na polo\u017Eku \u201EOchrana osobn\xFDch \xFAdajov, vyh\u013Ead\xE1vanie a slu\u017Eby\u201C, prejdite nadol a vypnite mo\u017Enos\u0165 \u201EZv\xFD\u0161te svoju bezpe\u010Dnos\u0165 na webe\u201C.
    V\xE1\u0161mu prehliada\u010Du to umo\u017En\xED na\u010D\xEDta\u0165 po\u017Eadovan\xE9 s\xFAbory \u201E.wasm\u201C.
    Ak probl\xE9m pretrv\xE1va, mo\u017Eno budete musie\u0165 pou\u017Ei\u0165 in\xFD prehliada\u010D.
error-wasm-unsupported-browser =
    Prehliada\u010D, ktor\xFD pou\u017E\xEDvate, nepodporuje roz\u0161\xEDrenie WebAssembly, ktor\xE9 Ruffle vy\u017Eaduje na spustenie.
    Prejdite na podporovan\xFD prehliada\u010D.
    Zoznam podporovan\xFDch prehliada\u010Dov n\xE1jdete na Wiki.
error-javascript-conflict =
    Ruffle narazil na probl\xE9m pri pokuse o inicializ\xE1ciu.
    Zd\xE1 sa, \u017Ee t\xE1to str\xE1nka pou\u017E\xEDva k\xF3d JavaScript, ktor\xFD je v konflikte s Ruffle.
    Ak ste spr\xE1vcom servera, odpor\xFA\u010Dame v\xE1m sk\xFAsi\u0165 na\u010D\xEDta\u0165 s\xFAbor na pr\xE1zdnu str\xE1nku.
error-javascript-conflict-outdated = M\xF4\u017Eete sa tie\u017E pok\xFAsi\u0165 nahra\u0165 nov\u0161iu verziu Ruffle, ktor\xE1 m\xF4\u017Ee dan\xFD probl\xE9m vyrie\u0161i\u0165 (aktu\xE1lny build je zastaran\xFD: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na probl\xE9m pri pokuse o inicializ\xE1ciu.
    Z\xE1sady zabezpe\u010Denia obsahu tohto webov\xE9ho servera nepovo\u013Euj\xFA spustenie po\u017Eadovan\xE9ho komponentu \u201E.wasm\u201C.
    Ak ste spr\xE1vcom servera, pomoc n\xE1jdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na probl\xE9m pri pokuse zobrazi\u0165 tento Flash obsah.
    { $outdated ->
         [true] Ak ste spr\xE1vcom servera, sk\xFAste nahra\u0165 nov\u0161iu verziu Ruffle (aktu\xE1lny build je zastaran\xFD: { $buildDate }).
        *[false] Toto by sa nemalo sta\u0165, tak\u017Ee by sme naozaj ocenili, keby ste mohli nahl\xE1si\u0165 chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Naozaj chcete odstr\xE1ni\u0165 tento s\xFAbor s ulo\u017Een\xFDmi poz\xEDciami?
save-reload-prompt =
    Jedin\xFD sp\xF4sob, ako { $action ->
         [delete] vymaza\u0165
        *[replace] nahradi\u0165
    } tento s\xFAbor s ulo\u017Een\xFDmi poz\xEDciami bez potenci\xE1lneho konfliktu je op\xE4tovn\xE9 na\u010D\xEDtanie tohto obsahu. Chcete napriek tomu pokra\u010Dova\u0165?
save-download = Stiahnu\u0165
save-replace = Nahradi\u0165
save-delete = Vymaza\u0165
save-backup-all = Stiahnu\u0165 v\u0161etky s\xFAbory s ulo\u017Een\xFDmi poz\xEDciami
`,"volume-controls.ftl":`volume-controls-mute = Stlmi\u0165
volume-controls-unmute = Zru\u0161i\u0165 stlmenie
`},"sl-SI":{"context_menu.ftl":`context-menu-download-swf = Prenesi SWF
context-menu-copy-debug-info = Kopiraj informacije o odpravljanju napak
context-menu-open-save-manager = Odpri upravitelja shranjevanja
context-menu-about-ruffle =
    { $flavor ->
        [extension] O raz\u0161iritvi Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skrij ta meni
context-menu-exit-fullscreen = Izhod iz celozaslonskega na\u010Dina
context-menu-enter-fullscreen = Vstopi v celozaslonski na\u010Din
context-menu-volume-controls = Nadzor glasnosti
`,"messages.ftl":`message-cant-embed =
    Ruffle ni mogel zagnati Flash vsebine, vgrajene v to stran.
    Lahko poskusite odpreti datoteko v lo\u010Denem zavihku, da se izognete tej te\u017Eavi.
message-restored-from-bfcache =
    Va\u0161 brskalnik je obnovil to Flash vsebino iz prej\u0161nje seje.
    Da bi za\u010Deli na novo, ponovno nalo\u017Eite stran.
panic-title = Nekaj je \u0161lo narobe :(
more-info = Ve\u010D informacij
run-anyway = Vseeno za\u017Eeni
continue = Nadaljuj
report-bug = Prijavi napako
update-ruffle = Posodobite Ruffle
ruffle-demo = Spletni demo
ruffle-desktop = Namizna aplikacija
ruffle-wiki = Oglejte si Ruffle Wiki
enable-hardware-acceleration = Zdi se, da je strojna pospe\u0161itev onemogo\u010Dena. Ruffle bo sicer deloval, vendar bo lahko zelo po\u010Dasen. Kako omogo\u010Diti strojno pospe\u0161itev, lahko izveste na spodnji povezavi:
enable-hardware-acceleration-link = Pogosta vpra\u0161anja \u2013 Pospe\u0161evanje strojne opreme v brskalniku Chrome
view-error-details = Poglej podrobnosti napake
open-in-new-tab = Odpri v novem zavihku
click-to-unmute = Kliknite za vklop zvoka
clipboard-message-title = Kopiranje in lepljenje v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Va\u0161 brskalnik ne podpira polnega dostopa do odlo\u017Ei\u0161\u010Da,
        [access-denied] Dostop do odlo\u017Ei\u0161\u010Da je bil zavrnjen,
    } vendar lahko namesto tega vedno uporabite te bli\u017Enjice:
clipboard-message-copy = { " " } za kopiranje
clipboard-message-cut = { " " } za izrez
clipboard-message-paste = { " " } za lepljenje
error-canvas-reload = Ne morem ponovno nalo\u017Eiti z upodabljalnikom platna, \u010De je upodabljalnik platna \u017Ee v uporabi.
error-file-protocol =
    Zdi se, da uporabljate Ruffle na protokolu "file:".
    To ne deluje, ker brskalniki iz varnostnih razlogov blokirajo delovanje mnogih funkcij.
    Namesto tega vam priporo\u010Damo, da nastavite lokalni stre\u017Enik ali uporabite spletno demo ali namizno aplikacijo.
error-javascript-config =
    Ruffle je naletel na ve\u010Djo te\u017Eavo zaradi nepravilne konfiguracije JavaScript.
    \u010Ce ste skrbnik stre\u017Enika, vas prosimo, da preverite podrobnosti napake in ugotovite, kateri parameter je kriv.
    Za pomo\u010D lahko poi\u0161\u010Dete tudi wiki Ruffle.
error-wasm-not-found =
    Ruffle ni uspel nalo\u017Eiti potrebne datoteke ".wasm".
    \u010Ce ste skrbnik stre\u017Enika, preverite, ali je datoteka pravilno nalo\u017Eena.
    \u010Ce te\u017Eava \u0161e vedno obstaja, boste morda morali uporabiti nastavitev "publicPath": za pomo\u010D si oglejte wiki Ruffle.
error-wasm-mime-type =
    Ruffle je med poskusom inicializacije naletel na ve\u010Djo te\u017Eavo.
    Ta spletni stre\u017Enik ne servira datotek ".wasm" s pravilnim tipom MIME.
    \u010Ce ste skrbnik stre\u017Enika, poi\u0161\u010Dite pomo\u010D v Ruffle wiki.
error-invalid-swf =
    Ruffle ne more raz\u010Dleniti zahtevane datoteke.
    Najverjetnej\u0161i razlog je, da zahtevana datoteka ni veljavna datoteka SWF.
error-swf-fetch =
    Ruffle ni uspel nalo\u017Eiti datoteke Flash SWF.
    Najverjetnej\u0161i razlog je, da datoteka ne obstaja ve\u010D, zato Ruffle nima kaj nalo\u017Eiti.
    Za pomo\u010D se obrnite na skrbnika spletnega mesta.
error-swf-cors =
    Ruffle ni uspel nalo\u017Eiti datoteke Flash SWF.
    Dostop do prenosa je verjetno blokiran s politiko CORS.
    \u010Ce ste skrbnik stre\u017Enika, poi\u0161\u010Dite pomo\u010D v Ruffle wiki.
error-wasm-cors =
    Ruffle ni uspel nalo\u017Eiti potrebne datote\u010Dne komponente datoteke ".wasm\u201C.
    Dostop do prenosa je verjetno blokiran s politiko CORS.
    \u010Ce ste skrbnik stre\u017Enika, poi\u0161\u010Dite pomo\u010D v Ruffle wiki.
error-wasm-invalid =
    Ruffle je med poskusom inicializacije naletel na ve\u010Djo te\u017Eavo.
    Zdi se, da na tej strani manjkajo datoteke ali so datoteke za zagon Ruffle neveljavne.
    \u010Ce ste skrbnik stre\u017Enika, poi\u0161\u010Dite pomo\u010D v Ruffle wiki.
error-wasm-download =
    Ruffle je med poskusom inicializacije naletel na ve\u010Djo te\u017Eavo.
    Ta se pogosto re\u0161i sama, zato lahko poskusite ponovno nalo\u017Eiti stran.
    V nasprotnem primeru se obrnite na skrbnika spletnega mesta.
error-wasm-disabled-on-edge =
    Ruffle ni uspel nalo\u017Eiti potrebne datote\u010Dne komponente ".wasm".
    Da bi to popravili, odprite nastavitve brskalnika, kliknite "Zasebnost, iskanje in storitve", pomaknite se navzdol in izklopite "Izbolj\u0161ajte svojo varnost na spletu".
    Tako bo brskalnik lahko nalo\u017Eil potrebne datoteke ".wasm".
    \u010Ce te\u017Eava \u0161e vedno obstaja, boste morda morali uporabiti drug brskalnik.
error-wasm-unsupported-browser =
    Brskalnik, ki ga uporabljate, ne podpira raz\u0161iritev WebAssembly, ki jih Ruffle potrebuje za delovanje.
    Preklopite na podprt brskalnik.
    Seznam podprtih brskalnikov najdete na Wiki.
error-javascript-conflict =
    Ruffle je med poskusom inicializacije naletel na ve\u010Djo te\u017Eavo.
    Zdi se, da ta stran uporablja JavaScript kodo, ki je v nasprotju z Ruffle.
    \u010Ce ste skrbnik stre\u017Enika, vas prosimo, da poskusite nalo\u017Eiti datoteko na prazno stran.
error-javascript-conflict-outdated = Lahko poskusite nalo\u017Eiti novej\u0161o razli\u010Dico Ruffle, ki bo morda odpravila te\u017Eavo (trenutna razli\u010Dica je zastarela: { $buildDate }).
error-csp-conflict =
    Ruffle je med poskusom inicializacije naletel na ve\u010Djo te\u017Eavo.
    Varnostna politika vsebine tega spletnega stre\u017Enika ne dovoljuje izvajanja potrebne komponente ".wasm".
    \u010Ce ste skrbnik stre\u017Enika, poi\u0161\u010Dite pomo\u010D v Ruffle wiki.
error-url-invalid =
    Ruffle ni uspel nalo\u017Eiti datoteke Flash SWF.
    Najverjetnej\u0161i razlog je, da je bil Ruffleju posredovan neveljaven URL za datoteko SWF.
error-unknown =
    Ruffle je naletel na ve\u010Djo te\u017Eavo pri prikazovanju te vsebine Flash.
    { $outdated ->
        [true] \u010Ce ste skrbnik stre\u017Enika, poskusite nalo\u017Eiti novej\u0161o razli\u010Dico Ruffle (trenutna razli\u010Dica je zastarela: { $buildDate }).
       *[false] To se ne bi smelo zgoditi, zato bi bili zelo hvale\u017Eni, \u010De bi prijavili napako!
    }
`,"save-manager.ftl":`save-delete-prompt = Ali ste prepri\u010Dani, da \u017Eelite izbrisati to shranjeno datoteko?
save-reload-prompt =
    Edini na\u010Din, da { $action ->
        [delete] izbri\u0161ete
       *[replace] zamenjate
    } to shranjeno datoteko brez morebitnega konflikta, je, da ponovno nalo\u017Eite to vsebino. \u017Delite vseeno nadaljevati?
save-download = Prenesi
save-replace = Zamenjaj
save-delete = Izbri\u0161i
save-backup-all = Prenesi vse shranjene datoteke
`,"volume-controls.ftl":`volume-controls-mute = Uti\u0161aj
volume-controls-unmute = Vklopi zvok
`},"sr-CS":{"context_menu.ftl":`context-menu-download-swf = Preuzmite .swf datoteku
context-menu-copy-debug-info = Kopirajte informacije za otklanjanje gre\u0161aka
context-menu-open-save-manager = Otvori menad\u017Eer skladi\u0161ta
context-menu-about-ruffle =
    { $flavor ->
    [extension] O ekstenziji Ruffle ({ $version })
    *[other] O Ruffle ({ $version })
    }
context-menu-hide = Sakrij ovaj meni
context-menu-exit-fullscreen = Iza\u0111i iz re\u017Eima celog ekrana
context-menu-enter-fullscreen = Pre\u0111i na ceo ekran
context-menu-volume-controls = Kontrole ja\u010Dine zvuka
`,"messages.ftl":`message-cant-embed =
    Ruffle nije mogao da pokrene Fle\u0161 ugra\u0111en na ovoj stranici.
    Mo\u017Eete poku\u0161ati da otvorite datoteku u posebnoj kartici da biste izbegli ovaj problem.
message-restored-from-bfcache =
    Va\u0161 pregleda\u010D je vratio ovaj Fle\u0161 sadr\u017Eaj iz prethodne sesije.
    Molimo vas da ponovo u\u010Ditate stranicu za novi po\u010Detak.
panic-title = Ne\u0161to je po\u0161lo po zlu :(
more-info = Dodatne informacije
run-anyway = Ipak pokreni
continue = Nastavi
report-bug = Prijavi gre\u0161ku
update-ruffle = A\u017Eurirajte Ruffle
ruffle-demo = Veb demo
ruffle-desktop = Desktop aplikacija
ruffle-wiki = Pogledajte Ruffle Wiki
enable-hardware-acceleration = Izgleda da je hardversko ubrzanje onemogu\u0107eno. Iako Ruffle mo\u017Eda radi, mo\u017Ee biti veoma spor. Mo\u017Eete saznati kako da omogu\u0107ite hardversko ubrzanje prate\u0107i donju vezu:
enable-hardware-acceleration-link = \u010Cesta pitanja - Hardversko ubrzanje u Chrome-u
view-error-details = Prika\u017Ei detalje gre\u0161ke
open-in-new-tab = Otvori u novoj kartici
click-to-unmute = Kliknite da biste uklju\u010Dili zvuk
clipboard-message-title = Kopiranje i nalepljivanje u Ruffle-u
clipboard-message-description =
    { $variant ->
    *[unsupported] Va\u0161 pregleda\u010D ne podr\u017Eava potpun pristup me\u0111uspremniku,
    [access-denied] Pristup baferu je zabranjen,
    } ali uvek mo\u017Eete koristiti ove pre\u010Dice:
clipboard-message-copy = { " " } za kopiju
clipboard-message-cut = { " " } za se\u010Denje
clipboard-message-paste = { " " } za lepljenje
error-canvas-reload = Ne mo\u017Ee se ponovo u\u010Ditati renderer za platno kada je renderer za platno ve\u0107 u upotrebi.
error-file-protocol =
    Izgleda da koristite Ruffle na protokolu "file:".
    Ovo ne funkcioni\u0161e jer pregleda\u010Di blokiraju mnoge funkcije iz bezbednosnih razloga.
    Umesto toga, preporu\u010Dujemo pode\u0161avanje lokalnog servera ili kori\u0161\u0107enje veb demo verzije ili desktop aplikacije.
error-javascript-config =
    Ruffle je nai\u0161ao na ozbiljan problem zbog pogre\u0161ne konfiguracije JavaSkripta.
    Ako ste administrator servera, preporu\u010Dujemo vam da proverite detalje gre\u0161ke kako biste saznali koji parametar uzrokuje problem. Tako\u0111e mo\u017Eete da konsultujete Ruffleov viki za pomo\u0107.
error-wasm-not-found =
    Ruffle nije uspeo da u\u010Dita potrebnu komponentu datoteke ".wasm".
    Ako ste administrator servera, proverite da li je datoteka ispravno otpremljena.
    Ako problem i dalje postoji, mo\u017Eda \u0107ete morati da koristite pode\u0161avanje "publicPath": pogledajte Ruffleovu viki stranicu za pomo\u0107.
error-wasm-mime-type =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Ovaj veb server ne slu\u017Ei ".wasm" datoteke sa ispravnim MIME tipom.
    Ako ste administrator servera, obratite se Ruffleovom vikiju za pomo\u0107.
error-invalid-swf =
    Ruffle ne mo\u017Ee da analizira tra\u017Eenu datoteku.
    Najverovatniji razlog je taj \u0161to tra\u017Eena datoteka nije va\u017Ee\u0107i SWF.
error-swf-fetch =
    Ruffle nije uspeo da u\u010Dita Fle\u0161 SWF datoteku.
    Najverovatniji razlog je taj \u0161to datoteka vi\u0161e ne postoji, pa Ruffle nema \u0161ta da u\u010Dita.
    Poku\u0161ajte da kontaktirate administratora veb stranice za pomo\u0107.
error-swf-cors =
    Ruffle nije uspeo da u\u010Dita Fle\u0161 SWF datoteku.
    Pristup preuzimanju je verovatno blokiran CORS politikom.
    Ako ste administrator servera, pogledajte Ruffleovu viki stranicu za pomo\u0107.
error-wasm-cors =
    Ruffle nije uspeo da u\u010Dita potrebnu komponentu datoteke ".wasm".
    Pristup preuzimanju je verovatno blokiran CORS politikom.
    Ako ste administrator servera, pogledajte Ruffleovu viki stranicu za pomo\u0107.
error-wasm-invalid =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Izgleda da ovoj stranici nedostaju ili su neva\u017Ee\u0107e datoteke za pokretanje Rufflea.
    Ako ste administrator servera, pogledajte Ruffleov viki za pomo\u0107.
error-wasm-download =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Ovo se \u010Desto mo\u017Ee re\u0161iti jednostavnim ponovnim u\u010Ditavanjem stranice.
    U suprotnom, kontaktirajte administratora sajta.
error-wasm-disabled-on-edge =
    Ruffle nije uspeo da u\u010Dita potrebnu komponentnu datoteku ".wasm".
    Da biste re\u0161ili ovaj problem, poku\u0161ajte da otvorite pode\u0161avanja pregleda\u010Da, kliknete na "Privatnost, pretraga i usluge", pomerite se nadole i isklju\u010Dite "Pobolj\u0161aj bezbednost veba".
    Ovo \u0107e omogu\u0107iti va\u0161em pregleda\u010Du da u\u010Dita potrebne ".wasm" datoteke.
    Ako problem i dalje postoji, mo\u017Eda \u0107ete morati da koristite drugi pregleda\u010D.
error-wasm-unsupported-browser =
    Pregleda\u010D koji koristite ne podr\u017Eava WebAssembly ekstenzije potrebne za rad Ruffle-a.
    Molimo vas da pre\u0111ete na podr\u017Eani pregleda\u010D.
    Lista podr\u017Eanih pregleda\u010Da mo\u017Ee se na\u0107i na Viki stranici.
error-javascript-conflict =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Izgleda da ova stranica koristi JavaSkript kod koji je u sukobu sa Ruffleom.
    Ako ste administrator servera, pozivamo vas da poku\u0161ate da otpremite datoteku na praznu stranicu.
error-javascript-conflict-outdated = Tako\u0111e mo\u017Eete poku\u0161ati da otpremite noviju verziju programa Ruffle koja bi mogla da re\u0161i problem (trenutna verzija je zastarela: { $buildDate }).
error-csp-conflict =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja inicijalizacije.
    Politike bezbednosti sadr\u017Eaja ovog veb servera ne dozvoljavaju pokretanje potrebne komponente ".wasm".
    Ako ste administrator servera, obratite se Ruffleovom vikiju za pomo\u0107.
error-unknown =
    Ruffle je nai\u0161ao na ozbiljan problem prilikom poku\u0161aja prikazivanja ovog Fle\u0161 sadr\u017Eaja.
    { $outdated ->
    [true] Ako ste administrator servera, poku\u0161ajte da otpremite noviju verziju Rufflea (trenutna verzija je zastarela: { $buildDate }).
    *[false] Ovo ne bi trebalo da se de\u0161ava, pa bismo vam bili veoma zahvalni ako biste prijavili gre\u0161ku!
    }
`,"save-manager.ftl":`save-delete-prompt = Da li ste sigurni da \u017Eelite da obri\u0161ete ovu datoteku za \u010Duvanje?
save-reload-prompt =
    Jedini na\u010Din da { $action ->
        [delete] obri\u0161ete
       *[replace] zamenite
    } ovu sa\u010Duvanu datoteku bez mogu\u0107ih konflikata jeste da ponovo u\u010Ditate ovaj sadr\u017Eaj. Da li \u017Eelite da ipak nastavite?
save-download = Preuzmite
save-replace = Zameni
save-delete = Obri\u0161i
save-backup-all = Preuzmi sve sa\u010Duvane datoteke
`,"volume-controls.ftl":`volume-controls-mute = Isklju\u010Di zvuk
volume-controls-unmute = Uklju\u010Di zvuk
`},"sr-SP":{"context_menu.ftl":`context-menu-download-swf = \u041F\u0440\u0435\u0443\u0437\u043C\u0438\u0442\u0435 .swf \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0443
context-menu-copy-debug-info = \u041A\u043E\u043F\u0438\u0440\u0430\u0458\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0458\u0435 \u0437\u0430 \u043E\u0442\u043A\u043B\u0430\u045A\u0430\u045A\u0435 \u0433\u0440\u0435\u0448\u0430\u043A\u0430
context-menu-open-save-manager = \u041E\u0442\u0432\u043E\u0440\u0438 \u043C\u0435\u043D\u0430\u045F\u0435\u0440 \u0441\u043A\u043B\u0430\u0434\u0438\u0448\u0442\u0430
context-menu-about-ruffle =
    { $flavor ->
    [extension] \u041E \u0435\u043A\u0441\u0442\u0435\u043D\u0437\u0438\u0458\u0438 Ruffle ({ $version })
    *[other] \u041E Ruffle ({ $version })
    }
context-menu-hide = \u0421\u0430\u043A\u0440\u0438\u0458 \u043E\u0432\u0430\u0458 \u043C\u0435\u043D\u0438
context-menu-exit-fullscreen = \u0418\u0437\u0430\u0452\u0438 \u0438\u0437 \u0440\u0435\u0436\u0438\u043C\u0430 \u0446\u0435\u043B\u043E\u0433 \u0435\u043A\u0440\u0430\u043D\u0430
context-menu-enter-fullscreen = \u041F\u0440\u0435\u0452\u0438 \u043D\u0430 \u0446\u0435\u043E \u0435\u043A\u0440\u0430\u043D
context-menu-volume-controls = \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0435 \u0458\u0430\u0447\u0438\u043D\u0435 \u0437\u0432\u0443\u043A\u0430
`,"messages.ftl":`message-cant-embed =
    Ruffle \u043D\u0438\u0458\u0435 \u043C\u043E\u0433\u0430\u043E \u0434\u0430 \u043F\u043E\u043A\u0440\u0435\u043D\u0435 \u0424\u043B\u0435\u0448 \u0443\u0433\u0440\u0430\u0452\u0435\u043D \u043D\u0430 \u043E\u0432\u043E\u0458 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0438.
    \u041C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043A\u0443\u0448\u0430\u0442\u0438 \u0434\u0430 \u043E\u0442\u0432\u043E\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0443 \u0443 \u043F\u043E\u0441\u0435\u0431\u043D\u043E\u0458 \u043A\u0430\u0440\u0442\u0438\u0446\u0438 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0438\u0437\u0431\u0435\u0433\u043B\u0438 \u043E\u0432\u0430\u0458 \u043F\u0440\u043E\u0431\u043B\u0435\u043C.
message-restored-from-bfcache =
    \u0412\u0430\u0448 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u0447 \u0458\u0435 \u0432\u0440\u0430\u0442\u0438\u043E \u043E\u0432\u0430\u0458 \u0424\u043B\u0435\u0448 \u0441\u0430\u0434\u0440\u0436\u0430\u0458 \u0438\u0437 \u043F\u0440\u0435\u0442\u0445\u043E\u0434\u043D\u0435 \u0441\u0435\u0441\u0438\u0458\u0435.
    \u041C\u043E\u043B\u0438\u043C\u043E \u0432\u0430\u0441 \u0434\u0430 \u043F\u043E\u043D\u043E\u0432\u043E \u0443\u0447\u0438\u0442\u0430\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0437\u0430 \u043D\u043E\u0432\u0438 \u043F\u043E\u0447\u0435\u0442\u0430\u043A.
panic-title = \u041D\u0435\u0448\u0442\u043E \u0458\u0435 \u043F\u043E\u0448\u043B\u043E \u043F\u043E \u0437\u043B\u0443 :(
more-info = \u0414\u043E\u0434\u0430\u0442\u043D\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0458\u0435
run-anyway = \u0418\u043F\u0430\u043A \u043F\u043E\u043A\u0440\u0435\u043D\u0438
continue = \u041D\u0430\u0441\u0442\u0430\u0432\u0438
report-bug = \u041F\u0440\u0438\u0458\u0430\u0432\u0438 \u0433\u0440\u0435\u0448\u043A\u0443
update-ruffle = \u0410\u0436\u0443\u0440\u0438\u0440\u0430\u0458\u0442\u0435 Ruffle
ruffle-demo = \u0412\u0435\u0431 \u0434\u0435\u043C\u043E
ruffle-desktop = \u0414\u0435\u0441\u043A\u0442\u043E\u043F \u0430\u043F\u043B\u0438\u043A\u0430\u0446\u0438\u0458\u0430
ruffle-wiki = \u041F\u043E\u0433\u043B\u0435\u0434\u0430\u0458\u0442\u0435 Ruffle Wiki
enable-hardware-acceleration = \u0418\u0437\u0433\u043B\u0435\u0434\u0430 \u0434\u0430 \u0458\u0435 \u0445\u0430\u0440\u0434\u0432\u0435\u0440\u0441\u043A\u043E \u0443\u0431\u0440\u0437\u0430\u045A\u0435 \u043E\u043D\u0435\u043C\u043E\u0433\u0443\u045B\u0435\u043D\u043E. \u0418\u0430\u043A\u043E Ruffle \u043C\u043E\u0436\u0434\u0430 \u0440\u0430\u0434\u0438, \u043C\u043E\u0436\u0435 \u0431\u0438\u0442\u0438 \u0432\u0435\u043E\u043C\u0430 \u0441\u043F\u043E\u0440. \u041C\u043E\u0436\u0435\u0442\u0435 \u0441\u0430\u0437\u043D\u0430\u0442\u0438 \u043A\u0430\u043A\u043E \u0434\u0430 \u043E\u043C\u043E\u0433\u0443\u045B\u0438\u0442\u0435 \u0445\u0430\u0440\u0434\u0432\u0435\u0440\u0441\u043A\u043E \u0443\u0431\u0440\u0437\u0430\u045A\u0435 \u043F\u0440\u0430\u0442\u0435\u045B\u0438 \u0434\u043E\u045A\u0443 \u0432\u0435\u0437\u0443:
enable-hardware-acceleration-link = \u0427\u0435\u0441\u0442\u0430 \u043F\u0438\u0442\u0430\u045A\u0430 - \u0425\u0430\u0440\u0434\u0432\u0435\u0440\u0441\u043A\u043E \u0443\u0431\u0440\u0437\u0430\u045A\u0435 \u0443 Chrome-\u0443
view-error-details = \u041F\u0440\u0438\u043A\u0430\u0436\u0438 \u0434\u0435\u0442\u0430\u0459\u0435 \u0433\u0440\u0435\u0448\u043A\u0435
open-in-new-tab = \u041E\u0442\u0432\u043E\u0440\u0438 \u0443 \u043D\u043E\u0432\u043E\u0458 \u043A\u0430\u0440\u0442\u0438\u0446\u0438
click-to-unmute = \u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0443\u043A\u0459\u0443\u0447\u0438\u043B\u0438 \u0437\u0432\u0443\u043A
clipboard-message-title = \u041A\u043E\u043F\u0438\u0440\u0430\u045A\u0435 \u0438 \u043D\u0430\u043B\u0435\u043F\u0459\u0438\u0432\u0430\u045A\u0435 \u0443 Ruffle-\u0443
clipboard-message-description =
    { $variant ->
    *[unsupported] \u0412\u0430\u0448 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u0447 \u043D\u0435 \u043F\u043E\u0434\u0440\u0436\u0430\u0432\u0430 \u043F\u043E\u0442\u043F\u0443\u043D \u043F\u0440\u0438\u0441\u0442\u0443\u043F \u043C\u0435\u0452\u0443\u0441\u043F\u0440\u0435\u043C\u043D\u0438\u043A\u0443,
    [access-denied] \u041F\u0440\u0438\u0441\u0442\u0443\u043F \u0431\u0430\u0444\u0435\u0440\u0443 \u0458\u0435 \u0437\u0430\u0431\u0440\u0430\u045A\u0435\u043D,
    } \u0430\u043B\u0438 \u0443\u0432\u0435\u043A \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0438 \u043E\u0432\u0435 \u043F\u0440\u0435\u0447\u0438\u0446\u0435:
clipboard-message-copy = { " " } \u0437\u0430 \u043A\u043E\u043F\u0438\u0458\u0443
clipboard-message-cut = { " " } \u0437\u0430 \u0441\u0435\u0447\u0435\u045A\u0435
clipboard-message-paste = { " " } \u0437\u0430 \u043B\u0435\u043F\u0459\u0435\u045A\u0435
error-canvas-reload = \u041D\u0435 \u043C\u043E\u0436\u0435 \u0441\u0435 \u043F\u043E\u043D\u043E\u0432\u043E \u0443\u0447\u0438\u0442\u0430\u0442\u0438 \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440 \u0437\u0430 \u043F\u043B\u0430\u0442\u043D\u043E \u043A\u0430\u0434\u0430 \u0458\u0435 \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440 \u0437\u0430 \u043F\u043B\u0430\u0442\u043D\u043E \u0432\u0435\u045B \u0443 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0438.
error-file-protocol =
    \u0418\u0437\u0433\u043B\u0435\u0434\u0430 \u0434\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0435 Ruffle \u043D\u0430 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0443 "file:".
    \u041E\u0432\u043E \u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0448\u0435 \u0458\u0435\u0440 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u0447\u0438 \u0431\u043B\u043E\u043A\u0438\u0440\u0430\u0458\u0443 \u043C\u043D\u043E\u0433\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u0438\u0437 \u0431\u0435\u0437\u0431\u0435\u0434\u043D\u043E\u0441\u043D\u0438\u0445 \u0440\u0430\u0437\u043B\u043E\u0433\u0430.
    \u0423\u043C\u0435\u0441\u0442\u043E \u0442\u043E\u0433\u0430, \u043F\u0440\u0435\u043F\u043E\u0440\u0443\u0447\u0443\u0458\u0435\u043C\u043E \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0435 \u043B\u043E\u043A\u0430\u043B\u043D\u043E\u0433 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043B\u0438 \u043A\u043E\u0440\u0438\u0448\u045B\u0435\u045A\u0435 \u0432\u0435\u0431 \u0434\u0435\u043C\u043E \u0432\u0435\u0440\u0437\u0438\u0458\u0435 \u0438\u043B\u0438 \u0434\u0435\u0441\u043A\u0442\u043E\u043F \u0430\u043F\u043B\u0438\u043A\u0430\u0446\u0438\u0458\u0435.
error-javascript-config =
    Ruffle \u0458\u0435 \u043D\u0430\u0438\u0448\u0430\u043E \u043D\u0430 \u043E\u0437\u0431\u0438\u0459\u0430\u043D \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0437\u0431\u043E\u0433 \u043F\u043E\u0433\u0440\u0435\u0448\u043D\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0458\u0435 \u0408\u0430\u0432\u0430\u0421\u043A\u0440\u0438\u043F\u0442\u0430.
    \u0410\u043A\u043E \u0441\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u0440\u0435\u043F\u043E\u0440\u0443\u0447\u0443\u0458\u0435\u043C\u043E \u0432\u0430\u043C \u0434\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u0459\u0435 \u0433\u0440\u0435\u0448\u043A\u0435 \u043A\u0430\u043A\u043E \u0431\u0438\u0441\u0442\u0435 \u0441\u0430\u0437\u043D\u0430\u043B\u0438 \u043A\u043E\u0458\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0430\u0440 \u0443\u0437\u0440\u043E\u043A\u0443\u0458\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C. \u0422\u0430\u043A\u043E\u0452\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u0442\u0443\u0458\u0435\u0442\u0435 Ruffle\u043E\u0432 \u0432\u0438\u043A\u0438 \u0437\u0430 \u043F\u043E\u043C\u043E\u045B.
error-wasm-not-found =
    Ruffle \u043D\u0438\u0458\u0435 \u0443\u0441\u043F\u0435\u043E \u0434\u0430 \u0443\u0447\u0438\u0442\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u0443 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0435 ".wasm".
    \u0410\u043A\u043E \u0441\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u0435 \u0434\u0430 \u043B\u0438 \u0458\u0435 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0430 \u0438\u0441\u043F\u0440\u0430\u0432\u043D\u043E \u043E\u0442\u043F\u0440\u0435\u043C\u0459\u0435\u043D\u0430.
    \u0410\u043A\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0438 \u0434\u0430\u0459\u0435 \u043F\u043E\u0441\u0442\u043E\u0458\u0438, \u043C\u043E\u0436\u0434\u0430 \u045B\u0435\u0442\u0435 \u043C\u043E\u0440\u0430\u0442\u0438 \u0434\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0435 "publicPath": \u043F\u043E\u0433\u043B\u0435\u0434\u0430\u0458\u0442\u0435 Ruffle\u043E\u0432\u0443 \u0432\u0438\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0437\u0430 \u043F\u043E\u043C\u043E\u045B.
error-wasm-mime-type =
    Ruffle \u0458\u0435 \u043D\u0430\u0438\u0448\u0430\u043E \u043D\u0430 \u043E\u0437\u0431\u0438\u0459\u0430\u043D \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043F\u0440\u0438\u043B\u0438\u043A\u043E\u043C \u043F\u043E\u043A\u0443\u0448\u0430\u0458\u0430 \u0438\u043D\u0438\u0446\u0438\u0458\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0458\u0435.
    \u041E\u0432\u0430\u0458 \u0432\u0435\u0431 \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u0441\u043B\u0443\u0436\u0438 ".wasm" \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0435 \u0441\u0430 \u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0438\u043C MIME \u0442\u0438\u043F\u043E\u043C.
    \u0410\u043A\u043E \u0441\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0441\u0435 Ruffle\u043E\u0432\u043E\u043C \u0432\u0438\u043A\u0438\u0458\u0443 \u0437\u0430 \u043F\u043E\u043C\u043E\u045B.
error-invalid-swf =
    Ruffle \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0430 \u0442\u0440\u0430\u0436\u0435\u043D\u0443 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0443.
    \u041D\u0430\u0458\u0432\u0435\u0440\u043E\u0432\u0430\u0442\u043D\u0438\u0458\u0438 \u0440\u0430\u0437\u043B\u043E\u0433 \u0458\u0435 \u0442\u0430\u0458 \u0448\u0442\u043E \u0442\u0440\u0430\u0436\u0435\u043D\u0430 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0430 \u043D\u0438\u0458\u0435 \u0432\u0430\u0436\u0435\u045B\u0438 SWF.
error-swf-fetch =
    Ruffle \u043D\u0438\u0458\u0435 \u0443\u0441\u043F\u0435\u043E \u0434\u0430 \u0443\u0447\u0438\u0442\u0430 \u0424\u043B\u0435\u0448 SWF \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0443.
    \u041D\u0430\u0458\u0432\u0435\u0440\u043E\u0432\u0430\u0442\u043D\u0438\u0458\u0438 \u0440\u0430\u0437\u043B\u043E\u0433 \u0458\u0435 \u0442\u0430\u0458 \u0448\u0442\u043E \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0430 \u0432\u0438\u0448\u0435 \u043D\u0435 \u043F\u043E\u0441\u0442\u043E\u0458\u0438, \u043F\u0430 Ruffle \u043D\u0435\u043C\u0430 \u0448\u0442\u0430 \u0434\u0430 \u0443\u0447\u0438\u0442\u0430.
    \u041F\u043E\u043A\u0443\u0448\u0430\u0458\u0442\u0435 \u0434\u0430 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438\u0440\u0430\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0432\u0435\u0431 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430 \u043F\u043E\u043C\u043E\u045B.
error-swf-cors =
    Ruffle \u043D\u0438\u0458\u0435 \u0443\u0441\u043F\u0435\u043E \u0434\u0430 \u0443\u0447\u0438\u0442\u0430 \u0424\u043B\u0435\u0448 SWF \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0443.
    \u041F\u0440\u0438\u0441\u0442\u0443\u043F \u043F\u0440\u0435\u0443\u0437\u0438\u043C\u0430\u045A\u0443 \u0458\u0435 \u0432\u0435\u0440\u043E\u0432\u0430\u0442\u043D\u043E \u0431\u043B\u043E\u043A\u0438\u0440\u0430\u043D CORS \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u043C.
    \u0410\u043A\u043E \u0441\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u043E\u0433\u043B\u0435\u0434\u0430\u0458\u0442\u0435 Ruffle\u043E\u0432\u0443 \u0432\u0438\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0437\u0430 \u043F\u043E\u043C\u043E\u045B.
error-wasm-cors =
    Ruffle \u043D\u0438\u0458\u0435 \u0443\u0441\u043F\u0435\u043E \u0434\u0430 \u0443\u0447\u0438\u0442\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u0443 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0435 ".wasm".
    \u041F\u0440\u0438\u0441\u0442\u0443\u043F \u043F\u0440\u0435\u0443\u0437\u0438\u043C\u0430\u045A\u0443 \u0458\u0435 \u0432\u0435\u0440\u043E\u0432\u0430\u0442\u043D\u043E \u0431\u043B\u043E\u043A\u0438\u0440\u0430\u043D CORS \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u043C.
    \u0410\u043A\u043E \u0441\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u043E\u0433\u043B\u0435\u0434\u0430\u0458\u0442\u0435 Ruffle\u043E\u0432\u0443 \u0432\u0438\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0437\u0430 \u043F\u043E\u043C\u043E\u045B.
error-wasm-invalid =
    Ruffle \u0458\u0435 \u043D\u0430\u0438\u0448\u0430\u043E \u043D\u0430 \u043E\u0437\u0431\u0438\u0459\u0430\u043D \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043F\u0440\u0438\u043B\u0438\u043A\u043E\u043C \u043F\u043E\u043A\u0443\u0448\u0430\u0458\u0430 \u0438\u043D\u0438\u0446\u0438\u0458\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0458\u0435.
    \u0418\u0437\u0433\u043B\u0435\u0434\u0430 \u0434\u0430 \u043E\u0432\u043E\u0458 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0458\u0443 \u0438\u043B\u0438 \u0441\u0443 \u043D\u0435\u0432\u0430\u0436\u0435\u045B\u0435 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0435 \u0437\u0430 \u043F\u043E\u043A\u0440\u0435\u0442\u0430\u045A\u0435 Ruffle\u0430.
    \u0410\u043A\u043E \u0441\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u043E\u0433\u043B\u0435\u0434\u0430\u0458\u0442\u0435 Ruffle\u043E\u0432 \u0432\u0438\u043A\u0438 \u0437\u0430 \u043F\u043E\u043C\u043E\u045B.
error-wasm-download =
    Ruffle \u0458\u0435 \u043D\u0430\u0438\u0448\u0430\u043E \u043D\u0430 \u043E\u0437\u0431\u0438\u0459\u0430\u043D \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043F\u0440\u0438\u043B\u0438\u043A\u043E\u043C \u043F\u043E\u043A\u0443\u0448\u0430\u0458\u0430 \u0438\u043D\u0438\u0446\u0438\u0458\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0458\u0435.
    \u041E\u0432\u043E \u0441\u0435 \u0447\u0435\u0441\u0442\u043E \u043C\u043E\u0436\u0435 \u0440\u0435\u0448\u0438\u0442\u0438 \u0458\u0435\u0434\u043D\u043E\u0441\u0442\u0430\u0432\u043D\u0438\u043C \u043F\u043E\u043D\u043E\u0432\u043D\u0438\u043C \u0443\u0447\u0438\u0442\u0430\u0432\u0430\u045A\u0435\u043C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.
    \u0423 \u0441\u0443\u043F\u0440\u043E\u0442\u043D\u043E\u043C, \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438\u0440\u0430\u0458\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0441\u0430\u0458\u0442\u0430.
error-wasm-disabled-on-edge =
    Ruffle \u043D\u0438\u0458\u0435 \u0443\u0441\u043F\u0435\u043E \u0434\u0430 \u0443\u0447\u0438\u0442\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u0443 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043D\u0443 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0443 ".wasm".
    \u0414\u0430 \u0431\u0438\u0441\u0442\u0435 \u0440\u0435\u0448\u0438\u043B\u0438 \u043E\u0432\u0430\u0458 \u043F\u0440\u043E\u0431\u043B\u0435\u043C, \u043F\u043E\u043A\u0443\u0448\u0430\u0458\u0442\u0435 \u0434\u0430 \u043E\u0442\u0432\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430\u045A\u0430 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u0447\u0430, \u043A\u043B\u0438\u043A\u043D\u0435\u0442\u0435 \u043D\u0430 "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442, \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u0438 \u0443\u0441\u043B\u0443\u0433\u0435", \u043F\u043E\u043C\u0435\u0440\u0438\u0442\u0435 \u0441\u0435 \u043D\u0430\u0434\u043E\u043B\u0435 \u0438 \u0438\u0441\u043A\u0459\u0443\u0447\u0438\u0442\u0435 "\u041F\u043E\u0431\u043E\u0459\u0448\u0430\u0458 \u0431\u0435\u0437\u0431\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u0435\u0431\u0430".
    \u041E\u0432\u043E \u045B\u0435 \u043E\u043C\u043E\u0433\u0443\u045B\u0438\u0442\u0438 \u0432\u0430\u0448\u0435\u043C \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u0447\u0443 \u0434\u0430 \u0443\u0447\u0438\u0442\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u0435 ".wasm" \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0435.
    \u0410\u043A\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0438 \u0434\u0430\u0459\u0435 \u043F\u043E\u0441\u0442\u043E\u0458\u0438, \u043C\u043E\u0436\u0434\u0430 \u045B\u0435\u0442\u0435 \u043C\u043E\u0440\u0430\u0442\u0438 \u0434\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0438 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u0447.
error-wasm-unsupported-browser =
    \u041F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u0447 \u043A\u043E\u0458\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u043D\u0435 \u043F\u043E\u0434\u0440\u0436\u0430\u0432\u0430 WebAssembly \u0435\u043A\u0441\u0442\u0435\u043D\u0437\u0438\u0458\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u0435 \u0437\u0430 \u0440\u0430\u0434 Ruffle-\u0430.
    \u041C\u043E\u043B\u0438\u043C\u043E \u0432\u0430\u0441 \u0434\u0430 \u043F\u0440\u0435\u0452\u0435\u0442\u0435 \u043D\u0430 \u043F\u043E\u0434\u0440\u0436\u0430\u043D\u0438 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u0447.
    \u041B\u0438\u0441\u0442\u0430 \u043F\u043E\u0434\u0440\u0436\u0430\u043D\u0438\u0445 \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u0447\u0430 \u043C\u043E\u0436\u0435 \u0441\u0435 \u043D\u0430\u045B\u0438 \u043D\u0430 \u0412\u0438\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0438.
error-javascript-conflict =
    Ruffle \u0458\u0435 \u043D\u0430\u0438\u0448\u0430\u043E \u043D\u0430 \u043E\u0437\u0431\u0438\u0459\u0430\u043D \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043F\u0440\u0438\u043B\u0438\u043A\u043E\u043C \u043F\u043E\u043A\u0443\u0448\u0430\u0458\u0430 \u0438\u043D\u0438\u0446\u0438\u0458\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0458\u0435.
    \u0418\u0437\u0433\u043B\u0435\u0434\u0430 \u0434\u0430 \u043E\u0432\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0438 \u0408\u0430\u0432\u0430\u0421\u043A\u0440\u0438\u043F\u0442 \u043A\u043E\u0434 \u043A\u043E\u0458\u0438 \u0458\u0435 \u0443 \u0441\u0443\u043A\u043E\u0431\u0443 \u0441\u0430 Ruffle\u043E\u043C.
    \u0410\u043A\u043E \u0441\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u043E\u0437\u0438\u0432\u0430\u043C\u043E \u0432\u0430\u0441 \u0434\u0430 \u043F\u043E\u043A\u0443\u0448\u0430\u0442\u0435 \u0434\u0430 \u043E\u0442\u043F\u0440\u0435\u043C\u0438\u0442\u0435 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0443 \u043D\u0430 \u043F\u0440\u0430\u0437\u043D\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.
error-javascript-conflict-outdated = \u0422\u0430\u043A\u043E\u0452\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043A\u0443\u0448\u0430\u0442\u0438 \u0434\u0430 \u043E\u0442\u043F\u0440\u0435\u043C\u0438\u0442\u0435 \u043D\u043E\u0432\u0438\u0458\u0443 \u0432\u0435\u0440\u0437\u0438\u0458\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430 Ruffle \u043A\u043E\u0458\u0430 \u0431\u0438 \u043C\u043E\u0433\u043B\u0430 \u0434\u0430 \u0440\u0435\u0448\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C (\u0442\u0440\u0435\u043D\u0443\u0442\u043D\u0430 \u0432\u0435\u0440\u0437\u0438\u0458\u0430 \u0458\u0435 \u0437\u0430\u0441\u0442\u0430\u0440\u0435\u043B\u0430: { $buildDate }).
error-csp-conflict =
    Ruffle \u0458\u0435 \u043D\u0430\u0438\u0448\u0430\u043E \u043D\u0430 \u043E\u0437\u0431\u0438\u0459\u0430\u043D \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043F\u0440\u0438\u043B\u0438\u043A\u043E\u043C \u043F\u043E\u043A\u0443\u0448\u0430\u0458\u0430 \u0438\u043D\u0438\u0446\u0438\u0458\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0458\u0435.
    \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u0431\u0435\u0437\u0431\u0435\u0434\u043D\u043E\u0441\u0442\u0438 \u0441\u0430\u0434\u0440\u0436\u0430\u0458\u0430 \u043E\u0432\u043E\u0433 \u0432\u0435\u0431 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043D\u0435 \u0434\u043E\u0437\u0432\u043E\u0459\u0430\u0432\u0430\u0458\u0443 \u043F\u043E\u043A\u0440\u0435\u0442\u0430\u045A\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435 ".wasm".
    \u0410\u043A\u043E \u0441\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0441\u0435 Ruffle\u043E\u0432\u043E\u043C \u0432\u0438\u043A\u0438\u0458\u0443 \u0437\u0430 \u043F\u043E\u043C\u043E\u045B.
error-unknown =
    Ruffle \u0458\u0435 \u043D\u0430\u0438\u0448\u0430\u043E \u043D\u0430 \u043E\u0437\u0431\u0438\u0459\u0430\u043D \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u043F\u0440\u0438\u043B\u0438\u043A\u043E\u043C \u043F\u043E\u043A\u0443\u0448\u0430\u0458\u0430 \u043F\u0440\u0438\u043A\u0430\u0437\u0438\u0432\u0430\u045A\u0430 \u043E\u0432\u043E\u0433 \u0424\u043B\u0435\u0448 \u0441\u0430\u0434\u0440\u0436\u0430\u0458\u0430.
    { $outdated ->
    [true] \u0410\u043A\u043E \u0441\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u043E\u043A\u0443\u0448\u0430\u0458\u0442\u0435 \u0434\u0430 \u043E\u0442\u043F\u0440\u0435\u043C\u0438\u0442\u0435 \u043D\u043E\u0432\u0438\u0458\u0443 \u0432\u0435\u0440\u0437\u0438\u0458\u0443 Ruffle\u0430 (\u0442\u0440\u0435\u043D\u0443\u0442\u043D\u0430 \u0432\u0435\u0440\u0437\u0438\u0458\u0430 \u0458\u0435 \u0437\u0430\u0441\u0442\u0430\u0440\u0435\u043B\u0430: { $buildDate }).
    *[false] \u041E\u0432\u043E \u043D\u0435 \u0431\u0438 \u0442\u0440\u0435\u0431\u0430\u043B\u043E \u0434\u0430 \u0441\u0435 \u0434\u0435\u0448\u0430\u0432\u0430, \u043F\u0430 \u0431\u0438\u0441\u043C\u043E \u0432\u0430\u043C \u0431\u0438\u043B\u0438 \u0432\u0435\u043E\u043C\u0430 \u0437\u0430\u0445\u0432\u0430\u043B\u043D\u0438 \u0430\u043A\u043E \u0431\u0438\u0441\u0442\u0435 \u043F\u0440\u0438\u0458\u0430\u0432\u0438\u043B\u0438 \u0433\u0440\u0435\u0448\u043A\u0443!
    }
`,"save-manager.ftl":`save-delete-prompt = \u0414\u0430 \u043B\u0438 \u0441\u0442\u0435 \u0441\u0438\u0433\u0443\u0440\u043D\u0438 \u0434\u0430 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u043E\u0431\u0440\u0438\u0448\u0435\u0442\u0435 \u043E\u0432\u0443 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0443 \u0437\u0430 \u0447\u0443\u0432\u0430\u045A\u0435?
save-reload-prompt =
    \u0408\u0435\u0434\u0438\u043D\u0438 \u043D\u0430\u0447\u0438\u043D \u0434\u0430 { $action ->
        [delete] \u043E\u0431\u0440\u0438\u0448\u0435\u0442\u0435
       *[replace] \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u0435
    } \u043E\u0432\u0443 \u0441\u0430\u0447\u0443\u0432\u0430\u043D\u0443 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0443 \u0431\u0435\u0437 \u043C\u043E\u0433\u0443\u045B\u0438\u0445 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0430\u0442\u0430 \u0458\u0435\u0441\u0442\u0435 \u0434\u0430 \u043F\u043E\u043D\u043E\u0432\u043E \u0443\u0447\u0438\u0442\u0430\u0442\u0435 \u043E\u0432\u0430\u0458 \u0441\u0430\u0434\u0440\u0436\u0430\u0458. \u0414\u0430 \u043B\u0438 \u0436\u0435\u043B\u0438\u0442\u0435 \u0434\u0430 \u0438\u043F\u0430\u043A \u043D\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u0435?
save-download = \u041F\u0440\u0435\u0443\u0437\u043C\u0438\u0442\u0435
save-replace = \u0417\u0430\u043C\u0435\u043D\u0438
save-delete = \u041E\u0431\u0440\u0438\u0448\u0438
save-backup-all = \u041F\u0440\u0435\u0443\u0437\u043C\u0438 \u0441\u0432\u0435 \u0441\u0430\u0447\u0443\u0432\u0430\u043D\u0435 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0435
`,"volume-controls.ftl":`volume-controls-mute = \u0418\u0441\u043A\u0459\u0443\u0447\u0438 \u0437\u0432\u0443\u043A
volume-controls-unmute = \u0423\u043A\u0459\u0443\u0447\u0438 \u0437\u0432\u0443\u043A
`},"sv-SE":{"context_menu.ftl":`context-menu-download-swf = Ladda ned SWF-fil
context-menu-copy-debug-info = Kopiera fels\xF6kningsinformation
context-menu-open-save-manager = \xD6ppna sparfilshanteraren
context-menu-about-ruffle =
    { $flavor ->
        [extension] Om Ruffle-till\xE4gget ({ $version })
       *[other] Om Ruffle ({ $version })
    }
context-menu-hide = D\xF6lj den h\xE4r menyn
context-menu-exit-fullscreen = Avsluta helsk\xE4rm
context-menu-enter-fullscreen = Helsk\xE4rm
context-menu-volume-controls = Ljudkontroller
`,"messages.ftl":`message-cant-embed =
    Ruffle kunde inte k\xF6ra Flash-inneh\xE5llet som \xE4r inb\xE4ddat p\xE5 den h\xE4r sidan.
    Du kan f\xF6rs\xF6ka kringg\xE5 problemet genom att \xF6ppna filen p\xE5 en separat flik.
message-restored-from-bfcache =
    Din webbl\xE4sare \xE5terst\xE4llde detta Flash-inneh\xE5ll fr\xE5n en tidigare session.
    F\xF6r att b\xF6rja p\xE5 nytt, ladda om sidan.
panic-title = N\xE5got gick fel :(
more-info = Mer information
run-anyway = K\xF6r \xE4nd\xE5
continue = Forts\xE4tt
report-bug = Rapportera fel
update-ruffle = Uppdatera Ruffle
ruffle-demo = Webbdemo
ruffle-desktop = Skrivbordsprogram
ruffle-wiki = Visa Ruffles wiki
enable-hardware-acceleration = H\xE5rdvaruaccelerationen verkar vara avst\xE4ngd. Ruffle kan fortfarande fungera, men det kan g\xE5 mycket l\xE5ngsamt. F\xF6lj l\xE4nken nedan f\xF6r information om hur du aktiverar h\xE5rdvaruacceleration:
enable-hardware-acceleration-link = FAQ \u2013 h\xE5rdvaruacceleration i Chrome
view-error-details = Visa felinformation
open-in-new-tab = \xD6ppna i en ny flik
click-to-unmute = Klicka f\xF6r att sl\xE5 p\xE5 ljudet
clipboard-message-title = Kopiera och klistra in i Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Din webbl\xE4sare har inte fullst\xE4ndig \xE5tkomst till urklippet,
        [access-denied] Urklipps\xE5tkomst har nekats,
    } men du kan anv\xE4nda dessa kortkommandon ist\xE4llet:
clipboard-message-copy = { " " } f\xF6r att kopiera
clipboard-message-cut = { " " } f\xF6r att klippa ut
clipboard-message-paste = { " " } f\xF6r att klistra in
error-canvas-reload = Kan inte ladda om med canvas-renderaren n\xE4r den redan anv\xE4nds.
error-file-protocol =
    Det verkar som att du k\xF6r Ruffle via protokollet \u201Dfile:\u201D.
    Det fungerar inte eftersom webbl\xE4sare av s\xE4kerhetssk\xE4l blockerar m\xE5nga n\xF6dv\xE4ndiga funktioner.
    Konfigurera i st\xE4llet en lokal server eller anv\xE4nd webbdemon eller skrivbordsprogrammet.
error-javascript-config =
    Ruffle har st\xF6tt p\xE5 ett allvarligt problem p\xE5 grund av en felaktig JavaScript-konfiguration.
    Om du \xE4r serveradministrat\xF6r kan du kontrollera felinformationen f\xF6r att se vilken parameter som orsakar felet.
    Du kan \xE4ven f\xE5 hj\xE4lp i Ruffles wiki.
error-wasm-not-found =
    Ruffle kunde inte l\xE4sa in den n\xF6dv\xE4ndiga \u201D.wasm\u201D-filen.
    Om du \xE4r serveradministrat\xF6r b\xF6r du kontrollera att filen har laddats upp korrekt.
    Om problemet kvarst\xE5r kan du beh\xF6va anv\xE4nda inst\xE4llningen \u201DpublicPath\u201D. Mer information finns i Ruffles wiki.
error-wasm-mime-type =
    Ruffle har st\xF6tt p\xE5 ett allvarligt problem under initieringen.
    Webbservern levererar inte \u201D.wasm\u201D-filer med r\xE4tt MIME-typ.
    Om du \xE4r serveradministrat\xF6r finns mer information i Ruffles wiki.
error-invalid-swf =
    Ruffle kan inte tolka den beg\xE4rda filen.
    Den troligaste orsaken \xE4r att filen inte \xE4r en giltig SWF-fil.
error-swf-fetch =
    Ruffle kunde inte l\xE4sa in Flash-SWF-filen.
    Den troligaste orsaken \xE4r att filen inte l\xE4ngre finns och d\xE4rf\xF6r inte kan l\xE4sas in.
    Kontakta webbplatsens administrat\xF6r f\xF6r hj\xE4lp.
error-swf-cors =
    Ruffle kunde inte l\xE4sa in Flash-SWF-filen.
    H\xE4mtningen har troligen blockerats av CORS-policyn.
    Om du \xE4r serveradministrat\xF6r finns mer information i Ruffles wiki.
error-wasm-cors =
    Ruffle kunde inte l\xE4sa in den n\xF6dv\xE4ndiga \u201D.wasm\u201D-filen.
    H\xE4mtningen har troligen blockerats av CORS-policyn.
    Om du \xE4r serveradministrat\xF6r finns mer information i Ruffles wiki.
error-wasm-invalid =
    Ruffle har st\xF6tt p\xE5 ett allvarligt problem under initieringen.
    Sidan verkar sakna giltiga filer som kr\xE4vs f\xF6r att k\xF6ra Ruffle.
    Om du \xE4r serveradministrat\xF6r finns mer information i Ruffles wiki.
error-wasm-download =
    Ruffle har st\xF6tt p\xE5 ett stort fel under initieringen.
    Detta kan ofta l\xF6sas av sig sj\xE4lv s\xE5 du kan prova att ladda om sidan.
    Kontakta annars v\xE4nligen webbplatsens administrat\xF6r.
error-wasm-disabled-on-edge =
    Ruffle kunde inte l\xE4sa in den n\xF6dv\xE4ndiga \u201D.wasm\u201D-filen.
    F\xF6rs\xF6k \xE5tg\xE4rda problemet genom att \xF6ppna webbl\xE4sarens inst\xE4llningar, klicka p\xE5 \u201DSekretess, s\xF6kning och tj\xE4nster\u201D, rulla ned och st\xE4nga av \u201DF\xF6rb\xE4ttra s\xE4kerheten p\xE5 webben\u201D.
    D\xE5 kan webbl\xE4saren l\xE4sa in de n\xF6dv\xE4ndiga \u201D.wasm\u201D-filerna.
    Om problemet kvarst\xE5r kan du beh\xF6va anv\xE4nda en annan webbl\xE4sare.
error-wasm-unsupported-browser =
    Webbl\xE4saren st\xF6der inte de WebAssembly-till\xE4gg som kr\xE4vs f\xF6r att k\xF6ra Ruffle.
    Byt till en webbl\xE4sare som st\xF6ds.
    En lista \xF6ver kompatibla webbl\xE4sare finns i wikin.
error-javascript-conflict =
    Ruffle har st\xF6tt p\xE5 ett allvarligt problem under initieringen.
    Sidan verkar anv\xE4nda JavaScript-kod som st\xE5r i konflikt med Ruffle.
    Om du \xE4r serveradministrat\xF6r kan du f\xF6rs\xF6ka l\xE4sa in filen p\xE5 en tom sida.
error-javascript-conflict-outdated = Du kan ocks\xE5 f\xF6rs\xF6ka ladda upp en nyare version av Ruffle, vilket kan kringg\xE5 problemet (nuvarande version \xE4r utdaterad: { $buildDate }).
error-csp-conflict =
    Ruffle har st\xF6tt p\xE5 ett allvarligt problem under initieringen.
    Webbserverns inneh\xE5llss\xE4kerhetspolicy till\xE5ter inte att den n\xF6dv\xE4ndiga \u201D.wasm\u201D-komponenten k\xF6rs.
    Om du \xE4r serveradministrat\xF6r finns mer information i Ruffles wiki.
error-url-invalid =
    Ruffle kunde inte l\xE4sa in Flash-SWF-filen.
    Den troligaste orsaken \xE4r att Ruffle fick en ogiltig URL till SWF-filen.
error-unknown =
    Ruffle har st\xF6tt p\xE5 ett stort fel medan den f\xF6rs\xF6kte visa Flash-inneh\xE5llet.
    { $outdated ->
        [true] Om du \xE4r serveradministrat\xF6ren f\xF6rs\xF6k att ladda upp en nyare version av Ruffle (nuvarande version \xE4r utdaterad: { $buildDate }).
       *[false] Detta \xE4r inte t\xE4nkt att h\xE4nda s\xE5 vi skulle verkligen uppskatta om du kunde rapportera in en bugg!
    }
`,"save-manager.ftl":`save-delete-prompt = \xC4r du s\xE4ker p\xE5 att du vill radera sparfilen?
save-reload-prompt =
    Det enda s\xE4ttet att { $action ->
        [delete] radera
       *[replace] ers\xE4tta
    } denna sparfil utan potentiell konflikt \xE4r att ladda om inneh\xE5llet. Vill du forts\xE4tta \xE4nd\xE5?
save-download = Ladda ned
save-replace = Ers\xE4tt
save-delete = Ta bort
save-backup-all = Ladda ned alla sparfiler
`,"volume-controls.ftl":`volume-controls-mute = St\xE4ng av ljud
volume-controls-unmute = S\xE4tt p\xE5 ljud
`},"th-TH":{"context_menu.ftl":`context-menu-volume-controls = \u0E1B\u0E38\u0E48\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E40\u0E2A\u0E35\u0E22\u0E07
`,"messages.ftl":`ruffle-demo = \u0E40\u0E27\u0E47\u0E1A\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07
ruffle-wiki = \u0E14\u0E39\u0E27\u0E34\u0E01\u0E34 Ruffle
`,"save-manager.ftl":`save-delete-prompt = \u0E04\u0E38\u0E13\u0E41\u0E19\u0E48\u0E43\u0E08\u0E2B\u0E23\u0E37\u0E2D\u0E27\u0E48\u0E32\u0E08\u0E30\u0E25\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49?
`,"volume-controls.ftl":`volume-controls-mute = \u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07
volume-controls-unmute = \u0E43\u0E0A\u0E49\u0E40\u0E2A\u0E35\u0E22\u0E07
`},"tr-TR":{"context_menu.ftl":`context-menu-download-swf = .swf'i indir
context-menu-copy-debug-info = Hata ay\u0131klama bilgisini kopyala
context-menu-open-save-manager = Kay\u0131t y\xF6neticisini a\xE7
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle Uzant\u0131s\u0131 Hakk\u0131nda ({ $version })
       *[other] Ruffle Hakk\u0131nda ({ $version })
    }
context-menu-hide = Bu men\xFCy\xFC gizle
context-menu-exit-fullscreen = Tam ekrandan \xE7\u0131k
context-menu-enter-fullscreen = Tam ekran yap
context-menu-volume-controls = Ses kontrolleri
`,"messages.ftl":`message-cant-embed =
    Ruffle, bu sayfaya g\xF6m\xFCl\xFC Flash'\u0131 \xE7al\u0131\u015Ft\u0131ramad\u0131.
    Bu sorunu ortadan kald\u0131rmak i\xE7in dosyay\u0131 ayr\u0131 bir sekmede a\xE7may\u0131 deneyebilirsiniz.
message-restored-from-bfcache =
    Taray\u0131c\u0131n\u0131z bu Flash i\xE7eri\u011Fini \xF6nceki bir oturumdan geri y\xFCkledi.
    S\u0131f\u0131rdan ba\u015Flamak i\xE7in sayfay\u0131 yeniden y\xFCkleyin.
panic-title = Bir \u015Feyler yanl\u0131\u015F gitti :(
more-info = Daha fazla bilgi
run-anyway = Yine de \xE7al\u0131\u015Ft\u0131r
continue = Devam et
report-bug = Hata bildir
update-ruffle = Ruffle'\u0131 g\xFCncelle
ruffle-demo = A\u011F Demosu
ruffle-desktop = Masa\xFCst\xFC uygulamas\u0131
ruffle-wiki = Ruffle wiki'yi g\xF6r\xFCnt\xFCle
enable-hardware-acceleration = Donan\u0131m h\u0131zland\u0131rmas\u0131 etkin de\u011Fil gibi g\xF6r\xFCn\xFCyor. Ruffle \xE7al\u0131\u015Fabilir ancak \xE7ok yava\u015F olabilir. Donan\u0131m h\u0131zland\u0131rmas\u0131n\u0131 nas\u0131l etkinle\u015Ftirebilece\u011Finizi bu linkten \xF6\u011Frenebilirsiniz:
enable-hardware-acceleration-link = SSS - Chrome Donan\u0131m H\u0131zland\u0131rmas\u0131
view-error-details = Hata ayr\u0131nt\u0131lar\u0131n\u0131 g\xF6r\xFCnt\xFCle
open-in-new-tab = Yeni sekmede a\xE7
click-to-unmute = Sesi a\xE7mak i\xE7in t\u0131klay\u0131n
clipboard-message-title = Ruffle'da kopyalama ve yap\u0131\u015Ft\u0131rma
clipboard-message-description =
    { $variant ->
    *[unsupported] Taray\u0131c\u0131n\u0131z tam panoya eri\u015Fimi desteklemiyor,
    [access-denied] Pano eri\u015Fimi reddedildi,
    } ancak pano yerine her zaman bu k\u0131sayollar\u0131 kullanabilirsiniz:
clipboard-message-copy = { " " } kopyalamak i\xE7in
clipboard-message-cut = { " " } kesmek i\xE7in
clipboard-message-paste = { " " } yap\u0131\u015Ft\u0131rmak i\xE7in
error-canvas-reload = Tuval olu\u015Fturucusu kullan\u0131mda oldu\u011Funda tuval olu\u015Fturucusu ile yeniden y\xFCkleme yap\u0131lamaz.
error-file-protocol =
    G\xF6r\xFCn\xFC\u015Fe g\xF6re Ruffle'\u0131 "dosya:" protokol\xFCnde \xE7al\u0131\u015Ft\u0131r\u0131yorsunuz.
    Taray\u0131c\u0131lar g\xFCvenlik nedenleriyle bir\xE7ok \xF6zelli\u011Fin \xE7al\u0131\u015Fmas\u0131n\u0131 engelledi\u011Finden bu i\u015Fe yaramaz.
    Bunun yerine, sizi yerel bir sunucu kurmaya veya a\u011F\u0131n demosunu ya da masa\xFCst\xFC uygulamas\u0131n\u0131 kullanmaya davet ediyoruz.
error-javascript-config =
    Ruffle, yanl\u0131\u015F bir JavaScript yap\u0131land\u0131rmas\u0131 nedeniyle \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    Sunucu y\xF6neticisiyseniz, hangi parametrenin hatal\u0131 oldu\u011Funu bulmak i\xE7in sizi hata ayr\u0131nt\u0131lar\u0131n\u0131 kontrol etmeye davet ediyoruz.
    Yard\u0131m i\xE7in Ruffle wiki'sine de ba\u015Fvurabilirsiniz.
error-wasm-not-found =
    Ruffle gerekli ".wasm" dosya bile\u015Fenini y\xFCkleyemedi.
    Sunucu y\xF6neticisi iseniz, l\xFCtfen dosyan\u0131n do\u011Fru bir \u015Fekilde y\xFCklendi\u011Finden emin olun.
    Sorun devam ederse, "publicPath" ayar\u0131n\u0131 kullanman\u0131z gerekebilir: yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine ba\u015Fvurun.
error-wasm-mime-type =
    Ruffle, ba\u015Flatmaya \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    Bu web sunucusu, do\u011Fru MIME tipinde ".wasm" dosyalar\u0131 sunmuyor.
    Sunucu y\xF6neticisiyseniz, yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine ba\u015Fvurun.
error-invalid-swf =
    Ruffle istenen dosyay\u0131 ayr\u0131\u015Ft\u0131ram\u0131yor.
    Bunun en olas\u0131 nedeni, istenen dosyan\u0131n ge\xE7erli bir SWF olmamas\u0131d\u0131r.
error-swf-fetch =
    Ruffle, Flash SWF dosyas\u0131n\u0131 y\xFCkleyemedi.
    Bunun en olas\u0131 nedeni, dosyan\u0131n art\u0131k mevcut olmamas\u0131 ve bu nedenle Ruffle'\u0131n y\xFCkleyece\u011Fi hi\xE7bir \u015Feyin olmamas\u0131d\u0131r.
    Yard\u0131m i\xE7in web sitesi y\xF6neticisiyle ileti\u015Fime ge\xE7meyi deneyin.
error-swf-cors =
    Ruffle, Flash SWF dosyas\u0131n\u0131 y\xFCkleyemedi.
    Getirme eri\u015Fimi muhtemelen CORS politikas\u0131 taraf\u0131ndan engellenmi\u015Ftir.
    Sunucu y\xF6neticisiyseniz, yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine ba\u015Fvurun.
error-wasm-cors =
    Ruffle gerekli ".wasm" dosya bile\u015Fenini y\xFCkleyemedi.
    Getirme eri\u015Fimi muhtemelen CORS politikas\u0131 taraf\u0131ndan engellenmi\u015Ftir.
    Sunucu y\xF6neticisiyseniz, yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine ba\u015Fvurun.
error-wasm-invalid =
    Ruffle, ba\u015Flatmaya \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    G\xF6r\xFCn\xFC\u015Fe g\xF6re bu sayfada Ruffle'\u0131 \xE7al\u0131\u015Ft\u0131rmak i\xE7in eksik veya ge\xE7ersiz dosyalar var.
    Sunucu y\xF6neticisiyseniz, yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine ba\u015Fvurun.
error-wasm-download =
    Ruffle, ba\u015Flatmaya \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    Bu genellikle kendi kendine \xE7\xF6z\xFClebilir, bu nedenle sayfay\u0131 yeniden y\xFCklemeyi deneyebilirsiniz.
    Aksi takdirde, l\xFCtfen site y\xF6neticisiyle ileti\u015Fime ge\xE7in.
error-wasm-disabled-on-edge =
    Ruffle gerekli ".wasm" dosya bile\u015Fenini y\xFCkleyemedi.
    Bunu d\xFCzeltmek i\xE7in taray\u0131c\u0131n\u0131z\u0131n ayarlar\u0131n\u0131 a\xE7\u0131n, "Gizlilik, arama ve hizmetler"i t\u0131klay\u0131n, a\u015Fa\u011F\u0131 kayd\u0131r\u0131n ve "Web'de g\xFCvenli\u011Finizi art\u0131r\u0131n"\u0131 kapatmay\u0131 deneyin.
    Bu, taray\u0131c\u0131n\u0131z\u0131n gerekli ".wasm" dosyalar\u0131n\u0131 y\xFCklemesine izin verecektir.
    Sorun devam ederse, farkl\u0131 bir taray\u0131c\u0131 kullanman\u0131z gerekebilir.
error-wasm-unsupported-browser =
    Kulland\u0131\u011F\u0131n\u0131z taray\u0131c\u0131, Ruffle'\u0131n \xE7al\u0131\u015Fmas\u0131 i\xE7in gereken WebAssembly uzant\u0131lar\u0131n\u0131 desteklemiyor.
    L\xFCtfen desteklenen bir taray\u0131c\u0131ya ge\xE7in.
    Wiki'de desteklenen taray\u0131c\u0131lar\u0131n bir listesini bulabilirsiniz.
error-javascript-conflict =
    Ruffle, ba\u015Flatmaya \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    G\xF6r\xFCn\xFC\u015Fe g\xF6re bu sayfa, Ruffle ile \xE7ak\u0131\u015Fan JavaScript kodu kullan\u0131yor.
    Sunucu y\xF6neticisiyseniz, sizi dosyay\u0131 bo\u015F bir sayfaya y\xFCklemeyi denemeye davet ediyoruz.
error-javascript-conflict-outdated = Ayr\u0131ca sorunu giderebilecek daha yeni bir Ruffle s\xFCr\xFCm\xFC y\xFCklemeyi de deneyebilirsiniz (mevcut yap\u0131m eskimi\u015F: { $buildDate }).
error-csp-conflict =
    Ruffle, ba\u015Flatmaya \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    Bu web sunucusunun \u0130\xE7erik G\xFCvenli\u011Fi Politikas\u0131, gerekli ".wasm" bile\u015Feninin \xE7al\u0131\u015Fmas\u0131na izin vermiyor.
    Sunucu y\xF6neticisiyseniz, yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine bak\u0131n.
error-url-invalid =
    Ruffle, Flash SWF dosyas\u0131n\u0131 y\xFCkleyemedi.
    Bunun en olas\u0131 nedeni, SWF dosyas\u0131 i\xE7in Ruffle'a ge\xE7ersiz bir URL iletilmi\u015F olmas\u0131d\u0131r.
error-unknown =
    Ruffle, bu Flash i\xE7eri\u011Fini g\xF6r\xFCnt\xFClemeye \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    { $outdated ->
        [true] Sunucu y\xF6neticisiyseniz, l\xFCtfen Ruffle'\u0131n daha yeni bir s\xFCr\xFCm\xFCn\xFC y\xFCklemeyi deneyin (mevcut yap\u0131m eskimi\u015F: { $buildDate }).
       *[false] Bunun olmamas\u0131 gerekiyor, bu y\xFCzden bir hata bildirebilirseniz \xE7ok memnun oluruz!
    }
`,"save-manager.ftl":`save-delete-prompt = Bu kay\u0131t dosyas\u0131n\u0131 silmek istedi\u011Finize emin misiniz?
save-reload-prompt =
    Bu kaydetme dosyas\u0131n\u0131 potansiyel \xE7ak\u0131\u015Fma olmadan { $action ->
        [delete] silmenin
       *[replace] de\u011Fi\u015Ftirmenin
    } tek yolu, bu i\xE7eri\u011Fi yeniden y\xFCklemektir. Yine de devam etmek istiyor musunuz?
save-download = \u0130ndir
save-replace = De\u011Fi\u015Ftir
save-delete = Sil
save-backup-all = T\xFCm kay\u0131t dosyalar\u0131n\u0131 indir
`,"volume-controls.ftl":`volume-controls-mute = Sustur
volume-controls-unmute = Susturmay\u0131 kald\u0131r
`},"tt-RU":{"context_menu.ftl":`context-menu-download-swf = SWF \u0444\u0430\u0439\u043B\u043D\u044B \u0439\u04E9\u043A\u043B\u04D9\u04AF
context-menu-copy-debug-info = \u0414\u0435\u0431\u0430\u0433 \u043C\u04D9\u0433\u044A\u043B\u04AF\u043C\u0430\u0442\u044B\u043D \u043A\u04AF\u0447\u0435\u0440\u04AF
context-menu-open-save-manager = \u0421\u0430\u043A\u043B\u0430\u0443 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B\u043D \u0430\u0447\u0443
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle \u04E9\u0441\u0442\u04D9\u043C\u04D9\u0441\u0435 \u0442\u0443\u0440\u044B\u043D\u0434\u0430 ({ $version })
       *[other] Ruffle \u0442\u0443\u0440\u044B\u043D\u0434\u0430 ({ $version })
    }
context-menu-hide = \u0411\u0443 \u043C\u0435\u043D\u044E\u043D\u044B \u044F\u0448\u0435\u0440
context-menu-exit-fullscreen = \u0422\u0443\u043B\u044B \u044D\u043A\u0440\u0430\u043D\u043D\u0430\u043D \u0447\u044B\u0433\u0443
context-menu-enter-fullscreen = \u0422\u0443\u043B\u044B \u044D\u043A\u0440\u0430\u043D\u043D\u0430\u043D \u043A\u04AF\u0447\u04AF
context-menu-volume-controls = \u0422\u0430\u0432\u044B\u0448 \u043A\u04E9\u0439\u043B\u04D9\u04AF\u043B\u04D9\u0440\u0435
`,"messages.ftl":`panic-title = \u041D\u04D9\u0440\u0441\u04D9\u0434\u0435\u0440 \u0434\u04E9\u0440\u0435\u0441 \u044D\u0448\u043B\u04D9\u043C\u04D9\u0433\u04D9\u043D :(
more-info = \u0422\u0443\u043B\u044B\u0440\u0430\u043A
run-anyway = \u0411\u0430\u0440\u044B\u0431\u0435\u0440 \u044D\u0448\u043B\u04D9\u0442
continue = \u0414\u04D9\u0432\u0430\u043C \u0438\u0442\u04AF
report-bug = \u0425\u0430\u0442\u0430 \u0442\u0443\u0440\u044B\u043D\u0434\u0430 \u0445\u04D9\u0431\u04D9\u0440 \u0438\u0442\u04AF
open-in-new-tab = \u042F\u04A3\u0430 \u0441\u0430\u043B\u044B\u043D\u043C\u0430\u0434\u0430 \u0430\u0447\u0443
`,"save-manager.ftl":"","volume-controls.ftl":`volume-controls-mute = \u0422\u0430\u0432\u044B\u0448\u043D\u044B \u044F\u0431\u0443
volume-controls-unmute = \u0422\u0430\u0432\u044B\u0448\u043D\u044B \u0430\u0447\u0443
`},"uk-UA":{"context_menu.ftl":`context-menu-download-swf = \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 SWF
context-menu-copy-debug-info = \u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043F\u0440\u043E \u043D\u0430\u043B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F
context-menu-open-save-manager = \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u041F\u0440\u043E \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F Ruffle ({ $version })
       *[other] \u041F\u0440\u043E Ruffle ({ $version })
    }
context-menu-hide = \u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0446\u0435 \u043C\u0435\u043D\u044E
context-menu-exit-fullscreen = \u0412\u0438\u0439\u0442\u0438 \u0437 \u043F\u043E\u0432\u043D\u043E\u0435\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0443
context-menu-enter-fullscreen = \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043F\u043E\u0432\u043D\u043E\u0435\u043A\u0440\u0430\u043D\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C
context-menu-volume-controls = \u0415\u043B\u0435\u043C\u0435\u043D\u0442\u0438 \u043A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0443\u0447\u043D\u0456\u0441\u0442\u044E
`,"messages.ftl":`message-cant-embed = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 Flash, \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0443 \u0446\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0444\u0430\u0439\u043B \u0432 \u043E\u043A\u0440\u0435\u043C\u0456\u0439 \u0432\u043A\u043B\u0430\u0434\u0446\u0456, \u0449\u043E\u0431 \u0443\u043D\u0438\u043A\u043D\u0443\u0442\u0438 \u0446\u0456\u0454\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438.
message-restored-from-bfcache =
    \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0432\u0456\u0434\u043D\u043E\u0432\u0438\u0432 \u0446\u0435\u0439 Flash-\u0432\u043C\u0456\u0441\u0442 \u0456\u0437 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0457 \u0441\u0435\u0441\u0456\u0457.
    \u0429\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u0437\u0430\u043D\u043E\u0432\u043E, \u043E\u043D\u043E\u0432\u0456\u0442\u044C \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443.
panic-title = \u0429\u043E\u0441\u044C \u043F\u0456\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A :(
more-info = \u0411\u0456\u043B\u044C\u0448\u0435 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457
run-anyway = \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0435 \u043E\u0434\u043D\u043E
continue = \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438
report-bug = \u041F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u0442\u0438 \u043F\u0440\u043E \u043F\u043E\u043C\u0438\u043B\u043A\u0443
update-ruffle = \u041E\u043D\u043E\u0432\u0438\u0442\u0438 Ruffle
ruffle-demo = \u0412\u0435\u0431\u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0456\u044F
ruffle-desktop = \u0417\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043E\u043A \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u0441\u0442\u043E\u043B\u0443
ruffle-wiki = \u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 Ruffle Wiki
enable-hardware-acceleration = \u0421\u0445\u043E\u0436\u0435, \u0430\u043F\u0430\u0440\u0430\u0442\u043D\u0435 \u043F\u0440\u0438\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u044F \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E. \u0425\u043E\u0447\u0430 Ruffle \u043C\u043E\u0436\u0435 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438, \u0446\u0435 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0434\u0443\u0436\u0435 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0438\u043C. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F, \u044F\u043A \u0443\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0430\u043F\u0430\u0440\u0430\u0442\u043D\u0435 \u043F\u0440\u0438\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u044F, \u043F\u0435\u0440\u0435\u0439\u0448\u043E\u0432\u0448\u0438 \u0437\u0430 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C \u043D\u0438\u0436\u0447\u0435:
enable-hardware-acceleration-link = FAQ - \u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0435 \u043F\u0440\u0438\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u044F Chrome
view-error-details = \u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0434\u0435\u0442\u0430\u043B\u0456 \u043F\u043E\u043C\u0438\u043B\u043A\u0438
open-in-new-tab = \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432 \u043D\u043E\u0432\u0456\u0439 \u0432\u043A\u043B\u0430\u0434\u0446\u0456
click-to-unmute = \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0443\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0437\u0432\u0443\u043A
clipboard-message-title = \u041A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u0432 Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 \u043F\u043E\u0432\u043D\u0438\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0456\u043D\u0443,
        [access-denied] \u0423 \u0434\u043E\u0441\u0442\u0443\u043F\u0456 \u0434\u043E \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0456\u043D\u0443 \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u0435\u043D\u043E,
    } \u0430\u043B\u0435 \u0432\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0446\u0438\u043C\u0438 \u044F\u0440\u043B\u0438\u043A\u0430\u043C\u0438:
clipboard-message-copy = { " " } \u0434\u043B\u044F \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F
clipboard-message-cut = { " " } \u0434\u043B\u044F \u0432\u0438\u0440\u0456\u0437\u0430\u043D\u043D\u044F
clipboard-message-paste = { " " } \u0434\u043B\u044F \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F
error-canvas-reload = \u041D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u043E\u043D\u043E\u0432\u0438\u0442\u0438 \u0437 Canvas \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440\u043E\u043C, \u043A\u043E\u043B\u0438 Canvas \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440 \u0432\u0436\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F.
error-file-protocol = \u0417\u0434\u0430\u0454\u0442\u044C\u0441\u044F, \u0432\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0454\u0442\u0435 Ruffle \u0437\u0430 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u043C "file:". \u0426\u0435 \u043D\u0435 \u043F\u0440\u0430\u0446\u044E\u0454, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0438 \u0431\u043B\u043E\u043A\u0443\u044E\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u0443 \u0431\u0430\u0433\u0430\u0442\u044C\u043E\u0445 \u0444\u0443\u043D\u043A\u0446\u0456\u0439 \u0437 \u043C\u0456\u0440\u043A\u0443\u0432\u0430\u043D\u044C \u0431\u0435\u0437\u043F\u0435\u043A\u0438. \u0417\u0430\u043C\u0456\u0441\u0442\u044C \u0446\u044C\u043E\u0433\u043E \u043C\u0438 \u0437\u0430\u043F\u0440\u043E\u0448\u0443\u0454\u043C\u043E \u0432\u0430\u0441 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0430\u0431\u043E \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0432\u0435\u0431\u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0456\u0454\u044E \u0447\u0438 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043A\u043E\u043C \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u0441\u0442\u043E\u043B\u0443.
error-javascript-config = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0443 \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044E JavaScript. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043C\u0438 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454\u043C\u043E \u0432\u0430\u043C \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0434\u0435\u0442\u0430\u043B\u0456 \u043F\u043E\u043C\u0438\u043B\u043A\u0438, \u0449\u043E\u0431 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F, \u044F\u043A\u0438\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0454 \u043D\u0435\u0441\u043F\u0440\u0430\u0432\u043D\u0438\u043C. \u0412\u0438 \u0442\u0430\u043A\u043E\u0436 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0434\u043E Ruffle Wiki.
error-wasm-not-found = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0439 \u0444\u0430\u0439\u043B\u043E\u0432\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ".wasm". \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u0439\u0442\u0435\u0441\u044F, \u0449\u043E \u0444\u0430\u0439\u043B \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E. \u042F\u043A\u0449\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u043D\u0435 \u0437\u043D\u0438\u043A\u0430\u0454, \u043C\u043E\u0436\u043B\u0438\u0432\u043E, \u0432\u0430\u043C \u0437\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u043C "publicPath": \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-wasm-mime-type = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457. \u0426\u0435\u0439 \u0432\u0435\u0431\u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0454 \u0444\u0430\u0439\u043B\u0438 ".wasm" \u0456\u0437 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u043C \u0442\u0438\u043F\u043E\u043C MIME. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-invalid-swf = Ruffle \u043D\u0435 \u043C\u043E\u0436\u0435 \u043F\u0440\u043E\u0430\u043D\u0430\u043B\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u0444\u0430\u0439\u043B \u0437\u0430\u043F\u0438\u0442\u0443. \u041D\u0430\u0439\u0456\u043C\u043E\u0432\u0456\u0440\u043D\u0456\u0448\u0430 \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E \u0444\u0430\u0439\u043B \u0437\u0430\u043F\u0438\u0442\u0443 \u043D\u0435 \u0454 \u0434\u0456\u0439\u0441\u043D\u0438\u043C SWF.
error-swf-fetch = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B Flash SWF. \u041D\u0430\u0439\u0456\u043C\u043E\u0432\u0456\u0440\u043D\u0456\u0448\u0430 \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E \u0444\u0430\u0439\u043B \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435 \u0456\u0441\u043D\u0443\u0454, \u0442\u043E\u043C\u0443 Ruffle \u043D\u0435\u043C\u0430 \u0447\u043E\u0433\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u043F\u043E \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443 \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0441\u0430\u0439\u0442\u0443.
error-swf-cors = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B Flash SWF. \u041C\u043E\u0436\u043B\u0438\u0432\u043E, \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0431\u0443\u043B\u043E \u0437\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u043E \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E CORS. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-wasm-cors = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0439 \u0444\u0430\u0439\u043B\u043E\u0432\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ".wasm". \u041C\u043E\u0436\u043B\u0438\u0432\u043E, \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0431\u0443\u043B\u043E \u0437\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u043E \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E CORS. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-wasm-invalid = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457. \u0417\u0434\u0430\u0454\u0442\u044C\u0441\u044F, \u043D\u0430 \u0446\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456 \u0430\u0431\u043E \u043D\u0435\u0434\u0456\u0439\u0441\u043D\u0456 \u0444\u0430\u0439\u043B\u0438 \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0443 Ruffle. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-wasm-download = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457. \u0427\u0430\u0441\u0442\u043E \u0446\u0435 \u043C\u043E\u0436\u0435 \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0438\u0441\u044F \u0441\u0430\u043C\u043E \u0441\u043E\u0431\u043E\u044E, \u0442\u043E\u043C\u0443 \u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u043E\u043D\u043E\u0432\u0438\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443. \u0412 \u0456\u043D\u0448\u043E\u043C\u0443 \u0432\u0438\u043F\u0430\u0434\u043A\u0443 \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0441\u0430\u0439\u0442\u0443.
error-wasm-disabled-on-edge = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0439 \u0444\u0430\u0439\u043B\u043E\u0432\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ".wasm". \u0429\u043E\u0431 \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u0446\u0435, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u043D\u0430\u0442\u0438\u0441\u043D\u0443\u0442\u0438 \xAB\u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C, \u043F\u043E\u0448\u0443\u043A \u0456 \u0441\u043B\u0443\u0436\u0431\u0438\xBB, \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u0432\u043D\u0438\u0437 \u0456 \u0432\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \xAB\u041F\u0456\u0434\u0432\u0438\u0449\u0438\u0442\u0438 \u0431\u0435\u0437\u043F\u0435\u043A\u0443 \u0432 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0456\xBB. \u0426\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u0432\u0430\u0448\u043E\u043C\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u0444\u0430\u0439\u043B\u0438 \xAB.wasm\xBB. \u042F\u043A\u0449\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u043D\u0435 \u0437\u043D\u0438\u043A\u0430\u0454, \u043C\u043E\u0436\u043B\u0438\u0432\u043E, \u0432\u0430\u043C \u0434\u043E\u0432\u0435\u0434\u0435\u0442\u044C\u0441\u044F \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0456\u043D\u0448\u0438\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043E\u043C.
error-wasm-unsupported-browser =
    \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F WebAssembly, \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u0434\u043B\u044F \u0440\u043E\u0431\u043E\u0442\u0438 Ruffle.
    \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0456\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u043D\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440.
    \u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u043D\u0438\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456\u0432 \u043C\u043E\u0436\u043D\u0430 \u0437\u043D\u0430\u0439\u0442\u0438 \u0443 \u0412\u0456\u043A\u0456.
error-javascript-conflict = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457. \u0421\u0445\u043E\u0436\u0435, \u0449\u043E \u0446\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u043A\u043E\u0434 JavaScript, \u044F\u043A\u0438\u0439 \u043A\u043E\u043D\u0444\u043B\u0456\u043A\u0442\u0443\u0454 \u0437 Ruffle. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043C\u0438 \u0437\u0430\u043F\u0440\u043E\u0448\u0443\u0454\u043C\u043E \u0432\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B \u043D\u0430 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456.
error-javascript-conflict-outdated = \u0412\u0438 \u0442\u0430\u043A\u043E\u0436 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u043E\u0432\u0456\u0448\u0443 \u0432\u0435\u0440\u0441\u0456\u044E Ruffle, \u044F\u043A\u0430 \u043C\u043E\u0436\u0435 \u0443\u043D\u0438\u043A\u043D\u0443\u0442\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438 (\u043F\u043E\u0442\u043E\u0447\u043D\u0430 \u0437\u0431\u0456\u0440\u043A\u0430 \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0430: { $buildDate }).
error-csp-conflict = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457. \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u0431\u0435\u0437\u043F\u0435\u043A\u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443 \u0446\u044C\u043E\u0433\u043E \u0432\u0435\u0431\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043D\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0442\u0438 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ".wasm". \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-url-invalid =
    Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 Flash SWF-\u0444\u0430\u0439\u043B.
    \u041D\u0430\u0439\u0456\u043C\u043E\u0432\u0456\u0440\u043D\u0456\u0448\u0435, \u0434\u043E Ruffle \u0431\u0443\u043B\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 URL SWF-\u0444\u0430\u0439\u043B\u0443.
error-unknown =
    Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0438 \u0446\u0435\u0439 Flash \u043A\u043E\u043D\u0442\u0435\u043D\u0442.
    { $outdated ->
        [true] \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u043E\u0432\u0456\u0448\u0443 \u0432\u0435\u0440\u0441\u0456\u044E Ruffle (\u043F\u043E\u0442\u043E\u0447\u043D\u0430 \u0437\u0431\u0456\u0440\u043A\u0430 \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0430: { $buildDate }).
       *[false] \u0426\u044C\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0442\u0438\u0441\u044F, \u0442\u043E\u043C\u0443 \u043C\u0438 \u0431\u0443\u0434\u0435\u043C\u043E \u0434\u0443\u0436\u0435 \u0432\u0434\u044F\u0447\u043D\u0456, \u044F\u043A\u0449\u043E \u0432\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u0442\u0435 \u043F\u0440\u043E \u043F\u043E\u043C\u0438\u043B\u043A\u0443!
    }
`,"save-manager.ftl":`save-delete-prompt = \u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435\u0439 \u0444\u0430\u0439\u043B \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F?
save-reload-prompt =
    \u0404\u0434\u0438\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 { $action ->
        [delete] \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438
       *[replace] \u0437\u0430\u043C\u0456\u043D\u0438\u0442\u0438
    } \u0446\u0435\u0439 \u0444\u0430\u0439\u043B \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0444\u043B\u0456\u043A\u0442\u0443 \u0454 \u043F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0446\u044C\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443. \u0412\u0438 \u0432\u0441\u0435 \u043E\u0434\u043D\u043E \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438?
save-download = \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438
save-replace = \u0417\u0430\u043C\u0456\u043D\u0438\u0442\u0438
save-delete = \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438
save-backup-all = \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0432\u0441\u0456 \u0444\u0430\u0439\u043B\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F
`,"volume-controls.ftl":`volume-controls-mute = \u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0437\u0432\u0443\u043A
volume-controls-unmute = \u0423\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0437\u0432\u0443\u043A
`},"vi-VN":{"context_menu.ftl":`context-menu-download-swf = T\u1EA3i v\u1EC1 file SWF
context-menu-copy-debug-info = Sao ch\xE9p th\xF4ng tin g\u1EE1 l\u1ED7i
context-menu-open-save-manager = M\u1EDF tr\xECnh qu\u1EA3n l\xFD l\u01B0u file
context-menu-about-ruffle =
    { $flavor ->
        [extension] Gi\u1EDBi thi\u1EC7u v\u1EC1 ph\u1EA7n m\u1EDF r\u1ED9ng Ruffle ({ $version })
       *[other] Gi\u1EDBi thi\u1EC7u v\u1EC1 Ruffle ({ $version })
    }
context-menu-hide = \u1EA8n menu n\xE0y
context-menu-exit-fullscreen = Tho\xE1t ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh
context-menu-enter-fullscreen = Chuy\u1EC3n sang ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh
context-menu-volume-controls = Tu\u1EF3 ch\u1EC9nh \xE2m l\u01B0\u1EE3ng
`,"messages.ftl":`message-cant-embed =
    Ruffle kh\xF4ng th\u1EC3 ch\u1EA1y n\u1ED9i dung Flash \u0111\u01B0\u1EE3c nh\xFAng trong trang n\xE0y.
    B\u1EA1n c\xF3 th\u1EC3 th\u1EED m\u1EDF t\u1EC7p \u1EDF m\u1ED9t tab ri\xEAng bi\u1EC7t \u0111\u1EC3 tr\xE1nh s\u1EF1 c\u1ED1 n\xE0y.
message-restored-from-bfcache = Tr\xECnh duy\u1EC7t \u0111\xE3 kh\xF4i ph\u1EE5c l\u1EA1i n\u1ED9i dung Flash t\u1EEB phi\xEAn g\u1EA7n nh\u1EA5t. T\u1EA3i l\u1EA1i trang n\u1EBFu mu\u1ED1n b\u1EAFt \u0111\u1EA7u l\u1EA1i t\u1EEB \u0111\u1EA7u.
panic-title = C\xF3 l\u1ED7i x\u1EA3y ra :(
more-info = Th\xF4ng tin th\xEAm
run-anyway = V\u1EABn kh\u1EDFi ch\u1EA1y
continue = Ti\u1EBFp t\u1EE5c
report-bug = B\xE1o c\xE1o l\u1ED7i
update-ruffle = C\u1EADp nh\u1EADt Ruffle
ruffle-demo = Trang demo
ruffle-desktop = \u1EE8ng d\u1EE5ng desktop
ruffle-wiki = Truy c\u1EADp Ruffle Wiki
enable-hardware-acceleration = C\xF3 v\u1EBB nh\u01B0 t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng \u0111\xE3 b\u1ECB v\xF4 hi\u1EC7u ho\xE1. M\u1EB7c d\xF9 Ruffle v\u1EABn c\xF3 th\u1EC3 ho\u1EA1t \u0111\u1ED9ng, nh\u01B0ng n\xF3 c\xF3 th\u1EC3 r\u1EA5t ch\u1EADm. B\u1EA1n c\xF3 th\u1EC3 t\xECm c\xE1ch b\u1EADt t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng b\u1EB1ng c\xE1ch l\xE0m theo h\u01B0\u1EDBng d\u1EABn trong \u0111\u01B0\u1EDDng d\u1EABn b\xEAn d\u01B0\u1EDBi:
enable-hardware-acceleration-link = C\xE1c c\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p - T\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng cho Chrome
view-error-details = Xem chi ti\u1EBFt l\u1ED7i
open-in-new-tab = M\u1EDF trong th\u1EBB m\u1EDBi
click-to-unmute = B\u1EA5m \u0111\u1EC3 b\u1EADt ti\u1EBFng
clipboard-message-title = Sao ch\xE9p v\xE0 d\xE1n b\xEAn trong Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n kh\xF4ng h\u1ED7 tr\u1EE3 \u0111\u1EA7y \u0111\u1EE7 truy xu\u1EA5t b\u1ED9 nh\u1EDB t\u1EA1m,
        [access-denied] Truy xu\u1EA5t b\u1ED9 nh\u1EDB t\u1EA1m b\u1ECB t\u1EEB ch\u1ED1i,
    } nh\u01B0ng b\u1EA1n lu\xF4n c\xF3 th\u1EC3 s\u1EED d\u1EE5ng ph\xEDm t\u1EAFt \u0111\u1EC3 l\xE0m \u0111i\u1EC1u \u0111\xF3:
clipboard-message-copy = { " " } \u0111\u1EC3 sao ch\xE9p
clipboard-message-cut = { " " } \u0111\u1EC3 c\u1EAFt
clipboard-message-paste = { " " } \u0111\u1EC3 d\xE1n
error-canvas-reload = Tr\xECnh k\u1EBFt xu\u1EA5t \u0111\u1ED3 ho\u1EA1 canvas renderer \u0111ang \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng n\xEAn kh\xF4ng th\u1EC3 l\xE0m m\u1EDBi.
error-file-protocol =
    C\xF3 v\u1EBB nh\u01B0 b\u1EA1n \u0111ang ch\u1EA1y Ruffle tr\xEAn giao th\u1EE9c "file:".
    \u0110i\u1EC1u n\xE0y kh\xF4ng \u0111\u01B0\u1EE3c ph\xE9p v\xEC tr\xECnh duy\u1EC7t ch\u1EB7n nhi\u1EC1u t\xEDnh n\u0103ng ho\u1EA1t \u0111\u1ED9ng v\xEC l\xFD do b\u1EA3o m\u1EADt.
    Thay v\xE0o \u0111\xF3, ch\xFAng t\xF4i m\u1EDDi b\u1EA1n thi\u1EBFt l\u1EADp m\u1ED9t m\xE1y ch\u1EE7 c\u1EE5c b\u1ED9 ho\u1EB7c s\u1EED d\u1EE5ng trang demo ho\u1EB7c \u1EE9ng d\u1EE5ng desktop.
error-javascript-config =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i s\u1EF1 c\u1ED1 l\u1EDBn do c\u1EA5u h\xECnh JavaScript kh\xF4ng ch\xEDnh x\xE1c.
    N\u1EBFu b\u1EA1n l\xE0 ng\u01B0\u1EDDi qu\u1EA3n tr\u1ECB m\xE1y ch\u1EE7, ch\xFAng t\xF4i m\u1EDDi b\u1EA1n ki\u1EC3m tra chi ti\u1EBFt l\u1ED7i \u0111\u1EC3 t\xECm ra tham s\u1ED1 n\xE0o kh\xF4ng \u0111\xFAng.
    B\u1EA1n c\u0169ng c\xF3 th\u1EC3 tham kh\u1EA3o th\xF4ng tin tr\u1EE3 gi\xFAp t\u1EEB Ruffle Wiki.
error-wasm-not-found =
    Ruffle kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c t\u1EC7p ".wasm" c\u1EA7n thi\u1EBFt.
    N\u1EBFu b\u1EA1n l\xE0 ng\u01B0\u1EDDi qu\u1EA3n tr\u1ECB m\xE1y ch\u1EE7, vui l\xF2ng \u0111\u1EA3m b\u1EA3o t\u1EC7p \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn \u0111\xFAng c\xE1ch.
    N\u1EBFu s\u1EF1 c\u1ED1 v\u1EABn ti\u1EBFp di\u1EC5n, b\u1EA1n c\xF3 th\u1EC3 c\u1EA7n ph\u1EA3i s\u1EED d\u1EE5ng thi\u1EBFt l\u1EADp "publicPath": vui l\xF2ng tham kh\u1EA3o th\xF4ng tin tr\u1EE3 gi\xFAp t\u1EEB Ruffle Wiki.
error-wasm-mime-type =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng kh\u1EDFi t\u1EA1o.
    M\xE1y ch\u1EE7 web kh\xF4ng cung c\u1EA5p t\u1EC7p ".wasm" v\u1EDBi \u0111\xFAng lo\u1EA1i MIME.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng tham kh\u1EA3o wiki Ruffle \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-invalid-swf =
    Ruffle kh\xF4ng th\u1EC3 ph\xE2n t\xEDch t\u1EC7p \u0111\u01B0\u1EE3c y\xEAu c\u1EA7u.
    Kh\u1EA3 n\u0103ng l\u1EDBn nh\u1EA5t l\xE0 do t\u1EC7p \u0111\u01B0\u1EE3c y\xEAu c\u1EA7u kh\xF4ng ph\u1EA3i l\xE0 m\u1ED9t t\u1EC7p SWF h\u1EE3p l\u1EC7.
error-swf-fetch =
    Ruffle kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c t\u1EC7p Flash SWF.
    Kh\u1EA3 n\u0103ng l\u1EDBn nh\u1EA5t l\xE0 do t\u1EC7p kh\xF4ng c\xF2n t\u1ED3n t\u1EA1i n\u1EEFa, v\xEC v\u1EADy kh\xF4ng c\xF3 g\xEC \u0111\u1EC3 Ruffle t\u1EA3i.
    H\xE3y th\u1EED li\xEAn h\u1EC7 v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn trang web \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-swf-cors =
    Ruffle kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c t\u1EC7p Flash SWF.
    Quy\u1EC1n truy c\u1EADp \u0111\u1EC3 l\u1EA5y d\u1EEF li\u1EC7u c\xF3 th\u1EC3 \u0111\xE3 b\u1ECB ch\xEDnh s\xE1ch CORS ch\u1EB7n.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng tham kh\u1EA3o Ruffle Wiki \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-wasm-cors =
    Ruffle kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c t\u1EC7p ".wasm" c\u1EA7n thi\u1EBFt.
    Quy\u1EC1n truy c\u1EADp \u0111\u1EC3 l\u1EA5y d\u1EEF li\u1EC7u c\xF3 th\u1EC3 \u0111\xE3 b\u1ECB ch\xEDnh s\xE1ch CORS ch\u1EB7n.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng tham kh\u1EA3o wiki Ruffle \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-wasm-invalid =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng kh\u1EDFi t\u1EA1o.
    C\xF3 v\u1EBB nh\u01B0 trang n\xE0y c\xF3 c\xE1c t\u1EC7p b\u1ECB thi\u1EBFu ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7 \u0111\u1EC3 ch\u1EA1y Ruffle.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng tham kh\u1EA3o Ruffle Wiki \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-wasm-download =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng kh\u1EDFi t\u1EA1o.
    V\u1EA5n \u0111\u1EC1 n\xE0y th\u01B0\u1EDDng c\xF3 th\u1EC3 t\u1EF1 gi\u1EA3i quy\u1EBFt, v\xEC v\u1EADy b\u1EA1n c\xF3 th\u1EC3 th\u1EED t\u1EA3i l\u1EA1i trang.
    N\u1EBFu kh\xF4ng, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn trang web.
error-wasm-disabled-on-edge =
    Ruffle kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c th\xE0nh ph\u1EA7n t\u1EC7p ".wasm" c\u1EA7n thi\u1EBFt.
    \u0110\u1EC3 kh\u1EAFc ph\u1EE5c s\u1EF1 c\u1ED1 n\xE0y, h\xE3y th\u1EED m\u1EDF c\xE0i \u0111\u1EB7t c\u1EE7a tr\xECnh duy\u1EC7t, nh\u1EA5p v\xE0o "Quy\u1EC1n ri\xEAng t\u01B0, t\xECm ki\u1EBFm v\xE0 d\u1ECBch v\u1EE5", cu\u1ED9n xu\u1ED1ng v\xE0 t\u1EAFt "N\xE2ng cao b\u1EA3o m\u1EADt tr\xEAn web".
    Thao t\xE1c n\xE0y s\u1EBD cho ph\xE9p tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n t\u1EA3i c\xE1c t\u1EC7p ".wasm" c\u1EA7n thi\u1EBFt.
    N\u1EBFu s\u1EF1 c\u1ED1 v\u1EABn ti\u1EBFp di\u1EC5n, b\u1EA1n c\xF3 th\u1EC3 ph\u1EA3i s\u1EED d\u1EE5ng tr\xECnh duy\u1EC7t kh\xE1c.
error-wasm-unsupported-browser =
    Tr\xECnh duy\u1EC7t b\u1EA1n \u0111ang s\u1EED d\u1EE5ng kh\xF4ng h\u1ED7 tr\u1EE3 ti\u1EC7n \xEDch m\u1EDF r\u1ED9ng WebAssembly c\u1EA7n thi\u1EBFt \u0111\u1EC3 ch\u1EA1y Ruffle.
    Vui l\xF2ng chuy\u1EC3n sang tr\xECnh duy\u1EC7t \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.
    B\u1EA1n c\xF3 th\u1EC3 xem danh s\xE1ch c\xE1c tr\xECnh duy\u1EC7t \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 tr\xEAn Ruffle Wiki.
error-javascript-conflict =
    Ruffle g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng kh\u1EDFi t\u1EA1o.
    C\xF3 v\u1EBB trang n\xE0y s\u1EED d\u1EE5ng m\xE3 JavaScript xung \u0111\u1ED9t v\u1EDBi Ruffle.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, ch\xFAng t\xF4i m\u1EDDi b\u1EA1n th\u1EED t\u1EA3i t\u1EC7p tr\xEAn m\u1ED9t trang tr\u1EAFng.
error-javascript-conflict-outdated = B\u1EA1n c\u0169ng c\xF3 th\u1EC3 th\u1EED t\u1EA3i l\xEAn phi\xEAn b\u1EA3n Ruffle m\u1EDBi h\u01A1n \u0111\u1EC3 xem s\u1EF1 c\u1ED1 c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c kh\u1EAFc ph\u1EE5c (b\u1EA3n d\u1EF1ng hi\u1EC7n t\u1EA1i \u0111\xE3 c\u0169: { $buildDate }).
error-csp-conflict =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng kh\u1EDFi t\u1EA1o.
    Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt n\u1ED9i dung c\u1EE7a m\xE1y ch\u1EE7 web n\xE0y kh\xF4ng cho ph\xE9p ch\u1EA1y th\xE0nh ph\u1EA7n t\u1EC7p ".wasm" b\u1EAFt bu\u1ED9c ph\u1EA3i c\xF3 \u0111\u1EC3 ho\u1EA1t \u0111\u1ED9ng.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng tham kh\u1EA3o Ruffle Wiki \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-url-invalid =
    Ruffle kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c t\u1EC7p Flash SWF.
    Nhi\u1EC1u kh\u1EA3 n\u0103ng l\xE0 do URL c\u1EE7a t\u1EC7p SWF truy\u1EC1n cho Ruffle kh\xF4ng h\u1EE3p l\u1EC7.
error-unknown =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng hi\u1EC3n th\u1ECB n\u1ED9i dung Flash n\xE0y.
    { $outdated ->
        [true] N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng th\u1EED t\u1EA3i l\xEAn phi\xEAn b\u1EA3n Ruffle m\u1EDBi h\u01A1n (b\u1EA3n d\u1EF1ng hi\u1EC7n t\u1EA1i \u0111\xE3 c\u0169: { $buildDate }).
       *[false] V\u1EA5n \u0111\u1EC1 n\xE0y \u0111\xE1ng l\u1EBD kh\xF4ng n\xEAn x\u1EA3y ra, v\xEC v\u1EADy ch\xFAng t\xF4i th\u1EF1c s\u1EF1 bi\u1EBFt \u01A1n n\u1EBFu b\u1EA1n c\xF3 th\u1EC3 b\xE1o c\xE1o l\u1ED7i!
    }
`,"save-manager.ftl":`save-delete-prompt = B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n xo\xE1 t\u1EC7p \u0111\xE3 l\u01B0u n\xE0y kh\xF4ng?
save-reload-prompt =
    C\xE1ch duy nh\u1EA5t \u0111\u1EC3 { $action ->
        [delete] xo\xE1
       *[replace] thay th\u1EBF
    } t\u1EC7p \u0111\xE3 l\u01B0u n\xE0y m\xE0 kh\xF4ng c\xF3 nguy c\u01A1 xung \u0111\u1ED9t l\xE0 t\u1EA3i l\u1EA1i n\u1ED9i dung n\xE0y. B\u1EA1n c\xF3 mu\u1ED1n ti\u1EBFp t\u1EE5c kh\xF4ng?
save-download = T\u1EA3i v\u1EC1
save-replace = Thay th\u1EBF
save-delete = Xo\xE1
save-backup-all = T\u1EA3i xu\u1ED1ng t\u1EA5t c\u1EA3 t\u1EC7p \u0111\xE3 l\u01B0u
`,"volume-controls.ftl":`volume-controls-mute = T\u1EAFt ti\u1EBFng
volume-controls-unmute = B\u1EADt ti\u1EBFng
`},"zh-CN":{"context_menu.ftl":`context-menu-download-swf = \u4E0B\u8F7D SWF
context-menu-copy-debug-info = \u590D\u5236\u8C03\u8BD5\u4FE1\u606F
context-menu-open-save-manager = \u6253\u5F00\u5B58\u6863\u7BA1\u7406\u5668
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u5173\u4E8E Ruffle \u6269\u5C55 ({ $version })
       *[other] \u5173\u4E8E Ruffle ({ $version })
    }
context-menu-hide = \u9690\u85CF\u6B64\u83DC\u5355
context-menu-exit-fullscreen = \u9000\u51FA\u5168\u5C4F
context-menu-enter-fullscreen = \u8FDB\u5165\u5168\u5C4F
context-menu-volume-controls = \u97F3\u91CF\u63A7\u5236
`,"messages.ftl":`message-cant-embed =
    Ruffle \u65E0\u6CD5\u8FD0\u884C\u5D4C\u5165\u5728\u6B64\u9875\u9762\u4E2D\u7684 Flash\u3002
    \u60A8\u53EF\u4EE5\u5C1D\u8BD5\u5728\u5355\u72EC\u7684\u6807\u7B7E\u9875\u4E2D\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u4EE5\u56DE\u907F\u6B64\u95EE\u9898\u3002
message-restored-from-bfcache =
    \u60A8\u7684\u6D4F\u89C8\u5668\u4ECE\u4E4B\u524D\u7684\u4F1A\u8BDD\u4E2D\u6062\u590D\u4E86\u8FD9\u4E2AFlash\u5185\u5BB9\u3002
    \u82E5\u8981\u4ECE\u5934\u5F00\u59CB\u64AD\u653E\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002
panic-title = \u51FA\u4E86\u4E9B\u95EE\u9898 :(
more-info = \u66F4\u591A\u4FE1\u606F
run-anyway = \u4ECD\u7136\u8FD0\u884C
continue = \u7EE7\u7EED
report-bug = \u53CD\u9988\u95EE\u9898
update-ruffle = \u66F4\u65B0 Ruffle
ruffle-demo = \u7F51\u9875\u6F14\u793A
ruffle-desktop = \u684C\u9762\u5E94\u7528\u7A0B\u5E8F
ruffle-wiki = \u67E5\u770B Ruffle Wiki
enable-hardware-acceleration = \u770B\u8D77\u6765\u786C\u4EF6\u52A0\u901F\u5DF2\u88AB\u7981\u7528\u3002\u867D\u7136Ruffle\u53EF\u80FD\u53EF\u4EE5\u8FD0\u884C\uFF0C\u4F46\u901F\u5EA6\u53EF\u80FD\u4F1A\u975E\u5E38\u6162\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u94FE\u63A5\u4E86\u89E3\u5982\u4F55\u542F\u7528\u786C\u4EF6\u52A0\u901F\uFF1A
enable-hardware-acceleration-link = \u5E38\u89C1\u95EE\u9898 - Chrome \u786C\u4EF6\u52A0\u901F
view-error-details = \u67E5\u770B\u9519\u8BEF\u8BE6\u60C5
open-in-new-tab = \u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00
click-to-unmute = \u70B9\u51FB\u53D6\u6D88\u9759\u97F3
clipboard-message-title = \u5728Ruffle\u4E2D\u590D\u5236\u7C98\u8D34
clipboard-message-description =
    { $variant ->
       *[unsupported] \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5B8C\u5168\u526A\u8D34\u677F\u8BBF\u95EE,
        [access-denied] \u5BF9\u526A\u8D34\u677F\u7684\u8BBF\u95EE\u5DF2\u88AB\u62D2\u7EDD,
    } \u4F46\u60A8\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u5FEB\u6377\u952E:
clipboard-message-copy = { " " } \u590D\u5236
clipboard-message-cut = { " " } \u526A\u5207
clipboard-message-paste = { " " } \u7C98\u8D34
error-canvas-reload = Canvas \u6E32\u67D3\u5668\u5DF2\u5728\u4F7F\u7528\u4E2D\u65F6\uFF0C\u65E0\u6CD5\u4F7F\u7528 Canvas \u6E32\u67D3\u5668\u91CD\u65B0\u52A0\u8F7D\u3002
error-file-protocol =
    \u770B\u6765\u60A8\u6B63\u5728 "file:" \u534F\u8BAE\u4E0A\u4F7F\u7528 Ruffle\u3002
    \u7531\u4E8E\u6D4F\u89C8\u5668\u4EE5\u5B89\u5168\u539F\u56E0\u963B\u6B62\u8BB8\u591A\u529F\u80FD\uFF0C\u56E0\u6B64\u8FD9\u4E0D\u8D77\u4F5C\u7528\u3002
    \u76F8\u53CD\u6211\u4EEC\u9080\u8BF7\u60A8\u8BBE\u7F6E\u672C\u5730\u670D\u52A1\u5668\u6216\u4F7F\u7528\u7F51\u9875\u6F14\u793A\u6216\u684C\u9762\u5E94\u7528\u7A0B\u5E8F\u3002
error-javascript-config =
    \u7531\u4E8E\u9519\u8BEF\u7684 JavaScript \u914D\u7F6E\uFF0CRuffle \u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u6211\u4EEC\u9080\u8BF7\u60A8\u68C0\u67E5\u9519\u8BEF\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4EE5\u627E\u51FA\u54EA\u4E2A\u53C2\u6570\u6709\u6545\u969C\u3002
    \u60A8\u4E5F\u53EF\u4EE5\u67E5\u9605 Ruffle \u7684 Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-wasm-not-found =
    Ruffle \u65E0\u6CD5\u52A0\u8F7D\u6240\u9700\u7684 \u201C.wasm\u201D \u6587\u4EF6\u7EC4\u4EF6\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u786E\u4FDD\u6587\u4EF6\u5DF2\u6B63\u786E\u4E0A\u4F20\u3002
    \u5982\u679C\u95EE\u9898\u4ECD\u7136\u5B58\u5728\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u4F7F\u7528 \u201CpublicPath\u201D \u8BBE\u7F6E\uFF1A\u8BF7\u67E5\u770B Ruffle \u7684 Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-wasm-mime-type =
    Ruffle \u5728\u8BD5\u56FE\u521D\u59CB\u5316\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u8BE5\u7F51\u7AD9\u670D\u52A1\u5668\u6CA1\u6709\u63D0\u4F9B ".asm\u201D \u6587\u4EF6\u6B63\u786E\u7684 MIME \u7C7B\u578B\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u67E5\u9605 Ruffle Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-invalid-swf =
    Ruffle\u65E0\u6CD5\u89E3\u6790\u8BF7\u6C42\u7684\u6587\u4EF6\u3002
    \u6700\u6709\u53EF\u80FD\u7684\u539F\u56E0\u662F\u8BE5\u8BF7\u6C42\u6587\u4EF6\u4E0D\u662F\u4E00\u4E2A\u5408\u6CD5\u7684SWF\u6587\u4EF6\u3002
error-swf-fetch =
    Ruffle \u65E0\u6CD5\u52A0\u8F7D Flash SWF \u6587\u4EF6\u3002
    \u6700\u53EF\u80FD\u7684\u539F\u56E0\u662F\u6587\u4EF6\u4E0D\u518D\u5B58\u5728\u6240\u4EE5 Ruffle \u6CA1\u6709\u8981\u52A0\u8F7D\u7684\u5185\u5BB9\u3002
    \u8BF7\u5C1D\u8BD5\u8054\u7CFB\u7F51\u7AD9\u7BA1\u7406\u5458\u5BFB\u6C42\u5E2E\u52A9\u3002
error-swf-cors =
    Ruffle \u65E0\u6CD5\u52A0\u8F7D Flash SWF \u6587\u4EF6\u3002
    \u83B7\u53D6\u6743\u9650\u53EF\u80FD\u88AB CORS \u7B56\u7565\u963B\u6B62\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u53C2\u8003 Ruffle Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-wasm-cors =
    Ruffle \u65E0\u6CD5\u52A0\u8F7D\u6240\u9700\u7684\u201C.wasm\u201D\u6587\u4EF6\u7EC4\u4EF6\u3002
    \u83B7\u53D6\u6743\u9650\u53EF\u80FD\u88AB CORS \u7B56\u7565\u963B\u6B62\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u67E5\u9605 Ruffle Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-wasm-invalid =
    Ruffle \u5728\u8BD5\u56FE\u521D\u59CB\u5316\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u8FD9\u4E2A\u9875\u9762\u4F3C\u4E4E\u7F3A\u5C11\u6587\u4EF6\u6765\u8FD0\u884C Curl\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u67E5\u9605 Ruffle Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-wasm-download =
    Ruffle \u5728\u8BD5\u56FE\u521D\u59CB\u5316\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u8FD9\u901A\u5E38\u53EF\u4EE5\u81EA\u884C\u89E3\u51B3\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5C1D\u8BD5\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002
    \u5426\u5219\u8BF7\u8054\u7CFB\u7F51\u7AD9\u7BA1\u7406\u5458\u3002
error-wasm-disabled-on-edge =
    Ruffle \u65E0\u6CD5\u52A0\u8F7D\u6240\u9700\u7684 \u201C.wasm\u201D \u6587\u4EF6\u7EC4\u4EF6\u3002
    \u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u6253\u5F00\u60A8\u7684\u6D4F\u89C8\u5668\u8BBE\u7F6E\uFF0C\u5355\u51FB"\u9690\u79C1\u3001\u641C\u7D22\u548C\u670D\u52A1"\uFF0C\u5411\u4E0B\u6EDA\u52A8\u5E76\u5173\u95ED"\u589E\u5F3A Web \u5B89\u5168\u6027"\u3002
    \u8FD9\u5C06\u5141\u8BB8\u60A8\u7684\u6D4F\u89C8\u5668\u52A0\u8F7D\u6240\u9700\u7684 \u201C.wasm\u201D \u6587\u4EF6\u3002
    \u5982\u679C\u95EE\u9898\u4ECD\u7136\u5B58\u5728\uFF0C\u60A8\u53EF\u80FD\u5FC5\u987B\u4F7F\u7528\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u3002
error-wasm-unsupported-browser =
    \u60A8\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 Ruffle \u8FD0\u884C\u6240\u9700\u7684 WebAssembly \u6269\u5C55\u3002
    \u8BF7\u5207\u6362\u5230\u652F\u6301\u7684\u6D4F\u89C8\u5668\u3002
    \u60A8\u53EF\u4EE5\u5728 Wiki \u4E0A\u627E\u5230\u652F\u6301\u7684\u6D4F\u89C8\u5668\u5217\u8868\u3002
error-javascript-conflict =
    Ruffle \u5728\u8BD5\u56FE\u521D\u59CB\u5316\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u8FD9\u4E2A\u9875\u9762\u4F3C\u4E4E\u4F7F\u7528\u4E86\u4E0E Ruffle \u51B2\u7A81\u7684 JavaScript \u4EE3\u7801\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u5C1D\u8BD5\u5728\u7A7A\u767D\u9875\u9762\u4E0A\u52A0\u8F7D\u6587\u4EF6\u3002
error-javascript-conflict-outdated = \u60A8\u4E5F\u53EF\u4EE5\u5C1D\u8BD5\u4E0A\u4F20\u53EF\u80FD\u89C4\u907F\u6B64\u95EE\u9898\u7684\u8F83\u65B0\u7248\u672C\u7684 Ruffle (\u5F53\u524D\u6784\u5EFA\u7248\u672C\u5DF2\u8FC7\u65F6: { $buildDate })\u3002
error-csp-conflict =
    Ruffle \u5728\u8BD5\u56FE\u521D\u59CB\u5316\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u8BE5\u7F51\u7AD9\u670D\u52A1\u5668\u7684\u5185\u5BB9\u5B89\u5168\u7B56\u7565\u4E0D\u5141\u8BB8\u8FD0\u884C\u6240\u9700\u7684 \u201C.wasm\u201D \u7EC4\u4EF6\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u67E5\u9605 Ruffle Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-url-invalid =
    Ruffle \u65E0\u6CD5\u52A0\u8F7D Flash SWF \u6587\u4EF6\u3002
    \u6700\u6709\u53EF\u80FD\u7684\u539F\u56E0\u662F\u4F20\u9012\u7ED9 Ruffle \u7684 SWF \u6587\u4EF6 URL \u65E0\u6548\u3002
error-unknown =
    Ruffle \u5728\u8BD5\u56FE\u663E\u793A\u6B64 Flash \u5185\u5BB9\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    { $outdated ->
        [true] \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u5C1D\u8BD5\u4E0A\u4F20\u66F4\u65B0\u7684 Ruffle \u7248\u672C (\u5F53\u524D\u7248\u672C\u5DF2\u8FC7\u65F6: { $buildDate }).
       *[false] \u8FD9\u4E0D\u5E94\u8BE5\u53D1\u751F\uFF0C\u56E0\u6B64\u5982\u679C\u60A8\u53EF\u4EE5\u62A5\u544A\u9519\u8BEF\uFF0C\u6211\u4EEC\u5C06\u975E\u5E38\u611F\u8C22\uFF01
    }
`,"save-manager.ftl":`save-delete-prompt = \u786E\u5B9A\u8981\u5220\u9664\u6B64\u5B58\u6863\u5417\uFF1F
save-reload-prompt =
    \u4E3A\u4E86\u907F\u514D\u6F5C\u5728\u7684\u51B2\u7A81\uFF0C{ $action ->
        [delete] \u5220\u9664
       *[replace] \u66FF\u6362
    } \u6B64\u5B58\u6863\u6587\u4EF6\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u5F53\u524D\u5185\u5BB9\u3002\u662F\u5426\u4ECD\u7136\u7EE7\u7EED\uFF1F
save-download = \u4E0B\u8F7D
save-replace = \u66FF\u6362
save-delete = \u5220\u9664
save-backup-all = \u4E0B\u8F7D\u6240\u6709\u5B58\u6863\u6587\u4EF6
`,"volume-controls.ftl":`volume-controls-mute = \u9759\u97F3
volume-controls-unmute = \u53D6\u6D88\u9759\u97F3
`},"zh-TW":{"context_menu.ftl":`context-menu-download-swf = \u4E0B\u8F09SWF\u6A94\u6848
context-menu-copy-debug-info = \u8907\u88FD\u9664\u932F\u8CC7\u8A0A
context-menu-open-save-manager = \u958B\u555F\u5B58\u6A94\u7BA1\u7406\u5668
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u95DC\u65BCRuffle\u64F4\u5145\u529F\u80FD ({ $version })
       *[other] \u95DC\u65BCRuffle ({ $version })
    }
context-menu-hide = \u96B1\u85CF\u83DC\u55AE
context-menu-exit-fullscreen = \u9000\u51FA\u5168\u87A2\u5E55
context-menu-enter-fullscreen = \u9032\u5165\u5168\u87A2\u5E55
context-menu-volume-controls = \u97F3\u91CF\u63A7\u5236
`,"messages.ftl":`message-cant-embed =
    Ruffle \u7121\u6CD5\u57F7\u884C\u672C\u9801\u9762\u5167\u5D4C\u7684 Flash\u3002
    \u60A8\u53EF\u4EE5\u5617\u8A66\u5728\u55AE\u7368\u7684\u6A19\u7C64\u9801\u4E2D\u958B\u555F\u6A94\u6848\uFF0C\u4EE5\u907F\u514D\u6B64\u554F\u984C\u3002
message-restored-from-bfcache =
    \u60A8\u7684\u700F\u89BD\u5668\u5F9E\u4E4B\u524D\u7684\u6703\u8A71\u4E2D\u9084\u539F\u4E86\u6B64 Flash \u5167\u5BB9\u3002
    \u82E5\u8981\u91CD\u65B0\u958B\u59CB\uFF0C\u8ACB\u91CD\u65B0\u8F09\u5165\u9801\u9762\u3002
panic-title = \u767C\u751F\u4E86\u67D0\u4E9B\u932F\u8AA4 :(
more-info = \u66F4\u591A\u8CC7\u8A0A
run-anyway = \u76F4\u63A5\u57F7\u884C
continue = \u7E7C\u7E8C
report-bug = \u56DE\u5831BUG
update-ruffle = \u66F4\u65B0Ruffle
ruffle-demo = \u7DB2\u9801\u5C55\u793A
ruffle-desktop = \u684C\u9762\u61C9\u7528\u7A0B\u5F0F
ruffle-wiki = \u67E5\u770BRuffle Wiki
enable-hardware-acceleration = \u770B\u8D77\u4F86\u786C\u9AD4\u52A0\u901F\u5DF2\u505C\u7528\u3002\u96D6\u7136 Ruffle \u53EF\u4EE5\u904B\u4F5C\uFF0C\u4F46\u901F\u5EA6\u53EF\u80FD\u5F88\u6162\u3002\u60A8\u53EF\u4EE5\u900F\u904E\u4EE5\u4E0B\u9023\u7D50\u77AD\u89E3\u5982\u4F55\u555F\u7528\u786C\u9AD4\u52A0\u901F\uFF1A
enable-hardware-acceleration-link = FAQ - Chrome\u786C\u9AD4\u52A0\u901F
view-error-details = \u6AA2\u8996\u932F\u8AA4\u8A73\u7D30\u8CC7\u6599
open-in-new-tab = \u958B\u555F\u65B0\u589E\u5206\u9801
click-to-unmute = \u9EDE\u64CA\u4EE5\u53D6\u6D88\u975C\u97F3
clipboard-message-title = \u5728 Ruffle \u4E2D\u8907\u88FD\u548C\u8CBC\u4E0A
clipboard-message-description =
    { $variant ->
       *[unsupported] \u60A8\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u5B8C\u6574\u7684\u526A\u8CBC\u677F\u5B58\u53D6\u3001
        [access-denied] \u5DF2\u62D2\u7D55\u5B58\u53D6\u526A\u8CBC\u7C3F\u3001
    } \u4F46\u60A8\u53EF\u4EE5\u4F7F\u7528\u9019\u4E9B\u6377\u5F91\u4F86\u4EE3\u66FF\uFF1A
clipboard-message-copy = { " " } \u8907\u88FD
clipboard-message-cut = { " " } \u526A\u4E0B
clipboard-message-paste = { " " } \u8CBC\u4E0A
error-canvas-reload = \u7576\u756B\u5E03\u6E32\u67D3\u5668\u5DF2\u5728\u4F7F\u7528\u4E2D\u6642\uFF0C\u7121\u6CD5\u4F7F\u7528\u756B\u5E03\u6E32\u67D3\u5668\u91CD\u65B0\u8F09\u5165\u3002
error-file-protocol =
    \u60A8\u4F3C\u4E4E\u662F\u5728 \u300Cfile: \u300D\u5354\u5B9A\u4E0A\u57F7\u884C Ruffle\u3002
    \u9019\u4E26\u4E0D\u53EF\u884C\uFF0C\u56E0\u70BA\u700F\u89BD\u5668\u57FA\u65BC\u5B89\u5168\u7406\u7531\u6703\u963B\u64CB\u8A31\u591A\u529F\u80FD\u7684\u904B\u4F5C\u3002
    \u76F8\u53CD\uFF0C\u6211\u5011\u9080\u8ACB\u60A8\u8A2D\u5B9A\u672C\u6A5F\u4F3A\u670D\u5668\uFF0C\u6216\u4F7F\u7528\u7DB2\u9801\u793A\u7BC4\u6216\u684C\u9762\u61C9\u7528\u7A0B\u5F0F\u3002
error-javascript-config =
    \u7531\u65BC JavaScript \u8A2D\u5B9A\u4E0D\u6B63\u78BA\uFF0CRuffle \u9047\u5230\u4E86\u91CD\u5927\u554F\u984C\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u6211\u5011\u9080\u8ACB\u60A8\u6AA2\u67E5\u932F\u8AA4\u7D30\u7BC0\uFF0C\u627E\u51FA\u662F\u54EA\u500B\u53C3\u6578\u51FA\u4E86\u554F\u984C\u3002
    \u60A8\u4E5F\u53EF\u4EE5\u53C3\u8003 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-wasm-not-found =
    Ruffle \u672A\u80FD\u8F09\u5165\u6240\u9700\u7684 \u300C.wasm\u300D \u6A94\u6848\u5143\u4EF6\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u78BA\u8A8D\u6A94\u6848\u5DF2\u6B63\u78BA\u4E0A\u50B3\u3002
    \u5982\u679C\u554F\u984C\u4ECD\u7136\u5B58\u5728\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u4F7F\u7528\u300CpublicPath\u300D\u8A2D\u5B9A\uFF1A\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-wasm-mime-type =
    Ruffle \u5728\u5617\u8A66\u521D\u59CB\u5316\u6642\u9047\u5230\u91CD\u5927\u554F\u984C\u3002
    \u6B64 Web \u4F3A\u670D\u5668\u7121\u6CD5\u63D0\u4F9B MIME \u985E\u578B\u6B63\u78BA\u7684 \u300C.wasm \u300D\u6A94\u6848\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-invalid-swf =
    Ruffle \u7121\u6CD5\u89E3\u6790\u8ACB\u6C42\u7684\u6A94\u6848\u3002
    \u6700\u53EF\u80FD\u7684\u539F\u56E0\u662F\u8ACB\u6C42\u7684\u6A94\u6848\u4E0D\u662F\u6709\u6548\u7684 SWF\u3002
error-swf-fetch =
    Ruffle \u672A\u80FD\u8F09\u5165 Flash SWF \u6A94\u6848\u3002
    \u6700\u53EF\u80FD\u7684\u539F\u56E0\u662F\u8A72\u6A94\u6848\u5DF2\u4E0D\u5B58\u5728\uFF0C\u56E0\u6B64 Ruffle \u7121\u6CD5\u8F09\u5165\u4EFB\u4F55\u5167\u5BB9\u3002
    \u8ACB\u5617\u8A66\u806F\u7D61\u7DB2\u7AD9\u7BA1\u7406\u54E1\u5C0B\u6C42\u5354\u52A9\u3002
error-swf-cors =
    Ruffle \u672A\u80FD\u8F09\u5165 Flash SWF \u6A94\u6848\u3002
    \u8A2A\u554F fetch \u53EF\u80FD\u5DF2\u88AB CORS \u7B56\u7565\u5C01\u9396\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-wasm-cors =
    Ruffle \u672A\u80FD\u8F09\u5165\u6240\u9700\u7684 \u300C.wasm\u300D \u6A94\u6848\u5143\u4EF6\u3002
    \u8A2A\u554F fetch \u53EF\u80FD\u5DF2\u88AB CORS \u7B56\u7565\u5C01\u9396\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-wasm-invalid =
    Ruffle \u5728\u5617\u8A66\u521D\u59CB\u5316\u6642\u9047\u5230\u91CD\u5927\u554F\u984C\u3002
    \u6B64\u9801\u9762\u4F3C\u4E4E\u6709\u907A\u5931\u6216\u7121\u6548\u7684\u6A94\u6848\uFF0C\u7121\u6CD5\u57F7\u884C Ruffle\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-wasm-download =
    Ruffle \u5728\u5617\u8A66\u521D\u59CB\u5316\u6642\u9047\u5230\u91CD\u5927\u554F\u984C\u3002
    \u9019\u901A\u5E38\u53EF\u4EE5\u81EA\u884C\u89E3\u6C7A\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5617\u8A66\u91CD\u65B0\u8F09\u5165\u9801\u9762\u3002
    \u5426\u5247\uFF0C\u8ACB\u806F\u7D61\u7DB2\u7AD9\u7BA1\u7406\u54E1\u3002
error-wasm-disabled-on-edge =
    Ruffle \u672A\u80FD\u8F09\u5165\u6240\u9700\u7684\u300C.wasm \u300D\u6A94\u6848\u5143\u4EF6\u3002
    \u8981\u89E3\u6C7A\u9019\u500B\u554F\u984C\uFF0C\u8ACB\u5617\u8A66\u6253\u958B\u700F\u89BD\u5668\u7684\u8A2D\u5B9A\uFF0C\u6309\u4E00\u4E0B\u300C\u96B1\u79C1\u3001\u641C\u5C0B\u548C\u670D\u52D9\u300D\uFF0C\u5411\u4E0B\u6372\u52D5\uFF0C\u7136\u5F8C\u95DC\u9589\u300C\u52A0\u5F37\u60A8\u5728\u7DB2\u8DEF\u4E0A\u7684\u5B89\u5168\u6027\u300D\u3002
    \u9019\u5C07\u5141\u8A31\u60A8\u7684\u700F\u89BD\u5668\u8F09\u5165\u6240\u9700\u7684\u300C.wasm \u300D\u6A94\u6848\u3002
    \u5982\u679C\u554F\u984C\u4ECD\u7136\u5B58\u5728\uFF0C\u60A8\u53EF\u80FD\u5FC5\u9808\u4F7F\u7528\u5176\u4ED6\u700F\u89BD\u5668\u3002
error-wasm-unsupported-browser =
    \u60A8\u4F7F\u7528\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4 Ruffle \u57F7\u884C\u6240\u9700\u7684 WebAssembly \u64F4\u5145\u5957\u4EF6\u3002
    \u8ACB\u5207\u63DB\u5230\u652F\u63F4\u7684\u700F\u89BD\u5668\u3002
    \u60A8\u53EF\u4EE5\u5728 Wiki \u4E0A\u627E\u5230\u652F\u63F4\u7684\u700F\u89BD\u5668\u6E05\u55AE\u3002
error-javascript-conflict =
    Ruffle \u5728\u5617\u8A66\u521D\u59CB\u5316\u6642\u9047\u5230\u91CD\u5927\u554F\u984C\u3002
    \u9019\u500B\u9801\u9762\u4F3C\u4E4E\u4F7F\u7528\u4E86\u8207 Ruffle \u76F8\u885D\u7A81\u7684 JavaScript \u7A0B\u5F0F\u78BC\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u5617\u8A66\u5728\u7A7A\u767D\u9801\u9762\u4E0A\u8F09\u5165\u6A94\u6848\u3002
error-javascript-conflict-outdated = \u60A8\u4E5F\u53EF\u4EE5\u5617\u8A66\u4E0A\u50B3\u8F03\u65B0\u7248\u672C\u7684 Ruffle\uFF0C\u53EF\u80FD\u6703\u907F\u514D\u6B64\u554F\u984C (\u76EE\u524D\u7684\u7248\u672C\u5DF2\u904E\u6642\uFF1A{ $buildDate })\u3002
error-csp-conflict =
    Ruffle \u5728\u5617\u8A66\u521D\u59CB\u5316\u6642\u9047\u5230\u91CD\u5927\u554F\u984C\u3002
    \u6B64\u7DB2\u9801\u4F3A\u670D\u5668\u7684\u5167\u5BB9\u5B89\u5168\u653F\u7B56\u4E0D\u5141\u8A31\u57F7\u884C\u6240\u9700\u7684 \u300C.wasm \u300D\u5143\u4EF6\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u53D6\u5F97\u5354\u52A9\u3002
error-url-invalid =
    Ruffle \u7121\u6CD5\u8F09\u5165 Flash SWF \u6A94\u6848\u3002
    \u6700\u53EF\u80FD\u7684\u539F\u56E0\u662F\u50B3\u905E\u7D66 Ruffle \u7684 SWF \u6A94\u6848\u7DB2\u5740\u7121\u6548\u3002
error-unknown =
    Ruffle \u5728\u5617\u8A66\u986F\u793A\u6B64 Flash \u5167\u5BB9\u6642\u9047\u5230\u4E86\u91CD\u5927\u554F\u984C\u3002
    { $outdated ->
        [true]  \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u5617\u8A66\u4E0A\u50B3\u8F03\u65B0\u7248\u672C\u7684 Ruffle (\u76EE\u524D\u7684\u7248\u672C\u5DF2\u7D93\u904E\u6642 { $buildDate })\u3002
       *[false] \u9019\u4E0D\u61C9\u8A72\u767C\u751F\uFF0C\u6240\u4EE5\u5982\u679C\u60A8\u80FD\u63D0\u51FA\u932F\u8AA4\uFF0C\u6211\u5011\u6703\u975E\u5E38\u611F\u6FC0\uFF01
    }
`,"save-manager.ftl":`save-delete-prompt = \u4F60\u78BA\u5B9A\u8981\u522A\u9664\u9019\u500B\u5B58\u6A94\u55CE\uFF1F
save-reload-prompt =
    \u552F\u4E00\u65B9\u6CD5\u53EA\u6709 { $action ->
        [delete] \u522A\u9664
       *[replace] \u53D6\u4EE3
    } \u9019\u500B\u5B58\u6A94\u4E0D\u6703\u5B8C\u5168\u53D6\u4EE3\u76F4\u5230\u91CD\u65B0\u555F\u52D5\u3002 \u4F60\u9700\u8981\u7E7C\u7E8C\u55CE?
save-download = \u4E0B\u8F09
save-replace = \u53D6\u4EE3
save-delete = \u522A\u9664
save-backup-all = \u4E0B\u8F09\u6240\u6709\u5B58\u6A94\u6A94\u6848\u3002
`,"volume-controls.ftl":`volume-controls-mute = \u975C\u97F3
volume-controls-unmute = \u53D6\u6D88\u975C\u97F3
`}},gr={};for(let[o,e]of Object.entries(Qi)){let n=new xn(o);if(e){let t;for(let[r,i]of Object.entries(e))if(i){t??=br();for(let s of n.addResource(new Rn(i)))console.error(`Error in text for ${o} ${r}: ${s}`)}mr(t)}gr[o]=n}function Zi(o,e,n){let t=gr[o];if(t!==void 0){let r=t.getMessage(e);if(r!==void 0&&r.value)return t.formatPattern(r.value,n)}return null}function C(o,e){let n=br(),t=fr(navigator.languages,Object.keys(gr),{defaultLocale:"en-US"});for(let r in t){let i=Zi(t[r],o,e);if(i)return i}return console.error(`Unknown text key '${o}'`),mr(n),o}function U(o,e){let n=document.createElement("div");return C(o,e).split(`
`).forEach(t=>{let r=document.createElement("p");r.innerText=t,n.appendChild(r)}),n}function $a(){return(0,ae.jsx)("div",{id:"volume-controls-modal",class:"modal hidden",children:(0,ae.jsx)("div",{class:"modal-area",children:(0,ae.jsxs)("div",{id:"volume-controls",children:[(0,ae.jsx)("input",{id:"mute-checkbox",type:"checkbox"}),(0,ae.jsx)("label",{id:"volume-mute",for:"mute-checkbox",title:C("volume-controls-unmute")}),(0,ae.jsx)("label",{id:"volume-min",for:"mute-checkbox",title:C("volume-controls-mute")}),(0,ae.jsx)("label",{id:"volume-mid",for:"mute-checkbox",title:C("volume-controls-mute")}),(0,ae.jsx)("label",{id:"volume-max",for:"mute-checkbox",title:C("volume-controls-mute")}),(0,ae.jsx)("input",{id:"volume-slider",type:"range",min:"0",max:"100",step:"1"}),(0,ae.jsx)("span",{id:"volume-slider-text"}),(0,ae.jsx)("span",{class:"close-modal"})]})})})}var rn=te(Y(),1);function Ua(){return(0,rn.jsx)("div",{id:"video-modal",class:"modal hidden",children:(0,rn.jsxs)("div",{class:"modal-area",children:[(0,rn.jsx)("span",{class:"close-modal"}),(0,rn.jsx)("div",{id:"video-holder"})]})})}var Le=te(Y(),1);function Na(){return(0,Le.jsx)("div",{id:"hardware-acceleration-modal",class:"modal hidden",children:(0,Le.jsxs)("div",{class:"modal-area",children:[(0,Le.jsx)("span",{class:"close-modal"}),(0,Le.jsx)("span",{id:"acceleration-text",children:C("enable-hardware-acceleration")}),(0,Le.jsx)("a",{href:"https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration",target:"_blank",class:"modal-button",children:C("enable-hardware-acceleration-link")})]})})}var X=te(Y(),1);var pr=navigator.userAgent.includes("Mac OS X")?"Command":"Ctrl";function Va(){return(0,X.jsx)("div",{id:"clipboard-modal",class:"modal hidden",children:(0,X.jsxs)("div",{class:"modal-area",children:[(0,X.jsx)("span",{class:"close-modal"}),(0,X.jsx)("h2",{children:C("clipboard-message-title")}),(0,X.jsx)("p",{id:"clipboard-modal-description"}),(0,X.jsxs)("p",{children:[(0,X.jsxs)("b",{children:[pr,"+C"]}),(0,X.jsx)("span",{children:C("clipboard-message-copy")})]}),(0,X.jsxs)("p",{children:[(0,X.jsxs)("b",{children:[pr,"+X"]}),(0,X.jsx)("span",{children:C("clipboard-message-cut")})]}),(0,X.jsxs)("p",{children:[(0,X.jsxs)("b",{children:[pr,"+V"]}),(0,X.jsx)("span",{children:C("clipboard-message-paste")})]})]})})}var wr=te(Y(),1);function Ga(){return(0,wr.jsx)("div",{id:"context-menu-overlay",class:"hidden",children:(0,wr.jsx)("ul",{id:"context-menu"})})}var ie=document.createElement("template");ie.content.appendChild((0,ce.jsx)(ya,{}));ie.content.appendChild((0,ce.jsx)(xa,{}));ie.content.appendChild((0,ce.jsx)(Ra,{}));ie.content.appendChild((0,ce.jsx)(Sa,{}));ie.content.appendChild((0,ce.jsx)(ja,{}));ie.content.appendChild((0,ce.jsx)($a,{}));ie.content.appendChild((0,ce.jsx)(Ua,{}));ie.content.appendChild((0,ce.jsx)(Na,{}));ie.content.appendChild((0,ce.jsx)(Va,{}));ie.content.appendChild((0,ce.jsx)(Ga,{}));var St="application/x-shockwave-flash",jt="application/futuresplash",zt="application/x-shockwave-flash2-preview",At="application/vnd.adobe.flash.movie",Ha="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";function Yi(o){let e="";try{e=new URL(o,"https://example.com").pathname}catch{}if(e&&e.length>=4){let n=e.slice(-4).toLowerCase();if(n===".swf"||n===".spl")return!0}return!1}function Xi(o,e){switch(o=o.toLowerCase(),o){case St.toLowerCase():case jt.toLowerCase():case zt.toLowerCase():case At.toLowerCase():return!0;default:if(e)switch(o){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1}function Ft(o,e){let n=Yi(o);return e?Xi(e,n):n}function Ja(o){let e=o.pathname;return e.substring(e.lastIndexOf("/")+1)}var Et=null,le=!1;try{if(document.currentScript instanceof HTMLScriptElement&&document.currentScript.src!==""){let o=document.currentScript.src;!o.endsWith(".js")&&!o.endsWith("/")&&(o+="/"),Et=new URL(".",o),le=Et.protocol.includes("extension")}}catch(o){console.warn("Unable to get currentScript URL",o)}var We="https://ruffle.rs";var an=class extends Error{constructor(e,n){super(`Failed to fetch ${e}`),this.swfUrl=e,this.statusNotOk=n,this.swfUrl=e,this.statusNotOk=n}},on=class extends Error{constructor(e){super(`Not a valid swf: ${e}`)}},qe=class extends Error{constructor(e){super("Failed to load Ruffle WASM"),this.cause=e}},sn=class extends Error{constructor(e){super(`Failed to begin SWF load: ${e}`)}},un=class extends Error{constructor(e){super(`Invalid options: ${e}`)}};var K=te(Y(),1);var yr=te(eo(),1);function os({action:o,showDetails:e,errorArray:n,errorText:t,swfUrl:r}){if(o.type==="show_details")return(0,K.jsx)("li",{children:(0,K.jsx)("a",{href:"#",id:"panic-view-details",onClick:s=>{s.preventDefault(),e()},children:C("view-error-details")})});if(o.type==="open_link")return(0,K.jsx)("li",{children:(0,K.jsx)("a",{href:o.url,target:"_top",children:o.label})});{let i;document.location.protocol.includes("extension")&&r?i=r.href:i=document.location.href,i=i.split(/[?#]/,1)[0];let s=`Error on ${i}`,u=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(s)}&template=error_report.md&labels=error-report&body=`,c=encodeURIComponent(t);return n.stackIndex>-1&&String(u+c).length>8195&&(n[n.stackIndex]=null,n.avmStackIndex>-1&&(n[n.avmStackIndex]=null),c=encodeURIComponent(n.join(""))),u+=c,(0,K.jsx)("li",{children:(0,K.jsx)("a",{href:u,target:"_top",children:C("report-bug")})})}}function kr(){let o=new Date(ee.buildDate),e=new Date;return e.setMonth(e.getMonth()-6),e>o}var P={OpenDemo:{type:"open_link",url:We+"/demo",label:C("ruffle-demo")},DownloadDesktop:{type:"open_link",url:We+"/downloads#desktop-app",label:C("ruffle-desktop")},UpdateRuffle:{type:"open_link",url:We+"/downloads",label:C("update-ruffle")},CreateReport:{type:"create_report"},ShowDetails:{type:"show_details"},createReportOrUpdate(){return kr()?this.UpdateRuffle:this.CreateReport},openWiki(o,e){return{type:"open_link",url:`https://github.com/ruffle-rs/ruffle/wiki/${o}`,label:e??C("ruffle-wiki")}}};function is(o){if(o instanceof an)return o.swfUrl&&!o.swfUrl.protocol.includes("http")?{body:U("error-file-protocol"),actions:[P.OpenDemo,P.DownloadDesktop]}:window.location.origin===o.swfUrl?.origin||o.statusNotOk||window.location.protocol.includes("extension")?{body:U("error-swf-fetch"),actions:[P.ShowDetails]}:{body:U("error-swf-cors"),actions:[P.openWiki("Using-Ruffle#configure-cors-header"),P.ShowDetails]};if(o instanceof on)return{body:U("error-invalid-swf"),actions:[P.ShowDetails]};if(o instanceof qe){if(window.location.protocol==="file:")return{body:U("error-file-protocol"),actions:[P.OpenDemo,P.DownloadDesktop]};let e=String(o.cause.message).toLowerCase();if(e.includes("mime"))return{body:U("error-wasm-mime-type"),actions:[P.openWiki("Using-Ruffle#configure-webassembly-mime-type"),P.ShowDetails]};if(e.includes("networkerror")||e.includes("failed to fetch")||e.includes("load failed"))return{body:U("error-wasm-cors"),actions:[P.openWiki("Using-Ruffle#configure-cors-header"),P.ShowDetails]};if(e.includes("disallowed by embedder"))return{body:U("error-csp-conflict"),actions:[P.openWiki("Using-Ruffle#configure-wasm-csp"),P.ShowDetails]};if(o.cause.name==="CompileError"&&e.includes("bad type"))return{body:U("error-wasm-unsupported-browser"),actions:[P.openWiki("#web"),P.ShowDetails]};if(o.cause.name==="CompileError"||e.includes("failed to execute 'compile' on 'webassembly'"))return{body:U("error-wasm-invalid"),actions:[P.openWiki("Using-Ruffle#addressing-a-compileerror"),P.ShowDetails]};if((e.includes("could not download wasm module")||e.includes("webassembly compilation aborted"))&&o.cause.name==="TypeError")return{body:U("error-wasm-download"),actions:[P.ShowDetails]};if(o.cause.name==="TypeError"){let n=U("error-javascript-conflict");return kr()&&n.appendChild(U("error-javascript-conflict-outdated",{buildDate:ee.buildDate})),{body:n,actions:[P.createReportOrUpdate(),P.ShowDetails]}}return navigator.userAgent.includes("Edg")&&e.includes("webassembly is not defined")?{body:U("error-wasm-disabled-on-edge"),actions:[P.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error",C("more-info")),P.ShowDetails]}:{body:U("error-wasm-not-found"),actions:[P.openWiki("Using-Ruffle#configuration-options"),P.ShowDetails]}}if(o instanceof un)return{body:U("error-javascript-config"),actions:[P.openWiki("Using-Ruffle#javascript-api"),P.ShowDetails]};if(o instanceof sn){let e=String(o.message).toLowerCase();if(e.includes("is not a valid url")||e.includes("invalid url")||e.includes("invalid base url")){let n;try{new URL(document.baseURI),n=!0}catch{n=!1}return n?{body:U("error-url-invalid"),actions:[P.ShowDetails]}:{body:U("error-javascript-conflict"),actions:[P.ShowDetails]}}}return{body:U("error-unknown",{buildDate:ee.buildDate,outdated:String(kr)}),actions:[P.createReportOrUpdate(),P.ShowDetails]}}function no(o,e,n,t){let r=n.join(""),{body:i,actions:s}=is(e),u=(0,yr.createRef)(),c=(0,yr.createRef)(),d=()=>{u.current.classList.remove("hidden")};o.textContent="",o.appendChild((0,K.jsxs)("div",{id:"panic",children:[(0,K.jsx)("div",{id:"panic-title",children:C("panic-title")}),(0,K.jsx)("div",{id:"panic-body",children:i}),(0,K.jsx)("div",{id:"panic-footer",children:(0,K.jsx)("ul",{children:s.map(b=>os({action:b,showDetails:d,errorText:r,errorArray:n,swfUrl:t}))})}),(0,K.jsx)("div",{id:"panic-details-modal",class:"hidden",ref:u,children:(0,K.jsxs)("div",{id:"panic-details-content",children:[(0,K.jsx)("span",{class:"panic-copy-button",title:"Copy to clipboard",ref:c,onClick:()=>{c.current&&(navigator.clipboard?.writeText(r),c.current.classList.add("copied"),setTimeout(()=>{c.current?.classList.remove("copied")},2e3))}}),(0,K.jsx)("span",{class:"close-modal",onClick:()=>u.current.classList.add("hidden")}),(0,K.jsx)("textarea",{readOnly:!0,children:r})]})})]}))}var to=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11]));var ro=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11]));var ao=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),oo=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),io=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));function Ct(o){let e=Et?.href??"";return!le&&"publicPath"in o&&o.publicPath!==null&&o.publicPath!==void 0&&(e=o.publicPath),e!==""&&!e.endsWith("/")&&(e+="/"),e}async function Mc(o){qa();let e=(await Promise.all([to(),io(),ao(),oo(),ro()])).every(Boolean);e||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),Je.options.onFirstLoad?.(),Je.options.onFirstLoad=()=>{};let{default:n,RuffleInstanceBuilder:t,ZipWriter:r}=await(e?Promise.resolve().then(()=>(vo(),ho)):Promise.resolve().then(()=>(Po(),Co))),i,s;{let d=new URL(Ct(window.RufflePlayer?.config??{}),document.baseURI);s=e?new URL("./ruffle_web_bg.77c1854ca756aaf83ae1.wasm",d):new URL("./ruffle_web-wasm_mvp_bg.a87dad4ebe9ddc2a27da.wasm",d)}let u=await fetch(s);if(o&&typeof ReadableStreamDefaultController=="function"){let d=u?.headers?.get("content-length")||"",b=0,h=parseInt(d);i=new Response(new ReadableStream({async start(R){let J=u.body?.getReader();if(!J)throw"Response had no body";for(o(b,h);;){let{done:se,value:ve}=await J.read();if(se)break;ve?.byteLength&&(b+=ve?.byteLength),R.enqueue(ve),o(b,h)}R.close()}}),u)}else i=u;return await n({module_or_path:i}),[t,r]}var Gr=null;async function Do(o){Gr===null&&(Gr=Mc(o));let e=await Gr;return[new e[0],()=>new e[1]]}function Oc(o,e,n){let t=[],r=0,i=0;for(;r<o.length&&i<e.length;){let s=o[r],u=e[i];n(s,u)<=0?(t.push(s),r++):(t.push(u),i++)}for(;r<o.length;)t.push(o[r++]);for(;i<e.length;)t.push(e[i++]);return t}function Bc(o,e){if(o===e)return 0;let n=o.compareDocumentPosition(e);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}function Lc(o){let e=["ruffle-embed"];for(let n=1;n<=o;n++)e.push(`ruffle-embed-${n}`);return e.join(", ")}function To(o){let e=Object.getOwnPropertyDescriptor(Document.prototype,"embeds");if(!e?.get)return;let n=Symbol("ruffle_embeds_cache");Object.defineProperty(Document.prototype,"embeds",{get(){let t=this,r=t[n];if(r)return r;let i=null,s=()=>{let b=e.get.call(this),h=Lc(o),R=Array.from(this.querySelectorAll(h));return Oc(Array.from(b),R,Bc)},u=()=>(i!==null||(i=s(),queueMicrotask(()=>{i=null})),i),c=Object.create(HTMLCollection.prototype);Object.defineProperty(c,"length",{enumerable:!0,configurable:!0,get(){return u().length}}),c.item=function(b){return u()[b]??null},c.namedItem=function(b){let h=u();for(let R of h){let J=R;if(b&&(J.getAttribute("name")===b||J.id===b))return J}return null},c[Symbol.iterator]=function*(){for(let b of u())yield b};let d=new Proxy(c,{get(b,h,R){if(typeof h=="string"){let J=Number(h);if(!Number.isNaN(J)&&J>=0)return u()[J];if(Reflect.has(b,h))return Reflect.get(b,h,R);let se=b.namedItem(h);if(se)return se}return Reflect.get(b,h,R)},has(b,h){if(typeof h=="string"){let R=Number(h);return!Number.isNaN(R)&&R>=0?R<u().length:Reflect.has(b,h)?!0:b.namedItem(h)!==null}return Reflect.has(b,h)},ownKeys(){let b=u().length,h=[];for(let R=0;R<b;R++)h.push(String(R));return h},getOwnPropertyDescriptor(b,h){if(typeof h=="string"){let R=Number(h);if(!Number.isNaN(R)&&R>=0&&R<u().length)return{enumerable:!0,configurable:!0,writable:!1,value:u()[R]}}return Reflect.getOwnPropertyDescriptor(b,h)}});return d[n]=!0,t[n]=d,d},configurable:!0,enumerable:!0})}var Wc=999,Hr={};function Mo(o){let e=Hr[o];return e!==void 0?{internalName:o,name:e.name,class:e.class}:null}function mn(o,e){let n=Hr[o];if(n!==void 0){if(n.class!==e)throw new Error("Internal naming conflict on "+o);return n.name}let t=0;if(window.customElements!==void 0)for(;t<Wc;){let r=o;if(t>0&&(r=r+"-"+t),window.customElements.get(r)!==void 0){t+=1;continue}else window.customElements.define(r,e),o==="ruffle-embed"&&To(t);return Hr[o]={class:e,name:r,internalName:o},r}throw new Error("Failed to assign custom element "+o)}function M(o){return o!=null}function Oo(o,e){if(M(e.allowScriptAccess)&&o.setAllowScriptAccess(e.allowScriptAccess),M(e.backgroundColor)&&o.setBackgroundColor(qc(e.backgroundColor)),M(e.upgradeToHttps)&&o.setUpgradeToHttps(e.upgradeToHttps),M(e.compatibilityRules)&&o.setCompatibilityRules(e.compatibilityRules),M(e.letterbox)&&o.setLetterbox(e.letterbox.toLowerCase()),M(e.base)&&o.setBaseUrl(e.base),M(e.menu)&&o.setShowMenu(e.menu),M(e.allowFullscreen)&&o.setAllowFullscreen(e.allowFullscreen),M(e.salign)&&o.setStageAlign(e.salign.toLowerCase()),M(e.forceAlign)&&o.setForceAlign(e.forceAlign),M(e.quality)?o.setQuality(e.quality.toLowerCase()):Uc()&&(console.log("Running on a mobile device; defaulting to low quality"),o.setQuality("low")),M(e.scale)&&o.setScale(e.scale.toLowerCase()),M(e.forceScale)&&o.setForceScale(e.forceScale),M(e.frameRate)&&o.setFrameRate(e.frameRate),M(e.wmode)&&o.setWmode(e.wmode),M(e.logLevel)&&o.setLogLevel(e.logLevel),M(e.maxExecutionDuration)&&o.setMaxExecutionDuration($c(e.maxExecutionDuration)),M(e.playerVersion)&&o.setPlayerVersion(e.playerVersion),M(e.preferredRenderer)&&o.setPreferredRenderer(e.preferredRenderer),M(e.openUrlMode)&&o.setOpenUrlMode(e.openUrlMode.toLowerCase()),M(e.allowNetworking)&&o.setAllowNetworking(e.allowNetworking.toLowerCase()),M(e.credentialAllowList)&&o.setCredentialAllowList(e.credentialAllowList),M(e.playerRuntime)&&o.setPlayerRuntime(e.playerRuntime),M(e.socketProxy))for(let n of e.socketProxy)o.addSocketProxy(n.host,n.port,n.proxyUrl);if(M(e.gamepadButtonMapping))for(let[n,t]of Object.entries(e.gamepadButtonMapping))o.addGamepadButtonMapping(n,t);if(M(e.urlRewriteRules))for(let[n,t]of e.urlRewriteRules)if(n instanceof RegExp)o.addUrlRewriteRule(n,t);else{let r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(`^${r}$`),s=t.replace(/\$/g,"$$$$");o.addUrlRewriteRule(i,s)}M(e.scrollingBehavior)&&o.setScrollingBehavior(e.scrollingBehavior),M(e.deviceFontRenderer)&&o.setDeviceFontRenderer(e.deviceFontRenderer)}function qc(o){if(o.startsWith("#")&&(o=o.substring(1)),o.length<6)return;let e=0;for(let n=0;n<6;n++){let t=parseInt(o[n],16);isNaN(t)?e=e<<4:e=e<<4|t}return e}function $c(o){return typeof o=="number"?o:o.secs}function Uc(){return typeof window.orientation<"u"}var Nc=/^\s*(\d+(\.\d+)?(%)?)/,Lt=!1;function Jr(o){if(o==null)return{};o instanceof URLSearchParams||(o=new URLSearchParams(o));let e={};for(let[n,t]of o)e[n]=t.toString();return e}var qt=class{constructor(e,n){this.x=e,this.y=n}distanceTo(e){let n=e.x-this.x,t=e.y-this.y;return Math.sqrt(n*n+t*t)}},gn=class o{constructor(e,n,t){this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.onFSCommand=[],this.config={},this.SaveRow=({rowKey:u,solName:c,solData:d})=>(0,q.jsxs)("tr",{children:[(0,q.jsx)("td",{title:u,children:c}),(0,q.jsx)("td",{children:(0,q.jsx)("span",{class:"save-option",id:"download-save",title:C("save-download"),onClick:()=>Kr(Vc(d,"application/octet-stream"),c+".sol")})}),(0,q.jsxs)("td",{children:[(0,q.jsx)("input",{type:"file",accept:".sol",class:"replace-save",id:"replace-save-"+u,onChange:b=>this.replaceSOL(b,u)}),(0,q.jsx)("label",{for:"replace-save-"+u,class:"save-option",id:"replace-save",title:C("save-replace")})]}),(0,q.jsx)("td",{children:(0,q.jsx)("span",{class:"save-option",id:"delete-save",title:C("save-delete"),onClick:()=>this.deleteSave(u)})})]}),this.element=e,this.debugPlayerInfo=n,this.onCallbackAvailable=t,this.shadow=this.element.attachShadow({mode:"open",delegatesFocus:!0}),this.shadow.appendChild(ie.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.clipboardModal=this.shadow.getElementById("clipboard-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new Qr(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);let r=this.saveManager.querySelector(".modal-button");r&&(r.addEventListener("click",this.backupSaves.bind(this)),r.innerText=C("save-backup-all"));let i=this.unmuteOverlay.querySelector("#unmute-overlay-svg");if(i){let u=i.querySelector("#unmute-text");u.textContent=C("click-to-unmute")}this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu");let s=u=>{u.preventDefault(),u.stopPropagation()};this.contextMenuElement.addEventListener("contextmenu",s),this.contextMenuElement.addEventListener("click",s),this.contextMenuElement.dir=Hc(),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.element.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.element.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.element.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this._readyState=Re.HaveNothing,this.metadata=null,this.lastActivePlayingState=!1,this.backgroundWorker=null,this.setupTabVisibilityHandling()}addFSCommandHandler(e){this.onFSCommand.push(e)}callFSCommand(e,n){if(this.onFSCommand.length===0)return!1;for(let t of this.onFSCommand)t(e,n);return!0}addModalJavaScript(e){let n=e.querySelector("#video-holder"),t=()=>{e.classList.add("hidden"),n&&(n.textContent="")};e.parentNode.addEventListener("click",t);let r=e.querySelector(".modal-area");r&&r.addEventListener("click",s=>s.stopPropagation());let i=e.querySelector(".close-modal");i&&i.addEventListener("click",t)}addVolumeControlsJavaScript(e){let n=e.querySelector("#mute-checkbox"),t=e.querySelector("#volume-mute"),r=[e.querySelector("#volume-min"),e.querySelector("#volume-mid"),e.querySelector("#volume-max")],i=e.querySelector("#volume-slider"),s=e.querySelector("#volume-slider-text"),u=()=>{if(this.volumeSettings.isMuted)t.style.display="inline",r.forEach(c=>{c.style.display="none"});else{t.style.display="none";let c=Math.round(this.volumeSettings.volume/50);r.forEach((d,b)=>{d.style.display=b===c?"inline":"none"})}};n.checked=this.volumeSettings.isMuted,i.disabled=n.checked,i.valueAsNumber=this.volumeSettings.volume,s.textContent=i.value+"%",u(),n.addEventListener("change",()=>{i.disabled=n.checked,this.volumeSettings.isMuted=n.checked,this.instance?.set_volume(this.volumeSettings.get_volume()),u()}),i.addEventListener("input",()=>{s.textContent=i.value+"%",this.volumeSettings.volume=i.valueAsNumber,this.instance?.set_volume(this.volumeSettings.get_volume()),u()})}setupTabVisibilityHandling(){document.addEventListener("visibilitychange",()=>{if(!this.instance)return;let e=this.loadedConfig?.backgroundExecutionMode??je.None;document.hidden?(this.lastActivePlayingState=this.instance.is_playing(),e===je.MainThread?(this.instance.enable_background_tick_mode(),this.lastActivePlayingState&&this.startBackgroundTick()):this.instance.pause()):(e===je.MainThread&&(this.stopBackgroundTick(),this.instance.restart_animation_loop()),this.lastActivePlayingState&&this.instance.play(),this.instance.audio_context()?.resume())})}startBackgroundTick(){let n=`
            const intervalMs = ${1e3/(this.metadata?.frameRate||24)};
            self.onmessage = () => {
                setTimeout(() => self.postMessage("tick"), intervalMs);
            };
            setTimeout(() => self.postMessage("tick"), intervalMs);
        `;try{let t=new Blob([n],{type:"application/javascript"}),r=URL.createObjectURL(t),i=new Worker(r);URL.revokeObjectURL(r),this.backgroundWorker=i,i.onmessage=()=>{this.backgroundWorker===i&&(this.instance?.tick_for_background(performance.now()),i.postMessage("ack"))}}catch(t){console.warn("Unable to create background Worker:",t),this.instance?.pause()}}stopBackgroundTick(){this.backgroundWorker?.terminate(),this.backgroundWorker=null}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let r=this.dynamicStyles.sheet.cssRules.length-1;r>=0;r--)this.dynamicStyles.sheet.deleteRule(r);let e=this.element.attributes.getNamedItem("align");if(e!=null){let r=e.value.toLowerCase(),i=(()=>{switch(r){case"right":return"vertical-align: top; float: right;";case"left":return"vertical-align: top; float: left;";case"bottom":return"vertical-align: baseline;";case"top":return"vertical-align: top;";case"center":return"vertical-align: middle; vertical-align: -moz-middle-with-baseline;";case"middle":return"vertical-align: middle; vertical-align: -webkit-baseline-middle; vertical-align: -moz-middle-with-baseline;";case"absbottom":return"vertical-align: bottom;";case"absmiddle":case"abscenter":return"vertical-align: middle;";case"texttop":return"vertical-align: text-top;";default:return""}})();i&&this.dynamicStyles.sheet.insertRule(`:host { ${i} }`)}let n=this.element.attributes.getNamedItem("width");if(n!=null){let r=o.htmlDimensionToCssDimension(n.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${r}; }`)}let t=this.element.attributes.getNamedItem("height");if(t!=null){let r=o.htmlDimensionToCssDimension(t.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${r}; }`)}}}isUnusedFallbackObject(){let e=Mo("ruffle-object");if(e!==null){let n=this.element.parentNode;for(;n!==document&&n!==null;){if(n.nodeName===e.name)return!0;n=n.parentNode}}return!1}async ensureFreshInstance(){this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');let[e,n]=await Do(this.onRuffleDownloadProgress.bind(this)).catch(i=>{console.error(`Serious error loading Ruffle: ${i}`);let s=new qe(i);throw this.panic(s),s});if(this.newZipWriter=n,Oo(e,this.loadedConfig||{}),e.setVolume(this.volumeSettings.get_volume()),this.loadedConfig?.fontSources)for(let i of this.loadedConfig.fontSources)try{let s=await fetch(i);e.addFont(i,new Uint8Array(await s.arrayBuffer()))}catch(s){console.warn(`Couldn't download font source from ${i}`,s)}for(let i in this.loadedConfig?.defaultFonts){let s=this.loadedConfig.defaultFonts[i];s&&e.setDefaultFont(i,s)}this.instance=await e.build(this.container,this).catch(i=>{throw console.error(`Serious error loading Ruffle: ${i}`),this.panic(i),i}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});let t=this.instance.renderer_name(),r=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+ee.versionName+" | WebAssembly extensions: "+(r.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(t??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(i=>{window.setTimeout(()=>{i()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),!this.loadedConfig||this.loadedConfig.autoplay===Be.On||this.loadedConfig.autoplay!==Be.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==en.Hidden)&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});let i=this.instance?.audio_context();i&&(i.onstatechange=()=>{i.state==="running"&&this.unmuteOverlayClicked(),i.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(e,n){let t=this.splashScreen.querySelector(".loadbar-inner"),r=this.splashScreen.querySelector(".loadbar");Number.isNaN(n)?r&&(r.style.display="none"):t.style.width=`${100*(e/n)}%`}destroy(){this.instance&&(this.stopBackgroundTick(),this.instance.destroy(),this.instance=null,this.metadata=null,this._readyState=Re.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(e){if(typeof e=="string")return{url:e};let n=(t,r)=>{if(!t){let i=new un(r);throw this.panic(i),i}};return n(e!==null&&typeof e=="object","Argument 0 must be a string or object"),n("url"in e||"data"in e,"Argument 0 must contain a `url` or `data` key"),n(!("url"in e)||typeof e.url=="string","`url` must be a string"),e}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw new Error("Cannot reload if load wasn't first called")}async reloadWithCanvasRenderer(){if(this.loadedConfig&&this.loadedConfig.preferredRenderer!==yn.Canvas){let e={...this.loadedConfig,preferredRenderer:yn.Canvas};await this.load(e)}else if(this.loadedConfig)this.panic(new Error(C("error-canvas-reload")));else throw new Error("Cannot reload if load wasn't first called")}async load(e,n=!1){if(e=this.checkOptions(e),!this.element.isConnected||this.isUnusedFallbackObject()){console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");return}if(!ot(this.element))try{this.loadedConfig={...ha,...n&&"url"in e?{allowScriptAccess:Wo("samedomain",e.url)}:{},...window.RufflePlayer?.config??{},...this.config,...e},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==nn.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in e?(console.log(`Loading SWF file ${e.url}`),this.swfUrl=new URL(e.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,Jr(e.parameters))):"data"in e&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(e.data),Jr(e.parameters),e.swfFileName||"movie.swf"))}catch(t){console.error(`Serious error occurred loading SWF file: ${t}`);let r=new sn(t);throw this.panic(r),r}}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(e){this.instance&&this.instance.set_volume(e)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this.element}setFullscreen(e){this.fullscreenEnabled&&e!==this.isFullscreen&&(e?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){let e={navigationUI:"hide"};this.element.requestFullscreen?this.element.requestFullscreen(e):this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen(e):this.element.webkitRequestFullScreen&&this.element.webkitRequestFullScreen(e)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){if(this.isFullscreen&&screen.orientation&&typeof screen.orientation.lock=="function"){let e=this.loadedConfig?.fullScreenAspectRatio?.toLowerCase()??"";["portrait","landscape","any"].includes(e)&&screen.orientation.lock(e).catch(()=>{})}else try{screen.orientation.unlock()}catch{}this.instance?.set_fullscreen(this.isFullscreen)}checkIfTouch(e){this.isTouch=e.pointerType==="touch"||e.pointerType==="pen"}confirmReloadSave(e,n,t){if(Wt(n)&&localStorage[e]){if(!t&&!confirm(C("save-delete-prompt")))return;let r=this.swfUrl?this.swfUrl.pathname:"",i=this.swfUrl?this.swfUrl.hostname:document.location.hostname,s=e.split("/").slice(1,-1).join("/");if(r.includes(s)&&e.startsWith(i)){confirm(C("save-reload-prompt",{action:t?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),t?localStorage.setItem(e,n):localStorage.removeItem(e),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden"));return}t?localStorage.setItem(e,n):localStorage.removeItem(e),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(e,n){let t=e.target,r=new FileReader;r.addEventListener("load",()=>{if(r.result&&typeof r.result=="string"){let i=new RegExp("data:.*;base64,"),s=r.result.replace(i,"");this.confirmReloadSave(n,s,!0)}}),t&&t.files&&t.files.length>0&&t.files[0]&&r.readAsDataURL(t.files[0])}checkSaves(){if(!this.saveManager.querySelector("#local-saves"))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some(e=>{let n=e.split("/").pop(),t=localStorage.getItem(e);return n&&t&&Wt(t)})}deleteSave(e){let n=localStorage.getItem(e);n&&this.confirmReloadSave(e,n,!1)}populateSaves(){if(!this.checkSaves())return;let e=this.saveManager.querySelector("#local-saves");e.textContent="",Object.keys(localStorage).forEach(n=>{let t=n.split("/").pop(),r=localStorage.getItem(n);t&&r&&Wt(r)&&e.appendChild((0,q.jsx)(this.SaveRow,{rowKey:n,solName:t,solData:r}))})}async backupSaves(){let e=this.newZipWriter(),n=[];Object.keys(localStorage).forEach(r=>{let i=String(r.split("/").pop()),s=localStorage.getItem(r);if(s&&Wt(s)){let u=Lo(s),c=n.filter(d=>d===i).length;n.push(i),c>0&&(i+=` (${c+1})`),e.addFile(i+".sol",u)}});let t=new Blob([e.save()],{type:"application/zip"});Kr(t,"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);let e=await fetch(this.swfUrl.href);if(!e.ok){console.error("SWF download failed");return}let n=await e.blob();Kr(n,Ja(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){let e=this.virtualKeyboard,n=e.value;for(let t of n)for(let r of["keydown","keyup"])this.element.dispatchEvent(new KeyboardEvent(r,{key:t,bubbles:!0}));e.value=""}openVirtualKeyboard(){this.instance?.has_focus()?this.virtualKeyboard.focus({preventScroll:!0}):setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},0)}closeVirtualKeyboard(){this.isVirtualKeyboardFocused()&&this.container.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){let e=[],n=()=>{e.length>0&&e[e.length-1]!==null&&e.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((r,i)=>{r.separatorBefore&&n(),e.push({text:r.caption,onClick:async()=>this.instance?.run_context_menu_callback(i),enabled:r.enabled,checked:r.checked})}),n()),this.fullscreenEnabled&&(this.isFullscreen?e.push({text:C("context-menu-exit-fullscreen"),onClick:async()=>this.setFullscreen(!1)}):e.push({text:C("context-menu-enter-fullscreen"),onClick:async()=>this.setFullscreen(!0)})),e.push({text:C("context-menu-volume-controls"),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(n(),e.push({text:C("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&e.push({text:C("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&e.push({text:C("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),n(),e.push({text:C("context-menu-about-ruffle",{flavor:le?"extension":"",version:ee.versionName}),async onClick(){window.open(We,"_blank")}}),this.isTouch&&(n(),e.push({text:C("context-menu-hide"),onClick:async()=>{this.contextMenuForceDisabled=!0}})),e}pointerDown(e){this.pointerDownPosition=new qt(e.pageX,e.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(e){if(this.pointerDownPosition!==null){let n=new qt(e.pageX,e.pageY),t=this.pointerDownPosition.distanceTo(n);t>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=t)}}checkLongPress(e){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&e.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(e)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(e){if(this.panicked)return;if(e.type==="contextmenu"&&e.shiftKey){this.hideContextMenu();return}if(e.preventDefault(),this._suppressContextMenu){this._suppressContextMenu=!1;return}if(this.shadow.querySelectorAll(".modal:not(.hidden)").length!==0||(e.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),e.stopPropagation()),[!1,Se.Off].includes(this.loadedConfig?.contextMenu??Se.On)||this.isTouch&&this.loadedConfig?.contextMenu===Se.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);let n=this.contextMenuItems(),t=n.some(Te=>Te!==null&&Te.checked!==void 0);this.contextMenuElement.classList.toggle("has-checkmarks",t);for(let Te of n)if(Te===null)this.contextMenuElement.appendChild((0,q.jsx)("li",{class:"menu-separator",children:(0,q.jsx)("hr",{})}));else{let{text:ft,onClick:dt,enabled:pn,checked:Qt}=Te,Qe=(0,q.jsx)("li",{class:{"menu-item":!0,disabled:pn===!1,checked:Qt===!0},"data-text":ft,children:ft});if(this.contextMenuElement.appendChild(Qe),pn!==!1){let Ze=async Me=>{Me.preventDefault(),Me.stopPropagation(),await dt(Me),this.hideContextMenu()};this.contextMenuSupported?(Qe.addEventListener("click",Ze),Qe.addEventListener("contextmenu",Ze)):Qe.addEventListener("pointerup",Ze)}}this.contextMenuOverlay.classList.remove("hidden");let r=this.element.getBoundingClientRect(),i=this.contextMenuElement.getBoundingClientRect(),s=document.scrollingElement||document.body,u=i.width,c=i.height,d=s.clientWidth,b=s.clientHeight,h=e.clientX;h+u>d&&(h=e.clientX-u>=0?e.clientX-u:d-u);let R=e.clientY;R+c>b&&(R=e.clientY-c>=0?e.clientY-c:b-c);let J=h-r.x,se=R-r.y,ve=getComputedStyle(this.contextMenuElement).direction==="rtl";this.contextMenuElement.style.top=`${se}px`,ve?(this.contextMenuElement.style.right=`${r.width-J}px`,this.contextMenuElement.style.left=""):(this.contextMenuElement.style.right="",this.contextMenuElement.style.left=`${J}px`)}hideContextMenu(){this.instance?.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){let e=this.instance.audio_context();return e&&e.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){let e=this.instance.audio_context();e&&e.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){if(!Lt){if(navigator.maxTouchPoints<1){Lt=!0;return}"audioSession"in navigator?navigator.audioSession.type="playback":this.container.addEventListener("click",()=>{if(Lt)return;let e=this.instance?.audio_context();if(!e)return;let n=new Audio;n.src=(()=>{let t=new ArrayBuffer(10),r=new DataView(t),i=e.sampleRate;return r.setUint32(0,i,!0),r.setUint32(4,i,!0),r.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(t))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),n.load(),n.play().then(()=>{Lt=!0}).catch(t=>{console.warn(`Failed to play dummy sound: ${t}`)})},{once:!0})}}static htmlDimensionToCssDimension(e){if(e){let n=e.match(Nc);if(n){let t=n[1];return n[3]||(t+="px"),t}}return null}callExternalInterface(e,n){return this.instance?.call_exposed_callback(e,n)}getObjectId(){return this.element.getAttribute("name")}set traceObserver(e){this.instance?.set_trace_observer(e)}getPanicData(){let e=`
# Player Info
`;if(e+=`Allows script access: ${this.loadedConfig?this.loadedConfig.allowScriptAccess:!1}
`,e+=`${this.rendererDebugInfo}
`,e+=this.debugPlayerInfo(),e+=`
# Page Info
`,e+=`Page URL: ${document.location.href}
`,this.swfUrl&&(e+=`SWF URL: ${this.swfUrl}
`),e+=`
# Browser Info
`,e+=`User Agent: ${window.navigator.userAgent}
`,e+=`Platform: ${window.navigator.platform}
`,e+=`Has touch support: ${window.navigator.maxTouchPoints>0}
`,e+=`
# Ruffle Info
`,e+=`Version: ${ee.versionNumber}
`,e+=`Name: ${ee.versionName}
`,e+=`Channel: ${ee.versionChannel}
`,e+=`Built: ${ee.buildDate}
`,e+=`Commit: ${ee.commitHash}
`,e+=`Is extension: ${le}
`,e+=`
# Metadata
`,this.metadata)for(let[n,t]of Object.entries(this.metadata))e+=`${n}: ${t}
`;return e}panic(e){if(this.panicked)return;this.panicked=!0,this.hideSplashScreen();let n=e;if(e instanceof Error&&(e.name==="AbortError"||e.message.includes("AbortError")))return;if(e instanceof qe){let r=this.loadedConfig?.openInNewTab,i=this.loadedConfig&&"url"in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(r&&i){this.addOpenInNewTabMessage(r,i);return}e=e.cause}let t=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(t.push(`# Error Info
`),e instanceof Error){if(t.push(`Error name: ${e.name}
`),t.push(`Error message: ${e.message}
`),e.stack){let r=t.push(`Error stack:
\`\`\`
${e.stack}
\`\`\`
`)-1;e.avmStack&&(t.avmStackIndex=t.push(`AVM2 stack:
\`\`\`
    ${e.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1),t.stackIndex=r}}else t.push(`Error: ${e}
`);t.push(this.getPanicData()),no(this.container,n,t,this.swfUrl),this.destroy()}addOpenInNewTabMessage(e,n){let t=new URL(n);if(this.loadedConfig?.parameters){let i=Jr(this.loadedConfig?.parameters);Object.entries(i).forEach(([s,u])=>{t.searchParams.set(s,u)})}this.hideSplashScreen();let r=(0,q.jsxs)("div",{children:[U("message-cant-embed"),(0,q.jsx)("div",{children:(0,q.jsx)("a",{href:"#",onClick:()=>e(t),children:C("open-in-new-tab")})})]});this.displayMessageOrElement(r,!0)}displayRootMovieDownloadFailedMessage(e,n){let t=this.loadedConfig?.openInNewTab;if(t&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(t,this.swfUrl);else{let r=n.includes("HTTP Status is not OK:"),i=e?new on(this.swfUrl):new an(this.swfUrl,r);this.panic(i)}}displayMessageOrElement(e,n){let t=e instanceof HTMLDivElement?e:(0,q.jsx)("p",{children:e}),r=n?null:(0,q.jsx)("div",{children:(0,q.jsx)("button",{id:"continue-btn",children:C("continue")})}),i=(0,q.jsx)("div",{id:"message-overlay",children:(0,q.jsxs)("div",{class:"message",children:[t,r]})});if(this.container.prepend(i),!n){let s=this.container.querySelector("#continue-btn");s.onclick=()=>{i.parentNode.removeChild(i)}}}displayMessage(e){this.displayMessageOrElement(e)}displayRestoredFromBfcacheMessage(){if(this.container.querySelector("#message-overlay")!==null)return;let e=U("message-restored-from-bfcache");this.displayMessageOrElement(e);let n=this.container.querySelector("#message-overlay");(n.scrollWidth>n.offsetWidth||n.scrollHeight>n.offsetHeight)&&n.parentNode.removeChild(n)}displayUnsupportedVideo(e){let n=this.videoModal.querySelector("#video-holder");if(n){let t=(0,q.jsx)("video",{src:e,autoplay:!0,controls:!0,onContextMenu:r=>r.stopPropagation()});n.textContent="",n.appendChild(t),this.videoModal.classList.remove("hidden")}}displayClipboardModal(e){let n=this.clipboardModal.querySelector("#clipboard-modal-description");n&&(n.textContent=C("clipboard-message-description",{variant:e?"access-denied":"unsupported"}),this.clipboardModal.classList.remove("hidden"))}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(e){this.metadata=e,this._readyState=Re.Loaded,this.hideSplashScreen(),this.element.dispatchEvent(new CustomEvent(o.LOADED_METADATA)),this.element.dispatchEvent(new CustomEvent(o.LOADED_DATA))}};gn.LOADED_METADATA="loadedmetadata";gn.LOADED_DATA="loadeddata";var Qr=class{constructor(e,n){this.isMuted=e,this.volume=n}get_volume(){return this.isMuted?0:this.volume/100}};function tt(o,e){let n={url:o},t=e("allowNetworking");t!==null&&(n.allowNetworking=t);let r=Wo(e("allowScriptAccess"),o);r!==null&&(n.allowScriptAccess=r);let i=e("bgcolor");i!==null&&(n.backgroundColor=i);let s=e("base");if(s!==null)if(s==="."){let ve=new URL(o,document.baseURI);n.base=new URL(s,ve).href}else n.base=s;let u=Bo(e("menu"));u!==null&&(n.menu=u);let c=Bo(e("allowFullScreen"));c!==null&&(n.allowFullscreen=c);let d=e("flashvars");d!==null&&(n.parameters=d);let b=e("quality");b!==null&&(n.quality=b);let h=e("salign");h!==null&&(n.salign=h);let R=e("scale");R!==null&&(n.scale=R);let J=e("wmode");J!==null&&(n.wmode=J);let se=e("fullScreenAspectRatio");return se!==null&&(n.fullScreenAspectRatio=se),n}function rt(o){if(o){let e="",n="";try{let t=new URL(o,We);e=t.pathname,n=t.hostname}catch{}if(e.startsWith("/v/")&&/^(?:www\.|m\.)?youtube(?:-nocookie)?\.com|youtu\.be$/i.test(n))return!0}return!1}function at(o,e){let n=o.getAttribute(e),t=window.RufflePlayer?.config??{};if(n)try{let r=new URL(n);r.protocol==="http:"&&window.location.protocol==="https:"&&(!("upgradeToHttps"in t)||t.upgradeToHttps!==!1)&&(r.protocol="https:",o.setAttribute(e,r.toString()))}catch{}}function ot(o){let e=o.parentElement;for(;e!==null;){switch(e.tagName){case"AUDIO":case"VIDEO":return!0}e=e.parentElement}return!1}function Kr(o,e){let n=URL.createObjectURL(o),t=document.createElement("a");t.href=n,t.download=e,t.click(),URL.revokeObjectURL(n)}function Lo(o){let e=atob(o);return Uint8Array.from(e,n=>n.charCodeAt(0))}function Vc(o,e){let n=Lo(o);return new Blob([n],{type:e})}function Wt(o){try{let e=atob(o);return Gc(e)}catch{return!1}}function Gc(o){return o.charCodeAt(0)===0&&o.charCodeAt(1)===191&&o.slice(6,10)==="TCSO"&&[0,4,0,0,0,0].every((e,n)=>o.charCodeAt(10+n)===e)}function Bo(o){switch(o?.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function Wo(o,e){switch(o?.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(e,window.location.href).origin}catch{return!1}default:return null}}function Hc(){let o=new Intl.Locale(navigator.language),e;if("getTextInfo"in o&&typeof o.getTextInfo=="function")e=o.getTextInfo();else if("textInfo"in o&&typeof o.textInfo=="object")e=o.textInfo;else return"ltr";return typeof e=="object"&&"direction"in e&&typeof e.direction=="string"&&e.direction||"ltr"}var Jc=function(o,e,n,t,r){if(t==="m")throw new TypeError("Private method is not writable");if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t==="a"?r.call(o,n):r?r.value=n:e.set(o,n),n},N=function(o,e,n,t){if(n==="a"&&!t)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!t:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?t:n==="a"?t.call(o):t?t.value:e.get(o)},B,$t=class{constructor(e){B.set(this,void 0),Jc(this,B,e,"f")}addFSCommandHandler(e){N(this,B,"f").addFSCommandHandler(e)}get readyState(){return N(this,B,"f")._readyState}get metadata(){return N(this,B,"f").metadata}get loadedConfig(){return N(this,B,"f").loadedConfig??null}async reload(){await N(this,B,"f").reload()}async load(e,n=!1){await N(this,B,"f").load(e,n)}resume(){N(this,B,"f").play()}get isPlaying(){return N(this,B,"f").isPlaying}get volume(){return N(this,B,"f").volume}set volume(e){N(this,B,"f").volume=e}get fullscreenEnabled(){return N(this,B,"f").fullscreenEnabled}get isFullscreen(){return N(this,B,"f").isFullscreen}setFullscreen(e){N(this,B,"f").setFullscreen(e)}requestFullscreen(){N(this,B,"f").enterFullscreen()}exitFullscreen(){N(this,B,"f").exitFullscreen()}async downloadSwf(){await N(this,B,"f").downloadSwf()}displayMessage(e){N(this,B,"f").displayMessage(e)}suspend(){N(this,B,"f").pause()}get suspended(){return!N(this,B,"f").isPlaying}set traceObserver(e){N(this,B,"f").traceObserver=e}get config(){return N(this,B,"f").config}set config(e){N(this,B,"f").config=e}callExternalInterface(e,...n){return N(this,B,"f").callExternalInterface(e,n)}};B=new WeakMap;var T=function(o,e,n,t){if(n==="a"&&!t)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!t:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?t:n==="a"?t.call(o):t?t.value:e.get(o)},qo=function(o,e,n,t,r){if(t==="m")throw new TypeError("Private method is not writable");if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t==="a"?r.call(o,n):r?r.value=n:e.set(o,n),n},D,it,ke=class o extends HTMLElement{get onFSCommand(){return T(this,it,"f")}set onFSCommand(e){qo(this,it,e,"f")}get readyState(){return T(this,D,"f")._readyState}get metadata(){return T(this,D,"f").metadata}constructor(){super(),D.set(this,void 0),it.set(this,null),qo(this,D,new gn(this,()=>this.debugPlayerInfo(),e=>{try{Object.defineProperty(this,e,{value:(...n)=>T(this,D,"f").callExternalInterface(e,n),configurable:!0})}catch(n){console.warn(`Error setting ExternalInterface legacy callback for ${e}`,n)}}),"f"),T(this,D,"f").addFSCommandHandler((e,n)=>{T(this,it,"f")?.call(this,e,n)})}ruffle(e){if((e??1)===1)return new $t(T(this,D,"f"));throw new Error(`Version ${e} not supported.`)}get loadedConfig(){return T(this,D,"f").loadedConfig??null}connectedCallback(){T(this,D,"f").updateStyles()}static get observedAttributes(){return["width","height","align"]}attributeChangedCallback(e,n,t){o.observedAttributes.includes(e)&&T(this,D,"f").updateStyles()}disconnectedCallback(){T(this,D,"f").destroy()}async reload(){await T(this,D,"f").reload()}async load(e,n=!1){await T(this,D,"f").load(e,n)}play(){T(this,D,"f").play()}get isPlaying(){return T(this,D,"f").isPlaying}get volume(){return T(this,D,"f").volume}set volume(e){T(this,D,"f").volume=e}get fullscreenEnabled(){return T(this,D,"f").fullscreenEnabled}get isFullscreen(){return T(this,D,"f").isFullscreen}setFullscreen(e){T(this,D,"f").setFullscreen(e)}enterFullscreen(){T(this,D,"f").enterFullscreen()}exitFullscreen(){T(this,D,"f").exitFullscreen()}async downloadSwf(){await T(this,D,"f").downloadSwf()}pause(){T(this,D,"f").pause()}set traceObserver(e){T(this,D,"f").traceObserver=e}debugPlayerInfo(){return""}PercentLoaded(){return T(this,D,"f")._readyState===Re.Loaded?100:0}get config(){return T(this,D,"f").config}set config(e){T(this,D,"f").config=e}displayMessage(e){T(this,D,"f").displayMessage(e)}};D=new WeakMap,it=new WeakMap;function Ut(o,e){if(o){for(let n of o.attributes)if(n.specified){if(n.name==="title"&&n.value==="Adobe Flash Player")continue;try{e.setAttribute(n.name,n.value)}catch{console.warn(`Unable to set attribute ${n.name} on Ruffle instance`)}}for(let n of Array.from(o.children))e.appendChild(n)}}var Ie=class o extends ke{connectedCallback(){super.connectedCallback();let e=this.attributes.getNamedItem("src");if(e){let n=r=>this.attributes.getNamedItem(r)?.value??null,t=tt(e.value,n);this.load(t,!0)}}get nodeName(){return"EMBED"}get src(){return this.attributes.getNamedItem("src")?.value}set src(e){if(e){let n=document.createAttribute("src");n.value=e,this.attributes.setNamedItem(n)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return[...ke.observedAttributes,"src"]}attributeChangedCallback(e,n,t){if(super.attributeChangedCallback(e,n,t),this.isConnected&&e==="src"){let r=this.attributes.getNamedItem("src");if(r){let i=u=>this.attributes.getNamedItem(u)?.value??null,s=tt(r.value,i);this.load(s,!0)}}}static isInterdictable(e){let n=e.getAttribute("src"),t=e.getAttribute("type");return!n||ot(e)?!1:rt(n)?(at(e,"src"),!1):Ft(n,t)}static fromNativeEmbedElement(e){let n=mn("ruffle-embed",o),t=document.createElement(n);return Ut(e,t),t}get height(){return this.getAttribute("height")||""}set height(e){this.setAttribute("height",e)}get width(){return this.getAttribute("width")||""}set width(e){this.setAttribute("width",e)}get type(){return this.getAttribute("type")||""}set type(e){this.setAttribute("type",e)}};function Kc(o,e,n){e=e.toLowerCase();for(let[t,r]of Object.entries(o))if(t.toLowerCase()===e)return r;return n}function $o(o){let e={};for(let n of o.children)if(n instanceof HTMLParamElement){let t=n.attributes.getNamedItem("name")?.value,r=n.attributes.getNamedItem("value")?.value;t&&r&&(e[t]=r)}return e}var st=class o extends ke{constructor(){super(...arguments),this.params={}}connectedCallback(){super.connectedCallback(),this.params=$o(this);let e=null;if(this.attributes.getNamedItem("data")?e=this.attributes.getNamedItem("data")?.value:this.params.movie&&(e=this.params.movie),e){let n=["allowNetworking","base","bgcolor","flashvars"],r=tt(e,i=>Kc(this.params,i,n.includes(i)?this.getAttribute(i):null));this.load(r,!0)}}debugPlayerInfo(){let e=`Player type: Object
`,n=null;return this.attributes.getNamedItem("data")?n=this.attributes.getNamedItem("data")?.value:this.params.movie&&(n=this.params.movie),e+=`SWF URL: ${n}
`,Object.keys(this.params).forEach(t=>{e+=`Param ${t}: ${this.params[t]}
`}),Object.keys(this.attributes).forEach(t=>{e+=`Attribute ${t}: ${this.attributes.getNamedItem(t)?.value}
`}),e}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(e){if(e){let n=document.createAttribute("data");n.value=e,this.attributes.setNamedItem(n)}else this.attributes.removeNamedItem("data")}static isInterdictable(e){if(ot(e)||e.getElementsByTagName("ruffle-object").length>0||e.getElementsByTagName("ruffle-embed").length>0)return!1;let n=e.attributes.getNamedItem("data")?.value.toLowerCase(),t=e.attributes.getNamedItem("type")?.value??null,r=$o(e),i;if(n){if(rt(n))return at(e,"data"),!1;i=n}else if(r&&r.movie){if(rt(r.movie)){let u=e.querySelector("param[name='movie']");if(u){at(u,"value");let c=u.getAttribute("value");c&&e.setAttribute("data",c)}return!1}i=r.movie}else return!1;let s=e.attributes.getNamedItem("classid")?.value.toLowerCase();return s===Ha.toLowerCase()?!Array.from(e.getElementsByTagName("object")).some(o.isInterdictable)&&!Array.from(e.getElementsByTagName("embed")).some(Ie.isInterdictable):s?!1:Ft(i,t)}static fromNativeObjectElement(e){let n=mn("ruffle-object",o),t=document.createElement(n);for(let r of Array.from(e.getElementsByTagName("embed")))Ie.isInterdictable(r)&&r.remove();for(let r of Array.from(e.getElementsByTagName("object")))o.isInterdictable(r)&&r.remove();return Ut(e,t),t}get height(){return this.getAttribute("height")||""}set height(e){this.setAttribute("height",e)}get width(){return this.getAttribute("width")||""}set width(e){this.setAttribute("width",e)}get type(){return this.getAttribute("type")||""}set type(e){this.setAttribute("type",e)}};var De=function(o,e,n,t,r){if(t==="m")throw new TypeError("Private method is not writable");if(t==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?o!==e||!r:!e.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t==="a"?r.call(o,n):r?r.value=n:e.set(o,n),n},H=function(o,e,n,t){if(n==="a"&&!t)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?o!==e||!t:!e.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?t:n==="a"?t.call(o):t?t.value:e.get(o)},Ce,ut,Ke,Nt,Vt,Gt,Pe,ct,lt=class{constructor(e){if(Ce.set(this,void 0),ut.set(this,void 0),De(this,Ce,[],"f"),De(this,ut,{},"f"),e)for(let n=0;n<e.length;n++)this.install(e[n])}install(e){let n=new Ht(e),t=H(this,Ce,"f").length;H(this,Ce,"f").push(n),H(this,ut,"f")[e.type]=n,Object.defineProperty(this,n.type,{configurable:!0,enumerable:!1,value:n}),this[t]=n}item(e){return H(this,Ce,"f")[e>>>0]}namedItem(e){return H(this,ut,"f")[e]}get length(){return H(this,Ce,"f").length}[(Ce=new WeakMap,ut=new WeakMap,Symbol.iterator)](){return H(this,Ce,"f")[Symbol.iterator]()}get[Symbol.toStringTag](){return"MimeTypeArray"}},Ht=class{constructor(e){Ke.set(this,void 0),De(this,Ke,e,"f")}get type(){return H(this,Ke,"f").type}get description(){return H(this,Ke,"f").description}get suffixes(){return H(this,Ke,"f").suffixes}get enabledPlugin(){return H(this,Ke,"f").enabledPlugin}get[(Ke=new WeakMap,Symbol.toStringTag)](){return"MimeType"}},Zr=class extends lt{constructor(e,n,t){super(),Nt.set(this,void 0),Vt.set(this,void 0),Gt.set(this,void 0),De(this,Nt,e,"f"),De(this,Vt,n,"f"),De(this,Gt,t,"f")}get name(){return H(this,Nt,"f")}get description(){return H(this,Vt,"f")}get filename(){return H(this,Gt,"f")}get[(Nt=new WeakMap,Vt=new WeakMap,Gt=new WeakMap,Symbol.toStringTag)](){return"Plugin"}},Jt=class{constructor(e){Pe.set(this,void 0),ct.set(this,void 0),De(this,Pe,[],"f"),De(this,ct,{},"f");for(let n=0;n<e.length;n++)this.install(e[n])}install(e){let n=H(this,Pe,"f").length;H(this,Pe,"f").push(e),H(this,ct,"f")[e.name]=e,Object.defineProperty(this,e.name,{configurable:!0,enumerable:!1,value:e}),this[n]=e}item(e){return H(this,Pe,"f")[e>>>0]}namedItem(e){return H(this,ct,"f")[e]}refresh(){}[(Pe=new WeakMap,ct=new WeakMap,Symbol.iterator)](){return H(this,Pe,"f")[Symbol.iterator]()}get[Symbol.toStringTag](){return"PluginArray"}get length(){return H(this,Pe,"f").length}},he=new Zr("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");he.install({type:jt,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:he});he.install({type:St,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:he});he.install({type:zt,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:he});he.install({type:At,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:he});function Uo(o){if(navigator.plugins.namedItem("Shockwave Flash"))return;(!("install"in navigator.plugins)||!navigator.plugins.install)&&(Object.defineProperty(window,"PluginArray",{value:Jt,configurable:!0}),Object.defineProperty(navigator,"plugins",{value:new Jt(navigator.plugins),writable:!1,configurable:!0})),navigator.plugins.install(o),o.length>0&&(!("install"in navigator.mimeTypes)||!navigator.mimeTypes.install)&&(Object.defineProperty(window,"MimeTypeArray",{value:lt,configurable:!0}),Object.defineProperty(window,"MimeType",{value:Ht,configurable:!0}),Object.defineProperty(navigator,"mimeTypes",{value:new lt(navigator.mimeTypes),writable:!1,configurable:!0}));let n=navigator.mimeTypes;for(let t=0;t<o.length;t+=1)n.install(o[t])}var _t=window.RufflePlayer?.config??{},Qc=Ct(_t)+"ruffle.js",Yr,Xr;function Zc(){return"favorFlash"in _t&&_t.favorFlash===!1?!1:(navigator.plugins.namedItem("Shockwave Flash")?.filename??"ruffle.js")!=="ruffle.js"}function Vo(){try{Yr=Yr??document.getElementsByTagName("object"),Xr=Xr??document.getElementsByTagName("embed");for(let o of Array.from(Yr))if(st.isInterdictable(o)){let e=st.fromNativeObjectElement(o);o.replaceWith(e)}for(let o of Array.from(Xr))if(Ie.isInterdictable(o)){let e=Ie.fromNativeEmbedElement(o);o.replaceWith(e)}}catch(o){console.error(`Serious error encountered when polyfilling native Flash elements: ${o}`)}}var ea,na;function Go(){ea=ea??document.getElementsByTagName("iframe"),na=na??document.getElementsByTagName("frame"),[ea,na].forEach(o=>{for(let e of o){if(e.dataset.rufflePolyfilled!==void 0)continue;e.dataset.rufflePolyfilled="";let n=e.contentWindow,t=`Couldn't load Ruffle into ${e.tagName}[${e.src}]: `;try{n.document.readyState==="complete"&&No(n,t)}catch(r){le||console.warn(t+r)}e.addEventListener("load",()=>{No(n,t)},!1)}})}async function No(o,e){await new Promise(t=>{window.setTimeout(()=>{t()},100)});let n;try{if(n=o.document,!n)return}catch(t){le||console.warn(e+t);return}if(!(!le&&n.documentElement.dataset.ruffleOptout!==void 0)){if(le)o.RufflePlayer||(o.RufflePlayer={}),o.RufflePlayer.config={..._t,...o.RufflePlayer.config??{}};else if(!o.RufflePlayer){let t=n.createElement("script");t.setAttribute("src",Qc),t.onload=()=>{o.RufflePlayer={},o.RufflePlayer.config=_t},n.head.appendChild(t)}}}function Yc(){new MutationObserver(function(e){e.some(t=>Array.from(t.addedNodes).some(r=>["EMBED","OBJECT"].includes(r.nodeName)||r instanceof Element&&r.querySelector("embed, object")!==null))&&(Vo(),Go())}).observe(document,{childList:!0,subtree:!0})}function Ho(){Uo(he)}function Jo(){Zc()||(Vo(),Go(),Yc())}var Je={version:ee.versionNumber+"+"+ee.buildDate.substring(0,10),polyfill(){Jo()},pluginPolyfill(){Ho()},createPlayer(){let o=mn("ruffle-player",ke);return document.createElement(o)},options:{}};function Xc(o,e={}){let n;window.RufflePlayer instanceof Ye?n=window.RufflePlayer:(n=new Ye(window.RufflePlayer),window.RufflePlayer=n),n.sources[o]=Je,Je.options=e,("polyfills"in n.config?n.config.polyfills:!0)!==!1&&Je.pluginPolyfill()}Kt.installRuffle("local");})();
//# sourceMappingURL=ruffle.js.map
