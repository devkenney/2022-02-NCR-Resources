const express = require('express');
const router = express.Router();
const TaskList = require('../models/TaskList');
const User = require('../models/User');

// Index



// Delete



// Update



// Create

router.post('/', validate, (req, res) => {
  TaskList.create({
    name: req.body.name
  }, (error, createdTaskList) => {
    if (error) {
      console.error(error);
      res.status(400).json({
        error: error
      });
    } else {
      User.updateOne({
        name: req.name
      }, {
        $push: {
          taskLists: {
            _id: createdTaskList._id
          }
        }
      }, (error, updateData) => {
        if (error) {
          console.error(error);
          res.status(404).json({
            error: error
          });
        } else {
          console.log('success!')
          res.status(201).json({
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