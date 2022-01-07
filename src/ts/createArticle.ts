import { Bloger } from "./models/Bloger";
import { BlogPost } from "./models/BlogPost";

let blogerIdValue: string;
let blogers: Bloger[] = [];
let blogPosts: BlogPost[] = [];

window.onload = function () {
  getFromLocalStorage();
  getFromSessionStorage();
  getBlogPostsFromLocalStorage();
  eventListeners();
};

function eventListeners() {
  let createArticlePostButton: HTMLButtonElement = document.getElementById(
    "createArticle-post-button"
  ) as HTMLButtonElement;
  createArticlePostButton.addEventListener("click", usePostButton);
}

function sendBlogersToLocalStorage() {
  let blogersLS = JSON.stringify(blogers);
  localStorage.setItem("blogers", blogersLS);
}

function sendBlogPostsToLocalStorage() {
  let blogPostsLS = JSON.stringify(blogPosts);
  localStorage.setItem("blogPosts", blogPostsLS);
}

function getFromLocalStorage() {
  let blogersLS = localStorage.getItem("blogers");
  if (!blogersLS) {
    sendBlogersToLocalStorage();
  } else {
    blogersLS = localStorage.getItem("blogers");
    blogers = JSON.parse(blogersLS);
  }
}

function getBlogPostsFromLocalStorage() {
  let blogPostsLS = localStorage.getItem("blogPosts");
  if (!blogPostsLS) {
    sendBlogPostsToLocalStorage();
  } else {
    blogPostsLS = localStorage.getItem("blogPosts");
    blogPosts = JSON.parse(blogPostsLS);
  }
}

function getFromSessionStorage() {
  blogerIdValue = sessionStorage.getItem("blogerIdValue");
}

function usePostButton() {
  let blogCreator = blogers.find(
    (theCreator) => theCreator.id.toString() === blogerIdValue
  );

  let newTextarea: HTMLSpanElement = document.getElementById(
    "new-textarea"
  ) as HTMLSpanElement;
  let newImageInput: HTMLInputElement = document.getElementById(
    "new-image-input"
  ) as HTMLInputElement;
  let createArticleInputTitle: HTMLInputElement = document.getElementById(
    "createArticle-input-title"
  ) as HTMLInputElement;

  let blogPostId: number = new Date().getTime();

  let createBlogPost: BlogPost = new BlogPost(
    blogCreator.id,
    blogPostId,
    createArticleInputTitle.value,
    newImageInput.value,
    newTextarea.innerHTML
  );
  blogPosts.push(createBlogPost);
  sendBlogPostsToLocalStorage();
  window.location.href = "blogPage.html";

  console.log(blogPosts);
}

/* function createTextInputWithButtonClick() {
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
} */

/* function saveTextToBlogContent() {
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
} */
