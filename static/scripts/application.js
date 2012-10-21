( function(){

  var location =  document.location,
    origin = location.origin,
    port = location.port;

  //Use this in dev mode
  Inject.setExpires( 0 );
  Inject.clearCache();

  //This is the root that inject will look for all modules at
  //this should work except for x-domain
  Inject.setModuleRoot( origin + ( port !== '' ) ? ':' + port + '/' : '/';

  require.ensure( 'map/default', function(){
    var DefaultMap = require( 'map/default' );
    DefaultMap.register( 'body', { execute: true } );
  } );

  $( function(){
    //First-Pass of Lu Execution
    Lu.execute( $( 'body' ) ).then( function(){
      console.info( 'DONE!' );
    } );
  } );

}() );