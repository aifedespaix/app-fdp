import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {boxes, boxQuery} from './gql/box.queries';
import {BoxWhereUniqueInput} from '../../graphql.schema';

@Injectable()
export class BoxService {

  constructor(private readonly apollo: Apollo) {
  }

  public getBoxes() {
    return this.apollo.query({query: boxes});
  }

  public getBox(id) {
    return this.apollo.query({
      query: boxQuery,
      variables: {where: {id} as BoxWhereUniqueInput},
    });
  }
}
