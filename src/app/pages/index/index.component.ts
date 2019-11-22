import {Component, OnInit} from '@angular/core';
import {SeoHeadService} from '../../seo/seo-head/seo-head.service';
import {Metas} from '../../seo/seo-head/seo-head';
import {Router} from '@angular/router';
import {PictureType} from '../../model/_generated/graphql.schema';
import {AuthService} from '../../auth/auth.service';
import {PictureLibraryService} from '../../components/picture-library/picture-library.service';
import {PictureModelService} from '../../model/picture/picture-model.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  public pictures: PictureType[];

  constructor(
    private readonly headService: SeoHeadService,
    private readonly router: Router,
    public readonly auth: AuthService, // todo remove
    public readonly pictureLibraryService: PictureLibraryService, // todo remove
    private readonly pictureModelService: PictureModelService, // todo remove
  ) {
    this.test();
  }

  test() {
    const a = this.pictureModelService
      .myPictures()
      .subscribe((pictures) => {
        this.pictures = pictures;
        a.unsubscribe();
      });
  }

  reset() {
    this.pictures = [];
  }

  ngOnInit() {
    this.headService.setHead(
      new Metas(
        `Page d'accueil`,
        `Accueil`,
        'Bienvenue sur aifedespaix.com, le site des fdp.',
        'clapette',
        this.router.url,
      ),
    );
  }

}
