import { Component, OnInit } from '@angular/core';
import {Metas} from '../../services/seo-head';
import {SeoHeadService} from '../../services/seo-head.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  constructor(
    private readonly headService: SeoHeadService,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.headService.setHead(
      new Metas(
        `Cours`,
        `Cours`,
        'Apprendre à developper des applications web dans des technologies modernes',
        'clapette',
        this.router.url,
      ),
    );
  }

}
