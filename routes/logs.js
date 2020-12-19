const router = require("express").Router();
const logsCtrl = require('../controllers/logs')

router.get('/new', isLoggedIn, logsCtrl.new)
router.get('/', isLoggedIn, logsCtrl.index)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router; 