import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {MY_PROFILE} from './gql/queries';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {UserType} from '../graphql';
import {Observable} from 'rxjs';

@Injectable()
export class UserModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public myProfile(): Observable<UserType> {
    return this.apollo.query({
      query: MY_PROFILE,
    })
      .pipe(map(
        (res: ApolloQueryResult<{ myProfile: UserType }>) => {
          return res.data.myProfile;
        }),
      );
  }

}
