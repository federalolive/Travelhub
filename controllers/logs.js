const Log = require('../models/log')
const axios = require('axios')

module.exports = {
    new: newLog,
    index,
    create,
    show
}

function newLog(req, res) {
    res.render("logs/new", {
      title: "New Log Entry",
      user: req.user,
      results: null
    })
  }

  function index(req, res) {
    Log.find({})
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
    console.log(log)
    log.save(function(err) {
    if (err){ console.log(err) }
    res.redirect(`/logs/${log._id}`)
  })
}

    function show(req, res) {
  Log.findById(req.params.id,  function(err, log) {
    console.log(log)
    res.render('logs/show', {title: 'Log Entry', user:req.user, log})
  })
}