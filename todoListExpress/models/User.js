const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const User = new Schema ({
  name: { type: String, required: true, unique: true },
  taskLists: [
    {
      name: { type: String, required: true },
      tasks: [
        { type: Schema.Types.ObjectId, ref: 'Task'}
      ]
    }
  ],
  password: { type: String, required: true }
}, {
  timestamps: true
});

const userSchema = mongoose.model('User', User);

module.exports = userSchema;