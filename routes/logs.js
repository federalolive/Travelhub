const router = require("express").Router();
const logsCtrl = require('../controllers/logs')

router.get('/index', isLoggedIn, logsCtrl.index)
router.get('/', isLoggedIn, logsCtrl.new)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router;