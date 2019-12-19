import gql from 'graphql-tag';

export const RESOURCE_FULL = gql`
  fragment FullResource on ResourceType {
    id
    createdAt
    updatedAt
    title
    description
    url
  }
`;
