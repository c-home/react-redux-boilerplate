var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var webpack = require('webpack');
var config = require('./webpack.config.js');
var compiler = webpack(config);

var compression = require('compression');

var logger = require('morgan');
var request = require('request');


// Log requests to the console.
app.use(logger('dev'));

// compress basically everything
app.use(compression());

// log extra stuff for requests
var myLogger = function (req, res, next) {
  console.log("\n" + '---')
  next()
}
app.use(myLogger);

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Webpack middleware
// not sure
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('*.js', function (req, res, next) {
   req.url = req.url + '.gz';
   res.set('Content-Encoding', 'gzip');
   next();
});

app.get("/api/example", example);

// Setup a default catch all route
app.get('/*', function(req, res) {
   console.log(req.originalUrl);
   res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 5000, function(err) {
   if (err) {
      console.log(err);
      return;
   }
   console.log('Listening at http://localhost:5000');
});




// ################

// EXAMPLE "API"

// ################

function example(req, res) {
   res.send({ m: 'json' });
}
