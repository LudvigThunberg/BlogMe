import { Bloger } from "./models/Bloger";

window.onload = function () {
  let goButton: HTMLButtonElement = document.getElementById(
    "create-go-button"
  ) as HTMLButtonElement;
  goButton.addEventListener("click", handleGoButton);

  getFromLocalStorage();
};

let blogers: Bloger[] = [];

function handleGoButton() {
  let createAuthorInput: HTMLInputElement = document.getElementById(
    "create-author-input"
  ) as HTMLInputElement;
  let createAuthorPassword: HTMLInputElement = document.getElementById(
    "create-author-password"
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
  let blogPosts: [] = [];

  let createBloger: Bloger = new Bloger(
    id,
    createBlogTitleInput.value,
    createAuthorInput.value,
    createAuthorPassword.value,
    createBlogDescriptionInput.value,
    createBlogImgUrl.value,
    blogPosts
  );
  blogers.push(createBloger);
  sendToLocalStorage();
  goButtonNextPage();
  console.log(blogers);
}

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

function goButtonNextPage() {
  window.location.href = "selectBloger.html";
}

/* function emptyInputs() {
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

  createAuthorInput.innerHTML = "";
  createBlogTitleInput.innerHTML = "";
  createBlogDescriptionInput.innerHTML = "";
  createBlogImgUrl.innerHTML = "";
} */
