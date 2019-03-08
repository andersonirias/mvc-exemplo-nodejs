var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('./src/public'));

consign()
  .include('src/routes')
  .then('src/models')
  .then('src/controllers')
  .into(app);

module.exports = app;

