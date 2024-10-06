// to targetthe input element
const inputEl = document.querySelector("input");
// log the targeted element
// inputEl.focus();
document.addEventListener("keypress", function (event) {
  if (event.key === "/") {
    // it will not type "/" when we press "/"
    event.preventDefault();  
    inputEl.focus();
  }
});
