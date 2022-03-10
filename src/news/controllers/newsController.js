/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const { Router } = require('express');
const authMiddleware = require('../../shared/middlewares/authMiddleware');
// const Yup = require('yup');
const News = require('../entities/News');

class NewsController {
  constructor(newsModel) {
    this.newsModel = newsModel;
  }

  buildRouter() {
    const router = Router();
    router.post('/create', this.createNews.bind(this));
    router.get('/search', authMiddleware, this.searchHandler.bind(this));

    return router;
  }

  async createNews(req, res) {
    const allNews = JSON.parse(fs.readFileSync(`${__dirname}/news.json`, 'utf8'));

    for (const news of allNews) {
      const newNews = new News(
        news.title,
        news.image,
        news.relatedItems,
        news.noticeLink,
        news.subtitle,

      );

      // eslint-disable-next-line no-await-in-loop
      await this.newsModel.create(newNews);
    }

    res.sendStatus(201);
  }

  async searchHandler(req, res) {
    const { query } = req;

    const news = await this.newsModel.search(query);
    res.json({
      news,
    });
  }
}

module.exports = NewsController;
