import gql from 'graphql-tag';

export const createBoxMutation = gql`
    mutation createBoxMutation(
      $title: String!
      $sound: ID!
      $miniature: ID!
      $description: String
    ) {
      createBox(
        box: {
          title: $title
          sound: $sound
          miniature: $miniature
          description: $description
        }
      ) {
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
    }`;
