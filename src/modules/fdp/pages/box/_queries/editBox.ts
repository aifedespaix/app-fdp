import gql from 'graphql-tag';

export const editBoxMutation = gql`
  mutation editBoxMutation($id: ID!$title: String$miniature: ID$description: String) {
    editBox(
      id: $id
      box: { title: $title, miniature: $miniature, description: $description }
    )
  }
`;
