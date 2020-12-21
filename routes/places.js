const express = require('express');
const router = express.Router();
const placesCtrl = require('../controllers/places');


router.get('/', isLoggedIn, placesCtrl.index)
router.get('/places/:id', isLoggedIn, placesCtrl.getPlace)
router.post('/places', isLoggedIn, placesCtrl.addPlace)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;