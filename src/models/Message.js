const mongoose = require('../mongoose/db.js');

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  conversation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation',
  },
});

module.exports = mongoose.model('Message', messageSchema);
