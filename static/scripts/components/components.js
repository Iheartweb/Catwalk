define( 'Components', function(){
 	var Components = {},
 		Catwalk = require( 'Catwalk' );
 	Components.RootController = require( 'Components/RootController' );

 	_.defaults(Components, Catwalk);

 	return Components;
} );