var button = document.querySelector("#btn")
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
button.addEventListener("click", function() {
countdown()
});
function countdown() {
    var timeLeft = 10;
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
        displayMessage();
      }
    }, 1000);
  }
  function displayMessage() {
    var wordCount = 0;
    // for(var i = 0; i < words.length; i++){
    //   mainEl.textContent = words[i];
    // }
    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var msgInterval = setInterval(function () {
      // If there are no more words left in the message
      //We then declare a msgInterval variable and, as above, assign it the value of setInterval(). Within our callback, we check if our words array contains anything. If not, we clear the interval.
      if (words[wordCount] === undefined) {
        // Use `clearInterval()` to stop the timer
        clearInterval(msgInterval);
        mainEl.textContent = "DA DA DA!";
        //Otherwise, we update the textContent of mainEl with the string at words[wordCount]. With each interval, we increment wordCount. Each interval is set to the length of 1000 milliseconds.
      } else {
        // Display one word of the message
        mainEl.textContent = words[wordCount];
        wordCount++;
        //['Some', 'say', 'the', 'world', 'will', 'end', 'in', ':fire:,', 'Some', 'say', 'in', 'ice.', 'From', 'what', 'I’ve', 'tasted', 'of', 'desire,', 'I', 'hold', 'with', 'those', 'who', 'favor', 'fire.', 'But', 'if', 'it', 'had', 'to', 'perish', 'twice,', 'I', 'think', 'I', 'know', 'enough', 'of', 'hate.', 'To', 'say', 'that', 'for', 'destruction', 'ice,', 'Is', 'also', 'great,', 'And', 'would', 'suffice.']
  //(51)
      }
    }, 500);
  }
  // countdown();