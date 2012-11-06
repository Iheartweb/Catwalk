/**
* @class Collection Factory
*
* PURPOSE: Provide on-demand targeted collections of data to the controllers
*/

define('Catwalk/CollectionFactory', function(){
  var Abstract = require( 'Catwalk/Abstract' ),
    Model = require( 'Catwalk/Model' ),
    Collection = require( 'Catwalk/Collection' ),
    CollectionFactory;

  /**
  * @class CollectionFactory
  */
  var CollectionFactory = Fiber.extend( function(){

    'use strict';

    var defaults = {
      dataProxy: null
    };

    return {
      init: function( settings ) {
        settings = settings || {};
        _.defaults( settings, defaults );

        if(settings.dataProxy == null) {
          //Must pass in a data proxy
        }
      },
      requestByFilter: function(filter) {
        var collection = new Collection();
      },
      requestByPk: function(pk, type) {
        var collection = new Collection();
        if(_.isArray(pk)) {
          //Array of primary keys
        }

        //TODO: check to make sure that if we fetch 5 pks, we get 5 objects
      }
    };
  } );

  return CollectionFactory;
});

