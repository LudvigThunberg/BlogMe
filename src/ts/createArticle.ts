import { Bloger } from "./models/Bloger";

let blogerIdValue: string;
let blogers: Bloger[] = [];

window.onload = function () {
  getFromLocalStorage();
  getFromSessionStorage();
  findCorrectBlogger();
  eventListeners();
};

function eventListeners() {
  let createArticleTextFieldButton: HTMLButtonElement = document.getElementById(
    "createArticle-text-field-button"
  ) as HTMLButtonElement;
  createArticleTextFieldButton.addEventListener(
    "click",
    createTextInputWithButtonClick
  );
  let createArticleImageFieldButton: HTMLButtonElement = document.getElementById(
    "createArticle-image-field-button"
  ) as HTMLButtonElement;
  createArticleImageFieldButton.addEventListener(
    "click",
    createImageInputWithButtonClick
  );
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

function getFromSessionStorage() {
  blogerIdValue = sessionStorage.getItem("blogerIdValue");
}

function findCorrectBlogger() {
  let blogCreator = blogers.find(
    (theCreator) => theCreator.id.toString() === blogerIdValue
  );
  console.log(blogCreator);
}

function createTextInputWithButtonClick() {
  let blogPostsContainer: HTMLDivElement = document.getElementById(
    "blog-posts-container"
  ) as HTMLDivElement;

  if (blogPostsContainer.innerHTML.length <= 0) {
    let newTextArea = document.createElement("textarea");
    let saveTextButton = document.createElement("button");

    saveTextButton.id = "save-text-button";
    newTextArea.className = "new-textarea";

    saveTextButton.innerHTML = "Spara text!";

    blogPostsContainer.appendChild(newTextArea);
    blogPostsContainer.appendChild(saveTextButton);
  }
}

function createImageInputWithButtonClick() {
  let blogPostsContainer: HTMLDivElement = document.getElementById(
    "blog-posts-container"
  ) as HTMLDivElement;
  if (blogPostsContainer.innerHTML.length <= 0) {
    let newImageInput = document.createElement("input");
    let saveImageButton = document.createElement("button");

    saveImageButton.id = "save-image-button";
    newImageInput.className = "new-image-input";

    saveImageButton.innerHTML = "Spara bild!";

    newImageInput.type = "text";

    blogPostsContainer.appendChild(newImageInput);
    blogPostsContainer.appendChild(saveImageButton);
  }
}
