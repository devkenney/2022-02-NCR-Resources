const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT_ROUNDS;
const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jwt-simple');
const { validate } = require('../middlewares');

// Index



// Delete



// Update

// Route to Add a list

router.put('/newList', validate, (req, res) => {
  User.updateOne({
    name: req.name // gets the req.name from the validate middleware and uses it to find the correct user
  }, {
    $push: {
      taskLists: {
        name: req.body.listName // pushes a new task list into the correct array using the "listName" key from req.body
      }
    }
  }, (error, updateData) => {
    if (error) {
      console.error(error);
      res.status(404).json({ // mongoose error handling
        error: error
      });
    } else {
      console.log('Successfully added a task list!');
      res.status(200).json({
        updateData: updateData // sends back the update data from the mongoose action
      });
    }
  });
});

// Create

router.post('/', async (req, res) => {

  const salt = await bcrypt.genSalt(Number(saltRounds)); // creates the "salt" which is kind of like a key for bcrypt to use

  let hashedPass = await bcrypt.hash(req.body.password, salt); // hashes the password that was input by the user so that the raw one doesn't make it to the database
  

  User.create({
    name: req.body.name,
    password: hashedPass
  }, (error, createdUser) => { // creates a new user using the hashed password and the name the user put in on the frontend
    if (error) {
      console.error(error);
      res.status(400).json({ // if an error occured send a 400 response
        error: error
      });
    } else {
      console.log('Successfully created a user!');
      let encoded = jwt.encode({ // if no errors, encode the username and hashed password to a jwt token using the JWT_SECRET from our .env file
        password: createdUser.password,
        name: createdUser.name
      }, jwtSecret);

      res.status(201).json({
        jwtToken: encoded // sends a 201 with a response of the token we created
      });
    }
  });
});

// Show

router.get('/show', validate, (req, res) => {
  User.findOne({ // finds one user using the response from our "validate" middleware that it got from the token that was provided
    name: req.name
  }, (error, foundUser) => { // this makes sure that the user asking for the data only receives their own data back
    if (error) {
      console.error(error);
      res.status(404).json({ // mongoose error handling
        error: error
      });
    } else {
      console.log('successfully found user!');
      res.status(200).json({
        user: foundUser // sends back the user info and a 200 status code
      });
    }
  });
});

module.exports = router;