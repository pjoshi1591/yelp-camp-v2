const express = require('express');
const router = express.Router();

/* GET posts index /posts */
router.get('/', (req, res, next) => {
  res.send('posts');
});

/* GET posts new /posts/create */
router.get('/new', (req, res, next) => {
    res.send('posts/new');
});

/* POST posts create /posts/create */
router.post('/create', (req, res, next) => {
    res.send('posts/create');
});

/* GET posts show /posts/:id */
router.get('/:id', (req, res, next) => {
    res.send('posts/:id');
});

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('posts/:id/edit');
});

/* PUT posts edit /posts/:id */
router.put('/:id', (req, res, next) => {
    res.send('posts/:id');
});

/* DELETE posts destroy /posts/:id */
router.delete('/:id', (req, res, next) => {
    res.send('posts/:id');
});
  

module.exports = router;