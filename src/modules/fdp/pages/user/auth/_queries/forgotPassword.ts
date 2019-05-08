import gql from 'graphql-tag';

export const forgotPasswordQuery  = gql`
  query forgotPassword($email: String!) {
    forgotPassword(data: { email: $email })
  }
`;
