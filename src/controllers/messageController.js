const Message = require('../models/Message');

const controller = {};
controller.list = (req, res) => {
  Message.find({}, (err, messages) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(messages);
    }
  });
};

controller.create = (req, res) => {
  const message = new Message(req.body);
  message.save((err) => {
    if (err) {
      res.status(422).send(err);
    } else {
      res.status(201).send(message);
    }
  });
};

module.exports = controller;
