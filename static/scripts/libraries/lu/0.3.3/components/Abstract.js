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
var constants=require("lu/constants"),helpers=require("lu/helpers"),Fiber=require("Fiber"),Abstract;Abstract=Fiber.extend(function(e){function r(e,t){var n=this.eventStore,r=/\s+/g;_.each(helpers.trim(e).split(r),function(e){n[e]={method:t}})}function i(e){var t=this.eventStore;_.each(helpers.trim(e).split(/\s+/g),function(n){t[e]&&delete t[e]})}var t=Array.prototype.slice,n={observe:"",notify:""};return{init:function(e,t){var r,i;_.defaults(t,n),this.$element=e,this.eventStore={},t.observe instanceof $?r=t.observe:typeof t.observe=="string"&&(r=$(t.observe)),t.notify instanceof $?i=t.notify:typeof t.notify=="string"&&(i=$(t.notify)),i=i.add(e.lu("getDescendants")),r.length>0&&r.lu("observe",e),i.length>0&&e.lu("observe",i)},on:function(){var e=t.call(arguments),n=constants.eventPrefix+arguments[0];return e.splice(0,1,n),r.call(this,n,"on"),this.$element.on.apply(this.$element,e),this},one:function(){var e=t.call(arguments),n=constants.eventPrefix+arguments[0];return e.splice(0,1,n),r.call(this,n,"one"),this.$element.one.apply(this.$element,e),this},off:function(){var e=t.call(arguments),n=constants.eventPrefix+arguments[0];return e.splice(0,1,n),i.call(this,n),this.$element.off.apply(this.$element,e),this},trigger:function(e,t){var n;return typeof e=="string"&&(e=constants.eventPrefix+e),n=this.eventStore[e],this.$element.lu("notify",e,t),n&&n.method==="one"&&i.call(this,e),this.$element.trigger.call(this.$element,e,t),this},observe:function(e){return e.lu("observe",this.$element),this},unobserve:function(e){return e.lu("unobserve",this.$element),this},events:function(){return _.keys(this.eventStore)}}}),typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(Abstract):module.exports&&(module.exports=Abstract));