( function() {

  var COMPONENTS_PATH = '/scripts/libraries/lu/0.4.0/components/',
    MAPS_PATH = '/scripts/libraries/lu/0.4.0/mappers/';

    window.LU_CONFIG = {
      debug: 5
    };

  if( typeof window.require === 'function' ) {

    if( typeof window.Inject.addRule === 'function' ) {

      window.Inject.addRule( /^lu\//, {
        path: function( module ) {
          module = module.replace( 'lu/', '' );
          return COMPONENTS_PATH + module + '.js';
        }
      } );

      window.Inject.addRule( /^map\//, {
        path: function( module ) {
          module = module.replace( 'map/', '' );
          return MAPS_PATH + module + '.js';
        }
      } );

    }
  }

} () );