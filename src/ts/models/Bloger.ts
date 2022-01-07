export class Bloger {
  id: number;
  title: string;
  author: string;
  password: string;
  description: string;
  image: string;
  blogPosts: [];
  constructor(
    id: number,
    title: string,
    author: string,
    password: string,
    description: string,
    image: string,
    blogPosts: []
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.password = password;
    this.description = description;
    this.image = image;
    this.blogPosts = blogPosts;
  }
}
