const mongoose = require('../mongoose/db.js');

const schema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  conversation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

schema.set('timestamps', true);

module.exports = mongoose.model('Message', schema);
