import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {EDIT_MY_USER, MY_PROFILE, MY_PROFILE_FULL} from './graphql';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {UserEditInput, UserType} from '../_generated/graphql.schema';
import {Observable} from 'rxjs';
import {getUndefinedPictureMock} from '../picture/picture.mocks';

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
        ({data: {myProfile}}: ApolloQueryResult<{ myProfile: UserType }>) => {
          if (!myProfile.avatar) {
            myProfile.avatar = getUndefinedPictureMock();
          }
          return myProfile;
        }),
      );
  }

  public completeProfile(): Observable<UserType> {
    return this.apollo.query({
      query: MY_PROFILE_FULL,
    })
      .pipe(map(
        ({data: {myProfile}}: ApolloQueryResult<{ myProfile: UserType }>) => {
          if (!myProfile.avatar) {
            myProfile.avatar = getUndefinedPictureMock();
          }
          return myProfile;
        }),
      );
  }

  public editMyUser(user: UserEditInput): Observable<UserType> {
    return this.apollo.mutate({
      mutation: EDIT_MY_USER,
      variables: user,
    })
      .pipe(map(
        ({data: {editMyUser}}: ApolloQueryResult<{ editMyUser: UserType }>) => {
          if (!editMyUser.avatar) {
            editMyUser.avatar = getUndefinedPictureMock();
          }
          return editMyUser;
        }),
      );
  }

}
