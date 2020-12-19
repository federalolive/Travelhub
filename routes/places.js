const router = require("express").Router();
const placesCtrl = require('../controllers/places')

router.get('/index', isLoggedIn, placesCtrl.index)
router.get('/', isLoggedIn, placesCtrl.new)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;