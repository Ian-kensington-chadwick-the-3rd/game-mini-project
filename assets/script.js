var button = document.querySelector("#btn")
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
button.addEventListener("click", function() {
countdown()
});
function countdown() {
    var timeLeft = 100;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 100);
  }
  