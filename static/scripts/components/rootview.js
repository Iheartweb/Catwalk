define('Components/RootView', function(){
  var Catwalk = require( 'Catwalk' ),
    RootView;
  /**
  * @class App RootController
  */
  RootView = Catwalk.View.extend( function( base ){
    'use strict';

    var defaults = {

    };

    return {
      //'click body':'bodyClicked' = trigger 'bodyClicked' event on view
      //'click body':'bodyClicked()' = call this.bodyClicked() function
      events: {
        'click':'bodyClicked',
      },
      init: function( settings ) {
        settings = settings || {};
        _.defaults( settings, defaults );
        base.init.call( this );

        return [
          {
            schema: "Person",
            
          }
        ];
      }
    };
  });

  return RootView;
});