import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {BoxDialogComponent} from '../box-dialog/box-dialog.component';
import {Box} from '../../../graphql.schema';
import {BoxService} from '../box.service';
import {HeadService} from '../../../layout/head/head.service';

@Component({
  selector: 'app-box-index',
  templateUrl: './box-index.component.html',
  styleUrls: ['./box-index.component.scss'],
})
export class BoxIndexComponent implements OnInit {

  constructor(
    private readonly boxDialog: MatDialog,
    private readonly boxService: BoxService,
    private readonly headService: HeadService,
  ) {
  }

  ngOnInit() {
    this.headService.title = 'Box';
    this.headService.description = 'Liste des boxes, répliques de films, memes épiques, punchlines geek et même Maxime Blanc la tanche';

  }

  openAddBox() {
    this.boxDialog.open(BoxDialogComponent, {data: false, panelClass: 'mobile-modale'});
  }


}
