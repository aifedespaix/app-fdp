import gql from 'graphql-tag';

export const profileQuery = gql`
  query profile {
    profile {
      id
      userLevel
      username
      h_password
      person {
        id
        firstName
        lastName
      }
      email
      telephone
      friends {
        id
        #          firstName
        #          lastName
      }
    }
  }
`;
