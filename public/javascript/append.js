var numOfChoices = 2

function addOption() {
  numOfChoices++
  $('.choice-holder').append('<div class="form-group"><label for="entry' + numOfChoices + '"class="col-sm-2 control-label">Option ' + numOfChoices + '</label><input type="text" class="form-control" name="name" id="entry' + numOfChoices + '"placeholder="Please enter a choice"></div>')
}

function removeOption() {
  if (numOfChoices > 2) {
    numOfChoices--
    document.querySelector('.choice-holder').lastChild.remove()
  } else {
    $.toaster({ priority : 'warning', title : 'Not enough entries', message : "It isn't a poll if there aren't any choices!"});
  }
}

window.onkeyup = function(e) {
  var key = e.keyCode ? e.keyCode : e.which
  if (key == 187) {
    $('input').blur()
    addOption()
  }
  if (key == 189) {
    $('input').blur()
    removeOption()
  }
}
