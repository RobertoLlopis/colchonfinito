type Url = string

interface Page {
  headerPicture: {
    url: Url,
  };
}

interface Author {
  name: string,
  picture: Picture,
  email: string,
}

type Tags = string[]


type Picture = {
  url: Url,
}

interface PostSummary {
  id: string,
  title: !string,
  tags: Tags,
  excerpt: string,
  updatedAt: Date,
  date: Date,
  coverImage: Picture,
  author: Author,
  slug: string,
}

type IndexInPost = {
  indexInPost: number,
}
type ParagraphText = {
  html: string
}

interface PostParagraph extends IndexInPost {
  paragraphText: ParagraphText,
}

interface PostPicture extends IndexInPost {
  picture: Picture,
  pictureDescription: string
}

interface FullPost extends PostSummary {
  postParagraphs: PostParagraph[],
  postPictures: PostPicture[],
}


