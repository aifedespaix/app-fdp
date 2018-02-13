import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {FdpUserAuthService} from '../fdp-user/fdp-user-auth/fdp-user-auth.service';
import {FdpUserAuth} from '../fdp-user/fdp-user';

@Component({
  selector: 'app-index',
  templateUrl: './fdp-index.component.html',
})
export class FdpIndexComponent {

  public user: FdpUserAuth;

  constructor(private router: Router,
              private titleService: Title,
              public fdpAuthService: FdpUserAuthService) {
    this.user = this.fdpAuthService.user;
  }

}
