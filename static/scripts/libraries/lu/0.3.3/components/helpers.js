/**
 * Lu version 0.3.3
 * @author Robert Martone <iheartweb@gmail.com>
 * @license
 *
 * Please thank the contributors:
 * https://github.com/linkedin/Lu/graphs/contributors
 *
 * Copyright (c) 2011,2012 LinkedIn
 * All Rights Reserved. Apache Software License 2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function parseUri(e){var t=parseUri.options,n=t.parser[t.strictMode?"strict":"loose"].exec(e),r={},i=14;while(i>0)i-=1,r[t.key[i]]=n[i]||"";return r[t.q.name]={},r[t.key[12]].replace(t.q.parser,function(e,n,i){n&&(r[t.q.name][n]=i)}),r}var helpers={},urlRegExp=/\b((?:[a-z][\w\-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i;helpers.console=function(){function r(n,r){if(t){if(typeof t[n]=="function")return t[n].apply(t,e.call(r));if(typeof t[n]=="object")return Function.prototype.call.call(t[n],t,e.call(r))}}function i(){}var e=Array.prototype.slice,t=window.console,n=window.LU_CONFIG.debug;return n===!1?{error:i,warn:i,info:i,debug:i,log:i}:{error:function(){if(n>=1)return _.error(arguments)},warn:function(){if(n>=2)return r("warn",arguments)},info:function(){if(n>=3)return r("info",arguments)},debug:function(){if(n>=4)return r("debug",arguments)},log:function(){if(n>=5)return r("log",arguments)}}}(),helpers.isUrl=function(e){return urlRegExp.test(e)},parseUri.options={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},helpers.parseUri=parseUri,helpers.trim=function(){return typeof String.prototype.trim=="function"?function(e){return e.trim()}:function(e){return e.replace(/^\s+|\s+$/g,"")}}(),typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(helpers):module.exports&&(module.exports=helpers));