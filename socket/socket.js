module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log('this is the socket id', socket.id)
    socket.on('pollvote', function(data) {
      console.log('data', data)
      io.emit('newvotes')
    })
  })
}
