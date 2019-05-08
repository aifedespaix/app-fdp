import gql from 'graphql-tag';

export const voteBoxMutation = gql`
  mutation voteBoxMutation($id: ID!, $vote: Boolean) {
    addVote(vote: { target: $id, value: $vote })
  }
`;
