import gql from 'graphql-tag';

export const boxes = gql`
  query boxes {
    boxes {
      id
      name
      sound {
        url
      }
      thumbnail {
        url
      }
    }
  }`;

export const boxQuery = gql`
  query box($where: BoxWhereUniqueInput!) {
    box(where: $where) {
      id
      name
      sound {
        url
      }
      thumbnail {
        url
      }
    }
  }
`;
