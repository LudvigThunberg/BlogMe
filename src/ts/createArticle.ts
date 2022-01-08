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

function sendBlogerToSessionStorage() {
  sessionStorage.setItem("blogerIdValue", blogerIdValue);
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
  sendBlogerToSessionStorage();
  window.location.href = "blogPage.html";
}
