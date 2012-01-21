/* 

 Catwalk v0.0.1
 https://github.com/iheartweb/Catwalk
 Copyright (c) 2011, 2012 Robert Martone
 
 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:
 
 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

Catwalk = new ( function Catwalk() {

	var Catwalk = this;

	Catwalk.Model = function Model( data, settings ) {
		var Model = this,
			defaults = {},
			id,
			history,
			store = data,
			saved = data,
			url;

		if( settings ) {
			_.defaults( settings, defaults );
		} else {
			settings = defaults;
		}

		if( settings.id ) {
			id = id;
		} else if ( store.id ) {
			id = store.id;
		} else {
			id = _.uniqueId();
		}

		Model.data = function( key ) {
			if( key !== undefined ) {
				return store[key];
			} else {
				return store;
			}
		};

		Model.update = function( attributes ) {
			var changed = false;
			_.each( attributes, function( value, key ) {
				if( !Model.has( key ) || Model.data( key ) !== value ) {
					if( !changed ) {
						//history.add( store );
						changed = true;
					}
					store[key] = attributes[key];
					//ChangeEvent scoped with key
				}
			} );
			if( changed ) {
				//ChangeEvent
			}
		};

		Model.set = function( key, value ) {
			var atributes = {};
			attributes[key] = value;
			Model.update( atributes );
		};

		Model.unset = function( attribute ) {
			if( Model.has( attribute ) ) {
				//history.add( new Model( store ) );
				delete store[attribute];
			}
		};

		Model.has = function( attribute ) {
			if( store[attribute] || store[attribute] === 0 ) {
				return true;
			}
			return false;
		};

		Model.clear = function() {
			//history.add( store );
			store = {};
		};

		Model.id = function( value ) {
			if( value ) {
				id = value;
			}
			return id;
		};

		Model.fetch = function() {
			$.getJSON( Model.url(), function() {} );
		};

		Model.save = function() {
			$.ajax( Model.url(), {
				method: 'POST',
				data: store,
				success: function() {
					store.set( save );
				}
			} );
		};

		Model.url = function( value ) {
			if( value ) {
				url = value;
			}
			return url;
		};

		Model.revert = function( steps ) {
			Model.set( save );
		};

		Model.undo = function( steps ) {
			//history
		};

		Model.redo = function() {
			//history
		};

		Model.history = function( value ) {
			//return history[value] || history;
		};

		Model.keys = function() {
			return _.keys( store );
		};

		Model.values = function() {
			return _.values( store );
		};

		Model.reset = function() {
			Model.set( data );
		};

	}
	Catwalk.Collection = function Collection( settings ) {
		var Collection = this,
			defaults = {},
			models = [];

		if( settings ) {
			_.defaults( settings, defaults );
		} else {
			settings = defaults;
		}

		Collection.get = function( id ) {
			if( id !== undefined ) {
				return _.find( models, function( model ) {
					return model.id() === id;
				} );
			}
		};

		Collection.update = function( data ) {
			_.each( data, function( item, index ) {
				var model = Collection.get( item.id );
				model.set( item );
			} );
		};

		Collection.set = function( data ) {
			var ids = [],
				temp_models = [];

			_.each( data, function( item, index ) {
				ids.push( item.id );
				var model = Collection.get( item.id );
				if( !model ) {
					model = Collection.add( new Catwalk.Model( item ) );
				}
				model.update( item );
			} );
			temp_models = Collection.filter( function( item ) {
				return ( _.indexOf( ids, item.id ) !== -1 );
			} );
			models = [];
			_.each( temp_models, function( item, index ) {
				models.push( new Catwalk.Model( item ) );
			} );
		};

		Collection.data = function() {
			var data = [];
			_.each( models, function( model, index ) {
				data.push( model.data() );
			} );
			return data;
		};

		Collection.add = function( model ) {
			models.push( model );
			return model;
		}

		Collection.filter = function( filter ) {
			return _.filter( Collection.data(), filter );
		};

		Collection.sort = function( sort ) {
			return _.sortBy( Collection.data(), sort );
		};
	}

} );

console.log( Catwalk );

if( typeof module !== 'undefined' ) {
	if( typeof module.setExports === 'function' ){
		module.setExports( Catwalk );
	} else if( module.exports ) {
		module.exports = Catwalk; 
	}
}