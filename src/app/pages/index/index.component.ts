import {Component, OnInit} from '@angular/core';
import {SeoHeadService} from '../../seo/seo-head/seo-head.service';
import {Metas} from '../../seo/seo-head/seo-head';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  constructor(
    private readonly headService: SeoHeadService,
    private readonly router: Router,
  ) {
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
