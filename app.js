
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path'),
  app;

app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'static')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get( '/', routes.index );
app.get( '/mutation', routes.mutation );
app.get( '/contacts', routes.contacts );
app.get( '/components', routes.components );

http.createServer(app).listen(app.get('port'), function(){
  console.log("The Express server is listening. Point your browser to http://localhost:" + app.get('port'));
});
