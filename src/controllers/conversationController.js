const Conversation = require('../models/Conversation');

const controller = {};
controller.list = (req, res) => {
  Conversation.find({ 'users.user': req.user }, (err, conversations) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send(conversations);
  });
};

controller.create = (req, res) => {
  const conversation = new Conversation(req.body);
  conversation.save((err) => {
    if (err) {
      res.status(422).send(err);
    } else {
      res.status(201).send(conversation);
    }
  });
};

module.exports = controller;
