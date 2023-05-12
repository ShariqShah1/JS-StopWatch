// Digital Clock Code //
var Hour = 0;
var Min = 0;
var Sec = 0;
var c = document.getElementById("Sec");
var b = document.getElementById("Min");
var a = document.getElementById("Hour");
var interval;
function start() {
  interval = setInterval(function () {
    Sec++;
    c.innerHTML = Sec;
    if (Sec == 60) {
      Min++;
      b.innerHTML = Min;
      Sec = 0;
    } else if (Min == 60) {
      Hour++;
      a.innerHTML = Hour;
      Min = 0;
    }
  }, 1000);
  document.getElementById("dis").disabled = true;
}

function pause() {
  document.getElementById("dis").disabled = false;
  clearInterval(interval);
}
function reset() {
  Sec = 0;
  Min = 0;
  Hour = 0;
  c.innerHTML = Sec;
  b.innerHTML = Min;
  a.innerHTML = Hour;
}
