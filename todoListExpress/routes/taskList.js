const express = require('express');
const router = express.Router();
const { validate } = require('../middlewares')
const TaskList = require('../models/TaskList');
const User = require('../models/User');

// Index



// Delete



// Update

router.put('/addTask/:id', validate, (req, res) => {
  TaskList.updateOne({ // updates ONE TaskList
    _id: req.params.id  // finds the TaskList with the id specified in the URL
  }, {
    $push: {
      tasks: {
        title: req.body.title,
        content: req.body.content // pushes a new task into the tasks array
      }
    }
  }, (error, updateData) => {
    if (error) {
      console.error(error);
      res.status(404).json({ // error handling magic
        error: error
      });
    } else {
      console.log('success!')
      res.status(200).json({
        updateData: updateData // sends back a status of 200 with the update data
      });
    }
  });
});

// Create

router.post('/', validate, (req, res) => {
  TaskList.create({ // Creates a new TaskList
    name: req.body.name // uses the name given in the body
  }, (error, createdTaskList) => {
    if (error) {
      console.error(error);
      res.status(400).json({ // error handling magic
        error: error
      });
    } else {
      User.updateOne({ // updates the user that is currently logged in
        name: req.name // gets the name of the user from the validate middleware
      }, {
        $push: {
          taskLists: {
            _id: createdTaskList._id // pushes the id of the newly created TaskList into the taskLists array of the User
          }
        }
      }, (error, updateData) => {
        if (error) {
          console.error(error);
          res.status(404).json({ // error handling magic
            error: error
          });
        } else {
          console.log('success!')
          res.status(201).json({ // sends back a 201 with the new taskList data and the data from the update action
            taskList: createdTaskList,
            updateData: updateData
          });
        }
      });
    }
  });
});

// Show



module.exports = router;