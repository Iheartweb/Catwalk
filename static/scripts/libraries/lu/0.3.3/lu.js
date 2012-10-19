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
function getComponents(e){var t="components";return e.length>0?e.data(t)||e.data(t,{}).data(t):{}}function getComponent(e,t){var n=e.lu("getComponents");return n[t]}function getParents(e){return e.parents().filter(Lu.$mapped)}function getDescendants(e){return e.find(Lu.$mapped)}function getChildren(e){return e.children(Lu.$mapped)}function observe(e,t){var n=e.data("$observers");return n?(n=n.add(t.not(n)),e.data("$observers",n),e):e.data("$observers",t)}function unobserve(e,t){var n=e.data("$observers");return n&&(n=n.not(t)),e.data("$observers",n),e}function notify(e,t,n){var r=e.data("$observers");return r&&_.each(r,function(r,i){var s=$(r),o=s.lu("getComponents"),u=[];_.each(o,function(r,i){var s=r.deferral;s.then(function(){var i=r.instance;_.indexOf(i.events(),t)>-1&&i.trigger.call(i,new $.Event(t,{target:e}),n)})})}),e}var Lu=function(){var self=this;this.$mapped=$([]),this.map=function($element,component,callback){var mapped=[];_.each($element,function(item,index){var $element=$(item),componentData,deferral,settings,configuration=item.getAttribute("data-lu-config"),key;componentData=$element.lu("getComponents"),$element.data("mapped")||($element.data("mapped",!0),mapped.push(item)),componentData[component]?_.extend(componentData[component].settings,{}):(deferral=$.Deferred(),componentData[component]={deferral:deferral,ready:deferral.then,settings:{}}),callback&&callback.call(componentData[component],$element),key=componentData[component].key||component;if(configuration)try{configuration=function(){return eval("( function(){ return "+configuration+"; }() );")}()[key]||{}}catch(e){configuration={}}else configuration={};componentData[component].settings=_.extend(componentData[component].settings,configuration)}),this.$mapped=this.$mapped.add(mapped)},this.execute=function(e){function s(e){var t=e.lu("getComponents");t.length===0&&n.resolve(),_.each(t,function(t,s){var o="lu/"+s,u=t.settings;_.indexOf(r,o)===-1&&r.push(o),i-=1,n.then(function(n,r,i){var s=require(o),a=!1;t.hasDependencies&&e.one("lu:dependencies-resolved",function(e,t){e.stopPropagation(),a=!0}),t.instance=new s(e,u),a?t.deferral.resolve(t.instance):!a&&t.hasDependencies?t.instance.one("dependencies-resolved",function(e,n){e.stopPropagation(),t.deferral.resolve(t.instance)}):t.deferral.resolve(t.instance)}),i===0&&require.ensure(r,function(e,t,r){n.resolve(e,t,r)})})}var t=e.find(this.$mapped),n=$.Deferred(),r=[],i;return e.data("mapped")&&(t=t.add(e)),i=t.length,_.each(t,function(e,t){s($(e))}),n}};Lu=window.Lu=new Lu,function(e){e.fn.lu=function(){var t=e(this),n=Array.prototype.slice.call(arguments),r=n[0],i;n[0]=t;switch(r){case"observe":i=observe.apply(t,n);break;case"unobserve":i=unobserve.apply(t,n);break;case"notify":i=notify.apply(t,n);break;case"getComponents":i=getComponents.apply(t,n);break;case"getComponent":i=getComponent.apply(t,n);break;case"getParents":i=getParents.apply(t,n);break;case"getDescendants":i=getDescendants.apply(t,n);break;case"getChildren":i=getChildren.apply(t,n);break;default:throw new Error("No such method.")}return i}}(window.jQuery),typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(Lu):module.exports&&(module.exports=Lu));