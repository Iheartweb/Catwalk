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
var constants=require("lu/constants"),helpers=require("lu/helpers"),Switch=require("lu/Switch"),Fiber=require("Fiber"),Container;Container=Switch.extend(function(e){var t={states:null,content:null,url:null,selector:null,frame:!1,autoHeight:!1,autoWidth:!1,target:null};return{init:function(n,r){function u(e,t,n){var s=helpers.isUrl(t),o=$(e.target),u;return e.stopPropagation(),s||(o.is("a")&&(t=o.attr("href")),!t&&arguments.length>1&&(n=t)),t.indexOf("#")===0?(u=$(t).html(),i.trigger(constants.events.UPDATE,[u])):r.frame===!0?(u='<iframe src="'+t+'"></iframe>',this.trigger(constants.events.UPDATED,[i])):(this.removeState(constants.states.LOADED),this.addState(constants.states.LOADING),$.ajax({url:t,success:function(e,n,s){var o,u=helpers.parseUri(t).anchor;r.selector?o=$(e).find(r.selector).html():u?o=$(e).find("#"+u).html()||e:o=e,i.removeState(constants.states.LOADING),i.addState(constants.states.LOADED),i.trigger(constants.events.UPDATED,[i])},failure:function(){i.removeState(constants.states.LOADING).addState(constants.states.ERRED)}}),this)}function a(e,t,n){e.stopPropagation();switch(n){case"append":i.appendContent(t);break;case"prepend":i.prependContent(t);break;default:i.setContent(t)}}var i=this,s,o;_.defaults(r,t),e.init.call(this,n,r),this.cache={},this.$target=null,o=r.target,o?this.$target=n.find(o):this.$target=n,this.getContent=function(){return s},this.setContent=function(e){return s=e,this.$target.html(s),r.autoHeight&&(delete this.cache.height,this.setHeight(this.getHeight())),r.autoWidth&&(delete this.cache.width,this.setWidth(this.getWidth())),this.trigger(constants.events.UPDATED,n),this},this.appendContent=function(e){return this.setContent(s+e)},this.prependContent=function(e){return this.setContent(e+s)},r.url?this.trigger(constants.events.LOAD):s=n.html(),r.autoHeight&&this.setHeight(this.getHeight()),r.autoWidth&&this.setWidth(this.getWidth()),this.on(constants.events.UPDATE,a),this.on(constants.events.LOAD,u)},getHeight:function(){var e=this.cache.height,t=this.$target;return e||(t?e=t.height():e=this.$element.height(),this.cache.height=e),e},setHeight:function(e){var t=this.$target;return this.cache.height=e,t?t.height(e):this.$element.height(e),this},getWidth:function(){var e=this.cache.width,t=this.$target;return e||(t?e=t.width():e=this.$element.width(),this.cache.width=e),e},setWidth:function(e){var t=this.$target;return this.cache.width=e,t?t.width(e):this.$element.width(e),this}}}),typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(Container):module.exports&&(module.exports=Container));