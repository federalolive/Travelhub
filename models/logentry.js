const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logEntrySchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: String,
    comments: String,
    image: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    visitDate: {
      required: true,
      type: Date,
    },
  }, {
    timestamps: true,
  });

module.exports = mongoose.model('LogEntry', logEntrySchema)