var time = document.getElementById('time').innerHTML
var pollTime = time + 12000
setInterval(ticker, 1000)
function ticker() {
  console.log(pollTime - Date.now())
  $('#tick').html(pollTime - Date.now())
}
