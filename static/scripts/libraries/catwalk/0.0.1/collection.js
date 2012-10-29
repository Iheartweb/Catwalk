define( 'Catwalk/Collection', function(){
  var Abstract = require( 'Catwalk/Abstract' ),
    Model = require( 'Catwalk/Model' ),
    Collection;

  /**
  * @class Collection
  */
  Collection = Abstract.extend( function( base ){
    'use strict';

    var defaults = {
      history: 10,
      data: []
    },
    models = {};

    return {
      init: function( settings ) {
        var clone,
          data,
          Schema;

        settings = settings || {};

        if( !settings.schema ){
          throw new Error( 'A schema must be specified' );
        }

        _.defaults( settings, defaults );
        base.init.call( this );

        this.get = function(){
          var collection = [];

          //Whoo-hah store a ref to the model in Models and give the data a uuid;
          _.each( data, function( item ){
            var uuid = item['__cwuuid__'],
              model;

            if( !uuid ){
              //optimize model creation with Web Workers if available
              model = new Model( { schema: Schema, data: item } );
              uuid = item['__cwuuid__'] = Model.uuid;
            } else {
              model = models[uuid];
            }

            collection.push( model );
          } );

          return collection;
        };

        this.set = function( d ){
          data = d;
        };

        this.data = function(){
          return data;
        };

        //Setup
        data = settings.data;
        Schema = settings.schema;

      },
      sort: function( iterator ){
        this.set( _.sortBy( this.data(), iterator ) );
        return this;
      },
      each: function( iterator ){
        this.set( _.each( this.data(), iterator ) );
        return this;
      },
      map: function(){},
      reduce: function(){},
      reduceRight: function(){},
      find: function(){},
      filter: function( iterator ){
        this.set( _.filter( this.data(), iterator ) );
        return this;
      },
      where: function(){},
      reject: function(){},
      all: function(){},
      any: function(){},
      contains: function(){},
      invoke: function(){},
      pluck: function(){},
      max: function(){},
      min: function(){},
      count: function(){},
      group: function(){},
      shuffle: function(){},
      toArray: function(){},
      size: function(){},
      add: function(){},
      remove: function(){},
      at: function(){},
      push: function(){},
      pop: function(){},
      unshift: function(){},
      shift: function(){},
      length: function(){},
      first: function(){},
      initial: function(){},
      last: function(){},
      rest: function(){},
      compact: function(){},
      flatten: function(){},
      without: function(){},
      union: function(){},
      intersection: function(){},
      difference: function(){},
      uniq: function(){},
      zip: function(){},
      object: function(){},
      indexOf: function(){},
      lastIndexOf: function(){},
      sortedIndex: function(){},
      range: function(){},
      comparator: function(){},
      url: function(){},
      parse: function(){},
      fetch: function(){},
      reset: function(){},
      create: function(){},
    };
  } );

  return Collection;
} );