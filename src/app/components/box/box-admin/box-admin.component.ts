import {Component, Input, OnInit} from '@angular/core';
import {BoxType} from '../../../model/_generated/graphql.schema';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {SnackService} from '../../../services/snack/snack.service';
import {BoxModelService} from '../../../model/box/box-model.service';

@Component({
  selector: 'app-box-admin',
  templateUrl: './box-admin.component.html',
  styleUrls: ['./box-admin.component.scss'],
})
export class BoxAdminComponent implements OnInit {

  @Input() label = 'Boxes';
  @Input() boxes: BoxType[];

  public displayedColumns: string[];
  public selection = new SelectionModel<BoxType>(true, []);
  public dataSource: MatTableDataSource<BoxType>;

  constructor(
    private readonly boxModelService: BoxModelService,
    private readonly snackService: SnackService,
  ) {
    this.boxes = [];
    this.displayedColumns = [
      'actions',
      'box',
      'title',
      'description',
      'comments',
    ];
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<BoxType>(this.boxes);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: BoxType): string {
    if (row) {
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row `;
    }
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }

  delete() {
    this.selection.selected.map((box) => {
      this.boxModelService
        .delete(box.id)
        .subscribe(
          () => {
            this.snackService.success(`Les box ont été supprimées`);
          },
          () => {
            this.snackService.error(`Vous n'avez pas l'autorisation de supprimer ces boxes.`);
          },
        );
    });
  }
}
