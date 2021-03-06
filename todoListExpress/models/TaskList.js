const { Schema } = require('mongoose')
const mongoose = require('mongoose');

const taskListSchema = new Schema ({
  name: { type: String, required: true },
  tasks: [
    {
      title: { type: String, required: true },
      content: { type: String, required: true },
      completed: { type: Boolean, default: false }
    }
  ],
  user: { type: Schema.Types.ObjectId, ref: 'User' }
},
 {
  timestamps: true
 })

const TaskList = mongoose.model('TaskList', taskListSchema);

module.exports = TaskList;