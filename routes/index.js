const express = require('express');
const path = require('path');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:id', function(req, res){
  var id = parseInt(req.params.id);
  var list = tweetBank.find({id: id});
  console.log(list);
  res.render('index', {tweets: list});
})

// acessing style.css without express.static
// router.get('/stylesheets/style.css', function (req, res) {
//   res.sendFile(path.join(__dirname, '/../public/stylesheets/style.css'));
// });

module.exports = router;
