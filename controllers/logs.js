const Log = require('../models/log')
const axios = require('axios')

module.exports = {
    index,
    new: newMarker,
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



