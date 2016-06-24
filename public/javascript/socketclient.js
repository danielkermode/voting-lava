var socket = io()

socket.on('newvotes', function(data) {
  //update vote count.. TODO!!!
  console.log(data)
  $('#' + data.id).innerHTML = data.votes
})

function updateVote(id, amount){
  socket.emit('pollvote', {
    id: id,
    amount: amount
  })
}

updateVote(1, 1)
