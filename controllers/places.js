const Place = require('../models/place')
const axios = require('axios')
const geocoder = require('geocoder')

module.exports = {
    index,
    getPlace,
    addPlace,
    getPlaces
    
}

function index(req, res) {
    Place.find({ favoritedBy: req.user._id })
    .then((places) => {
      res.render('places/index', {
        title: "Travel Log",
        user: req.user,
        places
      })
    })
  }

  async function getPlace(req, res, next) {
    try {
      const place = await Place.create(req.body);

      return res.status(200).json({
          success: true,
          data: place
      });
  } catch (err) {
      console.log(err);
      res.status(500);
  }
};


async function addPlace(req, res, next) {
  try {
    const place = await Place.create(req.body);

    return res.status(200).json({
        success: true,
        data: place
    });
} catch (err) {
    console.log(err);
    res.status(500);
  }
};
 
async function getPlaces(req, res, next) {
  try {
    const places = await Place.find();

    return res.status(200).json({
        succes: true,
        count: places.length,
        data: places
    })
} catch (err) {
    console.log(err);
    res.status(500);
  }
}

