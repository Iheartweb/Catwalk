( function(){
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
    settings = {
      childList: true,
      characterData: true,
      attributes: true,
      subtree: true
    },
    Observer,
    Bootstrap;


  function getTemplate( template ){
    return $.get( '/assets/templates/' + template + '.tmpl' );
  }

  Bootstrap = getTemplate( 'panel' );

  Observer = new MutationObserver( function( records, index ){
    _.each( records, function( record, index ){
      _.each( record.addedNodes, function( node, index ){
        if( _.indexOf( illegals, node.nodeName ) > -1 ){
          return;
        }

        var $node = $( node );

        Lu.DefaultMapper.setScope( $node ).execute();
        Lu.execute( $node );
      } );
    } );
  } );

  $( function(){
    var $accordion = $( '#accordion' ),
      $body = $( 'body' );

    Lu.DefaultMapper.setScope( $body ).execute();
    Lu.execute( $body );

    Bootstrap.then( function( template ){
      Observer.observe( document, settings );
      window.setInterval( function(){
        var item = _.template( template, {
          id: new Date().getTime().toString( 36 ) + '_' + Math.floor( Math.random() * 1e14 )
        } );
        $accordion.append( item );
      }, 3000 );
    } );

  } );

}() );