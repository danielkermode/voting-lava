module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log('this is the socket id', socket.id)
  })

  io.on('pollvote', function(socket) {
    io.emit('newvotes')
  })
}
