import {Component, OnInit} from '@angular/core';
import {ArticleType, BoxType} from '../../../model/_generated/graphql.schema';
import {ArticleModelService} from '../../../model/article/article-model.service';
import {PageService} from '../../../services/page/page.service';
import {Metas} from '../../../services/seo-head';
import {Router} from '@angular/router';
import {BoxModelService} from '../../../model/box/box-model.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.scss'],
})
export class AdminIndexComponent implements OnInit {

  public articles: ArticleType[];
  public boxes: BoxType[];

  constructor(
    private readonly router: Router,
    private readonly pageService: PageService,
    private readonly articleModelService: ArticleModelService,
    private readonly boxModelService: BoxModelService,
  ) {
    this.pageService.layout(false);
  }

  ngOnInit() {
    this.articleModelService
      .articles({}, null)
      .subscribe((articles) => {
        this.articles = articles;
      });
    this.boxModelService
      .boxes({})
      .subscribe((boxes) => {
        this.boxes = boxes;
      });
    this.setMetas();
  }

  private setMetas() {
    this.pageService.metas(
      new Metas(
        'Administration',
        'Administration',
        `T'es l'admin, tu peux faire ce que tu veux ici mdr`,
        'clapette',
        this.router.url,
      ),
    );
  }

}
