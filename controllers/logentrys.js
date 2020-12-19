const LogEntry = require('../models/logentry')
const axios = require('axios')

module.exports = {
    new: newLogEntry,
}

function newLogEntry(req, res) {
    res.render("logentrys/new", {
      title: "Log Entries",
      user: req.user,
      results: null
    })
  }
