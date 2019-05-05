import gql from 'graphql-tag';

export const boxes = gql`
  query boxes {
    boxes {
      id
      name
      sound {
        url
      }
      thumbnail {
        url
      }
    }
  }`;
