import {Component, OnInit} from '@angular/core';
import {FdpUserAuthService} from '../fdp-user-auth/fdp-user-auth.service';
import {FdpUserAuth} from '../fdp-user';

@Component({
  selector: 'app-fdp-user-profile',
  templateUrl: './fdp-user-profile.component.html',
  styleUrls: ['./fdp-user-profile.component.scss'],
})
export class FdpUserProfileComponent implements OnInit {

  public user: FdpUserAuth;

  constructor(public fdpAuthService: FdpUserAuthService) {
    this.user = this.fdpAuthService.user;
  }

  ngOnInit() {
  }

}
