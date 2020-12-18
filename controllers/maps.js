const Map = require('../models/map')
const axios = require('axios')

module.exports = {
    index,
    new: newMarker,
    new: newLog,
    
}

function index(req, res) {
    Log.find({ favoritedBy: req.user._id, user : req.user })
    .then((maps) => {
      res.render('maps/', {
        title: "Travel Log",
        user: req.user,
        maps
      })
    })
  }

  function newMarker(coords) {
    client.geocodeReverse({ latitude: coords.lat, longitude: coords.lng }, (err, res) => {
      let placeName = res.features[0].place_name;
      let marker = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(map);
    });
  }

  function newLog(req, res) {
    res.render("maps/", {
      title: "Show Logs",
      user: req.user,
      results: null
    })
  }
