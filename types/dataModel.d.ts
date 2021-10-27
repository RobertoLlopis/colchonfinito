interface Post {
  title: !string;
  author: {
    name: string;
    picture: { url: string };
  };
  tags: string[];
  excerpt: string;
  date;
  tags: string[];
  coverImage: {
    url;
  };
  slug: string;
}

interface Page {
  headerPicture: {
    url: string;
  };
}
