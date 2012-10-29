define( 'Catwalk/Schema', function(){

  var Schema = Fiber.extend( function(){
    var types,
      schemas = [];

    function isEmpty( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isEmpty( value );
    }

    function isArray( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isArray( value );
    }

    function isObject( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isObject( value );
    }

    function isFunction( value ){
      return _.isFunction( value );
    }

    function isString( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isString( value );
    }

    function isNumber( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isNumber( value );
    }

    function isFinite( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isFinite( value );
    }

    function isBoolean( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isBoolean( value );
    }

    function isDate( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isDate( value );
    }

    function isRegExp( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isRegExp( value );
    }

    function isNaN( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isNaN( value );
    }

    function isNull( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isNull( value );
    }

    function isUndefined( value ){
      if( _.isFuntion( value ) ){
        value = value.call( this );
      }
      return _.isUndefined( value );
    }

    types = {
      'String': isString,
      'Number': isNumber,
      'Date': isDate,
      'Boolean': isBoolean
    }

    return {
      init: function( name, definitions ){
        var unique = true;
        /*( _.find( function( item ){
          return ( item.name === name );
        } ) ) ? false : true;*/

        this.name = name;
        this.scheme = definitions;

        if( unique ){
          schemas.push( this );
        } else {
          throw new Error( 'Schema ' + name + ' already exists.' );
        }

      },
      validate: function( key ){},
      hasMany: function(){},
      belongsTo: function(){}
    };
  } );

  return Schema;

} );