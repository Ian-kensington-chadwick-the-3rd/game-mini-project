var button = document.querySelector("#btn")





button.addEventListener("click", function (event)); {







}
function countdown() {
    var timeLeft = 5;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    //We then declare timeInterval and assign it the value of setInterval(). Here, we will update the text in timerEl at an interval of 1000 ms, or 1 second. With each interval, we decrement the value of timeLeft. If timeLeft is equal to 0, we use clearInterval() to stop timeInterval().
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      // timeLeft--;
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }