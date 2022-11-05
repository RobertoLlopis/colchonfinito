interface Page {
  headerPicture: {
    url: string,
  };
}

interface Author {
  name: string,
  picture: Picture,
  email: string,
}

type Tags = string[]

type Picture = {
  url: string,
}

interface PostSummary {
  title: !string,
  tags: Tags,
  excerpt: string,
  updatedAt: Date,
  date: Date,
  coverImage: Picture,
  author: Author,
  slug: string,
}

type IndexInPost = number

type ParagraphText = {
  html: string
}

type PostParagraph = {
  indexInPost: IndexInPost
  paragraphText: ParagraphText,
}

type PostPicture = {
  indexInPost: IndexInPost,
  picture: Picture
}

interface FullPost extends PostSummary {
  postParagraphs: PostParagraph[],
  postPictures: PostPicture[],
}


