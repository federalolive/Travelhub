const router = require("express").Router();
const logsCtrl = require('../controllers/logs')

router.get('/new', isLoggedIn, logsCtrl.new)
router.get('/', isLoggedIn, logsCtrl.index)
router.post('/logs', isLoggedIn, logsCtrl.create)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router; 