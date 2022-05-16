function main() {
  const setTime = document.getElementById("duration");
  const upTime = document.getElementById("up");
  const downTime = document.getElementById("down");
  const playTime = document.getElementById("play");
  const pauseTime = document.getElementById("pause");
  const stopTime = document.getElementById("stop");
  const time = document.getElementById("time");

  let minutes = parseInt(setTime.textContent);
  let seconds = 0;

  // UP key
  function up() {
    if (minutes == 59) {
      minutes = 1;
    } else {
      minutes++;
      setTime.textContent = minutes;
    }
  }

  // Down key
  function down() {
    if (minutes == 1) {
      minutes = 59;
    } else {
      minutes--;
      setTime.textContent = minutes;
    }
  }

  // Stop key
  function stop() {
    minutes = 25;
    seconds = 0;
    setTime.textContent = minutes;
    time.textContent = `${minutes}:00`;
    upTime.addEventListener("click", up);
    downTime.addEventListener("click", down);
    playTime.addEventListener("click", play);
  }

  // Play key
  function play() {
    upTime.removeEventListener("click", up);
    downTime.removeEventListener("click", down);
    playTime.removeEventListener("click", play);
    stopTime.removeEventListener("click", stop);
    pauseTime.addEventListener("click", pause);

    function timer() {
      if (seconds !== 0) {
        seconds--;
        time.textContent = `${minutes}:${seconds}`;
      } else if (minutes !== 0 && seconds == 0) {
        seconds = 59;
        minutes--;
      } else {
        time.textContent = `Time's Up !`;

        clearInterval(timing);
        stopTime.addEventListener("click", stop);
      }
    }

    timer();

    const timing = setInterval(timer, 1000);

    // Pause key
    function pause() {
      clearInterval(timing);
      pauseTime.removeEventListener("click", pause);
      playTime.addEventListener("click", play);
      stopTime.addEventListener("click", stop);
    }
  }

  upTime.addEventListener("click", up);
  downTime.addEventListener("click", down);
  playTime.addEventListener("click", play);
  stopTime.addEventListener("click", stop);
}

main();
