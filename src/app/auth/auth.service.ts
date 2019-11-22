import {Injectable} from '@angular/core';
import {LoginInput, LoginType, RegisterInput, UserEditInput, UserType} from '../model/graphql.schema';
import {AuthModelService} from '../model/auth/auth-model.service';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {UserModelService} from '../model/user/user-model.service';
import {getAvatarMock} from '../model/resource/tests/resource.mock';

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

  public get isLoged() {
    return this.loginType.user;
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
    const sub = this.userModelService.myProfile()
      .subscribe(
        (user) => {
          this.updateUser(user);
        },
        () => {
          this.clearToken();
        },
        () => {
          sub.unsubscribe();
        }
      );
  }

  public updateProfile(userEditInput: UserEditInput): Observable<boolean> {
    return this.userModelService.editMyUser(userEditInput)
      .pipe(map((user) => {
        this.updateUser(user);
        return true;
      }));
  }

  private updateUser(user: UserType) {
    this.loginType.user = user;
    if (!this.loginType.user.avatar || !this.loginType.user.avatar.url) {
      this.loginType.user.avatar = getAvatarMock();
    }
  }

  private clearToken() {
    this.cookieService.set('token', '');
  }

}
