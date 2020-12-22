
const Log = require('../models/log')

module.exports = {
  create
}

function create(req, res) {
  Log.findById(req.params.id)
  .then((log) => {
    log.comments.push(req.body)
    log.save()
    .then(() => {
      res.redirect(`/logs/${log.slug}`)
    })
  })
}