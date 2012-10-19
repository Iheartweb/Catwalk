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
function stateDecorator(e){function t(e){return e&&typeof e=="string"&&(e=e.replace(" ","").split(",")),e}function n(e,t){var n=[],r=[],i=e.attr("class")||"";_.each(i.split(" "),function(e,t){e.indexOf(constants.statePrefix)>-1&&n.push(e)}),_.each(t,function(e,t){e&&r.push(constants.statePrefix+e)}),e.removeClass(n.join(" ")).addClass(r.join(" "))}function r(e){var t=e.attr("class")||"",n=[];return _.each(t.split(" "),function(e,t){e.indexOf(constants.statePrefix)>-1&&n.push(e.replace(constants.statePrefix,""))}),n}return function(e){function o(e,n,r){if(t.$element.is(e.target))return t;e.stopPropagation();switch(r){case"add":t.addState(n);break;case"remove":t.removeState(n);break;case"reset":t.reset();break;case"clear":t.clear();break;case"toggle":t.toggle(n);break;default:t.setState(n)}return t}var t=this,i=[],s=[r(this.$element)];this.getState=function(){return i},this.setState=function(e){return typeof e=="string"&&(e=e.split(",").sort()),e=e.sort(),i=i.sort(),_.isEqual(e,i)?t:(i=e,n(this.$element,i,constants.statePrefix),this.trigger(constants.events.STATED,[this]),this)},this.addState=function(e){return typeof e=="string"&&(e=e.split(",")),_.difference(e,i).length>0&&(i=_.union(i,e),n(this.$element,i),this.trigger(constants.events.STATED,[this])),this},this.removeState=function(e){var t,r=[];return typeof e=="string"&&(e=e.split(",")),t=_.intersection(i,e),t.length>0&&(r.push(i),_.each(e,function(e,t){r.push(e)}),i=_.without.apply(this,r),n(this.$element,i,constants.statePrefix),this.trigger(constants.events.STATED,[this])),this},this.clear=function(){return this.removeState(i),this},this.reset=function(){return this.setState(s[0]),this},this.hasState=function(e){return _.indexOf(i,e)>-1},s[0]&&this.addState(s[0]),this.on(constants.events.STATE,o)}}var constants=require("lu/constants"),helpers=require("lu/helpers");typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(stateDecorator):module.exports&&(module.exports=stateDecorator));