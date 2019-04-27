import gql from 'graphql-tag';

export const menu = gql`
  {
    menu(where: {name: "main"}) {
      id
      name
      items {
        name
        routerLink
        icon
      }
    }
  }
`;
