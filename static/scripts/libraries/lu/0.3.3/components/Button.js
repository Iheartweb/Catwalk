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
var constants=require("lu/constants"),helpers=require("lu/helpers"),Switch=require("lu/Switch"),Fiber=require("Fiber"),Button;Button=Switch.extend(function(e){function i(e,t){e.$element.on("keyup",function(n){n.keyCode===32&&e.trigger(t)})}var t={on:"click",throttle:300},n="lu/Button/decorators/",r={first:n+"first",last:n+"last",load:n+"load",next:n+"next",pause:n+"pause",play:n+"play",previous:n+"previous",select:n+"select",state:n+"state",def:n+"default"};return{init:function(n,s){var o=this,u,a=[],f;_.defaults(s,t),e.init.call(this,n,s),u=s.action;if(u!==undefined)switch(u){case"first":a.push(r.first),a.push(r.def);break;case"last":a.push(r.last),a.push(r.def);break;case"load":a.push(r.load),a.push(r.def);break;case"next":a.push(r.next),a.push(r.def);break;case"pause":a.push(r.pause),a.push(r.def);break;case"play":a.push(r.play),a.push(r.def);break;case"previous":a.push(r.previous),a.push(r.def);break;case"select":a.push(r.select);break;case"state":a.push(r.state);break;default:throw new Error('Button decorator "'+u+'" does not exist!')}else a.push(r.def);require.ensure(a,function(e,t,n){_.each(a,function(t,n){t=e(t)(s),Fiber.decorate(o,t)}),o.trigger("dependencies-resolved")}),i(this,s.on)},disable:function(){var e=this.$element;return e.is(constants.HAS_A18_ATTRS)&&e.attr(constants.DISABLED,"disabled"),this.addState(constants.states.DISABLED),this},enable:function(){var e=this.$element;return e.is(constants.HAS_A18_ATTRS)&&e.attr(constants.DISABLED,null),this.removeState(constants.states.DISABLED),this}}}),typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(Button):module.exports&&(module.exports=Button));