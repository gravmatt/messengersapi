
var express     = require('express'),
    path        = require('path'),
    msgRouter   = require('./routes/message'),

    consoleLog  = require('./core/consoleLog'),
    log         = consoleLog.log,
    error       = consoleLog.error,

    app         = express();

// some express setup
app.use('/demo', function(req, res, next) {
  log('Static content requested.. ' + req.path);
  next();
});

// e.g. http://localhost:1337/demo -> is a folder with static content
app.use('/demo', express.static(path.join(__dirname, 'demo')));
app.use('/vendor', express.static(path.join(__dirname, 'bower_components')));

// routes are separated now I import the into the express app
app.use(msgRouter);

// default port is 1337. To Changes this create a environment variable PORT
var port = process.env.PORT || 1337;

// run server
app.listen(port, function() {
	log('Server running on port ' + port);
});
