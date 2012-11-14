// //Lu Mutation Stuff
// ( function(){
//   require.ensure( ['map/default'], function(){
//     var DefaultMap = require( 'map/default' );
//     DefaultMap.observe();
//     $( function(){
//       DefaultMap.execute();
//       $( '#SwitchButton' ).click( function( event ){
//         $('#switches').append('<div data-lu="Switch"><button data-lu="Button:Select">Select</button></div>');
//       } );
//       $( '#ListButton' ).click( function( event ){
//         $('#list').append('<li data-lu="Switch"><h2>' + Math.floor( Math.random() * 1e3 ) + '</h2></li>');
//       } );
//     } );
//   } );
// }() );

//Catwalk app Stuff

( function(){


  require.ensure( ['Components'], function(){
    var Components = require( 'Components' ),
      app = {
        controller: new Components.RootController()
      };
  });

  /*
  var data = [
    { name: 'Robert', age: 9, company: 'LinkedIn'},
    { name: 'Robert', age: 1, company: 'LinkedIn'},
    { name: 'Robert', age: 4, company: 'Starbucks' },
    { name: 'Robert', age: 2, company: 'LinkedIn' },
    { name: 'Robert', age: 4, company: 'LinkedIn' },
    { name: 'Robert', age: 1, company: 'Starbucks' },
    { name: 'Joe', age: 5, company: 'Kitstarter' },
    { name: 'Sam', age: 4, company: 'LinkedOut' },
    { name: 'Jon', age: 7, company: 'Bzz' },
    { name: 'jack', age: 2, company: 'Furb' },
  ],
  people = [],
  i = 0,
  j = 1e7;

  for( ; i < j; i += 1 ){
    people.push( data[ Math.floor( Math.random() * data.length )] );
  };

  require.ensure( ['Catwalk'], function(){
    var Catwalk = require( 'Catwalk' ),
      Schema = Catwalk.Schema,
      Collection = Catwalk.Collection,
      //Schemas
      Company = new Schema( 'Company', {
        name: {
          required: true,
          type: 'String'
        }, 
        employees: {
          type: 'Number'
        }
      } ),
      Person = new Schema( 'Person', {
        name: {
          required: true,
          type: 'String',
          default: 'Sport'
        }, age: {
          type: 'Number'
        },
        Company: Company
      } ),
      //Collection
      People = new Collection( { schema: Person, data: people } ),
      results;

    console.info( 'Start :: '  + j );
    console.time( 'Collection Speed Test' );
    results = People.filter( function( person, index ){
      return ( person.name === 'Robert'
          && person.company === 'LinkedIn'
          && person.age < 3 );
    } ).sort( function( person, index ){
      return person.age;
    } ).data();
    console.timeEnd( 'Collection Speed Test' );
    console.info( 'End :: '  + results.length );

  } );
*/

}() );