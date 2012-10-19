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
(function(){Lu.Mapper=function(){var e=window.LU_CONFIG.scope||document;this.$scope=undefined,this.maps=[],this.setScope(e)},Lu.Mapper.prototype.setScope=function(e){function n(e,t){var n=e.getAttribute("data-lu");return n!==null&&n!==""}var t;return e instanceof $?t=e.find("[data-lu]").add(_.filter(e,n)):e.getElementsByTagName?t=$(_.filter(e.getElementsByTagName("*"),n)):(t=$(e),t=t.find("[data-lu]").add(_.filter(t,n))),this.$scope=t,this},Lu.Mapper.prototype.getScope=function(){return this.$scope},Lu.Mapper.prototype.register=function(e){return this.maps.unshift(e),this},Lu.Mapper.prototype.execute=function(){_.each(this.maps,function(e,t){e.call()})};var e=Lu.DefaultMapper=new Lu.Mapper;_.each(["Switch","List","Carousel","Container"],function(t,n){e.register(function(){Lu.map(_.filter(e.$scope,function(e,n){return e.getAttribute("data-lu").indexOf(t)>-1}),t)})}),_.each(["select","first","last","next","previous","load","play","pause","state"],function(t){e.register(function(){var n="Button:"+t.charAt(0).toUpperCase()+t.substring(1);Lu.map(_.filter(e.$scope,function(e){return e.getAttribute("data-lu").indexOf(n)>-1}),"Button",function(){this.settings.action=t,this.key=n,this.hasDependencies=!0})})}),e.register(function(){var t="Tip";Lu.map(_.filter(e.$scope,function(e){return _.indexOf(e.getAttribute("data-lu").split(" "),t)>-1}),"Tip",function(){this.settings.placement="Right",this.key=t,this.hasDependencies=!0})}),_.each(["Above","Below","Left","Right"],function(t){e.register(function(){var n="Tip:"+t;Lu.map(_.filter(e.$scope,function(e){return _.indexOf(e.getAttribute("data-lu").split(" "),n)>-1}),"Tip",function(){this.settings.placement=t,this.key=n,this.hasDependencies=!0})})}),e.register(function(){Lu.map(_.filter(e.$scope,function(e,t){return e.getAttribute("data-lu").indexOf("Placeholder")>-1&&(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA")&&e.getAttribute("placeholder")}),"Placeholder")}),e.execute()})();