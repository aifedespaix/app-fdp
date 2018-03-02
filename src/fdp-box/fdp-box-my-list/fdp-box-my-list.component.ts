import {Component, OnInit} from '@angular/core';
import {FdpBoxService} from '../fdp-box.service';
import {FdpBoxConfirmDeleteBoxDialog} from '../fdp-box-delete/fdp-box-delete.dialog.component';
import {FdpBox} from '../fdp-box';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-fdp-box-my-list',
  templateUrl: './fdp-box-my-list.component.html',
  // styleUrls: ['./fdp-box-my-list.component.scss'],
})
export class FdpBoxMyListComponent implements OnInit {

  public myBoxes: FdpBox[];
  public dialog: MatDialog

  constructor(private fdpBoxService: FdpBoxService) {
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

  public edit(id) {
    // const dialogRef = this.dialog.open(FdpBoxEditBoxDialog, {
    //   height: '350px',
    // });
    // dialogRef.afterClosed().subscribe(result => {
    // });
  }

}
