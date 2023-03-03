$(document).ready(function() {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var timer;

  function startTimer() {
    timer = setInterval(function() {
      seconds++;
      if (seconds == 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes == 60) {
        hours++;
        minutes = 0;
      }
      $(".hours").text(hours < 10 ? "0" + hours : hours);
      $(".minutes").text(minutes < 10 ? "0" + minutes : minutes);
      $(".seconds").text(seconds < 10 ? "0" + seconds : seconds);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    $(".hours").text("00");
    $(".minutes").text("00");
    $(".seconds").text("00");
  }

  $(".start").click(function() {
    startTimer();
  });

  $(".stop").click(function() {
    stopTimer();
  });

  $(".reset").click(function() {
    resetTimer();
  });
});