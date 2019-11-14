import { Component, OnInit } from '@angular/core';
import {Metas} from '../../seo/head';
import {HeadService} from '../../seo/head.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  constructor(
    private readonly headService: HeadService,
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
