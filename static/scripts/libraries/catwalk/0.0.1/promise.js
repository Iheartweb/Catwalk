define( 'Catwalk/Promise', function(){

  var Promise = Abstract.extend(function(){

      'use strict';
  	var defaults = {
  		payload: null
  	},
    success = function() {},
    failure = function() {},
    context = {};

    return {
      init: function( settings ){
        var self = this;
        settings = settings || {};
        _.defaults( settings, defaults );
      },
      then: function(successCallback, failureCallback, con) {
        success = successCallback;
        failure = failureCallback;
        if(con) {
          context = con;
        }
      },
      resolve: function() {
        success.apply(context,arguments);
      },
      reject: function() {
        failure.apply(context,arguments);
      }
    };
  });

  return Promise;
});