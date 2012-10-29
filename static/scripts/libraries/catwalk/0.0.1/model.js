define( 'Catwalk/Model', function(){
  var Abstract = require( 'Catwalk/Abstract' ),
    Model;

  /**
  * @class Model
  */
  Model = Abstract.extend( function( base ){

    'use strict';

    var defaults = {
      //The primary key to use in the models
      primaryKey: 'id',
      //The levels of history to keep in the cache -1 to have no restriction
      history: 10,
      //auto validate before saving, should we assume?
      validate: true,
      //auto persist on save?
      persist: false,
      urlPattern: '',
      data: {}
    };

    return {
      init: function( settings ) {
        var history = [],
          position = 0,
          uuid,
          id,
          clone,
          data;

        settings = settings || {};

        _.defaults( settings, defaults );
        base.init.call( this );

        /**
         * Gets the value of the specified key in the model,
         * if the key is not specified, a hash of the model
         * is returned instead
         * @method
         * @public
         * @param {String} key
         * @return the value of the key or a hash of the model
         */
        this.get = function( key ){
          var model;
          //this always returns a clone so that the model does not get overwritten
          if( clone ){
            model = clone;
          } else {
            clone = model = _.clone( history[position] );
          }

          if( key ){
            return clone[key];
          } else {
            return clone;
          }
        };

        /**
         * Sets the value of the specified key in the model,
         * or sets the value of all keys in the object
         * @method
         * @public
         * @param {Object} object a hash containing the new values
         * @returns the Model
         */
        this.set = function( object ){
          var model = this.get();
          data = _.extend( data, object );
          return this;
        };

        /**
         * Saves the current state in history. Triggers a changed,
         * event if the model has changed since last save.
         * @method
         * @public
         * @returns {Object} the Model
         */
        this.save = function(){
          var levels = settings.history,
            model = this.get();

          //We have changed the past. In order to prevent a paradox -
          //we have to remove a time-line from the future.
          if( position !== history.length - 1 ){
            history.splice( position );
          }

          //store the present state in history
          history.unshift( model );

          //notify the observers of a change event
          if( !_.isEqual( history[position], model ) ){
            //this.notify( 'change', [this] );
          }

          position += 1;

          //forget the past if there are to many levels stored in history
          while( history.length > levels ){
            history.shift();
          }

          //invalidate clone
          clone = false;

          return this;
        };

        /**
         * Sets the Model to the relative point in history
         * or sets the value of all keys in the object
         * @method
         * @public
         * @param {Number} number the relative point
         * @returns {Object} the Model
         */
        this.history = function( number ){
          var length = history.length;

          //don't go to a negative history
          if( length + number < 0 ){
            position = 0;
            return this;
          }

          //don't go to a history that does not exist
          if( length + number > length ){
            position = length;
            return this;
          }

          //it's a valid history
          position += number;
          return this;
        };

        /**
         * Returns a hash of the changed values since last save
         * @method
         * @public
         * @returns {Object} the Model
         */
        this.changed = function(){
          if( history.length > 1 ){
            return _.difference( history[position], history[position] );
          } else {
            return {};
          }
        };

        //set initial data
        data = settings.data;

        //this id will be used in syncing
        id = data[settings.primaryKey];

        //this id is used in eventing
        uuid = data['__cwuuid__'] || new Date().getTime().toString( 36 ) + Math.floor( Math.random() * 1e14 );
        this.uuid = uuid;

        //Give our model a uniqueId if one is not provided
        if( !id && id !== 0 ){
          data[settings.primaryKey] = id = uuid;
        }

        //construct the url to use in sync
        if( settings.urlRoot && settings.url ){
          this.url = settings.urlRoot + settings.url;
        } else if( settings.url ){
          this.url = settings.url;
        }

        //Make sure that history levels is at least 1...
        //so that we have something to reference during changes
        if( settings.history < 1 ){
          settings.history = 1;
        }

        //populate original pint in history
        history[0] = data;
      },
      /**
       * Removes and attribute or attributes from the model
       * @method
       * @public
       * @param {Array} an array containing the keys to unset
       * @returns {Object} the Model
       */
      unset: function( array ){
        var unset = this.get();
        _.each( array, function( item, index ){
          delete unset[item]
        } );
        this.set( unset );
      },
      /**
       * Empties the data object
       * or sets the value of all keys in the object
       * @method
       * @public
       * @returns {Object} the Model
       */
      clear: function(){
        if( _.isEmpty( data ) ){
          return;
        }
        this.set( {} );
      },
      /**
       * Checks to see if the key is available on the object
       * @method
       * @public
       * @param {String} key the key to check
       * @returns {Boolean}
       */
      has: function( key ){
        var value = this.get( key );
        return ( value !== undefined || value !== null );
      },
      /**
       * gets all of the Model's keys
       * @method
       * @public
       * @returns {Array} keys
       */
      keys: function(){
        return _.keys( this.get() );
      },
      /**
       * gets all of the Model's values
       * @method
       * @public
       * @returns {Array} values
       */
      values: function(){
        return _.keys( this.values() );
      },
      /**
       * Filters model to include the white-listed keys only
       * @method
       * @public
       * @param {Array} white listed keys
       * @returns {Object} the Model
       */
      pick: function( keys ){
        this.set( _.pick( this.get(), keys ) );
        return this;
      },
      /**
       * Filters the model to exclude the back listed keys
       * @method
       * @public
       * @param {Array} black keys
       * @returns {Object} the Model
       */
      omit: function( keys ){
        this.set( _.omit( this.get(), keys ) );
        return this;
      },
      /**
       * Send the current object to the server
       * @method
       * @public
       * @returns {Object} A deferral;
       */
      sync: function(){
        $.ajax( 'POST', this.url, { data: this.get() } );
      },
      /**
       * Get updates from the server
       * @method
       * @public
       * @returns {Object} A deferral;
       */
      fetch: function(){
        //the url format assuming - we need some way to express a pattern
        $.ajax( 'GET', this.url + '/' + this.get( id ), { data: this.get() } );
      },
      //Validation?
      validate: function(){
        return true;
      },
      //plug-in? for fuzzy search
      search: function(){},
      //observe a set of keys
      observe: function( keys ){},
      //cease observation on a set of keys
      detatch: function( keys ){}
    };
  } );

  return Model;
} );