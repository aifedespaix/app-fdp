import gql from 'graphql-tag';

export const TAG_FULL = gql`
  fragment FullTag on TagType {
    id
    value
  }
`;
