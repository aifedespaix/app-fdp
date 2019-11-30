import {Injectable} from '@angular/core';
import {LoginInput, RegisterInput, Role, UserEditInput, UserType} from '../model/_generated/graphql.schema';
import {AuthModelService} from '../model/auth/auth-model.service';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {UserModelService} from '../model/user/user-model.service';
import {getPictureMock} from '../model/picture/tests/picture.mocks';
import {Apollo} from 'apollo-angular';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly tokenKey = 'token';

  constructor(
    private readonly cookieService: CookieService,
    private readonly authModelService: AuthModelService,
    private readonly userModelService: UserModelService,
    private readonly apollo: Apollo,
    private readonly router: Router,
  ) {
    this._user = null;
    this._isAuthenticated = false;
  }

  private _isAuthenticated;

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  get isAdmin() {
    return this.isAuthenticated && this.user.role === Role.AIFEDESPAIX;
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
          this._isAuthenticated = true;
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
          this._isAuthenticated = true;
          return true;
        },
      ));
  }

  public async logout() {
    this._user = null;
    this.clearToken();
    this._isAuthenticated = false;
    await this.apollo.getClient().resetStore();
    await this.router.navigateByUrl('/');
  }

  public loadProfile() {
    if (this.getToken()) {
      const sub = this.userModelService
        .myProfile()
        .subscribe(
          (user) => {
            this.updateUser(user);
            this._isAuthenticated = true;
          },
          async (err) => {
            await this.logout();
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
