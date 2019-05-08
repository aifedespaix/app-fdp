import gql from 'graphql-tag';

export const myBoxesQuery = gql`
  query myBoxesQuery {
    myBoxes {
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
    }
  }
`;
