import { Bloger } from "./models/Bloger";

window.onload = function () {
  let goButton: HTMLButtonElement = document.getElementById(
    "create-go-button"
  ) as HTMLButtonElement;
  goButton.addEventListener("click", handleGoButton);
};

let blogers: Bloger[] = [];

function handleGoButton() {
  let createAuthorInput: HTMLInputElement = document.getElementById(
    "create-author-input"
  ) as HTMLInputElement;
  let createBlogTitleInput: HTMLInputElement = document.getElementById(
    "create-blog-name-input"
  ) as HTMLInputElement;
  let createBlogDescriptionInput: HTMLInputElement = document.getElementById(
    "create-blog-description-input"
  ) as HTMLInputElement;
  let createBlogImgUrl: HTMLInputElement = document.getElementById(
    "create-blog-img-url"
  ) as HTMLInputElement;

  let id: number = new Date().getTime();

  let createBloger: Bloger = new Bloger(
    id,
    createBlogTitleInput.value,
    createAuthorInput.value,
    createBlogDescriptionInput.value,
    createBlogImgUrl.value
  );
  blogers.push(createBloger);
  sendToLocalStorage();
}

function sendToLocalStorage() {
  let blogersLS = JSON.stringify(blogers);
  localStorage.setItem("blogers", blogersLS);
}
