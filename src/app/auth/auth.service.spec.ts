import {TestBed} from '@angular/core/testing';

import {AuthService} from '../services/auth.service';
import {AuthModule} from './auth.module';
import {CookieService} from 'ngx-cookie-service';
import {ApolloTestingModule} from 'apollo-angular/testing';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AuthModule,
      ApolloTestingModule,
    ],
    providers: [
      CookieService,
    ],
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
