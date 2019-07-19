const express = require('express');
const router = express.Router();
const { 
    postIndex, 
    postNew,
    postCreate,
    postShow,
    postEdit,
    postUpdate,
    postDelete
} = require('../controllers/posts');
const { asyncErrorHandler } = require('../middleware/index');

/* GET posts index /posts */
router.get('/', asyncErrorHandler(postIndex));

/* GET posts new /posts/create */
router.get('/new', postNew);

/* POST posts create /posts/create */
router.post('/', asyncErrorHandler(postCreate));

/* GET posts show /posts/:id */
router.get('/:id', asyncErrorHandler(postShow));

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', asyncErrorHandler(postEdit));

/* PUT posts update /posts/:id */
router.put('/:id', asyncErrorHandler(postUpdate));

/* DELETE posts destroy /posts/:id */
router.delete('/:id', asyncErrorHandler(postDelete));
  

module.exports = router;