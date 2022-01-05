import { Bloger } from "./models/Bloger";
import { BlogPost } from "./models/BlogPost";

let blogerIdValue: string;
let blogers: Bloger[] = [];
let blogPosts: BlogPost[] = [];

window.onload = function () {
  getBlogersFromLocalStorage();
  getBlogPostsFromLocalStorage();
  getBlogerIdFromSessionStorage();
};

function getBlogersFromLocalStorage() {
  let blogersLS = localStorage.getItem("blogers");
  blogers = JSON.parse(blogersLS);
}

function getBlogPostsFromLocalStorage() {
  let blogPostsLS = localStorage.getItem("blogPosts");
  blogPosts = JSON.parse(blogPostsLS);
}

function getBlogerIdFromSessionStorage() {
  blogerIdValue = sessionStorage.getItem("blogerIdValue");
}
