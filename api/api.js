var express = require('express');
var app = express();
var router = require('express').Router();
var async = require('async');
var Category = require('../models/category');
var Product = require('../models/product');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

router.post('/add-category', function(req, res, next) {
  var category = new Category();
  category.name = req.body.name;

  category.save(function(err) {
    if (err) return next(err);
    res.send('Successfully added a category');
  });
})


router.post('/:name/add-product', function(req, res, next) {
  async.waterfall([
    function(callback) {
      Category.findOne({
        name: req.params.name
      }, function(err, category) {
        if (err) return next(err);
        callback(null, category);
      });
    },

    function(category, callback) {
      var product = new Product();
      product.category = category._id;
      product.model_name = req.body.model_name
      product.price = req.body.price
      product.description = req.body.description
      product.color = req.body.color
      product.length = req.body.length
      product.storage = req.body.storage
      product.save();
    }

  ])
  res.send('Successfully added a product');
})


router.get('/list', function(req, res) {
  var query = {};

  if (Object.keys(req.query).length !== 0) {
    if (req.query.search) {
      query.model_name = req.query.search;
      if ("model_name" in query) {
        if (req.query.storage) query.storage = req.query.storage;
        if (req.query.color) query.color = req.query.color;
      }
    } else {
      res.send("Please input a product name you wish to filter")
      return;
    }
  }
  Product.find(query, function(err, products) {
    res.send(products)
  })
})

router.get('/details/:id', function(req,res){
  Product.findById(req.params.id,function(err, product) {
    category = product.category;
    Product.find({category},function(err, product) {
    res.send(product)
    })
})
})


module.exports = router;