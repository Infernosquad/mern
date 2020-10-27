const mongoose = require('mongoose');

mongoose.connect(process.env.DB, { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log('Connection established successfully..');
  } else {
    console.log('not able to connection1');
    console.log(err);
    console.error(err);
  }
});

module.exports = mongoose;
