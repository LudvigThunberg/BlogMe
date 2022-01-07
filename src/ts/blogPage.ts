import { Bloger } from "./models/Bloger";
import { BlogPost } from "./models/BlogPost";

let blogerIdValue: string;
let blogers: Bloger[] = [];
let blogPosts: BlogPost[] = [];

window.onload = function () {
  getBlogersFromLocalStorage();
  getBlogPostsFromLocalStorage();
  getBlogerIdFromSessionStorage();
  createBlogerHtml();
  createBlogpostsHthml();
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

function createBlogerHtml() {
  let blogPageBlogerName: HTMLHeadingElement = document.getElementById(
    "blogPage-bloger-name"
  ) as HTMLHeadingElement;
  let bloggerImage: HTMLImageElement = document.getElementById(
    "blogger-image"
  ) as HTMLImageElement;
  let blogPageBlogerDescription: HTMLParagraphElement = document.getElementById(
    "blogPage-bloger-description"
  ) as HTMLParagraphElement;

  let blogCreator = blogers.find(
    (theCreator) => theCreator.id.toString() === blogerIdValue
  );

  blogPageBlogerName.innerHTML = blogCreator.author;
  bloggerImage.src = blogCreator.image;
  blogPageBlogerDescription.innerHTML = blogCreator.description;
}

function createBlogpostsHthml() {
  let blogPostsSorted = blogPosts.filter(
    (posts) => posts.authorId.toString() === blogerIdValue
  );

  let blogPageBlogPostContainer: HTMLDivElement = document.getElementById(
    "blogPage-blog-post-container"
  ) as HTMLDivElement;

  for (let i = blogPostsSorted.length - 1; i >= 0; i--) {
    let title = document.createElement("h2");
    let imageContainer = document.createElement("div");
    let image = document.createElement("img");
    let text = document.createElement("p");

    title.className = "blog-title";
    imageContainer.className = "image-container";
    image.className = "blog-image";
    text.className = "blog-text";

    title.innerHTML = blogPostsSorted[i].title;
    image.src = blogPostsSorted[i].image;
    text.innerHTML = blogPostsSorted[i].text;

    blogPageBlogPostContainer.appendChild(title);
    imageContainer.appendChild(image);
    blogPageBlogPostContainer.appendChild(imageContainer);
    blogPageBlogPostContainer.appendChild(text);
  }
  console.log(blogPostsSorted);
}
