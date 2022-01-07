import { Bloger } from "./models/Bloger";

window.onload = function () {
  eventListeners();
  getBlogersFromLocalStorage();
};

let blogers: Bloger[] = [];

function eventListeners() {
  let mainGoButton: HTMLButtonElement = document.getElementById(
    "start-go-button"
  ) as HTMLButtonElement;
  mainGoButton.addEventListener("click", handleGoButtonClick);
  let startLoginButton: HTMLButtonElement = document.getElementById(
    "start-login-button"
  ) as HTMLButtonElement;
  startLoginButton.addEventListener("click", logIn);
}

function getBlogersFromLocalStorage() {
  let blogersLS = localStorage.getItem("blogers");
  if (!blogersLS) {
    sendBlogersToLocalStorage();
  } else {
    blogersLS = localStorage.getItem("blogers");
    blogers = JSON.parse(blogersLS);
  }
}

function sendBlogersToLocalStorage() {
  let blogersLS = JSON.stringify(blogers);
  localStorage.setItem("blogers", blogersLS);
}

function logIn() {
  let usernameInput: HTMLInputElement = document.getElementById(
    "start-username-input"
  ) as HTMLInputElement;
  let passwordInput: HTMLInputElement = document.getElementById(
    "start-password-input"
  ) as HTMLInputElement;

  for (let i = 0; i < blogers.length; i++) {
    if (usernameInput.value === blogers[i].author) {
      if (passwordInput.value === blogers[i].password) {
        let blogerId: number = blogers[i].id;

        let blogerIdValue: string = blogerId.toString();
        sessionStorage.setItem("blogerIdValue", blogerIdValue);

        window.location.href = "html/createArticle.html";

        return;
      }
    }
  }
  alert("Skriv in korrekt användarnamn och password!");
}

function handleGoButtonClick() {
  window.location.href = "html/create.html";
}
