const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requiredNumber = {
  type: Number,
  required: true,
};

const logSchema = new Schema({
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90,
  },
  longitude: {
    ...requiredNumber,
    min: -180,
    max: 180,
  },
}, {
  timestamps: true,
});

    module.exports = mongoose.model("map", logSchema);