const mongoose = require("mongoose");
const Schema = mongoose.Schema;

requiredString = {
    type: {String, 
    required: true,
};

const LogEntrySchema = new Schema ({
    title: requiredString,
})

module.exports = mongoose.model('LogEntry', LogEntrySchema)