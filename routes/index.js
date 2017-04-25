const express = require('express');
const path = require('path');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// acessing style.css without express.static
// router.get('/stylesheets/style.css', function (req, res) {
//   res.sendFile(path.join(__dirname, '/../public/stylesheets/style.css'));
// });

module.exports = router;
