"use strict";

var secondArrow = document.querySelector(".s"),
    minuteArrow = document.querySelector(".m"),
    hourArrow = document.querySelector(".h"),
    hoursBox = document.querySelector(".hours"),
    minutesBox = document.querySelector(".minutes"),
    TimerStartBTN = document.querySelector(".stopwatch__btn"),
    TimerHours = document.querySelector(".stopwatch__hours"),
    TimerMinutes = document.querySelector(".stopwatch__minutes"),
    TimerSecounds = document.querySelector(".stopwatch__seconds"); // new Date() - встроенный глобальный объект в javascript который дает информацию о дате и времени

function start() {
  var time = new Date(),
      seconds = time.getSeconds(),
      minutes = time.getMinutes(),
      hours = time.getHours();
  secondArrow.style = "transform: rotate(".concat(seconds * 6, "deg)");
  minuteArrow.style = "transform: rotate(".concat(minutes * 6, "deg)");
  hourArrow.style = "transform: rotate(".concat(hours * 30, "deg)");
  hoursBox.innerHTML = hours < 10 ? "0" + hours : hours;
  minutesBox.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  setTimeout(function () {
    return start();
  }, 1000);
}

start(); // рекурсия - это когда функция вызывает саму себя внутри себя
// setTimeout() - это встроенная функция которая позволяет добавить задержку
// let i = 1;
// function loop() {
//     if(i < 100) {
//         console.log(i);
//         i++
//         setTimeout(() => loop(), 1000)
//     }
// }
// loop()

var links = document.querySelectorAll(".tabsItem"),
    tabs = document.querySelectorAll(".tabsContentItem");
links.forEach(function (el, i) {
  el.addEventListener("click", function () {
    removeActive();
    el.classList.add("active");
    tabs[i].classList.add("active");
  });
});

function removeActive() {
  links.forEach(function (el, i) {
    el.classList.remove("active");
    tabs[i].classList.remove("active");
  });
}

var TimerSecoundsValue = 0;
var TimerMinutesValue = 0;
var TimerHoursValue = 0;
var TimerState; // 2 chapter

function Timer() {
  TimerSecoundsValue++;
  TimerSecounds.innerHTML = TimerSecoundsValue;

  switch (true) {
    case TimerSecoundsValue > 59:
      TimerMinutesValue++;
      TimerMinutes.innerHTML = TimerMinutesValue;
      TimerSecoundsValue = 0;
      break;

    case TimerMinutesValue > 59:
      TimerHoursValue++;
      TimerHours.innerHTML = TimerHoursValue;
      TimerMinutesValue = 0;
      break;
  }

  TimerState = setTimeout(function () {
    return Timer();
  }, 1); // } else  if (TimerState === true){
  //   TimerStartBTN.innerHTML = "START";
  //   TimerState = false;
  //   TimerSecoundsValue = 0
  //   TimerMinutesValue = 0
  //   TimerMinutesValue = 0
  //   TimerHours.innerHTML = TimerHoursValue;
  //   TimerMinutes.innerHTML = TimerMinutesValue;
  //   TimerSecounds.innerHTML = TimerSecoundsValue;
  // }
}

var timerStarted = false;
TimerStartBTN.addEventListener("click", function () {
  if (!timerStarted) {
    timerStarted = true;
    TimerStartBTN.innerHTML = "STOP";
    Timer();
  } else {
    timerStarted = false;
    TimerStartBTN.innerHTML = "START";
    clearTimeout(TimerState);
    TimerMinutesValue = 0;
    TimerSecoundsValue = 0;
    TimerHoursValue = 0;
    TimerHours.innerHTML = TimerHoursValue;
    TimerMinutes.innerHTML = TimerMinutesValue;
    TimerSecounds.innerHTML = TimerSecoundsValue;
  }
}); // это какой то кошмар...