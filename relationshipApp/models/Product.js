const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const productSchema = new Schema ({
  name: { type: String, required: true, unique: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  favoriteUsers: [
    { type: Schema.Types.ObjectId, ref: 'User' }
  ],
  extraInfo: { type: Schema.Types.ObjectId, ref: 'Extra' }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;