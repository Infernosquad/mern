const mongoose = require('../mongoose/db.js');

const messageSchema = new mongoose.Schema({
  content: String,
});

module.exports = mongoose.model('Conversation', messageSchema);
