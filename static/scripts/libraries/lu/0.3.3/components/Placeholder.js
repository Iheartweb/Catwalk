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
var FormElement=require("lu/FormElement"),helpers=require("lu/helpers"),constants=require("lu/constants"),stateDecorator=require("lu/decorators/state"),Fiber=require("Fiber"),Placeholder;Placeholder=FormElement.extend(function(e){var t="placeholder"in document.createElement("input")&&"placeholder"in document.createElement("textarea"),n={};return{init:function(r,i){function f(){s.hasState(u)&&(r.val(""),s.removeState(u))}function l(){r.val()===""&&(r.val(a),s.addState(u))}var s=this,o=r[0].form,u,a=r.attr("placeholder");if(t)return;_.defaults(i,n),e.init.call(s,r,i),Fiber.decorate(s,stateDecorator(i)),u=constants.states.PLACEHOLDER,r.val()===a&&r.val(""),l(),r.on("keydown",function(e){f()}),r.on("focus click",function(e){var t,n;s.hasState(u)&&(e.preventDefault(),n=r[0],n.setSelectionRange?n.setSelectionRange(0,0):n.createTextRange&&(t=n.createTextRange(),t.collapse&&t.select&&(t.collapse(!0),t.select())))}),r.on("blur",function(e){l()}),o&&$(o).on("submit",function(e){f()})}}}),typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(Placeholder):module.exports&&(module.exports=Placeholder));