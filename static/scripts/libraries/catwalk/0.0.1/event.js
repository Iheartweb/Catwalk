/**
* @class Model
*/

var Event = Fiber.extend( function(){

  'use strict';

  var defaults = {},
    $meadiator = $([]);

  return {
    init: function( settings ) {
      var self = this;

      data = data || {};
      settings = settings || {};

      _.defaults( settings, defaults );

    },
    on: function(){
      return $.on.call( $meadiator, arguments );
    },
    trigger: function(){
      return $trigger.call( $meadiator, arguments );
    },
    off: function(){
      return $.off.call( $meadiator, arguments );
    }
  };
} );