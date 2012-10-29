define( 'Catwalk/Abstract', function(){
  /**
  * @class Abstract
  * Facade for jQuery Events
  */

  //TODO: bridge this code to Zepto/Ender

  var Abstract = Fiber.extend( function(){

    'use strict';

    var defaults = {};

    return {
      init: function( settings ){
        var self = this,
          $proxy = $([]);

        settings = settings || {};

        _.defaults( settings, defaults );
      },
      on: function(){
        return $.on.call( $proxy, arguments );
      },
      one: function(){
        return $.on.call( $proxy, arguments );
      },
      trigger: function(){
        return $trigger.call( $proxy, arguments );
      },
      off: function(){
        return $.off.call( $proxy, arguments );
      }
    };
  } );

  return Abstract;
} );
