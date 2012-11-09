define('Components/RootController', function(){
  var Catwalk = require( 'Catwalk' ),
    Components = require('Components'),
    RootController;
  /**
  * @class App RootController
  */
  RootController = Catwalk.Controller.extend( function( base ){
    'use strict';

    var defaults = {
      collectionFactory: new Catwalk.CollectionFactory(),
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

        this.view = new Components.RootView({
          el: $('body')
        });
        this.view.on('bodyClicked', function() {
          alert('You clicked the body!');
        });
      }
    };
  });

  return RootController;
});