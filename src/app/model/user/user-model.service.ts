import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {EDIT_MY_USER, MY_PROFILE} from './gql/queries';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {UserEditInput, UserType} from '../graphql.schema';
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

  public editMyUser(user: UserEditInput): Observable<UserType> {
    return this.apollo.mutate({
      mutation: EDIT_MY_USER,
      variables: user,
    })
      .pipe(map(
        (res: ApolloQueryResult<{ editMyUser: UserType }>) => {
          return res.data.editMyUser;
        }),
      );
  }

}