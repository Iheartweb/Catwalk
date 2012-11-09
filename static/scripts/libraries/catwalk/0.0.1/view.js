/**
* @class View
*/

define('Catwalk/View', function(){
  var Abstract = require( 'Catwalk/Abstract' ),
    Model = require( 'Catwalk/Model' ),
    View;

  /**
  * @class View
  */
  var View = Abstract.extend( function(){

    'use strict';

    var defaults = {
      dataProxy: null
    };

    return {
      init: function( settings ) {
        settings = settings || {};
        _.defaults( settings, defaults );

        if(settings.el) {
          this.el = el;
        } else {
          this.el = $('div');
        }

        this.registerEvents();
      },
      registerEvents: function() {
        var callback,
          stack,
          alias;
        this.triggerFuncs = [];

        for(var e in this.events) {
          callback = this.events[e];
          stack = e.split(' ', 1);

          if(stack.length === 1) {
              alias = this.el;
          } else {
              alias = this.el.find(stack[1]);
          }

          //callback is function, not event to be fired on view
          if(callback[callback.length-2] === '(' && callback[callback.length-1] === ')') {
            alias.on(stack[0], this[callback.substring(0,callback.length-2)]);
          } else {
            //callback is event that needs to be triggered
            this.triggerFuncs.push(function(obj,e) {
              return function() {
                obj.trigger(e);
              }
            }(this,callback));
            alias.on(stack[0], this.triggerFuncs[this.triggerFuncs.length-1]);
          }
        }
      }
    };
  } );

  return View;
});

