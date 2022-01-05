export class BlogPost {
  authorId: number;
  blogPostId: number;
  title: string;
  image: string;
  text: string;
  constructor(
    authorId: number,
    blogPostId: number,
    title: string,
    image: string,
    text: string
  ) {
    this.authorId = authorId;
    this.blogPostId = blogPostId;
    this.title = title;
    this.image = image;
    this.text = text;
  }
}
