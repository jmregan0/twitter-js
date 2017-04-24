const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');

//Middleware

app.use(morgan('dev'));

/*
app.use(function(req, res, next){
  console.log(chalk.red(req.method, req.path))
  next();
})
*/

app.get('/', function(req, res){
  res.send("Welcome to our server!")
  //Extra Credit: Log status code
})

app.get('/news', function(req, res){
  res.send("Page does not exist");
})

app.listen(3000, function(){
  console.log("listening on port 3000");
})
