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
var constants=require("lu/constants"),Abstract=require("lu/Abstract"),Container=require("lu/Container"),Fiber=require("Fiber"),Tip;Tip=Abstract.extend(function(e){var t="class",n=!0,r=!1,i="lu/Tip/decorators/",s={above:i+"above",below:i+"below",left:i+"left",right:i+"right"},o={delay:300,placement:"right",offsetTop:0,offsetLeft:0,template:_.template('<div class="<%= className %>" role="tooltip" tabindex="-1"><!-- CONTENT PLACEHOLDER --></div>'),className:"tooltip",style:"",interactive:n,threshold:10};return{init:function(i,u){function y(){var e=u.placement,n=u.style;e&&n?c.addClass(e+" "+n):i.attr(t)?c.addClass(e+" "+i.attr(t)):c.addClass(e)}function b(){$("body").append(c)}function w(e){e.stopPropagation(),l.on("mousemove.lu.tip",E),a.show()}function E(e){function m(){var e=t<r-u.threshold-u.offsetLeft&&t<h-u.threshold-u.offsetLeft,i=t>r+o+u.threshold+u.offsetLeft&&t>h+d+u.threshold+u.offsetLeft,a=n<s-u.threshold-u.offsetTop&&n<p-u.threshold-u.offsetTop,l=n>s+f+u.threshold+u.offsetTop&&n>p+v+u.threshold+u.offsetTop;return e||i||a||l}e.stopPropagation();var t=e.pageX||0,n=e.pageY||0,r=i.offset().left,s=i.offset().top,o=i.outerWidth(),f=i.outerHeight(),h=c.offset().left,p=c.offset().top,d=c.outerWidth(),v=c.outerHeight();m()&&(l.off("mouseenter",w),l.off("mousemove.lu.tip",E),a.hide())}function S(e){e.stopPropagation(),i.on("blur.lu.tip",function(e){e.stopPropagation(),i.off("blur.lu.tip"),a.hide()}),a.show()}var a=this,f=r,l=$(document),c,h,p,d,v=i[0].tagName.toLowerCase()==="input",m=[],g;_.defaults(u,o),e.init.call(this,i,u),p=u.url||i.attr("href"),c=$(u.template({className:u.className})),y(),h=new Container(c,{frame:u.frame,notify:i}),this.$tip=c,this.show=function(){f===r?h.trigger("load",p):(c.css(a.getPosition()),c.show(),v||c.focus())},this.hide=function(){var e;f===n&&(e=window.setTimeout(function(){if(!d||!u.interactive)c.hide(),window.clearTimeout(e)},u.delay))},this.getPosition=function(){var e=i.offset(),t=i.outerHeight(),n=i.outerWidth();return a.calcPosition(e,t,n,u)},this.on(constants.events.SHOW,function(e){e.stopPropagation(),a.show()}),this.on(constants.events.HIDE,function(e){e.stopPropagation(),a.hide()}),h.on(constants.events.UPDATED,function(e){e.stopPropagation(),b(),f=n,a.trigger(constants.events.SHOW,[a])}),v?i.on("focus",S):i.on("mouseenter",w),c.on("blur",a.hide);switch(u.placement){case"Above":m.push(s.above);break;case"Below":m.push(s.below);break;case"Left":m.push(s.left);break;case"Right":m.push(s.right);break;default:m.push(s.right)}require.ensure(m,function(e,t,n){_.each(m,function(t,n){t=e(t)(u),Fiber.decorate(a,t)}),a.trigger("dependencies-resolved")})}}}),typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(Tip):module.exports&&(module.exports=Tip));