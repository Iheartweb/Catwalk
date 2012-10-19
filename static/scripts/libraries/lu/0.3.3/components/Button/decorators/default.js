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
function DefaultDecorator(e){return function(t){var n=this;this.$element.on(e.on,_.throttle(function(t){n.$element.is("button")||n.$element.focus(),e.action!==undefined&&n.trigger(e.action)},e.throttle))}}typeof module!="undefined"&&(typeof module.setExports=="function"?module.setExports(DefaultDecorator):module.exports&&(module.exports=DefaultDecorator));