const Place = require('../models/place');

module.exports = {
  index, 
  addPlace,
  getPlace
}

function index(req, res) {
  Place.find({})
  .then((logs) => {
    res.render('places/index', {
      title: "Ahabs-white-wahle",
      user: req.user,
      logs
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

async function getPlace(req, res, next) {
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
};