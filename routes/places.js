const router = require("express").Router();
const placesCtrl = require('../controllers/places')

router.get('/', isLoggedIn, placesCtrl.index)
router.get('/places', isLoggedIn, placesCtrl.getPlace)
router.post('/places', isLoggedIn, placesCtrl.addPlace)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;