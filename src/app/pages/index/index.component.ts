import {Component, OnInit} from '@angular/core';
import {HeadService} from '../../seo/head.service';
import {Metas} from '../../seo/head';
import {Router} from '@angular/router';
import {PictureType} from '../../model/graphql.schema';
import {getPictureMock} from '../../model/picture/tests/picture.mocks';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  public picture: PictureType;

  constructor(
    private readonly headService: HeadService,
    private readonly router: Router,
  ) {
    this.picture = getPictureMock();
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
