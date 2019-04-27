import gql from 'graphql-tag';

export const profile = gql`query profile {
  authProfile {
    id
    email
    name
  }
}`;
