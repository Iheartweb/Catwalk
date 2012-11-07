define( 'Catwalk', function(){
  var Catwalk = {};
  Catwalk.Abstract = require( 'Catwalk/Abstract' );
  Catwalk.Schema = require( 'Catwalk/Schema' );
  Catwalk.Model = require( 'Catwalk/Model' );
  Catwalk.Collection = require( 'Catwalk/Collection' );
  Catwalk.Controller = require( 'Catwalk/Controller' );

  return Catwalk;
} );