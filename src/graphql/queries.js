import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      id
      title
      slug
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR = gql`
  query getUser($slug: String!) {
    author(where: { slug: $slug }) {
      id
      name
      description {
        html
      }
      field
      avatar {
        url
      }
      posts {
        coverPhoto {
          url
        }
        id
        title
        slug
      }
    }
  }
`;

const GET_BLOG = gql`
  query getBlog($slug: String! ) {
    post(where: { slug: $slug}) {
      author{
        avatar {
          url
        }
        name
        field
      }
      comments {
        id
        name
        text
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      datePublished
      title
      slug
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR, GET_BLOG };
