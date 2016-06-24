var time = parseInt(document.getElementById('time').innerHTML)
var pollTime = time + 120000
setInterval(ticker, 1000)
function ticker() {
  var current = pollTime - parseInt(Date.now())
  if(current > 0) {
    currentDate = new Date(current)
    $('#timer').html(currentDate.getMinutes() + ':' + currentDate.getSeconds())
  } else {
    $('#timer').html(0)
  }
}
