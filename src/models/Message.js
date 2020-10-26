const mongoose = require('../mongoose/db.js');

const schema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  conversation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

schema.set('timestamps', true);

module.exports = mongoose.model('Message', schema);
