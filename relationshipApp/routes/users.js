const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');

// Index

router.get('/', (req, res) => {
  User.find({}, (error, allUsers) => {
    if (error) {
      console.error(error);
      res.status(400).json({
        error: 'an error has occurred'
      });
    } else {
      console.log('successfully found the users!')
      res.status(200).json({
        message: 'Success!',
        users: allUsers
      });
    }
  });
});

// Delete



// Update

router.put('/addFavorite/:product/:user', (req, res) => {
  User.updateOne({
    _id: req.params.user
  }, {
    $push: {
      favorites: req.params.product
    }
  }, (error, updatedUser) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      Product.updateOne({
        _id: req.params.product
      }, {
        $push: {
          favoriteUsers: req.params.user
        }
      }, (error, updatedProduct) => {
        if (error) {
          console.error(error);
          res.json({
            error: 'an error has occurred'
          });
        } else {
          console.log('Successfully added favorite to user and user to favorites list on product');
          res.status(200).json({
            message: "SUCCESS WOOOOOOOOOOOOOOOOOOOOO"
          })
        }
      });
    }
  });
});

// Create

router.post('/', (req, res) => {
  console.log(req.body);
  User.create(req.body, (error, createdUser) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.status(200).json({
        message: 'Success',
        user: createdUser
      });
    }
  });
});

// Show

router.get('/:id', (req, res) => {
  User.findOne({
    _id: req.params.id
  }, (error, foundUser) => {
    if (error) {
      console.error(error);
      res.json({
        error: 'an error has occurred'
      });
    } else {
      console.log('success!')
      res.status(200).json({
        message: 'Success',
        user: foundUser
      });
    }
  });
});

module.exports = router;