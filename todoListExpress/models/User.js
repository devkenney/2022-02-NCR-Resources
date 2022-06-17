const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const User = new Schema ({
  name: { type: String, required: true, unique: true },
  taskLists: [
    { type: Schema.Types.ObjectId, ref: 'TaskList' }
  ],
  password: { type: String, required: true }
}, {
  timestamps: true
});

const userSchema = mongoose.model('User', User);

module.exports = userSchema;