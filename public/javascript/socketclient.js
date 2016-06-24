<<<<<<< HEAD
var socket = io()
=======
var socket = io()
socket.on('newvotes', function(data) {
  //update vote count.. TODO!!!
  $('#voteCount_' + data.id).html(data.votes)
  sort()
})

function updateVote(id, amount){
  socket.emit('pollvote', {
    id: id,
    amount: amount
  })
}

updateVote(1, 1)
>>>>>>> 6e3de0ffb8f97b80089abc81151379c9e581123f
