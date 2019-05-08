import gql from 'graphql-tag';

export const boxQuery = gql`
  query box($id: ID!) {
    box(id: $id) {
      id
      title
      description
      sound {
        url
        type
      }
      miniature {
        url
      }
      tags {
        value
      }
      owner {
        id
        username
        email
        friends {
          id
          username
        }
      }
    }
  }
`;
