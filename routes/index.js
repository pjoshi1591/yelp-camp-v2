const express = require('express');
const router = express.Router();
const { postRegister } = require('../controllers/index');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Yelp Camp' });
});

/* GET register */
router.get('/register', (req, res, next) => {
  res.render('register');
});

/* POST register */
router.post('/register', postRegister);

/* GET login */
router.get('/login', (req, res, next) => {
  res.render('login');
});

/* POST login */
router.post('/login', (req, res, next) => {
  res.render('login');
});

/* GET profile */
router.get('/profile', (req, res, next) => {
  res.render('profile');
});

/* PUT profile */
router.put('/profile/:user_id', (req, res, next) => {
  res.render('profile');
});

/* GET forget password */
router.get('/forget', (req, res, next) => {
  res.render('forget password');
});

/* PUT forget password */
router.put('/forget', (req, res, next) => {
  res.render('forget');
});

/* GET reset password */
router.get('/reset/:token', (req, res, next) => {
  res.render('reset password');
});

/* PUT reset password */
router.put('/reset/:token', (req, res, next) => {
  res.render('reset');
});

module.exports = router;
