
var uuidgen     = require('node-uuid'),

    consoleLog  = require('../core/consoleLog'),
    log         = consoleLog.log,
    error       = consoleLog.error;

// Value check, because it could be undefined with no error
function getValue(value) {
  if(!value) throw new Error('Bad Format!');
  return value;
}

module.exports = {
  facebook: function(msg) {

    try {
      var receivers = [];
      msg.to.data.forEach(function(i) {
        receivers.push({
          id: getValue(i.id),
          name: getValue(i.name),
          lastname: '',
          username: getValue(i.email)
        });
      });

      var tags = [];
      msg.tags.data.forEach(function(i) {
        tags.push(getValue(i.name));
      });

      var oratioMessage = {
        id: uuidgen.v1(),
        message_date: getValue(new Date(msg.created_time).getTime()),
        messenger: 'facebook',
        messenger_id: getValue(msg.id),

        from: {
          id: getValue(msg.from.id),
          name: getValue(msg.from.name),
          lastname: '',
          username: getValue(msg.from.email)
        },

        to: receivers,

        type: 'text',
        content: getValue(msg.message),

        meta: {
          tags: tags
        }
      }

      return oratioMessage;
    } catch (e) {
      error(e.message);
      return null;
    }
  },

  telegram: function(msg) {

    try {
      var oratioMessage = {
        id: uuidgen.v1(),
        message_date: getValue(msg.message.date),
        messenger: 'telegram',
        messenger_id: getValue(msg.message.message_id),

        from: {
          id: getValue(msg.message.from.id),
          name: getValue(msg.message.from.first_name),
          lastname: getValue(msg.message.from.last_name),
          username: getValue(msg.message.from.username),
        },

        to: [{
          id: getValue(msg.message.chat.id),
          name: getValue(msg.message.chat.first_name),
          lastname: getValue(msg.message.chat.last_name),
          username: getValue(msg.message.chat.username),
        }],

        type: 'text',
        content: getValue(msg.message.text),

        meta: {
          update_id: getValue(msg.update_id)
        }
      }

      return oratioMessage;
    } catch (e) {
      error(e.message);
      return null;
    }
  },

  whatsapp: function(msg) {

    try {
      var oratioMessage = {
        id: uuidgen.v1(),
        message_date: getValue(msg.message.$.t),
        messenger: 'whatsapp',
        messenger_id: getValue(msg.message.$.id),

        from: null,

        to: [{
          id: getValue(msg.message.$.to),
          name: '',
          lastname: '',
          username: '',
        }],

        type: getValue(msg.message.$.type),
        content: getValue(msg.message.body),

        meta: {}
      }

      return oratioMessage;
    } catch (e) {
      error(e.message);
      return null;
    }
  }
};
