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
  
  var trackW = 0;
  var trackL = 0;
  var incrementEl = document.querySelector("#wins");
  var decrementEl = document.querySelector("#loses");
  var trackElW = document.querySelector("#trackW");
  var trackElL = document.querySelector("#trackL");

  function setCounterTextW() {
    trackElW.textContent = trackW;
  }

  function setCounterTextL() {
    trackElL.textContent = trackL;
  }

  incrementEl.addEventListener("click", function(e) {
    console.log(e);
    trackW = trackW + 1;
    setCounterTextW();
  });

  decrementEl.addEventListener("click", function(a) {
    console.log(a);
    trackL = trackL + 1;
    setCounterTextL();
  });