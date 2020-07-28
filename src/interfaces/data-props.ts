export interface Site {
  buildTime: string;
  siteMetadata: {
    title: string;
  };
}

export interface Post {
  frontmatter: {
    title: string;
    description: string;
    date: string;
  };
  fields: {
    slug: string;
  };
  excerpt: string;
  html: string;
}

export interface PageContext {
  previous: Post;
  next: Post;
}
