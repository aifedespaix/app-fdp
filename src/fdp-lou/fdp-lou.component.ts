import {Component, OnInit} from '@angular/core';
import {FdpLouLooseDialog} from './fdp-lou-loose-dialog/fdp-lou-loose.dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-fdp-lou',
  templateUrl: './fdp-lou.component.html',
  styleUrls: ['./fdp-lou.component.scss'],
})
export class FdpLouComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  loose() {
    const dialogRef = this.dialog.open(FdpLouLooseDialog, {
      height: '550px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('wtf');
    });
  }

}
