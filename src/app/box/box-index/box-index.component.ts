import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {BoxDialogComponent} from '../box-dialog/box-dialog.component';
import {Box} from '../../graphql.schema';
import {BoxService} from '../box.service';
import {Subscription} from 'apollo-angular';
import {ApolloQueryResult} from 'apollo-client';

@Component({
  selector: 'app-box-index',
  templateUrl: './box-index.component.html',
  styleUrls: ['./box-index.component.scss'],
})
export class BoxIndexComponent implements OnInit {

  private boxesSub: Subscription<Box>;
  public boxes: Box[];

  constructor(
    private boxDialog: MatDialog,
    private boxService: BoxService,
  ) {
    this.boxes = [];
  }

  ngOnInit() {
    /*this.boxesSub =*/
    this.boxService.getBoxes().subscribe(({data}: ApolloQueryResult<{boxes: Box[]}>) => {
      console.log(data);
        this.boxes = data.boxes;
      }, (e) => {
        console.log(e);
      },
      () => {
        // profileSub.unsubscribe();
      },
    );
  }

  openAddBox() {
    this.boxDialog.open(BoxDialogComponent, {data: false, panelClass: 'mobile-modale'});
  }

}
