const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  address: {
      type: String,
      required: [true, 'Please add an address']
  },
  createdAt: {
      type: Date,
      default: Date.now()
  }
});

module.exports = mongoose.model('Place', placeSchema)