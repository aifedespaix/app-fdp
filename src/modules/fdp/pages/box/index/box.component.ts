import {AuthService} from '../../user/auth/auth.service';
import {Component, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormDialogComponent} from '../form/index/form-dialog.component';
import {Meta, Title} from '@angular/platform-browser';
import {ListComponent} from '../list/index/list.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  @ViewChild(ListComponent) listComponent: ListComponent;

  constructor(private authService: AuthService,
              public addBoxDialog: MatDialog,
              private title: Title,
              private meta: Meta) {
    this.title.setTitle('Box - aifedespaix');
    this.meta.updateTag({
      name: 'description',
      content: `aifedesbox : Tu cliques, t'écoutes, ça fait du bruit, t'es content(e). Poste tes propres Boxs si t'es chaud(e) enculé(e) salbatard xdlol !`,
    });
    this.meta.updateTag({name: 'keywords', content: `box, sound, soundbox, écoute, clic, sons, phrase, drôle, film`});
  }

  public isLoged() {
    return this.authService.isLoged;
  }

  public openAddBoxDialog(): void {
    this.addBoxDialog.open(FormDialogComponent, {})
      .afterClosed()
      .subscribe(box => {
        if (box) {
          this.listComponent.boxes.unshift(box);
        }
      });
  }

  public askFilter(filter: string) {
    this.listComponent.filter = filter;
    this.listComponent.resetList();
  }
}
