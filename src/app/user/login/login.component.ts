import {Component, EventEmitter, Output} from '@angular/core';
import {LengthMatcher} from '../../errorStateMatchers/errorStateMatchers';

class UserLogin {
  login: string;
  password: string;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private readonly userLoginModel: UserLogin;
  @Output() private close = new EventEmitter();
  public hide;
  public lengthMatcher: LengthMatcher;

  constructor() {
    this.hide = true;
    this.userLoginModel = new UserLogin('', '');
    this.lengthMatcher = new LengthMatcher(8);
  }

  closeLogin() {
    this.close.emit();
  }

  onSubmit() {
    console.log(this.userLoginModel);
  }

}
