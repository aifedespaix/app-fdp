import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {EDIT_MY_USER, MY_PROFILE, MY_PROFILE_FULL} from './graphql';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {UserEditInput, UserType} from '../_generated/graphql.schema';
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

  public completeProfile(): Observable<UserType> {
    return this.apollo.query({
      query: MY_PROFILE_FULL,
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
