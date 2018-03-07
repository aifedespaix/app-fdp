import {Component, OnInit} from '@angular/core';
import {FdpBoxService} from '../fdp-box.service';
import {FdpBoxConfirmDeleteDialog} from '../fdp-box-delete-dialog/fdp-box-delete.dialog.component';
import {FdpBoxEditDialog} from '../fdp-box-edit-dialog/fdp-box-edit.dialog.component';
import {FdpBox} from '../fdp-box';
import {MatDialog, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-fdp-box-my-list',
  templateUrl: './fdp-box-my-list.component.html',
  // styleUrls: ['./fdp-box-my-list.component.scss'],
})
export class FdpBoxMyListComponent implements OnInit {

  public myBoxes: FdpBox[];

  constructor(private fdpBoxService: FdpBoxService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) {
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
    const dialogRef = this.dialog.open(FdpBoxConfirmDeleteDialog, {
      height: '200px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBox(id);
      }
    });
  }

  public edit(box) {
    const dialogRef = this.dialog.open(FdpBoxEditDialog, {
      height: '350px',
      data: {box},
    });
    dialogRef.afterClosed().subscribe(success => {
      if (success) {
        this.snackBar.open('La box a bien été mise à jour.', 'osef', {
          duration: 1500,
        });
      } else {
        this.snackBar.open('Erreur lors de la mise à jour de la box.', 'osef', {
          duration: 1500,
        });
      }
    });
  }

}
