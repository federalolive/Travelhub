const Place = require('../models/place')
const axios = require('axios')

module.exports = {
    index,
    new: newPlace,
    
}

function index(req, res) {
    Log.find({ favoritedBy: req.user._id })
    .then((places) => {
      res.render('places/index', {
        title: "Travel Log",
        user: req.user,
        places
      })
    })
  }

function newPlace(req, res) {
  Place.create(req.body, function(err, place) {
    res.redirect('/places') 
  })
}

