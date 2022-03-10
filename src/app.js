const express = require('express');
const morgan = require('morgan');
const dbConnection = require('./infra/database/dbConnection');
const UsersController = require('./users/controllers/usersController');
const UsersModel = require('./users/models/usersModel');
const NewsModel = require('./news/models/newsModel');
const NewsController = require('./news/controllers/newsController');

const app = express();
app.use(morgan('common'));
app.use(express.json());

app.get('/health', (_, res) => {
  res.send();
});

const usersModel = new UsersModel(dbConnection);
const usersController = new UsersController(usersModel);
app.use('/users', usersController.buildRouter());

const newsModel = new NewsModel(dbConnection);
const newsController = new NewsController(newsModel);
app.use('/news', newsController.buildRouter());

module.exports = app;
