define( 'Components', function(){
 	var Components = {},
 		Catwalk = require( 'Catwalk' );
 	Components.RootController = require( 'Components/RootController' );
 	Components.RootView = require( 'Components/RootView' );

 	_.defaults(Components, Catwalk);

 	return Components;
} );