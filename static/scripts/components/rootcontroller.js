define('Components/RootController', function(){
  var Catwalk = require( 'Catwalk' ),
    RootController;
  /**
  * @class RootController
  */
  RootController = Catwalk.Controller.extend( function( base ){
    'use strict';

    var defaults = {
      parent: null,
      controllers: {},
      views: {
        'primary': null
      }
    };

    return {
      init: function( settings ) {
        settings = settings || {};
        _.defaults( settings, defaults );

        base.init.call( this );
      }
    };
  });

  return RootController;
});