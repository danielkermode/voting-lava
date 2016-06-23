var progress = setInterval(function () {
    var $bar = $("#bar")

    if ($bar.width() >= 600) {
        clearInterval(progress)
    } else {
        $bar.width($bar.width() + 60)
    }
    $bar.text($bar.width() / 6 + "%")
}, 800)

$(window).load(function() {
  $("#bar").width(600)
  $(".loader-container").fadeOut(1250)
  setInterval(function() {$(".loader").css('display', 'none')}, 1000)
  setInterval(function() {$(".content").css('display', 'table')}, 1000)
})
