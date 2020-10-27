const mongoose = require('../mongoose/db.js');

const schema = new mongoose.Schema({
  content: String,
  users: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    },
  ],
});

schema.set('timestamps', true);

module.exports = mongoose.model('Conversation', schema);
