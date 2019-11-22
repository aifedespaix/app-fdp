import {Injectable} from '@angular/core';
import {LoginInput, LoginType, RegisterInput} from '../_generated/graphql.schema';
import {Apollo} from 'apollo-angular';
import {LOGIN, REGISTER} from './graphql';
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
        ({data}: ApolloQueryResult<{ authLogin: LoginType }>) => {
          return data.authLogin;
        },
      ));
  }

  public register(registerInput: RegisterInput): Observable<LoginType> {
    return this.apollo.mutate({mutation: REGISTER, variables: registerInput})
      .pipe(map(
        (res: ApolloQueryResult<{ authRegister: LoginType }>) => {
          return res.data.authRegister;
        },
      ));
  }

}
