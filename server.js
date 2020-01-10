
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Category = require('./models/category');
var app = express();

mongoose.connect(config.database, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var apiRoutes = require('./api/api');
app.use('/api', apiRoutes);

app.listen(config.port, function(err) {
  if (err) throw err;
  console.log("Server is Running");
});
