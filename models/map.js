const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;