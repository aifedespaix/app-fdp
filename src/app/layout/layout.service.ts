import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {mainMenu} from './sidenav/gql/menu.queries';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {

  constructor(private readonly apollo: Apollo) {
  }

  public mainMenu() {
    return this.apollo.watchQuery({query: mainMenu}).valueChanges;
  }
}
