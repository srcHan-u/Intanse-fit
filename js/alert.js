import {setClass, isClass} from './help-functions.js';
import {backGroundBlack} from './common.js';


export const alertInfoNode = document.querySelectorAll(".alert_info");
export const alertWarningNode = document.querySelector(".alert_warning");
export const alertsNode = document.querySelectorAll(".alert");

const btnWarningNode = document.querySelector(".button-warning");
const btnInfoNode = document.querySelector(".button-info");



btnInfoNode.addEventListener("click", () => {
   setClass(backGroundBlack, "active");
   setClass(isClass(alertInfoNode, "alert_info"), "active");
   // alertInfoNode.classList.
 });
 
 btnWarningNode.addEventListener("click", () => {
   setClass(backGroundBlack, "active");
   setClass(alertWarningNode, "active");
 });
 