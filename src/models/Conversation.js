const mongoose = require('../mongoose/db.js');

const schema = new mongoose.Schema({
  content: String,
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

schema.set('timestamps', true);

module.exports = mongoose.model('Conversation', schema);
