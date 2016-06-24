var socket = io()

function updateVote(id, amount){
  socket.emit('pollvote', {
    id: id,
    amount: amount
  })
  //update vote count.. TODO!!!
  var current = $('#' + id).innerHTML
  $('#' + id).innerHTML = parseInt(current) + amount
}

updateVote(1, 1)
