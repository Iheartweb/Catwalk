define( 'Catwalk/Abstract', function(){
  /**
  * @class Abstract
  * Facade for jQuery Events
  */

    var Abstract = Fiber.extend( function(){

    'use strict';

     var defaults = {},
      $proxy = $({});

    return {

      init: function( settings ){
        var self = this;
        settings = settings || {};

        _.defaults( settings, defaults );
      },
      on: function(){
        return $proxy.on.apply( $proxy, arguments );
      },
      one: function(){
        return $proxy.on.apply( $proxy, arguments );
      },
      trigger: function(){
        return $proxy.trigger.apply($proxy, arguments);
      },
      off: function(){
        return $proxy.off.apply( $proxy, arguments );
      }
    };
  } );

  return Abstract;
} );
