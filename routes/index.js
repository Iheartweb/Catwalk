exports.index = function(req, res){
  res.render('index', {});
};

exports.contacts = function(req, res){
  res.sendfile('./static/assets/data/mock.json');
};