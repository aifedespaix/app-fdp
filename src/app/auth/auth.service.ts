import {Injectable} from '@angular/core';
import {LoginInput, RegisterInput, UserEditInput, UserType} from '../model/_generated/graphql.schema';
import {AuthModelService} from '../model/auth/auth-model.service';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {UserModelService} from '../model/user/user-model.service';
import {getPictureMock} from '../model/picture/tests/picture.mocks';
import {Apollo} from 'apollo-angular';

@Injectable()
export class AuthService {

  private readonly tokenKey = 'token';

  constructor(
    private readonly cookieService: CookieService,
    private readonly authModelService: AuthModelService,
    private readonly userModelService: UserModelService,
    private readonly apollo: Apollo,
  ) {
    this._user = null;
  }

  get isAuthenticated() {
    return this.getToken() && this.user;
  }

  private _user: UserType;

  get user() {
    return this._user;
  }

  public getToken() {
    return this.cookieService.get(this.tokenKey);
  }

  public login(loginInput: LoginInput): Observable<boolean> {
    return this.authModelService.login(loginInput)
      .pipe(map(
        (loginType) => {
          this.updateUser(loginType.user);
          this.setToken(loginType.token);
          return true;
        },
      ));
  }

  public register(registerInput: RegisterInput): Observable<boolean> {
    return this.authModelService.register(registerInput)
      .pipe(map(
        (loginType) => {
          this.updateUser(loginType.user);
          this.setToken(loginType.token);
          return true;
        },
      ));
  }

  public logout() {
    this._user = null;
    this.apollo.getClient().resetStore();
    this.clearToken();
  }

  public loadProfile() {
    if (this.getToken()) {
      const sub = this.userModelService.myProfile()
        .subscribe(
          (user) => {
            this.updateUser(user);
          },
          (err) => {
            console.log(err);
            this.logout();
          },
          () => {
            sub.unsubscribe();
          },
        );
    }
  }

  public updateProfile(userEditInput: UserEditInput): Observable<boolean> {
    return this.userModelService.editMyUser(userEditInput)
      .pipe(map((user) => {
        this.updateUser(user);
        return true;
      }));
  }

  private setToken(value: string) {
    this.cookieService.set(this.tokenKey, value);
  }

  private updateUser(user: UserType) {
    this._user = user;
    if (!this.user.avatar || !this.user.avatar.images) {
      this._user.avatar = getPictureMock();
    }
  }

  private clearToken() {
    this.setToken('');
  }

}
