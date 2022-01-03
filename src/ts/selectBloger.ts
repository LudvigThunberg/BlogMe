import { Bloger } from "./models/Bloger";

window.onload = function () {
  getFromLocalStorage();
  createBlogersHtml();
  let selectBlogerSelector: HTMLSelectElement = document.getElementById(
    "selectBloger-blogers"
  ) as HTMLSelectElement;
  selectBlogerSelector.addEventListener("change", handleselectorchange);
};

let blogers: Bloger[] = [];

function sendToLocalStorage() {
  let blogersLS = JSON.stringify(blogers);
  localStorage.setItem("blogers", blogersLS);
}

function getFromLocalStorage() {
  let blogersLS = localStorage.getItem("blogers");
  if (!blogersLS) {
    sendToLocalStorage();
  } else {
    blogersLS = localStorage.getItem("blogers");
    blogers = JSON.parse(blogersLS);
  }
}

function createBlogersHtml() {
  let selectBlogerBlogers: HTMLSelectElement = document.getElementById(
    "selectBloger-blogers"
  ) as HTMLSelectElement;
  for (let i = 0; i < blogers.length; i++) {
    let blogerOption: HTMLOptionElement = document.createElement("option");
    blogerOption.innerHTML = blogers[i].author;
    blogerOption.value = blogers[i].id.toString();
    selectBlogerBlogers.appendChild(blogerOption);
  }
}

function handleselectorchange() {
  let selectBlogerSelector: HTMLSelectElement = document.getElementById(
    "selectBloger-blogers"
  ) as HTMLSelectElement;
  let blogerIdValue = selectBlogerSelector.value;
  sessionStorage.setItem("blogerIdValue", blogerIdValue);
  window.location.href = "createArticle.html";
}
