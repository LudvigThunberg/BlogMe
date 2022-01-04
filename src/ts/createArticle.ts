import { Bloger } from "./models/Bloger";
import { Text } from "./models/Text";
import { Image } from "./models/Image";

let blogerIdValue: string;
let blogers: Bloger[] = [];
let blogContent = [];

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
  let createArticlePostButton: HTMLButtonElement = document.getElementById(
    "createArticle-post-button"
  ) as HTMLButtonElement;
  createArticlePostButton.addEventListener("click", handlePostButtonClick);
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
    newTextArea.id = "new-textarea";

    saveTextButton.addEventListener("click", saveTextToBlogContent);

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
    newImageInput.id = "new-image-input";

    saveImageButton.innerHTML = "Spara bild!";

    saveImageButton.addEventListener("click", saveImageToBlogContent);

    newImageInput.type = "text";

    blogPostsContainer.appendChild(newImageInput);
    blogPostsContainer.appendChild(saveImageButton);
  }
}

function saveTextToBlogContent() {
  let newTextArea: HTMLTextAreaElement = document.getElementById(
    "new-textarea"
  ) as HTMLTextAreaElement;
  let blogPostsContainer: HTMLDivElement = document.getElementById(
    "blog-posts-container"
  ) as HTMLDivElement;

  let textToBlogContent = new Text(newTextArea.value);
  blogContent.push(textToBlogContent);

  blogPostsContainer.innerHTML = "";
}

function saveImageToBlogContent() {
  let newImageInput: HTMLInputElement = document.getElementById(
    "new-image-input"
  ) as HTMLInputElement;
  let blogPostsContainer: HTMLDivElement = document.getElementById(
    "blog-posts-container"
  ) as HTMLDivElement;

  let imageToBlogContent = new Image(newImageInput.value);
  blogContent.push(imageToBlogContent);

  blogPostsContainer.innerHTML = "";
}

function handlePostButtonClick() {
  let blogCreator = blogers.find(
    (theCreator) => theCreator.id.toString() === blogerIdValue
  );
  blogCreator.blogPosts;
  [].push(blogContent);
  console.log(blogers);
}
