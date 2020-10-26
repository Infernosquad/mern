const User = require('../models/User');
const db = require('../mongoose/db');

db.connection.collections.users.drop( function(err) {
  console.log('user collection dropped');
});

const users = [
  {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john@example.com',
    password: 'pass',
  },
  {
    firstname: 'Jane',
    lastname: 'Doe',
    email: 'jane@example.com',
    password: 'pass',
  },
];

users.forEach((value) => {
  const user = new User(value);
  user.save((err) => {
    if (err) {
      console.log(err);
    }
    console.log('User saved');
  });
});
