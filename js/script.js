let secondArrow = document.querySelector(".s"),
  minuteArrow = document.querySelector(".m"),
  hourArrow = document.querySelector(".h"),
  hoursBox = document.querySelector(".hours"),
  minutesBox = document.querySelector(".minutes"),
  TimerStartBTN = document.querySelector(".stopwatch__btn"),
  TimerHours = document.querySelector(".stopwatch__hours"),
  TimerMinutes = document.querySelector(".stopwatch__minutes"),
  TimerSecounds = document.querySelector(".stopwatch__seconds");

// new Date() - встроенный глобальный объект в javascript который дает информацию о дате и времени

function start() {
  let time = new Date(),
    seconds = time.getSeconds(),
    minutes = time.getMinutes(),
    hours = time.getHours();

  secondArrow.style = `transform: rotate(${seconds * 6}deg)`;
  minuteArrow.style = `transform: rotate(${minutes * 6}deg)`;
  hourArrow.style = `transform: rotate(${hours * 30}deg)`;

  hoursBox.innerHTML = hours < 10 ? "0" + hours : hours;
  minutesBox.innerHTML = minutes < 10 ? "0" + minutes : minutes;

  setTimeout(() => start(), 1000);
}

start();

// рекурсия - это когда функция вызывает саму себя внутри себя
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

let links = document.querySelectorAll(".tabsItem"),
  tabs = document.querySelectorAll(".tabsContentItem");

links.forEach((el, i) => {
  el.addEventListener("click", () => {
    removeActive();
    el.classList.add("active");
    tabs[i].classList.add("active");
  });
});

function removeActive() {
  links.forEach((el, i) => {
    el.classList.remove("active");
    tabs[i].classList.remove("active");
  });
}

let TimerSecoundsValue = 0;
let TimerMinutesValue = 0;
let TimerHoursValue = 0;
let TimerState;
// 2 chapter

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

  TimerState = setTimeout(() => Timer(), 1000);

  // } else  if (TimerState === true){
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
let timerStarted = false;

TimerStartBTN.addEventListener("click", () => {
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
});
// это какой то кошмар...
