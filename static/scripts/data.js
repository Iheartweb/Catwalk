( function(){
  var Bootstrap = $.when( getTemplate( 'contact' ), $.getJSON( '/contacts' ) );

  function getTemplate( template ){
    return $.get( '/assets/templates/' + template + '.tmpl' );
  }

  function renderModel( template, model ){
    return _.template( template, model );
  }

  function renderCollection( template, collection ){
    var html = '';
    _.each( collection, function( model, index ){
      html += renderModel( template, model );
    } );
    return html;
  }

$( function(){
  var $contacts = $( '#contacts' );

  Bootstrap.then( function( template, json ){
    $contacts.append( renderCollection( template[0], json[0].result ) );
  } );
} );

}() );