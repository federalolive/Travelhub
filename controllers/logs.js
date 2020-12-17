const Log = require('../models/log')
const axios = require('axios')

module.exports = {
    index,
    new: newLog,
    
}

function index(req, res) {
    Log.find({ favoritedBy: req.user._id })
    .then((games) => {
      res.render('logs/index', {
        title: "Travel Log",
        user: req.user,
        games
      })
    })
  }

  function newLog(req, res) {
    res.render("logs/new", {
      title: "Show Logs",
      user: req.user,
      results: null
    })
  }

