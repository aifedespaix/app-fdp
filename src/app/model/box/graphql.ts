import gql from 'graphql-tag';

export const BOX = gql`
  query box($id: ID!) {
    box(id: $id) {
      id
      createdAt
      updatedAt
      title
      description
      comments {
        id
        value
        createdAt
        updatedAt
        likes {
          value
        }
        author {
          login
          avatar {
            id
            title
            description
            createdAt
            updatedAt
            images {
              id
              url
              width
              height
              mimetype
            }
          }
        }
      }
      sound {
        id
        title
        url
        createdAt
      }
      thumbnail {
        id
        title
        images {
          url
          height
          width
          id
        }
        description
      }
      author {
        login
      }
      likes {
        id
        value
      }
      tags {
        id
        value
      }
    }
  }
`;

export const BOXES = gql`
  query boxes($pagination: PaginationInput) {
    boxes(pagination: $pagination) {
      id
      createdAt
      updatedAt
      title
      description
      sound {
        id
        title
        url
        createdAt
      }
      comments {
        id
        value
        createdAt
        updatedAt
        likes {
          value
        }
        author {
          login
          avatar {
            id
            title
            description
            createdAt
            updatedAt
            images {
              id
              url
              width
              height
              mimetype
            }
          }
        }
      }
      thumbnail {
        id
        title
        images {
          url
          height
          width
          id
        }
        description
      }
      author {
        login
      }
      likes {
        id
        value
      }
      tags {
        id
        value
      }
    }
  }
`;

export const CREATE_BOX = gql`
  mutation createBox($box: BoxInput!, $sound: AudioInput!) {
    createBox(box: $box, sound: $sound) {
      id
      title
      comments {
        id
      }
    }
  }
`;
