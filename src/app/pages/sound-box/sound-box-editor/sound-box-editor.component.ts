import {Component, OnInit} from '@angular/core';
import {BoxType} from '../../../model/_generated/graphql.schema';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page/page.service';
import {Metas} from '../../../services/seo-head';
import {BoxModelService} from '../../../model/box/box-model.service';
import {SnackService} from '../../../services/snack/snack.service';
import {ComponentCanDeactivate} from '../../../guards/pending-changes.guard';

@Component({
  templateUrl: './sound-box-editor.component.html',
  styleUrls: ['./sound-box-editor.component.scss'],
})
export class SoundBoxEditorComponent implements OnInit, ComponentCanDeactivate {

  public box: BoxType;
  public isSaved = false;

  constructor(
    public readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly pageService: PageService,
    private readonly snackService: SnackService,
    private readonly boxModelService: BoxModelService,
  ) {
    this.box = new BoxType();
    pageService.layout();
  }

  canDeactivate(): boolean {
    return this.isSaved;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadBox(id);
    }
    this.setMetas();
  }

  private setMetas() {
    this.pageService.metas(
      new Metas(
        'Box Editor',
        'Création et édition de box',
        `Une nouvelle box grave stylée`,
        'clapette',
        this.router.url,
      ),
    );
  }

  private loadBox(id: string) {
    const sub = this.boxModelService
      .box(id)
      .subscribe(
        (box) => {
          this.box = box;
          sub.unsubscribe();
        },
        () => {
          this.box.id = null;
          this.snackService.error(`Vous n'avez pas le droit d'éditer cette box : vous éditez une nouvelle Box.`);
        },
      );
  }
}
