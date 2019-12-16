import {Component, OnInit} from '@angular/core';
import {Metas} from '../../services/seo-head';
import {Router} from '@angular/router';
import {PageService} from '../../services/page/page.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss'],
})
export class LearnComponent implements OnInit {

  constructor(
    private readonly pageService: PageService,
    private readonly router: Router,
  ) {
    pageService.layout();
  }

  ngOnInit() {
    this.pageService.metas(
      new Metas(
        `Formations`,
        `Formations`,
        'Apprendre à developper des applications web dans des technologies modernes',
        'clapette',
        this.router.url,
      ),
    );
  }

}
