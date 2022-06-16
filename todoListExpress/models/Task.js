const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const taskSchema = new Schema ({
  title: { type: String, required: true },
  content: { type: String, required: true },
  completed: { type: Boolean, default: false }
}, {
  timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;