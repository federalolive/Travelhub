const router = require("express").Router();
const logsCtrl = require('../controllers/logs')

router.get('/', isLoggedIn, logsCtrl.index)

module.exports = router;