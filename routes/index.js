'use strict';

const express = require('express');
const fixtures = require('../fixtures');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Title page' });
});

router.get('/fixtures/:index', (req, res, next) => {
  const { params } = req;
  const index = Number(params.index);

  if (Number.isNaN(index)) {
    throw new TypeError('Index is incorrect');
  }

  const fixture = fixtures[index];

  if (!fixture) {
    throw new Error('Fixture not found');
  }

  res.render('fixtures', fixture);
});

/**
 * Роут для тестового задания
 * @param {Object} req
 * @param {Object} res
 */
router.get('/task', (req, res, next) => {
  res.render('task', {  });
});

module.exports = router;
