import gql from 'graphql-tag';

export const deleteBoxMutation = gql`
  mutation deleteBoxMutation($id: ID!) {
    deleteBox(id: $id)
  }
`;
