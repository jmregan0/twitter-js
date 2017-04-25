const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');

// for static files from public directory
app.use(express.static('public'));

app.use('/', routes);

//Middleware
app.use(morgan('dev'));

nunjucks.render('index.html', function (err, output) {
  // if (err) {throw err};
    console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});; // point nunjucks to the proper directory for templates



app.listen(3000, function(){
  console.log("listening on port 3000");
})
