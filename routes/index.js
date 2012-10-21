var states = ['Alabama',
'Alaska',
'Arizona',
'Arkansas',
'California',
'Colorado',
'Connecticut',
'Delaware',
'Florida',
'Georgia',
'Hawaii',
'Idaho',
'Illinois',
'Indiana',
'Iowa',
'Kansas',
'Kentucky',
'Louisiana',
'Maine',
'Maryland',
'Massachusetts',
'Michigan',
'Minnesota',
'Mississippi',
'Missouri',
'Montana',
'Nebraska',
'Nevada',
'New Hampshire',
'New Jersey',
'New Mexico',
'New York',
'North Carolina',
'North Dakota',
'Ohio',
'Oklahoma',
'Oregon',
'Pennsylvania',
'Rhode Island',
'South Carolina',
'South Dakota',
'Tennessee',
'Texas',
'Utah',
'Vermont',
'Virginia',
'Washington',
'West Virginia',
'Wisconsin',
'Wyoming']

exports.index = function(req, res){
  res.render('index', {});
};

exports.mutation = function(req, res){
  res.render('mutation', {});
};

exports.contacts = function(req, res){
  res.sendfile('./static/assets/data/mock.json');
};

exports.randomState = function(req, res){
  var number,
    state;

  if( states.length ){
    state = states.splice( Math.floor( Math.random() * states.length ), 1 )[0];
    res.json( { "jsonrpc": "2.0", "result": state, "id": 1 } );
  } else {
    
  }

 

};

exports.states = res.render('mutation', {});
