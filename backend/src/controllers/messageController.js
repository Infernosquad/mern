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
  message.user = req.user;
  message.save((err) => {
    if (err) {
      res.status(422).send(err);
    } else {
      res.status(201).send(message);
    }
  });
};

controller.delete = (req, res) => {
  Message.findById(req.id, (err, message) => {
    if (err) {
      res.status(404).send(err);
    } else {
      message.delete();
      res.send(message);
    }
  });
};

module.exports = controller;
