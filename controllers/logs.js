const Log = require('../models/log')
const axios = require('axios')

module.exports = {
    new: newLog,
    index,
    create,
    show,
    delete: deleteLog,
    addToLog,
    edit
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
    Log.create(req.body) 
    .then((log) => res.redirect(`/logs/${log._id}`))
  }
    

function show(req, res) {
  Log.findById(req.params.id)
  .populate('comment')
  .then((log) => {
    res.render('logs/show', {title: 'Log Entry', log, user: req.user})
  })
  .catch((err) => {
    console.log(err)
  })
}

function deleteLog(req, res){
  Log.findByIdAndDelete(req.params.id, function(err, log){
      res.redirect('/logs')
  })
}

function addToLog(req, res) {
  Log.findById(req.params.id, function(err, log) {
    log.cast.push(req.body.performerId)
    log.save(function(err) {
      res.redirect(`/logs/${log._id}`)
    })
  })
}

function edit(req, res) {
  Log.findById(req.params.id)
  .then((log) => {
    res.render('logs/edit', {title: 'Edit Log Entry', user: req.user, collection})
    })
  }

