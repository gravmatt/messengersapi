
var router      = require('express').Router(),
    bodyParser  = require('body-parser'),
    xmlParser   = require('express-xml-bodyparser'),
    translater  = require('../core/messageTranslater'),

    consoleLog  = require('../core/consoleLog'),
    log         = consoleLog.log,
    error       = consoleLog.error;


module.exports = router;

router.post('/message/facebook', bodyParser.json(), function(req, res) {

  var result = translater.facebook(req.body);

  if(result) {
    res.send({
      status: "ok",
      message: result
    });

    log(result);
  }
  else {
    res.status(500).send({ error: 'Something blew up' });
  }
});

router.post('/message/telegram', bodyParser.json(), function(req, res) {

  var result = translater.telegram(req.body);

  if(result) {
    res.send({
      status: "ok",
      message: result
    });

    log(result);
  }
  else {
    res.status(500).send({ error: 'Something blew up' });
  }
});

router.post('/message/whatsapp', xmlParser({trim: false, explicitArray: false}), function(req, res) {

  var result = translater.whatsapp(req.body);

  if(result) {
    res.send({
      status: "ok",
      message: result
    });

    log(result);
  }
  else {
    res.status(500).send({ error: 'Something blew up' });
  }
});
