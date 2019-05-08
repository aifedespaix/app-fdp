import gql from 'graphql-tag';

export const resetPasswordMutation = gql`
  mutation resetPassword(
  $user: String!
  $token: String!
  $newPassword: String!
  ) {
    resetPassword(
      data: { token: $token, user: $user, newPassword: $newPassword }
    )
  }
`;
