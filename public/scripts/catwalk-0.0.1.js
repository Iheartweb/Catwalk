function Model( data, settings ) {
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

	Model.set = function( attributes ) {
		var changed = false;
		_.each( attributes, function( value, key, list ) {
			if( !Model.has( key ) || Model.get( key ) !== value ) {
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

function Collection( settings ) {
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

	Collection.data = function() {
		var data = [];
		_.each( models, function( model, index ) {
			data.push( model.data() );
		} );
		return data;
	};

	Collection.add = function( model ) {
		models.push( model );
	}

	Collection.filter = function( filter ) {
		return _.filter( Collection.data(), filter );
	};

	Collection.sort = function( sort ) {
		return _.sortBy( Collection.data(), sort );
	};
}

// TestCollection = new Collection();
// TestModel = new Model( {
// 	firstName: 'Robert',
// 	middleInitial: 'A',
// 	lastName: 'Martone'
// } );
// 
// TestCollection.add( TestModel );
