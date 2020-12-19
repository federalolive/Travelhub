const Place = require('../models/place')
const axios = require('axios')

module.exports = {
    index,
    
    addPlace,
    
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
 

