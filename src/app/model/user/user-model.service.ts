import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {USER} from './user-graphql';
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
      query: USER.queries.myProfile,
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
      query: USER.queries.myProfileFull,
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
      mutation: USER.mutations.editMyUser,
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
