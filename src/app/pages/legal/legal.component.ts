import {Component, OnInit} from '@angular/core';
import {PageService} from '../../services/page/page.service';
import {Metas} from '../../services/seo-head';
import {Router} from '@angular/router';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
})
export class LegalComponent implements OnInit {

  constructor(
    private readonly pageService: PageService,
    private readonly router: Router,
  ) {
    pageService.layout();
  }

  ngOnInit() {
    this.pageService.metas(
      new Metas(
        'Mentions Légales',
        'Légal',
        `Toutes les informations légales en rapport avec le site web aifedespaix.com`,
        'clapette',
        this.router.url,
      ),
    );
  }

}
