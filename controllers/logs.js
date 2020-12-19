const Log = require('../models/log')
const axios = require('axios')

module.exports = {
    new: newLog,
    index,
}

function newLog(req, res) {
    res.render("logs/new", {
      title: "New Log Entry",
      user: req.user,
      results: null
    })
  }

  function index(req, res) {
    Log.find({ favoritedBy: req.user._id })
    .then((logs) => {
      res.render('logs', {
        title: "Travel Logs",
        user: req.user,
        logs
      })
    })
  }
