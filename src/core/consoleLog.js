
var util = require('util');

module.exports = {
    log: function(message, params) {

      var msg = params ? util.format(message, params) : message;

      util.log(util.inspect(msg, {colors: true, depth: 10}));
    },
    error: function(message, params) {

      var msg = params ? util.format(message, params) : message;

      console.error(util.inspect(msg, {colors: true, depth: 10}));
    }
}
