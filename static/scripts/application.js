( function(){

  var location =  document.location,
    protocol = location.protocol,
    hostname = location.hostname,
    port = location.port,
    moduleRoot = protocol + '//' + hostname + ( ( port !== '' ) ? ':' + port + '/' : '/' ) ;

  //Use this in dev mode
  Inject.setExpires( 0 );
  Inject.clearCache();

  //This is the root that inject will look for all modules at
  //this should work except for x-domain
  Inject.setModuleRoot( moduleRoot );

  require.ensure( ['map/default'], function(){
    var DefaultMap = require( 'map/default' );
    DefaultMap.observe();
    $( function(){
      DefaultMap.execute();
      $( '#SwitchButton' ).click( function( event ){
        $('#switches').append('<div data-lu="Switch"><button data-lu="Button:Select">Select</button></div>');
      } );
      $( '#ListButton' ).click( function( event ){
        $('#list').append('<li data-lu="Switch"><h2>' + Math.floor( Math.random() * 1e3 ) + '</h2></li>');
      } );
    } );
  } );

}() );