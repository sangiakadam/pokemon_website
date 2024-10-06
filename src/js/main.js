import data from "./data.json";
// DOM TARGETING
const cardsrow = document.querySelector("#cards-row");
const inputEl = document.querySelector("input");

// const paragraph = document.createElement("p");
// paragraph.textContent = "our class";
// cardsrow.appendChild(paragraph);

console.log(cardsrow);

for (let pokObj of data) {
  const div =document.createElement("div");
  div.classList.add("col");
  div.innerHTML =` 
  <div class="card">
<img src="${pokObj.image}" class="card-img-top" alt="..." />
<div class="card-body">
    <h5 class="card-title">${pokObj.name}</h5>
    <p class="card-text">
   ${pokObj.description}
    </p>
</div>
</div>
</div>

  `;
  cardsrow.appendChild(div);
}

// console.log(data);
// // to targetthe input element
// const inputEl = document.querySelector("input");

// log the targeted element
// inputEl.focus();
document.addEventListener("keypress", function (event) {
  if (event.key === "/") {
    // it will not type "/" when we press "/"
    event.preventDefault();
    inputEl.focus();
  }
});
