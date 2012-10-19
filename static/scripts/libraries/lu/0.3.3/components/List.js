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
var constants=require("lu/constants"),helpers=require("lu/helpers"),Switch=require("lu/Switch"),Fiber=require("Fiber"),List;List=Switch.extend(function(e){var t=constants.statePrefix+constants.states.SELECTED,n="ul, ol, dl",r={index:undefined};return{init:function(i,s){var o=this,u,a,f,l;_.defaults(s,r),e.init.call(this,i,s),this.index=function(){return l},this.items=function(){var e;return s.items?typeof s.items=="string"?e=i.children(s.items):e=s.items:i.is(n)?e=i.children():e=i.children(n).first().children(),e||(e=i.children()),e},this.current=function(){return u},this.select=function(e){var n,r,i,s;return e===undefined?this:(s=typeof e=="number"?e:undefined,typeof e=="number"&&e<=this.size()-1?i=this.$items.eq(e):typeof e=="string"?(i=this.$items.filter(e),i=i.size()===1?i:undefined):e instanceof $&&e.size()===1&&e.is(this.$items)&&(i=e),i===undefined?(this.trigger(constants.events.OUT_OF_BOUNDS,[this]),this):(s===undefined&&(s=this.$items.index(i)),s>this.index()?this.addState(constants.states.FORWARD).removeState(constants.states.REVERSE):s<this.index()&&this.addState(constants.states.REVERSE).removeState(constants.states.FORWARD),_.each(i.lu("getComponents"),function(e,t){var r;n||(r=e.instance,r&&typeof r.removeState=="function"&&typeof r.addState=="function"&&(n=e))}),n||(Lu.map(i,"Switch",function(){}),Lu.execute(i),n=i.lu("getComponents").Switch),n.deferral.then(function(e){var n=o.current();n?n.removeState(constants.states.SELECTED):o.$items.filter("."+t).not(e.$element).removeClass(t),u=e,l=s,u.addState(constants.states.SELECTED),o.trigger(constants.events.SELECTED,[o])}),this))},this.$items=this.items(),l=s.index;if(l===undefined){var c=this.$items.filter("."+t);l=this.$items.index(c),l===-1&&(l=0)}o.select(l),this.on(constants.events.SELECT,function(e,t){e.stopPropagation();var n=t.$element,r=n.attr("aria-controls"),i,s;r||(i=n.attr("href"),i&&(r=helpers.parseUri(i).anchor)),r?(s=$("#"+r),s.is(o.$items)?o.select(s):o.select(t.$element.closest(o.$items))):o.select(t.$element.closest(o.$items))}),this.on(constants.events.NEXT,function(e){e.stopPropagation(),o.next()}),this.on(constants.events.PREVIOUS,function(e){e.stopPropagation(),o.previous()}),this.on(constants.events.FIRST,function(e){e.stopPropagation(),o.first()}),this.on(constants.events.LAST,function(e){e.stopPropagation(),o.last()}),this.on(constants.events.STATED,function(e,t){e.stopPropagation();var n;if(!t.$element.is(o.$items))return;n=o.current();if(n&&t.$element.is(n.$element))return;t.hasState&&t.hasState(constants.states.SELECTED)&&o.select(t.$element)})},add:function(e){return this.$items.parent().append(e),this.$items=this.items(),this},remove:function(e){return $($(e),this.$items).remove(),this.$items=this.items(),this},next:function(){return this.hasNext()?this.select(this.index()+1):this.trigger(constants.events.OUT_OF_BOUNDS,[this]),this},previous:function(){return this.hasPrevious()?this.select(this.index()-1):this.trigger(constants.events.OUT_OF_BOUNDS,[this]),this},last:function(){return this.select(this.$items.eq(this.size()-1)),this},first:function(){return this.select(0),this},hasNext:function(){return this.index()<this.size()-1},hasPrevious:function(){return this.index()>0},size:function(){return this.$items.size()}}}),typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(List):module.exports&&(module.exports=List));