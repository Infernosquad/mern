const express = require('express');
const logger = require('morgan');

const router = require('./src/routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('dotenv').config();

app.use('/', router);

module.exports = app;
