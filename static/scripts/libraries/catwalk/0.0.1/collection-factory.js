/**
* @class Collection Factory
*
* PURPOSE: Provide on-demand targeted collections of data to the controllers
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

      //this.
    },
    requestByFilter: function(filter) {
      var collection = new Collection();



    },
    requestByPk: function(pk, type) {
      if(_.isArray(pk)) {
        //Array of primary keys
      }

      //TODO: check to make sure that if we fetch 5 pks, we get 5 objects
    }
  };
} );