import { gql } from "graphql-request";

export const fullPostQuery = gql`
  {
    query {
      posts {
        id
        title
        author {
          name
        }
        postParagraphs {
          paragraphText {
            html
          }
          indexInPost
        }
        postPictures {
          picture {
            url
          }
          indexInPost
          pictureDescription
        }
      }
    }
  }
`;

export const postsSummary = gql`
  query {
    posts {
      title
      author {
        name
        picture {
          url
        }
      }
      excerpt
      date
      tags
      coverImage {
        url
      }
      slug
    }
  }
`;

export const authorsQuery = gql`
  {
    authors {
      name,
      picture {
        url
      }
    }
  }
`;


export const pageInfo = (title: string) => gql`
  query {
    page(where: { title: \"${title}\" }){
      id
      headerPicture{
        url
      }
    }
  }
`;
