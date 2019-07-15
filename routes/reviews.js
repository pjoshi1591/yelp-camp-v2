const express = require('express');
const router = express.Router({ mergeParams: true });

/* GET reviews index /posts/:id/reviews */
router.get('/', (req, res, next) => {
  res.send('reviews');
});

/* POST reviews create /posts/reviews/create */
router.post('/create', (req, res, next) => {
    res.send('reviews/create');
});

/* GET reviews edit /posts/reviews/:id/edit */
router.get('/:review_id/edit', (req, res, next) => {
    res.send('reviews/:review_id/edit');
});

/* PUT reviews edit /posts/reviews/:id */
router.put('/:review_id', (req, res, next) => {
    res.send('reviews/:review_id');
});

/* DELETE reviews destroy /posts/reviews/:id */
router.delete('/:review_id', (req, res, next) => {
    res.send('reviews/:review_id');
});
  
module.exports = router;