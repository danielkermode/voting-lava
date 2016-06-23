var numOfChoices = 2

function addOption() {
  numOfChoices++
  $('.choice-holder').append('<div class="form-group"><label for="entry' + numOfChoices + '"class="col-sm-2 control-label">Option ' + numOfChoices + '</label><input type="text" class="form-control" id="entry' + numOfChoices + '"placeholder="Please enter a choice"></div>')
}

function removeOption() {
  if (numOfChoices > 2) {
    numOfChoices--
    document.querySelector('.choice-holder').lastChild.remove()
  } else {
    console.log("Too few choices")
  }
}