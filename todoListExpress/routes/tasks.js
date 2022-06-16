const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Index

router.get('/', (req, res) => {
  Task.find({}, (error, allTasks) => {
    if (error) {
      console.error(error);
      res.status(400).json({
        error: error
      });
    } else {
      console.log('Successfully found all the tasks!');
      res.status(200).json({
        tasks: allTasks
      });
    }
  });
});

// Delete

router.delete('/:id', (req, res) => {
  Task.deleteOne({
    _id: req.params.id
  }, (error, deletedTask) => {
    if (error) {
      console.error(error);
      res.status(404).json({
        error: error
      });
    } else {
      console.log('Successfully deleted!')
      res.status(204).json({})
    }
  });
});

// Update

router.put('/:id', (req, res) => {
  Task.updateOne({
    _id: req.params.id
  },
    req.body,
    (error, updateData) => {
      if (error) {
        console.error(error);
        res.status(404).json({
          error: error
        });
      } else {
        console.log('Successfully updated!');
        res.status(200).json({
          data: updateData
        });
      }
    });
});

// Create

router.post('/', (req, res) => {
  Task.create(req.body, (error, createdTask) => {
    if (error) {
      console.error(error);
      res.status(400).json({
        error: error
      });
    } else {
      console.log('Successfully created!')
      res.status(201).json({
        task: createdTask
      });
    }
  });
});

// Show



module.exports = router;