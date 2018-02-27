import {Component, OnInit, Pipe} from '@angular/core';
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
export class FdpUserProfileComponent implements OnInit {

  public user: FdpUser;
  public myBoxes: {}[];

  constructor(public fdpAuthService: FdpUserAuthService,
              private fdpBoxService: FdpBoxService,
              public dialog: MatDialog) {
    this.user = this.fdpAuthService.user;
    this.myBoxes = [];
  }

  ngOnInit() {
    this.fdpBoxService.myBoxes().subscribe(res => {
      if (res.error) {
        console.log(res.error);
      } else {
        this.myBoxes = res.boxes;
      }
    });
  }

  public deleteBox(id) {
    this.fdpBoxService.delete(id).subscribe(res => {
      if (res.error) {
        console.log(res.error);
      } else {
      }
    })
  }

  public playBox(box) {
    const audio = new Audio(box.sound.url);
    audio.play();
  }

  public confirmDelete(id) {
    const dialogRef = this.dialog.open(FdpBoxConfirmDeleteBoxDialog, {
      height: '350px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBox(id);
      }
    });
  }
}
