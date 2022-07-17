interface Post {
  title: !string;
  author: {
    name: string;
    picture: { url: string };
  };
  tags: string[];
  excerpt: string;
  date;
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

interface Author {
  name: string,
  picture:{
    url: string;
  }
}
