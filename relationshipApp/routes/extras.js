const express = require('express');
const router = express.Router();
const Extra = require('../models/Extra');
const Product = require('../models/Product');

// Index

router.get('/', (req, res) => {
  Extra.find({}, (error, allExtras) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.status(200).json({
        message: 'Success',
        extras: allExtras
      });
    }
  });
});

// Delete



// Update



// Create

router.post('/', (req, res) => {
  Extra.create(req.body, (error, createdExtra) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      Product.updateOne({
        _id: req.body.parent
      }, {
        extraInfo: createdExtra._id
      }, (error, updatedProduct) => {
        if (error) {
          console.error(error);
          res.json({
            error: 'an error has occurred'
          });
        } else {
          console.log('success!')
          res.status(200).json({
            message: 'Successfully created',
            extra: createdExtra
          });
        }
      });
    }
  });
});

// Show

router.get('/:id', (req, res) => {
  Extra.findOne({
    _id: req.params.id
  }, (error, foundExtra) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.status(200).json({
        message: "Success",
        extra: foundExtra
      });
    }
  });
});

module.exports = router;