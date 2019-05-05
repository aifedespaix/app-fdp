import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {boxes} from './gql/box.queries';

@Injectable()
export class BoxService {

  constructor(private readonly apollo: Apollo) {
  }

  public getBoxes() {
    return this.apollo.query({query: boxes});
  }

}
