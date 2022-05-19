const { Schema } = require('mongoose')
const mongoose = require('mongoose');

const userSchema = new Schema ({
  name: { type: String, required: true, unique: true },
  favorites: [
    { type: Schema.Types.ObjectId, ref: 'Product' }
  ],
  soldProducts: [
    { type: Schema.Types.ObjectId, ref: 'Product' }
  ]
})

const User = mongoose.model('User', userSchema);

module.exports = User;