const express = require('express');
const { mongo, default: mongoose } = require('mongoose');
const router = express.Router();
const Product = require('../models/Product');
const User = require('../models/User');

// Index

router.get('/', (req, res) => {
  Product.find({}, (error, allProducts) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.status(200).json({
        message: 'Success!',
        products: allProducts
      });
    }
  });
});

// Delete



// Update

// Create

router.post('/', (req, res) => {
  Product.create(req.body, (error, createdProduct) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {

      User.updateOne({
        _id: req.body.owner
      }, {
        $push: {
          soldProducts: createdProduct._id
        }
      }, (error, updatedUser) => {
        if (error) {
          console.error(error);
          res.json({
            error: 'an error has occurred'
          });
        } else {
          console.log('success!')
          res.status(201).json({
            message: 'Successfully created product and added it to owner list',
            product: createdProduct
          });
        }
      });
    }
  });
});

// Show

router.get('/:id', (req, res) => {
  Product.findOne({
    _id: req.params.id
  }, (error, foundProduct) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.status(200).json({
        message: 'Success',
        product: foundProduct
      });
    }
  });
});

module.exports = router;