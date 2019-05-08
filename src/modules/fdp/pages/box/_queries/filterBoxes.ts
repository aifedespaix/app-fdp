import gql from 'graphql-tag';

export const filterBoxesQuery = gql`
  query boxesQuery($filter: String!) {
    boxes(filter: $filter) {
      title
    }
  }
`;
