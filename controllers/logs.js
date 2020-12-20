const Log = require('../models/log')
const axios = require('axios')

module.exports = {
    new: newLog,
    index,
    create
}

function newLog(req, res) {
    res.render("logs/new", {
      title: "New Log Entry",
      user: req.user,
      results: null
    })
  }

  function index(req, res) {
    Log.find({ favoritedBy: req.user._id })
    .then((logs) => {
      res.render('logs/index', {
        title: "Travel Logs",
        user: req.user,
        logs
      })
    })
  }

  function create(req, res){
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    const log = new Log(req.body)
    log.save(function(err) {
    if (err){ return res.redirect('/logs/new')} 
    res.redirect(`/logs/${log._id}`)
  })
}
