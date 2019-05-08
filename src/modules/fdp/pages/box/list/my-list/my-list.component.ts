import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource, MatSort} from '@angular/material';

import {Box} from '../../box';
import {BoxService} from '../../box.service';
import {ConfirmDeleteDialogComponent} from '../../delete-dialog/delete-dialog.component';
import {EditDialogComponent} from '../../edit-dialog/edit-dialog.component';
import {SoundService} from '../../../../commun/sound/sound.service';
import {Apollo, QueryRef} from 'apollo-angular';
import {myBoxesQuery} from '../../_queries/myBoxes';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-box-my-list',
  templateUrl: './my-list.component.html',
})
export class MyListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;

  public displayedColumns: string[];
  public length = 100;
  public pageSize = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];

  public boxesDataSource: MatTableDataSource<Box>;
  private myBoxesRef: QueryRef<{ myBoxes: Box[]; }>;

  constructor(
    private boxService: BoxService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private soundService: SoundService,
    private readonly apollo: Apollo,
  ) {
    this.boxesDataSource = null;
    this.displayedColumns = ['iconPlay', 'title', 'description', 'actions'];
    this.boxesDataSource = new MatTableDataSource();
  }

  // ngOnDestroy() { todo met sa lol https://www.apollographql.com/docs/angular/basics/queries.html
  //   this.querySubscription.unsubscribe();
  // }

  ngAfterViewInit() {
    this.configPaginator();
    this.boxesDataSource.paginator = this.paginator;
    this.boxesDataSource.sort = this.sort;

    this.myBoxesRef = this.apollo.watchQuery<{ myBoxes: Box[]; }>({query: myBoxesQuery});
    this.myBoxesRef.valueChanges.pipe(
      map(result => {
        console.log(result.data.myBoxes);
        this.boxesDataSource.data = result.data.myBoxes;
        console.log(this.boxesDataSource.data);
        return result.data.myBoxes;
      })
    );
    this.myBoxesRef.result().then((result) => {
      console.log(result);
      this.boxesDataSource.data = result.data.myBoxes;
    });
  }

  public deleteBox(id) {
    this.boxService.delete(id).subscribe(
      () => {
        this.snackBar.open(`La box a bien été supprimé.`, 'osef', {duration: 1500});
      },
      (error) => {
        this.snackBar.open(`Suppression impossible.`, 'dommage', {duration: 1500});
      },
    );
  }

  public playBox(box) {
    this.soundService.load(box.sound, box.name);
    this.soundService.play();
  }

  public confirmDelete(id) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      height: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBox(id);
      }
    });
  }

  public edit(box) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      height: '350px',
      data: {box},
    });
    dialogRef.afterClosed().subscribe(success => {
      if (success) {
        this.snackBar.open('La box a bien été mise à jour.', 'osef', {
          duration: 1500,
        });
      } else {
        this.snackBar.open(`La box n'a pas été mise à jour.`, 'dommage', {
          duration: 1500,
        });
      }
    });
  }

  public applyFilter(filterValue: string) {
    this.boxesDataSource.filter = filterValue.trim().toLowerCase();
  }

  private configPaginator() {
    this.paginator._intl.itemsPerPageLabel = 'Sound Box par page';
    this.paginator._intl.nextPageLabel = 'Page suivante';
    this.paginator._intl.previousPageLabel = 'Page précédente';
    this.paginator._intl.firstPageLabel = 'Première page';
    this.paginator._intl.lastPageLabel = 'Dernière page';
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      return `${page + 1} - ${page + pageSize + 1} sur ${length}`;
    };
  }
}
