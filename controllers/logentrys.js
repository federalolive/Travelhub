const LogEntry = require('../models/logentry')
const axios = require('axios')

module.exports = {
    new: newLogEntry,
}

function newLogEntry(req, res) {
    res.render("logentrys/new", {
      title: "New Log Entry",
      user: req.user,
      results: null
    })
  }
