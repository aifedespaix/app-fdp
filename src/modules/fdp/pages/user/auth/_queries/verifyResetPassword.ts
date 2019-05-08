import gql from 'graphql-tag';

export const verifyResetPasswordQuery = gql`
  query verifyResetPassword($user: String!, $token: String!) {
    verifyResetPassword(data: { user: $user, token: $token })
  }
`;

