var socket = io()

function updateVote(id, amount){
  socket.emit('pollvote', {
    id: id,
    amount: amount
  })
  //update vote count.. TODO!!!
}
