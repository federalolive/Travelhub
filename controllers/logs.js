const Log = require('../models/log')
const axios = require('axios')

module.exports = {
    new: newLog,
    index,
    create,
    show,
    delete: deleteLog
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
  User.findById(req.params.id)
  .then((userInfo) => {
    Log.find(userInfo._id)
    .then((logs) => {
      res.render("users/show", {
        title: "User Details",
        userInfo,
        user: req.user,
        logs
      })
    })
  })
}

function deleteLog(req, res){
  Log.findByIdAndDelete(req.params.id, function(err, log){
      res.redirect('/logs')
  })
}