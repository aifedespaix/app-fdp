import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {AuthModule} from '../auth/auth.module';
import {CookieService} from 'ngx-cookie-service';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {AppRoutingModule} from '../app-routing.module';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthModule,
        ApolloTestingModule,
        AppRoutingModule,
      ],
      providers: [
        AuthGuard,
        CookieService,
      ],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
