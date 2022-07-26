import {render, setClass, removeClass, isClass} from './help-functions.js';
import {backGroundBlack} from './common.js';
import {alertsNode, alertInfoNode, alertWarningNode} from './alert.js';


const btnIncrementNode = document.querySelector("#buttonIncrement");
const btnClearNode = document.querySelector("#buttonClear");
const btnRestNode = document.querySelector("#buttonRest");
const countersFieldNode = document.querySelector("#countersField");
const fieldOfTimer = document.querySelector(".timer-alert__time");
const alertTimerNode = document.querySelector(".timer-alert");
const btnTimerStopeNode = document.querySelector("#buttonTimerStop");

let counter = 0;
let flag = false;

function clear() {
  counter = 0;
}

function increment() {
  counter++;
}



function isLittle() {
  if (counter <= 1) {
    return true;
  }
  return false;
}


btnIncrementNode.addEventListener("click", () => {
   increment();
   render(countersFieldNode, counter);
 });

 btnRestNode.addEventListener("click", () => {
   flag = true;
   setClass(backGroundBlack, "active");
   setClass(isClass(alertInfoNode, "alert_timer"), "active");
   timer();
 });

 btnClearNode.addEventListener("click", () => {
   if (isLittle()) {
     alert("Мало подходов");
   } else {
     clear();
     render(countersFieldNode, counter);
   }
 });
 
 
 btnTimerStopeNode.addEventListener("click", () => {
   flag = false;
   removeClass(backGroundBlack, "active");
   removeClass(isClass(alertsNode, "active"), "active");
   //   timer = null;
 });
 
 backGroundBlack.addEventListener("click", () => {
   // console.log()
   if (!(isClass(alertsNode, "active") === isClass(alertsNode, "alert_timer"))) {
     removeClass(backGroundBlack, "active");
     removeClass(isClass(alertsNode, "active"), "active");
   }
 });

 function timer() {
   let generalTime = 31;
   const interval = setInterval(timerCount, 1000);
   function timerCount() {
     // console.log(1)
     if (generalTime === 0 || flag === false) {
       clearInterval(interval);
       removeClass(backGroundBlack, "active");
       removeClass(isClass(alertsNode, "active"), "active");
     } else {
       --generalTime;
       render(fieldOfTimer, generalTime);
     }
   }
 }
 