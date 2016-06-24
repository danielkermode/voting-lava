var dbConfig = require('../db-config')
var knex = dbConfig.knex
var config = dbConfig.config
var db = require('../lib/index')(knex)

module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log('this is the socket id', socket.id)
    socket.on('pollvote', function(data) {
      db.updateOptionVote(data.id, data.amount)
        .then(function(newCount) {
          io.emit('newvotes', {
            id: data.id,
            votes: newCount
          })
        })
        .catch(function(error) {
          console.log(error)
        })
    })
  })
}
