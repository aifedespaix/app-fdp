import {Component, Inject, OnInit, Optional} from '@angular/core';
import {RESPONSE} from '@nguniversal/express-engine/tokens';
import {Response} from 'express';
import {Metas} from '../../services/seo-head';
import {SeoHeadService} from '../../services/seo-head.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {

  constructor(
    @Optional() @Inject(RESPONSE) private readonly response: Response,
    private readonly seoHeadService: SeoHeadService,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    if (this.response) {
      this.response.status(404);
    }
    this.seoHeadService.setHead(
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
