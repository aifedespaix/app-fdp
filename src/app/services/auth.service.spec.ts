import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {CookieService} from 'ngx-cookie-service';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {AppRoutingModule} from '../app-routing.module';
import {AuthModelService} from '../model/auth/auth-model.service';
import {UserModelService} from '../model/user/user-model.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AppRoutingModule,
      ApolloTestingModule,
    ],
    providers: [
      AuthService,
      AuthModelService,
      UserModelService,
      CookieService,
    ],
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
