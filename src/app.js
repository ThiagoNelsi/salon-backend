const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');

const app = express();

app.use(cors());

const env = process.env.NODE_ENV === 'test' ? 'test' : 'development';

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-l5xbv.mongodb.net/${env}?retryWrites=true&w=majority`, {
  useFindAndModify: false,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

module.exports = app;
