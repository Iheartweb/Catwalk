define('Catwalk/Controller', function(){
  var Abstract = require( 'Catwalk/Abstract' ),
    Model = require( 'Catwalk/Model' ),
    Collection = require( 'Catwalk/Collection' ),
    CollectionFactory = require( 'Catwalk/CollectionFactory' ),
    Controller;
  /**
  * @class Controller
  */
  Controller = Abstract.extend( function( base ){
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

  return Controller;
});