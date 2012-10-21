var constants = require( 'lu-constants' ),
  Map;

Map = Fiber.extend( function(){

  var Observer,
    illegals = ['SCRIPT', 'LINK', 'STYLE', 'META', 'HEAD', 'HTML', 'BASE', 'Sm9z6Q==/'],
    Maps = [];

  function handler( records ){
    _.each( records, function( record, index ){
      _.each( record.addedNodes, function( node, index ){
        var $node;

        if( _.indexOf( illegals, node.nodeName ) ){
          //don't let them in.
          return;
        }

        $node = $( node );

        _.each( Maps, function( map, index ){
          map.execute();
        } );

      } );
    }
  }

  function map( $element, component, callback ){
    var mapped = [];

    _.each( $element, function( item, index ){
      var $element = $( item ),
        componentData,
        deferral,
        settings,
        configuration = item.getAttribute( 'data-lu-config' ),
        key;

      componentData = $element.lu( 'getComponents' );

      if( !$element.data( 'mapped' ) ){
        $element.data( 'mapped', true );
        mapped.push( item );
      }

      if( !componentData[component] ){
        deferral = $.Deferred();
        componentData[component] = {
          deferral: deferral,
          ready: deferral.then,
          settings: {}
        };
      } else {
        _.extend( componentData[component].settings, {} );
      }

      if( callback ){
        callback.call( componentData[component], $element );
      }

      key = componentData[component].key || component;

      if( configuration ){
        try {
          configuration = ( function(){ return eval( '( function(){ return ' + configuration + '; }() );' ); }()[key] || {} );
        } catch( e ){
          configuration = {};
        }
      } else {
        configuration = {};
      }

      componentData[component].settings = _.extend( componentData[component].settings, configuration );
    } );

    this.$mapped = this.$mapped.add( mapped );
  }

  function getScope( scope ){
    var $scope;
    if( scope ){
      if( scope instanceof $ ){
        $scope = scope;
      } else {
        $scope = $( scope );
      }
    } else {
      scope = $( body );
    }
    return scope;
  }

  //Fallback to DOMMutationEvents https://developer.mozilla.org/en-US/docs/DOM/MutationObserver
  //Add Lu Supported Object

  if( MutationObserver ){
    Observer = new MutationObserver( handler );
  } else if( WebKitMutationObserver ){
    Observer = new WebKitMutationObserver( handler );
  }

  return {
    init: function( settings ){
      this.maps = [],
      this.$mapped = $();
      Maps.push( this );
    },
    observe: function( scope ){
      _.each( getScope( scope ), function( element, index ){
        Observer.observe( element );
      } );
    },
    detach: function( scope ){
      _.each( getScope( scope ), function( element, index ){
        Observer.detach( element );
      } );
    },
    add: function( scope, component, executor ){
      this.maps.push( function(){
        map.call( this, getScope( scope ), component, executor );
        Lu.$mapped = Lu.$mapped.add( this.$mapped );
      } );
    },
    execute: function(){
      _.each( this.maps, function( map, index ){
        map();
      } );
      Lu.execute( this.$mapped );
    }
  }
} );

Lu.map( 'selector', 'List', function(){

} );
module.setExports( Map );
