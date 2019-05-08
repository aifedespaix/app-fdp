import gql from 'graphql-tag';

export const boxesQuery = gql`
  query boxesQuery($filter: String! $pagination: PaginationInput!) {
    boxes(filter: $filter, pagination: $pagination) {
      id
      title
      description
      sound {
        url
        type
      }
      miniature {
        url
      }
      tags {
        value
      }
    }
  }
`;
