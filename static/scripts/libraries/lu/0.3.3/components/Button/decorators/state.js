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
function stateDecorator(e){function t(e){return e&&typeof e=="string"&&(e=e.replace(" ","").split(",")),e}function n(e,t){return t===undefined&&(t=0),t<e.length-1?t+=1:t=0,t}return function(r){var i=this,s=[],o=e.method,u=e.index||0,a=[];if(o!=="reset"||o!=="clear")s=t(e.states)||[constants.states.ACTIVE,constants.states.INACTIVE];this.$element.on(e.on,_.throttle(function(e){i.$element.is("a")&&i.$element.focus(),u=n(s,u),i.trigger(constants.events.STATE,[s[u],o])},e.throttle)),this.one(constants.events.STATED,function(e,t){a=t.getState()}),this.on(constants.events.STATED,function(e,t){var n;if(i.$element.is(t.$element))return;switch(o){case"add":t.hasState(s[u])&&s.length===1?i.disable():i.enable();break;case"remove":!t.hasState(s[u])&&s.length===1?i.disable():i.enable();break;case"clear":t.getState().length===0?i.disable():i.enable();break;case"reset":_.difference(a,t.getState()).length===0?i.disable():i.enable();break;default:n=_.intersection(s,t.getState()),s.length===1?t.hasState(s[u])&&s.length===1?i.disable():i.enable():s.length>1?(n.length===s.length?i.disable():i.enable(),n.length===1&&(u=_.indexOf(s,n[0]))):i.enable()}})}}var constants=require("lu/constants");typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(stateDecorator):module.exports&&(module.exports=stateDecorator));