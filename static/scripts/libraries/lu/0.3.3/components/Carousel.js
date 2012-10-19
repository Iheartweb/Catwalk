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
var constants=require("lu/constants"),helpers=require("lu/helpers"),List=require("lu/List"),Fiber=require("Fiber"),Carousel;Carousel=List.extend(function(e){var t={repeat:-1,autoplay:!0,delay:3e3};return{init:function(n,r){var i=this,s,o=!1,u,a;_.defaults(r,t),e.init.call(this,n,r),s=r.repeat,u=r.delay,this.play=function(){return this.hasState(constants.states.PLAYING)||(function e(){a=window.setTimeout(function(){i.hasState(constants.states.PLAYING)&&(i.next(),s!==0?(s-=1,e()):i.pause())},u)}(),this.setState(constants.states.PLAYING)),this},this.pause=function(){return this.hasState(constants.states.PAUSED)||(s=r.repeat,window.clearTimeout(a),this.setState(constants.states.PAUSED)),this},this.on(constants.events.PLAY,function(e){e.stopPropagation(),i.play()}),_.each([constants.events.PAUSE,constants.events.NEXT,constants.events.PREVIOUS,constants.events.FIRST,constants.events.LAST,constants.events.SELECT],function(e){i.on(e,function(e,t){e.stopPropagation(),i.pause()})}),r.autoplay?this.play():this.pause()},hasNext:function(){return!0},hasPrevious:function(){return!0},next:function(){return this.index()+1===this.size()?this.first():this.select(this.index()+1),this},previous:function(){return this.index()===0?this.last():this.select(this.index()-1),this}}}),typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(Carousel):module.exports&&(module.exports=Carousel));