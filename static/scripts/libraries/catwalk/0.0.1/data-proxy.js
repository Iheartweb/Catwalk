/**
* @class DataProxy
*
* PURPOSE: Store application data and keep in-sync with server
*
* Talks directly to server, via socket.io
* Holds a single, heterogeneous collection of all data
*/

var DataProxy = Fiber.extend( function(){

  'use strict';

  var defaults = {
    io: io.connect(window.location.protocol + '//' + window.location.hostname);
  };

  return {
    init: function( settings ) {
      var data;

      settings = settings || {};
      _.defaults( settings, defaults );

      //Store any bootstrapped data in a collection
      if(data) {
        data = new Collection(settings.data);
      } else {
        data = new Collection();
      }

      // TODO: Register what server data to listen to via io

      /**
       * Sets the value of the specified key in the model,
       * or sets the value of all keys in the object
       * @method
       * @private
       * @param {string} pk the primary key of the changed
       * @param {Object} attributes a hash containing the new values
       */
      function onServerUpdate(pk, attributes) {
        //Should we allow multiple records to be updated at once?
      }

      //Bind to socket  events
      settings.io.on('update', onServerUpdate);
    }
  };
} );