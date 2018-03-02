import {Component, Pipe} from '@angular/core';
import {FdpUserAuthService} from '../fdp-user-auth/fdp-user-auth.service';
import {FdpUser} from '../fdp-user';
import {FdpBoxService} from '../../fdp-box/fdp-box.service';
import {FdpBoxConfirmDeleteBoxDialog} from '../../fdp-box/fdp-box-delete/fdp-box-delete.dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-fdp-user-profile',
  templateUrl: './fdp-user-profile.component.html',
  styleUrls: ['./fdp-user-profile.component.scss'],
})
export class FdpUserProfileComponent {

  public user: FdpUser;

  constructor(public fdpAuthService: FdpUserAuthService) {
    this.user = this.fdpAuthService.user;
  }

}
