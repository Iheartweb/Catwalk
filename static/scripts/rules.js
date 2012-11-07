( function() {

  var CATWALK_PATH = '/scripts/libraries/catwalk/0.0.1/';
  var COMPONENTS_PATH = '/scripts/components/';
    // location =  document.location,
    // protocol = location.protocol,
    // hostname = location.hostname,
    // port = location.port,
    // moduleRoot = protocol + '//' + hostname + ( ( port !== '' ) ? ':' + port + '/' : '/' ) ;

  //Use this in dev mode
  Inject.setExpires( 0 );
  Inject.clearCache();
  Inject.setModuleRoot( 'http://localhost:3000/' );

  if( typeof window.require === 'function' ) {

    if( typeof window.Inject.addRule === 'function' ) {

      window.Inject.addRule( /^Catwalk\//, {
        path: function( module ) {
          module = module.replace( 'Catwalk/', '' ).toLowerCase();
          return CATWALK_PATH + module + '.js';
        }
      } );

      window.Inject.addRule( /^Catwalk/, {
        path: function( module ) {
          module = module.replace( 'Catwalk/', '' ).toLowerCase();
          return CATWALK_PATH + module + '.js';
        }
      } );

      window.Inject.addRule( /^Components/, {
        path: function( module ) {
          module = module.replace( 'Components/', '' ).toLowerCase();
          return COMPONENTS_PATH + module + '.js';
        }
      } );

      window.Inject.addRule( /^Components\//, {
        path: function( module ) {
          module = module.replace( 'Components/', '' ).toLowerCase();
          return COMPONENTS_PATH + module + '.js';
        }
      } );

    }
  }

} () );