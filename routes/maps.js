const router = require("express").Router();
const mapsCtrl = require('../controllers/maps')


router.get('/index', isLoggedIn, mapsCtrl.index)
router.get('/', isLoggedIn, mapsCtrl.new)
router.get('/maps', isLoggedIn, mapsCtrl.new)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router; 
