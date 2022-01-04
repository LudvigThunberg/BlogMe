import { Bloger } from "./models/Bloger";

let blogerIdValue: string;
let blogers: Bloger[] = [];

window.onload = function () {
  getFromLocalStorage();
  getFromSessionStorage();
  console.log(blogerIdValue);
  console.log(blogers);
};

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

function getFromSessionStorage() {
  blogerIdValue = sessionStorage.getItem("blogerIdValue");
}
