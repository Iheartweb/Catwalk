/**
* @class Model
*/

var Model = Fiber.extend( function() {
  var defaults = {
      key: 'id'
    };

  return {
    init: function( data, settings ) {
      var history = [ data ];

      _.defaults( settings, defaults );

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
        if( key ){
          return data[key];
        } else {
          return _.clone( data );
        }
      }
      this.set = function( key, value /* || object */ ){}
      this.clear = function(){
        if( _.isEmpty( data ) ){
          return;
        }
        history.push( data );
        data = {};
      }

      //Setup
      if( !this.has( settings.key ) ){
        data[setting.key] = new Date().getTime().toString( 36 ) + Math.floor( Math.random() * 10e14 );
      }

    },
    unset: function( key, value ){},
    has: function( key ){
      var value = this.get( key );
      return ( value !== undefined || value !== null );
    },


}
});