import {Injectable} from '@angular/core';
import {LoginInput, LoginType, RegisterInput} from '../model/graphql';
import {AuthModelService} from '../model/auth/auth.model.service';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {UserModelService} from '../model/user/user-model.service';

@Injectable()
export class AuthService {

  private loginType: LoginType;

  constructor(
    private readonly cookieService: CookieService,
    private readonly authModelService: AuthModelService,
    private readonly userModelService: UserModelService,
  ) {
    this.loginType = new LoginType();
  }

  get user() {
    return this.loginType.user;
  }

  public login(loginInput: LoginInput): Observable<boolean> {
    return this.authModelService.login(loginInput)
      .pipe(map(
        (loginType) => {
          this.loginType = loginType;
          this.cookieService.set('token', this.loginType.token);
          return true;
        },
      ));
  }

  public register(registerInput: RegisterInput): Observable<boolean> {
    return this.authModelService.register(registerInput)
      .pipe(map(
        (loginType) => {
          this.loginType = loginType;
          this.cookieService.set('token', this.loginType.token);
          return true;
        },
      ));
  }

  public logout() {
    this.loginType = new LoginType();
    this.clearToken();
  }

  public loadProfile() {
    this.userModelService.myProfile()
      .subscribe(
        (user) => {
          this.loginType.user = user;
        },
        () => {
          this.clearToken();
        },
      )
  }

  private clearToken() {
    this.cookieService.set('token', '');
  }

}
