import { log, isArrayLike } from "./help-functions.js";

const section = document.querySelectorAll("div[data-href]");
const linksData = Array.from(document.querySelectorAll(".aside__link")).map((e) => {
  return e;
});

// todo fd will change name
function findLinks(e) {
   for (let index = 0; index < linksData.length; index++) {
      const element = linksData[index];
      
      if (element.hasAttribute("class", "current") && element !== e) {
         element.classList.remove("current");
      }else{
         e.classList.add("current");
      }
    }
}

function findSection(e){
   for (let index = 0; index < section.length; index++) {
      const element = section[index];
      const href = element.getAttribute("data-href");
      const attr = 'hidden';
      if (href === e) {
         element.removeAttribute("hidden");
      } else{
         element.setAttribute(attr, true)
      }
   }
}

linksData.forEach((e) => {
  e.addEventListener("click", (link) => {
    link.preventDefault();
    let href = link.target.getAttribute('data-href');

    findLinks(link.target);
    findSection(href);
  });
});


