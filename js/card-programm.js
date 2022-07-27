import { log, isArrayLike } from "./help-functions.js";

const a = Array.from(document.querySelectorAll(".controll-card__button"));
const b = Array.from(document.querySelectorAll(".controll-card__field"));
const c = Array.from(document.querySelectorAll(".card-programm__list"));

function f(field, list) {
  const listItem = document.createElement("li");
  listItem.classList.add("card-programm__item");
  const fieldValue = field.value ? field.value : null;

  if(fieldValue === null){
   alert('ss')
  }else{
   listItem.innerText = fieldValue;
   list.appendChild(listItem);
   field.value = "";
  }

   
}
// todo fd i have to refactor all this code bellow
// todo fd make it safer
a.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const list = e.target.parentElement.previousElementSibling;
    const field = e.target.previousElementSibling;
    f(field, list);
    //  const a = list.getAttribute("data-id");
    //  const fieldValue = field.value ?  field.value : null;

    //  log(fieldValue)

    //   log(list);
    // log(btn.)
  });
});
// log(a);
// log(b);
