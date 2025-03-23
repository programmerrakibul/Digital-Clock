setInterval(showTime, 1000);

function showTime() {
  var hours, mins, secs, showTime, clockTime;
  let date = new Date();
  hours = date.getHours();
  mins = date.getMinutes();
  secs = date.getSeconds();
  let ampm = document.getElementById("am-pm");
  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  if (hours > 12) {
    hours -= 12;
    ampm.innerHTML = "PM";
  } else {
    hours;
    ampm.innerHTML = "AM";
  }

  showTime = hours + ":" + mins + ":" + secs;
  clockTime = document.querySelector("#clock-time");
  clockTime.innerHTML = showTime;

  let clockDate = document.getElementById("clock-date");
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekDays[date.getDay()];
  clockDate.innerHTML = day;
}

showTime();
