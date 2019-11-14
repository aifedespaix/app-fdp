import {Injectable} from '@angular/core';
import {LoginInput, LoginType, RegisterInput} from '../graphql';
import {Apollo} from 'apollo-angular';
import {LOGIN, REGISTER} from './gql/mutations';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {Observable} from 'rxjs';

@Injectable()
export class AuthModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public login(loginInput: LoginInput): Observable<LoginType> {
    return this.apollo.mutate({mutation: LOGIN, variables: loginInput})
      .pipe(map(
        (res: ApolloQueryResult<{ login: LoginType }>) => {
          return res.data.login;
        },
      ));
  }

  public register(registerInput: RegisterInput): Observable<LoginType> {
    return this.apollo.mutate({mutation: REGISTER, variables: registerInput})
      .pipe(map(
        (res: ApolloQueryResult<{ register: LoginType }>) => {
          return res.data.register;
        },
      ));
  }

}
