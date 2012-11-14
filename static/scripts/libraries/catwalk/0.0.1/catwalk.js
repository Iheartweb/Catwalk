define( 'Catwalk', function(){
  var Catwalk = {};
  Catwalk.Abstract = require( 'Catwalk/Abstract' );
  Catwalk.Schema = require( 'Catwalk/Schema' );
  Catwalk.Model = require( 'Catwalk/Model' );
  Catwalk.Collection = require( 'Catwalk/Collection' );
  Catwalk.CollectionFactory = require( 'Catwalk/CollectionFactory' );
  Catwalk.Controller = require( 'Catwalk/Controller' );
  Catwalk.View = require( 'Catwalk/View' );
  Catwalk.Promise = require( 'Catwalk/Promise' );

  return Catwalk;
} );