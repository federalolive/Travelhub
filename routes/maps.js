const router = require("express").Router();
const mapsCtrl = require('../controllers/maps')
const logsCtrl = require('../controllers/logs')

router.get('/index', isLoggedIn, mapsCtrl.index)
router.get('/', isLoggedIn, mapsCtrl.new)
router.get('/maps', isLoggedIn, mapsCtrl.new)
router.post('/logs', isLoggedIn, logsCtrl.create)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router; 
