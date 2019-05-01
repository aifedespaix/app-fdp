import gql from 'graphql-tag';

export const mainMenu = gql`
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
