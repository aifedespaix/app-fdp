import {Component, Inject, OnInit, Optional} from '@angular/core';
import {RESPONSE} from '@nguniversal/express-engine/tokens';
import {Response} from 'express';
import {Metas} from '../../services/seo-head';
import {Router} from '@angular/router';
import {PageService} from '../../services/page/page.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {

  constructor(
    @Optional() @Inject(RESPONSE) private readonly response: Response,
    private readonly pageService: PageService,
    private readonly router: Router,
  ) {
    this.pageService.layout();
  }

  ngOnInit() {
    if (this.response) {
      this.response.status(404);
    }
    this.pageService.metas(
      new Metas(
        `404 not found`,
        `Erreur 404`,
        '',
        'clapette',
        this.router.url,
      ),
    );
  }

}
