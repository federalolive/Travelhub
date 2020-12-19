const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const geoCoder = require('../utils/geocoder');

const PlaceSchema = new mongoose.Schema({
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
    module.exports = mongoose.model("map", logSchema);