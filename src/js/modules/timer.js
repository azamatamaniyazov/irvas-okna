function timer(selector, deadline) {
  function getTimeCalculating(deadline) {
    const deadTime = Date.parse(deadline) - Date.now(),
      days = Math.floor(deadTime / (1000 * 60 * 60 * 24)),
      hours = Math.floor((deadTime / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((deadTime / (1000 * 60)) % 60),
      seconds = Math.floor((deadTime / 1000) % 60);

    return {
      total: deadTime,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else return num;
  }

  function setTimer(selector, deadline) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      setinterval = setInterval(updateTimer, 1000);

    updateTimer();

    function updateTimer() {
      const t = getTimeCalculating(deadline);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(setinterval);
        timer.innerHTML = "<h2>Акция закончена</h2>";
      }
    }
  }
  setTimer(selector, deadline);
}

export default timer;
