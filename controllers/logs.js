const Game = require('../models/game')
const axios = require('axios')

module.exports = {
    index,
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



