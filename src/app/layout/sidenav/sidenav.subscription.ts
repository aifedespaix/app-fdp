import {Injectable} from '@angular/core';
import {Subscription} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class MainMenuGQL extends Subscription {
  document = gql`
    subscription mainMenu {
      menu {
        mutation
        node {
          items {
            name
            routerLink
            id
          }
        }
        previousValues {
          id
        }
      }
    }
  `;
}
