const { Schema } = require('mongoose')
const mongoose = require('mongoose');

const extraSchema = new Schema ({
  image: { type: String },
  color: { type: String },
  weight: { type: Number },
  parent: { type: Schema.Types.ObjectId, ref: 'Product'}
})

const Extra = mongoose.model('Extra', extraSchema);

module.exports = Extra;