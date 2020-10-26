require('dotenv').config();
const express = require('express');
const logger = require('morgan');

const router = require('./src/routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

// app.use((err, req, res, next) => {
//   res.status(500).send('Something broke!');
// });

module.exports = app;
